import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_data_charts_polar_science_glossary_data/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "function switchMainTab(target) {\n      const sectionCharts = document.getElementById('sectionCharts');\n      const sectionGlossary = document.getElementById('sectionGlossary');\n      const btnCharts = document.getElementById('tabButtonCharts');\n      const btnGlossary = document.getElementById('tabButtonGlossary');\n      const pillCharts = document.getElementById('viewStateCharts');\n      const pillGlossary = document.getElementById('viewStateGlossary');\n\n      if (target === 'charts') {\n        sectionCharts.classList.remove('hidden');\n        sectionGlossary.classList.add('hidden');\n        \n        btnCharts.className = 'flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-title-md text-body-sm font-semibold shadow-sm transition-all';\n        btnGlossary.className = 'flex items-center gap-2 px-5 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface font-title-md text-body-sm font-semibold transition-all';\n\n        pillCharts.className = 'px-3 py-1 rounded-full text-label-mono font-label-mono bg-primary text-on-primary shadow-sm transition-all flex items-center gap-1';\n        pillGlossary.className = 'px-3 py-1 rounded-full text-label-mono font-label-mono bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-all flex items-center gap-1';\n      } else {\n        sectionCharts.classList.add('hidden');\n        sectionGlossary.classList.remove('hidden');\n\n        btnGlossary.className = 'flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-title-md text-body-sm font-semibold shadow-sm transition-all';\n        btnCharts.className = 'flex items-center gap-2 px-5 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface font-title-md text-body-sm font-semibold transition-all';\n\n        pillGlossary.className = 'px-3 py-1 rounded-full text-label-mono font-label-mono bg-primary text-on-primary shadow-sm transition-all flex items-center gap-1';\n        pillCharts.className = 'px-3 py-1 rounded-full text-label-mono font-label-mono bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-all flex items-center gap-1';\n      }\n    }\n\n    function openTermModal(termName) {\n      const modal = document.getElementById('termModalOverlay');\n      const title = document.getElementById('modalTermTitle');\n      if (title && termName) {\n        title.innerText = termName;\n      }\n      modal.classList.remove('hidden');\n      document.body.style.overflow = 'hidden';\n    }\n\n    function closeTermModal() {\n      const modal = document.getElementById('termModalOverlay');\n      modal.classList.add('hidden');\n      document.body.style.overflow = '';\n    }\n\n    function updateYearPreset(type) {\n      const label = document.getElementById('temporalLabel');\n      if (!label) return;\n      if (type === '5yr') {\n        label.innerText = '2019 — 2024 (Last 5 Years High-Res)';\n      } else if (type === '10yr') {\n        label.innerText = '2014 — 2024 (Decadal Modern Telemetry)';\n      } else {\n        label.innerText = '1981 — 2024 (Full Baseline)';\n      }\n    }\n\n    function filterGlossaryCards() {\n      const input = document.getElementById('glossarySearchInput').value.toLowerCase();\n      const cards = document.querySelectorAll('.glossary-card');\n      cards.forEach(card => {\n        const text = card.innerText.toLowerCase();\n        if (text.includes(input)) {\n          card.classList.remove('hidden');\n        } else {\n          card.classList.add('hidden');\n        }\n      });\n    }\n\n    // Close modal on Escape key\n    document.addEventListener('keydown', function(event) {\n      if (event.key === 'Escape') {\n        closeTermModal();\n      }\n    });";

