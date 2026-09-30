import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_ask_polaris_scientific_ai_conversational_interface/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "(function initPolarisChat() {\n      let currentSlide = 0;\n      const track = document.getElementById('carouselTrack');\n      const dots = document.querySelectorAll('.carousel-dot');\n      const totalSlides = 3;\n\n      function updateCarousel(idx) {\n        currentSlide = (idx + totalSlides) % totalSlides;\n        if (track) {\n          track.style.transform = `translateX(-${currentSlide * 100}%)`;\n        }\n        dots.forEach((dot, i) => {\n          if (i === currentSlide) {\n            dot.classList.remove('bg-surface-container-highest');\n            dot.classList.add('bg-primary');\n          } else {\n            dot.classList.remove('bg-primary');\n            dot.classList.add('bg-surface-container-highest');\n          }\n        });\n      }\n\n      const prevBtn = document.getElementById('prevSlide');\n      const nextBtn = document.getElementById('nextSlide');\n\n      if (prevBtn) {\n        prevBtn.addEventListener('click', () => updateCarousel(currentSlide - 1));\n      }\n      if (nextBtn) {\n        nextBtn.addEventListener('click', () => updateCarousel(currentSlide + 1));\n      }\n\n      dots.forEach((dot, index) => {\n        dot.addEventListener('click', () => updateCarousel(index));\n      });\n    })();";

