import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_tag_vocabulary_and_duplicate_manager_admin_tags/code.html
const BODY_CLASS = "bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function AdminTagsPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-screen w-60 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="px-space-md py-space-md bg-surface-container-lowest">
            <div className="flex items-center gap-space-xs">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold tracking-tight">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface leading-tight">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider text-[9px]">
                  NCPOR • MoES INDIA
                </span>
              </div>
            </div>
          </div>
          <nav className="flex-1 px-space-xs py-space-xs space-y-space-md" data-active-classes="bg-secondary-container text-on-secondary-container font-semibold">
            <div className="space-y-1">
              <span className="px-space-sm font-label-mono text-label-mono uppercase text-outline tracking-wider block">
                Operations & Science
              </span>
              <div className="space-y-0.5">
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="dashboard" to="/admin">
                  <span className="material-symbols-outlined text-[18px]">
                    grid_view
                  </span>
                  <span>
                    Dashboard
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="expeditions" to="/expeditions/soe-01">
                  <span className="material-symbols-outlined text-[18px]">
                    explore
                  </span>
                  <span>
                    Expeditions
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="field-diary" to="/admin/field-diary">
                  <span className="material-symbols-outlined text-[18px]">
                    satellite_alt
                  </span>
                  <span>
                    Field Diary & Telemetry
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="upload" to="/admin/upload">
                  <span className="material-symbols-outlined text-[18px]">
                    cloud_upload
                  </span>
                  <span>
                    Upload
                  </span>
                </Link>
                <a className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="ai-queue" href="#" onClick={(e)=>e.preventDefault()}>
                  <span className="material-symbols-outlined text-[18px]">
                    auto_awesome
                  </span>
                  <span>
                    AI Queue
                  </span>
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <span className="px-space-sm font-label-mono text-label-mono uppercase text-outline tracking-wider block">
                Editorial Studio
              </span>
              <div className="space-y-0.5">
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="content-studio" to="/admin/studio">
                  <span className="material-symbols-outlined text-[18px]">
                    edit_note
                  </span>
                  <span>
                    Content Studio
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="review-desk" to="/admin/review">
                  <span className="material-symbols-outlined text-[18px]">
                    rate_review
                  </span>
                  <span>
                    Review Desk
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="publishing" to="/admin/publishing">
                  <span className="material-symbols-outlined text-[18px]">
                    publish
                  </span>
                  <span>
                    Publishing
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="media-library" to="/admin/media">
                  <span className="material-symbols-outlined text-[18px]">
                    perm_media
                  </span>
                  <span>
                    Media Library
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="stories-website" to="/admin/content">
                  <span className="material-symbols-outlined text-[18px]">
                    article
                  </span>
                  <span>
                    Stories & Website
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="translation-audio" to="/admin/translation">
                  <span className="material-symbols-outlined text-[18px]">
                    record_voice_over
                  </span>
                  <span>
                    Translation & Audio
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="tags-duplicates" to="/admin/tags">
                  <span className="material-symbols-outlined text-[18px]">
                    sell
                  </span>
                  <span>
                    Tags & Duplicates
                  </span>
                </Link>
              </div>
            </div>
            <div className="space-y-1">
              <span className="px-space-sm font-label-mono text-label-mono uppercase text-outline tracking-wider block">
                Outreach & Delivery
              </span>
              <div className="space-y-0.5">
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="education-manager" to="/admin/education">
                  <span className="material-symbols-outlined text-[18px]">
                    school
                  </span>
                  <span>
                    Education Manager
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="events-inbox" to="/admin/events-inbox">
                  <span className="material-symbols-outlined text-[18px]">
                    forward_to_inbox
                  </span>
                  <span>
                    Events & Inbox
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="social-channels" to="/admin/social">
                  <span className="material-symbols-outlined text-[18px]">
                    share
                  </span>
                  <span>
                    Social Channels
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="rights-integrations" to="/admin/rights">
                  <span className="material-symbols-outlined text-[18px]">
                    policy
                  </span>
                  <span>
                    Rights & Integrations
                  </span>
                </Link>
              </div>
            </div>
            <div className="space-y-1">
              <span className="px-space-sm font-label-mono text-label-mono uppercase text-outline tracking-wider block">
                Governance & Control
              </span>
              <div className="space-y-0.5">
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="analytics" to="/admin/analytics">
                  <span className="material-symbols-outlined text-[18px]">
                    insights
                  </span>
                  <span>
                    Analytics
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="notifications" to="/admin/notifications">
                  <span className="material-symbols-outlined text-[18px]">
                    notifications
                  </span>
                  <span>
                    Notifications
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="users" to="/admin/users">
                  <span className="material-symbols-outlined text-[18px]">
                    group
                  </span>
                  <span>
                    Users
                  </span>
                </Link>
                <Link className="flex items-center gap-2 px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="settings-profile" to="/admin/profile">
                  <span className="material-symbols-outlined text-[18px]">
                    manage_accounts
                  </span>
                  <span>
                    Settings / Profile
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="p-space-sm bg-surface-container-low m-space-xs rounded-lg">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-title-md text-body-sm font-semibold text-on-surface truncate">
                Dr. Ananya Sen
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant truncate">
                Lead Scientist • Lvl 4
              </span>
            </div>
          </div>
        </div>
      </aside>
      <div className="pl-60 flex flex-col min-h-screen bg-[#F6F9FC]">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-md">
          <div className="h-16 flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low font-label-mono text-label-mono text-on-surface">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
                </span>
                <span className="font-semibold tracking-wider text-[10px]">
                  HIMADRI TELEMETRY ONLINE
                </span>
              </div>
              <div className="relative w-80">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                  search
                </span>
                <input className="w-full pl-9 pr-4 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container" placeholder="Command Search (Cmd+K)" readOnly="" type="text" />
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono uppercase tracking-wider text-[10px]">
                ROLE: SCIENTIST / EDITOR / ADMIN [S, E, A]
              </span>
              <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error" />
              </button>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[18px]">
                  person
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="relative pt-16 flex-1 w-full max-w-[1440px] mx-auto px-space-md py-space-md">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-space-sm mb-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                    POLARIS TAXONOMY ENGINE
                  </span>
                  <span className="text-outline-variant font-label-mono">
                    /
                  </span>
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                    CONTROLLED SCIENTIFIC VOCABULARY
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-bold">
                    AUTH [S, E, A]
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-space-xs">
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest shadow-sm text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm font-medium" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      schema
                    </span>
                    {" "}
                    <span>
                      Download SKOS/RDF (XML)
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest shadow-sm text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm font-medium" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      file_download
                    </span>
                    {" "}
                    <span>
                      Export Synonyms (CSV)
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all font-body-sm text-body-sm font-semibold shadow-sm" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    {" "}
                    <span>
                      New Controlled Concept
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="flex flex-col max-w-4xl">
                <h1 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
                  Tag Vocabulary & Duplicate Manager
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Standardize scientific taxonomies across cryospheric datasets and stories, curate controlled synonyms, triage automated AI taxonomy suggestions, and resolve potential duplicates with NPDC integration.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-lg">
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                    Active Concepts
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-low text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      account_tree
                    </span>
                  </div>
                </div>
                <div className="mt-space-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">
                      1,842
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary font-medium">
                      +38 this mo
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-outline mt-0.5">
                    Controlled & Standardized
                  </p>
                </div>
                <div className="mt-3 w-full bg-surface-container-low rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{"width": "86%"}} />
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                    AI Suggestions
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-low text-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      auto_awesome
                    </span>
                  </div>
                </div>
                <div className="mt-space-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">
                      18 Pending
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-outline mt-0.5">
                    {"Polaris-SciLLM conf > 92%"}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 font-label-mono text-label-mono text-primary font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                  <span>
                    8 ready for fast-track batch
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                    Duplicate Clusters
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-error-container text-error flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      layers
                    </span>
                  </div>
                </div>
                <div className="mt-space-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface">
                      7 Detected
                    </span>
                    <span className="font-label-mono text-label-mono text-error font-medium">
                      4 urgent
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-outline mt-0.5">
                    {"High-similarity index (>95%)"}
                  </p>
                </div>
                <div className="mt-3 w-full bg-surface-container-low rounded-full h-1.5 overflow-hidden">
                  <div className="bg-error h-full rounded-full" style={{"width": "57%"}} />
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                    NPDC Repo Sync
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-surface-container-low text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      verified_user
                    </span>
                  </div>
                </div>
                <div className="mt-space-sm">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline-md text-headline-md font-bold text-tertiary">
                      100% Synced
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-outline mt-0.5">
                    National Polar Data Centre linked
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-1.5 font-label-mono text-label-mono text-tertiary font-medium">
                  <span className="material-symbols-outlined text-[15px]">
                    sync_saved_locally
                  </span>
                  <span>
                    Gateway active • ping 24ms
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
              <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col p-space-lg">
                <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">
                        account_tree
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Scientific Concept Hierarchy
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Thesaurus & Controlled Facets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-mono text-[10px] font-semibold tracking-wider">
                      ISO 25964 COMPLIANT
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs mb-space-md">
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      search
                    </span>
                    <input className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-colors" placeholder="Filter terms (e.g. Fast Ice, Katabatic, Nunatak)..." type="text" defaultValue="Cryosphere" />
                  </div>
                  <button className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant transition-colors" title="Filter options" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      tune
                    </span>
                    {" "}
                  </button>
                </div>
                <div className="flex items-center justify-between px-space-xs mb-2">
                  <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                    Showing 38 Cryosphere concepts
                  </span>
                  <button className="font-label-mono text-label-mono text-primary hover:underline font-semibold" type="button">
                    Expand All
                  </button>
                </div>
                <div className="bg-surface rounded-xl p-space-sm space-y-1 overflow-y-auto max-h-[380px]">
                  <div className="rounded-lg bg-surface-container-low p-2">
                    <div className="flex items-center justify-between cursor-pointer select-none">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          folder_open
                        </span>
                        <span className="font-title-md text-body-sm font-semibold text-on-surface">
                          Cryosphere & Glaciation
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-[10px]">
                          482 assets
                        </span>
                      </div>
                      <span className="font-label-mono text-[11px] text-outline">
                        URI: /cryo
                      </span>
                    </div>
                    <div className="ml-6 pl-3 mt-2 space-y-1.5">
                      <div className="bg-surface-container-lowest rounded-lg p-2 shadow-sm">
                        <div className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              expand_more
                            </span>
                            <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                              Sea Ice Dynamics
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-mono text-[10px]">
                              142 assets
                            </span>
                          </div>
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            more_vert
                          </span>
                        </div>
                        <div className="ml-6 pl-2 mt-2 space-y-1.5">
                          <div className="flex flex-col p-2.5 rounded-lg bg-secondary-container/40">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span className="font-body-sm text-body-sm font-bold text-on-surface">
                                  Fast Ice
                                </span>
                                <span className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-primary font-label-mono text-[10px] font-semibold">
                                  SELECTED CONCEPT
                                </span>
                              </div>
                              <span className="font-label-mono text-[11px] text-on-secondary-container">
                                84 occurrences
                              </span>
                            </div>
                            <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-on-surface-variant">
                              <span className="font-label-mono text-label-mono text-[10px] uppercase text-outline">
                                Curated Synonyms:
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-body-sm text-[11px]">
                                Shore-fast ice
                              </span>
                              <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-on-surface font-body-sm text-[11px]">
                                Landfast ice
                              </span>
                              <button className="p-0.5 rounded hover:bg-surface text-primary" title="Add synonym">
                                {" "}
                                <span className="material-symbols-outlined text-[14px]">
                                  add
                                </span>
                                {" "}
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-surface hover:bg-surface-container-low transition-colors">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                              <span className="font-body-sm text-body-sm text-on-surface">
                                Frail Ice / Frazil
                              </span>
                              <span className="font-label-mono text-[11px] text-outline-variant">
                                • 28 assets
                              </span>
                            </div>
                            <span className="font-label-mono text-[10px] text-outline">
                              Syn: Pancake ice (early)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest rounded-lg p-2 shadow-sm">
                        <div className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              expand_more
                            </span>
                            <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                              Glacial Landforms & Outcrops
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-mono text-[10px]">
                              94 assets
                            </span>
                          </div>
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            more_vert
                          </span>
                        </div>
                        <div className="ml-6 pl-2 mt-2 space-y-1">
                          <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-low">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                              <span className="font-body-sm text-body-sm text-on-surface">
                                Nunatak
                              </span>
                              <span className="font-label-mono text-[10px] text-outline">
                                [Syn: Glacial island, Isolated peak]
                              </span>
                            </div>
                            <span className="font-label-mono text-[10px] text-on-surface-variant">
                              53 assets
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-low">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                              <span className="font-body-sm text-body-sm text-on-surface">
                                Moraine & Till Systems
                              </span>
                            </div>
                            <span className="font-label-mono text-[10px] text-on-surface-variant">
                              41 assets
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest rounded-lg p-2 shadow-sm">
                        <div className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              expand_more
                            </span>
                            <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                              Atmospheric Boundary
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-mono text-[10px]">
                              124 assets
                            </span>
                          </div>
                        </div>
                        <div className="ml-6 pl-2 mt-2">
                          <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-low">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                              <span className="font-body-sm text-body-sm text-on-surface">
                                Katabatic Wind
                              </span>
                              <span className="font-label-mono text-[10px] text-outline">
                                [Syn: Gravity wind, Fall wind]
                              </span>
                            </div>
                            <span className="font-label-mono text-[10px] text-on-surface-variant">
                              97 assets
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-space-md p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        radio_button_checked
                      </span>
                      <span className="font-body-sm text-body-sm font-bold text-on-surface">
                        Fast Ice (Shore-fast ice)
                      </span>
                      <span className="font-label-mono text-[11px] text-outline">
                        URI: ncpor.res.in/voc/cryo/0419
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary font-label-mono text-[10px] font-bold">
                      STATUS: AUTHORITATIVE
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <button className="px-2.5 py-1.5 rounded bg-surface-container-lowest hover:bg-surface text-on-surface font-body-sm text-[12px] font-medium transition-colors shadow-sm" type="button">
                        {" Add Synonym "}
                      </button>
                      <button className="px-2.5 py-1.5 rounded bg-surface-container-lowest hover:bg-surface text-on-surface font-body-sm text-[12px] font-medium transition-colors shadow-sm" type="button">
                        {" Merge Concept "}
                      </button>
                      <button className="px-2.5 py-1.5 rounded bg-surface-container-lowest hover:bg-surface text-on-surface font-body-sm text-[12px] font-medium transition-colors shadow-sm" type="button">
                        {" Rename "}
                      </button>
                      <button className="px-2.5 py-1.5 rounded bg-surface-container-lowest hover:bg-error-container text-error font-body-sm text-[12px] font-medium transition-colors shadow-sm" type="button">
                        {" Deprecate "}
                      </button>
                    </div>
                    <button className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary shadow-sm transition-all ml-auto" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        save
                      </span>
                      {" "}
                      <span>
                        Save Vocabulary Changes
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl shadow-sm flex flex-col p-space-lg">
                <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">
                        auto_awesome
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        AI Concept Suggestions Queue
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Polaris-SciLLM v3 Candidate Pipeline
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-primary-container font-label-mono text-[10px] font-bold">
                    18 QUEUED
                  </span>
                </div>
                <div className="flex items-center justify-between px-1 mb-2">
                  <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                    High Confidence Extractions
                  </span>
                  <button className="font-label-mono text-label-mono text-primary hover:underline" type="button">
                    Triage Filters
                  </button>
                </div>
                <div className="space-y-3 flex-1 overflow-y-auto max-h-[460px] pr-1">
                  <div className="p-space-sm rounded-xl bg-surface hover:bg-surface-container-low/70 transition-all flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-body-sm font-bold text-on-surface">
                            Cryoconite Hole Ecosystems
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[9px] font-bold uppercase">
                            New Concept
                          </span>
                        </div>
                        <p className="font-body-sm text-[12px] text-outline mt-0.5">
                          {"Suggested Parent: "}
                          <span className="text-on-surface font-medium">
                            {"Cryosphere > Supraglacial Ecology"}
                          </span>
                        </p>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] font-bold shrink-0">
                        96.4% CONF
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest font-body-sm text-[12px] text-on-surface-variant flex items-center justify-between">
                      <span className="truncate">
                        Context: Biological Survey - Schirmacher Oasis 2024
                      </span>
                      <span className="font-label-mono text-[10px] text-outline shrink-0 ml-2">
                        3 matches
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-[12px] font-semibold transition-colors" type="button">
                        {" Accept & Add to Tree "}
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-[12px] font-medium transition-colors" type="button">
                        {" Map Existing "}
                      </button>
                      <button className="p-1.5 rounded-lg text-outline hover:text-error hover:bg-error-container/30 transition-colors" title="Dismiss suggestion" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          close
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-xl bg-surface hover:bg-surface-container-low/70 transition-all flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-body-sm font-bold text-on-surface">
                            Priyadarshini Water Basin
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-[9px] font-bold uppercase">
                            Synonym Link
                          </span>
                        </div>
                        <p className="font-body-sm text-[12px] text-outline mt-0.5">
                          {"Proposed map target: "}
                          <span className="text-primary font-semibold">
                            Lake Priyadarshini
                          </span>
                        </p>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] font-bold shrink-0">
                        94.8% CONF
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest font-body-sm text-[12px] text-on-surface-variant flex items-center justify-between">
                      <span className="truncate">
                        Context: Maitri AWS Hydrology Report
                      </span>
                      <span className="font-label-mono text-[10px] text-outline shrink-0 ml-2">
                        5 matches
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-[12px] font-semibold transition-colors" type="button">
                        {" Approve Synonym Link "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-[12px] font-medium transition-colors" type="button">
                        {" Reject "}
                      </button>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-xl bg-surface hover:bg-surface-container-low/70 transition-all flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-title-md text-body-sm font-bold text-on-surface">
                            IndARC Acoustic Telemetry Array
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[9px] font-bold uppercase">
                            Arctic Moorings
                          </span>
                        </div>
                        <p className="font-body-sm text-[12px] text-outline mt-0.5">
                          {"Suggested Parent: "}
                          <span className="text-on-surface font-medium">
                            {"Ocean Observation > Subsurface Mooring"}
                          </span>
                        </p>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-secondary-fixed text-on-secondary-container font-label-mono text-[10px] font-bold shrink-0">
                        91.2% CONF
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest font-body-sm text-[12px] text-on-surface-variant flex items-center justify-between">
                      <span className="truncate">
                        Context: Kongsfjorden Mooring Servicing Dispatch
                      </span>
                      <span className="font-label-mono text-[10px] text-outline shrink-0 ml-2">
                        2 matches
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <button className="flex-1 py-1.5 rounded-lg bg-surface-container-highest hover:bg-primary-container hover:text-on-primary text-on-surface text-[12px] font-semibold transition-colors" type="button">
                        {" Accept Concept "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-outline text-[12px] font-medium transition-colors" type="button">
                        {" Dismiss "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-space-md pt-space-xs">
                  <button className="w-full py-2.5 px-4 rounded-xl bg-primary-container text-on-primary hover:bg-primary font-body-sm text-body-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      done_all
                    </span>
                    {" "}
                    <span>
                      {"Batch Approve High-Confidence (>95%) (8)"}
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg mb-space-lg flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-error-container text-error flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      compare_arrows
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">
                        Duplicate Resolution & Disambiguation Desk
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-error-container text-error font-label-mono text-[10px] font-bold">
                        CLUSTER #04 OF 07: HIGH SIMILARITY (96.8%)
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Two potential duplicates identified across expedition logs, media records, and metadata schemas.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-body-sm text-body-sm font-medium transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      chevron_left
                    </span>
                    {" "}
                    <span>
                      Previous
                    </span>
                    {" "}
                  </button>
                  <span className="font-label-mono text-label-mono font-semibold text-on-surface px-1">
                    Cluster 4 of 7
                  </span>
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-body-sm text-body-sm font-medium transition-colors" type="button">
                    {" "}
                    <span>
                      Next
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      chevron_right
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg my-space-xs">
                <div className="rounded-xl bg-surface p-space-md flex flex-col justify-between relative shadow-sm">
                  <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-primary text-on-primary font-label-mono text-[10px] font-bold tracking-wider uppercase">
                    {" Entity A: Authoritative Master (Older) "}
                  </div>
                  <div>
                    <div className="mt-2 mb-3">
                      <span className="font-label-mono text-[10px] text-outline uppercase tracking-wider">
                        Concept Dataset Title
                      </span>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface mt-0.5">
                        43rd IAE - Maitri Katabatic Wind Telemetry Baseline 2024
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-[12px] mb-3">
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          RECORD ID
                        </span>
                        <span className="font-mono font-semibold text-on-surface">
                          NCPOR-DATA-2024-KWB-01
                        </span>
                      </div>
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          INGESTION DATE
                        </span>
                        <span className="text-on-surface font-medium">
                          14 Feb 2024 (Dr. A. Sen)
                        </span>
                      </div>
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          DATA TYPE
                        </span>
                        <span className="text-on-surface">
                          Cryospheric NetCDF + Field Log
                        </span>
                      </div>
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          NPDC ACCESSION
                        </span>
                        <span className="text-tertiary font-bold font-mono">
                          NPDC-IND-77821
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2.5 font-body-sm text-[13px]">
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            pin_drop
                          </span>
                          {" Station Coordinates: "}
                        </span>
                        <span className="font-mono text-on-surface text-right font-medium">
                          Maitri (-70.7658° S, 11.7358° E)
                        </span>
                      </div>
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            label
                          </span>
                          {" Associated Taxonomies: "}
                        </span>
                        <div className="flex flex-wrap gap-1 justify-end max-w-xs">
                          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-mono text-[11px]">
                            Katabatic Wind
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-mono text-[11px]">
                            AWS Station #4
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-mono text-[11px]">
                            Schirmacher Oasis
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            folder_zip
                          </span>
                          {" Attached Assets: "}
                        </span>
                        <span className="font-mono text-on-surface">
                          14 files (320 MB telemetry)
                        </span>
                      </div>
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            history_edu
                          </span>
                          {" Editorial Citations: "}
                        </span>
                        <span className="text-on-surface font-semibold">
                          6 Outreach Stories • 2 Annual Reports
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 flex items-center justify-between font-label-mono text-label-mono text-tertiary">
                    <span className="flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>
                      {" Authoritative Canonical Master "}
                    </span>
                    <span className="text-outline">
                      Protected
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface p-space-md flex flex-col justify-between relative shadow-sm">
                  <div className="absolute -top-3 left-4 px-3 py-0.5 rounded-full bg-error text-on-error font-label-mono text-[10px] font-bold tracking-wider uppercase">
                    {" Entity B: Candidate Duplicate (Recent Sync) "}
                  </div>
                  <div>
                    <div className="mt-2 mb-3">
                      <span className="font-label-mono text-[10px] text-outline uppercase tracking-wider">
                        Concept Ingestion Title
                      </span>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface mt-0.5">
                        Maitri AWS-4 Katabatic Wind Dataset (43 IAE Field Upload)
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-[12px] mb-3">
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          RECORD ID
                        </span>
                        <span className="font-mono font-semibold text-on-surface">
                          NCPOR-UPL-2024-88942
                        </span>
                      </div>
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          INGESTION DATE
                        </span>
                        <span className="text-on-surface font-medium">
                          22 Feb 2024 (Field Uplink Sync)
                        </span>
                      </div>
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          DATA TYPE
                        </span>
                        <span className="text-on-surface">
                          Sensor Raw CSV + Audio Memo
                        </span>
                      </div>
                      <div>
                        <span className="text-outline block font-label-mono text-[10px]">
                          NPDC ACCESSION
                        </span>
                        <span className="text-error font-bold font-mono">
                          Unlinked / Pending
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2.5 font-body-sm text-[13px]">
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-error">
                            pin_drop
                          </span>
                          {" Station Coordinates: "}
                        </span>
                        <div className="text-right">
                          <span className="font-mono text-on-surface font-medium block">
                            Maitri (-70.7600° S, 11.7400° E)
                          </span>
                          <span className="font-label-mono text-[10px] text-tertiary font-bold">
                            MATCH SCORE: 99.1%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            label
                          </span>
                          {" Associated Taxonomies: "}
                        </span>
                        <div className="flex flex-wrap gap-1 justify-end max-w-xs">
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-mono text-[11px]">
                            Wind Surge
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-mono text-[11px]">
                            Maitri Base
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-mono text-[11px]">
                            AWS-4
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            folder_zip
                          </span>
                          {" Attached Assets: "}
                        </span>
                        <span className="font-mono text-on-surface">
                          2 files (44 MB log delta)
                        </span>
                      </div>
                      <div className="flex items-start justify-between py-1">
                        <span className="text-on-surface-variant font-medium flex items-center gap-1.5">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            history_edu
                          </span>
                          {" Editorial Citations: "}
                        </span>
                        <span className="text-outline font-medium">
                          0 Stories (Freshly Ingested Stage)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 flex items-center justify-between font-label-mono text-label-mono text-error">
                    <span className="flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        warning
                      </span>
                      {" Redundant Payload Detected "}
                    </span>
                    <span className="text-on-surface-variant font-semibold">
                      Triage Required
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    troubleshoot
                  </span>
                  <div>
                    <span className="font-title-md text-body-sm font-bold text-on-surface">
                      Recommended Action: Merge B into Canonical Entity A
                    </span>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">
                      Asset delta (44 MB) will be attached to A under version 1.2; tags will be reconciled automatically.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface text-on-surface font-body-sm text-body-sm font-medium transition-colors shadow-sm" type="button">
                    {" Keep Both Distinct "}
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-variant text-primary font-body-sm text-body-sm font-semibold transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      link
                    </span>
                    {" "}
                    <span>
                      Link to NPDC Master
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-error-container hover:bg-error/20 text-error font-body-sm text-body-sm font-medium transition-colors" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      delete
                    </span>
                    {" "}
                    <span>
                      Delete Duplicate B
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-body-sm text-body-sm font-semibold shadow transition-all" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      merge_type
                    </span>
                    {" "}
                    <span>
                      Merge into Entity A (Preserve History)
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-sm flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-mono text-label-mono text-on-surface-variant">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 text-primary font-semibold">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    shield
                  </span>
                  {" LEVEL 4 CLEARANCE "}
                </span>
                <span>
                  •
                </span>
                <span>
                  DPDP ACT 2023 COMPLIANT
                </span>
                <span>
                  •
                </span>
                <span>
                  ISO 25964 THESAURUS STANDARD
                </span>
                <span>
                  •
                </span>
                <span>
                  NPDC INTEGRATION PROTOCOL v2.4
                </span>
              </div>
              <div className="flex items-center gap-2 text-outline">
                <span className="material-symbols-outlined text-[15px]">
                  history
                </span>
                <span>
                  Auto-archive resolution audit logs active • Session ID: #POLARIS-VOCAB-8910
                </span>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-space-sm px-space-md mt-auto">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-xs font-label-mono text-label-mono text-on-surface-variant">
            <span className="tracking-wider text-[10px]">
              POLARIS CRYOSPHERIC VOCABULARY ENGINE • NATIONAL CENTRE FOR POLAR AND OCEAN RESEARCH (NCPOR), MINISTRY OF EARTH SCIENCES, GOVT. OF INDIA
            </span>
            <span className="tracking-wider text-[10px] text-outline">
              LEVEL 4 CLEARANCE • DPDP ACT 2023 COMPLIANT • ISO 25964 THESAURUS STANDARD
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
