import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_polar_science_knowledge_graph_explorer_graph/code.html
const BODY_CLASS = "bg-background font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function KnowledgeGraphPage() {
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
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="live-tracker" to="/live/soe-01">
              Live Tracker
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="publications" to="/publications">
              Publications
            </Link>
            <Link aria-current="page" className="px-3 py-1.5 transition-colors whitespace-nowrap bg-primary-container text-on-primary-container font-semibold rounded-full" data-path="knowledge-graph" to="/graph">
              Knowledge Graph
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
          <section className="w-full bg-surface-container-lowest">
            <div className="max-w-[1280px] mx-auto px-margin pt-10 pb-8 flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
                  <Link className="hover:text-primary transition-colors" to="/">
                    Home
                  </Link>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <Link className="hover:text-primary transition-colors" to="/search">
                    Research
                  </Link>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    Knowledge Graph Explorer
                  </span>
                </nav>
                <div className="flex items-center gap-2 bg-surface-container px-3 py-1 rounded-full">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-label-mono text-label-mono text-primary uppercase font-bold tracking-wider">
                    {" NCPOR ONTOLOGY ENGINE • CONNECTING POLAR RESEARCH ENTITIES "}
                  </span>
                </div>
              </div>
              <div className="max-w-4xl flex flex-col gap-2">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {" Polar Science Knowledge Graph Explorer "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Explore multidimensional semantic relationships across expeditions, polar stations, Antarctic biodiversity, cryospheric instrumentation, and scientific personnel. "}
                </p>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low shadow-sm">
            <div className="max-w-[1280px] mx-auto px-margin py-5 flex flex-col gap-4">
              <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-xl">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[20px]">
                      search
                    </span>
                  </div>
                  <input aria-label="Search entities, expeditions, taxa, instruments" className="w-full pl-10 pr-16 py-2.5 bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg shadow-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" id="graph-search-input" placeholder="Search entities, expeditions, taxa, instruments..." type="text" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <kbd className="font-label-mono text-label-mono bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-medium">
                      ⌘K
                    </kbd>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3 bg-surface-container-lowest px-4 py-2 rounded-lg shadow-sm">
                    <label className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider font-semibold whitespace-nowrap" htmlFor="graph-depth">
                      {" Graph Depth: "}
                    </label>
                    <span className="font-label-mono text-label-mono text-primary font-bold" id="depth-indicator">
                      Level 2
                    </span>
                    <input className="w-24 h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" id="graph-depth" max="4" min="1" type="range" defaultValue="2" onInput={(e)=>window.__pol(e,"document.getElementById('depth-indicator').innerText = 'Level ' + this.value")} />
                    <span className="font-label-mono text-label-mono text-outline-variant text-[10px]">
                      (1-4 hops)
                    </span>
                  </div>
                  <div className="flex items-center bg-surface-container-lowest p-1 rounded-lg shadow-sm">
                    <button aria-pressed="true" className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-on-primary font-label-md text-label-md shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        hub
                      </span>
                      {" "}
                      <span>
                        Graph View
                      </span>
                      {" "}
                    </button>
                    <button aria-pressed="false" className="flex items-center gap-1.5 px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        view_list
                      </span>
                      {" "}
                      <span>
                        List View
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="hidden 2xl:flex items-center gap-2 bg-secondary-container px-3.5 py-2 rounded-lg text-on-secondary-container">
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                    <span className="font-label-mono text-label-mono font-medium">
                      2,480 Entities • 8,920 Triples • Grounded
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full lg:w-auto">
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase font-semibold mr-1 shrink-0">
                    Filter Nodes:
                  </span>
                  <button className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md shadow-sm" type="button">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-on-primary-container" />
                    {" "}
                    <span>
                      Expeditions (142)
                    </span>
                    {" "}
                  </button>
                  <button className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-secondary hover:bg-secondary-fixed transition-colors font-label-md text-label-md shadow-sm" type="button">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {" "}
                    <span>
                      Places & Stations (89)
                    </span>
                    {" "}
                  </button>
                  <button className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-tertiary hover:bg-tertiary-fixed transition-colors font-label-md text-label-md shadow-sm" type="button">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    {" "}
                    <span>
                      Species & Taxa (614)
                    </span>
                    {" "}
                  </button>
                  <button className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md shadow-sm" type="button">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    {" "}
                    <span>
                      Instruments (420)
                    </span>
                    {" "}
                  </button>
                  <button className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md shadow-sm" type="button">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    {" "}
                    <span>
                      Personnel & PIs (1,215)
                    </span>
                    {" "}
                  </button>
                </div>
                <button className="text-primary hover:text-primary-container font-label-mono text-label-mono font-semibold uppercase flex items-center gap-1 transition-colors" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    restart_alt
                  </span>
                  {" "}
                  <span>
                    Reset Filters
                  </span>
                  {" "}
                </button>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-12">
            <div className="max-w-[1280px] mx-auto px-margin">
              <div className="relative w-full h-[620px] rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden flex">
                <div className="relative flex-1 h-full overflow-hidden select-none bg-radial from-surface-container-lowest via-surface-container-low to-surface-container">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    <defs>
                      <pattern height="40" id="polar-grid" patternUnits="userSpaceOnUse" width="40">
                        {" "}
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#BEC8CB" strokeDasharray="2 2" strokeWidth="0.5" />
                        {" "}
                      </pattern>
                    </defs>
                    <rect fill="url(#polar-grid)" height="100%" width="100%" />
                    <circle cx="48%" cy="50%" fill="none" r="90" stroke="#BEC8CB" strokeWidth="0.75" />
                    <circle cx="48%" cy="50%" fill="none" r="180" stroke="#BEC8CB" strokeDasharray="4 4" strokeWidth="0.75" />
                    <circle cx="48%" cy="50%" fill="none" r="280" stroke="#BEC8CB" strokeDasharray="6 6" strokeWidth="0.5" />
                    <line stroke="#BEC8CB" strokeDasharray="3 3" strokeWidth="0.5" x1="48%" x2="48%" y1="0" y2="100%" />
                    <line stroke="#BEC8CB" strokeDasharray="3 3" strokeWidth="0.5" x1="0" x2="100%" y1="50%" y2="50%" />
                  </svg>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" id="graph-edges">
                    <line stroke="#1F7A8C" strokeWidth="2.5" x1="380" x2="240" y1="260" y2="150" />
                    <text className="bg-surface" fill="#006070" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle" x="305" y="195">
                      conducted_at
                    </text>
                    <line stroke="#BEC8CB" strokeDasharray="4 2" strokeWidth="1.5" x1="380" x2="180" y1="260" y2="340" />
                    <text fill="#466873" fontFamily="Inter" fontSize="9" textAnchor="middle" x="270" y="310">
                      staged_via
                    </text>
                    <line stroke="#1F7A8C" strokeWidth="2.5" x1="380" x2="520" y1="260" y2="160" />
                    <text fill="#006070" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle" x="460" y="200">
                      led_by
                    </text>
                    <line stroke="#1F7A8C" strokeWidth="2" x1="380" x2="500" y1="260" y2="370" />
                    <text fill="#006070" fontFamily="Inter" fontSize="9" textAnchor="middle" x="450" y="325">
                      deployed_on
                    </text>
                    <line stroke="#BEC8CB" strokeWidth="1.5" x1="240" x2="120" y1="150" y2="100" />
                    <text fill="#466873" fontFamily="Inter" fontSize="9" textAnchor="middle" x="175" y="115">
                      located_in
                    </text>
                    <line stroke="#BEC8CB" strokeDasharray="3 3" strokeWidth="1.2" x1="520" x2="650" y1="160" y2="110" />
                    <text fill="#466873" fontFamily="Inter" fontSize="9" textAnchor="middle" x="590" y="125">
                      co-authored
                    </text>
                    <line stroke="#007F5D" strokeWidth="1.5" x1="380" x2="340" y1="260" y2="430" />
                    <text fill="#006448" fontFamily="Inter" fontSize="9" textAnchor="middle" x="370" y="355">
                      monitored
                    </text>
                    <line stroke="#BEC8CB" strokeWidth="1.2" x1="180" x2="90" y1="340" y2="270" />
                    <line stroke="#007F5D" strokeWidth="1.5" x1="180" x2="130" y1="340" y2="450" />
                    <text fill="#006448" fontFamily="Inter" fontSize="9" textAnchor="middle" x="145" y="405">
                      census_at
                    </text>
                    <line stroke="#BEC8CB" strokeDasharray="2 2" strokeWidth="1" x1="500" x2="620" y1="370" y2="420" />
                    <line stroke="#41636E" strokeWidth="1.5" x1="720" x2="680" y1="230" y2="320" />
                    <text fill="#41636E" fontFamily="Inter" fontSize="9" textAnchor="middle" x="710" y="280">
                      anchored_at
                    </text>
                    <line stroke="#BEC8CB" strokeDasharray="3 3" strokeWidth="1" x1="720" x2="760" y1="230" y2="360" />
                    <line stroke="#BEC8CB" strokeWidth="1.5" x1="760" x2="740" y1="360" y2="480" />
                    <text fill="#466873" fontFamily="Inter" fontSize="9" textAnchor="middle" x="760" y="425">
                      observes
                    </text>
                  </svg>
                  <div className="absolute cursor-pointer transition-transform duration-300 hover:scale-105" style={{"left": "380px", "top": "260px", "transform": "translate(-50%, -50%)"}}>
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-16 h-16 rounded-full bg-primary-fixed animate-ping opacity-40" />
                      <span className="absolute w-14 h-14 rounded-full bg-primary-container/20" />
                      <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg ring-4 ring-primary-fixed">
                        <span className="material-symbols-outlined text-[20px]">
                          explore
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-12 mt-1 px-2.5 py-1 rounded bg-inverse-surface text-inverse-on-surface font-title-md text-[13px] whitespace-nowrap shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed" />
                      <span>
                        43rd IAE (Selected)
                      </span>
                    </div>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "240px", "top": "150px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-surface-container-lowest text-secondary shadow-md ring-2 ring-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        domain
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" Maitri Station "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "180px", "top": "340px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-surface-container-lowest text-secondary shadow-md ring-2 ring-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        location_city
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" Bharati Station "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "120px", "top": "100px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest text-secondary shadow-sm ring-2 ring-secondary-fixed-dim flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        landscape
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 font-label-mono text-label-mono text-on-surface-variant whitespace-nowrap bg-surface-container-lowest/80 px-1 rounded">
                      {" Schirmacher Oasis "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "520px", "top": "160px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 shadow-md ring-2 ring-purple-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        person
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" Dr. Ananya Sen "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "650px", "top": "110px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 shadow-sm ring-2 ring-purple-300 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        psychology
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 font-label-mono text-label-mono text-on-surface-variant whitespace-nowrap bg-surface-container-lowest/80 px-1 rounded">
                      {" Dr. S. K. Ramanathan "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "500px", "top": "370px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 shadow-md ring-2 ring-amber-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        air
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" Sonic Anemometer 10Hz "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "90px", "top": "270px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 shadow-sm ring-2 ring-amber-300 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        sensors
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 font-label-mono text-label-mono text-on-surface-variant whitespace-nowrap bg-surface-container-lowest/80 px-1 rounded">
                      {" CTD Rosette "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "620px", "top": "420px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 shadow-sm ring-2 ring-amber-300 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        water
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 font-label-mono text-label-mono text-on-surface-variant whitespace-nowrap bg-surface-container-lowest/80 px-1 rounded">
                      {" Argo Float #14 "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "130px", "top": "450px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-tertiary shadow-md ring-2 ring-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        pets
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" Pygoscelis adeliae "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "340px", "top": "430px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-tertiary shadow-md ring-2 ring-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        clock_loader_40
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" S. maccormicki (Skua) "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "720px", "top": "230px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-surface-container-lowest text-secondary shadow-md ring-2 ring-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        ac_unit
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" Kongsfjorden "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "680px", "top": "320px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 shadow-md ring-2 ring-amber-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        anchor
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-10 font-label-md text-label-md text-on-surface whitespace-nowrap bg-surface-container-lowest/90 px-1.5 py-0.5 rounded shadow-sm">
                      {" IndARC Mooring "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "760px", "top": "360px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest text-secondary shadow-sm ring-2 ring-secondary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        terrain
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 font-label-mono text-label-mono text-on-surface-variant whitespace-nowrap bg-surface-container-lowest/80 px-1 rounded">
                      {" Himansh "}
                    </span>
                  </div>
                  <div className="absolute cursor-pointer hover:scale-110 transition-transform" style={{"left": "740px", "top": "480px", "transform": "translate(-50%, -50%)"}}>
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest text-secondary shadow-sm ring-2 ring-secondary-fixed-dim flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        downhill_skiing
                      </span>
                    </div>
                    <span className="absolute left-1/2 -translate-x-1/2 top-9 font-label-mono text-label-mono text-on-surface-variant whitespace-nowrap bg-surface-container-lowest/80 px-1 rounded">
                      {" Chandra Basin "}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 bg-surface-container-lowest/90 backdrop-blur-md p-1.5 rounded-xl shadow-md">
                    <button aria-label="Zoom in" className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        add
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Zoom out" className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        remove
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Reset View" className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        filter_center_focus
                      </span>
                      {" "}
                    </button>
                    <div className="w-full h-px bg-surface-container my-0.5" />
                    <button aria-label="Center active node" className="w-8 h-8 flex items-center justify-center rounded-lg text-primary hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        my_location
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Toggle Physics Simulation" className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        motion_photos_on
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-md flex flex-col gap-2">
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-mono text-[10px] uppercase tracking-wider font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-0.5 bg-primary" />
                        <span>
                          Primary Link
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-0.5 bg-outline border-dashed" />
                        <span>
                          Co-occurrence
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-0.5 bg-tertiary" />
                        <span>
                          Eco-Telemetry
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <aside className="w-[390px] h-full bg-surface-container-lowest shadow-2xl flex flex-col z-20 shrink-0">
                  {" "}
                  {" "}
                  <div className="p-5 bg-surface-container-low flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full font-label-mono text-[10px] uppercase font-bold tracking-wider bg-primary-container text-on-primary-container">
                          {" Expedition Node "}
                        </span>
                        <span className="font-label-mono text-label-mono text-outline">
                          ID: EXP-IND-2023-43
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button aria-label="Bookmark node" className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors rounded">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Close drawer" className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors rounded">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            close
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                        {" 43rd Indian Antarctic Expedition "}
                      </h2>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Queen Maud Land & Maitri Basin
                      </span>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
                    <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-sm bg-surface-container">
                      <img className="w-full h-full object-cover" data-alt="An expansive panoramic view of an ice expedition vessel docked near a towering ice shelf in Queen Maud Land Antarctica under cold atmospheric light with scientific shelters and research personnel in red parkas visible on the icy terrain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdEwlAN9HtP4gt0JZ9QVtKtzLDBuPBFEFOValy_IHyLyuTrsx01rhcSe51UkVNJHfxfk52_rOBqoTuSFXuOMX15IBS5AhLhdog3eNvl5ZiQSpwutQIHVDfMRV6USPbWNQrRlVOX4kIMxZixpQHY9Da7Q99gxZRUIlMEnVbvGjy1O1IrYfn5mOh9qxcg-35HUnhjJHbDqeSWOs7GJXuLmWRGDU-u82MrhcprzupU5m5sapWw3hQsS-l" />
                      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-3">
                        <span className="font-label-mono text-label-mono text-inverse-on-surface">
                          Vessel: MV Vasiliy Golovnin • Voyage Leg 02
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase font-semibold">
                        Entity Abstract
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        {" The 43rd IAE over-wintering scientific mission in Queen Maud Land and Schirmacher Oasis focuses on katabatic boundary layer dynamics, deep cryospheric telemetry, and baseline polar environmental monitoring. "}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 bg-surface-container-low p-3 rounded-xl font-label-mono text-label-mono">
                      <div className="flex flex-col">
                        <span className="text-outline uppercase text-[10px]">
                          Status
                        </span>
                        <span className="text-tertiary font-bold flex items-center gap-1 mt-0.5">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          {"Active Overwinter "}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-outline uppercase text-[10px]">
                          Timeframe
                        </span>
                        <span className="text-on-surface font-semibold mt-0.5">
                          Nov 2023 – Mar 2025
                        </span>
                      </div>
                      <div className="flex flex-col mt-2">
                        <span className="text-outline uppercase text-[10px]">
                          Lead Scientist
                        </span>
                        <span className="text-on-surface font-semibold mt-0.5">
                          Dr. Ananya Sen
                        </span>
                      </div>
                      <div className="flex flex-col mt-2">
                        <span className="text-outline uppercase text-[10px]">
                          Coordinates
                        </span>
                        <span className="text-on-surface font-semibold mt-0.5">
                          70°45'S, 11°44'E
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase font-semibold">
                          Direct Semantic Triples (4)
                        </span>
                        <span className="font-label-mono text-[10px] text-primary">
                          Hop 1
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm cursor-pointer">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
                            <span className="material-symbols-outlined text-[16px]">
                              domain
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-md text-[13px] text-on-surface truncate">
                              Maitri Station
                            </span>
                            <span className="font-label-mono text-[10px] text-outline truncate">
                              conducted_at • Primary Base
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[16px]">
                          chevron_right
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm cursor-pointer">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                            <span className="material-symbols-outlined text-[16px]">
                              person
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-md text-[13px] text-on-surface truncate">
                              Dr. Ananya Sen
                            </span>
                            <span className="font-label-mono text-[10px] text-outline truncate">
                              led_by • Atmospheric Physicist
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[16px]">
                          chevron_right
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm cursor-pointer">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                            <span className="material-symbols-outlined text-[16px]">
                              air
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-md text-[13px] text-on-surface truncate">
                              Sonic Anemometer 10Hz
                            </span>
                            <span className="font-label-mono text-[10px] text-outline truncate">
                              deployed_on • Mast-03 Micro-met
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[16px]">
                          chevron_right
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors shadow-sm cursor-pointer">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                            <span className="material-symbols-outlined text-[16px]">
                              clock_loader_40
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-md text-[13px] text-on-surface truncate">
                              South Polar Skua
                            </span>
                            <span className="font-label-mono text-[10px] text-outline truncate">
                              monitored • Bio-monitoring Ring
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-outline text-[16px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="p-4 bg-surface-container-low flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          public
                        </span>
                        {" "}
                        <span>
                          View on Globe
                        </span>
                        {" "}
                      </button>
                      <button className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          open_in_new
                        </span>
                        {" "}
                        <span>
                          Open Page
                        </span>
                        {" "}
                      </button>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-title-md shadow hover:bg-primary transition-all" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        auto_awesome
                      </span>
                      {" "}
                      <span>
                        Ask POLARIS About This Node
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </aside>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-24">
            <div className="max-w-[1280px] mx-auto px-margin flex flex-col gap-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">
                      Semantic Traversal Packs
                    </span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Curated Scientific Clusters
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  {" Pre-computed graph topologies aggregating interdisciplinary datasets across cryospheric, marine, and biological domains. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6 group">
                  {" "}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full font-label-mono text-[10px] font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container">
                        {" Atmospheric Dynamics "}
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        5 Entities
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {" Atmospheric Boundary Layer Cluster "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Examines thermodynamic wind shear and surface exchange models generated in Queen Maud Land's Oasis depressions. "}
                    </p>
                  </div>
                  {" "}
                  {" "}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5 font-label-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface">
                        Katabatic Winds
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                        Sonic Anemometer
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-secondary">
                        Maitri Base
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900">
                        Dr. Sen
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                        Schirmacher Oasis
                      </span>
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                      <span className="font-label-mono text-label-mono text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {" Load Subgraph "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </span>
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">
                        bubble_chart
                      </span>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6 group">
                  {" "}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full font-label-mono text-[10px] font-bold uppercase tracking-wider bg-surface-variant text-on-surface">
                        {" Arctic Ocean Acoustics "}
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        4 Entities
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {" Kongsfjorden Marine Acoustics "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Autonomous long-term fjord profiling documenting calved glacier noise, ambient sound propagation, and Atlantic inflow. "}
                    </p>
                  </div>
                  {" "}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5 font-label-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                        IndARC Mooring
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-secondary">
                        Kongsfjorden
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-secondary">
                        Arctic Himadri
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                        Hydrophone Stream
                      </span>
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                      <span className="font-label-mono text-label-mono text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {" Load Subgraph "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </span>
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">
                        waves
                      </span>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6 group">
                  {" "}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full font-label-mono text-[10px] font-bold uppercase tracking-wider bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                        {" Pelagic Food Webs "}
                      </span>
                      <span className="font-label-mono text-label-mono text-outline">
                        5 Entities
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {" Prydz Bay Pelagic Ecosystem "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Trophic chain correlations between sea ice extent, Euphausia superba swarms, and coastal apex predator foraging routes. "}
                    </p>
                  </div>
                  {" "}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5 font-label-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-secondary">
                        Bharati Station
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-tertiary">
                        Emperor Penguins
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                        CTD Rosette
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-tertiary">
                        Krill Biomass
                      </span>
                      <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container">
                        SOE Cruise
                      </span>
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                      <span className="font-label-mono text-label-mono text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        {" Load Subgraph "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </span>
                      <span className="material-symbols-outlined text-outline-variant text-[20px]">
                        stream
                      </span>
                    </div>
                  </div>
                  {" "}
                </article>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container py-12">
            <div className="max-w-[1280px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-[28px]">
                    account_balance
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-on-surface">
                    National Polar Data Centre (NPDC) & MoES Ontology Standard
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" All triples verified against polar cruise logs, in-situ sensor registries, and peer-reviewed international scientific publications. "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-label-mono text-label-mono text-secondary">
                  W3C RDF/OWL Compliant
                </span>
                <button className="px-4 py-2 bg-surface-container-lowest hover:bg-surface-bright text-primary font-label-md text-label-md rounded-lg shadow-sm transition-colors flex items-center gap-1.5" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    download
                  </span>
                  {" "}
                  <span>
                    SPARQL Endpoint
                  </span>
                  {" "}
                </button>
              </div>
            </div>
          </section>
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
