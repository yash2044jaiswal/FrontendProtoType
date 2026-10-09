import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/useAuth.jsx';

export const mainNavItems = [
	['Home', '/'], ['Expedition Globe', '/globe'], ['Repository', '/repository'],['About', '/about'],
	['Contact', '/contact'], ['Ask POLARIS', '/ask'],
];
const allItems = [...mainNavItems];
const roles = ['contributor', 'scientist', 'editor', 'admin'];
const languages = [['EN', 'English'], ['HI', 'हिन्दी'], ['BN', 'বাংলা'], ['TA', 'தமிழ்'], ['MR', 'मराठी']];
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
const focusDark = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
// Small controls: light look on white, inverted look on the navy utility bar.
const tool = (dark) => `rounded px-2 py-1 text-xs font-semibold ${dark ? `text-white/90 hover:bg-white/10 ${focusDark}` : `text-ink hover:bg-neutral-100 ${focus}`}`;

function Logo() {
	return <Link to="/" aria-label="POLARIS home" className={`flex items-center gap-2.5 ${focus}`}>
		<span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
			<svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor"><path d="m16 1 3.4 10.1L30 8l-6.9 8 6.9 8-10.6-3.1L16 31l-3.4-10.1L2 24l6.9-8L2 8l10.6 3.1L16 1Z"/></svg>
		</span>
		<span className="font-serif text-xl font-black tracking-wide text-neutral-900">POLARIS</span>
	</Link>;
}
function SearchButton() {
	return <Link to="/search" aria-label="Search" className={`rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 hover:text-ink ${focus}`}>
		<svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
	</Link>;
}
function LanguageSelect({ dark = false }) {
	return <>
		<label className="sr-only" htmlFor={`lang-${dark ? 'bar' : 'menu'}`}>Language</label>
		<select id={`lang-${dark ? 'bar' : 'menu'}`} defaultValue="EN" className={`rounded border px-2 py-1 text-xs ${dark ? `border-white/30 bg-ink text-white ${focusDark}` : `border-neutral-300 bg-white text-ink ${focus}`}`}>
			{languages.map(([v, l]) => <option key={v} value={v}>{v} · {l}</option>)}
		</select>
	</>;
}
function ThemeToggle({ dark = false }) {
	const [on, setOn] = useState(() => { try { return sessionStorage.getItem('polaris-theme') === 'dark'; } catch { return false; } });
	const toggle = () => {
		const next = !on;
		try { document.documentElement.dataset.theme = next ? 'dark' : 'light'; sessionStorage.setItem('polaris-theme', next ? 'dark' : 'light'); } catch { /* storage unavailable */ }
		setOn(next);
	};
	return <button type="button" onClick={toggle} aria-label={`Switch to ${on ? 'light' : 'dark'} theme`} className={tool(dark)}>{on ? '☀ Light' : '☾ Dark'}</button>;
}
function ListenButton({ onListen = () => {}, dark = false }) {
	const [listening, setListening] = useState(false);
	return <button type="button" aria-pressed={listening} onClick={() => { setListening(v => !v); onListen(!listening); }} className={`${tool(dark)} ${listening ? (dark ? 'bg-white/20' : 'bg-neutral-100') : ''}`}>{listening ? 'Stop listening' : 'Listen'}</button>;
}
function TextSize({ dark = false }) {
	const set = (n) => { try { const r = document.documentElement; if (!n) { r.style.fontSize = ''; return; } const cur = parseFloat(getComputedStyle(r).fontSize) || 16; r.style.fontSize = `${Math.min(24, Math.max(12, cur + n))}px`; } catch { /* ignore */ } };
	return <div className="flex items-center" role="group" aria-label="Text size">{[[-1, 'A−', 'Decrease text size'], [0, 'A', 'Reset text size'], [1, 'A+', 'Increase text size']].map(([n, t, l]) => <button key={l} type="button" aria-label={l} onClick={() => set(n)} className={tool(dark)}>{t}</button>)}</div>;
}
function AccountMenu() {
	const { user, role, logout } = useAuth();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		if (!open) return;
		const outside = e => { if (!ref.current?.contains(e.target)) setOpen(false); };
		const esc = e => { if (e.key === 'Escape') setOpen(false); };
		document.addEventListener('pointerdown', outside); document.addEventListener('keydown', esc);
		return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', esc); };
	}, [open]);
	if (!user) return <div className="flex items-center gap-2">
		<Link to="/login" className={`rounded-lg border border-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white ${focus}`}>Log in</Link>
		<Link to="/signup" className={`rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-900 ${focus}`}>Sign up</Link>
	</div>;
	const item = 'block w-full rounded-lg px-3 py-2 text-left text-sm text-neutral-800 hover:bg-neutral-100';
	return <div ref={ref} className="relative">
		<button type="button" aria-label="Open account menu" aria-expanded={open} aria-controls="account-menu" onClick={() => setOpen(!open)} className={`flex items-center gap-2 rounded-lg p-1 hover:bg-neutral-100 ${focus}`}>
			<span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-bold text-white">{user.name?.[0]?.toUpperCase() || '?'}</span>
			<span className="hidden rounded-full border border-neutral-300 px-2 py-0.5 text-xs capitalize text-neutral-700 xl:inline">{role}</span>
		</button>
		{open && <div id="account-menu" className="absolute right-0 top-full z-50 mt-2 min-w-48 rounded-card border border-neutral-200 bg-white p-2 shadow-card">
			<Link onClick={() => setOpen(false)} className={item} to="/account">My Account</Link>
			{roles.includes(role) && <Link onClick={() => setOpen(false)} className={item} to="/admin">Dashboard</Link>}
			<button className={`${item} border-t border-neutral-200`} onClick={async () => { await logout(); setOpen(false); navigate('/'); }}>Log out</button>
		</div>}
	</div>;
}
function MobileMenu({ open, close }) {
	const location = useLocation();
	const drawer = useRef(null);
	useEffect(() => { close(); }, [location.pathname]);
	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		drawer.current?.querySelector('a,button,select')?.focus();
		const keydown = e => {
			if (e.key === 'Escape') close();
			if (e.key !== 'Tab' || !drawer.current) return;
			const items = [...drawer.current.querySelectorAll('a,button,select')].filter(el => !el.disabled);
			if (!items.length) return;
			if (e.shiftKey && document.activeElement === items[0]) { e.preventDefault(); items.at(-1).focus(); }
			else if (!e.shiftKey && document.activeElement === items.at(-1)) { e.preventDefault(); items[0].focus(); }
		};
		document.addEventListener('keydown', keydown);
		return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', keydown); };
	}, [open, close]);
	if (!open) return null;
	return <div className="fixed inset-0 z-50 lg:hidden">
		<button aria-label="Close menu overlay" className="absolute inset-0 h-full w-full bg-neutral-900/50" onClick={close} />
		<aside ref={drawer} role="dialog" aria-modal="true" aria-label="Site menu" className="absolute right-0 top-0 flex h-full w-[min(22rem,90vw)] flex-col gap-4 overflow-y-auto bg-white p-6 shadow-card">
			<div className="flex items-center justify-between"><Logo /><button type="button" onClick={close} aria-label="Close menu" className={`p-2 text-neutral-900 ${focus}`}>✕</button></div>
			<nav aria-label="Mobile"><ul className="space-y-1">{allItems.map(([label, to]) => <li key={to}><NavLink onClick={close} to={to} end={to === '/'} className={({ isActive }) => `block rounded-lg px-3 py-2 font-medium ${isActive ? 'bg-ink text-white' : 'text-neutral-800 hover:bg-neutral-100'}`}>{label}</NavLink></li>)}</ul></nav>
			<div className="flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-4"><LanguageSelect /><ThemeToggle /><TextSize /></div>
			<AccountMenu />
		</aside>
	</div>;
}

