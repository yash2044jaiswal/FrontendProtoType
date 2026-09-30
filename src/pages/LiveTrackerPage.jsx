import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_live_expedition_tracker_live_id/code.html
const BODY_CLASS = "bg-background font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "document.getElementById('notifyBtn')?.addEventListener('click', function() {\n      const active = this.getAttribute('data-subscribed') === 'true';\n      if (active) {\n        this.setAttribute('data-subscribed', 'false');\n        this.innerHTML = '<span class=\"material-symbols-outlined text-[18px]\">notifications_active</span> Notify Me on Milestone Updates';\n        this.className = 'flex items-center gap-2 bg-primary-container text-on-primary-container hover:bg-primary transition-colors px-4 py-2 rounded-lg font-label-md text-label-md font-semibold shadow-sm';\n      } else {\n        this.setAttribute('data-subscribed', 'true');\n        this.innerHTML = '<span class=\"material-symbols-outlined text-[18px]\">check</span> Notifications Enabled (SMS / Email)';\n        this.className = 'flex items-center gap-2 bg-tertiary text-on-tertiary px-4 py-2 rounded-lg font-label-md text-label-md font-semibold shadow-sm';\n      }\n    });";

export default function LiveTrackerPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1280px] mx-auto px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg shrink-0">
            <a className="flex flex-col" data-path="home" href="#" onClick={(e)=>e.preventDefault()}>
              <span className="font-headline-sm text-headline-sm tracking-wide text-primary leading-none">
                POLARIS
              </span>
              <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest mt-1">
                NCPOR • MoES • GOVT. OF INDIA
              </span>
            </a>
            <div className="hidden xl:flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed-dim opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-label-mono text-label-mono text-on-surface font-semibold uppercase tracking-wider">
                Maitri:
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1 px-1" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-full">
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link aria-current="page" className="px-3 py-1.5 transition-colors whitespace-nowrap bg-primary-container text-on-primary-container font-semibold rounded-full" data-path="live-tracker" to="/live/soe-01">
              Live Tracker
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="publications" to="/publications">
              Publications
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="data" to="/data">
              Data
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="community" to="/community">
              Community
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm shrink-0">
            <div className="hidden md:flex items-center bg-surface-container-low px-3 py-1.5 rounded-full text-on-surface-variant focus-within:text-on-surface">
              <span className="material-symbols-outlined text-[18px] mr-2">
                search
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant pr-4">
                Search...
              </span>
              <kbd className="font-label-mono text-label-mono bg-surface-container-highest px-1.5 py-0.5 rounded text-on-surface">
                ⌘K
              </kbd>
            </div>
            <div className="flex items-center bg-surface-container-low rounded-full p-0.5">
              <button className="px-2 py-0.5 rounded-full font-label-mono text-label-mono bg-surface-container-lowest text-primary shadow-[0_1px_4px_rgba(0,0,0,0.04)] font-bold" type="button">
                EN
              </button>
              <button className="px-2 py-0.5 rounded-full font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface" type="button">
                HI
              </button>
            </div>
            <button aria-label="Accessibility Options" className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                accessibility_new
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12 py-10 flex flex-col gap-24">
            <section className="flex flex-col gap-6">
              <nav className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                <Link className="hover:text-primary transition-colors" to="/">
                  Home
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                  Expeditions
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                  44th Indian Antarctic Expedition
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-on-surface font-semibold">
                  Live Telemetry
                </span>
              </nav>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 bg-[#fff7ed] text-[#c2410c] px-3.5 py-1.5 rounded-full shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      {" "}
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75" />
                      {" "}
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ea580c]" />
                      {" "}
                    </span>
                    <span className="font-label-md text-label-md tracking-wider uppercase font-bold">
                      LIVE EXPEDITION TELEMETRY
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-surface-container-high text-primary px-3.5 py-1.5 rounded-full font-label-mono text-label-mono font-bold">
                    <span className="material-symbols-outlined text-[16px]">
                      calendar_today
                    </span>
                    {" DAY 34 OF 120 "}
                    <span className="text-secondary font-normal font-body-sm">
                      (Austral Summer 2024–25)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 bg-primary-container text-on-primary-container hover:bg-primary transition-colors px-4 py-2 rounded-lg font-label-md text-label-md font-semibold shadow-sm" id="notifyBtn">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      notifications_active
                    </span>
                    {" Notify Me on Milestone Updates "}
                  </button>
                  <button className="flex items-center gap-1.5 bg-surface-container-lowest text-on-surface hover:bg-surface-container px-3.5 py-2 rounded-lg font-label-md text-label-md shadow-sm transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      share
                    </span>
                    {" Share Track "}
                  </button>
                  <button className="flex items-center gap-1.5 bg-surface-container-lowest text-on-surface hover:bg-surface-container px-3.5 py-2 rounded-lg font-label-md text-label-md shadow-sm transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    {" Export (KML/GeoJSON) "}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-headline-lg text-headline-lg text-on-surface font-light tracking-tight">
                  {" 44th Indian Antarctic Expedition (44th IAE) — Southern Ocean Cruise & Maitri Relief "}
                </h1>
                <p className="font-body-md text-body-md text-secondary max-w-4xl">
                  {" Real-time orbital relay transmitting satellite navigational telemetry, multi-sensor meteorological packets, and operational ice reconnaissance from R/V Kronprins Haakon en route to Queen Maud Land. "}
                </p>
              </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 flex flex-col gap-4 bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      public
                    </span>
                    <span className="font-title-md text-title-md text-on-surface">
                      Real-Time Geospatial Projection
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-full text-secondary">
                    <button className="px-2.5 py-1 text-on-primary-container bg-primary-container rounded-full font-label-mono text-label-mono font-medium transition-colors">
                      Vessel Track
                    </button>
                    <button className="px-2.5 py-1 hover:text-on-surface rounded-full font-label-mono text-label-mono transition-colors">
                      Bathymetry
                    </button>
                    <button className="px-2.5 py-1 hover:text-on-surface rounded-full font-label-mono text-label-mono transition-colors">
                      Ice Drift
                    </button>
                    <button className="px-2.5 py-1 hover:text-on-surface rounded-full font-label-mono text-label-mono transition-colors">
                      Weather Radar
                    </button>
                  </div>
                </div>
                <div className="relative w-full h-[520px] rounded-xl overflow-hidden bg-[#050B18] shadow-inner flex flex-col justify-between p-6" id="polaris-globe-mini-live">
                  <div className="absolute inset-0 pointer-events-none opacity-30">
                    <svg className="w-full h-full">
                      <defs>
                        <radialGradient cx="50%" cy="50%" id="globeGlow" r="50%">
                          {" "}
                          <stop offset="0%" stopColor="#1f7a8c" stopOpacity="0.4" />
                          {" "}
                          <stop offset="80%" stopColor="#050B18" stopOpacity="0.9" />
                          {" "}
                        </radialGradient>
                        <pattern height="40" id="gridPattern" patternUnits="userSpaceOnUse" width="40">
                          {" "}
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f7a8c" strokeOpacity="0.25" strokeWidth="0.5" />
                          {" "}
                        </pattern>
                      </defs>
                      <rect fill="url(#globeGlow)" height="100%" width="100%" />
                      <rect fill="url(#gridPattern)" height="100%" width="100%" />
                      <circle cx="50%" cy="50%" fill="none" opacity="0.6" r="90" stroke="#83d2e6" strokeDasharray="4 4" strokeWidth="0.8" />
                      <circle cx="50%" cy="50%" fill="none" opacity="0.4" r="180" stroke="#83d2e6" strokeDasharray="2 4" strokeWidth="0.8" />
                      <circle cx="50%" cy="50%" fill="none" opacity="0.2" r="240" stroke="#83d2e6" strokeWidth="1" />
                      <path d="M 380 90 Q 360 220 330 310 T 290 410" fill="none" stroke="#48deab" strokeDasharray="6 4" strokeWidth="2.5" />
                      <path d="M 380 90 Q 360 220 330 310" fill="none" stroke="#1f7a8c" strokeWidth="3" />
                    </svg>
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />
                      <span className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-wider">
                        {" ORBITAL BEACON: IRIDIUM-NEXT #108 "}
                      </span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg font-label-mono text-label-mono text-surface-dim">
                      {" POLARIS 3D GLOBE ENGINE (id: polaris-globe-mini-live) "}
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 animate-ping absolute" />
                      <div className="w-10 h-10 rounded-full bg-primary-container/80 backdrop-blur flex items-center justify-center text-primary-fixed shadow-lg">
                        <span className="material-symbols-outlined text-[22px]">
                          navigation
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 bg-black/75 backdrop-blur-md px-3.5 py-1 rounded-full text-on-primary">
                      <span className="font-label-mono text-label-mono text-primary-fixed font-bold">
                        R/V KRONPRINS HAAKON
                      </span>
                      <span className="font-label-mono text-label-mono text-surface-dim ml-2">
                        64°12'S 14°48'E
                      </span>
                    </div>
                    <span className="mt-1 font-label-mono text-label-mono text-[#a9ccd9] tracking-widest uppercase text-[10px]">
                      {" Active Orbital Telemetry & Vessel Tracking "}
                    </span>
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur px-2.5 py-1 rounded-md text-surface-dim font-label-mono text-label-mono">
                      <span className="material-symbols-outlined text-[14px]">
                        explore
                      </span>
                      <span>
                        PROJECTION: STEREO POLAR SOUTH (WGS84)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold backdrop-blur">
                        +
                      </button>
                      <button className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold backdrop-blur">
                        −
                      </button>
                      <button className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm backdrop-blur">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          sync
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 bg-surface-container-low p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center justify-between text-secondary font-label-mono text-label-mono">
                    <span>
                      EXPEDITION TRANSECT WAYPOINTS
                    </span>
                    <span className="text-primary font-semibold">
                      Leg 2 of 4 (Southern Ocean Crossing)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-mono text-label-mono text-tertiary flex items-center gap-1 font-bold">
                        {" "}
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Departed "}
                      </span>
                      <span className="font-title-md text-[14px] text-on-surface">
                        Cape Town
                      </span>
                      <span className="font-label-mono text-[10px] text-secondary">
                        Nov 12 • Port Victoria
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-mono text-label-mono text-tertiary flex items-center gap-1 font-bold">
                        {" "}
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Passed "}
                      </span>
                      <span className="font-title-md text-[14px] text-on-surface">
                        Sub-Antarctic Front
                      </span>
                      <span className="font-label-mono text-[10px] text-secondary">
                        Nov 24 • Lat 46°S
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-mono text-label-mono text-tertiary flex items-center gap-1 font-bold">
                        {" "}
                        <span className="material-symbols-outlined text-[14px]">
                          check_circle
                        </span>
                        {" Crossed "}
                      </span>
                      <span className="font-title-md text-[14px] text-on-surface">
                        Polar Front
                      </span>
                      <span className="font-label-mono text-[10px] text-secondary">
                        Dec 03 • Lat 54°S
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 bg-surface-container-high/60 p-2 rounded-lg">
                      <span className="font-label-mono text-label-mono text-[#ea580c] flex items-center gap-1 font-bold animate-pulse">
                        {" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                        {" Live Position "}
                      </span>
                      <span className="font-title-md text-[14px] text-primary font-bold">
                        Lat 64°12'S
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface">
                        Marginal Ice Zone
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 opacity-80">
                      <span className="font-label-mono text-label-mono text-secondary flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[14px]">
                          flag
                        </span>
                        {" Target "}
                      </span>
                      <span className="font-title-md text-[14px] text-on-surface">
                        Maitri Station
                      </span>
                      <span className="font-label-mono text-[10px] text-secondary">
                        ETA Dec 22 • Fast Ice
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono text-label-mono uppercase text-secondary font-semibold">
                      VESSEL & RELIEF SQUADRON
                    </span>
                    <span className="bg-tertiary/10 text-tertiary px-2.5 py-0.5 rounded-full font-label-mono text-label-mono font-bold flex items-center gap-1">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      {" UPLINK ACTIVE "}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    {" R/V Kronprins Haakon / ORV Sagar Nidhi "}
                  </h2>
                  <span className="font-label-mono text-label-mono text-secondary">
                    Callsign: 3YKH • MMSI: 257049000 • Sat-C: 425700012
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-1">
                    <span className="font-label-mono text-label-mono text-secondary uppercase flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        my_location
                      </span>
                      {" Coordinates "}
                    </span>
                    <span className="font-title-md text-title-md text-on-surface font-mono font-semibold">
                      64°12'18" S
                    </span>
                    <span className="font-title-md text-title-md text-on-surface font-mono font-semibold">
                      14°48'02" E
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-1">
                    <span className="font-label-mono text-label-mono text-secondary uppercase flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        speed
                      </span>
                      {" Speed Over Ground "}
                    </span>
                    <span className="font-title-md text-headline-sm text-primary font-bold">
                      {"11.4 "}
                      <span className="text-sm font-normal text-secondary">
                        knots
                      </span>
                    </span>
                    <span className="font-label-mono text-[10px] text-tertiary">
                      Continuous Cruising Mode
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-1">
                    <span className="font-label-mono text-label-mono text-secondary uppercase flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        compass_calibration
                      </span>
                      {" Heading "}
                    </span>
                    <span className="font-title-md text-headline-sm text-on-surface font-semibold">
                      172° SSE
                    </span>
                    <span className="font-label-mono text-[10px] text-secondary">
                      Approaching Astrid Ridge
                    </span>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-xl flex flex-col gap-1">
                    <span className="font-label-mono text-label-mono text-secondary uppercase flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        device_thermostat
                      </span>
                      {" Sea Temp (SST) "}
                    </span>
                    <span className="font-title-md text-headline-sm text-[#006070] font-semibold">
                      -1.2°C
                    </span>
                    <span className="font-label-mono text-[10px] text-secondary">
                      Marginal Ice Zone (MIZ)
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container p-4 rounded-xl flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase text-on-surface font-bold flex items-center gap-1.5">
                      {" "}
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        air
                      </span>
                      {" Shipboard AWS Weather Station "}
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Auto-sampled 3m ago
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center pt-1">
                    <div className="bg-surface-container-lowest p-2 rounded-lg">
                      <span className="font-label-mono text-[10px] text-secondary block">
                        WIND SPEED
                      </span>
                      <span className="font-title-md text-[14px] text-on-surface font-bold">
                        38 kt SW
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-2 rounded-lg">
                      <span className="font-label-mono text-[10px] text-secondary block">
                        AIR TEMP
                      </span>
                      <span className="font-title-md text-[14px] text-on-surface font-bold">
                        -9.4°C
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-2 rounded-lg">
                      <span className="font-label-mono text-[10px] text-secondary block">
                        BAROMETER
                      </span>
                      <span className="font-title-md text-[14px] text-error font-bold">
                        982 hPa ↓
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-2 rounded-lg">
                      <span className="font-label-mono text-[10px] text-secondary block">
                        VISIBILITY
                      </span>
                      <span className="font-title-md text-[14px] text-on-surface font-bold">
                        4.2 nm
                      </span>
                    </div>
                  </div>
                  <span className="font-label-mono text-[11px] text-secondary italic">
                    {" Observed conditions: Blizzard squalls with blowing snow along pack ice perimeter. "}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-mono text-label-mono">
                    <span className="text-on-surface font-semibold">
                      2,410 nm logged
                    </span>
                    <span className="text-secondary">
                      680 nm to Lazarev fast ice
                    </span>
                  </div>
                  <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{"width": "78%"}} />
                  </div>
                  <div className="flex justify-between font-label-mono text-[10px] text-secondary">
                    <span>
                      78% complete of Southern Ocean transect
                    </span>
                    <span>
                      Target Anchorage: 70°45'S
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center justify-between bg-surface-container-low p-2.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">
                        verified
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface">
                        Sensor Health: All 24 Mast & Keel Probes Nominal
                      </span>
                    </div>
                    <span className="font-label-mono text-[10px] text-tertiary uppercase font-bold">
                      100% OK
                    </span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary py-2.5 rounded-lg font-label-md text-label-md font-semibold transition-colors">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      table_chart
                    </span>
                    {" Download In-situ NetCDF Telemetry (Level-1B) "}
                  </button>
                </div>
                <div className="bg-[#fff7ed] p-3 rounded-xl flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#ea580c] text-[18px] shrink-0 mt-0.5">
                    warning
                  </span>
                  <p className="font-body-sm text-[12px] text-[#9a3412] leading-snug">
                    {" Position simulated / delayed by 45 minutes for operational security and satellite uplink buffering in accordance with NCPOR Antarctic Safety Protocols. "}
                  </p>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      edit_note
                    </span>
                    {" Ship-to-Shore Logbook "}
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    {" Expedition Field Diary & Daily Dispatches "}
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary">
                    {" Showing latest 3 authenticated dispatches sent via High-Frequency (HF) radio & Inmarsat broadband from the ice. "}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  <button className="px-4 py-1.5 bg-primary text-on-primary rounded-full font-label-mono text-label-mono font-medium shadow-sm whitespace-nowrap">
                    All Logs (34)
                  </button>
                  <button className="px-4 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-full font-label-mono text-label-mono whitespace-nowrap transition-colors">
                    Navigation & Ice (14)
                  </button>
                  <button className="px-4 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-full font-label-mono text-label-mono whitespace-nowrap transition-colors">
                    Marine Biology (11)
                  </button>
                  <button className="px-4 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-full font-label-mono text-label-mono whitespace-nowrap transition-colors">
                    Atmospheric Science (9)
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-5 hover:translate-y-[-2px] transition-transform">
                  {" "}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">
                          {" PS "}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-[14px] text-on-surface font-bold leading-tight">
                            Dr. Priya Sharma
                          </span>
                          <span className="font-label-mono text-[11px] text-secondary">
                            Chief Scientist (NCPOR Oceanography)
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full font-label-mono text-[10px] font-bold">
                        {" "}
                        <span className="material-symbols-outlined text-[12px]">
                          check_circle
                        </span>
                        {" VERIFIED "}
                      </span>
                    </div>
                    <div className="font-label-mono text-label-mono text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      {" Today, 08:30 UTC • Day 34 "}
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      {" “Encountered first pack ice belts at 63°S. Deploying CTD rosette transect #14 and launching autonomous Argo float in high Antarctic waters. Salinity shows accelerated meltwater pulse.” "}
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container">
                        <img className="w-full h-full object-cover" data-alt="Scientific oceanographers in red expedition parkas lowering a circular stainless steel CTD water sampling carousel over the icy ship deck into the freezing dark blue Southern Ocean waters with icebergs on the horizon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_gXqLpKWYAAajK_m8Sg-siIa5I_OdcB3e55uFrgHFBW4p-v8YuvXtkYee-umQDlanTJRpAFzdkIk1EdD5Cxis3cLjh0v8CbONNWtOLAqUT-G2OGP9QO8PlWsman4gbDkXSQ68NVPGuSMd6HAzxaOKhja9ItZ5IXImwsIbx6dH8hL2Ay183CJD-G1riKPbofV-3ML4r-Dcl9T09nZn_QSpDB6NR8ahqtvk2QIAdvpYoyjlvJOGWn1a" />
                        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-white font-label-mono text-[10px]">
                          {" Photo 1 of 3: CTD Rosette Deployment "}
                        </div>
                        <div className="absolute bottom-2 right-2 flex items-center gap-1">
                          <button className="w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center text-xs">
                            ‹
                          </button>
                          <button className="w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center text-xs">
                            ›
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 rounded-lg overflow-hidden bg-surface-container">
                          <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" data-alt="Expedition ship navigating through expansive fractured sea ice floes in Antarctica under a cloudy dramatic polar sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbkv1-HwNezdHckS1PdCikDdUF3IR5bBXYpUloGlIZ3aeWyMZZLmJ6fHKLs54IH8_sms8Iu-6pb0JlFR0-uP4YKK9ji1PsHZx7g3m_43OqOsmbqXBudrzltlYpNK0VUZUH9NQvp_Msgyl2-amLQAz-Ya80tWLqDpXNB3VocGJ20lxQOynv0Bk0gN4VlTq_MADwPOhDSM3eogqKvF-lkuedmigTFnX-kMkhLRWLEHGsgGkInSdY2lJq" />
                        </div>
                        <div className="h-16 rounded-lg overflow-hidden bg-surface-container">
                          <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" data-alt="Modern ship bridge navigation radar console displaying green circular ice sweep echoes and sea floor sonar depths." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfvNULhK8O0B4n9qy-XPxLcKFKpFh0EefROJh-IgnC3Ho2CkE-tYvQQRZ3_CnvABCOPlFnJNNN2FC73qK4axapEMz57456xo0JB-gumd1ZBhw-UA92Yg8jl8wSMASsdnnmQgPa_4piHE6H7vPE_UCigXQvKPvFa1gKlc4t764YJUtvQcES2skChDEuZeiP0RL6i3dWfRq-hFxKnEsiGp4JzT25t5VAqPs4JMMvBfUvLESV-ykuVD0s" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="pt-4 flex items-center justify-between">
                    <button className="flex items-center gap-1.5 bg-surface-container-low hover:bg-surface-container text-primary px-3 py-1.5 rounded-lg font-label-mono text-label-mono font-medium transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        headphones
                      </span>
                      {" Listen (1:15) "}
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md font-label-mono text-label-mono" title="Translate to Hindi">
                        🌐 EN/HI
                      </button>
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md" title="Bookmark">
                        <span className="material-symbols-outlined text-[18px]">
                          bookmark_border
                        </span>
                      </button>
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md" title="Share">
                        <span className="material-symbols-outlined text-[18px]">
                          share
                        </span>
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-5 hover:translate-y-[-2px] transition-transform">
                  {" "}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm">
                          {" KA "}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-[14px] text-on-surface font-bold leading-tight">
                            Capt. K. R. Anand
                          </span>
                          <span className="font-label-mono text-[11px] text-secondary">
                            Master of the Vessel (R/V Haakon)
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-tertiary/10 text-tertiary px-2 py-0.5 rounded-full font-label-mono text-[10px] font-bold">
                        {" "}
                        <span className="material-symbols-outlined text-[12px]">
                          check_circle
                        </span>
                        {" VERIFIED "}
                      </span>
                    </div>
                    <div className="font-label-mono text-label-mono text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      {" Yesterday, 19:45 UTC • Day 33 "}
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      {" “Katabatic surge off Queen Maud Land detected on satellite barometry. Reduced speed to 8 knots to negotiate dense multi-year floes. Ice radar indicates open lead toward Princess Astrid Coast.” "}
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container">
                        <img className="w-full h-full object-cover" data-alt="High contrast polar satellite synthetic aperture radar imagery showing coastal Antarctic sea ice leads and deep blue ocean fractures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSDXL93QzhJ0Mwn8MU_87_phsJv9pv1a0YW86vVOGQm5i13dNBsZn54l-Q-vspaU82scCBJYzQY9pUQWJfXZhtivjVBGM0iENcV0BJtBn1R5ogLnUR87LjnkhGB6qe9lBY0tQIzMSkcbO0bc16nngb6eHFoz9O7pZdsDByROw1MI3yoJCxNaupdiIhPy2L0NjZ7B70ziIv-slESh3c-8iiCKjtf_sC5iWKq2UoZVQTXdGpdy89wat9" />
                        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur px-2 py-0.5 rounded text-white font-label-mono text-[10px]">
                          {" Photo 1 of 2: Sentinel-1 SAR Overlay "}
                        </div>
                      </div>
                      <div className="h-20 rounded-xl overflow-hidden bg-surface-container">
                        <img className="w-full h-full object-cover" data-alt="Reinforced icebreaker steel bow encrusted in heavy rime frost cutting through frozen ocean ice sheets in twilight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc-QuC6oQxEiFSJEk7meVEfGas3B9pAe3ed0E0QTqQ8pCki2Vc4itNQe4y7TRSBBld_o2FN8oNxovUn-zQUTDHsDiKVu_o6gr0RNBZLYynbj3nWC0Vuxpqsabut3XTFJZYk8RyhndBWHiii-dBqgaSIEaTUCPmufdhQdhPSkaWD-cV2HjmdEkhiMHZ4NBhH8s6EXhsHlWoNPWQtg6cmAC8B-Zml8SJhCCsVMriU4-TqALo--ETU0GE" />
                      </div>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="pt-4 flex items-center justify-between">
                    <button className="flex items-center gap-1.5 bg-surface-container-low hover:bg-surface-container text-primary px-3 py-1.5 rounded-lg font-label-mono text-label-mono font-medium transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        headphones
                      </span>
                      {" Listen (0:52) "}
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md font-label-mono text-label-mono" title="Translate to Hindi">
                        🌐 EN/HI
                      </button>
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md" title="Bookmark">
                        <span className="material-symbols-outlined text-[18px]">
                          bookmark_border
                        </span>
                      </button>
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md" title="Share">
                        <span className="material-symbols-outlined text-[18px]">
                          share
                        </span>
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-5 hover:translate-y-[-2px] transition-transform">
                  {" "}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-bold text-sm">
                          {" TN "}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-[14px] text-on-surface font-bold leading-tight">
                            Er. Tashi Namgyal
                          </span>
                          <span className="font-label-mono text-[11px] text-secondary">
                            Glaciological Instrumentation
                          </span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 bg-[#fff7ed] text-[#ea580c] px-2 py-0.5 rounded-full font-label-mono text-[10px] font-bold">
                        {" "}
                        <span className="material-symbols-outlined text-[12px]">
                          hourglass_top
                        </span>
                        {" PENDING Q/C "}
                      </span>
                    </div>
                    <div className="font-label-mono text-label-mono text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      {" Dec 14, 14:10 UTC • Day 32 "}
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      {" “AWS sensor package on ice mast calibration completed. Sonic anemometer zero-point stabilized. Ready for helicopter airlift to Schirmacher Oasis upon arrival at Maitri ice edge.” "}
                    </p>
                    <div className="w-full h-64 rounded-xl bg-surface-container-low p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-primary font-semibold">
                          SENSOR BENCH TELEMETRY
                        </span>
                        <span className="font-label-mono text-[10px] bg-white px-2 py-0.5 rounded text-tertiary">
                          CALIBRATED
                        </span>
                      </div>
                      <div className="w-full h-28 my-auto">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 80">
                          <path d="M0 60 Q 50 20, 100 45 T 200 30 T 300 15" fill="none" stroke="#1f7a8c" strokeWidth="2.5" />
                          <path d="M0 70 Q 70 50, 150 55 T 300 40" fill="none" stroke="#6afbc6" strokeDasharray="3 3" strokeWidth="1.5" />
                          <circle cx="100" cy="45" fill="#006070" r="4" />
                          <circle cx="200" cy="30" fill="#006070" r="4" />
                          <circle cx="300" cy="15" fill="#007f5d" r="4" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between font-label-mono text-[10px] text-secondary">
                        <span>
                          {"Anemometer drift: <0.02 m/s"}
                        </span>
                        <span>
                          Mast Voltage: 24.4V DC
                        </span>
                      </div>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="pt-4 flex items-center justify-between">
                    <button className="flex items-center gap-1.5 bg-surface-container-low hover:bg-surface-container text-primary px-3 py-1.5 rounded-lg font-label-mono text-label-mono font-medium transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        headphones
                      </span>
                      {" Listen (1:04) "}
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md font-label-mono text-label-mono" title="Translate to Hindi">
                        🌐 EN/HI
                      </button>
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md" title="Bookmark">
                        <span className="material-symbols-outlined text-[18px]">
                          bookmark_border
                        </span>
                      </button>
                      <button className="p-1.5 hover:bg-surface-container text-secondary rounded-md" title="Share">
                        <span className="material-symbols-outlined text-[18px]">
                          share
                        </span>
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
              </div>
            </section>
            <section className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    groups
                  </span>
                  {" Polar Expedition Cadre "}
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  {" Expedition Team on Mission "}
                </h2>
                <p className="font-body-sm text-body-sm text-secondary">
                  {" Scientists, logistics commanders, and medical officers serving aboard the 44th Austral Summer campaign. "}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-container">
                      <img className="w-full h-full object-cover" data-alt="Portrait of an Indian woman polar scientist wearing cold weather extreme survival gear with ice mountains in the far background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi-ATAl9msW4pPF7cOtqWYadqc7FEbWxqzLBTofTrrwtUyguMhsyUXvBANGTUr3n_JIRp_MVqIdEVU2LfYQ5xtBrUrSdKgLdIzNYtRncDUj_vnil9L45bUolgI4bW9ObCgxVAqRpYqt15F22BuRW-efwodmTcQfUZ12xGM6xQzk9IIwrdDxdBzZmVAZx7dMY4ymE1B550Qg05U5ar0re68yHje3_T0ZuOx7jLolCDHgPYz4WtIPA7H" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-[15px] text-on-surface font-bold truncate">
                        Dr. S. K. Ramanathan
                      </span>
                      <span className="font-label-mono text-[11px] text-primary">
                        Expedition Leader
                      </span>
                      <span className="font-body-sm text-[12px] text-secondary">
                        NCPOR Goa
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="bg-surface-container px-2 py-0.5 rounded font-label-mono text-[10px] text-secondary font-semibold">
                      {" 4th Wintering "}
                    </span>
                    <button className="flex items-center gap-1 text-primary hover:text-on-surface font-label-mono text-[11px] font-bold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        podcasts
                      </span>
                      {" Radio Ping "}
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-container">
                      <img className="w-full h-full object-cover" data-alt="Indian meteorologist in extreme cold hooded jacket holding portable weather telemetry instruments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALd85Pnc_hK_YnxJTIfXS2WNJUj5OGKf2neSKJ0KQGwHQFBvS8NgfWPZfPFT37-iqGcJ2RC_FO641o4kLxd1eVsvCQu-qDaZyc7PqtX2lqmsRjQOhDifNLqvTwh8D_kBHvYM_LxHp5HJCXzN3k3E1WSQUK8xJkD18PJ8hRChepzxKLzBugUb252FVNPhP0ZiWIdBEvjLPGO7j1HJnkaE_IUwM6O5C_g6kkrK9PpRJpNzyNKwMOSe8a" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-[15px] text-on-surface font-bold truncate">
                        Dr. Ananya Mukherjee
                      </span>
                      <span className="font-label-mono text-[11px] text-primary">
                        Chief Meteorologist
                      </span>
                      <span className="font-body-sm text-[12px] text-secondary">
                        IMD New Delhi
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="bg-surface-container px-2 py-0.5 rounded font-label-mono text-[10px] text-secondary font-semibold">
                      {" 2nd Expedition "}
                    </span>
                    <button className="flex items-center gap-1 text-primary hover:text-on-surface font-label-mono text-[11px] font-bold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        podcasts
                      </span>
                      {" Radio Ping "}
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-container">
                      <img className="w-full h-full object-cover" data-alt="Commander of the Indian Navy in winter polar uniform aboard the ice vessel navigation deck." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAjzs9r_x8pev-EaPNfLjFEQ-7elU19EK99QSSwGYJHxD6qQYtlzKw0yWq2h_52lv7baKtmNn5sQwz2rW6LQ_ZTFpn_cfxNZ-ho6g48XT1ZJQcuu4kIi9BCk02-E0MyUoDIR9PegZnBfG9vObCGdaCjhovvjh52MZtpKgko5_HDF_NbqHNYH3VVHRmfHGoP05iIX-UI54v2g_2JkoFUD49fs_K1kF90pplg3kBuu8Dnq1JwhPoof2x" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-[15px] text-on-surface font-bold truncate">
                        Cdr. Rohit Deshmukh
                      </span>
                      <span className="font-label-mono text-[11px] text-primary">
                        Logistics & Operations
                      </span>
                      <span className="font-body-sm text-[12px] text-secondary">
                        Indian Navy
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="bg-surface-container px-2 py-0.5 rounded font-label-mono text-[10px] text-secondary font-semibold">
                      {" 3rd Wintering "}
                    </span>
                    <button className="flex items-center gap-1 text-primary hover:text-on-surface font-label-mono text-[11px] font-bold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        podcasts
                      </span>
                      {" Radio Ping "}
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-surface-container">
                      <img className="w-full h-full object-cover" data-alt="Geodetic scientist from Survey of India aligning satellite positioning GPS masts in snow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF6BWFES-hi3SUxsRHJX6z7Ft-apZXViApcV6mux7BPsc2R4VAH6470ROnJy-aMi8oRj9k8Dt-NkxxpNYfy1RphUF_wk7IBkp9r2QiMo-GyqogamqCP6WPv-QQ_un50XIVu6ZCH_o89BYN97a535FIh01fsOZxTMg9t6qavEN3go44RyB5hWfqGLrEo4VM8KrInNMl_Ko9-ZIbfHgUlkAwoocejiJFGoC6nYk-kSoJ6OnuxQSB9vfu" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-md text-[15px] text-on-surface font-bold truncate">
                        Shri Vikramaditya Joshi
                      </span>
                      <span className="font-label-mono text-[11px] text-primary">
                        Geodetic Surveyor
                      </span>
                      <span className="font-body-sm text-[12px] text-secondary">
                        Survey of India
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="bg-surface-container px-2 py-0.5 rounded font-label-mono text-[10px] text-secondary font-semibold">
                      {" 1st Expedition "}
                    </span>
                    <button className="flex items-center gap-1 text-primary hover:text-on-surface font-label-mono text-[11px] font-bold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        podcasts
                      </span>
                      {" Radio Ping "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      satellite_alt
                    </span>
                    {" Satellite Telex Broadcast "}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {" Send a Morale Message to the Wintering Team "}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary">
                    {" Messages are vetted by NCPOR outreach officers and transmitted daily via satellite telex broadcast during the expedition team's evening mess at 19:30 UTC. "}
                  </p>
                </div>
                <form className="flex flex-col gap-4" id="moraleForm" onSubmit={(e)=>window.__pol(e,"event.preventDefault(); alert('Message transmitted to NCPOR moderation desk.');")}>
                  {" "}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface">
                        Your Name / School Class
                      </label>
                      <input className="bg-surface-container-low text-on-surface rounded-lg px-3.5 py-2.5 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container" placeholder="e.g. Aarav Mehta (Class IX-B)" required="" type="text" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-md text-label-md text-on-surface">
                        City / Organization
                      </label>
                      <input className="bg-surface-container-low text-on-surface rounded-lg px-3.5 py-2.5 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container" placeholder="e.g. KV IIT Powai, Mumbai" required="" type="text" />
                    </div>
                  </div>
                  {" "}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface">
                      Category
                    </label>
                    <select className="bg-surface-container-low text-on-surface rounded-lg px-3.5 py-2.5 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container">
                      <option>
                        Citizen Encouragement & Morale
                      </option>
                      <option>
                        Student Scientific Question
                      </option>
                      <option>
                        Family & Institutional Greetings
                      </option>
                    </select>
                  </div>
                  {" "}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="font-label-md text-label-md text-on-surface">
                        Your Message
                      </label>
                      <span className="font-label-mono text-label-mono text-secondary" id="charCount">
                        0 / 280 chars
                      </span>
                    </div>
                    <textarea className="bg-surface-container-low text-on-surface rounded-lg p-3.5 font-body-sm text-body-sm focus:outline-none focus:bg-surface-container" id="msgBox" maxLength="280" placeholder="Write your brief message to the scientists and crew..." required="" rows="3" defaultValue={""} onInput={(e)=>window.__pol(e,"document.getElementById('charCount').innerText = this.value.length + ' / 280 chars'")} />
                  </div>
                  {" "}
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-label-mono text-[11px] text-secondary flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        shield
                      </span>
                      {" Strict moderation against spam & personal telemetry "}
                    </span>
                    <button className="bg-primary text-on-primary hover:bg-[#165A68] px-6 py-2.5 rounded-lg font-label-md text-label-md font-semibold transition-colors shadow-sm" type="submit">
                      {" Send Message (Subject to Moderation) "}
                    </button>
                  </div>
                  {" "}
                </form>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono uppercase text-secondary font-bold">
                    RECENT TRANSMISSIONS (DELIVERED)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary">
                    Uplink: Slot #44-A
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-[14px] text-on-surface font-semibold">
                      Kendriya Vidyalaya No. 1, Kochi
                    </span>
                    <span className="font-label-mono text-[11px] text-secondary">
                      Delivered 18:30 UTC
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    {" “Sending warmest regards from standard 8 students! We are watching your live coordinates every morning in science assembly. Stay strong through the Roaring Sixties!” "}
                  </p>
                  <div className="flex items-center gap-1.5 font-label-mono text-[10px] text-tertiary">
                    <span className="material-symbols-outlined text-[12px]">
                      done_all
                    </span>
                    {" Broadcasted to Ship Wardroom Mess "}
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-[14px] text-on-surface font-semibold">
                      Prof. Jayant K., Pune University
                    </span>
                    <span className="font-label-mono text-[11px] text-secondary">
                      Delivered yesterday
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                    {" “Kudos to Dr. Sharma and team on the CTD-14 deployment. We are keenly tracing the Southern Ocean polar front thermocline data for our monsoon teleconnection model.” "}
                  </p>
                  <div className="flex items-center gap-1.5 font-label-mono text-[10px] text-tertiary">
                    <span className="material-symbols-outlined text-[12px]">
                      done_all
                    </span>
                    {" Read by Chief Scientist "}
                  </div>
                </div>
                <div className="bg-surface-container p-4 rounded-xl flex items-center gap-3 text-secondary">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    cell_tower
                  </span>
                  <span className="font-body-sm text-[12px] leading-snug">
                    {" Next scheduled HF radio voice schedule between Maitri Base Radio Room and Ship Bridge at 21:00 UTC (Frequency 8291 kHz USB). "}
                  </span>
                </div>
              </div>
            </section>
            <section className="bg-surface-container-low rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface">
                    Data Integrity & National Sovereignty Protocol
                  </span>
                  <p className="font-body-sm text-body-sm text-secondary">
                    {" All positional feeds, bathymetry sweeps, and meteorological records are cryptographically timestamped and managed in compliance with the Antarctic Treaty System (ATS) guidelines and MoES Data Sharing Framework. "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-label-mono text-label-mono text-secondary">
                  GOVT OF INDIA • MoES
                </span>
                <div className="w-2 h-2 rounded-full bg-tertiary" />
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low py-space-xl shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
            <div className="flex flex-col gap-space-sm">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  NCPOR • MoES • Govt. of India
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                National outreach portal dedicated to advancing public understanding, scientific access, and strategic literacy in Antarctic, Arctic, Southern Ocean, and Himalayan research expeditions.
              </p>
              <address className="not-italic font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-1 mt-2">
                <span className="font-title-md text-title-md text-on-surface">
                  Polar Science Campus
                </span>
                <span>
                  Headland Sada, Vasco-da-Gama
                </span>
                <span>
                  Goa - 403804, India
                </span>
              </address>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">
                Scientific Divisions
              </h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Cryosphere & Climate Evolution
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Polar Environment & Ecosystems
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/graph">
                    Southern Ocean Physical Oceanography
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Palaeoclimate & Ice Core Analytics
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Deep Ocean Mission Studies
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">
                Outreach & Access
              </h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/data">
                    National Polar Data Centre (NPDC)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Expedition Vessel Logistics
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Schools & STEM Curricula
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Open Ocean Fellowships
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Public Lecture Schedules
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">
                Stations & Telemetry
              </h3>
              <div className="flex flex-col gap-2 font-label-mono text-label-mono">
                <div className="flex items-center justify-between p-2 rounded bg-surface-container">
                  <span className="text-on-surface font-semibold">
                    BHARATI (Antarctica)
                  </span>
                  <span className="text-tertiary flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-surface-container">
                  <span className="text-on-surface font-semibold">
                    MAITRI (Antarctica)
                  </span>
                  <span className="text-tertiary flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-surface-container">
                  <span className="text-on-surface font-semibold">
                    HIMADRI (Arctic - Ny-Ålesund)
                  </span>
                  <span className="text-tertiary flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-surface-container">
                  <span className="text-on-surface font-semibold">
                    IndARC (Kongsfjorden Mooring)
                  </span>
                  <span className="text-tertiary flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-surface-container">
                  <span className="text-on-surface font-semibold">
                    HIMANSH (Western Himalaya)
                  </span>
                  <span className="text-tertiary flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-md">
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
              © 2025 National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India. All rights reserved.
            </p>
            <div className="flex items-center gap-space-md font-label-mono text-label-mono text-on-surface-variant">
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                Terms
              </a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                Privacy
              </a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                RTI
              </a>
              <Link className="hover:text-primary transition-colors" to="/about/accessibility">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
