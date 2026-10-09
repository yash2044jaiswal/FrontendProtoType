import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../../Components/Reveal.jsx';

const CATEGORIES = ['General question', 'Report a scientific error', 'Media and press', 'Schools and education', 'Data access request', 'Technical problem'];
const SCI_ERROR = CATEGORIES[1];
const RATINGS = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
const input = `w-full rounded-lg border bg-white px-3 py-2.5 text-neutral-900 placeholder:text-neutral-500 ${focus}`;
const EMPTY = { name: '', email: '', category: CATEGORIES[0], subject: '', message: '', where: '', correction: '', rating: 0, consent: false, file: null };

function Field({ id, label, error, children }) {
	return <div><label htmlFor={id} className="mb-1 block text-sm font-semibold text-ink">{label}</label>{children}
		{error && <p id={`${id}-err`} className="mt-1 text-sm text-danger" role="alert">{error}</p>}</div>;
}

export default function ContactPage() {
	const [f, setF] = useState(EMPTY);
	const [errors, setErrors] = useState({});
	const [ref, setRef] = useState(null);
	const [copied, setCopied] = useState(false);
	const [hover, setHover] = useState(0);
	const set = (k, v) => { setF((s) => ({ ...s, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); };
	const isSci = f.category === SCI_ERROR;

	function validate() {
		const e = {};
		if (f.name.trim().length < 2) e.name = 'Please enter your name.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address.';
		if (f.subject.trim().length < 3) e.subject = 'Add a short subject.';
		if (f.message.trim().length < 20) e.message = 'Please write at least 20 characters.';
		if (isSci && !f.where.trim()) e.where = 'Tell us which page or report has the error.';
		if (f.file && f.file.size > 5 * 1024 * 1024) e.file = 'File must be under 5 MB.';
		if (!f.consent) e.consent = 'Please agree so we can reply to you.';
		return e;
	}
	function submit(ev) {
		ev.preventDefault();
		const e = validate(); setErrors(e);
		if (Object.keys(e).length) { document.getElementById(`c-${Object.keys(e)[0]}`)?.focus(); return; }
		// API call goes here (POST /api/contact). Demo mode: just create a reference number.
		setRef(`POL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`);
		window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
	}
	const copy = async () => { try { await navigator.clipboard.writeText(ref); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* clipboard blocked */ } };
	const reportError = () => { set('category', SCI_ERROR); document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }); };

	return (
		<div>
			{/* Hero: pulsing signal rings */}
			<section className="relative overflow-hidden bg-ink text-white">
				<div aria-hidden="true" className="absolute -right-24 top-1/2 hidden -translate-y-1/2 lg:block">
					{[0, 1, 2].map((n) => <span key={n} style={{ animationDelay: `${n * 0.8}s` }} className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-white/25 motion-reduce:animate-none" />)}
					<span className="relative grid h-72 w-72 place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-white text-ink"><svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg></span></span>
				</div>
				<div className="relative mx-auto max-w-page px-6 py-16 lg:py-24">
					<p className="text-sm font-semibold uppercase tracking-widest text-white/70">Contact</p>
					<h1 className="mt-3 max-w-2xl font-serif text-4xl font-black md:text-5xl">Send a signal to the poles</h1>
					<p className="mt-5 max-w-xl text-lg text-white/85">Questions, feedback, a press request, or a mistake you spotted in our science? Tell us. Every message reaches the POLARIS team in Goa.</p>
				</div>
			</section>

			<div className="mx-auto grid max-w-page gap-8 px-6 py-14 lg:grid-cols-[1.4fr_1fr]">
				{/* Form or success */}
				<Reveal>
					{ref ? (
						<div className="rounded-card border border-neutral-200 bg-white p-10 text-center shadow-card" role="status">
							<span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink text-white"><svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 5 5 9-10" /></svg></span>
							<h2 className="mt-5 font-serif text-3xl font-black text-ink">Signal received</h2>
							<p className="mt-2 text-neutral-600">Thanks, {f.name.split(' ')[0]}. Keep this reference number for follow-ups.</p>
							<p className="mx-auto mt-5 w-fit rounded-lg border border-dashed border-neutral-400 bg-neutral-100 px-6 py-3 font-mono text-xl font-bold tracking-wider text-ink">{ref}</p>
							<div className="mt-6 flex flex-wrap justify-center gap-3">
								<button type="button" onClick={copy} className={`rounded-lg border border-ink px-5 py-2.5 font-semibold text-ink hover:bg-neutral-100 ${focus}`}>{copied ? 'Copied' : 'Copy reference'}</button>
								<button type="button" onClick={() => { setF(EMPTY); setRef(null); }} className={`rounded-lg bg-ink px-5 py-2.5 font-semibold text-white hover:bg-neutral-900 ${focus}`}>Send another message</button>
								<Link to="/" className={`rounded-lg px-5 py-2.5 font-semibold text-ink hover:bg-neutral-100 ${focus}`}>Back to home</Link>
							</div>
						</div>
					) : (
						<form id="contact-form" onSubmit={submit} noValidate className="space-y-6 rounded-card border border-neutral-200 bg-white p-6 shadow-card md:p-8">
							<fieldset>
								<legend className="mb-2 text-sm font-semibold text-ink">What is this about?</legend>
								<div className="flex flex-wrap gap-2">{CATEGORIES.map((c) => <button key={c} type="button" aria-pressed={f.category === c} onClick={() => set('category', c)}
									className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${f.category === c ? 'border-ink bg-ink text-white' : 'border-neutral-300 text-neutral-700 hover:border-ink'} ${focus}`}>{c}</button>)}</div>
							</fieldset>
							<div className="grid gap-5 sm:grid-cols-2">
								<Field id="c-name" label="Your name" error={errors.name}><input id="c-name" value={f.name} onChange={(e) => set('name', e.target.value)} aria-invalid={!!errors.name} className={`${input} ${errors.name ? 'border-danger' : 'border-neutral-300'}`} autoComplete="name" /></Field>
								<Field id="c-email" label="Email" error={errors.email}><input id="c-email" type="email" value={f.email} onChange={(e) => set('email', e.target.value)} aria-invalid={!!errors.email} className={`${input} ${errors.email ? 'border-danger' : 'border-neutral-300'}`} autoComplete="email" /></Field>
							</div>
							<Field id="c-subject" label="Subject" error={errors.subject}><input id="c-subject" value={f.subject} onChange={(e) => set('subject', e.target.value)} className={`${input} ${errors.subject ? 'border-danger' : 'border-neutral-300'}`} /></Field>
							{isSci && <div className="space-y-5 rounded-card border border-neutral-300 bg-neutral-100 p-5">
								<p className="text-sm font-semibold text-ink">Report a scientific error</p>
								<Field id="c-where" label="Page, report or expedition with the error" error={errors.where}><input id="c-where" value={f.where} onChange={(e) => set('where', e.target.value)} placeholder="e.g. /expeditions/x02 or Southern Ocean Expedition 2006, p. 14" className={`${input} ${errors.where ? 'border-danger' : 'border-neutral-300'}`} /></Field>
								<Field id="c-correction" label="Suggested correction and source (optional)"><textarea id="c-correction" rows={2} value={f.correction} onChange={(e) => set('correction', e.target.value)} className={`${input} border-neutral-300`} /></Field>
							</div>}
							<Field id="c-message" label="Message" error={errors.message}>
								<textarea id="c-message" rows={6} maxLength={1500} value={f.message} onChange={(e) => set('message', e.target.value)} aria-invalid={!!errors.message} className={`${input} ${errors.message ? 'border-danger' : 'border-neutral-300'}`} />
								<p className="mt-1 text-right text-xs text-neutral-500">{f.message.length}/1500</p>
							</Field>
							<Field id="c-file" label="Attachment (optional, max 5 MB)" error={errors.file}>
								<input id="c-file" type="file" accept=".pdf,.png,.jpg,.jpeg,.docx,.txt" onChange={(e) => set('file', e.target.files[0] || null)} className={`block w-full text-sm text-neutral-600 file:mr-4 file:rounded-lg file:border-0 file:bg-ink file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-neutral-900 ${focus}`} />
							</Field>
							<div>
								<p id="rate-label" className="mb-1 text-sm font-semibold text-ink">How is your experience with POLARIS? <span className="font-normal text-neutral-500">(optional)</span></p>
								<div role="radiogroup" aria-labelledby="rate-label" className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
									{RATINGS.map((r, n) => <button key={r} type="button" role="radio" aria-checked={f.rating === n + 1} aria-label={`${n + 1} star: ${r}`} onMouseEnter={() => setHover(n + 1)} onClick={() => set('rating', f.rating === n + 1 ? 0 : n + 1)} className={`text-3xl leading-none transition-transform hover:scale-110 ${(hover || f.rating) > n ? 'text-ink' : 'text-neutral-300'} ${focus}`}>★</button>)}
									<span className="ml-3 text-sm text-neutral-600" aria-live="polite">{RATINGS[(hover || f.rating) - 1] || ''}</span>
								</div>
							</div>
							<div>
								<label className="flex items-start gap-2 text-sm text-neutral-700"><input id="c-consent" type="checkbox" checked={f.consent} onChange={(e) => set('consent', e.target.checked)} className={`mt-1 accent-[#0B1F3A] ${focus}`} />I agree that NCPOR may use my details only to reply to this message.</label>
								{errors.consent && <p className="mt-1 text-sm text-danger" role="alert">{errors.consent}</p>}
							</div>
							<button type="submit" className={`w-full rounded-lg bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-900 sm:w-auto ${focus}`}>Send message</button>
						</form>
					)}
				</Reveal>

				{/* Side cards */}
				<div className="space-y-6">
					<Reveal delay={100}><div className="overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card">
						<iframe title="NCPOR location on OpenStreetMap" loading="lazy" className="h-56 w-full border-0" src="https://www.openstreetmap.org/export/embed.html?bbox=73.78%2C15.37%2C73.85%2C15.42&layer=mapnik&marker=15.3897%2C73.8139" />
						<div className="p-5">
							<h2 className="font-serif text-xl font-black text-ink">Visit NCPOR</h2>
							<address className="mt-2 not-italic text-neutral-600">National Centre for Polar and Ocean Research<br />Ministry of Earth Sciences<br />Headland Sada, Vasco-da-Gama, Goa 403804, India</address>
							<div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
								<a href="https://www.openstreetmap.org/?mlat=15.3897&mlon=73.8139#map=14/15.3897/73.8139" target="_blank" rel="noreferrer" className={`text-ink underline underline-offset-4 ${focus}`}>Open map</a>
								<a href="https://ncpor.res.in" target="_blank" rel="noreferrer" className={`text-ink underline underline-offset-4 ${focus}`}>NCPOR website</a>
							</div>
							<p className="mt-3 text-xs text-neutral-500">Map pin is approximate. Verify the address on the NCPOR website.</p>
						</div></div></Reveal>
					<Reveal delay={200}><div className="rounded-card border border-neutral-200 bg-neutral-100 p-6">
						<h2 className="font-serif text-xl font-black text-ink">Found a scientific error?</h2>
						<p className="mt-2 text-neutral-600">Accuracy matters. Tell us which page is wrong and, if you can, the right source. A scientist will check it.</p>
						<button type="button" onClick={reportError} className={`mt-4 rounded-lg bg-ink px-5 py-2.5 font-semibold text-white hover:bg-neutral-900 ${focus}`}>Report an error</button>
					</div></Reveal>
					<Reveal delay={300}><div className="rounded-card border border-neutral-200 bg-white p-6 shadow-card">
						<h2 className="font-serif text-xl font-black text-ink">Need a quick answer?</h2>
						<ul className="mt-3 space-y-2 text-neutral-700">
							<li><Link to="/ask" className="font-semibold text-ink underline underline-offset-4">Ask POLARIS</Link>: source-linked answers</li>
							<li><Link to="/about" className="font-semibold text-ink underline underline-offset-4">About POLARIS</Link>: how it works</li>
							<li><Link to="/press" className="font-semibold text-ink underline underline-offset-4">Press room</Link>: media resources</li>
						</ul>
					</div></Reveal>
				</div>
			</div>
		</div>
	);
}