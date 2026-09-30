import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_review_approval_queue_admin_review/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "function switchView(viewName) {\n      const kanban = document.getElementById('kanbanView');\n      const workbench = document.getElementById('workbenchView');\n      const btnKanban = document.getElementById('viewBtnKanban');\n      const btnWorkbench = document.getElementById('viewBtnWorkbench');\n\n      if (viewName === 'workbench') {\n        kanban.classList.add('hidden');\n        workbench.classList.remove('hidden');\n        btnWorkbench.className = \"flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-title-md text-body-sm bg-surface-container-lowest text-primary shadow-sm transition-all\";\n        btnKanban.className = \"flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all\";\n      } else {\n        kanban.classList.remove('hidden');\n        workbench.classList.add('hidden');\n        btnKanban.className = \"flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-title-md text-body-sm bg-surface-container-lowest text-primary shadow-sm transition-all\";\n        btnWorkbench.className = \"flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all\";\n      }\n    }\n\n    function applyCorrection() {\n      const btn = document.getElementById('btnCorrection');\n      btn.innerHTML = '<span class=\"material-symbols-outlined text-[16px]\">check</span> Fixed (-38.4°C)';\n      btn.classList.remove('bg-primary');\n      btn.classList.add('bg-tertiary', 'text-on-tertiary');\n      \n      const chk = document.getElementById('chkAudio');\n      if (chk) chk.checked = true;\n      updateChecklist();\n    }\n\n    function updateChecklist() {\n      const checkboxes = document.querySelectorAll('#workbenchView input[type=\"checkbox\"]');\n      let count = 0;\n      checkboxes.forEach(c => { if(c.checked) count++; });\n      const scoreEl = document.getElementById('checklistScore');\n      if (scoreEl) {\n        scoreEl.innerText = `${count} of ${checkboxes.length} Passed`;\n        if (count === checkboxes.length) {\n          scoreEl.className = \"font-label-mono text-[11px] text-tertiary font-bold\";\n        }\n      }\n    }\n\n    function approveAction() {\n      alert(\"Article 'Whispering Gales of Antarctica' signed off with MoES peer clearance. Dispatched to Publishing Release Queue.\");\n      switchView('kanban');\n    }\n\n    function requestEditAction() {\n      alert(\"Edit instructions and OCR temperature discrepancy report dispatched to Lead Author Dr. Ananya Sen.\");\n      switchView('kanban');\n    }\n\n    function rejectAction() {\n      if(confirm(\"Are you sure you want to reject this draft and return it to Drafts archive?\")) {\n        switchView('kanban');\n      }\n    }\n\n    // Default view state: Kanban board\n    document.addEventListener(\"DOMContentLoaded\", function() {\n      switchView('kanban');\n    });";

