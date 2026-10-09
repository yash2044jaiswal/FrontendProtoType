import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Scene from './PolarScence.jsx';
import Reveal from './Reveal.jsx';

// Collage layout: exactly 3 cols x 3 rows, explicitly placed (no auto-placement holes).
// [north-pole station] [ice core] [aurora]
// [north-pole cont.]  [vessel]   [south-pole station]
// [penguins -------- wide --------][south-pole cont.]
const TILES = [
	{ kind: 'arctic-station',    cls: 'col-start-1 row-start-1 row-span-2' },
	{ kind: 'ice-core',          cls: 'col-start-2 row-start-1' },
	{ kind: 'aurora',            cls: 'col-start-3 row-start-1' },
	{ kind: 'vessel',            cls: 'col-start-2 row-start-2' },
	{ kind: 'antarctic-station', cls: 'col-start-3 row-start-2 row-span-2' },
	{ kind: 'penguins',          cls: 'col-start-1 col-span-2 row-start-3' },
];

const COPY = {
	EN: { tag: 'About POLARIS', title: 'Polar science, open to everyone',
		p1: 'POLARIS brings the work of NCPOR, under the Ministry of Earth Sciences, into one place: expedition reports, datasets, photos and stories from the Arctic, Antarctic, Southern Ocean and Himalaya.',
		p2: 'Every summary links back to its source report, and nothing is published until a scientist has reviewed it. Curious about something? Ask the AI, and any question it cannot answer goes straight to a scientist.' },
	HI: { tag: 'POLARIS के बारे में', title: 'ध्रुवीय विज्ञान, सबके लिए',
		p1: 'POLARIS पृथ्वी विज्ञान मंत्रालय के अंतर्गत NCPOR का काम एक जगह लाता है: आर्कटिक, अंटार्कटिक, दक्षिणी महासागर और हिमालय की अभियान रिपोर्टें, डेटा, तस्वीरें और कहानियाँ।',
		p2: 'हर सारांश अपनी मूल रिपोर्ट से जुड़ा है, और वैज्ञानिक की समीक्षा के बिना कुछ भी प्रकाशित नहीं होता। कोई जिज्ञासा है? AI से पूछें, और जो सवाल वह नहीं सुलझा पाए वह सीधे वैज्ञानिक तक पहुँचता है।' },
};

const FACTS = [
	'Antarctica holds about 90% of the world\'s ice.',
	'Air bubbles in some Antarctic ice cores are over 800,000 years old.',
	'The Himalaya are called the Third Pole because of their vast ice.',
	'India has research stations at both poles: Himadri, Bharati and Maitri.',
];

const TOPICS = [['Ice cores', 'ice-cores'], ['Krill and penguins', 'southern-ocean-life'], ['Himalayan glaciers', 'himalayan-glaciers'], ['Arctic life', 'arctic-ecosystems']];

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';

