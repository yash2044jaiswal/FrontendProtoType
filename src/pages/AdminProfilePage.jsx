import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_admin_profile_settings_help_admin_profile/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base { html, body { margin: 0; padding: 0; } body { overscroll-behavior: none; } main > :first-child { margin-top: 0 !important; } main > :last-child { margin-bottom: 0 !important; } } ::-webkit-scrollbar { display: none; }";
const PAGE_SCRIPT = "function switchTab(tabId) {\n      // Hide all tabs\n      document.querySelectorAll('.tab-panel').forEach(panel => {\n        panel.classList.add('hidden');\n        panel.classList.remove('flex', 'grid');\n      });\n\n      // Reset pill styles\n      document.querySelectorAll('.tab-pill').forEach(btn => {\n        btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');\n        btn.classList.add('text-on-surface-variant');\n      });\n\n      // Activate clicked\n      const activeBtn = document.getElementById('nav-' + tabId);\n      if (activeBtn) {\n        activeBtn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');\n        activeBtn.classList.remove('text-on-surface-variant');\n      }\n\n      const activePanel = document.getElementById(tabId);\n      if (activePanel) {\n        activePanel.classList.remove('hidden');\n        if (tabId === 'tab-profile' || tabId === 'tab-help') {\n          activePanel.classList.add(tabId === 'tab-profile' ? 'grid' : 'flex');\n        } else {\n          activePanel.classList.add('flex');\n        }\n      }\n    }\n\n    // Save Changes Toast Feedback\n    const saveBtn = document.getElementById('saveGlobalBtn');\n    const toast = document.getElementById('statusToast');\n    const toastMsg = document.getElementById('statusToastMessage');\n\n    if (saveBtn && toast) {\n      saveBtn.addEventListener('click', () => {\n        toastMsg.innerText = 'All institutional credentials and security configurations saved successfully.';\n        toast.classList.remove('opacity-0', 'pointer-events-none');\n        toast.classList.add('opacity-100');\n        setTimeout(() => {\n          toast.classList.remove('opacity-100');\n          toast.classList.add('opacity-0', 'pointer-events-none');\n        }, 3200);\n      });\n    }\n\n    // Global Key Listener for Quick Help (Press '/')\n    window.addEventListener('keydown', (e) => {\n      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {\n        e.preventDefault();\n        switchTab('tab-help');\n        const searchInput = document.querySelector('#tab-help input[type=\"text\"]');\n        if (searchInput) searchInput.focus();\n      }\n    });";

