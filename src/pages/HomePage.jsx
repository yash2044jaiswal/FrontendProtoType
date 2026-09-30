import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_complete_home_page_with_rapid_dispatches_ai_assistant_events/code.html
const BODY_CLASS = "bg-white text-polar-ink antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "body { font-family: 'Inter', sans-serif; background-color: #FFFFFF; color: #0B1F3A; margin: 0; padding: 0; }\n    h1, h2, h3, h4 { font-family: 'Merriweather', serif; }\n    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }";
const PAGE_SCRIPT = "";

export default function HomePage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      {" "}
      {" "}
      <header className="sticky top-0 z-50 h-[72px] bg-white/95 backdrop-blur-md border-b border-polar-border">
        {" "}
        <div className="max-w-[1240px] h-full mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">
                explore
              </span>
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight text-brand block leading-none">
                POLARIS
              </span>
              <span className="font-sans text-[10px] text-polar-muted block uppercase tracking-wider font-semibold">
                NCPOR • MoES India
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 font-sans text-sm text-polar-muted font-medium">
            <Link className="px-3 py-1.5 rounded-lg bg-brand text-white font-semibold" to="/">
              Home
            </Link>
            <Link className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" to="/media">
              Media
            </Link>
            <Link className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" to="/education">
              Education
            </Link>
            <Link className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" to="/ask">
              Ask POLARIS
            </Link>
            <a className="px-3 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft transition" href="#" onClick={(e)=>e.preventDefault()}>
              More
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Search" className="w-9 h-9 rounded-lg flex items-center justify-center text-polar-muted hover:bg-polar-soft hover:text-brand">
              {" "}
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
              {" "}
            </button>
            <div className="flex items-center px-2 py-1 rounded bg-polar-soft border border-polar-border text-xs font-semibold">
              <button className="text-brand">
                EN
              </button>
              <span className="mx-1 text-polar-muted">
                /
              </span>
              <button className="text-polar-muted">
                HI
              </button>
            </div>
            <button aria-label="Audio Reader" className="w-9 h-9 rounded-lg flex items-center justify-center text-polar-muted hover:bg-polar-soft hover:text-brand">
              {" "}
              <span className="material-symbols-outlined text-[20px]">
                headphones
              </span>
              {" "}
            </button>
            <button aria-label="Dark Mode" className="w-9 h-9 rounded-lg flex items-center justify-center text-polar-muted hover:bg-polar-soft hover:text-brand">
              {" "}
              <span className="material-symbols-outlined text-[20px]">
                dark_mode
              </span>
              {" "}
            </button>
            <Link className="px-4 py-2 rounded-lg bg-brand text-white font-medium text-sm hover:bg-brand-dark transition shadow-sm ml-1" to="/auth">
              Login
            </Link>
          </div>
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <main className="w-full flex flex-col">
        {" "}
        {" "}
        <section className="relative w-full h-[720px] overflow-hidden bg-polar-soft" id="hero">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <svg className="w-full h-full object-cover" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 720">
              <rect fill="#E8F4F8" height="720" width="1440" />
              <path d="M0 0H1440V440C1250 430 1100 460 880 435C660 410 400 445 0 440V0Z" fill="#D3E8F0" />
              <path d="M0 340L240 310L510 350L780 320L1020 360L1280 330L1440 350V560H0V340Z" fill="#BFE3F0" opacity="0.8" />
              <polygon fill="#EBF6FA" points="680,260 980,250 1180,290 1175,470 670,460" />
              <polygon fill="#8AC7DB" points="680,260 760,285 750,465 670,460" />
              <polygon fill="#CDE9F3" points="760,285 980,250 1180,290 1175,470 750,465" />
              <path d="M0 450C380 460 620 430 880 465C1140 500 1320 460 1440 475V720H0V450Z" fill="#0C253B" />
              <path d="M0 480C260 490 540 465 780 490L720 530L0 520V480Z" fill="#133E5C" />
              <polygon fill="#EAF5F8" points="120,530 260,520 320,570 180,590 90,560" />
              <polygon fill="#FFFFFF" points="940,530 1180,515 1240,580 1010,605 920,565" />
              <polygon fill="#6EAEC4" points="920,565 1010,605 990,625 905,580" />
              <g fill="#071C36" transform="translate(1040, 495) scale(0.65)">
                <ellipse cx="20" cy="28" rx="7" ry="16" />
                <circle cx="20" cy="9" r="6" />
                <polygon points="26,8 33,10 26,12" />
                <path d="M14 24C12 28 13 36 17 40L15 42H25L23 40C27 36 28 28 26 24Z" fill="#FFFFFF" />
              </g>
              <g fill="#071C36" transform="translate(1070, 500) scale(0.55)">
                <ellipse cx="20" cy="28" rx="7" ry="16" />
                <circle cx="20" cy="9" r="6" />
                <polygon points="14,8 7,10 14,12" />
                <path d="M14 24C12 28 13 36 17 40L15 42H25L23 40C27 36 28 28 26 24Z" fill="#FFFFFF" />
              </g>
            </svg>
          </div>
          <div className="relative z-10 max-w-[1240px] h-full mx-auto px-6 flex items-center">
            <div className="w-full max-w-[620px] bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-polar-border">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-polar-soft text-brand text-xs font-semibold uppercase tracking-wider mb-4 border border-polar-border">
                <span className="material-symbols-outlined text-[15px]">
                  my_location
                </span>
                {" NATIONAL CENTRE FOR POLAR & OCEAN RESEARCH "}
              </div>
              <h1 className="font-serif text-4xl text-polar-ink font-bold leading-tight mb-3">
                {" Exploring the Poles."}
                <br />
                <span className="text-brand">
                  Sharing the Science.
                </span>
                {" "}
              </h1>
              <p className="text-polar-muted text-sm leading-relaxed mb-6">
                {" India’s open research portal for Antarctic, Arctic, Southern Ocean, and Himalayan cryosphere science. "}
              </p>
              <div className="relative w-full mb-4">
                <div className="flex items-center bg-white rounded-xl border-2 border-brand/20 focus-within:border-brand shadow-sm px-3 py-2.5">
                  <span className="material-symbols-outlined text-brand mr-2">
                    search
                  </span>
                  <input className="w-full bg-transparent text-sm focus:outline-none placeholder:text-polar-muted/60" placeholder="Search 42,000+ polar datasets, ice core logs, stations..." type="text" />
                  <button className="p-1 rounded text-polar-muted hover:text-brand">
                    <span className="material-symbols-outlined text-[18px]">
                      mic
                    </span>
                  </button>
                  <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-[11px] rounded bg-polar-soft text-polar-muted border border-polar-border font-mono">
                    ⌘K
                  </kbd>
                </div>
                <div className="flex items-center gap-1.5 mt-2.5 text-xs">
                  <button className="px-2.5 py-1 rounded-full bg-brand text-white font-medium">
                    All
                  </button>
                  <button className="px-2.5 py-1 rounded-full bg-polar-soft hover:bg-polar-border text-polar-muted transition">
                    {"Reports "}
                    <span className="opacity-60">
                      1.2k
                    </span>
                  </button>
                  <button className="px-2.5 py-1 rounded-full bg-polar-soft hover:bg-polar-border text-polar-muted transition">
                    {"Datasets "}
                    <span className="opacity-60">
                      42k
                    </span>
                  </button>
                  <button className="px-2.5 py-1 rounded-full bg-polar-soft hover:bg-polar-border text-polar-muted transition">
                    {"Photos "}
                    <span className="opacity-60">
                      85k
                    </span>
                  </button>
                  <button className="px-2.5 py-1 rounded-full bg-polar-soft hover:bg-polar-border text-polar-muted transition">
                    {"Videos "}
                    <span className="opacity-60">
                      620
                    </span>
                  </button>
                  <button className="px-2.5 py-1 rounded-full bg-polar-soft hover:bg-polar-border text-polar-muted transition">
                    {"Stories "}
                    <span className="opacity-60">
                      340
                    </span>
                  </button>
                </div>
                <div className="mt-2.5 bg-white rounded-xl p-2 border border-polar-border shadow-sm text-xs">
                  <div className="text-[10px] font-semibold text-polar-muted uppercase px-2 py-1 tracking-wider">
                    Live Suggestions & Frequent Queries
                  </div>
                  <Link className="flex items-center justify-between p-2 rounded-lg hover:bg-polar-soft transition" to="/live/soe-01">
                    {" "}
                    <span className="flex items-center gap-2 text-polar-ink font-medium">
                      <span className="w-2 h-2 rounded-full bg-live-amber animate-ping" />
                      43rd Indian Antarctic Expedition telemetry feed
                    </span>
                    {" "}
                    <span className="px-1.5 py-0.5 rounded bg-live-amber/15 text-live-amber font-bold text-[10px]">
                      LIVE
                    </span>
                    {" "}
                  </Link>
                  <Link className="flex items-center justify-between p-2 rounded-lg hover:bg-polar-soft transition" to="/data">
                    {" "}
                    <span className="text-polar-ink">
                      Kongsfjorden fjord CTD temperature profile 2024
                    </span>
                    {" "}
                    <span className="px-1.5 py-0.5 rounded bg-polar-soft text-brand font-medium text-[10px]">
                      DATASET
                    </span>
                    {" "}
                  </Link>
                  <Link className="flex items-center justify-between p-2 rounded-lg hover:bg-polar-soft transition" to="/resources/ncpor-tr-2024-08">
                    {" "}
                    <span className="text-polar-ink">
                      Maitri II Station clean-energy architectural brief
                    </span>
                    {" "}
                    <span className="px-1.5 py-0.5 rounded bg-polar-soft text-polar-muted font-medium text-[10px]">
                      REPORT
                    </span>
                    {" "}
                  </Link>
                  <a className="flex items-center justify-between p-2 rounded-lg hover:bg-polar-soft transition" href="#" onClick={(e)=>e.preventDefault()}>
                    {" "}
                    <span className="text-polar-ink">
                      Southern Ocean diatom sediment core imagery
                    </span>
                    {" "}
                    <span className="px-1.5 py-0.5 rounded bg-polar-soft text-aurora-green font-medium text-[10px]">
                      PHOTO
                    </span>
                    {" "}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link className="px-5 py-2.5 rounded-lg bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition shadow-sm" to="/globe">
                  Explore Expedition Globe
                </Link>
                <Link className="px-4 py-2.5 rounded-lg border border-brand text-brand font-semibold text-sm hover:bg-polar-soft transition" to="/repository">
                  Browse Repository
                </Link>
                <Link className="px-3 py-2.5 text-polar-muted hover:text-brand font-medium text-sm flex items-center gap-1" to="/ask">
                  <span className="material-symbols-outlined text-[18px]">
                    auto_awesome
                  </span>
                  {" Ask POLARIS"}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 inset-x-0 z-20 flex items-center justify-center gap-3 pointer-events-none">
            <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-polar-border shadow-sm">
              <span className="w-5 h-2 rounded-full bg-brand" />
              <span className="w-2 h-2 rounded-full bg-polar-border" />
              <span className="w-2 h-2 rounded-full bg-polar-border" />
              <span className="w-2 h-2 rounded-full bg-polar-border" />
              <span className="w-2 h-2 rounded-full bg-polar-border" />
            </div>
            <div className="pointer-events-auto px-3 py-1.5 rounded-full bg-white/90 backdrop-blur border border-polar-border text-[11px] font-medium text-polar-muted">
              {" Auto-playing • Pause on hover "}
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full bg-[#EBF4F7] py-3 border-y border-polar-border">
          <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand text-[20px]">
                bookmark_add
              </span>
              <span className="text-sm font-medium text-polar-ink">
                Create a free account to save bookmarks, subscribe to station feeds, and download NetCDF packages.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link className="px-4 py-1.5 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition" to="/auth">
                Sign up
              </Link>
              <Link className="text-xs text-polar-muted hover:text-brand font-medium" to="/education">
                Learn more
              </Link>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto px-6 mt-2 pt-2 border-t border-polar-border/60 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-polar-border shadow-sm">
              <span className="font-medium text-polar-ink">
                Continue where you left off:
              </span>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-polar-soft text-polar-ink text-[11px] border border-polar-border">
                  Bharati Met (32m ago)
                </span>
                <span className="px-2 py-0.5 rounded bg-polar-soft text-polar-ink text-[11px] border border-polar-border">
                  IndARC Salinity
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-polar-border shadow-sm">
              <span className="font-medium text-polar-ink">
                Go to your dashboard
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-danger-red/10 text-danger-red font-semibold text-[11px]">
                  3 awaiting review
                </span>
                <a className="text-brand font-semibold hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                  Review Queue →
                </a>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-white">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                01 / OPERATIONAL TELEMETRY
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink">
                Active Field Deployments
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-live-amber/15 text-live-amber font-bold text-xs uppercase tracking-wider">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-live-amber animate-ping" />
                    {" Live "}
                  </span>
                  <span className="text-xs text-polar-muted">
                    Updated 4m ago
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-5xl font-bold text-live-amber">
                    2
                  </span>
                  <div>
                    <h3 className="font-sans font-bold text-polar-ink text-base">
                      Live Outposts
                    </h3>
                    <p className="text-xs text-polar-muted">
                      Real-time sensor telemetry stream
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-polar-border space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium text-polar-ink">
                      Maitri Station 43rd IAE
                    </span>
                    <span className="text-aurora-green font-semibold">
                      -18.4°C • Stable
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-polar-ink">
                      IndARC Kongsfjorden Mooring
                    </span>
                    <span className="text-aurora-green font-semibold">
                      192m Depth • Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-upcoming-purple/15 text-upcoming-purple font-bold text-xs uppercase tracking-wider">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      schedule
                    </span>
                    {" Upcoming "}
                  </span>
                  <span className="text-xs text-polar-muted">
                    Q3–Q4 2025
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-5xl font-bold text-upcoming-purple">
                    4
                  </span>
                  <div>
                    <h3 className="font-sans font-bold text-polar-ink text-base">
                      Scheduled Expeditions
                    </h3>
                    <p className="text-xs text-polar-muted">
                      Logistics & vessel departures
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-polar-border space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium text-polar-ink">
                      44th Antarctic Summer Voyage
                    </span>
                    <span className="text-polar-muted">
                      Nov 2025
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-polar-ink">
                      Svalbard Winter Atmospheric Run
                    </span>
                    <span className="text-polar-muted">
                      Dec 2025
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/15 text-brand font-bold text-xs uppercase tracking-wider">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      check_circle
                    </span>
                    {" Completed "}
                  </span>
                  <span className="text-xs text-polar-muted">
                    Data 100% Ingested
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-serif text-5xl font-bold text-brand">
                    6
                  </span>
                  <div>
                    <h3 className="font-sans font-bold text-polar-ink text-base">
                      Archived Missions
                    </h3>
                    <p className="text-xs text-polar-muted">
                      Published to Polar Data Centre
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-polar-border space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="font-medium text-polar-ink">
                      Southern Ocean SO-14 Coring
                    </span>
                    <span className="text-aurora-green font-semibold">
                      Open Access
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-polar-ink">
                      Himadri Aerosol Long-Series
                    </span>
                    <span className="text-aurora-green font-semibold">
                      Open Access
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-polar-soft">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
              <div>
                <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                  02 / ARCHIVE METRICS
                </div>
                <h2 className="font-serif text-3xl font-bold text-polar-ink">
                  Open Polar Data at a Glance
                </h2>
              </div>
              <div className="text-xs text-polar-muted flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-aurora-green" />
                {" Federated ISO-19115 & WDS Accredited "}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md transition group">
                <span className="material-symbols-outlined text-brand text-[22px] mb-2">
                  directions_boat
                </span>
                <div className="font-serif text-3xl font-bold text-polar-ink group-hover:text-brand transition">
                  44
                </div>
                <div className="text-xs text-polar-muted mt-1 group-hover:underline">
                  Expeditions
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md transition group">
                <span className="material-symbols-outlined text-brand text-[22px] mb-2">
                  description
                </span>
                <div className="font-serif text-3xl font-bold text-polar-ink group-hover:text-brand transition">
                  1,280
                </div>
                <div className="text-xs text-polar-muted mt-1 group-hover:underline">
                  Reports
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md transition group">
                <span className="material-symbols-outlined text-brand text-[22px] mb-2">
                  database
                </span>
                <div className="font-serif text-3xl font-bold text-polar-ink group-hover:text-brand transition">
                  42,910
                </div>
                <div className="text-xs text-polar-muted mt-1 group-hover:underline">
                  Datasets
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md transition group">
                <span className="material-symbols-outlined text-brand text-[22px] mb-2">
                  photo_camera
                </span>
                <div className="font-serif text-3xl font-bold text-polar-ink group-hover:text-brand transition">
                  85,400
                </div>
                <div className="text-xs text-polar-muted mt-1 group-hover:underline">
                  Photos
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md transition group">
                <span className="material-symbols-outlined text-brand text-[22px] mb-2">
                  videocam
                </span>
                <div className="font-serif text-3xl font-bold text-polar-ink group-hover:text-brand transition">
                  620
                </div>
                <div className="text-xs text-polar-muted mt-1 group-hover:underline">
                  Videos
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-polar-border shadow-sm hover:shadow-md transition group">
                <span className="material-symbols-outlined text-brand text-[22px] mb-2">
                  auto_stories
                </span>
                <div className="font-serif text-3xl font-bold text-polar-ink group-hover:text-brand transition">
                  340
                </div>
                <div className="text-xs text-polar-muted mt-1 group-hover:underline">
                  Stories
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-white relative" id="geospatial-globe">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                03 / INTERACTIVE GEOSPATIAL
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink">
                Explore the Poles in 3D
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 relative flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[640px] h-[640px] rounded-[24px] bg-[#050B18] border-2 border-dashed border-brand overflow-hidden flex items-center justify-center shadow-lg" id="polaris-globe-home">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-sm pointer-events-none">
                    <span className="material-symbols-outlined text-brand text-[20px]">
                      public
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold text-brand">
                      GLOBE SLOT - polaris-globe-home
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                    <button aria-label="Zoom in" className="w-9 h-9 rounded-full bg-white/90 backdrop-blur text-polar-ink flex items-center justify-center hover:bg-white hover:text-brand shadow-md">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        add
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Zoom out" className="w-9 h-9 rounded-full bg-white/90 backdrop-blur text-polar-ink flex items-center justify-center hover:bg-white hover:text-brand shadow-md">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        remove
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur shadow-md border border-polar-border text-[11px] font-semibold">
                    <span className="flex items-center gap-1.5 text-live-amber">
                      <span className="w-2 h-2 rounded-full bg-live-amber animate-ping" />
                      Live
                    </span>
                    <span className="text-polar-border">
                      •
                    </span>
                    <span className="flex items-center gap-1 text-brand">
                      <span className="material-symbols-outlined text-[13px]">
                        check_circle
                      </span>
                      Completed
                    </span>
                    <span className="text-polar-border">
                      •
                    </span>
                    <span className="flex items-center gap-1 text-upcoming-purple">
                      <span className="material-symbols-outlined text-[13px]">
                        schedule
                      </span>
                      Upcoming
                    </span>
                  </div>
                </div>
                <div className="relative lg:absolute lg:right-[-32px] lg:top-14 z-30 w-full max-w-[320px] mt-4 lg:mt-0 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-polar-border">
                  <div className="relative w-full h-28 rounded-xl overflow-hidden mb-3 bg-[#0B2338]">
                    <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 320 112">
                      <rect fill="#081D2E" height="112" width="320" />
                      <polygon fill="#6CA9BD" points="40,75 110,40 180,80 120,85" />
                      <polygon fill="#A4D0DE" points="110,40 180,80 260,35 220,90" />
                      <rect fill="#F5A623" height="16" rx="2" width="36" x="140" y="60" />
                      <line stroke="#FFFFFF" strokeWidth="1.5" x1="158" x2="158" y1="45" y2="32" />
                      <circle cx="158" cy="32" fill="#2ECC9A" r="2.5" />
                    </svg>
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 rounded-full px-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span className="w-1.5 h-1.5 rounded-full bg-polar-border" />
                      <span className="w-1.5 h-1.5 rounded-full bg-polar-border" />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-sans font-bold text-polar-ink text-base">
                      Bharati Station
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-live-amber/15 text-live-amber flex items-center gap-1">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-live-amber animate-ping" />
                      {" Live "}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-polar-muted mb-2">
                    Lat 69.4° S, Lon 76.2° E • 44th IAE
                  </div>
                  <p className="text-xs text-polar-muted leading-relaxed mb-3 line-clamp-3">
                    {" Automated CTD profiling, ionospheric scintillation analysis, and real-time meteorology data stream active. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-polar-soft text-brand font-semibold flex items-center gap-1 border border-polar-border">
                      {" "}
                      <span className="material-symbols-outlined text-[11px]">
                        auto_awesome
                      </span>
                      {" AI-drafted "}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-polar-soft text-polar-muted font-medium flex items-center gap-1 border border-polar-border">
                      {" "}
                      <span className="material-symbols-outlined text-[11px]">
                        link
                      </span>
                      {" DOI:10.5061/dryad "}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-polar-soft mb-3 border border-polar-border">
                    <button className="w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        play_arrow
                      </span>
                      {" "}
                    </button>
                    <div className="flex-1 flex items-center gap-0.5 h-2.5">
                      <span className="w-0.5 h-2 bg-brand rounded" />
                      <span className="w-0.5 h-3 bg-brand rounded" />
                      <span className="w-0.5 h-1.5 bg-brand rounded" />
                      <span className="w-0.5 h-2.5 bg-brand/40 rounded" />
                      <span className="w-0.5 h-1 bg-brand/40 rounded" />
                      <span className="w-0.5 h-2.5 bg-brand rounded" />
                    </div>
                    <span className="text-[10px] font-semibold text-polar-muted">
                      1.0x
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a className="flex-1 py-1.5 px-3 rounded-lg bg-brand text-white text-center text-xs font-semibold hover:bg-brand-dark transition" href="#" onClick={(e)=>e.preventDefault()}>
                      See full details
                    </a>
                    <button className="p-1.5 rounded-lg border border-polar-border text-polar-muted hover:text-brand hover:bg-polar-soft transition">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        bookmark_border
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <p className="text-sm text-polar-muted mb-4 leading-relaxed">
                    {" Navigate interactive orthographic polar projections. Trace continuous Indian expeditions, deep-sea moorings, and ice core traverses across polar realms. "}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-white border border-polar-border hover:border-brand/50 shadow-sm transition flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg bg-[#0B253B] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-[24px]">
                          explore
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-polar-ink truncate">
                            43rd Indian Antarctic Expedition
                          </h4>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-live-amber/15 text-live-amber uppercase shrink-0">
                            Live
                          </span>
                        </div>
                        <div className="text-[11px] text-polar-muted font-mono flex justify-between">
                          <span className="">
                            Nov 2023 – Present
                          </span>
                          <span className="">
                            Lat 70°46'S, Lon 11°44'E
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-polar-border hover:border-brand/50 shadow-sm transition flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg bg-[#071C36] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-[24px]">
                          anchor
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-polar-ink truncate">
                            IndARC Kongsfjorden Mooring V
                          </h4>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-live-amber/15 text-live-amber uppercase shrink-0">
                            Live
                          </span>
                        </div>
                        <div className="text-[11px] text-polar-muted font-mono flex justify-between">
                          <span className="">
                            Arctic Svalbard
                          </span>
                          <span className="text-aurora-green font-semibold">
                            Depth: 192m
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-polar-border hover:border-brand/50 shadow-sm transition flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg bg-[#0E2336] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white text-[24px]">
                          directions_boat
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-polar-ink truncate">
                            Southern Ocean Paleoclimate Cruise
                          </h4>
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand/15 text-brand uppercase shrink-0">
                            Completed
                          </span>
                        </div>
                        <div className="text-[11px] text-polar-muted font-mono flex justify-between">
                          <span className="">
                            Feb – Apr 2024
                          </span>
                          <span className="">
                            Lat 55°S – 68°S
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition shadow-sm" to="/globe">
                  {" "}
                  <span className="">
                    Open Full Expedition Globe
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    travel_explore
                  </span>
                  {" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-polar-soft" id="cryosphere-realms">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                04 / CRYOSPHERE REALMS
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink mb-2">
                Explore by Region
              </h2>
              <p className="text-sm text-polar-muted">
                Long-term research platforms spanning the Arctic, Antarctic, Southern Ocean, and High-Altitude Himalayas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link className="group bg-white rounded-2xl overflow-hidden border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between" to="/base-stations/himadri">
                {" "}
                <div className="w-full h-40 bg-[#E2EDF4] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 160">
                    <rect fill="#CDE1ED" height="160" width="280" />
                    <polygon fill="#85A9BE" points="0,100 50,35 120,85 180,25 240,75 280,45 280,120 0,120" />
                    <path d="M0 105H280V160H0V105Z" fill="#1B4965" />
                    <polygon fill="#B72C2C" points="150,108 200,108 200,130 150,130" />
                  </svg>
                </div>
                {" "}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-2">
                      Arctic
                    </h3>
                    <p className="text-xs text-polar-muted leading-relaxed mb-4">
                      Year-round atmospheric and fjord marine monitoring from Himadri station in Svalbard.
                    </p>
                  </div>
                  <span className="text-xs text-brand font-semibold flex items-center gap-1 group-hover:underline">
                    Explore Arctic →
                  </span>
                </div>
                {" "}
              </Link>
              <Link className="group bg-white rounded-2xl overflow-hidden border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between" to="/search">
                {" "}
                <div className="w-full h-40 bg-[#E2F1F8] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 160">
                    <rect fill="#D7EAF3" height="160" width="280" />
                    <polygon fill="#FFFFFF" points="20,110 90,75 160,115 70,130" />
                    <polygon fill="#9AC8DB" points="90,75 160,115 150,135 60,132" />
                    <rect fill="#F5A623" height="16" rx="2" width="36" x="175" y="95" />
                  </svg>
                </div>
                {" "}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-2">
                      Antarctica
                    </h3>
                    <p className="text-xs text-polar-muted leading-relaxed mb-4">
                      Host to India's Maitri and Bharati permanent research bases studying ozone depletion.
                    </p>
                  </div>
                  <span className="text-xs text-brand font-semibold flex items-center gap-1 group-hover:underline">
                    Explore Antarctica →
                  </span>
                </div>
                {" "}
              </Link>
              <a className="group bg-white rounded-2xl overflow-hidden border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                {" "}
                <div className="w-full h-40 bg-[#D3E5EE] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 160">
                    <rect fill="#0D2436" height="160" width="280" />
                    <path d="M0 90C80 80 180 100 280 85V160H0V90Z" fill="#081726" />
                    <path d="M70 100L85 80H170L190 100H50L70 100Z" fill="#931A1D" />
                  </svg>
                </div>
                {" "}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-2">
                      Southern Ocean
                    </h3>
                    <p className="text-xs text-polar-muted leading-relaxed mb-4">
                      Investigating the global carbon pump, Antarctic Circumpolar Current, and krill ecology.
                    </p>
                  </div>
                  <span className="text-xs text-brand font-semibold flex items-center gap-1 group-hover:underline">
                    Explore Southern Ocean →
                  </span>
                </div>
                {" "}
              </a>
              <a className="group bg-white rounded-2xl overflow-hidden border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                {" "}
                <div className="w-full h-40 bg-[#D7E6ED] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 160">
                    <rect fill="#C0D7E4" height="160" width="280" />
                    <polygon fill="#425667" points="20,110 70,25 120,85 180,15 230,75 280,30 280,130 0,130" />
                    <polygon fill="#FFFFFF" points="70,25 85,50 120,85 180,15 195,45 180,65" />
                  </svg>
                </div>
                {" "}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-2">
                      Himalayas
                    </h3>
                    <p className="text-xs text-polar-muted leading-relaxed mb-4">
                      Cryospheric mass balance and glacier melt discharge at the Himansh station in Spiti Valley.
                    </p>
                  </div>
                  <span className="text-xs text-brand font-semibold flex items-center gap-1 group-hover:underline">
                    Explore Himalayas →
                  </span>
                </div>
                {" "}
              </a>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-white" id="portal-navigation">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                05 / PORTAL NAVIGATION
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink mb-2">
                Scientific Workspaces & Tools
              </h2>
              <p className="text-sm text-polar-muted">
                Direct access to verified polar data repositories, interactive portals, and public outreach tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link className="group p-6 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition" to="/resources/ncpor-tr-2024-08">
                {" "}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition">
                    <span className="material-symbols-outlined text-[22px]">
                      folder_open
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-brand opacity-0 group-hover:opacity-100 transition">
                    arrow_forward
                  </span>
                </div>
                {" "}
                <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-1">
                  Repository
                </h3>
                {" "}
                <p className="text-xs text-polar-muted leading-relaxed">
                  42,900+ curated datasets, cruise reports, NetCDF packages, and ice core logs.
                </p>
                {" "}
              </Link>
              <Link className="group p-6 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition" to="/globe">
                {" "}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition">
                    <span className="material-symbols-outlined text-[22px]">
                      explore
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-brand opacity-0 group-hover:opacity-100 transition">
                    arrow_forward
                  </span>
                </div>
                {" "}
                <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-1">
                  Expedition Globe
                </h3>
                {" "}
                <p className="text-xs text-polar-muted leading-relaxed">
                  Interactive polar projections with vessel tracking, mooring telemetry, and tracks.
                </p>
                {" "}
              </Link>
              <Link className="group p-6 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition" to="/expeditions/soe-01">
                {" "}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition">
                    <span className="material-symbols-outlined text-[22px]">
                      history
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-brand opacity-0 group-hover:opacity-100 transition">
                    arrow_forward
                  </span>
                </div>
                {" "}
                <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-1">
                  Timeline
                </h3>
                {" "}
                <p className="text-xs text-polar-muted leading-relaxed">
                  Four decades of Indian polar expeditions from Dakshin Gangotri (1981) to today.
                </p>
                {" "}
              </Link>
              <Link className="group p-6 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition" to="/graph">
                {" "}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition">
                    <span className="material-symbols-outlined text-[22px]">
                      photo_library
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-brand opacity-0 group-hover:opacity-100 transition">
                    arrow_forward
                  </span>
                </div>
                {" "}
                <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-1">
                  Media Gallery
                </h3>
                {" "}
                <p className="text-xs text-polar-muted leading-relaxed">
                  High-resolution archival photography, drone footage, documentary reels, and audio.
                </p>
                {" "}
              </Link>
              <Link className="group p-6 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition" to="/education">
                {" "}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition">
                    <span className="material-symbols-outlined text-[22px]">
                      school
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-brand opacity-0 group-hover:opacity-100 transition">
                    arrow_forward
                  </span>
                </div>
                {" "}
                <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-1">
                  Education Hub
                </h3>
                {" "}
                <p className="text-xs text-polar-muted leading-relaxed">
                  Peer-reviewed curriculum modules, polar science explainers, and student packs.
                </p>
                {" "}
              </Link>
              <Link className="group p-6 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition" to="/ask">
                {" "}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition">
                    <span className="material-symbols-outlined text-[22px]">
                      auto_awesome
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-brand opacity-0 group-hover:opacity-100 transition">
                    arrow_forward
                  </span>
                </div>
                {" "}
                <h3 className="font-bold text-base text-polar-ink group-hover:text-brand mb-1">
                  Ask POLARIS
                </h3>
                {" "}
                <p className="text-xs text-polar-muted leading-relaxed">
                  NCPOR AI-assisted natural language query engine trained on MoES research papers.
                </p>
                {" "}
              </Link>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-polar-soft" id="featured-story">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                06 / DISPATCHES FROM THE ICE
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink">
                Featured Expedition Story
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-polar-border shadow-sm">
              <div className="lg:col-span-6 relative w-full h-[360px] rounded-xl overflow-hidden bg-[#040C18]">
                <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 540 360">
                  <rect fill="#040C18" height="360" width="540" />
                  <path d="M0 120C120 40 220 180 340 60C420 -20 490 80 540 40V180C460 220 380 140 280 200C180 260 80 160 0 220V120Z" fill="#2ECC9A" opacity="0.6" />
                  <path d="M0 240C140 220 300 250 540 230V360H0V240Z" fill="#0A1A28" />
                  <g transform="translate(300, 200)">
                    <ellipse cx="50" cy="40" fill="#F5A623" opacity="0.2" rx="50" ry="25" />
                    <path d="M15 40C15 20 30 6 50 6C70 6 85 20 85 40Z" fill="#F5A623" />
                  </g>
                </svg>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                  <span className="w-5 h-2 rounded-full bg-brand" />
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand/15 text-brand text-xs font-bold uppercase tracking-wider mb-3">
                    {" ANTARCTICA • CLIMATE ARCHIVES "}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-polar-ink mb-3 leading-snug">
                    {" Unlocking 800,000 Years of Atmospheric History: The Central Dronning Maud Land Ice Core Project "}
                  </h3>
                  <p className="text-sm text-polar-muted mb-4 leading-relaxed line-clamp-3">
                    {" Analysis of trapped gas bubbles from a 2,400m ice core reveals unprecedented greenhouse gas fluctuations across eight glacial cycles. NCPOR glaciologists corroborate solar irradiance correlations. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-aurora-green/15 text-aurora-green flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>
                      {" Verified by NCPOR Scientist "}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-polar-soft text-polar-muted border border-polar-border">
                      {" DOI:10.1038/s41561 "}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-polar-soft mb-6 border border-polar-border">
                    <button className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shrink-0">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        play_arrow
                      </span>
                      {" "}
                    </button>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-polar-ink block">
                        Listen to Field Narration
                      </span>
                      <div className="flex items-center gap-1 h-2.5 mt-1">
                        <span className="w-1 h-2 bg-brand rounded" />
                        <span className="w-1 h-3 bg-brand rounded" />
                        <span className="w-1 h-1.5 bg-brand rounded" />
                        <span className="w-1 h-2.5 bg-brand/40 rounded" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-polar-muted">
                      04:18
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link className="px-5 py-2.5 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition shadow-sm" to="/stories/overwintering-in-the-schirmacher-oasis">
                    Read Full Story
                  </Link>
                  <a className="px-4 py-2.5 rounded-lg border border-polar-border text-polar-ink text-sm font-semibold hover:bg-polar-soft transition" href="#" onClick={(e)=>e.preventDefault()}>
                    Download PDF Brief
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-white" id="polar-clips">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
              <div>
                <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                  07 / RAPID DISPATCHES
                </div>
                <h2 className="font-serif text-3xl font-bold text-polar-ink">
                  Polar in 30 Seconds
                </h2>
                <p className="text-sm text-polar-muted mt-1">
                  Bite-sized visual field dispatches straight from research vessels, ice sheets, and high-altitude stations.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button aria-label="Previous video" className="w-9 h-9 rounded-full border border-polar-border text-polar-ink flex items-center justify-center hover:bg-polar-soft hover:text-brand transition shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_left
                  </span>
                </button>
                <button aria-label="Next video" className="w-9 h-9 rounded-full border border-polar-border text-polar-ink flex items-center justify-center hover:bg-polar-soft hover:text-brand transition shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="group bg-white rounded-2xl overflow-hidden border-2 border-brand shadow-md flex flex-col justify-between cursor-pointer transition duration-200">
                <div className="relative w-full h-44 bg-[#0B253B] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 176">
                    <rect fill="#081E31" height="176" width="280" />
                    <path d="M0 110L70 80L140 120L210 70L280 115V176H0V110Z" fill="#6EAEC4" />
                    <circle cx="140" cy="88" fill="#F5A623" opacity="0.8" r="16" />
                  </svg>
                  <div className="absolute inset-0 bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-brand flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                      <span className="material-symbols-outlined text-[24px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-[#071C36]/80 text-white backdrop-blur">
                    Maitri • 44th IAE
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/75 text-white">
                    0:20
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-sm text-polar-ink group-hover:text-brand transition line-clamp-2 mb-2">
                    Setting up autonomous ozonesonde sensor array during Antarctic dawn
                  </h4>
                  <div className="flex items-center justify-between text-xs text-polar-muted pt-2 border-t border-polar-border font-mono">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">
                        visibility
                      </span>
                      {" 3.4k"}
                    </span>
                    <span className="text-brand font-semibold font-sans text-[11px] group-hover:underline">
                      Previewing
                    </span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between cursor-pointer">
                <div className="relative w-full h-44 bg-[#071C36] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 176">
                    <rect fill="#05152A" height="176" width="280" />
                    <polygon fill="#1B4965" points="0,130 90,60 170,120 280,50 280,176 0,176" />
                    <rect fill="#F5A623" height="14" rx="2" width="30" x="120" y="110" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/80 text-polar-ink flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                      <span className="material-symbols-outlined text-[24px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-[#071C36]/80 text-white backdrop-blur">
                    Himadri • Svalbard
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/75 text-white">
                    0:20
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-sm text-polar-ink group-hover:text-brand transition line-clamp-2 mb-2">
                    CTD water sampling run inside Kongsfjorden fjord glacial channel
                  </h4>
                  <div className="flex items-center justify-between text-xs text-polar-muted pt-2 border-t border-polar-border font-mono">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">
                        visibility
                      </span>
                      {" 2.1k"}
                    </span>
                    <span className="text-polar-muted text-[11px] font-sans">
                      Arctic Marine
                    </span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between cursor-pointer">
                <div className="relative w-full h-44 bg-[#0E2336] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 176">
                    <rect fill="#0A1D2D" height="176" width="280" />
                    <path d="M0 100C80 90 180 110 280 95V176H0V100Z" fill="#133E5C" />
                    <polygon fill="#B72C2C" points="90,110 110,85 190,85 210,110" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/80 text-polar-ink flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                      <span className="material-symbols-outlined text-[24px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-[#071C36]/80 text-white backdrop-blur">
                    Southern Ocean
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/75 text-white">
                    0:20
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-sm text-polar-ink group-hover:text-brand transition line-clamp-2 mb-2">
                    Multi-core sediment grab recovery on R/V Sagar Kanya deck
                  </h4>
                  <div className="flex items-center justify-between text-xs text-polar-muted pt-2 border-t border-polar-border font-mono">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">
                        visibility
                      </span>
                      {" 1.8k"}
                    </span>
                    <span className="text-polar-muted text-[11px] font-sans">
                      Geology
                    </span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between cursor-pointer">
                <div className="relative w-full h-44 bg-[#050B18] overflow-hidden">
                  <svg className="w-full h-full object-cover group-hover:scale-105 transition duration-300" fill="none" viewBox="0 0 280 176">
                    <rect fill="#040B16" height="176" width="280" />
                    <polygon fill="#3F5868" points="20,120 80,40 140,100 200,30 260,110 280,80 280,176 0,176" />
                    <polygon fill="#FFFFFF" points="80,40 100,70 140,100 200,30 215,60" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/80 text-polar-ink flex items-center justify-center shadow-lg group-hover:scale-105 transition">
                      <span className="material-symbols-outlined text-[24px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-[#071C36]/80 text-white backdrop-blur">
                    Himansh • Spiti
                  </span>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/75 text-white">
                    0:20
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-sm text-polar-ink group-hover:text-brand transition line-clamp-2 mb-2">
                    Glacier stake ablation velocity surveying at 4,000m altitude
                  </h4>
                  <div className="flex items-center justify-between text-xs text-polar-muted pt-2 border-t border-polar-border font-mono">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">
                        visibility
                      </span>
                      {" 4.7k"}
                    </span>
                    <span className="text-polar-muted text-[11px] font-sans">
                      Cryosphere
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#050B18] rounded-2xl p-6 sm:p-8 text-white border border-[#0B253B] shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="relative w-full lg:w-2/3 h-[240px] sm:h-[300px] rounded-xl overflow-hidden bg-[#071C36] flex flex-col justify-between p-4">
                  <svg className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40" fill="none" viewBox="0 0 600 300">
                    <rect fill="#071C36" height="300" width="600" />
                    <path d="M0 160C150 120 350 200 600 150V300H0V160Z" fill="#1B4965" />
                    <polygon fill="#6EAEC4" points="180,180 230,120 320,200 420,110 500,190" />
                  </svg>
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-live-amber/20 text-live-amber font-mono text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-live-amber animate-ping" />
                      {" PLAYING • Maitri Field Clip #44-A"}
                    </span>
                    <button className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur transition">
                      CC ON
                    </button>
                  </div>
                  <div className="relative z-10 self-center max-w-lg text-center bg-black/60 backdrop-blur px-4 py-1.5 rounded-lg text-xs text-white/90">
                    "...transmitting baseline radiative flux measurements directly to the Antarctic data uplink..."
                  </div>
                  <div className="relative z-10 space-y-2">
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                      <div className="bg-brand h-full rounded-full" style={{"width": "40%"}} />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-white/80">
                      <div className="flex items-center gap-3">
                        <button className="hover:text-brand transition">
                          <span className="material-symbols-outlined text-[18px]">
                            pause
                          </span>
                        </button>
                        <span className="font-sans text-[11px]">
                          0:08 / 0:20
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">
                          volume_up
                        </span>
                        <span className="material-symbols-outlined text-[16px]">
                          fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-xs font-bold text-brand uppercase tracking-wider mb-1">
                      FIELD DISPATCH TELEMETRY
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      Setting up autonomous ozonesonde sensor array during Antarctic dawn
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Recorded at Maitri Station (44th IAE) during early spring polar vortex opening. Sensor array records continuous stratospheric ozone profiles.
                    </p>
                    <div className="space-y-1.5 text-xs text-white/80">
                      <div className="flex justify-between border-b border-white/10 pb-1">
                        <span className="">
                          Recorded by
                        </span>
                        <span className="text-white font-medium">
                          Dr. V. Sharma (NCPOR)
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1">
                        <span className="">
                          Coordinates
                        </span>
                        <span className="font-mono">
                          70°45'S, 11°43'E
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">
                          Telemetry Node
                        </span>
                        <span className="font-mono text-brand">
                          IAE-MET-2024
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link className="inline-flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-white transition" to="/resources/ncpor-tr-2024-08">
                    <span className="">
                      Read related field report (NCPOR-2024-IS-088)
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-brand">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-polar-soft" id="latest-content">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                  08 / OPEN ARCHIVES
                </div>
                <h2 className="font-serif text-3xl font-bold text-polar-ink">
                  Latest Approved Content
                </h2>
                <p className="text-sm text-polar-muted mt-1">
                  Peer-reviewed observations and data releases approved by the National Centre for Polar and Ocean Research.
                </p>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-polar-border shadow-sm text-xs font-semibold">
                <button className="px-3.5 py-1.5 rounded-lg bg-brand text-white shadow-sm">
                  {"Stories "}
                  <span className="text-[10px] opacity-80">
                    (340)
                  </span>
                </button>
                <button className="px-3.5 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft text-polar-muted transition">
                  {"Reports "}
                  <span className="text-[10px] opacity-60">
                    (1,280)
                  </span>
                </button>
                <button className="px-3.5 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft text-polar-muted transition">
                  {"Photos "}
                  <span className="text-[10px] opacity-60">
                    (85,400)
                  </span>
                </button>
                <button className="px-3.5 py-1.5 rounded-lg hover:text-brand hover:bg-polar-soft text-polar-muted transition">
                  {"Datasets "}
                  <span className="text-[10px] opacity-60">
                    (42,910)
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white rounded-2xl p-5 border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2 py-0.5 rounded bg-polar-soft text-brand font-semibold border border-polar-border">
                      Antarctica
                    </span>
                    <span className="text-polar-muted font-mono text-[11px]">
                      4 min read
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-polar-ink group-hover:text-brand transition mb-2 leading-snug">
                    Microbial Adaptation in Schirmacher Oasis Epishelf Lakes
                  </h3>
                  <p className="text-xs text-polar-muted leading-relaxed line-clamp-3 mb-4">
                    Extremophile cyanobacteria diversity analyzed across perennially frozen surface ice cores from Lake Priyadarshini.
                  </p>
                </div>
                <div className="pt-3 border-t border-polar-border">
                  <div className="flex items-center gap-1 text-[11px] text-aurora-green font-semibold mb-2">
                    <span className="material-symbols-outlined text-[13px]">
                      verified
                    </span>
                    {" Verified by NCPOR Scientist"}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-polar-muted text-[10px]">
                      DOI:10.5061/dryad.88b
                    </span>
                    <Link className="text-brand font-semibold hover:underline flex items-center" to="/resources/ncpor-tr-2024-08">
                      Read Report →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-5 border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2 py-0.5 rounded bg-polar-soft text-brand font-semibold border border-polar-border">
                      Arctic • Himadri
                    </span>
                    <span className="text-polar-muted font-mono text-[11px]">
                      6 min read
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-polar-ink group-hover:text-brand transition mb-2 leading-snug">
                    Black Carbon Deposition Trends across Svalbard Snowpack
                  </h3>
                  <p className="text-xs text-polar-muted leading-relaxed line-clamp-3 mb-4">
                    Multi-wavelength aethalometer observations from Himadri station indicate springtime long-range tropospheric aerosol transport.
                  </p>
                </div>
                <div className="pt-3 border-t border-polar-border">
                  <div className="flex items-center gap-1 text-[11px] text-aurora-green font-semibold mb-2">
                    <span className="material-symbols-outlined text-[13px]">
                      link
                    </span>
                    {" Source-linked"}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-polar-muted text-[10px]">
                      DOI:10.1016/atmos.014
                    </span>
                    <Link className="text-brand font-semibold hover:underline flex items-center" to="/resources/ncpor-tr-2024-08">
                      Read Report →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-5 border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2 py-0.5 rounded bg-polar-soft text-brand font-semibold border border-polar-border">
                      Southern Ocean
                    </span>
                    <span className="text-polar-muted font-mono text-[11px]">
                      SO-14 Coring
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-polar-ink group-hover:text-brand transition mb-2 leading-snug">
                    Southern Ocean Eddy Heat Flux & Antarctic Circumpolar Current Dynamics
                  </h3>
                  <p className="text-xs text-polar-muted leading-relaxed line-clamp-3 mb-4">
                    Continuous profiling float observations reveal accelerated thermocline warming across 40°S–50°S Indian sector transect.
                  </p>
                </div>
                <div className="pt-3 border-t border-polar-border">
                  <div className="flex items-center gap-1 text-[11px] text-aurora-green font-semibold mb-2">
                    <span className="material-symbols-outlined text-[13px]">
                      verified
                    </span>
                    {" Verified by NCPOR Scientist"}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-polar-muted text-[10px]">
                      DOI:10.1029/2024GL
                    </span>
                    <Link className="text-brand font-semibold hover:underline flex items-center" to="/resources/ncpor-tr-2024-08">
                      Read Report →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl p-5 border border-polar-border shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2 py-0.5 rounded bg-polar-soft text-brand font-semibold border border-polar-border">
                      Himalaya • Himansh
                    </span>
                    <span className="text-polar-muted font-mono text-[11px]">
                      Glacier Balance
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-polar-ink group-hover:text-brand transition mb-2 leading-snug">
                    Mass Balance & Ice Velocity of Chhota Shigri Glacier (2020–2024)
                  </h3>
                  <p className="text-xs text-polar-muted leading-relaxed line-clamp-3 mb-4">
                    Integration of DGPS stake surveys and geodetic measurements demonstrates negative mass budget trends from 2020 to 2024.
                  </p>
                </div>
                <div className="pt-3 border-t border-polar-border">
                  <div className="flex items-center gap-1 text-[11px] text-aurora-green font-semibold mb-2">
                    <span className="material-symbols-outlined text-[13px]">
                      verified
                    </span>
                    {" Verified by NCPOR Scientist"}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-polar-muted text-[10px]">
                      DOI:10.3189/cryo.992
                    </span>
                    <Link className="text-brand font-semibold hover:underline flex items-center" to="/resources/ncpor-tr-2024-08">
                      Read Report →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-[#F6F9FC] border-y border-polar-border" id="ask-polaris-section">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="text-center max-w-[640px] mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-[15px]">
                  auto_awesome
                </span>
                {" 09 / AI KNOWLEDGE ENGINE"}
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink mb-2">
                Ask POLARIS: Grounded Polar Research AI
              </h2>
              <p className="text-sm text-polar-muted">
                Trained exclusively on 40+ years of NCPOR expedition reports, MoES research papers, and open NetCDF datasets with zero speculation.
              </p>
            </div>
            <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-polar-border shadow-xl space-y-6">
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-brand text-white p-3.5 rounded-2xl rounded-tr-none text-xs sm:text-sm max-w-[80%]">
                  What was the recorded fast-ice thickness near Bharati Station during the 42nd Indian Antarctic Expedition?
                </div>
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center shrink-0 font-bold text-xs">
                  U
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand/15 text-brand flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    auto_awesome
                  </span>
                </div>
                <div className="flex-1 bg-polar-soft border border-polar-border p-4 rounded-2xl rounded-tl-none space-y-3">
                  <p className="text-xs sm:text-sm text-polar-ink leading-relaxed">
                    {"During the 42nd IAE (2022–2023), sea-ice acoustic sounders and drill-hole cores in Prydz Bay adjacent to Bharati Station recorded a peak fast-ice thickness of "}
                    <strong>
                      1.74 ± 0.08 m
                    </strong>
                    {" in late October 2022 "}
                    <span className="text-brand font-semibold cursor-pointer hover:underline">
                      [1]
                    </span>
                    {". Early summer breakup initiated on December 14, three weeks earlier than the 10-year climatological mean "}
                    <span className="text-brand font-semibold cursor-pointer hover:underline">
                      [2]
                    </span>
                    .
                  </p>
                  <div className="pt-2 border-t border-polar-border/60 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-polar-muted font-medium text-[11px]">
                      Sources:
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white border border-polar-border text-[11px] text-brand font-mono flex items-center gap-1 hover:underline cursor-pointer">
                      <span className="material-symbols-outlined text-[12px] text-brand">
                        link
                      </span>
                      {" [1] 42nd IAE Telemetry Logbook (Prydz Bay Line)"}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white border border-polar-border text-[11px] text-brand font-mono flex items-center gap-1 hover:underline cursor-pointer">
                      <span className="material-symbols-outlined text-[12px] text-brand">
                        link
                      </span>
                      {" [2] NetCDF Dataset NCPOR-OD-2022-42"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-semibold text-polar-muted uppercase tracking-wider block">
                  Suggested queries:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="px-3 py-1.5 rounded-full bg-polar-soft hover:bg-polar-border text-xs text-polar-ink border border-polar-border transition text-left">
                    Maitri station renewable power transition
                  </button>
                  <button className="px-3 py-1.5 rounded-full bg-polar-soft hover:bg-polar-border text-xs text-polar-ink border border-polar-border transition text-left">
                    IndARC seasonal salinity anomalies in Kongsfjorden
                  </button>
                  <button className="px-3 py-1.5 rounded-full bg-polar-soft hover:bg-polar-border text-xs text-polar-ink border border-polar-border transition text-left">
                    Himansh high-altitude glacier melt runoff rates
                  </button>
                </div>
              </div>
              <div className="relative w-full pt-2">
                <div className="flex items-center bg-white rounded-xl border-2 border-brand/20 focus-within:border-brand shadow-sm px-3 py-2">
                  <span className="material-symbols-outlined text-brand mr-2">
                    psychology
                  </span>
                  <input className="w-full bg-transparent text-sm focus:outline-none placeholder:text-polar-muted/60" placeholder="Ask any question about Indian polar science..." type="text" />
                  <button className="p-1.5 rounded text-polar-muted hover:text-brand mr-1">
                    <span className="material-symbols-outlined text-[18px]">
                      mic
                    </span>
                  </button>
                  <button className="px-3.5 py-1.5 rounded-lg bg-brand text-white font-semibold text-xs hover:bg-brand-dark transition flex items-center gap-1">
                    <span className="">
                      Send
                    </span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_upward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-white" id="how-polaris-works">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10 text-center max-w-[640px] mx-auto">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                10 / DATA INTEGRITY PIPELINE
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink mb-2">
                How POLARIS Works: From Ice to Open Knowledge
              </h2>
              <p className="text-sm text-polar-muted">
                Every scientific assertion passes through a strict 5-stage human-in-the-loop validation pipeline.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
              <div className="p-3 rounded-xl bg-polar-soft border border-polar-border text-center">
                <span className="text-[10px] font-mono font-bold text-polar-muted block uppercase">
                  Step 01
                </span>
                <span className="text-xs font-bold text-polar-ink block">
                  1. Upload
                </span>
                <span className="text-[10px] text-polar-muted mt-0.5 block">
                  Raw field logs & telemetry ingested
                </span>
              </div>
              <div className="p-3 rounded-xl bg-polar-soft border border-polar-border text-center">
                <span className="text-[10px] font-mono font-bold text-polar-muted block uppercase">
                  Step 02
                </span>
                <span className="text-xs font-bold text-polar-ink block">
                  2. AI Tag
                </span>
                <span className="text-[10px] text-polar-muted mt-0.5 block">
                  Automated ISO-19115 cryo tagging
                </span>
              </div>
              <div className="p-3 rounded-xl bg-brand text-white shadow-md text-center border-2 border-brand">
                <span className="text-[10px] font-mono font-bold text-white/80 block uppercase">
                  Step 03 • ACTIVE STAGE
                </span>
                <span className="text-xs font-bold text-white block">
                  3. AI Draft
                </span>
                <span className="text-[10px] text-white/90 mt-0.5 block">
                  Metadata & abstract synthesis
                </span>
              </div>
              <div className="p-3 rounded-xl bg-polar-soft border border-polar-border text-center">
                <span className="text-[10px] font-mono font-bold text-polar-muted block uppercase">
                  Step 04
                </span>
                <span className="text-xs font-bold text-polar-ink block">
                  4. Scientist Review
                </span>
                <span className="text-[10px] text-polar-muted mt-0.5 block">
                  MoES glaciologist verification
                </span>
              </div>
              <div className="p-3 rounded-xl bg-polar-soft border border-polar-border text-center col-span-2 md:col-span-1">
                <span className="text-[10px] font-mono font-bold text-polar-muted block uppercase">
                  Step 05
                </span>
                <span className="text-xs font-bold text-polar-ink block">
                  5. Publish
                </span>
                <span className="text-[10px] text-polar-muted mt-0.5 block">
                  Immutable DOI minting & WDS
                </span>
              </div>
            </div>
            <div className="bg-polar-soft rounded-2xl p-6 sm:p-8 border border-polar-border shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand/15 text-brand text-xs font-bold">
                    <span className="material-symbols-outlined text-[15px]">
                      psychology
                    </span>
                    {" STEP 3: AUTOMATED SYNTHESIS & CITATION GROUNDING"}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-polar-ink">
                    Automated Contextual Synthesis with Strict Citation Grounding
                  </h3>
                  <p className="text-xs sm:text-sm text-polar-muted leading-relaxed">
                    PolarLLM extracts observational metrics and cross-references source tables without speculative hallucinations. Raw expedition records, NetCDF binary tables, and drone ortho-mosaics undergo OCR and vector tokenization.
                  </p>
                  <div className="p-3 rounded-xl bg-white border border-polar-border text-xs flex items-center justify-between">
                    <div>
                      <span className="text-polar-muted block text-[11px]">
                        Pipeline operator
                      </span>
                      <span className="font-bold text-polar-ink">
                        Executed by NCPOR Autonomous Ingestion Engine v2.4; strict citation enforcement active.
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-aurora-green/15 text-aurora-green font-bold text-[11px] shrink-0 ml-2">
                      Strict Guardrails On
                    </span>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button className="px-4 py-2 rounded-lg border border-polar-border text-xs font-semibold text-polar-ink hover:bg-white transition flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_back
                      </span>
                      {" Previous Stage"}
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-brand text-xs font-semibold text-white hover:bg-brand-dark transition flex items-center gap-1">
                      {"Next: Scientist Review "}
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-6 bg-white rounded-xl p-4 sm:p-6 border border-polar-border shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-polar-border text-polar-muted">
                    <span className="">
                      Raw Field Telemetry
                    </span>
                    <span className="">
                      Provenance Traceability
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-3 p-2 rounded bg-polar-soft border border-polar-border">
                      <span className="material-symbols-outlined text-brand text-[18px]">
                        upload_file
                      </span>
                      <span className="flex-1 font-mono text-[11px]">
                        antarctica_ctd_2024_09.nc (NetCDF-4)
                      </span>
                      <span className="text-aurora-green font-semibold">
                        Parsed
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-polar-soft border border-polar-border">
                      <span className="material-symbols-outlined text-brand text-[18px]">
                        tag
                      </span>
                      <span className="flex-1 font-mono text-[11px]">
                        CF-1.8 Vocab Standard: Sea Water Temperature
                      </span>
                      <span className="text-aurora-green font-semibold">
                        Auto-Tagged
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-brand/10 border border-brand/30">
                      <span className="material-symbols-outlined text-brand text-[18px]">
                        auto_awesome
                      </span>
                      <span className="flex-1 font-bold text-polar-ink text-[11px]">
                        Drafted 240-word Abstract + 14 ISO Facets
                      </span>
                      <span className="text-brand font-bold">
                        Pending Sign-off
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-polar-soft" id="trust-and-education">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                11 / SCIENTIFIC INTEGRITY
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink">
                Built on Verified Institutional Trust
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-polar-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      account_balance
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-polar-ink mb-2">
                    Source-Linked to NPDC & MoES
                  </h3>
                  <p className="text-xs text-polar-muted leading-relaxed mb-4">
                    Direct federation with National Polar Data Center and Earth Sciences Digital Repository. All metrics link to raw NetCDF and GeoTIFF binaries.
                  </p>
                </div>
                <span className="text-xs font-semibold text-brand">
                  Zero Anonymous Data Entries
                </span>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-polar-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      verified_user
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-polar-ink mb-2">
                    Rigorous AI Badging
                  </h3>
                  <p className="text-xs text-polar-muted leading-relaxed mb-4">
                    Every synthesized abstract clearly displays 'AI-drafted' and 'Verified by NCPOR Scientist' trust badges so readers know exact provenance.
                  </p>
                </div>
                <span className="text-xs font-semibold text-brand">
                  100% Traceable Provenance
                </span>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-polar-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[22px]">
                      fact_check
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-polar-ink mb-2">
                    Confidence & Accuracy Levels
                  </h3>
                  <p className="text-xs text-polar-muted leading-relaxed mb-3">
                    Displays sensor array reliability, +0.3% drift compensated, and WDS-accredited accreditation.
                  </p>
                  <div className="w-full bg-polar-soft h-2.5 rounded-full overflow-hidden mb-2 border border-polar-border">
                    <div className="bg-aurora-green h-full rounded-full" style={{"width": "98.4%"}} />
                  </div>
                  <div className="flex justify-between text-xs font-mono text-polar-muted">
                    <span className="">
                      Sensor Reliability
                    </span>
                    <span className="text-polar-ink font-bold">
                      98.4%
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-aurora-green mt-3">
                  WDS Gold Standard Accredited
                </span>
              </div>
            </div>
            <div className="bg-[#F0F7FB] rounded-2xl p-6 sm:p-8 border-2 border-brand/30 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-upcoming-purple/15 text-upcoming-purple text-xs font-bold uppercase tracking-wider mb-3">
                    <span className="material-symbols-outlined text-[14px]">
                      school
                    </span>
                    {" POLAR LITERACY CHALLENGE"}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-polar-ink mb-2 leading-snug">
                    Polar Literacy Challenge
                  </h3>
                  <p className="text-xs sm:text-sm text-polar-muted leading-relaxed mb-4">
                    Test your cryosphere knowledge with daily peer-reviewed questions for students and researchers. Unlock NCPOR open educational digital badges.
                  </p>
                  <a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand text-white font-semibold text-xs hover:bg-brand-dark transition shadow-sm" href="#" onClick={(e)=>e.preventDefault()}>
                    <span className="">
                      Start 5-Minute Student Quiz
                    </span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="lg:col-span-7 bg-white rounded-xl p-5 border border-polar-border space-y-4">
                  <div className="flex items-center justify-between text-xs text-polar-muted font-mono">
                    <span className="">
                      Daily Cryosphere Question
                    </span>
                    <span className="text-brand font-bold">
                      +50 Knowledge Points
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-polar-ink leading-snug">
                    Why is Bharati Station in Antarctica built on 135 stilts?
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-polar-soft border-2 border-brand text-polar-ink font-medium shadow-sm cursor-pointer">
                      <span className="flex items-center gap-2">
                        <strong>
                          [A]
                        </strong>
                        {" To prevent katabatic wind snowdrift accumulation"}
                      </span>
                      <span className="flex items-center gap-1 text-aurora-green font-bold text-[11px]">
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Correct Answer"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-polar-border text-polar-ink hover:bg-polar-soft transition cursor-pointer">
                      <span className="">
                        <strong>
                          [B]
                        </strong>
                        {" To isolate against magnetic interference"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-polar-border text-polar-ink hover:bg-polar-soft transition cursor-pointer">
                      <span className="">
                        <strong>
                          [C]
                        </strong>
                        {" For direct bedrock seismic anchoring"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-white" id="upcoming-events-section">
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="mb-10">
              <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">
                12 / ENGAGEMENT & CONFERENCES
              </div>
              <h2 className="font-serif text-3xl font-bold text-polar-ink">
                Upcoming Events & Briefings
              </h2>
              <p className="text-sm text-polar-muted mt-1">
                Participate in live expedition debriefs, academic webinars, and polar science symposiums.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-polar-soft border border-polar-border flex flex-col items-center justify-center shrink-0">
                      <span className="text-[11px] font-bold text-brand uppercase font-mono">
                        APR
                      </span>
                      <span className="text-xl font-bold font-serif text-polar-ink">
                        18
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-brand/10 text-brand uppercase">
                          VIRTUAL • MoES Live
                        </span>
                        <span className="text-xs text-polar-muted font-mono">
                          2025
                        </span>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-polar-ink">
                        44th Indian Antarctic Expedition: Mid-Winter Science Briefing
                      </h4>
                      <p className="text-xs text-polar-muted mt-1">
                        Live telemetry debrief with wintering teams at Maitri and Bharati stations.
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition shrink-0" onClick={(e)=>window.__pol(e,"document.getElementById('event-registration-modal').classList.remove('hidden')")}>
                    Register for Free
                  </button>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-polar-soft border border-polar-border flex flex-col items-center justify-center shrink-0">
                      <span className="text-[11px] font-bold text-brand uppercase font-mono">
                        MAY
                      </span>
                      <span className="text-xl font-bold font-serif text-polar-ink">
                        04
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-upcoming-purple/15 text-upcoming-purple uppercase">
                          HYBRID • Goa & Online
                        </span>
                        <span className="text-xs text-polar-muted font-mono">
                          2025
                        </span>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-polar-ink">
                        Arctic Cryosphere & Climate Change: Kongsfjorden Insights
                      </h4>
                      <p className="text-xs text-polar-muted mt-1">
                        Keynote by NCPOR Arctic glaciologists on IndARC fjord warming data.
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition shrink-0" onClick={(e)=>window.__pol(e,"document.getElementById('event-registration-modal').classList.remove('hidden')")}>
                    Register for Free
                  </button>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-polar-border hover:border-brand shadow-sm hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-polar-soft border border-polar-border flex flex-col items-center justify-center shrink-0">
                      <span className="text-[11px] font-bold text-brand uppercase font-mono">
                        JUN
                      </span>
                      <span className="text-xl font-bold font-serif text-polar-ink">
                        12
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-aurora-green/15 text-aurora-green uppercase">
                          WORKSHOP • 2.5 Hrs
                        </span>
                        <span className="text-xs text-polar-muted font-mono">
                          2025
                        </span>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-polar-ink">
                        Open Polar Data Workshop: Utilizing NetCDF & Geospatial APIs
                      </h4>
                      <p className="text-xs text-polar-muted mt-1">
                        Hands-on developer and researcher training on querying the POLARIS federated repository.
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition shrink-0" onClick={(e)=>window.__pol(e,"document.getElementById('event-registration-modal').classList.remove('hidden')")}>
                    Register for Free
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 bg-polar-soft rounded-2xl p-5 border-2 border-brand/30 shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-polar-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-brand text-[20px]">
                      badge
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-polar-ink">
                      1-Click MoES Attendee Pass
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand font-bold uppercase">
                    Live Preview
                  </span>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-[11px] font-semibold text-polar-ink block mb-1">
                      Full Name
                    </label>
                    <input className="w-full bg-white rounded-lg border border-polar-border px-3 py-2 text-xs focus:outline-none focus:border-brand" placeholder="Dr. / Scholar Name" type="text" defaultValue="Dr. Arvind Swaminathan" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-polar-ink block mb-1">
                      Institutional Email
                    </label>
                    <input className="w-full bg-white rounded-lg border border-polar-border px-3 py-2 text-xs focus:outline-none focus:border-brand" placeholder="name@institution.res.in" type="email" defaultValue="a.swami@iisc.ac.in" />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-polar-ink block mb-1">
                      Affiliation
                    </label>
                    <input className="w-full bg-white rounded-lg border border-polar-border px-3 py-2 text-xs focus:outline-none focus:border-brand" placeholder="University or Lab" type="text" defaultValue={"Centre for Atmospheric & Oceanic Sciences, IISc"} />
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <input defaultChecked="" className="mt-0.5 rounded text-brand border-polar-border" type="checkbox" />
                    <span className="text-[11px] text-polar-muted leading-tight">
                      Send calendar invite & MoES attendee pass generation.
                    </span>
                  </div>
                  <button className="w-full py-2.5 rounded-lg bg-brand text-white font-semibold text-xs hover:bg-brand-dark transition shadow-sm mt-2">
                    Generate Attendee Pass
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        {" "}
        <section className="w-full py-[96px] bg-polar-soft border-t border-polar-border" id="partners-newsletter">
          <div className="max-w-[1240px] mx-auto px-6 space-y-12">
            <div>
              <div className="text-center text-xs font-bold text-polar-muted uppercase tracking-widest mb-6">
                13 / INSTITUTIONAL COLLABORATION & DATA FEDERATIONS
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
                <div className="p-4 rounded-xl bg-white border border-polar-border flex items-center justify-center text-center shadow-sm">
                  <span className="font-serif font-bold text-sm text-polar-ink">
                    NATIONAL CENTRE FOR POLAR AND OCEAN RESEARCH (NCPOR)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-polar-border flex items-center justify-center text-center shadow-sm">
                  <span className="font-sans font-bold text-xs text-polar-ink uppercase tracking-wider">
                    MINISTRY OF EARTH SCIENCES (MoES)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-polar-border flex items-center justify-center text-center shadow-sm">
                  <span className="font-mono font-bold text-xs text-polar-ink">
                    NATIONAL POLAR DATA CENTRE (NPDC)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-polar-border flex items-center justify-center text-center shadow-sm">
                  <span className="font-serif font-semibold text-xs text-brand">
                    WORLD DATA SYSTEM (WDS)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-polar-border flex items-center justify-center text-center shadow-sm col-span-2 sm:col-span-1">
                  <span className="font-sans font-bold text-xs text-polar-ink uppercase tracking-wider">
                    INDIAN NATIONAL CENTRE FOR OCEAN INFORMATION SERVICES (INCOIS)
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-polar-border shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[14px]">
                      mail
                    </span>
                    {" POLAR DISPATCH DIGEST"}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-polar-ink">
                    Stay Connected to the Cryosphere
                  </h3>
                  <p className="text-xs sm:text-sm text-polar-muted leading-relaxed">
                    Receive monthly telemetry digests, new dataset notifications, and polar expedition updates.
                  </p>
                </div>
                <div className="lg:col-span-6 space-y-4">
                  <div id="newsletter-form-container" className="space-y-4">
                    <form className="space-y-4" onSubmit={(e)=>window.__pol(e,"event.preventDefault(); document.getElementById('newsletter-form-container').classList.add('hidden'); document.getElementById('newsletter-success-badge').classList.remove('hidden');")}>
                      {" "}
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input required="" className="flex-1 bg-polar-soft border border-polar-border rounded-lg px-4 py-2.5 text-xs text-polar-ink focus:outline-none focus:border-brand" placeholder="Enter your scientific email address" type="email" />
                        <button type="submit" className="px-5 py-2.5 rounded-lg bg-brand text-white font-semibold text-xs hover:bg-brand-dark transition shadow-sm shrink-0">
                          Subscribe
                        </button>
                      </div>
                      {" "}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-polar-muted pt-1">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input defaultChecked="" className="rounded text-brand border-polar-border" type="checkbox" />
                          <span className="text-[11px]">
                            Expedition Dispatches
                          </span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input defaultChecked="" className="rounded text-brand border-polar-border" type="checkbox" />
                          <span className="text-[11px]">
                            Dataset Releases
                          </span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input className="rounded text-brand border-polar-border" type="checkbox" />
                          <span className="text-[11px]">
                            Educational Outreach
                          </span>
                        </label>
                      </div>
                      {" "}
                    </form>
                  </div>
                  <div id="newsletter-success-badge" className="hidden p-4 rounded-xl bg-aurora-green/15 border border-aurora-green/30 flex items-center gap-3">
                    <span className="material-symbols-outlined text-aurora-green text-[28px]">
                      mark_email_read
                    </span>
                    <div>
                      <h4 className="font-bold text-xs text-polar-ink">
                        Subscribed to Cryosphere Dispatches
                      </h4>
                      <p className="text-[11px] text-polar-muted mt-0.5">
                        Monthly telemetry digest & NetCDF release notices activated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
      </main>
      {" "}
      {" "}
      <footer className="w-full bg-white border-t border-polar-border py-12">
        {" "}
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-xs text-polar-muted">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-brand text-[20px]">
                  explore
                </span>
                <span className="font-serif font-bold text-polar-ink text-base">
                  POLARIS
                </span>
              </div>
              <p className="leading-relaxed">
                National Centre for Polar and Ocean Research (NCPOR), an autonomous research institution under the Ministry of Earth Sciences (MoES), Govt of India.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-polar-ink uppercase tracking-wider mb-3">
                Research Stations
              </h4>
              <ul className="space-y-1.5">
                <li className="">
                  Maitri (Antarctica • 1989)
                </li>
                <li className="">
                  Bharati (Antarctica • 2012)
                </li>
                <li className="">
                  Himadri (Arctic • Ny-Ålesund)
                </li>
                <li className="">
                  IndARC (Kongsfjorden Mooring)
                </li>
                <li className="">
                  Himansh (Himalaya • Spiti)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-polar-ink uppercase tracking-wider mb-3">
                Expeditions
              </h4>
              <ul className="space-y-1.5">
                <li className="">
                  Indian Antarctic Program
                </li>
                <li className="">
                  Indian Arctic Expedition
                </li>
                <li className="">
                  Southern Ocean Expedition
                </li>
                <li className="">
                  Cryosphere & Climate Studies
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-polar-ink uppercase tracking-wider mb-3">
                Open Portals
              </h4>
              <ul className="space-y-1.5">
                <li className="">
                  Polar Data Center (PDC)
                </li>
                <li className="">
                  Oceanographic Cruise Data
                </li>
                <li className="">
                  Geoscientific Repository
                </li>
                <li className="">
                  Citizen Science & Outreach
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-polar-border flex flex-col sm:flex-row items-center justify-between text-xs text-polar-muted gap-2">
            <span className="">
              © 2025 National Centre for Polar and Ocean Research, MoES, Govt. of India. All rights reserved.
            </span>
            <span className="">
              Sample data / Design System Showcase
            </span>
          </div>
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      <button aria-label="Ask POLARIS" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-brand text-white shadow-xl hover:bg-brand-dark transition font-semibold text-sm" onClick={(e)=>window.__pol(e,"document.getElementById('ask-polaris-modal').classList.toggle('hidden')")}>
        {" "}
        <span className="material-symbols-outlined text-[20px]">
          auto_awesome
        </span>
        {" "}
        <span className="">
          Ask POLARIS
        </span>
        {" "}
      </button>
      {" "}
      <div id="event-registration-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm hidden">
        <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-2xl border border-polar-border relative animate-fadeIn" id="event-modal-card">
          <button id="close-event-modal" className="absolute top-4 right-4 text-polar-muted hover:text-brand" onClick={(e)=>window.__pol(e,"document.getElementById('event-registration-modal').classList.add('hidden')")}>
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
          <div className="flex items-center gap-2 text-brand mb-2">
            <span className="material-symbols-outlined text-[24px]">
              event_available
            </span>
            <span className="font-mono text-xs font-bold uppercase">
              Event Registration
            </span>
          </div>
          <h3 id="modal-event-title" className="font-serif text-xl font-bold text-polar-ink mb-3 leading-snug">
            44th Indian Antarctic Expedition: Mid-Winter Science Briefing
          </h3>
          <form id="event-modal-form" className="space-y-3" onSubmit={(e)=>window.__pol(e,"event.preventDefault(); document.getElementById('modal-form-fields').classList.add('hidden'); document.getElementById('modal-ticket-state').classList.remove('hidden');")}>
            {" "}
            <div id="modal-form-fields" className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-polar-ink block mb-1">
                  Full Name
                </label>
                <input required="" className="w-full bg-polar-soft rounded-lg border border-polar-border px-3 py-2 text-xs focus:outline-none focus:border-brand" placeholder="Dr. Arvind Swaminathan" type="text" defaultValue="Dr. Arvind Swaminathan" />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-polar-ink block mb-1">
                  Institutional Email
                </label>
                <input required="" className="w-full bg-polar-soft rounded-lg border border-polar-border px-3 py-2 text-xs focus:outline-none focus:border-brand" placeholder="a.swami@iisc.ac.in" type="email" defaultValue="a.swami@iisc.ac.in" />
              </div>
              <button type="submit" id="modal-event-submit" className="w-full py-2.5 rounded-lg bg-brand text-white font-semibold text-xs hover:bg-brand-dark transition shadow-sm mt-1">
                Confirm & Generate Pass
              </button>
            </div>
            {" "}
            <div id="modal-ticket-state" className="hidden space-y-4 pt-1">
              <div className="p-4 rounded-xl bg-aurora-green/15 border border-aurora-green/30 text-center">
                <span className="material-symbols-outlined text-aurora-green text-[32px] mb-1">
                  verified
                </span>
                <h4 className="font-bold text-sm text-polar-ink">
                  Pass Confirmed & Dispatched
                </h4>
                <p className="text-xs text-polar-muted mt-1 font-mono">
                  Pass ID: MoES-2025-POL-8842
                </p>
              </div>
              <div className="p-3 bg-polar-soft rounded-xl border border-polar-border text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-polar-muted">
                    Attendee:
                  </span>
                  <span className="font-bold text-polar-ink">
                    Dr. Arvind Swaminathan
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-polar-muted">
                    Session:
                  </span>
                  <span className="font-semibold text-brand">
                    Apr 18, 2025 • Virtual
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-polar-muted">
                    Accreditation:
                  </span>
                  <span className="text-aurora-green font-semibold">
                    MoES / NCPOR Verified
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button type="button" className="flex-1 py-2 px-3 rounded-lg border border-polar-border hover:bg-polar-soft text-polar-ink text-xs font-semibold flex items-center justify-center gap-1.5 transition" onClick={(e)=>window.__pol(e,"alert('Pass saved to calendar.')")}>
                  <span className="material-symbols-outlined text-[16px]">
                    calendar_today
                  </span>
                  {" Add to Calendar"}
                </button>
                <button type="button" className="flex-1 py-2 px-3 rounded-lg bg-brand hover:bg-brand-dark text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition" onClick={(e)=>window.__pol(e,"alert('Downloading Digital PDF Badge...')")}>
                  <span className="material-symbols-outlined text-[16px]">
                    download
                  </span>
                  {" Download Pass"}
                </button>
              </div>
            </div>
            {" "}
          </form>
        </div>
      </div>
      {" "}
      <div id="ask-polaris-modal" className="fixed bottom-20 right-6 z-50 w-[380px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-polar-border overflow-hidden hidden flex flex-col">
        <div className="bg-brand text-white p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">
              auto_awesome
            </span>
            <div>
              <span className="font-serif font-bold text-sm block leading-none">
                Ask POLARIS Engine
              </span>
              <span className="text-[10px] font-mono text-white/80 block mt-0.5">
                NCPOR Grounded AI • Zero Speculation
              </span>
            </div>
          </div>
          <button id="close-polaris-assistant" className="text-white/80 hover:text-white" onClick={(e)=>window.__pol(e,"document.getElementById('ask-polaris-modal').classList.add('hidden')")}>
            <span className="material-symbols-outlined text-[20px]">
              close
            </span>
          </button>
        </div>
        <div id="assistant-chat" className="p-4 max-h-[320px] overflow-y-auto space-y-3 text-xs">
          <div className="bg-polar-soft border border-polar-border p-3 rounded-xl text-polar-ink leading-relaxed">
            {" Hello! I'm grounded in 40+ years of NCPOR polar expedition logs and NetCDF datasets. How can I assist your cryospheric inquiry today? "}
          </div>
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-bold text-polar-muted tracking-wider block">
              Suggested Prompts:
            </span>
            <div className="flex flex-col gap-1.5">
              <button className="text-left p-2 rounded-lg bg-polar-soft hover:bg-polar-border text-[11px] text-polar-ink border border-polar-border transition flex items-center justify-between" onClick={(e)=>window.__pol(e,"document.getElementById('assistant-query-input').value = 'Maitri station renewable power transition';")}>
                <span className="">
                  Maitri station renewable power transition
                </span>
                <span className="material-symbols-outlined text-[14px] text-brand">
                  arrow_forward
                </span>
              </button>
              <button className="text-left p-2 rounded-lg bg-polar-soft hover:bg-polar-border text-[11px] text-polar-ink border border-polar-border transition flex items-center justify-between" onClick={(e)=>window.__pol(e,"document.getElementById('assistant-query-input').value = 'IndARC seasonal salinity anomalies in Kongsfjorden';")}>
                <span className="">
                  IndARC seasonal salinity anomalies
                </span>
                <span className="material-symbols-outlined text-[14px] text-brand">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 bg-polar-soft border-t border-polar-border flex items-center gap-2">
          <input id="assistant-query-input" className="flex-1 bg-white border border-polar-border rounded-lg px-3 py-1.5 text-xs text-polar-ink focus:outline-none focus:border-brand" placeholder="Ask a research question..." type="text" />
          <button id="assistant-send-btn" className="p-2 bg-brand text-white rounded-lg hover:bg-brand-dark flex items-center justify-center" onClick={(e)=>window.__pol(e,"const inp = document.getElementById('assistant-query-input'); if(inp.value.trim()){ const chat = document.getElementById('assistant-chat'); chat.innerHTML += '<div class=\\'flex justify-end\\'><div class=\\'bg-brand text-white p-2.5 rounded-xl rounded-tr-none max-w-[85%] text-xs\\'>' + inp.value + '</div></div><div class=\\'bg-polar-soft border border-polar-border p-2.5 rounded-xl text-polar-ink text-xs leading-relaxed\\'><strong>POLARIS AI:</strong> Ingesting verified NCPOR telemetry... Corroborated with published dataset logs [DOI:10.5061/dryad].</div>'; chat.scrollTop = chat.scrollHeight; inp.value = ''; }")}>
            <span className="material-symbols-outlined text-[16px]">
              send
            </span>
          </button>
        </div>
      </div>
      {" "}
    </>
  );
}
