import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_admin_notifications_system_alerts_admin_notifications/code.html
const BODY_CLASS = "bg-[#eef2f6] text-[#071c36] font-sans antialiased text-[14px]";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base {\n      html, body { margin: 0; padding: 0; }\n      body { overscroll-behavior: none; }\n    }\n    ::-webkit-scrollbar { width: 6px; height: 6px; }\n    ::-webkit-scrollbar-track { background: #f0f3ff; }\n    ::-webkit-scrollbar-thumb { background: #bec8cb; border-radius: 9999px; }\n    ::-webkit-scrollbar-thumb:hover { background: #6f797c; }";
const PAGE_SCRIPT = "function filterNotifications(category) {\n      const tabs = ['all', 'review', 'overdue', 'sync', 'ai', 'integration'];\n      tabs.forEach(t => {\n        const btn = document.getElementById('tab-' + t);\n        if (btn) {\n          if (t === category) {\n            btn.className = \"px-4 py-2 rounded-lg text-sm font-semibold bg-[#1F7A8C] text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap\";\n          } else {\n            btn.className = \"px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap\";\n          }\n        }\n      });\n\n      const items = document.querySelectorAll('.notification-item');\n      items.forEach(item => {\n        if (category === 'all' || item.getAttribute('data-category') === category) {\n          item.style.display = 'flex';\n        } else {\n          item.style.display = 'none';\n        }\n      });\n    }\n\n    function markAllRead() {\n      const items = document.querySelectorAll('.notification-item');\n      items.forEach(item => {\n        item.style.opacity = '0.5';\n      });\n      setTimeout(() => {\n        items.forEach(item => {\n          item.remove();\n        });\n        // Show empty state\n        const container = document.getElementById('notifications-container');\n        const empty = document.createElement('div');\n        empty.className = \"p-12 text-center bg-surface-container-lowest rounded-xl border border-outline-variant/20 flex flex-col items-center justify-center gap-2\";\n        empty.innerHTML = '<span class=\"material-symbols-outlined text-4xl text-primary\">check_circle</span><h3 class=\"font-title-md text-on-surface\">All caught up!</h3><p class=\"font-body-sm text-outline\">No pending notifications or alerts require your attention.</p>';\n        container.appendChild(empty);\n      }, 300);\n    }\n\n    function dismissNotification(btn) {\n      const item = btn.closest('.notification-item');\n      item.style.transition = 'all 0.3s ease';\n      item.style.opacity = '0';\n      item.style.transform = 'translateY(-10px)';\n      setTimeout(() => {\n        item.remove();\n      }, 300);\n    }\n\n    function handleAction(actionType, targetId) {\n      alert('Action executed: ' + actionType + ' for reference ' + targetId);\n    }\nfunction switchFrameView(mode) {\n      const f1 = document.getElementById('frame-1');\n      const f2 = document.getElementById('frame-2');\n      const fu = document.getElementById('frame-users');\n      const wrapper = document.getElementById('frames-wrapper');\n      \n      const tabF1 = document.getElementById('tab-f1');\n      const tabF2 = document.getElementById('tab-f2');\n      const tabUsers = document.getElementById('tab-users');\n      const tabDual = document.getElementById('tab-dual');\n\n      // Reset tabs style\n      [tabF1, tabF2, tabUsers, tabDual].forEach(t => {\n        if (t) t.className = \"px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#dee8ff] hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5\";\n      });\n\n      const activeTabClass = \"px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 bg-[#1F7A8C] text-white shadow-sm ring-2 ring-[#1F7A8C]\";\n\n      if (mode === 'f1') {\n        if(f1) f1.classList.remove('hidden');\n        if(f2) f2.classList.add('hidden');\n        if(fu) fu.classList.add('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        tabF1.className = activeTabClass;\n      } else if (mode === 'f2') {\n        if(f1) f1.classList.add('hidden');\n        if(f2) f2.classList.remove('hidden');\n        if(fu) fu.classList.add('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        tabF2.className = activeTabClass;\n      } else if (mode === 'users') {\n        if(f1) f1.classList.add('hidden');\n        if(f2) f2.classList.add('hidden');\n        if(fu) fu.classList.remove('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        if(tabUsers) tabUsers.className = activeTabClass;\n      } else if (mode === 'dual') {\n        if(f1) f1.classList.remove('hidden');\n        if(f2) f2.classList.remove('hidden');\n        if(fu) fu.classList.remove('hidden');\n        wrapper.className = \"w-full max-w-[1700px] flex flex-col gap-10 transition-all duration-300\";\n        tabDual.className = activeTabClass;\n      }\n    }";

export default function AdminNotificationsPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      {" "}
      {" "}
      {" "}
      {" "}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-surface-container-lowest border-r border-outline-variant/30 flex flex-col justify-between z-40 transition-all duration-300" id="admin-sidebar">
        {" "}
        <div className="flex flex-col">
          <div className="h-[64px] px-6 flex items-center gap-3 border-b border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>
              ac_unit
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-lg tracking-tight text-on-surface">
                POLARIS
              </span>
              <span className="text-[10px] uppercase tracking-wider text-outline font-medium">
                MoES Console
              </span>
            </div>
          </div>
          <nav className="p-4 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-140px)]">
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin">
              {" "}
              <span className="material-symbols-outlined text-lg">
                dashboard
              </span>
              {" "}
              <span className="admin-nav-text">
                Dashboard
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/expeditions/soe-01">
              {" "}
              <span className="material-symbols-outlined text-lg">
                explore
              </span>
              {" "}
              <span className="admin-nav-text">
                Expeditions
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/upload">
              {" "}
              <span className="material-symbols-outlined text-lg">
                cloud_upload
              </span>
              {" "}
              <span className="admin-nav-text">
                Upload
              </span>
              {" "}
            </Link>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" href="#" onClick={(e)=>e.preventDefault()}>
              {" "}
              <span className="material-symbols-outlined text-lg">
                smart_toy
              </span>
              {" "}
              <span className="admin-nav-text">
                AI Queue
              </span>
              {" "}
            </a>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/studio">
              {" "}
              <span className="material-symbols-outlined text-lg">
                edit_document
              </span>
              {" "}
              <span className="admin-nav-text">
                Content Studio
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/review">
              {" "}
              <span className="material-symbols-outlined text-lg">
                rate_review
              </span>
              {" "}
              <span className="admin-nav-text">
                Review
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/publishing">
              {" "}
              <span className="material-symbols-outlined text-lg">
                publish
              </span>
              {" "}
              <span className="admin-nav-text">
                Publishing
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/rights">
              {" "}
              <span className="material-symbols-outlined text-lg">
                share
              </span>
              {" "}
              <span className="admin-nav-text">
                Rights & Integrations
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/analytics">
              {" "}
              <span className="material-symbols-outlined text-lg">
                analytics
              </span>
              {" "}
              <span className="admin-nav-text">
                Analytics
              </span>
              {" "}
            </Link>
            <Link className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold bg-[#1F7A8C] text-white shadow-sm transition-all" to="/admin/notifications">
              {" "}
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-lg">
                  notifications
                </span>
                <span className="admin-nav-text">
                  Notifications
                </span>
              </div>
              {" "}
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-[#1F7A8C]">
                5
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/users">
              {" "}
              <span className="material-symbols-outlined text-lg">
                group
              </span>
              {" "}
              <span className="admin-nav-text">
                Users
              </span>
              {" "}
            </Link>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" to="/admin/profile">
              {" "}
              <span className="material-symbols-outlined text-lg">
                settings
              </span>
              {" "}
              <span className="admin-nav-text">
                Settings
              </span>
              {" "}
            </Link>
          </nav>
        </div>
        {" "}
        <div className="p-4 border-t border-outline-variant/20 flex items-center gap-3 bg-surface-container-low/50">
          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs shadow-sm">
            AS
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-xs text-on-surface truncate">
              Dr. Ananya Sen
            </span>
            <span className="text-[10px] text-outline truncate">
              Lead Scientist / Editor
            </span>
          </div>
        </div>
        {" "}
      </aside>
      <main className="w-full min-h-screen p-4 md:p-6 overflow-x-auto flex justify-center ml-64">
        <div className="flex flex-col w-full">
          <header className="sticky top-0 z-30 flex items-center justify-between w-full h-[64px] px-6 bg-surface/90 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
            {" "}
            <div className="flex items-center gap-4">
              <button className="p-2 text-on-surface hover:bg-surface-container rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] md:hidden" onClick={(e)=>window.__pol(e,"const s=document.getElementById('admin-sidebar'); const isCollapsed = s.style.width === '64px'; s.style.width = isCollapsed ? '240px' : '64px'; document.querySelectorAll('.admin-nav-text').forEach(el => el.style.display = isCollapsed ? 'inline' : 'none');")}>
                <span className="material-symbols-outlined">
                  menu
                </span>
              </button>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl" style={{"fontVariationSettings": "'FILL' 1"}}>
                  ac_unit
                </span>
                <span className="font-serif font-bold text-lg tracking-tight text-on-surface">
                  POLARIS
                </span>
                <span className="text-xs uppercase tracking-wider text-outline px-2 py-0.5 bg-surface-container rounded-full font-medium">
                  MoES Console
                </span>
              </div>
            </div>
            {" "}
            <div className="flex items-center gap-4">
              <div className="relative hidden md:flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-outline text-lg">
                  search
                </span>
                <input className="w-72 pl-9 pr-4 py-1.5 bg-surface-container-low border border-outline-variant/50 rounded-lg text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] transition-all" placeholder="Search logs, exped, datasets... (⌘K)" type="text" />
              </div>
              <div className="relative">
                <button className="relative p-2 text-on-surface hover:bg-surface-container rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]">
                  {" "}
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                  {" "}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
                  {" "}
                </button>
              </div>
              <div className="flex items-center gap-3 pl-3 border-l border-outline-variant/30">
                <div className="flex flex-col items-end">
                  <span className="font-title-md text-xs text-on-surface">
                    Dr. Ananya Sen
                  </span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-primary bg-primary-fixed/30 px-1.5 py-0.5 rounded">
                    Lead Scientist / Editor (C, S, E, A)
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shadow-sm">
                  {" AS "}
                </div>
              </div>
            </div>
            {" "}
          </header>
          <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8 py-8 px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-surface-container-lowest p-8 rounded-xl shadow-card border border-outline-variant/20 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-label-mono text-primary font-bold uppercase tracking-wider">
                    System Control & Telemetry
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline" />
                  <span className="text-label-mono text-outline">
                    5 Active Alerts
                  </span>
                </div>
                <h1 className="font-headline-lg text-on-surface">
                  Admin Notifications & Alerts
                </h1>
                <p className="font-body-md text-on-surface-variant">
                  {" Real-time telemetry alerts, review queue escalations, and system error notifications across NCPOR, INCOIS, and national polar gateways. "}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 bg-[#1F7A8C] hover:bg-[#165A68] text-on-primary rounded-lg text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] flex items-center gap-2 cursor-pointer" onClick={(e)=>window.__pol(e,"markAllRead()")}>
                  {" "}
                  <span className="material-symbols-outlined text-lg">
                    done_all
                  </span>
                  {" Mark all as read "}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2 overflow-x-auto">
              <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#1F7A8C] text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap" id="tab-all" onClick={(e)=>window.__pol(e,"filterNotifications('all')")}>
                {" All (5) "}
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap" id="tab-review" onClick={(e)=>window.__pol(e,"filterNotifications('review')")}>
                {" Review requests (2) "}
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap" id="tab-overdue" onClick={(e)=>window.__pol(e,"filterNotifications('overdue')")}>
                {" Overdue (1) "}
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap" id="tab-sync" onClick={(e)=>window.__pol(e,"filterNotifications('sync')")}>
                {" Upload sync (1) "}
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap" id="tab-ai" onClick={(e)=>window.__pol(e,"filterNotifications('ai')")}>
                {" AI failures (1) "}
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] whitespace-nowrap" id="tab-integration" onClick={(e)=>window.__pol(e,"filterNotifications('integration')")}>
                {" Integration alerts (1) "}
              </button>
            </div>
            <div className="flex flex-col gap-4" id="notifications-container">
              <div className="notification-item flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-card border border-outline-variant/20 hover:shadow-card-hover transition-all gap-4" data-category="review">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-fixed/30 text-primary rounded-xl shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">
                      rate_review
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-primary-container/10 text-primary rounded text-xs font-semibold uppercase tracking-wider">
                        Review Request
                      </span>
                      <span className="text-xs text-outline">
                        • 12m ago
                      </span>
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <h3 className="font-title-md text-on-surface text-base">
                      Southern Ocean Expedition SOE-01 Dataset awaiting final editorial dual-sign
                    </h3>
                    <p className="font-body-sm text-on-surface-variant max-w-3xl">
                      {" Bathymetric profiles and CTD casts from the 42nd Indian Antarctic Expedition verified by Lead Hydrographer. Requires secondary validation before public release on NPDC portal. "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Open', 'SOE-01')")}>
                    Open
                  </button>
                  <button className="px-3 py-1.5 bg-[#1F7A8C] hover:bg-[#165A68] text-on-primary rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Approve', 'SOE-01')")}>
                    Approve
                  </button>
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Snooze', 'SOE-01')")}>
                    Snooze
                  </button>
                  <button className="p-1.5 text-outline hover:text-on-surface rounded-lg hover:bg-surface-container transition-all" title="Mark read" onClick={(e)=>window.__pol(e,"dismissNotification(this)")}>
                    {" "}
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="notification-item flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-card border border-outline-variant/20 hover:shadow-card-hover transition-all gap-4" data-category="overdue">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">
                      schedule
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-700 rounded text-xs font-semibold uppercase tracking-wider">
                        Overdue SLA
                      </span>
                      <span className="text-xs text-outline">
                        • 3h ago
                      </span>
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>
                    <h3 className="font-title-md text-on-surface text-base">
                      {"Review SLA breach (> 48h) for Himadri Core Ice Density report #REV-8821"}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant max-w-3xl">
                      {" Assigned to Dr. Rajesh Kumar. Threshold exceeded by 14 hours. Automatic escalation rule triggered for administrative override or reassignment. "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Open', 'REV-8821')")}>
                    Open
                  </button>
                  <button className="px-3 py-1.5 bg-[#1F7A8C] hover:bg-[#165A68] text-on-primary rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Approve', 'REV-8821')")}>
                    Approve
                  </button>
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Snooze', 'REV-8821')")}>
                    Snooze
                  </button>
                  <button className="p-1.5 text-outline hover:text-on-surface rounded-lg hover:bg-surface-container transition-all" title="Mark read" onClick={(e)=>window.__pol(e,"dismissNotification(this)")}>
                    {" "}
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="notification-item flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-card border border-outline-variant/20 hover:shadow-card-hover transition-all gap-4" data-category="sync">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-error-container text-error rounded-xl shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">
                      sync_problem
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-error-container text-error rounded text-xs font-semibold uppercase tracking-wider">
                        Upload Sync Error
                      </span>
                      <span className="text-xs text-outline">
                        • 5h ago
                      </span>
                      <span className="w-2 h-2 rounded-full bg-error" />
                    </div>
                    <h3 className="font-title-md text-on-surface text-base">
                      NPDC OAI-PMH gateway timeout (HTTP 504) during 43rd IAE metadata sync
                    </h3>
                    <p className="font-body-sm text-on-surface-variant max-w-3xl">
                      {" Harvester worker node dropped connection after 30,000ms. 412 records pending ingestion from Goa data repository cluster. "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Open', 'IAE-SYNC')")}>
                    Open
                  </button>
                  <button className="px-3 py-1.5 bg-[#1F7A8C] hover:bg-[#165A68] text-on-primary rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Retry', 'IAE-SYNC')")}>
                    Retry
                  </button>
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Snooze', 'IAE-SYNC')")}>
                    Snooze
                  </button>
                  <button className="p-1.5 text-outline hover:text-on-surface rounded-lg hover:bg-surface-container transition-all" title="Mark read" onClick={(e)=>window.__pol(e,"dismissNotification(this)")}>
                    {" "}
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="notification-item flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-card border border-outline-variant/20 hover:shadow-card-hover transition-all gap-4" data-category="ai">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-error-container text-error rounded-xl shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">
                      smart_toy
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-error-container text-error rounded text-xs font-semibold uppercase tracking-wider">
                        AI Failure
                      </span>
                      <span className="text-xs text-outline">
                        • 1d ago
                      </span>
                      <span className="w-2 h-2 rounded-full bg-error" />
                    </div>
                    <h3 className="font-title-md text-on-surface text-base">
                      NCPOR-OCR v2.4 failed to parse historical scanned barograph (DG-1983-BARO)
                    </h3>
                    <p className="font-body-sm text-on-surface-variant max-w-3xl">
                      {" Low contrast anomaly in Dakshin Gangotri archive sheet #419. Neural network confidence score fell below 45% threshold (requires manual transcription). "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Open', 'DG-1983')")}>
                    Open
                  </button>
                  <button className="px-3 py-1.5 bg-[#1F7A8C] hover:bg-[#165A68] text-on-primary rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Requeue', 'DG-1983')")}>
                    Requeue
                  </button>
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Snooze', 'DG-1983')")}>
                    Snooze
                  </button>
                  <button className="p-1.5 text-outline hover:text-on-surface rounded-lg hover:bg-surface-container transition-all" title="Mark read" onClick={(e)=>window.__pol(e,"dismissNotification(this)")}>
                    {" "}
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
              <div className="notification-item flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-surface-container-lowest rounded-xl shadow-card border border-outline-variant/20 hover:shadow-card-hover transition-all gap-4" data-category="integration">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-xl">
                      security
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-700 rounded text-xs font-semibold uppercase tracking-wider">
                        Integration Alert
                      </span>
                      <span className="text-xs text-outline">
                        • 2d ago
                      </span>
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>
                    <h3 className="font-title-md text-on-surface text-base">
                      National Digital Library (NDLI) SSL certificate expiration warning in 7 days
                    </h3>
                    <p className="font-body-sm text-on-surface-variant max-w-3xl">
                      {" External API endpoint federation certificate issued by e-Mudhra requires renewal to maintain uninterrupted metadata exchange with Ministry servers. "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Open', 'NDLI-SSL')")}>
                    Open
                  </button>
                  <button className="px-3 py-1.5 bg-[#1F7A8C] hover:bg-[#165A68] text-on-primary rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Renew', 'NDLI-SSL')")}>
                    Renew
                  </button>
                  <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" onClick={(e)=>window.__pol(e,"handleAction('Snooze', 'NDLI-SSL')")}>
                    Snooze
                  </button>
                  <button className="p-1.5 text-outline hover:text-on-surface rounded-lg hover:bg-surface-container transition-all" title="Mark read" onClick={(e)=>window.__pol(e,"dismissNotification(this)")}>
                    {" "}
                    <span className="material-symbols-outlined text-lg">
                      check
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-card border border-outline-variant/20 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-on-surface">
                  Notification & Escalation Rules
                </h3>
                <p className="font-body-sm text-on-surface-variant">
                  Configure automated routing and threshold triggers for administrative review bottlenecks.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 bg-surface-container-low rounded-xl flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-title-md text-on-surface text-sm">
                      Automatic Review Escalation
                    </span>
                    <span className="font-body-sm text-outline text-xs">
                      Automatically escalate unacknowledged Review requests to Senior Editors after specified threshold.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    {" "}
                    <input defaultChecked="" className="sr-only peer" type="checkbox" />
                    {" "}
                    <div className="w-11 h-6 bg-outline-variant/50 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#1F7A8C] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F7A8C]" />
                    {" "}
                  </label>
                </div>
                <div className="p-5 bg-surface-container-low rounded-xl flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-title-md text-on-surface text-sm">
                      Escalation Time Threshold
                    </span>
                    <span className="font-body-sm text-outline text-xs">
                      Duration before pending items trigger secondary admin alerts.
                    </span>
                  </div>
                  <select className="px-3 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-xs font-semibold text-on-surface focus:outline-none focus:ring-2 focus:ring-[#1F7A8C]" defaultValue="48 Hours">
                    <option>
                      24 Hours
                    </option>
                    <option>
                      48 Hours
                    </option>
                    <option>
                      72 Hours
                    </option>
                    <option>
                      1 Week
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <footer className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-outline-variant/30 text-xs text-outline">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">
                    verified_user
                  </span>
                  <span>
                    POLARIS Admin Console v2.4
                  </span>
                </div>
                <span className="hidden sm:inline text-outline-variant">
                  •
                </span>
                <span>
                  {"Provenance ID: "}
                  <code className="text-on-surface font-mono">
                    PROV-99201-ALRT
                  </code>
                </span>
                <span className="hidden sm:inline text-outline-variant">
                  •
                </span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container text-[10px] font-semibold uppercase tracking-wider text-outline">
                  Security Clearance: Level 4 Classified
                </span>
              </div>
              {" "}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-right">
                <span className="text-[11px] text-outline">
                  Operational Telemetry & Sample Alert Stream
                </span>
                <span className="hidden sm:inline text-outline-variant">
                  •
                </span>
                <span>
                  © 2025 Ministry of Earth Sciences (MoES), Govt. of India
                </span>
              </div>
            </footer>
          </div>
        </div>
      </main>
      {" "}
      {" "}
      {" "}
    </>
  );
}
