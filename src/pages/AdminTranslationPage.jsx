import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_translation_and_audio_manager_admin_translation/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function AdminTranslationPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-screen w-60 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container text-[20px]">
                ac_unit
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-headline-sm text-primary tracking-tight font-bold text-[15px]">
                POLARIS
              </span>
              <span className="font-label-mono text-outline uppercase text-[10px] tracking-widest">
                NCPOR • MoES GOV
              </span>
            </div>
          </div>
          <div className="px-space-sm py-space-xs">
            <p className="px-space-sm py-space-xs font-label-mono text-outline uppercase text-[10px] tracking-wider">
              Operations & Science
            </p>
            <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="dashboard" to="/admin">
                <span className="material-symbols-outlined text-[18px]">
                  grid_view
                </span>
                <span>
                  Dashboard
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="expeditions" to="/expeditions/soe-01">
                <span className="material-symbols-outlined text-[18px]">
                  explore
                </span>
                <span>
                  Expeditions
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="field-diary-telemetry" to="/admin/field-diary">
                <span className="material-symbols-outlined text-[18px]">
                  sensors
                </span>
                <span>
                  Field Diary & Telemetry
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="upload" to="/admin/upload">
                <span className="material-symbols-outlined text-[18px]">
                  cloud_upload
                </span>
                <span>
                  Upload
                </span>
              </Link>
              <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="ai-queue" href="#" onClick={(e)=>e.preventDefault()}>
                <span className="material-symbols-outlined text-[18px]">
                  batch_prediction
                </span>
                <span>
                  AI Queue
                </span>
              </a>
            </nav>
          </div>
          <div className="px-space-sm py-space-xs">
            <p className="px-space-sm py-space-xs font-label-mono text-outline uppercase text-[10px] tracking-wider">
              Editorial Studio
            </p>
            <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="content-studio" to="/admin/studio">
                <span className="material-symbols-outlined text-[18px]">
                  edit_document
                </span>
                <span>
                  Content Studio
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="review-desk" to="/admin/review">
                <span className="material-symbols-outlined text-[18px]">
                  fact_check
                </span>
                <span>
                  Review Desk
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="publishing" to="/admin/publishing">
                <span className="material-symbols-outlined text-[18px]">
                  publish
                </span>
                <span>
                  Publishing
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="media-library" to="/admin/media">
                <span className="material-symbols-outlined text-[18px]">
                  photo_library
                </span>
                <span>
                  Media Library
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="stories-website" to="/admin/content">
                <span className="material-symbols-outlined text-[18px]">
                  auto_stories
                </span>
                <span>
                  Stories & Website
                </span>
              </Link>
              <Link className="flex items-center justify-between px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="translation-audio" to="/admin/translation">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    record_voice_over
                  </span>
                  <span>
                    Translation & Audio
                  </span>
                </div>
                <span className="px-1.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-mono text-[9px]">
                  ACTIVE
                </span>
              </Link>
            </nav>
          </div>
          <div className="px-space-sm py-space-xs">
            <p className="px-space-sm py-space-xs font-label-mono text-outline uppercase text-[10px] tracking-wider">
              Outreach & Delivery
            </p>
            <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="education-manager" to="/admin/education">
                <span className="material-symbols-outlined text-[18px]">
                  school
                </span>
                <span>
                  Education Manager
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="events-inbox" to="/admin/events-inbox">
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                <span>
                  Events & Inbox
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="social-channels" to="/admin/social">
                <span className="material-symbols-outlined text-[18px]">
                  hub
                </span>
                <span>
                  Social Channels
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="rights-integrations" to="/admin/rights">
                <span className="material-symbols-outlined text-[18px]">
                  key
                </span>
                <span>
                  Rights & Integrations
                </span>
              </Link>
            </nav>
          </div>
          <div className="px-space-sm py-space-xs">
            <p className="px-space-sm py-space-xs font-label-mono text-outline uppercase text-[10px] tracking-wider">
              Governance & Control
            </p>
            <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="analytics" to="/admin/analytics">
                <span className="material-symbols-outlined text-[18px]">
                  insights
                </span>
                <span>
                  Analytics
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="notifications" to="/admin/notifications">
                <span className="material-symbols-outlined text-[18px]">
                  notifications
                </span>
                <span>
                  Notifications
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="users" to="/admin/users">
                <span className="material-symbols-outlined text-[18px]">
                  group
                </span>
                <span>
                  Users
                </span>
              </Link>
              <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm" data-path="settings-profile" to="/admin/profile">
                <span className="material-symbols-outlined text-[18px]">
                  settings
                </span>
                <span>
                  Settings / Profile
                </span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="p-space-sm m-space-xs rounded-xl bg-surface-container-low flex items-center gap-space-sm">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-[13px] text-on-surface truncate">
              Dr. Ananya Sen
            </span>
            <span className="font-label-mono text-[10px] text-primary-container truncate font-semibold uppercase">
              Lead Scientist • Lvl 4
            </span>
          </div>
        </div>
      </aside>
      <div className="pl-60">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low">
              <div className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              <span className="font-label-mono text-on-surface text-[11px] font-semibold tracking-wider">
                HIMADRI TELEMETRY ONLINE
              </span>
            </div>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                search
              </span>
              <input className="pl-9 pr-4 py-1.5 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline font-body-sm w-72 focus:outline-none" placeholder="Command Search (Cmd+K)" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-mono text-[11px] font-semibold tracking-wide">
              ROLE: SCIENTIST / EDITOR / ADMIN [S, E, A]
            </div>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </header>
        <main className="w-full pt-16 bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            <div className="p-space-lg space-y-space-lg max-w-[1440px] mx-auto w-full">
              <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-sm">
                {" "}
                <div className="space-y-space-xs max-w-3xl">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-mono text-outline uppercase tracking-wider text-[11px]">
                      POLARIS EDITORIAL CORE
                    </span>
                    <span className="text-outline text-body-sm font-label-mono">
                      /
                    </span>
                    <span className="font-label-mono text-primary font-semibold uppercase tracking-wider text-[11px]">
                      MULTILINGUAL LOCALIZATION & AUDIO ENGINE
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-semibold tracking-wider ml-1">
                      AUTH [S, E, A]
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-on-surface tracking-tight">
                    Translation & Audio Manager
                  </h1>
                  <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                    {" Govern multilingual science dispatches, verify neural machine translations against cryospheric terminologies, and produce synced audio narration for nationwide accessibility across 5 official Indian languages. "}
                  </p>
                </div>
                {" "}
                {" "}
                <div className="flex flex-wrap items-center gap-space-sm shrink-0">
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors shadow-sm font-label-md text-label-md" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      download
                    </span>
                    {" "}
                    <span>
                      Export Matrix (CSV)
                    </span>
                    {" "}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors shadow-sm font-label-md text-label-md" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      record_voice_over
                    </span>
                    {" "}
                    <span>
                      Batch Audio Synthesis
                    </span>
                    {" "}
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-all shadow-sm font-label-md text-label-md group" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-primary-fixed group-hover:rotate-12 transition-transform">
                      auto_awesome
                    </span>
                    {" "}
                    <span>
                      Translate All Missing
                    </span>
                    {" "}
                  </button>
                </div>
                {" "}
              </header>
              <section aria-label="Operational Telemetry" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono uppercase text-outline text-[11px] tracking-wider font-semibold">
                      Language Coverage
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        language
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-md text-on-surface font-normal">
                        78.4%
                      </span>
                      <span className="font-label-mono text-tertiary text-label-md font-semibold">
                        +4.2% wk
                      </span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant">
                      142 of 180 Articles localized
                    </p>
                  </div>
                  <div className="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{"width": "78.4%"}} />
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono uppercase text-outline text-[11px] tracking-wider font-semibold">
                      Awaiting Review
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-error-container/60 flex items-center justify-center text-on-error-container">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        pending_actions
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-md text-on-surface font-normal">
                        14
                      </span>
                      <span className="font-label-md text-outline uppercase">
                        Dispatches
                      </span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant">
                      Requires Scientist / Editor sign-off
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-label-mono text-[11px] text-primary">
                    <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
                    <span>
                      4 high-priority Himadri alerts
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono uppercase text-outline text-[11px] tracking-wider font-semibold">
                      Audio Narration
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        graphic_eq
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-md text-on-surface font-normal">
                        86
                      </span>
                      <span className="font-label-md text-outline uppercase">
                        Episodes
                      </span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant">
                      Studio Master & Neural TTS synced
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-label-mono text-[11px] text-tertiary">
                    <span className="material-symbols-outlined text-[14px]">
                      check_circle
                    </span>
                    <span>
                      48kHz broadcast fidelity
                    </span>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono uppercase text-outline text-[11px] tracking-wider font-semibold">
                      Protected Lexicon
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline-md text-on-surface font-normal">
                        412
                      </span>
                      <span className="font-label-md text-outline uppercase">
                        Terms
                      </span>
                    </div>
                    <p className="font-body-sm text-on-surface-variant">
                      Cryosphere & Polar taxonomy locked
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-label-mono text-[11px] text-outline">
                    <span className="material-symbols-outlined text-[14px]">
                      lock
                    </span>
                    <span>
                      Strict non-translatable registry
                    </span>
                  </div>
                </div>
              </section>
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
                <section className="xl:col-span-5 rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col justify-between space-y-space-md">
                  <div>
                    <div className="flex items-start justify-between gap-space-sm pb-space-sm">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            translate
                          </span>
                          <h2 className="font-headline-sm text-on-surface">
                            Language Matrix
                          </h2>
                        </div>
                        <p className="font-body-sm text-on-surface-variant mt-1">
                          Live coverage across official outreach languages
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-mono text-[10px] font-semibold uppercase tracking-wider">
                        MoES Core
                      </span>
                    </div>
                    <div className="overflow-x-auto -mx-space-lg px-space-lg">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-surface-container-low text-outline font-label-mono text-[10px] uppercase tracking-wider">
                            <th className="py-2.5 px-3 rounded-l-lg font-semibold">
                              Language
                            </th>
                            <th className="py-2.5 px-2 font-semibold text-center">
                              Progress
                            </th>
                            <th className="py-2.5 px-2 font-semibold">
                              Status
                            </th>
                            <th className="py-2.5 px-2 font-semibold text-center">
                              Accuracy
                            </th>
                            <th className="py-2.5 px-3 rounded-r-lg font-semibold text-right">
                              Narration
                            </th>
                          </tr>
                        </thead>
                        <tbody className="font-body-sm divide-y-0 text-on-surface">
                          <tr className="hover:bg-surface-container-low/60 transition-colors">
                            <td className="py-3 px-3">
                              {" "}
                              <div className="font-medium text-on-surface flex items-center gap-1.5">
                                <span>
                                  English (EN)
                                </span>
                                <span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary-container text-[9px] font-label-mono uppercase">
                                  Master
                                </span>
                              </div>
                              {" "}
                              <span className="font-label-mono text-[11px] text-outline">
                                Roman Primary
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm font-medium">
                              48/48
                            </td>
                            <td className="py-3 px-2">
                              {" "}
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-mono text-[10px] font-semibold">
                                {" "}
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                                {"Published "}
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm font-semibold text-tertiary">
                              100%
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-secondary-container font-label-mono text-[10px] font-medium">
                                Master MP3
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/60 transition-colors bg-secondary-container/20">
                            <td className="py-3 px-3">
                              {" "}
                              <div className="font-medium text-on-surface">
                                Hindi (HI)
                              </div>
                              {" "}
                              <span className="font-label-mono text-[11px] text-primary">
                                हिन्दी • Active Target
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm font-medium">
                              42/48
                            </td>
                            <td className="py-3 px-2">
                              {" "}
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-mono text-[10px] font-semibold">
                                {" "}
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                {"In Review (4) "}
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm font-semibold text-primary">
                              99.8%
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="inline-flex items-center gap-1 text-tertiary font-label-mono text-[10px] font-semibold">
                                {" "}
                                <span className="material-symbols-outlined text-[13px]">
                                  mic
                                </span>
                                {" Synced "}
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/60 transition-colors">
                            <td className="py-3 px-3">
                              {" "}
                              <div className="font-medium text-on-surface">
                                Bengali (BN)
                              </div>
                              {" "}
                              <span className="font-label-mono text-[11px] text-outline">
                                বাংলা
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm font-medium">
                              36/48
                            </td>
                            <td className="py-3 px-2">
                              {" "}
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-mono text-[10px] font-semibold">
                                {" "}
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim" />
                                {"AI Synthesized "}
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm text-on-surface">
                              98.2%
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="text-outline font-label-mono text-[10px]">
                                Processing
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/60 transition-colors">
                            <td className="py-3 px-3">
                              {" "}
                              <div className="font-medium text-on-surface">
                                Marathi (MR)
                              </div>
                              {" "}
                              <span className="font-label-mono text-[11px] text-outline">
                                मराठी
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm font-medium">
                              34/48
                            </td>
                            <td className="py-3 px-2">
                              {" "}
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-mono text-[10px] font-semibold">
                                {" "}
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim" />
                                {"AI Synthesized "}
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm text-on-surface">
                              97.6%
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="text-outline font-label-mono text-[10px]">
                                Awaiting Sign
                              </span>
                              {" "}
                            </td>
                          </tr>
                          <tr className="hover:bg-surface-container-low/60 transition-colors">
                            <td className="py-3 px-3">
                              {" "}
                              <div className="font-medium text-on-surface">
                                Tamil (TA)
                              </div>
                              {" "}
                              <span className="font-label-mono text-[11px] text-outline">
                                தமிழ்
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm font-medium">
                              28/48
                            </td>
                            <td className="py-3 px-2">
                              {" "}
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-mono text-[10px] font-semibold">
                                {" "}
                                <span className="w-1.5 h-1.5 rounded-full bg-error" />
                                {"20 Missing "}
                              </span>
                              {" "}
                            </td>
                            <td className="py-3 px-2 text-center font-label-mono text-body-sm text-on-surface">
                              96.5%
                            </td>
                            <td className="py-3 px-3 text-right">
                              {" "}
                              <span className="text-error font-label-mono text-[10px]">
                                Unassigned
                              </span>
                              {" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl">
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-[11px] text-outline">
                        Engine Model:
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-mono text-[10px] font-semibold">
                        Polaris-IndicSciLLM v2.4
                      </span>
                    </div>
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-colors font-label-md text-label-md shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        translate
                      </span>
                      {" "}
                      <span>
                        Translate All Missing
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
                <section className="xl:col-span-7 rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col justify-between space-y-space-md">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            rule_folder
                          </span>
                          <h2 className="font-headline-sm text-on-surface">
                            Bilingual Dispatches Editor
                          </h2>
                        </div>
                        <p className="font-body-sm text-outline mt-0.5">
                          {"Active Dispatch: "}
                          <span className="text-on-surface font-medium">
                            Overwintering in Schirmacher Oasis
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center bg-surface-container-low p-1 rounded-lg self-start">
                        <button className="px-3 py-1 rounded-md bg-surface-container-lowest text-primary font-label-mono text-label-md font-semibold shadow-xs" type="button">
                          Hindi
                        </button>
                        <button className="px-3 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-mono text-label-md" type="button">
                          Bengali
                        </button>
                        <button className="px-3 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-mono text-label-md" type="button">
                          Marathi
                        </button>
                        <button className="px-3 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-mono text-label-md" type="button">
                          Tamil
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-space-sm mb-space-md rounded-lg bg-secondary-container/40">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          verified_user
                        </span>
                        <span className="font-label-mono text-on-surface text-[11px] font-medium">
                          Neural Draft • 98.4% Confidence Score • Protected terms automatically validated against MoES Lexicon
                        </span>
                      </div>
                      <span className="font-label-mono text-[10px] text-tertiary font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-surface-container-lowest">
                        VALIDATED
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col space-y-space-sm p-space-md rounded-xl bg-surface-container-low/70">
                        <div className="flex items-center justify-between">
                          <span className="font-label-mono text-outline text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              lock
                            </span>
                            {" Source: English (Master) "}
                          </span>
                          <span className="font-label-mono text-[10px] text-outline">
                            NCPOR Expedition 43
                          </span>
                        </div>
                        <div className="space-y-space-xs">
                          <h3 className="font-headline-sm text-on-surface text-[17px] leading-snug">
                            {" Overwintering in the Schirmacher Oasis: Survival, Science, and Solar Isolation "}
                          </h3>
                          <p className="font-body-md text-on-surface-variant leading-relaxed text-[14px]">
                            {" "}
                            <mark className="bg-secondary-fixed text-on-secondary-fixed-variant px-1 rounded font-medium">
                              Katabatic Wind
                            </mark>
                            {" systems accelerate down the polar plateau at speeds exceeding 140 km/h, sweeping across the barren, ice-free rocky terrain of the "}
                            <mark className="bg-secondary-fixed text-on-secondary-fixed-variant px-1 rounded font-medium">
                              Schirmacher Oasis
                            </mark>
                            {". The "}
                            <mark className="bg-secondary-fixed text-on-secondary-fixed-variant px-1 rounded font-medium">
                              IndARC
                            </mark>
                            {" sensor array confirms steady thermal gradient preservation throughout the extended polar night. "}
                          </p>
                        </div>
                        <div className="pt-2 text-right">
                          <span className="font-label-mono text-[10px] text-outline">
                            Word count: 54 words • 3 protected tags
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-space-sm p-space-md rounded-xl bg-surface-container-lowest shadow-sm relative">
                        <div className="flex items-center justify-between">
                          <span className="font-label-mono text-primary text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              edit_note
                            </span>
                            {" Target: Hindi (हिन्दी) "}
                          </span>
                          <button className="text-outline hover:text-primary transition-colors text-[11px] font-label-mono flex items-center gap-0.5" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[13px]">
                              history
                            </span>
                            {" History "}
                          </button>
                        </div>
                        <div className="space-y-space-xs">
                          <input aria-label="Hindi Headline Title" className="w-full font-headline-sm text-[16px] text-on-surface bg-transparent focus:outline-none focus:bg-surface-container-low/40 rounded px-1 -mx-1 py-0.5 font-bold" type="text" defaultValue="शिरमाकर नखलिस्तान में शीतकालीन प्रवास: उत्तरजीविता, विज्ञान और सौर पृथक्करण" />
                          <textarea aria-label="Hindi Body Paragraph" className="w-full font-body-md text-on-surface leading-relaxed text-[14px] bg-transparent focus:outline-none focus:bg-surface-container-low/40 rounded p-1 -mx-1 resize-none" rows="4" defaultValue={"ध्रुवीय पठार से [[Katabatic Wind|कटैबैटिक पवनें]] 140 किमी/घंटा से अधिक गति से नीचे उतरती हैं, जो [[Schirmacher Oasis|शिरमाकर नखलिस्तान]] के बंजर, बर्फ-मुक्त चट्टानी भूभाग से होकर बहती हैं। [[IndARC|इंडआर्क]] सेंसर सरणी स्थिर तापीय प्रवणता संरक्षण की पुष्टि करती है।"} />
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className="font-label-mono text-[10px] text-tertiary flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[12px]">
                              check
                            </span>
                            {" Strict Rajbhasha verified "}
                          </span>
                          <span className="font-label-mono text-[10px] text-outline">
                            Last modified: 14 mins ago
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md shadow-xs" type="button">
                        {" Request Human Re-edit "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md shadow-xs flex items-center gap-1" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[15px]">
                          difference
                        </span>
                        {" Diff View "}
                      </button>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-all font-label-md text-label-md shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      {" "}
                      <span>
                        Approve & Sign-Off Translation
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
                <section className="xl:col-span-7 rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col justify-between space-y-space-md">
                  <div>
                    <div className="flex items-start justify-between pb-space-sm gap-space-sm">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            graphic_eq
                          </span>
                          <h2 className="font-headline-sm text-on-surface">
                            Audio Narration Studio & Synced Transcript
                          </h2>
                        </div>
                        <p className="font-body-sm text-on-surface-variant mt-1">
                          Configure multilingual neural synthesis or manage studio MP3 narrations
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-semibold">
                        STUDIO TTS v3
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container-low/60 mb-space-md">
                      <div className="space-y-1">
                        <label className="block font-label-mono uppercase text-outline text-[10px] font-semibold" htmlFor="voice-model">
                          Voice Model
                        </label>
                        <select className="w-full bg-surface-container-lowest text-on-surface rounded-lg px-2.5 py-1.5 font-body-sm text-body-sm shadow-xs focus:outline-none" id="voice-model" defaultValue="Aarav - Polar Narrative (Deep, Clear)">
                          <option>
                            Aarav - Polar Narrative (Deep, Clear)
                          </option>
                          <option>
                            Aditi - Scholarly Academic (Crisp)
                          </option>
                          <option>
                            Kabir - Hindi Field Correspondent
                          </option>
                          <option>
                            Studio Native Recorded Take
                          </option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <label className="block font-label-mono uppercase text-outline text-[10px] font-semibold" htmlFor="speed-slider">
                            Speed Cadence
                          </label>
                          <span className="font-label-mono text-primary text-[10px] font-semibold">
                            1.0x (Standard)
                          </span>
                        </div>
                        <input className="w-full accent-primary-container cursor-pointer mt-1" id="speed-slider" max="1.4" min="0.8" step="0.1" type="range" defaultValue="1.0" />
                        <div className="flex justify-between font-label-mono text-[9px] text-outline px-0.5">
                          <span>
                            0.8x
                          </span>
                          <span>
                            1.0x
                          </span>
                          <span>
                            1.4x
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="block font-label-mono uppercase text-outline text-[10px] font-semibold" htmlFor="tone-preset">
                          Acoustic Atmosphere
                        </label>
                        <select className="w-full bg-surface-container-lowest text-on-surface rounded-lg px-2.5 py-1.5 font-body-sm text-body-sm shadow-xs focus:outline-none" id="tone-preset" defaultValue="Documentary Outreach">
                          <option>
                            Documentary Outreach
                          </option>
                          <option>
                            Classroom / Young Citizen
                          </option>
                          <option>
                            Formal Policy Briefing
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <button className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:bg-primary transition-all shadow-sm" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[22px]">
                              play_arrow
                            </span>
                            {" "}
                          </button>
                          <button className="w-8 h-8 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[16px]">
                              replay_10
                            </span>
                            {" "}
                          </button>
                          <div className="flex flex-col">
                            <span className="font-label-mono text-on-surface text-[12px] font-bold">
                              01:24 / 04:30
                            </span>
                            <span className="font-label-mono text-outline text-[10px]">
                              Episode 43 • Hindi Track (Neural Master)
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-mono text-[10px]">
                            48kHz • 320kbps MP3
                          </span>
                          <button className="p-1 rounded text-outline hover:text-on-surface" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              volume_up
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                      <div className="w-full h-12 bg-surface-container-low/70 rounded-lg flex items-center px-3 gap-0.5 overflow-hidden">
                        <svg className="w-full h-8 text-primary-container" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 400 40">
                          <rect className="opacity-40" height="8" rx="1.5" width="3" x="0" y="16" />
                          <rect className="opacity-50" height="16" rx="1.5" width="3" x="5" y="12" />
                          <rect className="opacity-70" height="24" rx="1.5" width="3" x="10" y="8" />
                          <rect className="opacity-80" height="32" rx="1.5" width="3" x="15" y="4" />
                          <rect className="opacity-90" height="20" rx="1.5" width="3" x="20" y="10" />
                          <rect height="12" rx="1.5" width="3" x="25" y="14" />
                          <rect height="28" rx="1.5" width="3" x="30" y="6" />
                          <rect height="36" rx="1.5" width="3" x="35" y="2" />
                          <rect height="24" rx="1.5" width="3" x="40" y="8" />
                          <rect height="16" rx="1.5" width="3" x="45" y="12" />
                          <rect height="10" rx="1.5" width="3" x="50" y="15" />
                          <rect height="26" rx="1.5" width="3" x="55" y="7" />
                          <rect height="34" rx="1.5" width="3" x="60" y="3" />
                          <rect height="20" rx="1.5" width="3" x="65" y="10" />
                          <rect height="12" rx="1.5" width="3" x="70" y="14" />
                          <rect height="30" rx="1.5" width="3" x="75" y="5" />
                          <rect height="18" rx="1.5" width="3" x="80" y="11" />
                          <rect height="22" rx="1.5" width="3" x="85" y="9" />
                          <rect height="10" rx="1.5" width="3" x="90" y="15" />
                          <rect height="28" rx="1.5" width="3" x="95" y="6" />
                          <rect height="14" rx="1.5" width="3" x="100" y="13" />
                          <rect height="34" rx="1.5" width="3" x="105" y="3" />
                          <rect height="24" rx="1.5" width="3" x="110" y="8" />
                          <rect height="16" rx="1.5" width="3" x="115" y="12" />
                          <rect className="text-tertiary" height="40" width="2" x="120" y="0" />
                          <g className="text-outline-variant">
                            <rect height="12" rx="1.5" width="3" x="125" y="14" />
                            <rect height="28" rx="1.5" width="3" x="130" y="6" />
                            <rect height="36" rx="1.5" width="3" x="135" y="2" />
                            <rect height="20" rx="1.5" width="3" x="140" y="10" />
                            <rect height="24" rx="1.5" width="3" x="145" y="8" />
                            <rect height="10" rx="1.5" width="3" x="150" y="15" />
                            <rect height="32" rx="1.5" width="3" x="155" y="4" />
                            <rect height="18" rx="1.5" width="3" x="160" y="11" />
                            <rect height="22" rx="1.5" width="3" x="165" y="9" />
                            <rect height="12" rx="1.5" width="3" x="170" y="14" />
                            <rect height="26" rx="1.5" width="3" x="175" y="7" />
                            <rect height="34" rx="1.5" width="3" x="180" y="3" />
                            <rect height="20" rx="1.5" width="3" x="185" y="10" />
                            <rect height="16" rx="1.5" width="3" x="190" y="12" />
                            <rect height="30" rx="1.5" width="3" x="195" y="5" />
                            <rect height="10" rx="1.5" width="3" x="200" y="15" />
                            <rect height="22" rx="1.5" width="3" x="205" y="9" />
                            <rect height="28" rx="1.5" width="3" x="210" y="6" />
                            <rect height="14" rx="1.5" width="3" x="215" y="13" />
                            <rect height="32" rx="1.5" width="3" x="220" y="4" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-space-md p-space-md rounded-xl bg-surface-container-low/40 space-y-space-xs">
                      <span className="font-label-mono text-[10px] text-outline uppercase font-semibold">
                        Live Timecoded Read-Along Synced Sentence
                      </span>
                      <p className="font-body-md text-on-surface leading-relaxed">
                        {" "}
                        <span className="bg-secondary-container/80 text-on-surface px-1.5 py-0.5 rounded font-medium">
                          "ध्रुवीय पठार से कटैबैटिक पवनें 140 किमी/घंटा से अधिक गति से नीचे उतरती हैं..."
                        </span>
                        {" "}
                        <span className="text-outline">
                          ...जो शिरमाकर नखलिस्तान के बंजर, बर्फ-मुक्त चट्टानी भूभाग से होकर बहती हैं।
                        </span>
                        {" "}
                      </p>
                    </div>
                  </div>
                  <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl">
                    <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-xs" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        upload_file
                      </span>
                      {" "}
                      <span>
                        Upload Studio Master MP3
                      </span>
                      {" "}
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-all font-label-md text-label-md shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        cell_tower
                      </span>
                      {" "}
                      <span>
                        Publish Synced Audio Stream
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
                <section className="xl:col-span-5 rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col justify-between space-y-space-md">
                  <div>
                    <div className="flex items-start justify-between pb-space-sm gap-space-sm">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            menu_book
                          </span>
                          <h2 className="font-headline-sm text-on-surface">
                            Protected Polar Lexicon
                          </h2>
                        </div>
                        <p className="font-body-sm text-on-surface-variant mt-1">
                          Non-translatables and standardized scientific nomenclature
                        </p>
                      </div>
                      <button className="p-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors text-primary" title="Add New Lexicon Term" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          add
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="relative flex items-center mb-space-md">
                      <span className="material-symbols-outlined absolute left-3 text-outline text-[16px]">
                        search
                      </span>
                      <input className="w-full pl-9 pr-3 py-2 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest shadow-xs" placeholder="Search 412 protected polar terms..." type="text" />
                    </div>
                    <div className="space-y-space-xs max-h-[380px] overflow-y-auto pr-1">
                      <div className="p-space-sm rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-md text-on-surface font-semibold text-[13px]">
                              Katabatic Wind
                            </span>
                            <span className="material-symbols-outlined text-outline text-[14px]">
                              arrow_forward
                            </span>
                            <span className="font-title-md text-primary font-semibold text-[13px]">
                              कटैबैटिक पवन
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-outline font-label-mono text-[9px] uppercase font-semibold">
                            Locked
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-label-mono text-[10px] text-outline">
                          <span>
                            Rule: Transliterate + Hindi Parenthetical
                          </span>
                          <span className="text-secondary font-medium">
                            Atmospheric Science
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-md text-on-surface font-semibold text-[13px]">
                              Nunatak
                            </span>
                            <span className="material-symbols-outlined text-outline text-[14px]">
                              arrow_forward
                            </span>
                            <span className="font-title-md text-primary font-semibold text-[13px]">
                              नूनाटक (Nunatak)
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-outline font-label-mono text-[9px] uppercase font-semibold">
                            Locked
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-label-mono text-[10px] text-outline">
                          <span>
                            Rule: Keep Strict Polar Terminology
                          </span>
                          <span className="text-secondary font-medium">
                            Glaciology
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-md text-on-surface font-semibold text-[13px]">
                              IndARC
                            </span>
                            <span className="material-symbols-outlined text-outline text-[14px]">
                              arrow_forward
                            </span>
                            <span className="font-title-md text-primary font-semibold text-[13px]">
                              इंडआर्क (IndARC)
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-outline font-label-mono text-[9px] uppercase font-semibold">
                            Locked
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-label-mono text-[10px] text-outline">
                          <span>
                            Rule: Institutional MoES Acronym (Never translate)
                          </span>
                          <span className="text-secondary font-medium">
                            MoES Instrument
                          </span>
                        </div>
                      </div>
                      <div className="p-space-sm rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low transition-colors space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-md text-on-surface font-semibold text-[13px]">
                              Schirmacher Oasis
                            </span>
                            <span className="material-symbols-outlined text-outline text-[14px]">
                              arrow_forward
                            </span>
                            <span className="font-title-md text-primary font-semibold text-[13px]">
                              शिरमाकर नखलिस्तान
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-outline font-label-mono text-[9px] uppercase font-semibold">
                            Locked
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-label-mono text-[10px] text-outline">
                          <span>
                            Rule: Antarctic Geographic Proper Noun
                          </span>
                          <span className="text-secondary font-medium">
                            Polar Geography
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl">
                    <span className="font-label-mono text-[11px] text-outline">
                      412 active validation rules
                    </span>
                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary transition-colors font-label-md text-label-md shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        sync
                      </span>
                      {" "}
                      <span>
                        Sync Glossary to Indic-LLM Engine
                      </span>
                      {" "}
                    </button>
                  </div>
                </section>
              </div>
              <footer className="pt-space-md pb-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm text-outline">
                {" "}
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                  <p className="font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                    {" POLARIS MULTILINGUAL SCIENCE ACCESSIBILITY ENGINE • National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India "}
                  </p>
                </div>
                {" "}
                <div className="flex items-center gap-3 font-label-mono text-[10px] text-outline">
                  <span className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface">
                    LEVEL 4 CLEARANCE
                  </span>
                  <span>
                    DPDP ACT 2023 COMPLIANT
                  </span>
                  <span>
                    •
                  </span>
                  <span>
                    RAJBHASHA GUIDELINES 2024
                  </span>
                </div>
                {" "}
              </footer>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
