import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_polar_science_knowledge_repository_repository/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function RepositoryPage() {
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
            <Link aria-current="page" className="px-3 py-1.5 transition-colors bg-primary-container text-on-primary font-semibold rounded-lg shadow-sm border-b-2 border-primary-fixed" data-path="repository" to="/repository">
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
          <section className="w-full bg-surface-container-low px-gutter py-space-xl">
            <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                  <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
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
                  <span>
                    /
                  </span>
                  <span className="text-on-surface font-semibold">
                    Knowledge Repository
                  </span>
                  <span>
                    /
                  </span>
                  <span className="text-primary-container">
                    Cryosphere & Marine Data
                  </span>
                </nav>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-secondary">
                    {" FEDERATED NODE • NPDC v4.2 "}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono flex items-center gap-1">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    {" 44,180 RECORDS INDEXED "}
                  </span>
                </div>
              </div>
              <div className="max-w-3xl space-y-space-xs">
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {" Polar Science Knowledge Repository "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {" Search over 44,000 peer-reviewed polar science datasets, expedition reports, satellite observations, and multidisciplinary cryosphere literature curated by NCPOR. "}
                </p>
              </div>
              <div className="w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-md p-2 flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-1">
                  <span className="material-symbols-outlined text-primary text-[26px]">
                    search
                  </span>
                  <input className="flex-1 bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none py-2" id="main-repo-search" placeholder="Search cryospheric datasets, expeditions, cruise logs, authors, DOIs..." type="text" defaultValue="Himalayan glacier mass balance Spiti" />
                  <button className="w-10 h-10 rounded-xl bg-surface-container-low text-secondary hover:text-primary hover:bg-secondary-container transition-colors flex items-center justify-center relative group" title="Search by voice" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      mic
                    </span>
                    {" "}
                    <span className="absolute -top-8 px-2 py-0.5 rounded bg-inverse-surface text-inverse-on-surface font-label-mono text-[10px] hidden group-hover:block whitespace-nowrap shadow-xs">
                      {" Search by voice "}
                    </span>
                    {" "}
                  </button>
                  <button className="w-8 h-8 rounded-lg text-outline hover:text-on-surface transition-colors flex items-center justify-center" title="Clear query" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value=''")}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      close
                    </span>
                    {" "}
                  </button>
                  <button className="bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md px-5 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2" type="button">
                    {" "}
                    <span>
                      Search Archive
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 max-w-4xl">
                <div className="flex flex-wrap items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                  <span className="text-on-surface-variant font-semibold">
                    Try:
                  </span>
                  <button className="hover:text-primary underline decoration-dotted" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value=this.innerText")}>
                    "melting glaciers in Himalaya"
                  </button>
                  {", "}
                  <button className="hover:text-primary underline decoration-dotted" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value=this.innerText")}>
                    "Kongsfjorden salinity CTD"
                  </button>
                  {", "}
                  <button className="hover:text-primary underline decoration-dotted" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value=this.innerText")}>
                    "Prydz Bay sediment core"
                  </button>
                  {", or "}
                  <button className="hover:text-primary underline decoration-dotted" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value=this.innerText")}>
                    "10.1016/j.polar.2023.04"
                  </button>
                </div>
                <div className="flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2.5 text-body-sm font-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                    info
                  </span>
                  <p className="leading-relaxed">
                    {" Showing results for: "}
                    <span className="font-semibold text-on-surface underline decoration-primary-container">
                      "Himalayan glacier mass balance Spiti"
                    </span>
                    {". Did you mean: "}
                    <a className="text-primary-container font-semibold hover:underline italic" href="#" onClick={(e)=>e.preventDefault()}>
                      "Himalayan glacier mass balance Siachen"
                    </a>
                    {"? "}
                    <span className="text-secondary font-label-mono text-label-mono ml-2">
                      (1,420 records found)
                    </span>
                    {" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <aside className="lg:col-span-3 flex flex-col gap-space-md bg-surface-container-low rounded-2xl p-space-md shadow-xs">
                {" "}
                {" "}
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      filter_alt
                    </span>
                    <h2 className="font-title-md text-title-md text-on-surface">
                      Filter Archive
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-label-mono text-[10px]">
                      3 active
                    </span>
                    <button className="font-label-mono text-label-mono text-primary hover:underline" type="button">
                      Clear All
                    </button>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="flex flex-wrap gap-1.5 pb-space-xs">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-[11px] shadow-xs">
                    {" Himalaya "}
                    <button className="text-outline hover:text-error" type="button">
                      ✕
                    </button>
                    {" "}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-[11px] shadow-xs">
                    {" Datasets "}
                    <button className="text-outline hover:text-error" type="button">
                      ✕
                    </button>
                    {" "}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-[11px] shadow-xs">
                    {" Open Access "}
                    <button className="text-outline hover:text-error" type="button">
                      ✕
                    </button>
                    {" "}
                  </span>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-xl p-3 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-[14px] text-on-surface uppercase tracking-wider font-semibold">
                      Record Type
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      expand_less
                    </span>
                  </div>
                  <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Datasets
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        1,240
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Expedition Reports
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        680
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Peer-Reviewed Papers
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        4,120
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Satellite Telemetry
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        390
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Photographic Archives
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        8,410
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Cruise Logbooks
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        115
                      </span>
                      {" "}
                    </label>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-xl p-3 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-[14px] text-on-surface uppercase tracking-wider font-semibold">
                      Temporal Coverage
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      expand_less
                    </span>
                  </div>
                  <div className="space-y-2 pt-1">
                    <div className="relative h-2 bg-surface-container rounded-full">
                      <div className="absolute left-1/4 right-1/12 h-2 bg-primary-container rounded-full" />
                      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-surface-container-lowest shadow-md rounded-full border-2 border-primary-container cursor-grab" />
                      <div className="absolute right-1/12 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-surface-container-lowest shadow-md rounded-full border-2 border-primary-container cursor-grab" />
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="flex items-center bg-surface-container rounded-lg px-2 py-1 w-20">
                        <input className="w-full bg-transparent font-label-mono text-label-mono text-on-surface focus:outline-none" type="number" defaultValue="2006" />
                      </div>
                      <span className="font-label-mono text-label-mono text-secondary">
                        to
                      </span>
                      <div className="flex items-center bg-surface-container rounded-lg px-2 py-1 w-20">
                        <input className="w-full bg-transparent font-label-mono text-label-mono text-on-surface focus:outline-none" type="number" defaultValue="2024" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-1 font-label-mono text-[10px]">
                      <button className="px-2 py-1 rounded bg-surface-container text-secondary hover:text-on-surface" type="button">
                        Last 2 Yrs
                      </button>
                      <button className="px-2 py-1 rounded bg-surface-container text-secondary hover:text-on-surface" type="button">
                        Last 5 Yrs
                      </button>
                      <button className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-semibold" type="button">
                        1981+ All
                      </button>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-xl p-3 shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-[14px] text-on-surface uppercase tracking-wider font-semibold">
                      Geographic Domain
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      expand_less
                    </span>
                  </div>
                  <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Himalaya & Karakoram
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        840
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Antarctica & Ice Shelves
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        2,180
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Arctic & Svalbard
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        1,490
                      </span>
                      {" "}
                    </label>
                    <label className="flex items-center justify-between hover:text-on-surface cursor-pointer select-none">
                      {" "}
                      <span className="flex items-center gap-2">
                        {" "}
                        <input className="w-4 h-4 rounded text-primary-container focus:ring-0 accent-primary-container" type="checkbox" />
                        {" "}
                        <span>
                          Southern Ocean & Polar Front
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span className="font-label-mono text-label-mono text-secondary">
                        960
                      </span>
                      {" "}
                    </label>
                  </div>
                </div>
                {" "}
                {" "}
                <button className="w-full bg-surface-container-lowest rounded-xl p-3 shadow-xs flex items-center justify-between text-left hover:bg-surface-container transition-colors" type="button">
                  {" "}
                  <div>
                    <div className="font-title-md text-[14px] text-on-surface uppercase tracking-wider font-semibold">
                      Scientific Discipline
                    </div>
                    <div className="font-label-mono text-[10px] text-secondary">
                      Glaciology, Oceanography, Atmospheric (4)
                    </div>
                  </div>
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    expand_more
                  </span>
                  {" "}
                </button>
                {" "}
                {" "}
                <button className="w-full bg-surface-container-lowest rounded-xl p-3 shadow-xs flex items-center justify-between text-left hover:bg-surface-container transition-colors" type="button">
                  {" "}
                  <div>
                    <div className="font-title-md text-[14px] text-on-surface uppercase tracking-wider font-semibold">
                      Access Level & License
                    </div>
                    <div className="font-label-mono text-[10px] text-secondary">
                      Open Access CC-BY (3,800), Embargoed (140)
                    </div>
                  </div>
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    expand_more
                  </span>
                  {" "}
                </button>
                {" "}
                {" "}
                <button className="w-full bg-surface-container-lowest rounded-xl p-3 shadow-xs flex items-center justify-between text-left hover:bg-surface-container transition-colors" type="button">
                  {" "}
                  <div>
                    <div className="font-title-md text-[14px] text-on-surface uppercase tracking-wider font-semibold">
                      Repository Source
                    </div>
                    <div className="font-label-mono text-[10px] text-secondary">
                      NPDC, MoES Library, SCAR Records
                    </div>
                  </div>
                  {" "}
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    expand_more
                  </span>
                  {" "}
                </button>
                {" "}
                {" "}
                <div className="pt-space-xs flex items-center justify-between text-secondary">
                  <span className="font-label-mono text-[10px]">
                    API Query Token: NPDC_QRY_772A
                  </span>
                  <button className="hover:text-primary flex items-center gap-1 font-label-mono text-[10px]" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[14px]">
                      code
                    </span>
                    {" "}
                    <span>
                      cURL
                    </span>
                    {" "}
                  </button>
                </div>
                {" "}
              </aside>
              <main className="lg:col-span-6 flex flex-col gap-space-lg">
                {" "}
                {" "}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-xs">
                  <div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {" Showing "}
                      <span className="font-semibold text-on-surface">
                        1,240
                      </span>
                      {" results for "}
                      <span className="font-semibold text-primary-container">
                        "Himalayan glacier mass balance"
                      </span>
                      {" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-surface-container rounded-lg px-2.5 py-1.5 font-label-md text-label-md text-on-surface">
                      <span className="font-label-mono text-label-mono text-secondary">
                        Sort:
                      </span>
                      <select className="bg-transparent text-on-surface font-semibold focus:outline-none cursor-pointer" defaultValue="Most Relevant">
                        <option>
                          Most Relevant
                        </option>
                        <option>
                          Newest First
                        </option>
                        <option>
                          Citation Count
                        </option>
                        <option>
                          Geographic Proximity
                        </option>
                      </select>
                    </div>
                    <div className="flex items-center bg-surface-container rounded-lg p-0.5">
                      <button className="p-1 rounded bg-surface-container-lowest text-primary shadow-xs" title="Grid View" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          grid_view
                        </span>
                        {" "}
                      </button>
                      <button className="p-1 rounded text-secondary hover:text-on-surface transition-colors" title="List View" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          view_list
                        </span>
                        {" "}
                      </button>
                    </div>
                    <button className="p-1.5 rounded-lg bg-surface-container text-secondary hover:text-primary hover:bg-secondary-container transition-colors" title="Save Search" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                      {" "}
                    </button>
                    <button className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-surface-container text-secondary hover:text-primary transition-colors font-label-mono text-[11px]" title="Create Alert" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        notifications
                      </span>
                      {" "}
                      <span className="hidden sm:inline">
                        Alert
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="flex flex-col gap-space-md">
                  <article className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                          {" NPDC • National Polar Data Center "}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-mono text-label-mono">
                          {" CC-BY 4.0 Open Access "}
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary font-semibold uppercase tracking-wider">
                        {" DATASET • CSV / NetCDF "}
                      </span>
                    </div>
                    {" "}
                    <div className="space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                        {" High-Altitude Glacier Mass Balance Time-Series in Chandra Basin, Western Himalaya (2013–2024) "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" Dr. Lavkush Patel, NCPOR Glaciology Team • Published Oct 2024 • DOI: "}
                        <a className="underline hover:text-primary" href="#" onClick={(e)=>e.preventDefault()}>
                          10.5194/tc-2024-88
                        </a>
                        {" "}
                      </p>
                    </div>
                    {" "}
                    {" "}
                    <div className="bg-surface-container-low rounded-xl p-3 flex gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                        psychology
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Ground-penetrating radar and ablation stake measurements demonstrating an average -0.68 m w.e. a⁻¹ thinning across Chhota Shigri glacier, correlated with seasonal albedo decrease. "}
                      </p>
                    </div>
                    {" "}
                    {" "}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Chhota Shigri
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Mass Balance
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        GPR Radar
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Himansh Station
                      </span>
                    </div>
                    {" "}
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-1.5">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-md text-label-md" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            volume_up
                          </span>
                          {" "}
                          <span>
                            Listen (1:45)
                          </span>
                          {" "}
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface flex items-center justify-center" title="Save record" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary font-label-mono text-[11px]" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px] text-primary">
                            location_on
                          </span>
                          {" "}
                          <span>
                            Lat 32.28° N, Lon 77.51° E
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                        <span>
                          Download (42.8 MB NetCDF)
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <article className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-label-mono font-semibold">
                          {" MoES Digital Library "}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
                          {" Verified NCPOR Scientist "}
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary font-semibold uppercase tracking-wider">
                        {" CRUISE REPORT • PDF "}
                      </span>
                    </div>
                    {" "}
                    <div className="space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                        {" CTD Hydrographic Profiles & Carbon Sequestration Transect Across the Antarctic Polar Front (SOE-01) "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" Dr. M. Ravichandran et al., NCPOR • Jan 2006 • Cruise SK-221 "}
                      </p>
                    </div>
                    {" "}
                    <div className="bg-surface-container-low rounded-xl p-3 flex gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                        psychology
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" 42 deep hydrographic stations down to 3,420 m depth profiling Antarctic circumpolar currents and diatomaceous biological carbon pump dynamics. "}
                      </p>
                    </div>
                    {" "}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Prydz Bay
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Polar Front
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        pCO2 Flux
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        ORV Sagar Kanya
                      </span>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-1.5">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-md text-label-md" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            volume_up
                          </span>
                          {" "}
                          <span>
                            Listen (2:10)
                          </span>
                          {" "}
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface flex items-center justify-center" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary font-label-mono text-[11px]" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px] text-primary">
                            location_on
                          </span>
                          {" "}
                          <span>
                            Lat 69.4° S, Lon 76.2° E
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="bg-surface-container text-on-surface hover:bg-secondary-container font-label-md text-label-md px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          visibility
                        </span>
                        {" "}
                        <span>
                          Read Brief
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <article className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                          {" NPDC Open Science "}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-mono text-label-mono flex items-center gap-1">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                          {" Real-time Mooring "}
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary font-semibold uppercase tracking-wider">
                        {" TIME-SERIES • NetCDF "}
                      </span>
                    </div>
                    {" "}
                    <div className="space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                        {" IndARC Subsurface Mooring Multi-Sensor Oceanographic Observations in Kongsfjorden, Svalbard "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" Arctic Research Group, NCPOR & Himadri Station • Jun 2024 • Station Id: ARC-MOOR-05 "}
                      </p>
                    </div>
                    {" "}
                    <div className="bg-surface-container-low rounded-xl p-3 flex gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                        psychology
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Continuous ten-year mooring recordings of Atlantic water inflow, thermohaline oscillations, and fjord stratification during winter Arctic polar night. "}
                      </p>
                    </div>
                    {" "}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Svalbard
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Kongsfjorden
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        IndARC
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Atlantic Water
                      </span>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-1.5">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-md text-label-md" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            volume_up
                          </span>
                          {" "}
                          <span>
                            Listen (1:30)
                          </span>
                          {" "}
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface flex items-center justify-center" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary font-label-mono text-[11px]" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px] text-primary">
                            location_on
                          </span>
                          {" "}
                          <span>
                            Lat 78.9° N, Lon 11.9° E
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          insights
                        </span>
                        {" "}
                        <span>
                          Explore Data
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <article className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                          {" NPDC GeoData "}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container text-on-tertiary font-label-mono text-label-mono">
                          {" Open Access CC-BY "}
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary font-semibold uppercase tracking-wider">
                        {" SATELLITE GIS • GeoTIFF "}
                      </span>
                    </div>
                    {" "}
                    <div className="space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                        {" Surface Velocity and Crevasse Dynamics of Amery Ice Shelf Derived from Sentinel-1 SAR Interferometry "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" Earth Observation Wing, NCPOR • Dec 2023 • Spatial Resolution: 10m "}
                      </p>
                    </div>
                    {" "}
                    <div className="bg-surface-container-low rounded-xl p-3 flex gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                        psychology
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Delineation of rifting patterns and grounding-line migration rates along East Antarctic coastal ice margin using dual-polarization interferometry. "}
                      </p>
                    </div>
                    {" "}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Amery Ice Shelf
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        SAR
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Grounding Line
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        East Antarctica
                      </span>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-1.5">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-md text-label-md" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            volume_up
                          </span>
                          {" "}
                          <span>
                            Listen (1:50)
                          </span>
                          {" "}
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface flex items-center justify-center" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary font-label-mono text-[11px]" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px] text-primary">
                            location_on
                          </span>
                          {" "}
                          <span>
                            Lat 71.0° S, Lon 70.0° E
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                        <span>
                          Download GeoTIFF
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <article className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-label-mono font-semibold">
                          {" MoES Digital Library "}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
                          {" Open Access "}
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary font-semibold uppercase tracking-wider">
                        {" METEOROLOGICAL • CSV "}
                      </span>
                    </div>
                    {" "}
                    <div className="space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                        {" Four-Decade Surface Climatology and Katabatic Wind Regimes at Maitri Station, Schirmacher Oasis "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" Antarctic Meteorology Division • Mar 2024 • 1989–2024 Continuous Dataset "}
                      </p>
                    </div>
                    {" "}
                    <div className="bg-surface-container-low rounded-xl p-3 flex gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                        psychology
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Comprehensive meteorological records detailing monthly temperature anomalies, blizzards (>100 km/h), and atmospheric pressure shifts over 35 consecutive years. "}
                      </p>
                    </div>
                    {" "}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Maitri Station
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Katabatic Winds
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Schirmacher Oasis
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Surface Climate
                      </span>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-1.5">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-md text-label-md" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            volume_up
                          </span>
                          {" "}
                          <span>
                            Listen (2:05)
                          </span>
                          {" "}
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface flex items-center justify-center" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary font-label-mono text-[11px]" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px] text-primary">
                            location_on
                          </span>
                          {" "}
                          <span>
                            Lat 70.77° S, Lon 11.73° E
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="bg-surface-container text-on-surface hover:bg-secondary-container font-label-md text-label-md px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          table_chart
                        </span>
                        {" "}
                        <span>
                          Access Table
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <article className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3">
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                          {" NPDC Science Archive "}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-mono text-label-mono">
                          {" Peer-Reviewed "}
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-secondary font-semibold uppercase tracking-wider">
                        {" EXPEDITION LOG • PDF "}
                      </span>
                    </div>
                    {" "}
                    <div className="space-y-1">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                        {" Metagenomic Profiling of Psychrophilic Microorganisms in Cryoconite Holes of Himalayan Debris-Covered Glaciers "}
                      </h3>
                      <p className="font-label-mono text-label-mono text-secondary">
                        {" High-Altitude Cryobiology Lab, NCPOR • Sep 2023 • Himalayan Science Journal "}
                      </p>
                    </div>
                    {" "}
                    <div className="bg-surface-container-low rounded-xl p-3 flex gap-2.5">
                      <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0">
                        psychology
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {" Identification of novel cold-tolerant bacterial isolates and nitrogen-fixing cyanobacterial consortia flourishing under extreme ultraviolet stress at 4,800 m. "}
                      </p>
                    </div>
                    {" "}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Cryobiology
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Metagenomics
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Spiti Valley
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-surface-container text-secondary font-label-mono text-[11px]">
                        Psychrophiles
                      </span>
                    </div>
                    {" "}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <div className="flex items-center gap-1.5">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-md text-label-md" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            volume_up
                          </span>
                          {" "}
                          <span>
                            Listen (1:40)
                          </span>
                          {" "}
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface flex items-center justify-center" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container-low text-secondary hover:text-primary font-label-mono text-[11px]" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[15px] text-primary">
                            location_on
                          </span>
                          {" "}
                          <span>
                            Lat 32.14° N, Lon 77.85° E
                          </span>
                          {" "}
                        </button>
                      </div>
                      <button className="bg-surface-container text-on-surface hover:bg-secondary-container font-label-md text-label-md px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          description
                        </span>
                        {" "}
                        <span>
                          View Report
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </article>
                  <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs animate-pulse relative overflow-hidden">
                    <div className="absolute top-2 right-3 font-label-mono text-[10px] text-secondary bg-surface-container px-2 py-0.5 rounded">
                      {" Loading Preview: Querying NPDC Federated Node... "}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-36 bg-surface-container rounded-full" />
                        <div className="h-5 w-24 bg-surface-container rounded-full" />
                      </div>
                      <div className="h-6 w-3/4 bg-surface-container rounded-lg" />
                      <div className="h-4 w-1/2 bg-surface-container rounded" />
                      <div className="h-14 w-full bg-surface-container-low rounded-xl" />
                      <div className="flex gap-2">
                        <div className="h-5 w-16 bg-surface-container rounded" />
                        <div className="h-5 w-20 bg-surface-container rounded" />
                        <div className="h-5 w-14 bg-surface-container rounded" />
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <div className="h-8 w-28 bg-surface-container rounded-lg" />
                        <div className="h-8 w-36 bg-surface-container rounded-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low rounded-2xl p-space-lg shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-space-md">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container text-primary flex items-center justify-center shrink-0 shadow-xs">
                      <span className="material-symbols-outlined text-[32px]">
                        explore_off
                      </span>
                    </div>
                    <div className="flex-1 text-center sm:text-left space-y-2">
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[10px] text-secondary uppercase font-semibold">
                        Discovery Notice
                      </span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        No exact matches found for "antarctic tropical coral reef"
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {" Polar and cryospheric research archives catalog polar ice, cold seep benthos, and glacial moraines. Check spelling, loosen temporal filters, or explore adjacent topics like "}
                        <span className="text-primary font-semibold">
                          "Southern Ocean benthos"
                        </span>
                        {" or "}
                        <span className="text-primary font-semibold">
                          "cold-water sponges"
                        </span>
                        {". "}
                      </p>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                        <button className="bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md px-3 py-1.5 rounded-lg transition-colors" type="button">
                          {" Clear All Active Filters "}
                        </button>
                        <button className="bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            chat
                          </span>
                          {" "}
                          <span>
                            Ask POLARIS AI Research Assistant
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-2xl shadow-xs">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Showing "}
                    <span className="font-semibold text-on-surface">
                      1–6
                    </span>
                    {" of 1,240 results "}
                  </span>
                  <div className="flex items-center gap-1">
                    <button className="w-9 h-9 rounded-lg bg-surface-container-low text-outline hover:text-on-surface flex items-center justify-center disabled:opacity-40" disabled="" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        chevron_left
                      </span>
                      {" "}
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-xs" type="button">
                      {" 1 "}
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" type="button">
                      {" 2 "}
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" type="button">
                      {" 3 "}
                    </button>
                    <span className="px-1 text-secondary font-label-mono text-label-mono">
                      ...
                    </span>
                    <button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" type="button">
                      {" 207 "}
                    </button>
                    <button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        chevron_right
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-1 font-label-mono text-label-mono text-secondary">
                    <span>
                      Show:
                    </span>
                    <button className="px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-bold" type="button">
                      6
                    </button>
                    <button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors" type="button">
                      12
                    </button>
                    <button className="px-2 py-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors" type="button">
                      24
                    </button>
                    <span className="ml-1">
                      per page
                    </span>
                  </div>
                </div>
                {" "}
              </main>
              <aside className="lg:col-span-3 flex flex-col gap-space-md">
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs space-y-space-sm">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        trending_up
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface">
                        Trending Queries
                      </h3>
                    </div>
                    <span className="font-label-mono text-[10px] text-secondary">
                      7 Days
                    </span>
                  </div>
                  <ul className="space-y-2.5 font-body-sm text-body-sm">
                    <li>
                      {" "}
                      <button className="w-full flex items-start gap-2.5 text-left group" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value='Chhota Shigri ice thinning rate'")}>
                        {" "}
                        <span className="font-label-mono text-label-mono font-bold text-primary-container bg-surface-container-low rounded w-5 h-5 flex items-center justify-center shrink-0">
                          1
                        </span>
                        {" "}
                        <div className="flex-1 min-w-0">
                          <p className="text-on-surface group-hover:text-primary transition-colors truncate font-medium">
                            Chhota Shigri ice thinning rate
                          </p>
                          <span className="font-label-mono text-[10px] text-tertiary font-semibold">
                            +42% this week
                          </span>
                        </div>
                        {" "}
                      </button>
                      {" "}
                    </li>
                    <li>
                      {" "}
                      <button className="w-full flex items-start gap-2.5 text-left group" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value='IndARC Kongsfjorden temperature profiles 2024'")}>
                        {" "}
                        <span className="font-label-mono text-label-mono font-bold text-primary-container bg-surface-container-low rounded w-5 h-5 flex items-center justify-center shrink-0">
                          2
                        </span>
                        {" "}
                        <div className="flex-1 min-w-0">
                          <p className="text-on-surface group-hover:text-primary transition-colors truncate font-medium">
                            IndARC Kongsfjorden temperature profiles 2024
                          </p>
                          <span className="font-label-mono text-[10px] text-primary font-semibold">
                            Hot Research Topic
                          </span>
                        </div>
                        {" "}
                      </button>
                      {" "}
                    </li>
                    <li>
                      {" "}
                      <button className="w-full flex items-start gap-2.5 text-left group" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value='43rd IAE Bharati station daily telemetry'")}>
                        {" "}
                        <span className="font-label-mono text-label-mono font-bold text-primary-container bg-surface-container-low rounded w-5 h-5 flex items-center justify-center shrink-0">
                          3
                        </span>
                        {" "}
                        <div className="flex-1 min-w-0">
                          <p className="text-on-surface group-hover:text-primary transition-colors truncate font-medium">
                            43rd IAE Bharati station daily telemetry
                          </p>
                          <span className="font-label-mono text-[10px] text-secondary">
                            Antarctic Winter Log
                          </span>
                        </div>
                        {" "}
                      </button>
                      {" "}
                    </li>
                    <li>
                      {" "}
                      <button className="w-full flex items-start gap-2.5 text-left group" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value='Pine Island glacier calving models'")}>
                        {" "}
                        <span className="font-label-mono text-label-mono font-bold text-primary-container bg-surface-container-low rounded w-5 h-5 flex items-center justify-center shrink-0">
                          4
                        </span>
                        {" "}
                        <div className="flex-1 min-w-0">
                          <p className="text-on-surface group-hover:text-primary transition-colors truncate font-medium">
                            Pine Island glacier calving models
                          </p>
                          <span className="font-label-mono text-[10px] text-secondary">
                            1,120 citations
                          </span>
                        </div>
                        {" "}
                      </button>
                      {" "}
                    </li>
                    <li>
                      {" "}
                      <button className="w-full flex items-start gap-2.5 text-left group" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('main-repo-search').value='MoES Antarctic expedition guidelines 2025'")}>
                        {" "}
                        <span className="font-label-mono text-label-mono font-bold text-primary-container bg-surface-container-low rounded w-5 h-5 flex items-center justify-center shrink-0">
                          5
                        </span>
                        {" "}
                        <div className="flex-1 min-w-0">
                          <p className="text-on-surface group-hover:text-primary transition-colors truncate font-medium">
                            MoES Antarctic expedition guidelines 2025
                          </p>
                          <span className="font-label-mono text-[10px] text-secondary">
                            Official Protocol
                          </span>
                        </div>
                        {" "}
                      </button>
                      {" "}
                    </li>
                  </ul>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xs space-y-space-sm">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        new_releases
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface">
                        Recent Releases
                      </h3>
                    </div>
                    <span className="flex items-center gap-1 font-label-mono text-[10px] text-tertiary">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping" />
                      {" Live Feed "}
                    </span>
                  </div>
                  <div className="space-y-3 font-body-sm text-body-sm">
                    <div className="space-y-1 bg-surface-container-low p-2.5 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-mono text-[9px] font-bold">
                          NEW • 3h ago
                        </span>
                        <span className="font-label-mono text-[10px] text-secondary">
                          Report
                        </span>
                      </div>
                      <p className="font-semibold text-on-surface line-clamp-2">
                        Prydz Bay Biogeochemical Cruise Report SK-221 Digitized Archive
                      </p>
                      <div className="flex items-center justify-between pt-1 font-label-mono text-[11px]">
                        <a className="text-primary hover:underline flex items-center gap-0.5" href="#" onClick={(e)=>e.preventDefault()}>
                          {" "}
                          <span>
                            View
                          </span>
                          {" "}
                          <span className="material-symbols-outlined text-[13px]">
                            arrow_forward
                          </span>
                          {" "}
                        </a>
                        <span className="text-outline">
                          PDF (18.4 MB)
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 bg-surface-container-low p-2.5 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-mono text-[9px] font-bold">
                          Yesterday
                        </span>
                        <span className="font-label-mono text-[10px] text-secondary">
                          Dataset
                        </span>
                      </div>
                      <p className="font-semibold text-on-surface line-clamp-2">
                        Himansh Spiti Valley 2024 AWS Meteorological Log
                      </p>
                      <div className="flex items-center justify-between pt-1 font-label-mono text-[11px]">
                        <a className="text-primary hover:underline flex items-center gap-0.5" href="#" onClick={(e)=>e.preventDefault()}>
                          {" "}
                          <span>
                            Download
                          </span>
                          {" "}
                          <span className="material-symbols-outlined text-[13px]">
                            file_download
                          </span>
                          {" "}
                        </a>
                        <span className="text-outline">
                          CSV (4.2 MB)
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1 bg-surface-container-low p-2.5 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-label-mono text-[9px] font-bold">
                          2 days ago
                        </span>
                        <span className="font-label-mono text-[10px] text-secondary">
                          Time-Series
                        </span>
                      </div>
                      <p className="font-semibold text-on-surface line-clamp-2">
                        IndARC Mooring CTD Cast Batch 4B
                      </p>
                      <div className="flex items-center justify-between pt-1 font-label-mono text-[11px]">
                        <a className="text-primary hover:underline flex items-center gap-0.5" href="#" onClick={(e)=>e.preventDefault()}>
                          {" "}
                          <span>
                            Explore
                          </span>
                          {" "}
                          <span className="material-symbols-outlined text-[13px]">
                            query_stats
                          </span>
                          {" "}
                        </a>
                        <span className="text-outline">
                          NetCDF (92 MB)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-low rounded-2xl p-space-md shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[22px]">
                      contact_support
                    </span>
                    <h3 className="font-title-md text-title-md text-on-surface">
                      Curator Assistance
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Need access to restricted polar datasets, embargoed ice-shelf cores, or bulk RIS/BibTeX citation exports? "}
                  </p>
                  <div className="bg-surface-container-lowest p-2.5 rounded-xl space-y-1 font-label-mono text-[11px]">
                    <span className="text-secondary uppercase">
                      NPDC Scientific Helpdesk:
                    </span>
                    <div className="font-bold text-on-surface select-all">
                      npdc-support@ncpor.res.in
                    </div>
                  </div>
                  <button className="w-full bg-secondary-container hover:bg-surface-container text-on-secondary-container font-label-md text-label-md py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-2" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      format_quote
                    </span>
                    {" "}
                    <span>
                      Export Citation Pack (RIS / BibTeX)
                    </span>
                    {" "}
                  </button>
                </div>
                {" "}
                {" "}
                <div className="p-2 space-y-1 text-secondary">
                  <div className="flex items-center gap-1 font-label-mono text-[10px]">
                    <span className="material-symbols-outlined text-[14px]">
                      verified
                    </span>
                    <span>
                      OAI-PMH & DCAT-AP Polar Compliant
                    </span>
                  </div>
                  <p className="font-label-mono text-[9px] leading-tight">
                    {" Data hosted under the National Polar Data Center adheres to FAIR guidelines (Findable, Accessible, Interoperable, and Reusable). "}
                  </p>
                </div>
                {" "}
              </aside>
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
