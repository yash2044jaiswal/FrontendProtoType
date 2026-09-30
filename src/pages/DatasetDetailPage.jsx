import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_dataset_detail_katabatic_wind_dynamics_datasets_id/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// Simple audio bar micro-interaction for audio play/pause toggle\n  const playBtn = document.getElementById('audio-play-btn');\n  if (playBtn) {\n    let isPlaying = false;\n    playBtn.addEventListener('click', function() {\n      isPlaying = !isPlaying;\n      const icon = playBtn.querySelector('.material-symbols-outlined');\n      if (icon) {\n        icon.textContent = isPlaying ? 'pause' : 'play_arrow';\n      }\n    });\n  }";

export default function DatasetDetailPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="w-full bg-surface-container-low px-margin-mobile lg:px-margin py-1.5 flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
          <div className="flex items-center gap-space-md overflow-hidden">
            <span className="flex items-center gap-1.5 text-on-surface font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              Live Station Telemetry:
            </span>
            <div className="flex items-center gap-space-lg">
              <span className="text-on-surface-variant">
                {"MAITRI (70°45′S): "}
                <strong className="text-on-surface font-medium">
                  -18.4°C | 14 KT S | 986 hPa
                </strong>
              </span>
              <span className="hidden md:inline text-outline-variant">
                •
              </span>
              <span className="hidden md:inline text-on-surface-variant">
                {"BHARATI (69°24′S): "}
                <strong className="text-on-surface font-medium">
                  -14.2°C | 22 KT ESE | 992 hPa
                </strong>
              </span>
              <span className="hidden lg:inline text-outline-variant">
                •
              </span>
              <span className="hidden lg:inline text-on-surface-variant">
                {"HIMADRI (78°55′N): "}
                <strong className="text-on-surface font-medium">
                  -6.8°C | 8 KT NW | 1012 hPa
                </strong>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm pl-space-md">
            <span className="hidden sm:inline text-on-surface-variant">
              NCPOR · MoES, Govt. of India
            </span>
          </div>
        </div>
        <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]">
                explore
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none font-bold">
                POLARIS
              </span>
              <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest leading-tight mt-0.5">
                NCPOR India · MoES
              </span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-space-lg" data-active-classes="text-primary font-title-md">
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="live-tracker" to="/live/soe-01">
              Live Tracker
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link aria-current="page" className="transition-colors text-primary font-title-md" data-path="datasets" to="/data">
              Datasets
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="publications" to="/publications">
              Publications
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm sm:gap-space-md">
            <button aria-label="Search portal" className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all text-left" type="button">
              <span className="material-symbols-outlined text-[18px]">
                search
              </span>
              <span className="hidden sm:inline font-body-sm text-body-sm pr-space-md">
                Search...
              </span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-mono text-label-mono shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                ⌘K
              </kbd>
            </button>
            <div className="flex items-center bg-surface-container-low rounded-lg p-0.5">
              <button className="px-2 py-1 rounded font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm font-semibold" type="button">
                EN
              </button>
              <button className="px-2 py-1 rounded font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
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
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-40 right-0 w-[580px] h-[580px] rounded-full bg-secondary-container/20 blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-80 -left-20 w-[420px] h-[420px] rounded-full bg-surface-container/60 blur-2xl pointer-events-none -z-10" />
            <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-lg flex flex-col gap-space-xl">
              <section className="flex flex-col gap-space-md">
                <nav aria-label="Breadcrumbs" className="flex items-center flex-wrap gap-2 text-on-surface-variant font-label-mono text-label-mono">
                  <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                    {" "}
                    <span className="material-symbols-outlined text-[15px]">
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
                  <Link className="hover:text-primary transition-colors" to="/data">
                    Datasets
                  </Link>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Cryosphere & Atmosphere
                  </a>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-on-surface font-semibold">
                    NPDC-ANT-2024-ATM-042
                  </span>
                </nav>
                <div className="rounded-2xl p-space-md lg:p-space-lg bg-surface-container-lowest shadow-[0_2px_12px_rgba(11,31,58,0.03)] border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-primary-container to-secondary" />
                  <div className="flex items-start gap-space-md pl-2">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container/50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[22px]">
                        gavel
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-label-mono text-label-mono font-bold tracking-wider text-primary uppercase bg-primary-container/10 px-2.5 py-0.5 rounded-full">
                          {" RESTRICTED ACCESS LEVEL 2 (TIER S/C VERIFIED RESEARCHERS) "}
                        </span>
                        <span className="font-label-mono text-label-mono text-tertiary font-medium bg-tertiary-container/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          {" Public Tier Available Below "}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl leading-relaxed">
                        {" Raw 10Hz eddy-covariance raw binary files and sonic anemometer micro-volt sensor telemetry are embargoed for registered institutional investigators. Processed 10-minute averages and NetCDF-4 summaries are publicly accessible. "}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 pl-2 md:pl-0">
                    <button className="px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm font-semibold hover:bg-primary transition-all shadow-sm flex items-center gap-2" type="button" onClick={(e)=>window.__pol(e,"alert('Access Request Dialog: Form 4B initiation triggered under MoES Polar Science Protocol.')")}>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        verified_user
                      </span>
                      {" "}
                      <span>
                        Request Elevated Access (Form 4B)
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-2 font-label-mono text-label-mono text-primary font-semibold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[18px]">
                      air
                    </span>
                    <span>
                      National Polar Data Centre (NPDC) • Atmospheric Physics Division
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface max-w-4xl tracking-tight leading-tight">
                    {" High-Resolution Katabatic Wind Dynamics & Boundary Layer Turbulence Profile "}
                  </h1>
                  <div className="flex items-center gap-3 font-label-mono text-label-mono text-on-surface-variant flex-wrap pt-1">
                    <span className="bg-surface-container-high px-2.5 py-1 rounded-md text-on-surface font-semibold">
                      DOI: 10.5194/npdc-2024-katabatic-042
                    </span>
                    <span>
                      •
                    </span>
                    <span className="bg-surface-container-high px-2.5 py-1 rounded-md text-on-surface font-semibold">
                      ID: NPDC-ANT-2024-ATM-042
                    </span>
                    <span>
                      •
                    </span>
                    <span className="text-tertiary font-bold flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[15px]">
                        check_circle
                      </span>
                      {" Version 2.1 (Verified MoES Open Data) "}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      DISCIPLINE
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface font-semibold mt-1">
                      Atmospheric Physics
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      REGION
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface font-semibold mt-1 truncate" title="Antarctica (Schirmacher Oasis)">
                      Schirmacher Oasis
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      TIMEFRAME
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface font-semibold mt-1">
                      Nov 2023 - Mar 2024
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      SAMPLING RATE
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface font-semibold mt-1">
                      10 Hz / 10-min Avg
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      VOLUME
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface font-semibold mt-1">
                      4.82 GB (84 files)
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col">
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      LICENSE
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface font-semibold mt-1 text-primary truncate" title="CC-BY 4.0 Open MoES Science">
                      CC-BY 4.0 Science
                    </span>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md pt-2 border-b border-outline-variant/20 pb-space-lg">
                  <div className="flex items-center gap-space-md flex-wrap">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                      Investigators:
                    </span>
                    <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full">
                      <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-mono text-label-mono">
                        AS
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        {"Dr. Ananya Sen "}
                        <span className="text-on-surface-variant font-label-mono text-label-mono">
                          (PI, Scientist-F)
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full">
                      <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-mono text-label-mono">
                        SR
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-medium">
                        {"Dr. S. K. Ramanathan "}
                        <span className="text-on-surface-variant font-label-mono text-label-mono">
                          (Co-PI)
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-title-md text-body-sm font-semibold hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm" type="button">
                      {" "}
                      <span>
                        Open in NPDC
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[17px]">
                        open_in_new
                      </span>
                      {" "}
                    </button>
                    <button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 text-on-surface font-title-md text-body-sm hover:bg-surface-container transition-all flex items-center gap-1.5" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[17px]">
                        lock_open
                      </span>
                      {" "}
                      <span>
                        Request Access
                      </span>
                      {" "}
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 text-on-surface font-body-sm hover:bg-surface-container transition-all flex items-center gap-1" title="Copy DOI Citation" type="button" onClick={(e)=>window.__pol(e,"navigator.clipboard.writeText('10.5194/npdc-2024-katabatic-042'); this.innerText='DOI Copied!';")}>
                      {" "}
                      <span className="material-symbols-outlined text-[17px]">
                        format_quote
                      </span>
                      {" "}
                      <span>
                        Cite
                      </span>
                      {" "}
                    </button>
                    <button className="p-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" title="Embed Dataset Widget" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        code
                      </span>
                      {" "}
                    </button>
                    <button className="p-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" title="Share Dataset" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        share
                      </span>
                      {" "}
                    </button>
                    <button className="p-2 rounded-lg bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" title="Bookmark" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        bookmark_border
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="w-full bg-surface-container-lowest rounded-2xl p-4 lg:p-5 border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_2px_12px_rgba(11,31,58,0.02)]">
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-transform active:scale-95 shadow-sm" id="audio-play-btn" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        play_arrow
                      </span>
                      {" "}
                    </button>
                    <div className="flex flex-col">
                      <span className="font-title-md text-body-sm text-on-surface font-semibold flex items-center gap-1.5">
                        {" Listen to AI Data Summary "}
                        <span className="font-label-mono text-label-mono font-normal text-on-surface-variant">
                          (3 min 14 sec)
                        </span>
                        {" "}
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        Generated by POLARIS Grounded Science AI from NPDC-TR-2024 technical report
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 w-full max-w-md hidden sm:flex items-center gap-1 h-8 px-4 bg-surface-container-low/60 rounded-xl">
                    <div className="w-1 h-3 bg-primary/60 rounded-full" />
                    <div className="w-1 h-5 bg-primary/80 rounded-full" />
                    <div className="w-1 h-2 bg-primary/40 rounded-full" />
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <div className="w-1 h-4 bg-primary/70 rounded-full" />
                    <div className="w-1 h-7 bg-primary rounded-full" />
                    <div className="w-1 h-5 bg-primary/80 rounded-full" />
                    <div className="w-1 h-3 bg-primary/50 rounded-full" />
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <div className="w-1 h-8 bg-primary-container rounded-full" />
                    <div className="w-1 h-4 bg-primary/60 rounded-full" />
                    <div className="w-1 h-3 bg-primary/40 rounded-full" />
                    <div className="w-1 h-6 bg-primary/80 rounded-full" />
                    <div className="w-1 h-2 bg-primary/30 rounded-full" />
                    <div className="w-1 h-5 bg-primary/70 rounded-full" />
                    <div className="w-1 h-7 bg-primary rounded-full" />
                    <div className="w-1 h-4 bg-primary/60 rounded-full" />
                    <div className="w-1 h-3 bg-primary/40 rounded-full" />
                    <div className="w-1 h-5 bg-primary/70 rounded-full" />
                    <div className="w-1 h-2 bg-primary/30 rounded-full" />
                    <div className="w-1 h-4 bg-primary/50 rounded-full" />
                    <div className="w-1 h-6 bg-primary/80 rounded-full" />
                    <div className="w-1 h-3 bg-primary/40 rounded-full" />
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Speed:
                    </span>
                    <button className="px-2 py-1 rounded bg-surface-container font-label-md text-label-md text-primary font-bold" type="button">
                      1.0x
                    </button>
                    <button className="px-2 py-1 rounded bg-surface-container-low font-label-md text-label-md text-on-surface-variant hover:text-on-surface" type="button">
                      1.25x
                    </button>
                  </div>
                </div>
              </section>
              <section className="border-b border-outline-variant/30">
                <div className="flex items-center gap-2 overflow-x-auto pb-1" role="tablist">
                  <button aria-selected="false" className="px-4 py-3 font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2" role="tab" type="button">
                    {" "}
                    <span>
                      Overview
                    </span>
                    {" "}
                  </button>
                  <button aria-selected="true" className="px-4 py-3 font-title-md text-body-sm text-primary font-bold border-b-2 border-primary -mb-px flex items-center gap-2" role="tab" type="button">
                    {" "}
                    <span>
                      Data Preview
                    </span>
                    {" "}
                    <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px]">
                      VERIFIED 10Hz
                    </span>
                    {" "}
                  </button>
                  <button aria-selected="false" className="px-4 py-3 font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2" role="tab" type="button">
                    {" "}
                    <span>
                      Charts & Telemetry
                    </span>
                    {" "}
                  </button>
                  <button aria-selected="false" className="px-4 py-3 font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2" role="tab" type="button">
                    {" "}
                    <span>
                      Metadata & Lineage
                    </span>
                    {" "}
                  </button>
                  <button aria-selected="false" className="px-4 py-3 font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2" role="tab" type="button">
                    {" "}
                    <span>
                      Related Work
                    </span>
                    {" "}
                  </button>
                </div>
              </section>
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-8 flex flex-col gap-space-xl">
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] flex flex-col gap-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant/20">
                      <div className="flex flex-col">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          Processed Flux Observation Stream
                        </h3>
                        <span className="font-label-mono text-label-mono text-on-surface-variant mt-0.5">
                          Showing 5 of 14,400 observations (Filtered: Station Tower 1 - Maitri 30m Mast)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-2.5 top-2 text-[18px] text-on-surface-variant">
                            filter_list
                          </span>
                          <input className="pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-low text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary w-40 sm:w-48 font-body-sm" placeholder="Search UTC / flags..." type="text" />
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-title-md text-body-sm text-on-surface flex items-center gap-1.5 transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[17px]">
                            view_column
                          </span>
                          {" "}
                          <span>
                            Columns
                          </span>
                          {" "}
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-primary-container/10 text-primary font-title-md text-body-sm font-semibold hover:bg-primary-container/20 flex items-center gap-1.5 transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[17px]">
                            download
                          </span>
                          {" "}
                          <span>
                            CSV Sample
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <div className="w-full overflow-x-auto rounded-xl">
                      <table className="w-full text-left font-body-sm text-body-sm border-collapse">
                        <thead>
                          <tr className="bg-surface-container-low text-on-surface-variant font-label-mono text-label-mono uppercase tracking-wider">
                            <th className="py-3 px-3">
                              Timestamp (UTC)
                            </th>
                            <th className="py-3 px-3">
                              Sonic Speed (m/s)
                            </th>
                            <th className="py-3 px-3">
                              Direction (°)
                            </th>
                            <th className="py-3 px-3">
                              Heat Flux (W/m²)
                            </th>
                            <th className="py-3 px-3">
                              Air Temp (°C)
                            </th>
                            <th className="py-3 px-3">
                              u* (m/s)
                            </th>
                            <th className="py-3 px-3 text-right">
                              QC Flag
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/15 text-on-surface font-body-sm">
                          <tr className="hover:bg-surface-container-low/40 transition-colors">
                            <td className="py-3 px-3 font-label-mono text-label-mono font-medium text-primary">
                              2024-01-14T02:00:00Z
                            </td>
                            <td className="py-3 px-3 font-semibold">
                              21.4
                            </td>
                            <td className="py-3 px-3 text-on-surface-variant">
                              {"168° "}
                              <span className="font-label-mono text-[10px] text-outline">
                                (SSE)
                              </span>
                            </td>
                            <td className="py-3 px-3 text-secondary-container-on font-mono">
                              -42.8
                            </td>
                            <td className="py-3 px-3">
                              -18.4
                            </td>
                            <td className="py-3 px-3 font-mono">
                              0.84
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label-mono bg-tertiary/10 text-tertiary font-semibold">
                                0 (Passed)
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/40 transition-colors">
                            <td className="py-3 px-3 font-label-mono text-label-mono font-medium text-primary">
                              2024-01-14T02:10:00Z
                            </td>
                            <td className="py-3 px-3 font-semibold">
                              23.8
                            </td>
                            <td className="py-3 px-3 text-on-surface-variant">
                              {"172° "}
                              <span className="font-label-mono text-[10px] text-outline">
                                (SSE)
                              </span>
                            </td>
                            <td className="py-3 px-3 text-secondary-container-on font-mono">
                              -48.2
                            </td>
                            <td className="py-3 px-3">
                              -18.9
                            </td>
                            <td className="py-3 px-3 font-mono">
                              0.92
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label-mono bg-tertiary/10 text-tertiary font-semibold">
                                0 (Passed)
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/40 transition-colors bg-secondary-container/10">
                            <td className="py-3 px-3 font-label-mono text-label-mono font-medium text-primary">
                              2024-01-14T02:20:00Z
                            </td>
                            <td className="py-3 px-3 font-semibold text-primary">
                              28.6
                            </td>
                            <td className="py-3 px-3 text-on-surface-variant">
                              {"175° "}
                              <span className="font-label-mono text-[10px] text-outline">
                                (S)
                              </span>
                            </td>
                            <td className="py-3 px-3 text-secondary-container-on font-mono">
                              -56.1
                            </td>
                            <td className="py-3 px-3">
                              -19.6
                            </td>
                            <td className="py-3 px-3 font-mono">
                              1.15
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label-mono bg-tertiary/10 text-tertiary font-semibold">
                                0 (Passed)
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/40 transition-colors bg-secondary-container/20">
                            <td className="py-3 px-3 font-label-mono text-label-mono font-medium text-primary">
                              2024-01-14T02:30:00Z
                            </td>
                            <td className="py-3 px-3 font-semibold text-primary">
                              31.2
                            </td>
                            <td className="py-3 px-3 text-on-surface-variant">
                              {"174° "}
                              <span className="font-label-mono text-[10px] text-outline">
                                (S)
                              </span>
                            </td>
                            <td className="py-3 px-3 text-secondary-container-on font-mono">
                              -62.4
                            </td>
                            <td className="py-3 px-3">
                              -20.1
                            </td>
                            <td className="py-3 px-3 font-mono">
                              1.28
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label-mono bg-tertiary/10 text-tertiary font-semibold">
                                0 (Passed)
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/40 transition-colors">
                            <td className="py-3 px-3 font-label-mono text-label-mono font-medium text-primary">
                              2024-01-14T02:40:00Z
                            </td>
                            <td className="py-3 px-3 font-semibold">
                              27.5
                            </td>
                            <td className="py-3 px-3 text-on-surface-variant">
                              {"170° "}
                              <span className="font-label-mono text-[10px] text-outline">
                                (SSE)
                              </span>
                            </td>
                            <td className="py-3 px-3 text-secondary-container-on font-mono">
                              -53.0
                            </td>
                            <td className="py-3 px-3">
                              -19.4
                            </td>
                            <td className="py-3 px-3 font-mono">
                              1.06
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label-mono bg-tertiary/10 text-tertiary font-semibold">
                                0 (Passed)
                              </span>
                              {" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-outline-variant/20 font-label-mono text-label-mono text-on-surface-variant">
                      <span>
                        Showing 1–5 of 14,400 rows
                      </span>
                      <span className="text-primary font-medium">
                        Full dataset available in NetCDF-4 format (4.82 GB) via OPeNDAP & NPDC Core
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] flex flex-col gap-space-md">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant/20">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                          <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Katabatic Velocity & Turbulent Heat Flux Correlation
                          </h3>
                        </div>
                        <span className="font-label-mono text-label-mono text-on-surface-variant mt-0.5">
                          Dual-Axis 24h Diurnal Boundary Layer Cycle (CSAT3B 30m Level)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 font-label-mono text-label-mono">
                          <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-sm" type="button">
                            Wind vs Flux
                          </button>
                          <button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface" type="button">
                            Temp vs Grad
                          </button>
                        </div>
                        <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 font-label-mono text-label-mono">
                          <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-bold" type="button">
                            24H Event
                          </button>
                          <button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface" type="button">
                            7D Storm
                          </button>
                          <button className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface" type="button">
                            90D Winter
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-2 text-label-mono font-label-mono">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-0.5 bg-primary inline-block" />
                          <span className="text-on-surface font-medium">
                            Sonic Wind Speed (m/s) [Left Axis]
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-0.5 bg-secondary inline-block border-t border-dashed border-secondary" />
                          <span className="text-on-surface-variant font-medium">
                            Turbulent Sensible Heat Flux (W/m²) [Right Axis]
                          </span>
                        </div>
                      </div>
                      <span className="text-primary font-semibold bg-secondary-container/40 px-2 py-0.5 rounded">
                        Event: Antarctic Polar Night Inversion Break
                      </span>
                    </div>
                    <div className="w-full bg-surface-container-low/40 rounded-xl p-4 relative overflow-hidden">
                      <svg aria-label="Line chart showing Katabatic wind speed and sensible heat flux over 24 hours" className="w-full h-auto overflow-visible" viewBox="0 0 760 300">
                        <defs>
                          <linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
                            {" "}
                            <stop offset="0%" stopColor="#006070" stopOpacity="0.25" />
                            {" "}
                            <stop offset="100%" stopColor="#006070" stopOpacity="0.0" />
                            {" "}
                          </linearGradient>
                          <linearGradient id="fluxAreaGrad" x1="0" x2="0" y1="1" y2="0">
                            {" "}
                            <stop offset="0%" stopColor="#41636e" stopOpacity="0.15" />
                            {" "}
                            <stop offset="100%" stopColor="#41636e" stopOpacity="0.0" />
                            {" "}
                          </linearGradient>
                        </defs>
                        <line stroke="#bec8cb" strokeDasharray="3 3" strokeOpacity="0.25" x1="50" x2="720" y1="40" y2="40" />
                        <line stroke="#bec8cb" strokeDasharray="3 3" strokeOpacity="0.25" x1="50" x2="720" y1="90" y2="90" />
                        <line stroke="#bec8cb" strokeOpacity="0.3" x1="50" x2="720" y1="140" y2="140" />
                        <line stroke="#bec8cb" strokeDasharray="3 3" strokeOpacity="0.25" x1="50" x2="720" y1="190" y2="190" />
                        <line stroke="#bec8cb" strokeOpacity="0.25" x1="50" x2="720" y1="240" y2="240" />
                        <text fill="#3f484b" fontFamily="Inter" fontSize="10" textAnchor="end" x="40" y="44">
                          40
                        </text>
                        <text fill="#3f484b" fontFamily="Inter" fontSize="10" textAnchor="end" x="40" y="94">
                          30
                        </text>
                        <text fill="#3f484b" fontFamily="Inter" fontSize="10" textAnchor="end" x="40" y="144">
                          20
                        </text>
                        <text fill="#3f484b" fontFamily="Inter" fontSize="10" textAnchor="end" x="40" y="194">
                          10
                        </text>
                        <text fill="#3f484b" fontFamily="Inter" fontSize="10" textAnchor="end" x="40" y="244">
                          0
                        </text>
                        <text fill="#41636e" fontFamily="Inter" fontSize="10" textAnchor="start" x="730" y="44">
                          -80
                        </text>
                        <text fill="#41636e" fontFamily="Inter" fontSize="10" textAnchor="start" x="730" y="94">
                          -60
                        </text>
                        <text fill="#41636e" fontFamily="Inter" fontSize="10" textAnchor="start" x="730" y="144">
                          -40
                        </text>
                        <text fill="#41636e" fontFamily="Inter" fontSize="10" textAnchor="start" x="730" y="194">
                          -20
                        </text>
                        <text fill="#41636e" fontFamily="Inter" fontSize="10" textAnchor="start" x="730" y="244">
                          0
                        </text>
                        <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="60" y="260">
                          00:00
                        </text>
                        <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="170" y="260">
                          04:00
                        </text>
                        <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="280" y="260">
                          08:00
                        </text>
                        <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="390" y="260">
                          12:00
                        </text>
                        <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="500" y="260">
                          16:00
                        </text>
                        <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="610" y="260">
                          20:00
                        </text>
                        <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="700" y="260">
                          24:00
                        </text>
                        <path d="M 60,195 Q 110,170 170,65 T 280,120 T 390,210 T 500,185 T 610,160 T 710,180 L 710,240 L 60,240 Z" fill="url(#fluxAreaGrad)" />
                        <path d="M 60,195 Q 110,170 170,65 T 280,120 T 390,210 T 500,185 T 610,160 T 710,180" fill="none" stroke="#41636e" strokeDasharray="4 4" strokeWidth="2" />
                        <path d="M 60,150 Q 110,135 170,50 T 280,105 T 390,190 T 500,165 T 610,140 T 710,155 L 710,240 L 60,240 Z" fill="url(#primaryAreaGrad)" />
                        <path d="M 60,150 Q 110,135 170,50 T 280,105 T 390,190 T 500,165 T 610,140 T 710,155" fill="none" stroke="#006070" strokeWidth="2.5" />
                        <circle cx="170" cy="50" fill="#006070" r="5" stroke="#ffffff" strokeWidth="2" />
                        <line stroke="#006070" strokeWidth="1.2" x1="170" x2="170" y1="50" y2="18" />
                        <rect fill="#071c36" fillOpacity="0.9" height="28" rx="6" width="220" x="180" y="10" />
                        <text fill="#ffffff" fontFamily="Inter" fontSize="10" fontWeight="600" x="188" y="24">
                          Peak Katabatic Jet: 38.2 m/s
                        </text>
                        <text fill="#a9edff" fontFamily="Inter" fontSize="9" x="188" y="34">
                          Recorded 04:30 UTC | Mast Tower 1
                        </text>
                      </svg>
                    </div>
                    <div className="flex items-center justify-between text-body-sm text-on-surface-variant font-body-sm pt-1">
                      <span className="flex items-center gap-1.5">
                        {" "}
                        <span className="material-symbols-outlined text-[17px] text-tertiary">
                          info
                        </span>
                        {" Despiking filter applied via 3-sigma velocity thresholding. Boundary layer height Estimated zi: 120m AGL. "}
                      </span>
                      <Link className="text-primary hover:underline font-title-md font-semibold text-body-sm flex items-center gap-1" to="/account">
                        {" "}
                        <span>
                          View Full Telemetry Dashboard
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-space-lg">
                  <div className="flex flex-col bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] overflow-hidden">
                    <div className="px-space-md py-3 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low/40">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          public
                        </span>
                        <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                          Collection sites
                        </h4>
                      </div>
                      <span className="font-label-mono text-label-mono text-tertiary font-bold bg-tertiary-container/10 px-2 py-0.5 rounded-full">
                        3 SENSORS
                      </span>
                    </div>
                    <div className="flex items-center justify-center bg-[#061426] p-0 overflow-hidden relative">
                      <div className="relative overflow-hidden bg-[#061426] flex items-center justify-center select-none" id="polaris-globe-mini-dataset" style={{"width": "400px", "height": "300px"}}>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" height="300" viewBox="0 0 400 300" width="400">
                          <circle cx="200" cy="150" fill="none" r="130" stroke="#1f314d" strokeDasharray="2 4" strokeWidth="1" />
                          <circle cx="200" cy="150" fill="none" r="95" stroke="#1f314d" strokeWidth="1" />
                          <circle cx="200" cy="150" fill="none" r="60" stroke="#1f314d" strokeDasharray="3 3" strokeWidth="1" />
                          <circle cx="200" cy="150" fill="none" r="25" stroke="#1f314d" strokeWidth="1" />
                          <line stroke="#1f314d" strokeDasharray="2 4" strokeWidth="1" x1="200" x2="200" y1="20" y2="280" />
                          <line stroke="#1f314d" strokeDasharray="2 4" strokeWidth="1" x1="70" x2="330" y1="150" y2="150" />
                          <line stroke="#1f314d" strokeDasharray="2 4" strokeWidth="1" x1="108" x2="292" y1="58" y2="242" />
                          <line stroke="#1f314d" strokeDasharray="2 4" strokeWidth="1" x1="108" x2="292" y1="242" y2="58" />
                          <path d="M 120,135 Q 160,110 205,118 T 260,140 Q 285,165 250,195 T 160,185 Z" fill="#0f2744" opacity="0.85" stroke="#1f7a8c" strokeWidth="1.2" />
                          <path d="M 170,130 Q 195,125 220,135 T 215,160 Q 185,160 170,130 Z" fill="#16395b" opacity="0.6" />
                          <circle className="animate-ping" cx="198" cy="138" fill="none" opacity="0.4" r="14" stroke="#83d2e6" strokeWidth="1" />
                          <circle cx="198" cy="138" fill="#a9edff" r="4" />
                          <circle cx="198" cy="138" fill="#48deab" r="3.5" />
                          <circle cx="210" cy="144" fill="#6afbc6" r="3" />
                          <circle cx="184" cy="150" fill="#83d2e6" r="3" />
                          <text fill="#83d2e6" fontFamily="Inter" fontSize="9" letterSpacing="1" x="14" y="24">
                            QUEEN MAUD LAND (70°45'S, 11°44'E)
                          </text>
                          <text fill="#a9ccd9" fontFamily="Inter" fontSize="8" x="14" y="38">
                            ELEV: 117m ASL | GRID: WGS 84 POLAR STEREOGRAPHIC
                          </text>
                        </svg>
                        <div className="absolute bottom-3 left-3 right-3 bg-[#071c36]/90 backdrop-blur-md rounded-lg p-2.5 border border-[#1f314d] text-left">
                          <div className="flex items-center justify-between text-[11px] font-label-mono text-[#a9edff] font-semibold mb-1">
                            <span className="flex items-center gap-1.5">
                              {" "}
                              <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
                              {" Maitri Station 30m Boundary Mast "}
                            </span>
                            <span className="text-[#83d2e6]">
                              70°45′57″ S
                            </span>
                          </div>
                          <div className="text-[10px] text-surface-container font-label-mono flex items-center justify-between">
                            <span>
                              CSAT3B 3D Sonic Anemometer
                            </span>
                            <span>
                              11°44′09″ E
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link className="px-4 py-3 bg-surface-container-low hover:bg-surface-container text-primary font-title-md text-body-sm font-semibold flex items-center justify-between transition-colors" to="/globe">
                      {" "}
                      <span className="flex items-center gap-1.5 font-label-mono text-label-mono">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-tertiary" />
                        {" 3 Collection Instruments Deployed "}
                      </span>
                      {" "}
                      <span className="flex items-center gap-1 font-body-sm text-body-sm text-primary">
                        {" "}
                        <span>
                          View on 3D Expedition Globe
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </span>
                      {" "}
                    </Link>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] flex flex-col gap-space-md">
                    <div className="flex items-center gap-2 pb-space-sm border-b border-outline-variant/20">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        verified
                      </span>
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                        Provenance & Standards
                      </h4>
                    </div>
                    <div className="flex flex-col gap-3 font-body-sm text-body-sm">
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono uppercase text-on-surface-variant">
                          Standard Compliance
                        </span>
                        <span className="font-medium text-on-surface mt-0.5">
                          ISO 19115-1:2014 & W3C DCAT-AP v2.1
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono uppercase text-on-surface-variant">
                          Curating Repository
                        </span>
                        <span className="font-medium text-on-surface mt-0.5">
                          National Polar Data Centre (NPDC), Vasco da Gama, Goa, India
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono uppercase text-on-surface-variant">
                          Instrument Stack
                        </span>
                        <ul className="list-disc list-inside text-on-surface-variant mt-1 space-y-0.5 font-body-sm">
                          <li>
                            Campbell Scientific CSAT3B 3D Sonic Anemometer
                          </li>
                          <li>
                            Kipp & Zonen CNR4 4-Component Net Radiometer
                          </li>
                          <li>
                            Vaisala HMP155 Platinum Resistance Temp/Humidity
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col pt-1">
                        <span className="font-label-mono text-label-mono uppercase text-on-surface-variant">
                          Quality Control Pipeline
                        </span>
                        <span className="text-on-surface-variant mt-0.5">
                          {" Tier-3 algorithmic despiking, coordinate tilt double rotation (Wilczak et al.), and turbulence Reynolds averaging block (10-min window). "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-1.5">
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          menu_book
                        </span>
                        {" Cite Dataset "}
                      </span>
                      <span className="font-label-mono text-[10px] uppercase text-on-surface-variant font-semibold bg-surface-container px-2 py-0.5 rounded">
                        APA Format
                      </span>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl text-on-surface font-body-sm text-body-sm leading-relaxed border border-outline-variant/20 select-all">
                      {" Sen, A., & Ramanathan, S. K. (2024). "}
                      <em>
                        High-Resolution Katabatic Wind Dynamics & Boundary Layer Turbulence Profile (Maitri Station, Queen Maud Land)
                      </em>
                      {" [Data set]. National Centre for Polar and Ocean Research (NCPOR), MoES. https://doi.org/10.5194/npdc-2024-katabatic-042 "}
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button className="px-3 py-2 rounded-lg bg-surface-container text-on-surface font-title-md text-body-sm hover:bg-surface-container-high transition-colors text-center" type="button" onClick={(e)=>window.__pol(e,"navigator.clipboard.writeText('Sen, A., & Ramanathan, S. K. (2024). High-Resolution Katabatic Wind Dynamics & Boundary Layer Turbulence Profile... https://doi.org/10.5194/npdc-2024-katabatic-042'); this.innerText='Copied!';")}>
                        {" Copy Citation "}
                      </button>
                      <button className="px-3 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm font-semibold hover:bg-primary transition-colors text-center" type="button" onClick={(e)=>window.__pol(e,"navigator.clipboard.writeText('@data{NPDC2024,\\n author = {Sen, Ananya and Ramanathan, S. K.},\\n title = {High-Resolution Katabatic Wind Dynamics},\\n year = {2024},\\n doi = {10.5194/npdc-2024-katabatic-042}\\n}'); this.innerText='Copied BibTeX!';")}>
                        {" Copy BibTeX "}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md pt-space-lg border-t border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-primary font-semibold">
                      Science Cross-Referencing
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-0.5">
                      Related Expeditions, Publications & Companion Data
                    </h3>
                  </div>
                  <Link className="hidden sm:flex items-center gap-1 font-title-md text-body-sm text-primary hover:underline font-semibold" to="/data">
                    {" "}
                    <span>
                      Explore all atmospheric datasets
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                    {" "}
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,31,58,0.06)] transition-all flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-primary font-bold bg-primary-container/10 px-2 py-0.5 rounded">
                          EXPEDITION
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          2023 - 2024
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold">
                        43rd Indian Antarctic Expedition (Maitri Overwinter)
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {" Overwintering atmospheric science campaign deployed across Maitri Station, Schirmacher Oasis moraines, and the polar ice cap margin. "}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-outline-variant/15 mt-3">
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        48 Team Members
                      </span>
                      <Link className="text-primary font-semibold text-body-sm hover:underline flex items-center gap-1" to="/expeditions/soe-01">
                        {" "}
                        <span>
                          Expedition Log
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,31,58,0.06)] transition-all flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-secondary font-bold bg-secondary-container/40 px-2 py-0.5 rounded">
                          PEER-REVIEWED
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          JGR: Atmos 2024
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold">
                        High-Frequency Turbulent Heat & Momentum Fluxes Over Antarctic Moraine Formations
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {" Comprehensive study detailing boundary layer decoupling and local thermal advection over ice-free bedrock using this dataset. "}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-outline-variant/15 mt-3">
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        DOI: 10.1029/2024JD04112
                      </span>
                      <a className="text-primary font-semibold text-body-sm hover:underline flex items-center gap-1" href="#" onClick={(e)=>e.preventDefault()}>
                        {" "}
                        <span>
                          Read Paper
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          open_in_new
                        </span>
                        {" "}
                      </a>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md border border-outline-variant/30 shadow-[0_2px_12px_rgba(11,31,58,0.03)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,31,58,0.06)] transition-all flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-tertiary font-bold bg-tertiary-container/10 px-2 py-0.5 rounded">
                          COMPANION DATA
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          IndARC Svalbard
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-on-surface font-bold">
                        IndARC Kongsfjorden Mooring Deep Salinity & Temperature Time-Series
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {" Sub-sea polar water mass dynamics benchmark measuring Atlantic water advection into the Arctic fjord system. "}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-outline-variant/15 mt-3">
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        NPDC-ARC-2023-OCN
                      </span>
                      <Link className="text-primary font-semibold text-body-sm hover:underline flex items-center gap-1" to="/data">
                        {" "}
                        <span>
                          View Dataset
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          arrow_forward
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {" "}
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(7,28,54,0.02)] mt-space-xl">
        <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin pt-space-xl pb-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter lg:gap-space-xl mb-space-xl">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    ac_unit
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Headland Sada, Vasco-da-Gama, Goa, India - 403804.
              </p>
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                Open Polar Data & Outreach Gateway
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-title-md text-title-md text-on-surface mb-space-md">
                Scientific Divisions
              </h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Antarctic Operations & Science
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Arctic Environment & Cryosphere
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Southern Ocean Paleoclimatology
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Himalayan Cryosphere Observatories
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Ocean Drilling & Deep Sea Exploration
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-title-md text-title-md text-on-surface mb-space-md">
                Permanent Stations
              </h3>
              <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center justify-between">
                  <span>
                    Maitri (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">
                    ACTIVE 365D
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Bharati (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">
                    ACTIVE 365D
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himadri (Svalbard Arctic)
                  </span>
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">
                    SEASONAL
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himansh (Spiti Himalaya)
                  </span>
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">
                    ACTIVE
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    IndARC (Kongsfjorden Mooring)
                  </span>
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">
                    SUBSEA
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="font-title-md text-title-md text-on-surface mb-space-md">
                Outreach & Compliance
              </h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Antarctic Treaty System & Protocol
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Environmental Protection Guidelines
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Student Fellowship & Polar School
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/data">
                    National Polar Data Policy (MoES)
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Right to Information (RTI) Cell
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-space-lg bg-surface-container-low/50 rounded-xl px-space-md py-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
            <p>
              © 2025 National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Government of India.
            </p>
            <p className="text-right">
              Notice: Telemetry, ice models, and geophysical layers reflect near real-time field calibration.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
