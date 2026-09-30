import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_social_channel_settings_admin_social/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }";
const PAGE_SCRIPT = "document.addEventListener('DOMContentLoaded', () => {\n      // Dismiss Alert Banner\n      const dismissBtn = document.getElementById('dismiss-banner-btn');\n      const banner = document.getElementById('token-alert-banner');\n      if (dismissBtn && banner) {\n        dismissBtn.addEventListener('click', () => {\n          banner.style.opacity = '0';\n          banner.style.transform = 'translateY(-8px)';\n          setTimeout(() => banner.remove(), 200);\n        });\n      }\n\n      // Save Config Feedback\n      const saveBtn = document.getElementById('save-config-btn');\n      if (saveBtn) {\n        saveBtn.addEventListener('click', () => {\n          const originalText = saveBtn.innerHTML;\n          saveBtn.innerHTML = '<span class=\"material-symbols-outlined text-[18px]\">done_all</span><span>Saved Successfully</span>';\n          saveBtn.classList.add('bg-tertiary-container', 'text-on-tertiary-container');\n          setTimeout(() => {\n            saveBtn.innerHTML = originalText;\n            saveBtn.classList.remove('bg-tertiary-container', 'text-on-tertiary-container');\n          }, 2400);\n        });\n      }\n    });";

export default function AdminSocialPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-screen w-[240px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(11,31,58,0.04)]">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="h-[72px] px-space-md flex items-center gap-3 bg-surface-container-lowest">
            <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">
                explore
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-title-md text-title-md font-bold text-on-surface tracking-wider">
                  POLARIS
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[9px] font-bold">
                  MoES
                </span>
              </div>
              <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                NCPOR India
              </span>
            </div>
          </div>
          <div className="px-space-sm py-space-xs">
            <div className="px-3 py-1 font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Operational
            </div>
            <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-title-md rounded-lg">
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="dashboard" to="/admin">
                <span className="material-symbols-outlined text-[18px]">
                  space_dashboard
                </span>
                <span>
                  Dashboard
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="expeditions" to="/expeditions/soe-01">
                <span className="material-symbols-outlined text-[18px]">
                  flight_takeoff
                </span>
                <span>
                  Expeditions
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="upload" to="/admin/upload">
                <span className="material-symbols-outlined text-[18px]">
                  cloud_upload
                </span>
                <span>
                  Upload
                </span>
              </Link>
              <a className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ai-queue" href="#" onClick={(e)=>e.preventDefault()}>
                <span className="material-symbols-outlined text-[18px]">
                  psychology
                </span>
                <span>
                  AI Queue
                </span>
              </a>
            </nav>
          </div>
          <div className="px-space-sm py-space-xs">
            <div className="px-3 py-1 font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Editorial Studio
            </div>
            <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-title-md rounded-lg">
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="content-studio" to="/admin/studio">
                <span className="material-symbols-outlined text-[18px]">
                  edit_document
                </span>
                <span>
                  Content Studio
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="review" to="/admin/review">
                <span className="material-symbols-outlined text-[18px]">
                  fact_check
                </span>
                <span>
                  Review
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="publishing" to="/admin/publishing">
                <span className="material-symbols-outlined text-[18px]">
                  publish
                </span>
                <span>
                  Publishing
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="media-library" to="/admin/media">
                <span className="material-symbols-outlined text-[18px]">
                  photo_library
                </span>
                <span>
                  Media Library
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="education-manager" to="/admin/education">
                <span className="material-symbols-outlined text-[18px]">
                  school
                </span>
                <span>
                  Education Manager
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="events-and-inbox" to="/admin/events-inbox">
                <span className="material-symbols-outlined text-[18px]">
                  inbox
                </span>
                <span>
                  Events & Inbox
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="stories-and-website" to="/admin/content">
                <span className="material-symbols-outlined text-[18px]">
                  article
                </span>
                <span>
                  Stories & Website
                </span>
              </Link>
              <Link aria-current="page" className="flex items-center gap-2.5 px-3 py-2 transition-all bg-primary-container text-on-primary font-title-md rounded-lg" data-path="social-channels" to="/admin/social">
                <span className="material-symbols-outlined text-[18px]">
                  share
                </span>
                <span>
                  Social Channels
                </span>
              </Link>
            </nav>
          </div>
          <div className="px-space-sm py-space-xs">
            <div className="px-3 py-1 font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Governance
            </div>
            <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary font-title-md rounded-lg">
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="rights-and-integrations" to="/admin/rights">
                <span className="material-symbols-outlined text-[18px]">
                  gavel
                </span>
                <span>
                  Rights & Integrations
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="analytics" to="/admin/analytics">
                <span className="material-symbols-outlined text-[18px]">
                  query_stats
                </span>
                <span>
                  Analytics
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="notifications" to="/admin/notifications">
                <span className="material-symbols-outlined text-[18px]">
                  notifications
                </span>
                <span>
                  Notifications
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="users" to="/admin/users">
                <span className="material-symbols-outlined text-[18px]">
                  group
                </span>
                <span>
                  Users
                </span>
              </Link>
              <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="settings" to="/admin/profile">
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
        <div className="p-space-sm bg-surface-container-lowest">
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-title-md text-title-md text-on-surface truncate leading-tight">
                Dr. Ananya Sen
              </span>
              <span className="font-label-mono text-[10px] text-on-surface-variant truncate">
                Lead Scientist / Editor
              </span>
            </div>
          </div>
        </div>
      </aside>
      <div className="pl-[240px]">
        <header className="fixed top-0 left-[240px] right-0 h-[72px] bg-surface-container-lowest/90 backdrop-blur-xl z-40 flex items-center justify-between px-gutter shadow-[0_1px_8px_rgba(11,31,58,0.04)]">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
              <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface font-semibold">
                HIMADRI TELEMETRY ONLINE
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant w-72">
              <span className="material-symbols-outlined text-[18px]">
                search
              </span>
              <span className="font-body-sm text-body-sm flex-1 text-on-surface-variant">
                Search logs, media, events...
              </span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface-container-lowest font-label-mono text-[10px] text-on-surface-variant shadow-sm">
                ⌘K
              </kbd>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold tracking-wide">
              EDITOR / ADMIN (E, A)
            </span>
            <div className="relative flex items-center justify-center">
              <button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
              </button>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </header>
        <main className="relative pt-[72px] min-h-screen bg-surface">
          <div className="flex flex-col w-full">
            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-8 flex flex-col gap-8">
              <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
                {" "}
                <div className="flex flex-col gap-2 max-w-4xl">
                  <div className="flex items-center gap-2 font-label-mono text-label-mono text-primary font-semibold tracking-wider uppercase">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>
                      POLARIS EDITORIAL CORE
                    </span>
                    <span className="text-outline">
                      /
                    </span>
                    <span>
                      SOCIAL BROADCAST GATEWAY
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                      MoES OUTREACH-V2
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Social Channel Settings & Syndication
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {" Configure external social syndication endpoints, automated hashtag governance, image aspect ratio presets, API OAuth tokens, and pre-broadcast approval enforcement across official MoES & NCPOR channels. "}
                  </p>
                </div>
                {" "}
                <div className="flex items-center gap-3 shrink-0">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-title-md text-body-sm font-medium shadow-sm" id="save-config-btn" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    {" "}
                    <span>
                      Save All Configuration
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary transition-all font-title-md text-body-sm font-semibold shadow-sm" id="connect-handle-btn" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      add_link
                    </span>
                    {" "}
                    <span>
                      + Connect New Handle
                    </span>
                    {" "}
                  </button>
                </div>
                {" "}
              </header>
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-outline font-semibold">
                      Active Channels
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse" />
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md text-on-surface font-semibold">
                      5 / 5 Connected
                    </div>
                    <div className="font-body-sm text-body-sm text-secondary mt-1">
                      X, Instagram, Facebook, LinkedIn, YouTube
                    </div>
                  </div>
                  <div className="pt-2 flex items-center gap-2 font-label-mono text-[11px] text-tertiary font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      sensors
                    </span>
                    <span>
                      100% gateway synchronization
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-outline font-semibold">
                      Broadcast Mode
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md text-on-surface font-semibold">
                      Pre-Approval
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Editor or Scientist sign-off required
                    </div>
                  </div>
                  <div className="pt-2 flex items-center gap-2 font-label-mono text-[11px] text-primary font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      lock
                    </span>
                    <span>
                      Strict governance active
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-outline font-semibold">
                      Pending Token Refresh
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-mono text-[10px] font-bold">
                      1 WARN
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md text-on-surface font-semibold">
                      1 Channel Alert
                    </div>
                    <div className="font-body-sm text-body-sm text-error font-medium mt-1">
                      LinkedIn token expires in 3 days
                    </div>
                  </div>
                  <div className="pt-2 flex items-center gap-2 font-label-mono text-[11px] text-outline font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      schedule
                    </span>
                    <span>
                      Action required before 28 Oct
                    </span>
                  </div>
                </div>
                <div className="rounded-xl bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-outline font-semibold">
                      30-Day Dispatches
                    </span>
                    <span className="material-symbols-outlined text-tertiary text-[20px]">
                      send_and_archive
                    </span>
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md text-on-surface font-semibold">
                      142 Successful
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      99.3% delivery rate, 0 API bans
                    </div>
                  </div>
                  <div className="pt-2 flex items-center gap-2 font-label-mono text-[11px] text-tertiary font-medium">
                    <span className="material-symbols-outlined text-[14px]">
                      trending_up
                    </span>
                    <span>
                      +14.8% outreach impact
                    </span>
                  </div>
                </div>
              </section>
              <div className="rounded-xl bg-surface-container-high p-5 shadow-sm transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4" id="token-alert-banner">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-error flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">
                      warning
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-title-md text-title-md font-semibold text-on-surface">
                        Action Required: LinkedIn OAuth 2.0 Token Expiring
                      </span>
                      <span className="px-2 py-0.2 rounded-full bg-error text-on-error font-label-mono text-[10px] font-bold uppercase tracking-wider">
                        Crucial
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {" LinkedIn OAuth 2.0 API token for "}
                      <strong className="font-semibold text-on-surface">
                        @NCPOR-India
                      </strong>
                      {" expires on October 28, 2024 at 14:00 IST. Automatic refresh failed due to MoES enterprise SSO re-authentication requirement. "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
                  <button className="px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-title-md text-body-sm font-semibold transition-colors shadow-sm" type="button">
                    {" Re-authenticate Now "}
                  </button>
                  <button className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest transition-colors font-body-sm text-body-sm" id="dismiss-banner-btn" type="button">
                    {" Dismiss Alert "}
                  </button>
                </div>
              </div>
              <section className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Connected Social Broadcast Channels
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Configured distribution nodes with automated dispatch constraints & telemetry pipelines
                    </p>
                  </div>
                  <span className="font-label-mono text-label-mono text-outline font-medium uppercase tracking-wider">
                    5 Endpoints Registered
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6">
                    {" "}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xl shadow-inner">
                            {" 𝕏 "}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                              <span className="font-title-md text-title-md font-bold text-on-surface">
                                @NCPOR_India
                              </span>
                              <span className="material-symbols-outlined text-[16px] text-primary" title="Verified Govt Organisation">
                                verified
                              </span>
                            </div>
                            <span className="font-label-mono text-label-mono text-outline">
                              X API v2 Pro Tier • 84.5K Reach
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-mono text-[11px] font-semibold">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          {" Connected "}
                        </span>
                      </div>
                      <div className="space-y-4 pt-2">
                        <div>
                          <label className="block font-label-mono text-[11px] uppercase tracking-wider text-outline mb-1.5">
                            Default Hashtag Matrix
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #PolarScience
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #NCPOR
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #MoES
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #Antarctica
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #Arctic
                            </span>
                            <button className="px-2 py-0.5 rounded-md bg-surface-container-high hover:bg-secondary-container text-on-surface font-label-mono text-[11px] font-semibold transition-colors" type="button">
                              + Edit
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm">
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Media Preset
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              16:9 Landscape
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              {"1200×675 • Video <140s"}
                            </span>
                          </div>
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Dispatch Rule
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              {"Auto-Thread >280c"}
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              Mandatory DOI Link
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                          <div className="flex flex-col">
                            <span className="font-title-md text-[13px] font-semibold text-on-surface">
                              Pre-Broadcast Approval
                            </span>
                            <span className="font-label-mono text-[10px] text-outline">
                              Lead Editor review gate
                            </span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="sr-only peer" type="checkbox" />
                            {" "}
                            <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                            {" "}
                          </label>
                        </div>
                        <div className="flex items-center justify-between text-body-sm font-label-mono text-[11px] text-outline px-1">
                          <span>
                            OAuth Token Validity:
                          </span>
                          <span className="text-tertiary font-semibold">
                            Valid for 88 days • Auto-renewal active
                          </span>
                        </div>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="pt-4 flex items-center justify-between gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-title-md text-body-sm transition-colors font-medium" type="button">
                        Test Post
                      </button>
                      <div className="flex items-center gap-3">
                        <button className="text-primary hover:text-primary-container font-title-md text-body-sm font-semibold transition-colors" type="button">
                          Configure Rules
                        </button>
                        <button className="text-error hover:text-on-error-container font-title-md text-body-sm transition-colors" type="button">
                          Disconnect
                        </button>
                      </div>
                    </div>
                    {" "}
                  </article>
                  <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6">
                    {" "}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xl shadow-inner">
                            <span className="material-symbols-outlined text-[24px]">
                              photo_camera
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                              <span className="font-title-md text-title-md font-bold text-on-surface">
                                @ncpor.india
                              </span>
                              <span className="material-symbols-outlined text-[16px] text-primary" title="Verified Govt Account">
                                verified
                              </span>
                            </div>
                            <span className="font-label-mono text-label-mono text-outline">
                              Graph API v19 • 42.1K Reach
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-mono text-[11px] font-semibold">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          {" Connected "}
                        </span>
                      </div>
                      <div className="space-y-4 pt-2">
                        <div>
                          <label className="block font-label-mono text-[11px] uppercase tracking-wider text-outline mb-1.5">
                            Default Hashtag Matrix
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #IndiaInAntarctica
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #Cryosphere
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #MaitriStation
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #Bharati
                            </span>
                            <button className="px-2 py-0.5 rounded-md bg-surface-container-high hover:bg-secondary-container text-on-surface font-label-mono text-[11px] font-semibold transition-colors" type="button">
                              + Edit
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm">
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Media Preset
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              4:5 & 9:16 Reels
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              1080×1350 / 1080×1920
                            </span>
                          </div>
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Dispatch Rule
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              1st Comment Tags
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              Mandatory Alt-Text
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                          <div className="flex flex-col">
                            <span className="font-title-md text-[13px] font-semibold text-on-surface">
                              Pre-Broadcast Approval
                            </span>
                            <span className="font-label-mono text-[10px] text-outline">
                              Visual watermarking verified
                            </span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="sr-only peer" type="checkbox" />
                            {" "}
                            <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                            {" "}
                          </label>
                        </div>
                        <div className="flex items-center justify-between text-body-sm font-label-mono text-[11px] text-outline px-1">
                          <span>
                            OAuth Token Validity:
                          </span>
                          <span className="text-tertiary font-semibold">
                            Valid for 54 days
                          </span>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="pt-4 flex items-center justify-between gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-title-md text-body-sm transition-colors font-medium" type="button">
                        Test Post
                      </button>
                      <div className="flex items-center gap-3">
                        <button className="text-primary hover:text-primary-container font-title-md text-body-sm font-semibold transition-colors" type="button">
                          Configure Rules
                        </button>
                        <button className="text-error hover:text-on-error-container font-title-md text-body-sm transition-colors" type="button">
                          Disconnect
                        </button>
                      </div>
                    </div>
                    {" "}
                  </article>
                  <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6">
                    {" "}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xl shadow-inner">
                            {" in "}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                              <span className="font-title-md text-title-md font-bold text-on-surface truncate max-w-[150px]">
                                NCPOR India
                              </span>
                              <span className="material-symbols-outlined text-[16px] text-primary" title="Institutional Verified">
                                verified
                              </span>
                            </div>
                            <span className="font-label-mono text-label-mono text-outline">
                              Community API • 29.8K Reach
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-mono text-[11px] font-semibold">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-error" />
                          {" Action Req. "}
                        </span>
                      </div>
                      <div className="space-y-4 pt-2">
                        <div>
                          <label className="block font-label-mono text-[11px] uppercase tracking-wider text-outline mb-1.5">
                            Default Hashtag Matrix
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #Oceanography
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #PolarResearch
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #Leadership
                            </span>
                            <button className="px-2 py-0.5 rounded-md bg-surface-container-high hover:bg-secondary-container text-on-surface font-label-mono text-[11px] font-semibold transition-colors" type="button">
                              + Edit
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm">
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Media Preset
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              1.91:1 Carousel
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              1200×628 PDF / Slide
                            </span>
                          </div>
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Dispatch Rule
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              ORCID Author Tag
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              MoES Disclaimer Req
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                          <div className="flex flex-col">
                            <span className="font-title-md text-[13px] font-semibold text-on-surface">
                              Pre-Broadcast Approval
                            </span>
                            <span className="font-label-mono text-[10px] text-outline">
                              Lead Author tag verification
                            </span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="sr-only peer" type="checkbox" />
                            {" "}
                            <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                            {" "}
                          </label>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-high flex items-center justify-between font-label-mono text-[11px]">
                          <span className="text-error font-semibold flex items-center gap-1">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              timer
                            </span>
                            {" Token expires in 3 days "}
                          </span>
                          <span className="text-on-surface-variant underline cursor-pointer">
                            SSO re-auth
                          </span>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="pt-4 flex items-center justify-between gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-title-md text-body-sm transition-colors font-semibold shadow-sm" type="button">
                        Renew Token
                      </button>
                      <div className="flex items-center gap-3">
                        <button className="text-on-surface-variant hover:text-on-surface font-title-md text-body-sm font-medium transition-colors" type="button">
                          Test Post
                        </button>
                        <button className="text-error hover:text-on-error-container font-title-md text-body-sm transition-colors" type="button">
                          Disconnect
                        </button>
                      </div>
                    </div>
                    {" "}
                  </article>
                  <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6">
                    {" "}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xl shadow-inner">
                            {" f "}
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                              <span className="font-title-md text-title-md font-bold text-on-surface truncate max-w-[150px]">
                                @NCPORIndiaOfficial
                              </span>
                              <span className="material-symbols-outlined text-[16px] text-primary" title="Verified Govt Page">
                                verified
                              </span>
                            </div>
                            <span className="font-label-mono text-label-mono text-outline">
                              Meta Business API • 36.4K Reach
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-mono text-[11px] font-semibold">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          {" Connected "}
                        </span>
                      </div>
                      <div className="space-y-4 pt-2">
                        <div>
                          <label className="block font-label-mono text-[11px] uppercase tracking-wider text-outline mb-1.5">
                            Default Hashtag Matrix
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #MoES
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #NCPOR
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #ScienceOutreach
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #PolarStations
                            </span>
                            <button className="px-2 py-0.5 rounded-md bg-surface-container-high hover:bg-secondary-container text-on-surface font-label-mono text-[11px] font-semibold transition-colors" type="button">
                              + Edit
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm">
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Media Preset
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              1:1 Square & 16:9
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              1080×1080 / 1920×1080
                            </span>
                          </div>
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Dispatch Rule
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              Bilingual Posts
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              Hindi + English Paired
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                          <div className="flex flex-col">
                            <span className="font-title-md text-[13px] font-semibold text-on-surface">
                              Pre-Broadcast Approval
                            </span>
                            <span className="font-label-mono text-[10px] text-outline">
                              Rajbhasha compliance check
                            </span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="sr-only peer" type="checkbox" />
                            {" "}
                            <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                            {" "}
                          </label>
                        </div>
                        <div className="flex items-center justify-between text-body-sm font-label-mono text-[11px] text-outline px-1">
                          <span>
                            OAuth Token Validity:
                          </span>
                          <span className="text-tertiary font-semibold">
                            Valid for 62 days
                          </span>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="pt-4 flex items-center justify-between gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-title-md text-body-sm transition-colors font-medium" type="button">
                        Test Post
                      </button>
                      <div className="flex items-center gap-3">
                        <button className="text-primary hover:text-primary-container font-title-md text-body-sm font-semibold transition-colors" type="button">
                          Configure Rules
                        </button>
                        <button className="text-error hover:text-on-error-container font-title-md text-body-sm transition-colors" type="button">
                          Disconnect
                        </button>
                      </div>
                    </div>
                    {" "}
                  </article>
                  <article className="rounded-xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6">
                    {" "}
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-xl shadow-inner">
                            <span className="material-symbols-outlined text-[24px]">
                              smart_display
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                              <span className="font-title-md text-title-md font-bold text-on-surface truncate max-w-[150px]">
                                NCPOR Films
                              </span>
                              <span className="material-symbols-outlined text-[16px] text-primary" title="Official YouTube Partner">
                                verified
                              </span>
                            </div>
                            <span className="font-label-mono text-label-mono text-outline">
                              YouTube API v3 • 58.2K Subs
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-tertiary font-label-mono text-[11px] font-semibold">
                          {" "}
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                          {" Connected "}
                        </span>
                      </div>
                      <div className="space-y-4 pt-2">
                        <div>
                          <label className="block font-label-mono text-[11px] uppercase tracking-wider text-outline mb-1.5">
                            Default Tag Matrix
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #PolarExpedition
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #OceanScience
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-surface-container-low text-primary font-label-mono text-[11px]">
                              #Documentary
                            </span>
                            <button className="px-2 py-0.5 rounded-md bg-surface-container-high hover:bg-secondary-container text-on-surface font-label-mono text-[11px] font-semibold transition-colors" type="button">
                              + Edit
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-body-sm font-body-sm">
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Media Preset
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              16:9 UHD & 9:16
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              3840×2160 & Shorts
                            </span>
                          </div>
                          <div className="p-3 rounded-lg bg-surface-container-low">
                            <span className="block font-label-mono text-[10px] uppercase tracking-wider text-outline">
                              Dispatch Rule
                            </span>
                            <span className="font-medium text-on-surface mt-0.5 block">
                              Auto Chapters
                            </span>
                            <span className="text-[11px] text-on-surface-variant font-label-mono">
                              Cat: Science & Tech
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                          <div className="flex flex-col">
                            <span className="font-title-md text-[13px] font-semibold text-on-surface">
                              Pre-Broadcast Approval
                            </span>
                            <span className="font-label-mono text-[10px] text-outline">
                              Video metadata and captions verified
                            </span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="sr-only peer" type="checkbox" />
                            {" "}
                            <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                            {" "}
                          </label>
                        </div>
                        <div className="flex items-center justify-between text-body-sm font-label-mono text-[11px] text-outline px-1">
                          <span>
                            OAuth Token Validity:
                          </span>
                          <span className="text-tertiary font-semibold">
                            Valid for 120 days
                          </span>
                        </div>
                      </div>
                    </div>
                    {" "}
                    <div className="pt-4 flex items-center justify-between gap-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-title-md text-body-sm transition-colors font-medium" type="button">
                        Test Post
                      </button>
                      <div className="flex items-center gap-3">
                        <button className="text-primary hover:text-primary-container font-title-md text-body-sm font-semibold transition-colors" type="button">
                          Video Preset
                        </button>
                        <button className="text-error hover:text-on-error-container font-title-md text-body-sm transition-colors" type="button">
                          Disconnect
                        </button>
                      </div>
                    </div>
                    {" "}
                  </article>
                  <div className="rounded-xl bg-surface-container-low p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[380px] hover:bg-surface-container-high transition-colors cursor-pointer group">
                    <div className="w-14 h-14 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[28px]">
                        add_to_photos
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 max-w-[240px]">
                      <span className="font-title-md text-title-md font-semibold text-on-surface">
                        Connect Endpoint
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Add Threads, Mastodon, WhatsApp Channel, or RSS Webhook feed
                      </span>
                    </div>
                    <button className="mt-2 px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-title-md text-body-sm font-semibold shadow-sm group-hover:bg-primary-container group-hover:text-on-primary transition-colors" type="button">
                      {" Configure Gateway "}
                    </button>
                  </div>
                </div>
              </section>
              <section className="rounded-xl bg-surface-container-lowest p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Global Syndication & Compliance Rules
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Institutional standards enforced automatically before external network handoff
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                    DPDP & MoES GUIDELINES 2024
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-lg bg-surface-container-low p-5 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          branding_watermark
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          {" "}
                          <input defaultChecked="" className="sr-only peer" type="checkbox" />
                          {" "}
                          <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                          {" "}
                        </label>
                      </div>
                      <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                        Automated Watermarking
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {" Burn official NCPOR vector crest into all outbound stills & carousels at 80% alpha opacity, anchored to bottom-right safety margins. "}
                      </p>
                    </div>
                    <div className="font-label-mono text-[11px] text-tertiary flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                      {" SVG Vector Stamp Active "}
                    </div>
                  </div>
                  <div className="rounded-lg bg-surface-container-low p-5 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          shield_person
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          {" "}
                          <input defaultChecked="" className="sr-only peer" type="checkbox" />
                          {" "}
                          <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                          {" "}
                        </label>
                      </div>
                      <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                        Pre-Broadcast Approval
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {" Require dual sign-off from designated Lead Editor and Peer Fact-Checker before any external broadcast API dispatch is unlocked. "}
                      </p>
                    </div>
                    <div className="font-label-mono text-[11px] text-primary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        lock_clock
                      </span>
                      {" 2-Person Protocol Enforced "}
                    </div>
                  </div>
                  <div className="rounded-lg bg-surface-container-low p-5 flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          translate
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          {" "}
                          <input defaultChecked="" className="sr-only peer" type="checkbox" />
                          {" "}
                          <div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:border-surface-container-highest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-container" />
                          {" "}
                        </label>
                      </div>
                      <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                        Bilingual Translation Engine
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {" Automatically render approved English text into official Rajbhasha (Hindi) through POLARIS Content Studio models with cryogenic nomenclature support. "}
                      </p>
                    </div>
                    <div className="font-label-mono text-[11px] text-tertiary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        smart_toy
                      </span>
                      {" Bilingual Synthesis Active "}
                    </div>
                  </div>
                </div>
              </section>
              <section className="rounded-xl bg-surface-container-lowest p-6 lg:p-8 shadow-sm flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Recent Dispatch & Syndication Log
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Real-time telemetry and audit records for the last 10 outbound transmissions
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-outline">
                        search
                      </span>
                      <input className="pl-9 pr-4 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors w-56" placeholder="Filter by title, author..." type="text" />
                    </div>
                    <select className="px-3 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer">
                      <option>
                        All Channels
                      </option>
                      <option>
                        𝕏 X (Twitter)
                      </option>
                      <option>
                        Instagram
                      </option>
                      <option>
                        LinkedIn
                      </option>
                      <option>
                        Facebook
                      </option>
                      <option>
                        YouTube
                      </option>
                    </select>
                    <select className="px-3 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer">
                      <option>
                        All Statuses
                      </option>
                      <option>
                        Published
                      </option>
                      <option>
                        Queued
                      </option>
                      <option>
                        Pending Approval
                      </option>
                    </select>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-title-md text-body-sm font-medium transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        download
                      </span>
                      {" "}
                      <span>
                        Export CSV
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-body-sm text-body-sm">
                    <thead>
                      <tr className="font-label-mono text-[11px] uppercase tracking-wider text-outline bg-surface-container-low/50">
                        <th className="py-3 px-4 rounded-l-lg">
                          Timestamp
                        </th>
                        <th className="py-3 px-4">
                          Endpoints
                        </th>
                        <th className="py-3 px-4 min-w-[260px]">
                          Content Payload / Title
                        </th>
                        <th className="py-3 px-4">
                          Dispatched By
                        </th>
                        <th className="py-3 px-4">
                          Pre-Approval
                        </th>
                        <th className="py-3 px-4">
                          Broadcast Status
                        </th>
                        <th className="py-3 px-4 text-right rounded-r-lg">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container-low">
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 font-label-mono text-on-surface-variant whitespace-nowrap">
                          Today 10:45 IST
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <div className="flex items-center gap-1.5 text-on-surface">
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="X">
                              𝕏
                            </span>
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="LinkedIn">
                              in
                            </span>
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="Facebook">
                              f
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 font-medium text-on-surface">
                          {" "}
                          <div className="flex flex-col">
                            <span className="hover:text-primary cursor-pointer transition-colors">
                              Overwintering in Schirmacher Oasis: Survival & Science
                            </span>
                            <span className="font-label-mono text-[11px] text-outline">
                              Story #POL-8912 • Cryosphere Core Series
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant whitespace-nowrap">
                          Dr. Ananya Sen (Editor)
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <span className="inline-flex items-center gap-1 text-tertiary font-label-mono text-[11px] font-semibold">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              check_circle
                            </span>
                            {" Lead Scientist Sign-off "}
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {" "}
                          <Link className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-low text-tertiary font-label-mono text-[11px] font-bold hover:bg-secondary-container transition-colors" to="/live/soe-01">
                            {" "}
                            <span>
                              Published (Live Link)
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-[12px]">
                              open_in_new
                            </span>
                            {" "}
                          </Link>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          {" "}
                          <div className="inline-flex items-center gap-2">
                            <button className="text-primary hover:text-primary-container font-title-md font-semibold text-body-sm transition-colors" type="button">
                              Metrics
                            </button>
                            <span className="text-outline">
                              |
                            </span>
                            <button className="text-on-surface-variant hover:text-on-surface font-title-md text-body-sm transition-colors" type="button">
                              View Post
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 font-label-mono text-on-surface-variant whitespace-nowrap">
                          Yesterday 18:30 IST
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <div className="flex items-center gap-1.5 text-on-surface">
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="Instagram">
                              {" "}
                              <span className="material-symbols-outlined text-[14px]">
                                photo_camera
                              </span>
                              {" "}
                            </span>
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="YouTube">
                              {" "}
                              <span className="material-symbols-outlined text-[14px]">
                                play_arrow
                              </span>
                              {" "}
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 font-medium text-on-surface">
                          {" "}
                          <div className="flex flex-col">
                            <span className="hover:text-primary cursor-pointer transition-colors">
                              IndARC Mooring Deployment in Kongsfjorden High Arctic
                            </span>
                            <span className="font-label-mono text-[11px] text-outline">
                              Media #ARC-0442 • MoES Svalbard Mission
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant whitespace-nowrap">
                          K. Nair (Admin)
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <span className="inline-flex items-center gap-1 text-tertiary font-label-mono text-[11px] font-semibold">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              check_circle
                            </span>
                            {" Auto-Verified "}
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {" "}
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-low text-tertiary font-label-mono text-[11px] font-bold">
                            {" Published "}
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          {" "}
                          <div className="inline-flex items-center gap-2">
                            <button className="text-primary hover:text-primary-container font-title-md font-semibold text-body-sm transition-colors" type="button">
                              Metrics
                            </button>
                            <span className="text-outline">
                              |
                            </span>
                            <button className="text-on-surface-variant hover:text-on-surface font-title-md text-body-sm transition-colors" type="button">
                              View Post
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 font-label-mono text-on-surface-variant whitespace-nowrap">
                          22 Oct 14:15 IST
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <div className="flex items-center gap-1.5 text-on-surface">
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="X">
                              𝕏
                            </span>
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="Facebook">
                              f
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 font-medium text-on-surface">
                          {" "}
                          <div className="flex flex-col">
                            <span className="hover:text-primary cursor-pointer transition-colors">
                              Katabatic Wind Surge Warning at Maitri Station (-38°C)
                            </span>
                            <span className="font-label-mono text-[11px] text-outline">
                              Advisory #MET-091 • Telemetry Alert Feed
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant whitespace-nowrap">
                          System Auto-Relay
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <span className="inline-flex items-center gap-1 text-primary font-label-mono text-[11px] font-semibold">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              bolt
                            </span>
                            {" Editorial Bypass (Urgent) "}
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {" "}
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-low text-tertiary font-label-mono text-[11px] font-bold">
                            {" Published "}
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          {" "}
                          <div className="inline-flex items-center gap-2">
                            <button className="text-primary hover:text-primary-container font-title-md font-semibold text-body-sm transition-colors" type="button">
                              Metrics
                            </button>
                            <span className="text-outline">
                              |
                            </span>
                            <button className="text-on-surface-variant hover:text-on-surface font-title-md text-body-sm transition-colors" type="button">
                              View Post
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-4 px-4 font-label-mono text-on-surface-variant whitespace-nowrap">
                          21 Oct 09:00 IST
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <div className="flex items-center gap-1.5 text-on-surface">
                            <span className="w-6 h-6 rounded bg-surface-container-high flex items-center justify-center text-xs font-bold" title="LinkedIn">
                              in
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 font-medium text-on-surface">
                          {" "}
                          <div className="flex flex-col">
                            <span className="hover:text-primary cursor-pointer transition-colors">
                              Southern Ocean Cruise 143: Microplastic Density Report
                            </span>
                            <span className="font-label-mono text-[11px] text-outline">
                              Story #OCN-2104 • Lead Author Dr. V. Murthy
                            </span>
                          </div>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant whitespace-nowrap">
                          Dr. Ananya Sen (Editor)
                        </td>
                        <td className="py-4 px-4">
                          {" "}
                          <span className="inline-flex items-center gap-1 text-error font-label-mono text-[11px] font-semibold">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              hourglass_top
                            </span>
                            {" Pending Sign-off "}
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          {" "}
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-[11px] font-bold">
                            {" Queued (Scheduled) "}
                          </span>
                          {" "}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          {" "}
                          <div className="inline-flex items-center gap-2">
                            <button className="text-primary hover:text-primary-container font-title-md font-semibold text-body-sm transition-colors" type="button">
                              Review Draft
                            </button>
                            <span className="text-outline">
                              |
                            </span>
                            <button className="text-error hover:text-on-error-container font-title-md text-body-sm transition-colors" type="button">
                              Cancel
                            </button>
                          </div>
                          {" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 font-label-mono text-label-mono text-outline">
                  <span>
                    Showing 4 of 142 broadcasts in active 30-day index
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 rounded bg-surface-container-low text-outline opacity-50 cursor-not-allowed" disabled="" type="button">
                      Previous
                    </button>
                    <span className="px-2 font-bold text-on-surface">
                      Page 1 of 36
                    </span>
                    <button className="px-3 py-1 rounded bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors" type="button">
                      Next
                    </button>
                  </div>
                </div>
              </section>
              <div className="flex items-center justify-center gap-3 py-4 text-outline/60 font-label-mono text-[11px]">
                <span className="w-12 h-px bg-outline/20" />
                <span>
                  NCPOR POLAR COMMUNICATIONS & TELEMETRY DIVISION • GOVT OF INDIA
                </span>
                <span className="w-12 h-px bg-outline/20" />
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full bg-surface-container-lowest py-space-md px-gutter shadow-[0_1px_8px_rgba(11,31,58,0.04)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 font-label-mono text-label-mono text-on-surface-variant">
            <div className="flex items-center gap-4">
              <span>
                Level 4 Security Clearance Active
              </span>
              <span>
                •
              </span>
              <span>
                MoES & NCPOR Provenance
              </span>
              <span>
                •
              </span>
              <span>
                DPDP Act 2023 Compliant
              </span>
            </div>
            <div>
              © 2024 National Centre for Polar and Ocean Research
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
