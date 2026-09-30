import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_polar_community_science_outreach_community/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// Character Counter for Inquiry Box\n    const inquiryBox = document.getElementById('inquiry-text');\n    const counterDisplay = document.getElementById('char-counter');\n    if (inquiryBox && counterDisplay) {\n      inquiryBox.addEventListener('input', (e) => {\n        const len = e.target.value.length;\n        counterDisplay.textContent = `${len} / 500`;\n      });\n    }\n\n    // FAQ Accordion Toggle Function\n    function toggleAccordion(id) {\n      const content = document.getElementById(`accordion-content-${id}`);\n      const icon = document.getElementById(`accordion-icon-${id}`);\n      if (!content || !icon) return;\n\n      const isHidden = content.classList.contains('hidden');\n\n      // Close all items\n      for (let i = 1; i <= 5; i++) {\n        const c = document.getElementById(`accordion-content-${i}`);\n        const ic = document.getElementById(`accordion-icon-${i}`);\n        if (c && ic) {\n          c.classList.add('hidden');\n          c.classList.remove('block');\n          ic.classList.remove('rotate-180');\n        }\n      }\n\n      // Open toggled item if it was closed\n      if (isHidden) {\n        content.classList.remove('hidden');\n        content.classList.add('block');\n        icon.classList.add('rotate-180');\n      }\n    }\n\n    // Simulated Form Submission Handlers\n    const inquiryForm = document.getElementById('polar-inquiry-form');\n    if (inquiryForm) {\n      inquiryForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        const success = document.getElementById('form-success');\n        if (success) {\n          success.classList.remove('hidden');\n          inquiryForm.reset();\n          if (counterDisplay) counterDisplay.textContent = '0 / 500';\n        }\n      });\n    }\n\n    const newsletterForm = document.getElementById('newsletter-form');\n    if (newsletterForm) {\n      newsletterForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        const nlSuccess = document.getElementById('nl-success');\n        if (nlSuccess) {\n          nlSuccess.classList.remove('hidden');\n          newsletterForm.reset();\n        }\n      });\n    }";

