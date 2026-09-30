import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_research_station_detail_himadri_arctic_research_base_stations_id/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// Simple interactive audio bar behavior simulation\n  (function() {\n    var isPlaying = false;\n    var playBtn = document.getElementById('audio-toggle-btn');\n    var icon = document.getElementById('audio-icon');\n    var progressBar = document.getElementById('audio-progress-bar');\n    var speedBtn = document.getElementById('speed-toggle');\n\n    if (playBtn && icon && progressBar) {\n      playBtn.addEventListener('click', function() {\n        isPlaying = !isPlaying;\n        if (isPlaying) {\n          icon.textContent = 'pause';\n          progressBar.style.width = '65%';\n        } else {\n          icon.textContent = 'play_arrow';\n          progressBar.style.width = '25%';\n        }\n      });\n    }\n\n    if (speedBtn) {\n      var speeds = ['1.0x', '1.25x', '1.5x'];\n      var curIdx = 0;\n      speedBtn.addEventListener('click', function() {\n        curIdx = (curIdx + 1) % speeds.length;\n        speedBtn.textContent = speeds[curIdx];\n      });\n    }\n  })();";

export default function StationDetailPage() {
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
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="stations" href="#" onClick={(e)=>e.preventDefault()}>
              Stations
            </a>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="live-tracker" to="/live/soe-01">
              Live Tracker
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" data-path="datasets" to="/data">
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
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-mono text-label-mono text-secondary mb-space-md">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                  {" "}
                  <span className="material-symbols-outlined text-[14px]">
                    home
                  </span>
                  {"Home "}
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" to="/base-stations/himadri">
                  Research Stations
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-on-surface font-semibold">
                  Himadri (Ny-Ålesund, Svalbard)
                </span>
              </nav>
              <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono font-semibold tracking-wider">
                  {" "}
                  <span className="material-symbols-outlined text-[14px]">
                    flag
                  </span>
                  {" INDIAN ARCTIC RESEARCH BASE • ESTD. 2008 "}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  {" STATUS: ACTIVE SEASONAL (SUMMER CONTINGENT ON-SITE) "}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                  {" "}
                  <span className="material-symbols-outlined text-[13px]">
                    verified
                  </span>
                  {" NCPOR MoES Validated "}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-xl">
                <div className="lg:col-span-8 flex flex-col">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-headline-md tracking-tight mb-space-sm">
                    {" Himadri Arctic Research Station "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    {" Ny-Ålesund, Spitsbergen, Svalbard "}
                    <span className="font-semibold text-primary">
                      (78°55'N, 11°56'E)
                    </span>
                    {" — India's northernmost permanent scientific research outpost in the high Arctic fjord ecosystem, monitoring cryospheric retreat and marine atmospheric interfaces. "}
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2.5 justify-end">
                  <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-all shadow-sm" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      public
                    </span>
                    {" View on 3D Globe "}
                  </button>
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <button className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm hover:bg-secondary-container transition-all" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        360
                      </span>
                      {" 360° Tour "}
                    </button>
                    <button className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm hover:bg-secondary-container transition-all" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        download
                      </span>
                      {" Factsheet PDF "}
                    </button>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary font-label-md text-label-md hover:bg-surface-container transition-all" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[15px]">
                      share
                    </span>
                    {" Share Station Dossier "}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between mb-space-sm text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      location_on
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      GEO-POINT
                    </span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono uppercase text-secondary font-medium tracking-wide">
                      Coordinates
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight mt-0.5">
                      78°55′ N, 11°56′ E
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Kongsfjorden Fjord Coast, Spitsbergen
                    </p>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between mb-space-sm text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      terrain
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      ELEVATION
                    </span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono uppercase text-secondary font-medium tracking-wide">
                      Altitude & Terrain
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight mt-0.5">
                      12 m a.s.l.
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Glaciated Moraine & Continuous Permafrost
                    </p>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between mb-space-sm text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      history_edu
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      COMMISSIONED
                    </span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono uppercase text-secondary font-medium tracking-wide">
                      Established
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight mt-0.5">
                      02 July 2008
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      16+ Years Continuous Monitoring at 79°N
                    </p>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between mb-space-sm text-tertiary">
                    <span className="material-symbols-outlined text-[24px]">
                      satellite_alt
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary font-semibold flex items-center gap-1">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      {"ONLINE "}
                    </span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono uppercase text-secondary font-medium tracking-wide">
                      Field Deployment
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight mt-0.5">
                      8 Scientists On-Site
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      In-Field Ops Active • Ka-Band Uplink Normal
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-surface-container p-space-md lg:p-space-lg flex flex-col md:flex-row items-center gap-space-md shadow-sm">
                <button className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 hover:bg-primary-container transition-transform active:scale-95 shadow-sm" id="audio-toggle-btn" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[24px]" id="audio-icon">
                    play_arrow
                  </span>
                  {" "}
                </button>
                <div className="flex-1 w-full min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-title-md text-title-md text-on-surface">
                        Listen to AI Station Summary
                      </span>
                      <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">
                        2 min 40 sec
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-0.5 rounded bg-surface-container-lowest font-label-mono text-label-mono text-primary font-semibold hover:bg-surface-container-highest transition-colors" id="speed-toggle" type="button">
                        1.0x
                      </button>
                      <span className="font-label-mono text-label-mono text-secondary">
                        NCPOR Polar Voice Engine
                      </span>
                    </div>
                  </div>
                  <div className="h-6 w-full flex items-center gap-1 py-1">
                    <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden relative">
                      <div className="h-full bg-primary w-1/4 rounded-full transition-all duration-300" id="audio-progress-bar" />
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary shrink-0 pl-2">
                      00:40 / 02:40
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-1">
                    {" "}
                    <strong>
                      Mandate Snapshot:
                    </strong>
                    {" Coordinated international long-term observation of Svalbard fjords, permafrost thaw kinetics, aerosol radiative forcing, and cold-adapted microbial genomics in collaboration with the Kings Bay AS consortium. "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="h-24 w-full bg-surface" />
          <section className="w-full bg-surface">
            <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
                <div>
                  <span className="font-label-mono text-label-mono text-primary uppercase font-semibold tracking-wider">
                    Spatial Infrastructure
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Campus Schematics & Kongsfjorden Telemetry
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-mono text-label-mono text-secondary flex items-center gap-1">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    {"LIVE NY-ÅLESUND STREAM "}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col">
                  <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
                    <div>
                      <h3 className="font-title-md text-title-md text-on-surface">
                        Interactive Himadri Laboratory Campus
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Vector blueprint layout of Indian facilities within the Ny-Ålesund international research hub
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface-container-low rounded-lg p-1">
                      <button className="px-2 py-1 rounded bg-surface-container-lowest font-label-mono text-label-mono text-primary font-semibold shadow-xs" type="button">
                        ALL
                      </button>
                      <button className="px-2 py-1 rounded font-label-mono text-label-mono text-secondary hover:text-on-surface" type="button">
                        ATMOS
                      </button>
                      <button className="px-2 py-1 rounded font-label-mono text-label-mono text-secondary hover:text-on-surface" type="button">
                        MARINE
                      </button>
                      <div className="h-3 w-px bg-outline-variant mx-1" />
                      <button aria-label="Zoom in" className="w-6 h-6 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          add
                        </span>
                        {" "}
                      </button>
                      <button aria-label="Zoom out" className="w-6 h-6 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          remove
                        </span>
                        {" "}
                      </button>
                      <button aria-label="Reset map" className="w-6 h-6 flex items-center justify-center rounded hover:bg-surface-container text-on-surface" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          restart_alt
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  <div className="relative w-full h-[400px] bg-surface-container-low rounded-lg overflow-hidden flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full text-secondary-container/40" fill="none" preserveAspectRatio="none" viewBox="0 0 800 400">
                      <path d="M0,80 Q250,110 450,60 T800,90 L800,0 L0,0 Z" fill="#C1E6F3" opacity="0.35" />
                      <text fill="#41636E" fontFamily="Inter" fontSize="11" fontWeight="600" letterSpacing="0.1em" x="30" y="40">
                        KONGSFJORDEN WATERWAY (OPEN ARCTIC FJORD)
                      </text>
                      <path d="M-50,220 C200,260 500,180 850,240" stroke="#BEC8CB" strokeDasharray="4 4" strokeWidth="1" />
                      <path d="M-50,300 C300,340 600,280 850,330" stroke="#BEC8CB" strokeDasharray="4 4" strokeWidth="1" />
                      <path d="M 80,180 L 720,180" opacity="0.2" stroke="#006070" strokeLinecap="round" strokeWidth="3" />
                      <path d="M 280,180 L 280,320" opacity="0.15" stroke="#006070" strokeLinecap="round" strokeWidth="2" />
                      <path d="M 520,180 L 520,290" opacity="0.15" stroke="#006070" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <div className="relative z-10 w-full h-full p-6">
                      <div className="absolute top-[140px] left-[180px] w-48 h-28 bg-surface-container-lowest rounded-md shadow-md p-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-label-mono text-label-mono text-primary font-bold">
                            MODULE A-1
                          </span>
                          <span className="w-2 h-2 rounded-full bg-tertiary" />
                        </div>
                        <div>
                          <div className="font-label-md text-label-md text-on-surface font-semibold">
                            Himadri Main Station
                          </div>
                          <div className="font-label-mono text-label-mono text-secondary">
                            Aerosol Lab & Cleanroom
                          </div>
                        </div>
                        <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-4/5" />
                        </div>
                      </div>
                      <div className="absolute top-[230px] left-[390px] w-40 h-24 bg-surface-container-lowest rounded-md shadow-sm p-2.5 flex flex-col justify-between">
                        <span className="font-label-mono text-label-mono text-secondary font-semibold">
                          FACILITY C-4
                        </span>
                        <div>
                          <div className="font-label-md text-label-md text-on-surface font-semibold">
                            Cryo-Storage Core Vault
                          </div>
                          <div className="font-label-mono text-label-mono text-primary">
                            -20°C Verified
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[50px] left-[420px] w-44 h-20 bg-surface-container-lowest rounded-md shadow-sm p-2.5 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="font-label-mono text-label-mono text-primary font-bold">
                            MOORING LINK
                          </span>
                          <span className="material-symbols-outlined text-primary text-[14px]">
                            cell_tower
                          </span>
                        </div>
                        <div>
                          <div className="font-label-md text-label-md text-on-surface font-semibold">
                            IndARC Pier Receiver
                          </div>
                          <div className="font-label-mono text-label-mono text-secondary">
                            Hydrophone Uplink: Normal
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[210px] left-[70px] w-36 h-24 bg-surface-container-lowest rounded-md shadow-sm p-2.5 flex flex-col justify-between">
                        <span className="font-label-mono text-label-mono text-secondary font-semibold">
                          RESIDENCE H-2
                        </span>
                        <div>
                          <div className="font-label-md text-label-md text-on-surface font-semibold">
                            Living Quarters
                          </div>
                          <div className="font-label-mono text-label-mono text-secondary">
                            Capacity: 12 berths
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-[125px] left-[320px] z-30">
                        <button aria-label="View Atmospheric Lab details" className="relative flex items-center justify-center w-7 h-7 rounded-full bg-primary text-on-primary ring-4 ring-primary/20 shadow-md" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            science
                          </span>
                          {" "}
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-tertiary" />
                          {" "}
                        </button>
                        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 bg-surface-container-lowest p-3 rounded-lg shadow-xl text-left pointer-events-auto">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-label-mono text-label-mono font-bold text-primary">
                              LAB 01: ATMOSPHERIC
                            </span>
                            <span className="font-label-mono text-label-mono text-tertiary font-semibold">
                              ACTIVE
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface font-medium leading-tight mb-1">
                            Optical Particle Counter & CIMEL Sunphotometer
                          </p>
                          <p className="font-label-mono text-label-mono text-on-surface-variant">
                            Real-time black carbon & optical depth. PI: Dr. K. Nair (NCPOR)
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-[280px] left-[520px] z-20">
                        <button aria-label="View Cryosphere storage" className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-on-secondary shadow-sm hover:scale-110 transition-transform" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            ac_unit
                          </span>
                          {" "}
                        </button>
                      </div>
                      <div className="absolute top-[80px] left-[580px] z-20">
                        <button aria-label="View IndARC receiver" className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-on-secondary shadow-sm hover:scale-110 transition-transform" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            sensors
                          </span>
                          {" "}
                        </button>
                      </div>
                      <div className="absolute top-[170px] left-[80px] z-20">
                        <button aria-label="View Radome communications" className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-on-secondary shadow-sm hover:scale-110 transition-transform" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            wifi
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-space-md">
                    <div className="p-2 rounded bg-surface-container-low flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="font-label-mono text-label-mono text-on-surface font-medium">
                        Aerosol Lab
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <span className="font-label-mono text-label-mono text-on-surface font-medium">
                        Cryo Core Vault
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <span className="font-label-mono text-label-mono text-on-surface font-medium">
                        IndARC Marine Hub
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <span className="font-label-mono text-label-mono text-on-surface font-medium">
                        SatCom Radome
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-space-lg">
                  <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          air
                        </span>
                        <span className="font-title-md text-title-md text-on-surface">
                          Kongsfjorden Micro-Climate
                        </span>
                      </div>
                      <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-bold">
                        10-MIN SYNC
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-space-md">
                      <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                        -6.8°C
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        Wind chill -12.4°C
                      </span>
                    </div>
                    <div className="flex flex-col gap-2.5 font-body-sm text-body-sm">
                      <div className="flex items-center justify-between pb-2 border-b-0 bg-surface-container-low px-3 py-1.5 rounded">
                        <span className="text-on-surface-variant flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            navigation
                          </span>
                          {"Wind Velocity "}
                        </span>
                        <span className="font-semibold text-on-surface font-label-mono">
                          8 kt NW (Gusts 15 kt)
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-surface-container-low px-3 py-1.5 rounded">
                        <span className="text-on-surface-variant flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            water_drop
                          </span>
                          {"Relative Humidity "}
                        </span>
                        <span className="font-semibold text-on-surface font-label-mono">
                          82% (High Fjord Marine)
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-surface-container-low px-3 py-1.5 rounded">
                        <span className="text-on-surface-variant flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            speed
                          </span>
                          {"Atmospheric Pressure "}
                        </span>
                        <span className="font-semibold text-on-surface font-label-mono">
                          1012 hPa (Steady)
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-surface-container-low px-3 py-1.5 rounded">
                        <span className="text-on-surface-variant flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            light_mode
                          </span>
                          {"Solar Daylight "}
                        </span>
                        <span className="font-semibold text-primary font-label-mono">
                          24h Midnight Sun (Polar Day)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="rounded-xl overflow-hidden relative shadow-md bg-[#050B18] flex flex-col justify-between p-4" id="polaris-globe-mini-station" style={{"width": "360px", "height": "260px"}}>
                      <svg className="absolute inset-0 w-full h-full opacity-60" fill="none" viewBox="0 0 360 260">
                        <circle cx="180" cy="130" r="110" stroke="#1F7A8C" strokeDasharray="3 3" strokeWidth="0.8" />
                        <circle cx="180" cy="130" r="80" stroke="#1F7A8C" strokeWidth="1" />
                        <circle cx="180" cy="130" r="50" stroke="#1F7A8C" strokeDasharray="3 3" strokeWidth="0.8" />
                        <circle cx="180" cy="130" r="20" stroke="#83D2E6" strokeWidth="0.8" />
                        <line stroke="#1F7A8C" strokeDasharray="2 4" strokeWidth="0.5" x1="180" x2="180" y1="10" y2="250" />
                        <line stroke="#1F7A8C" strokeDasharray="2 4" strokeWidth="0.5" x1="60" x2="300" y1="130" y2="130" />
                        <path d="M140,85 Q160,95 185,90 T200,105 Q215,95 210,120 T190,140 Q170,135 155,120 Z" fill="#1F7A8C" fillOpacity="0.25" stroke="#83D2E6" strokeWidth="1" />
                        <circle className="animate-ping" cx="184" cy="94" fill="#48DEAB" opacity="0.75" r="5" />
                        <circle cx="184" cy="94" fill="#6AFBC6" r="3.5" />
                      </svg>
                      <div className="relative z-10 flex items-center justify-between text-on-primary">
                        <span className="font-label-mono text-label-mono text-[#83D2E6] tracking-wider uppercase font-semibold">
                          ARCTIC ORBITAL PROJECTION
                        </span>
                        <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-[#006070]/60 text-[#6AFBC6] font-mono">
                          78°55′N 11°56′E
                        </span>
                      </div>
                      <div className="relative z-10 self-center text-center">
                        <div className="px-2 py-1 rounded bg-[#071C36]/80 backdrop-blur-sm inline-block">
                          <span className="font-label-mono text-label-mono text-white font-semibold">
                            HIMADRI BASE (SVALBARD)
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10 flex items-center justify-between text-on-primary font-label-mono text-label-mono">
                        <span className="text-[#83D2E6]/80">
                          Range: 420 km LEO Alt
                        </span>
                        <span className="text-[#6AFBC6] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6AFBC6]" />
                          CALIBRATED
                        </span>
                      </div>
                    </div>
                    <button className="mt-space-sm inline-flex items-center gap-1.5 text-primary hover:text-primary-container font-title-md text-title-md font-semibold transition-all" type="button">
                      {" Open Fullscreen Globe at Himadri Coordinates "}
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-24 w-full bg-surface" />
          <section className="w-full bg-surface-container-lowest py-space-xl">
            <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
                <div>
                  <span className="font-label-mono text-label-mono text-primary uppercase font-semibold tracking-wider">
                    Field Journal & Video Briefs
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Station Life & Field Operations
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono font-semibold">
                  {" "}
                  <span className="material-symbols-outlined text-[15px]">
                    videocam
                  </span>
                  {" OBSERVATIONS FROM 79° NORTH "}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <div className="rounded-xl bg-surface p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
                  <div>
                    <div className="w-full h-44 rounded-lg bg-surface-container-high overflow-hidden relative mb-space-md flex items-center justify-center">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 320 180">
                        <rect fill="#E7EEFF" height="180" width="320" />
                        <path d="M0,110 C80,105 160,115 320,108 L320,180 L0,180 Z" fill="#C1E6F3" />
                        <path d="M120,110 L220,110 L205,130 L135,130 Z" fill="#006070" />
                        <rect fill="#41636E" height="25" rx="2" width="40" x="150" y="85" />
                        <line stroke="#071C36" strokeWidth="2" x1="170" x2="170" y1="85" y2="60" />
                        <circle cx="80" cy="120" fill="#007F5D" r="10" />
                        <line stroke="#007F5D" strokeDasharray="3 3" strokeWidth="2" x1="80" x2="80" y1="130" y2="165" />
                        <rect fill="#004E5B" height="15" rx="1" width="12" x="74" y="160" />
                      </svg>
                      <span className="absolute top-3 right-3 font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-semibold">
                        3:12 MIN
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/90 text-on-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                          <span className="material-symbols-outlined text-[24px]">
                            play_arrow
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-space-xs">
                      <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                        Marine Operations
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Fjord Depth 205m
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">
                      Rigging IndARC Moorings in Kongsfjorden Waters
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Deploying CTD sensors and acoustic Doppler current profilers before early pack-ice consolidation in Kongsfjorden.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between text-primary font-title-md text-title-md font-semibold">
                    <span className="text-body-sm text-secondary">
                      Expedition Field Log #44
                    </span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
                  <div>
                    <div className="w-full h-44 rounded-lg bg-surface-container-high overflow-hidden relative mb-space-md flex items-center justify-center">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 320 180">
                        <rect fill="#E7EEFF" height="180" width="320" />
                        <polygon fill="#D6E3FF" points="160,30 60,180 260,180" />
                        <polygon fill="#C8DBFE" points="160,30 210,180 260,180" />
                        <line stroke="#006070" strokeWidth="2" x1="160" x2="160" y1="30" y2="15" />
                        <circle cx="160" cy="15" fill="#007F5D" r="3" />
                        <path d="M20,140 Q80,120 140,140 T260,130" opacity="0.8" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="6" />
                      </svg>
                      <span className="absolute top-3 right-3 font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-semibold">
                        2:45 MIN
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/90 text-on-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                          <span className="material-symbols-outlined text-[24px]">
                            play_arrow
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-space-xs">
                      <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                        Atmospheric Science
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Zeppelin Station 474m
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">
                      Winter Pack-Ice Drifts along Zeppelin Mountain
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Calibrating greenhouse and trace gas analyzers at the Ny-Ålesund international research consortium.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between text-primary font-title-md text-title-md font-semibold">
                    <span className="text-body-sm text-secondary">
                      Expedition Field Log #47
                    </span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
                  <div>
                    <div className="w-full h-44 rounded-lg bg-surface-container-high overflow-hidden relative mb-space-md flex items-center justify-center">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 320 180">
                        <rect fill="#E7EEFF" height="180" width="320" />
                        <rect fill="#DEE8FF" height="120" rx="4" width="240" x="40" y="30" />
                        <rect fill="#C1E6F3" height="40" rx="2" width="60" x="70" y="50" />
                        <rect fill="#006070" height="30" rx="3" width="110" x="120" y="110" />
                        <circle cx="140" cy="100" fill="#007F5D" r="6" />
                        <rect fill="#41636E" height="18" rx="1" width="24" x="180" y="85" />
                      </svg>
                      <span className="absolute top-3 right-3 font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-semibold">
                        4:10 MIN
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/90 text-on-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                          <span className="material-symbols-outlined text-[24px]">
                            play_arrow
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-space-xs">
                      <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                        Living at 79°N
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Base Protocol
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">
                      Midnight Sun Daily Life at Himadri Wardroom
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Logistics coordination, polar bear safety briefings, and daily collaborative planning with Scandinavian scientists.
                    </p>
                  </div>
                  <div className="pt-space-md flex items-center justify-between text-primary font-title-md text-title-md font-semibold">
                    <span className="text-body-sm text-secondary">
                      Expedition Field Log #51
                    </span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-24 w-full bg-surface" />
          <section className="w-full bg-surface">
            <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl">
                <div className="lg:col-span-6 flex flex-col">
                  <div className="flex items-center justify-between mb-space-md">
                    <div>
                      <span className="font-label-mono text-label-mono text-primary uppercase font-semibold tracking-wider">
                        Field Deployments
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Active & Recent Expeditions
                      </h2>
                    </div>
                    <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                      ARCHIVE (2008–24) →
                    </a>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-semibold tracking-wider flex items-center gap-1">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed" />
                          {"ACTIVE IN FIELD "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          BATCH #17-S
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">
                        17th Indian Arctic Expedition (Summer 2024)
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                        {" Investigating glacier meltwater chemical flux into Kongsfjorden, fjord-shelf water exchange, and microbial adaptation kinetics under high polar day radiation. "}
                      </p>
                      <div className="flex flex-wrap items-center gap-space-md mt-space-md pt-space-sm font-label-mono text-label-mono text-secondary bg-surface-container-low p-2 rounded-lg">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">
                            group
                          </span>
                          6 Team Members
                        </span>
                        <span>
                          •
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">
                            timer
                          </span>
                          Day 42 of 60
                        </span>
                        <span>
                          •
                        </span>
                        <span className="text-primary font-semibold">
                          Lead: NCPOR Cryosphere Wing
                        </span>
                      </div>
                    </div>
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-secondary font-semibold tracking-wider">
                          {" COMPLETED (OCT 2023) "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          INDARC-REV-IX
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">
                        Winter IndARC Mooring Service Expedition
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                        {" Kongsfjorden deep hydrographic array sensor recalibration, acoustic release testing, and acoustic data extraction for the 2022-2023 seasonal sea ice cycle. "}
                      </p>
                      <div className="flex flex-wrap items-center gap-space-md mt-space-md pt-space-sm font-label-mono text-label-mono text-secondary bg-surface-container-low p-2 rounded-lg">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">
                            anchor
                          </span>
                          Depth: 192m Recovered
                        </span>
                        <span>
                          •
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">
                            fact_check
                          </span>
                          100% Data Recovered
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 flex flex-col">
                  <div className="flex items-center justify-between mb-space-md">
                    <div>
                      <span className="font-label-mono text-label-mono text-primary uppercase font-semibold tracking-wider">
                        Open Access Telemetry
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Flagship Datasets Logged Here
                      </h2>
                    </div>
                    <span className="font-label-mono text-label-mono px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                      34 TOTAL
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold">
                          PHYSICAL OCEANOGRAPHY
                        </span>
                        <span className="font-label-mono text-label-mono text-tertiary font-semibold flex items-center gap-1">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            lock_open
                          </span>
                          {"OPEN ACCESS "}
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">
                        IndARC Long-Term Hydrographic Time-Series (2014–2024)
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                        {" Continuous high-resolution temperature, salinity, ocean current velocity, and dissolved oxygen parameters from the Kongsfjorden subsurface mooring observatory. "}
                      </p>
                      <div className="flex items-center justify-between mt-space-md pt-space-xs">
                        <div className="font-label-mono text-label-mono text-secondary">
                          <span>
                            14.8 GB
                          </span>
                          {" • "}
                          <span>
                            DOI: 10.21125/ncpor.indarc.24
                          </span>
                        </div>
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high text-primary hover:bg-secondary-container font-label-md text-label-md font-semibold transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px]">
                            download
                          </span>
                          {"Download "}
                        </button>
                      </div>
                    </div>
                    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold">
                          ATMOSPHERIC PHYSICS
                        </span>
                        <span className="font-label-mono text-label-mono text-tertiary font-semibold flex items-center gap-1">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            verified
                          </span>
                          {"VERIFIED MOES DATA "}
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold mt-1">
                        Ny-Ålesund Atmospheric Aerosol Optical Depth & Black Carbon
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                        {" Micro-pulse lidar backscatter, Aethalometer black carbon concentrations (multi-wavelength), and particle size distributions logged at Himadri's roof laboratory. "}
                      </p>
                      <div className="flex items-center justify-between mt-space-md pt-space-xs">
                        <div className="font-label-mono text-label-mono text-secondary">
                          <span>
                            3.2 GB
                          </span>
                          {" • "}
                          <span>
                            10-min sampling • NetCDF-4
                          </span>
                        </div>
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high text-primary hover:bg-secondary-container font-label-md text-label-md font-semibold transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px]">
                            download
                          </span>
                          {"Download "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <Link className="mt-space-md inline-flex items-center gap-2 text-primary hover:text-primary-container font-title-md text-title-md font-semibold transition-colors self-start" to="/base-stations/himadri">
                    {" Explore all 34 datasets logged at Himadri Station "}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                    {" "}
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="h-24 w-full bg-surface" />
          <section className="w-full bg-surface mb-space-xl">
            <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
              <div className="rounded-xl bg-surface-container-lowest shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 bg-surface-container-high relative min-h-[300px] flex items-center justify-center p-space-lg overflow-hidden">
                  <svg className="w-full h-full max-h-[320px]" fill="none" viewBox="0 0 400 320">
                    <rect fill="#E7EEFF" height="320" width="400" />
                    <polygon fill="#D6E3FF" points="120,70 40,240 200,240" />
                    <polygon fill="#C8DBFE" points="210,50 140,240 280,240" />
                    <polygon fill="#D6E3FF" points="300,90 230,240 370,240" />
                    <polygon fill="#FFFFFF" points="120,70 100,110 140,110" />
                    <polygon fill="#FFFFFF" points="210,50 190,95 230,95" />
                    <polygon fill="#FFFFFF" points="300,90 280,125 320,125" />
                    <rect fill="#F0F3FF" height="100" width="400" x="0" y="220" />
                    <rect fill="#F9A825" height="90" rx="3" width="220" x="90" y="160" />
                    <polygon fill="#BA1A1A" points="80,160 200,110 320,160" />
                    <rect fill="#006070" height="25" rx="1" width="25" x="110" y="180" />
                    <rect fill="#006070" height="25" rx="1" width="25" x="150" y="180" />
                    <rect fill="#006070" height="25" rx="1" width="25" x="190" y="180" />
                    <rect fill="#006070" height="25" rx="1" width="25" x="230" y="180" />
                    <rect fill="#006070" height="25" rx="1" width="25" x="270" y="180" />
                    <line stroke="#071C36" strokeWidth="2" x1="300" x2="300" y1="110" y2="40" />
                    <line stroke="#071C36" strokeWidth="1.5" x1="290" x2="310" y1="50" y2="50" />
                    <circle cx="50" cy="50" opacity="0.4" r="22" stroke="#1F7A8C" strokeWidth="0.75" />
                    <line opacity="0.4" stroke="#1F7A8C" strokeWidth="0.75" x1="50" x2="50" y1="20" y2="80" />
                    <line opacity="0.4" stroke="#1F7A8C" strokeWidth="0.75" x1="20" x2="80" y1="50" y2="50" />
                  </svg>
                  <span className="absolute bottom-4 left-4 font-label-mono text-label-mono px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-semibold">
                    {" SCHEMATIC: HIMADRI MAIN LODGE "}
                  </span>
                </div>
                <div className="lg:col-span-7 p-space-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-space-sm">
                      <span className="font-label-mono text-label-mono px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold tracking-wider">
                        {" VIRTUAL IMMERSIVE SCIENCE WALKTHROUGH "}
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        HTML5 WebGL Tour
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                      {" Explore Ny-Ålesund Station at 79° North from Anywhere "}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                      {" Step inside the laboratories, roof instrument deck, clean sample processing benches, and living modules. Complete with scientific hotspot popups, audio narration by expedition members, and interactive researcher quizzes. "}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mb-space-lg">
                      <div className="p-3 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                          view_in_ar
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          14 Interactive Nodes
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Labs, mast, pier
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                          record_voice_over
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Scientist Audio
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          English & Hindi guides
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex flex-col">
                        <span className="material-symbols-outlined text-primary text-[20px] mb-1">
                          quiz
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Mini-Quizzes
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Polar certification badge
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-all shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        explore
                      </span>
                      {" Launch Himadri 360° Virtual Tour "}
                    </button>
                    <span className="font-label-mono text-label-mono px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-medium">
                      {" Duration: 12 min immersive tour "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