export default function DataChartsPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-20 w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg shrink-0">
            <a className="flex flex-col" data-path="home" href="#" onClick={(e)=>e.preventDefault()}>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm tracking-tight text-primary font-bold">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
                  NCPOR
                </span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[10px] tracking-wider">
                MoES • Govt. of India
              </span>
            </a>
            <div className="hidden xl:flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface">
              <span className="inline-block w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-label-mono text-label-mono text-on-surface tracking-wider uppercase">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg px-3 py-1.5 shadow-sm">
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm shrink-0">
            <div className="hidden md:flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                search
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Search
              </span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface-container-high font-label-mono text-[10px] text-on-surface">
                ⌘K
              </kbd>
            </div>
            <div className="flex items-center rounded-lg bg-surface-container-low p-0.5">
              <button className="px-2 py-1 rounded font-label-mono text-label-mono bg-surface-container-lowest text-on-surface font-semibold shadow-xs" type="button">
                EN
              </button>
              <button className="px-2 py-1 rounded font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors" type="button">
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
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-14rem)]">
        <div className="flex flex-col w-full">
          <div className="w-full bg-surface-container-low py-2 px-margin-mobile lg:px-margin">
            <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                  NPDC Open Portal • Data Engine v4.2
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-mono text-label-mono text-on-surface-variant hidden sm:inline">
                  Interactive State:
                </span>
                <button className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-primary text-on-primary shadow-sm transition-all flex items-center gap-1" id="viewStateCharts" onClick={(e)=>window.__pol(e,"switchMainTab('charts')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[14px]">
                    bar_chart
                  </span>
                  {" Charts View "}
                </button>
                <button className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-all flex items-center gap-1" id="viewStateGlossary" onClick={(e)=>window.__pol(e,"switchMainTab('glossary')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[14px]">
                    menu_book
                  </span>
                  {" Glossary View "}
                </button>
                <button className="px-3 py-1 rounded-full text-label-mono font-label-mono bg-surface-container-highest text-primary font-semibold hover:bg-surface-variant transition-all flex items-center gap-1" id="viewStateModal" onClick={(e)=>window.__pol(e,"openTermModal('Katabatic Winds')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[14px]">
                    open_in_new
                  </span>
                  {" Term Modal (Open) "}
                </button>
              </div>
            </div>
          </div>
          <section className="w-full bg-surface pt-space-lg pb-space-md px-margin-mobile lg:px-margin">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-space-md">
              <nav className="flex items-center gap-2 text-on-surface-variant">
                <Link className="font-label-mono text-label-mono hover:text-primary transition-colors" to="/">
                  Home
                </Link>
                <span className="text-on-surface-variant text-[11px]">
                  /
                </span>
                <span className="font-label-mono text-label-mono text-primary font-semibold">
                  Data & Science Lexicon
                </span>
              </nav>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono mb-space-xs">
                    <span className="material-symbols-outlined text-[14px]">
                      insights
                    </span>
                    <span>
                      POLARIS IN-SITU ARCHIVE • 1981–2025
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-light tracking-tight">
                    {" Polar Data Observatory & Scientific Lexicon "}
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
                    {" Synthesized climate indicators, cryospheric anomaly models, and deep-polar terminologies maintained by the National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences. "}
                  </p>
                </div>
                <div className="flex items-center p-1.5 rounded-xl bg-surface-container-high shadow-inner shrink-0 self-start lg:self-end">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-title-md text-body-sm font-semibold shadow-sm transition-all" id="tabButtonCharts" onClick={(e)=>window.__pol(e,"switchMainTab('charts')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      equalizer
                    </span>
                    {" "}
                    <span>
                      Interactive Scientific Charts
                    </span>
                    {" "}
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface font-title-md text-body-sm font-semibold transition-all" id="tabButtonGlossary" onClick={(e)=>window.__pol(e,"switchMainTab('glossary')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      dictionary
                    </span>
                    {" "}
                    <span>
                      Cryospheric Glossary (A–Z)
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full flex flex-col" id="sectionCharts">
            <section className="w-full bg-surface-container-low py-space-md px-margin-mobile lg:px-margin">
              <div className="max-w-[1280px] mx-auto flex flex-col gap-space-md">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mr-1">
                      Region:
                    </span>
                    <button className="px-3 py-1.5 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-xs">
                      {" All Polar Regions "}
                    </button>
                    <button className="px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface hover:bg-surface-variant transition-colors">
                      {" Antarctica (Maitri & Bharati) "}
                    </button>
                    <button className="px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface hover:bg-surface-variant transition-colors">
                      {" Arctic (Svalbard / Ny-Ålesund) "}
                    </button>
                    <button className="px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface hover:bg-surface-variant transition-colors">
                      {" Himalaya (Himansh / Chandra Basin) "}
                    </button>
                    <button className="px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-lowest text-on-surface hover:bg-surface-variant transition-colors">
                      {" Southern Ocean "}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-mono text-label-mono">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        verified
                      </span>
                      <span>
                        NCPOR Peer-Reviewed Telemetry
                      </span>
                    </div>
                    <div className="relative inline-block text-left">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shadow-sm hover:opacity-95 transition-all">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          download
                        </span>
                        {" "}
                        <span>
                          Export Datasets
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          expand_more
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-title-md text-title-md text-on-surface">
                          Temporal Observation Window
                        </span>
                        <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">
                          43 Years of Records
                        </span>
                      </div>
                      <span className="font-label-mono text-label-mono text-primary font-bold tracking-wide" id="temporalLabel">
                        1981 — 2024
                      </span>
                    </div>
                    <div className="relative w-full py-1">
                      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden relative">
                        <div className="absolute left-[0%] right-[0%] top-0 bottom-0 bg-primary-container rounded-full" />
                      </div>
                      <div className="flex justify-between items-center text-on-surface-variant font-label-mono text-[10px] pt-1">
                        <span>
                          1981 (First Expedition)
                        </span>
                        <span>
                          1995
                        </span>
                        <span>
                          2008 (Himadri Base)
                        </span>
                        <span>
                          2016 (Himansh Base)
                        </span>
                        <span className="text-primary font-bold">
                          2024 (Current Satellite Cycle)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 self-end lg:self-center">
                    <span className="font-label-mono text-label-mono text-on-surface-variant mr-1">
                      Span:
                    </span>
                    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high text-label-mono font-label-mono transition-colors" onClick={(e)=>window.__pol(e,"updateYearPreset('5yr')")}>
                      {" Last 5 Years "}
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high text-label-mono font-label-mono transition-colors" onClick={(e)=>window.__pol(e,"updateYearPreset('10yr')")}>
                      {" 10-Yr Decadal "}
                    </button>
                    <button className="px-2.5 py-1 rounded bg-primary text-on-primary text-label-mono font-label-mono font-semibold transition-colors" onClick={(e)=>window.__pol(e,"updateYearPreset('full')")}>
                      {" Baseline (1981–2024) "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin">
              <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
                <article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                            Cryospheric Anomaly Record
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="font-label-mono text-[10px] text-on-surface-variant">
                            SSM/I & AMSR-E SENSORS
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {" Antarctic & Arctic Sea-Ice Extent (1981–2024) "}
                        </h2>
                      </div>
                      <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer p-1 rounded-full bg-surface-container-low" title="Full Screen View">
                        open_in_full
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-space-sm p-3 rounded-lg bg-surface-container-low">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-headline-md text-headline-md font-bold text-primary">
                          2.14M
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          sq km (Summer Min)
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          trending_down
                        </span>
                        <span>
                          -12.8% vs 1981–2010 Climatology Mean
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-surface rounded-lg p-3 relative">
                      <div className="flex items-center justify-between text-[11px] font-label-mono text-on-surface-variant pb-2">
                        <span>
                          Extent (10⁶ km²)
                        </span>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-0.5 bg-primary" />
                            {" Arctic Summer Min"}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-0.5 bg-secondary" />
                            {" Antarctic Winter Max"}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-0.5 border-b border-dashed border-outline" />
                            {" 30-Yr Mean"}
                          </span>
                        </div>
                      </div>
                      <svg aria-label="Line graph of polar sea ice extent trends over 43 years" className="w-full h-48 overflow-visible" viewBox="0 0 540 220">
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="40" x2="520" y1="20" y2="20" />
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="40" x2="520" y1="65" y2="65" />
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="40" x2="520" y1="110" y2="110" />
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="40" x2="520" y1="155" y2="155" />
                        <line className="text-surface-variant" stroke="currentColor" x1="40" x2="520" y1="195" y2="195" />
                        <text className="text-[9px] fill-outline font-label-mono text-right" textAnchor="end" x="32" y="24">
                          20M
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono text-right" textAnchor="end" x="32" y="69">
                          15M
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono text-right" textAnchor="end" x="32" y="114">
                          10M
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono text-right" textAnchor="end" x="32" y="159">
                          5M
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono text-right" textAnchor="end" x="32" y="198">
                          0
                        </text>
                        <path d="M 45 42 Q 120 40 180 46 T 310 44 T 420 58 T 515 62" fill="none" stroke="#41636e" strokeLinecap="round" strokeWidth="2.5" />
                        <path d="M 45 140 Q 130 142 210 152 T 340 168 T 440 178 T 515 186" fill="none" stroke="#006070" strokeLinecap="round" strokeWidth="2.5" />
                        <line stroke="#6f797c" strokeDasharray="4 4" strokeWidth="1.5" x1="45" x2="515" y1="145" y2="145" />
                        <path d="M 45 140 Q 130 142 210 152 T 340 168 T 440 178 T 515 186 L 515 195 L 45 195 Z" fill="#1f7a8c" fillOpacity="0.08" />
                        <circle className="animate-pulse" cx="515" cy="62" fill="#41636e" r="4" />
                        <circle className="animate-pulse" cx="515" cy="186" fill="#006070" r="4" />
                        <text className="text-[10px] fill-outline font-label-mono" x="50" y="210">
                          1981
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="180" y="210">
                          1995
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="310" y="210">
                          2008
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="430" y="210">
                          2018
                        </text>
                        <text className="text-[10px] fill-primary font-label-mono font-bold" x="505" y="210">
                          2024
                        </text>
                      </svg>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Dual hemispheric trends illustrate unprecedented synchronous reduction in 2023–2024, with Southern Ocean ice margins receding significantly past the 2σ threshold envelope. "}
                    </p>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex items-center justify-between pt-space-md mt-space-sm bg-surface-container-lowest">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-primary font-semibold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        headphones
                      </span>
                      {" "}
                      <span>
                        Listen (Audio Brief 1:12)
                      </span>
                      {" "}
                    </button>
                    <div className="flex items-center gap-1">
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          file_download
                        </span>
                        {" "}
                        <span>
                          CSV
                        </span>
                        {" "}
                      </button>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          code
                        </span>
                        {" "}
                        <span>
                          Embed
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                            In-Situ Micro-Meteorology
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="font-label-mono text-[10px] text-on-surface-variant">
                            MAITRI • BHARATI • HIMADRI
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {" Station Mean Surface Temperature Anomalies "}
                        </h2>
                      </div>
                      <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer p-1 rounded-full bg-surface-container-low" title="Full Screen View">
                        open_in_full
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-space-sm p-3 rounded-lg bg-surface-container-low">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-headline-md text-headline-md font-bold text-on-surface">
                          +1.42°C
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          Mean Decadal Positive Shift
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          thermostat
                        </span>
                        <span>
                          Arctic Ny-Ålesund rate 2.8x global
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-surface rounded-lg p-3 relative">
                      <div className="flex items-center justify-between text-[11px] font-label-mono text-on-surface-variant pb-2">
                        <span>
                          Anomaly (°C from 1991-2020 baseline)
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded-xs bg-secondary-container" />
                            {" Cooler"}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded-xs bg-primary" />
                            {" Warmer"}
                          </span>
                        </div>
                      </div>
                      <svg aria-label="Vertical bar chart displaying station temperature anomalies" className="w-full h-48 overflow-visible" viewBox="0 0 540 220">
                        <line stroke="#071c36" strokeWidth="1.5" x1="40" x2="520" y1="110" y2="110" />
                        <text className="text-[10px] fill-on-surface font-label-mono font-bold" textAnchor="end" x="32" y="114">
                          0.0°
                        </text>
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="40" x2="520" y1="40" y2="40" />
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="32" y="44">
                          +2.0°
                        </text>
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="40" x2="520" y1="180" y2="180" />
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="32" y="184">
                          -2.0°
                        </text>
                        <rect fill="#c1e6f3" height="42" rx="2" width="14" x="55" y="110" />
                        <rect fill="#c1e6f3" height="28" rx="2" width="14" x="75" y="110" />
                        <rect fill="#006070" height="10" rx="2" width="14" x="95" y="100" />
                        <rect fill="#c1e6f3" height="56" rx="2" width="14" x="115" y="110" />
                        <rect fill="#c1e6f3" height="18" rx="2" width="14" x="135" y="110" />
                        <rect fill="#006070" height="18" rx="2" width="14" x="155" y="92" />
                        <rect fill="#006070" height="25" rx="2" width="14" x="180" y="85" />
                        <rect fill="#c1e6f3" height="20" rx="2" width="14" x="200" y="110" />
                        <rect fill="#006070" height="32" rx="2" width="14" x="220" y="78" />
                        <rect fill="#006070" height="38" rx="2" width="14" x="240" y="72" />
                        <rect fill="#c1e6f3" height="12" rx="2" width="14" x="260" y="110" />
                        <rect fill="#006070" height="45" rx="2" width="14" x="280" y="65" />
                        <rect fill="#006070" height="50" rx="2" width="14" x="305" y="60" />
                        <rect fill="#006070" height="58" rx="2" width="14" x="325" y="52" />
                        <rect fill="#006070" height="55" rx="2" width="14" x="345" y="55" />
                        <rect fill="#006070" height="66" rx="2" width="14" x="365" y="44" />
                        <rect fill="#006070" height="72" rx="2" width="14" x="385" y="38" />
                        <rect fill="#006070" height="68" rx="2" width="14" x="405" y="42" />
                        <rect fill="#1f7a8c" height="80" rx="2" width="14" x="425" y="30" />
                        <rect fill="#006070" height="86" rx="2" width="14" x="445" y="24" />
                        <rect fill="#006070" height="92" rx="2" width="14" x="465" y="18" />
                        <rect fill="#ba1a1a" height="98" rx="2" width="14" x="485" y="12" />
                        <path d="M 62 135 Q 160 115 250 85 T 390 40 T 492 14" fill="none" stroke="#ba1a1a" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="2" />
                        <text className="text-[10px] fill-outline font-label-mono" x="62" y="210">
                          1985
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="190" y="210">
                          1998
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="315" y="210">
                          2012
                        </text>
                        <text className="text-[10px] fill-error font-label-mono font-bold" x="480" y="210">
                          2024 Peak
                        </text>
                      </svg>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Sensors at Himadri (Svalbard) observe persistent positive amplification since 2012, while coastal Antarctic stations (Bharati) recorded anomalous warm foehn intrusions in March 2024. "}
                    </p>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex items-center justify-between pt-space-md mt-space-sm bg-surface-container-lowest">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-primary font-semibold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        headphones
                      </span>
                      {" "}
                      <span>
                        Listen (Audio Brief 0:58)
                      </span>
                      {" "}
                    </button>
                    <div className="flex items-center gap-1">
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          file_download
                        </span>
                        {" "}
                        <span>
                          CSV
                        </span>
                        {" "}
                      </button>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          code
                        </span>
                        {" "}
                        <span>
                          Embed
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                            Thermohaline Hydrography
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="font-label-mono text-[10px] text-on-surface-variant">
                            ORV SAGAR KANYA CTD ROSETTE
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {" Southern Ocean Salinity & Thermohaline Profile "}
                        </h2>
                      </div>
                      <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer p-1 rounded-full bg-surface-container-low" title="Full Screen View">
                        open_in_full
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-space-sm p-3 rounded-lg bg-surface-container-low">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-headline-md text-headline-md font-bold text-primary">
                          34.2 PSU
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          Antarctic Intermediate Water (AAIW)
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          water
                        </span>
                        <span>
                          Freshening Rate -0.04 PSU/Decade
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-surface rounded-lg p-3 relative">
                      <div className="flex items-center justify-between text-[11px] font-label-mono text-on-surface-variant pb-2">
                        <span>
                          Depth: 0m to 4,000m (45°S to 68°S Transect)
                        </span>
                        <span className="font-semibold text-primary">
                          Isohaline Contours
                        </span>
                      </div>
                      <svg aria-label="Stratified ocean depth versus salinity contour graph" className="w-full h-48 overflow-visible" viewBox="0 0 540 220">
                        <defs>
                          <linearGradient id="oceanDepthGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                            {" "}
                            <stop offset="0%" stopColor="#c1e6f3" stopOpacity="0.9" />
                            {" "}
                            <stop offset="40%" stopColor="#83d2e6" stopOpacity="0.8" />
                            {" "}
                            <stop offset="80%" stopColor="#1f7a8c" stopOpacity="0.9" />
                            {" "}
                            <stop offset="100%" stopColor="#001f26" stopOpacity="0.95" />
                            {" "}
                          </linearGradient>
                        </defs>
                        <rect fill="url(#oceanDepthGrad)" height="175" rx="4" width="465" x="50" y="15" />
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="42" y="25">
                          0 m
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="42" y="65">
                          500 m
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="42" y="105">
                          1,500 m
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="42" y="145">
                          2,500 m
                        </text>
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="42" y="185">
                          4,000 m
                        </text>
                        <path d="M 50 35 C 150 45, 280 80, 515 95" fill="none" opacity="0.8" stroke="#ffffff" strokeDasharray="3 3" strokeWidth="1.5" />
                        <path d="M 50 70 C 180 90, 320 120, 515 130" fill="none" opacity="0.9" stroke="#ffffff" strokeWidth="2" />
                        <path d="M 50 115 C 220 130, 360 148, 515 160" fill="none" opacity="0.7" stroke="#ffffff" strokeDasharray="2 2" strokeWidth="1.5" />
                        <rect fill="#071c36" fillOpacity="0.7" height="20" rx="4" width="130" x="70" y="38" />
                        <text className="text-[10px] fill-white font-label-mono font-medium" x="75" y="52">
                          Antarctic Surface Water
                        </text>
                        <rect fill="#071c36" fillOpacity="0.7" height="20" rx="4" width="145" x="180" y="98" />
                        <text className="text-[10px] fill-white font-label-mono font-medium" x="185" y="112">
                          Circumpolar Deep Water (CDW)
                        </text>
                        <rect fill="#071c36" fillOpacity="0.7" height="20" rx="4" width="165" x="330" y="152" />
                        <text className="text-[10px] fill-white font-label-mono font-medium" x="335" y="166">
                          Antarctic Bottom Water (AABW)
                        </text>
                        <circle cx="120" cy="85" fill="#6afbc6" r="3" />
                        <circle cx="230" cy="118" fill="#6afbc6" r="3" />
                        <circle cx="340" cy="142" fill="#6afbc6" r="3" />
                        <circle cx="440" cy="155" fill="#6afbc6" r="3" />
                        <text className="text-[10px] fill-outline font-label-mono" x="60" y="208">
                          45°S Sub-Tropical
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="230" y="208">
                          56°S Polar Front
                        </text>
                        <text className="text-[10px] fill-primary font-label-mono font-semibold" x="440" y="208">
                          68°S Prydz Bay
                        </text>
                      </svg>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" CTD probe profiling indicates gradual freshening of Antarctic Intermediate Water, linked to increased basal melt discharges from continental ice shelf margins into the Prydz Bay gyre. "}
                    </p>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex items-center justify-between pt-space-md mt-space-sm bg-surface-container-lowest">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-primary font-semibold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        headphones
                      </span>
                      {" "}
                      <span>
                        Listen (Audio Brief 1:30)
                      </span>
                      {" "}
                    </button>
                    <div className="flex items-center gap-1">
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          file_download
                        </span>
                        {" "}
                        <span>
                          NetCDF
                        </span>
                        {" "}
                      </button>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          code
                        </span>
                        {" "}
                        <span>
                          Embed
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                            High-Altitude Third Pole Cryosphere
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="font-label-mono text-[10px] text-on-surface-variant">
                            HIMANSH OBSERVATORY (4,080M)
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {" Himalayan Cryosphere: Chandra Basin Mass Balance "}
                        </h2>
                      </div>
                      <span className="material-symbols-outlined text-secondary hover:text-primary cursor-pointer p-1 rounded-full bg-surface-container-low" title="Full Screen View">
                        open_in_full
                      </span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-space-sm p-3 rounded-lg bg-surface-container-low">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-headline-md text-headline-md font-bold text-error">
                          -680
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          mm w.e./year (Water Equivalent)
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-1 font-label-mono text-label-mono px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          warning
                        </span>
                        <span>
                          Batal & Samudra Tapu Glaciers accelerated thinning
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-surface rounded-lg p-3 relative">
                      <div className="flex items-center justify-between text-[11px] font-label-mono text-on-surface-variant pb-2">
                        <span>
                          Annual Mass Loss (mm w.e.)
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-2.5 rounded-xs bg-secondary" />
                            {" Annual Loss"}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2.5 h-0.5 bg-primary" />
                            {" Cumulative Deficit"}
                          </span>
                        </div>
                      </div>
                      <svg aria-label="Himalayan glacier mass balance bar and cumulative line chart" className="w-full h-48 overflow-visible" viewBox="0 0 540 220">
                        <line stroke="#071c36" strokeWidth="1.5" x1="45" x2="520" y1="25" y2="25" />
                        <text className="text-[9px] fill-on-surface font-label-mono font-bold" textAnchor="end" x="38" y="28">
                          0
                        </text>
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="45" x2="520" y1="70" y2="70" />
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="38" y="74">
                          -400
                        </text>
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="45" x2="520" y1="120" y2="120" />
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="38" y="124">
                          -800
                        </text>
                        <line className="text-surface-container-highest" stroke="currentColor" strokeDasharray="2 2" x1="45" x2="520" y1="170" y2="170" />
                        <text className="text-[9px] fill-outline font-label-mono" textAnchor="end" x="38" y="174">
                          -1200
                        </text>
                        <rect fill="#41636e" height="42" opacity="0.85" rx="1" width="16" x="65" y="25" />
                        <rect fill="#41636e" height="55" opacity="0.85" rx="1" width="16" x="95" y="25" />
                        <rect fill="#41636e" height="48" opacity="0.85" rx="1" width="16" x="125" y="25" />
                        <rect fill="#41636e" height="68" opacity="0.85" rx="1" width="16" x="155" y="25" />
                        <rect fill="#41636e" height="60" opacity="0.85" rx="1" width="16" x="185" y="25" />
                        <rect fill="#41636e" height="78" opacity="0.85" rx="1" width="16" x="215" y="25" />
                        <rect fill="#41636e" height="85" opacity="0.85" rx="1" width="16" x="245" y="25" />
                        <rect fill="#41636e" height="92" opacity="0.85" rx="1" width="16" x="275" y="25" />
                        <rect fill="#41636e" height="88" opacity="0.85" rx="1" width="16" x="305" y="25" />
                        <rect fill="#41636e" height="110" opacity="0.85" rx="1" width="16" x="335" y="25" />
                        <rect fill="#41636e" height="96" opacity="0.85" rx="1" width="16" x="365" y="25" />
                        <rect fill="#41636e" height="118" opacity="0.85" rx="1" width="16" x="395" y="25" />
                        <rect fill="#006070" height="124" rx="1" width="16" x="425" y="25" />
                        <rect fill="#006070" height="135" rx="1" width="16" x="455" y="25" />
                        <rect fill="#ba1a1a" height="145" rx="1" width="16" x="485" y="25" />
                        <path d="M 73 35 L 103 45 L 133 55 L 163 70 L 193 82 L 223 98 L 253 112 L 283 126 L 313 138 L 343 155 L 373 166 L 403 178 L 433 186 L 463 192 L 493 198" fill="none" stroke="#006070" strokeLinecap="round" strokeWidth="2.5" />
                        <circle cx="493" cy="198" fill="#ba1a1a" r="4" />
                        <text className="text-[10px] fill-outline font-label-mono" x="65" y="212">
                          2010
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="215" y="212">
                          2015
                        </text>
                        <text className="text-[10px] fill-outline font-label-mono" x="365" y="212">
                          2020
                        </text>
                        <text className="text-[10px] fill-error font-label-mono font-bold" x="480" y="212">
                          2024 (Record)
                        </text>
                      </svg>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" In-situ ablation stakes and dGPS surveys from Himansh corroborate steady thinning of Sutri Dhaka and Batal glaciers due to reduced winter snowfall and prolonged summer ablation windows. "}
                    </p>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex items-center justify-between pt-space-md mt-space-sm bg-surface-container-lowest">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-primary font-semibold transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        headphones
                      </span>
                      {" "}
                      <span>
                        Listen (Audio Brief 1:15)
                      </span>
                      {" "}
                    </button>
                    <div className="flex items-center gap-1">
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          file_download
                        </span>
                        {" "}
                        <span>
                          GeoTIFF
                        </span>
                        {" "}
                      </button>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          code
                        </span>
                        {" "}
                        <span>
                          Embed
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
              </div>
            </section>
          </div>
          <div className="w-full flex flex-col hidden" id="sectionGlossary">
            <section className="w-full bg-surface-container-low py-space-md px-margin-mobile lg:px-margin">
              <div className="max-w-[1280px] mx-auto flex flex-col gap-space-md">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
                  <div className="relative flex-1 max-w-2xl">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                      search
                    </span>
                    <input className="w-full pl-11 pr-14 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-hidden focus:ring-2 focus:ring-primary shadow-xs transition-all" id="glossarySearchInput" placeholder="Search 140+ polar science terms (e.g., Katabatic, Albedo, Polynya, Firn)..." type="text" onKeyUp={(e)=>window.__pol(e,"filterGlossaryCards()")} />
                    <kbd className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-mono text-[10px]">
                      ⌘K
                    </kbd>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-label-mono text-label-mono">
                    <span>
                      {"Showing "}
                      <strong className="text-on-surface">
                        6
                      </strong>
                      {" of "}
                      <strong className="text-on-surface">
                        142
                      </strong>
                      {" curated entries"}
                    </span>
                  </div>
                </div>
                <div className="w-full overflow-x-auto pb-1 scrollbar-none">
                  <div className="inline-flex items-center gap-1.5 min-w-max p-1 bg-surface-container-lowest rounded-xl shadow-xs">
                    <button className="px-3 py-1.5 rounded-lg text-label-md font-label-md bg-primary text-on-primary font-semibold">
                      ALL
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-primary font-bold hover:bg-surface-container transition-colors">
                      A
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      B
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-primary font-bold hover:bg-surface-container transition-colors">
                      C
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      D
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      E
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-primary font-bold hover:bg-surface-container transition-colors">
                      F
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      G
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      H
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      I
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      J
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md bg-secondary-container text-on-secondary-container font-bold hover:bg-surface-container transition-colors">
                      K
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      L
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      M
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      N
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      O
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-primary font-bold hover:bg-surface-container transition-colors">
                      P
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      Q
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      R
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      S
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      T
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      U
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      V
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      W
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      X
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      Y
                    </button>
                    <button className="px-2.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">
                      Z
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin">
              <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                <article className="glossary-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer" onClick={(e)=>window.__pol(e,"openTermModal('Katabatic Winds')")}>
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-mono text-[10px] font-semibold uppercase tracking-wider">
                        Meteorology & Boundary Layer
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        K-01
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                        {" "}
                        <span>
                          Katabatic Winds
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_outward
                        </span>
                        {" "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary mt-0.5">
                        /ˌkæt.əˈbæt.ɪk/
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" High-density gravity drainage winds formed when radiant cooling atop the continental Antarctic ice sheet creates a steep pressure gradient, spilling ferocious downslope wind vectors into coastal oases. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                    <span className="inline-flex items-center gap-1 text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        sensors
                      </span>
                      {" Maitri AWS Telemetry "}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-0.5">
                      Explore Term →
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="glossary-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer" onClick={(e)=>window.__pol(e,"openTermModal('Albedo Feedback')")}>
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-mono text-[10px] font-semibold uppercase tracking-wider">
                        Radiative Physics
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        A-04
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                        {" "}
                        <span>
                          Albedo Feedback
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_outward
                        </span>
                        {" "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary mt-0.5">
                        /ælˈbiː.doʊ ˈfiːd.bæk/
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" The non-linear self-reinforcing thermodynamic mechanism where retreating high-albedo sea ice (reflectance ~0.85) exposes dark oceanic water (~0.06), drastically accelerating solar energy absorption. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                    <span className="inline-flex items-center gap-1 text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        wb_sunny
                      </span>
                      {" 0.85 Snow vs 0.06 Ocean "}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-0.5">
                      Explore Term →
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="glossary-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer" onClick={(e)=>window.__pol(e,"openTermModal('Cryoconite Holes')")}>
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-mono text-[10px] font-semibold uppercase tracking-wider">
                        Glacio-Microbiology
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        C-12
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                        {" "}
                        <span>
                          Cryoconite Holes
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_outward
                        </span>
                        {" "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary mt-0.5">
                        /kraɪˈɒk.ə.naɪt hoʊlz/
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" Cylindrical water-filled melt depressions formed on ablation zones when windblown dark mineral and microbial particles absorb solar flux, melting downward into glacial surfaces. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                    <span className="inline-flex items-center gap-1 text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        biotech
                      </span>
                      {" Cyanobacteria Biomass "}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-0.5">
                      Explore Term →
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="glossary-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer" onClick={(e)=>window.__pol(e,"openTermModal('Polynya')")}>
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-mono text-[10px] font-semibold uppercase tracking-wider">
                        Oceanography & Sea Ice
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        P-03
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                        {" "}
                        <span>
                          Polynya
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_outward
                        </span>
                        {" "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary mt-0.5">
                        /pəˈlɪn.jə/
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" Non-linear open water regions surrounded by consolidated sea ice, sustained through upwelling sensible heat or persistent offshore katabatic winds driving newly formed frazil ice seaward. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                    <span className="inline-flex items-center gap-1 text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        pets
                      </span>
                      {" Coastal Ice Factory "}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-0.5">
                      Explore Term →
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="glossary-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer" onClick={(e)=>window.__pol(e,"openTermModal('Firn Stratification')")}>
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-mono text-[10px] font-semibold uppercase tracking-wider">
                        Paleoclimatology & Ice Cores
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        F-08
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                        {" "}
                        <span>
                          Firn Stratification
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_outward
                        </span>
                        {" "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary mt-0.5">
                        /fɪərn ˌstræt.ɪ.fɪˈkeɪ.ʃən/
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" The multi-decadal metamorphic compaction zone between loose superficial snow (density ~0.3 g/cm³) and hermetically sealed bubble-trapping glacial ice (~0.83 g/cm³), fundamental for gas age dating. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                    <span className="inline-flex items-center gap-1 text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        science
                      </span>
                      {" Ice Core Chronology "}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-0.5">
                      Explore Term →
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="glossary-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer" onClick={(e)=>window.__pol(e,"openTermModal('Frazer Calving Event')")}>
                  {" "}
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-mono text-[10px] font-semibold uppercase tracking-wider">
                        Structural Glaciology
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        F-14
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                        {" "}
                        <span>
                          Frazer Calving Event
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          arrow_outward
                        </span>
                        {" "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary mt-0.5">
                        /ˈfreɪ.zər ˈkæv.ɪŋ ɪˈvɛnt/
                      </p>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" Catastrophic transverse mechanical rupture propagation along basal suture rifts of floating glacier tongues, decoupling tabular megabergs into the Southern Ocean drift corridor. "}
                    </p>
                  </div>
                  {" "}
                  <div className="pt-space-md mt-space-md flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                    <span className="inline-flex items-center gap-1 text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        crisis_alert
                      </span>
                      {" Synthetic Aperture Radar "}
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-0.5">
                      Explore Term →
                    </span>
                  </div>
                  {" "}
                </article>
              </div>
            </section>
          </div>
          <div aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm hidden" id="termModalOverlay" role="dialog">
            <div className="relative w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden max-h-[921px] flex flex-col animate-in fade-in zoom-in duration-200">
              <div className="p-space-lg flex items-start justify-between bg-surface-container-low shrink-0">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-mono text-[10px] font-semibold tracking-wide uppercase">
                      Meteorology & Boundary Layer Dynamics
                    </span>
                    <span className="font-label-mono text-label-mono text-outline">
                      NCPOR LEX-ID: 7045S-KAT
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold" id="modalTermTitle">
                    {" Katabatic Winds (Gravity Drainage Winds) "}
                  </h2>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="font-label-mono text-body-sm text-secondary">
                      /ˌkæt.əˈbæt.ɪk/
                    </span>
                    <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-mono text-label-mono transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        volume_up
                      </span>
                      {" "}
                      <span>
                        Listen 0:08
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <button className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors" onClick={(e)=>window.__pol(e,"closeTermModal()")}>
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                  {" "}
                </button>
              </div>
              <div className="p-space-lg overflow-y-auto space-y-space-lg">
                <div className="rounded-xl overflow-hidden bg-surface-container p-space-md relative flex flex-col md:flex-row gap-space-md items-center">
                  <div className="w-full md:w-1/2 h-44 bg-surface-container-lowest rounded-lg p-2 flex flex-col justify-between relative overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] font-label-mono text-on-surface-variant">
                      <span>
                        Antarctic Ice Sheet Dome (3,200m)
                      </span>
                      <span>
                        Coast / Oasis
                      </span>
                    </div>
                    <svg aria-label="Schematic diagram of gravity driven katabatic winds pouring down Antarctic plateau" className="w-full h-28" viewBox="0 0 280 120">
                      <path d="M 0 15 Q 110 30 190 85 L 280 92 L 280 120 L 0 120 Z" fill="#dee8ff" />
                      <polygon fill="#6f797c" points="190,85 210,50 230,88" />
                      <text className="text-[8px] fill-on-surface font-label-mono" textAnchor="middle" x="210" y="45">
                        Nunatak
                      </text>
                      <rect fill="#006070" height="7" rx="1" width="12" x="235" y="80" />
                      <text className="text-[8px] fill-primary font-label-mono" textAnchor="middle" x="241" y="75">
                        Maitri
                      </text>
                      <path d="M 30 25 C 80 40, 140 70, 195 95" fill="none" markerEnd="url(#arrow)" stroke="#006070" strokeDasharray="4 3" strokeWidth="2.5" />
                      <path d="M 60 15 C 110 30, 170 60, 225 85" fill="none" stroke="#1f7a8c" strokeDasharray="4 3" strokeWidth="2" />
                    </svg>
                    <div className="flex justify-between items-center text-[9px] font-label-mono text-secondary">
                      <span>
                        Inversion Layer Cooling
                      </span>
                      <span>
                        Gravity Acceleration: 45–140 kt
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-44 rounded-lg overflow-hidden relative">
                    <img className="w-full h-full object-cover" data-alt="Expedition meteorologist in high-contrast orange Arctic polar parka inspecting an automated weather station anemometer in Antarctica during high katabatic winds with drifting snow spindrift in crisp cinematic scientific documentary style with cool cyan and teal atmospheric highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnWaiqoWCl6h1lfszxrppTbrup1qg9erFzaAffkX3DWZtnmit7fYlLqT6WfsEs_MvJ7pNvDsjJShCnXNIfov2GnWMnl2VvfsCrn90J62BGDabHohs3J5FfALaRA6f5Yyutt_yoan2s42mbMAC4f1YMZMkmrd3gEwo-yPtKbm84f2xPLgzHgWBCQ38AvtQe4-S9IUJLZQOKhkJvMP9EDuri_qqMVET7XpEWvmCsSKtUmWQTFjdd_JWM" />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-mono text-[9px]">
                      {" Schirmacher Oasis AWS Mast "}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-2 font-semibold">
                    Physical Mechanism & Dynamics
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Katabatic winds originate over the high continental Antarctic ice dome (e.g., Dome C and Amery hinterlands) where intense radiative cooling produces an extremely dense, shallow thermal inversion layer of cold air (often 10–50 m thick). Driven by negative buoyancy along gravitational gradients, this cold air accelerates downslope toward the coast. When channeled through glacial valleys and nunatak breaches surrounding stations like Maitri, wind speeds regularly exceed storm-force thresholds without cyclonic synoptic triggers. "}
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm p-space-md rounded-xl bg-surface-container-low">
                  <div className="flex flex-col">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">
                      Typical Velocity
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      30–80 kts
                    </span>
                    <span className="font-label-mono text-[10px] text-on-surface-variant">
                      Continuous drainage
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">
                      Peak Blast Velocity
                    </span>
                    <span className="font-headline-sm text-headline-sm text-error font-bold">
                      {">165 km/h"}
                    </span>
                    <span className="font-label-mono text-[10px] text-on-surface-variant">
                      Maitri record (Jun 2018)
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">
                      Annual Frequency
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      210 Days
                    </span>
                    <span className="font-label-mono text-[10px] text-on-surface-variant">
                      Recorded in Schirmacher
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">
                      Inversion Thickness
                    </span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                      15–80 m
                    </span>
                    <span className="font-label-mono text-[10px] text-on-surface-variant">
                      Stable nocturnal layer
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-on-surface mb-3 font-semibold">
                    Related Field Dispatches & Case Studies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <Link className="p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center gap-3 group" to="/stories/overwintering-in-the-schirmacher-oasis">
                      {" "}
                      <span className="material-symbols-outlined text-[28px] text-primary p-2 rounded-lg bg-surface-container-lowest">
                        menu_book
                      </span>
                      {" "}
                      <div className="flex flex-col">
                        <span className="font-title-md text-body-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                          Overwintering in Schirmacher Oasis
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          38th Indian Antarctic Expedition • Dispatch #14
                        </span>
                      </div>
                      {" "}
                    </Link>
                    <a className="p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center gap-3 group" href="#" onClick={(e)=>e.preventDefault()}>
                      {" "}
                      <span className="material-symbols-outlined text-[28px] text-primary p-2 rounded-lg bg-surface-container-lowest">
                        satellite_alt
                      </span>
                      {" "}
                      <div className="flex flex-col">
                        <span className="font-title-md text-body-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                          Micro-Meteorology at Pod 4
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Boundary layer turbulence logging at Bharati
                        </span>
                      </div>
                      {" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-space-md px-space-lg bg-surface-container flex flex-wrap items-center justify-between gap-space-sm shrink-0">
                <div className="flex items-center gap-2">
                  <Link className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant text-primary font-label-mono text-label-mono transition-colors" to="/data">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      dataset
                    </span>
                    {" "}
                    <span>
                      NPDC Telemetry Dataset (DOI: 10.1016/ncpor.polar.2024)
                    </span>
                    {" "}
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1" onClick={(e)=>window.__pol(e,"navigator.clipboard.writeText('NCPOR Polar Science Lexicon: Katabatic Winds (Gravity Drainage Winds). Indian National Centre for Polar and Ocean Research, 2025.'); alert('Citation copied to clipboard (APA Format)!');")}>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      content_copy
                    </span>
                    {" "}
                    <span>
                      Copy Citation
                    </span>
                    {" "}
                  </button>
                  <button className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:opacity-95 transition-opacity" onClick={(e)=>window.__pol(e,"closeTermModal()")}>
                    {" Close "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className="w-full bg-surface-container-low py-space-md px-margin-mobile lg:px-margin">
            <div className="max-w-[1280px] mx-auto flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-[28px] shrink-0">
                info
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {" "}
                <strong>
                  Sample data & scientific simulation notice:
                </strong>
                {" Field dispatches, telemetry samples, and educational summaries are prepared for public science outreach by NCPOR & MoES India. Operational research teams should fetch high-frequency raw telemetry arrays through the authenticated NPDC Research Gateway. "}
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(7,28,54,0.03)] py-space-xl">
        <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-space-xl">
            <div className="lg:col-span-2 flex flex-col gap-space-sm">
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
                  PORTAL
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Government of India. Headquartered at Headland Sada, Vasco-da-Gama, Goa, India.
              </p>
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary mt-space-xs">
                <span className="material-symbols-outlined text-[16px]">
                  public
                </span>
                <span>
                  Antarctic • Arctic • Southern Ocean • Himalayas
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface font-semibold">
                Scientific Divisions
              </span>
              <ul className="flex flex-col gap-space-xs">
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Antarctic Operations
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Arctic & Ny-Ålesund
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Cryosphere & Climate
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Ocean Sciences
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface font-semibold">
                Outreach & Access
              </span>
              <ul className="flex flex-col gap-space-xs">
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  National Polar Data Centre
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Expedition Archives
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  School & University Programs
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Public Geospatial Visualizers
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <span className="font-title-md text-title-md text-on-surface font-semibold">
                Stations & Telemetry
              </span>
              <ul className="flex flex-col gap-space-xs">
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Bharati Station (69°24′S)
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Maitri Station (70°45′S)
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  Himadri Station (78°55′N)
                </li>
                <li className="font-body-sm text-body-sm text-on-surface-variant">
                  IndARC Mooring
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-lg bg-surface-container-low rounded-xl px-space-lg">
            <p className="font-label-mono text-label-mono text-on-surface-variant">
              © 2025 National Centre for Polar and Ocean Research (NCPOR), MoES. All Rights Reserved.
            </p>
            <div className="flex items-center gap-space-lg">
              <span className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface cursor-pointer">
                Privacy Policy
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface cursor-pointer">
                Terms of Use
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface cursor-pointer">
                RTI Disclosures
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface cursor-pointer">
                Accessibility Statement
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
