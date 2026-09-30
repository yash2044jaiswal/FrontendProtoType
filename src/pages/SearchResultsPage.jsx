import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_search_results_search/code.html
const BODY_CLASS = "bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-fixed";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}@keyframes telemetryPulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.4;transform:scale(0.85);}}.telemetry-dot{animation:telemetryPulse 2s cubic-bezier(0.4,0,0.6,1) infinite;}";
const PAGE_SCRIPT = "function togglePrototypeState() {\n    const activeState = document.getElementById('results-active-state');\n    const emptyState = document.getElementById('results-empty-state');\n    const toggleLabel = document.getElementById('btn-toggle-label');\n    const searchInput = document.getElementById('main-polar-search');\n\n    if (emptyState.classList.contains('hidden')) {\n      activeState.classList.add('hidden');\n      emptyState.classList.remove('hidden');\n      toggleLabel.textContent = 'View Active Results';\n      searchInput.value = 'Katabatic aurora neutrino flux 1972';\n    } else {\n      emptyState.classList.add('hidden');\n      activeState.classList.remove('hidden');\n      toggleLabel.textContent = 'View Zero-State';\n      searchInput.value = 'Katabatic winds Schirmacher Oasis Maitri Station';\n    }\n  }\n\n  function restoreQuery(queryText) {\n    const searchInput = document.getElementById('main-polar-search');\n    searchInput.value = queryText;\n    togglePrototypeState();\n  }";

