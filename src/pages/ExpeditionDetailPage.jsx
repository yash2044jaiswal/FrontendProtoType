import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_expedition_detail_soe_01/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// Micro-interaction for smooth section jumping from the secondary navigation tabs\n  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n    anchor.addEventListener('click', function(e) {\n      const targetId = this.getAttribute('href');\n      if (targetId && targetId !== '#') {\n        const targetElement = document.querySelector(targetId);\n        if (targetElement) {\n          e.preventDefault();\n          const headerOffset = 130;\n          const elementPosition = targetElement.getBoundingClientRect().top;\n          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;\n          window.scrollTo({\n            top: offsetPosition,\n            behavior: 'smooth'\n          });\n        }\n      }\n    });\n  });";

export default function ExpeditionDetailPage() {
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
          <nav className="hidden xl:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low" data-active-classes="bg-primary-container text-on-primary font-semibold rounded-lg shadow-sm">
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link aria-current="page" className="px-3 py-1.5 transition-colors bg-primary-container text-on-primary font-semibold rounded-lg shadow-sm" data-path="expedition-globe" to="/globe">
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
          <section className="w-full bg-surface-bright pt-6 pb-12">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex flex-wrap items-center justify-between gap-space-md mb-8">
                <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant flex-wrap">
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
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Southern Ocean
                  </a>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-on-surface font-semibold">
                    SOE-01 (2006)
                  </span>
                </div>
                <div className="flex items-center gap-space-xs flex-wrap">
                  <Link className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors shadow-sm" to="/globe">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      arrow_back
                    </span>
                    {" Back to Globe "}
                  </Link>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      share
                    </span>
                    {" Share "}
                  </button>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      bookmark_border
                    </span>
                    {" Bookmark "}
                  </button>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" title="DOI: 10.5067/NCPOR-SOE-2006" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      format_quote
                    </span>
                    {" Cite "}
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>
                    {" Download Fact Sheet "}
                  </button>
                </div>
              </div>
              <div className="relative w-full rounded-[16px] overflow-hidden shadow-sm bg-surface-container-lowest">
                <div className="relative h-[340px] md:h-[400px] w-full overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="Expedition vessel ORV Sagar Kanya navigating pristine Southern Ocean ice floes near Antarctic shelf. Glacial icebergs in deep cyan and cerulean blue under a crisp low polar sun. Crisp scientific instrumentation, CTD winch visible on stern deck against crystalline polar atmospheric gradients." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW06URSYMyEFvG6_BgxhWUvn9B-hFdTnRFfFiduYdiL0v_5XOv1KGkLb6LVXqlNTmsMNPAdWp67aliTbwqszzGm8KI5F9EaDPao5akOYTjGrvguaZLmdThyYFbAMSntyPWDvfjt9syOUUlgkpSjvoH91LDl3v9qDGzVOqFqaLtxOrOszg1ttmvz9tbkGt2Px_sr9MUJa7608Z1bHMD3rf3i4KljGKiypkLHUqF2bMVY6cpvhPjoIVy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071c36]/90 via-[#071c36]/40 to-transparent" />
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md shadow-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      verified
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface uppercase tracking-wider">
                      MoES / NCPOR Lead Mission
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-on-primary">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary text-on-tertiary font-label-md text-label-md tracking-wider uppercase font-semibold">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-tertiary-fixed" />
                        {" COMPLETED "}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-mono text-label-mono">
                        {" Jan 25 – Apr 03, 2006 • 68 Days at Sea "}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-on-primary font-label-mono text-label-mono">
                        {" CRUISE SK-221 "}
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg md:text-[40px] md:leading-[50px] text-white tracking-tight mb-3">
                      {" Southern Ocean Expedition 2006 (SOE-01) "}
                    </h1>
                    <p className="font-body-lg text-body-lg text-white/90 max-w-4xl line-clamp-2 md:line-clamp-none mb-6 font-light">
                      {" Pioneering multidisciplinary Southern Ocean transect investigating Antarctic circumpolar current dynamics, carbon flux, and sediment core paleoclimatology across Prydz Bay and Kerguelen oceanic sectors. "}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm shadow-xs">
                          {" MR "}
                        </div>
                        <div>
                          <div className="font-title-md text-title-md text-white">
                            Dr. M. Ravichandran
                          </div>
                          <div className="font-label-mono text-label-mono text-white/70">
                            Chief Scientist, NCPOR
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2 overflow-hidden">
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container text-on-surface font-label-mono text-label-mono font-semibold">
                            PS
                          </div>
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                            AK
                          </div>
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-variant text-primary font-label-mono text-label-mono font-semibold">
                            VL
                          </div>
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary font-label-mono text-label-mono font-semibold">
                            SS
                          </div>
                        </div>
                        <span className="font-label-md text-label-md text-white/80">
                          +18 Research Scientists & Vessel Crew
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="sticky top-16 z-40 w-full bg-surface/90 backdrop-blur-xl shadow-xs py-2">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                <a className="shrink-0 px-4 py-2 rounded-xl bg-surface-container text-primary font-title-md text-title-md relative shadow-sm" href="#overview">
                  {" Overview "}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary-container rounded-full" />
                  {" "}
                </a>
                <a className="shrink-0 px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-title-md text-title-md transition-colors" href="#stations">
                  {" Map & Stations "}
                </a>
                <a className="shrink-0 px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-title-md text-title-md transition-colors" href="#media">
                  {" Media "}
                  <span className="ml-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                    20
                  </span>
                  {" "}
                </a>
                <a className="shrink-0 px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-title-md text-title-md transition-colors" href="#reports">
                  {" Reports "}
                  <span className="ml-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                    4
                  </span>
                  {" "}
                </a>
                <a className="shrink-0 px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-title-md text-title-md transition-colors" href="#datasets">
                  {" Datasets "}
                  <span className="ml-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                    9
                  </span>
                  {" "}
                </a>
                <a className="shrink-0 px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-title-md text-title-md transition-colors" href="#team">
                  {" Team "}
                  <span className="ml-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                    22
                  </span>
                  {" "}
                </a>
                <a className="shrink-0 px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-title-md text-title-md transition-colors" href="#timeline">
                  {" Timeline "}
                  <span className="ml-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                    68d
                  </span>
                  {" "}
                </a>
              </div>
            </div>
          </div>
          <section className="w-full py-24 bg-surface" id="overview">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-8 space-y-8">
                  <div className="rounded-[16px] bg-surface-container-lowest p-6 md:p-8 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-secondary-container text-primary flex items-center justify-center">
                          {" "}
                          <span className="material-symbols-outlined text-[20px]">
                            auto_awesome
                          </span>
                          {" "}
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface">
                          AI Synthesis & Executive Brief
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary font-label-mono text-label-mono">
                          ✦ AI-Drafted
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                          🔗 MoES / NPDC Verified
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed/30 text-tertiary font-label-mono text-label-mono font-semibold">
                          94% Confidence
                        </span>
                      </div>
                    </div>
                    <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-8 leading-relaxed">
                      <p>
                        {" The maiden Indian Southern Ocean Expedition (SOE-01) inaugurated a long-term observational initiative across the Indian sector of the Southern Ocean"}
                        <sup className="cursor-pointer text-primary font-bold px-0.5 hover:underline" title="Cruise Report SK-221, Section 1.2">
                          [1]
                        </sup>
                        . Deploying onboard the ice-strengthened vessel ORV Sagar Kanya, scientists executed high-resolution hydrographic profiling across the Subtropical Front, Sub-Antarctic Front, and Polar Front down to 3,420 meters depth
                        <sup className="cursor-pointer text-primary font-bold px-0.5 hover:underline" title="Physical Oceanography Field Log, pp. 45-51">
                          [2]
                        </sup>
                        {". "}
                      </p>
                      <p>
                        {" Core analysis revealed critical shifts in the biological carbon pump, demonstrating that diatomaceous flux directly attenuates atmospheric CO2 saturation rates during austral summer blooms"}
                        <sup className="cursor-pointer text-primary font-bold px-0.5 hover:underline" title="Journal of Marine Systems, 2008">
                          [3]
                        </sup>
                        . Five piston cores measuring up to 4.2m in sediment recovery yielded uninterrupted Late Pleistocene stratigraphy spanning four glacial-interglacial cycles
                        <sup className="cursor-pointer text-primary font-bold px-0.5 hover:underline" title="Paleoceanography Vol. 23">
                          [4]
                        </sup>
                        . The collected biogeochemical baseline continues to underpin India’s polar climate predictive modeling framework
                        <sup className="cursor-pointer text-primary font-bold px-0.5 hover:underline" title="NCPOR Monograph Series No. 4">
                          [5]
                        </sup>
                        {". "}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3 w-full md:w-auto">
                        <button aria-label="Play audio brief" className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-colors shadow-sm shrink-0" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[22px]">
                            play_arrow
                          </span>
                          {" "}
                        </button>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-title-md text-title-md text-on-surface">
                              Listen to Synthesis
                            </span>
                            <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                              AI Voice: Dr. Sharma
                            </span>
                          </div>
                          <span className="font-label-mono text-label-mono text-secondary">
                            Duration: 03:10 • 24kHz Scientific Lexicon
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 w-full md:w-64">
                        <div className="h-2 flex-1 bg-surface-container rounded-full overflow-hidden relative">
                          <div className="h-full bg-primary-container w-[72%] rounded-full" />
                        </div>
                        <span className="font-label-mono text-label-mono text-on-surface-variant shrink-0">
                          02:18 / 03:10
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button className="px-2 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors" type="button">
                          1.0x
                        </button>
                        <button className="px-2 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-surface-container-high transition-colors" type="button">
                          EN
                        </button>
                        <a className="text-primary font-label-md text-label-md hover:underline ml-2" href="#transcript">
                          Transcript
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[16px] bg-surface-container-lowest p-6 md:p-8 shadow-sm">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">
                      Mission Objectives & Key Scientific Mandates
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            water_drop
                          </span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface mb-1">
                            Hydrographic Transects
                          </h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Profile salinity, thermocline structure, and deep-water circulation across the Antarctic Polar Front.
                          </p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            layers
                          </span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface mb-1">
                            Paleoclimatic Coring
                          </h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Deploy sediment piston cores up to 4.2m to calibrate 450,000-year southern cryospheric shifts.
                          </p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            co2
                          </span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface mb-1">
                            Air-Sea CO₂ Exchange
                          </h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Quantify oceanic partial pressure of carbon dioxide (pCO2) and biological pump saturation limits.
                          </p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            timeline
                          </span>
                        </div>
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface mb-1">
                            Baseline Time-Series
                          </h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Establish long-term Indian monitoring stations for biogeochemical shifts in the Southern Ocean.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 space-y-6">
                  <div className="rounded-[16px] bg-surface-container-lowest p-6 shadow-sm">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                      Cruise Telemetry & Facts
                    </h3>
                    <dl className="space-y-4 font-body-sm text-body-sm">
                      <div className="pb-3 border-b border-surface-container flex flex-col">
                        <dt className="font-label-mono text-label-mono text-secondary uppercase">
                          Operational Window
                        </dt>
                        <dd className="font-title-md text-title-md text-on-surface mt-0.5">
                          25 Jan 2006 – 03 Apr 2006
                        </dd>
                        <dd className="font-label-mono text-label-mono text-on-surface-variant">
                          68 Consecutive Days at Sea
                        </dd>
                      </div>
                      <div className="pb-3 border-b border-surface-container flex flex-col">
                        <dt className="font-label-mono text-label-mono text-secondary uppercase">
                          Research Vessel
                        </dt>
                        <dd className="font-title-md text-title-md text-on-surface mt-0.5">
                          ORV Sagar Kanya
                        </dd>
                        <dd className="font-label-mono text-label-mono text-on-surface-variant">
                          NCPOR Ocean Research Fleet (SK-221)
                        </dd>
                      </div>
                      <div className="pb-3 border-b border-surface-container flex flex-col">
                        <dt className="font-label-mono text-label-mono text-secondary uppercase">
                          Primary Oceanic Basin
                        </dt>
                        <dd className="font-title-md text-title-md text-on-surface mt-0.5">
                          Indian Sector, Southern Ocean
                        </dd>
                        <dd className="font-label-mono text-label-mono text-on-surface-variant">
                          Prydz Bay & Kerguelen Plateau
                        </dd>
                      </div>
                      <div className="pb-3 border-b border-surface-container flex flex-col">
                        <dt className="font-label-mono text-label-mono text-secondary uppercase">
                          Key Southern Reach
                        </dt>
                        <dd className="font-title-md text-title-md text-on-surface mt-0.5">
                          69.4° S, 76.2° E
                        </dd>
                        <dd className="font-label-mono text-label-mono text-on-surface-variant">
                          DMS: 69° 22' 41" S, 76° 11' 33" E
                        </dd>
                      </div>
                      <div className="pb-3 border-b border-surface-container flex flex-col">
                        <dt className="font-label-mono text-label-mono text-secondary uppercase">
                          Max Depth Sampled
                        </dt>
                        <dd className="font-title-md text-title-md text-on-surface mt-0.5">
                          3,420 meters
                        </dd>
                        <dd className="font-label-mono text-label-mono text-on-surface-variant">
                          Deep Abyssal Trench Hydrocast
                        </dd>
                      </div>
                      <div className="pb-3 border-b border-surface-container flex flex-col">
                        <dt className="font-label-mono text-label-mono text-secondary uppercase">
                          Lead Disciplines
                        </dt>
                        <dd className="font-title-md text-title-md text-on-surface mt-0.5">
                          Physical & Biogeochemical Oceanography
                        </dd>
                        <dd className="font-label-mono text-label-mono text-on-surface-variant">
                          Paleoceanography & Marine Meteorology
                        </dd>
                      </div>
                      <div className="pt-1 flex flex-col">
                        <dt className="font-label-mono text-label-mono text-secondary uppercase">
                          Licensing & Open Access
                        </dt>
                        <dd className="font-title-md text-title-md text-tertiary mt-0.5">
                          CC-BY 4.0 International
                        </dd>
                        <dd className="font-label-mono text-label-mono text-on-surface-variant">
                          NCPOR Open Science Portal
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-6 pt-6 border-t border-surface-container">
                      <a className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-title-md text-title-md text-center block transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                        {" View Full Vessel Log (PDF) "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-24 bg-surface-container-low" id="stations">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="max-w-2xl mb-10">
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest">
                  Geospatial Telemetry
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                  Expedition Route & Sampling Stations
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  {" Tracking the 42 synoptic hydrographic and coring stations completed between Goa, Mauritius, and the Antarctic ice margin. "}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
                <div className="lg:col-span-7 flex flex-col">
                  <div className="rounded-[16px] bg-[#050B18] p-4 flex-1 flex flex-col justify-between relative shadow-md min-h-[460px]">
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-label-mono text-label-mono">
                        <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                        {" PROJECTION: ORTHOGRAPHIC POLAR "}
                      </div>
                      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-lg p-1">
                        <button className="px-2.5 py-1 rounded text-white bg-primary-container font-label-mono text-label-mono shadow-xs" type="button">
                          3D Globe
                        </button>
                        <button className="px-2.5 py-1 rounded text-white/70 hover:text-white font-label-mono text-label-mono" type="button">
                          2D Flat
                        </button>
                        <button className="w-7 h-7 flex items-center justify-center text-white/70 hover:text-white" title="Recenter View" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            filter_center_focus
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-1 my-4">
                      <div className="max-w-full flex items-center justify-center text-center p-4" id="polaris-globe-mini-expedition" style={{"width": "560px", "height": "360px", "backgroundColor": "#050B18", "border": "2px dashed #1F7A8C", "outlineOffset": "-8px"}}>
                        <span className="font-label-mono text-label-mono text-[#1F7A8C] uppercase tracking-widest">
                          {" GLOBE SLOT - polaris-globe-mini-expedition - keep empty "}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-white/70 font-label-mono text-label-mono z-10 pt-2 border-t border-white/10">
                      <span>
                        LAT: 69.4° S • LON: 76.2° E
                      </span>
                      <span>
                        TOTAL TRANSECT: 14,800 NM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col">
                  <div className="rounded-[16px] bg-surface-container-lowest p-6 shadow-sm flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-surface-container">
                        <span className="font-title-md text-title-md text-on-surface">
                          Sampling Stations (42 Total)
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Showing Key Locations
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-title-md text-title-md text-on-surface">
                              Station 14 • Prydz Bay
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
                              CTD Cast
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                            <span>
                              67° 12' S, 74° 40' E
                            </span>
                            <span>
                              Depth: 400 m
                            </span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-title-md text-title-md text-on-surface">
                              Station 22 • Kerguelen Trench
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-tertiary font-label-mono text-label-mono font-semibold">
                              Piston Core PC-04
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                            <span>
                              58° 30' S, 78° 12' E
                            </span>
                            <span>
                              Depth: 3,420 m
                            </span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-title-md text-title-md text-on-surface">
                              Station 31 • Polar Front
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
                              Plankton Net Tow
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                            <span>
                              52° 18' S, 64° 05' E
                            </span>
                            <span>
                              Depth: 1,200 m
                            </span>
                          </div>
                        </div>
                        <div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-title-md text-title-md text-on-surface">
                              Station 39 • Sub-Antarctic
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono">
                              Radiosonde Launch
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                            <span>
                              45° 02' S, 57° 50' E
                            </span>
                            <span>
                              Atmospheric Probe
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <Link className="w-full py-3 px-4 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-colors shadow-sm" to="/globe">
                        {" "}
                        <span>
                          View Interactive Trajectory on Expedition Globe
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          north_east
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-24 bg-surface" id="media">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div className="max-w-2xl">
                  <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest">
                    Documentary Archive
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                    Field Media & Dispatches
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {" Original photographic logs, sediment extraction sequences, and high-latitude field records from the 2006 Southern Ocean cruise. "}
                  </p>
                </div>
                <a className="inline-flex items-center gap-1 text-primary font-title-md text-title-md hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                  {" "}
                  <span>
                    View all 20 assets
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                  {" "}
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-12">
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Scientific crew retrieving a massive 4-meter sediment piston core on the icy aft deck of research vessel ORV Sagar Kanya. Winch rigging, sea spray, and Antarctic sea mist in cold daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI4IuNHm134Ja79yBX9bzAaJb9b7KTvFyNOiHv6Ki91NrOKanJNl8EahWy9Fds2Y-cZsT7y0UQ6s1bp0qEIKMyOOjWYKoGICpDhxw_YUPW23bgSZT2c8207vL1hjdfREobBiEpNvHdoRYeUAMG-b5t30G-PWU1GVXsc3dIGezVC_X1-qA557sPcXXvxIXpUk-dEjovOv4DqIkXKaBtOfO0ybgEAlERCE2D8VZvvk7-F8ohbntr79qM" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono">
                      Piston Core PC-04
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface mb-1">
                      Sediment Core Retrieval on A-Frame Deck
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      Piston corer recovery at 3,420m depth in the Kerguelen Trench area revealing intact glaciomarine silt records.
                    </p>
                    <span className="font-label-mono text-label-mono text-secondary mt-3 block">
                      Station 22 • 04 Feb 2006
                    </span>
                  </div>
                </div>
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="CTD rosette sampler with 24 Niskin bottles being carefully lowered over the vessel railing at sunset in the Southern Ocean. Golden orange reflection on dark choppy sub-polar waters." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPCiK1VhWuFxbch8_ZUQUA-bjeDJdlK1KU931pOf4A9tAWxUD4YSukxt1V-HKgJEl8oXK03KcT5XJYIY-TZZyjYuvT5bC3mWT4LCCcTDB9PyfPyUCZhD7a3lyEVM_dcVYdDFgqvtc1kY-OW6WjLyY6cUmSgi_8nZYAeckyX835qjXXVpfx0YABO-XC8keS95w5vs1cN8fl02n0OTxwR96FYl0a8t5gLmF3pFUs1Hfy6IM7W1wnhl7V" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono">
                      CTD Profiler
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface mb-1">
                      CTD Rosette Deployment at Sunset
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      Conductivity, temperature, and depth profiling deployed into the Antarctic Intermediate Water boundary layer.
                    </p>
                    <span className="font-label-mono text-label-mono text-secondary mt-3 block">
                      Station 14 • 11 Feb 2006
                    </span>
                  </div>
                </div>
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Bow of the research ship ORV Sagar Kanya cutting cleanly through dense white and turquoise pack ice floes in Prydz Bay, Antarctica. Massive glacier shelf in distant horizon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2rwbm7mbasbnO9HtlzG3xuXU09bJ-ZP1WvBCQegB2oSWgbSjBzkXfCXvkzVPbmAhh8XqmjrbMeT2V-8KC111hpPfA2-qKknq7NKhXlU7TD65cYQBEEBzw2lcLFnEHmo_nC9Lfo1G9VNPMUcTVaOo_GT4rnquD6F8eSlHaYaKqajsz76UsPgDHZy6ycbrZalJF1gqLufkNU5G71rgjvIqU9b-0lf2PxKLOtUomQmz3iv-slQJCcEf" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono">
                      Prydz Bay
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface mb-1">
                      Sea-Ice Navigation in Prydz Bay
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      Carefully transiting seasonal pack ice floes toward the continental shelf margin for coastal water sampling.
                    </p>
                    <span className="font-label-mono text-label-mono text-secondary mt-3 block">
                      Station 18 • 18 Feb 2006
                    </span>
                  </div>
                </div>
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Onboard wet laboratory aboard research ship. A scientist calibrates an Autosal salinometer surrounded by glass bottles and digital monitors displaying ocean salinity curves." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaY2BDs1snJ4QRdRevG5XtTXZx0p4n0TLzFlpRNsDRNjXSVK9C303_qKS8jUpGoKE0l8mmzArHsUHQGACAIO8NjPkcOMBrZrPu2hKiEvYnpA37lsNBPxnyT2lNO06D_AokkEUzFRghGGVoa4itZOP_Pd7ITZCaYWOgtQ4wQCgBxsL7crvN0elKGaDTB4DZMm3HKxX6BspMlq_Hema48s72IcX0TF0y0F8QeIGYcI5enyDvhZvQbehT" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono">
                      Ship Lab
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface mb-1">
                      Laboratory Salinometer Calibration
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      Benchtop salinity determination verifying deep-cast sensors against IAPSO standard seawater batches.
                    </p>
                    <span className="font-label-mono text-label-mono text-secondary mt-3 block">
                      Lab Deck • 26 Feb 2006
                    </span>
                  </div>
                </div>
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Flock of Antarctic petrels gliding above cold blue ocean waves and tabular icebergs in the Southern Ocean, sharp focus on sea birds with frosted feathers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhfsUTVfIRU24gZS-fhkjpqsjECWhhgreQla8vgaGnaWgNoYeZ0H7HTxeCtY1O10FacLIR4BxTFB5NSE7ecWLefroZmAZTGLhEE2cmXNY8SP76IkQBdPmJBwQK1aG2EVgjjuK4MqsNQO3jfIhHkr7fpBNfykO8y-OWwzqZ6lMAg_Jcc58g3S5QX9u6O5SVlySXohdDhiBY8Mb_Ypjnza503rnzZ0DRjdTsqrLLnZgfoOwhNb_G8-nT" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono">
                      Ornithology
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface mb-1">
                      Antarctic Petrels and Ice Floe Monitoring
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      Avifauna census tracking marine bird distribution as an indicator of productive upwelling zones.
                    </p>
                    <span className="font-label-mono text-label-mono text-secondary mt-3 block">
                      Station 31 • 05 Mar 2006
                    </span>
                  </div>
                </div>
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Oceanographic engineers inspecting an acoustic Doppler current profiler (ADCP) pod mounted on a steel cradle before underwater deployment. Tools, bolts, and measurement cables." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8HozJBglMEFza-ZNVVzJOuXhqHD_lTe7jGmHg1fOLDyhEgrPDsRigyeuOCXz2x00rvuMz2vs2Mbunrlri6FPWbIfbkqhioqGSBHPxfQ1dvynA5KY75gP0cXbLaPSNd5NIOPywwJYhYnrV0H9vv-rH5Xqp8nYT9lxS-JqdtfxqX71W6oJHMmv9KX7_xTX2Yx2lvdJSd7SVqMKQaiVEDxWlO3OuWLa9AYjiWMb1qcphVWH2vJNX6p8P" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono">
                      ADCP Rig
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface mb-1">
                      ADCP Profiler Servicing & Rigging
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      Hull-mounted Acoustic Doppler Current Profiler checks capturing current velocity vectors across the polar jet.
                    </p>
                    <span className="font-label-mono text-label-mono text-secondary mt-3 block">
                      Station 39 • 14 Mar 2006
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] bg-surface-container-lowest p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-full md:w-80 h-44 rounded-xl overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" data-alt="Still preview of a 20-second polar video dispatch showing breaking ice waves around the bow of the research vessel in the stormy Southern Ocean." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCixw7cAMAZMsxvdqYBstKD_kvvJe_fPm0gvkn4ak8kQzt73kTm2ceVJQVoECGgwkMB-jqV-1WBz6IYFRF5pFcM4g32DPgoGlIxFs-m6JS14DR7wo4aW5tavKxt2lWOFSRLuUOu4oSDVF-3Hn-6Mk_aHCxWoGCYY9BSXByM5hgMlpVvK-6gciA7_E9iE-Y_yYCfGkjY8tJEg7UH5lSfwV_WAk7PUic9BL3lhW4fxxGUFUWuW2ejUgpm" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[28px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white font-label-mono text-label-mono">
                    0:20 CLIP
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white font-label-mono text-label-mono">
                    CC ON
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-primary font-label-mono text-label-mono">
                      Polar in 30 Seconds
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      ARCHIVE REEL #04
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    Crossing the Roaring Forties: Field Video Dispatch
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    {" Uncut 20-second high-latitude footage capturing ORV Sagar Kanya breaching steep swell at 48° South during the peak of the autumn polar storm cycle. "}
                  </p>
                  <a className="inline-flex items-center gap-1.5 text-primary font-title-md text-title-md hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                    {" "}
                    <span>
                      Explore Raw Video Archive (H.264 Master)
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      open_in_new
                    </span>
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-24 bg-surface-container-low">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div className="max-w-2xl">
                  <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest">
                    Connected Research
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                    Related Expeditions
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    {" Longitudinal oceanographic campaigns and cryogenic observatories coordinated by the National Centre for Polar and Ocean Research. "}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button aria-label="Previous expedition" className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      chevron_left
                    </span>
                    {" "}
                  </button>
                  <button aria-label="Next expedition" className="w-10 h-10 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors shadow-sm" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      chevron_right
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-44 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Indian Antarctic research station Bharati located in Larsemann Hills, Antarctica. Modern aerodynamic structure glowing under polar aurora australis and ice snowfields." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPd7Uw4bD1jAz9Fin2vMO3B8LD5lfulFaIyv1-qdzf4JuTb5ecnW4rOqxihTaCMpRQFCMXNP39jqDs9LJ7pOom0W_8hXGjyVLjlAeSZ1e_HpL2Pdc2NIKeX7M9GHvYWmQ-Fbqo_ScJxzB3TcbKkFhCxqlt4oeNp0uFH29K3nDNgBvATNMOSFLoI47Fjg4EoAvdBLxygtQILis38zubsNOEENZqvKBQ4Mvp9Rz6llVtK36MH4wMrCF_" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-md text-label-md font-bold">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
                        {" LIVE "}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-label-mono text-label-mono text-secondary mb-1">
                        Nov 2023 – Present • 69.4° S
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                        43rd Indian Antarctic Expedition
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Operational wintering and cryospheric science regime centered around Bharati and Maitri scientific stations. "}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-surface-container">
                      <Link className="inline-flex items-center gap-1 text-primary font-title-md text-title-md hover:underline" to="/expeditions/soe-01">
                        {" "}
                        <span>
                          View Expedition
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
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-44 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Arctic fjord in Kongsfjorden, Svalbard with floating icebergs and dramatic snowy mountain ridges under a crisp cold sky. Ocean observatory buoy floating on blue water." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhHaY2g7-MhP8wO5M_b6WmEKdFWZtJRHv1gh3RaXIaitOPSb5wt9vkS-9fx4KmaPamdUqHkwFewhJaVHoCqcfJGBcoNANtonbhPSVPqBlJy0dSxuPPn_Bbz0F7Cyu133cbaohR7gU7cVQJLwRysvuw6C-V9MIjXHK9Om3MQY2kgdG8Ki05FiUqbTH0Y88csX7InlRd7gSgED6X2lOzV3GQxURv5ObydjrHcz617S8eUvkAmbvRLemC" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-md text-label-md font-bold">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
                        {" LIVE "}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-label-mono text-label-mono text-secondary mb-1">
                        Arctic Svalbard • 192m Mooring Depth
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                        IndARC Kongsfjorden Mooring V
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Subsurface underwater marine observatory continuously tracking Atlantic water inflows into the high Arctic. "}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-surface-container">
                      <a className="inline-flex items-center gap-1 text-primary font-title-md text-title-md hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                        {" "}
                        <span>
                          View Observatory
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-[16px] bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="h-44 w-full overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Indian oceanographic vessel ORV Sagar Nidhi on deep open ocean swells under clear blue skies with heavy scientific winches and marine surveying radar masts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDatKgSpTheQ7IQzzyobCHbVEi8lwgk9ijP0TcYge0rrYjhOGDNm8MMAPBeH2WMn3r1ywECXoaBJIrpBTDEFPUQ5VWSDk3fWKfBDXnVmCxu9DFFaWgFlNCCLX5FbMQG6M09C0se6gULEcy59bRLEUXipAjn1XB8W0x88jaWaO9-S761iLoOI4wDUW-kQreXmRnYueKCleDBihLrV_xzec-BNNuJluhZlVFwuaRVJxZMM4KQiW5preAu" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold">
                        {" COMPLETED "}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-label-mono text-label-mono text-secondary mb-1">
                        Jan – Mar 2024 • ORV Sagar Nidhi
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                        Southern Ocean Paleoclimate Cruise
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Deep sediment coring and multi-beam seabed mapping tracking millennial Antarctic circumpolar stability. "}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-surface-container">
                      <Link className="inline-flex items-center gap-1 text-primary font-title-md text-title-md hover:underline" to="/expeditions/soe-01">
                        {" "}
                        <span>
                          View Expedition
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
              </div>
            </div>
          </section>
        </div>
        {" "}
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
