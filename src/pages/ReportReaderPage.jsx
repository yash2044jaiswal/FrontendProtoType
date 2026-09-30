import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_resource_detail_report_reader_ncpor_tr_2024_08/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// Simple interactive audio button micro-interaction\n  document.addEventListener('DOMContentLoaded', () => {\n    const audioBtn = document.getElementById('btn-audio-brief');\n    if (audioBtn) {\n      let isPlaying = false;\n      audioBtn.addEventListener('click', () => {\n        isPlaying = !isPlaying;\n        const icon = audioBtn.querySelector('.material-symbols-outlined');\n        if (icon) {\n          icon.textContent = isPlaying ? 'pause' : 'play_arrow';\n        }\n      });\n    }\n  });";

export default function ReportReaderPage() {
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
          <section className="w-full bg-surface-container-lowest py-space-md border-b border-surface-container shadow-xs">
            <div className="max-w-7xl mx-auto px-gutter">
              <nav aria-label="Breadcrumbs" className="flex items-center gap-space-xs text-body-sm font-body-sm text-secondary mb-space-sm">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    home
                  </span>
                  {" Home "}
                </Link>
                <span className="text-outline-variant font-label-mono">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" to="/repository">
                  Knowledge Repository
                </Link>
                <span className="text-outline-variant font-label-mono">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" to="/resources/ncpor-tr-2024-08">
                  Reports
                </Link>
                <span className="text-outline-variant font-label-mono">
                  /
                </span>
                <span className="text-on-surface font-semibold font-label-mono">
                  NCPOR-TR-2024-08
                </span>
              </nav>
              <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-lg pt-space-xs">
                <div className="space-y-space-xs max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
                      {" "}
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {" TECHNICAL REPORT SERIES "}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-label-mono text-label-mono">
                      {" "}
                      <span className="material-symbols-outlined text-[14px] text-tertiary">
                        verified
                      </span>
                      {" PEER-REVIEWED "}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-mono text-label-mono">
                      {" CC-BY 4.0 OPEN ACCESS "}
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
                    {" Decadal Dynamics of Southern Ocean Frontal Jets & Phytoplankton Bloom Coupling (2012–2023) "}
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Technical Report Series • National Centre for Polar and Ocean Research & Ministry of Earth Sciences, Govt. of India "}
                  </p>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 pt-2 text-body-sm font-body-sm text-secondary">
                    <span className="font-label-mono font-semibold text-primary">
                      Report No: NCPOR-TR-2024-08
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span>
                      Published: March 2024
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span>
                      54 Pages (A4)
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span>
                      14.8 MB PDF
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <a className="text-primary hover:underline font-label-mono inline-flex items-center gap-0.5" href="https://doi.org/10.5194/tc-2024-88" rel="noopener noreferrer" target="_blank">
                      {" DOI: 10.5194/tc-2024-88 "}
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                      {" "}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row xl:flex-col gap-2 shrink-0">
                  <Link className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container border border-outline-variant/30 hover:bg-secondary-container/40 text-on-surface transition-all shadow-xs" to="/globe">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      explore
                    </span>
                    {" "}
                    <div className="text-left">
                      <div className="font-label-md text-label-md text-on-surface">
                        View on 3D Globe
                      </div>
                      <div className="font-label-mono text-label-mono text-secondary">
                        Lat 58°S–68°S • Prydz Bay Sector
                      </div>
                    </div>
                    {" "}
                    <span className="material-symbols-outlined text-secondary text-[16px] ml-1">
                      arrow_forward
                    </span>
                    {" "}
                  </Link>
                  <div className="flex items-center gap-1 justify-end font-label-mono text-label-mono text-secondary pt-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">
                      check_circle
                    </span>
                    <span>
                      NPDC Index Grounded: V4.1
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-space-md pt-space-sm border-t border-surface-container flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full shadow-xs">
                  <button className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-xs" id="btn-audio-brief" title="Play 3-minute executive summary audio briefing">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      play_arrow
                    </span>
                    {" "}
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="font-label-md text-label-md text-on-surface font-medium">
                      Listen (3:40)
                    </span>
                    <div className="flex items-center gap-0.5 h-3.5">
                      <span className="w-0.5 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="w-0.5 h-3.5 bg-primary/70 rounded-full" />
                      <span className="w-0.5 h-1.5 bg-primary/50 rounded-full" />
                      <span className="w-0.5 h-3 bg-primary/80 rounded-full animate-pulse" />
                      <span className="w-0.5 h-2 bg-primary/60 rounded-full" />
                    </div>
                    <button className="px-1.5 py-0.5 rounded font-label-mono text-[10px] bg-surface-container text-secondary hover:text-on-surface font-semibold">
                      1.0x
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
                      auto_awesome
                    </span>
                    {" "}
                    <span>
                      Ask POLARIS AI
                    </span>
                    {" "}
                  </button>
                  <div className="relative inline-flex items-center bg-surface-container rounded-lg p-0.5 font-label-mono text-label-mono">
                    <button className="px-2 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-xs">
                      EN
                    </button>
                    <button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
                      HI
                    </button>
                    <button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">
                      FR
                    </button>
                  </div>
                  <a className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" href="#" onClick={(e)=>e.preventDefault()}>
                    {" "}
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      cloud_sync
                    </span>
                    {" "}
                    <span>
                      Open in NPDC
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[14px] text-secondary">
                      open_in_new
                    </span>
                    {" "}
                  </a>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Share Document Link">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      share
                    </span>
                    {" "}
                  </button>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container text-primary hover:bg-secondary-container transition-colors" title="Document Saved in Personal Library">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                      bookmark
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-gutter w-full mt-4">
            <div className="bg-surface-container-low rounded-2xl p-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-outline-variant/30">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[22px]">
                    lock_clock
                  </span>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h2 className="font-title-md text-title-md text-on-surface font-semibold">
                      Restricted Data Layers & Embargo Notice
                    </h2>
                    <span className="font-label-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">
                      Embargo Active
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-4xl">
                    {" High-resolution raw acoustic ADCP transects (Appendices D & E, pp. 48–52) are currently under an institutional 12-month MoES data embargo until October 2025. Executive summary, calibrated CTD hydrography, and public biogeochemical figures (pp. 1–47) are fully Open Access under CC-BY 4.0. "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                <button className="px-3.5 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors whitespace-nowrap">
                  {" Download Public (PDF) "}
                </button>
                <button className="px-3.5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors shadow-xs flex items-center gap-1.5 whitespace-nowrap">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    key
                  </span>
                  {" "}
                  <span>
                    Request Full Access
                  </span>
                  {" "}
                </button>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-gutter w-full mt-6 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-outline-variant/30">
                <div className="w-full bg-surface-container-low px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-surface-container">
                  <div className="flex items-center gap-1.5">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Toggle Thumbnails Sidebar">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        view_sidebar
                      </span>
                      {" "}
                    </button>
                    <div className="h-4 w-[1px] bg-outline-variant/40 mx-1" />
                    <button className="w-7 h-7 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" title="Previous Page">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        navigate_before
                      </span>
                      {" "}
                    </button>
                    <div className="flex items-center gap-1 font-label-mono text-label-mono">
                      <input aria-label="Current page number" className="w-9 h-7 rounded text-center bg-surface-container-lowest text-on-surface font-semibold shadow-xs focus:outline-primary" type="text" defaultValue="12" />
                      <span className="text-secondary">
                        / 54
                      </span>
                    </div>
                    <button className="w-7 h-7 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" title="Next Page">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        navigate_next
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-1 font-label-mono text-label-mono text-secondary">
                    <button className="w-7 h-7 rounded flex items-center justify-center hover:bg-surface-container text-on-surface-variant" title="Zoom Out">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        remove
                      </span>
                      {" "}
                    </button>
                    <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-semibold">
                      100%
                    </span>
                    <button className="w-7 h-7 rounded flex items-center justify-center hover:bg-surface-container text-on-surface-variant" title="Zoom In">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        add
                      </span>
                      {" "}
                    </button>
                    <div className="h-4 w-[1px] bg-outline-variant/40 mx-1" />
                    <button className="w-7 h-7 rounded flex items-center justify-center hover:bg-surface-container text-on-surface-variant" title="Fit to Width">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        fit_screen
                      </span>
                      {" "}
                    </button>
                    <button className="w-7 h-7 rounded flex items-center justify-center hover:bg-surface-container text-on-surface-variant" title="Rotate Page">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        rotate_right
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative hidden sm:flex items-center">
                      <input className="w-48 pl-7 pr-16 py-1 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-primary placeholder:text-outline shadow-xs" placeholder="Search inside report..." type="text" defaultValue="polar frontal jet" />
                      <span className="material-symbols-outlined absolute left-2 text-[16px] text-secondary">
                        search
                      </span>
                      <div className="absolute right-1.5 flex items-center gap-0.5 font-label-mono text-[10px] text-secondary bg-surface-container px-1 rounded">
                        <span>
                          3 of 14
                        </span>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Download Document">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      {" "}
                    </button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Print Document">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        print
                      </span>
                      {" "}
                    </button>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Fullscreen Viewer">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        fullscreen
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="w-full bg-[#EEF2F6] p-4 sm:p-8 flex justify-center overflow-x-auto">
                  <article className="w-full max-w-[760px] bg-white text-[#0B1F3A] rounded shadow-md p-8 sm:p-12 relative font-sans leading-relaxed selection:bg-secondary-container">
                    {" "}
                    {" "}
                    <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3 mb-6 text-[10px] font-label-mono text-secondary tracking-widest uppercase">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">
                          NCPOR TECHNICAL REPORT
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          SOUTHERN OCEAN BIOGEOCHEMISTRY
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>
                          CHAPTER 3: FRONTAL ANOMALIES
                        </span>
                        <span className="font-bold text-on-surface text-xs bg-surface-container px-2 py-0.5 rounded">
                          PAGE 12
                        </span>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="mb-5">
                      <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                        SECTION 3.2 • HYDROGRAPHIC OBSERVATIONS
                      </span>
                      <h2 className="font-headline-md text-headline-md text-[#071C36] mt-1 tracking-tight">
                        {" Sub-surface Chlorophyll-a Maxima & Isopycnal Upwelling along Polar Frontal Zone "}
                      </h2>
                    </div>
                    {" "}
                    {" "}
                    <div className="space-y-4 font-body-md text-body-md text-[#1E293B]">
                      <p className="text-justify leading-relaxed">
                        {" The Southern Ocean Polar Front (PF) acts as a critical dynamic barrier delineating Antarctic Surface Water (AASW) from warmer sub-Antarctic water masses. High-resolution underway CTD transects conducted during the austral summer aboard ORV "}
                        <em className="font-serif">
                          Sagar Kanya
                        </em>
                        {" (Cruise SK-221) revealed strong vertical shear in geostrophic velocities across the upper 250 m water column between 58°S and 61°30'S. "}
                      </p>
                      <p className="text-justify leading-relaxed p-2.5 rounded-lg bg-secondary-container/40 border-l-4 border-primary">
                        {" "}
                        <span className="font-semibold text-primary font-label-mono text-xs block mb-1">
                          § 3.2.1 • VELOCITY CORE ACCELERATION
                        </span>
                        {" "}
                        <mark className="bg-transparent text-[#071C36] font-medium">
                          {" \"Continuous acoustic Doppler velocity logging confirmed that the subsurface jet core reached an instantaneous velocity of 0.46 ± 0.04 m s⁻¹ at 180 m depth, indicating an approximate 14% decadal acceleration relative to baseline measurements established during the IPY 2012 transect. This dynamic intensification directly triggers localized isopycnal shoaling of nutrient-dense Upper Circumpolar Deep Water (UCDW).\" "}
                        </mark>
                        {" "}
                      </p>
                      <p className="text-justify leading-relaxed">
                        {" Fluorometric sensors coupled with Niskin rosette bottle validations demonstrated that the deep chlorophyll maximum (DCM) is positioned precisely at the interface of nitrate-replete upwelled water and the euphotic layer boundary (80–110 m depth). Vertical diffusive iron fluxes ("}
                        <em className="font-serif">
                          Fe
                          <sub>
                            diss
                          </sub>
                        </em>
                        {") elevated localized primary productivity south of the Polar Frontal Zone (PFZ) by a factor of 2.4 during peak insolation. "}
                      </p>
                    </div>
                    {" "}
                    {" "}
                    <div className="my-6 p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-mono text-label-mono font-bold text-primary tracking-wide">
                          FIGURE 4.1: HYDROGRAPHIC SECTION TRANSECT
                        </span>
                        <span className="font-label-mono text-[10px] text-secondary">
                          ORV SAGAR KANYA • CRUISE SK-221
                        </span>
                      </div>
                      <div className="w-full h-52 bg-white rounded-lg border border-[#E2E8F0] p-2 relative overflow-hidden flex flex-col justify-between">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 200">
                          <defs>
                            <linearGradient id="grad-temp" x1="0%" x2="0%" y1="0%" y2="100%">
                              {" "}
                              <stop offset="0%" stopColor="#1F7A8C" stopOpacity="0.35" />
                              {" "}
                              <stop offset="50%" stopColor="#83D2E6" stopOpacity="0.2" />
                              {" "}
                              <stop offset="100%" stopColor="#071C36" stopOpacity="0.05" />
                              {" "}
                            </linearGradient>
                            <linearGradient id="jet-core" x1="0%" x2="100%" y1="0%" y2="0%">
                              {" "}
                              <stop offset="0%" stopColor="#2ECC9A" />
                              {" "}
                              <stop offset="50%" stopColor="#F5A623" />
                              {" "}
                              <stop offset="100%" stopColor="#1F7A8C" />
                              {" "}
                            </linearGradient>
                          </defs>
                          <line stroke="#E2E8F0" strokeDasharray="3,3" x1="50" x2="680" y1="20" y2="20" />
                          <text fill="#64748B" fontFamily="monospace" fontSize="9" textAnchor="end" x="45" y="24">
                            0m
                          </text>
                          <line stroke="#E2E8F0" strokeDasharray="3,3" x1="50" x2="680" y1="60" y2="60" />
                          <text fill="#64748B" fontFamily="monospace" fontSize="9" textAnchor="end" x="45" y="64">
                            200m
                          </text>
                          <line stroke="#E2E8F0" strokeDasharray="3,3" x1="50" x2="680" y1="100" y2="100" />
                          <text fill="#64748B" fontFamily="monospace" fontSize="9" textAnchor="end" x="45" y="104">
                            500m
                          </text>
                          <line stroke="#E2E8F0" strokeDasharray="3,3" x1="50" x2="680" y1="150" y2="150" />
                          <text fill="#64748B" fontFamily="monospace" fontSize="9" textAnchor="end" x="45" y="154">
                            1000m
                          </text>
                          <line stroke="#94A3B8" strokeDasharray="4,2" strokeWidth="1.5" x1="140" x2="140" y1="10" y2="175" />
                          <text fill="#0F172A" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" x="140" y="190">
                            STF (42°S)
                          </text>
                          <line stroke="#94A3B8" strokeDasharray="4,2" strokeWidth="1.5" x1="330" x2="330" y1="10" y2="175" />
                          <text fill="#0F172A" fontFamily="sans-serif" fontSize="10" fontWeight="bold" textAnchor="middle" x="330" y="190">
                            SAF (52°S)
                          </text>
                          <line stroke="#1F7A8C" strokeWidth="2" x1="510" x2="510" y1="10" y2="175" />
                          <rect fill="#1F7A8C" height="15" rx="3" width="70" x="475" y="178" />
                          <text fill="#FFFFFF" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle" x="510" y="189">
                            PF (60°S)
                          </text>
                          <path d="M 50 30 Q 200 45, 330 75 T 510 65 T 680 130 L 680 170 L 50 170 Z" fill="url(#grad-temp)" />
                          <path d="M 50 30 Q 200 45, 330 75 T 510 65 T 680 130" fill="none" stroke="#0284C7" strokeWidth="2" />
                          <ellipse cx="510" cy="62" fill="url(#jet-core)" opacity="0.85" rx="45" ry="16" />
                          <circle cx="510" cy="62" fill="#FFFFFF" r="3" />
                          <text fill="#071C36" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle" x="510" y="58">
                            0.46 m/s Core
                          </text>
                          <text fill="#071C36" fontFamily="monospace" fontSize="7.5" textAnchor="middle" x="510" y="68">
                            180m Iso-depth
                          </text>
                          <path d="M 560 140 Q 550 110, 520 85" fill="none" markerEnd="url(#arrow)" stroke="#EA580C" strokeDasharray="3,2" strokeWidth="2" />
                          <text fill="#EA580C" fontFamily="sans-serif" fontSize="8.5" fontWeight="600" x="590" y="130">
                            Upwelling CDW
                          </text>
                          <rect fill="#2ECC9A" fillOpacity="0.35" height="12" rx="6" width="120" x="460" y="15" />
                          <text fill="#065F46" fontFamily="sans-serif" fontSize="8" fontWeight="bold" textAnchor="middle" x="520" y="24">
                            Chl-a Maximum (2.8 mg/m³)
                          </text>
                        </svg>
                      </div>
                      <p className="font-body-sm text-[12px] text-[#475569] mt-2.5 leading-snug">
                        {" "}
                        <strong className="text-on-surface">
                          Figure 4.1:
                        </strong>
                        {" Cross-frontal temperature & CTD salinity transect across 58°S to 64°S (ORV Sagar Kanya SK-221 cruise data). Labeled oceanic fronts: Subtropical Front (STF), Subantarctic Front (SAF), and Polar Front (PF). Shaded core indicates enhanced subsurface jet velocity at 180 m depth. Methodological details documented in "}
                        <cite className="italic">
                          [NCPOR-MoES 2023 Hydrography Protocol]
                        </cite>
                        {". "}
                      </p>
                    </div>
                    {" "}
                    {" "}
                    <div className="border-t border-[#CBD5E1] pt-3 mt-6 flex items-center justify-between text-[10px] font-label-mono text-secondary">
                      <span>
                        DOI: 10.5194/tc-2024-88
                      </span>
                      <span>
                        MINISTRY OF EARTH SCIENCES • GOVERNMENT OF INDIA
                      </span>
                      <span>
                        REPORT NO: NCPOR-TR-2024-08
                      </span>
                    </div>
                    {" "}
                  </article>
                </div>
                <div className="bg-surface-container-low px-4 py-2 border-t border-surface-container flex items-center justify-between text-body-sm font-body-sm text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    <span className="font-label-mono text-label-mono">
                      Document Rendering Engine: Crisp SVG/PDF Canvas • Zoom: 100%
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-label-mono text-label-mono">
                    <button className="hover:text-primary transition-colors">
                      Select Text
                    </button>
                    <span>
                      •
                    </span>
                    <button className="hover:text-primary transition-colors">
                      Rotate View
                    </button>
                    <span>
                      •
                    </span>
                    <button className="text-primary font-semibold hover:underline">
                      Download Current Page
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden border border-outline-variant/30 flex flex-col">
                  <div className="bg-surface-container-low p-1.5 flex items-center border-b border-surface-container gap-1">
                    <button className="flex-1 py-2 px-2.5 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-primary font-bold shadow-xs flex items-center justify-center gap-1.5 transition-all">
                      {" "}
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        psychology
                      </span>
                      {" "}
                      <span>
                        Key Findings
                      </span>
                      {" "}
                      <span className="w-4 h-4 rounded-full bg-primary-container text-on-primary text-[10px] flex items-center justify-center font-label-mono">
                        4
                      </span>
                      {" "}
                    </button>
                    <button className="flex-1 py-2 px-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors text-center">
                      {" Metadata "}
                    </button>
                    <button className="flex-1 py-2 px-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors text-center">
                      {" Related "}
                    </button>
                    <button className="flex-1 py-2 px-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors text-center">
                      {" Cite "}
                    </button>
                  </div>
                  <div className="p-space-md space-y-space-md">
                    <div className="flex items-start justify-between gap-2 pb-space-sm border-b border-surface-container">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-primary text-[18px]">
                            auto_awesome
                          </span>
                          <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                            AI Research Synthesis
                          </h3>
                        </div>
                        <div className="font-label-mono text-label-mono text-secondary mt-0.5">
                          Automated extraction grounded in report data
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary-container font-label-mono text-[10px] font-bold">
                          {" "}
                          <span className="material-symbols-outlined text-[12px]">
                            verified
                          </span>
                          {" 98% Grounded "}
                        </span>
                        <span className="text-[9px] font-label-mono text-outline mt-0.5">
                          NCPOR Peer-Verified
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[18px]">
                            headphones
                          </span>
                        </div>
                        <div>
                          <div className="font-label-md text-label-md text-on-surface">
                            Audio Briefing (Synthesis)
                          </div>
                          <div className="font-body-sm text-[11px] text-secondary">
                            Narrated by Dr. Sharma (Lead Author)
                          </div>
                        </div>
                      </div>
                      <button className="px-2.5 py-1 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-primary font-label-mono text-xs hover:bg-secondary-container transition-colors flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[14px]">
                          play_arrow
                        </span>
                        {" 2:14 "}
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-secondary-container/30 border border-primary/30 transition-all shadow-xs">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-label-md text-label-md font-bold text-primary flex items-center gap-1">
                            {" "}
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {" Polar Jet Current Acceleration "}
                          </span>
                          <span className="font-label-mono text-[10px] font-semibold text-primary px-1.5 py-0.5 rounded bg-surface-container-lowest">
                            P. 12
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface leading-normal">
                          {" Measured subsurface core velocity reached "}
                          <strong>
                            0.46 m/s
                          </strong>
                          {" at 180m depth, representing a "}
                          <strong>
                            14% decadal increase
                          </strong>
                          {" over historical 2012 IPY baselines. "}
                        </p>
                        <div className="mt-2 pt-2 border-t border-primary/10 flex items-center justify-between">
                          <span className="font-label-mono text-[11px] text-secondary">
                            Section 3.2.1 • Acoustic ADCP
                          </span>
                          <a className="inline-flex items-center gap-0.5 font-label-mono text-label-mono text-primary font-bold hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                            {" Jump to Page 12, §3.2 "}
                            <span className="material-symbols-outlined text-[12px]">
                              arrow_forward
                            </span>
                            {" "}
                          </a>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1">
                            {" "}
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            {" Carbon Sequestration Efficiency "}
                          </span>
                          <span className="font-label-mono text-[10px] text-secondary px-1.5 py-0.5 rounded bg-surface-container-lowest">
                            P. 26
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                          {" Particulate organic carbon (POC) export ratio peaked at "}
                          <strong>
                            0.38
                          </strong>
                          {" during austral summer blooms south of the Polar Front via rapid diatom settling. "}
                        </p>
                        <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                          <span className="font-label-mono text-[11px] text-secondary">
                            Figure 6.2 • Sediment Traps
                          </span>
                          <a className="inline-flex items-center gap-0.5 font-label-mono text-label-mono text-primary hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                            {" Jump to Page 26, Fig 6 "}
                            <span className="material-symbols-outlined text-[12px]">
                              arrow_forward
                            </span>
                            {" "}
                          </a>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1">
                            {" "}
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            {" Silica-to-Nitrate Drawdown Ratio "}
                          </span>
                          <span className="font-label-mono text-[10px] text-secondary px-1.5 py-0.5 rounded bg-surface-container-lowest">
                            P. 34
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                          {" Diatom bloom stoichiometry indicates a shifted Si:N uptake ratio (1.8:1), suggesting altered trace-iron limitation across 62°S transects. "}
                        </p>
                        <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                          <span className="font-label-mono text-[11px] text-secondary">
                            Table 2 • Nutrient Stoichiometry
                          </span>
                          <a className="inline-flex items-center gap-0.5 font-label-mono text-label-mono text-primary hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                            {" Jump to Page 34, Table 2 "}
                            <span className="material-symbols-outlined text-[12px]">
                              arrow_forward
                            </span>
                            {" "}
                          </a>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1">
                            {" "}
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            {" Decadal Warming in Upper 300m "}
                          </span>
                          <span className="font-label-mono text-[10px] text-secondary px-1.5 py-0.5 rounded bg-surface-container-lowest">
                            P. 41
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                          {" Observed "}
                          <strong>
                            +0.28°C per decade
                          </strong>
                          {" warming anomaly across the Kerguelen Plateau sector, accelerating subsurface isopycnal slope steepening. "}
                        </p>
                        <div className="mt-2 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                          <span className="font-label-mono text-[11px] text-secondary">
                            Section 5.1 • Long-Term Mooring
                          </span>
                          <a className="inline-flex items-center gap-0.5 font-label-mono text-label-mono text-primary hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                            {" Jump to Page 41, §5.1 "}
                            <span className="material-symbols-outlined text-[12px]">
                              arrow_forward
                            </span>
                            {" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 space-y-2">
                      <label className="font-label-md text-label-md text-on-surface block" htmlFor="ai-inquire">
                        Ask POLARIS about this Report:
                      </label>
                      <div className="relative flex items-center">
                        <input className="w-full pl-3 pr-10 py-2 rounded-xl bg-surface-container font-body-sm text-body-sm text-on-surface focus:outline-primary placeholder:text-outline border border-transparent shadow-xs" id="ai-inquire" placeholder="e.g. Compare bloom timing between 2018 and 2023..." type="text" />
                        <button className="absolute right-1.5 w-7 h-7 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-xs" title="Submit Question">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            arrow_upward
                          </span>
                          {" "}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <button className="px-2 py-1 rounded-md bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-container-high font-label-mono text-[11px] transition-colors">
                          {" ✦ Summarize methodology "}
                        </button>
                        <button className="px-2 py-1 rounded-md bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-container-high font-label-mono text-[11px] transition-colors">
                          {" ✦ Export data tables "}
                        </button>
                        <button className="px-2 py-1 rounded-md bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-container-high font-label-mono text-[11px] transition-colors">
                          {" ✦ Check errata & DOIs "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-md border border-outline-variant/30 space-y-space-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        format_quote
                      </span>
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">
                        Citation & Export Formats
                      </h3>
                    </div>
                    <span className="font-label-mono text-[11px] text-secondary font-medium">
                      APA 7th Edition
                    </span>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-xl text-body-sm font-body-sm text-on-surface font-serif leading-relaxed select-all border border-outline-variant/20">
                    {" Ravichandran, M., Patel, D. L., & Sharma, K. (2024). "}
                    <em>
                      Decadal Dynamics of Southern Ocean Frontal Jets & Phytoplankton Bloom Coupling (2012–2023)
                    </em>
                    {" (NCPOR Technical Report No. TR-2024-08). National Centre for Polar and Ocean Research, MoES, India. https://doi.org/10.5194/tc-2024-88 "}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
                    <button className="px-2 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-secondary-container font-label-mono text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        content_copy
                      </span>
                      {" APA "}
                    </button>
                    <button className="px-2 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-secondary-container font-label-mono text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        content_copy
                      </span>
                      {" BibTeX "}
                    </button>
                    <button className="px-2 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-secondary-container font-label-mono text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        content_copy
                      </span>
                      {" RIS "}
                    </button>
                    <button className="px-2 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-secondary-container font-label-mono text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        link
                      </span>
                      {" Copy DOI "}
                    </button>
                  </div>
                  <div className="pt-2 border-t border-surface-container flex flex-wrap items-center justify-between gap-2">
                    <span className="font-label-mono text-[11px] text-secondary">
                      Export to reference managers:
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary-container hover:text-on-primary transition-all font-label-mono text-[11px] font-medium text-on-surface">
                        {" .BIB "}
                      </button>
                      <button className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary-container hover:text-on-primary transition-all font-label-mono text-[11px] font-medium text-on-surface">
                        {" .RIS "}
                      </button>
                      <button className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container hover:bg-primary-fixed transition-colors font-label-mono text-[11px] font-bold">
                        {" Zotero / Mendeley "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-24 border-t border-surface-container">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest font-bold">
                      POLARIS SCIENTIFIC NETWORK
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {" Related Research Datasets, Reports & Expeditions "}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                    {" Complementary polar literature and cruise datasets sharing geographic coordinates and oceanographic transects "}
                  </p>
                </div>
                <Link className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold hover:underline whitespace-nowrap" to="/data">
                  {" "}
                  <span>
                    Explore All 342 Southern Ocean Datasets
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                  {" "}
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[11px] font-semibold">
                        {" DATASET "}
                      </span>
                      <span className="font-label-mono text-[11px] text-secondary">
                        NetCDF / CSV
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {" High-Resolution CTD & ADCP Hydrographic Profiles along SOE-01 Transect "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" Calibrated vertical hydrographic casts spanning 42 sampling stations from 58°S down to the Prydz Bay Amery Ice Shelf continental margin. "}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between">
                    <div className="font-label-mono text-label-mono text-secondary">
                      <div>
                        42 Stations
                      </div>
                      <div className="text-[10px] text-tertiary font-bold">
                        CC-BY 4.0 Open
                      </div>
                    </div>
                    <Link className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all" to="/data">
                      {" "}
                      <span>
                        Open Dataset
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_outward
                      </span>
                      {" "}
                    </Link>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-[11px] font-semibold">
                        {" CRUISE REPORT "}
                      </span>
                      <span className="font-label-mono text-[11px] text-secondary">
                        ORV Sagar Kanya
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {" SOE-01 Southern Ocean Cruise Expedition Logbook (SK-221) "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" Operational logs, bridge navigation telemetries, sea-ice drift observations, and instrument deployment summaries across 68 days in the Southern Ocean. "}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between">
                    <div className="font-label-mono text-label-mono text-secondary">
                      <div>
                        68 Days at Sea
                      </div>
                      <div className="text-[10px]">
                        148 Pages PDF
                      </div>
                    </div>
                    <Link className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all" to="/resources/ncpor-tr-2024-08">
                      {" "}
                      <span>
                        Read Report
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        article
                      </span>
                      {" "}
                    </Link>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary-container font-label-mono text-[11px] font-semibold">
                        {" PEER-REVIEWED "}
                      </span>
                      <span className="font-label-mono text-[11px] text-secondary">
                        Polar Biology (2023)
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {" Biogeochemical Carbon Pump and Diatom Silicification in Polar Front "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" In-depth taxonomic assessment of diatom bloom assemblages and vertical silica flux attenuation along the Indian Sector of the Southern Ocean. "}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between">
                    <div className="font-label-mono text-label-mono text-secondary">
                      <div>
                        Cited by 18
                      </div>
                      <div className="text-[10px] text-primary">
                        Springer-Nature
                      </div>
                    </div>
                    <a className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-primary-container hover:text-on-primary transition-all" href="#" onClick={(e)=>e.preventDefault()}>
                      {" "}
                      <span>
                        View Paper
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                      {" "}
                    </a>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/30 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary font-label-mono text-[11px] font-semibold flex items-center gap-1">
                        {" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping" />
                        {" ACTIVE EXPEDITION "}
                      </span>
                      <span className="font-label-mono text-[11px] text-secondary">
                        MoES India
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {" 43rd Indian Antarctic Expedition (IAE) - Maitri & Bharati Telemetry "}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" Real-time atmospheric radiation profiles, cryospheric ice coring logs, and meteorological stations streaming continuous sensor telemetry. "}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container flex items-center justify-between">
                    <div className="font-label-mono text-label-mono text-secondary">
                      <div>
                        Telemetry Live
                      </div>
                      <div className="text-[10px] text-tertiary font-bold">
                        Bharati Station 69°S
                      </div>
                    </div>
                    <a className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-xs" href="#" onClick={(e)=>e.preventDefault()}>
                      {" "}
                      <span>
                        Explore
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        explore
                      </span>
                      {" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-4 rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-3 text-body-sm font-body-sm text-secondary">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    account_balance
                  </span>
                  <span>
                    {"National Polar Data Center (NPDC) Node • MoES Project Identifier: "}
                    <strong>
                      MOES/NCPOR/SOE-2024-BGC
                    </strong>
                  </span>
                </div>
                <div className="flex items-center gap-4 font-label-mono text-label-mono">
                  <Link className="hover:text-primary transition-colors" to="/data">
                    Download Metadata (ISO 19115 XML)
                  </Link>
                  <span>
                    •
                  </span>
                  <Link className="hover:text-primary transition-colors" to="/data">
                    Data Dictionary
                  </Link>
                  <span>
                    •
                  </span>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Contact Principal Investigator
                  </a>
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
