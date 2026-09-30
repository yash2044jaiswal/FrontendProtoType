import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_ai_processing_and_tagging_queue_admin_ai_queue/code.html
const BODY_CLASS = "bg-surface-container-low font-body-md text-on-surface antialiased min-h-screen";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}button:not(:disabled),[role='button']{cursor:pointer;}button:disabled{cursor:not-allowed;}";
const PAGE_SCRIPT = "";

const DRAFT_KEY = 'polaris-ai-queue-draft';
const DEFAULT_ZOOM = 145;
const ZOOM_STEP = 25;
const ZOOM_MIN = 50;
const ZOOM_MAX = 300;

const NAV_ITEMS = [
  { label: 'Dashboard', path: 'dashboard', to: '/admin', exact: true },
  { label: 'Expedition Manager', path: 'expedition-manager', to: '/admin/expeditions' },
  { label: 'Upload & Datasets', path: 'upload-and-datasets', to: '/admin/upload' },
  { label: 'AI Processing & OCR', path: 'ai-queue', to: '/admin/ai-queue' },
  { label: 'Content Studio', path: 'content-studio', to: '/admin/studio' },
  { label: 'Review Queue', path: 'review-queue', to: '/admin/review' },
  { label: 'Publishing & Releases', path: 'publishing-and-releases', to: '/admin/publishing' },
  { label: 'Rights & Licenses', path: 'rights-and-licenses', to: '/admin/rights' },
  { label: 'Integrations (NPDC)', path: 'integrations', to: '/admin/integrations' },
  { label: 'Analytics & Telemetry', path: 'analytics-and-telemetry', to: '/admin/analytics' },
  { label: 'Users & Access', path: 'users-and-access', to: '/admin/users' },
  { label: 'Audit Logs', path: 'audit-logs', to: '/admin/audit-logs' },
];

const NAV_BASE = 'flex items-center px-space-sm py-2 rounded ';
const NAV_INACTIVE = NAV_BASE + 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm';
const NAV_ACTIVE = NAV_BASE + 'transition-colors bg-secondary-container/40 text-primary font-semibold border-l-2 border-primary';

const STATION_OPTIONS = [
  { value: 'all', label: 'All Stations (Dakshin Gangotri, Maitri, Bharati, Himadri)' },
  { value: 'dg', label: 'Dakshin Gangotri Station (Historical)' },
  { value: 'maitri', label: 'Maitri Station' },
  { value: 'bharati', label: 'Bharati Station' },
  { value: 'himadri', label: 'Himadri (Svalbard)' },
];

const TYPE_OPTIONS = [
  { value: 'all', label: 'All Data Types (Logbook Scans, NetCDF, Video, Reports)' },
  { value: 'logbook', label: 'Historical Logbook Scans (PDF/TIFF)' },
  { value: 'aws', label: 'AWS Sensor Streams (.nc / .csv)' },
  { value: 'uav', label: 'UAV Aerial Survey Footage (.mov / 4K)' },
  { value: 'bio', label: 'Biological & Geological Surveys (.docx)' },
];

const ROWS = [
  {
    id: 'r1', station: 'dg', type: 'logbook', legacy: true,
    icon: 'description', iconClass: 'bg-secondary-container text-on-secondary-container',
    name: '1983_Dakshin_Gangotri_Logbook_Scan_p14.pdf',
    badge: 'LEGACY ARCHIVE', badgeClass: 'bg-secondary-container text-on-secondary-container',
    meta: 'Tier A Priority • OCR + NLP',
    origin: 'Dakshin Gangotri (Station 01)', date: '14 Jan 1983 / Dig. 08:24 IST',
    stages: [
      { label: '1. Ingest', state: 'done' },
      { label: '2. OCR Extract', state: 'done' },
      { label: '3. Tagging', state: 'active' },
      { label: '4. Compliance', state: 'todo' },
    ],
    bar: [['bg-tertiary', 'w-1/4'], ['bg-tertiary', 'w-1/4'], ['bg-primary-container', 'w-1/4'], ['bg-surface-container-high', 'w-1/4']],
    conf: '96.8%', confClass: 'bg-tertiary-container/15 text-tertiary',
  },
  {
    id: 'r2', station: 'maitri', type: 'aws', legacy: false,
    icon: 'query_stats', iconClass: 'bg-secondary-container text-on-secondary-container',
    name: 'Maitri_AWS_Sonic_Anemometer_TimeSeries_Q3.nc',
    badge: 'NETCDF-4', badgeClass: 'bg-surface-container-high text-on-surface-variant',
    meta: 'Maitri Station • Automated Stream',
    origin: 'Maitri Station (Schirmacher Oasis)', date: '18 Oct 2024 / 04:12 UTC',
    stages: [
      { label: '1. Ingest', state: 'done' },
      { label: '2. Semantic Parse', state: 'active' },
      { label: '3. Tagging', state: 'todo' },
      { label: '4. Compliance', state: 'todo' },
    ],
    bar: [['bg-tertiary', 'w-1/4'], ['bg-primary-container', 'w-1/4'], ['bg-surface-container-high', 'w-1/2']],
    conf: '98.1%', confClass: 'bg-secondary-container text-on-secondary-container',
  },
  {
    id: 'r3', station: 'himadri', type: 'uav', legacy: false,
    icon: 'movie', iconClass: 'bg-surface-container-high text-on-surface-variant',
    name: 'Kongsfjorden_Fjord_Glacier_UAV_Aerial_4K.mov',
    badge: 'VIDEO STREAM', badgeClass: 'bg-surface-container-high text-on-surface-variant',
    meta: 'Himadri (Arctic) • Drone Photogrammetry',
    origin: 'Ny-Ålesund, Svalbard', date: '12 Aug 2024 / Drone Flight #04',
    stages: [
      { label: '1. Ingest', state: 'done' },
      { label: '2. Keyframes', state: 'done' },
      { label: '3. Object Detect', state: 'active' },
      { label: '4. Compliance', state: 'todo' },
    ],
    bar: [['bg-tertiary', 'w-1/4'], ['bg-tertiary', 'w-1/4'], ['bg-primary-container', 'w-1/4'], ['bg-surface-container-high', 'w-1/4']],
    conf: '94.3%', confClass: 'bg-surface-container text-secondary',
  },
  {
    id: 'r4', station: 'bharati', type: 'bio', legacy: false,
    icon: 'science', iconClass: 'bg-tertiary-container/15 text-tertiary',
    name: 'Larsemann_Hills_Biological_Specimen_Survey.docx',
    badge: 'READY TO DISPATCH', badgeClass: 'bg-tertiary-container/15 text-tertiary',
    meta: 'Bharati Station • Biological Taxa',
    origin: 'Bharati Base (Larsemann Hills)', date: '02 Feb 2024 / Survey Doc #89',
    stages: [
      { label: '1. Ingest', state: 'done' },
      { label: '2. Entity Extr.', state: 'done' },
      { label: '3. Graph Linking', state: 'done' },
      { label: '4. Verified', state: 'done' },
    ],
    bar: [['bg-tertiary', 'w-full']],
    conf: '99.2%', confClass: 'bg-tertiary-container/15 text-tertiary',
  },
];

