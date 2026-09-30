import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_media_library_manager_admin_media/code.html
const BODY_CLASS = "bg-surface text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function AdminMediaPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-screen w-60 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
        <div className="flex flex-col min-h-0">
          <div className="h-18 px-space-md py-space-sm flex items-center gap-space-sm border-b border-surface-container-low">
            <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-title-md text-title-md font-bold">
              <span className="material-symbols-outlined text-[20px]">
                ac_unit
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-title-md text-title-md text-on-surface tracking-tight font-bold leading-tight truncate">
                POLARIS
              </span>
              <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider truncate">
                MoES Admin Portal
              </span>
            </div>
          </div>
          <div className="overflow-y-auto px-space-sm py-space-sm flex-1">
            <div className="px-space-xs py-space-xs font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Navigation
            </div>
            <nav className="flex flex-col gap-0.5 mt-1" data-active-classes="bg-secondary-container text-on-secondary-fixed font-title-md">
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="dashboard" to="/admin">
                <span className="material-symbols-outlined text-[18px]">
                  dashboard
                </span>
                <span>
                  Dashboard
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="expeditions" to="/expeditions/soe-01">
                <span className="material-symbols-outlined text-[18px]">
                  explore
                </span>
                <span>
                  Expeditions
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="upload" to="/admin/upload">
                <span className="material-symbols-outlined text-[18px]">
                  cloud_upload
                </span>
                <span>
                  Upload
                </span>
              </Link>
              <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="ai-queue" href="#" onClick={(e)=>e.preventDefault()}>
                <span className="material-symbols-outlined text-[18px]">
                  neurology
                </span>
                <span>
                  AI Queue
                </span>
              </a>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="content-studio" to="/admin/studio">
                <span className="material-symbols-outlined text-[18px]">
                  draw
                </span>
                <span>
                  Content Studio
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="review" to="/admin/review">
                <span className="material-symbols-outlined text-[18px]">
                  fact_check
                </span>
                <span>
                  Review
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="publishing" to="/admin/publishing">
                <span className="material-symbols-outlined text-[18px]">
                  rocket_launch
                </span>
                <span>
                  Publishing
                </span>
              </Link>
              <Link aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg transition-colors bg-secondary-container text-on-secondary-fixed font-title-md" data-path="media-library" to="/admin/media">
                <span className="material-symbols-outlined text-[18px]">
                  perm_media
                </span>
                <span>
                  Media Library
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="rights-and-integrations" to="/admin/rights">
                <span className="material-symbols-outlined text-[18px]">
                  lock_person
                </span>
                <span>
                  Rights & Integrations
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="analytics" to="/admin/analytics">
                <span className="material-symbols-outlined text-[18px]">
                  insights
                </span>
                <span>
                  Analytics
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="notifications" to="/admin/notifications">
                <span className="material-symbols-outlined text-[18px]">
                  notifications
                </span>
                <span>
                  Notifications
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="users" to="/admin/users">
                <span className="material-symbols-outlined text-[18px]">
                  group
                </span>
                <span>
                  Users
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="settings" to="/admin/profile">
                <span className="material-symbols-outlined text-[18px]">
                  settings
                </span>
                <span>
                  Settings
                </span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-space-sm border-t border-surface-container-low bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm p-space-xs rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md font-bold tracking-tight shadow-sm">
              AS
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-title-md text-body-sm text-on-surface font-semibold truncate leading-tight">
                Dr. Ananya Sen
              </span>
              <span className="font-label-mono text-label-mono text-secondary truncate leading-tight">
                Lead Scientist / Editor
              </span>
            </div>
          </div>
        </div>
      </aside>
      <div className="pl-60">
        <header className="fixed top-0 left-60 right-0 h-18 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter">
          <div className="flex items-center gap-space-md flex-1 max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-0 rounded-lg text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search assets, tags, expeditions... (⌘K)" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low">
              <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-mono text-label-mono text-on-surface font-medium uppercase tracking-wider">
                HIMADRI TELEMETRY ONLINE
              </span>
            </div>
            <div className="hidden md:flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono font-medium">
              Curator / Editor (C, E, A)
            </div>
            <div className="relative cursor-pointer">
              <div className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
              </div>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error" />
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </header>
        <main className="relative pt-18 min-h-screen bg-surface flex flex-col justify-between">
          <div className="w-full max-w-[1440px] mx-auto p-gutter flex-1">
            <div className="flex flex-col w-full">
              <header className="w-full mb-space-lg flex flex-col gap-space-md">
                {" "}
                <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                      <span>
                        POLARIS Assets
                      </span>
                      <span>
                        /
                      </span>
                      <span>
                        Archival & Repository
                      </span>
                      <span>
                        /
                      </span>
                      <span className="text-primary font-semibold">
                        Media Library
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
                      {" Media Library & Asset Management "}
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                      {" Curate, tag, trim, and geolocate high-resolution scientific photography, drone video, and expedition audio archives across Arctic, Antarctic, and Southern Ocean deployments. "}
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 px-space-sm py-1 rounded-lg bg-surface-container-low">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        2,480
                      </span>
                      <span className="font-label-mono text-label-mono text-outline uppercase">
                        Ingested
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-space-sm py-1 rounded-lg bg-surface-container-low">
                      <span className="w-2 h-2 rounded-full bg-secondary-container" />
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        14
                      </span>
                      <span className="font-label-mono text-label-mono text-outline uppercase">
                        Awaiting Meta
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-space-sm py-1 rounded-lg bg-error-container/40">
                      <span className="w-2 h-2 rounded-full bg-error" />
                      <span className="font-label-md text-label-md text-on-error-container font-semibold">
                        3 Flagged Rights
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="flex items-center justify-between border-b-0 bg-surface-container-lowest rounded-xl p-1 shadow-sm overflow-x-auto">
                  <div className="flex items-center gap-1 min-w-max">
                    <button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm shadow-sm transition-all" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        photo_library
                      </span>
                      {" "}
                      <span>
                        Library (2,418)
                      </span>
                      {" "}
                    </button>
                    <button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-all" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        movie_edit
                      </span>
                      {" "}
                      <span>
                        Clip Trimmer (10–30 s range)
                      </span>
                      {" "}
                      <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-[10px]">
                        NEW
                      </span>
                      {" "}
                    </button>
                    <button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-all" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        collections_bookmark
                      </span>
                      {" "}
                      <span>
                        Collections (42)
                      </span>
                      {" "}
                    </button>
                    <button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-sm text-body-sm transition-all" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        content_copy
                      </span>
                      {" "}
                      <span>
                        Duplicates (8 detected)
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="hidden lg:flex items-center gap-2 pr-2">
                    <span className="font-label-mono text-label-mono text-outline">
                      STORAGE: 1.48 TB / 10 TB
                    </span>
                    <div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="bg-primary-container h-full w-[15%]" />
                    </div>
                  </div>
                </div>
                {" "}
              </header>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                <section className="lg:col-span-8 flex flex-col gap-space-md min-w-0">
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
                      <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                          search
                        </span>
                        <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" placeholder="Filter by title, taxon, station, expedition..." type="text" />
                      </div>
                      <div className="flex items-center gap-2">
                        <select className="px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>
                            All Expeditions (43rd IAE, SOE-01, Himadri-24)
                          </option>
                          <option>
                            43rd Indian Antarctic Expedition (IAE)
                          </option>
                          <option>
                            Himadri Arctic Winter '24
                          </option>
                          <option>
                            Southern Ocean Expedition (SOE-01)
                          </option>
                        </select>
                        <select className="px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>
                            License (All)
                          </option>
                          <option>
                            CC BY-NC 4.0
                          </option>
                          <option>
                            MoES Exclusive
                          </option>
                          <option>
                            Public Research Domain
                          </option>
                        </select>
                        <div className="flex items-center bg-surface-container-low p-0.5 rounded-lg">
                          <button aria-label="Grid view" className="p-1.5 rounded bg-surface-container-lowest text-primary shadow-sm" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              grid_view
                            </span>
                            {" "}
                          </button>
                          <button aria-label="List view" className="p-1.5 rounded text-on-surface-variant hover:text-on-surface" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              view_list
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-space-sm pt-2 overflow-x-auto">
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm" type="button">
                          {" All Media "}
                        </button>
                        <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                          {" Photos (1,840) "}
                        </button>
                        <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                          {" Video Clips (420) "}
                        </button>
                        <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                          {" Audio Logs (158) "}
                        </button>
                        <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                          {" Drone Scans (62) "}
                        </button>
                      </div>
                      <button className="flex items-center gap-1 text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          tune
                        </span>
                        {" "}
                        <span>
                          More Filters
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface-container-high/60 backdrop-blur-sm px-space-md py-2.5 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="flex items-center gap-2">
                        <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" type="checkbox" />
                        <span className="font-title-md text-body-sm text-on-surface font-semibold">
                          3 items selected
                        </span>
                      </div>
                      <span className="text-outline font-label-mono text-label-mono">
                        | Total: 163.3 MB
                      </span>
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface shadow-sm font-label-md text-label-md transition-all" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          sell
                        </span>
                        {" "}
                        <span>
                          Batch Tag
                        </span>
                        {" "}
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface shadow-sm font-label-md text-label-md transition-all" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          assignment
                        </span>
                        {" "}
                        <span>
                          Assign Expedition
                        </span>
                        {" "}
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface shadow-sm font-label-md text-label-md transition-all" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          folder_special
                        </span>
                        {" "}
                        <span>
                          Move to Collection
                        </span>
                        {" "}
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface shadow-sm font-label-md text-label-md transition-all" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          file_download
                        </span>
                        {" "}
                        <span>
                          Export Metadata
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <article className="relative group bg-surface-container-lowest rounded-xl p-space-md shadow-md transition-all duration-200 ring-2 ring-primary-container flex flex-col justify-between cursor-pointer">
                      {" "}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Majestic high-resolution aerial photograph of an Antarctic ice shelf snout calving vast tabular icebergs into vibrant cyan meltwater plumes at Prydz Bay, crisp polar sunlight, dramatic seracs and crevasses, documentary scientific clarity, deep navy ocean contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYmIsWyp48rY_souEQdtLtCPnfyL-c5rEhFr_EHca0Uynt9tlGeMADzO934chXxsjfc-jUThG9Z5h-gx-chlA9btK657_5wnVK-AFjHMIO49C93N8kRFLK-qaDBnn0nqtOUVzh4TfUomB8wo69_ijbrGGVq4jqkieWNtOI_aPjqYFmgmeD0uMhkKGOZ5Q9j7TAFykT758RD-gqONZJpjOwxRhETJuMAO1qSMwkM7l3manyexrj54vZ" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        <label className="absolute top-2.5 left-2.5 z-10 flex items-center justify-center w-6 h-6 rounded bg-surface-container-lowest/90 cursor-pointer shadow-sm">
                          {" "}
                          <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                          {" "}
                        </label>
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/95 text-on-surface font-label-mono text-label-mono font-semibold shadow-sm">
                            RAW 48MP
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-mono text-label-mono font-semibold shadow-sm">
                            43rd IAE
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-label-mono text-[10px]">
                          <span className="flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">
                              location_on
                            </span>
                            {" Geo-tagged "}
                          </span>
                          <span>
                            ISO 100 • 24mm • f/8
                          </span>
                        </div>
                      </div>
                      {" "}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-title-md text-body-sm font-semibold text-on-surface truncate" title="Prydz_Bay_Glacier_Snout_0042.CR3">
                            {" Prydz_Bay_Glacier_Snout_0042.CR3 "}
                          </h3>
                          <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                            check_circle
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                          <span>
                            42.4 MB • CR3 RAW
                          </span>
                          <span>
                            Lat: 69.37°S, Lon: 76.19°E
                          </span>
                        </div>
                      </div>
                      {" "}
                    </article>
                    <article className="relative group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer">
                      {" "}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Breathtaking emerald green and violet Aurora Australis dancing across polar night sky directly above modern Bharati Antarctic research station dome modules, snow drifts reflecting faint auroral glow, long-exposure stars, serene polar atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_oCn5GegADdGadRn3yvllTRkLHEIW0wiWJeY-cWEgHNayqdcx1_tRmkOfqlrNOB9hD25iCKZKQdLuLqEbt0P1mgCRmp_NTAktPPfZABX1xNiC1z_peFUhTmm3wNZNauxJRHYksfw1XTus7Or5FxGF_hNuHcxqP13CeAlD0AscQp9I2bqznpHcffxgCt9hKy1-KVtEw3i3NXfLCV2ZxCSLgM0eUsf0aR8sGdgetocUIGiM8aKKAk6" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        <label className="absolute top-2.5 left-2.5 z-10 flex items-center justify-center w-6 h-6 rounded bg-surface-container-lowest/90 cursor-pointer shadow-sm">
                          {" "}
                          <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                          {" "}
                        </label>
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/95 text-on-surface font-label-mono text-label-mono font-semibold shadow-sm">
                            TIFF 16-bit
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono font-semibold shadow-sm">
                            Bharati
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-label-mono text-[10px]">
                          <span className="flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">
                              maps_auto
                            </span>
                            {" Night Optics "}
                          </span>
                          <span>
                            25s Exp • f/2.8 • 14mm
                          </span>
                        </div>
                      </div>
                      {" "}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-title-md text-body-sm font-semibold text-on-surface truncate" title="Bharati_Magnetosphere_Aurora_892.tif">
                            {" Bharati_Magnetosphere_Aurora_892.tif "}
                          </h3>
                          <span className="material-symbols-outlined text-outline text-[18px] shrink-0">
                            radio_button_unchecked
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                          <span>
                            84.1 MB • Master TIF
                          </span>
                          <span>
                            Lat: 69.41°S, Lon: 76.19°E
                          </span>
                        </div>
                      </div>
                      {" "}
                    </article>
                    <article className="relative group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer">
                      {" "}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dramatic 4K high-frame-rate shot of a heavy-duty meteorological mast and ultrasonic anemometer heavily encrusted in rime ice spinning at extreme speed during a katabatic gale at Maitri Station Antarctica, blowing spindrift snow, clinical scientific precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqLnrn1skA09rgePM_R94whiXvWRi6LBGq79t_ICopuW75-scdfeHnWWv4oBz8nsKIL0C0yqu8Y7KellaKTDwN6dkjYEq0tQU58foEfps0YL20r7vqxXiCuncXWQ2rqkLpVD_xlgSAC2znXDGtrEVSC86UnWjnB-sfoDWGfut8lSZeKWHotMovtmFltCzrrlWJgjVVZb3lhwIFmN2lvJNIzEQcX2i-KUG37sRigW8aAdyXtSI9UtZl" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        <label className="absolute top-2.5 left-2.5 z-10 flex items-center justify-center w-6 h-6 rounded bg-surface-container-lowest/90 cursor-pointer shadow-sm">
                          {" "}
                          <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                          {" "}
                        </label>
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-mono text-label-mono font-semibold shadow-sm">
                            4K Video (0:24)
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/95 text-on-surface font-label-mono text-label-mono font-semibold shadow-sm">
                            Maitri
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-center text-on-primary group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[24px]">
                              play_arrow
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-label-mono text-[10px]">
                          <span className="flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              videocam
                            </span>
                            {" Katabatic Sensor "}
                          </span>
                          <span>
                            45 kts Wind Gust
                          </span>
                        </div>
                      </div>
                      {" "}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-title-md text-body-sm font-semibold text-on-surface truncate" title="Maitri_Katabatic_Gale_45kts.mp4">
                            {" Maitri_Katabatic_Gale_45kts.mp4 "}
                          </h3>
                          <span className="material-symbols-outlined text-outline text-[18px] shrink-0">
                            radio_button_unchecked
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                          <span>
                            210 MB • ProRes MP4
                          </span>
                          <span>
                            Duration: 00:24
                          </span>
                        </div>
                      </div>
                      {" "}
                    </article>
                    <article className="relative group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer">
                      {" "}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Detailed orthomosaic drone survey photograph looking straight down at an Adélie penguin nesting colony amid rocky ice-free nunataks in Larsemann Hills Antarctica, high-contrast pebble nests, crystal clear spatial resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0X0P7PA4MBMpJS_X9nb1iMhdA5iyfAyuR1cg8c6yFNN4sBZDq6nxsCb2Y5t31qS9BJRqz3Fw8Z-hRkM2HSC7cU5gU41IYKLrIuurJaxu2rDL5EoacEyZc5AFzzkTmfknF-polu4gV4nIKKTGIgd5xF6niGKqOOhpoyZnsBFiNi25-A3VlF3Qe5rHO9C3HIH53_3mEvrb5XqS4-RrAgvQLTz3u2Y08KhI8rNKeVO_zZLedAgx30Xyl" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        <label className="absolute top-2.5 left-2.5 z-10 flex items-center justify-center w-6 h-6 rounded bg-surface-container-lowest/90 cursor-pointer shadow-sm">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                          {" "}
                        </label>
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/95 text-on-surface font-label-mono text-label-mono font-semibold shadow-sm">
                            Orthophoto
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-semibold shadow-sm">
                            Fauna Survey
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-label-mono text-[10px]">
                          <span className="flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              grid_4x4
                            </span>
                            {" Geo-calibrated "}
                          </span>
                          <span>
                            GSD: 1.2 cm/px
                          </span>
                        </div>
                      </div>
                      {" "}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-title-md text-body-sm font-semibold text-on-surface truncate" title="Larsemann_Adelie_Census_Ortho_08.png">
                            {" Larsemann_Adelie_Census_Ortho_08.png "}
                          </h3>
                          <span className="material-symbols-outlined text-outline text-[18px] shrink-0">
                            radio_button_unchecked
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                          <span>
                            36.8 MB • GeoTIFF PNG
                          </span>
                          <span>
                            Larsemann Hills
                          </span>
                        </div>
                      </div>
                      {" "}
                    </article>
                    <article className="relative group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer">
                      {" "}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Indian oceanographic research team retrieving the IndARC underwater acoustic hydrophone sensor mooring from icy steel-grey Arctic fjord waters in Kongsfjorden Svalbard, research vessel winch crane, snowy mountains in background, Himadri expedition crew in orange immersion suits." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBylXys3jbupmM3gRI5xIGzoVXdFQM3N3yqeXUZm7IQVJ1yKJhzayFHsWhkJKd-GS8pqSH9sDwnhzhE_8Lbo3zFPHIR8Wx2LpFIwJYOXynweWRQpZV_HeBbncr9XSxrJ6RhwpDCNBEu_87ss-ZACySsY9WnB50sShbJCFAsRg8rFFAJCmbRy7y4WumB_3iGbJhkyXu45KgnfzWjfArbQiOV4_tejW37pPdXRtno6T8GIRQL5w_ndeXd" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        <label className="absolute top-2.5 left-2.5 z-10 flex items-center justify-center w-6 h-6 rounded bg-surface-container-lowest/90 cursor-pointer shadow-sm">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                          {" "}
                        </label>
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/95 text-on-surface font-label-mono text-label-mono font-semibold shadow-sm">
                            Audio/Sonar Log
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-mono text-label-mono font-semibold shadow-sm">
                            Himadri
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-label-mono text-[10px]">
                          <span className="flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              graphic_eq
                            </span>
                            {" Hydrophone Log "}
                          </span>
                          <span>
                            96 kHz 24-bit PCM
                          </span>
                        </div>
                      </div>
                      {" "}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-title-md text-body-sm font-semibold text-on-surface truncate" title="IndARC_Kongsfjorden_Hydrophone_T7.wav">
                            {" IndARC_Kongsfjorden_Hydrophone_T7.wav "}
                          </h3>
                          <span className="material-symbols-outlined text-outline text-[18px] shrink-0">
                            radio_button_unchecked
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                          <span>
                            14.2 MB • WAV Broadcast
                          </span>
                          <span>
                            Kongsfjorden 79°N
                          </span>
                        </div>
                      </div>
                      {" "}
                    </article>
                    <article className="relative group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer">
                      {" "}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Archival vintage documentary film scan showing the early Indian Antarctic Expedition team in 1983 extracting a cylindrical deep ice core sample at Dakshin Gangotri ice shelf, polar lab instruments, historical scientific record, clean restored archival fidelity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzx2Hdhy2t6x9igNUDEi9Q04Ji9v5r_mPCab1huCx7NGzNgYqYLisMDB09pGerVTo9Fy4nWmxP02AllYth-amiUponJ5R9WJK5DuvrPs1jelOfkVcq5EYCsTZ6wU2w6ZvnLT1DajdLru1FpLaO8ywvAPOVsqjB0xeeg7KLneSiuymrc7Vce5amKH_6RLFWDfyIptONDgCq6UcNIGO-s2iyx-B72Z6xJJ54gDojV0up4NlyieAtasKd" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                        <label className="absolute top-2.5 left-2.5 z-10 flex items-center justify-center w-6 h-6 rounded bg-surface-container-lowest/90 cursor-pointer shadow-sm">
                          {" "}
                          <input className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer" type="checkbox" />
                          {" "}
                        </label>
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono font-semibold shadow-sm">
                            Archive 1983
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/95 text-on-surface font-label-mono text-label-mono font-semibold shadow-sm">
                            Historical
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-on-primary font-label-mono text-[10px]">
                          <span className="flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              auto_stories
                            </span>
                            {" DG-IceCore-1983 "}
                          </span>
                          <span>
                            Digitized 2024
                          </span>
                        </div>
                      </div>
                      {" "}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-title-md text-body-sm font-semibold text-on-surface truncate" title="DG_IceCore_Stratigraphy_Scan.jpg">
                            {" DG_IceCore_Stratigraphy_Scan.jpg "}
                          </h3>
                          <span className="material-symbols-outlined text-outline text-[18px] shrink-0">
                            radio_button_unchecked
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                          <span>
                            18.5 MB • 4800 DPI Scan
                          </span>
                          <span>
                            Dakshin Gangotri
                          </span>
                        </div>
                      </div>
                      {" "}
                    </article>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm mt-2">
                    <div className="flex items-center gap-space-sm text-outline font-body-sm text-body-sm">
                      <span>
                        {"Showing "}
                        <strong className="text-on-surface font-semibold">
                          1–6
                        </strong>
                        {" of 2,418 assets"}
                      </span>
                      <span>
                        •
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-outline font-label-mono text-label-mono">
                          Density:
                        </span>
                        <button className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-mono text-label-mono" type="button">
                          6
                        </button>
                        <button className="px-2 py-0.5 rounded hover:bg-surface-container-low text-on-surface-variant font-label-mono text-label-mono" type="button">
                          12
                        </button>
                        <button className="px-2 py-0.5 rounded hover:bg-surface-container-low text-on-surface-variant font-label-mono text-label-mono" type="button">
                          24
                        </button>
                      </div>
                    </div>
                    <nav aria-label="Pagination" className="flex items-center gap-1">
                      <button aria-label="Previous page" className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low disabled:opacity-50" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          chevron_left
                        </span>
                        {" "}
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm" type="button">
                        1
                      </button>
                      <button className="w-8 h-8 rounded-lg hover:bg-surface-container-low text-on-surface font-label-md text-label-md" type="button">
                        2
                      </button>
                      <button className="w-8 h-8 rounded-lg hover:bg-surface-container-low text-on-surface font-label-md text-label-md" type="button">
                        3
                      </button>
                      <span className="px-1 text-outline">
                        ...
                      </span>
                      <button className="w-8 h-8 rounded-lg hover:bg-surface-container-low text-on-surface font-label-md text-label-md" type="button">
                        403
                      </button>
                      <button aria-label="Next page" className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          chevron_right
                        </span>
                        {" "}
                      </button>
                    </nav>
                  </div>
                  <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mt-space-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
                          <span className="material-symbols-outlined text-[20px]">
                            content_cut
                          </span>
                        </div>
                        <div>
                          <h2 className="font-title-md text-title-md font-bold text-on-surface leading-tight">
                            {" Clip Trimmer Studio (10–30 s range) "}
                          </h2>
                          <p className="font-body-sm text-body-sm text-secondary">
                            {" Non-destructive polar clip clipping & social reel excerpt extraction for Outreach Portal. "}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-semibold">
                        Active Sequence
                      </span>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                        <span className="font-semibold text-primary">
                          Target: Maitri_Katabatic_Gale_45kts.mp4
                        </span>
                        <span>
                          Range Selected: 15.4 seconds (from 00:12.4 to 00:27.8)
                        </span>
                      </div>
                      <div className="relative w-full h-16 bg-surface-container rounded-lg overflow-hidden flex items-center px-4">
                        <div className="w-full flex items-center justify-between h-10 gap-0.5 opacity-60">
                          <div className="w-1 bg-secondary h-4 rounded-full" />
                          <div className="w-1 bg-secondary h-6 rounded-full" />
                          <div className="w-1 bg-secondary h-8 rounded-full" />
                          <div className="w-1 bg-secondary h-3 rounded-full" />
                          <div className="w-1 bg-secondary h-7 rounded-full" />
                          <div className="w-1 bg-secondary h-10 rounded-full" />
                          <div className="w-1 bg-secondary h-6 rounded-full" />
                          <div className="w-1 bg-secondary h-5 rounded-full" />
                          <div className="w-1 bg-primary h-8 rounded-full" />
                          <div className="w-1 bg-primary h-10 rounded-full" />
                          <div className="w-1 bg-primary h-7 rounded-full" />
                          <div className="w-1 bg-primary h-9 rounded-full" />
                          <div className="w-1 bg-primary h-10 rounded-full" />
                          <div className="w-1 bg-primary h-8 rounded-full" />
                          <div className="w-1 bg-primary h-6 rounded-full" />
                          <div className="w-1 bg-primary h-9 rounded-full" />
                          <div className="w-1 bg-secondary h-5 rounded-full" />
                          <div className="w-1 bg-secondary h-4 rounded-full" />
                          <div className="w-1 bg-secondary h-6 rounded-full" />
                          <div className="w-1 bg-secondary h-3 rounded-full" />
                          <div className="w-1 bg-secondary h-2 rounded-full" />
                        </div>
                        <div className="absolute left-[30%] right-[35%] top-1 bottom-1 bg-primary-container/20 rounded border-y-0 flex justify-between items-center px-1">
                          <div className="w-3 h-10 bg-primary rounded-l flex items-center justify-center cursor-ew-resize shadow">
                            <span className="material-symbols-outlined text-on-primary text-[14px]">
                              drag_indicator
                            </span>
                          </div>
                          <span className="font-label-mono text-[11px] text-primary font-bold bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-sm">
                            15.4s
                          </span>
                          <div className="w-3 h-10 bg-primary rounded-r flex items-center justify-center cursor-ew-resize shadow">
                            <span className="material-symbols-outlined text-on-primary text-[14px]">
                              drag_indicator
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              play_arrow
                            </span>
                            {" "}
                          </button>
                          <span className="font-label-mono text-label-mono text-on-surface">
                            00:12.4 / 00:24.0
                          </span>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm shadow-sm hover:bg-primary transition-colors flex items-center gap-1.5" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            download_for_offline
                          </span>
                          {" "}
                          <span>
                            Trim to Polar Short (15.4s)
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </section>
                </section>
                <aside className="lg:col-span-4 flex flex-col gap-space-md sticky top-22">
                  {" "}
                  {" "}
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                    <div className="flex flex-col gap-1 pb-space-sm border-b border-surface-container-low">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider">
                          Asset Inspector
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono font-semibold flex items-center gap-1">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          {" Ready for Public Release "}
                        </span>
                      </div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                        {" Prydz_Bay_Glacier_Snout_0042 "}
                      </h2>
                      <span className="font-label-mono text-label-mono text-outline">
                        CR3 RAW Sensor Data • 42.4 MB • Calved Segment 12B
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container shadow-inner">
                        <img className="w-full h-full object-cover" data-alt="High detail inspection preview of glacial terminus seracs, emerald meltwater swirls, and crevasses in Prydz Bay Antarctica under clear Arctic glare with high dynamic range." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApHWliyqAo49Wg7SgcU9n8ElQc9yPzpgemWbxzG5DQYn0mD-gTk50HVL6uYD3avdTliya9RBDEmV64lmg2mgXUmmo7uN73kPUxsBL5SfyR8bVJgBIc3aNdODKVCLjjiDFOf4pO8dAwHEp5a3UBeQoSQTiPPCDgDHck_SZDSZXZfvOjdC6BBoCf-31MhLmJwW5hGuu4m6s3CXHV7r6EdmsdJxuwjuZ0sHxhHyRrCwAMrKkIvJ8XfXWj" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between p-1 bg-surface-container-lowest/85 backdrop-blur-md rounded-lg shadow-sm">
                          <div className="flex items-center gap-1">
                            <button aria-label="Zoom out" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                remove
                              </span>
                              {" "}
                            </button>
                            <span className="font-label-mono text-[10px] text-on-surface font-semibold px-1">
                              1.8x Zoom
                            </span>
                            <button aria-label="Zoom in" className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                add
                              </span>
                              {" "}
                            </button>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low" title="View Fullscreen" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                fullscreen
                              </span>
                              {" "}
                            </button>
                            <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low" title="Download RAW" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                download
                              </span>
                              {" "}
                            </button>
                            <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low" title="Replace File" type="button">
                              {" "}
                              <span className="material-symbols-outlined text-[16px]">
                                sync
                              </span>
                              {" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            auto_awesome
                          </span>
                          {" AI Auto-Generated Tags "}
                        </label>
                        <span className="font-label-mono text-[11px] text-outline">
                          Confidence 98%
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary-container font-label-md text-label-md font-medium">
                          #glaciology
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary-container font-label-md text-label-md font-medium">
                          #ice-shelf
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary-container font-label-md text-label-md font-medium">
                          #calving-event
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary-container font-label-md text-label-md font-medium">
                          #prydz-bay
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-primary-container font-label-md text-label-md font-medium">
                          #43rd-iae
                        </span>
                        <button className="px-2 py-1 rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center gap-0.5" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            add
                          </span>
                          {" "}
                          <span>
                            Add tag
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          Accessibility Alt-Text (WCAG AAA)
                        </label>
                        <button className="flex items-center gap-1 text-primary hover:underline font-label-mono text-[11px]" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            smart_toy
                          </span>
                          {" Regenerate "}
                        </button>
                      </div>
                      <textarea className="w-full p-2.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" rows="2" defaultValue={"Aerial view of a glacier terminus with ice calving into turquoise Antarctic ocean water under overcast subpolar skies."} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Scientific Caption & Research Notes
                      </label>
                      <textarea className="w-full p-2.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" rows="2" defaultValue={"NCPOR glaciological aerial survey documenting ice tongue frontal margin retreat during summer melt cycle."} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md text-on-surface font-semibold">
                        Photo Credit & Attribution
                      </label>
                      <div className="relative">
                        <input className="w-full px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" defaultValue="Dr. Ananya Sen / NCPOR MoES" />
                        <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                          verified
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-space-sm rounded-xl flex flex-col gap-space-sm">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold">
                          License Agreement
                        </label>
                        <select className="w-full px-2.5 py-1.5 bg-surface-container-lowest rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none" defaultValue="Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)">
                          <option>
                            Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)
                          </option>
                          <option>
                            MoES Exclusive Public Research License
                          </option>
                          <option>
                            Scientific Open Access (CC0)
                          </option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex flex-col">
                          <span className="font-title-md text-body-sm font-medium text-on-surface">
                            Embed MoES / POLARIS SVG Watermark
                          </span>
                          <span className="font-label-mono text-[10px] text-outline">
                            Corner overlay applied on public CDN export
                          </span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          {" "}
                          <input defaultChecked="" className="sr-only peer" type="checkbox" />
                          {" "}
                          <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                          {" "}
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            public
                          </span>
                          {" Geographic Location Picker "}
                        </label>
                        <span className="font-label-mono text-[10px] text-secondary">
                          Bharati Station Sector
                        </span>
                      </div>
                      <div className="w-full flex justify-center">
                        <div className="relative w-[240px] h-[160px] rounded-xl bg-surface-container-highest overflow-hidden shadow-sm flex items-center justify-center" id="polaris-globe-mini-media">
                          <svg className="absolute inset-0 w-full h-full text-secondary/20" fill="none" viewBox="0 0 240 160">
                            <circle cx="120" cy="80" r="75" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" />
                            <circle cx="120" cy="80" r="50" stroke="currentColor" strokeWidth="0.75" />
                            <circle cx="120" cy="80" r="25" stroke="currentColor" strokeDasharray="2 2" strokeWidth="0.75" />
                            <path d="M70,85 Q85,60 120,65 T170,90 Q150,120 120,110 T70,85 Z" fill="#ffffff" fillOpacity="0.6" stroke="currentColor" strokeWidth="1" />
                            <line stroke="currentColor" strokeWidth="0.5" x1="120" x2="120" y1="0" y2="160" />
                            <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="240" y1="80" y2="80" />
                          </svg>
                          <div className="absolute top-[68px] left-[138px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <span className="relative flex h-5 w-5 items-center justify-center">
                              {" "}
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                              {" "}
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                              {" "}
                            </span>
                          </div>
                          <div className="absolute bottom-2 left-2 right-2 bg-surface-container-lowest/90 backdrop-blur-md px-2 py-1 rounded text-center">
                            <span className="font-label-mono text-[10px] text-on-surface font-semibold block leading-tight">
                              Lat -69.3722° S, Lon 76.1944° E
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <button className="flex-1 py-1.5 px-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px] text-primary">
                            pin_drop
                          </span>
                          {" "}
                          <span>
                            Drop Pin on Map
                          </span>
                          {" "}
                        </button>
                        <button className="flex-1 py-1.5 px-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center gap-1 transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            refresh
                          </span>
                          {" "}
                          <span>
                            Re-detect EXIF
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 pt-space-xs mt-1">
                      <button className="w-full py-3 px-space-md rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm font-semibold shadow-md hover:bg-primary transition-all flex items-center justify-center gap-2" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          save
                        </span>
                        {" "}
                        <span>
                          Save Asset Metadata & Sync to Repository
                        </span>
                        {" "}
                      </button>
                      <button className="w-full py-2.5 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-title-md text-body-sm transition-all flex items-center justify-center gap-2" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          draw
                        </span>
                        {" "}
                        <span>
                          Send to Content Studio Draft
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  {" "}
                </aside>
              </div>
            </div>
          </div>
          <footer className="w-full bg-surface-container-lowest border-t border-surface-container-low py-space-md mt-space-xl">
            <div className="max-w-[1440px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md">
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  PROVENANCE ID: POL-2024-NCPOR-V4
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono font-semibold">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    verified_user
                  </span>
                  <span>
                    LEVEL 4 SECURE ENVIRONMENT
                  </span>
                </div>
              </div>
              <div className="font-body-sm text-body-sm text-outline">
                © 2024 National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
