import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_my_account_research_portal_account/code.html
const BODY_CLASS = "bg-surface font-body-md text-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function MyAccountPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md flex-shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  explore
                </span>
                <span className="font-title-md text-title-md font-bold text-on-surface tracking-wider">
                  POLARIS
                </span>
              </div>
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                NCPOR · MoES Govt of India
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-space-xs pl-space-md ml-space-xs bg-surface-container-low px-space-md py-1.5 rounded-full shadow-[0_1px_4px_rgba(7,28,54,0.02)]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              <span className="font-label-mono text-label-mono text-on-surface uppercase">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg font-body-sm text-body-sm" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg font-body-sm text-body-sm" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg font-body-sm text-body-sm" data-path="live-tracker" to="/live/soe-01">
              Live Tracker
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg font-body-sm text-body-sm" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg font-body-sm text-body-sm" data-path="publications" to="/publications">
              Publications
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg font-body-sm text-body-sm" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded-lg font-body-sm text-body-sm" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm">
            <div className="hidden md:flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg text-on-surface-variant gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                search
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant pr-space-xs">
                Search Polar Data...
              </span>
              <kbd className="bg-surface-container-highest px-1.5 py-0.5 rounded text-[10px] font-label-mono text-on-surface">
                ⌘K
              </kbd>
            </div>
            <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 text-on-surface-variant">
              <button className="px-2 py-1 rounded text-on-surface font-label-mono text-label-mono bg-surface-container-lowest shadow-sm">
                EN
              </button>
              <button className="px-2 py-1 rounded font-label-mono text-label-mono hover:text-on-surface">
                HI
              </button>
            </div>
            <Link className="flex items-center gap-space-xs pl-space-xs" data-path="my-account" title="My Account" to="/account">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <div className="fixed bottom-8 right-8 z-50 flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-xl max-w-md transform transition-all duration-300" id="toast-notification">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary-container text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                check_circle
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <p className="font-label-md text-label-md text-on-surface font-semibold">
                Bookmark updated
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {"\"NCPOR-TR-2024-08\" renamed to "}
                <span className="text-on-surface font-medium">
                  "Maitri Katabatic Reference"
                </span>
              </p>
            </div>
            <div className="flex items-center gap-space-xs flex-shrink-0">
              <button className="px-2 py-1 text-primary-container hover:bg-secondary-container/20 rounded font-label-mono text-label-mono uppercase transition-colors">
                Undo
              </button>
              <button className="p-1 text-on-surface-variant hover:text-on-surface rounded-full transition-colors" onClick={(e)=>window.__pol(e,"document.getElementById('toast-notification').classList.add('opacity-0', 'pointer-events-none')")}>
                {" "}
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
                {" "}
              </button>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto px-gutter py-space-md">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface-variant">
                  <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                    {" "}
                    <span className="material-symbols-outlined text-[15px]">
                      home
                    </span>
                    {"Home "}
                  </Link>
                  <span>
                    /
                  </span>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    User Portal
                  </a>
                  <span>
                    /
                  </span>
                  <span className="text-on-surface font-semibold">
                    My Account
                  </span>
                </nav>
                <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-1 rounded-full text-on-surface">
                  <span className="material-symbols-outlined text-primary-container text-[16px]">
                    verified_user
                  </span>
                  <span className="font-label-mono text-label-mono tracking-wide text-on-surface">
                    AUTHENTICATED CITIZEN RESEARCHER • ROLE: CONTRIBUTOR / EDUCATOR (ROLES: U, C, S, E, A)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
            <div className="relative bg-surface-container-lowest rounded-xl p-space-xl shadow-sm overflow-hidden">
              <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-container/20 pointer-events-none blur-2xl" />
              <div className="absolute right-12 top-6 opacity-10 pointer-events-none">
                <svg className="stroke-primary fill-none stroke-[0.5]" height="240" viewBox="0 0 100 100" width="240">
                  <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="15" strokeDasharray="1 1" />
                  <line x1="50" x2="50" y1="0" y2="100" />
                  <line x1="0" x2="100" y1="50" y2="50" />
                  <path d="M50 5 L55 20 L50 16 L45 20 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-lg">
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center shadow-md">
                      <span className="font-headline-md text-headline-md text-on-primary font-bold tracking-wider">
                        RS
                      </span>
                    </div>
                    <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shadow-sm" title="Active Verified MoES Educator">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        school
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="space-y-space-xs">
                    <div className="flex flex-wrap items-center gap-space-sm">
                      <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                        Rohan Sen
                      </h1>
                      <span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono uppercase font-semibold">
                        Level 3 Cryo-Explorer
                      </span>
                      <span className="inline-flex items-center px-space-sm py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-mono text-label-mono uppercase font-semibold">
                        MoES Contributor
                      </span>
                    </div>
                    <p className="font-title-md text-title-md text-on-surface-variant font-normal">
                      {" Polar Science Educator & Fellow • Kendriya Vidyalaya Sangathan & MoES Outreach "}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-space-lg gap-y-space-xs text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          mail
                        </span>
                        {"rohan.sen@kvs.edu.in "}
                      </span>
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          calendar_month
                        </span>
                        {"Member since Nov 2023 "}
                      </span>
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          location_on
                        </span>
                        {"New Delhi / Remote Antarctic Feeds "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-space-sm flex-shrink-0">
                  <button className="flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded bg-primary-container hover:bg-primary text-on-primary transition-colors font-title-md text-title-md shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      edit
                    </span>
                    {"Edit Profile "}
                  </button>
                  <button className="flex items-center justify-center gap-space-xs px-space-md py-2 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface transition-colors font-body-sm text-body-sm">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      logout
                    </span>
                    {"Sign Out "}
                  </button>
                </div>
              </div>
              <div className="mt-space-xl pt-space-lg bg-surface-container-low/70 -mx-space-xl -mb-space-xl px-space-xl py-space-md rounded-b-xl flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      bookmark
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block leading-none">
                      18
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Bookmarks
                    </span>
                  </div>
                </div>
                <div className="h-8 w-px bg-surface-container-highest hidden sm:block" />
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      saved_search
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block leading-none">
                      4
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Saved Searches
                    </span>
                  </div>
                </div>
                <div className="h-8 w-px bg-surface-container-highest hidden sm:block" />
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      folder_special
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block leading-none">
                      3
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Curated Dossiers
                    </span>
                  </div>
                </div>
                <div className="h-8 w-px bg-surface-container-highest hidden sm:block" />
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      military_tech
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block leading-none">
                      7
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Quiz Badges
                    </span>
                  </div>
                </div>
                <div className="h-8 w-px bg-surface-container-highest hidden sm:block" />
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      explore
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block leading-none">
                      Tier 3
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Cryo-Explorer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto px-gutter pb-space-xl">
            <div className="flex flex-col lg:flex-row items-start gap-space-lg">
              <aside className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-space-md">
                {" "}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-1">
                  <p className="px-space-sm py-1 font-label-mono text-label-mono uppercase text-on-surface-variant font-semibold tracking-wider">
                    Account Workspace
                  </p>
                  <a className="flex items-center justify-between px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-title-md transition-all shadow-sm" href="#bookmarks-section">
                    {" "}
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>
                        bookmarks
                      </span>
                      <span>
                        Bookmarks
                      </span>
                    </div>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-primary-container font-label-mono text-label-mono font-bold">
                      18
                    </span>
                    {" "}
                  </a>
                  <a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#searches-section">
                    {" "}
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        manage_search
                      </span>
                      <span>
                        Saved Searches
                      </span>
                    </div>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono">
                      4
                    </span>
                    {" "}
                  </a>
                  <a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#collections-section">
                    {" "}
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        collections_bookmark
                      </span>
                      <span>
                        Collections
                      </span>
                    </div>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono">
                      3
                    </span>
                    {" "}
                  </a>
                  <a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#alerts-section">
                    {" "}
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        notifications_active
                      </span>
                      <span>
                        Alerts & Feeds
                      </span>
                    </div>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
                      2
                    </span>
                    {" "}
                  </a>
                  <a className="flex items-center justify-between px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#badges-section">
                    {" "}
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        military_tech
                      </span>
                      <span>
                        Quiz Badges
                      </span>
                    </div>
                    {" "}
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono">
                      7
                    </span>
                    {" "}
                  </a>
                  <div className="pt-space-sm my-space-xs bg-surface-container-low h-px" />
                  <a className="flex items-center gap-space-sm px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#preferences-section">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      settings_accessibility
                    </span>
                    {" "}
                    <span>
                      Preferences
                    </span>
                    {" "}
                  </a>
                  <a className="flex items-center gap-space-sm px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#" onClick={(e)=>e.preventDefault()}>
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      security
                    </span>
                    {" "}
                    <span>
                      Profile & Security
                    </span>
                    {" "}
                  </a>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs shadow-sm">
                  <div className="flex items-center gap-space-xs text-primary-container">
                    <span className="material-symbols-outlined text-[20px]">
                      cloud_sync
                    </span>
                    <span className="font-label-md text-label-md uppercase font-semibold">
                      Sync Status: Active
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Session paired via NKN Institutional single sign-on. Field bookmarks sync directly with NCPOR Offline Reader on portable instruments. "}
                  </p>
                  <div className="pt-space-xs">
                    <span className="font-label-mono text-label-mono text-on-surface font-medium flex items-center gap-1">
                      {" "}
                      <span className="w-2 h-2 rounded-full bg-tertiary" />
                      {" Last synced 4 min ago "}
                    </span>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
                  <span className="font-label-mono text-label-mono uppercase text-on-surface-variant font-semibold">
                    Active Base Station Reference
                  </span>
                  <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                    <div className="flex items-center justify-between font-label-mono text-label-mono">
                      <span className="text-on-surface font-bold">
                        Maitri, Queen Maud Land
                      </span>
                      <span className="text-tertiary">
                        LIVE
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      70°45′58″ S, 11°43′56″ E
                    </p>
                    <div className="flex items-center justify-between text-on-surface font-label-mono text-label-mono pt-1">
                      <span>
                        Temp: -18.4°C
                      </span>
                      <span>
                        Baro: 984 hPa
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
              </aside>
              <section className="flex-1 w-full space-y-space-xl">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-lg" id="bookmarks-section">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Saved Bookmarks & Field Resources
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-bold">
                          6 shown of 18
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        {" Direct access to oceanographic logs, expedition papers, and virtual 360° Antarctic science field stations. "}
                      </p>
                    </div>
                    <div className="flex items-center gap-space-xs flex-shrink-0">
                      <button className="flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container-low hover:bg-surface-container-high text-primary font-title-md text-title-md transition-colors shadow-sm">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          create_new_folder
                        </span>
                        {"New Collection "}
                      </button>
                      <button className="p-2 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Export as BibTeX or CSV">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          download
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <button className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-colors">
                      All (18)
                    </button>
                    <button className="px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors">
                      Reports (8)
                    </button>
                    <button className="px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors">
                      Expeditions (4)
                    </button>
                    <button className="px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors">
                      Stories (3)
                    </button>
                    <button className="px-space-md py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors">
                      360° Tours (3)
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="group bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all duration-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between gap-space-sm">
                          <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono font-semibold uppercase">
                            Report
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            Saved Oct 14, 2024
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                          {" NCPOR-TR-2024-08: Micro-Meteorological Dynamics & Katabatic Wind Shear Profile "}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          {" High-frequency ultrasonic anemometer observations at Maitri station, Antarctica. Boundary layer stability and surface fluxes during austral winter. "}
                        </p>
                        <div className="p-space-xs bg-surface-container-lowest rounded text-on-surface-variant font-body-sm text-body-sm flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0 mt-0.5">
                            sticky_note_2
                          </span>
                          <span className="italic text-[12px] leading-tight">
                            "Used for Grade 11 physics cryosphere fluid dynamics module."
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant">
                        <div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                          <span className="material-symbols-outlined text-[16px]">
                            label
                          </span>
                          {"Atmosphere, Maitri "}
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Rename Resource">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              edit
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Share with students">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              share
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface transition-colors" title="Delete bookmark">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="group bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all duration-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between gap-space-sm">
                          <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-mono text-label-mono font-semibold uppercase">
                            Expedition
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            Saved Oct 10, 2024
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                          {" 43rd Indian Antarctic Expedition (Maitri Station Overwinter) "}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          {" Official operational logistics dossier, member logs, scientific payload schedule, and environmental stewardship protocols. "}
                        </p>
                        <div className="p-space-xs bg-surface-container-lowest rounded text-on-surface-variant font-body-sm text-body-sm flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0 mt-0.5">
                            sticky_note_2
                          </span>
                          <span className="italic text-[12px] leading-tight">
                            "Referenced for Polar Day school live-link Q&A setup."
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant">
                        <div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                          <span className="material-symbols-outlined text-[16px]">
                            label
                          </span>
                          {"Operations, 43-IAE "}
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Rename Resource">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              edit
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Share">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              share
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface transition-colors" title="Delete">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="group bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all duration-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between gap-space-sm">
                          <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-mono text-label-mono font-semibold uppercase">
                            Virtual Tour
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            Saved Sep 28, 2024
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                          {" 360° Field Tour: Maitri Station & Schirmacher Oasis "}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          {" Interactive panoramic walkthrough through the main living quarters, geomagnetic shelter, balloon launch bay, and Lake Priyadarshini water pump. "}
                        </p>
                        <div className="p-space-xs bg-surface-container-lowest rounded text-on-surface-variant font-body-sm text-body-sm flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0 mt-0.5">
                            sticky_note_2
                          </span>
                          <span className="italic text-[12px] leading-tight">
                            "Interactive lab session demo for Class 9 geography."
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant">
                        <div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                          <span className="material-symbols-outlined text-[16px]">
                            label
                          </span>
                          {"360-Virtual, Oasis "}
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Rename Resource">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              edit
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Share">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              share
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface transition-colors" title="Delete">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="group bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all duration-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between gap-space-sm">
                          <span className="px-2 py-0.5 rounded bg-surface-variant text-on-surface font-label-mono text-label-mono font-semibold uppercase">
                            Dispatch
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            Saved Sep 12, 2024
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                          {" Story: Overwintering in the Schirmacher Oasis by Dr. A. Sen "}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          {" Personal diaries, psychological adaptations during 105 days of polar night, and unexpected auroral displays over the Russian Novolazarevskaya frontier. "}
                        </p>
                        <div className="p-space-xs bg-surface-container-lowest rounded text-on-surface-variant font-body-sm text-body-sm flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0 mt-0.5">
                            sticky_note_2
                          </span>
                          <span className="italic text-[12px] leading-tight">
                            "Inspirational reading list for school science club."
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant">
                        <div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                          <span className="material-symbols-outlined text-[16px]">
                            label
                          </span>
                          {"Polar-Night, Memoirs "}
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Rename Resource">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              edit
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Share">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              share
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface transition-colors" title="Delete">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="group bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all duration-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between gap-space-sm">
                          <span className="px-2 py-0.5 rounded bg-primary-fixed-dim text-on-primary-fixed-variant font-label-mono text-label-mono font-semibold uppercase">
                            Data Stream
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            Saved Aug 29, 2024
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                          {" IndARC Arctic Deep Ocean Mooring Telemetry Stream (Kongsfjorden) "}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          {" Multi-depth temperature, salinity, water column velocity vectors, and chlorophyll luminescence at 78°59′ N in Svalbard Archipelago. "}
                        </p>
                        <div className="p-space-xs bg-surface-container-lowest rounded text-on-surface-variant font-body-sm text-body-sm flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0 mt-0.5">
                            sticky_note_2
                          </span>
                          <span className="italic text-[12px] leading-tight">
                            "Ocean salinity gradient case study for STEM workshop."
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant">
                        <div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                          <span className="material-symbols-outlined text-[16px]">
                            label
                          </span>
                          {"IndARC, Oceanography "}
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Rename Resource">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              edit
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Share">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              share
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface transition-colors" title="Delete">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="group bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all duration-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-space-xs">
                        <div className="flex items-center justify-between gap-space-sm">
                          <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold uppercase">
                            Monograph
                          </span>
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            Saved Jul 17, 2024
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                          {" Glaciology & Mass Balance in Chandra Basin (Himansh Base) "}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                          {" High-altitude Himalayan cryospheric retreat assessment in Spiti Valley, Himachal Pradesh. DGPS benchmark measurements and ablation stakes data. "}
                        </p>
                        <div className="p-space-xs bg-surface-container-lowest rounded text-on-surface-variant font-body-sm text-body-sm flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0 mt-0.5">
                            sticky_note_2
                          </span>
                          <span className="italic text-[12px] leading-tight">
                            "Third Pole melting rate comparative discussion."
                          </span>
                        </div>
                      </div>
                      <div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant">
                        <div className="flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                          <span className="material-symbols-outlined text-[16px]">
                            label
                          </span>
                          {"Himalaya, Glaciology "}
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Rename Resource">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              edit
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface transition-colors" title="Share">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              share
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface transition-colors" title="Delete">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-xs flex items-center justify-center">
                    <button className="flex items-center gap-space-xs px-space-lg py-2.5 rounded bg-surface-container-low hover:bg-surface-container-high text-primary font-title-md text-title-md transition-colors">
                      {" "}
                      <span>
                        View All 18 Saved Bookmarks
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_downward
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md" id="searches-section">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Saved Searches & Automated Alerts
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Continuous NCPOR repository crawlers deliver notification pings when matching expedition datasets are logged.
                      </p>
                    </div>
                    <button className="px-space-md py-1.5 rounded bg-surface-container-low hover:bg-surface-container-high text-primary font-title-md text-title-md flex items-center gap-1 self-start sm:self-auto transition-colors">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        add
                      </span>
                      {"New Query Filter "}
                    </button>
                  </div>
                  <div className="space-y-space-sm">
                    <div className="p-space-md bg-surface-container-low/60 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-space-sm flex-wrap">
                          <span className="font-title-md text-title-md text-on-surface font-bold">
                            Query: "katabatic winds Maitri 10Hz anemometer"
                          </span>
                          <span className="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary font-label-mono text-label-mono font-semibold">
                            +14 new records
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant flex-wrap">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              schedule
                            </span>
                            Cadence: Daily Digest
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              mark_email_read
                            </span>
                            Sent to: rohan.sen@kvs.edu.in
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-lg flex-shrink-0 w-full md:w-auto justify-between md:justify-end">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                            Alerts:
                          </span>
                          <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full bg-primary-container p-0.5 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
                            {" "}
                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-on-primary shadow ring-0 transition duration-200 ease-in-out" />
                            {" "}
                          </button>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="px-space-sm py-1.5 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm transition-colors">
                            Run Search
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface-variant transition-colors" title="Edit Parameters">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              tune
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface-variant transition-colors" title="Delete Search">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              close
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-low/60 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-space-sm flex-wrap">
                          <span className="font-title-md text-title-md text-on-surface font-bold">
                            Query: "Kongsfjorden salinity CTD sensor 2024"
                          </span>
                          <span className="px-2 py-0.5 rounded bg-tertiary/15 text-tertiary font-label-mono text-label-mono font-semibold">
                            +3 new records
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant flex-wrap">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              bolt
                            </span>
                            Cadence: Instant Alert
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              mark_email_read
                            </span>
                            Sent to: rohan.sen@kvs.edu.in
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-lg flex-shrink-0 w-full md:w-auto justify-between md:justify-end">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                            Alerts:
                          </span>
                          <button aria-checked="true" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full bg-primary-container p-0.5 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
                            {" "}
                            <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-on-primary shadow ring-0 transition duration-200 ease-in-out" />
                            {" "}
                          </button>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="px-space-sm py-1.5 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm transition-colors">
                            Run Search
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface-variant transition-colors" title="Edit Parameters">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              tune
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface-variant transition-colors" title="Delete Search">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              close
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container-low/60 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-space-sm flex-wrap">
                          <span className="font-title-md text-title-md text-on-surface font-bold">
                            Query: "Southern Ocean SOE expedition cruise logs"
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-mono text-label-mono font-semibold">
                            0 new records
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant flex-wrap">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-primary">
                              event_repeat
                            </span>
                            Cadence: Weekly Digest
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-outline">
                              notifications_off
                            </span>
                            Paused notifications
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-lg flex-shrink-0 w-full md:w-auto justify-between md:justify-end">
                        <div className="flex items-center gap-space-xs">
                          <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                            Alerts:
                          </span>
                          <button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full bg-surface-container-highest p-0.5 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" type="button">
                            {" "}
                            <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-surface-container-lowest shadow ring-0 transition duration-200 ease-in-out" />
                            {" "}
                          </button>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="px-space-sm py-1.5 rounded bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm transition-colors">
                            Run Search
                          </button>
                          <button className="p-1.5 rounded hover:bg-surface-container-highest text-on-surface-variant transition-colors" title="Edit Parameters">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              tune
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 rounded hover:bg-error-container hover:text-error text-on-surface-variant transition-colors" title="Delete Search">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              close
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-lg" id="badges-section">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary-container text-[26px]">
                          military_tech
                        </span>
                        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                          Polar Explorer Quiz Badges & Certifications
                        </h2>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Validated badges earned across MoES Antarctic, Arctic, and Himalayan open knowledge challenges.
                      </p>
                    </div>
                    <a className="font-label-mono text-label-mono text-primary font-semibold hover:underline flex items-center gap-1" href="#" onClick={(e)=>e.preventDefault()}>
                      {" Public Badges Portfolio "}
                      <span className="material-symbols-outlined text-[16px]">
                        open_in_new
                      </span>
                      {" "}
                    </a>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-space-sm">
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col items-center text-center space-y-space-xs transition-transform hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-primary-container/15 flex items-center justify-center text-primary-container shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">
                          ac_unit
                        </span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold text-center leading-tight">
                        Cryosphere Scout
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        12 Nov 2023
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col items-center text-center space-y-space-xs transition-transform hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">
                          domain
                        </span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold text-center leading-tight">
                        Station Engineer
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        04 Dec 2023
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col items-center text-center space-y-space-xs transition-transform hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">
                          air
                        </span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold text-center leading-tight">
                        Katabatic Master
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        18 Jan 2024
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col items-center text-center space-y-space-xs transition-transform hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">
                          waves
                        </span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold text-center leading-tight">
                        Arctic Hydrographer
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        22 Feb 2024
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col items-center text-center space-y-space-xs transition-transform hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">
                          hardware
                        </span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold text-center leading-tight">
                        Glacier Corer
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        15 Mar 2024
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col items-center text-center space-y-space-xs transition-transform hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">
                          pets
                        </span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold text-center leading-tight">
                        Penguin Biologist
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        10 Apr 2024
                      </span>
                    </div>
                    <div className="p-space-sm bg-surface-container-low rounded-xl flex flex-col items-center text-center space-y-space-xs transition-transform hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary-container shadow-sm">
                        <span className="material-symbols-outlined text-[28px]">
                          flare
                        </span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold text-center leading-tight">
                        Aurora Watcher
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        29 May 2024
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="space-y-1 w-full sm:w-auto">
                      <div className="flex items-center gap-2">
                        <span className="font-title-md text-title-md text-on-surface font-bold">
                          Next Credential: Triple Pole Pioneer
                        </span>
                        <span className="font-label-mono text-label-mono text-primary font-bold">
                          85% Complete
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Complete 1 remaining quiz: "}
                        <span className="font-semibold text-on-surface">
                          "Southern Ocean Biogeochemical Carbon Pump"
                        </span>
                        .
                      </p>
                    </div>
                    <div className="w-full sm:w-64 flex flex-col items-end gap-1">
                      <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                        <div className="bg-primary-container h-full rounded-full" style={{"width": "85%"}} />
                      </div>
                      <a className="font-label-mono text-label-mono text-primary-container font-semibold hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                        Resume Quiz →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md" id="collections-section">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      Dossiers & Curated Collections
                    </h2>
                    <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                      Empty State Variant
                    </span>
                  </div>
                  <div className="p-space-xl bg-surface-container-low/40 rounded-xl flex flex-col items-center justify-center text-center space-y-space-sm py-16">
                    <div className="w-20 h-20 rounded-2xl bg-surface-container-highest/60 flex items-center justify-center text-primary-container shadow-sm">
                      <svg className="text-primary-container" fill="none" height="44" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="44">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="3" strokeDasharray="2 2" />
                        <line x1="12" x2="12" y1="10" y2="16" />
                      </svg>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold pt-2">
                      No Curated Collections Yet
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                      {" Group your 18 saved bookmarks and telemetry streams into thematic study dossiers, classroom curriculum packs, or student field guides. "}
                    </p>
                    <div className="pt-space-sm">
                      <button className="flex items-center gap-space-xs px-space-lg py-2.5 rounded bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md transition-colors shadow-sm">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          add
                        </span>
                        {"Create First Collection "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-lg" id="preferences-section">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                      Display & Accessibility Preferences
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Customize your scientific workstation layout, localized interface dialects, and telemetry physical units.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                    <div className="space-y-space-xs">
                      <label className="font-title-md text-title-md text-on-surface font-semibold block">
                        Portal Language
                      </label>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Select localized research interface.
                      </p>
                      <div className="space-y-1.5 pt-space-xs">
                        <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                          {" "}
                          <input defaultChecked="" className="text-primary focus:ring-primary h-4 w-4" name="pref_lang" type="radio" />
                          {" "}
                          <span className="font-body-md text-body-md text-on-surface font-medium">
                            English (Default)
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                          {" "}
                          <input className="text-primary focus:ring-primary h-4 w-4" name="pref_lang" type="radio" />
                          {" "}
                          <span className="font-body-md text-body-md text-on-surface">
                            Hindi (हिंदी)
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                          {" "}
                          <input className="text-primary focus:ring-primary h-4 w-4" name="pref_lang" type="radio" />
                          {" "}
                          <span className="font-body-md text-body-md text-on-surface">
                            Marathi (मराठी)
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                          {" "}
                          <input className="text-primary focus:ring-primary h-4 w-4" name="pref_lang" type="radio" />
                          {" "}
                          <span className="font-body-md text-body-md text-on-surface">
                            Tamil (தமிழ்)
                          </span>
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div className="space-y-space-xs">
                      <label className="font-title-md text-title-md text-on-surface font-semibold block">
                        Typography & Scale
                      </label>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Adjust font legibility for field displays.
                      </p>
                      <div className="space-y-1.5 pt-space-xs">
                        <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                          {" "}
                          <input className="text-primary focus:ring-primary h-4 w-4" name="pref_scale" type="radio" />
                          {" "}
                          <span className="font-body-md text-body-md text-on-surface">
                            Standard (100% - Default)
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-space-sm p-space-sm bg-secondary-container/40 rounded-lg cursor-pointer transition-colors">
                          {" "}
                          <input defaultChecked="" className="text-primary focus:ring-primary h-4 w-4" name="pref_scale" type="radio" />
                          {" "}
                          <span className="font-body-md text-body-md text-on-surface font-semibold">
                            Comfortable (115%)
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                          {" "}
                          <input className="text-primary focus:ring-primary h-4 w-4" name="pref_scale" type="radio" />
                          {" "}
                          <span className="font-body-md text-body-md text-on-surface">
                            High Contrast Large (130%)
                          </span>
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div className="space-y-space-xs">
                      <label className="font-title-md text-title-md text-on-surface font-semibold block">
                        Telemetry Metric Units
                      </label>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Format scientific instrument streams.
                      </p>
                      <div className="space-y-1.5 pt-space-xs">
                        <label className="flex items-center gap-space-sm p-space-sm bg-secondary-container/40 rounded-lg cursor-pointer transition-colors">
                          {" "}
                          <input defaultChecked="" className="text-primary focus:ring-primary h-4 w-4" name="pref_units" type="radio" />
                          {" "}
                          <div>
                            <span className="font-body-md text-body-md text-on-surface font-semibold block">
                              Metric SI Units
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant">
                              °C, m/s, hPa, PSU
                            </span>
                          </div>
                          {" "}
                        </label>
                        <label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                          {" "}
                          <input className="text-primary focus:ring-primary h-4 w-4" name="pref_units" type="radio" />
                          {" "}
                          <div>
                            <span className="font-body-md text-body-md text-on-surface block">
                              Nautical / Imperial
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant">
                              °F, Knots, inHg
                            </span>
                          </div>
                          {" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-end gap-space-sm">
                    <button className="px-space-md py-2 rounded bg-surface-container-low hover:bg-surface-container-high text-on-surface font-title-md text-title-md transition-colors">
                      Reset Defaults
                    </button>
                    <button className="px-space-lg py-2 rounded bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md transition-colors shadow-sm">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low py-space-xl mt-space-xl shadow-[0_-1px_6px_rgba(7,28,54,0.02)]">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
            <div className="space-y-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  ac_unit
                </span>
                <span className="font-title-md text-title-md font-bold text-on-surface">
                  POLARIS PORTAL
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Government of India. Headquartered at Headland Sada, Vasco-da-Gama, Goa.
              </p>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  verified
                </span>
                <span className="font-label-mono text-label-mono text-on-surface">
                  Official National Research Facility
                </span>
              </div>
            </div>
            <div className="space-y-space-sm">
              <h3 className="font-label-md text-label-md uppercase text-on-surface font-semibold">
                Scientific Divisions
              </h3>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Antarctic Operations & Science
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Arctic Environmental Studies
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Himalayan Cryosphere Observatory
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Southern Ocean Paleoclimatology
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Polar Deep-Sea Geosciences
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <h3 className="font-label-md text-label-md uppercase text-on-surface font-semibold">
                Permanent Stations
              </h3>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-on-surface transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Maitri (Antarctica)
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary">
                      ONLINE
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Bharati (Larsemann Hills)
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary">
                      ONLINE
                    </span>
                  </a>
                </li>
                <li>
                  <Link className="hover:text-on-surface transition-colors flex items-center justify-between" to="/base-stations/himadri">
                    <span>
                      Himadri (Svalbard, Arctic)
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary">
                      ONLINE
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Himansh (Spiti, Himalaya)
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary">
                      ONLINE
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      IndARC Mooring (Kongsfjorden)
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary">
                      LOGGING
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <h3 className="font-label-md text-label-md uppercase text-on-surface font-semibold">
                Outreach & Disclaimers
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Atmospheric data, telemetry feeds, and expedition records are verified under NCPOR observational standards for open scientific dissemination.
              </p>
              <div className="pt-space-xs flex flex-col gap-space-xs">
                <Link className="font-label-mono text-label-mono text-primary hover:underline" to="/data">
                  Data Release Guidelines (v3.2)
                </Link>
                <a className="font-label-mono text-label-mono text-primary hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                  Antarctic Treaty Environmental Audit
                </a>
              </div>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-label-mono text-label-mono">
            <p>
              © 2025 National Centre for Polar and Ocean Research. Ministry of Earth Sciences, Govt. of India. All rights reserved.
            </p>
            <div className="flex items-center gap-space-md">
              <Link className="hover:text-on-surface" to="/data">
                Terms of Data Use
              </Link>
              <a className="hover:text-on-surface" href="#" onClick={(e)=>e.preventDefault()}>
                Privacy Policy
              </a>
              <Link className="hover:text-on-surface" to="/about/accessibility">
                Accessibility
              </Link>
              <a className="hover:text-on-surface" href="#" onClick={(e)=>e.preventDefault()}>
                Site Map
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
