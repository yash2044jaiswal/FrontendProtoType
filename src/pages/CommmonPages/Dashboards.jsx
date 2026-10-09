import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Photo } from '../../components/PolarScence.jsx';
import { useAuth } from '../../Auth/useAuth.jsx';

/* =====================================================================
   THEME HELPERS
===================================================================== */
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
const inputCls = `w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 ${focus}`;
const btn = `inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-40 transition ${focus}`;
const btnGhost = `inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-semibold text-ink hover:border-ink hover:bg-neutral-50 transition ${focus}`;
const btnSm = `inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800 transition ${focus}`;
const chip = `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold`;

/* =====================================================================
   ICON SET (inline SVG, no emoji)
===================================================================== */
const PATHS = {
  home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1Z" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5Z" /></>,
  file: <><path d="M14 3v5h5" /><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M8 13h8M8 17h5" /></>,
  message: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />,
  star: <path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9Z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  pencil: <><path d="m4 20 4-1 10-10-3-3L5 16Z" /><path d="m14 6 3 3" /></>,
  scope: <><path d="M6 20h12" /><path d="M9 20v-4a3 3 0 0 1 6 0v4" /><path d="M11 12V6h4v6" /><path d="M6 12h6" /></>,
  mega: <><path d="m3 11 15-6v14L3 13Z" /><path d="M7 12.5V17a2 2 0 0 0 4 0v-3" /></>,
  book: <><path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4Z" /><path d="M18 20V8a4 4 0 0 0-4-4" /></>,
  chart: <><path d="M4 20V4M4 20h16" /><path d="M8 16v-5M12 16V8M16 16v-8" /></>,
  users: <><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0" /><path d="M16 3.5a4 4 0 0 1 0 8M22 21a7 7 0 0 0-5-6.7" /></>,
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />,
  shield: <><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6Z" /><path d="m9 12 2 2 4-4" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m3 18 5-4 4 3 3-3 6 5" /></>,
  upload: <><path d="M12 4v12" /><path d="m7 9 5-5 5 5" /><path d="M4 20h16" /></>,
  download: <><path d="M12 4v12" /><path d="m7 11 5 5 5-5" /><path d="M4 20h16" /></>,
  trash: <><path d="M4 7h16" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /><path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13" /></>,
  check: <path d="m5 12 5 5 9-11" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  trend: <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18-3-3-3-15 0-18Z" /></>,
  bookmark: <path d="M6 4h12v17l-6-4-6 4Z" />,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></>,
  logout: <><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" /><path d="M10 17l-5-5 5-5M15 12H5" /></>,
  chevron: <path d="m9 6 6 6-6 6" />,
  bell: <><path d="M6 16V10a6 6 0 0 1 12 0v6l2 3H4Z" /><path d="M10 21a2 2 0 0 0 4 0" /></>,
  cog: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9.7 3H10a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1.3Z" /></>,
  filter: <path d="M3 5h18l-7 8v6l-4 2v-8Z" />,
  video: <><rect x="3" y="6" width="14" height="12" rx="2" /><path d="m21 8-4 4 4 4Z" /></>,
  pdf: <><path d="M14 3v5h5" /><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M9 13h1.5a1.5 1.5 0 0 1 0 3H9v-3ZM9 18h6" /></>,
  alert: <><path d="M12 3 2 20h20Z" /><path d="M12 10v4M12 17h.01" /></>,
  sparkle: <path d="M12 3v6m0 6v6M3 12h6m6 0h6M5.6 5.6l4.2 4.2m4.4 4.4 4.2 4.2m0-12.8-4.2 4.2m-4.4 4.4-4.2 4.2" />,
};

const Icon = ({ n, className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {PATHS[n] || PATHS.sparkle}
  </svg>
);

/* =====================================================================
   CONSTANTS
===================================================================== */
const DAY = 86400000;
const ROLE = {
  user: 'Public user', contributor: 'Contributor', scientist: 'Scientist reviewer',
  editor: 'Communication Cell', admin: 'Administrator',
};
const NAV = {
  user: [
    ['overview', 'Overview', 'home'],
    ['explore', 'Explore research', 'compass'],
    ['notes', 'My notes', 'file'],
    ['questions', 'My questions', 'message'],
    ['interests', 'My interests', 'star'],
    ['bookmarks', 'Bookmarks', 'bookmark'],
    ['profile', 'Profile', 'user'],
  ],
  contributor: [
    ['overview', 'Overview', 'home'],
    ['drafts', 'My drafts', 'pencil'],
    ['media', 'Media library', 'image'],
    ['profile', 'Profile', 'user'],
  ],
  scientist: [
    ['overview', 'Overview', 'home'],
    ['review', 'Review queue', 'scope'],
    ['questions', 'Questions inbox', 'message'],
    ['research', 'Research data', 'folder'],
    ['media', 'Media library', 'image'],
    ['profile', 'Profile', 'user'],
  ],
  editor: [
    ['overview', 'Overview', 'home'],
    ['publish', 'Publish queue', 'mega'],
    ['library', 'Content library', 'book'],
    ['media', 'Media library', 'image'],
    ['analytics', 'Analytics', 'chart'],
    ['profile', 'Profile', 'user'],
  ],
  admin: [
    ['overview', 'Overview', 'home'],
    ['users', 'Users & roles', 'users'],
    ['content', 'All content', 'folder'],
    ['questions', 'Questions', 'message'],
    ['media', 'Media library', 'image'],
    ['analytics', 'Analytics', 'chart'],
    ['system', 'System & audit', 'shield'],
    ['profile', 'Profile', 'user'],
  ],
};
const ST = {
  draft: ['Draft', 'bg-neutral-200 text-neutral-800'],
  review: ['In review', 'bg-amber-100 text-amber-900'],
  changes: ['Changes asked', 'bg-red-100 text-red-800'],
  approved: ['Approved', 'bg-sky-100 text-sky-900'],
  published: ['Published', 'bg-emerald-100 text-emerald-900'],
};
const TAG_TO_PAGE = {
  ice: 'ice-cores', climate: 'polar-climate-change', wildlife: 'southern-ocean-life',
  himalaya: 'himalayan-glaciers', antarctic: 'antarctic-research',
  arctic: 'arctic-ecosystems', fieldwork: 'polar-fieldwork',
};

const VISITS = [['Mon', 120], ['Tue', 180], ['Wed', 150], ['Thu', 260], ['Fri', 310], ['Sat', 280], ['Sun', 420]];
const TOPICS = [['Ice cores', 82], ['Krill & wildlife', 64], ['Himalayan glaciers', 58], ['Arctic', 41], ['Fieldwork', 23]];
const MONTHLY = [['Jan', 240], ['Feb', 320], ['Mar', 410], ['Apr', 380], ['May', 520], ['Jun', 610], ['Jul', 720], ['Aug', 690], ['Sep', 810], ['Oct', 900], ['Nov', 1020], ['Dec', 1120]];

const RESEARCH = [
  { id: 'ice-cores', title: 'Ice Cores & Climate Archives', topic: 'Ice cores', date: '2024-11-08', read: 42, kind: 'aurora', excerpt: 'Ice cores trap ancient air — a direct archive of past atmospheres spanning 800,000 years.' },
  { id: 'polar-climate-change', title: 'Polar Climate Change', topic: 'Climate', date: '2024-10-22', read: 58, kind: 'glacier', excerpt: 'Polar amplification is warming the Arctic 3–4× faster than the global average.' },
  { id: 'southern-ocean-life', title: 'Southern Ocean Life', topic: 'Wildlife', date: '2024-09-15', read: 33, kind: 'station', excerpt: 'Krill, whales, penguins — the Southern Ocean food web in a warming world.' },
  { id: 'himalayan-glaciers', title: 'Himalayan Glaciers', topic: 'Himalaya', date: '2024-08-30', read: 27, kind: 'glacier', excerpt: 'The Third Pole feeds 10 major rivers and 2 billion people downstream.' },
  { id: 'antarctic-research', title: 'Antarctic Research Stations', topic: 'Antarctic', date: '2024-07-12', read: 19, kind: 'station', excerpt: 'Life and science at the coldest, driest, windiest place on Earth.' },
  { id: 'arctic-ecosystems', title: 'Arctic Ecosystems', topic: 'Arctic', date: '2024-06-05', read: 22, kind: 'aurora', excerpt: 'Polar bears, Arctic foxes and the fragile tundra at the edge of thaw.' },
  { id: 'polar-fieldwork', title: 'Polar Fieldwork Diaries', topic: 'Fieldwork', date: '2024-05-18', read: 31, kind: 'station', excerpt: 'Notes from scientists living on the ice: logistics, drills, and daily life.' },
];

/* Seed data uses the demo account emails so the demo roles own their items */
const SEED_DRAFTS = [
  { id: 1, title: 'Krill swarm survey, leg 2', body: 'Acoustic transects show dense swarms near the ice edge. Preliminary biomass estimates suggest a 12% increase relative to last season, though weather limited the final transect.', by: 'contributor@polaris.demo', status: 'review', time: Date.now() - DAY },
  { id: 2, title: 'Sea ice extent notes', body: 'Daily extent logged from satellite passes during the voyage. Minimum extent came 4 days earlier than the 10-year median.', by: 'contributor@polaris.demo', status: 'approved', time: Date.now() - 2 * DAY },
  { id: 3, title: 'Himalayan glacier melt transect', body: 'Stake ablation measurements across 6 glaciers in the Garhwal Himalaya. Mean annual mass balance −0.71 m w.e.', by: 'contributor@polaris.demo', status: 'published', time: Date.now() - 6 * DAY },
  { id: 4, title: 'Arctic fox den occupancy', body: 'Camera trap data from 22 dens in the Canadian Arctic.', by: 'contributor@polaris.demo', status: 'draft', time: Date.now() - 4 * DAY },
];
const SEED_INBOX = [
  { id: 1, card: 'sea-ice', title: 'Sea Ice Observations', q: 'Can sea ice loss change monsoon rainfall in India?', reason: 'AI not confident', status: 'pending' },
  { id: 2, card: 'krill', title: 'Krill & Wildlife', q: 'How fast do krill swarms move in a day?', reason: 'Field data requested', status: 'pending' },
  { id: 3, card: 'ice-cores', title: 'Ice Cores & Climate', q: 'How do you date the deepest layers?', reason: 'Follow-up', status: 'answered', answer: 'We use a combination of annual layer counting, volcanic tephra markers, and orbitally-tuned age models. The deepest layers go beyond the counting limit.' },
];
const SEED_USERS = [
  { email: 'user@polaris.demo', name: 'Asha Verma', role: 'user', active: true, joined: Date.now() - 40 * DAY },
  { email: 'contributor@polaris.demo', name: 'Ravi Nair', role: 'contributor', active: true, joined: Date.now() - 90 * DAY },
  { email: 'scientist@polaris.demo', name: 'Dr. Meera Iyer', role: 'scientist', active: true, joined: Date.now() - 200 * DAY },
  { email: 'editor@polaris.demo', name: 'Karan Shah', role: 'editor', active: true, joined: Date.now() - 150 * DAY },
  { email: 'admin@polaris.demo', name: 'Admin', role: 'admin', active: true, joined: Date.now() - 365 * DAY },
];
const SEED_MEDIA = [
  { id: 'm1', name: 'ice-core-sample.jpg', type: 'image/jpeg', size: 245000, by: 'scientist@polaris.demo', date: Date.now() - 2 * DAY, tags: ['ice', 'sample'], kind: 'aurora' },
  { id: 'm2', name: 'krill-swarm.mp4', type: 'video/mp4', size: 4200000, by: 'contributor@polaris.demo', date: Date.now() - 5 * DAY, tags: ['wildlife'] },
  { id: 'm3', name: 'field-notes.pdf', type: 'application/pdf', size: 890000, by: 'contributor@polaris.demo', date: Date.now() - DAY, tags: ['fieldwork'] },
  { id: 'm4', name: 'glacier-retreat.jpg', type: 'image/jpeg', size: 320000, by: 'scientist@polaris.demo', date: Date.now() - 8 * DAY, tags: ['himalaya'], kind: 'glacier' },
];

/* =====================================================================
   STORAGE HELPERS
===================================================================== */
const ls = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* quota */ } },
};
function useStore(key, init) {
  const [v, setV] = useState(() => ls.get(key, init));
  const set = (n) => {
    const val = typeof n === 'function' ? n(v) : n;
    setV(val);
    ls.set(key, val);
  };
  return [v, set];
}
const audit = (who, msg) =>
  ls.set('polaris_audit', [{ t: Date.now(), who, msg }, ...ls.get('polaris_audit', [])].slice(0, 80));
