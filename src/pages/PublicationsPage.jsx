import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_publications_catalogue_publications/code.html
const BODY_CLASS = "bg-background font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// Quick dropdown toggle for BibTeX / CSV Export\n  const exportBtn = document.getElementById('exportSplitBtn');\n  const exportMenu = document.getElementById('exportMenu');\n  if (exportBtn && exportMenu) {\n    exportBtn.addEventListener('click', (e) => {\n      e.stopPropagation();\n      exportMenu.classList.toggle('hidden');\n    });\n    document.addEventListener('click', () => {\n      if (!exportMenu.classList.contains('hidden')) {\n        exportMenu.classList.add('hidden');\n      }\n    });\n  }\n\n  // Clear search input interaction\n  const clearBtn = document.getElementById('clearSearchBtn');\n  const searchInput = document.getElementById('pubSearchInput');\n  if (clearBtn && searchInput) {\n    clearBtn.addEventListener('click', () => {\n      searchInput.value = '';\n      searchInput.focus();\n    });\n  }\n\n  // Keyboard shortcut listener for CMD+K\n  document.addEventListener('keydown', (e) => {\n    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {\n      e.preventDefault();\n      searchInput?.focus();\n    }\n  });";

export default function PublicationsPage() {
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
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link aria-current="page" className="px-3 py-1.5 transition-colors whitespace-nowrap bg-primary-container text-on-primary-container font-semibold rounded-full" data-path="publications" to="/publications">
              Publications
            </Link>
            <Link className="px-3 py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="timeline" to="/timeline">
              Timeline
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
          <section className="w-full bg-surface-container-low/70 py-space-xs">
            <div className="max-w-[1280px] mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1" to="/">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    home
                  </span>
                  {" Home "}
                </Link>
                <span className="text-on-surface-variant/40 font-label-mono text-label-mono">
                  /
                </span>
                <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/repository">
                  Repository
                </Link>
                <span className="text-on-surface-variant/40 font-label-mono text-label-mono">
                  /
                </span>
                <span className="font-body-sm text-body-sm text-primary font-semibold">
                  Publications Catalogue
                </span>
              </nav>
              <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1 rounded-full shadow-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-tertiary" />
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold">
                  {" MOES NATIONAL POLAR ARCHIVES • PEER-REVIEWED MONOGRAPHS & EXPEDITION REPORTS "}
                </span>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-space-lg">
            <div className="max-w-[1280px] mx-auto px-margin flex flex-col gap-space-md">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-3xl flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-mono text-label-mono text-primary font-bold tracking-widest uppercase">
                      NCPOR Technical Dispatches
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Open Science Catalog
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface">
                    Polar Science Publications Catalogue
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {" Official repository of Indian Antarctic, Arctic, Southern Ocean, and Himalayan expeditions technical reports, peer-reviewed scientific monographs, and historical expedition dispatches. "}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-xs shrink-0">
                  <div className="relative inline-flex items-center">
                    <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-4 py-2.5 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" id="exportSplitBtn" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        ios_share
                      </span>
                      {" "}
                      <span className="font-title-md text-title-md">
                        Export BibTeX / CSV
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px] ml-1">
                        expand_more
                      </span>
                      {" "}
                    </button>
                    <div className="hidden absolute right-0 top-12 z-20 w-48 bg-surface-container-lowest rounded-lg shadow-xl p-1 flex flex-col" id="exportMenu">
                      <button className="w-full text-left px-3 py-2 font-body-sm text-body-sm text-on-surface hover:bg-surface-container-high rounded flex items-center justify-between" type="button">
                        {" "}
                        <span>
                          BibTeX Format
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          .bib
                        </span>
                        {" "}
                      </button>
                      <button className="w-full text-left px-3 py-2 font-body-sm text-body-sm text-on-surface hover:bg-surface-container-high rounded flex items-center justify-between" type="button">
                        {" "}
                        <span>
                          EndNote XML
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          .enw
                        </span>
                        {" "}
                      </button>
                      <button className="w-full text-left px-3 py-2 font-body-sm text-body-sm text-on-surface hover:bg-surface-container-high rounded flex items-center justify-between" type="button">
                        {" "}
                        <span>
                          CSV Manifest
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-on-surface-variant">
                          .csv
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-surface-container-low hover:bg-secondary-container text-on-surface px-4 py-2.5 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      download_for_offline
                    </span>
                    {" "}
                    <span className="font-title-md text-title-md">
                      Bulk Download Selected
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs pt-space-xs">
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      auto_stories
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-bold tracking-tight">
                      1,240 publications
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Catalogued Records
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      explore
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold tracking-tight">
                      42 Expeditions Indexed
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Span 1981–2024
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      document_scanner
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold tracking-tight">
                      98.4% Full-Text
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      AI OCR Searchable
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-xl shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      lock_open
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface font-semibold tracking-tight">
                      100% Open Access
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      CC BY 4.0 Mandate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low/40 py-space-sm">
            <div className="max-w-[1280px] mx-auto px-margin flex flex-col gap-space-sm">
              <div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-md flex flex-col gap-space-sm">
                <div className="relative w-full flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[22px]">
                    search
                  </span>
                  <input className="w-full pl-12 pr-28 py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" id="pubSearchInput" placeholder="Search 1,240 publications by title, author, DOI, expedition number, or keywords..." type="text" />
                  <div className="absolute right-3 flex items-center gap-1.5">
                    <button className="w-6 h-6 rounded-full hover:bg-surface-container-highest text-on-surface-variant flex items-center justify-center transition-colors" id="clearSearchBtn" title="Clear" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                      {" "}
                    </button>
                    <kbd className="hidden md:inline-flex items-center font-label-mono text-label-mono bg-surface-container-highest text-on-surface px-2 py-1 rounded">
                      ⌘K
                    </kbd>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xs">
                  <div className="flex flex-col">
                    <label className="font-label-mono text-label-mono text-secondary mb-1">
                      EXPEDITION
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="All Expeditions (1st–43rd IAE, SOE, Arctic, Himansh)">
                        <option>
                          All Expeditions (1st–43rd IAE, SOE, Arctic, Himansh)
                        </option>
                        <option>
                          43rd Indian Antarctic Expedition (2023–24)
                        </option>
                        <option>
                          42nd Indian Antarctic Expedition (2022–23)
                        </option>
                        <option>
                          11th Southern Ocean Expedition (SOE)
                        </option>
                        <option>
                          Indian Arctic Expedition (Ny-Ålesund)
                        </option>
                        <option>
                          Himalayan Cryosphere (Himansh Base)
                        </option>
                        <option>
                          Historical Expeditions (1981–1990)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[16px] text-on-surface-variant pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-mono text-label-mono text-secondary mb-1">
                      DISCIPLINE
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="All Disciplines (Cryosphere, Ocean, Atmo, Bio)">
                        <option>
                          All Disciplines (Cryosphere, Ocean, Atmo, Bio)
                        </option>
                        <option>
                          Atmospheric & Cryospheric Physics
                        </option>
                        <option>
                          Glaciology & Ice Dynamics
                        </option>
                        <option>
                          Physical & Chemical Oceanography
                        </option>
                        <option>
                          Polar Biology & Ecosystems
                        </option>
                        <option>
                          Palaeoclimate & Deep Ice Cores
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[16px] text-on-surface-variant pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <label className="font-label-mono text-label-mono text-secondary">
                        YEAR RANGE
                      </label>
                      <div className="flex gap-1 font-label-mono text-label-mono text-primary cursor-pointer">
                        <span className="hover:underline">
                          Last 5Y
                        </span>
                        <span>
                          •
                        </span>
                        <span className="hover:underline">
                          80s Hist
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="1981 — 2024 (Full Record)">
                        <option>
                          1981 — 2024 (Full Record)
                        </option>
                        <option>
                          2020 — 2024 (Current Phase)
                        </option>
                        <option>
                          2010 — 2019 (Decadal Baseline)
                        </option>
                        <option>
                          1995 — 2009 (Expansion Phase)
                        </option>
                        <option>
                          1981 — 1994 (Foundation Monographs)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[16px] text-on-surface-variant pointer-events-none">
                        calendar_month
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-mono text-label-mono text-secondary mb-1">
                      DOCUMENT TYPE
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="All Types (Technical Reports, Papers)">
                        <option>
                          All Types (Technical Reports, Papers)
                        </option>
                        <option>
                          Technical Reports (TR)
                        </option>
                        <option>
                          Peer-Reviewed Journal Articles
                        </option>
                        <option>
                          Cruise & Expedition Dispatches
                        </option>
                        <option>
                          Annual Research Monographs
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[16px] text-on-surface-variant pointer-events-none">
                        description
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-mono text-label-mono text-secondary mb-1">
                      SCAN & TEXT STATUS
                    </label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue="All Records">
                        <option>
                          All Records
                        </option>
                        <option>
                          Scanned Legacy Reports
                        </option>
                        <option>
                          Searchable Text Extracted
                        </option>
                        <option>
                          Supplementary NetCDF Linked
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[16px] text-on-surface-variant pointer-events-none">
                        filter_alt
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-space-xs pt-2">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Layout View:
                    </span>
                    <div className="inline-flex p-0.5 rounded-lg bg-surface-container-low">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold shadow-sm" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          table_rows
                        </span>
                        {" Table View "}
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-mono text-label-mono transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          grid_view
                        </span>
                        {" Card View "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-md">
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                        Sort By:
                      </span>
                      <select className="bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>
                          Newest First (2024 → 1981)
                        </option>
                        <option>
                          Citation Count (Highest)
                        </option>
                        <option>
                          Most Downloaded
                        </option>
                        <option>
                          Expedition Chronology
                        </option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                        Show:
                      </span>
                      <div className="inline-flex gap-1 font-label-mono text-label-mono">
                        <button className="px-2 py-0.5 rounded bg-primary text-on-primary font-bold" type="button">
                          10
                        </button>
                        <button className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors" type="button">
                          25
                        </button>
                        <button className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors" type="button">
                          50
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface py-space-md">
            <div className="max-w-[1280px] mx-auto px-margin">
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-secondary font-label-mono text-label-mono uppercase tracking-wider">
                        <th className="py-3 px-4 w-12 text-center">
                          {" "}
                          <input aria-label="Select all publications" defaultChecked="" className="rounded text-primary focus:ring-primary" type="checkbox" />
                          {" "}
                        </th>
                        <th className="py-3 px-4 w-44">
                          Report ID / DOI
                        </th>
                        <th className="py-3 px-4">
                          Publication Title & Authors
                        </th>
                        <th className="py-3 px-4 w-48">
                          Expedition / Station
                        </th>
                        <th className="py-3 px-4 w-40">
                          Discipline
                        </th>
                        <th className="py-3 px-4 w-28 text-center">
                          Year
                        </th>
                        <th className="py-3 px-4 w-52">
                          Access & Badges
                        </th>
                        <th className="py-3 px-4 w-28 text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-low">
                      <tr className="bg-secondary-container/20 transition-colors">
                        <td className="py-4 px-4 text-center align-top">
                          {" "}
                          <input aria-label="Select report NCPOR-TR-2024-08" defaultChecked="" className="rounded text-primary focus:ring-primary mt-1" type="checkbox" />
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-label-mono text-label-mono text-primary font-bold">
                              NCPOR-TR-2024-08
                            </span>
                            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary truncate max-w-[150px]" to="/resources/ncpor-tr-2024-08">
                              doi.org/10.5194/ncpor-tr-2024-08
                            </Link>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-title-md text-title-md text-on-surface font-semibold hover:text-primary cursor-pointer transition-colors">
                              {" Micro-Meteorological Dynamics and Katabatic Wind Shear Profile at Schirmacher Oasis, Central Dronning Maud Land "}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              {" Dr. Ananya Sen, Dr. P. K. Joshi, Er. K. V. Ramanathan "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm text-on-surface font-medium">
                              42nd & 43rd IAE
                            </span>
                            <span className="font-label-mono text-label-mono text-secondary">
                              Maitri Station
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface">
                            Atmospheric & Cryospheric Physics
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-center">
                          {" "}
                          <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                            Feb 2024
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1.5 items-start">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                history_edu
                              </span>
                              {" Legacy scanned report "}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              {" Searchable text extracted "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-right">
                          {" "}
                          <button className="w-8 h-8 rounded-full bg-primary-fixed text-primary inline-flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" title="Collapse Drawer" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[20px]">
                              expand_less
                            </span>
                            {" "}
                          </button>
                          {" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0 bg-surface-container-low/60" colSpan="8">
                          {" "}
                          <div className="p-space-lg flex flex-col lg:flex-row gap-space-lg">
                            <div className="lg:w-2/3 flex flex-col gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-primary font-title-md text-title-md font-semibold">
                                  <span className="material-symbols-outlined text-[20px]">
                                    bolt
                                  </span>
                                  <span>
                                    ⚡ AI Executive Summary (POLARIS Grounded Model v3.2):
                                  </span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-primary-fixed font-label-mono text-label-mono text-primary font-bold">
                                  100% In-Situ Grounded
                                </span>
                              </div>
                              <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                                {" Synthesizes 3,600 continuous hours of high-rate 10Hz ultrasonic anemometer telemetry captured along the boundary layer of Maitri living modules. Demonstrates that severe katabatic surges exceed 160 km/h (86 knots) during winter blizzards, with strong nocturnal temperature inversions exceeding 12°C/100m. Establishes the first verified hydrodynamic drag coefficient dataset for Antarctic structural engineering in the Schirmacher Oasis corridor. "}
                              </p>
                              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                <Link className="px-2.5 py-1 rounded bg-secondary-container/60 hover:bg-secondary-container text-on-secondary-container font-label-mono text-label-mono transition-colors" to="/datasets/katabatic-wind-dynamics">
                                  #KatabaticWinds
                                </Link>
                                <Link className="px-2.5 py-1 rounded bg-secondary-container/60 hover:bg-secondary-container text-on-secondary-container font-label-mono text-label-mono transition-colors" to="/stories/overwintering-in-the-schirmacher-oasis">
                                  #SchirmacherOasis
                                </Link>
                                <a className="px-2.5 py-1 rounded bg-secondary-container/60 hover:bg-secondary-container text-on-secondary-container font-label-mono text-label-mono transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                                  #BoundaryLayer
                                </a>
                                <a className="px-2.5 py-1 rounded bg-secondary-container/60 hover:bg-secondary-container text-on-secondary-container font-label-mono text-label-mono transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                                  #MaitriStation
                                </a>
                                <a className="px-2.5 py-1 rounded bg-secondary-container/60 hover:bg-secondary-container text-on-secondary-container font-label-mono text-label-mono transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                                  #SonicAnemometry
                                </a>
                                <a className="px-2.5 py-1 rounded bg-secondary-container/60 hover:bg-secondary-container text-on-secondary-container font-label-mono text-label-mono transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                                  #TurbulentSensibleHeat
                                </a>
                              </div>
                              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-on-surface-variant font-label-mono text-label-mono bg-surface-container-low px-3 py-2 rounded-lg">
                                <div className="flex items-center gap-3">
                                  <span className="flex items-center gap-1 font-semibold text-on-surface">
                                    <span className="material-symbols-outlined text-[15px] text-primary">
                                      format_quote
                                    </span>
                                    {" Citations: 28"}
                                  </span>
                                  <span>
                                    •
                                  </span>
                                  <span className="flex items-center gap-1 font-semibold text-on-surface">
                                    <span className="material-symbols-outlined text-[15px] text-primary">
                                      download
                                    </span>
                                    {" Downloads: 1,420"}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1 text-secondary">
                                  <span className="material-symbols-outlined text-[15px]">
                                    sensors
                                  </span>
                                  <span>
                                    Data Grounding: In-situ AWS Maitri-03
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="lg:w-1/3 flex flex-col justify-between gap-space-sm bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                              <div className="flex flex-col gap-2">
                                <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold">
                                  Immediate Operations
                                </span>
                                <div className="grid grid-cols-3 gap-2">
                                  <button className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary transition-all shadow-sm" type="button">
                                    {" "}
                                    <span className="material-symbols-outlined text-[20px] mb-1">
                                      visibility
                                    </span>
                                    {" "}
                                    <span className="font-title-md text-title-md">
                                      View
                                    </span>
                                    {" "}
                                  </button>
                                  <button className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all" type="button">
                                    {" "}
                                    <span className="material-symbols-outlined text-[20px] text-primary mb-1">
                                      volume_up
                                    </span>
                                    {" "}
                                    <span className="font-title-md text-title-md">
                                      Listen
                                    </span>
                                    {" "}
                                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                                      1:45
                                    </span>
                                    {" "}
                                  </button>
                                  <button className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all" type="button">
                                    {" "}
                                    <span className="material-symbols-outlined text-[20px] text-primary mb-1">
                                      format_quote
                                    </span>
                                    {" "}
                                    <span className="font-title-md text-title-md">
                                      Cite
                                    </span>
                                    {" "}
                                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                                      APA / Bib
                                    </span>
                                    {" "}
                                  </button>
                                </div>
                                <a className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-primary-fixed text-on-surface px-4 py-2.5 rounded-lg font-title-md text-title-md font-semibold transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                                  {" "}
                                  <span className="material-symbols-outlined text-[18px] text-primary">
                                    account_balance
                                  </span>
                                  {" "}
                                  <span>
                                    Open in Digital Library
                                  </span>
                                  {" "}
                                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                                    open_in_new
                                  </span>
                                  {" "}
                                </a>
                              </div>
                              <div className="flex flex-col gap-2 pt-2">
                                <button className="w-full inline-flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-low hover:bg-secondary-container/50 font-body-sm text-body-sm text-on-surface transition-colors" type="button">
                                  {" "}
                                  <span className="flex items-center gap-2">
                                    {" "}
                                    <span className="material-symbols-outlined text-[18px] text-primary">
                                      picture_as_pdf
                                    </span>
                                    {" Download PDF (8.4 MB) "}
                                  </span>
                                  {" "}
                                  <span className="material-symbols-outlined text-[16px]">
                                    file_download
                                  </span>
                                  {" "}
                                </button>
                                <button className="w-full inline-flex items-center justify-between px-3 py-2 rounded-lg bg-surface-container-low hover:bg-secondary-container/50 font-body-sm text-body-sm text-on-surface transition-colors" type="button">
                                  {" "}
                                  <span className="flex items-center gap-2">
                                    {" "}
                                    <span className="material-symbols-outlined text-[18px] text-tertiary">
                                      dataset
                                    </span>
                                    {" Supplementary Telemetry (NetCDF) "}
                                  </span>
                                  {" "}
                                  <span className="material-symbols-outlined text-[16px]">
                                    file_download
                                  </span>
                                  {" "}
                                </button>
                              </div>
                            </div>
                          </div>
                          {" "}
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 text-center align-top">
                          {" "}
                          <input aria-label="Select report NCPOR-SR-2023-14" className="rounded text-primary focus:ring-primary mt-1" type="checkbox" />
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-label-mono text-label-mono text-primary font-bold">
                              NCPOR-SR-2023-14
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant">
                              doi.org/10.1016/j.glac.2023
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-title-md text-title-md text-on-surface font-semibold hover:text-primary cursor-pointer transition-colors">
                              {" Decadal Mass Balance and Surface Albedo Trajectories of Batal and Samudra Tapu Glaciers in Chandra Basin "}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              {" Dr. Tenzing Norbu, Dr. S. K. Roy "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm text-on-surface font-medium">
                              Himalayan Cryosphere
                            </span>
                            <span className="font-label-mono text-label-mono text-secondary">
                              Himansh Base (Spiti)
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface">
                            Glaciology & Third Pole Hydrology
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-center">
                          {" "}
                          <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                            Nov 2023
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1.5 items-start">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              {" Searchable text extracted "}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                verified
                              </span>
                              {" Peer-Reviewed "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-right">
                          {" "}
                          <div className="flex items-center justify-end gap-1">
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-primary inline-flex items-center justify-center transition-colors" title="View PDF" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                picture_as_pdf
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Cite" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                format_quote
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Expand" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                expand_more
                              </span>
                              {" "}
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 text-center align-top">
                          {" "}
                          <input aria-label="Select report DOD-TR-1983-01" className="rounded text-primary focus:ring-primary mt-1" type="checkbox" />
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-label-mono text-label-mono text-secondary font-bold">
                              DOD-TR-1983-01
                            </span>
                            <span className="font-label-mono text-label-mono text-secondary font-semibold">
                              (Historical Monograph)
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-title-md text-title-md text-on-surface font-semibold hover:text-primary cursor-pointer transition-colors">
                              {" Scientific Report of the First Indian Expedition to Antarctica (1981–1982): Oceanographic and Meteorological Observations "}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              {" Dr. S. Z. Qasim (Expedition Leader) and Scientific Contingent "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm text-on-surface font-medium">
                              1st Indian Antarctic Expedition
                            </span>
                            <span className="font-label-mono text-label-mono text-secondary">
                              Operation Gangotri
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface">
                            Marine Biology & Meteorological Surveys
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-center">
                          {" "}
                          <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                            Mar 1983
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1.5 items-start">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                history_edu
                              </span>
                              {" Legacy scanned report "}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              {" Searchable text extracted "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-right">
                          {" "}
                          <div className="flex items-center justify-end gap-1">
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-primary inline-flex items-center justify-center transition-colors" title="View Scanned PDF" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                history
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Cite" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                format_quote
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Expand" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                expand_more
                              </span>
                              {" "}
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 text-center align-top">
                          {" "}
                          <input aria-label="Select report SOE-TR-2022-05" className="rounded text-primary focus:ring-primary mt-1" type="checkbox" />
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-label-mono text-label-mono text-primary font-bold">
                              SOE-TR-2022-05
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant">
                              doi.org/10.5194/soe-2022-05
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-title-md text-title-md text-on-surface font-semibold hover:text-primary cursor-pointer transition-colors">
                              {" Deep-Sea Carbonate Chemistry and Phytoplankton Biomass Gradients across the Southern Ocean Polar Front "}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              {" Dr. Meera Krishnan, Dr. Arindam Das "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm text-on-surface font-medium">
                              11th Southern Ocean Expedition
                            </span>
                            <span className="font-label-mono text-label-mono text-secondary">
                              ORV Sagar Kanya
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface">
                            Biogeochemical Oceanography
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-center">
                          {" "}
                          <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                            Aug 2022
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1.5 items-start">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              {" Searchable text extracted "}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                lock_open
                              </span>
                              {" Open Access CC BY 4.0 "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-right">
                          {" "}
                          <div className="flex items-center justify-end gap-1">
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-primary inline-flex items-center justify-center transition-colors" title="View PDF" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                picture_as_pdf
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Cite" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                format_quote
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Expand" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                expand_more
                              </span>
                              {" "}
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 text-center align-top">
                          {" "}
                          <input aria-label="Select report NCPOR-AR-2021-03" className="rounded text-primary focus:ring-primary mt-1" type="checkbox" />
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-label-mono text-label-mono text-primary font-bold">
                              NCPOR-AR-2021-03
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant">
                              doi.org/10.1785/ncpor.arc.03
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1">
                            <span className="font-title-md text-title-md text-on-surface font-semibold hover:text-primary cursor-pointer transition-colors">
                              {" Sub-Surface Hydrography and Acoustic Mooring Measurements in Kongsfjorden, Svalbard: 2014–2020 Observations "}
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              {" Dr. Vikramaditya Rathore, IndARC Marine Operations Team "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col">
                            <span className="font-body-sm text-body-sm text-on-surface font-medium">
                              Indian Arctic Programme
                            </span>
                            <span className="font-label-mono text-label-mono text-secondary">
                              Himadri Base (Ny-Ålesund)
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <span className="font-body-sm text-body-sm text-on-surface">
                            Arctic Physical Oceanography
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-center">
                          {" "}
                          <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                            May 2021
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top">
                          {" "}
                          <div className="flex flex-col gap-1.5 items-start">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                check_circle
                              </span>
                              {" Searchable text extracted "}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-label-mono font-medium">
                              {" "}
                              <span className="material-symbols-outlined text-[13px]">
                                military_tech
                              </span>
                              {" MoES Certified "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 align-top text-right">
                          {" "}
                          <div className="flex items-center justify-end gap-1">
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-primary inline-flex items-center justify-center transition-colors" title="View PDF" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                picture_as_pdf
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Cite" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                format_quote
                              </span>
                              {" "}
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-surface-container text-on-surface-variant inline-flex items-center justify-center transition-colors" title="Expand" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[18px]">
                                expand_more
                              </span>
                              {" "}
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-space-sm bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Showing 1–10 of 1,240 publications
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-mono text-label-mono font-bold">
                      Selected: 1 item
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-body-sm text-body-sm disabled:opacity-40 transition-colors" disabled="" type="button">
                      {" < Previous "}
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-mono text-label-mono font-bold shadow-sm" type="button">
                      1
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors" type="button">
                      2
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors" type="button">
                      3
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors" type="button">
                      4
                    </button>
                    <span className="px-1 text-on-surface-variant font-label-mono text-label-mono">
                      ...
                    </span>
                    <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-mono text-label-mono transition-colors" type="button">
                      124
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-body-sm text-body-sm transition-colors" type="button">
                      {" Next > "}
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase font-semibold">
                      Export Selected (1):
                    </span>
                    <button className="px-2.5 py-1 rounded bg-surface-container-lowest hover:bg-secondary-container text-on-surface font-label-mono text-label-mono transition-colors shadow-sm" type="button">
                      BibTeX
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container-lowest hover:bg-secondary-container text-on-surface font-label-mono text-label-mono transition-colors shadow-sm" type="button">
                      CSV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low/50 py-space-xl">
            <div className="max-w-[1280px] mx-auto px-margin flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
                <div>
                  <span className="font-label-mono text-label-mono text-secondary font-bold uppercase tracking-wider">
                    Curated Polar Archives
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Spotlight Collections & Series
                  </h2>
                </div>
                <a className="font-title-md text-title-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#" onClick={(e)=>e.preventDefault()}>
                  {" Explore all archival dossiers "}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                  {" "}
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-full h-44 rounded-lg overflow-hidden relative">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Monochrome archival photographs of the First Indian Antarctic Expedition in 1981, showing researchers in retro insulated orange suits deploying ice coring equipment next to a snow-covered research hut under soft Antarctic sun." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1vt0Jm73sc80poMvhbuHSYgZccU7LBoLyQv7CEc73d-xm4MDNKcCAqE5ebHagIBfa24ZMQJmlUKM7PJU_gePbPQd7bj_A1aG28ypEakKD7lJOXkrTV7_RWYBhZPYtWZc8JqjeY8_8rCh0ntZW8Et6VpZhuKCsJgI9g4Pos1rmCiyqkBzYgYnPyWs6UXU1c0pf4NsrMia9z0pQuQ-P4lyBOtIqvEAOXWq6InzE_eyLUkYsZ6fwN7cw" />
                      <span className="absolute top-3 left-3 bg-on-surface/80 backdrop-blur text-surface-container-lowest font-label-mono text-label-mono px-2 py-0.5 rounded">
                        HISTORICAL 1981–1995
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        Historical Expedition Reports
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" 142 scanned archival monographs with full OCR search, foundational biological surveys, and preliminary station blueprints from Dakshin Gangotri. "}
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-primary font-bold">
                      142 Monographs
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-full h-44 rounded-lg overflow-hidden relative">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Sweeping panoramic shot of the Himalayan Himansh high-altitude observatory in Spiti Valley, surrounded by rugged glaciated peaks, clear blue high-altitude skies, and scientific automated weather stations." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9bCGVgpLTzawFhiJGuCWt9MpAx6fjZYEdXSmWdV18kN9tg4-uXGQGdviumBKLk6gfngMInIEwIksoa9vpYl_Ex2sILhNnTgvi8qy9lwFcBvqoKUf9atmbQbAcIVeuSwC1wEJzG3l3gx6_HpizS5tXn7osSRCUMeQMMyylv8YS6wE1C0g9V3ZgYzS1lvkqq5vVWDBwu34JK_36KwNseTj5mEqaSIzPEzrNRIOUb4GpkzG9lS8oPIrQ" />
                      <span className="absolute top-3 left-3 bg-tertiary text-on-tertiary font-label-mono text-label-mono px-2 py-0.5 rounded">
                        HIMALAYAN CRYOSPHERE
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        Third Pole & Himalayan Cryosphere
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" 320 ablation studies, dGPS records, and run-off models tracking glacial retreat rates and permafrost dynamics across the Upper Indus and Chandra basins. "}
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-primary font-bold">
                      320 Studies
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-full h-44 rounded-lg overflow-hidden relative">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Ocean research vessel ORV Sagar Kanya navigating stormy cold waves in the Southern Ocean near the Polar Front, with scientific winches lowering a CTD rosette into deep Antarctic waters under dramatic overcast skies." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEMBsbDmnoSzanT9Qc7rpLXMqCGR4hemh8sJ66hwttFZBV71AEInMBdPbhQWdxaShHD_TAsFNVpwK0klZ65enUEU0vYnYQ79ZxpgahphCXGcIyv42JuOUHqMNeSkPbjEWjUtL9_qHQwVIB6WKWTFj48lnWywhZruwzMOQHhcnqmo-YnG-cdtizUpizxg6nTEpMM5ZsSmhONCQ6DHj_hg02ySh4CDhcU3Asu75SSQwwlgs1ozbV5suB" />
                      <span className="absolute top-3 left-3 bg-secondary text-on-secondary font-label-mono text-label-mono px-2 py-0.5 rounded">
                        SOUTHERN OCEAN
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        Southern Ocean Cruise Dispatches
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {" 215 physical oceanography and hydrographic profiles capturing Antarctic Bottom Water formation and carbon sequestration dynamics. "}
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <span className="font-label-mono text-label-mono text-primary font-bold">
                      215 Hydro-Profiles
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-space-md">
            <div className="max-w-[1280px] mx-auto px-margin">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">
                      policy
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" "}
                    <strong className="text-on-surface font-semibold">
                      National Polar Science Publications Archive Notice:
                    </strong>
                    {" All manuscripts and reports are curated under the Ministry of Earth Sciences Open Access Mandate. Text extraction powered by POLARIS AI OCR Engine. "}
                  </p>
                </div>
                <div className="flex items-center gap-space-xs shrink-0 font-label-mono text-label-mono text-primary">
                  <span className="material-symbols-outlined text-[16px]">
                    verified_user
                  </span>
                  <span>
                    NCPOR REPOSITORY PROTOCOL 2025
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
        {" "}
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
