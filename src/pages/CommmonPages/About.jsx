import { Link } from 'react-router-dom';
import Scene, { SCENE_KINDS } from '../../Components/PolarScence.jsx';
import Reveal from '../../Components/Reveal.jsx';

const PILLARS = [
	['Polar Science Outreach', 'Plain-language stories, explainers and learning material so students and the public can follow polar research.'],
	['Knowledge Repository', 'Search reports, papers and datasets. POLARIS links to NPDC and the Digital Library instead of copying them.'],
	['Media Dissemination Portal', 'Photos, clips and press resources prepared by the Communication Cell and ready to share.'],
];
const STEPS = [
	['Upload', 'Contributors add reports, photos and data, even offline.'],
	['AI Tag', 'Files are tagged with place, subject and alt-text.'],
	['AI Draft', 'A source-linked summary is drafted, with a confidence level.'],
	['Scientist Review', 'An NCPOR scientist checks accuracy and rights.'],
	['Publish', 'The Communication Cell publishes only approved items.'],
];
const TRUST = [
	['Source-linked', 'Each AI statement carries numbered links to the exact report page.'],
	['Human reviewed', 'AI drafts need scientist and editor approval before they go public.'],
	['Open about limits', 'Confidence levels and "Sample data" labels show what is verified.'],
	['Accessible', 'Read-aloud, text size, dyslexia-friendly font and multiple languages.'],
];

export default function AboutPage() {
	const strip = [...SCENE_KINDS, ...SCENE_KINDS];
	return (
		<div>
			{/* Hero */}
			<section className="bg-ink text-white">
				<div className="mx-auto grid max-w-page items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
					<Reveal>
						<p className="text-sm font-semibold uppercase tracking-widest text-white/70">About</p>
						<h1 className="mt-3 font-serif text-4xl font-black md:text-5xl">About POLARIS</h1>
						<p className="mt-5 max-w-xl text-lg text-white/85">The Polar Science Outreach, Knowledge Repository and Media Dissemination Portal of the National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences.</p>
						<div className="mt-7 flex flex-wrap gap-3">
							<Link to="/globe" className="rounded-lg bg-white px-5 py-2.5 font-semibold text-ink hover:bg-neutral-100">Explore the globe</Link>
							<Link to="/contact" className="rounded-lg border border-white/50 px-5 py-2.5 font-semibold hover:bg-white/10">Contact us</Link>
						</div>
					</Reveal>
					<div className="grid grid-cols-3 gap-3" aria-hidden={false}>
						{SCENE_KINDS.map((k, n) => (
							<div key={k} style={{ animationDelay: `${n * 0.4}s` }} className={`aspect-square animate-float overflow-hidden rounded-card border border-white/20 shadow-card motion-reduce:animate-none ${n % 2 ? 'mt-6' : ''}`}>
								<Scene kind={k} className="h-full w-full" />
							</div>))}
					</div>
				</div>
			</section>

			{/* Mission */}
			<section className="mx-auto max-w-page px-6 py-20">
				<Reveal><h2 className="font-serif text-3xl font-black text-ink">Our mission</h2>
					<p className="mt-4 max-w-3xl text-neutral-600">India's polar and Himalayan research is spread across reports, datasets and archives. POLARIS makes it easy to find, understand and trust, with a 3D globe where every expedition point opens images, a summary, coordinates and audio narration.</p></Reveal>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{PILLARS.map(([t, d], n) => (
						<Reveal key={t} delay={n * 120}><div className="h-full rounded-card border border-neutral-200 bg-white p-6 shadow-card">
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-ink font-bold text-white">{n + 1}</span>
							<h3 className="mt-4 font-serif text-xl font-black text-ink">{t}</h3><p className="mt-2 text-neutral-600">{d}</p></div></Reveal>))}
				</div>
			</section>

			{/* Scrolling image band */}
			<section aria-label="Polar scenes" className="overflow-hidden bg-neutral-100 py-10">
				<div className="flex w-max animate-marquee gap-4 motion-reduce:animate-none hover:[animation-play-state:paused]">
					{strip.map((k, n) => <div key={n} className="h-44 w-64 shrink-0 overflow-hidden rounded-card border border-neutral-200 shadow-card"><Scene kind={k} className="h-full w-full" /></div>)}
				</div>
			</section>

			{/* How it works */}
			<section className="mx-auto max-w-page px-6 py-20">
				<Reveal><h2 className="font-serif text-3xl font-black text-ink">How POLARIS works</h2></Reveal>
				<ol className="mt-10 grid gap-6 md:grid-cols-5">
					{STEPS.map(([t, d], n) => (
						<Reveal key={t} delay={n * 150}><li className="relative h-full rounded-card border border-neutral-200 bg-white p-5 shadow-card">
							<span className="font-serif text-3xl font-black text-neutral-300">0{n + 1}</span>
							<h3 className="mt-2 font-semibold text-ink">{t}</h3><p className="mt-1 text-sm text-neutral-600">{d}</p></li></Reveal>))}
				</ol>
			</section>

			{/* Trust */}
			<section className="bg-neutral-100 py-20"><div className="mx-auto max-w-page px-6">
				<Reveal><h2 className="font-serif text-3xl font-black text-ink">Why you can trust it</h2></Reveal>
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{TRUST.map(([t, d], n) => <Reveal key={t} delay={n * 100}><div className="h-full rounded-card border border-neutral-200 bg-white p-6"><h3 className="font-semibold text-ink">{t}</h3><p className="mt-2 text-sm text-neutral-600">{d}</p></div></Reveal>)}
				</div>
			</div></section>

			{/* Partners, notice, CTA */}
			<section className="mx-auto max-w-page px-6 py-20">
				<Reveal>
					<h2 className="font-serif text-3xl font-black text-ink">Partners and sources</h2>
					<ul className="mt-5 flex flex-wrap gap-3">{['NCPOR', 'Ministry of Earth Sciences', 'NPDC', 'Digital Library'].map((p) => <li key={p} className="rounded-full border border-neutral-300 bg-white px-4 py-2 font-medium text-ink">{p}</li>)}</ul>
					<p className="mt-8 rounded-card border border-neutral-300 bg-neutral-100 p-5 text-sm text-neutral-700"><strong className="text-ink">Sample data notice:</strong> Only the Southern Ocean Expedition 2006 report is a real record. All other expedition names, coordinates and findings are placeholders until verified. Built by Team LogicLegion 2.0 for Smart India Hackathon 2026 (PS 26063).</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<Link to="/repository" className="rounded-lg bg-ink px-5 py-2.5 font-semibold text-white hover:bg-neutral-900">Browse repository</Link>
						<Link to="/ask" className="rounded-lg border border-ink px-5 py-2.5 font-semibold text-ink hover:bg-neutral-100">Ask POLARIS</Link>
					</div>
				</Reveal>
			</section>
		</div>
	);
}