export default function AdminProfilePage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-full w-60 bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-16 px-space-md border-b border-outline-variant/20 flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[18px]">
                ac_unit
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono px-1 rounded bg-secondary-container text-on-secondary-fixed-variant">
                  v4.2
                </span>
              </div>
              <span className="font-label-mono text-label-mono text-outline tracking-wider uppercase">
                NCPOR • MoES INDIA
              </span>
            </div>
          </div>
          <div className="px-space-md pt-space-md pb-space-xs">
            <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Operations & Science
            </span>
          </div>
          <nav className="flex flex-col px-space-sm gap-0.5" data-active-classes="bg-secondary-container text-on-secondary-fixed-variant font-title-md">
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="dashboard" to="/admin">
              <span className="material-symbols-outlined text-[18px]">
                space_dashboard
              </span>
              Dashboard
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="expeditions" to="/expeditions/soe-01">
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
              Expeditions
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="data-upload" to="/admin/upload">
              <span className="material-symbols-outlined text-[18px]">
                upload_file
              </span>
              Upload
            </Link>
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="ai-queue" href="#" onClick={(e)=>e.preventDefault()}>
              <span className="material-symbols-outlined text-[18px]">
                neurology
              </span>
              AI Queue
            </a>
          </nav>
          <div className="px-space-md pt-space-md pb-space-xs">
            <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Editorial Studio
            </span>
          </div>
          <nav className="flex flex-col px-space-sm gap-0.5" data-active-classes="bg-secondary-container text-on-secondary-fixed-variant font-title-md">
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="content-studio" to="/admin/studio">
              <span className="material-symbols-outlined text-[18px]">
                edit_note
              </span>
              Content Studio
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="review-desk" to="/admin/review">
              <span className="material-symbols-outlined text-[18px]">
                fact_check
              </span>
              Review Desk
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="publishing-dispatch" to="/admin/publishing">
              <span className="material-symbols-outlined text-[18px]">
                rocket_launch
              </span>
              Publishing
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="media-library" to="/admin/media">
              <span className="material-symbols-outlined text-[18px]">
                photo_library
              </span>
              Media Library
            </Link>
          </nav>
          <div className="px-space-md pt-space-md pb-space-xs">
            <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Outreach & Delivery
            </span>
          </div>
          <nav className="flex flex-col px-space-sm gap-0.5" data-active-classes="bg-secondary-container text-on-secondary-fixed-variant font-title-md">
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="education-manager" to="/admin/education">
              <span className="material-symbols-outlined text-[18px]">
                school
              </span>
              Education Manager
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="events-inbox" to="/admin/events-inbox">
              <span className="material-symbols-outlined text-[18px]">
                mail
              </span>
              Events & Inbox
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="social-channels" to="/admin/social">
              <span className="material-symbols-outlined text-[18px]">
                campaign
              </span>
              Social Channels
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="rights-integrations" to="/admin/rights">
              <span className="material-symbols-outlined text-[18px]">
                integration_instructions
              </span>
              Rights & Integrations
            </Link>
          </nav>
          <div className="px-space-md pt-space-md pb-space-xs">
            <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
              Governance & Control
            </span>
          </div>
          <nav className="flex flex-col px-space-sm gap-0.5 pb-space-md" data-active-classes="bg-secondary-container text-on-secondary-fixed-variant font-title-md">
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="analytics" to="/admin/analytics">
              <span className="material-symbols-outlined text-[18px]">
                query_stats
              </span>
              Analytics
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="notifications-hub" to="/admin/notifications">
              <span className="material-symbols-outlined text-[18px]">
                notifications
              </span>
              Notifications
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="users-access" to="/admin/users">
              <span className="material-symbols-outlined text-[18px]">
                group
              </span>
              Users
            </Link>
            <Link aria-current="page" className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg transition-all bg-secondary-container text-on-secondary-fixed-variant font-title-md" data-path="admin-profile-and-settings" to="/admin/profile">
              <span className="material-symbols-outlined text-[18px]">
                admin_panel_settings
              </span>
              Settings / Profile
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm hover:bg-surface-container-high hover:text-on-surface transition-all" data-path="help-documentation" to="/admin/profile">
              <span className="material-symbols-outlined text-[18px]">
                help
              </span>
              Help & SOPs
            </Link>
          </nav>
        </div>
        <div className="p-space-sm border-t border-outline-variant/20 bg-surface-container-low">
          <div className="flex items-center gap-space-sm p-space-xs rounded-lg bg-surface-container-lowest border border-outline-variant/30">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-title-md text-body-sm text-on-surface truncate">
                Dr. Ananya Sen
              </span>
              <span className="font-label-mono text-label-mono text-outline truncate">
                Lead Scientist • Ed.
              </span>
            </div>
            <a className="text-outline hover:text-primary transition-colors" data-path="admin-profile-and-settings" href="#" onClick={(e)=>e.preventDefault()}>
              <span className="material-symbols-outlined text-[18px]">
                more_vert
              </span>
            </a>
          </div>
        </div>
      </aside>
      <div className="pl-60 flex flex-col min-h-screen">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 z-40 px-space-lg flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/40">
              <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              <span className="font-label-mono text-label-mono font-bold text-on-surface tracking-wider uppercase">
                HIMADRI TELEMETRY ONLINE
              </span>
            </div>
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface-container-low border border-outline-variant/30 font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all" placeholder="Search logs, media, events, docs... (⌘K)" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden xl:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30">
              <span className="material-symbols-outlined text-tertiary text-[16px]">
                verified_user
              </span>
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider font-semibold">
                ROLE: SCIENTIST / EDITOR / ADMIN [C,S,E,A]
              </span>
            </div>
            <button className="relative p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
            </button>
            <div className="h-6 w-[1px] bg-outline-variant/30" />
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 pt-16 bg-[#F6F9FC] w-full">
          <div className="max-w-[1440px] mx-auto p-space-lg lg:p-space-xl">
            <div className="flex flex-col w-full">
              <div className="flex flex-col gap-space-sm mb-space-lg">
                <div className="flex items-center gap-space-xs font-label-mono text-label-mono tracking-widest text-outline uppercase">
                  <span>
                    POLARIS GOVERNANCE & STAFF PORTAL
                  </span>
                  <span className="text-outline-variant font-bold">
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    ADMIN PROFILE & SETTINGS
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                  <div className="max-w-3xl">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface">
                      Admin Profile, Security & Help Centre
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      {" Manage your institutional identity credentials, hardware 2FA keys, administrative notification thresholds, active polar station sessions, and access staff help documentation. "}
                    </p>
                  </div>
                  <div className="flex items-center gap-space-sm shrink-0">
                    <button className="px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-title-md text-body-sm hover:bg-secondary-container transition-all flex items-center gap-2 shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        download
                      </span>
                      {" "}
                      <span>
                        Download Security Audit Log
                      </span>
                      {" "}
                    </button>
                    <button className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-all flex items-center gap-2 shadow-sm" id="saveGlobalBtn" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      {" "}
                      <span>
                        Save Changes
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-1 rounded-xl bg-surface-container-high/60 inline-flex flex-wrap gap-1 mb-space-xl self-start shadow-sm">
                <button className="tab-pill px-space-md py-2 rounded-lg font-title-md text-body-sm text-on-primary bg-primary shadow-sm transition-all flex items-center gap-2" id="nav-tab-profile" type="button" onClick={(e)=>window.__pol(e,"switchTab('tab-profile')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    badge
                  </span>
                  {" Profile & Authentication (2FA) "}
                </button>
                <button className="tab-pill px-space-md py-2 rounded-lg font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2" id="nav-tab-notifications" type="button" onClick={(e)=>window.__pol(e,"switchTab('tab-notifications')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    notifications_active
                  </span>
                  {" Notification Preferences "}
                </button>
                <button className="tab-pill px-space-md py-2 rounded-lg font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2" id="nav-tab-sessions" type="button" onClick={(e)=>window.__pol(e,"switchTab('tab-sessions')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    devices
                  </span>
                  {" Active Sessions & Devices "}
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label-mono text-label-mono">
                    3
                  </span>
                  {" "}
                </button>
                <button className="tab-pill px-space-md py-2 rounded-lg font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-2" id="nav-tab-help" type="button" onClick={(e)=>window.__pol(e,"switchTab('tab-help')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    help_center
                  </span>
                  {" Help Centre & Shortcuts "}
                </button>
              </div>
              <div className="w-full">
                <div className="tab-panel grid grid-cols-1 lg:grid-cols-12 gap-space-lg" id="tab-profile">
                  <div className="lg:col-span-6 flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                    <div className="flex flex-col gap-space-lg">
                      <div className="flex items-start justify-between border-b border-surface-container pb-space-md">
                        <div>
                          <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                            Institutional Profile
                          </span>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                            Staff Identity & Credentials
                          </h2>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-secondary-fixed-variant font-label-mono text-label-mono font-semibold">
                          {" "}
                          <span className="w-2 h-2 rounded-full bg-tertiary" />
                          {" LEVEL-4 CLEARANCE "}
                        </span>
                      </div>
                      <div className="flex items-center gap-space-lg p-space-md rounded-xl bg-surface-container-low">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm">
                          <img className="w-full h-full object-cover" data-alt="Portrait of Dr. Ananya Sen, an Indian polar research scientist in an expedition parka, standing calmly before a bright glacial laboratory environment with atmospheric blue tint and scientific instruments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY3IZxR-T0MLBftaKXqfEfnV34wgMlaBFmWuYQ1uBb2_8MW6OU8SnA1M66yvBnXQCz8HapF11SUXcXUwEpWreL_z8eH958RfEtYvkQb2Lx-Kda-encD6J6YH0qDjx3Pz2aaFzDOpl6e6uXKwSDUgJeNNkXi85vUkEO9avWcgA1cvKT2F75vfn2ziQGhc7wMs53kfyb4lEb9c8CM8opWhWc8kqkHqdRaUBKB_YK3o5en9DZIQoft0jy" />
                        </div>
                        <div className="flex flex-col gap-space-xs">
                          <span className="font-title-md text-body-md text-on-surface">
                            Dr. Ananya Sen
                          </span>
                          <span className="font-label-mono text-label-mono text-outline">
                            Lead Scientist & Managing Editor • NCPOR
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <button className="px-3 py-1 rounded bg-secondary-container text-on-secondary-fixed-variant font-title-md text-label-mono hover:bg-primary-fixed-dim transition-all" type="button">
                              Change Photo
                            </button>
                            <button className="px-3 py-1 rounded text-outline hover:text-error font-title-md text-label-mono transition-all" type="button">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                        <div className="flex flex-col gap-1">
                          <label className="font-label-mono text-label-mono uppercase tracking-wider text-outline">
                            Full Name
                          </label>
                          <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" defaultValue="Dr. Ananya Sen" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-mono text-label-mono uppercase tracking-wider text-outline flex items-center justify-between">
                            {" "}
                            <span>
                              Official MoES Email
                            </span>
                            {" "}
                            <span className="text-tertiary font-bold lowercase flex items-center gap-0.5">
                              <span className="material-symbols-outlined text-[14px]">
                                check_circle
                              </span>
                              {" verified"}
                            </span>
                            {" "}
                          </label>
                          <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="email" defaultValue="a.sen@ncpor.res.in" />
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                          <label className="font-label-mono text-label-mono uppercase tracking-wider text-outline">
                            Department / Centre
                          </label>
                          <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" defaultValue={"Atmospheric & Cryospheric Sciences Division, NCPOR Goa"} />
                        </div>
                        <div className="flex flex-col gap-1 md:col-span-2">
                          <label className="font-label-mono text-label-mono uppercase tracking-wider text-outline">
                            Primary Research Stations
                          </label>
                          <input className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" defaultValue="Maitri Station (Antarctica) / Himadri Base (Svalbard)" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-mono text-label-mono uppercase tracking-wider text-outline flex items-center justify-between">
                            {" "}
                            <span>
                              ORCID ID
                            </span>
                            {" "}
                            <span className="text-tertiary font-bold flex items-center gap-0.5">
                              <span className="material-symbols-outlined text-[14px]">
                                verified
                              </span>
                              {" linked"}
                            </span>
                            {" "}
                          </label>
                          <input className="h-10 px-3 rounded-lg bg-surface-container-low font-label-mono text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary" type="text" defaultValue="0000-0002-1825-0097" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-mono text-label-mono uppercase tracking-wider text-outline">
                            Govt. Employee Code
                          </label>
                          <input className="h-10 px-3 rounded-lg bg-surface-container-high/40 text-on-surface-variant font-label-mono text-body-sm cursor-not-allowed" readOnly="" type="text" defaultValue="MoES-NCPOR-SCI-0482" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-space-lg mt-space-lg border-t border-surface-container flex items-center justify-end">
                      <button className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-all flex items-center gap-2" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          manage_accounts
                        </span>
                        {" Update Profile Credentials "}
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-6 flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                    <div className="flex flex-col gap-space-lg">
                      <div className="flex items-start justify-between border-b border-surface-container pb-space-md">
                        <div>
                          <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                            Access Governance
                          </span>
                          <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                            Two-Factor Authentication (2FA)
                          </h2>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-tertiary-container text-tertiary font-label-mono text-label-mono font-bold">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            shield
                          </span>
                          {" ACTIVE "}
                        </span>
                      </div>
                      <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-low">
                        <div className="w-10 h-10 rounded-lg bg-tertiary flex items-center justify-center text-on-tertiary shrink-0">
                          <span className="material-symbols-outlined text-[22px]">
                            security
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title-md text-body-sm text-on-surface font-semibold">
                            Hardware FIDO2 + TOTP Protocol Enforced
                          </span>
                          <span className="font-body-sm text-body-sm text-outline">
                            Complies with MoES Cyber-Security Circular 11/2023 for polar gateway operations.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-space-sm">
                            <span className="material-symbols-outlined text-primary text-[24px]">
                              key
                            </span>
                            <div>
                              <h3 className="font-title-md text-body-md text-on-surface">
                                YubiKey 5C NFC • MoES Primary
                              </h3>
                              <p className="font-label-mono text-label-mono text-outline">
                                Registered 14 Jan 2024 • Last authenticated today 08:30 IST
                              </p>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-fixed-variant font-label-mono text-label-mono">
                            Hardware FIDO2
                          </span>
                        </div>
                        <div className="flex justify-end gap-2 mt-1">
                          <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-title-md text-label-mono hover:bg-secondary-container transition-all flex items-center gap-1.5" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[16px]">
                              add_circle
                            </span>
                            {" Add Hardware Key "}
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-space-sm">
                          <span className="material-symbols-outlined text-secondary text-[24px]">
                            phonelink_lock
                          </span>
                          <div>
                            <h3 className="font-title-md text-body-sm text-on-surface">
                              Google Authenticator / Aegis TOTP
                            </h3>
                            <p className="font-label-mono text-label-mono text-outline">
                              Active rolling 6-digit sync token
                            </p>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-secondary-fixed-variant font-title-md text-label-mono hover:bg-secondary-container transition-all self-start sm:self-auto" type="button">
                          {" Reconfigure TOTP "}
                        </button>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-low">
                        <div className="flex items-center gap-space-sm">
                          <span className="material-symbols-outlined text-secondary text-[24px]">
                            lock_clock
                          </span>
                          <div>
                            <h3 className="font-title-md text-body-sm text-on-surface">
                              Single-Use Recovery Codes
                            </h3>
                            <p className="font-label-mono text-label-mono text-outline">
                              8 of 10 cryptographic backup codes remaining
                            </p>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-secondary-fixed-variant font-title-md text-label-mono hover:bg-secondary-container transition-all self-start sm:self-auto" type="button">
                          {" Regenerate Codes "}
                        </button>
                      </div>
                    </div>
                    <div className="pt-space-lg mt-space-lg border-t border-surface-container flex items-center justify-end">
                      <button className="px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-title-md text-body-sm hover:bg-on-secondary-fixed-variant transition-all flex items-center gap-2" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          vpn_key
                        </span>
                        {" Security Settings & Key Manager "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tab-panel hidden flex-col gap-space-lg" id="tab-notifications">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg max-w-4xl mx-auto w-full">
                    <div className="flex items-start justify-between border-b border-surface-container pb-space-md">
                      <div>
                        <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                          Telemetry & Editorial Alerts
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                          Notification & Escalation Thresholds
                        </h2>
                      </div>
                      <span className="font-label-mono text-label-mono text-outline px-2.5 py-1 rounded bg-surface-container-low">
                        PUSH / SMS / EMAIL GUEST MATRIX
                      </span>
                    </div>
                    <div className="flex flex-col divide-y divide-surface-container">
                      <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                        <div className="max-w-md">
                          <span className="font-title-md text-body-md text-on-surface block">
                            Critical Station Telemetry Alarms
                          </span>
                          <span className="font-body-sm text-body-sm text-outline">
                            Instant trip-wires from AWS Himadri, IndARC moorings, and Bharati power grids.
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" Email "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" SMS "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" In-App "}
                          </label>
                        </div>
                      </div>
                      <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                        <div className="max-w-md">
                          <span className="font-title-md text-body-md text-on-surface block">
                            Expedition Review & Approval Requests
                          </span>
                          <span className="font-body-sm text-body-sm text-outline">
                            Notifies when field science logs or multimedia packages require editorial sign-off.
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" Email "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-outline cursor-not-allowed">
                            {" "}
                            <input className="w-4 h-4 rounded text-primary opacity-50" disabled="" type="checkbox" />
                            {" SMS "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" In-App "}
                          </label>
                        </div>
                      </div>
                      <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                        <div className="max-w-md">
                          <span className="font-title-md text-body-md text-on-surface block">
                            Social Channel & Media Syndication Alerts
                          </span>
                          <span className="font-body-sm text-body-sm text-outline">
                            Real-time alerts when content publishes to PIB, X, or YouTube Live stream channels.
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-outline cursor-pointer">
                            {" "}
                            <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                            {" Email "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-outline cursor-not-allowed">
                            {" "}
                            <input className="w-4 h-4 rounded text-primary opacity-50" disabled="" type="checkbox" />
                            {" SMS "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" In-App "}
                          </label>
                        </div>
                      </div>
                      <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                        <div className="max-w-md">
                          <span className="font-title-md text-body-md text-on-surface block">
                            Inquiry SLA Expiration Warnings (
                            {"<"}
                            {" 2h)"}
                          </span>
                          <span className="font-body-sm text-body-sm text-outline">
                            High-urgency warnings for pending parliamentary questions or press queries.
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" Email "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-outline cursor-pointer">
                            {" "}
                            <input className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" SMS "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface cursor-pointer">
                            {" "}
                            <input defaultChecked="" className="w-4 h-4 rounded text-primary focus:ring-primary" type="checkbox" />
                            {" In-App "}
                          </label>
                        </div>
                      </div>
                      <div className="py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                        <div className="max-w-md">
                          <span className="font-title-md text-body-md text-on-surface block">
                            Weekly Cryosphere Outreach Digest
                          </span>
                          <span className="font-body-sm text-body-sm text-outline">
                            Consolidated overview of public education metrics, portal pageviews, and press mentions.
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md">
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-outline cursor-pointer">
                            {" "}
                            <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                            {" Email "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-outline cursor-not-allowed">
                            {" "}
                            <input className="w-4 h-4 rounded text-primary opacity-50" disabled="" type="checkbox" />
                            {" SMS "}
                          </label>
                          <label className="flex items-center gap-2 font-label-mono text-label-mono text-outline cursor-pointer">
                            {" "}
                            <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                            {" In-App "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[24px]">
                          alt_route
                        </span>
                        <div>
                          <span className="font-title-md text-body-sm text-on-surface">
                            Administrative Escalation Threshold
                          </span>
                          <p className="font-label-mono text-label-mono text-outline">
                            Automatic handover policy if unacknowledged
                          </p>
                        </div>
                      </div>
                      <select className="h-10 px-3 rounded-lg bg-surface-container-lowest border-0 font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>
                          Escalate to Deputy Director after 4 hours of inactivity
                        </option>
                        <option>
                          Escalate to Duty Officer after 2 hours of inactivity
                        </option>
                        <option>
                          Escalate to Station Commander after 1 hour of inactivity
                        </option>
                        <option>
                          Never escalate automatically
                        </option>
                      </select>
                    </div>
                    <div className="pt-space-md border-t border-surface-container flex items-center justify-end">
                      <button className="px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-all flex items-center gap-2" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          save
                        </span>
                        {" Save Notification Preferences "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tab-panel hidden flex-col gap-space-lg" id="tab-sessions">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg max-w-4xl mx-auto w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md border-b border-surface-container pb-space-md">
                      <div>
                        <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                          Device Inventory
                        </span>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                          Active Staff Sessions (3 Connected)
                        </h2>
                      </div>
                      <button className="px-space-md py-2 rounded-lg bg-error-container text-error hover:bg-error hover:text-on-error font-title-md text-body-sm transition-all flex items-center gap-1.5 self-start sm:self-auto" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          power_settings_new
                        </span>
                        {" Log Out All Other Sessions "}
                      </button>
                    </div>
                    <div className="flex flex-col gap-space-md">
                      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                        <div className="flex items-start gap-space-md">
                          <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[24px]">
                              laptop_mac
                            </span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-title-md text-body-md text-on-surface">
                                MacBook Pro 16″ • Chrome 129
                              </span>
                              <span className="px-2 py-0.2 rounded-full bg-on-tertiary-container text-tertiary font-label-mono text-label-mono font-bold">
                                THIS DEVICE
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-outline">
                              Goa, India • NCPOR HQ LAN (IPv4 14.139.119.2)
                            </span>
                            <span className="font-label-mono text-label-mono text-tertiary flex items-center gap-1 mt-0.5 font-semibold">
                              {" "}
                              <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
                              {" Active Now • TLS 1.3 Certified Session "}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-end md:self-center">
                          <span className="font-label-mono text-label-mono text-outline bg-surface-container-lowest px-2.5 py-1 rounded">
                            Session Token: #SEN-9821
                          </span>
                        </div>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                        <div className="flex items-start gap-space-md">
                          <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-fixed-variant flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[24px]">
                              desktop_windows
                            </span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-title-md text-body-md text-on-surface">
                                Dell Precision Workstation • Firefox 131
                              </span>
                              <span className="px-2 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                                POLAR STATION
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-outline">
                              Maitri Station, Antarctica • VSAT Uplink (10.200.4.12)
                            </span>
                            <span className="font-label-mono text-label-mono text-outline mt-0.5">
                              Last seen 18m ago • Telemetry relay active
                            </span>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-error font-title-md text-label-mono hover:bg-error-container transition-all self-end md:self-center" type="button">
                          {" Terminate Session "}
                        </button>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                        <div className="flex items-start gap-space-md">
                          <div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[24px]">
                              tablet_mac
                            </span>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-title-md text-body-md text-on-surface">
                                iPad Pro 12.9″ • Safari Mobile
                              </span>
                              <span className="px-2 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                                MINISTRY OFFICE
                              </span>
                            </div>
                            <span className="font-body-sm text-body-sm text-outline">
                              New Delhi • MoES Prithvi Bhavan Gateway (115.240.89.54)
                            </span>
                            <span className="font-label-mono text-label-mono text-outline mt-0.5">
                              Last seen 2 days ago • Idle
                            </span>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-error font-title-md text-label-mono hover:bg-error-container transition-all self-end md:self-center" type="button">
                          {" Terminate Session "}
                        </button>
                      </div>
                    </div>
                    <div className="pt-space-md border-t border-surface-container flex items-center justify-between text-outline font-label-mono text-label-mono">
                      <span>
                        Total historical authentications past 30 days: 42
                      </span>
                      <span>
                        Zero anomaly flags detected
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tab-panel hidden flex-col gap-space-xl" id="tab-help">
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
                    <div className="max-w-2xl">
                      <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                        Operational Documentation & SOPs
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                        POLARIS Knowledge Base & Field Guides
                      </h2>
                      <p className="font-body-sm text-body-sm text-outline mt-1">
                        Standard operating protocols, scientific DOI referencing, satellite telemetry dispatch manuals, and editorial governance workflows.
                      </p>
                    </div>
                    <div className="relative max-w-3xl">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[22px]">
                        search
                      </span>
                      <input className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" placeholder="Search POLARIS admin manual, SOPs, editorial guidelines, API docs... (Press / to search)" type="text" />
                      <span className="hidden sm:inline-block absolute right-4 top-1/2 -translate-y-1/2 font-label-mono text-label-mono bg-surface-container px-2 py-0.5 rounded text-outline">
                        ESC to clear
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-sm">
                      <div className="rounded-xl bg-surface-container-low overflow-hidden shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-all">
                        <div className="relative h-40 w-full overflow-hidden">
                          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="High-resolution visual of an Arctic glacier research camp with scientists working on digital tablet field monitors under calm overcast polar lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaBD0S6RichXZaOmharYqzP5ztde7SZOvZmYQq0I3XFlhJVkwjbSVG03R1t7GDMY_Ctv7ANbhR6XDNQ2tkYEF0tury5sBjqpocyTY7YmDwUIJ1fUVxi4GdbbComF3UiclHDj337sIccWMUHugAWePDwFxfW7u4nEnruXDziUeTe90ThhZ_XLxvv4nbPIH5_kQy22KYAhKbvZLgRbR9PgCoHqgvG71FCrAcmtalGEe6GILzvrmYOZa8" />
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-surface-container-lowest/90 flex items-center justify-center shadow-md">
                              <span className="material-symbols-outlined text-primary text-[20px]">
                                play_arrow
                              </span>
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 bg-on-surface/80 text-surface-container-lowest font-label-mono text-label-mono px-1.5 py-0.5 rounded">
                            03:45
                          </span>
                        </div>
                        <div className="p-space-md flex flex-col gap-1 flex-1 justify-between">
                          <span className="font-title-md text-body-sm text-on-surface">
                            Authoring Interactive Cryosphere Stories
                          </span>
                          <span className="font-label-mono text-label-mono text-outline">
                            Editorial Studio • Markdown + GIS Maps
                          </span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-surface-container-low overflow-hidden shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-all">
                        <div className="relative h-40 w-full overflow-hidden">
                          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Antenna array and automated meteorological station at Bharati Antarctica during polar dusk with aurora green reflections on snow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANAjbZv6Doyst9HlFKFGVE32QMC7RxonJh7sxt5apkSekmASuh3vxLlc4ZIR-DDNg8Nx-S7scijGuW3U4IJE2O2LHTfYZUcr8JwpEaKgRQk0ynjIcpj8u4Tg9LtaPWtKMYSVnic1YgE2zZ89F1Qz49btnnjKMhKVcjyupui8l8a3IJilIfA8_nfew8qm-UEW0VsXCuyu9a2wsAK7vO9_Dh5bXxdqsK45qiQgkO0XzNSmBDozJb5_bN" />
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-surface-container-lowest/90 flex items-center justify-center shadow-md">
                              <span className="material-symbols-outlined text-primary text-[20px]">
                                play_arrow
                              </span>
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 bg-on-surface/80 text-surface-container-lowest font-label-mono text-label-mono px-1.5 py-0.5 rounded">
                            02:15
                          </span>
                        </div>
                        <div className="p-space-md flex flex-col gap-1 flex-1 justify-between">
                          <span className="font-title-md text-body-sm text-on-surface">
                            Deploying Rapid Telemetry Dispatches
                          </span>
                          <span className="font-label-mono text-label-mono text-outline">
                            Operations • Realtime Satellite Packets
                          </span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-surface-container-low overflow-hidden shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-all">
                        <div className="relative h-40 w-full overflow-hidden">
                          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Clean scientific laboratory computer interface showing live oceanographic sensor graphs and satellite communication status bars." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALsdvu-ZfX9zeiRp9dYloVCIqqDgH23vMgN-bCyprLPOoHG2M-7KM3_7VEk_BJV7XTt0gQNUwLWXym994y1fyLoK60UYFOkwXaA2rs7B3374Oh1utJ2SzCum20bAohYpmG9E7YePuaCRO6SdZHuscF5QeCeLfnyM758UICDcW-7ScvCM7-HhcpJwV4sMhLpvUT5wm0k-LP3Ks_q9s1e2XS9H5l9INijRhG90Qi81lZQMtA5wvBanWr" />
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-surface-container-lowest/90 flex items-center justify-center shadow-md">
                              <span className="material-symbols-outlined text-primary text-[20px]">
                                play_arrow
                              </span>
                            </div>
                          </div>
                          <span className="absolute bottom-2 right-2 bg-on-surface/80 text-surface-container-lowest font-label-mono text-label-mono px-1.5 py-0.5 rounded">
                            04:10
                          </span>
                        </div>
                        <div className="p-space-md flex flex-col gap-1 flex-1 justify-between">
                          <span className="font-title-md text-body-sm text-on-surface">
                            Configuring Social Pre-Approval Gates
                          </span>
                          <span className="font-label-mono text-label-mono text-outline">
                            Governance • MoES Institutional Policy
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                      <div className="border-b border-surface-container pb-space-sm">
                        <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                          Frequently Inquired Procedures
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                          Staff Protocol & Troubleshooting
                        </h3>
                      </div>
                      <div className="flex flex-col divide-y divide-surface-container">
                        <details className="group py-space-sm" open="">
                          {" "}
                          <summary className="flex items-center justify-between font-title-md text-body-md text-on-surface cursor-pointer list-none">
                            {" "}
                            <span>
                              How do I cite NCPOR datasets with automated DOIs?
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                              expand_more
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 pl-2">
                            {" All raw telemetry streams logged through the POLARIS Data Upload pipeline automatically reserve a DataCite DOI minted through NCPOR Goa. Include the accession format: "}
                            <code>
                              10.5065/NCPOR-POLARIS-[YEAR]-[STATION]
                            </code>
                            {" inside metadata field 04. "}
                          </p>
                          {" "}
                        </details>
                        <details className="group py-space-sm">
                          {" "}
                          <summary className="flex items-center justify-between font-title-md text-body-md text-on-surface cursor-pointer list-none">
                            {" "}
                            <span>
                              What is the two-person protocol for emergency weather warnings?
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                              expand_more
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 pl-2">
                            {" Blizzard categories Cat-3 and above require secondary digital authorization from the station scientific leader (Maitri or Bharati) before push notification dispatch to ministry channels. "}
                          </p>
                          {" "}
                        </details>
                        <details className="group py-space-sm">
                          {" "}
                          <summary className="flex items-center justify-between font-title-md text-body-md text-on-surface cursor-pointer list-none">
                            {" "}
                            <span>
                              How to request temporary Level-5 clearance for classified satellite feeds?
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                              expand_more
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 pl-2">
                            {" Submit an urgent request via the Governance tab with counter-signature of Director NCPOR. Approvals are normally processed within 60 minutes via secure NIC mail handshake. "}
                          </p>
                          {" "}
                        </details>
                      </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                      <div>
                        <div className="border-b border-surface-container pb-space-sm">
                          <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider">
                            Productivity Accelerators
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                            Platform Keyboard Shortcuts
                          </h3>
                        </div>
                        <div className="flex flex-col gap-space-sm mt-space-md">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                            <span className="font-body-sm text-body-sm text-on-surface">
                              Global Command Palette
                            </span>
                            <kbd className="font-label-mono text-label-mono px-2 py-1 rounded bg-surface-container text-on-surface font-semibold">
                              ⌘K / Ctrl+K
                            </kbd>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                            <span className="font-body-sm text-body-sm text-on-surface">
                              Save Active Workspace Draft
                            </span>
                            <kbd className="font-label-mono text-label-mono px-2 py-1 rounded bg-surface-container text-on-surface font-semibold">
                              ⌘S / Ctrl+S
                            </kbd>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                            <span className="font-body-sm text-body-sm text-on-surface">
                              Jump to Editorial Review Desk
                            </span>
                            <kbd className="font-label-mono text-label-mono px-2 py-1 rounded bg-surface-container text-on-surface font-semibold">
                              ⌘E / Ctrl+E
                            </kbd>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                            <span className="font-body-sm text-body-sm text-on-surface">
                              Toggle Staff Help Modal
                            </span>
                            <kbd className="font-label-mono text-label-mono px-2 py-1 rounded bg-surface-container text-on-surface font-semibold">
                              ⌘/ / Ctrl+/
                            </kbd>
                          </div>
                        </div>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-label-mono text-label-mono text-outline uppercase">
                            NCPOR IT NOC GOA
                          </span>
                          <span className="font-label-mono text-label-mono text-tertiary font-bold flex items-center gap-1">
                            {" "}
                            <span className="w-2 h-2 rounded-full bg-tertiary" />
                            {" Avg Response: 15 mins "}
                          </span>
                        </div>
                        <button className="w-full py-2.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-sm" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            support_agent
                          </span>
                          {" Report a Problem / Submit IT Ticket "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed bottom-6 right-6 px-4 py-3 rounded-xl bg-inverse-surface text-inverse-on-surface shadow-xl flex items-center gap-3 transition-opacity duration-300 opacity-0 pointer-events-none z-50" id="statusToast">
                <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">
                  check_circle
                </span>
                <span className="font-body-sm text-body-sm" id="statusToastMessage">
                  Preferences updated securely.
                </span>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-md px-space-lg">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm text-outline font-label-mono text-label-mono">
            <div className="flex items-center gap-space-md flex-wrap">
              <span>
                © 2025 National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India.
              </span>
              <span className="hidden md:inline">
                •
              </span>
              <span>
                POLARIS Platform System Build 4.2.0-STABLE
              </span>
            </div>
            <div className="flex items-center gap-space-md flex-wrap">
              <span className="inline-flex items-center gap-1 text-tertiary font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  shield
                </span>
                {" Level 4 Security Clearance Active"}
              </span>
              <span>
                DPDP Act 2023 Compliant
              </span>
              <a className="hover:text-primary underline transition-colors" data-path="help-documentation" href="#" onClick={(e)=>e.preventDefault()}>
                SOP Reference Desk
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