export default function AdminReviewPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-screen w-60 bg-surface-container-lowest flex flex-col justify-between z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col min-h-0">
          <div className="px-space-md py-space-md bg-surface-container-lowest">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-[20px]">
                  ac_unit
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mt-space-xs">
                  MoES Portal v4.2
                </span>
              </div>
            </div>
            <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low">
              <div className="font-title-md text-body-sm text-on-surface truncate">
                Dr. Ananya Sen
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant truncate">
                Supervisory • Roles: C, S, E, A
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-space-sm space-y-space-xs" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg">
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="dashboard" to="/admin">
              <span className="material-symbols-outlined text-[18px]">
                space_dashboard
              </span>
              <span>
                Dashboard
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="expedition-manager" to="/admin/expeditions">
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
              <span>
                Expedition Manager
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="upload-and-datasets" to="/admin/upload">
              <span className="material-symbols-outlined text-[18px]">
                cloud_upload
              </span>
              <span>
                Upload & Datasets
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="ai-processing-and-ocr" to="/admin/ai-queue">
              <span className="material-symbols-outlined text-[18px]">
                psychology
              </span>
              <span>
                AI Processing & OCR
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="content-studio" to="/admin/studio">
              <span className="material-symbols-outlined text-[18px]">
                edit_document
              </span>
              <span>
                Content Studio
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="review-queue" to="/admin/review">
              <span className="material-symbols-outlined text-[18px]">
                rate_review
              </span>
              <span>
                Review Queue
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="publishing-and-releases" to="/admin/publishing">
              <span className="material-symbols-outlined text-[18px]">
                publish
              </span>
              <span>
                Publishing & Releases
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="rights-and-licenses" to="/admin/rights">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              <span>
                Rights & Licenses
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="integrations-npdc" to="/admin/integrations">
              <span className="material-symbols-outlined text-[18px]">
                hub
              </span>
              <span>
                Integrations (NPDC)
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="analytics-and-telemetry" to="/admin/analytics">
              <span className="material-symbols-outlined text-[18px]">
                analytics
              </span>
              <span>
                Analytics & Telemetry
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="users-and-access" to="/admin/users">
              <span className="material-symbols-outlined text-[18px]">
                manage_accounts
              </span>
              <span>
                Users & Access
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all text-body-sm" data-path="audit-logs" to="/admin/audit-logs">
              <span className="material-symbols-outlined text-[18px]">
                history
              </span>
              <span>
                Audit Logs
              </span>
            </Link>
          </nav>
        </div>
        <div className="p-space-sm bg-surface-container-low space-y-space-xs">
          <div className="flex items-center justify-between px-space-sm py-1">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                NKN Node 04
              </span>
            </div>
            <span className="font-label-mono text-label-mono text-tertiary font-semibold">
              SYNCED
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <a className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-label-mono font-label-mono" href="#" onClick={(e)=>e.preventDefault()}>
              <span className="material-symbols-outlined text-[16px]">
                help
              </span>
              <span>
                Docs
              </span>
            </a>
            <a className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-on-error-container text-label-mono font-label-mono" href="#" onClick={(e)=>e.preventDefault()}>
              <span className="material-symbols-outlined text-[16px]">
                logout
              </span>
              <span>
                Exit
              </span>
            </a>
          </div>
        </div>
      </aside>
      <div className="pl-60 min-h-screen bg-surface flex flex-col">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface/90 backdrop-blur-xl z-40 px-space-lg flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-space-md">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                search
              </span>
              <input className="pl-9 pr-4 py-1.5 w-72 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-[0_1px_8px_rgba(0,0,0,0.02)]" placeholder="Search portal telemetry, logs, metadata... (⌘K)" type="text" />
            </div>
            <div className="hidden xl:flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mr-1">
                Telemetry:
              </span>
              <span className="font-label-mono text-label-mono text-on-surface bg-surface-container-low px-2 py-0.5 rounded-full">
                {"Maitri "}
                <strong className="text-primary font-semibold">
                  -18.4°C
                </strong>
              </span>
              <span className="font-label-mono text-label-mono text-on-surface bg-surface-container-low px-2 py-0.5 rounded-full">
                {"Himadri "}
                <strong className="text-primary font-semibold">
                  -6.8°C
                </strong>
              </span>
              <span className="font-label-mono text-label-mono text-on-surface bg-surface-container-low px-2 py-0.5 rounded-full">
                {"Bharati "}
                <strong className="text-primary font-semibold">
                  -14.2°C
                </strong>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-[14px]">
                verified
              </span>
              <span>
                ADMIN (ROLES: C, S, E, A)
              </span>
            </div>
            <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </header>
        <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
          <div className="flex flex-col w-full">
            <div className="mb-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div>
                <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary font-semibold tracking-wider uppercase mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>
                    FIELD OPERATIONS COMMAND • /ADMIN/REVIEW
                  </span>
                  <span className="text-outline-variant">
                    •
                  </span>
                  <span className="text-on-surface-variant font-medium">
                    ROLES: S, E, A
                  </span>
                </div>
                <h1 className="font-headline-md text-headline-md text-on-surface font-normal tracking-tight">
                  {" Peer Review & Scientific Sign-Off "}
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {" Multi-role validation workbench for polar outreach releases, NetCDF telemetry grounding, and open metadata compliance. "}
                </p>
              </div>
              <div className="flex items-center gap-space-sm self-start md:self-auto">
                <div className="flex items-center p-1 rounded-xl bg-surface-container-high shadow-sm">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-title-md text-body-sm bg-surface-container-lowest text-primary shadow-sm transition-all" id="viewBtnKanban" onClick={(e)=>window.__pol(e,"switchView('kanban')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      view_kanban
                    </span>
                    {" "}
                    <span>
                      Kanban Board
                    </span>
                    {" "}
                    <span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary-container font-label-mono text-[10px] ml-1">
                      12
                    </span>
                    {" "}
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-title-md text-body-sm text-on-surface-variant hover:text-on-surface transition-all" id="viewBtnWorkbench" onClick={(e)=>window.__pol(e,"switchView('workbench')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      fact_check
                    </span>
                    {" "}
                    <span>
                      Active Inspection
                    </span>
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-error" />
                    {" "}
                  </button>
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all font-title-md text-body-sm shadow-sm">
                  {" "}
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    filter_list
                  </span>
                  {" "}
                  <span>
                    Filters
                  </span>
                  {" "}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mb-space-lg">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                    Awaiting Review
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      5
                    </span>
                    <span className="font-label-mono text-label-mono text-error font-semibold">
                      2 Critical SLA
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[22px]">
                    pending_actions
                  </span>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                    Needs Revision
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      3
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary font-medium">
                      Pending PI
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[22px]">
                    draw
                  </span>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                    Approved Today
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-sm text-headline-sm text-tertiary">
                      8
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary font-semibold">
                      +4 vs Wkly Avg
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[22px]">
                    verified
                  </span>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                    Archive & Rejected
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-sm text-headline-sm text-on-surface-variant">
                      2
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      License Block
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center text-error">
                  <span className="material-symbols-outlined text-[22px]">
                    block
                  </span>
                </div>
              </div>
            </div>
            <section className="flex flex-col w-full" id="kanbanView">
              <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="font-label-mono text-label-mono uppercase text-on-surface-variant px-2">
                    Data Filter:
                  </span>
                  <button className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-title-md text-body-sm shadow-sm">
                    All Types
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-title-md text-body-sm">
                    Feature Articles (4)
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-title-md text-body-sm">
                    Social Briefs (3)
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-title-md text-body-sm">
                    Datasets & Logs (3)
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-title-md text-body-sm">
                    Media Reels (2)
                  </button>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-on-surface font-label-mono text-label-mono">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      check_circle
                    </span>
                    <span>
                      Auto-Grounding: NetCDF-4 Sync Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-sm">
                  <div className="flex items-center justify-between px-space-xs py-2 mb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Awaiting Review
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest font-label-mono text-label-mono text-on-surface font-semibold">
                        3
                      </span>
                    </div>
                    <span className="font-label-mono text-[10px] text-error font-medium uppercase tracking-tight bg-error-container/40 px-1.5 py-0.5 rounded">
                      SLA Active
                    </span>
                  </div>
                  <div className="space-y-space-sm">
                    <div className="group cursor-pointer p-space-md rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all border-l-4 border-l-primary relative" onClick={(e)=>window.__pol(e,"switchView('workbench')")}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px] uppercase font-semibold">
                          Article • NetCDF-4
                        </span>
                        <span className="flex items-center gap-1 font-label-mono text-[11px] text-error font-semibold">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            timer
                          </span>
                          {" 6h left "}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-body-lg text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {" Whispering Gales of Antarctica: Decoding Katabatic Wind Turbines "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                        {" Sensor correlation between Schirmacher Oasis localized pressure drop of 24 hPa and boundary-layer gale speeds. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2 bg-surface-container-low/50 px-2 py-1.5 rounded-lg">
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-mono text-[10px] font-bold">
                            AS
                          </span>
                          <span className="font-body-sm text-[12px] text-on-surface truncate max-w-[100px]">
                            Dr. A. Sen
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="px-1.5 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] font-semibold">
                            94% Grounded
                          </span>
                          <span className="material-symbols-outlined text-error text-[16px]" title="1 Grounding Discrepancy Flag">
                            error
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 text-right">
                        <span className="font-label-mono text-[11px] text-primary flex items-center justify-end gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                          {" Open Inspector "}
                          <span className="material-symbols-outlined text-[14px]">
                            arrow_forward
                          </span>
                          {" "}
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-[10px] uppercase font-semibold">
                          Infographic Text • Arctic
                        </span>
                        <span className="flex items-center gap-1 font-label-mono text-[11px] text-on-surface-variant">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            schedule
                          </span>
                          {" 18h left "}
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" IndARC Mooring Salinity Inversion 2024 Brief "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Annual Kongsfjorden fjord multi-depth CTD sensor validation and pycnocline layer shift observations. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-mono text-[10px] font-bold">
                            SV
                          </span>
                          <span className="font-body-sm text-[12px] text-on-surface">
                            Dr. Sneha Verma
                          </span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] font-semibold">
                          98% Grounded
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-[10px] uppercase font-semibold">
                          Social Pack • Bharati
                        </span>
                        <span className="flex items-center gap-1 font-label-mono text-[11px] text-on-surface-variant">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            schedule
                          </span>
                          {" 24h left "}
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Larsemann Hills Lichen Biodiversity Dispatches "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Photogrammetry macro surveys of Xanthoria elegans colonizing nunatak quartz veins. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-mono text-[10px] font-bold">
                            KR
                          </span>
                          <span className="font-body-sm text-[12px] text-on-surface">
                            K. Ramanathan
                          </span>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] font-semibold">
                          96% Grounded
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-sm">
                  <div className="flex items-center justify-between px-space-xs py-2 mb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Needs Edit
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest font-label-mono text-label-mono text-on-surface font-semibold">
                        3
                      </span>
                    </div>
                    <span className="font-label-mono text-[10px] text-secondary font-medium uppercase tracking-tight">
                      With Authors
                    </span>
                  </div>
                  <div className="space-y-space-sm">
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-[10px] uppercase font-semibold">
                          Archival OCR
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-error-container/40 text-error font-label-mono text-[10px] font-medium">
                          Unit Mismatch
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Dakshin Gangotri 1983 Historical Logbook Digits "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Manual inspection needed for analog barograph chart conversion from millibar to modern hPa standards. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Assigned: Archival Comm
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          edit_note
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-[10px] uppercase font-semibold">
                          Audio Narration
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-medium">
                          Phonetics Flag
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Himadri Ozone Column UAV Drone Survey Video Reel "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Re-recording required for standard international phonetic pronunciation of Ny-Ålesund research station. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Reviewer: E - Comm Cell
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          mic
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-[10px] uppercase font-semibold">
                          Feature Article
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-mono text-[10px] font-medium">
                          Tone Calibration
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Prydz Bay Krill Density Climate Summary "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Excessive mathematical notation in executive summary requires rewriting for senior high school outreach level. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Author: Dr. M. Nair
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          stylus
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-sm">
                  <div className="flex items-center justify-between px-space-xs py-2 mb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Approved
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest font-label-mono text-label-mono text-on-surface font-semibold">
                        3
                      </span>
                    </div>
                    <span className="font-label-mono text-[10px] text-tertiary font-semibold uppercase tracking-tight">
                      Queued for Pub
                    </span>
                  </div>
                  <div className="space-y-space-sm">
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] uppercase font-semibold">
                          Dataset Release
                        </span>
                        <span className="material-symbols-outlined text-tertiary text-[18px]">
                          verified
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Southern Ocean Expedition 01 Vessel Track & Hydrography "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Dual sign-off completed by Chief Scientist Dr. Sen. Metadata minted with DOI: 10.5067/NCPOR-SO-01. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-tertiary font-semibold">
                          Repository Synced
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Today, 10:14 IST
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] uppercase font-semibold">
                          Audio & Media
                        </span>
                        <span className="material-symbols-outlined text-tertiary text-[18px]">
                          verified
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Overwintering at Schirmacher Oasis: 360 Audio Story "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Binaural acoustic field logs calibrated to standard broadcast loudness. Scheduled for National Science Day. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-tertiary font-semibold">
                          Ready to Stream
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Today, 09:30 IST
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-mono text-[10px] uppercase font-semibold">
                          Fact Sheet
                        </span>
                        <span className="material-symbols-outlined text-tertiary text-[18px]">
                          verified
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Himansh High-Altitude Himalayan Glacier Mass Balance "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Chandra Basin stake measurements verified against winter accumulation radar logs. Dual-peer sign-off. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-tertiary font-semibold">
                          Cleared: S, A
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Yesterday
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-xl bg-surface-container-low p-space-sm">
                  <div className="flex items-center justify-between px-space-xs py-2 mb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-error" />
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Rejected / Blocked
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest font-label-mono text-label-mono text-on-surface font-semibold">
                        3
                      </span>
                    </div>
                    <span className="font-label-mono text-[10px] text-error font-semibold uppercase tracking-tight">
                      Archived
                    </span>
                  </div>
                  <div className="space-y-space-sm">
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all opacity-80 hover:opacity-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-error-container/30 text-on-error-container font-label-mono text-[10px] uppercase font-semibold">
                          Social Speculation
                        </span>
                        <span className="material-symbols-outlined text-error text-[18px]">
                          cancel
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Unverified Sensor Drift Anomaly Speculation Post "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Lacks ground-truth NetCDF L2 calibration. Inferred catastrophic calving event not supported by SAR data. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-error font-medium">
                          No Ground-Truth
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Archived
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all opacity-80 hover:opacity-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-error-container/30 text-on-error-container font-label-mono text-[10px] uppercase font-semibold">
                          Rights Conflict
                        </span>
                        <span className="material-symbols-outlined text-error text-[18px]">
                          copyright
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Commercial Satellite Re-upload without CC License "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Commercial optical raster imagery uploaded under public MoES portal without downstream vendor release indemnity. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-error font-medium">
                          License Infringement
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Archived
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all opacity-80 hover:opacity-100">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-error-container/30 text-on-error-container font-label-mono text-[10px] uppercase font-semibold">
                          Security Perimeter
                        </span>
                        <span className="material-symbols-outlined text-error text-[18px]">
                          security
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface leading-snug">
                        {" Autonomous Glider Telemetry Leak Draft "}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                        {" Un-redacted high-precision bathymetric coordinate bounds violate sovereign ocean sensor publication protocol. "}
                      </p>
                      <div className="mt-3 flex items-center justify-between pt-2">
                        <span className="font-label-mono text-[11px] text-error font-medium">
                          Redaction Required
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Archived
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col w-full" id="workbenchView">
              <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
                <div className="flex items-center gap-space-sm">
                  <button className="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors flex items-center" onClick={(e)=>window.__pol(e,"switchView('kanban')")}>
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_back
                    </span>
                    {" "}
                  </button>
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                    Document Inspection
                  </span>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="font-title-md text-body-sm text-primary font-semibold truncate max-w-sm">
                    Whispering Gales of Antarctica (DOC-2024-089)
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="px-2.5 py-1 rounded-full bg-error-container/40 text-error font-label-mono text-label-mono font-semibold flex items-center gap-1">
                    {" "}
                    <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />
                    {" 1 DISCREPANCY DETECTED "}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-tertiary-container/10 text-tertiary font-label-mono text-label-mono font-semibold">
                    {" 94% SCIENTIFIC GROUNDING "}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
                    {" SLA: 05h 42m "}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
                <div className="lg:col-span-7 flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
                  <div className="border-b pb-space-md mb-space-md" style={{"borderBottomColor": "#E2E8F0"}}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-mono text-[10px] uppercase font-bold tracking-wider">
                        MoES Feature Article
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-[10px]">
                        Station: Maitri (70°45'S, 11°44'E)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-[10px]">
                        Read Time: 4m 10s • 942 Words
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal leading-tight">
                      {" Whispering Gales of Antarctica: Decoding Katabatic Wind Turbines "}
                    </h2>
                    <div className="flex items-center gap-2 mt-2 font-body-sm text-body-sm text-on-surface-variant">
                      <span className="font-medium text-on-surface">
                        Authors:
                      </span>
                      <span>
                        Dr. Ananya Sen & NCPOR Editorial Lead
                      </span>
                      <span className="text-outline-variant">
                        •
                      </span>
                      <span>
                        {"Dataset Ref: "}
                        <code className="font-label-mono text-[12px] text-primary">
                          MoES-MTR-AWS-2024.nc4
                        </code>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md py-2 px-3 mb-space-md rounded-lg bg-surface-container-low text-label-mono font-label-mono text-[11px]">
                    <span className="text-on-surface-variant uppercase font-semibold">
                      Validation Layer:
                    </span>
                    <span className="flex items-center gap-1 text-tertiary">
                      {" "}
                      <span className="w-3 h-0.5 bg-tertiary" />
                      {" Verified Ground Truth "}
                    </span>
                    <span className="flex items-center gap-1 text-secondary">
                      {" "}
                      <span className="w-3 h-0.5 bg-secondary border-dashed" />
                      {" Inferred Extrapolation "}
                    </span>
                    <span className="flex items-center gap-1 text-error font-semibold">
                      {" "}
                      <span className="w-3 h-0.5 bg-error" />
                      {" Telemetry Conflict "}
                    </span>
                  </div>
                  <div className="space-y-space-md font-body-md text-body-md text-on-surface leading-relaxed">
                    <p>
                      {" The icy expanse of Queen Maud Land serves as a colossal thermal engine. As cold, dense air pools over the polar plateau reaching elevations above 3,000 meters, gravitational acceleration propels these massive atmospheric volumes downward toward the coastline. "}
                    </p>
                    <div className="p-3 rounded-lg bg-tertiary-container/5 relative transition-colors">
                      <p>
                        {" "}
                        <span className="underline decoration-tertiary decoration-2 underline-offset-4 font-normal">
                          {" \"During the transition from polar autumn to mid-winter in the Schirmacher Oasis, katabatic wind velocities frequently surge beyond 45 meters per second (162 km/h), generating sustained aerodynamic stress on station mast assemblies.\" "}
                        </span>
                        {" "}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-mono text-[10px] font-semibold shadow-sm">
                          {" "}
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                          {" [SRC-1] NCPOR-AWS-MTR Table 4.1 Verified "}
                        </span>
                        <span className="font-label-mono text-[10px] text-on-surface-variant">
                          Confidence: 99.8%
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary-container/20 relative transition-colors">
                      <p>
                        {" "}
                        <span className="underline decoration-secondary decoration-2 underline-offset-4">
                          {" \"Field teams noted that this localized atmospheric pressure drop of 24 hPa may correlate directly with accelerated coastal sea-ice fracture along the Lazarev Ice Shelf edge.\" "}
                        </span>
                        {" "}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-mono text-[10px] font-medium shadow-sm">
                          {" "}
                          <span className="material-symbols-outlined text-[13px]">
                            info
                          </span>
                          {" [⚠️ INFERRED] Needs Principal Investigator Confirmation "}
                        </span>
                        <span className="font-label-mono text-[10px] text-on-surface-variant">
                          Confidence: 78.4%
                        </span>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-error-container/30 transition-colors">
                      <p>
                        {" "}
                        <span className="underline decoration-error decoration-2 underline-offset-4 font-medium text-on-surface">
                          {" \"Temperature drops recorded during the storm reached -78.4°C, marking an all-time record for mid-July meteorological observations at Maitri.\" "}
                        </span>
                        {" "}
                      </p>
                      <div className="mt-3 p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                        <div className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">
                            cancel
                          </span>
                          <div>
                            <span className="font-label-mono text-label-mono text-error font-bold uppercase tracking-wider block">
                              {" SENSOR DISCREPANCY DETECTED "}
                            </span>
                            <p className="font-body-sm text-[12px] text-on-surface mt-0.5">
                              {" Source NetCDF-4 Level 2 calibrated dataset reports "}
                              <strong className="text-primary font-semibold">
                                -38.4°C
                              </strong>
                              {" (Station minimum: -39.1°C). The draft value of "}
                              <span className="line-through text-error">
                                -78.4°C
                              </span>
                              {" is an OCR digit read transposition from handwritten field charts. "}
                            </p>
                          </div>
                        </div>
                        <button className="shrink-0 px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-title-md text-[12px] transition-all flex items-center gap-1 shadow-sm" id="btnCorrection" onClick={(e)=>window.__pol(e,"applyCorrection()")}>
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            auto_fix_high
                          </span>
                          {" "}
                          <span>
                            Apply Fix: -38.4°C
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <p>
                      {" Modernizing our wind turbine generator blades with high-toughness nickel-chromium alloys has significantly mitigated leading-edge erosion caused by suspended ice crystals during these cataclysmic events. "}
                    </p>
                  </div>
                  <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-title-md text-body-sm text-on-surface flex items-center gap-1.5">
                        {" "}
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          show_chart
                        </span>
                        {" "}
                        <span>
                          Observed Wind Velocity vs. Barometric Profile (NetCDF 48h Window)
                        </span>
                        {" "}
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant">
                        RESOLUTION: 10 MIN INTERVALS
                      </span>
                    </div>
                    <div className="w-full h-24 bg-surface-container-lowest rounded-lg p-2 flex items-end justify-between gap-1">
                      <div className="w-full h-full flex items-end">
                        <svg className="w-full h-full text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 500 80">
                          <path d="M0,65 L30,62 L70,58 L120,40 L160,45 L200,20 L240,12 L280,15 L320,28 L360,50 L400,60 L450,55 L500,68" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                          <path d="M0,65 L30,62 L70,58 L120,40 L160,45 L200,20 L240,12 L280,15 L320,28 L360,50 L400,60 L450,55 L500,68 L500,80 L0,80 Z" fill="currentColor" fillOpacity="0.08" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2 font-label-mono text-[10px] text-on-surface-variant">
                      <span>
                        00:00 UTC (12 Jul)
                      </span>
                      <span className="text-error font-semibold">
                        PEAK GUST: 46.2 m/s @ 18:40 UTC
                      </span>
                      <span>
                        23:59 UTC (13 Jul)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col space-y-space-md">
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                    <div className="flex items-center justify-between mb-space-sm">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          dataset
                        </span>
                        <h3 className="font-title-md text-title-md text-on-surface">
                          Grounding Evidence Dock
                        </h3>
                      </div>
                      <span className="font-label-mono text-[10px] px-2 py-0.5 rounded bg-surface-container text-on-surface">
                        NCPOR-TR-2024-11
                      </span>
                    </div>
                    <div className="rounded-lg bg-surface-container-low p-space-sm space-y-space-xs font-label-mono text-body-sm text-on-surface">
                      <div className="text-[11px] text-on-surface-variant uppercase tracking-wider mb-1">
                        Raw Telemetry Records [Extract Sec 3.2]
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[12px] bg-surface-container-lowest p-2 rounded">
                        <span className="text-on-surface-variant">
                          Max Gust Speed:
                        </span>
                        <span className="font-bold text-on-surface">
                          46.2 m/s (166.3 km/h)
                        </span>
                        <span className="text-on-surface-variant">
                          Ambient Air Temp:
                        </span>
                        <span className="font-bold text-primary">
                          -38.4°C (Calibrated)
                        </span>
                        <span className="text-on-surface-variant">
                          Barometric Sea Level:
                        </span>
                        <span className="font-bold text-on-surface">
                          978.4 hPa
                        </span>
                        <span className="text-on-surface-variant">
                          Mast Strain Gauge:
                        </span>
                        <span className="font-bold text-tertiary">
                          3.4 kN (Nominal)
                        </span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-2 leading-relaxed">
                        {" Verbatim extract: \"Sensor payload #AWS-4 reported severe boundary turbulence. No temperatures lower than -39.1°C recorded during the entire winter diurnal cycle.\" "}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
                    <div className="flex items-center justify-between mb-space-sm">
                      <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-1.5">
                        {" "}
                        <span className="material-symbols-outlined text-tertiary text-[20px]">
                          checklist
                        </span>
                        {" "}
                        <span>
                          Compliance Checklist
                        </span>
                        {" "}
                      </h3>
                      <span className="font-label-mono text-[11px] text-primary font-bold" id="checklistScore">
                        3 of 4 Passed
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      <label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                        {" "}
                        <input defaultChecked="" className="mt-0.5 rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" onChange={(e)=>window.__pol(e,"updateChecklist()")} />
                        {" "}
                        <div className="flex flex-col">
                          <span className="font-title-md text-[13px] text-on-surface">
                            Scientific Accuracy & NetCDF Verification
                          </span>
                          <span className="font-body-sm text-[11px] text-on-surface-variant">
                            Ground-truth validation with Level-2 verified raw data files
                          </span>
                        </div>
                        {" "}
                      </label>
                      <label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                        {" "}
                        <input defaultChecked="" className="mt-0.5 rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" onChange={(e)=>window.__pol(e,"updateChecklist()")} />
                        {" "}
                        <div className="flex flex-col">
                          <span className="font-title-md text-[13px] text-on-surface">
                            Data Rights & License Compliance
                          </span>
                          <span className="font-body-sm text-[11px] text-on-surface-variant">
                            CC-BY-4.0 MoES Open Data license terms met
                          </span>
                        </div>
                        {" "}
                      </label>
                      <label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                        {" "}
                        <input defaultChecked="" className="mt-0.5 rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" onChange={(e)=>window.__pol(e,"updateChecklist()")} />
                        {" "}
                        <div className="flex flex-col">
                          <span className="font-title-md text-[13px] text-on-surface">
                            Outreach Tone & Readability
                          </span>
                          <span className="font-body-sm text-[11px] text-on-surface-variant">
                            Grade 10.2 Flesch-Kincaid index met for public audience
                          </span>
                        </div>
                        {" "}
                      </label>
                      <label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors" id="audioItem">
                        {" "}
                        <input className="mt-0.5 rounded text-primary focus:ring-primary w-4 h-4" id="chkAudio" type="checkbox" onChange={(e)=>window.__pol(e,"updateChecklist()")} />
                        {" "}
                        <div className="flex flex-col">
                          <span className="font-title-md text-[13px] text-on-surface">
                            Audio Narration & Pronunciation Check
                          </span>
                          <span className="font-body-sm text-[11px] text-on-surface-variant">
                            Synthetic voice phonetic tags for polar geography verified
                          </span>
                        </div>
                        {" "}
                      </label>
                    </div>
                  </div>
                  <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-space-sm">
                      <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-1.5">
                        {" "}
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          forum
                        </span>
                        {" "}
                        <span>
                          Cadre Discussion
                        </span>
                        {" "}
                      </h3>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">
                        2 Participants
                      </span>
                    </div>
                    <div className="space-y-space-sm mb-space-md">
                      <div className="p-2.5 rounded-lg bg-surface-container-low">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-mono text-[9px] font-bold">
                              KR
                            </span>
                            <span className="font-title-md text-[12px] text-on-surface font-semibold">
                              Dr. K. Ramanathan (Senior Cadre PI)
                            </span>
                          </div>
                          <span className="font-label-mono text-[10px] text-on-surface-variant">
                            12m ago
                          </span>
                        </div>
                        <p className="font-body-sm text-[12px] text-on-surface-variant leading-normal">
                          {" Please fix the -78.4°C typo to -38.4°C before public dissemination. Otherwise the meteorological grounding looks solid. "}
                        </p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-surface-container-low">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-mono text-[9px] font-bold">
                              ED
                            </span>
                            <span className="font-title-md text-[12px] text-on-surface font-semibold">
                              Comm Cell Editorial Desk
                            </span>
                          </div>
                          <span className="font-label-mono text-[10px] text-on-surface-variant">
                            4m ago
                          </span>
                        </div>
                        <p className="font-body-sm text-[12px] text-on-surface-variant leading-normal">
                          {" Noted. Ready to clear outreach publication as soon as audio phonetics check is signed off by Dr. Sen. "}
                        </p>
                      </div>
                    </div>
                    <div className="relative mt-auto">
                      <textarea className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Add a review note or instruction for the author... (@mention supported)" rows="2" defaultValue={""} />
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-label-mono text-[10px] text-on-surface-variant">
                          Press ⌘+Enter to post comment
                        </span>
                        <button className="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-title-md text-[11px] hover:bg-secondary hover:text-on-secondary transition-colors">
                          Post Note
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-lg border-t-2 border-t-primary-container">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                  <div className="flex-1">
                    <label className="block font-label-mono text-label-mono text-on-surface-variant uppercase font-semibold mb-1">
                      {" Official Cadre Sign-Off Statement / Author Instructions "}
                    </label>
                    <input className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" id="decisionNotes" type="text" defaultValue="NetCDF-4 temperature anomaly reconciled to -38.4°C. Approved for portal publication." />
                  </div>
                  <div className="flex flex-wrap items-center gap-space-sm self-end lg:self-center shrink-0">
                    <button className="px-4 py-2.5 rounded-lg bg-surface-container-low hover:bg-error-container/40 text-on-surface-variant hover:text-error transition-all font-title-md text-body-sm flex items-center gap-1.5 shadow-sm" onClick={(e)=>window.__pol(e,"rejectAction()")}>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        cancel
                      </span>
                      {" "}
                      <span>
                        Reject with Formal Notice
                      </span>
                      {" "}
                    </button>
                    <button className="px-4 py-2.5 rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary transition-all font-title-md text-body-sm flex items-center gap-1.5 shadow-sm" onClick={(e)=>window.__pol(e,"requestEditAction()")}>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        history_edu
                      </span>
                      {" "}
                      <span>
                        Request Author Edits
                      </span>
                      {" "}
                    </button>
                    <button className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary transition-all font-title-md text-body-sm flex items-center gap-2 shadow-md" onClick={(e)=>window.__pol(e,"approveAction()")}>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      {" "}
                      <span>
                        Approve & Schedule Publication
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