const when = (t) =>
  new Date(t).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
const rel = (t) => {
  const s = Math.floor((Date.now() - t) / 1000);
  if (s < 60) return `${s}s ago`;
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
};
const noteKeys = () => {
  try { return Object.keys(localStorage).filter((k) => k.startsWith('polaris_note_') && ls.get(k, '')); }
  catch { return []; }
};
const pretty = (id) => id.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
const fileSize = (b) => b < 1024 ? `${b} B` : b < 1048576 ? `${(b / 1024).toFixed(1)} KB` : `${(b / 1048576).toFixed(1)} MB`;
const mediaIcon = (type) => type?.startsWith('image') ? 'image' : type?.startsWith('video') ? 'video' : type === 'application/pdf' ? 'pdf' : 'file';

/* =====================================================================
   UI PRIMITIVES
===================================================================== */
const Card = ({ title, right, children, className = '', icon }) => (
  <section className={`rounded-card border border-neutral-200 bg-white p-5 shadow-card ${className}`}>
    {(title || right) && (
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        {title && (
          <h2 className="flex items-center gap-2 font-serif text-lg font-black text-ink">
            {icon && <span className="grid h-7 w-7 place-items-center rounded-lg bg-neutral-100 text-ink"><Icon n={icon} className="h-4 w-4" /></span>}
            {title}
          </h2>
        )}
        {right}
      </div>
    )}
    {children}
  </section>
);
const Empty = ({ children, icon = 'sparkle' }) => (
  <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
    <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-neutral-400"><Icon n={icon} className="h-5 w-5" /></span>
    <p className="text-sm text-neutral-600">{children}</p>
  </div>
);
const Badge = ({ s }) => <span className={`${chip} ${ST[s]?.[1] || 'bg-neutral-200 text-neutral-800'}`}>{ST[s]?.[0] || s}</span>;
const Stat = ({ label, value, icon, n = 0, tone = 'ink' }) => (
  <div style={{ animationDelay: `${n * 0.06}s` }}
    className="db-in group relative overflow-hidden rounded-card border border-neutral-200 bg-white p-5 shadow-card transition-transform hover:-translate-y-0.5">
    <div className="flex items-start justify-between">
      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</p>
      <span className={`grid h-9 w-9 place-items-center rounded-lg ${tone === 'ink' ? 'bg-ink text-white' : tone === 'warm' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'}`}>
        <Icon n={icon} className="h-4 w-4" />
      </span>
    </div>
    <p className="mt-3 font-serif text-4xl font-black leading-none text-ink">{value}</p>
  </div>
);

