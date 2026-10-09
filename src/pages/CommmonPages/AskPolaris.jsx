import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../../Components/PolarScence.jsx';

// SAMPLE knowledge base. Replace with real reports; only the Southern Ocean 2006 report is a real record.
const KB = [
	{ keys: ['glacier', 'himalaya', 'melting', 'retreat'], scope: ['all', 'himalaya'], conf: 'Medium', imgs: ['glacier', 'ice'], loc: '/regions/himalaya',
		text: 'Many Himalayan glaciers have been losing ice in recent decades [1]. Meltwater feeds major rivers, so retreat affects water supply downstream [2]. Field surveys combine satellite images with on-ice measurements [1].',
		src: [[1, 'Sample: Himalayan glacier monitoring report', 12, 'Repeat surveys show a general pattern of retreat across monitored glaciers.'], [2, 'Sample: Cryosphere and water resources', 31, 'Glacier meltwater contributes seasonal flow to rivers across the region.']] },
	{ keys: ['southern ocean', '2006', 'expedition', 'voyage'], scope: ['all', 'southern'], conf: 'Medium', imgs: ['ship', 'ice', 'life'], loc: '/globe?exp=x01',
		text: 'The Southern Ocean Expedition 2006 is the one real report loaded in POLARIS [1]. It records ocean observations made during the voyage [1]. Other expeditions you see on the globe are sample data for now [2].',
		src: [[1, 'Southern Ocean Expedition 2006 report', 1, 'Official expedition report (full text is in the Repository).'], [2, 'POLARIS data notice', 1, 'All other expedition names, coordinates and findings are placeholders.']] },
	{ keys: ['krill', 'penguin', 'seal', 'wildlife', 'food web', 'life'], scope: ['all', 'southern'], conf: 'Medium', imgs: ['life', 'ship'], loc: '/regions/southern-ocean',
		text: 'Krill are small crustaceans at the base of the Southern Ocean food web [1]. Penguins, seals and whales depend on them, so changes in sea ice can ripple up the chain [2].',
		src: [[1, 'Sample: Krill survey leg report', 7, 'Krill density is a key indicator of Southern Ocean ecosystem health.'], [2, 'Sample: Polar food webs', 18, 'Sea-ice change influences krill, and in turn predators.']] },
	{ keys: ['ice core', 'drill', 'climate', 'past'], scope: ['all'], conf: 'High', imgs: ['ice', 'glacier'], loc: '/globe',
		text: 'Ice cores are long cylinders of ice drilled from glaciers and ice sheets [1]. Tiny trapped air bubbles preserve samples of the past atmosphere, which helps scientists reconstruct earlier climates [1].',
		src: [[1, 'Sample: Ice core primer', 4, 'Layers of snow compress to ice and trap air, forming a climate archive.']] },
	{ keys: ['himadri', 'bharati', 'maitri', 'station', 'arctic', 'antarctic'], scope: ['all'], conf: 'High', imgs: ['station', 'aurora', 'ice'], loc: '/stations/himadri',
		text: 'India runs research stations at both poles: Himadri in the Arctic at Ny-Alesund, Svalbard, and Bharati and Maitri in Antarctica [1]. Scientists use them as bases for year-round observations [1].',
		src: [[1, 'NCPOR: Polar research stations', 2, 'Himadri (Arctic), Bharati and Maitri (Antarctica).']] },
];
const PROMPTS = ['Why are Himalayan glaciers melting?', 'What is the Southern Ocean Expedition 2006?', 'Why does krill matter?', 'How do ice cores show past climate?', 'Which stations does India have at the poles?'];
const SCOPES = [['all', 'All repository'], ['southern', 'Southern Ocean Expedition 2006'], ['himalaya', 'Himalaya glaciers']];
const NOT_FOUND = 'I could not find this in the sources I have. Try rephrasing, change the scope, or browse the Repository.';
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
const ghost = `rounded-lg px-2.5 py-1 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 ${focus}`;