export default function AboutSection() {
	const [lang, setLang] = useState('EN');
	const [speaking, setSpeaking] = useState(false);
	const [fact, setFact] = useState(0);
	const [liked, setLiked] = useState(false);
	const [note, setNote] = useState('');
	const c = COPY[lang];

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const t = setInterval(() => setFact((n) => (n + 1) % FACTS.length), 5000);
		return () => clearInterval(t);
	}, []);

	const stop = () => { try { speechSynthesis.cancel(); } catch { /* unsupported */ } setSpeaking(false); };
	useEffect(() => stop, []);

	const listen = () => {
		if (!('speechSynthesis' in window)) { setNote('Read-aloud is not supported in this browser.'); return; }
		if (speaking) { stop(); return; }
		const u = new SpeechSynthesisUtterance(`${c.title}. ${c.p1} ${c.p2}`);
		u.lang = lang === 'HI' ? 'hi-IN' : 'en-IN';
		u.onend = () => setSpeaking(false);
		setSpeaking(true);
		speechSynthesis.speak(u);
	};

	return (
		<section aria-labelledby="about-title" className="mt-10 grid gap-8 rounded-card border border-neutral-200 bg-neutral-100 p-6 md:p-8 lg:grid-cols-[1.1fr_1fr]">
			<style>{`
				@keyframes aboutFact { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
				.about-fact { animation: aboutFact .5s ease-out; }
				@media (prefers-reduced-motion: reduce) { .about-fact { animation: none; } }
			`}</style>

			<div className="flex flex-col gap-5">
				<div className="grid flex-1 auto-rows-[100px] grid-cols-3 gap-3 md:auto-rows-[120px]">
					{TILES.map(({ kind, cls }, n) => (
						<div
							key={kind}
							style={{ animationDelay: `${n * 0.5}s` }}
							className={`group animate-float overflow-hidden rounded-card border border-neutral-200 shadow-card motion-reduce:animate-none ${cls}`}
						>
							<div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
								<Scene kind={kind} className="h-full w-full" />
							</div>
						</div>
					))}
				</div>

				<div key={fact} className="about-fact rounded-card border border-neutral-200 bg-white p-4 text-sm text-neutral-800 shadow-card" aria-live="off">
					<strong className="text-ink">Did you know?</strong> {FACTS[fact]}
				</div>

				<Link to="/repository" className={`block rounded-lg bg-ink px-6 py-3 text-center font-semibold text-white hover:bg-neutral-900 ${focus}`}>
					Explore research
				</Link>
			</div>

			<Reveal className="flex flex-col justify-center rounded-card border border-neutral-200 bg-white p-8 shadow-card">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">{c.tag}</p>
					<div className="flex items-center gap-2">
						<label htmlFor="about-lang" className="sr-only">Language</label>
						<select
							id="about-lang"
							value={lang}
							onChange={(e) => { stop(); setLang(e.target.value); }}
							className={`rounded-lg border border-neutral-300 bg-white px-2 py-1 text-sm ${focus}`}
						>
							<option value="EN">English</option>
							<option value="HI">हिन्दी</option>
						</select>
						<button
							type="button"
							onClick={listen}
							aria-pressed={speaking}
							className={`rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-white hover:bg-neutral-800 ${focus}`}
						>
							{speaking ? '⏹ Stop' : '🔊 Listen'}
						</button>
					</div>
				</div>

				<h2 id="about-title" className="mt-2 font-serif text-3xl font-black text-ink">{c.title}</h2>
				<p className="mt-4 text-neutral-600">{c.p1}</p>
				<p className="mt-3 text-neutral-600">{c.p2}</p>

				<ul className="mt-5 flex flex-wrap gap-2">
					{['Source-linked', 'Scientist reviewed', 'Listen in your language'].map((t) => (
						<li key={t} className="rounded-full border border-neutral-300 px-3 py-1 text-sm font-medium text-ink">{t}</li>
					))}
				</ul>

				<div className="mt-6 border-t border-neutral-200 pt-4">
					<p className="text-sm font-semibold text-ink">What are you curious about?</p>
					<div className="mt-2 flex flex-wrap gap-2">
						{TOPICS.map(([l, id]) => (
							<Link
								key={id}
								to={`/research/${id}`}
								className={`rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-neutral-100 ${focus}`}
							>
								{l} →
							</Link>
						))}
					</div>

					<div className="mt-4 flex flex-wrap items-center gap-3">
						<button
							type="button"
							onClick={() => setLiked((v) => !v)}
							aria-pressed={liked}
							className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-transform hover:scale-105 ${liked ? 'border-ink bg-ink text-white' : 'border-neutral-300 text-ink'} ${focus}`}
						>
							{liked ? '❤️ Thanks!' : '🤍 I love this'}
						</button>
						<Link to="/ask" className={`text-sm font-semibold text-ink underline underline-offset-4 ${focus}`}>
							Ask POLARIS AI a question
						</Link>
					</div>

					<p className="mt-2 text-xs text-neutral-500" aria-live="polite">{note}</p>
				</div>
			</Reveal>
		</section>
	);
}