export default function AskPolarisPage() {
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
            <Link aria-current="page" className="transition-colors bg-primary-container text-on-primary-container font-semibold rounded-lg px-3 py-1.5 shadow-sm" data-path="ask-polaris" to="/ask">
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
          <div className="w-full bg-surface-container-lowest/80 backdrop-blur-md shadow-sm">
            <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface-variant flex-wrap">
                <Link className="hover:text-primary transition-colors" data-path="home" to="/">
                  Home
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-on-surface font-semibold">
                  Ask POLARIS
                </span>
                <span className="text-outline-variant mx-1">
                  •
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-primary font-medium tracking-normal text-[11px]">
                  {" "}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {" MOES AI ENGINE • NCPOR SCIENTIFIC REASONING MODEL v3.2 • GROUNDED IN 40+ YEARS OF POLAR RESEARCH "}
                </span>
              </div>
              <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-secondary">
                <span className="inline-flex items-center gap-1">
                  {" "}
                  <span className="material-symbols-outlined text-[14px] text-tertiary">
                    verified_user
                  </span>
                  {" Zero Hallucination Retrieval-Augmented Protocol "}
                </span>
                <span className="hidden sm:inline text-outline-variant">
                  |
                </span>
                <span className="hidden sm:inline text-on-surface-variant">
                  Session ID: POL-AI-8921
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] w-full mx-auto px-margin-mobile lg:px-margin py-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <aside className="lg:col-span-3 flex flex-col gap-space-md order-2 lg:order-1">
                {" "}
                {" "}
                <button className="w-full h-11 px-space-md rounded-xl bg-primary text-on-primary font-title-md text-title-md flex items-center justify-between shadow-sm hover:bg-primary-container transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="button">
                  {" "}
                  <span className="flex items-center gap-space-xs">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      add_circle
                    </span>
                    {" New Conversation "}
                  </span>
                  {" "}
                  <kbd className="px-2 py-0.5 rounded bg-on-primary/20 text-on-primary font-label-mono text-[10px]">
                    ⌘K
                  </kbd>
                  {" "}
                </button>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        manage_search
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface">
                        Knowledge Scope
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-outline cursor-help" title="Constrain semantic vector search depth and grounding sources">
                      info
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                    Filter retrieval grounding parameters:
                  </p>
                  <div aria-label="Knowledge retrieval scope" className="flex flex-col gap-space-xs mt-1" role="radiogroup">
                    <label className="flex items-start gap-space-sm p-space-sm rounded-xl bg-secondary-container/40 cursor-pointer transition-all">
                      {" "}
                      <input defaultChecked="" className="mt-1 text-primary focus:ring-2 focus:ring-primary h-4 w-4" name="scope-filter" type="radio" value="all" />
                      {" "}
                      <div className="flex flex-col">
                        <span className="font-body-sm text-body-sm font-semibold text-on-surface flex items-center gap-1">
                          {" All Repository "}
                          <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-primary text-on-primary font-label-mono">
                            Full Corp
                          </span>
                          {" "}
                        </span>
                        <span className="font-label-mono text-label-mono text-on-surface-variant text-[10px] mt-0.5">
                          12,400+ peer-reviewed reports, datasets & dispatches
                        </span>
                      </div>
                      {" "}
                    </label>
                    <label className="flex flex-col gap-1 p-space-sm rounded-xl hover:bg-surface-container-low cursor-pointer transition-all">
                      {" "}
                      <div className="flex items-center gap-space-sm">
                        <input className="text-primary focus:ring-2 focus:ring-primary h-4 w-4" name="scope-filter" type="radio" value="expedition" />
                        <span className="font-body-sm text-body-sm text-on-surface font-medium">
                          One Expedition
                        </span>
                      </div>
                      {" "}
                      <div className="pl-6 w-full">
                        <select className="w-full text-[12px] font-body-sm bg-surface-container-low rounded-lg px-2 py-1 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="43rd Indian Antarctic Expedition (2023-24)">
                          <option>
                            43rd Indian Antarctic Expedition (2023-24)
                          </option>
                          <option>
                            42nd Indian Antarctic Expedition (2022-23)
                          </option>
                          <option>
                            16th Indian Arctic Expedition (2023)
                          </option>
                          <option>
                            Southern Ocean Expedition (2024)
                          </option>
                        </select>
                      </div>
                      {" "}
                    </label>
                    <label className="flex flex-col gap-1 p-space-sm rounded-xl hover:bg-surface-container-low cursor-pointer transition-all">
                      {" "}
                      <div className="flex items-center gap-space-sm">
                        <input className="text-primary focus:ring-2 focus:ring-primary h-4 w-4" name="scope-filter" type="radio" value="document" />
                        <span className="font-body-sm text-body-sm text-on-surface font-medium">
                          One Document
                        </span>
                      </div>
                      {" "}
                      <div className="pl-6 w-full">
                        <span className="inline-flex items-center gap-1 text-[11px] font-label-mono px-2 py-1 rounded bg-surface-container text-on-surface-variant truncate max-w-full">
                          {" "}
                          <span className="material-symbols-outlined text-[13px] text-primary">
                            description
                          </span>
                          {" NCPOR-TR-2024-02: Micro-Met... "}
                        </span>
                      </div>
                      {" "}
                    </label>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-1.5">
                      {" "}
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        bookmark
                      </span>
                      {" Saved Answers (3) "}
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary hover:text-primary cursor-pointer">
                      View all
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 mt-1">
                    <button className="text-left p-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group" type="button">
                      {" "}
                      <p className="font-body-sm text-body-sm text-on-surface font-medium group-hover:text-primary truncate text-[12px]">
                        Katabatic wind velocity records at Maitri
                      </p>
                      {" "}
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] font-label-mono text-on-surface-variant">
                        <span>
                          42nd IAE
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          Saved 2d ago
                        </span>
                      </div>
                      {" "}
                    </button>
                    <button className="text-left p-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group" type="button">
                      {" "}
                      <p className="font-body-sm text-body-sm text-on-surface font-medium group-hover:text-primary truncate text-[12px]">
                        IndARC acoustic mooring depths
                      </p>
                      {" "}
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] font-label-mono text-on-surface-variant">
                        <span>
                          Ny-Ålesund Arctic
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          Saved May 14
                        </span>
                      </div>
                      {" "}
                    </button>
                    <button className="text-left p-2 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all group" type="button">
                      {" "}
                      <p className="font-body-sm text-body-sm text-on-surface font-medium group-hover:text-primary truncate text-[12px]">
                        Larsemann Hills lichen cryo-tolerance
                      </p>
                      {" "}
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] font-label-mono text-on-surface-variant">
                        <span>
                          Bharati Station
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          Saved Apr 29
                        </span>
                      </div>
                      {" "}
                    </button>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-1.5">
                      {" "}
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        history
                      </span>
                      {" Conversations "}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label-mono text-label-mono text-[10px] text-outline uppercase tracking-wider px-1">
                      Today
                    </span>
                    <div className="p-2 rounded-xl bg-secondary-container text-on-surface flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-body-sm text-body-sm font-semibold truncate text-[12px]">
                          Antarctic katabatic wind dynamics
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[14px] text-primary">
                        chat_bubble
                      </span>
                    </div>
                    <button className="p-2 rounded-xl hover:bg-surface-container-low text-left transition-all" type="button">
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate block text-[12px]">
                        Prydz Bay penguin census methods
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="font-label-mono text-label-mono text-[10px] text-outline uppercase tracking-wider px-1">
                      Past 7 Days
                    </span>
                    <button className="p-2 rounded-xl hover:bg-surface-container-low text-left transition-all" type="button">
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate block text-[12px]">
                        Himansh glacier mass balance data
                      </span>
                      {" "}
                    </button>
                    <button className="p-2 rounded-xl hover:bg-surface-container-low text-left transition-all" type="button">
                      {" "}
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate block text-[12px]">
                        Southern Ocean carbon sink efficiency
                      </span>
                      {" "}
                    </button>
                  </div>
                  <button className="text-left pt-2 font-label-mono text-label-mono text-[10px] text-outline hover:text-error flex items-center gap-1 transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[12px]">
                      delete_sweep
                    </span>
                    {" Clear Conversation History "}
                  </button>
                </div>
                {" "}
              </aside>
              <main className="lg:col-span-6 flex flex-col gap-space-md order-1 lg:order-2">
                {" "}
                {" "}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  <button className="shrink-0 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm hover:bg-secondary-container hover:text-on-surface transition-all text-left font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                    {" "}
                    <span>
                      💨
                    </span>
                    {" How do katabatic winds at Maitri affect ice shelf stability? "}
                  </button>
                  <button className="shrink-0 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm hover:bg-secondary-container hover:text-on-surface transition-all text-left font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                    {" "}
                    <span>
                      🔬
                    </span>
                    {" IndARC temperature trends in Kongsfjorden? "}
                  </button>
                  <button className="shrink-0 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm hover:bg-secondary-container hover:text-on-surface transition-all text-left font-body-sm text-[12px] text-on-surface-variant flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                    {" "}
                    <span>
                      🐧
                    </span>
                    {" Emperor Penguin breeding cycle in Prydz Bay "}
                  </button>
                </div>
                {" "}
                {" "}
                <div className="flex flex-col gap-space-lg">
                  <div className="flex flex-col items-end gap-1.5 pl-12">
                    <div className="bg-primary text-on-primary rounded-2xl rounded-tr-xs p-space-md shadow-md max-w-2xl">
                      <p className="font-body-md text-body-md text-on-primary leading-relaxed">
                        {" How do katabatic winds at Maitri Station influence local surface thermodynamics, and where exactly does the highest velocity occur? "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant text-[11px] pr-1">
                      <span>
                        Today, 11:24 AM
                      </span>
                      <span>
                        •
                      </span>
                      <span className="inline-flex items-center gap-1 text-primary bg-secondary-container/60 px-2 py-0.5 rounded-full">
                        {" "}
                        <span className="material-symbols-outlined text-[11px]">
                          public
                        </span>
                        {" All Repository Scope "}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pr-2">
                    <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-xs gap-2">
                        <div className="flex items-center gap-space-xs">
                          <div className="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                            <span className="material-symbols-outlined text-[18px]">
                              ac_unit
                            </span>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-headline-sm text-[16px] text-primary font-bold">
                                POLARIS Scientific Assistant
                              </h4>
                              <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-mono text-[9px] uppercase tracking-wider font-semibold">
                                MoES Certified
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary font-label-mono text-[11px]">
                          <span className="w-2 h-2 rounded-full bg-tertiary" />
                          {" Confidence: 98.4% (Directly grounded in 4 peer-reviewed sources) "}
                        </div>
                      </div>
                      <div className="font-body-md text-body-md text-on-surface space-y-space-sm leading-relaxed">
                        <p>
                          {" Katabatic winds at "}
                          <strong className="font-semibold text-primary">
                            Maitri Station
                          </strong>
                          {" (Schirmacher Oasis, Central Dronning Maud Land) are gravity-driven density flows originating from the high East Antarctic plateau "}
                          <a className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-secondary-container text-primary font-label-mono text-[11px] font-semibold hover:bg-primary hover:text-on-primary transition-colors" href="#source-1">
                            [1]
                          </a>
                          {". As cold, dense air sinks along the steep continental slope, it generates intense localized shear boundaries with peak nocturnal gusts frequently exceeding 160 km/h (86 knots) "}
                          <a className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-secondary-container text-primary font-label-mono text-[11px] font-semibold hover:bg-primary hover:text-on-primary transition-colors" href="#source-2">
                            [2]
                          </a>
                          {". "}
                        </p>
                        <div className="p-space-sm rounded-xl bg-surface-container-low">
                          <h5 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-1">
                            Key Thermodynamic Effects:
                          </h5>
                          <ul className="space-y-1.5 text-on-surface-variant font-body-sm text-body-sm">
                            <li className="flex items-start gap-2">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {" "}
                              <span>
                                <strong className="text-on-surface font-semibold">
                                  Strong nocturnal temperature inversions:
                                </strong>
                                {" Surface-to-air thermal gradients exceed 12°C/100m, forming persistent micro-climatic inversions above the oasis ice sheets "}
                                <a className="px-1.5 py-0.2 rounded bg-secondary-container text-primary font-label-mono text-[10px] font-semibold" href="#source-3">
                                  [3]
                                </a>
                                .
                              </span>
                              {" "}
                            </li>
                            <li className="flex items-start gap-2">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {" "}
                              <span>
                                <strong className="text-on-surface font-semibold">
                                  Localized blue ice sublimation:
                                </strong>
                                {" Accounts for up to 78% of local sensible heat redistribution, triggering rapid boundary evaporative cooling "}
                                <a className="px-1.5 py-0.2 rounded bg-secondary-container text-primary font-label-mono text-[10px] font-semibold" href="#source-1">
                                  [1]
                                </a>
                                .
                              </span>
                              {" "}
                            </li>
                            <li className="flex items-start gap-2">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {" "}
                              <span>
                                <strong className="text-on-surface font-semibold">
                                  Accelerated snow scouring:
                                </strong>
                                {" High-speed drainage clears rocky ridges of snow cover, sustaining exposed nunatak bedrock corridors and modulating albedo feedback loops "}
                                <a className="px-1.5 py-0.2 rounded bg-secondary-container text-primary font-label-mono text-[10px] font-semibold" href="#source-2">
                                  [2]
                                </a>
                                .
                              </span>
                              {" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col gap-space-xs pt-1">
                        <div className="flex items-center justify-between">
                          <span className="font-title-md text-[13px] text-on-surface font-semibold flex items-center gap-1.5">
                            {" "}
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              perm_media
                            </span>
                            {" Associated Field Observation Media & Sensor Logs "}
                          </span>
                          <div className="flex items-center gap-1">
                            <button className="w-7 h-7 rounded-full bg-surface-container-low hover:bg-secondary-container text-on-surface flex items-center justify-center transition-colors" id="prevSlide" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                chevron_left
                              </span>
                              {" "}
                            </button>
                            <button className="w-7 h-7 rounded-full bg-surface-container-low hover:bg-secondary-container text-on-surface flex items-center justify-center transition-colors" id="nextSlide" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                chevron_right
                              </span>
                              {" "}
                            </button>
                          </div>
                        </div>
                        <div className="relative overflow-hidden rounded-xl bg-surface-container">
                          <div className="flex transition-transform duration-300 ease-in-out" id="carouselTrack">
                            <div className="min-w-full relative aspect-video group">
                              <img className="w-full h-full object-cover" data-alt="High precision scientific AWS weather tower station in Maitri Antarctica covered in dense rime ice during a dramatic polar blizzard with deep azure snow and atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfF-UH-7l6gMnoFvI6o4qmOtC5WHKe6pUfpMylZ4PHtoXt8ml8LyhaB3Tx-rBfDPf58QdHkJLHCI16snrL1q7AqpdMdpcLCsXiRFYxRFkeH3YV7_zwMl5Rsw9HtzXsljpFTr6y7UNXWaHrce8LzMGu8_zSHr8A7OF0oGKJL3HBpFY7CYxrJYDFbyFJAZQKrZ_WWaSGW04qYT2qZPTO9pC-47ak1nK-A7yAxAIKQen4C3eai6kX9Jts" />
                              <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent flex flex-col justify-end p-space-md text-on-primary">
                                <span className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-wider text-[10px]">
                                  Sensor Log #1
                                </span>
                                <p className="font-body-sm text-body-sm font-medium text-surface-container-lowest">
                                  Maitri AWS Tower 3 - Ultrasonic Anemometer Array in midwinter blizzard
                                </p>
                              </div>
                            </div>
                            <div className="min-w-full relative aspect-video group">
                              <img className="w-full h-full object-cover" data-alt="Scientific topographic contour diagram of Queen Maud Land ice sheet slope dropping sharply into Schirmacher Oasis rocky nunatak valley with wind velocity arrows in deep teal and cyan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCck3WDFz7FHB4cL780MJ5HBlz0xiVPikHt7_8PUK8IUZ_FKt7nQbYJaaw9P-SfweluTkyeXgtCaB4DfADRLcPUqRUkWEVlxO9PXS1Qos4f6ZdNKMxUBdDNnO2m_1e4xi9AN5nxpYm13e-dqrzB_-UeXAmpZ4AhQ2GD9ItP-jBMKY1B5YIRzQCGuc2zMpiMIv5YhehqnpTxt8rzzVWPN-s-_NFRwI72-559ysYOdqsSBtV8oQFmZBlW" />
                              <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent flex flex-col justify-end p-space-md text-on-primary">
                                <span className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-wider text-[10px]">
                                  Topographic Elevation Profile
                                </span>
                                <p className="font-body-sm text-body-sm font-medium text-surface-container-lowest">
                                  Polar Plateau to Schirmacher Oasis downslope vector boundary
                                </p>
                              </div>
                            </div>
                            <div className="min-w-full relative aspect-video group">
                              <img className="w-full h-full object-cover" data-alt="High speed scientific sonic anemometer graph showing turbulent kinetic energy spectrum and wind direction vectors plotted across 24 polar winter hours with crisp teal gridlines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbu_NWozhCurd1A8JbDRkmsyKrQrir-Ruz5LduxDB4qmwokqF9v9BnZmIl6PVJ6kNWgZx_QbB6fahj5_YKOR-SdIgvIhi0NND6-kMp8M-UNOHk7a5favlDWsJJpifE8JMgEdpbQwZoJo4HLGPlHZYNp6GRzAu_YakdmUGGQyvwNGSfsziXxW05SLWl7lxwFIqAHnphD9bcOBa6Y17feJDLb01TroI3petp0Ngug0iW7Aiy_rLQw9B_" />
                              <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent flex flex-col justify-end p-space-md text-on-primary">
                                <span className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-wider text-[10px]">
                                  Acoustic Telemetry Record
                                </span>
                                <p className="font-body-sm text-body-sm font-medium text-surface-container-lowest">
                                  Downslope katabatic wind vector analysis (1 Hz sonic anemometer)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 py-1">
                          <span className="carousel-dot w-2 h-2 rounded-full bg-primary transition-all" />
                          <span className="carousel-dot w-2 h-2 rounded-full bg-surface-container-highest transition-all" />
                          <span className="carousel-dot w-2 h-2 rounded-full bg-surface-container-highest transition-all" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center my-space-xs">
                        <div className="w-[420px] max-w-full h-[260px] rounded-xl bg-[#050B18] border-2 border-dashed border-[#1F7A8C] flex flex-col items-center justify-center text-center p-space-md shadow-inner">
                          <span className="font-headline-sm text-headline-sm text-primary-fixed tracking-wider font-bold">
                            {" GLOBE SLOT - polaris-globe-mini-chat "}
                          </span>
                          <span className="font-label-mono text-label-mono text-secondary-fixed text-[11px] mt-2 max-w-xs leading-normal">
                            {" Coordinates: 70°45′57″ S, 11°44′09″ E • Schirmacher Oasis • Elev: 117m ASL "}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm border-t border-surface-container-high/60">
                        <div className="flex items-center gap-space-xs flex-wrap">
                          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-secondary-container text-on-surface text-body-sm text-[12px] font-medium transition-colors focus:ring-2 focus:ring-primary" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              volume_up
                            </span>
                            {" "}
                            <span>
                              Listen 1:45
                            </span>
                            {" "}
                          </button>
                          <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant text-[12px] font-medium transition-colors" title="Copy answer to clipboard" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[16px]">
                              content_copy
                            </span>
                            {" "}
                            <span>
                              Copy
                            </span>
                            {" "}
                          </button>
                          <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-surface-container-low text-on-surface-variant text-[12px] font-medium transition-colors" title="Share answer link" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[16px]">
                              share
                            </span>
                            {" "}
                            <span>
                              Share
                            </span>
                            {" "}
                          </button>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <div className="flex items-center rounded-lg bg-surface-container-low p-0.5">
                            <button className="p-1 rounded hover:bg-surface-container-lowest text-on-surface-variant hover:text-primary transition-colors" title="Accurate and helpful" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                thumb_up
                              </span>
                              {" "}
                            </button>
                            <button className="p-1 rounded hover:bg-surface-container-lowest text-on-surface-variant hover:text-error transition-colors" title="Inaccurate or incomplete" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                thumb_down
                              </span>
                              {" "}
                            </button>
                          </div>
                          <a className="inline-flex items-center gap-1 font-label-mono text-label-mono text-[11px] text-primary hover:underline ml-1" href="#" onClick={(e)=>e.preventDefault()}>
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              picture_as_pdf
                            </span>
                            {" Export PDF Citation Brief "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between text-[12px] text-secondary">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          {" "}
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          {" "}
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                          {" "}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          POLARIS is synthesizing telemetry correlations from Himansh AWS...
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="sticky bottom-4 z-20 mt-space-sm bg-surface/90 backdrop-blur-md pt-2">
                  <div className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-md transition-all focus-within:ring-2 focus-within:ring-primary flex flex-col gap-2">
                    <textarea className="w-full bg-transparent resize-none p-2 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none leading-normal" placeholder="Ask any scientific question across India's Antarctic, Arctic, or Himalayan archives..." rows="2" defaultValue={""} />
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1">
                        <div className="relative">
                          <select className="appearance-none font-label-mono text-[11px] bg-surface-container-low text-on-surface-variant hover:text-on-surface px-2.5 py-1.5 pr-6 rounded-lg focus:outline-none cursor-pointer">
                            <option>
                              English (EN)
                            </option>
                            <option>
                              Hindi (हिन्दी)
                            </option>
                          </select>
                          <span className="material-symbols-outlined text-[14px] text-on-surface-variant pointer-events-none absolute right-1.5 top-2">
                            arrow_drop_down
                          </span>
                        </div>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors" title="Voice query mode" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[20px]">
                            mic
                          </span>
                          {" "}
                        </button>
                        <button className="p-1.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors" title="Attach file or dataset coordinate table" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[20px]">
                            attach_file
                          </span>
                          {" "}
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline font-label-mono text-label-mono text-[10px] text-outline">
                          Press ↵ to send
                        </span>
                        <button className="w-9 h-9 rounded-xl bg-primary text-on-primary hover:bg-primary-container flex items-center justify-center shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            send
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-label-mono text-label-mono text-[11px] text-outline mt-1.5">
                    {" Shift + Enter for new line • Grounded in certified MoES peer-reviewed data "}
                  </p>
                </div>
                {" "}
              </main>
              <aside className="lg:col-span-3 flex flex-col gap-space-md order-3">
                {" "}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col gap-space-md sticky top-24">
                  <div className="flex items-center justify-between pb-1 border-b border-surface-container-high/60">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        menu_book
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Sources Used (4)
                      </h3>
                    </div>
                    <button className="font-label-mono text-label-mono text-[11px] text-primary hover:underline flex items-center gap-0.5" title="Download BibTeX / APA citation bundle" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[12px]">
                        download
                      </span>
                      {" Export "}
                    </button>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <div className="p-space-sm rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-all flex flex-col gap-1.5 scroll-mt-28" id="source-1">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-primary text-on-primary font-label-mono text-[10px] font-bold">
                          [1]
                        </span>
                        <span className="font-label-mono text-label-mono text-[10px] text-tertiary font-semibold flex items-center gap-0.5">
                          {" "}
                          <span className="material-symbols-outlined text-[12px]">
                            lock_open
                          </span>
                          {" Open Access "}
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-on-surface text-[13px] leading-snug">
                        {" NCPOR Technical Report TR-2024-02: Micro-Meteorological Baseline & Geomagnetic Variance at Schirmacher Oasis "}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                        {" Dr. Ananya Sen, Atmospheric Wing, 42nd IAE "}
                      </p>
                      <div className="font-label-mono text-label-mono text-[10px] text-outline">
                        {" DOI: 10.5194/ncpor-tr-2024-02 "}
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] italic bg-surface-container-lowest p-2 rounded-lg text-[10.5px]">
                        {" \"...records high-frequency katabatic shear gradients and F-region ionospheric drift logged across 3,600 continuous observation hours...\" "}
                      </p>
                      <Link className="inline-flex items-center gap-1 font-label-mono text-label-mono text-[11px] text-primary hover:underline mt-0.5" to="/repository">
                        {" View in Repository ↗ "}
                      </Link>
                    </div>
                    <div className="p-space-sm rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-all flex flex-col gap-1.5 scroll-mt-28" id="source-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-primary text-on-primary font-label-mono text-[10px] font-bold">
                          [2]
                        </span>
                        <span className="font-label-mono text-label-mono text-[10px] text-secondary font-semibold">
                          NPDC Data Portal
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-on-surface text-[13px] leading-snug">
                        {" Cryospheric Boundary Layer Dynamics over East Antarctica "}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                        {" MoES Glaciology Working Group (2023) "}
                      </p>
                      <div className="font-label-mono text-label-mono text-[10px] text-outline">
                        {" Dataset: NPDC-IAE-41-MET-088 "}
                      </div>
                      <Link className="inline-flex items-center gap-1 font-label-mono text-label-mono text-[11px] text-primary hover:underline mt-0.5" to="/data">
                        {" View Dataset ↗ "}
                      </Link>
                    </div>
                    <div className="p-space-sm rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-all flex flex-col gap-1.5 scroll-mt-28" id="source-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-primary text-on-primary font-label-mono text-[10px] font-bold">
                          [3]
                        </span>
                        <span className="font-label-mono text-label-mono text-[10px] text-tertiary font-semibold flex items-center gap-1">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                          {" Live Stream "}
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-on-surface text-[13px] leading-snug">
                        {" Maitri AWS High-Rate Sonic Anemometer Archive (2020-2024) "}
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">
                        {" Continuous In-Situ Boundary Layer Telemetry "}
                      </p>
                      <div className="font-label-mono text-label-mono text-[10px] text-outline">
                        {" Telemetry Node: MAITRI-STN-MET-04 "}
                      </div>
                      <Link className="inline-flex items-center gap-1 font-label-mono text-label-mono text-[11px] text-primary hover:underline mt-0.5" to="/live/soe-01">
                        {" Live Telemetry ↗ "}
                      </Link>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-xl bg-secondary-container/40 flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">
                      verified
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-semibold text-[11px]">
                        Verification Seal
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant text-[10.5px] leading-normal">
                        {" Every fact in this response is mapped to peer-reviewed datasets. MoES Certified AI Outreach Protocol. "}
                      </p>
                    </div>
                  </div>
                </div>
                {" "}
              </aside>
            </div>
          </div>
          <div className="w-full bg-surface-container-low py-space-sm mt-space-xl">
            <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin text-center">
              <p className="font-label-mono text-label-mono text-secondary tracking-wide text-[12px] flex items-center justify-center gap-2">
                {" "}
                <span className="material-symbols-outlined text-[15px] text-primary">
                  policy
                </span>
                {" AI answers are source-linked. Verify with the original report. "}
              </p>
            </div>
          </div>
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