/* =====================================================================
   CHARTS (pure inline SVG)
===================================================================== */
function Line({ data, height = 180, showArea = true }) {
  const gid = useRef(`g${Math.random().toString(36).slice(2, 8)}`).current;
  const max = Math.max(...data.map((d) => d[1]), 1);
  const min = Math.min(...data.map((d) => d[1]), 0);
  const W = 320, H = 100;
  const px = (i) => (i / (data.length - 1)) * W;
  const py = (v) => H - ((v - min) / (max - min || 1)) * (H - 16) - 8;
  const pts = data.map((d, i) => `${px(i)},${py(d[1])}`).join(' ');
  return (
    <div className="text-ink">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height }} role="img" aria-label="Trend" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 25, 50, 75, 100].map((p) => (
          <line key={p} x1="0" x2={W} y1={(H * p) / 100} y2={(H * p) / 100} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="3 3" />
        ))}
        {showArea && <polygon points={`0,${H} ${pts} ${W},${H}`} fill={`url(#${gid})`} opacity=".35" />}
        <polyline points={pts} fill="none" stroke="currentColor" strokeWidth="2.4" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
        {data.map((d, i) => (
          <circle key={i} cx={px(i)} cy={py(d[1])} r="2.6" fill="white" stroke="currentColor" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="mt-1 flex justify-between text-[11px] text-neutral-500">
        {data.map((d) => <span key={d[0]}>{d[0]}</span>)}
      </div>
    </div>
  );
}

function Bars({ data, suffix = '' }) {
  const max = Math.max(...data.map((d) => d[1]), 1);
  return (
    <ul className="space-y-3">
      {data.map(([l, v, col]) => (
        <li key={l}>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-800">{l}</span>
            <span className="font-semibold text-ink">{v}{suffix}</span>
          </div>
          <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-neutral-200">
            <div style={{ width: `${(v / max) * 100}%`, background: col || '#0B1F3A' }}
              className="h-full rounded-full transition-all duration-700" />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Donut({ data, size = 150, label = 'total' }) {
  const total = data.reduce((a, d) => a + d[1], 0) || 1;
  const r = 60, c = 2 * Math.PI * r;
  let acc = 0;
  const COLORS = ['#0B1F3A', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
  return (
    <div className="flex flex-wrap items-center gap-6">
      <svg viewBox="0 0 160 160" width={size} height={size} className="shrink-0" role="img" aria-label={`${label} breakdown`}>
        <circle cx="80" cy="80" r={r} fill="none" stroke="#e5e7eb" strokeWidth="18" />
        {data.map(([l, v], i) => {
          const len = (v / total) * c;
          const off = -acc;
          acc += len;
          return (
            <circle key={l} cx="80" cy="80" r={r} fill="none" stroke={COLORS[i % COLORS.length]}
              strokeWidth="18" strokeDasharray={`${len} ${c - len}`} strokeDashoffset={off}
              transform="rotate(-90 80 80)" strokeLinecap="butt" />
          );
        })}
        <text x="80" y="80" textAnchor="middle" className="fill-ink font-serif" fontSize="24" fontWeight="900">{total}</text>
        <text x="80" y="98" textAnchor="middle" className="fill-neutral-500" fontSize="10" letterSpacing="1">{label.toUpperCase()}</text>
      </svg>
      <ul className="min-w-[140px] space-y-1.5 text-sm">
        {data.map(([l, v], i) => (
          <li key={l} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
            <span className="text-neutral-700">{l}</span>
            <span className="ml-auto font-semibold text-ink">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =====================================================================
   MEDIA UPLOADER (createObjectURL + progress + size limit) + GALLERY
===================================================================== */
function MediaUploader({ onAdd, maxSizeMB = 20, hint = 'Images, videos or PDF' }) {
  const ref = useRef(null);
  const [drag, setDrag] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  const read = (files) => {
    setError('');
    Array.from(files).slice(0, 8).forEach((f) => {
      if (!/^(image|video)\//.test(f.type) && f.type !== 'application/pdf') {
        setError(`${f.name}: only images, videos and PDFs are allowed.`);
        return;
      }
      if (f.size > maxSizeMB * 1048576) {
        setError(`${f.name} is ${fileSize(f.size)}. The limit is ${maxSizeMB} MB.`);
        return;
      }
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const url = URL.createObjectURL(f); // works for image AND video
      setJobs((j) => [...j, { id, name: f.name, p: 0 }]);
      const t = setInterval(
        () => setJobs((j) => j.map((x) => (x.id === id ? { ...x, p: Math.min(100, x.p + 10 + Math.random() * 12) } : x))),
        180
      );
      setTimeout(() => {
        clearInterval(t);
        setJobs((j) => j.filter((x) => x.id !== id));
        onAdd({ id, name: f.name, type: f.type, size: f.size, date: Date.now(), tags: [], url });
      }, 1700);
    });
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files?.length) read(e.dataTransfer.files); }}
      className={`flex flex-col items-center gap-2 rounded-card border-2 border-dashed p-6 text-center transition ${drag ? 'border-ink bg-neutral-50' : 'border-neutral-300 bg-neutral-50/60'}`}
    >
      <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white"><Icon n="upload" className="h-5 w-5" /></span>
      <p className="text-sm font-semibold text-ink">Drag & drop or choose files</p>
      <p className="text-xs text-neutral-500">{hint} · max {maxSizeMB} MB each</p>
      <input ref={ref} type="file" accept="image/*,video/*,application/pdf" multiple hidden
        onChange={(e) => { if (e.target.files) read(e.target.files); e.target.value = ''; }} />
      <button type="button" onClick={() => ref.current?.click()} className={btnSm}>
        <Icon n="plus" className="h-3.5 w-3.5" /> Choose files
      </button>
      {error && <p className="text-sm text-danger" role="alert">{error}</p>}
      {jobs.length > 0 && (
        <ul className="w-full max-w-sm space-y-2" aria-live="polite">
          {jobs.map((j) => (
            <li key={j.id} className="text-left">
              <p className="truncate text-xs text-neutral-700">{j.name} · {Math.round(j.p)}%</p>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full rounded-full bg-ink transition-all" style={{ width: `${j.p}%` }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MediaCard({ m, onRemove }) {
  const [broken, setBroken] = useState(false); // blob URLs expire after a page refresh
  const iconName = mediaIcon(m.type);
  const isImg = m.type?.startsWith('image') && m.url && !broken;
  const isVid = m.type?.startsWith('video') && m.url && !broken;
  return (
    <div className="group relative overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition hover:-translate-y-0.5">
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
        {isImg ? (
          <img src={m.url} alt={m.name} onError={() => setBroken(true)} className="h-full w-full object-cover" />
        ) : isVid ? (
          <video src={m.url} onError={() => setBroken(true)} className="h-full w-full object-cover" controls muted />
        ) : m.kind ? (
          <Photo kind={m.kind} className="absolute inset-0 h-full w-full" />
        ) : (
          <div className="grid h-full w-full place-items-center text-neutral-400">
            <Icon n={iconName} className="h-10 w-10" />
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-ink/85 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          {iconName}
        </span>
        {onRemove && (
          <button type="button" onClick={() => onRemove(m.id)} aria-label={`Remove ${m.name}`}
            className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-red-600 opacity-0 transition focus-visible:opacity-100 group-hover:opacity-100">
            <Icon n="trash" className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      <div className="p-3">
        <p className="truncate text-sm font-semibold text-ink" title={m.name}>{m.name}</p>
        <p className="mt-0.5 text-xs text-neutral-500">{fileSize(m.size)} · {rel(m.date)}</p>
        {m.by && <p className="mt-0.5 truncate text-xs text-neutral-500">by {m.by}</p>}
      </div>
    </div>
  );
}

function MediaLibrary({ me, canDelete = false }) {
  const [list, setList] = useStore('polaris_media', SEED_MEDIA);
  const [q, setQ] = useState('');
  const [type, setType] = useState('all');
  const filtered = list.filter((m) => {
    const okQ = ((m.name || '') + (m.by || '')).toLowerCase().includes(q.toLowerCase());
    const okT = type === 'all' || mediaIcon(m.type) === type;
    return okQ && okT;
  });
  const remove = (id) => { setList((l) => l.filter((x) => x.id !== id)); audit(me.email, `Deleted media ${id}`); };
  const add = (m) => { setList((l) => [{ ...m, by: me.email }, ...l]); audit(me.email, `Uploaded ${m.name}`); };
  return (
    <>
      <Card title="Upload media" icon="upload"
        right={<span className="text-xs text-neutral-500">{list.length} file(s)</span>}>
        <MediaUploader onAdd={add} />
      </Card>
      <Card title="Media library" icon="image"
        right={
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Icon n="search" className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…"
                className={`${inputCls} w-44 pl-8`} aria-label="Search media" />
            </div>
            <select value={type} onChange={(e) => setType(e.target.value)} className={`${inputCls} w-32`} aria-label="Filter type">
              <option value="all">All types</option>
              <option value="image">Images</option>
              <option value="video">Videos</option>
              <option value="pdf">PDFs</option>
            </select>
          </div>
        }>
        {filtered.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((m) => <MediaCard key={m.id} m={m} onRemove={canDelete ? remove : null} />)}
          </div>
        ) : <Empty icon="image">No media yet. Upload images, videos or PDFs above.</Empty>}
      </Card>
    </>
  );
}

/* =====================================================================
   OVERVIEW
===================================================================== */
function Overview({ me, role, go }) {
  const [drafts] = useStore('polaris_drafts', SEED_DRAFTS);
  const [inbox] = useStore('polaris_inbox', SEED_INBOX);
  const [users] = useStore('polaris_users', SEED_USERS);
  const [media] = useStore('polaris_media', SEED_MEDIA);

  const c = (s) => drafts.filter((d) => d.status === s).length;
  const mine = drafts.filter((d) => d.by === me.email);
  const pend = inbox.filter((q) => q.status === 'pending').length;

  const STATS = {
    user: [
      ['Saved notes', noteKeys().length, 'file'],
      ['Questions asked', inbox.length, 'message'],
      ['Answered', inbox.filter((q) => q.status === 'answered').length, 'check'],
      ['Bookmarks', Object.keys(ls.get('polaris_bookmarks', {})).length, 'bookmark'],
    ],
    contributor: [
      ['My drafts', mine.length, 'pencil'],
      ['In review', mine.filter((d) => d.status === 'review').length, 'scope'],
      ['Published', mine.filter((d) => d.status === 'published').length, 'check'],
      ['Media files', media.filter((m) => m.by === me.email).length, 'image'],
    ],
    scientist: [
      ['Waiting review', c('review'), 'scope'],
      ['Open questions', pend, 'message'],
      ['Research files', media.length, 'folder'],
      ['Published by team', c('published'), 'check'],
    ],
    editor: [
      ['Ready to publish', c('approved'), 'mega'],
      ['Published', c('published'), 'book'],
      ['Weekly visits', VISITS.reduce((a, d) => a + d[1], 0), 'eye'],
      ['Media files', media.length, 'image'],
    ],
    admin: [
      ['Users', users.length, 'users'],
      ['Content items', drafts.length, 'folder'],
      ['Open questions', pend, 'message'],
      ['Media files', media.length, 'image'],
    ],
  };

  const ACT = {
    user: [['Explore research', '/repository', 'compass'], ['Ask POLARIS AI', '/ask', 'sparkle']],
    contributor: [['Write new draft', 'drafts', 'pencil'], ['Upload media', 'media', 'upload']],
    scientist: [['Review submissions', 'review', 'scope'], ['Upload research data', 'research', 'folder']],
    editor: [['Publish approved', 'publish', 'mega'], ['See analytics', 'analytics', 'chart']],
    admin: [['Manage users', 'users', 'users'], ['System & audit', 'system', 'shield']],
  };

  const toneMap = { 0: 'ink', 1: 'warm', 2: 'emerald', 3: 'ink' };

  return (
    <>
      <div className={`grid gap-4 sm:grid-cols-2 ${STATS[role].length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
        {STATS[role].map(([l, v, i], n) => <Stat key={l} label={l} value={v} icon={i} n={n} tone={toneMap[n % 4]} />)}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card title="Quick actions" icon="sparkle" className="lg:col-span-1">
          <div className="flex flex-wrap gap-2">
            {ACT[role].map(([l, t, ic]) => t.startsWith('/')
              ? <Link key={l} to={t} className={btn}><Icon n={ic} className="h-4 w-4" />{l}</Link>
              : <button key={l} type="button" onClick={() => go(t)} className={btn}><Icon n={ic} className="h-4 w-4" />{l}</button>
            )}
          </div>
        </Card>

        {(role === 'editor' || role === 'admin') && (
          <Card title="Visits this week" icon="chart" className="lg:col-span-2"
            right={<span className="text-xs text-neutral-500">Sample data</span>}>
            <Line data={VISITS} />
          </Card>
        )}

        {role === 'user' && (
          <Card title="How POLARIS works for you" icon="sparkle" className="lg:col-span-2">
            <p className="text-sm leading-relaxed text-neutral-700">
              Read research, save notes on any page, ask the AI, and send tough questions to a scientist.
              Everything you save stays in this dashboard and on this device.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className={chip + ' bg-neutral-100 text-neutral-700'}>📄 Read</span>
              <span className={chip + ' bg-neutral-100 text-neutral-700'}>✍️ Note</span>
              <span className={chip + ' bg-neutral-100 text-neutral-700'}>💬 Ask</span>
              <span className={chip + ' bg-neutral-100 text-neutral-700'}>⭐ React</span>
            </div>
          </Card>
        )}
      </div>

      {role === 'admin' && (
        <div className="grid gap-5 lg:grid-cols-2">
          <Card title="Content status" icon="folder">
            <Donut label="items" data={[
              ['Draft', c('draft')], ['In review', c('review')], ['Changes', c('changes')],
              ['Approved', c('approved')], ['Published', c('published')],
            ].filter(([, v]) => v > 0)} />
          </Card>
          <Card title="Users by role" icon="users">
            <Donut label="users" data={Object.keys(ROLE).map((r) => [ROLE[r], users.filter((u) => u.role === r).length])} />
          </Card>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Recent activity" icon="clock"
          right={<span className="text-xs text-neutral-500">latest 8</span>}>
          {(() => {
            const log = ls.get('polaris_audit', []);
            return log.length ? (
              <ul className="max-h-72 space-y-2 overflow-y-auto text-sm">
                {log.slice(0, 8).map((l, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg border border-neutral-100 p-2.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-neutral-100 text-ink">
                      <Icon n="sparkle" className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-neutral-800"><strong>{l.who}</strong> · {l.msg}</p>
                      <p className="text-xs text-neutral-500">{when(l.t)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : <Empty icon="clock">No activity yet.</Empty>;
          })()}
        </Card>

        <Card title="Trending topics" icon="trend">
          <Bars data={TOPICS} />
          <p className="mt-3 text-xs text-neutral-500">Aggregate reads across POLARIS this week.</p>
        </Card>
      </div>
    </>
  );
}

/* =====================================================================
   EXPLORE RESEARCH (public users)
===================================================================== */
function Explore() {
  const [topic, setTopic] = useState('all');
  const [q, setQ] = useState('');
  const [saved, setSaved] = useStore('polaris_bookmarks', {});
  const topics = ['all', ...new Set(RESEARCH.map((r) => r.topic))];
  const list = RESEARCH.filter((r) =>
    (topic === 'all' || r.topic === topic) &&
    (r.title + r.excerpt).toLowerCase().includes(q.toLowerCase())
  );
  const toggle = (id) => setSaved((s) => {
    const n = { ...s };
    if (n[id]) delete n[id]; else n[id] = Date.now();
    return n;
  });
  return (
    <Card title="Explore research" icon="compass"
      right={
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Icon n="search" className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search research…" className={`${inputCls} w-56 pl-8`} aria-label="Search research" />
          </div>
          <select value={topic} onChange={(e) => setTopic(e.target.value)} className={`${inputCls} w-44`} aria-label="Filter topic">
            {topics.map((t) => <option key={t} value={t}>{t === 'all' ? 'All topics' : t}</option>)}
          </select>
        </div>
      }>
      {list.length ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((r) => (
            <article key={r.id} className="group overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition hover:-translate-y-0.5">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Photo kind={r.kind} className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <button type="button" onClick={() => toggle(r.id)}
                  aria-label={saved[r.id] ? 'Remove bookmark' : 'Bookmark'}
                  aria-pressed={!!saved[r.id]}
                  className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border backdrop-blur transition ${
                    saved[r.id] ? 'border-white bg-white text-ink' : 'border-white/40 bg-white/10 text-white hover:bg-white/20'
                  } ${focus}`}>
                  <Icon n="bookmark" className="h-4 w-4" />
                </button>
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">
                  {r.topic}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-black text-ink">{r.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{r.excerpt}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                  <span className="inline-flex items-center gap-1"><Icon n="calendar" className="h-3.5 w-3.5" />{r.date}</span>
                  <span className="inline-flex items-center gap-1"><Icon n="eye" className="h-3.5 w-3.5" />{r.read}</span>
                </div>
                <Link to={`/research/${r.id}`} className={`${btn} mt-3 w-full`}>
                  Open research <Icon n="chevron" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : <Empty icon="compass">No research matches your search.</Empty>}
    </Card>
  );
}

/* =====================================================================
   NOTES / BOOKMARKS / INTERESTS
===================================================================== */
function Notes() {
  const [keys, setKeys] = useState(noteKeys);
  const del = (k) => { try { localStorage.removeItem(k); } catch { /* blocked */ } setKeys(noteKeys()); };
  return (
    <Card title="Saved notes" icon="file" right={<span className="text-xs text-neutral-500">{keys.length} note(s)</span>}>
      {keys.length ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {keys.map((k) => {
            const id = k.replace('polaris_note_', '');
            return (
              <li key={k} className="rounded-lg border border-neutral-200 p-4 transition hover:border-ink">
                <p className="font-semibold text-ink">{pretty(id)}</p>
                <p className="mt-1 line-clamp-4 whitespace-pre-wrap text-sm text-neutral-700">{ls.get(k, '')}</p>
                <div className="mt-3 flex gap-2">
                  <Link to={`/research/${id}`} className={btnGhost}><Icon n="eye" className="h-3.5 w-3.5" />Open</Link>
                  <button type="button" onClick={() => del(k)} className={btnGhost}><Icon n="trash" className="h-3.5 w-3.5" />Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : <Empty icon="file">No notes yet. Open a research page, write a note and tap “Save note”.</Empty>}
    </Card>
  );
}

function Bookmarks() {
  const [saved, setSaved] = useStore('polaris_bookmarks', {});
  const ids = Object.keys(saved);
  return (
    <Card title="Bookmarks" icon="bookmark" right={<span className="text-xs text-neutral-500">{ids.length} saved</span>}>
      {ids.length ? (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ids.map((id) => {
            const r = RESEARCH.find((x) => x.id === id);
            if (!r) return null;
            return (
              <li key={id} className="overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card">
                <div className="relative aspect-video bg-ink">
                  <Photo kind={r.kind} className="absolute inset-0 h-full w-full" />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-ink">{r.title}</p>
                  <p className="mt-0.5 text-xs text-neutral-500">saved {rel(saved[id])}</p>
                  <div className="mt-2 flex gap-2">
                    <Link to={`/research/${r.id}`} className={btnGhost}>Open</Link>
                    <button type="button" onClick={() => setSaved((s) => { const n = { ...s }; delete n[id]; return n; })} className={btnGhost}>Remove</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : <Empty icon="bookmark">No bookmarks yet. Tap the bookmark icon on any research card.</Empty>}
    </Card>
  );
}

function Interests() {
  const it = ls.get('polaris_interest', {});
  const rows = Object.entries(it).sort((a, b) => b[1] - a[1]);
  const reacts = (() => { try { return Object.keys(localStorage).filter((k) => k.startsWith('polaris_react_') && ls.get(k, null)); } catch { return []; } })();
  return (
    <>
      <Card title="What you are curious about" icon="star">
        {rows.length
          ? <Bars data={rows.map(([t, v]) => [t[0].toUpperCase() + t.slice(1), v])} />
          : <Empty icon="star">React to research pages (🤯 👍 🤔) and your interests will build up here.</Empty>}
      </Card>
      {rows.length > 0 && (
        <Card title="Recommended for you" icon="sparkle">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rows.slice(0, 3).map(([t]) => TAG_TO_PAGE[t] && (
              <Link key={t} to={`/research/${TAG_TO_PAGE[t]}`}
                className="group overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition hover:-translate-y-0.5">
                <div className="relative aspect-video bg-ink">
                  <Photo kind="aurora" className="absolute inset-0 h-full w-full" />
                  <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-ink">{pretty(t)}</span>
                </div>
                <p className="p-3 text-sm font-semibold text-ink group-hover:underline">Explore {pretty(TAG_TO_PAGE[t])} →</p>
              </Link>
            ))}
          </div>
        </Card>
      )}
      <Card title="Pages you reacted to" icon="eye">
        {reacts.length ? (
          <ul className="flex flex-wrap gap-2">
            {reacts.map((k) => { const id = k.replace('polaris_react_', ''); return (
              <li key={k}><Link to={`/research/${id}`} className={btnGhost}>{pretty(id)}</Link></li>
            ); })}
          </ul>
        ) : <Empty icon="eye">Nothing yet.</Empty>}
      </Card>
    </>
  );
}

/* =====================================================================
   QUESTIONS (users + staff)
===================================================================== */
function Questions({ role, me }) {
  const staff = role === 'scientist' || role === 'admin';
  const [inbox, setInbox] = useStore('polaris_inbox', SEED_INBOX);
  const [ans, setAns] = useState({});
  const patch = (id, p, msg) => {
    setInbox((l) => l.map((q) => (q.id === id ? { ...q, ...p } : q)));
    if (msg) audit(me.email, msg);
  };
  const list = [...inbox].sort((a, b) => (a.status === 'pending' ? -1 : 1) - (b.status === 'pending' ? -1 : 1));
  return (
    <Card title={staff ? 'Questions inbox' : 'My questions'} icon="message"
      right={<span className="text-xs text-neutral-500">{inbox.filter((q) => q.status === 'pending').length} open</span>}>
      {list.length ? (
        <ul className="space-y-3">
          {list.map((q) => (
            <li key={q.id} className="rounded-lg border border-neutral-200 p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className={`${chip} ${q.status === 'answered' ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'}`}>
                  {q.status === 'answered' ? 'Answered' : 'Waiting for scientist'}
                </span>
                {q.idea && <span className={`${chip} bg-violet-100 text-violet-900`}>Research idea</span>}
                <span className="text-neutral-500">on {q.title} · {q.reason}</span>
              </div>
              <p className="mt-2 font-semibold text-ink">“{q.q}”</p>
              {q.answer && (
                <p className="mt-2 rounded-lg bg-neutral-100 p-3 text-sm text-neutral-800">
                  <strong>Scientist:</strong> {q.answer}
                </p>
              )}
              {staff && q.status === 'pending' && (
                <div className="mt-3 space-y-2">
                  <textarea value={ans[q.id] || ''} onChange={(e) => setAns({ ...ans, [q.id]: e.target.value })}
                    rows={3} placeholder="Write your answer…" aria-label="Your answer" className={inputCls} />
                  <div className="flex flex-wrap gap-2">
                    <button type="button" disabled={!(ans[q.id] || '').trim()}
                      onClick={() => patch(q.id, { status: 'answered', answer: ans[q.id].trim() }, `Answered #${q.id}`)}
                      className={btn}><Icon n="check" className="h-4 w-4" />Send answer</button>
                    <button type="button" onClick={() => patch(q.id, { idea: !q.idea }, `${q.idea ? 'Unmarked' : 'Marked'} research idea #${q.id}`)}
                      className={btnGhost}>{q.idea ? 'Unmark idea' : 'Mark as research idea'}</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : <Empty icon="message">{staff ? 'No questions right now.' : 'Questions you send to scientists appear here with their answers.'}</Empty>}
    </Card>
  );
}

/* =====================================================================
   DRAFTS (contributor)
===================================================================== */
function Drafts({ me }) {
  const [drafts, setDrafts] = useStore('polaris_drafts', SEED_DRAFTS);
  const [f, setF] = useState({ id: null, title: '', body: '', media: [] });
  const mine = drafts.filter((d) => d.by === me.email);
  const reset = () => setF({ id: null, title: '', body: '', media: [] });
  const save = (status) => {
    if (!f.title.trim() || !f.body.trim()) return;
    const item = { id: f.id || Date.now(), title: f.title.trim(), body: f.body.trim(), by: me.email, status, time: Date.now(), media: f.media };
    setDrafts((l) => (f.id ? l.map((d) => (d.id === f.id ? item : d)) : [item, ...l]));
    audit(me.email, `${status === 'review' ? 'Submitted' : 'Saved'} “${item.title}”`);
    reset();
  };
  const edit = (d) => setF({ id: d.id, title: d.title, body: d.body, media: d.media || [] });
  const del = (d) => { setDrafts((l) => l.filter((x) => x.id !== d.id)); audit(me.email, `Deleted “${d.title}”`); };
  return (
    <>
      <Card title={f.id ? 'Edit draft' : 'New expedition story / report'} icon="pencil">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-ink">Title
            <input value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} className={`${inputCls} mt-1 font-normal`} />
          </label>
          <label className="block text-sm font-semibold text-ink">Content
            <textarea rows={6} value={f.body} onChange={(e) => setF({ ...f, body: e.target.value })} className={`${inputCls} mt-1 font-normal`} />
          </label>
          <div>
            <p className="mb-2 text-sm font-semibold text-ink">Attachments</p>
            <MediaUploader onAdd={(m) => setF((s) => ({ ...s, media: [...s.media, m] }))} hint="Add photos, video, or PDF" />
            {f.media.length > 0 && (
              <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {f.media.map((m) => <MediaCard key={m.id} m={m} onRemove={(id) => setF((s) => ({ ...s, media: s.media.filter((x) => x.id !== id) }))} />)}
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => save('draft')} className={btnGhost}><Icon n="file" className="h-3.5 w-3.5" />Save draft</button>
            <button type="button" onClick={() => save('review')} className={btn}><Icon n="scope" className="h-4 w-4" />Submit for review</button>
            {f.id && <button type="button" onClick={reset} className={btnGhost}>Cancel</button>}
          </div>
        </div>
      </Card>

      <Card title="My submissions" icon="folder" right={<span className="text-xs text-neutral-500">{mine.length} item(s)</span>}>
        {mine.length ? (
          <ul className="space-y-3">
            {mine.map((d) => (
              <li key={d.id} className="rounded-lg border border-neutral-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-ink">{d.title}</p>
                  <Badge s={d.status} />
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{d.body}</p>
                {d.comment && <p className="mt-2 rounded-lg bg-red-50 p-2 text-sm text-red-800">Reviewer: {d.comment}</p>}
                {d.media?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.media.map((m) => (
                      <span key={m.id} className={`${chip} bg-neutral-100 text-neutral-700`}>
                        <Icon n={mediaIcon(m.type)} className="h-3.5 w-3.5" />{m.name}
                      </span>
                    ))}
                  </div>
                )}
                <p className="mt-2 text-xs text-neutral-500">{when(d.time)}</p>
                {(d.status === 'draft' || d.status === 'changes') && (
                  <div className="mt-2 flex gap-2">
                    <button type="button" onClick={() => edit(d)} className={btnGhost}>Edit</button>
                    <button type="button" onClick={() => del(d)} className={btnGhost}>
                      <Icon n="trash" className="h-3.5 w-3.5" />Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : <Empty icon="pencil">No drafts yet. Write your first one above.</Empty>}
      </Card>
    </>
  );
}

/* =====================================================================
   QUEUE (editor / scientist)
===================================================================== */
function Queue({ mode, me }) {
  const [drafts, setDrafts] = useStore('polaris_drafts', SEED_DRAFTS);
  const [cm, setCm] = useState({});
  const [q, setQ] = useState('');
  const want = { review: 'review', publish: 'approved', library: 'published' }[mode];
  const list = drafts
    .filter((d) => d.status === want)
    .filter((d) => (d.title + d.by).toLowerCase().includes(q.toLowerCase()));
  const set = (d, p, msg) => { setDrafts((l) => l.map((x) => (x.id === d.id ? { ...x, ...p } : x))); audit(me.email, `${msg} “${d.title}”`); };
  const del = (d) => { setDrafts((l) => l.filter((x) => x.id !== d.id)); audit(me.email, `Deleted “${d.title}”`); };
  const T = { review: 'Review queue', publish: 'Ready to publish', library: 'Published content' }[mode];
  const ICON = { review: 'scope', publish: 'mega', library: 'book' }[mode];
  return (
    <Card title={T} icon={ICON}
      right={
        <div className="flex items-center gap-2">
          <div className="relative">
            <Icon n="search" className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" aria-label="Search queue" className={`${inputCls} w-44 pl-8`} />
          </div>
          <span className="text-xs text-neutral-500">{list.length} item(s)</span>
        </div>
      }>
      {list.length ? (
        <ul className="space-y-3">
          {list.map((d) => (
            <li key={d.id} className="rounded-lg border border-neutral-200 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-ink">{d.title}</p>
                <Badge s={d.status} />
              </div>
              <p className="text-xs text-neutral-500">by {d.by} · {when(d.time)}</p>
              <p className="mt-2 whitespace-pre-wrap text-sm text-neutral-700">{d.body}</p>
              {d.media?.length > 0 && (
                <div className="mt-3 grid gap-2 sm:grid-cols-4">
                  {d.media.map((m) => <MediaCard key={m.id} m={m} />)}
                </div>
              )}
              {mode === 'review' && (
                <div className="mt-3 space-y-2">
                  <textarea rows={2} aria-label="Reviewer comment" value={cm[d.id] || ''}
                    onChange={(e) => setCm({ ...cm, [d.id]: e.target.value })}
                    placeholder="Comment (required to request changes)" className={inputCls} />
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={() => set(d, { status: 'approved', comment: '' }, 'Approved')} className={btn}>
                      <Icon n="check" className="h-4 w-4" />Scientifically accurate
                    </button>
                    <button type="button" disabled={!(cm[d.id] || '').trim()}
                      onClick={() => set(d, { status: 'changes', comment: cm[d.id].trim() }, 'Requested changes on')} className={btnGhost}>
                      <Icon n="alert" className="h-3.5 w-3.5" />Request changes
                    </button>
                  </div>
                </div>
              )}
              {mode === 'publish' && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={() => set(d, { status: 'published' }, 'Published')} className={btn}>
                    <Icon n="mega" className="h-4 w-4" />Publish
                  </button>
                  <button type="button" onClick={() => set(d, { status: 'review' }, 'Sent back to review')} className={btnGhost}>Send back</button>
                </div>
              )}
              {mode === 'library' && (
                <div className="mt-3 flex flex-wrap gap-2">
                  <button type="button" onClick={() => set(d, { status: 'approved' }, 'Unpublished')} className={btnGhost}>Unpublish</button>
                  <button type="button" onClick={() => del(d)} className={btnGhost}>
                    <Icon n="trash" className="h-3.5 w-3.5" />Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : <Empty icon={ICON}>{mode === 'review' ? 'Nothing waiting for review.' : mode === 'publish' ? 'No approved content waiting.' : 'Nothing published yet.'}</Empty>}
    </Card>
  );
}

/* =====================================================================
   RESEARCH DATA (scientist) — 50 MB limit
===================================================================== */
const blankData = () => ({ title: '', topic: 'ice', date: new Date().toISOString().slice(0, 10), notes: '', media: [] });

function ResearchData({ me }) {
  const [list, setList] = useStore('polaris_research_data', []);
  const [f, setF] = useState(blankData);
  const add = (m) => setF((s) => ({ ...s, media: [...s.media, m] }));
  const save = () => {
    if (!f.title.trim()) return;
    const item = { ...f, id: Date.now(), by: me.email, time: Date.now() };
    setList((l) => [item, ...l]);
    audit(me.email, `Uploaded research data “${item.title}”`);
    setF(blankData());
  };
  return (
    <>
      <Card title="Upload research data" icon="folder">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold text-ink sm:col-span-2">Title
            <input value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} className={`${inputCls} mt-1 font-normal`} />
          </label>
          <label className="text-sm font-semibold text-ink">Topic
            <select value={f.topic} onChange={(e) => setF({ ...f, topic: e.target.value })} className={`${inputCls} mt-1 font-normal`}>
              {Object.keys(TAG_TO_PAGE).map((k) => <option key={k} value={k}>{pretty(k)}</option>)}
            </select>
          </label>
          <label className="text-sm font-semibold text-ink">Date
            <input type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} className={`${inputCls} mt-1 font-normal`} />
          </label>
          <label className="text-sm font-semibold text-ink sm:col-span-2">Notes
            <textarea rows={3} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} className={`${inputCls} mt-1 font-normal`} />
          </label>
        </div>
        <div className="mt-4">
          <MediaUploader onAdd={add} maxSizeMB={50} hint="Dataset images, video logs, or PDF reports" />
          {f.media.length > 0 && (
            <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {f.media.map((m) => <MediaCard key={m.id} m={m} onRemove={(id) => setF((s) => ({ ...s, media: s.media.filter((x) => x.id !== id) }))} />)}
            </div>
          )}
        </div>
        <button type="button" onClick={save} disabled={!f.title.trim()} className={`${btn} mt-4`}>
          <Icon n="upload" className="h-4 w-4" />Save dataset
        </button>
      </Card>

      <Card title="Uploaded datasets" icon="folder"
        right={<span className="text-xs text-neutral-500">{list.length} item(s)</span>}>
        {list.length ? (
          <ul className="space-y-3">
            {list.map((d) => (
              <li key={d.id} className="rounded-lg border border-neutral-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-ink">{d.title}</p>
                  <span className={`${chip} bg-neutral-100 text-neutral-700`}>{pretty(d.topic)}</span>
                </div>
                <p className="text-xs text-neutral-500">{d.date} · by {d.by}</p>
                {d.notes && <p className="mt-2 text-sm text-neutral-700">{d.notes}</p>}
                {d.media?.length > 0 && (
                  <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {d.media.map((m) => <MediaCard key={m.id} m={m} />)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : <Empty icon="folder">No datasets yet. Upload your first one above.</Empty>}
      </Card>
    </>
  );
}

/* =====================================================================
   ANALYTICS
===================================================================== */
function Analytics() {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        <Stat label="Visits today" value="420" icon="eye" tone="ink" />
        <Stat label="Weekly visits" value={VISITS.reduce((a, d) => a + d[1], 0)} icon="chart" tone="warm" n={1} />
        <Stat label="Monthly visits" value={MONTHLY.reduce((a, d) => a + d[1], 0)} icon="trend" tone="emerald" n={2} />
      </div>
      <Card title="Visits (last 7 days)" icon="chart"
        right={<span className="text-xs text-neutral-500">Sample data</span>}>
        <Line data={VISITS} height={220} />
      </Card>
      <Card title="Monthly visits" icon="trend"
        right={<span className="text-xs text-neutral-500">Sample data</span>}>
        <Line data={MONTHLY} height={220} />
      </Card>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Most read topics" icon="star"><Bars data={TOPICS} /></Card>
        <Card title="Traffic sources" icon="globe">
          <Donut label="visits" data={[['Organic', 480], ['Direct', 320], ['Social', 210], ['Referral', 120]]} />
        </Card>
      </div>
    </>
  );
}

/* =====================================================================
   USERS (admin)
===================================================================== */
function Users({ me }) {
  const [users, setUsers] = useStore('polaris_users', SEED_USERS);
  const [q, setQ] = useState('');
  const [roleF, setRoleF] = useState('all');
  const upd = (email, p, msg) => { setUsers((l) => l.map((u) => (u.email === email ? { ...u, ...p } : u))); audit(me.email, `${msg} ${email}`); };
  const list = users
    .filter((u) => `${u.name} ${u.email}`.toLowerCase().includes(q.toLowerCase()))
    .filter((u) => roleF === 'all' || u.role === roleF);
  return (
    <Card title="Users & roles" icon="users"
      right={
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Icon n="search" className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search users…" className={`${inputCls} w-48 pl-8`} aria-label="Search users" />
          </div>
          <select value={roleF} onChange={(e) => setRoleF(e.target.value)} className={`${inputCls} w-40`} aria-label="Filter role">
            <option value="all">All roles</option>
            {Object.entries(ROLE).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
          </select>
        </div>
      }>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-neutral-500">
            <tr>
              <th className="py-2">User</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((u) => (
              <tr key={u.email} className="border-t border-neutral-200">
                <td className="py-2.5">
                  <p className="font-semibold text-ink">{u.name}</p>
                  <p className="text-xs text-neutral-500">{u.email}</p>
                </td>
                <td>
                  <select aria-label={`Role for ${u.name}`} value={u.role}
                    onChange={(e) => upd(u.email, { role: e.target.value }, `Role → ${e.target.value} for`)}
                    className={`${inputCls} w-44`}>
                    {Object.entries(ROLE).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
                  </select>
                </td>
                <td className="text-xs text-neutral-500">{new Date(u.joined || Date.now()).toLocaleDateString('en-IN')}</td>
                <td>
                  <button type="button" onClick={() => upd(u.email, { active: !u.active }, u.active ? 'Suspended' : 'Reactivated')}
                    className={`${chip} ${u.active ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-800'} ${focus}`}>
                    {u.active ? 'Active' : 'Suspended'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-neutral-500">Demo list. In the live system this reads from your user database and approves staff-role requests.</p>
    </Card>
  );
}

/* =====================================================================
   ALL CONTENT (admin)
===================================================================== */
function AllContent({ me }) {
  const [drafts, setDrafts] = useStore('polaris_drafts', SEED_DRAFTS);
  const [q, setQ] = useState('');
  const list = drafts.filter((d) => (d.title + d.by).toLowerCase().includes(q.toLowerCase()));
  return (
    <Card title="All content" icon="folder"
      right={
        <div className="relative">
          <Icon n="search" className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" aria-label="Search content" className={`${inputCls} w-44 pl-8`} />
        </div>
      }>
      {list.length ? (
        <ul className="space-y-2">
          {list.map((d) => (
            <li key={d.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-neutral-200 p-3">
              <div className="min-w-0">
                <p className="font-semibold text-ink">{d.title}</p>
                <p className="text-xs text-neutral-500">{d.by} · {when(d.time)}</p>
              </div>
              <div className="flex items-center gap-2">
                <select aria-label={`Status for ${d.title}`} value={d.status}
                  onChange={(e) => { setDrafts((l) => l.map((x) => (x.id === d.id ? { ...x, status: e.target.value } : x))); audit(me.email, `Set “${d.title}” to ${e.target.value}`); }}
                  className={`${inputCls} w-36`}>
                  {Object.entries(ST).map(([k, v]) => <option key={k} value={k}>{v[0]}</option>)}
                </select>
                <button type="button" aria-label={`Delete ${d.title}`}
                  onClick={() => { setDrafts((l) => l.filter((x) => x.id !== d.id)); audit(me.email, `Deleted “${d.title}”`); }} className={btnGhost}>
                  <Icon n="trash" className="h-3.5 w-3.5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : <Empty icon="folder">No content yet.</Empty>}
    </Card>
  );
}

/* =====================================================================
   SYSTEM (admin)
===================================================================== */
function System({ me }) {
  const [fl, setFl] = useStore('polaris_flags', { signups: true, autoForward: true, reviewRequired: true, banner: false });
  const [log, setLog] = useState(() => ls.get('polaris_audit', []));
  const LBL = {
    signups: 'Open public sign-ups',
    autoForward: 'Auto-forward unanswered AI questions to scientists',
    reviewRequired: 'Require scientist review before publishing',
    banner: 'Show maintenance banner',
  };
  return (
    <>
      <Card title="Platform settings" icon="cog">
        <ul className="space-y-3">
          {Object.entries(LBL).map(([k, l]) => (
            <li key={k} className="flex items-center justify-between gap-3 rounded-lg border border-neutral-100 p-3">
              <span className="text-sm text-neutral-800">{l}</span>
              <button type="button" role="switch" aria-checked={!!fl[k]} aria-label={l}
                onClick={() => { setFl({ ...fl, [k]: !fl[k] }); audit(me.email, `${l}: ${!fl[k] ? 'on' : 'off'}`); setLog(ls.get('polaris_audit', [])); }}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${fl[k] ? 'bg-ink' : 'bg-neutral-300'} ${focus}`}>
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${fl[k] ? 'left-[22px]' : 'left-0.5'}`} />
              </button>
            </li>
          ))}
        </ul>
      </Card>
      <Card title="Audit log" icon="shield"
        right={<button type="button" onClick={() => { ls.set('polaris_audit', []); setLog([]); }} className={btnGhost}>Clear</button>}>
        {log.length ? (
          <ul className="max-h-96 space-y-1.5 overflow-y-auto text-sm">
            {log.map((l, i) => (
              <li key={i} className="flex gap-3 border-b border-neutral-100 pb-1.5">
                <span className="shrink-0 text-xs text-neutral-500">{when(l.t)}</span>
                <span className="text-neutral-800"><strong>{l.who}</strong> · {l.msg}</span>
              </li>
            ))}
          </ul>
        ) : <Empty icon="shield">No activity recorded yet.</Empty>}
      </Card>
    </>
  );
}

/* =====================================================================
   PROFILE
===================================================================== */
function Profile({ me, role, logout }) {
  const [p, setP] = useStore(`polaris_profile_${me.email}`, { name: me.name, bio: '', lang: 'EN' });
  const [f, setF] = useState(p);
  const [msg, setMsg] = useState('');
  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 2200); };
  const wipe = () => {
    try {
      Object.keys(localStorage)
        .filter((k) => /^polaris_(note|react)_|^polaris_interest$|^polaris_bookmarks$/.test(k))
        .forEach((k) => localStorage.removeItem(k));
    } catch { /* blocked */ }
    flash('Your notes, reactions, bookmarks and interests were deleted from this device.');
  };
  return (
    <>
      <Card title="Profile" icon="user">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-semibold text-ink">Display name
            <input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className={`${inputCls} mt-1 font-normal`} />
          </label>
          <label className="text-sm font-semibold text-ink">Email
            <input value={me.email} readOnly className={`${inputCls} mt-1 bg-neutral-100 font-normal`} />
          </label>
          <label className="text-sm font-semibold text-ink">Preferred language
            <select value={f.lang} onChange={(e) => setF({ ...f, lang: e.target.value })} className={`${inputCls} mt-1 font-normal`}>
              <option value="EN">English</option>
              <option value="HI">हिन्दी</option>
            </select>
          </label>
          <div className="text-sm font-semibold text-ink">Role
            <p className="mt-1 rounded-lg bg-neutral-100 px-3 py-2 font-normal text-neutral-700">{ROLE[role]}</p>
          </div>
          <label className="text-sm font-semibold text-ink sm:col-span-2">About you
            <textarea rows={3} value={f.bio} onChange={(e) => setF({ ...f, bio: e.target.value })}
              className={`${inputCls} mt-1 font-normal`} placeholder="Student, teacher, researcher…" />
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => { setP(f); ls.set('polaris_lang', f.lang); flash('Profile saved'); }} className={btn}>
            <Icon n="check" className="h-4 w-4" />Save profile
          </button>
          <button type="button" onClick={logout} className={btnGhost}>
            <Icon n="logout" className="h-3.5 w-3.5" />Log out
          </button>
        </div>
      </Card>
      <Card title="Your data" icon="shield">
        <p className="text-sm text-neutral-700">Notes, reactions, bookmarks and interests are stored on this device. You can delete them at any time.</p>
        <button type="button" onClick={wipe} className={`${btnGhost} mt-3`}>
          <Icon n="trash" className="h-3.5 w-3.5" />Delete my saved data
        </button>
      </Card>
      <p className="text-sm text-neutral-600" aria-live="polite">{msg}</p>
    </>
  );
}

/* =====================================================================
   DASHBOARD SHELL
===================================================================== */
export default function Dashboard() {
  const auth = useAuth();
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();

  const realRole = auth.user ? auth.role : null; // 'guest' means logged out
  const email = auth.user?.email ?? 'guest@demo.polaris';

  const [view, setView] = useState(null); // admin "preview as"
  const [navOpen, setNavOpen] = useState(false);

  const role = realRole === 'admin' && view ? view : realRole;
  const sec = params.get('sec') || 'overview';
  const setSec = (k) => setParams({ sec: k }, { replace: true });

  const prof = ls.get(`polaris_profile_${email}`, null);
  const me = { email, name: prof?.name || auth.user?.name || email.split('@')[0] };

  useEffect(() => { if (!realRole) nav('/login', { replace: true }); }, [realRole, nav]);

  // If the URL asks for a section this role does not have, fall back to overview.
  useEffect(() => {
    if (NAV[role] && !NAV[role].some(([k]) => k === sec)) {
      setParams({ sec: 'overview' }, { replace: true });
    }
  }, [role, sec, setParams]);

  if (!realRole || !NAV[role]) return null;

  const logout = () => { auth.logout(); nav('/login'); };
  const P = { me, role, go: setSec };
  const allowed = NAV[role].some(([k]) => k === sec);
  const current = allowed ? sec : 'overview';

  const body = {
    overview: <Overview {...P} />,
    explore: <Explore />,
    notes: <Notes />,
    questions: <Questions {...P} />,
    interests: <Interests />,
    bookmarks: <Bookmarks />,
    drafts: <Drafts {...P} />,
    review: <Queue mode="review" {...P} />,
    publish: <Queue mode="publish" {...P} />,
    library: <Queue mode="library" {...P} />,
    media: <MediaLibrary me={me} canDelete={role === 'admin' || role === 'editor' || role === 'scientist'} />,
    research: <ResearchData {...P} />,
    analytics: <Analytics />,
    users: <Users {...P} />,
    content: <AllContent {...P} />,
    system: <System {...P} />,
    profile: <Profile {...P} logout={logout} />,
  }[current];

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-[1400px] px-4 py-6">
        <style>{`
          @keyframes dbIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
          .db-in { opacity: 0; animation: dbIn .5s ease-out forwards; }
          @media (prefers-reduced-motion: reduce) { .db-in { opacity: 1; animation: none; } }
        `}</style>

        {/* HEADER */}
        <header className="relative overflow-hidden rounded-card bg-ink text-white shadow-card">
          <Photo kind="aurora" className="absolute inset-0 h-full w-full opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
          <div className="relative flex flex-wrap items-center gap-4 p-6 md:p-8">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white font-serif text-2xl font-black text-ink shadow-lg">
              {me.name[0]?.toUpperCase()}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-white/75">Welcome back</p>
              <h1 className="truncate font-serif text-2xl font-black md:text-3xl">{me.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                  <Icon n="shield" className="h-3.5 w-3.5" />{ROLE[role]}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Online
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Notifications"
                className={`grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 ${focus}`}>
                <Icon n="bell" className="h-4 w-4" />
              </button>
              {realRole === 'admin' && (
                <div className="hidden sm:block">
                  <label htmlFor="viewas" className="block text-[10px] uppercase tracking-wider text-white/70">Preview as</label>
                  <select id="viewas" value={view || 'admin'}
                    onChange={(e) => setView(e.target.value === 'admin' ? null : e.target.value)}
                    className={`mt-1 rounded-lg border border-white/30 bg-ink/70 px-2 py-1.5 text-sm backdrop-blur ${focus}`}>
                    {Object.entries(ROLE).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
                  </select>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* BODY */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[260px_1fr]">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-4 lg:self-start">
            <button type="button" onClick={() => setNavOpen((v) => !v)}
              aria-expanded={navOpen}
              className={`${btnGhost} mb-2 w-full justify-between lg:hidden`}>
              <span className="inline-flex items-center gap-2"><Icon n="filter" className="h-3.5 w-3.5" />Sections</span>
              <Icon n="chevron" className={`h-4 w-4 transition ${navOpen ? 'rotate-90' : ''}`} />
            </button>
            <nav aria-label="Dashboard sections"
              className={`${navOpen ? 'block' : 'hidden'} space-y-1 rounded-card border border-neutral-200 bg-white p-2 shadow-card lg:block`}>
              {NAV[role].map(([k, l, i]) => (
                <button key={k} type="button" onClick={() => { setSec(k); setNavOpen(false); }}
                  aria-current={current === k ? 'page' : undefined}
                  className={`flex w-full items-center gap-3 rounded-lg px-3.5 py-2.5 text-left text-sm font-semibold transition-colors ${
                    current === k ? 'bg-ink text-white shadow-sm' : 'text-neutral-700 hover:bg-neutral-100'
                  } ${focus}`}>
                  <Icon n={i} className="h-4 w-4" />
                  <span className="flex-1">{l}</span>
                  {current === k && <Icon n="chevron" className="h-3.5 w-3.5" />}
                </button>
              ))}

              {/* Sidebar footer: admin badge shows ONLY for the real admin */}
              <div className="mt-2 border-t border-neutral-200 pt-2">
                {realRole === 'admin' && (
                  <p className="mb-2 flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 text-xs font-semibold text-ink">
                    <Icon n="shield" className="h-3.5 w-3.5" />
                    Admin mode{view ? ` · previewing ${ROLE[view]}` : ''}
                  </p>
                )}
                <button type="button" onClick={logout} className={`${btnGhost} w-full`}>
                  <Icon n="logout" className="h-3.5 w-3.5" />Log out
                </button>
              </div>
            </nav>
          </aside>

          {/* MAIN */}
          <main key={`${role}-${current}`} className="db-in min-w-0 space-y-5">{body}</main>
        </div>
      </div>
    </div>
  );
}