export default function CommunityPage() {
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
            <div className="hidden 2xl:flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface">
              <span className="inline-block w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span className="font-label-mono text-label-mono text-on-surface tracking-wider uppercase">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 overflow-x-auto" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg px-2.5 py-1.5 shadow-sm">
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="data" to="/data">
              Data
            </Link>
            <Link aria-current="page" className="transition-colors whitespace-nowrap bg-primary-container text-on-primary-container font-semibold rounded-lg px-2.5 py-1.5 shadow-sm" data-path="community" to="/community">
              Community
            </Link>
            <Link className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-colors whitespace-nowrap" data-path="ask-polaris" to="/ask">
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
          <div className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/40 to-surface">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg className="w-full h-full text-secondary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 380">
                <path d="M-100 240C220 180 480 310 820 220C1160 130 1380 260 1600 210" stroke="currentColor" strokeDasharray="4 6" strokeWidth="0.8" />
                <path d="M-100 120C180 80 440 180 780 110C1120 40 1340 140 1600 90" stroke="currentColor" strokeWidth="0.75" />
                <circle cx="1180" cy="110" r="140" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.5" />
                <circle cx="1180" cy="110" r="80" stroke="currentColor" strokeWidth="0.75" />
                <path d="M1180 20 L1180 200 M1090 110 L1270 110" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-8 pb-16 lg:pb-24">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6">
                <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary rounded" to="/">
                  {" "}
                  <span className="material-symbols-outlined text-[14px]">
                    home
                  </span>
                  {" "}
                  <span>
                    Home
                  </span>
                  {" "}
                </Link>
                <span className="text-on-surface-variant/40 font-label-mono text-label-mono">
                  /
                </span>
                <span className="font-label-mono text-label-mono text-primary font-semibold">
                  Community & Outreach
                </span>
              </nav>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                  NCPOR Public Science Network • Polar Connect
                </span>
              </div>
              <div className="max-w-4xl">
                <h1 className="font-display-hero text-display-hero-mobile lg:text-display-hero text-on-surface mb-6 tracking-tight">
                  {" Connect with India's Polar Explorers & Researchers "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-8">
                  {" Join scientific webinars, engage in public Q&A with overwintering expedition scientists, register for outreach symposiums, and participate in Arctic, Antarctic, and Himalayan dialogue. "}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      explore
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      42 Active Expeditions Documented
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest shadow-sm">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">
                      groups
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      180+ Scientists in Network
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest shadow-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      satellite_alt
                    </span>
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      Monthly Public Science Dialogues
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="w-full bg-surface-container-lowest py-20 lg:py-24">
            <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                      Telemetry & Outreach Calendar
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface">
                    Upcoming Polar Science Sessions
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Timezone:
                  </span>
                  <span className="font-label-mono text-label-mono px-2.5 py-1 bg-surface-container rounded text-on-surface font-semibold">
                    IST (UTC +05:30)
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="bg-surface-container-low p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          June 2025
                        </h3>
                        <p className="font-label-mono text-label-mono text-secondary">
                          Austral Mid-Winter Solstice Cycle
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button aria-label="Previous Month" className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            chevron_left
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Next Month" className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            chevron_right
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center font-label-mono text-label-mono text-on-surface-variant font-semibold mb-3">
                      <div>
                        S
                      </div>
                      <div>
                        M
                      </div>
                      <div>
                        T
                      </div>
                      <div>
                        W
                      </div>
                      <div>
                        T
                      </div>
                      <div>
                        F
                      </div>
                      <div>
                        S
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-1.5 text-center font-body-sm text-body-sm">
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        1
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        2
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        3
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        4
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        5
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        6
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        7
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        8
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        9
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        10
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        11
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        12
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        13
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        14
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        15
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        16
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        17
                      </button>
                      <button className="h-9 rounded-lg flex flex-col items-center justify-center font-bold bg-secondary-container text-on-secondary-fixed shadow-sm relative focus:outline-none focus:ring-2 focus:ring-primary">
                        {" "}
                        <span>
                          18
                        </span>
                        {" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse -mt-0.5" />
                        {" "}
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        19
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        20
                      </button>
                      <button className="h-9 rounded-lg flex flex-col items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        {" "}
                        <span>
                          21
                        </span>
                        {" "}
                        <span className="w-1 h-1 rounded-full bg-tertiary" />
                        {" "}
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        22
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        23
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        24
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        25
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        26
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        27
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        28
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        29
                      </button>
                      <button className="h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container-lowest transition-colors">
                        30
                      </button>
                      <span className="h-9 rounded-lg flex items-center justify-center text-outline-variant/50">
                        1
                      </span>
                      <span className="h-9 rounded-lg flex items-center justify-center text-outline-variant/50">
                        2
                      </span>
                      <span className="h-9 rounded-lg flex items-center justify-center text-outline-variant/50">
                        3
                      </span>
                      <span className="h-9 rounded-lg flex flex-col items-center justify-center bg-surface-container text-primary font-bold">
                        {" "}
                        <span>
                          4
                        </span>
                        {" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                        {" "}
                      </span>
                      <span className="h-9 rounded-lg flex items-center justify-center text-outline-variant/50">
                        5
                      </span>
                    </div>
                    <div className="mt-6 pt-5 bg-surface-container-lowest p-4 rounded-xl shadow-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-mono text-label-mono text-primary font-bold uppercase">
                          Focus: 18 June 2025
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-[10px] font-bold">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />
                          {" LIVE SAT LINK "}
                        </span>
                      </div>
                      <p className="font-title-md text-title-md text-on-surface font-semibold line-clamp-1">
                        Maitri Overwintering Briefing
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Satellite downlink bandwidth allocated via NCPOR Goa Earth Station.
                      </p>
                    </div>
                    <div className="mt-6">
                      <label className="block font-label-mono text-label-mono uppercase text-secondary font-semibold mb-3">
                        Filter Session Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-3 py-1.5 rounded-full font-label-mono text-label-mono bg-primary-container text-on-primary-container font-semibold shadow-xs focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" All Sessions "}
                        </button>
                        <button className="px-3 py-1.5 rounded-full font-label-mono text-label-mono bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" Webinars "}
                        </button>
                        <button className="px-3 py-1.5 rounded-full font-label-mono text-label-mono bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" Workshops "}
                        </button>
                        <button className="px-3 py-1.5 rounded-full font-label-mono text-label-mono bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" Live Telemetry Link "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <article className="bg-surface-container-low p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono font-bold tracking-wide">
                          {" "}
                          <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                          {" Live Satellite Link "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary font-medium">
                          Antarctica • Maitri Station
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant bg-surface-container-lowest px-3 py-1 rounded-lg">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          schedule
                        </span>
                        <span>
                          June 18, 2025 • 15:30 IST
                        </span>
                      </div>
                    </div>
                    {" "}
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2 font-bold hover:text-primary transition-colors cursor-pointer">
                      {" Live from Maitri: 43rd Indian Antarctic Expedition Wintering Science Briefing "}
                    </h3>
                    {" "}
                    <p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
                      {" Direct telemetry symposium with overwintering researchers at 70°45′S. Topics cover atmospheric ozone monitoring, geomagnetic storm recordings during polar darkness, and station life support engineering. "}
                    </p>
                    {" "}
                    <div className="flex items-center gap-3 mb-6 p-3 bg-surface-container-lowest rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          person
                        </span>
                      </div>
                      <div>
                        <p className="font-title-md text-title-md text-on-surface font-semibold">
                          Dr. Ananya Sen & Maitri Winter Contingent
                        </p>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Lead Atmospheric Physicist & Station Wintering Team
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-low">
                      <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-body-sm text-body-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-1.5" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            how_to_reg
                          </span>
                          {" "}
                          <span>
                            Register for Live Stream
                          </span>
                          {" "}
                        </button>
                        <div className="relative inline-block">
                          <button className="px-4 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-body-sm text-body-sm font-medium transition-colors shadow-xs flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              calendar_today
                            </span>
                            {" "}
                            <span>
                              Add to Calendar
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-[16px]">
                              arrow_drop_down
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-mono text-label-mono transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-tertiary">
                          notifications_active
                        </span>
                        {" "}
                        <span>
                          Remind me
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <article className="bg-surface-container-low p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-label-mono text-label-mono font-bold tracking-wide">
                          {" "}
                          <span className="w-2 h-2 rounded-full bg-primary-container" />
                          {" Virtual Lecture "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary font-medium">
                          Himalaya • Chandra Basin
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant bg-surface-container-lowest px-3 py-1 rounded-lg">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          schedule
                        </span>
                        <span>
                          July 04, 2025 • 17:00 IST
                        </span>
                      </div>
                    </div>
                    {" "}
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2 font-bold hover:text-primary transition-colors cursor-pointer">
                      {" Himalayan Cryosphere Tipping Points: Chandra Basin Ablation Study "}
                    </h3>
                    {" "}
                    <p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
                      {" Decadal glaciological monitoring from the Himansh Observatory at 4,000+ meters. Presentation of real-time ablation stakes, isotopic glacier runoff tracing, and flood hazard mitigation models. "}
                    </p>
                    {" "}
                    <div className="flex items-center gap-3 mb-6 p-3 bg-surface-container-lowest rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          person
                        </span>
                      </div>
                      <div>
                        <p className="font-title-md text-title-md text-on-surface font-semibold">
                          Dr. Rajiv Kaushik
                        </p>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Senior Glaciologist, Himansh Observatory, Spiti
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-low">
                      <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-body-sm text-body-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-1.5" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            how_to_reg
                          </span>
                          {" "}
                          <span>
                            Register
                          </span>
                          {" "}
                        </button>
                        <button className="px-4 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-body-sm text-body-sm font-medium transition-colors shadow-xs flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            calendar_today
                          </span>
                          {" "}
                          <span>
                            Add to Calendar
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-mono text-label-mono transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-tertiary">
                          notifications
                        </span>
                        {" "}
                        <span>
                          Remind me
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <article className="bg-surface-container-low p-6 lg:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-secondary font-label-mono text-label-mono font-bold tracking-wide">
                          {" "}
                          <span className="w-2 h-2 rounded-full bg-secondary" />
                          {" Interactive Workshop "}
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary font-medium">
                          Classroom & University Outreach
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant bg-surface-container-lowest px-3 py-1 rounded-lg">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          schedule
                        </span>
                        <span>
                          July 22, 2025 • 11:00 IST
                        </span>
                      </div>
                    </div>
                    {" "}
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2 font-bold hover:text-primary transition-colors cursor-pointer">
                      {" Hands-on Polar Data in Classrooms: NPDC Open Telemetry Tools "}
                    </h3>
                    {" "}
                    <p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
                      {" Step-by-step masterclass for STEM educators and students on accessing the National Polar Data Centre portal, parsing IndARC mooring soundings, and integrating polar climate graphs into curriculum. "}
                    </p>
                    {" "}
                    <div className="flex items-center gap-3 mb-6 p-3 bg-surface-container-lowest rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          person
                        </span>
                      </div>
                      <div>
                        <p className="font-title-md text-title-md text-on-surface font-semibold">
                          Smt. Priya Nair
                        </p>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Data Scientist, National Polar Data Centre (NPDC, Goa)
                        </p>
                      </div>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 bg-surface-container-low">
                      <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-body-sm text-body-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-1.5" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            how_to_reg
                          </span>
                          {" "}
                          <span>
                            Register
                          </span>
                          {" "}
                        </button>
                        <button className="px-4 py-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-body-sm text-body-sm font-medium transition-colors shadow-xs flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            calendar_today
                          </span>
                          {" "}
                          <span>
                            Add to Calendar
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant font-label-mono text-label-mono transition-colors focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-tertiary">
                          notifications
                        </span>
                        {" "}
                        <span>
                          Remind me
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-20 lg:py-24">
            <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                    Research Roster & Leadership
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-3">
                  Featured Polar Scientists & Expedition Leaders
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                  {" Connect with researchers across glaciology, atmospheric physics, marine microbiology, and polar geology who lead India's active campaigns in high-latitude environments. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  {" "}
                  <div>
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-5 bg-surface-container relative">
                      <img className="w-full h-full object-cover" data-alt="Indian female polar meteorologist wearing red high-visibility Antarctic parka adjusting solar radiation sensors on an automated weather station mast, snowy Schirmacher oasis rocky hills in background with pale crisp sunlight and polar ice cap horizon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfEIhXTwQg-R5G6RXnacIlF2hd8UDO3SYQrKNzKNq0w-A_kmGDm_aCH95AJpXTYEvqWWwJDNngaE7T_eC6g-r3A6IbF9b92CyjP5PQ5yda6G8kt7jM1l916u_LVErc7edmcrVBZM9R7urjQ-Yp5z3RzufQeYczVYQ_RrJ-SQ1fHgIV02IjXRnzxqmrr6x3p46EzcC_rWZY7eLe-CosAItTXep3FNvUFiV1VGfn0ikcycjpMo6-FnNc" />
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-mono text-[10px] text-on-surface font-semibold uppercase">
                        IAE Maitri
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Dr. Ananya Sen
                    </h3>
                    <p className="font-label-md text-label-md text-primary font-semibold mt-0.5">
                      Lead Atmospheric Physicist
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary mt-1">
                      NCPOR, 42nd & 43rd IAE Maitri Station
                    </p>
                    <div className="mt-4 p-3 bg-surface-container-low rounded-xl">
                      <span className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-1">
                        Focus
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        {" Boundary layer meteorology & katabatic wind dynamics in Schirmacher Oasis. "}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold">
                        2 Overwintering Stints
                      </span>
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        Maitri AWS
                      </span>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="mt-6 pt-4 flex flex-col gap-2 bg-surface-container-lowest">
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span>
                        View Profile & Papers
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </button>
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container-low hover:bg-secondary-container text-primary font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        chat_bubble_outline
                      </span>
                      {" "}
                      <span>
                        Ask a Question
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  {" "}
                  <div>
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-5 bg-surface-container relative">
                      <img className="w-full h-full object-cover" data-alt="Indian male glaciologist in blue mountain shell climbing suit drilling differential GPS stake into high-altitude crevassed glacier ice in Spiti Valley Himalaya with rugged moraine cliffs and ice flutes under sharp mountain sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSOhJlsfveO7HIHQXIsn-AaHuQftcI-z_SUVaT2Mi5n7qThx_-2P7l9-J9yARlMiPxUwV2GDi5qpdfkGQFDqK5JodGP9UqoqTUoADXZoM7NG5GroeLPzQBJYrbAXmq1bzfgDcdLge1bH1aTzyW6uGjfFbGUAOY_wxPTni1H2HDIbewIMDUF7ogcbZiWPNep2drsYQJzTxDLZ1cRIKoCsyyHLCFakr06E1c1VPb7VjqSBT2V95tZF9R" />
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-mono text-[10px] text-on-surface font-semibold uppercase">
                        Himansh Lead
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Dr. Tenzing Norbu
                    </h3>
                    <p className="font-label-md text-label-md text-primary font-semibold mt-0.5">
                      High-Altitude Glaciologist
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary mt-1">
                      Himansh Observatory, Spiti Valley
                    </p>
                    <div className="mt-4 p-3 bg-surface-container-low rounded-xl">
                      <span className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-1">
                        Focus
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        {" Chandra Basin glacier mass balance, dGPS stakes & ice volume modeling. "}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold">
                        Himansh Station Lead
                      </span>
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        12 Field Seasons
                      </span>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="mt-6 pt-4 flex flex-col gap-2 bg-surface-container-lowest">
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span>
                        View Profile & Papers
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </button>
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container-low hover:bg-secondary-container text-primary font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        chat_bubble_outline
                      </span>
                      {" "}
                      <span>
                        Ask a Question
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  {" "}
                  <div>
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-5 bg-surface-container relative">
                      <img className="w-full h-full object-cover" data-alt="Female biological oceanographer examining illuminated seawater fluorometer test tube on the research deck of oceanographic vessel ORV Sagar Kanya amid stormy cobalt Southern Ocean swells and drifting tabular icebergs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoSVRkatXP1aTHFc-7bOC1bHWvZr9Y5hTOZkxwFGY6mQ86CQYGLN0gqzO58tAfa-vvTHnHSShZE-neKPBok-_rWyw99qIywLIpR1mb_DBxXyaMPWF48aPRHNkqHY90OmTAPqNXmCMYZkBiWeAl1s0vj4T4jBTw0AQeieSPx5cq-EpX_U9H4ZdKMfBwHRMQcVpQjXISPnpPpASd-eac4ZFX8Y8ssMcGKFfw4QiImoDBcZ3QJzXsKzS" />
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-mono text-[10px] text-on-surface font-semibold uppercase">
                        SOE Expedition
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Dr. Meera Krishnan
                    </h3>
                    <p className="font-label-md text-label-md text-primary font-semibold mt-0.5">
                      Deep-Sea Biological Oceanographer
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary mt-1">
                      Southern Ocean Expedition (ORV Sagar Kanya)
                    </p>
                    <div className="mt-4 p-3 bg-surface-container-low rounded-xl">
                      <span className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-1">
                        Focus
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        {" Prydz Bay phytoplankton blooms & Southern Ocean carbon sink mechanics. "}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold">
                        SOE Chief Scientist
                      </span>
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        NPDC Contributor
                      </span>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="mt-6 pt-4 flex flex-col gap-2 bg-surface-container-lowest">
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span>
                        View Profile & Papers
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </button>
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container-low hover:bg-secondary-container text-primary font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        chat_bubble_outline
                      </span>
                      {" "}
                      <span>
                        Ask a Question
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  {" "}
                  <div>
                    <div className="w-full h-44 rounded-xl overflow-hidden mb-5 bg-surface-container relative">
                      <img className="w-full h-full object-cover" data-alt="Indian male paleoclimatologist standing near colorful wooden Arctic research buildings in Ny-Alesund Svalbard holding cylinder sediment core tube with Kongsfjorden glacial fjord waters and snow-capped peaks in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsgMzf73g81kzXYNoc85xdYjFt0ioe2Cc0uI75J_b43WGoQz5_EZpo0Exk7CtqTg-uvb9MJbRtKrU3yyxFo8KSAln6LZKsaLOUBr5XixVUweAXx5HHo67EG7fIVP48Jt2tqHoJbEUlux8OxRF2YVNJv-WC3YYH5rWn9yBwl9U3ncxWXwjcLq7NbRv_pEhbXJZ30vPVQVw2a7TKmpw9HTwYPOU6D2w81XxGwVjFGtTj_R_Eb6lf63LB" />
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-mono text-[10px] text-on-surface font-semibold uppercase">
                        Arctic Himadri
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Dr. Vikramaditya Rathore
                    </h3>
                    <p className="font-label-md text-label-md text-primary font-semibold mt-0.5">
                      Polar Geoscientist & Paleoclimatologist
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary mt-1">
                      Arctic Base Himadri (Ny-Ålesund, Svalbard)
                    </p>
                    <div className="mt-4 p-3 bg-surface-container-low rounded-xl">
                      <span className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold block mb-1">
                        Focus
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        {" Kongsfjorden sediment coring, fjord acoustics & quaternary paleoclimate. "}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-semibold">
                        Himadri Lead 2023
                      </span>
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        IndARC Team
                      </span>
                    </div>
                  </div>
                  {" "}
                  {" "}
                  <div className="mt-6 pt-4 flex flex-col gap-2 bg-surface-container-lowest">
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span>
                        View Profile & Papers
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </button>
                    <button className="w-full py-2 px-3 rounded-lg bg-surface-container-low hover:bg-secondary-container text-primary font-body-sm text-body-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-1.5" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        chat_bubble_outline
                      </span>
                      {" "}
                      <span>
                        Ask a Question
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-lowest py-20 lg:py-24">
            <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                    Scientific Inquiry Desk
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-3">
                  Direct Dialogue & Common Inquiries
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                  {" Submit your scientific inquiries directly to NCPOR researchers or search verified answers across high-latitude polar missions and laboratory protocols. "}
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 bg-surface-container-low p-6 lg:p-8 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      contact_support
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Submit a Query to Scientists
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
                    {" Verified queries are answered by active scientists within 3-5 business days and may be featured in the public knowledge base. "}
                  </p>
                  <form className="flex flex-col gap-4" id="polar-inquiry-form" onSubmit={(e)=>e.preventDefault()}>
                    {" "}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="inquirer-name">
                        Your Full Name
                      </label>
                      <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" id="inquirer-name" placeholder="e.g. Maya Bhattacharya" required="" type="text" />
                    </div>
                    {" "}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="inquirer-affiliation">
                        Affiliation or Educational Level
                      </label>
                      <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" id="inquirer-affiliation" placeholder="e.g. IISc Bangalore / M.Sc Physics / Student" required="" type="text" />
                    </div>
                    {" "}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="inquirer-email">
                        Official / Institutional Email
                      </label>
                      <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" id="inquirer-email" placeholder="name@domain.edu.in" required="" type="email" />
                    </div>
                    {" "}
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5" htmlFor="inquiry-category">
                        Topic Domain
                      </label>
                      <select className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" id="inquiry-category">
                        <option value="glaciology">
                          Glaciology & Ice Sheets
                        </option>
                        <option value="ocean">
                          Southern Ocean & Marine Life
                        </option>
                        <option value="antarctic">
                          Antarctic Stations (Maitri & Bharati)
                        </option>
                        <option value="arctic">
                          Arctic & Ny-Ålesund Operations
                        </option>
                        <option value="himalaya">
                          Himalayan Cryosphere & Spiti
                        </option>
                      </select>
                    </div>
                    {" "}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="inquiry-text">
                          Question / Research Inquiry
                        </label>
                        <span className="font-label-mono text-label-mono text-secondary" id="char-counter">
                          0 / 500
                        </span>
                      </div>
                      <textarea className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-xs resize-none" id="inquiry-text" maxLength="500" placeholder="Detail your scientific question, context, or hypothesis..." required="" rows="4" defaultValue={""} />
                    </div>
                    {" "}
                    <div className="flex items-start gap-2.5 mt-1">
                      <input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary bg-surface-container-lowest" id="public-consent" type="checkbox" />
                      <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="public-consent">
                        {" Allow my query and its verified answer to be published in the public Polar FAQ repository for educational use. "}
                      </label>
                    </div>
                    {" "}
                    <button className="mt-2 w-full py-3 px-5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center gap-2" type="submit">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        send
                      </span>
                      {" "}
                      <span>
                        Submit Inquiry to NCPOR Scientists
                      </span>
                      {" "}
                    </button>
                    {" "}
                    <p className="hidden text-center font-label-md text-label-md text-tertiary-container font-semibold mt-1" id="form-success">
                      {" ✓ Inquiry submitted to NCPOR Science Outreach Division. "}
                    </p>
                    {" "}
                  </form>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                      search
                    </span>
                    <input className="w-full pl-11 pr-20 py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" placeholder="Search polar inquiries, living conditions, data access..." type="text" />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <kbd className="px-2 py-0.5 rounded bg-surface-container-highest font-label-mono text-[10px] text-on-surface font-semibold">
                        ⌘K
                      </kbd>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pb-1">
                    <button className="px-3 py-1 rounded-full font-label-mono text-label-mono bg-primary-container text-on-primary-container font-semibold shadow-xs" type="button">
                      All (48)
                    </button>
                    <button className="px-3 py-1 rounded-full font-label-mono text-label-mono bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                      Life at Stations (16)
                    </button>
                    <button className="px-3 py-1 rounded-full font-label-mono text-label-mono bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                      Expeditions (14)
                    </button>
                    <button className="px-3 py-1 rounded-full font-label-mono text-label-mono bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                      Data Access (10)
                    </button>
                    <button className="px-3 py-1 rounded-full font-label-mono text-label-mono bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                      Student Careers (8)
                    </button>
                  </div>
                  <div className="flex flex-col gap-3.5" id="polar-accordion">
                    <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
                      <button className="w-full p-4 lg:p-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary" type="button" onClick={(e)=>window.__pol(e,"toggleAccordion(1)")}>
                        {" "}
                        <span className="font-title-md text-title-md text-on-surface font-semibold pr-4">
                          {" How do scientists survive Antarctic winters at Maitri and Bharati during complete polar night? "}
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-primary text-[22px] shrink-0 transition-transform duration-200 rotate-180" id="accordion-icon-1">
                          expand_more
                        </span>
                        {" "}
                      </button>
                      <div className="px-5 pb-5 pt-0 block" id="accordion-content-1">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                          {" Wintering crews live inside double-walled pressurized habitat modules powered by redundant cogeneration diesel turbines with emergency thermal loops. Indoor hydroponic facilities yield fresh leafy greens to sustain physical nutrition and psychological morale during the 105 days of continuous polar darkness. External excursions require tethered safety lifelines, -50°C cold-weather multilayered survival suits, and continuous satellite radio telemetry. "}
                        </p>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-lowest">
                          <span className="material-symbols-outlined text-tertiary text-[18px]">
                            verified
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface font-medium">
                            Answered by Dr. Ananya Sen • 42nd & 43rd Maitri Winter Contingent
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
                      <button className="w-full p-4 lg:p-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary" type="button" onClick={(e)=>window.__pol(e,"toggleAccordion(2)")}>
                        {" "}
                        <span className="font-title-md text-title-md text-on-surface font-semibold pr-4">
                          {" Can undergraduate or postgraduate students in India join an Antarctic or Arctic expedition? "}
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-primary text-[22px] shrink-0 transition-transform duration-200" id="accordion-icon-2">
                          expand_more
                        </span>
                        {" "}
                      </button>
                      <div className="px-5 pb-5 pt-0 hidden" id="accordion-content-2">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {" Postgraduate and doctoral research scholars can participate through approved scientific project proposals submitted to NCPOR during the annual Call for Research Proposals (March-April). Selected student candidates undergo rigorous medical profiling at AIIMS New Delhi and high-altitude snow acclimation training with the Indo-Tibetan Border Police (ITBP) in Auli prior to deployment. "}
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
                      <button className="w-full p-4 lg:p-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary" type="button" onClick={(e)=>window.__pol(e,"toggleAccordion(3)")}>
                        {" "}
                        <span className="font-title-md text-title-md text-on-surface font-semibold pr-4">
                          {" How are katabatic winds measured, and why are they dangerous to expedition equipment? "}
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-primary text-[22px] shrink-0 transition-transform duration-200" id="accordion-icon-3">
                          expand_more
                        </span>
                        {" "}
                      </button>
                      <div className="px-5 pb-5 pt-0 hidden" id="accordion-content-3">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {" Katabatic winds form when high-density cold air accelerates downhill off the polar plateau. They are measured using ultrasonic sonic anemometers and Doppler sodars resistant to mechanical icing. Speeds regularly surpass 140 km/h within 15 minutes, scouring loose equipment, creating blinding whiteouts, and subjecting structural anchors to extreme aerodynamic stress. "}
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
                      <button className="w-full p-4 lg:p-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary" type="button" onClick={(e)=>window.__pol(e,"toggleAccordion(4)")}>
                        {" "}
                        <span className="font-title-md text-title-md text-on-surface font-semibold pr-4">
                          {" Where can university researchers download raw sensor arrays and ice-core datasets? "}
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-primary text-[22px] shrink-0 transition-transform duration-200" id="accordion-icon-4">
                          expand_more
                        </span>
                        {" "}
                      </button>
                      <div className="px-5 pb-5 pt-0 hidden" id="accordion-content-4">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {" Datasets are openly cataloged on the National Polar Data Centre (NPDC) portal under Ministry of Earth Sciences open-access policy. Researchers can filter by geospatial polygon, depth parameter, acoustic frequencies, or temporal dates and download standard NetCDF, ASCII, or GeoTIFF formats with full DOI citations. "}
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-xs">
                      <button className="w-full p-4 lg:p-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary" type="button" onClick={(e)=>window.__pol(e,"toggleAccordion(5)")}>
                        {" "}
                        <span className="font-title-md text-title-md text-on-surface font-semibold pr-4">
                          {" What is India's role in the Antarctic Treaty System and environmental protocol compliance? "}
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-primary text-[22px] shrink-0 transition-transform duration-200" id="accordion-icon-5">
                          expand_more
                        </span>
                        {" "}
                      </button>
                      <div className="px-5 pb-5 pt-0 hidden" id="accordion-content-5">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {" India is a Consultative Party to the Antarctic Treaty (1983) and ratified the Madrid Protocol on Environmental Protection (1998). In 2022, the Indian Parliament enacted the Indian Antarctic Act, establishing comprehensive legal frameworks for protecting the fragile polar biome, waste back-hauling protocols, and prohibiting mineral exploitation. "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-20 lg:py-24">
            <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface-container-lowest via-secondary-container/20 to-surface-container p-8 lg:p-14 shadow-sm">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20">
                  <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1" />
                    <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" />
                    <path d="M20 200 H380 M200 20 V380" stroke="currentColor" strokeWidth="0.75" />
                  </svg>
                </div>
                <div className="relative max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container mb-4">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      mail
                    </span>
                    <span className="font-label-mono text-label-mono text-primary uppercase font-bold tracking-wider">
                      Scientific Outreach Bulletin
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-4">
                    {" Stay Anchored in Polar Discovery "}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                    {" Receive monthly expedition briefings, upcoming webinar alerts, open dataset announcements, and research insights delivered straight from the poles. "}
                  </p>
                  <form className="flex flex-col gap-6" id="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
                    {" "}
                    {" "}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                      <label className="flex items-center gap-2.5 cursor-pointer bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl shadow-2xs">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary bg-surface-container-low" type="checkbox" />
                        {" "}
                        <span className="font-body-sm text-body-sm text-on-surface font-medium">
                          Monthly Expedition Dispatches & Story Highlights
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl shadow-2xs">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary bg-surface-container-low" type="checkbox" />
                        {" "}
                        <span className="font-body-sm text-body-sm text-on-surface font-medium">
                          Upcoming Webinars, Public Lectures & Scientist Live Links
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl shadow-2xs">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary bg-surface-container-low" type="checkbox" />
                        {" "}
                        <span className="font-body-sm text-body-sm text-on-surface font-medium">
                          New Open Data Releases & Technical Research Reports
                        </span>
                        {" "}
                      </label>
                    </div>
                    {" "}
                    {" "}
                    <div className="flex flex-col sm:flex-row items-stretch gap-3 mt-2 max-w-2xl">
                      <div className="relative grow">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                          alternate_email
                        </span>
                        <input className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-xs" placeholder="Enter your official or university email..." required="" type="email" />
                      </div>
                      <button className="px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary whitespace-nowrap flex items-center justify-center gap-2" type="submit">
                        {" "}
                        <span>
                          Subscribe to Polar Dispatches
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                    {" "}
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        lock
                      </span>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" Zero spam. Official Ministry of Earth Sciences & NCPOR communications only. Unsubscribe at any time. "}
                      </p>
                    </div>
                    {" "}
                    <p className="hidden font-label-md text-label-md text-tertiary-container font-semibold" id="nl-success">
                      {" ✓ Registration confirmed. You have been added to the POLARIS dispatch registry. "}
                    </p>
                    {" "}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(7,28,54,0.03)] py-space-xl">
        <div className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin">
          <div className="mb-space-lg p-space-md bg-surface-container-low rounded-xl flex items-start sm:items-center gap-space-md">
            <span className="material-symbols-outlined text-primary text-[22px] shrink-0">
              info
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <strong className="text-on-surface font-medium">
                NCPOR Simulation Notice:
              </strong>
              {" Real-time telemetric streams, climate observation models, and research archives are curated for educational, scientific simulation, and research dissemination purposes under Ministry of Earth Sciences standards."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-xl">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-baseline gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
                  PORTAL
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
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