const INITIAL_TAGS = [
  { id: 't1', name: '#KatabaticWind', meta: '98% match • WMO-048', status: null },
  { id: 't2', name: '#DakshinGangotri', meta: '100% match • Station ID: DG-01', status: null },
  { id: 't3', name: '#BlizzardDynamics', meta: '94% match • Severe Weather', status: null },
  { id: 't4', name: '#SurfacePressure', meta: '91% match • Synoptic Met', status: null },
];

const INITIAL_ALT_TEXT = 'High-resolution archival scan of handwritten polar meteorological logbook dated 14 January 1983 detailing wind speed measurements and fuel logistics during winter storm.';

const IMG_ALT = 'High-resolution historical archival scan of an official handwritten meteorological logbook from the 1983 Indian Antarctic Expedition to Dakshin Gangotri. The yellowed paper exhibits authentic ink bleed, official circular stamped seals of Department of Ocean Development, handwritten barometric and wind readings, surveyor signatures in blue fountain pen, and polar latitude coordinates -70.75 S.';
const IMG_SRC = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0T49BrxG0wH8D4Kou8mx0Z6ToXYbP8-YkOuEsneCHx_scPlKV6YcAGhkpVkpY1Iq7kj2hYz6QyQ1fZhx_EKRNSlsypHtzMIeQgb4FlJonVQIDN3Mz1xWt42pwDIvYVRtewzh3eMPvinonXG0_VXyDjubG_J0q7mWj3533OuDXn-yOFaui0rsrhS3oVU3HjJ-_a-P75fL37T9748UeQC_zg86EJW0XzdmtwfbS1drLac8ZS8PzeKVf';

function loadDraft() {
  try {
    const raw = sessionStorage.getItem(DRAFT_KEY);
    if (raw) {
      const d = JSON.parse(raw);
      return {
        tags: Array.isArray(d.tags) ? d.tags : INITIAL_TAGS,
        altText: typeof d.altText === 'string' ? d.altText : INITIAL_ALT_TEXT,
      };
    }
  } catch (err) {
    /* storage unavailable */
  }
  return { tags: INITIAL_TAGS, altText: INITIAL_ALT_TEXT };
}

