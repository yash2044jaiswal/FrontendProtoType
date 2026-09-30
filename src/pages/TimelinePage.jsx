import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_visual_timeline_of_india_s_polar_programme/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function TimelinePage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  explore
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase">
                  Polaris
                </span>
                <span className="font-label-mono text-label-mono text-secondary tracking-widest">
                  NCPOR • MOES INDIA
                </span>
              </div>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low" data-active-classes="bg-primary-container text-on-primary font-semibold rounded-lg shadow-sm border-b-2 border-primary-fixed">
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm shrink-0">
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span>
                MAITRI -18°C
              </span>
            </div>
            <button aria-label={"Search telemetry & records"} className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            <div className="flex items-center bg-surface-container rounded-lg p-0.5 font-label-mono text-label-mono">
              <button className="px-2 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-xs" type="button">
                EN
              </button>
              <button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                HI
              </button>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-64px)]">
        <div className="flex flex-col w-full">
          <section className="w-full bg-surface-container-lowest shadow-sm">
            <div className="max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav aria-label="Breadcrumbs" className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface-variant">
                  <Link className="hover:text-primary transition-colors" to="/">
                    Home
                  </Link>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-on-surface-variant">
                    India's Polar Programme
                  </span>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    Visual Timeline
                  </span>
                </nav>
                <div className="flex items-center gap-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low font-label-mono text-label-mono text-secondary">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-primary-container" />
                    {" ARCHIVAL CATALOG ID: NCPOR-EXP-TL-43 "}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary font-label-mono text-label-mono">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    {" Peer-Verified MoES Chronology "}
                  </span>
                </div>
              </div>
              <div className="max-w-4xl space-y-space-sm">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {" Chronicles of the Cryosphere: India's Polar Journey (1981–Present) "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {" Four decades of scientific exploration, enduring station establishments, and pioneering cryospheric research across Antarctica, the Arctic, the Southern Ocean, and the Third Pole. "}
                </p>
              </div>
              <div className="flex flex-col gap-space-md p-space-md rounded-xl bg-surface-container-low shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-space-md">
                  <div className="flex items-center p-1 rounded-full bg-surface-container-lowest shadow-xs font-label-md text-label-md">
                    <button className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary font-semibold shadow-xs" type="button">
                      {" Decades View "}
                    </button>
                    <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                      {" Years View "}
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md">
                    <span className="font-label-mono text-label-mono text-secondary mr-1 uppercase">
                      Region:
                    </span>
                    <button className="px-3 py-1 rounded-full bg-primary text-on-primary shadow-xs" type="button">
                      All Regions
                    </button>
                    <button className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                      Antarctica
                    </button>
                    <button className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                      Arctic
                    </button>
                    <button className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                      Southern Ocean
                    </button>
                    <button className="px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                      Himalayas (3rd Pole)
                    </button>
                  </div>
                  <div className="flex items-center gap-space-xs p-1 pr-3 rounded-full bg-surface-container-lowest shadow-xs">
                    <button className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        play_arrow
                      </span>
                      {" "}
                    </button>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        Play with Narration
                      </span>
                      <span className="font-label-mono text-[10px] text-secondary">
                        ~8:40m • 1.0x • AI Dr. Sharma
                      </span>
                    </div>
                    <span className="ml-2 w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs font-label-md text-label-md">
                    <span className="font-label-mono text-label-mono text-secondary mr-1 uppercase">
                      Discipline:
                    </span>
                    <button className="px-2.5 py-1 rounded-lg bg-surface-container-high text-primary font-medium" type="button">
                      All Disciplines
                    </button>
                    <button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                      Glaciology
                    </button>
                    <button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                      Oceanography
                    </button>
                    <button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                      Atmospheric
                    </button>
                    <button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                      Paleoclimate
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-1 font-label-mono text-label-mono">
                    <span className="text-secondary mr-1">
                      MILESTONE JUMP:
                    </span>
                    <button className="px-2 py-0.5 rounded bg-surface-container hover:bg-secondary-container text-on-surface" type="button">
                      1981
                    </button>
                    <button className="px-2 py-0.5 rounded bg-surface-container hover:bg-secondary-container text-on-surface" type="button">
                      1983
                    </button>
                    <button className="px-2 py-0.5 rounded bg-surface-container hover:bg-secondary-container text-on-surface" type="button">
                      1989
                    </button>
                    <button className="px-2 py-0.5 rounded bg-surface-container hover:bg-secondary-container text-on-surface" type="button">
                      2006
                    </button>
                    <button className="px-2 py-0.5 rounded bg-surface-container hover:bg-secondary-container text-on-surface" type="button">
                      2008
                    </button>
                    <button className="px-2 py-0.5 rounded bg-primary text-on-primary font-bold shadow-xs" type="button">
                      2012
                    </button>
                    <button className="px-2 py-0.5 rounded bg-surface-container hover:bg-secondary-container text-on-surface" type="button">
                      2014
                    </button>
                    <button className="px-2 py-0.5 rounded bg-surface-container hover:bg-secondary-container text-on-surface" type="button">
                      2024
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-space-xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="w-3 h-3 rounded-full bg-primary-container" />
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Continuous Polar Chronology
                  </h2>
                  <span className="font-label-mono text-label-mono text-secondary ml-2">
                    EPOCH: 1981 — 2026
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-secondary">
                  <span>
                    {"Active Selection: "}
                    <strong>
                      2012 Bharati Station
                    </strong>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-secondary" />
                  <span>
                    5 of 43 Key Expansions Displayed
                  </span>
                </div>
              </div>
              <div className="relative w-full py-space-lg">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-primary-container/20">
                  <div className="h-full bg-primary-container w-[72%]" />
                </div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-space-md items-center">
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-md transition-all hover:-translate-y-1 flex flex-col gap-space-xs mb-6 relative">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono font-bold text-primary">
                          1981
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-primary font-label-mono text-[10px]">
                          Antarctica
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface line-clamp-2">
                        Operation Gangotri
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {" 1st Indian Antarctic Expedition led by Dr. S.Z. Qasim departing on MV Polar Circle. Marked India's historic entry. "}
                      </p>
                      <div className="flex items-center justify-between text-secondary pt-1 font-label-mono text-[10px]">
                        <span>
                          77 Scientists
                        </span>
                        <span>
                          MV Polar Circle
                        </span>
                      </div>
                    </div>
                    <div className="w-0.5 h-6 bg-primary-container" />
                    <div className="w-4 h-4 rounded-full bg-surface-container-lowest ring-4 ring-primary-container shadow-xs" />
                    <span className="font-label-mono text-label-mono text-secondary mt-2">
                      JAN 1981
                    </span>
                  </div>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <span className="font-label-mono text-label-mono text-secondary mb-2">
                      DEC 1983
                    </span>
                    <div className="w-4 h-4 rounded-full bg-surface-container-lowest ring-4 ring-primary-container shadow-xs" />
                    <div className="w-0.5 h-6 bg-primary-container" />
                    <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-md transition-all hover:translate-y-1 flex flex-col gap-space-xs mt-6 relative">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono font-bold text-primary">
                          1983
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-secondary font-label-mono text-[10px]">
                          Permanent Base
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface line-clamp-2">
                        Dakshin Gangotri
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {" Commissioned as India's first permanent base in Queen Maud Land ice shelf, enabling pioneering polar wintering. "}
                      </p>
                      <div className="flex items-center justify-between text-secondary pt-1 font-label-mono text-[10px]">
                        <span>
                          70°05'S, 12°00'E
                        </span>
                        <span>
                          Wintering Base
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-md transition-all hover:-translate-y-1 flex flex-col gap-space-xs mb-6 relative">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono font-bold text-primary">
                          1989
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-primary font-label-mono text-[10px]">
                          Station
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface line-clamp-2">
                        Maitri Station Built
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {" Transition to ice-free rocky oasis at Schirmacher, initiating year-round atmospheric, tectonic & biological observation. "}
                      </p>
                      <div className="flex items-center justify-between text-secondary pt-1 font-label-mono text-[10px]">
                        <span>
                          Schirmacher Oasis
                        </span>
                        <span>
                          Active Base
                        </span>
                      </div>
                    </div>
                    <div className="w-0.5 h-6 bg-primary-container" />
                    <div className="w-4 h-4 rounded-full bg-surface-container-lowest ring-4 ring-primary-container shadow-xs" />
                    <span className="font-label-mono text-label-mono text-secondary mt-2">
                      MAR 1989
                    </span>
                  </div>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <span className="font-label-mono text-label-mono text-secondary mb-2">
                      JUL 2008
                    </span>
                    <div className="w-4 h-4 rounded-full bg-surface-container-lowest ring-4 ring-primary-container shadow-xs" />
                    <div className="w-0.5 h-6 bg-primary-container" />
                    <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-md transition-all hover:translate-y-1 flex flex-col gap-space-xs mt-6 relative">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono font-bold text-primary">
                          2008
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-mono text-[10px]">
                          Arctic Realm
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface line-clamp-2">
                        Himadri Inaugurated
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                        {" India inaugurates its dedicated Arctic station at Ny-Ålesund, Svalbard (78°55' N), commencing Svalbard climate monitoring. "}
                      </p>
                      <div className="flex items-center justify-between text-secondary pt-1 font-label-mono text-[10px]">
                        <span>
                          Svalbard 78°N
                        </span>
                        <span>
                          Fjord Dynamics
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-xl flex flex-col gap-space-xs mb-6 relative ring-2 ring-primary-container transform -translate-y-2">
                      <div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-mono text-[10px] uppercase font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping" />
                        {" Active Inspection "}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-label-mono text-label-mono font-bold text-primary">
                          2012
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px]">
                          Modern Outpost
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-primary font-bold line-clamp-2">
                        Bharati Station Commissioned
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface line-clamp-3">
                        {" Architectural landmark constructed from 134 modular containers at Larsemann Hills, East Antarctica with near-zero footprint. "}
                      </p>
                      <div className="flex items-center justify-between text-primary-container pt-1 font-label-mono text-[10px] font-semibold">
                        <span>
                          69°24'S, 76°11'E
                        </span>
                        <span>
                          Direct Telemetry
                        </span>
                      </div>
                    </div>
                    <div className="w-1 h-6 bg-primary-container" />
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-6 h-6 rounded-full bg-primary-container/30 animate-ping" />
                      <div className="w-5 h-5 rounded-full bg-primary-container ring-4 ring-secondary-container shadow-md" />
                    </div>
                    <span className="font-label-mono text-label-mono text-primary font-bold mt-2">
                      MAR 2012
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-surface-container-low p-space-md rounded-xl shadow-xs flex flex-col gap-space-sm">
                <div className="flex items-center justify-between font-label-mono text-label-mono text-secondary">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_back
                    </span>
                    {" Previous Milestone "}
                  </button>
                  <div className="flex items-center gap-space-lg text-on-surface-variant font-medium">
                    <span>
                      1980
                    </span>
                    <span>
                      1990
                    </span>
                    <span>
                      2000
                    </span>
                    <span>
                      2010
                    </span>
                    <span className="text-primary font-bold underline decoration-2 underline-offset-4">
                      2012
                    </span>
                    <span>
                      2020
                    </span>
                    <span>
                      Present
                    </span>
                  </div>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors" type="button">
                    {" Next Milestone "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                    {" "}
                  </button>
                </div>
                <div className="relative w-full h-3 bg-surface-container rounded-full overflow-visible flex items-center cursor-pointer">
                  <div className="h-full bg-primary-container rounded-full" style={{"width": "71.5%"}} />
                  <div className="absolute -top-1.5 w-6 h-6 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center -ml-3" style={{"left": "71.5%"}}>
                    <div className="w-3 h-3 rounded-full bg-primary-container" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-lowest py-space-xl shadow-xs">
            <div className="max-w-7xl mx-auto px-gutter flex flex-col lg:flex-row gap-space-xl items-start">
              <div className="shrink-0 flex flex-col gap-space-sm w-full lg:w-[480px]">
                <div className="flex items-center justify-between font-label-mono text-label-mono">
                  <span className="text-secondary uppercase">
                    Geospatial Telemetry Sync
                  </span>
                  <span className="text-tertiary font-semibold flex items-center gap-1">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    {" LIVE LINK: 8.4 GHz X-Band "}
                  </span>
                </div>
                <div className="relative w-full lg:w-[480px] h-[360px] bg-[#050B18] rounded-xl overflow-hidden p-2 flex flex-col justify-between" id="polaris-globe-mini-timeline" style={{"outline": "2px dashed #1F7A8C", "outlineOffset": "-8px"}}>
                  <div className="z-20 flex flex-col gap-1 p-2.5 rounded-lg bg-inverse-surface/80 backdrop-blur-md text-inverse-on-surface font-label-mono text-[10px]">
                    <div className="flex items-center justify-between">
                      <span className="text-primary-fixed-dim font-bold">
                        Target: Larsemann Hills, East Antarctica
                      </span>
                      <span className="text-secondary-fixed">
                        Pitch: 45°
                      </span>
                    </div>
                    <div className="text-inverse-on-surface/80">
                      {" Coords: 69°24'28\"S, 76°11'14\"E • Alt: 35m • Orthographic Orbit "}
                    </div>
                  </div>
                  <div className="my-auto text-center px-4 z-10">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center text-primary-fixed">
                      <span className="material-symbols-outlined text-[28px]">
                        language
                      </span>
                    </div>
                    <p className="font-label-mono text-xs font-bold text-primary-fixed uppercase tracking-wider">
                      {" GLOBE SLOT - polaris-globe-mini-timeline - keep empty "}
                    </p>
                    <p className="font-body-sm text-xs text-inverse-on-surface/60 mt-1">
                      {" Synchronized 3D rendering pipeline automatically pins to milestone geospatial coordinates. "}
                    </p>
                  </div>
                  <div className="z-20 flex items-center justify-between pt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-mono text-[10px]">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed" />
                      {" Synchronized: 2012 Bharati Station "}
                    </span>
                    <Link className="px-2.5 py-1 rounded-lg bg-inverse-surface text-primary-fixed hover:text-surface font-label-mono text-[10px] transition-colors flex items-center gap-1" to="/globe">
                      {" Expand 3D Globe View "}
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                      {" "}
                    </Link>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between font-label-mono text-label-mono text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      satellite_alt
                    </span>
                    <span>
                      GSAT-14 Satellite Direct Feeder
                    </span>
                  </div>
                  <span className="text-secondary">
                    Latency: 284ms
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full bg-surface p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-mono text-label-mono font-bold">
                      {" MILESTONE DETAILS "}
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      YEAR 2012
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                    <span className="font-label-mono text-label-mono text-tertiary">
                      STATUS: OPERATIONAL
                    </span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <button aria-label="Share Milestone" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        share
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Close Inspector" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        close
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <div className="md:col-span-2 relative h-56 rounded-lg overflow-hidden shadow-xs group">
                    <img className="w-full h-full object-cover" data-alt="Modern architectural structure of Bharati Station in Larsemann Hills East Antarctica during polar sunset. The elevated aerodynamic research station rests on steel stilts against vast sweeping snowfields and ice plateaus under faint aurora australis ribbons, bathed in cool atmospheric teal and ice-blue tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsS12u0ffQ8bil2GKFd2u5uIB0kbqEMbjhkJbAtlmLCvqi9QUJj9p_HI5ylQClf0YsG0_oaU5sxvWRQprN5AnciiNx9jV4jqPMLrWXV2qglKzc5K2J3DRjpOtHLn2ZDzulHAoue-dXxPTSor4YsRiRAmqBXoe8pqhvxzObHK4WOrwqGFLBiVfbnLTOfZcFRHBeyUvpXnYTrtf5-sFDbXhTFRa4Vh5rKdoMfRX6spFN5Wyvhb_CRw9o" />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-space-sm text-on-primary">
                      <span className="font-label-mono text-[10px] text-primary-fixed uppercase tracking-wider">
                        Station Aperture • Larsemann Promontory
                      </span>
                      <p className="font-body-sm text-body-sm font-medium">
                        Bharati Base elevation design enduring blizzards up to 200 km/h
                      </p>
                    </div>
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-inverse-surface/60 backdrop-blur-xs px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-surface" />
                      <span className="w-1.5 h-1.5 rounded-full bg-surface/40" />
                      <span className="w-1.5 h-1.5 rounded-full bg-surface/40" />
                    </div>
                  </div>
                  <div className="relative h-56 rounded-lg overflow-hidden bg-surface-container-high p-space-sm flex flex-col justify-between shadow-xs">
                    <img className="absolute inset-0 w-full h-full object-cover opacity-50" data-alt="Historical archival footage screenshot of Indian scientists and polar expeditioners hoisting the Indian tricolor flag over Bharati Station during Antarctic commissioning in 2012, framed by crisp white blizzard skies and orange expedition gear." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9XSWQ4d5wyfHVlz-TOaVK-e__6nwxvwhFJSCpi07Cuz09dbUOM27jEa9MCy2FEpOJo-Qf0ljcLiJDxzetsTMTgPzH2gdYg_ArIJ2ynp1NTTOzIxnotbhL8hn7H4fN3mW_72_z_JaA_gvhdPbXnjBP7eS08SUJBIXgbrs5jyXbA6QJGIqsv2mlsRLY33XEZHgPdcfW_vEh3COZBN4lrZ_14fW0g7G8tH54Hq7fKVRe7nQc6jkthmFY" />
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-error text-on-error font-label-mono text-[9px] uppercase font-bold">
                        {" Archival Clip "}
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant font-semibold">
                        0:20 MIN
                      </span>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                      <button aria-label="Play archival video" className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-md hover:scale-105 transition-transform" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          play_arrow
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="relative z-10 flex items-center justify-between text-on-surface">
                      <span className="font-label-mono text-[10px] font-semibold truncate mr-2">
                        Flag Hoisting & First Ping
                      </span>
                      <span className="font-label-mono text-[9px] px-1.5 py-0.5 rounded bg-surface-container font-bold">
                        CC
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs p-space-sm rounded-lg bg-surface-container-low font-label-mono text-label-mono">
                  <div className="flex flex-col">
                    <span className="text-secondary text-[10px]">
                      COORDINATES
                    </span>
                    <span className="font-bold text-on-surface text-[12px]">
                      69°24'25" S, 76°11'41" E
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-secondary text-[10px]">
                      LEAD AUTHORITY
                    </span>
                    <span className="font-bold text-on-surface text-[12px]">
                      NCPOR / MoES India
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-secondary text-[10px]">
                      EXPEDITION
                    </span>
                    <span className="font-bold text-on-surface text-[12px]">
                      31st Indian Antarctic Expedition
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-secondary text-[10px]">
                      ALTITUDE / CAPACITY
                    </span>
                    <span className="font-bold text-on-surface text-[12px]">
                      35m ASL • 47 Personnel
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-primary font-bold flex items-center gap-1.5">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        psychology
                      </span>
                      {" AI Grounded Chronological Synthesis "}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-mono text-[10px]">
                      {" 94% Confidence • NCPOR Archived Records "}
                    </span>
                  </div>
                  <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant list-disc list-inside">
                    <li>
                      {"Constructed from "}
                      <strong>
                        134 interlocked specialized ISO containers
                      </strong>
                      , wrapped in an insulated aerodynamic skin elevated on stilts to prevent harsh snow drift accumulation.
                    </li>
                    <li>
                      Established dedicated research suites for atmospheric chemistry, optical auroral spectroscopy, ocean bottom pressure, and glaciological ice-shelf grounding zone physics.
                    </li>
                    <li>
                      {"Maintains uninterrupted real-time high-speed broadband telemetry relays linking directly to "}
                      <strong>
                        NPDC Headquarters in Goa
                      </strong>
                      {" and "}
                      <strong>
                        NRSC Shadnagar
                      </strong>
                      .
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-mono text-label-mono text-secondary uppercase">
                    Archival Reports & Verified Datasets:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm font-body-sm text-body-sm">
                    <Link className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-between group" to="/resources/ncpor-tr-2024-08">
                      {" "}
                      <div className="flex items-center gap-2 truncate mr-2">
                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                          picture_as_pdf
                        </span>
                        <span className="truncate text-on-surface group-hover:text-primary font-medium">
                          Bharati Environmental Impact Assessment Report
                        </span>
                      </div>
                      {" "}
                      <span className="font-label-mono text-[10px] text-secondary shrink-0">
                        DOI: 10.5194/ncpor-tr-2012-01
                      </span>
                      {" "}
                    </Link>
                    <Link className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex items-center justify-between group" to="/data">
                      {" "}
                      <div className="flex items-center gap-2 truncate mr-2">
                        <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">
                          dataset
                        </span>
                        <span className="truncate text-on-surface group-hover:text-primary font-medium">
                          Larsemann Hills Meteorological Baseline Data
                        </span>
                      </div>
                      {" "}
                      <span className="font-label-mono text-[10px] text-tertiary shrink-0">
                        NetCDF • Open
                      </span>
                      {" "}
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <Link className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm" to="/globe">
                      {" "}
                      <span>
                        View on Interactive Globe
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        travel_explore
                      </span>
                      {" "}
                    </Link>
                    <Link className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-secondary-container transition-colors" to="/expeditions/soe-01">
                      {" Open Expedition Page "}
                    </Link>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-mono text-label-mono transition-colors flex items-center gap-1" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        format_quote
                      </span>
                      {" Cite Milestone "}
                    </button>
                    <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-mono text-label-mono transition-colors flex items-center gap-1" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        bookmark
                      </span>
                      {" Bookmark "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
              <div className="flex flex-wrap items-end justify-between gap-space-md">
                <div className="space-y-1">
                  <span className="font-label-mono text-label-mono text-primary uppercase font-bold tracking-widest">
                    Macro Historical Analysis
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Key Era Milestones at a Glance
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    The strategic evolution of India's footprint across forty-three years of polar science.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-primary font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-[18px]">
                    account_tree
                  </span>
                  <span>
                    4 Epochs • 43 Expeditions
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-mono text-[10px]">
                        ERA I
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary font-semibold">
                        1981 — 1990
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">
                      Pioneer Phase
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Inception voyages, establishment of Dakshin Gangotri base on ice shelf, joining the Antarctic Treaty System, and building Maitri Station. "}
                    </p>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-secondary font-label-mono text-[11px]">
                    <span>
                      10 Expeditions
                    </span>
                    <span className="text-primary font-semibold">
                      Explore Era →
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-[10px]">
                        ERA II
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary font-semibold">
                        1991 — 2005
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">
                      Infrastructure & Expansion
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Foundation of National Centre for Antarctic & Ocean Research (now NCPOR) in Goa, ice-core paleoclimatology, and Southern Ocean cruises. "}
                    </p>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-secondary font-label-mono text-[11px]">
                    <span>
                      15 Expeditions
                    </span>
                    <span className="text-primary font-semibold">
                      Explore Era →
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px]">
                        ERA III
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary font-semibold">
                        2006 — 2015
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">
                      Bi-Polar Scientific Horizon
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Entry into Arctic research via Himadri Station at Ny-Ålesund, commissioning Bharati Station in East Antarctica, and anchoring IndARC in Kongsfjorden. "}
                    </p>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-secondary font-label-mono text-[11px]">
                    <span>
                      10 Expeditions
                    </span>
                    <span className="text-primary font-semibold">
                      Explore Era →
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-md group">
                  <div className="space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-mono text-[10px]">
                        ERA IV
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary font-semibold">
                        2016 — Present
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">
                      Triple Pole Integration
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Himansh station in the Himalayas, integration of Antarctic-Arctic-Third Pole climate feedbacks, 43rd IAE, and upcoming Maitri-II modernisation. "}
                    </p>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-secondary font-label-mono text-[11px]">
                    <span>
                      8+ Expeditions
                    </span>
                    <span className="text-primary font-semibold">
                      Explore Era →
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface flex flex-wrap items-center justify-between text-secondary font-label-mono text-[11px]">
                <span>
                  Data verified against National Polar Data Center (NPDC) & Ministry of Earth Sciences Official Gazette.
                </span>
                <span>
                  Last telemetry snapshot: 2025-02-14 UTC
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_12px_rgba(7,28,54,0.03)]">
        <div className="max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  public
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Government of India. Headquartered at Headland Sada, Vasco da Gama, Goa, India.
              </p>
              <div className="flex flex-col gap-1 pt-space-xs">
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  Scientific Open Access Node
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  ISO 9001:2015 Certified Portal
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface mb-space-md">
                Polar Stations
              </h3>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Bharati Station
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      69°S Antarctic
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Maitri Station
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      70°S Antarctic
                    </span>
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors flex items-center justify-between" to="/base-stations/himadri">
                    <span>
                      Himadri Station
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      78°N Arctic
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      IndARC Observatory
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Kongsfjorden
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Dakshin Gangotri
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Ice Shelf Base
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface mb-space-md">
                Data & Outreach
              </h3>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/data">
                    National Polar Data Center (NPDC)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/repository">
                    MoES Open Data Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Fellowship & Student Expeditions
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Atmospheric & Cryosphere Archives
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Scientific Expedition Bulletins
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h3 className="font-title-md text-title-md text-on-surface">
                Expedition Dispatches
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Receive weekly scientific telemetry briefs, ice movement assessments, and research logs.
              </p>
              <form className="flex flex-col gap-space-xs" onSubmit={(e)=>e.preventDefault()}>
                <div className="flex rounded-lg overflow-hidden shadow-xs bg-surface-container-lowest">
                  <input className="px-3 py-2 text-body-sm font-body-sm text-on-surface bg-transparent focus:outline-none flex-1" placeholder="researcher@domain.gov.in" type="email" />
                  <button className="bg-primary-container text-on-primary px-3.5 py-2 font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </button>
                </div>
                <span className="font-label-mono text-label-mono text-secondary">
                  MoES Certified Data Transmission
                </span>
              </form>
            </div>
          </div>
          <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex flex-wrap items-center gap-space-md">
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                MoES Terms of Use
              </a>
              <Link className="hover:text-primary transition-colors" to="/data">
                Data Policy & Attribution
              </Link>
              <Link className="hover:text-primary transition-colors" to="/about/accessibility">
                Screen Reader & Accessibility
              </Link>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                Grievances (CPGRAMS)
              </a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                RTI Disclosures
              </a>
            </div>
            <div className="font-label-mono text-label-mono text-secondary">
              © 2025 NCPOR • Ministry of Earth Sciences, Govt. of India. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
