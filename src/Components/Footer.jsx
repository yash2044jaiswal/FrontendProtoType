import { useState } from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
	{ title: 'Explore', links: [['Expedition Globe', '/globe'], ['Repository', '/repository'], ['Timeline', '/timeline'], ['Media Gallery', '/media'], ['Stories', '/stories'], ['Knowledge Graph', '/graph']] },
	{ title: 'Learn', links: [['Education Hub', '/education'], ['Data Charts and Glossary', '/data'], ['Community', '/community'], ['Publications', '/publications'], ['Ask POLARIS', '/ask']] },
	{ title: 'Regions', links: [['Arctic', '/regions/arctic'], ['Antarctic', '/regions/antarctic'], ['Southern Ocean', '/regions/southern-ocean'], ['Himalaya', '/regions/himalaya']] },
	{ title: 'Support', links: [['About', '/about'], ['Accessibility', '/accessibility'], ['Contact', '/contact'], ['Press Room', '/press'], ['Developers', '/developers'], ['Sitemap', '/sitemap']] },
];
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
const link = `text-neutral-600 hover:text-ink hover:underline ${focus}`;

function FooterNewsletter() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [topics, setTopics] = useState([]);
	function submit(e) {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setSuccess(false); setError('Enter a valid email address.'); return; }
		// Newsletter API call goes here when available.
		setError(''); setSuccess(true); setEmail('');
	}
	const toggle = (t) => setTopics((c) => c.includes(t) ? c.filter((x) => x !== t) : [...c, t]);
	return <section aria-labelledby="footer-newsletter-title" className="rounded-card border border-neutral-200 bg-white p-5">
		<h2 id="footer-newsletter-title" className="font-semibold text-ink">Get polar updates</h2>
		<form onSubmit={submit} className="mt-3 space-y-3" noValidate>
			<div>
				<label htmlFor="footer-email" className="sr-only">Email address</label>
				<input id="footer-email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); setSuccess(false); }} aria-invalid={Boolean(error)} aria-describedby={error ? 'footer-email-error' : undefined} placeholder="Email address" className={`w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-500 ${focus}`} />
				<div aria-live="polite">
					{error && <p id="footer-email-error" className="mt-1 text-sm text-danger">{error}</p>}
					{success && <p className="mt-1 text-sm text-neutral-700">Subscribed. Check your inbox to confirm.</p>}
				</div>
			</div>
			<fieldset className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-700">
				<legend className="mb-1 text-neutral-600">Topics</legend>
				{['Expeditions', 'Stories', 'Events'].map((t) => <label key={t} className="flex items-center gap-1.5"><input type="checkbox" checked={topics.includes(t)} onChange={() => toggle(t)} className={`accent-[#0B1F3A] ${focus}`} />{t}</label>)}
			</fieldset>
			<button type="submit" className={`w-full rounded-lg bg-ink px-4 py-2 font-semibold text-white hover:bg-neutral-900 ${focus}`}>Subscribe</button>
		</form>
	</section>;
}

export default function Footer() {
	const [open, setOpen] = useState({});
	const backToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
	const trust = [
		['M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8L17 7m-10 10-1.4 1.4', 'AI-drafted content is reviewed by NCPOR scientists'],
		['M4 4h16v16H4zM8 8h8m-8 4h8m-8 4h5', 'Every answer links to its source report'],
		['M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Zm-3 9 2 2 4-4', 'Sample data is marked until verified'],
	];
	return <footer className="bg-neutral-100">
		<div className="border-t border-neutral-200">
			<div className="mx-auto max-w-page px-6 py-14">
				<div className="grid gap-10 lg:grid-cols-12">
					<div className="lg:col-span-4">
						<Link to="/" aria-label="POLARIS home" className={`inline-flex items-center gap-3 ${focus}`}>
							<span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white"><svg aria-hidden="true" viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor"><path d="m16 1 3.4 10.1L30 8l-6.9 8 6.9 8-10.6-3.1L16 31l-3.4-10.1L2 24l6.9-8L2 8l10.6 3.1L16 1Z" /></svg></span>
							<span className="font-serif text-2xl font-black text-neutral-900">POLARIS</span>
						</Link>
						<p className="mt-4 max-w-sm text-neutral-600">Polar Science Outreach, Knowledge Repository and Media Dissemination Portal of NCPOR, Ministry of Earth Sciences.</p>
						<ul className="mt-5 flex flex-wrap gap-2" aria-label="Project partners">{['NCPOR', 'MoES', 'NPDC', 'Digital Library'].map((p) => <li key={p} className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-sm font-medium text-ink">{p}</li>)}</ul>
					</div>
					<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-4 lg:gap-4">
						{footerLinks.map((g) => {
							const isOpen = Boolean(open[g.title]);
							return <nav key={g.title} aria-label={`Footer: ${g.title}`} className="border-b border-neutral-200 pb-2 lg:border-0 lg:pb-0">
								<h2 className="hidden font-semibold text-ink lg:block">{g.title}</h2>
								<button type="button" aria-expanded={isOpen} onClick={() => setOpen((c) => ({ ...c, [g.title]: !c[g.title] }))} className={`flex w-full items-center justify-between py-2 text-left font-semibold text-ink lg:hidden ${focus}`}>
									{g.title}<svg aria-hidden="true" viewBox="0 0 20 20" className={`h-5 w-5 transition-transform motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} fill="none"><path d="m5 7 5 5 5-5" stroke="currentColor" strokeWidth="1.8" /></svg>
								</button>
								<ul className={`${isOpen ? 'block' : 'hidden'} mt-2 space-y-2 pb-2 text-sm lg:mt-3 lg:block lg:pb-0`}>{g.links.map(([label, to]) => <li key={to}><Link to={to} className={link}>{label}</Link></li>)}</ul>
							</nav>;
						})}
					</div>
					<div className="lg:col-span-3"><FooterNewsletter /></div>
				</div>
				<ul className="mt-12 grid gap-3 border-t border-neutral-200 pt-8 text-sm text-neutral-700 md:grid-cols-3">
					{trust.map(([path, text]) => <li key={text} className="flex items-center gap-2"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-ink" fill="none" stroke="currentColor" strokeWidth="1.7"><path d={path} strokeLinecap="round" strokeLinejoin="round" /></svg>{text}</li>)}
				</ul>
			</div>
		</div>
		{/* Bottom bar */}
		<div className="bg-ink text-sm text-white/85">
			<div className="mx-auto flex max-w-page flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between">
				<p>© {new Date().getFullYear()} NCPOR, Ministry of Earth Sciences. Team LogicLegion 2.0, SIH 2026.</p>
				<div className="flex flex-wrap items-center gap-5">
					<Link to="/privacy" className="hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-white">Privacy</Link>
					<Link to="/terms" className="hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-white">Terms</Link>
					<button type="button" onClick={backToTop} className="rounded border border-white/40 px-3 py-1 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white">Back to top</button>
				</div>
			</div>
		</div>
	</footer>;
}