const csvEscape = (v) => '"' + String(v).replace(/"/g, '""') + '"';

export default function AdminAiQueuePage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const searchRef = useRef(null);

  const [initialDraft] = useState(loadDraft);
  const [query, setQuery] = useState('');
  const [queueTab, setQueueTab] = useState('active');
  const [stationFilter, setStationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const [selected, setSelected] = useState(() => new Set(ROWS.map((r) => r.id)));
  const [activeId, setActiveId] = useState('r1');
  const [queueNotice, setQueueNotice] = useState('');
  const [footerNotice, setFooterNotice] = useState('');

  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [rotation, setRotation] = useState(0);
  const [showOcrBoxes, setShowOcrBoxes] = useState(true);
  const [imgFailed, setImgFailed] = useState(false);

  const [tags, setTags] = useState(initialDraft.tags);
  const [editingTagId, setEditingTagId] = useState(null);
  const [editingTagValue, setEditingTagValue] = useState('');

  const [altText, setAltText] = useState(initialDraft.altText);
  const [altEditing, setAltEditing] = useState(false);
  const [altCopied, setAltCopied] = useState(false);
  const [reOcrFlagged, setReOcrFlagged] = useState(false);

  // Cmd/Ctrl+K focuses the header search box (shown as the ⌘K hint)
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'KeyK') {
        e.preventDefault();
        if (searchRef.current) searchRef.current.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!refreshing) return undefined;
    const id = setTimeout(() => setRefreshing(false), 800);
    return () => clearTimeout(id);
  }, [refreshing]);

  useEffect(() => {
    if (!queueNotice) return undefined;
    const id = setTimeout(() => setQueueNotice(''), 4000);
    return () => clearTimeout(id);
  }, [queueNotice]);

  useEffect(() => {
    if (!footerNotice) return undefined;
    const id = setTimeout(() => setFooterNotice(''), 4000);
    return () => clearTimeout(id);
  }, [footerNotice]);

  useEffect(() => {
    if (!altCopied) return undefined;
    const id = setTimeout(() => setAltCopied(false), 1500);
    return () => clearTimeout(id);
  }, [altCopied]);

  const q = query.trim().toLowerCase();
  const visibleRows = ROWS.filter((r) => {
    if (queueTab === 'legacy' && !r.legacy) return false;
    if (stationFilter !== 'all' && r.station !== stationFilter) return false;
    if (typeFilter !== 'all' && r.type !== typeFilter) return false;
    if (q && ![r.name, r.origin, r.meta, r.badge, r.date].some((s) => s.toLowerCase().includes(q))) return false;
    return true;
  });

  const allSelected = selected.size === ROWS.length;
  const toggleAll = () => setSelected(allSelected ? new Set() : new Set(ROWS.map((r) => r.id)));
  const toggleRow = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const focusWorkbench = (id) => {
    setActiveId(id);
    const el = document.getElementById('workbench');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onRowClick = (e, id) => {
    if (e.target.closest('input, button, a, label')) return;
    setActiveId(id);
  };

  const acceptAllTags = () =>
    setTags((prev) => prev.map((t) => (t.status === 'rejected' ? t : { ...t, status: 'accepted' })));

  const bulkApprove = () => {
    if (selected.has('r1')) acceptAllTags();
    setQueueNotice('AI tags approved for ' + selected.size + ' selected item(s)');
  };
  const bulkRerunOcr = () => setQueueNotice(selected.size + ' selected item(s) marked for OCR re-run');
  const bulkSendReview = () => setQueueNotice(selected.size + ' selected item(s) marked for peer review');

  const exportAuditReport = () => {
    const rows = ROWS.filter((r) => selected.size === 0 || selected.has(r.id));
    const header = ['Dataset', 'Origin', 'Timestamp', 'Pipeline Stage', 'Confidence'];
    const lines = rows.map((r) => {
      const current = r.stages.find((s) => s.state === 'active') || r.stages[r.stages.length - 1];
      return [r.name, r.origin, r.date, current.label, r.conf].map(csvEscape).join(',');
    });
    const blob = new Blob([[header.map(csvEscape).join(',')].concat(lines).join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-queue-audit-report.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Tag actions
  const setTagStatus = (id, status) =>
    setTags((prev) => prev.map((t) => (t.id === id ? { ...t, status: t.status === status ? null : status } : t)));

  const startEditTag = (tag) => {
    setEditingTagId(tag.id);
    setEditingTagValue(tag.name);
  };
  const commitEditTag = () => {
    const raw = editingTagValue.trim();
    if (raw) {
      const name = raw.startsWith('#') ? raw : '#' + raw;
      setTags((prev) => prev.map((t) => (t.id === editingTagId ? { ...t, name } : t)));
    }
    setEditingTagId(null);
  };

  const copyAltText = async () => {
    try {
      await navigator.clipboard.writeText(altText);
      setAltCopied(true);
    } catch (err) {
      /* clipboard unavailable */
    }
  };

  // Footer actions
  const saveDraft = () => {
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ tags, altText }));
      setFooterNotice('Staging draft saved for this session');
    } catch (err) {
      setFooterNotice('Could not save draft: browser storage unavailable');
    }
  };
  const rejectEnrichment = () => {
    setTags((prev) => prev.map((t) => ({ ...t, status: 'rejected' })));
    setFooterNotice('AI enrichment rejected');
  };
  const approveAndDispatch = () => {
    acceptAllTags();
    navigate('/admin/review');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    if (window.__polaris && typeof window.__polaris.logout === 'function') window.__polaris.logout();
    else navigate('/');
  };

  const isNavActive = (item) => (item.exact ? pathname === item.to : pathname.startsWith(item.to));
  const noneSelected = selected.size === 0;

  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 bottom-0 w-60 bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col justify-between select-none overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-space-md py-space-md border-b border-outline-variant/20">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  ac_unit
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-primary font-bold tracking-tight leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest mt-0.5">
                  Admin System
                </span>
              </div>
            </div>
            <div className="mt-space-sm flex items-center justify-between">
              <span className="font-label-mono text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">
                MoES Portal v4.2
              </span>
              <span className="w-2 h-2 rounded-full bg-tertiary" title="Operational Node" />
            </div>
          </div>
          <div className="px-space-md py-space-sm bg-surface-container-low/70 border-b border-outline-variant/20">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                verified_user
              </span>
              <div className="flex flex-col overflow-hidden">
                <span className="font-label-md text-label-md text-on-surface truncate">
                  Dr. Ananya Sen
                </span>
                <span className="font-label-mono text-label-mono text-secondary truncate">
                  Supervisory (Roles: C, S, A)
                </span>
              </div>
            </div>
          </div>
          <nav className="flex flex-col py-space-xs px-space-xs gap-0.5" data-active-classes="bg-secondary-container/40 text-primary font-semibold border-l-2 border-primary">
            {NAV_ITEMS.map((item) => {
              const active = isNavActive(item);
              return (
                <Link key={item.path} aria-current={active ? 'page' : undefined} className={active ? NAV_ACTIVE : NAV_INACTIVE} data-path={item.path} to={item.to}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-space-sm border-t border-outline-variant/20 flex flex-col gap-space-xs bg-surface-container-lowest">
          <div className="p-2 rounded bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-mono text-[10px] text-on-surface-variant font-medium">
                NKN Node 04: Synced
              </span>
            </div>
            <span className="font-label-mono text-[10px] text-secondary font-bold">
              24ms
            </span>
          </div>
          <div className="flex items-center justify-between px-1">
            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1" to="/admin/profile">
              <span className="material-symbols-outlined text-[14px]">
                help
              </span>
              <span>
                Help & Docs
              </span>
            </Link>
            <a className="font-label-md text-label-md text-secondary hover:text-error transition-colors flex items-center gap-1" href="#" onClick={handleLogout}>
              <span className="material-symbols-outlined text-[14px]">
                logout
              </span>
              <span>
                Sign Out
              </span>
            </a>
          </div>
        </div>
      </aside>
      <div className="pl-60 flex flex-col min-h-screen">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 z-40 px-space-md flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-space-md flex-1 max-w-xl">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px] pointer-events-none">
                search
              </span>
              <input
                ref={searchRef}
                aria-label="Search expeditions, datasets, DOIs"
                className="w-full pl-9 pr-14 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Search expeditions, datasets, DOIs..."
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setQuery('');
                }}
              />
              <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-container-highest/60 text-on-surface-variant font-label-mono text-[10px] border border-outline-variant/30 pointer-events-none">
                ⌘K
              </kbd>
            </div>
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[15px]">
                sensors
              </span>
              <span className="font-label-mono text-[11px] text-on-surface-variant">
                <strong className="text-on-surface">
                  Maitri:
                </strong>
                {" -18.4°C "}
                <span className="text-outline-variant mx-1">
                  •
                </span>
                {" "}
                <strong className="text-on-surface">
                  Himadri:
                </strong>
                {" -6.8°C "}
                <span className="text-outline-variant mx-1">
                  •
                </span>
                {" "}
                <strong className="text-on-surface">
                  Bharati:
                </strong>
                {" -14.2°C"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <button aria-label="Notifications" className="relative p-2 rounded-full text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
            </button>
            <div className="h-4 w-px bg-outline-variant/40 mx-1" />
            <span className="font-label-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-bold">
              ADMIN (ROLES: C, S, A)
            </span>
            <div className="flex items-center gap-1.5 pl-1 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-primary/20">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <span className="material-symbols-outlined text-secondary text-[16px] group-hover:text-primary transition-colors">
                expand_more
              </span>
            </div>
          </div>
        </header>
        <main className="relative pt-16 flex-1 w-full bg-surface-container-low">
          <div className="flex flex-col w-full">
            <div className="w-full max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-8">
              <header className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary font-semibold">
                        FIELD OPERATIONS COMMAND
                      </span>
                      <span className="text-outline-variant font-label-mono text-label-mono">
                        •
                      </span>
                      <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                        /ADMIN/AI-QUEUE
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      AI Processing & Tagging Queue
                    </h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container shadow-sm">
                      <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        shield
                      </span>
                      <span className="font-label-mono text-label-mono font-semibold tracking-wider uppercase">
                        CLEARANCE: TIER A (SUPERVISORY)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest text-on-surface shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping" />
                      <span className="font-label-mono text-label-mono font-semibold">
                        NKN HYPERFLOW ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-medium">
                        AI Processing Load
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-md text-headline-md font-bold text-on-surface">
                          84%
                        </span>
                        <span className="font-label-md text-label-md text-primary font-semibold">
                          Nominal
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary mt-1">
                        GPU Cluster: 16x H100 PolarNet
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-secondary-container/40 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">
                        memory
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-medium">
                        Avg Confidence Score
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-md text-headline-md font-bold text-on-surface">
                          96.2%
                        </span>
                        <span className="font-label-md text-label-md text-tertiary font-semibold">
                          +1.4% vs 24h
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary mt-1">
                        Grounded in NCPOR Lexicon
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-tertiary-container/15 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[24px]">
                        verified
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-medium">
                        Sensitive Flags
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-md text-headline-md font-bold text-error">
                          3
                        </span>
                        <span className="font-label-md text-label-md text-error font-semibold">
                          Pending Review
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary mt-1">
                        DPDP 2023 & Radar Polygons
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-error-container/40 flex items-center justify-center text-error">
                      <span className="material-symbols-outlined text-[24px]">
                        policy
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-medium">
                        Ingestion Throughput
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-md text-headline-md font-bold text-on-surface">
                          1.4 TB
                        </span>
                        <span className="font-label-md text-label-md text-secondary font-semibold">
                          Today
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary mt-1">
                        Synchronized via Maitri VSAT
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[24px]">
                        cloud_sync
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-surface-container-lowest p-1.5 rounded-xl shadow-sm" role="tablist">
                    <button
                      role="tab"
                      aria-selected={queueTab === 'active'}
                      className={queueTab === 'active' ? 'px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all' : 'px-5 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-all'}
                      type="button"
                      onClick={() => setQueueTab('active')}
                    >
                      {" Active Pipeline Queue (18) "}
                    </button>
                    <button
                      role="tab"
                      aria-selected={queueTab === 'legacy'}
                      className={queueTab === 'legacy' ? 'px-5 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2' : 'px-5 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-all flex items-center gap-2'}
                      type="button"
                      onClick={() => setQueueTab('legacy')}
                    >
                      <span>
                        Legacy Digitisation (1981–2005 Archive)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-label-mono font-bold">
                        42
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center flex-wrap gap-2.5">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant shadow-sm text-body-sm font-body-sm">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        place
                      </span>
                      <select aria-label="Filter by station" className="bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer" value={stationFilter} onChange={(e) => setStationFilter(e.target.value)}>
                        {STATION_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-container-lowest text-on-surface-variant shadow-sm text-body-sm font-body-sm">
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        category
                      </span>
                      <select aria-label="Filter by data type" className="bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                        {TYPE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button aria-label="Refresh Feed" className="p-2 rounded-xl bg-surface-container-lowest text-secondary hover:text-primary shadow-sm transition-colors" title="Refresh Feed" type="button" onClick={() => setRefreshing(true)}>
                      <span className={'material-symbols-outlined text-[20px] block ' + (refreshing ? 'animate-spin' : '')}>
                        refresh
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-full bg-surface-container-lowest p-3.5 rounded-2xl shadow-sm flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface cursor-pointer">
                      <input checked={allSelected} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" onChange={toggleAll} />
                      <span>
                        {'Select All (' + selected.size + ' Selected)'}
                      </span>
                    </label>
                    <span className="font-label-mono text-label-mono text-secondary" aria-live="polite">
                      {queueNotice || 'Queue Status: 1 active in viewer, ' + (ROWS.length - 1) + ' staging'}
                    </span>
                  </div>
                  <div className="flex items-center flex-wrap gap-2">
                    <button className="px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary hover:opacity-90 font-label-md text-label-md flex items-center gap-1.5 transition-all disabled:opacity-50" disabled={noneSelected} type="button" onClick={bulkApprove}>
                      <span className="material-symbols-outlined text-[16px]">
                        done_all
                      </span>
                      <span>
                        Bulk Approve AI Tags
                      </span>
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center gap-1.5 transition-all disabled:opacity-50" disabled={noneSelected} type="button" onClick={bulkRerunOcr}>
                      <span className="material-symbols-outlined text-[16px]">
                        sync_saved_locally
                      </span>
                      <span>
                        Batch Re-run OCR
                      </span>
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md flex items-center gap-1.5 transition-all disabled:opacity-50" disabled={noneSelected} type="button" onClick={bulkSendReview}>
                      <span className="material-symbols-outlined text-[16px]">
                        send
                      </span>
                      <span>
                        Send to Peer Review Queue
                      </span>
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface font-label-md text-label-md flex items-center gap-1 transition-all" type="button" onClick={exportAuditReport}>
                      <span className="material-symbols-outlined text-[16px]">
                        download
                      </span>
                      <span>
                        Export Audit Report
                      </span>
                    </button>
                  </div>
                </div>
              </header>
              <section className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 bg-surface-container-low/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      table_rows
                    </span>
                    <div className="flex flex-col">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Queue Pipeline Monitor
                      </h2>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Four pipeline tiers: [1. Ingestion → 2. OCR / Feature Extraction → 3. Scientific Tagging → 4. Compliance & Verification]
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-mono text-label-mono px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-semibold">
                      AUTO-DISPATCH: ENABLED
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-lowest text-secondary font-label-mono text-label-mono uppercase tracking-wider">
                        <th className="py-3 px-6 w-12">
                          <input aria-label="Select all datasets" checked={allSelected} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" onChange={toggleAll} />
                        </th>
                        <th className="py-3 px-4">
                          Dataset / Archival File
                        </th>
                        <th className="py-3 px-4">
                          Origin & Timestamp
                        </th>
                        <th className="py-3 px-6">
                          Pipeline Step Progression (1 → 4)
                        </th>
                        <th className="py-3 px-4 text-center">
                          Confidence
                        </th>
                        <th className="py-3 px-6 text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">
                      {visibleRows.length === 0 ? (
                        <tr>
                          <td className="py-10 px-6 text-center text-secondary font-label-mono text-label-mono" colSpan={6}>
                            No queue items match the current search and filters.
                          </td>
                        </tr>
                      ) : null}
                      {visibleRows.map((row) => {
                        const isActive = row.id === activeId;
                        return (
                          <tr
                            key={row.id}
                            className={isActive ? 'bg-primary/5 transition-colors cursor-pointer' : 'hover:bg-surface-container-low transition-colors cursor-pointer'}
                            onClick={(e) => onRowClick(e, row.id)}
                          >
                            <td className="py-4 px-6">
                              <input aria-label={'Select ' + row.name} checked={selected.has(row.id)} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox" onChange={() => toggleRow(row.id)} />
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <div className={'w-9 h-9 rounded-xl flex items-center justify-center ' + (isActive ? 'bg-primary-container text-on-primary shadow-sm' : row.iconClass)}>
                                  <span className="material-symbols-outlined text-[20px]">
                                    {row.icon}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className={'font-title-md text-title-md font-semibold ' + (isActive ? 'text-primary' : 'text-on-surface')}>
                                    {row.name}
                                  </span>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <span className={'px-2 py-0.5 rounded font-label-mono text-[10px] font-bold ' + row.badgeClass}>
                                      {row.badge}
                                    </span>
                                    <span className="font-label-mono text-[11px] text-secondary">
                                      {row.meta}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 font-label-mono text-label-mono text-secondary">
                              <div className="flex flex-col">
                                <span className="text-on-surface font-semibold">
                                  {row.origin}
                                </span>
                                <span>
                                  {row.date}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex flex-col gap-1.5 max-w-md">
                                <div className="flex items-center justify-between font-label-mono text-[11px]">
                                  {row.stages.map((s) => {
                                    if (s.state === 'done') {
                                      return (
                                        <span key={s.label} className="text-tertiary font-bold flex items-center gap-1">
                                          <span className="material-symbols-outlined text-[13px]">
                                            check_circle
                                          </span>
                                          {' ' + s.label + ' '}
                                        </span>
                                      );
                                    }
                                    if (s.state === 'active') {
                                      return (
                                        <span key={s.label} className="text-primary font-bold flex items-center gap-1">
                                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                          {' ' + s.label + ' '}
                                        </span>
                                      );
                                    }
                                    return (
                                      <span key={s.label} className="text-outline font-medium">
                                        {s.label}
                                      </span>
                                    );
                                  })}
                                </div>
                                <div className="w-full bg-surface-container rounded-full h-1.5 flex overflow-hidden">
                                  {row.bar.map((seg, i) => (
                                    <div key={i} className={seg[0] + ' ' + seg[1] + ' h-full'} />
                                  ))}
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <span className={'px-2.5 py-1 rounded-full font-label-mono text-label-mono font-bold ' + row.confClass}>
                                {row.conf}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-right">
                              {isActive ? (
                                <div className="flex items-center justify-end gap-2">
                                  <span className="px-2.5 py-1 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">
                                      view_in_ar
                                    </span>
                                    <span>
                                      Loaded in Workbench
                                    </span>
                                  </span>
                                </div>
                              ) : (
                                <button className="px-3 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button" onClick={() => focusWorkbench(row.id)}>
                                  {" Switch View "}
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-20" id="workbench">
                <div className="lg:col-span-6 xl:col-span-5 bg-surface-container-lowest rounded-2xl shadow-sm p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">
                        find_in_page
                      </span>
                      <div className="flex flex-col">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Primary Archival Scan
                        </h3>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Document ID: IND-ANT-1983-LOG-014
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-lg">
                      <span className="font-label-mono text-label-mono text-on-surface font-medium">
                        Page 14 of 48
                      </span>
                    </div>
                  </div>
                  <div className="relative w-full aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-inner group">
                    {imgFailed ? (
                      <div className="w-full h-full flex items-center justify-center text-outline">
                        <span className="material-symbols-outlined text-[64px]">
                          description
                        </span>
                      </div>
                    ) : (
                      <img
                        className="w-full h-full object-cover transition-transform duration-200"
                        alt={IMG_ALT}
                        src={IMG_SRC}
                        style={{ transform: 'scale(' + zoom / DEFAULT_ZOOM + ') rotate(' + rotation + 'deg)' }}
                        onError={() => setImgFailed(true)}
                      />
                    )}
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        {showOcrBoxes ? (
                          <div className="px-2 py-1 rounded bg-primary/20 backdrop-blur-sm text-on-primary-fixed font-label-mono text-[10px] font-bold flex items-center gap-1">
                            <span>
                              STAMP_01 • 99.8%
                            </span>
                          </div>
                        ) : null}
                        <div className="ml-auto px-2 py-1 rounded bg-error/90 text-on-error font-label-mono text-[10px] font-bold flex items-center gap-1 shadow-sm">
                          <span className="material-symbols-outlined text-[12px]">
                            visibility_off
                          </span>
                          <span>
                            DPDP 2023 BLURRED
                          </span>
                        </div>
                      </div>
                      {showOcrBoxes ? (
                        <div className="w-full p-3 rounded-lg bg-primary-container/20 backdrop-blur-xs flex flex-col gap-1 mb-12">
                          <div className="flex items-center justify-between">
                            <span className="font-label-mono text-[10px] font-bold bg-primary-container text-on-primary px-1.5 py-0.5 rounded">
                              TABLE_MET_04 • 98.4% CONF
                            </span>
                            <span className="font-label-mono text-[10px] text-on-primary-fixed bg-surface-container-lowest/80 px-1 rounded">
                              Extracted Coordinates: -70°45'S
                            </span>
                          </div>
                          <p className="font-label-mono text-[11px] text-on-surface bg-surface-container-lowest/90 p-2 rounded leading-relaxed shadow-sm">
                            {" \"14-01-1983: Wind velocity 48 m/s NE. Pressure drop 972 hPa. Generator bunkering secured at DG Hut 1.\" "}
                          </p>
                        </div>
                      ) : <div />}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-2 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md shadow-md">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors disabled:opacity-50" title="Zoom Out" aria-label="Zoom Out" disabled={zoom <= ZOOM_MIN} type="button" onClick={() => setZoom((z) => Math.max(ZOOM_MIN, z - ZOOM_STEP))}>
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_out
                          </span>
                        </button>
                        <span className="font-label-mono text-[11px] text-on-surface px-1 font-semibold" aria-live="polite">
                          {zoom + '%'}
                        </span>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors disabled:opacity-50" title="Zoom In" aria-label="Zoom In" disabled={zoom >= ZOOM_MAX} type="button" onClick={() => setZoom((z) => Math.min(ZOOM_MAX, z + ZOOM_STEP))}>
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                        </button>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Fit to Canvas" aria-label="Fit to Canvas" type="button" onClick={() => { setZoom(DEFAULT_ZOOM); setRotation(0); }}>
                          <span className="material-symbols-outlined text-[18px]">
                            fit_screen
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input checked={showOcrBoxes} className="w-3.5 h-3.5 rounded text-primary accent-primary" type="checkbox" onChange={(e) => setShowOcrBoxes(e.target.checked)} />
                          <span className="font-label-mono text-[11px] text-secondary font-medium">
                            OCR Boxes
                          </span>
                        </label>
                        <button className="p-1.5 rounded hover:bg-surface-container text-secondary hover:text-on-surface transition-colors" title="Rotate Document" aria-label="Rotate Document" type="button" onClick={() => setRotation((r) => (r + 90) % 360)}>
                          <span className="material-symbols-outlined text-[18px]">
                            rotate_right
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between font-label-mono text-label-mono text-secondary">
                    <span>
                      Physical Storage: NCPOR Archives, Vasco da Gama, Goa
                    </span>
                    <span className="text-primary font-semibold">
                      Box 12 / Drawer C
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">
                  <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 flex flex-col gap-5">
                    <div className="flex items-center justify-between pb-3 border-b-0">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          psychology
                        </span>
                        <div className="flex flex-col">
                          <h3 className="font-headline-sm text-headline-sm text-on-surface">
                            Curated Scientific Extraction
                          </h3>
                          <span className="font-label-mono text-label-mono text-secondary">
                            Polaris Core Vision & OCR Engine v3.4 (Confidence 99.4%)
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-bold">
                        POLAR CRYOSPHERE ONTOLOGY
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">
                            summarize
                          </span>
                          {" Executive Scientific Synthesis "}
                        </span>
                        <span className="font-label-mono text-[10px] text-secondary">
                          Synthesized from 4 Hand-entered Log Sections
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed italic font-headline-md">
                        {" \"Continuous Blizzard event recorded for 36 hours; wind velocity peaked at 48 m/s; barometric pressure 972 hPa; solar radiation zero; generator fuel transfer successfully executed without station power failure.\" "}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-semibold">
                          {' Detected Ontological Tags (' + tags.length + ') '}
                        </span>
                        <span className="font-label-mono text-[11px] text-secondary">
                          Hover or tap tag actions to override
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tags.map((tag) => {
                          const editing = editingTagId === tag.id;
                          const rejected = tag.status === 'rejected';
                          const accepted = tag.status === 'accepted';
                          return (
                            <div key={tag.id} className={'p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-2 group hover:bg-surface-container transition-colors ' + (rejected ? 'opacity-60' : '')}>
                              <div className="flex flex-col min-w-0">
                                {editing ? (
                                  <input
                                    autoFocus
                                    aria-label="Edit tag name"
                                    className="w-full bg-surface-container-lowest rounded px-1.5 py-0.5 font-label-md text-label-md text-primary font-bold border border-outline-variant/40 focus:outline-none focus:ring-1 focus:ring-primary"
                                    type="text"
                                    value={editingTagValue}
                                    onChange={(e) => setEditingTagValue(e.target.value)}
                                    onBlur={commitEditTag}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Enter') commitEditTag();
                                      if (e.key === 'Escape') setEditingTagId(null);
                                    }}
                                  />
                                ) : (
                                  <span className={'font-label-md text-label-md text-primary font-bold ' + (rejected ? 'line-through' : '')}>
                                    {tag.name}
                                  </span>
                                )}
                                <span className="font-label-mono text-[11px] text-secondary">
                                  {tag.meta}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity shrink-0">
                                <button aria-label="Accept Tag" aria-pressed={accepted} className={'p-1 rounded bg-tertiary-container/15 text-tertiary hover:bg-tertiary-container/30 transition-colors ' + (accepted ? 'ring-1 ring-tertiary' : '')} title="Accept Tag" type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => setTagStatus(tag.id, 'accepted')}>
                                  <span className="material-symbols-outlined text-[16px]">
                                    check
                                  </span>
                                </button>
                                <button aria-label="Edit Tag" className="p-1 rounded bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors" title="Edit Tag" type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => (editing ? commitEditTag() : startEditTag(tag))}>
                                  <span className="material-symbols-outlined text-[16px]">
                                    edit
                                  </span>
                                </button>
                                <button aria-label="Reject Tag" aria-pressed={rejected} className={'p-1 rounded bg-error-container/40 text-error hover:bg-error-container/60 transition-colors ' + (rejected ? 'ring-1 ring-error' : '')} title="Reject Tag" type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => setTagStatus(tag.id, 'rejected')}>
                                  <span className="material-symbols-outlined text-[16px]">
                                    close
                                  </span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">
                            explore
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-mono text-label-mono text-secondary uppercase">
                            Extracted Geospatial Anchor
                          </span>
                          <span className="font-title-md text-title-md font-semibold text-on-surface">
                            Dakshin Gangotri Station, Schirmacher Oasis
                          </span>
                          <span className="font-label-mono text-label-mono text-primary font-semibold">
                            -70°45'S, 11°38'E (Elevation: 125m AMSL)
                          </span>
                        </div>
                      </div>
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-secondary-container text-primary font-label-md text-label-md flex items-center gap-1.5 self-start md:self-auto transition-colors" type="button" onClick={() => navigate('/globe', { state: { label: 'Dakshin Gangotri Station, Schirmacher Oasis', lat: -70.75, lng: 11.63 } })}>
                        <span className="material-symbols-outlined text-[16px]">
                          public
                        </span>
                        <span>
                          Pin to 3D Globe
                        </span>
                      </button>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-semibold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            accessibility_new
                          </span>
                          {" WCAG AAA Archival Alt-Text "}
                        </span>
                        <div className="flex items-center gap-2">
                          <button className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1" type="button" onClick={copyAltText}>
                            <span className="material-symbols-outlined text-[14px]">
                              {altCopied ? 'check' : 'content_copy'}
                            </span>
                            <span>
                              {altCopied ? 'Copied' : 'Copy'}
                            </span>
                          </button>
                          <button className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1" type="button" aria-pressed={altEditing} onClick={() => setAltEditing((v) => !v)}>
                            <span className="material-symbols-outlined text-[14px]">
                              {altEditing ? 'done' : 'auto_fix_high'}
                            </span>
                            <span>
                              {altEditing ? 'Done' : 'Refine'}
                            </span>
                          </button>
                        </div>
                      </div>
                      {altEditing ? (
                        <textarea
                          aria-label="Archival alt-text"
                          className="w-full rounded-lg bg-surface-container-lowest p-2 font-body-sm text-body-sm text-on-surface-variant leading-relaxed border border-outline-variant/40 focus:outline-none focus:ring-1 focus:ring-primary"
                          rows={3}
                          value={altText}
                          onChange={(e) => setAltText(e.target.value)}
                        />
                      ) : (
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {' "' + altText + '" '}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-semibold">
                          {" Verbatim OCR Transcription Stream "}
                        </span>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold">
                          99.4% Match Fidelity
                        </span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-surface-container-lowest font-label-mono text-[12px] text-on-surface leading-relaxed shadow-xs flex flex-col gap-1.5">
                        <p>
                          <span className="bg-tertiary-container/20 px-1 py-0.5 rounded text-tertiary font-bold">
                            14/01/83:
                          </span>
                          {" Station Dakshin Gangotri report at 0600 hrs GMT. Severe blizzard continuation recorded. Peak gusts reaching "}
                          <span className="bg-secondary-container/60 px-1 py-0.5 rounded font-bold">
                            48 m/s
                          </span>
                          {" from NE sector. Atmospheric pressure declining to "}
                          <span className="bg-secondary-container/60 px-1 py-0.5 rounded font-bold">
                            972.4 hPa
                          </span>
                          {". "}
                        </p>
                        <p className="text-on-surface-variant">
                          {" Fuel lines between bunker module and generator room inspected at 14:00 hrs. Antifreeze additive functioning properly. Dr. S. Rao log entry confirmed. "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-surface-container-lowest rounded-2xl shadow-sm p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error text-[24px]">
                      gavel
                    </span>
                    <div className="flex flex-col">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Compliance & Ethical Boundary Checks
                      </h3>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Automated checks against MoES Privacy Standards & Geodetic Security Guidelines
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-error-container/40 text-error font-label-mono text-label-mono font-bold">
                    3 AUDIT CHECKS ACTIVE
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-error text-[18px]">
                          face
                        </span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          Face Detected (Expedition Member)
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" Status: "}
                        <span className="font-semibold text-on-surface">
                          Anonymised / Blurred per DPDP Act 2023.
                        </span>
                        {" Archival portrait detected on lower quadrant margin. "}
                      </p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[16px]">
                        visibility
                      </span>
                      <span>
                        Review Unblurred (Tier A)
                      </span>
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          near_me_disabled
                        </span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          Restricted Sensor Coordinate
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" Status: "}
                        <span className="font-semibold text-on-surface">
                          Within restricted radar perimeter.
                        </span>
                        {" Coordinate precision safely rounded to 2 decimal places. "}
                      </p>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-secondary-container text-primary font-label-md text-label-md flex items-center justify-center gap-1 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[16px]">
                        tune
                      </span>
                      <span>
                        Override Precision Filter
                      </span>
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[18px]">
                          verified_user
                        </span>
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          Watermark & License Audit
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" Status: "}
                        <span className="font-semibold text-tertiary">
                          No proprietary watermark detected.
                        </span>
                        {" Formally cleared for Open Data Dissemination (CC-BY-4.0). "}
                      </p>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-tertiary-container/15 text-tertiary font-label-mono text-label-mono text-center font-bold">
                      {" CLEARED FOR REPOSITORY "}
                    </div>
                  </div>
                </div>
              </section>
              <footer className="w-full bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 sticky bottom-4 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      smart_toy
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Model Pipeline Verified
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary" aria-live="polite">
                      {footerNotice || 'Processed by POLARIS AI Vision & NLP Model v3.4 • Grounded with NCPOR Cryosphere Taxonomy'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-2.5">
                  <button className="px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button" onClick={saveDraft}>
                    {" Save Staging Draft "}
                  </button>
                  <button
                    aria-pressed={reOcrFlagged}
                    className={'px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors ' + (reOcrFlagged ? 'ring-1 ring-primary' : '')}
                    type="button"
                    onClick={() => {
                      setReOcrFlagged((v) => !v);
                      setFooterNotice(reOcrFlagged ? 'Human re-OCR flag removed' : 'Flagged for human re-OCR');
                    }}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      sync_problem
                    </span>
                    <span>
                      Flag for Human Re-OCR
                    </span>
                  </button>
                  <button className="px-4 py-2.5 rounded-lg bg-error-container/40 text-error hover:bg-error-container/60 font-label-md text-label-md transition-colors" type="button" onClick={rejectEnrichment}>
                    {" Reject AI Enrichment "}
                  </button>
                  <button className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary hover:opacity-90 font-label-md text-label-md shadow-sm flex items-center gap-2 transition-all" type="button" onClick={approveAndDispatch}>
                    <span>
                      Approve & Dispatch to Review Queue
                    </span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </main>
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-md px-space-xl">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">
                security
              </span>
              <div className="flex flex-col">
                <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                  National Centre for Polar and Ocean Research (NCPOR)
                </span>
                <span className="font-label-mono text-[10px] text-secondary">
                  Ministry of Earth Sciences (MoES), Government of India • Official Scientific Repository
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md font-label-mono text-label-mono text-secondary">
              <span>
                Security Clearance: Level 4
              </span>
              <span className="text-outline-variant">
                •
              </span>
              <span>
                NIC Certified Data Pipeline
              </span>
              <span className="text-outline-variant">
                •
              </span>
              <span>
                POLARIS Engine v4.2.1-prod
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}