import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

const BODY_CLASS = "bg-background font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function AdminFieldDiaryPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS });

  // Controlled Input States
  const [headerSearch, setHeaderSearch] = useState('');
  const [selectedExpedition, setSelectedExpedition] = useState('43rd Indian Antarctic Expedition (Maitri - Schirmacher)');
  const [simulatedMode, setSimulatedMode] = useState(true);
  const [emergencyPassthrough, setEmergencyPassthrough] = useState(true);
  const [waypointTag, setWaypointTag] = useState('Schirmacher Ice Ridge Station Point Charlie');
  const [manualLat, setManualLat] = useState('-70.76580');
  const [manualLon, setManualLon] = useState('+11.73583');
  const [rawRadioLog, setRawRadioLog] = useState('Maitri weather log 24 Oct 0800Z: Temp -34.2C, wind SSE 38kt gusting 52kt. Whiteout conditions across lake surface. Core sample retrieval team returned safely with 3 ice cores from Priyadarshini Lake. Automatic weather station #4 solar panel cleared of rime ice. Morale high.');
  const [logSearchQuery, setLogSearchQuery] = useState('');

  // Interactive Action States
  const [isPinging, setIsPinging] = useState(false);
  const [aiDraftState, setAiDraftState] = useState('idle'); // 'idle' | 'drafting' | 'generated'
  const [moderationFilter, setModerationFilter] = useState('All');

  // Moderation Inbox Data State
  const [inboxItems, setInboxItems] = useState([
    {
      id: 1,
      author: 'Dr. Ananya Sen',
      initials: 'AS',
      location: 'Maitri Station',
      time: '12m ago',
      category: 'Maitri Base',
      title: 'Sub-surface Lake Ice Core Extraction Protocol',
      description: 'Retrieved 1.8m cylindrical core showing distinct summer dust banding layers. Core thermal stabilizer currently holding at -18°C.',
      tag: 'Sign-off needed',
      tagBg: 'bg-secondary-container text-on-secondary-container',
      avatarBg: 'bg-primary text-on-primary'
    },
    {
      id: 2,
      author: 'Dr. K. Raman',
      initials: 'KR',
      location: 'ORV Sagar Nidhi',
      time: '1h ago',
      category: 'SOE-01',
      title: 'CTD Cast Depth Anomaly at 60°S Polar Front',
      description: 'Salinity layer stratification in upper 200m reveals anomalous eddy formation during transit...',
      tag: 'AI Drafted',
      tagBg: 'bg-primary-fixed text-on-primary-fixed-variant',
      avatarBg: 'bg-secondary text-on-secondary'
    },
    {
      id: 3,
      author: 'Sunita Deshmukh',
      initials: 'SD',
      location: 'Himadri Arctic Base',
      time: '3h ago',
      category: 'Himadri',
      title: 'Kongsfjorden Glacier Front Aerial Photogrammetry',
      description: 'UAV photogrammetry mission completed under clear Arctic skies. High-resolution imagery captured.',
      tag: 'Queued',
      tagBg: 'bg-surface-container-highest text-on-surface',
      avatarBg: 'bg-tertiary text-on-tertiary'
    }
  ]);

  // Audit Log Data
  const [auditLogs] = useState([
    {
      time: 'Today 08:30 IST',
      station: '43rd IAE (Maitri)',
      title: 'Lake Ice Core Extraction',
      subLocation: 'Priydarshini Basin',
      coords: '-70.7658°, +11.7358°',
      mode: 'Delayed (+45m)',
      status: 'Published'
    },
    {
      time: 'Yesterday 19:15',
      station: 'SOE-01 (Southern Ocean)',
      title: 'Microplastics Run #4',
      subLocation: 'Polar Front 58°S',
      coords: '-58.2104°, +44.1200°',
      mode: 'Live Stream',
      status: 'Published'
    },
    {
      time: '23 Oct 14:00',
      station: 'Himadri (Ny-Ålesund)',
      title: 'IndARC Mooring Acoustic',
      subLocation: 'Kongsfjorden Fjord',
      coords: '+78.9234°, +11.9288°',
      mode: 'Live Stream',
      status: 'Published'
    },
    {
      time: '22 Oct 11:20',
      station: '43rd IAE (Maitri)',
      title: 'Katabatic Readiness Drill',
      subLocation: 'Main Habitation Pod',
      coords: '-70.7658°, +11.7358°',
      mode: 'Simulated',
      status: 'Archived'
    }
  ]);

  // Handler Functions
  const handleForcePing = () => {
    setIsPinging(true);
    setTimeout(() => {
      setIsPinging(false);
      alert('Telemetry ping request dispatched to INSAT-3DR polar transceiver transponder. Lock maintained at 99.8%.');
    }, 1000);
  };

  const handleGenerateAI = () => {
    setAiDraftState('drafting');
    setTimeout(() => {
      setAiDraftState('generated');
      alert('Polaris-SciLLM successfully verified glaciological parameters (-34.2°C, 3 ice cores) and formatted dispatch for outreach moderation desk.');
    }, 800);
  };

  const handleUpdateTelemetry = () => {
    alert('Waypoint and coordinates successfully locked and broadcasted to public polar tracking map (Delayed Mode +45m active).');
  };

  const handleSubmitModeration = () => {
    alert('Field dispatch submitted to Moderation Desk. Level 4 Lead Scientist sign-off requested.');
  };

  const handleBatchReview = () => {
    alert('Selected dispatches approved and synchronized with POLARIS outward scientific portal.');
  };

  const handleExportTelemetry = () => {
    alert('Preparing 48-point GeoJSON payload with calibrated INSAT elevation layers.');
  };

  const handleApproveInboxItem = (id) => {
    setInboxItems((prev) => prev.filter((item) => item.id !== id));
    alert('Dispatch approved and published.');
  };

  const handleRejectInboxItem = (id) => {
    setInboxItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Filtered Lists
  const filteredInboxItems = inboxItems.filter((item) => {
    if (moderationFilter === 'All') return true;
    return item.category === moderationFilter;
  });

  const filteredLogs = auditLogs.filter((log) => {
    if (!logSearchQuery.trim()) return true;
    const query = logSearchQuery.toLowerCase();
    return (
      log.station.toLowerCase().includes(query) ||
      log.title.toLowerCase().includes(query) ||
      log.subLocation.toLowerCase().includes(query) ||
      log.status.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-full w-60 bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="h-16 px-space-md flex items-center gap-space-xs bg-surface-container-lowest">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                ac_unit
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-md text-title-md tracking-wider text-on-surface font-bold leading-none">
                POLARIS
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant leading-tight">
                CONSOLE v4.2
              </span>
            </div>
          </div>
          <nav className="flex-1 px-space-sm py-space-sm space-y-space-md" data-active-classes="bg-primary-container text-on-primary-container font-semibold">
            <div className="space-y-space-xs">
              <p className="px-space-xs font-label-mono text-label-mono uppercase text-on-surface-variant tracking-wider">
                OPERATIONS & SCIENCE
              </p>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="dashboard" to="/admin">
                <span className="material-symbols-outlined text-[18px]">
                  space_dashboard
                </span>
                <span className="font-body-sm text-body-sm">
                  Dashboard
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="expeditions" to="/expeditions/soe-01">
                <span className="material-symbols-outlined text-[18px]">
                  explore
                </span>
                <span className="font-body-sm text-body-sm">
                  Expeditions
                </span>
              </Link>
              <Link aria-current="page" className="flex items-center gap-space-xs px-space-sm py-2 rounded transition-all bg-primary-container text-on-primary-container font-semibold" data-path="field-diary" to="/admin/field-diary">
                <span className="material-symbols-outlined text-[18px]">
                  sensors
                </span>
                <span className="font-body-sm text-body-sm">
                  Field Diary & Telemetry
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="upload" to="/admin/upload">
                <span className="material-symbols-outlined text-[18px]">
                  cloud_upload
                </span>
                <span className="font-body-sm text-body-sm">
                  Upload
                </span>
              </Link>
              <a className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ai-queue" href="#" onClick={(e)=>e.preventDefault()}>
                <span className="material-symbols-outlined text-[18px]">
                  smart_toy
                </span>
                <span className="font-body-sm text-body-sm">
                  AI Queue
                </span>
              </a>
            </div>
            <div className="space-y-space-xs">
              <p className="px-space-xs font-label-mono text-label-mono uppercase text-on-surface-variant tracking-wider">
                EDITORIAL STUDIO
              </p>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="content-studio" to="/admin/studio">
                <span className="material-symbols-outlined text-[18px]">
                  edit_note
                </span>
                <span className="font-body-sm text-body-sm">
                  Content Studio
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="review-desk" to="/admin/review">
                <span className="material-symbols-outlined text-[18px]">
                  fact_check
                </span>
                <span className="font-body-sm text-body-sm">
                  Review Desk
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="publishing" to="/admin/publishing">
                <span className="material-symbols-outlined text-[18px]">
                  publish
                </span>
                <span className="font-body-sm text-body-sm">
                  Publishing
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="media-library" to="/admin/media">
                <span className="material-symbols-outlined text-[18px]">
                  photo_library
                </span>
                <span className="font-body-sm text-body-sm">
                  Media Library
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="stories-website" to="/admin/content">
                <span className="material-symbols-outlined text-[18px]">
                  article
                </span>
                <span className="font-body-sm text-body-sm">
                  Stories & Website
                </span>
              </Link>
            </div>
            <div className="space-y-space-xs">
              <p className="px-space-xs font-label-mono text-label-mono uppercase text-on-surface-variant tracking-wider">
                OUTREACH & DELIVERY
              </p>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="education-manager" to="/admin/education">
                <span className="material-symbols-outlined text-[18px]">
                  school
                </span>
                <span className="font-body-sm text-body-sm">
                  Education Manager
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="events-inbox" to="/admin/events-inbox">
                <span className="material-symbols-outlined text-[18px]">
                  inbox
                </span>
                <span className="font-body-sm text-body-sm">
                  Events & Inbox
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="social-channels" to="/admin/social">
                <span className="material-symbols-outlined text-[18px]">
                  share
                </span>
                <span className="font-body-sm text-body-sm">
                  Social Channels
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="rights-integrations" to="/admin/rights">
                <span className="material-symbols-outlined text-[18px]">
                  sync_alt
                </span>
                <span className="font-body-sm text-body-sm">
                  Rights & Integrations
                </span>
              </Link>
            </div>
            <div className="space-y-space-xs">
              <p className="px-space-xs font-label-mono text-label-mono uppercase text-on-surface-variant tracking-wider">
                GOVERNANCE & CONTROL
              </p>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="analytics" to="/admin/analytics">
                <span className="material-symbols-outlined text-[18px]">
                  analytics
                </span>
                <span className="font-body-sm text-body-sm">
                  Analytics
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="notifications" to="/admin/notifications">
                <span className="material-symbols-outlined text-[18px]">
                  notifications
                </span>
                <span className="font-body-sm text-body-sm">
                  Notifications
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="users" to="/admin/users">
                <span className="material-symbols-outlined text-[18px]">
                  group
                </span>
                <span className="font-body-sm text-body-sm">
                  Users
                </span>
              </Link>
              <Link className="flex items-center gap-space-xs px-space-sm py-2 rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="settings-profile" to="/admin/profile">
                <span className="material-symbols-outlined text-[18px]">
                  settings
                </span>
                <span className="font-body-sm text-body-sm">
                  Settings / Profile
                </span>
              </Link>
            </div>
          </nav>
          <div className="p-space-sm bg-surface-container-low">
            <div className="flex items-center gap-space-xs p-space-xs rounded bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="font-body-sm text-body-sm font-semibold text-on-surface truncate">
                  Dr. Ananya Sen
                </span>
                <span className="font-label-mono text-label-mono text-tertiary font-semibold truncate">
                  Level 4 Clearance
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="pl-60">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40">
          <div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-mono text-label-mono uppercase text-on-surface-variant font-bold">
                  MoES India
                </span>
                <span className="font-label-mono text-label-mono text-outline-variant">
                  •
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  NCPOR POLARIS
                </span>
              </div>
              <div className="hidden md:flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1 rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-container" />
                </span>
                <span className="font-label-mono text-label-mono tracking-wider font-semibold text-on-surface">
                  HIMADRI TELEMETRY ONLINE
                </span>
              </div>
            </div>
            <div className="flex-1 max-w-md mx-auto hidden lg:block">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                  search
                </span>
                <input
                  className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
                  placeholder="Search telemetry, dispatches, positions, logs... (⌘K)"
                  type="text"
                  value={headerSearch}
                  onChange={(e) => setHeaderSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="hidden xl:flex items-center px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container">
                <span className="font-label-mono text-label-mono font-semibold tracking-wider">
                  ROLE: CURATOR / SCIENTIST / ADMIN [C, S, A]
                </span>
              </div>
              <button
                type="button"
                className="relative p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-pointer"
                onClick={() => alert('No new unread notifications.')}
              >
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error" />
              </button>
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">
                    person
                  </span>
                </div>
                <div className="hidden md:flex flex-col text-left">
                  <span className="font-label-md text-label-md text-on-surface leading-tight">
                    Dr. Ananya Sen
                  </span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant leading-tight">
                    Lead Scientist / Editor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="w-full pt-16 bg-surface min-h-[calc(100vh-64px)]">
          <div className="max-w-[1400px] mx-auto p-space-lg lg:p-space-xl">
            <div className="flex flex-col w-full space-y-space-lg">
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md">
                <div className="space-y-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono uppercase tracking-wider">
                    <span>
                      POLARIS OPERATIONS & SCIENCE
                    </span>
                    <span className="text-outline-variant">
                      /
                    </span>
                    <span className="text-primary font-semibold">
                      FIELD DIARY & POSITION MANAGER
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-semibold text-[10px]">
                      AUTH [C, S, A]
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-light tracking-tight">
                    {" Field Diary & Live Position Manager "}
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    {" Manage real-time polar expedition telemetry coordinates, sync offline field notes into curated outreach dispatches with Polaris-SciLLM, and moderate incoming field team observations. "}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm shrink-0">
                  <button
                    type="button"
                    className="flex items-center gap-space-xs px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-all shadow-sm group cursor-pointer"
                    id="btn-force-ping"
                    onClick={handleForcePing}
                  >
                    {" "}
                    <span className={`material-symbols-outlined text-[18px] text-secondary transition-transform duration-500 ${isPinging ? 'animate-spin' : 'group-hover:rotate-180'}`}>
                      sync
                    </span>
                    {" "}
                    <span className="font-title-md text-title-md font-medium text-xs tracking-wide">
                      Force GPS Telemetry Ping
                    </span>
                    {" "}
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-space-xs px-5 py-2.5 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary transition-all shadow-sm cursor-pointer"
                    id="btn-open-dispatch"
                    onClick={() => {
                      const el = document.getElementById('field-diary-composer');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {" "}
                    <span className="material-symbols-outlined text-[19px]">
                      add_circle
                    </span>
                    {" "}
                    <span className="font-title-md text-title-md font-semibold text-xs tracking-wide">
                      + New Field Dispatch
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
                <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                        Active Expeditions
                      </span>
                      <span className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
                        3 Expeditions
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        explore
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs pt-1">
                    <span className="relative flex h-2.5 w-2.5">
                      {" "}
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75" />
                      {" "}
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-container" />
                      {" "}
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant truncate">
                      43rd IAE, SOE-01, Himadri-04
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                        Telemetry Link Health
                      </span>
                      <span className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
                        INSAT / Iridium
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[22px]">
                        satellite_alt
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
                    <span className="text-tertiary font-semibold">
                      99.8% Dual Carrier Lock
                    </span>
                    <span>
                      Latency: 1.4s
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                        Offline Sync Buffer
                      </span>
                      <span className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
                        2 Dispatches
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        cloud_queue
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="truncate">
                      IndexedDB ready for satellite burst
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                        Moderation Desk
                      </span>
                      <span className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
                        {inboxItems.length} Pending
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-surface-container-highest text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">
                        verified_user
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-error">
                    <span className="w-2 h-2 rounded-full bg-error" />
                    <span className="truncate font-semibold">
                      Requires Lead Scientist Review
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <section className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between pb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">
                            fmd_good
                          </span>
                        </div>
                        <div>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface text-base font-semibold">
                            Telemetry Uplink
                          </h2>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            GPS FIX & COORDINATE EMISSION
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono text-[10px] uppercase font-bold">
                        {" Live Link "}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-mono text-label-mono uppercase text-on-surface-variant text-[10px]">
                        Target Expedition
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl px-3 py-2 pr-9 appearance-none focus:outline-none focus:bg-surface-container-high cursor-pointer"
                          value={selectedExpedition}
                          onChange={(e) => setSelectedExpedition(e.target.value)}
                        >
                          <option value="43rd Indian Antarctic Expedition (Maitri - Schirmacher)">
                            43rd Indian Antarctic Expedition (Maitri - Schirmacher)
                          </option>
                          <option value="SOE-01 Southern Ocean Expedition (ORV Sagar Nidhi)">
                            SOE-01 Southern Ocean Expedition (ORV Sagar Nidhi)
                          </option>
                          <option value="Himadri Arctic Field Camp Batch-04 (Svalbard)">
                            Himadri Arctic Field Camp Batch-04 (Svalbard)
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none text-[18px]">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden bg-surface-container-low p-space-md space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary-container animate-pulse" />
                          <span className="font-label-mono text-label-mono text-on-surface font-semibold tracking-wider text-[11px]">
                            {" DGPS 12-SATELLITE LOCK (INSAT-3DR) "}
                          </span>
                        </div>
                        <span className="font-label-mono text-label-mono text-on-surface-variant text-[10px]">
                          42s ago
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-space-sm font-label-mono pt-1">
                        <div className="bg-surface-container-lowest p-2.5 rounded-lg">
                          <span className="text-[10px] text-on-surface-variant block uppercase">
                            Latitude
                          </span>
                          <span className="text-on-surface font-bold text-xs tracking-wide">
                            70°45'57" S
                          </span>
                          <span className="text-on-surface-variant text-[10px] block">
                            -70.76580°
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest p-2.5 rounded-lg">
                          <span className="text-[10px] text-on-surface-variant block uppercase">
                            Longitude
                          </span>
                          <span className="text-on-surface font-bold text-xs tracking-wide">
                            11°44'09" E
                          </span>
                          <span className="text-on-surface-variant text-[10px] block">
                            +11.73583°
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest p-2.5 rounded-lg">
                          <span className="text-[10px] text-on-surface-variant block uppercase">
                            Altitude / Depth
                          </span>
                          <span className="text-on-surface font-bold text-xs">
                            117 m ASL
                          </span>
                          <span className="text-on-surface-variant text-[10px] block">
                            Baro calibrated
                          </span>
                        </div>
                        <div className="bg-surface-container-lowest p-2.5 rounded-lg">
                          <span className="text-[10px] text-on-surface-variant block uppercase">
                            Heading & Velocity
                          </span>
                          <span className="text-on-surface font-bold text-xs">
                            042° NE • 0.0 kt
                          </span>
                          <span className="text-tertiary text-[10px] block font-semibold">
                            Stationary (Base)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-space-sm pt-1">
                      <div className="p-space-sm rounded-xl bg-surface-container-low flex items-start justify-between gap-space-sm">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                              Simulated / Delayed Mode
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-secondary-container text-on-secondary-container font-label-mono text-[9px] uppercase font-bold">
                              +45m Hold
                            </span>
                          </div>
                          <p className="font-label-mono text-label-mono text-on-surface-variant text-[10px] leading-tight">
                            {" Applies 45-minute tactical embargo for personnel safety during crevassed traverse operations. "}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                          {" "}
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={simulatedMode}
                            onChange={(e) => setSimulatedMode(e.target.checked)}
                          />
                          {" "}
                          <div className="w-10 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          {" "}
                        </label>
                      </div>
                      <div className="p-space-sm rounded-xl bg-surface-container-low flex items-start justify-between gap-space-sm">
                        <div className="space-y-0.5">
                          <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                            Emergency Beacon Passthrough
                          </span>
                          <p className="font-label-mono text-label-mono text-on-surface-variant text-[10px] leading-tight">
                            {" Continuous mirroring to NCPOR Goa Emergency Situation Ops Room. "}
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                          {" "}
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={emergencyPassthrough}
                            onChange={(e) => setEmergencyPassthrough(e.target.checked)}
                          />
                          {" "}
                          <div className="w-10 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-tertiary" />
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div className="space-y-space-xs pt-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[10px]">
                          Waypoint Reference Tag
                        </span>
                        <span
                          className="font-label-mono text-label-mono text-primary text-[10px] cursor-pointer hover:underline"
                          onClick={() => alert('GeoMap waypoint picker activated.')}
                        >
                          Pick on GeoMap
                        </span>
                      </div>
                      <input
                        className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl px-3 py-2 focus:outline-none focus:bg-surface-container-high font-medium"
                        type="text"
                        value={waypointTag}
                        onChange={(e) => setWaypointTag(e.target.value)}
                      />
                      <div className="grid grid-cols-2 gap-space-xs pt-1">
                        <div>
                          <span className="font-label-mono text-label-mono text-[9px] text-on-surface-variant uppercase">
                            Manual Lat
                          </span>
                          <input
                            className="w-full bg-surface-container-low text-on-surface font-label-mono text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:bg-surface-container-high"
                            type="text"
                            value={manualLat}
                            onChange={(e) => setManualLat(e.target.value)}
                          />
                        </div>
                        <div>
                          <span className="font-label-mono text-label-mono text-[9px] text-on-surface-variant uppercase">
                            Manual Lon
                          </span>
                          <input
                            className="w-full bg-surface-container-low text-on-surface font-label-mono text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:bg-surface-container-high"
                            type="text"
                            value={manualLon}
                            onChange={(e) => setManualLon(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md">
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary transition-all flex items-center justify-center gap-space-xs shadow-sm group cursor-pointer"
                      id="btn-update-telemetry"
                      onClick={handleUpdateTelemetry}
                    >
                      {" "}
                      <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                        cell_tower
                      </span>
                      {" "}
                      <span className="font-title-md text-title-md text-xs tracking-wider uppercase font-semibold">
                        Update Position & Broadcast Telemetry
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
                <section id="field-diary-composer" className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between pb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">
                            edit_note
                          </span>
                        </div>
                        <div>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface text-base font-semibold">
                            Expedition Diary Composer
                          </h2>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            POLARIS-SCILLM v3 INTEGRATION
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono text-[11px] font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          offline_bolt
                        </span>
                        <span>
                          2 Cached in Local Buffer
                        </span>
                      </div>
                    </div>
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-mono text-label-mono uppercase text-on-surface-variant text-[10px]">
                          {" Raw Field Radio Log / Voice Memo Transcript "}
                        </label>
                        <div className="flex items-center gap-space-xs">
                          <button
                            type="button"
                            className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface text-[10px] font-label-mono flex items-center gap-1 transition-colors cursor-pointer"
                            onClick={() => alert('Voice Memo recorder interface initiated.')}
                          >
                            {" "}
                            <span className="material-symbols-outlined text-[13px]">
                              mic
                            </span>
                            {" Voice Memo "}
                          </button>
                          <button
                            type="button"
                            className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface text-[10px] font-label-mono flex items-center gap-1 transition-colors cursor-pointer"
                            onClick={() => setRawRadioLog((prev) => `${prev}\n[Snapshot Telemetry Attached: Lat -70.76580, Lon +11.73583, Alt 117m]`)}
                          >
                            {" "}
                            <span className="material-symbols-outlined text-[13px]">
                              add_location_alt
                            </span>
                            {" Snapshot Telemetry "}
                          </button>
                        </div>
                      </div>
                      <textarea
                        className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl p-3 focus:outline-none focus:bg-surface-container-high transition-colors resize-none leading-relaxed"
                        rows="3"
                        value={rawRadioLog}
                        onChange={(e) => setRawRadioLog(e.target.value)}
                      />
                    </div>
                    <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          auto_awesome
                        </span>
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                            Polaris-SciLLM Dispatch Generator
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface-variant text-[10px]">
                            Generates public outreach copy while strictly preserving scientific telemetry metrics
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="shrink-0 px-3 py-1.5 rounded-lg bg-primary-fixed text-on-primary-fixed-variant hover:bg-primary-fixed-dim transition-colors font-label-mono text-label-mono font-bold flex items-center gap-1 text-[11px] cursor-pointer"
                        id="btn-generate-ai"
                        onClick={handleGenerateAI}
                      >
                        {" "}
                        <span className="material-symbols-outlined text-[14px]">
                          {aiDraftState === 'generated' ? 'done' : 'psychology'}
                        </span>
                        {" "}
                        <span>
                          {aiDraftState === 'drafting' ? 'Drafting...' : aiDraftState === 'generated' ? 'Generated' : 'Draft Dispatch'}
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="space-y-space-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[10px]">
                          {" Curated Public Dispatch (Formatted Outreach Output) "}
                        </span>
                        <span className="font-label-mono text-label-mono text-tertiary text-[10px] font-semibold">
                          Ready for Review
                        </span>
                      </div>
                      <div className="rounded-xl bg-surface-container-low p-space-md space-y-space-sm">
                        <div className="flex items-start justify-between gap-space-sm">
                          <div>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface text-sm font-bold">
                              {" Overwintering Chronicles: Blizzard Operations at Priyadarshini Lake "}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 text-on-surface-variant font-label-mono text-[10px]">
                              <span>
                                43rd IAE
                              </span>
                              <span>
                                •
                              </span>
                              <span>
                                3 min read
                              </span>
                              <span>
                                •
                              </span>
                              <span className="text-tertiary font-medium">
                                Keywords: Glaciology, Paleoclimate
                              </span>
                            </div>
                          </div>
                          <div className="w-16 h-12 rounded-lg bg-surface-container-high overflow-hidden shrink-0 relative flex items-center justify-center">
                            <img className="w-full h-full object-cover" data-alt="Close up photograph of a polar ice core cylinder sample showing ancient dust layers, resting on scientific field gear in Antarctica, soft natural blue-white polar light with crisp details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQqOnFIegNPrdnZQXOvkX60uHBsH1DCJC1nF1HFiZ4TCgCFp9xh5XgdyNw_xprQnXoiGCmcia_jdHn5oaGuEp7dWq9FenHXZ2wIYU0x2nO7YrEWxCxL6jPztE1bTljwGiOyp3KvR9X36jbAcu8k5mPXWNel9OLLCKe5uInWdCs9Snjm_uPCF1DSBiBDLc_n3umQ13yibYlj4iu_ck-ZFSUMlW1QJO_Qdu_YOE4WUUVg1nZDhfqbgX5" />
                            <span className="absolute bottom-0 right-0 bg-inverse-surface/80 text-inverse-on-surface text-[8px] font-label-mono px-1 rounded-tl">
                              JPG
                            </span>
                          </div>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                          {" At negative 34.2 degrees Celsius with fierce katabatic gusts sweeping the Schirmacher Oasis, our glaciology field squad successfully extracted three critical cylindrical ice cores from Priyadarshini Lake... "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md">
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary transition-all flex items-center justify-center gap-space-xs shadow-sm cursor-pointer"
                      id="btn-submit-moderation"
                      onClick={handleSubmitModeration}
                    >
                      {" "}
                      <span className="material-symbols-outlined text-[19px]">
                        lock_clock
                      </span>
                      {" "}
                      <span className="font-title-md text-title-md text-xs tracking-wider uppercase font-semibold">
                        Submit Dispatch for Moderation
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
                <section className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="flex items-center justify-between pb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">
                            fact_check
                          </span>
                        </div>
                        <div>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface text-base font-semibold">
                            Moderation Inbox
                          </h2>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            SCIENTIFIC & EDITORIAL TRIAGE
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-mono text-label-mono text-[10px] font-bold">
                        {filteredInboxItems.length} in queue
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                      {['All', 'Maitri Base', 'SOE-01', 'Himadri'].map((filter) => {
                        const count = filter === 'All' ? inboxItems.length : inboxItems.filter((i) => i.category === filter).length;
                        const isActive = moderationFilter === filter;
                        return (
                          <button
                            key={filter}
                            type="button"
                            className={`px-2.5 py-1 rounded-lg font-label-mono text-[11px] shrink-0 transition-colors cursor-pointer ${
                              isActive
                                ? 'bg-surface-container-high text-on-surface font-semibold'
                                : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                            }`}
                            onClick={() => setModerationFilter(filter)}
                          >
                            {`${filter === 'All' ? 'All' : filter} (${count})`}
                          </button>
                        );
                      })}
                    </div>
                    <div className="space-y-space-sm max-h-[380px] overflow-y-auto pr-1">
                      {filteredInboxItems.length === 0 ? (
                        <div className="p-space-md rounded-xl bg-surface-container-low text-center text-on-surface-variant font-body-sm text-xs">
                          No pending dispatches match this filter.
                        </div>
                      ) : (
                        filteredInboxItems.map((item) => (
                          <div key={item.id} className="p-space-md rounded-xl bg-surface-container-low space-y-space-xs shadow-sm">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-[10px]`}>
                                  {item.initials}
                                </div>
                                <div>
                                  <span className="font-body-sm text-body-sm font-semibold text-on-surface text-xs block leading-tight">
                                    {item.author}
                                  </span>
                                  <span className="font-label-mono text-label-mono text-on-surface-variant text-[10px]">
                                    {item.location} • {item.time}
                                  </span>
                                </div>
                              </div>
                              <span className={`px-2 py-0.5 rounded-full ${item.tagBg} font-label-mono text-[9px] uppercase font-bold shrink-0`}>
                                {item.tag}
                              </span>
                            </div>
                            <p className="font-headline-sm text-headline-sm text-on-surface text-xs font-semibold pt-1">
                              {item.title}
                            </p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex items-center gap-space-xs pt-2">
                              <button
                                type="button"
                                className="flex-1 py-1.5 rounded-lg bg-tertiary-container text-on-tertiary-container font-label-mono text-[10px] font-bold flex items-center justify-center gap-1 shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
                                onClick={() => handleApproveInboxItem(item.id)}
                              >
                                {" "}
                                <span className="material-symbols-outlined text-[13px]">
                                  check_circle
                                </span>
                                {" Approve & Publish "}
                              </button>
                              <button
                                type="button"
                                className="px-2.5 py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-mono text-[10px] hover:bg-surface-container-high transition-colors cursor-pointer"
                                onClick={() => alert(`Requested edit for ${item.title}`)}
                              >
                                {" Request Edit "}
                              </button>
                              <button
                                type="button"
                                className="p-1.5 rounded-lg bg-error-container text-on-error-container hover:bg-error transition-colors cursor-pointer"
                                onClick={() => handleRejectInboxItem(item.id)}
                              >
                                {" "}
                                <span className="material-symbols-outlined text-[13px]">
                                  close
                                </span>
                                {" "}
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="pt-space-md">
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl bg-primary-container text-on-primary-container hover:bg-primary transition-all flex items-center justify-center gap-space-xs shadow-sm cursor-pointer"
                      id="btn-batch-review"
                      onClick={handleBatchReview}
                    >
                      {" "}
                      <span className="material-symbols-outlined text-[19px]">
                        checklist_rtl
                      </span>
                      {" "}
                      <span className="font-title-md text-title-md text-xs tracking-wider uppercase font-semibold">
                        Batch Review Selected ({filteredInboxItems.length})
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
                <section className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
                  <div className="space-y-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">
                            manage_history
                          </span>
                        </div>
                        <div>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface text-base font-semibold">
                            Dispatches & Audit Log
                          </h2>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            HISTORICAL POSITION TELEMETRY TRAIL
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <input
                            className="bg-surface-container-low text-on-surface font-label-mono text-xs rounded-lg pl-7 pr-3 py-1.5 focus:outline-none focus:bg-surface-container-high w-36"
                            placeholder="Filter log..."
                            type="text"
                            value={logSearchQuery}
                            onChange={(e) => setLogSearchQuery(e.target.value)}
                          />
                          <span className="material-symbols-outlined absolute left-2 top-2 text-[14px] text-on-surface-variant">
                            search
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto rounded-xl bg-surface-container-low">
                      <table className="w-full text-left font-body-sm text-body-sm">
                        <thead>
                          <tr className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[10px]">
                            <th className="p-3">
                              Timestamp / Station
                            </th>
                            <th className="p-3">
                              Dispatch Title
                            </th>
                            <th className="p-3">
                              Coordinates
                            </th>
                            <th className="p-3">
                              Mode
                            </th>
                            <th className="p-3 text-right">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y-0 text-xs">
                          {filteredLogs.length === 0 ? (
                            <tr>
                              <td colSpan="5" className="p-4 text-center text-on-surface-variant">
                                No records found matching "{logSearchQuery}".
                              </td>
                            </tr>
                          ) : (
                            filteredLogs.map((log, idx) => (
                              <tr key={idx} className="hover:bg-surface-container-high transition-colors">
                                <td className="p-3">
                                  {" "}
                                  <div className="font-semibold text-on-surface text-xs">
                                    {log.time}
                                  </div>
                                  {" "}
                                  <div className="font-label-mono text-[10px] text-on-surface-variant">
                                    {log.station}
                                  </div>
                                  {" "}
                                </td>
                                <td className="p-3">
                                  {" "}
                                  <span className="font-medium text-on-surface block max-w-[140px] truncate">
                                    {log.title}
                                  </span>
                                  {" "}
                                  <span className="text-[10px] text-on-surface-variant font-label-mono">
                                    {log.subLocation}
                                  </span>
                                  {" "}
                                </td>
                                <td className="p-3 font-label-mono text-[11px] text-on-surface">
                                  {log.coords}
                                </td>
                                <td className="p-3">
                                  {" "}
                                  <span className={`px-2 py-0.5 rounded text-[10px] font-label-mono ${
                                    log.mode.includes('Delayed')
                                      ? 'bg-surface-container-highest text-on-surface'
                                      : log.mode === 'Live Stream'
                                      ? 'bg-secondary-container text-on-secondary-container'
                                      : 'bg-surface-container-highest text-on-surface'
                                  }`}>
                                    {log.mode}
                                  </span>
                                  {" "}
                                </td>
                                <td className="p-3 text-right">
                                  {" "}
                                  <span className={`px-2 py-0.5 rounded-full font-label-mono text-[10px] font-bold ${
                                    log.status === 'Published'
                                      ? 'bg-tertiary-container text-on-tertiary-container'
                                      : 'bg-surface-container-highest text-on-surface font-semibold'
                                  }`}>
                                    {log.status}
                                  </span>
                                  {" "}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant text-[11px]">
                      <span>
                        Showing {filteredLogs.length} of 48 records across 3 field bases
                      </span>
                      <div className="flex items-center gap-2">
                        <button type="button" className="hover:text-primary transition-colors cursor-pointer">
                          Previous
                        </button>
                        <span className="text-on-surface font-semibold">
                          1
                        </span>
                        <button type="button" className="hover:text-primary transition-colors cursor-pointer">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md">
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-all flex items-center justify-center gap-space-xs shadow-sm cursor-pointer"
                      id="btn-export-telemetry"
                      onClick={handleExportTelemetry}
                    >
                      {" "}
                      <span className="material-symbols-outlined text-[19px] text-secondary">
                        download
                      </span>
                      {" "}
                      <span className="font-title-md text-title-md text-xs tracking-wider uppercase font-semibold">
                        Export Telemetry Track (GeoJSON / KML)
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="max-w-[1400px] mx-auto px-space-lg py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="font-label-mono text-label-mono font-semibold text-on-surface">
                POLARIS SYSTEM
              </span>
              <span className="font-label-mono text-label-mono text-outline-variant">
                •
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences (MoES), Govt. of India
              </span>
            </div>
            <div className="flex items-center gap-space-md text-on-surface-variant font-label-mono text-label-mono">
              <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface">
                LEVEL 4 SECURITY CLEARANCE
              </span>
              <span>
                DPDP ACT 2023 COMPLIANT
              </span>
              <span>
                © 2025 MoES INDIA
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}