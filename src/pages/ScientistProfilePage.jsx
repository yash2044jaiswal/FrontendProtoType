import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_scientist_profile_dr._ananya_sen_people_id/code.html
const BODY_CLASS = "bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-fixed";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}@keyframes telemetryPulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.4;transform:scale(0.85);}}.telemetry-dot{animation:telemetryPulse 2s cubic-bezier(0.4,0,0.6,1) infinite;}";
const PAGE_SCRIPT = "// Simple tab click feedback and micro-interaction\n  document.querySelectorAll('[role=\"tab\"]').forEach(tab => {\n    tab.addEventListener('click', function() {\n      document.querySelectorAll('[role=\"tab\"]').forEach(t => {\n        t.setAttribute('aria-selected', 'false');\n        t.className = 'flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0';\n      });\n      this.setAttribute('aria-selected', 'true');\n      this.className = 'flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md transition-colors shadow-sm shrink-0';\n    });\n  });";

export default function ScientistProfilePage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-lg shrink-0">
            <a className="flex items-center gap-space-md group" data-path="home" href="#" onClick={(e)=>e.preventDefault()}>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">
                  explore
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary uppercase leading-tight mt-1">
                  NCPOR · MoES · Govt. of India
                </span>
              </div>
            </a>
            <div className="hidden xl:flex items-center gap-space-sm bg-surface-container px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary-container telemetry-dot" />
              <span className="font-label-mono text-label-mono text-secondary font-semibold">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden 2xl:flex items-center gap-1 font-label-md text-label-md" data-active-classes="bg-primary-container text-on-primary-container rounded-lg">
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="community" to="/community">
              Community
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="about-accessibility" to="/about/accessibility">
              About & Accessibility
            </Link>
          </nav>
          <div className="flex items-center gap-space-md shrink-0">
            <button className="hidden md:flex items-center justify-between w-44 px-3 py-2 bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
              <span className="flex items-center gap-2 font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[18px]">
                  search
                </span>
                <span>
                  Search polar records...
                </span>
              </span>
              <kbd className="font-label-mono text-label-mono bg-surface px-1.5 py-0.5 rounded shadow-sm text-secondary">
                ⌘K
              </kbd>
            </button>
            <div className="flex items-center bg-surface-container rounded-lg p-0.5">
              <button className="px-2.5 py-1 rounded font-label-mono text-label-mono bg-surface-container-lowest text-primary font-bold shadow-sm" type="button">
                EN
              </button>
              <button className="px-2.5 py-1 rounded font-label-mono text-label-mono text-secondary hover:text-on-surface transition-colors" type="button">
                HI
              </button>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin pt-6 pb-24">
            <div className="absolute -top-10 right-1/4 w-[480px] h-[360px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-80 left-10 w-[320px] h-[320px] bg-primary-fixed/30 rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-label-md text-label-md text-secondary">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    home
                  </span>
                  {" "}
                  <span>
                    Home
                  </span>
                  {" "}
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" to="/people/ananya-sen">
                  People
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-on-surface font-semibold text-primary truncate max-w-[200px] md:max-w-none">
                  Dr. Ananya Sen
                </span>
              </nav>
              <div className="inline-flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-sm text-primary shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-tertiary">
                  verified
                </span>
                <span className="font-label-mono text-label-mono tracking-wider uppercase font-semibold">
                  NCPOR SCIENTIFIC CADRE • SENIOR POLAR ATMOSPHERIC RESEARCHER
                </span>
              </div>
            </div>
            <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden mb-16">
              <div className="absolute -right-8 -bottom-10 opacity-5 pointer-events-none select-none text-primary">
                <svg fill="none" height="340" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 100 100" width="340">
                  <circle cx="50" cy="50" r="45" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="32" />
                  <line x1="50" x2="50" y1="5" y2="95" />
                  <line x1="5" x2="95" y1="50" y2="50" />
                  <line x1="18" x2="82" y1="18" y2="82" />
                  <line x1="18" x2="82" y1="82" y2="18" />
                  <circle cx="50" cy="50" fill="currentColor" r="8" />
                </svg>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <div className="relative group">
                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary-container via-primary to-inverse-surface flex items-center justify-center shadow-lg relative overflow-hidden">
                      <div className="absolute inset-1 rounded-full border border-on-primary-container/20" />
                      <div className="flex flex-col items-center justify-center text-center select-none">
                        <span className="font-headline-lg text-headline-lg font-bold text-on-primary tracking-wider leading-none">
                          AS
                        </span>
                        <span className="font-label-mono text-label-mono text-on-primary-container/80 tracking-widest mt-1">
                          NCPOR-MET
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-1 bg-surface-container-lowest px-2 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container telemetry-dot" />
                      <span className="font-label-mono text-label-mono text-tertiary font-bold tracking-tight">
                        POLAR NET
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col items-center sm:items-start">
                    <span className="font-label-mono text-label-mono text-secondary">
                      ORCID: 0000-0002-8194-912X
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      NCPOR ID: SCI-CRYO-094
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-label-mono text-label-mono font-semibold">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-tertiary-container telemetry-dot" />
                        {" CURRENTLY IN FIELD — 44th IAE Wintering Contingent "}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                        {" "}
                        <span className="material-symbols-outlined text-[14px]">
                          shield
                        </span>
                        {" Verified MoES Polar Investigator "}
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-normal tracking-tight">
                      {" Dr. Ananya Sen "}
                      <span className="block sm:inline font-body-md text-body-md text-secondary font-normal sm:ml-2">
                        Ph.D., Atmospheric Physics & Boundary-Layer Meteorology
                      </span>
                      {" "}
                    </h1>
                    <p className="font-title-md text-title-md text-primary mt-1">
                      {" Scientist-F & Station Commander (43rd IAE Maitri Station) • Cryosphere & Climate Evolution Division, NCPOR Goa "}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-3xl leading-relaxed">
                      {" Dr. Sen leads observational boundary-layer cryospheric meteorology and katabatic wind dynamics across East Antarctica. Recipient of the National Geoscience Award; currently deployed between Maitri and Himadri conducting high-frequency turbulent heat and momentum flux measurements via automated 30-meter instrument masts. "}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 pt-5 border-t border-surface-container">
                    <div className="bg-surface-container-low/70 rounded-xl p-3 flex flex-col">
                      <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold">
                        Missions
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                        {"4 "}
                        <span className="font-body-sm text-body-sm font-normal text-secondary">
                          Expeditions
                        </span>
                      </span>
                      <span className="font-label-mono text-label-mono text-primary mt-1">
                        Antarctic & Arctic
                      </span>
                    </div>
                    <div className="bg-surface-container-low/70 rounded-xl p-3 flex flex-col">
                      <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold">
                        Overwinterings
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                        {"3 "}
                        <span className="font-body-sm text-body-sm font-normal text-secondary">
                          Seasons
                        </span>
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary mt-1">
                        Polar Night Duty
                      </span>
                    </div>
                    <div className="bg-surface-container-low/70 rounded-xl p-3 flex flex-col">
                      <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold">
                        Publications
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                        {"48 "}
                        <span className="font-body-sm text-body-sm font-normal text-secondary">
                          Papers
                        </span>
                      </span>
                      <span className="font-label-mono text-label-mono text-tertiary mt-1">
                        Peer-Reviewed
                      </span>
                    </div>
                    <div className="bg-surface-container-low/70 rounded-xl p-3 flex flex-col">
                      <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold">
                        Impact
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                        {"1,280 "}
                        <span className="font-body-sm text-body-sm font-normal text-secondary">
                          Cites
                        </span>
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary mt-1">
                        h-index: 19
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-all shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        auto_awesome
                      </span>
                      {" "}
                      <span>
                        Ask Dr. Sen (Grounded AI)
                      </span>
                      {" "}
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button" onClick={(e)=>window.__pol(e,"navigator.clipboard?.writeText(window.location.href); alert('Scientist profile link copied to clipboard.');")}>
                      {" "}
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        share
                      </span>
                      {" "}
                      <span>
                        Share Profile
                      </span>
                      {" "}
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm" title={"Download CV & Dossier"} type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        file_download
                      </span>
                      {" "}
                      <span>
                        Download Dossier
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Bookmark Profile" className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-surface-container-low hover:bg-surface-container text-secondary transition-colors shadow-sm" id="bookmarkBtn" type="button" onClick={(e)=>window.__pol(e,"this.classList.toggle('text-primary'); this.classList.toggle('bg-primary-container/20');")}>
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        bookmark
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <div className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md pt-2 pb-4 mb-12 border-b border-surface-container">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0" role="tablist">
                  <button aria-selected="true" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md transition-colors shadow-sm shrink-0" role="tab" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      navigation
                    </span>
                    {" "}
                    <span>
                      Expeditions
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-on-primary-container/20 text-on-primary-container text-[11px] font-bold font-label-mono">
                      4
                    </span>
                    {" "}
                  </button>
                  <button aria-selected="false" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" role="tab" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      menu_book
                    </span>
                    {" "}
                    <span>
                      Publications
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary text-[11px] font-bold font-label-mono">
                      48
                    </span>
                    {" "}
                  </button>
                  <button aria-selected="false" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" role="tab" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      photo_library
                    </span>
                    {" "}
                    <span>
                      Media
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary text-[11px] font-bold font-label-mono">
                      12
                    </span>
                    {" "}
                  </button>
                  <button aria-selected="false" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors shrink-0" role="tab" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      history_edu
                    </span>
                    {" "}
                    <span>
                      Stories & Logs
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary text-[11px] font-bold font-label-mono">
                      6
                    </span>
                    {" "}
                  </button>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="font-label-mono text-label-mono text-secondary hidden md:inline">
                    SCOPE:
                  </span>
                  <button className="px-3 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-primary font-semibold hover:bg-surface-container-high transition-colors" type="button">
                    All Regions
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container-low font-label-mono text-label-mono text-secondary hover:text-on-surface transition-colors" type="button">
                    Antarctica
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container-low font-label-mono text-label-mono text-secondary hover:text-on-surface transition-colors" type="button">
                    Arctic
                  </button>
                </div>
              </div>
            </div>
            <section className="mb-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
                <div>
                  <div className="font-label-mono text-label-mono text-primary uppercase font-bold tracking-wider">
                    Field Command & Deployment History
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                    Expeditions & Observational Footprint
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-secondary max-w-md">
                  {" Continuous record of polar deployments under the MoES Indian Polar Programme, spanning Queen Maud Land, Princess Elizabeth Land, and Svalbard Archipelago. "}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="w-full bg-[#050B18] rounded-2xl p-5 relative overflow-hidden shadow-md flex flex-col justify-between" id="polaris-globe-mini-profile" style={{"border": "2px dashed #1F7A8C", "minHeight": "380px"}}>
                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                      <defs>
                        <pattern height="30" id="polarGrid" patternUnits="userSpaceOnUse" width="30">
                          {" "}
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#83d2e6" strokeDasharray="2 2" strokeWidth="0.5" />
                          {" "}
                        </pattern>
                      </defs>
                      <rect fill="url(#polarGrid)" height="100%" width="100%" />
                      <circle cx="50%" cy="50%" fill="none" r="90" stroke="#1F7A8C" strokeWidth="1" />
                      <circle cx="50%" cy="50%" fill="none" r="130" stroke="#1F7A8C" strokeDasharray="4 4" strokeWidth="0.75" />
                    </svg>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim telemetry-dot" />
                        <span className="font-label-mono text-label-mono text-[#a9edff] tracking-widest uppercase font-bold">
                          PLACES WORKED • GEOSPATIAL RADAR
                        </span>
                      </div>
                      <span className="font-label-mono text-label-mono text-[#83d2e6] bg-[#1f7a8c]/20 px-2 py-0.5 rounded">
                        GNSS LOCK
                      </span>
                    </div>
                    <div className="relative z-10 my-4 py-4 flex flex-col items-center justify-center text-center">
                      <div className="relative w-40 h-40 rounded-full border border-[#1F7A8C]/50 flex items-center justify-center bg-gradient-to-b from-[#0a1a30] to-[#040914] shadow-inner">
                        <div className="absolute inset-x-0 top-1/2 h-px bg-[#1F7A8C]/40" />
                        <div className="absolute inset-y-0 left-1/2 w-px bg-[#1F7A8C]/40" />
                        <div className="absolute top-7 left-12 group cursor-pointer" title="Himadri (78°55'N, 11°56'E)">
                          <span className="w-3 h-3 rounded-full bg-[#48deab] flex items-center justify-center shadow-[0_0_8px_#48deab]">
                            {" "}
                            <span className="w-1.5 h-1.5 rounded-full bg-[#050B18]" />
                            {" "}
                          </span>
                          <span className="absolute left-4 -top-1 font-label-mono text-[10px] text-[#ceffe6] whitespace-nowrap bg-[#050B18]/90 px-1 rounded">
                            Himadri 79°N
                          </span>
                        </div>
                        <div className="absolute bottom-8 right-9 group cursor-pointer" title="Maitri (70°45'S, 11°44'E)">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#83d2e6] flex items-center justify-center shadow-[0_0_10px_#83d2e6] animate-pulse">
                            {" "}
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            {" "}
                          </span>
                          <span className="absolute right-5 -top-1 font-label-mono text-[10px] text-[#a9edff] whitespace-nowrap bg-[#050B18]/90 px-1 rounded">
                            Maitri 70°S
                          </span>
                        </div>
                        <div className="absolute bottom-11 left-7 group cursor-pointer" title="Bharati (69°24'S, 76°11'E)">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#6afbc6] shadow-[0_0_6px_#6afbc6]" />
                          <span className="absolute -left-14 -bottom-3 font-label-mono text-[10px] text-[#ceffe6] whitespace-nowrap bg-[#050B18]/90 px-1 rounded">
                            Bharati 69°S
                          </span>
                        </div>
                        <span className="material-symbols-outlined text-[#1F7A8C]/30 text-[48px] select-none">
                          public
                        </span>
                      </div>
                      <div className="mt-4 font-label-mono text-label-mono text-[#83d2e6] space-y-0.5">
                        <div>
                          {"Maitri: "}
                          <span className="text-white">
                            70°45′58″S, 11°44′09″E
                          </span>
                        </div>
                        <div>
                          {"Bharati: "}
                          <span className="text-white">
                            69°24′28″S, 76°11′14″E
                          </span>
                        </div>
                        <div>
                          {"Himadri: "}
                          <span className="text-white">
                            78°55′00″N, 11°56′00″E
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 pt-3 border-t border-[#1F7A8C]/30 flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-label-mono text-[#c4e8f5]">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#83d2e6]" />
                          {" Antarctic Base (Maitri)"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#6afbc6]" />
                          {" Larsemann Hills (Bharati)"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#48deab]" />
                          {" Arctic Ny-Ålesund (Himadri)"}
                        </span>
                      </div>
                      <Link className="mt-2 inline-flex items-center justify-between text-on-primary-container text-label-md font-label-md bg-[#1f7a8c]/40 hover:bg-[#1f7a8c]/70 px-3 py-2 rounded-lg transition-colors" to="/globe">
                        {" "}
                        <span className="flex items-center gap-2">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            travel_explore
                          </span>
                          {" "}
                          <span>
                            Explore All Locations on 3D Globe
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-2xl p-5 shadow-sm">
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        sensors
                      </span>
                      {" Station Telemetry Active Feed "}
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary mt-1">
                      {" Live continuous telemetry stream transmitting from Dr. Sen’s atmospheric flux tower at Maitri. "}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2 font-label-mono text-label-mono">
                      <div className="bg-surface-container-lowest p-2 rounded-lg">
                        <div className="text-secondary">
                          SONIC ANEMOMETER
                        </div>
                        <div className="font-bold text-on-surface text-[13px] mt-0.5">
                          10 Hz 3D Vector
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest p-2 rounded-lg">
                        <div className="text-secondary">
                          RADIATION BUDGET
                        </div>
                        <div className="font-bold text-on-surface text-[13px] mt-0.5">
                          4-Component CNR4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-tertiary" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-mono text-label-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                          {" "}
                          <span className="w-2 h-2 rounded-full bg-tertiary-container telemetry-dot" />
                          {" Active Overwinter "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Nov 2023 – Mar 2025
                        </span>
                      </div>
                      <span className="font-label-mono text-label-mono text-on-surface-variant font-semibold bg-surface-container-low px-2 py-1 rounded">
                        Expedition #43
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {" 43rd Indian Antarctic Expedition (43rd IAE) "}
                    </h3>
                    <div className="font-title-md text-title-md text-primary font-medium mt-1">
                      {" Station Commander & Lead Scientist (Atmosphere) "}
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm mt-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        location_on
                      </span>
                      <span>
                        Maitri Station, Schirmacher Oasis, Queen Maud Land
                      </span>
                    </div>
                    <div className="mt-4 p-3.5 bg-surface-container-low/60 rounded-xl">
                      <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold block mb-1">
                        Key Scientific Focus:
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" Direct quantification of katabatic wind drag coefficients over continental blue-ice moraines using a synchronized 10Hz sonic anemometer tower network, boundary-layer acoustic sounding, and long-term greenhouse gas mixing ratios. "}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between pt-3 border-t border-surface-container">
                      <span className="font-label-mono text-label-mono text-tertiary font-semibold flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          satellite_alt
                        </span>
                        {" Polar Night Telemetry Synchronized "}
                      </span>
                      <Link className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md font-semibold group-hover:translate-x-1 transition-all" to="/expeditions/soe-01">
                        {" "}
                        <span>
                          View Expedition Record
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-mono text-label-mono font-bold uppercase tracking-wider">
                          {" Completed "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Dec 2021 – Apr 2023
                        </span>
                      </div>
                      <span className="font-label-mono text-label-mono text-on-surface-variant font-semibold bg-surface-container-low px-2 py-1 rounded">
                        Expedition #41
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {" 41st Indian Antarctic Expedition (41st IAE) "}
                    </h3>
                    <div className="font-title-md text-title-md text-primary font-medium mt-1">
                      {" Chief Meteorologist "}
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm mt-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        location_on
                      </span>
                      <span>
                        Dual Station Deployment: Maitri & Bharati Stations
                      </span>
                    </div>
                    <div className="mt-4 p-3.5 bg-surface-container-low/60 rounded-xl">
                      <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold block mb-1">
                        Key Scientific Focus:
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" Vertical profiling of tropospheric ozone anomalies using electrochemical ozonesondes; established baseline surface net radiation balance during the transition from austral summer to winter darkness. "}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between pt-3 border-t border-surface-container">
                      <span className="font-label-mono text-label-mono text-secondary flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          inventory_2
                        </span>
                        {" 14 Datasets Archived in NPDC "}
                      </span>
                      <Link className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md font-semibold group-hover:translate-x-1 transition-all" to="/expeditions/soe-01">
                        {" "}
                        <span>
                          View Expedition Record
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-secondary-container/50 text-secondary font-label-mono text-label-mono font-bold uppercase tracking-wider">
                          {" Archived Dataset "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Jul 2019 – Oct 2019
                        </span>
                      </div>
                      <span className="font-label-mono text-label-mono text-on-surface-variant font-semibold bg-surface-container-low px-2 py-1 rounded">
                        Arctic Summer
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {" Indian Arctic Expedition — Kongsfjorden Summer "}
                    </h3>
                    <div className="font-title-md text-title-md text-primary font-medium mt-1">
                      {" Principal Investigator (Atmospheric Profiling) "}
                    </div>
                    <div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm mt-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        location_on
                      </span>
                      <span>
                        Himadri Station, Ny-Ålesund, Svalbard (79°N)
                      </span>
                    </div>
                    <div className="mt-4 p-3.5 bg-surface-container-low/60 rounded-xl">
                      <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold block mb-1">
                        Key Scientific Focus:
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" Marine boundary layer lapse rates over glacial fjord waters; aerosol optical depth characterization in conjunction with Zeppelin Observatory high-altitude monitors. "}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between pt-3 border-t border-surface-container">
                      <span className="font-label-mono text-label-mono text-secondary flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          folder_zip
                        </span>
                        {" Open Science MoES Repository "}
                      </span>
                      <Link className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md font-semibold group-hover:translate-x-1 transition-all" to="/expeditions/soe-01">
                        {" "}
                        <span>
                          View Expedition Record
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
                <div>
                  <div className="font-label-mono text-label-mono text-primary uppercase font-bold tracking-wider">
                    Peer-Reviewed Scientific Output
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                    Featured Publications & Reports
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      format_quote
                    </span>
                    {" "}
                    <span>
                      Batch Export BibTeX
                    </span>
                    {" "}
                  </button>
                  <Link className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md font-semibold" to="/publications">
                    {" "}
                    <span>
                      View All 48 Publications
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                    {" "}
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-mono text-[11px] font-semibold">
                        {" Journal of Geophysical Research "}
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        2024
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] leading-snug text-on-surface font-bold">
                      {" High-Frequency Turbulent Heat and Momentum Fluxes Over Antarctic Moraine Formations "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mt-2">
                      {" "}
                      <span className="font-semibold text-on-surface">
                        Sen, A.
                      </span>
                      {", Sharma, P., & Deshpande, V. "}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-mono text-[11px]">
                        {" "}
                        <span className="material-symbols-outlined text-[13px] text-tertiary">
                          check_circle
                        </span>
                        {" Searchable text extracted "}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/40 text-secondary font-label-mono text-[11px]">
                        {" DOI: 10.1029/2023JD039821 "}
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-secondary">
                      {" "}
                      <strong className="text-on-surface">
                        42
                      </strong>
                      {" citations "}
                    </span>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-label-md text-label-md font-semibold transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        description
                      </span>
                      {" "}
                      <span>
                        Read Report
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-mono text-[11px] font-semibold">
                        {" Atmospheric Chemistry & Physics "}
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        2022
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] leading-snug text-on-surface font-bold">
                      {" Surface Inversion Breakup and Katabatic Surge Onset in the Schirmacher Oasis "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mt-2">
                      {" "}
                      <span className="font-semibold text-on-surface">
                        Sen, A.
                      </span>
                      {", & Ravindra, R. "}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-mono text-[11px]">
                        {" "}
                        <span className="material-symbols-outlined text-[13px] text-tertiary">
                          check_circle
                        </span>
                        {" Searchable text extracted "}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/40 text-secondary font-label-mono text-[11px]">
                        {" DOI: 10.5194/acp-22-1044-2022 "}
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-secondary">
                      {" "}
                      <strong className="text-on-surface">
                        118
                      </strong>
                      {" citations "}
                    </span>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-label-md text-label-md font-semibold transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        description
                      </span>
                      {" "}
                      <span>
                        Read Report
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-mono text-[11px] font-semibold">
                        {" Polar Science (Elsevier) "}
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        2020
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] leading-snug text-on-surface font-bold">
                      {" Comparative Boundary Layer Thermodynamic Profiling: Ny-Ålesund vs. Larsemann Hills "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mt-2">
                      {" Chakraborty, A., "}
                      <span className="font-semibold text-on-surface">
                        Sen, A.
                      </span>
                      {", & Lal, M. "}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-mono text-[11px]">
                        {" "}
                        <span className="material-symbols-outlined text-[13px] text-tertiary">
                          check_circle
                        </span>
                        {" Searchable text extracted "}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/40 text-secondary font-label-mono text-[11px]">
                        {" DOI: 10.1016/j.polar.2020.100582 "}
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-secondary">
                      {" "}
                      <strong className="text-on-surface">
                        87
                      </strong>
                      {" citations "}
                    </span>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-label-md text-label-md font-semibold transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        description
                      </span>
                      {" "}
                      <span>
                        Read Report
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
              </div>
            </section>
            <section className="mb-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
                <div>
                  <div className="font-label-mono text-label-mono text-primary uppercase font-bold tracking-wider">
                    First-Person Fieldwork Accounts
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                    Dispatches from the Ice Sheet
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-secondary max-w-md">
                  {" Personal logs, scientific narratives, and operational reflections written by Dr. Sen during active overwinter missions. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Antarctic research station Maitri amid severe night-time blizzard with illuminated windows, dense blowing snow crystals whipping through floodlights in dark deep blue polar night, scientific meteorological equipment masts silhouetted in foreground." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADzOVpzXHDPdC7JFbjoqxPgCxuvBY-cHiP20Aqwk0QK1ZFWCtcPjqwgB21tLZ9eHEmAvvlilb6NBlpLV68njgVnhwOINuFUOqNSLYgRxoXMs4nPboK7k9j24_rCesg9HYCUNOSDxtiqVwPoK9EJpsVof2bEfGblZHm538IyUeZ4v762oHEPiuAumiI-ZiNzac3DZ_qFInxJ6zYC0rsZzNObKYdID6TrIfuuzNBXdzrQclTBCz2Y5v2" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-mono text-label-mono font-bold uppercase">
                        {" Field Journal "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-label-mono text-label-mono">
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          calendar_today
                        </span>
                        {" "}
                        <span>
                          July 14, 2024 (Midwinter)
                        </span>
                        {" "}
                      </span>
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          schedule
                        </span>
                        {" "}
                        <span>
                          6 min read
                        </span>
                        {" "}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                        {" Night of the 90-Knot Blizzard "}
                      </h3>
                      <p className="font-body-md text-body-md text-secondary mt-2 leading-relaxed">
                        {" When the katabatic winds funnel down off the continental ice cap, the barometer drops off a cliff. Securing the radiometer mast during minus thirty-four degree squalls tests every protocol we teach back in Goa... "}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                      <span className="font-label-mono text-label-mono text-secondary">
                        Location: Maitri Station
                      </span>
                      <Link className="inline-flex items-center gap-1 text-primary font-label-md text-label-md font-semibold group-hover:translate-x-1 transition-all" to="/stories/overwintering-in-the-schirmacher-oasis">
                        {" "}
                        <span>
                          Read Story
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Golden sunlight breaking horizontally across the pristine snow and ice hills of Schirmacher Oasis Antarctica after months of polar darkness, vibrant turquoise meltwater frozen lake in foreground, clean calm atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPOiXPNB1pKOAhf6tEw7ZmWXv6dRxvi36AT1MTI8-r5TLSWVKQzQaaNKTQBfgtB0cbl8k2wzan9mpRQ37LzyJuFWb-Vk2xM6jK45yZ3EKUAT3MBq48PId7ftx2I1mjVfNBY0OyAj7O3mfA1HlO6-fzVZFU8v1JVVBIDnpJSniQa4ubessFxFN_h55wrtzovOAokYTcOPs04o-y5e5YgXW0AwlLvCVGzqX0-xNCJUlAAUbjpoBftZRb" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-mono text-label-mono font-bold uppercase">
                        {" Field Journal "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white font-label-mono text-label-mono">
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          calendar_today
                        </span>
                        {" "}
                        <span>
                          August 26, 2024
                        </span>
                        {" "}
                      </span>
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          schedule
                        </span>
                        {" "}
                        <span>
                          4 min read
                        </span>
                        {" "}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                        {" Sunlight Returns to Schirmacher Oasis "}
                      </h3>
                      <p className="font-body-md text-body-md text-secondary mt-2 leading-relaxed">
                        {" After 63 continuous days of solar absence, the golden disc skimmed the northern ice ridge for exactly seven minutes. Our pyranometer registered its first micro-volt of incoming solar radiation since late May... "}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
                      <span className="font-label-mono text-label-mono text-secondary">
                        Location: Schirmacher Oasis
                      </span>
                      <Link className="inline-flex items-center gap-1 text-primary font-label-md text-label-md font-semibold group-hover:translate-x-1 transition-all" to="/stories/overwintering-in-the-schirmacher-oasis">
                        {" "}
                        <span>
                          Read Story
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="bg-gradient-to-r from-primary-container to-primary rounded-2xl p-6 md:p-8 text-on-primary flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
                    smart_toy
                  </span>
                  <span className="font-label-mono text-label-mono tracking-wider uppercase text-on-primary-container font-semibold">
                    Conversational Scientist Knowledge Base
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold">
                  Have a specific question about Dr. Sen's katabatic wind findings?
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container max-w-2xl">
                  {" Interact with a specialized AI agent trained strictly on Dr. Sen's 48 peer-reviewed publications and verified NCPOR station logs. "}
                </p>
              </div>
              <button className="shrink-0 px-6 py-3 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-2" type="button">
                {" "}
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                {" "}
                <span>
                  Start Research Query
                </span>
                {" "}
              </button>
            </div>
          </div>
        </div>
        {" "}
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(7,28,54,0.03)]">
        <div className="max-w-[1440px] mx-auto px-margin py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[28px]">
                  ac_unit
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                National Centre for Polar and Ocean Research (NCPOR), an autonomous R&D institution under the Ministry of Earth Sciences, Government of India. Custodian of Indian Antarctic, Arctic, and Southern Ocean missions.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 bg-surface-container rounded-full font-label-mono text-label-mono text-primary font-semibold">
                  ISO 9001:2015 Scientific Facility
                </span>
              </div>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Scientific Divisions
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Cryosphere & Climate Science
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/graph">
                    Polar Environment & Oceanography
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Marine Geophysics & Deep-Sea Coring
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/search">
                    Himalayan Glaciology Research
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Atmospheric & Space Physics
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Outreach & Access
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/repository">
                    National Polar Data Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Research Expedition Logistics Portal
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/people/ananya-sen">
                    Scientist Fellowship & PhD Grants
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    School & University Open Curricula
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/about/accessibility">
                    Accessibility Statement & Screen Reader
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Stations & Telemetry
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li className="flex items-center justify-between">
                  <span>
                    Bharati Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Maitri Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himadri (Ny-Ålesund, Arctic)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    IndARC (Kongsfjorden)
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary-fixed-dim font-semibold">
                    Periodic
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himansh (Spiti, Himalaya)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 bg-surface-container/60 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex flex-col gap-1">
              <p className="font-label-mono text-label-mono text-on-surface-variant">
                © 2025 National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India. All rights reserved.
              </p>
              <p className="font-label-mono text-label-mono text-secondary">
                Scientific Simulation Notice: Telemetry models and climate data streams are calibrated against verified NCPOR polar stations.
              </p>
            </div>
            <div className="flex items-center gap-space-lg shrink-0">
              <Link className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" to="/data">
                Terms of Data Use
              </Link>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                Privacy Policy
              </a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                MoES Portal
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