export default function SearchResultsPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-lg shrink-0">
            <a className="flex items-center gap-space-md group" data-path="home" href="#" onClick={(e)=>e.preventDefault()}>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">
                  explore
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary uppercase leading-tight mt-1">
                  NCPOR · MoES · Govt. of India
                </span>
              </div>
            </a>
            <div className="hidden xl:flex items-center gap-space-sm bg-surface-container px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary-container telemetry-dot" />
              <span className="font-label-mono text-label-mono text-secondary font-semibold">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden 2xl:flex items-center gap-1 font-label-md text-label-md" data-active-classes="bg-primary-container text-on-primary-container rounded-lg">
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="community" to="/community">
              Community
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="search" to="/search">
              Search
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="about-accessibility" to="/about/accessibility">
              About & Accessibility
            </Link>
          </nav>
          <div className="flex items-center gap-space-md shrink-0">
            <Link className="hidden md:flex items-center justify-between w-44 px-3 py-2 bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" data-path="search" to="/search">
              <span className="flex items-center gap-2 font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-[18px]">
                  search
                </span>
                <span>
                  Search polar records...
                </span>
              </span>
              <kbd className="font-label-mono text-label-mono bg-surface px-1.5 py-0.5 rounded shadow-sm text-secondary">
                ⌘K
              </kbd>
            </Link>
            <div className="flex items-center bg-surface-container rounded-lg p-0.5">
              <button className="px-2.5 py-1 rounded font-label-mono text-label-mono bg-surface-container-lowest text-primary font-bold shadow-sm" type="button">
                EN
              </button>
              <button className="px-2.5 py-1 rounded font-label-mono text-label-mono text-secondary hover:text-on-surface transition-colors" type="button">
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
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full max-w-[1440px] mx-auto px-margin pt-6 pb-12 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                  {" "}
                  <span className="material-symbols-outlined text-[15px]">
                    home
                  </span>
                  {" "}
                  <span>
                    POLARIS
                  </span>
                  {" "}
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-secondary hover:text-primary cursor-pointer">
                  Scientific Repositories
                </span>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-primary font-semibold">
                  Search Results
                </span>
              </nav>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high font-label-mono text-label-mono text-primary font-medium">
                  {" "}
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary telemetry-dot" />
                  {" "}
                  <span>
                    Federated MoES Catalog v4.2
                  </span>
                  {" "}
                </span>
              </div>
            </div>
            <div className="w-full bg-surface-container-lowest p-4 md:p-5 rounded-2xl shadow-sm space-y-3">
              <div className="flex flex-col lg:flex-row items-stretch gap-3">
                <div className="relative flex-1 flex items-center bg-surface-container-low rounded-xl px-4 py-2.5 transition-all focus-within:bg-surface-container-lowest focus-within:shadow-md">
                  <span className="material-symbols-outlined text-primary text-[24px] mr-3 shrink-0">
                    travel_explore
                  </span>
                  <input aria-label="Search scientific repository" className="w-full bg-transparent border-none text-on-surface font-title-md text-title-md outline-none placeholder:text-secondary focus:ring-0" id="main-polar-search" placeholder="Search polar logs, NetCDF datasets, ice core samples..." type="text" defaultValue="Katabatic winds Schirmacher Oasis Maitri Station" />
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <button className="w-7 h-7 rounded-full flex items-center justify-center text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" title="Clear search text" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-polar-search').value = '';")}>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                      {" "}
                    </button>
                    <div className="h-4 w-px bg-outline-variant" />
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-primary-container hover:bg-surface-container transition-colors relative group" title="Voice search active" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        mic
                      </span>
                      {" "}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface font-label-mono text-label-mono px-2 py-0.5 rounded shadow whitespace-nowrap">
                        {" Voice search active "}
                      </span>
                      {" "}
                    </button>
                    <kbd className="hidden sm:inline-flex items-center font-label-mono text-label-mono px-2 py-1 rounded bg-surface-container text-secondary">
                      {" ⌘K "}
                    </kbd>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="w-full lg:w-auto px-7 py-3 bg-primary text-on-primary hover:bg-primary-container rounded-xl font-title-md text-title-md font-medium flex items-center justify-center gap-2 shadow-sm transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      search
                    </span>
                    {" "}
                    <span>
                      Search
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 px-1">
                <div className="flex items-center gap-2 text-secondary font-label-md text-label-md">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    verified
                  </span>
                  <span>
                    {"Showing "}
                    <strong className="text-on-surface font-semibold">
                      148 results
                    </strong>
                    {" for "}
                    <em>
                      “Katabatic winds Schirmacher Oasis Maitri Station”
                    </em>
                    {" across NCPOR scientific archives"}
                  </span>
                </div>
                <div className="flex items-center gap-3 font-label-mono text-label-mono text-secondary">
                  <span className="inline-flex items-center gap-1 text-tertiary">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      bolt
                    </span>
                    {" Indexed in 0.042s "}
                  </span>
                  <span>
                    •
                  </span>
                  <span className="hover:text-primary cursor-pointer transition-colors">
                    Query Syntax: Lucene Pro
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-surface-container-low p-2 rounded-xl">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none" role="tablist">
                <button aria-selected="true" className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 shrink-0 shadow-sm" role="tab">
                  {" "}
                  <span>
                    All
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-on-primary text-primary font-bold text-[10px]">
                    148
                  </span>
                  {" "}
                </button>
                <button aria-selected="false" className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-2 shrink-0 transition-colors" role="tab">
                  {" "}
                  <span>
                    Reports
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-medium text-[10px]">
                    42
                  </span>
                  {" "}
                </button>
                <button aria-selected="false" className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-2 shrink-0 transition-colors" role="tab">
                  {" "}
                  <span>
                    Datasets
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-medium text-[10px]">
                    31
                  </span>
                  {" "}
                </button>
                <button aria-selected="false" className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-2 shrink-0 transition-colors" role="tab">
                  {" "}
                  <span>
                    Photos
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-medium text-[10px]">
                    28
                  </span>
                  {" "}
                </button>
                <button aria-selected="false" className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-2 shrink-0 transition-colors" role="tab">
                  {" "}
                  <span>
                    Videos
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-medium text-[10px]">
                    14
                  </span>
                  {" "}
                </button>
                <button aria-selected="false" className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-2 shrink-0 transition-colors" role="tab">
                  {" "}
                  <span>
                    Stories
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-medium text-[10px]">
                    19
                  </span>
                  {" "}
                </button>
                <button aria-selected="false" className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-2 shrink-0 transition-colors" role="tab">
                  {" "}
                  <span>
                    Expeditions
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-medium text-[10px]">
                    8
                  </span>
                  {" "}
                </button>
                <button aria-selected="false" className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-2 shrink-0 transition-colors" role="tab">
                  {" "}
                  <span>
                    Profiles
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container-highest text-secondary font-medium text-[10px]">
                    6
                  </span>
                  {" "}
                </button>
              </div>
              <div className="flex items-center gap-2 shrink-0 justify-end">
                <button className="px-2.5 py-1.5 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono font-semibold flex items-center gap-1.5 hover:bg-primary-fixed-dim transition-colors" id="btn-toggle-empty" title="Toggle Empty State View prototype preview" onClick={(e)=>window.__pol(e,"togglePrototypeState()")}>
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    swap_horiz
                  </span>
                  {" "}
                  <span id="btn-toggle-label">
                    View Zero-State
                  </span>
                  {" "}
                </button>
                <div className="h-4 w-px bg-outline-variant hidden sm:block" />
                <div className="relative inline-block">
                  <select className="appearance-none bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md py-1.5 pl-3 pr-8 rounded-lg cursor-pointer outline-none">
                    <option>
                      Sort by: Most Relevant
                    </option>
                    <option>
                      Sort by: Date (Newest)
                    </option>
                    <option>
                      Sort by: Citations / Usage
                    </option>
                    <option>
                      Sort by: Telemetry Recency
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2 top-2 text-secondary pointer-events-none text-[16px]">
                    expand_more
                  </span>
                </div>
                <div className="flex items-center bg-surface-container rounded-lg p-0.5">
                  <button className="p-1.5 rounded bg-surface-container-lowest text-primary shadow-sm" title="List View">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      view_list
                    </span>
                    {" "}
                  </button>
                  <button className="p-1.5 rounded text-secondary hover:text-on-surface transition-colors" title="Grid View">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      grid_view
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start" id="results-active-state">
              <aside className="lg:col-span-3 flex flex-col gap-5">
                {" "}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        tune
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Filter Results
                      </h3>
                    </div>
                    <button className="font-label-mono text-label-mono text-primary hover:underline font-semibold" type="button">
                      Reset All
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                        Region / Geography
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        expand_less
                      </span>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Schirmacher Oasis
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          84
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Larsemann Hills
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          38
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Ny-Ålesund, Arctic
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          14
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Himalaya / Spiti
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          12
                        </span>
                        {" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                        Research Station
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        expand_less
                      </span>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Maitri Station
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-primary font-bold bg-secondary-container px-2 py-0.5 rounded-full">
                          92
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Bharati Station
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          31
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Himadri Base
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          14
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Himansh Obs.
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          11
                        </span>
                        {" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                        Temporal Window
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        calendar_today
                      </span>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-body-sm text-body-sm cursor-pointer text-on-surface">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 text-primary accent-primary" name="season" type="radio" />
                        {" "}
                        <span>
                          All Expeditions (1981–2024)
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center gap-2 font-body-sm text-body-sm cursor-pointer text-on-surface">
                        {" "}
                        <input className="w-4 h-4 text-primary accent-primary" name="season" type="radio" />
                        {" "}
                        <span>
                          Last 5 Years (2019–2024)
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center gap-2 font-body-sm text-body-sm cursor-pointer text-on-surface">
                        {" "}
                        <input className="w-4 h-4 text-primary accent-primary" name="season" type="radio" />
                        {" "}
                        <span className="flex items-center gap-1.5">
                          {" "}
                          <span>
                            43rd IAE (Current Season)
                          </span>
                          {" "}
                          <span className="w-2 h-2 rounded-full bg-tertiary-container telemetry-dot" />
                          {" "}
                        </span>
                        {" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                        Access Level
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        lock_open
                      </span>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Open Access (CC BY 4.0)
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-tertiary font-bold bg-surface-container px-2 py-0.5 rounded-full">
                          132
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center justify-between font-body-sm text-body-sm cursor-pointer group">
                        {" "}
                        <span className="flex items-center gap-2 text-on-surface">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                          {" "}
                          <span className="group-hover:text-primary">
                            Restricted Telemetry
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          16
                        </span>
                        {" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-secondary">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                        Format
                      </span>
                      <span className="material-symbols-outlined text-[16px]">
                        description
                      </span>
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-body-sm text-body-sm cursor-pointer text-on-surface">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                        {" "}
                        <span>
                          PDF Reports
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center gap-2 font-body-sm text-body-sm cursor-pointer text-on-surface">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                        {" "}
                        <span>
                          NetCDF / CSV Data
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center gap-2 font-body-sm text-body-sm cursor-pointer text-on-surface">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                        {" "}
                        <span>
                          High-Res Imagery
                        </span>
                        {" "}
                      </label>
                      <label className="flex items-center gap-2 font-body-sm text-body-sm cursor-pointer text-on-surface">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary bg-surface-container" type="checkbox" />
                        {" "}
                        <span>
                          4K Video / Audio B-Roll
                        </span>
                        {" "}
                      </label>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      sensors
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Maitri Met Mast #3
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Active Streaming • 10 Hz
                      </span>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container telemetry-dot" />
                </div>
                {" "}
              </aside>
              <section aria-label="Search Results List" className="lg:col-span-6 flex flex-col gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-secondary-container/30 shadow-md relative overflow-hidden flex flex-col gap-4">
                  <svg className="absolute -right-8 -top-8 w-44 h-44 text-primary/5 pointer-events-none" fill="currentColor" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" fill="none" r="90" stroke="currentColor" strokeDasharray="6,6" strokeWidth="2" />
                    <circle cx="100" cy="100" fill="none" r="60" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M100 10 L100 190 M10 100 L190 100" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">
                          auto_awesome
                        </span>
                      </div>
                      <h4 className="font-title-md text-title-md text-primary font-bold">
                        Ask POLARIS Instant Synthesis
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-mono text-label-mono text-primary font-semibold">
                        {" MoES AI Grounded "}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-mono text-label-mono font-bold">
                        {" Confidence: 98.2% "}
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {" "}
                    <strong>
                      Katabatic winds at Schirmacher Oasis (Maitri Station)
                    </strong>
                    {" are severe, gravity-driven downslope winds descending from the continental Antarctic ice sheet, frequently exceeding 120 km/h (gusts up to 160 km/h) with sharp temperature drops during winter blizzard regimes. The unique topography of the Schirmacher range acts as an acceleration ramp toward the Nivlisen ice shelf. "}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="font-label-mono text-label-mono text-secondary">
                      Verified Sources:
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono text-label-mono hover:bg-secondary-container cursor-pointer transition-colors">
                      {" [1] NCPOR Technical Report TR-2024-02 "}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-mono text-label-mono hover:bg-secondary-container cursor-pointer transition-colors">
                      {" [2] Maitri AWS Sonic Anemometer Array "}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
                    <div className="flex items-center gap-2">
                      <a className="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm" href="#" onClick={(e)=>e.preventDefault()}>
                        {" "}
                        <span>
                          Open in Full AI Chat (/ask)
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </a>
                      <button className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          volume_up
                        </span>
                        {" "}
                        <span>
                          Listen (0:48)
                        </span>
                        {" "}
                      </button>
                    </div>
                    <button className="px-3 py-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-container font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        content_copy
                      </span>
                      {" "}
                      <span>
                        Copy Answer
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group">
                  {" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary flex items-center justify-center">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          description
                        </span>
                        {" "}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-mono text-label-mono font-bold tracking-wider">
                        {" REPORT "}
                      </span>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary">
                      NCPOR-TR-2024-02 • Published: Feb 2024
                    </span>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug">
                    {" "}
                    <Link to="/datasets/katabatic-wind-dynamics">
                      Micro-Meteorological Baseline & Katabatic Wind Dynamics at Schirmacher Oasis
                    </Link>
                    {" "}
                  </h3>
                  {" "}
                  <div className="font-label-mono text-label-mono text-secondary">
                    {" DOI: 10.5194/ncpor-tr-2024-02 • Authors: Dr. Ananya Sen, Dr. P. K. Joshi (Atmospheric Sciences) "}
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" Comprehensive sonic anemometer velocity records and boundary-layer temperature inversion gradients observed during the 42nd and 43rd Indian Antarctic Expeditions. Details nocturnal katabatic surges, sensible heat fluxes, and wind speeds exceeding 35 m/s. "}
                  </p>
                  {" "}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-mono text-label-mono">
                      Schirmacher Oasis
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-mono text-label-mono">
                      Katabatic Wind
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-label-mono text-label-mono">
                      Maitri AWS
                    </span>
                    <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono font-semibold">
                      Peer-Reviewed
                    </span>
                  </div>
                  {" "}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                        <span>
                          Download PDF (4.2 MB)
                        </span>
                        {" "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          menu_book
                        </span>
                        {" "}
                        <span>
                          View Report Reader
                        </span>
                        {" "}
                      </button>
                    </div>
                    <button className="font-label-mono text-label-mono text-primary hover:underline flex items-center gap-1" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        format_quote
                      </span>
                      {" "}
                      <span>
                        Cite (APA/BibTeX)
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group">
                  {" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-secondary-container text-secondary flex items-center justify-center">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          database
                        </span>
                        {" "}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono font-bold tracking-wider">
                        {" DATASET "}
                      </span>
                    </div>
                    <span className="font-label-mono text-label-mono text-tertiary font-semibold flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        lock_open
                      </span>
                      {" Open Telemetry • 10.2 GB "}
                    </span>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug">
                    {" "}
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      Maitri High-Rate Sonic Anemometer 10Hz Wind Velocity Time-Series (2020–2024)
                    </a>
                    {" "}
                  </h3>
                  {" "}
                  <div className="font-label-mono text-label-mono text-secondary">
                    {" NPDC-MET-2024-08 • Formats: NetCDF4, GeoTIFF, CSV • Station: Maitri (70°45'S, 11°44'E) Mast-03 "}
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" In-situ boundary-layer turbulence measurements, 3-component wind velocity vectors (u, v, w), sonic temperature, and kinematic heat flux profiles sampled at 10Hz continuously through winter blizzard cycles. "}
                  </p>
                  {" "}
                  {" "}
                  <div className="bg-surface-container-low p-3 rounded-xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-label-mono text-label-mono text-secondary">
                        Gust Profile (Oct 2024):
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-bold">
                        Peak 144.2 km/h
                      </span>
                    </div>
                    <div className="h-6 w-36">
                      <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 100 24">
                        <path d="M0 18 Q 15 12, 25 15 T 45 4 T 60 17 T 75 7 T 90 2 T 100 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  {" "}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          query_stats
                        </span>
                        {" "}
                        <span>
                          Explore in Data Viewer
                        </span>
                        {" "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          file_download
                        </span>
                        {" "}
                        <span>
                          Download NetCDF
                        </span>
                        {" "}
                      </button>
                    </div>
                    <button className="font-label-mono text-label-mono text-primary hover:underline flex items-center gap-1" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        key
                      </span>
                      {" "}
                      <span>
                        API Access Key
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group">
                  {" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          auto_stories
                        </span>
                        {" "}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono font-bold tracking-wider">
                        {" FIELD DISPATCH "}
                      </span>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      {" 7 min read • Overwintering Team "}
                    </span>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug">
                    {" "}
                    <Link to="/stories/overwintering-in-the-schirmacher-oasis">
                      Night of the 90-Knot Blizzard: Overwintering Engineers on Maitri's Roof
                    </Link>
                    {" "}
                  </h3>
                  {" "}
                  <div className="font-label-mono text-label-mono text-secondary">
                    {" Field Dispatch #04 • 43rd IAE • Written by Lead Meteorologist • Audio Narration Available "}
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" When the barometer plunged 18 hPa in under three hours, the katabatic gale struck with zero visibility. How our crew secured the vital satellite dish and anemometer cables in -38°C wind chill on the icy chassis of Maitri station. "}
                  </p>
                  {" "}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          article
                        </span>
                        {" "}
                        <span>
                          Read Field Story
                        </span>
                        {" "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          headphones
                        </span>
                        {" "}
                        <span>
                          Listen Narration
                        </span>
                        {" "}
                      </button>
                    </div>
                    <span className="font-label-mono text-label-mono text-tertiary flex items-center gap-1 font-semibold">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        bookmark_border
                      </span>
                      {" Polar Memoirs "}
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group">
                  {" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          explore
                        </span>
                        {" "}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono font-bold tracking-wider">
                        {" EXPEDITION "}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-mono text-label-mono font-semibold flex items-center gap-1">
                      {" "}
                      <span className="w-2 h-2 rounded-full bg-tertiary telemetry-dot" />
                      {" Active Overwinter "}
                    </span>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug">
                    {" "}
                    <Link to="/stories/overwintering-in-the-schirmacher-oasis">
                      43rd Indian Antarctic Expedition (43rd IAE) — Overwintering & Summer Phase
                    </Link>
                    {" "}
                  </h3>
                  {" "}
                  <div className="font-label-mono text-label-mono text-secondary">
                    {" ID: SOE/IAE-43 • Leader: Dr. Ananya Sen (Station Commander, Maitri) • Location: Maitri & Bharati "}
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" Primary scientific thrust on cryospheric mass balance, katabatic boundary layer turbulence at Schirmacher Oasis, and subglacial lake hydrochemistry with deep radar sounding across Queen Maud Land. "}
                  </p>
                  {" "}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm" type="button">
                        {" "}
                        <span>
                          View Expedition Profile
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                        {" "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          public
                        </span>
                        {" "}
                        <span>
                          Show on 3D Globe
                        </span>
                        {" "}
                      </button>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary">
                      42 Scientists & Logisticians
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-4 group">
                  {" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          photo_camera
                        </span>
                        {" "}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-mono text-label-mono font-bold tracking-wider">
                        {" PHOTO RECORD "}
                      </span>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary">
                      NCPOR Archive • 8192 × 5464 RAW
                    </span>
                  </div>
                  {" "}
                  {" "}
                  <div className="w-full h-52 rounded-xl overflow-hidden relative shadow-inner">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A vivid polar photograph capturing intense katabatic wind snow drift around Maitri Station modules at dusk in Antarctica, swirling white snow particles scoured across the rocky terrain of Schirmacher Oasis under an icy indigo sky with cold industrial research lighting reflecting in deep teal and cyan." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh-a2Gw73AKUqFiZH5KTT3SUa0vmUgIHJxQaHwjcf-7ZqVAeiNsexmOMvZQ1YSHD3Ph0KkukxYXv_5k5RjPgQHTEIc5DjqSdKFCgHcahO3QpWod426ngxP1frjn1R_Ir2ALwbGSzcqhuYeE1sHzyZlQkldJV_Z-GJxOhtIPogHLPwmuDEagrCZZwvRq0Y1whMr-0jiFZQdVf2d_soJrxY1mxMiTuNwpcBTIkYw2ZMzAFxtYGBLsa4U" />
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-inverse-surface/80 backdrop-blur-sm text-inverse-on-surface font-label-mono text-label-mono">
                      {" Exposure: ISO 800 • f/4.0 • 1/1250s "}
                    </div>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug">
                    {" "}
                    <Link to="/datasets/katabatic-wind-dynamics">
                      Katabatic Snow Drift and Ground Blizzard Engulfing Maitri Living Module #2
                    </Link>
                    {" "}
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" Illuminated by station searchlights during midwinter twilight; illustrating ground-hugging sastrugi formation and high-velocity wind scouring across the ice-free rock beds of Schirmacher Oasis. "}
                  </p>
                  {" "}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          visibility
                        </span>
                        {" "}
                        <span>
                          High-Res Preview
                        </span>
                        {" "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                        <span>
                          Download (18 MB JPEG)
                        </span>
                        {" "}
                      </button>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary">
                      License: CC BY-NC 4.0
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-4 group">
                  {" "}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          badge
                        </span>
                        {" "}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-mono text-label-mono font-bold tracking-wider">
                        {" RESEARCHER "}
                      </span>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Atmospheric Sciences • NCPOR Goa
                    </span>
                  </div>
                  {" "}
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
                      <img className="w-full h-full object-cover" data-alt="Distinguished Indian female polar atmospheric physicist in protective high-altitude cold-weather gear, smiling against the white icy expanse of Antarctica with Maitri research station in the soft-focus background, cold daylight illuminating her face." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLnEu1diF5oG8o6mMwuakS2SkZgjSqHy2xsjeV9gXNKF5D6OKAf3FGhpOmqWt8ayGtCAMB8a9jpWIVGJF0nY31SJQmccRNX3HX45XW2n-YgaWxoIVLVZFG9uv22tVdAyrFXeLxmthh_QIPq51pRIQqakvCr6PoV_st8x44EDrSA10ueO6MsyhGva-OBynH4u7PB0PHA57VjUcvJs7u_5o04IfEewmNpy-0tHwG0GahVMYqBfJeTmd7" />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors leading-snug">
                        {" "}
                        <Link to="/people/ananya-sen">
                          Dr. Ananya Sen — Lead Atmospheric Physicist & Station Commander
                        </Link>
                        {" "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" Overwintering Veteran (39th, 41st, 43rd IAE) • 48 Publications • 1,280 Citations "}
                      </p>
                    </div>
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {" Specialization in Antarctic boundary-layer thermodynamics, katabatic wind shear profiling, and ozone hole dynamics. Appointed Station Commander for 43rd IAE at Maitri Station in Schirmacher Oasis. "}
                  </p>
                  {" "}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-colors shadow-sm" type="button">
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
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          mail
                        </span>
                        {" "}
                        <span>
                          Contact via Portal
                        </span>
                        {" "}
                      </button>
                    </div>
                    <button className="font-label-mono text-label-mono text-primary hover:underline flex items-center gap-1" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        psychology
                      </span>
                      {" "}
                      <span>
                        Ask Dr. Sen's AI Agent
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                </article>
                <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-body-sm text-body-sm text-secondary">
                    {" Showing "}
                    <strong className="text-on-surface font-semibold">
                      1 – 6
                    </strong>
                    {" of "}
                    <strong className="text-on-surface font-semibold">
                      148
                    </strong>
                    {" items "}
                  </span>
                  <div className="flex items-center gap-1">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md flex items-center gap-1 transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        chevron_left
                      </span>
                      {" "}
                      <span className="hidden sm:inline">
                        Previous
                      </span>
                      {" "}
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center shadow-sm">
                      1
                    </button>
                    <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
                      2
                    </button>
                    <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
                      3
                    </button>
                    <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
                      4
                    </button>
                    <span className="px-1 text-secondary font-label-mono text-label-mono">
                      ...
                    </span>
                    <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
                      25
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-md text-label-md flex items-center gap-1 transition-colors">
                      {" "}
                      <span className="hidden sm:inline">
                        Next
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        chevron_right
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                    <span>
                      Show:
                    </span>
                    <span className="px-2 py-1 rounded bg-secondary-container text-on-secondary-fixed font-bold">
                      6
                    </span>
                    <span className="hover:text-primary cursor-pointer">
                      12
                    </span>
                    <span className="hover:text-primary cursor-pointer">
                      24
                    </span>
                  </div>
                </div>
              </section>
              <aside className="lg:col-span-3 flex flex-col gap-5 sticky top-24">
                {" "}
                {" "}
                <div className="w-[360px] h-[360px] max-w-full rounded-2xl border-2 border-dashed border-[#1F7A8C]/50 bg-[#050B18] relative overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-md" id="polaris-globe-mini-search">
                  <div className="w-12 h-12 rounded-full bg-primary-container/20 text-[#83d2e6] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[28px] animate-pulse">
                      public
                    </span>
                  </div>
                  <span className="font-label-mono text-label-mono text-[#a9edff] tracking-wider uppercase font-semibold">
                    {" GLOBE SLOT - polaris-globe-mini-search "}
                  </span>
                  <p className="font-label-mono text-label-mono text-[#bec8cb] mt-2 max-w-[280px] leading-relaxed">
                    {" Geospatial Search Projection (Interactive WebGL slot) • Coordinates: 70°45'57\" S, 11°44'09\" E • Schirmacher Oasis "}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary-fixed telemetry-dot" />
                    <span className="font-label-mono text-label-mono text-[#6afbc6]">
                      Active Polar Projection
                    </span>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-2">
                      {" "}
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        pin_drop
                      </span>
                      {" "}
                      <span>
                        Geospatial Result Distribution
                      </span>
                      {" "}
                    </h4>
                  </div>
                  <ul className="space-y-3 font-body-sm text-body-sm">
                    <li className="flex items-center justify-between">
                      {" "}
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
                        <span className="text-on-surface">
                          Maitri & Schirmacher Oasis
                        </span>
                      </div>
                      {" "}
                      <span className="font-label-mono text-label-mono text-primary font-bold bg-secondary-container px-2 py-0.5 rounded-full">
                        84 hits
                      </span>
                      {" "}
                    </li>
                    <li className="flex items-center justify-between">
                      {" "}
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-tertiary shrink-0" />
                        <span className="text-on-surface">
                          Bharati & Larsemann Hills
                        </span>
                      </div>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                        38 hits
                      </span>
                      {" "}
                    </li>
                    <li className="flex items-center justify-between">
                      {" "}
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-primary-container shrink-0" />
                        <span className="text-on-surface">
                          Southern Ocean Transects
                        </span>
                      </div>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                        16 hits
                      </span>
                      {" "}
                    </li>
                    <li className="flex items-center justify-between">
                      {" "}
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-secondary shrink-0" />
                        <span className="text-on-surface">
                          Arctic Himadri & Ny-Ålesund
                        </span>
                      </div>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                        10 hits
                      </span>
                      {" "}
                    </li>
                  </ul>
                  <Link className="w-full py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-2 transition-colors" to="/globe">
                    {" "}
                    <span>
                      Open Fullscreen Expedition Globe (/globe)
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                    {" "}
                  </Link>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-low p-5 rounded-2xl flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                      Actions & Alerts
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      notifications_active
                    </span>
                  </div>
                  <button className="w-full py-2.5 px-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      notifications
                    </span>
                    {" "}
                    <span>
                      Save Search Alert
                    </span>
                    {" "}
                  </button>
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="font-label-mono text-label-mono text-secondary">
                      Export Manifest:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-mono text-label-mono text-center transition-colors">
                        {" CSV "}
                      </button>
                      <button className="py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-mono text-label-mono text-center transition-colors">
                        {" BibTeX "}
                      </button>
                      <button className="py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-mono text-label-mono text-center transition-colors">
                        {" GeoJSON "}
                      </button>
                    </div>
                  </div>
                </div>
                {" "}
              </aside>
            </div>
            <div className="hidden flex-col items-center justify-center py-16 px-4 bg-surface-container-lowest rounded-3xl shadow-sm text-center" id="results-empty-state">
              <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center text-primary mb-6 shadow-sm">
                <span className="material-symbols-outlined text-[40px]">
                  radar
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-mono text-label-mono font-bold mb-3">
                {" Zero Results Found "}
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold max-w-2xl mb-3">
                {" No scientific records matching “Katabatic aurora neutrino flux 1972” "}
              </h2>
              <p className="font-body-md text-body-md text-secondary max-w-xl mb-8 leading-relaxed">
                {" We couldn't find peer-reviewed reports or datasets with these exact keywords. Check your spelling or try broader scientific terms calibrated to NCPOR archives. "}
              </p>
              <div className="bg-surface-container-low p-6 rounded-2xl max-w-xl w-full text-left space-y-4 mb-8">
                <h4 className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-2">
                  {" "}
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    lightbulb
                  </span>
                  {" "}
                  <span>
                    Helpful Suggestions
                  </span>
                  {" "}
                </h4>
                <ul className="space-y-2.5 font-body-sm text-body-sm text-secondary">
                  <li className="flex items-start gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    {" "}
                    <span>
                      {"Check for typos or alternative scientific nomenclature (e.g. try "}
                      <strong>
                        "solar wind"
                      </strong>
                      {" or "}
                      <strong>
                        "geomagnetic storm"
                      </strong>
                      {" instead of \"aurora neutrino\")."}
                    </span>
                    {" "}
                  </li>
                  <li className="flex items-start gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    {" "}
                    <span>
                      {"Broaden your geographic filter from "}
                      <strong>
                        "Schirmacher Oasis"
                      </strong>
                      {" to "}
                      <strong>
                        "East Antarctica (All Sectors)"
                      </strong>
                      .
                    </span>
                    {" "}
                  </li>
                  <li className="flex items-start gap-2">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    {" "}
                    <span>
                      {"Switch the temporal window filter to "}
                      <strong>
                        "All Expeditions (1981–2024)"
                      </strong>
                      {" to cover legacy missions."}
                    </span>
                    {" "}
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-3 mb-8">
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                  Recommended Popular Inquiries
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button className="px-4 py-2 rounded-full bg-surface-container hover:bg-secondary-container text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-1.5" type="button" onClick={(e)=>window.__pol(e,"restoreQuery('Maitri katabatic winds')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      search
                    </span>
                    {" "}
                    <span>
                      Maitri katabatic winds
                    </span>
                    {" "}
                  </button>
                  <button className="px-4 py-2 rounded-full bg-surface-container hover:bg-secondary-container text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-1.5" type="button" onClick={(e)=>window.__pol(e,"restoreQuery('IndARC Kongsfjorden moorings')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      search
                    </span>
                    {" "}
                    <span>
                      IndARC Kongsfjorden moorings
                    </span>
                    {" "}
                  </button>
                  <button className="px-4 py-2 rounded-full bg-surface-container hover:bg-secondary-container text-on-surface font-body-sm text-body-sm transition-colors flex items-center gap-1.5" type="button" onClick={(e)=>window.__pol(e,"restoreQuery('Prydz Bay phytoplankton blooms')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      search
                    </span>
                    {" "}
                    <span>
                      Prydz Bay phytoplankton blooms
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <button className="px-6 py-3 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-title-md text-title-md font-semibold flex items-center gap-2 shadow-sm transition-colors" type="button" onClick={(e)=>window.__pol(e,"togglePrototypeState()")}>
                {" "}
                <span className="material-symbols-outlined text-[20px]">
                  refresh
                </span>
                {" "}
                <span>
                  Reset Filters & Return to All Archives
                </span>
                {" "}
              </button>
            </div>
          </div>
        </div>
        {" "}
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(7,28,54,0.03)]">
        <div className="max-w-[1440px] mx-auto px-margin py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[28px]">
                  ac_unit
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                National Centre for Polar and Ocean Research (NCPOR), an autonomous R&D institution under the Ministry of Earth Sciences, Government of India. Custodian of Indian Antarctic, Arctic, and Southern Ocean missions.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 bg-surface-container rounded-full font-label-mono text-label-mono text-primary font-semibold">
                  ISO 9001:2015 Scientific Facility
                </span>
              </div>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Scientific Divisions
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Cryosphere & Climate Science
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/graph">
                    Polar Environment & Oceanography
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Marine Geophysics & Deep-Sea Coring
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/search">
                    Himalayan Glaciology Research
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Atmospheric & Space Physics
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Outreach & Access
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/repository">
                    National Polar Data Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Research Expedition Logistics Portal
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/people/ananya-sen">
                    Scientist Fellowship & PhD Grants
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    School & University Open Curricula
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/about/accessibility">
                    Accessibility Statement & Screen Reader
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Stations & Telemetry
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li className="flex items-center justify-between">
                  <span>
                    Bharati Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Maitri Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himadri (Ny-Ålesund, Arctic)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    IndARC (Kongsfjorden)
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary-fixed-dim font-semibold">
                    Periodic
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himansh (Spiti, Himalaya)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 bg-surface-container/60 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex flex-col gap-1">
              <p className="font-label-mono text-label-mono text-on-surface-variant">
                © 2025 National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India. All rights reserved.
              </p>
              <p className="font-label-mono text-label-mono text-secondary">
                Scientific Simulation Notice: Telemetry models and climate data streams are calibrated against verified NCPOR polar stations.
              </p>
            </div>
            <div className="flex items-center gap-space-lg shrink-0">
              <Link className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" to="/data">
                Terms of Data Use
              </Link>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                Privacy Policy
              </a>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                MoES Portal
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
