import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_polar_science_outreach_style_guide/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function StyleGuidePage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1240px] h-full mx-auto px-gutter flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">
                  explore
                </span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary block leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant block mt-0.5 uppercase tracking-wider">
                  NCPOR • MoES India
                </span>
              </div>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-1 shrink-0" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
            <Link aria-current="page" className="px-2.5 py-1.5 transition-colors bg-primary-container text-on-primary-container font-semibold rounded-lg" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="ask-polaris" to="/ask">
              Ask POLARIS
            </Link>
            <a className="px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="more" href="#" onClick={(e)=>e.preventDefault()}>
              More
            </a>
          </nav>
          <div className="flex items-center gap-space-sm shrink-0">
            <button aria-label="Search Archive" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            <button aria-label="Audio Screen-Reader" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                headphones
              </span>
            </button>
            <div className="flex items-center px-2 py-1 rounded-lg bg-surface-container-low border border-outline-variant/40">
              <button className="font-label-mono text-label-mono text-primary font-semibold">
                EN
              </button>
              <span className="mx-1 text-outline font-label-mono text-label-mono">
                /
              </span>
              <button className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface">
                HI
              </button>
            </div>
            <button aria-label="Toggle Dark Mode" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                dark_mode
              </span>
            </button>
            <Link className="hidden sm:flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-colors" data-path="login" to="/auth">
              Login
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-1">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-[72px] bg-surface min-h-[calc(100vh-72px)]">
        <div className="flex flex-col w-full">
          <div className="w-full h-1 bg-gradient-to-r from-primary-fixed via-primary-container to-secondary" />
          <div className="w-full max-w-[1240px] mx-auto px-gutter py-space-xl flex flex-col gap-[96px]">
            <section className="flex flex-col gap-space-lg">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
                <div className="flex flex-col max-w-[760px]">
                  <div className="flex items-center gap-space-sm mb-space-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-label-mono text-label-mono uppercase tracking-wider">
                      {" "}
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {" SPECIFICATION v1.0.4 • NCPOR / MoES INDIA "}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono uppercase">
                      {" Arctic • Antarctic • Himalayas "}
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-normal tracking-tight">
                    {" POLARIS Design System & Component Library "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
                    {" Official UI architecture and scientific aesthetic framework for the National Centre for Polar and Ocean Research scientific outreach portal. Engineered for high-latitude observational datasets, telemetry feeds, and open educational discovery. "}
                  </p>
                </div>
                <div className="shrink-0 p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center justify-center">
                  <svg className="w-64 h-36" fill="none" viewBox="0 0 280 150">
                    <defs>
                      <linearGradient id="iceGrad" x1="0" x2="0" y1="0" y2="1">
                        {" "}
                        <stop offset="0%" stopColor="#d6e3ff" />
                        {" "}
                        <stop offset="100%" stopColor="#c1e6f3" />
                        {" "}
                      </linearGradient>
                      <linearGradient id="seaGrad" x1="0" x2="0" y1="0" y2="1">
                        {" "}
                        <stop offset="0%" stopColor="#1f7a8c" stopOpacity="0.25" />
                        {" "}
                        <stop offset="100%" stopColor="#006070" stopOpacity="0.85" />
                        {" "}
                      </linearGradient>
                    </defs>
                    <path d="M10 30 Q140 10 270 30" stroke="#bec8cb" strokeDasharray="3 3" strokeWidth="0.8" />
                    <path d="M10 50 Q140 30 270 50" stroke="#bec8cb" strokeDasharray="3 3" strokeWidth="0.8" />
                    <polygon fill="url(#iceGrad)" opacity="0.85" points="30,110 55,50 85,80 110,35 150,110" />
                    <polygon fill="#a9ccd9" opacity="0.6" points="110,35 135,70 150,110" />
                    <rect fill="url(#seaGrad)" height="45" rx="6" width="280" x="0" y="105" />
                    <polygon fill="#ffffff" opacity="0.9" points="190,112 240,112 230,118 185,118" />
                    <path d="M150 108 L160 88 L210 88 L225 108 Z" fill="#006070" />
                    <rect fill="#dee8ff" height="14" width="28" x="175" y="74" />
                    <rect fill="#1f7a8c" height="9" width="8" x="180" y="65" />
                    <line stroke="#ba1a1a" strokeWidth="2" x1="184" x2="184" y1="52" y2="65" />
                    <circle cx="184" cy="50" fill="#f5a623" r="2.5" />
                    <path d="M10 125 C 60 120, 90 130, 140 125 C 190 120, 230 130, 270 125" fill="none" opacity="0.7" stroke="#a9edff" strokeWidth="1.2" />
                    <path d="M30 138 C 80 134, 110 142, 160 137 C 210 132, 240 142, 260 138" fill="none" opacity="0.4" stroke="#a9edff" strokeWidth="1" />
                    <text fill="#41636e" fontFamily="Inter" fontSize="9" fontWeight="600" letterSpacing="1" x="12" y="24">
                      70°45'S • 11°44'E
                    </text>
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-sm">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <span className="font-label-mono text-label-mono text-outline uppercase">
                    Design Version
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-headline-md text-headline-md font-bold text-primary">
                      v1.0.4
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary">
                      STABLE
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Unified Arctic & Antarctic tokens
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <span className="font-label-mono text-label-mono text-outline uppercase">
                    Component Matrix
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">
                      12 Core
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      36 VARIANTS
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Modular scientific elements
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <span className="font-label-mono text-label-mono text-outline uppercase">
                    Accessibility Level
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-headline-md text-headline-md font-bold text-tertiary">
                      WCAG AAA
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                      verified
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    High-contrast polar legible
                  </span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <span className="font-label-mono text-label-mono text-outline uppercase">
                    Localization
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">
                      EN / हिन्दी
                    </span>
                    <span className="font-label-mono text-label-mono text-primary">
                      BILINGUAL
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    MoES National Mandate
                  </span>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
                <div>
                  <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                    02 / COLOR TOKENS
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Polar Spectral Palette
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  {" A restrained palette inspired by sea ice densities, polar night oceans, navigational beacons, and aurora australis emissions. "}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-md">
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#1F7A8C] p-space-sm flex items-start justify-between text-on-primary">
                    <span className="font-label-mono text-label-mono uppercase bg-black/20 px-2 py-0.5 rounded">
                      Core Brand
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      water
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        Primary Teal
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #1F7A8C
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Primary action buttons, brand focus accents, active interactive navigation states.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#0B1F3A] p-space-sm flex items-start justify-between text-on-primary">
                    <span className="font-label-mono text-label-mono uppercase bg-white/20 px-2 py-0.5 rounded">
                      Typography
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      title
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        Polar Ink
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #0B1F3A
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Editorial headlines in Merriweather, high-contrast polar text, dense typography.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#4A5B6D] p-space-sm flex items-start justify-between text-on-primary">
                    <span className="font-label-mono text-label-mono uppercase bg-black/20 px-2 py-0.5 rounded">
                      Secondary
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      notes
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        Muted Slate
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #4A5B6D
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Body narrative text, supporting metadata, observational sensor timestamps.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#BFE3F0] p-space-sm flex items-start justify-between text-[#0B1F3A]">
                    <span className="font-label-mono text-label-mono uppercase bg-black/10 px-2 py-0.5 rounded">
                      Glacier Wash
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      ac_unit
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        Pure Ice
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #BFE3F0
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Subtle thematic tints, atmospheric backdrops, AI attribution chip surfaces.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#2ECC9A] p-space-sm flex items-start justify-between text-on-primary">
                    <span className="font-label-mono text-label-mono uppercase bg-black/20 px-2 py-0.5 rounded">
                      Verified
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      check_circle
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        Aurora Green
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #2ECC9A
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Verified scientific consensus, sensor calibration pass, affirmed cruise completions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#F5A623] p-space-sm flex items-start justify-between text-on-primary">
                    <span className="font-label-mono text-label-mono uppercase bg-black/20 px-2 py-0.5 rounded">
                      Telemetry
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      sensors
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        LIVE Amber
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #F5A623
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Strictly reserved for streaming buoy metrics, real-time station weather, alive sensors.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#7C5CFF] p-space-sm flex items-start justify-between text-on-primary">
                    <span className="font-label-mono text-label-mono uppercase bg-black/20 px-2 py-0.5 rounded">
                      Scheduled
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      event
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        Upcoming Purple
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #7C5CFF
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Planned expedition departures, vessel sea trials, upcoming satellite data passes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <div className="h-28 bg-[#D64545] p-space-sm flex items-start justify-between text-on-primary">
                    <span className="font-label-mono text-label-mono uppercase bg-black/20 px-2 py-0.5 rounded">
                      Critical
                    </span>
                    <span className="material-symbols-outlined text-[20px]">
                      warning
                    </span>
                  </div>
                  <div className="p-space-md flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-title-md text-on-surface">
                        Danger Red
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        #D64545
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Crevasse warnings, severe katabatic blizzards, sensor array communication loss.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg">
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                  03 / ACTIONS & PILLS
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Interactive Controls & Topic Tags
                </h2>
              </div>
              <div className="p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xl">
                <div className="flex flex-col gap-space-md">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    Button Variants & Operational States
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
                    <div className="flex flex-col gap-2 p-space-md rounded-lg bg-surface-container-low">
                      <span className="font-label-mono text-label-mono text-outline uppercase">
                        Primary Action
                      </span>
                      <button className="w-full px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-colors flex items-center justify-center gap-2">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          explore
                        </span>
                        {" "}
                        <span>
                          Launch Explorer
                        </span>
                        {" "}
                      </button>
                      <button className="w-full px-5 py-2.5 rounded-lg bg-outline-variant text-on-surface-variant/50 font-title-md text-body-sm cursor-not-allowed flex items-center justify-center gap-2" disabled="">
                        {" "}
                        <span>
                          Disabled State
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 p-space-md rounded-lg bg-surface-container-low">
                      <span className="font-label-mono text-label-mono text-outline uppercase">
                        Secondary / Ghost Outline
                      </span>
                      <button className="w-full px-5 py-2.5 rounded-lg bg-transparent text-primary font-title-md text-body-sm hover:bg-surface-container transition-colors shadow-sm flex items-center justify-center gap-2">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          download
                        </span>
                        {" "}
                        <span>
                          Download Report
                        </span>
                        {" "}
                      </button>
                      <button className="w-full px-5 py-2.5 rounded-lg bg-surface-container text-primary font-title-md text-body-sm flex items-center justify-center gap-2">
                        {" "}
                        <span>
                          Hover Active State
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 p-space-md rounded-lg bg-surface-container-low">
                      <span className="font-label-mono text-label-mono text-outline uppercase">
                        Inline Ghost
                      </span>
                      <button className="group w-full px-4 py-2.5 rounded-lg text-primary font-title-md text-body-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                        {" "}
                        <span>
                          View Raw Logs
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                        {" "}
                      </button>
                      <button className="w-full px-4 py-2.5 rounded-lg text-on-surface-variant font-title-md text-body-sm flex items-center justify-center gap-2">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          history
                        </span>
                        {" "}
                        <span>
                          Revision History
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="flex flex-col gap-2 p-space-md rounded-lg bg-surface-container-low">
                      <span className="font-label-mono text-label-mono text-outline uppercase">
                        Alert / Hazard Action
                      </span>
                      <button className="w-full px-5 py-2.5 rounded-lg bg-error text-on-error font-title-md text-body-sm hover:bg-on-error-container transition-colors flex items-center justify-center gap-2">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          report_problem
                        </span>
                        {" "}
                        <span>
                          Emergency Halt
                        </span>
                        {" "}
                      </button>
                      <button className="w-full px-5 py-2.5 rounded-lg bg-error-container text-on-error-container font-title-md text-body-sm flex items-center justify-center gap-2">
                        {" "}
                        <span>
                          Reset Station Buffer
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm pt-space-md">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    Scientific Topic Discipline Chips
                  </span>
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <span className="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md flex items-center gap-1.5 cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        ac_unit
                      </span>
                      {" Glaciology & Ice Cores "}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5 cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        waves
                      </span>
                      {" Southern Oceanography "}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5 cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        cloud
                      </span>
                      {" Atmospheric Physics "}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5 cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        terrain
                      </span>
                      {" Cryosphere Dynamics "}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5 cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        history_edu
                      </span>
                      {" Paleoclimatology "}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5 cursor-pointer hover:bg-primary hover:text-on-primary transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        biotech
                      </span>
                      {" Polar Microbiology "}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg">
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                  04 / STATUS & REPUTATION
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Telemetry Badges & Data Trust Framework
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    Expedition Telemetry Indicators
                  </span>
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        Live Telemetry Feed
                      </span>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-on-surface font-label-mono text-label-mono font-bold tracking-wide">
                        <span className="relative flex h-2.5 w-2.5">
                          {" "}
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          {" "}
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5A623]" />
                          {" "}
                        </span>
                        {" LIVE TELEMETRY • Bharati Station (-18°C) "}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        Archived Cruise
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary-container text-on-tertiary font-label-mono text-label-mono font-medium">
                        <span className="material-symbols-outlined text-[16px]">
                          check_circle
                        </span>
                        {" Verified Voyage 43 • Completed "}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        Scheduled Expedition
                      </span>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7C5CFF]/15 text-[#7C5CFF] font-label-mono text-label-mono font-semibold">
                        <span className="material-symbols-outlined text-[16px]">
                          schedule
                        </span>
                        {" 44th Indian Antarctic Expedition • Departs Nov 2025 "}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-sm">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">
                      Institutional Provenance Badges
                    </span>
                    <div className="flex flex-wrap gap-space-sm">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary-container text-on-surface font-label-mono text-label-mono">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          smart_toy
                        </span>
                        {" AI-drafted • NCPOR PolarLLM "}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono shadow-sm">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                        {" Source-linked (DOI:10.5061/dryad) "}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#2ECC9A]/20 text-[#006448] font-label-mono text-label-mono font-bold">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-[#2ECC9A]" style={{"fontVariationSettings": "'FILL' 1"}}>
                          verified
                        </span>
                        {" Verified by NCPOR Scientist "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          speed
                        </span>
                        <span className="font-title-md text-title-md text-on-surface font-semibold">
                          Scientific Confidence Meter
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-mono text-label-mono font-bold">
                        GRADE A
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Continuous validation score synthesized across Kongsfjorden Mooring, IndARC micro-profilers, and NASA MODIS satellite thermal overlay. "}
                    </p>
                  </div>
                  <div className="my-space-md p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="font-label-mono text-label-mono text-outline uppercase block">
                          Sensor Array Reliability Index
                        </span>
                        <span className="font-headline-lg text-headline-lg text-primary font-bold">
                          98.4%
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-label-mono text-label-mono text-tertiary block font-semibold">
                          +0.3% Drift Compensated
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          Sample: N=4,289,102
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-surface-container-highest rounded-full overflow-hidden flex">
                      <div className="h-full bg-tertiary rounded-full transition-all duration-1000" style={{"width": "98.4%"}} />
                    </div>
                    <div className="grid grid-cols-3 pt-2 text-center">
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono text-outline">
                          CTD Accuracy
                        </span>
                        <span className="font-title-md text-body-sm text-on-surface font-semibold">
                          99.8%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono text-outline">
                          Radio Acoustic
                        </span>
                        <span className="font-title-md text-body-sm text-on-surface font-semibold">
                          97.9%
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono text-outline">
                          Satellite Sync
                        </span>
                        <span className="font-title-md text-body-sm text-on-surface font-semibold">
                          98.1%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                    <span>
                      Peer-Review Validation: MoES Protocol V4
                    </span>
                    <span className="text-primary cursor-pointer hover:underline">
                      View Audit Hash
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg">
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                  05 / 3D SPATIAL PLACEHOLDER
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Globe Slot Component Spec
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
                <div className="lg:col-span-2 rounded-[24px] bg-[#050B18] h-[280px] flex items-center justify-center shadow-lg relative overflow-hidden" style={{"outline": "2px dashed #1F7A8C", "outlineOffset": "-2px"}}>
                  <div className="flex items-center gap-2.5 text-[#83d2e6] select-none pointer-events-none">
                    <svg className="w-6 h-6 animate-spin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{"animationDuration": "14s"}} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span className="font-label-mono text-body-sm tracking-widest uppercase font-semibold text-primary-fixed">
                      GLOBE SLOT - polaris-globe-x
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-space-sm text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        terminal
                      </span>
                      <span className="font-title-md text-title-md font-semibold text-on-surface">
                        Slot Binding Protocol
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {" Strict spatial container reserved for WebGL canvas injection. The engine dynamically binds coordinate layers, Antarctic station pins (Maitri, Bharati), and ocean acoustic buoys. "}
                    </p>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low font-label-mono text-label-mono text-on-surface-variant flex flex-col gap-1">
                    <span className="text-primary font-bold">
                      Mount Hook:
                    </span>
                    <code>
                      document.querySelector('#polaris-globe-x')
                    </code>
                    <span className="text-outline mt-1">
                      WebGL Target: Three.js r162+
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
                    <span>
                      Projection: Orthographic Polar
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-mono text-label-mono">
                      GLSL READY
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg">
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                  06 / EDITORIAL & STRUCTURE
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Content Cards, Tabs & Accordions
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="group rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="h-44 bg-surface-container-high relative overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A futuristic sustainable polar scientific station under soft low Antarctic sunlight with snowdrifts, geodesic research pods, solar panels, and scientific personnel in cold weather gear against pristine blue ice." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3tuKjhm12ug68tyEwp875kbbgy9hX60nos3b9W62lbDAc9-pYPuAnmlg-rrbDMclg5I17_fISnRUVhRYeGS1uJ9S9GEu707FfIEKMcj3Cdin9q_mo1XoM1_qab1NWfZ3NN63pwlqg4Gdbm-uN3CmUXo1sPVnAfT2yuiNz2r2YswXwQzJSfyHSXnod7uk9uHroGfH6ZPiWaEYbrCYSw6eNI34aKteXQRZs463fbuz-v8meMQId0CEk" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-mono text-label-mono font-semibold">
                        ANTARCTICA
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-mono text-label-mono">
                        SCHREIBER REGION
                      </span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between flex-1 gap-space-md">
                    <div>
                      <div className="flex items-center gap-space-sm text-on-surface-variant font-label-mono text-label-mono mb-2">
                        <span>
                          04 MAR 2025
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          DR. T. RAMESHAN (CHIEF SCIENTIST)
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        {" Maitri II Station Modernization Plan & Zero-Emission Life Support "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                        {" Strategic blueprint for replacing the venerable Maitri research facility with next-generation modular energy capsules, subglacial lake probes, and real-time atmospheric spectrophotometry. "}
                      </p>
                    </div>
                    <div className="pt-space-sm flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-mono text-label-mono">
                          STRUCTURAL
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-mono text-label-mono">
                          SUSTAINABILITY
                        </span>
                      </div>
                      <a className="text-primary font-title-md text-body-sm flex items-center gap-1 hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                        {" Read Dossier "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="h-44 bg-surface-container-high relative overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Microscopic analytical photograph of ancient deep-sea sediment core stratigraphy showing laminated sediment layers with microfossils and diatom assemblages under polar oceanographic research laboratory lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMucbTLBDhZmU1lnAqW6eTKHgRBEt8gbhQ8cbcIHG5ROxH0O7LlrKJEitgFb06SAGrtBV8MbxsRtMAegi2xPBlD1dcLExl3IZNOZcOVhkkVtwxnhJcxwhV3DLTdSPlDJhQ99anGGnvkUETuZdIIDFNUvkO_FgidRiOnD1QaV2c2Vgt8IaTyGgYKyD0OiOUj4LvLKA7cBJhPqQFNsein040P2Xny51XFvMarAOrRqjfHCEE2o7LWx_2" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-tertiary font-label-mono text-label-mono font-semibold">
                        SOUTHERN OCEAN
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#2ECC9A] text-on-primary font-label-mono text-label-mono font-semibold">
                        PEER VERIFIED
                      </span>
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col justify-between flex-1 gap-space-md">
                    <div>
                      <div className="flex items-center gap-space-sm text-on-surface-variant font-label-mono text-label-mono mb-2">
                        <span>
                          28 FEB 2025
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          CRUISE SO-14 CORING REPOSITORY
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        {" Deep Sea Sediment Cores from the Southern Ocean: Mid-Pleistocene Shift "}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                        {" High-resolution diatom assemblages extracted from 4,200 meters depth provide unprecedented 800,000-year paleo-oceanographic records of Antarctic circumpolar current shifts. "}
                      </p>
                    </div>
                    <div className="pt-space-sm flex flex-col gap-2">
                      <div className="flex items-center justify-between text-body-sm">
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          Carbon-14 Precision Index
                        </span>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold">
                          99.1% Confidence
                        </span>
                      </div>
                      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary rounded-full" style={{"width": "99.1%"}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Scientific Navigation Tabs
                </span>
                <div className="flex items-center gap-space-sm overflow-x-auto pb-2">
                  <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm font-semibold shrink-0">
                    {" Overview "}
                  </button>
                  <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-title-md text-body-sm transition-colors shrink-0">
                    {" Telemetry Data "}
                  </button>
                  <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-title-md text-body-sm transition-colors shrink-0">
                    {" Ice Core Archives "}
                  </button>
                  <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-title-md text-body-sm transition-colors shrink-0">
                    {" Scientific Publications "}
                  </button>
                  <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-title-md text-body-sm transition-colors shrink-0">
                    {" Field Equipment Logs "}
                  </button>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
                  <span>
                    {"Active View: "}
                    <strong>
                      Overview & Station Telemetry Stream
                    </strong>
                    {" (Synced with MoES Goa Primary Cloud Gateway)"}
                  </span>
                  <span className="font-label-mono text-label-mono text-primary font-semibold">
                    BUFFER HEALTH: OPTIMAL
                  </span>
                </div>
              </div>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Expedition FAQ & Instrumentation Accordion
                </span>
                <div className="flex flex-col gap-space-sm">
                  <div className="rounded-lg bg-surface-container-low overflow-hidden">
                    <button className="w-full p-space-md text-left flex items-center justify-between hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="font-title-md text-body-sm font-semibold text-on-surface">
                        How are sub-zero IndARC acoustic profilers calibrated against ice floe drift?
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        expand_less
                      </span>
                      {" "}
                    </button>
                    <div className="px-space-md pb-space-md pt-1 text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                      {" IndARC moored systems at Kongsfjorden utilize acoustic Doppler current profilers (ADCP) tethered at 192m depth. Drift correction is performed using dual-frequency ping synchronizations against seabed transponders and calibrated twice yearly against shipborne CTD casts during spring melt transitions. "}
                    </div>
                  </div>
                  <div className="rounded-lg bg-surface-container-low overflow-hidden">
                    <button className="w-full p-space-md text-left flex items-center justify-between hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="font-title-md text-body-sm font-semibold text-on-surface">
                        What protocol governs sample accession into the National Polar Core Repository?
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                        expand_more
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="rounded-lg bg-surface-container-low overflow-hidden">
                    <button className="w-full p-space-md text-left flex items-center justify-between hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="font-title-md text-body-sm font-semibold text-on-surface">
                        Can international university researchers access raw Southern Ocean CTD matrices?
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                        expand_more
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg">
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                  07 / OVERLAYS & SHEETS
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Modal Dialogs, Inspector Drawer & Alerts
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
                <div className="lg:col-span-6 rounded-2xl bg-surface-container-lowest p-space-lg shadow-lg flex flex-col gap-space-md relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          file_download
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-title-md text-on-surface">
                        Export Expedition Telemetry
                      </h3>
                    </div>
                    <button className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center hover:bg-surface-container-high">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                      {" "}
                    </button>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Select temporal boundaries and sensor channels for high-latitude NetCDF / CSV package generation. "}
                  </p>
                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase block mb-1">
                        Station / Platform
                      </label>
                      <select className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>
                          Bharati Research Station (69°24'S, 76°11'E)
                        </option>
                        <option>
                          Maitri Research Station (70°45'S, 11°44'E)
                        </option>
                        <option>
                          Himadri Arctic Station (Ny-Ålesund 78°55'N)
                        </option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="font-label-mono text-label-mono text-on-surface-variant uppercase block mb-1">
                          Start Epoch
                        </label>
                        <input className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" type="text" defaultValue="2024-01-01" />
                      </div>
                      <div>
                        <label className="font-label-mono text-label-mono text-on-surface-variant uppercase block mb-1">
                          End Epoch
                        </label>
                        <input className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary" type="text" defaultValue="2024-12-31" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <input defaultChecked="" className="rounded text-primary focus:ring-primary h-4 w-4" id="calib-check" type="checkbox" />
                      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="calib-check">
                        Include calibration metadata header (ISO 19115 compliant)
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-space-sm pt-space-sm">
                    <button className="px-4 py-2 rounded-lg text-on-surface-variant font-title-md text-body-sm hover:bg-surface-container transition-colors">
                      {" Cancel "}
                    </button>
                    <button className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        file_save
                      </span>
                      {" Export .NetCDF "}
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                        <span className="font-headline-sm text-title-md text-on-surface">
                          Station Inspector: Himadri
                        </span>
                      </div>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        ARCTIC 78°55'N
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Ny-Ålesund, Svalbard, Norway. Continuous observational node for aerosol characterization and fjord bathymetry. "}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-label-mono text-label-mono text-outline uppercase">
                          Ambient Temp
                        </span>
                        <span className="font-headline-sm text-title-md text-on-surface font-bold mt-1">
                          -8.4°C
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-label-mono text-label-mono text-outline uppercase">
                          Wind Speed
                        </span>
                        <span className="font-headline-sm text-title-md text-on-surface font-bold mt-1">
                          24.2 kts ENE
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-label-mono text-label-mono text-outline uppercase">
                          Fjord Salinity
                        </span>
                        <span className="font-headline-sm text-title-md text-on-surface font-bold mt-1">
                          34.8 PSU
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
                        <span className="font-label-mono text-label-mono text-outline uppercase">
                          Array Status
                        </span>
                        <span className="font-headline-sm text-title-md text-tertiary font-bold mt-1">
                          ONLINE
                        </span>
                      </div>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-surface-container text-primary font-title-md text-body-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        visibility
                      </span>
                      {" View Live Ny-Ålesund Webcam & LiDAR Stream "}
                    </button>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-md flex items-center justify-between gap-space-md">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-tertiary/15 text-tertiary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          cloud_done
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-title-md text-body-sm font-semibold text-on-surface">
                          Dataset Download Complete
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Dataset NCPOR-SO-2024.csv successfully downloaded • Source verified
                        </span>
                      </div>
                    </div>
                    <button className="text-primary font-label-mono text-label-mono font-semibold uppercase hover:underline shrink-0">
                      {" Open File "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg">
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                  08 / ACCESSIBLE MEDIA
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Audio Screen-Reader Player Bar
                </h2>
              </div>
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-md w-full md:w-auto">
                    <button className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md hover:bg-primary transition-transform active:scale-95 shrink-0">
                      {" "}
                      <span className="material-symbols-outlined text-[24px]">
                        play_arrow
                      </span>
                      {" "}
                    </button>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-title-md text-body-sm font-bold text-on-surface">
                          Audio Narration: Glaciological Findings
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-mono text-label-mono">
                          AI VOICE
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Narration length: 12 minutes • Voice of NCPOR Senior Archivist
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 w-full max-w-[460px] flex flex-col gap-1.5">
                    <div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
                      <span>
                        04:18
                      </span>
                      <div className="flex items-center gap-0.5 h-6">
                        <span className="w-1 h-3 bg-primary rounded-full" />
                        <span className="w-1 h-5 bg-primary rounded-full" />
                        <span className="w-1 h-2 bg-primary rounded-full" />
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        <span className="w-1 h-4 bg-primary rounded-full" />
                        <span className="w-1 h-3 bg-outline-variant rounded-full" />
                        <span className="w-1 h-5 bg-outline-variant rounded-full" />
                        <span className="w-1 h-2 bg-outline-variant rounded-full" />
                        <span className="w-1 h-6 bg-outline-variant rounded-full" />
                        <span className="w-1 h-3 bg-outline-variant rounded-full" />
                        <span className="w-1 h-4 bg-outline-variant rounded-full" />
                        <span className="w-1 h-2 bg-outline-variant rounded-full" />
                      </div>
                      <span>
                        12:45
                      </span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden relative cursor-pointer">
                      <div className="h-full bg-primary-container rounded-full" style={{"width": "34%"}} />
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm shrink-0">
                    <div className="flex items-center rounded-lg bg-surface-container p-0.5">
                      <button className="px-2.5 py-1 rounded-md bg-surface-container-lowest text-primary font-label-mono text-label-mono font-bold shadow-xs">
                        1.0x
                      </button>
                      <button className="px-2.5 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-mono text-label-mono">
                        1.25x
                      </button>
                      <button className="px-2.5 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-mono text-label-mono">
                        1.5x
                      </button>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-primary font-label-mono text-label-mono font-semibold flex items-center gap-1.5 hover:bg-surface-container">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        translate
                      </span>
                      {" English / हिन्दी "}
                    </button>
                    <button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        volume_up
                      </span>
                      {" "}
                    </button>
                    <button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-space-lg mb-space-xl">
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-1">
                  09 / INPUTS & FILTER CONTROLS
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Data Query & Search Components
                </h2>
              </div>
              <div className="p-space-xl rounded-xl bg-surface-container-lowest shadow-sm grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <div className="flex flex-col gap-2">
                  <label className="font-title-md text-body-sm font-semibold text-on-surface">
                    Search Polar Archive
                  </label>
                  <div className="relative">
                    <input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Search cruise ID, core code, author..." type="text" />
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">
                      search
                    </span>
                  </div>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Supports Boolean logic: e.g. "Maitri AND CTD"
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-title-md text-body-sm font-semibold text-on-surface">
                    Select Expedition Registry
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                      <option>
                        43rd Indian Antarctic Expedition (2023-24)
                      </option>
                      <option>
                        IndARC Kongsfjorden Mooring VII
                      </option>
                      <option>
                        Southern Ocean Expedition 2024
                      </option>
                      <option>
                        Himansh Cryospheric Observatory Spiti
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none text-[20px]">
                      expand_more
                    </span>
                  </div>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Validated against NCPOR Cruise Directory
                  </span>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                  <label className="font-title-md text-body-sm font-semibold text-on-surface">
                    Layer Filters & Switches
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      {" "}
                      <input defaultChecked="" className="rounded text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Bathymetric contours (GEBCO 2024)
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between cursor-pointer pt-1">
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface">
                        Real-Time Satellite Thermal Scrim
                      </span>
                      {" "}
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked="" className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container" />
                      </div>
                      {" "}
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 pt-margin pb-space-xl">
        <div className="max-w-[1240px] mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-margin">
            <div>
              <div className="flex items-center gap-space-sm mb-space-md">
                <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">
                    ac_unit
                  </span>
                </div>
                <span className="font-headline-sm text-title-md font-bold text-primary">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                National Centre for Polar and Ocean Research (NCPOR), an autonomous research institution under the Ministry of Earth Sciences (MoES), Government of India.
              </p>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase space-y-1">
                <p>
                  Headland Sada, Vasco da Gama, Goa - 403804
                </p>
                <p className="text-primary">
                  moes.gov.in • ncpor.res.in
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-space-md">
                Research Stations
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors flex items-center gap-1.5" href="#" onClick={(e)=>e.preventDefault()}>
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    Maitri (Antarctica • 1989)
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center gap-1.5" href="#" onClick={(e)=>e.preventDefault()}>
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    Bharati (Antarctica • 2012)
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors flex items-center gap-1.5" to="/base-stations/himadri">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    Himadri (Arctic • Ny-Ålesund)
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center gap-1.5" href="#" onClick={(e)=>e.preventDefault()}>
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    IndARC (Kongsfjorden Mooring)
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center gap-1.5" href="#" onClick={(e)=>e.preventDefault()}>
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    Himansh (Himalaya • Spiti)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-space-md">
                Expeditions
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Indian Antarctic Program
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Indian Arctic Expedition
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Southern Ocean Expedition
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Cryosphere & Climate Studies
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Deep Ocean Mission
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-surface font-semibold mb-space-md">
                Open Data & Portals
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/data">
                    Polar Data Center (PDC)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/graph">
                    Oceanographic Cruise Data
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/repository">
                    Geoscientific Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/publications">
                    MoES Scientific Publications
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/community">
                    Citizen Science & Outreach
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-space-lg border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              © 2025 National Centre for Polar and Ocean Research, MoES, Govt. of India. All rights reserved.
            </p>
            <p className="font-body-sm text-body-sm text-outline italic">
              Sample data / Design System Showcase
            </p>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-6 right-6 z-40">
        <button aria-label="Ask POLARIS AI Assistant" className="relative group flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-primary-container text-on-primary shadow-[0_8px_24px_rgba(31,122,140,0.35)] hover:bg-primary transition-all duration-300">
          <span className="absolute -inset-1 rounded-full bg-primary-fixed-dim/40 animate-ping opacity-75" />
          <span className="relative material-symbols-outlined text-[22px]">
            auto_awesome
          </span>
          <span className="relative font-title-md text-body-sm tracking-wide font-semibold">
            Ask POLARIS
          </span>
        </button>
      </div>
    </>
  );
}