export default function Header({ onListen = () => {} }) {
	const [mobileOpen, setMobileOpen] = useState(false);
	const closeMobile = () => setMobileOpen(false);
	const linkClass = ({ isActive }) => `relative whitespace-nowrap py-2 text-sm font-semibold ${isActive ? 'text-ink after:absolute after:inset-x-0 after:-bottom-[17px] after:h-[3px] after:bg-ink' : 'text-neutral-600 hover:text-neutral-900'} ${focus}`;
	return <>
		<a href="#main" className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink ${focus}`}>Skip to content</a>
		<header className="sticky top-0 z-50 bg-white shadow-sm">
			{/* Utility bar (desktop only) */}
			<div className="hidden bg-ink lg:block"><div className="mx-auto flex h-9 max-w-page items-center justify-between px-6">
				<p className="text-xs text-white/80">National Centre for Polar and Ocean Research, Ministry of Earth Sciences</p>
				<div className="flex items-center gap-1"><ListenButton onListen={onListen} dark /><TextSize dark /><ThemeToggle dark /><LanguageSelect dark /></div>
			</div></div>
			{/* Main bar */}
			<div className="border-b border-neutral-200"><div className="mx-auto flex h-16 max-w-page items-center justify-between px-6">
				<Logo />
				<nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
					{mainNavItems.map(([label, to]) => <NavLink key={to} to={to} end={to === '/'} className={linkClass}>{label}</NavLink>)}
				</nav>
				<div className="hidden items-center gap-2 lg:flex"><AccountMenu /></div>
				<div className="flex items-center gap-2 lg:hidden">
					<button type="button" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => setMobileOpen(true)} className={`rounded-lg p-2 text-neutral-900 hover:bg-neutral-100 ${focus}`}>
						<svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
					</button>
				</div>
			</div></div>
			<div id="mobile-menu"><MobileMenu open={mobileOpen} close={closeMobile} /></div>
		</header>
	</>;
}