// Animated side image cards
const LEFT_CARDS = [
	{ kind: 'aurora', title: 'Polar lights', sub: 'Arctic skies' },
	{ kind: 'life', title: 'Polar wildlife', sub: 'Krill to penguins' },
];
const RIGHT_CARDS = [
	{ kind: 'ship', title: 'Expedition voyages', sub: 'Southern Ocean' },
	{ kind: 'station', title: 'Research stations', sub: 'Himadri, Bharati, Maitri' },
];

function FloatCard({ kind, title, sub, delay = 0 }) {
	return <div className="polaris-in group relative h-40 overflow-hidden rounded-card border border-neutral-200 shadow-card" style={{ animationDelay: `${delay}s` }}>
		<div className="polaris-float h-full w-full" style={{ animationDelay: `${delay + 0.6}s` }}>
			<div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-110">
				<Photo kind={kind} className="h-full w-full" />
			</div>
		</div>
		<div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3 pt-8 text-white transition-transform duration-300 group-hover:-translate-y-1">
			<p className="font-serif text-sm font-black leading-tight">{title}</p>
			<p className="text-xs text-white/80">{sub}</p>
		</div>
	</div>;
}

function Slider({ kinds }) {
	const [i, setI] = useState(0);
	const go = (d) => setI((n) => (n + d + kinds.length) % kinds.length);
	return <div className="relative mt-3 h-56 overflow-hidden rounded-card border border-neutral-200">
		<Photo key={kinds[i]} kind={kinds[i]} className="h-full w-full" />
		{kinds.length > 1 && <>
			<button type="button" onClick={() => go(-1)} aria-label="Previous image" className={`absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink ${focus}`}>‹</button>
			<button type="button" onClick={() => go(1)} aria-label="Next image" className={`absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink ${focus}`}>›</button>
			<span className="absolute bottom-2 right-2 rounded-full bg-ink/80 px-2 py-0.5 text-xs text-white">{i + 1}/{kinds.length}</span></>}
	</div>;
}

