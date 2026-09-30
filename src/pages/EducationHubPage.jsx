import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_polar_science_education_hub_education/code.html
const BODY_CLASS = "bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// Grade Chips Selection Logic\n  const chips = document.querySelectorAll('.grade-pill');\n  chips.forEach(chip => {\n    chip.addEventListener('click', () => {\n      chips.forEach(c => {\n        c.classList.remove('bg-primary-container', 'text-on-primary', 'shadow-sm');\n        c.classList.add('bg-surface-container-low', 'text-on-surface-variant');\n        c.removeAttribute('aria-pressed');\n      });\n      chip.classList.add('bg-primary-container', 'text-on-primary', 'shadow-sm');\n      chip.classList.remove('bg-surface-container-low', 'text-on-surface-variant');\n      chip.setAttribute('aria-pressed', 'true');\n    });\n  });\n\n  // Classroom Mode Toggle Simulation\n  const toggleBtn = document.getElementById('classroom-mode-toggle');\n  const toggleDot = document.getElementById('classroom-mode-dot');\n  let isClassroomMode = false;\n\n  if (toggleBtn && toggleDot) {\n    toggleBtn.addEventListener('click', () => {\n      isClassroomMode = !isClassroomMode;\n      toggleBtn.setAttribute('aria-checked', isClassroomMode.toString());\n      if (isClassroomMode) {\n        toggleBtn.classList.remove('bg-surface-container-high');\n        toggleBtn.classList.add('bg-primary');\n        toggleDot.classList.add('translate-x-6');\n      } else {\n        toggleBtn.classList.add('bg-surface-container-high');\n        toggleBtn.classList.remove('bg-primary');\n        toggleDot.classList.remove('translate-x-6');\n      }\n    });\n  }\n\n  // Audio Telemetry Button Micro-Interaction\n  const audioBtn = document.getElementById('wind-audio-btn');\n  const audioText = document.getElementById('wind-audio-text');\n  let isPlayingAudio = false;\n\n  if (audioBtn && audioText) {\n    audioBtn.addEventListener('click', () => {\n      isPlayingAudio = !isPlayingAudio;\n      if (isPlayingAudio) {\n        audioBtn.classList.add('bg-primary', 'text-on-primary');\n        audioBtn.classList.remove('bg-surface-container-low', 'text-on-surface');\n        audioText.innerText = 'Playing: Katabatic Winds 14 kts';\n      } else {\n        audioBtn.classList.remove('bg-primary', 'text-on-primary');\n        audioBtn.classList.add('bg-surface-container-low', 'text-on-surface');\n        audioText.innerText = 'Ambient: Katabatic Winds 14 kts';\n      }\n    });\n  }";