export default function AskPolaris() {
	const [msgs, setMsgs] = useState([]);
	const [input, setInput] = useState('');
	const [typing, setTyping] = useState(false);
	const [scope, setScope] = useState('all');
	const [lang, setLang] = useState('EN');
	const [active, setActive] = useState(null);
	const [src, setSrc] = useState(null);
	const [saved, setSaved] = useState([]);
	const [speaking, setSpeaking] = useState(null);
	const [mic, setMic] = useState(false);
	const [note, setNote] = useState('');
	const end = useRef(null);
	useEffect(() => { end.current?.scrollIntoView({ block: 'end', behavior: 'smooth' }); }, [msgs, typing]);
	useEffect(() => () => { try { speechSynthesis.cancel(); } catch { /* unsupported */ } }, []);

	const find = (q) => { const s = q.toLowerCase(); let best = null, top = 0;
		KB.filter((e) => e.scope.includes(scope)).forEach((e) => { const n = e.keys.filter((k) => s.includes(k)).length; if (n > top) { top = n; best = e; } }); return best; };
	function ask(q) {
		q = q.trim(); if (!q || typing) return;
		const id = Date.now(); setMsgs((m) => [...m, { id, role: 'user', text: q }]); setInput(''); setTyping(true); setNote('');
		setTimeout(() => { const hit = find(q); setMsgs((m) => [...m, { id: id + 1, role: 'bot', text: hit ? hit.text : NOT_FOUND, entry: hit, vote: 0 }]); setActive(id + 1); setSrc(null); setTyping(false); }, 900);
	}
	const voice = () => {
		const R = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (!R) { setNote('Voice input is not supported in this browser.'); return; }
		const r = new R(); r.lang = lang === 'HI' ? 'hi-IN' : 'en-IN'; r.onresult = (e) => ask(e.results[0][0].transcript); r.onend = () => setMic(false); r.onerror = () => setMic(false); setMic(true); r.start();
	};
	const speak = (m) => {
		if (!('speechSynthesis' in window)) { setNote('Read-aloud is not supported in this browser.'); return; }
		speechSynthesis.cancel(); if (speaking === m.id) { setSpeaking(null); return; }
		const u = new SpeechSynthesisUtterance(m.text.replace(/\[\d\]/g, '')); u.lang = lang === 'HI' ? 'hi-IN' : 'en-IN'; u.onend = () => setSpeaking(null); setSpeaking(m.id); speechSynthesis.speak(u);
	};
	const copy = async (t, msg = 'Copied') => { try { await navigator.clipboard.writeText(t.replace(/\[\d\]/g, '')); setNote(msg); } catch { setNote('Copy blocked by the browser.'); } setTimeout(() => setNote(''), 1800); };
	const vote = (id, v) => setMsgs((m) => m.map((x) => (x.id === id ? { ...x, vote: x.vote === v ? 0 : v } : x)));
	const toggleSave = (id) => setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
	const reset = () => { speechSynthesis?.cancel?.(); setMsgs([]); setActive(null); setSrc(null); setSpeaking(null); };
	const activeMsg = msgs.find((m) => m.id === active);
	const cite = (t) => t.split(/(\[\d\])/).map((p, i) => { const m = p.match(/\[(\d)\]/); return m ? <button key={i} type="button" onClick={() => { setActive(activeMsg?.id ?? active); setSrc(+m[1]); }} aria-label={`Source ${m[1]}`} className={`mx-0.5 inline-grid h-5 w-5 -translate-y-0.5 place-items-center rounded-full bg-ink text-[11px] font-bold text-white hover:bg-neutral-700 ${focus}`}>{m[1]}</button> : p; });
	const sources = activeMsg?.entry?.src || [];

	return (
		<div className="mx-auto grid max-w-[1680px] gap-6 px-6 py-8 lg:grid-cols-[240px_minmax(0,1fr)_300px]">
			{/* Local keyframes for the animated image cards */}
			<style>{`
				@keyframes polarisIn { from { opacity: 0; transform: translateY(24px) scale(.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
				@keyframes polarisFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
				.polaris-in { opacity: 0; animation: polarisIn .7s ease-out forwards; }
				.polaris-float { animation: polarisFloat 5s ease-in-out infinite; }
				@media (prefers-reduced-motion: reduce) { .polaris-in { opacity: 1; animation: none; } .polaris-float { animation: none; } }
			`}</style>

			{/* Left: scope, history, saved + image cards */}
			<div className="space-y-5 lg:self-start">
				<aside className="space-y-5 rounded-card border border-neutral-200 bg-neutral-100 p-5">
					<button type="button" onClick={reset} className={`w-full rounded-lg bg-ink px-4 py-2.5 font-semibold text-white hover:bg-neutral-900 ${focus}`}>+ New chat</button>
					<div><label htmlFor="scope" className="text-sm font-semibold text-ink">Search scope</label>
						<select id="scope" value={scope} onChange={(e) => setScope(e.target.value)} className={`mt-1 w-full rounded-lg border border-neutral-300 bg-white px-2 py-2 text-sm ${focus}`}>{SCOPES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
					<div><h2 className="text-sm font-semibold text-ink">Recent questions</h2>
						<ul className="mt-2 space-y-1 text-sm">{msgs.filter((m) => m.role === 'user').slice(-5).reverse().map((m) => <li key={m.id}><button type="button" onClick={() => ask(m.text)} className={`w-full truncate rounded px-2 py-1 text-left text-neutral-700 hover:bg-white ${focus}`}>{m.text}</button></li>)}
							{!msgs.length && <li className="text-neutral-500">Nothing yet.</li>}</ul></div>
					<div><h2 className="text-sm font-semibold text-ink">Saved answers</h2>
						<ul className="mt-2 space-y-1 text-sm">{saved.map((id) => { const m = msgs.find((x) => x.id === id); return m && <li key={id}><button type="button" onClick={() => { setActive(id); setSrc(null); }} className={`w-full truncate rounded px-2 py-1 text-left text-neutral-700 hover:bg-white ${focus}`}>{m.text.replace(/\[\d\]/g, '').slice(0, 40)}...</button></li>; })}
							{!saved.length && <li className="text-neutral-500">Tap the bookmark on an answer.</li>}</ul></div>
				</aside>
				<div className="hidden space-y-4 lg:block" aria-hidden="true">
					{LEFT_CARDS.map((c, n) => <FloatCard key={c.kind} {...c} delay={0.15 + n * 0.25} />)}
				</div>
			</div>

			{/* Centre: chat (bigger) */}
			<section aria-label="Chat" className="flex h-[88vh] min-h-[680px] flex-col overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card">
				<div className="flex items-center justify-between bg-ink px-6 py-4 text-white">
					<div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink"><svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor"><path d="m16 1 3.4 10.1L30 8l-6.9 8 6.9 8-10.6-3.1L16 31l-3.4-10.1L2 24l6.9-8L2 8l10.6 3.1L16 1Z" /></svg></span>
						<div><h1 className="font-serif text-xl font-black leading-tight">Ask POLARIS</h1><p className="flex items-center gap-1.5 text-xs text-white/75"><span className="h-2 w-2 rounded-full bg-aurora" />Source-linked assistant</p></div></div>
					<div><label htmlFor="lang" className="sr-only">Language</label><select id="lang" value={lang} onChange={(e) => setLang(e.target.value)} className="rounded border border-white/30 bg-ink px-2 py-1 text-xs"><option value="EN">English</option><option value="HI">हिन्दी (voice)</option></select></div>
				</div>
				<div className="flex-1 space-y-6 overflow-y-auto bg-neutral-50 p-6" aria-live="polite">
					{!msgs.length && <div className="mx-auto max-w-xl py-4 text-center">
						<div className="mx-auto grid max-w-md grid-cols-3 gap-3">{['ice', 'aurora', 'life'].map((k, n) => <div key={k} className={`h-28 overflow-hidden rounded-card border border-neutral-200 shadow-card ${n === 1 ? 'mt-4' : ''}`}><Photo kind={k} className="h-full w-full" /></div>)}</div>
						<h2 className="mt-6 font-serif text-2xl font-black text-ink">What would you like to know about the poles?</h2>
						<p className="mt-2 text-neutral-600">Ask in your own words. Every answer links to its source.</p>
						<div className="mt-5 flex flex-wrap justify-center gap-2">{PROMPTS.map((p) => <button key={p} type="button" onClick={() => ask(p)} className={`rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-ink hover:border-ink ${focus}`}>{p}</button>)}</div></div>}
					{msgs.map((m) => m.role === 'user'
						? <div key={m.id} className="flex justify-end"><p className="max-w-[80%] rounded-2xl rounded-br-sm bg-ink px-4 py-2.5 text-white">{m.text}</p></div>
						: <div key={m.id} className="flex gap-3"><span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">P</span>
							<div className={`max-w-[88%] rounded-2xl rounded-tl-sm border bg-white p-4 shadow-card ${active === m.id ? 'border-ink' : 'border-neutral-200'}`}>
								{m.entry && <div className="mb-2 flex flex-wrap gap-1.5 text-xs font-semibold"><span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">AI-drafted</span><span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-700">Source-linked</span><span className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700">Sample data</span></div>}
								<p className="leading-relaxed text-neutral-800">{cite(m.text)}</p>
								{m.entry && <Slider kinds={m.entry.imgs} />}
								{m.entry && <div className="mt-3 flex items-center gap-2 text-xs text-neutral-600"><span>Confidence: <strong className="text-ink">{m.entry.conf}</strong></span><span className="h-1.5 w-20 overflow-hidden rounded-full bg-neutral-200"><span className="block h-full bg-ink" style={{ width: m.entry.conf === 'High' ? '90%' : '60%' }} /></span><Link to={m.entry.loc} className={`ml-auto font-semibold text-ink underline underline-offset-4 ${focus}`}>Show on globe</Link></div>}
								<div className="mt-3 flex flex-wrap items-center gap-1 border-t border-neutral-200 pt-2">
									<button type="button" onClick={() => speak(m)} aria-pressed={speaking === m.id} className={ghost}>{speaking === m.id ? 'Stop' : 'Listen'}</button>
									<button type="button" onClick={() => copy(m.text)} className={ghost}>Copy</button>
									<button type="button" onClick={() => copy(`${location.origin}/ask`, 'Link copied')} className={ghost}>Share</button>
									<button type="button" onClick={() => toggleSave(m.id)} aria-pressed={saved.includes(m.id)} className={ghost}>{saved.includes(m.id) ? 'Saved' : 'Save'}</button>
									<span className="ml-auto flex"><button type="button" onClick={() => vote(m.id, 1)} aria-pressed={m.vote === 1} aria-label="Helpful" className={`${ghost} ${m.vote === 1 ? 'bg-neutral-200' : ''}`}>👍</button><button type="button" onClick={() => vote(m.id, -1)} aria-pressed={m.vote === -1} aria-label="Not helpful" className={`${ghost} ${m.vote === -1 ? 'bg-neutral-200' : ''}`}>👎</button></span>
								</div></div></div>)}
					{typing && <div className="flex gap-3" role="status" aria-label="POLARIS is typing"><span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-white">P</span><div className="flex items-center gap-1.5 rounded-2xl border border-neutral-200 bg-white px-4 py-3">{[0, 1, 2].map((n) => <span key={n} style={{ animationDelay: `${n * 0.15}s` }} className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 motion-reduce:animate-none" />)}</div></div>}
					<div ref={end} />
				</div>
				<form onSubmit={(e) => { e.preventDefault(); ask(input); }} className="border-t border-neutral-200 bg-white p-4">
					<div className="flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-2 focus-within:border-ink">
						<label htmlFor="q" className="sr-only">Your question</label>
						<input id="q" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about glaciers, expeditions, stations..." className="w-full bg-transparent py-1.5 outline-none" />
						<button type="button" onClick={voice} aria-label="Ask by voice" aria-pressed={mic} className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${mic ? 'animate-pulse bg-danger text-white' : 'text-ink hover:bg-neutral-100'} ${focus}`}>🎤</button>
						<button type="submit" disabled={!input.trim() || typing} className={`rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white hover:bg-neutral-900 disabled:opacity-40 ${focus}`}>Send</button>
					</div>
					<p className="mt-2 text-center text-xs text-neutral-500" aria-live="polite">{note || 'AI answers are source-linked. Verify with the original report.'}</p>
				</form>
			</section>

			{/* Right: sources + image cards */}
			<aside className="space-y-4 lg:self-start" aria-label="Sources used">
				<div className="rounded-card border border-neutral-200 bg-white p-5 shadow-card">
					<h2 className="font-serif text-lg font-black text-ink">Sources used</h2>
					{sources.length ? <ul className="mt-3 space-y-2">{sources.map(([n, t, pg, ex]) => (
						<li key={n}><button type="button" onClick={() => setSrc(n)} aria-expanded={src === n} className={`w-full rounded-lg border p-3 text-left text-sm ${src === n ? 'border-ink bg-neutral-100' : 'border-neutral-200 hover:border-ink'} ${focus}`}>
							<span className="font-semibold text-ink">[{n}] {t}</span><span className="block text-xs text-neutral-500">Page {pg}</span>
							{src === n && <span className="mt-2 block rounded bg-white p-2 italic text-neutral-700">{ex}</span>}</button></li>))}</ul>
						: <p className="mt-2 text-sm text-neutral-600">Ask a question, then tap a numbered citation to see the exact source.</p>}
				</div>
				<div className="overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card"><div className="h-32"><Photo kind="glacier" className="h-full w-full" /></div>
					<div className="p-4 text-sm text-neutral-600"><p>Want to read the full reports?</p><Link to="/repository" className="mt-1 inline-block font-semibold text-ink underline underline-offset-4">Open the Repository</Link></div></div>
				<div className="hidden space-y-4 lg:block" aria-hidden="true">
					{RIGHT_CARDS.map((c, n) => <FloatCard key={c.kind} {...c} delay={0.3 + n * 0.25} />)}
				</div>
			</aside>
		</div>
	);
}