export default function EducationHubPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-md shrink-0">
            <a className="flex items-center gap-space-sm group" data-path="home" href="#" onClick={(e)=>e.preventDefault()}>
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-[0_2px_12px_rgba(11,31,58,0.08)]">
                <span className="material-symbols-outlined text-on-primary text-[20px]">
                  ac_unit
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface group-hover:text-primary transition-colors">
                    POLARIS
                  </span>
                  <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest">
                    NCPOR
                  </span>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant text-[10px] leading-none uppercase">
                  MoES • Govt. of India
                </span>
              </div>
            </a>
            <div className="hidden xl:flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-low">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
              </span>
              <span className="font-label-mono text-label-mono text-on-surface">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 shrink-0" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link aria-current="page" className="px-2.5 py-1.5 transition-all bg-primary-container text-on-primary-container font-semibold rounded-lg" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container hover:text-on-surface transition-all" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm shrink-0">
            <div className="hidden md:flex items-center bg-surface-container-low rounded-lg px-2.5 py-1.5 w-44 lg:w-48 shadow-[inset_0_1px_2px_rgba(7,28,54,0.04)]">
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-1.5">
                search
              </span>
              <input className="bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline w-full focus:outline-none" placeholder="Search archives..." type="text" />
            </div>
            <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 font-label-mono text-label-mono">
              <button className="px-2 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-[0_1px_3px_rgba(7,28,54,0.06)]" type="button">
                EN
              </button>
              <button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                HI
              </button>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[380px] bg-gradient-to-b from-secondary-fixed/40 via-surface-container-low/20 to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
            <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pt-10 pb-24 w-full">
              <div className="flex flex-wrap items-center justify-between gap-space-sm mb-6">
                <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface-variant">
                  <Link className="hover:text-primary transition-colors" data-path="home" to="/">
                    Home
                  </Link>
                  <span className="text-outline">
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    Education Hub
                  </span>
                </nav>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider">
                    NCPOR STEM Outreach • Curriculum-Aligned Polar Science
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-end mb-12">
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <h1 className="font-headline-lg text-headline-lg lg:text-[44px] lg:leading-[54px] text-on-surface tracking-tight">
                    {" Polar Science in the Classroom: "}
                    <br className="hidden sm:inline" />
                    {" "}
                    <span className="italic font-display-hero text-primary">
                      Explore, Experiment & Discover
                    </span>
                    {" "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                    {" Authentic, research-based modules and interactive labs translated directly from India’s ongoing Antarctic, Arctic, and Himalayan expeditions for school and university classrooms. "}
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-2 w-full sm:w-auto">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          cast_for_education
                        </span>
                        <span className="font-label-md text-label-md text-on-surface">
                          Classroom Mode
                        </span>
                      </div>
                      <button aria-checked="false" className="w-12 h-6 bg-surface-container-high rounded-full relative p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container" id="classroom-mode-toggle" role="switch" type="button">
                        {" "}
                        <span className="w-5 h-5 bg-surface-container-lowest rounded-full block shadow-sm transform transition-transform" id="classroom-mode-dot" />
                        {" "}
                      </button>
                    </div>
                    <p className="font-label-mono text-[11px] leading-tight text-on-surface-variant max-w-[240px]">
                      {" Projects high-contrast large typography & simplified diagrams for classroom smartboards and projectors. "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
                  <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                    Select Cohort:
                  </span>
                  <div className="flex flex-wrap items-center gap-2" id="grade-chips">
                    <button className="grade-pill px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" type="button">
                      {" Grades 6–8 "}
                      <span className="font-label-mono text-[10px] text-outline ml-1">
                        (12 Modules)
                      </span>
                      {" "}
                    </button>
                    <button aria-pressed="true" className="grade-pill px-4 py-2 rounded-full font-label-md text-label-md bg-primary-container text-on-primary shadow-sm transition-all" type="button">
                      {" Grades 9–10 "}
                      <span className="font-label-mono text-[10px] text-on-primary-container ml-1 font-normal">
                        (18 Modules)
                      </span>
                      {" "}
                    </button>
                    <button className="grade-pill px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" type="button">
                      {" Grades 11–12 "}
                      <span className="font-label-mono text-[10px] text-outline ml-1">
                        (24 Modules)
                      </span>
                      {" "}
                    </button>
                    <button className="grade-pill px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" type="button">
                      {" College / University "}
                      <span className="font-label-mono text-[10px] text-outline ml-1">
                        (9 Datasets)
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 justify-end">
                  <a className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm focus:ring-2 focus:ring-primary focus:outline-none" data-path="ask-polaris" href="#" onClick={(e)=>e.preventDefault()}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      contact_support
                    </span>
                    {" "}
                    <span>
                      Ask an Expert
                    </span>
                    {" "}
                  </a>
                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm focus:ring-2 focus:ring-primary-container focus:outline-none" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                    {" "}
                    <span>
                      Curriculum Map (PDF)
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </section>
          </div>
          <section className="w-full bg-surface-container-low/50 py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                    Core Polar Curricula
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Five Strands of Cryospheric Science
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  {" Structured pedagogical packages complete with digital simulated data sheets, hands-on lab experiments, and assessment rubrics. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-secondary-container text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          ac_unit
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-secondary">
                        NCERT • Physical Geography
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-2">
                      1. Cryosphere Dynamics
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                      {" Explore ice sheets, alpine valley glaciers, and permafrost thermodynamics with deep ice-core stratigraphy analysis. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-4 border-t-0 bg-surface-container-low/40 -mx-6 -mb-6 p-6 rounded-b-2xl flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                      5 Modules • 3 Lab Simulations
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:text-primary font-semibold group-hover:translate-x-0.5 transition-all" href="#" onClick={(e)=>e.preventDefault()}>
                      {" Explore "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </a>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          waves
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-secondary">
                        Hydrography & Physics
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-2">
                      2. Southern Ocean Circulation
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                      {" Trace the Antarctic Circumpolar Current, sea-ice expansion cycles, and deep thermohaline conveyor engines. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-4 border-t-0 bg-surface-container-low/40 -mx-6 -mb-6 p-6 rounded-b-2xl flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                      4 Modules • 2 Salinity Labs
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:text-primary font-semibold group-hover:translate-x-0.5 transition-all" href="#" onClick={(e)=>e.preventDefault()}>
                      {" Explore "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </a>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          thermostat
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-secondary">
                        Earth Systems Science
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-2">
                      3. Climate & Paleoclimate
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
                      {" Unpack 800,000 years of paleoclimate air bubbles, planetary albedo feedback, and cryospheric tipping loops. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-4 border-t-0 bg-surface-container-low/40 -mx-6 -mb-6 p-6 rounded-b-2xl flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                      6 Modules • 4 Data Models
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:text-primary font-semibold group-hover:translate-x-0.5 transition-all" href="#" onClick={(e)=>e.preventDefault()}>
                      {" Explore "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </a>
                  </div>
                  {" "}
                </article>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          biotech
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-secondary">
                        Biology & Ecology
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-2">
                      4. Polar Biodiversity & Extremophiles
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                      {" Investigate bentho-pelagic trophic webs, Emperor Penguin colony thermal strategies, and psychrophilic bacteria surviving sub-ice lakes. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-4 bg-surface-container-low/40 -mx-6 -mb-6 p-6 rounded-b-2xl flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                      4 Modules • 2 Field Bio-Surveys
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:text-primary font-semibold group-hover:translate-x-0.5 transition-all" href="#" onClick={(e)=>e.preventDefault()}>
                      {" Explore "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </a>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                  {" "}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[26px]">
                          navigation
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-secondary">
                        Applied STEM & Engineering
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-2">
                      5. Expedition Engineering & Survival
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                      {" Learn architectural life support systems at Bharati Station, telemetry satellite uplinks, and cold-weather field instrumentation safety. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-4 bg-surface-container-low/40 -mx-6 -mb-6 p-6 rounded-b-2xl flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                      3 Modules • 2 Engineering Challenges
                    </span>
                    <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container group-hover:text-primary font-semibold group-hover:translate-x-0.5 transition-all" href="#" onClick={(e)=>e.preventDefault()}>
                      {" Explore "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </a>
                  </div>
                  {" "}
                </article>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-24 w-full">
            <div className="bg-surface-container-lowest rounded-2xl p-8 lg:p-10 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono uppercase tracking-wide">
                      360° Interactive Simulation
                    </span>
                    <span className="inline-flex items-center gap-1 font-label-mono text-[11px] text-tertiary font-semibold">
                      {" "}
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                      {" WebGL Ready "}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Step Inside Bharati Station & Larsmann Hills
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mt-1">
                    {" Immerse students inside India's futuristic, high-latitude Antarctic station. Navigate labs, living modules, and atmospheric observation decks. "}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors shadow-sm" id="wind-audio-btn" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      volume_up
                    </span>
                    {" "}
                    <span id="wind-audio-text">
                      Ambient: Katabatic Winds 14 kts
                    </span>
                    {" "}
                  </button>
                  <div className="px-3.5 py-2 rounded-full bg-surface-container font-label-mono text-label-mono text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">
                      view_in_ar
                    </span>
                    <span>
                      VR Headset Compatible
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-[460px] rounded-xl overflow-hidden shadow-inner group">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Photorealistic panoramic 360 view inside the high-tech steel and glass Bharati Antarctic Research Station, showing warm ergonomic laboratories with modern computing consoles and panoramic observation windows overlooking snowy Larsmann Hills blue glaciers under crisp polar sunlight in clean minimal tones" style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaV8rRdNG-iD8VomIaOnDrCXOPZBXRFBda0FiuR_EWHVvmeJ7opBEMr68cMuuDH-AOAS1L40BSx6Li7ys0nHyy2ohBKgBbbbPcdSrXxSDI9kXhHPUMoFg6ses5Dhn6oqXkCrH4gn2gTPiRE8txvKVp5od6S33oD6CA08gnZBMrJsLm5I5LqhyYpu_JpNYt8l3ommLhFA3JxMT_4pBg8nO9amPtHLe1-CaPVlckfmo0IWqMOmGG7NDV')"}}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent" />
                <button className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group/spot focus:outline-none" title="Atmospheric Research Lab" type="button">
                  {" "}
                  <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg ring-4 ring-on-primary/40 animate-pulse">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      science
                    </span>
                    {" "}
                  </span>
                  {" "}
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-on-surface/90 text-on-primary font-label-mono text-label-mono backdrop-blur-md">
                    Atmospheric Lab
                  </span>
                  {" "}
                </button>
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group/spot focus:outline-none" title="Meteorological Observation Deck" type="button">
                  {" "}
                  <span className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-lg ring-4 ring-surface-container-lowest/50">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      wb_twilight
                    </span>
                    {" "}
                  </span>
                  {" "}
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-on-surface/90 text-on-primary font-label-mono text-label-mono backdrop-blur-md">
                    Met Deck (View Larsmann Hills)
                  </span>
                  {" "}
                </button>
                <button className="absolute bottom-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group/spot focus:outline-none" title="Modular Living Quarters" type="button">
                  {" "}
                  <span className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-lg ring-4 ring-surface-container-lowest/50">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      meeting_room
                    </span>
                    {" "}
                  </span>
                  {" "}
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-on-surface/90 text-on-primary font-label-mono text-label-mono backdrop-blur-md">
                    Living Modules
                  </span>
                  {" "}
                </button>
                <button className="absolute top-1/4 right-16 flex items-center gap-2 group/spot focus:outline-none" title="Station Helipad" type="button">
                  {" "}
                  <span className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-lg ring-4 ring-surface-container-lowest/50">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      flight
                    </span>
                    {" "}
                  </span>
                  {" "}
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-on-surface/90 text-on-primary font-label-mono text-label-mono backdrop-blur-md">
                    Helipad
                  </span>
                  {" "}
                </button>
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 bg-on-surface/85 backdrop-blur-md px-3 py-1.5 rounded-lg text-surface">
                    <span className="material-symbols-outlined text-[18px]">
                      drag_pan
                    </span>
                    <span className="font-label-mono text-label-mono">
                      Click & drag 360° • Click hotspots to enter
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint shadow-md transition-colors focus:ring-2 focus:ring-primary-container" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      fullscreen
                    </span>
                    {" "}
                    <span>
                      Launch Fullscreen 360° VR
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low/50 py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
                <div className="lg:col-span-6 bg-surface-container-lowest p-8 lg:p-10 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-mono text-label-mono font-bold">
                        MONTHLY EXPEDITION CHALLENGE
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        EPISODE 04
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                      The Secret Life of Ice Cores
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                      {" Can your class decode ancient atmospheric methane spikes from a 130-meter ice cylinder pulled from Princess Elizabeth Land? "}
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-8 bg-surface-container-low/60 p-4 rounded-xl">
                      <div className="flex flex-col">
                        <span className="font-label-mono text-[11px] text-outline uppercase">
                          Questions
                        </span>
                        <span className="font-title-md text-title-md text-on-surface font-bold">
                          10 Tasks
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-mono text-[11px] text-outline uppercase">
                          Duration
                        </span>
                        <span className="font-title-md text-title-md text-on-surface font-bold">
                          8 Minutes
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-mono text-[11px] text-outline uppercase">
                          Pass Mark
                        </span>
                        <span className="font-title-md text-title-md text-tertiary font-bold">
                          80% Score
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm focus:ring-2 focus:ring-primary" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        play_circle
                      </span>
                      {" "}
                      <span>
                        Start Quiz Challenge
                      </span>
                      {" "}
                    </button>
                    <div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">
                        verified
                      </span>
                      <span>
                        8,420 Students Certified
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div>
                    <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                      Credential Badges
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Official Digital Credentials
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {" Aligned with National Education Policy (NEP) competency frameworks. Verified certificates signed by NCPOR scientists upon quiz mastery. "}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">
                          workspace_premium
                        </span>
                      </div>
                      <div>
                        <span className="font-label-mono text-[10px] text-outline uppercase">
                          Bronze Level
                        </span>
                        <h4 className="font-title-md text-[15px] leading-snug text-on-surface font-semibold">
                          Junior Glaciologist
                        </h4>
                        <p className="font-label-mono text-[11px] text-on-surface-variant mt-0.5">
                          Cryosphere fundamentals
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">
                          explore
                        </span>
                      </div>
                      <div>
                        <span className="font-label-mono text-[10px] text-outline uppercase">
                          Silver Level
                        </span>
                        <h4 className="font-title-md text-[15px] leading-snug text-on-surface font-semibold">
                          Ocean Navigator
                        </h4>
                        <p className="font-label-mono text-[11px] text-on-surface-variant mt-0.5">
                          Currents & salinity mapping
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">
                          military_tech
                        </span>
                      </div>
                      <div>
                        <span className="font-label-mono text-[10px] text-outline uppercase">
                          Gold Fellow
                        </span>
                        <h4 className="font-title-md text-[15px] leading-snug text-on-surface font-semibold">
                          Polaris Master
                        </h4>
                        <p className="font-label-mono text-[11px] text-on-surface-variant mt-0.5">
                          Full multi-strand completion
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">
                          severe_cold
                        </span>
                      </div>
                      <div>
                        <span className="font-label-mono text-[10px] text-outline uppercase">
                          Applied STEM
                        </span>
                        <h4 className="font-title-md text-[15px] leading-snug text-on-surface font-semibold">
                          Sub-Zero Survivalist
                        </h4>
                        <p className="font-label-mono text-[11px] text-on-surface-variant mt-0.5">
                          Polar logistics & safety
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-24 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                  Interactive Lexicon
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                  Essential Polar Terminology
                </h2>
              </div>
              <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-2 w-full md:w-72 shadow-sm">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-2">
                  search
                </span>
                <input className="bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline w-full focus:outline-none" placeholder="Lookup term (e.g. Albedo, Sastrugi)..." type="text" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-mono text-[11px] text-primary font-bold">
                      01 / ATMOSPHERE
                    </span>
                    <button className="w-7 h-7 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" title="Listen pronunciation" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        volume_up
                      </span>
                      {" "}
                    </button>
                  </div>
                  <h3 className="font-headline-sm text-[18px] leading-tight text-on-surface mb-2">
                    Katabatic Winds
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Gravity-driven dense cold air masses cascading down high polar ice plateaus toward coastal seas at high velocities. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-0 font-label-mono text-[10px] text-outline">
                  IPA: /ˌkætəˈbætɪk/
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-mono text-[11px] text-primary font-bold">
                      02 / OPTICS
                    </span>
                    <button className="w-7 h-7 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" title="Listen pronunciation" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        volume_up
                      </span>
                      {" "}
                    </button>
                  </div>
                  <h3 className="font-headline-sm text-[18px] leading-tight text-on-surface mb-2">
                    Albedo Effect
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" The fraction of incoming solar radiation diffusely reflected by snow, fresh ice, or ocean water surfaces back into space. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-0 font-label-mono text-[10px] text-outline">
                  IPA: /ælˈbiːdəʊ/
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-mono text-[11px] text-primary font-bold">
                      03 / GLACIOLOGY
                    </span>
                    <button className="w-7 h-7 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" title="Listen pronunciation" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        volume_up
                      </span>
                      {" "}
                    </button>
                  </div>
                  <h3 className="font-headline-sm text-[18px] leading-tight text-on-surface mb-2">
                    Cryoconite
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Windborne mineral dust and micro-algal organic soot that lowers surface reflectivity, drilling localized melt holes. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-0 font-label-mono text-[10px] text-outline">
                  IPA: /kraɪˈɒkənaɪt/
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-mono text-[11px] text-primary font-bold">
                      04 / OCEANOGRAPHY
                    </span>
                    <button className="w-7 h-7 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" title="Listen pronunciation" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        volume_up
                      </span>
                      {" "}
                    </button>
                  </div>
                  <h3 className="font-headline-sm text-[18px] leading-tight text-on-surface mb-2">
                    Polynyas
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Persistent non-freezing open water areas surrounded by sea-ice pack, crucial for mammal respiration and winter heat venting. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-0 font-label-mono text-[10px] text-outline">
                  IPA: /pɒlɪnˈjɑː/
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-mono text-[11px] text-primary font-bold">
                      05 / MECHANICS
                    </span>
                    <button className="w-7 h-7 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors" title="Listen pronunciation" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        volume_up
                      </span>
                      {" "}
                    </button>
                  </div>
                  <h3 className="font-headline-sm text-[18px] leading-tight text-on-surface mb-2">
                    Glacial Calving
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" The mechanical rupture and detachment of colossal ice blocks from glaciers or floating ice shelves into open marine fjords. "}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t-0 font-label-mono text-[10px] text-outline">
                  IPA: /ˈkɑːvɪŋ/
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary-container hover:text-primary font-semibold transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                {" "}
                <span>
                  Open Full Polar Scientific Dictionary (140+ Terms)
                </span>
                {" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
                {" "}
              </a>
            </div>
          </section>
          <section className="w-full bg-surface-container-low/50 py-24">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                    Teacher Suite
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Educator Toolkit & Classroom Resources
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  {" Ready-to-deploy modular lesson plans mapped directly to CBSE, ICSE, and State Board science syllabi. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-secondary-container text-primary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[26px]">
                        menu_book
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[10px] text-secondary font-semibold uppercase">
                      PDF & DOCX Packs
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2">
                      Lesson Plans & Worksheets
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                      {" Complete instructional sequences, inquiry prompts, printable student workbooks, and scoring rubrics aligned with standard science curricula. "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="w-full py-2.5 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors" type="button">
                      {" "}
                      <span>
                        Download Full Pack
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[26px]">
                        science
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[10px] text-secondary font-semibold uppercase">
                      Hands-On STEM
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2">
                      Classroom Experiment Kits
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                      {" Safe, low-cost DIY experiments modeling salinity stratification, thermal albedo changes, and pressure melting inside regular lab glassware. "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="w-full py-2.5 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors" type="button">
                      {" "}
                      <span>
                        View 12 DIY Lab Guides
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[26px]">
                        video_camera_front
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[10px] text-tertiary font-semibold uppercase">
                      Direct Telemetry Link
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-2 mb-2">
                      Live Scientist Calls
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                      {" Schedule a direct 20-minute satellite video Q&A between your students and wintering researchers live at Maitri or Bharati stations. "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="w-full py-2.5 px-4 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center justify-between transition-colors shadow-sm" type="button">
                      {" "}
                      <span>
                        Request Live Slot
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        calendar_month
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-primary-container text-on-primary rounded-2xl p-8 lg:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/40 text-on-primary-container w-fit">
                    <span className="material-symbols-outlined text-[16px]">
                      school
                    </span>
                    <span className="font-label-mono text-label-mono font-semibold">
                      NCPOR Educator Network
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-primary">
                    Register Your School for Polar Science Immersion
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary-container">
                    {" Gain early access to updated seasonal ice cores, priority live link bookings, and free physical learning toolkits shipped by the Ministry of Earth Sciences. "}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface transition-colors shadow-sm focus:ring-2 focus:ring-on-primary" type="button">
                    {" Join Educator Portal "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <aside className="max-w-7xl mx-auto px-margin-mobile lg:px-margin pb-16 w-full">
            {" "}
            <div className="p-4 rounded-xl bg-surface-container-high/40 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                info
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" Sample data & scientific simulation notice: Field dispatches, telemetry samples, 360 models, and curriculum guides are prepared for educational outreach by NCPOR & MoES India. "}
              </p>
            </div>
            {" "}
          </aside>
        </div>
        {" "}
        {" "}
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(7,28,54,0.02)]">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter lg:gap-space-xl">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-[16px]">
                    ac_unit
                  </span>
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Headland Sada, Vasco da Gama, Goa 403804, India.
              </p>
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  public
                </span>
                <span>
                  ARCTIC • ANTARCTIC • HIMALAYA
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-title-md text-title-md text-on-surface mb- space-xs">
                Polar Stations
              </h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    Bharati Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary">
                    69°24′29″ S, 76°11′14″ E
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    Maitri Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary">
                    70°45′58″ S, 11°43′56″ E
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    Himadri Station (Arctic)
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary">
                    78°55′00″ N, 11°56′00″ E
                  </span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium text-on-surface">
                    Himansh Observatory (Spiti)
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary">
                    32°24′00″ N, 77°37′00″ E
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-title-md text-title-md text-on-surface mb-space-xs">
                Data & Outreach
              </h3>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="repository" to="/data">
                    National Polar Data Center
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" data-path="expedition-globe" href="#" onClick={(e)=>e.preventDefault()}>
                    Satellite Telemetry Visualizer
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" data-path="education" href="#" onClick={(e)=>e.preventDefault()}>
                    School Curriculum Kits & Modules
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="timeline" to="/stories/overwintering-in-the-schirmacher-oasis">
                    Indian Antarctic Program History
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="stories" to="/people/ananya-sen">
                    Scientist Dispatches & Field Journals
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="ask-polaris" to="/">
                    Polaris AI Science Assistant
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-on-surface">
                Expedition Dispatches
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Receive monthly polar science telemetry updates, seasonal voyage briefings, and educational resources directly from research crews.
              </p>
              <form className="flex flex-col gap-space-xs" onSubmit={(e)=>e.preventDefault()}>
                <div className="flex rounded-lg overflow-hidden bg-surface-container-lowest shadow-[0_2px_12px_rgba(11,31,58,0.03)]">
                  <input className="px-3 py-2 bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline w-full focus:outline-none" placeholder="Enter institutional email" type="email" />
                  <button className="bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md px-3 py-2 transition-colors flex items-center justify-center shrink-0" type="submit">
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </button>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Official MoES communication dispatch. Zero commercial spam.
                </span>
              </form>
            </div>
          </div>
          <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-highest/40 rounded-xl p-space-md">
            <div className="flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                info
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Sample data & scientific simulation notice: Field dispatches, telemetry samples, and educational summaries are prepared for public science outreach by NCPOR & MoES India.
              </p>
            </div>
            <div className="shrink-0 font-label-mono text-label-mono text-on-surface-variant">
              © 2025 POLARIS • NCPOR • Ministry of Earth Sciences
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
