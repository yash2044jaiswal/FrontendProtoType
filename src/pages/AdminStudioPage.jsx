import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_ai_content_studio_admin_studio/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "(function initStudioControls() {\n    const toggleHistoryBtn = document.getElementById('toggle-history-btn');\n    const closeHistoryBtn = document.getElementById('close-history-btn');\n    const historyDrawer = document.getElementById('history-drawer');\n\n    if (toggleHistoryBtn && historyDrawer) {\n      toggleHistoryBtn.addEventListener('click', () => {\n        historyDrawer.classList.toggle('hidden');\n        historyDrawer.classList.toggle('flex');\n      });\n    }\n\n    if (closeHistoryBtn && historyDrawer) {\n      closeHistoryBtn.addEventListener('click', () => {\n        historyDrawer.classList.add('hidden');\n        historyDrawer.classList.remove('flex');\n      });\n    }\n\n    const overlayToggle = document.getElementById('overlay-toggle');\n    if (overlayToggle) {\n      overlayToggle.addEventListener('change', (e) => {\n        const underlines = document.querySelectorAll('.decoration-2');\n        underlines.forEach(el => {\n          if (e.target.checked) {\n            el.classList.add('underline');\n          } else {\n            el.classList.remove('underline');\n          }\n        });\n      });\n    }\n  })();";

export default function AdminStudioPage() {
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
            <Link aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-all bg-primary-container text-on-primary-container font-semibold rounded-lg" data-path="content-studio" to="/admin/studio">
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
          <div className="flex flex-col w-full text-on-surface">
            <section className="flex flex-col gap-space-sm mb-space-lg">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                    {" "}
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      satellite_alt
                    </span>
                    {" FIELD OPERATIONS COMMAND "}
                  </span>
                  <span className="text-outline-variant font-label-mono text-label-mono">
                    •
                  </span>
                  <span className="font-label-mono text-label-mono uppercase tracking-wider text-primary font-semibold">
                    /ADMIN/STUDIO
                  </span>
                  <span className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono">
                    {" "}
                    <span className="material-symbols-outlined text-[12px]">
                      security
                    </span>
                    {" CLEARANCE: TIER A (SUPERVISORY) "}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-tertiary font-label-mono text-label-mono shadow-sm">
                    {" "}
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                    {" GROUNDING ENGINE: NCPOR POLARNET v3.4 ACTIVE "}
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-xs">
                <div className="flex flex-col max-w-4xl">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {" AI Content Studio & Science Outreach Generator "}
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    {" Synthesize verified research datasets, cruise dispatches, and archival logs into peer-grounded public outreach articles, school explainers, and multilingual media. "}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm self-start lg:self-center shrink-0">
                  <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-title-md text-body-sm shadow-sm hover:bg-surface-container-low transition-all" id="toggle-history-btn" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      history
                    </span>
                    {" "}
                    <span>
                      Version History (v3.2)
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-title-md text-body-sm shadow-sm hover:bg-surface-container-low transition-all" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                      file_download
                    </span>
                    {" "}
                    <span>
                      Export Draft
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </section>
            <section className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md flex-1">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                      Editorial Tone
                    </label>
                    <div className="relative flex items-center">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm py-2 px-3 pr-8 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer" defaultValue={"Scientific Outreach (Engaging & Rigorous)"}>
                        <option>
                          Scientific Outreach (Engaging & Rigorous)
                        </option>
                        <option>
                          Peer Academic (Formal)
                        </option>
                        <option>
                          Public High School Explainer
                        </option>
                        <option>
                          Journalistic Press Dispatch
                        </option>
                        <option>
                          Youth Outreach & Storytelling
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 pointer-events-none text-on-surface-variant text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                      Target Audience
                    </label>
                    <div className="relative flex items-center">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm py-2 px-3 pr-8 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer" defaultValue={"General Public & Undergrads"}>
                        <option>
                          General Public & Undergrads
                        </option>
                        <option>
                          Policy Makers & MoES Leads
                        </option>
                        <option>
                          K-12 Educators & Classrooms
                        </option>
                        <option>
                          Global Science Press Corps
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 pointer-events-none text-on-surface-variant text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <label className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                        Language
                      </label>
                      <div className="flex items-center gap-1 font-label-mono text-[10px]">
                        <button className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary-container font-semibold" type="button">
                          EN
                        </button>
                        <button className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface" type="button">
                          HI
                        </button>
                        <button className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface" type="button">
                          TA
                        </button>
                        <button className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant hover:text-on-surface" type="button">
                          BN
                        </button>
                      </div>
                    </div>
                    <div className="relative flex items-center">
                      <select className="w-full appearance-none bg-surface-container-low text-on-surface font-body-sm text-body-sm py-2 px-3 pr-8 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer" defaultValue="English (India / Institutional)">
                        <option>
                          English (India / Institutional)
                        </option>
                        <option>
                          Hindi (हिन्दी - मानक)
                        </option>
                        <option>
                          Tamil (தமிழ்)
                        </option>
                        <option>
                          Bengali (বাংলা)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 pointer-events-none text-on-surface-variant text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-1">
                    <div className="flex items-center justify-between">
                      <label className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                        Length Target
                      </label>
                      <span className="font-label-mono text-label-mono text-primary font-semibold">
                        ~950 words
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        verified
                      </span>
                      <span className="font-label-mono text-label-mono text-on-surface truncate">
                        {" Grade 10.4 • High Accessibility (WCAG AAA) "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-space-xs shrink-0 pt-2 xl:pt-0">
                  <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-title-md text-body-sm hover:bg-surface-container transition-colors" title="Regenerate draft using latest polar parameters" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[17px] text-primary animate-hover">
                      sync
                    </span>
                    {" "}
                    <span>
                      Regenerate Draft
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-title-md text-body-sm hover:bg-secondary-fixed transition-colors" title={"Trigger deep NetCDF & log cross-check"} type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[17px] text-primary">
                      verified_user
                    </span>
                    {" "}
                    <span>
                      Fact-check
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-title-md text-body-sm hover:bg-surface-container transition-colors" title="Audio narration generator" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[17px] text-secondary">
                      record_voice_over
                    </span>
                    {" "}
                    <span>
                      Narration
                    </span>
                    {" "}
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm shadow-sm hover:bg-primary transition-all ml-1" type="button">
                    {" "}
                    <span>
                      Send for Peer Review
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start relative">
              <aside className="lg:col-span-3 flex flex-col gap-space-md">
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        dataset
                      </span>
                      <h2 className="font-title-md text-body-sm text-on-surface">
                        Grounded Sources
                      </h2>
                      <span className="font-label-mono text-[10px] px-2 py-0.5 rounded-full bg-primary text-on-primary font-semibold">
                        3 Linked
                      </span>
                    </div>
                    <button className="inline-flex items-center text-primary hover:text-primary-container font-label-mono text-label-mono" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        add
                      </span>
                      {" "}
                      <span>
                        Link
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="relative flex items-center my-1">
                    <span className="material-symbols-outlined absolute left-2.5 text-on-surface-variant text-[16px]">
                      search
                    </span>
                    <input className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-[13px]" placeholder="Filter polar datasets, papers..." type="text" />
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low shadow-sm flex flex-col gap-1.5 transition-all cursor-pointer relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
                    <div className="flex items-center justify-between pl-1.5">
                      <span className="font-label-mono text-[10px] uppercase font-bold text-primary tracking-wider">
                        PRIMARY / SRC-1
                      </span>
                      <span className="inline-flex items-center gap-1 font-label-mono text-[10px] text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded-full font-semibold">
                        {" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        {" 99.8% Match "}
                      </span>
                    </div>
                    <p className="font-title-md text-[13px] text-on-surface leading-snug pl-1.5 font-semibold group-hover:text-primary">
                      {" NCPOR-TR-2024-11: Katabatic Wind Spikes at Schirmacher Oasis "}
                    </p>
                    <div className="flex flex-wrap items-center gap-1 pl-1.5 text-on-surface-variant font-label-mono text-[11px]">
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-lowest">
                        NetCDF-4
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-lowest">
                        MoES Verified
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-lowest">
                        Level 2
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-bright shadow-sm flex flex-col gap-1.5 hover:bg-surface-container-low transition-all cursor-pointer relative overflow-hidden group">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-[10px] uppercase font-semibold text-on-surface-variant">
                        SRC-2
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-full">
                        {" GPS Tagged "}
                      </span>
                    </div>
                    <p className="font-title-md text-[13px] text-on-surface leading-snug group-hover:text-primary">
                      {" 43rd IAE Daily Field Dispatch #42: Drone Photogrammetry at Maitri "}
                    </p>
                    <div className="flex items-center gap-1 text-on-surface-variant font-label-mono text-[11px]">
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-low">
                        Field Notes
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-low">
                        Maitri Base
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-bright shadow-sm flex flex-col gap-1.5 hover:bg-surface-container-low transition-all cursor-pointer relative overflow-hidden group">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-[10px] uppercase font-semibold text-on-surface-variant">
                        SRC-3
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-full">
                        {" Kongsfjorden "}
                      </span>
                    </div>
                    <p className="font-title-md text-[13px] text-on-surface leading-snug group-hover:text-primary">
                      {" IndARC Arctic Mooring 2024 CTD Salinity & Temp Anomalies "}
                    </p>
                    <div className="flex items-center gap-1 text-on-surface-variant font-label-mono text-[11px]">
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-low">
                        Mooring Array
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-low">
                        Time-series
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-xs p-3 rounded-xl bg-surface-container-low flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant">
                        Grounding Fidelity
                      </span>
                      <span className="font-label-mono text-label-mono font-semibold text-tertiary">
                        94% Grounded
                      </span>
                    </div>
                    <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden flex">
                      <div className="bg-tertiary h-2 rounded-full" style={{"width": "91%"}} />
                      <div className="bg-secondary-container h-2" style={{"width": "6%"}} />
                      <div className="bg-error h-2" style={{"width": "3%"}} />
                    </div>
                    <div className="flex items-center justify-between font-label-mono text-[10px] text-on-surface-variant">
                      <span>
                        ● 91% Strict
                      </span>
                      <span>
                        ● 6% Inferred
                      </span>
                      <span className="text-error font-semibold">
                        ● 3% Alert
                      </span>
                    </div>
                  </div>
                  <div className="mt-space-xs flex flex-col gap-2">
                    <span className="font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                      Recommended Datasets
                    </span>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-bright text-[12px] hover:bg-surface-container-low">
                      <div className="flex flex-col min-w-0 pr-2">
                        <span className="font-title-md text-[12px] truncate">
                          Bharati Coastal Radiometer Logs
                        </span>
                        <span className="font-label-mono text-[10px] text-on-surface-variant">
                          Larsemann Hills • Level 1B
                        </span>
                      </div>
                      <button className="p-1 rounded bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-colors shrink-0" title="Attach to session" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          add
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-bright text-[12px] hover:bg-surface-container-low">
                      <div className="flex flex-col min-w-0 pr-2">
                        <span className="font-title-md text-[12px] truncate">
                          Himadri Ny-Ålesund Aerosol Sampler
                        </span>
                        <span className="font-label-mono text-[10px] text-on-surface-variant">
                          Svalbard 2024 Ingestion
                        </span>
                      </div>
                      <button className="p-1 rounded bg-surface-container text-primary hover:bg-primary hover:text-on-primary transition-colors shrink-0" title="Attach to session" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          add
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                {" "}
              </aside>
              <main className="lg:col-span-6 flex flex-col gap-space-md">
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-xl p-1.5 shadow-sm flex items-center justify-between overflow-x-auto">
                  <div className="flex items-center gap-1 min-w-max">
                    <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm shadow-sm" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        article
                      </span>
                      {" "}
                      <span>
                        Article (Longform)
                      </span>
                      {" "}
                      <span className="px-1.5 py-0.2 rounded-full bg-primary text-on-primary text-[10px] font-label-mono">
                        920 words
                      </span>
                      {" "}
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-body-sm transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        share
                      </span>
                      {" "}
                      <span>
                        Social Captions
                      </span>
                      {" "}
                      <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-label-mono">
                        4
                      </span>
                      {" "}
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-body-sm transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        bar_chart
                      </span>
                      {" "}
                      <span>
                        Infographic Text
                      </span>
                      {" "}
                      <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-label-mono">
                        6 stats
                      </span>
                      {" "}
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-body-sm transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        mic
                      </span>
                      {" "}
                      <span>
                        Audio Narration
                      </span>
                      {" "}
                      <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-label-mono">
                        3m 45s
                      </span>
                      {" "}
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-title-md text-body-sm transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        translate
                      </span>
                      {" "}
                      <span>
                        Translations
                      </span>
                      {" "}
                      <span className="px-1.5 py-0.2 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-label-mono">
                        Ready
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col min-h-[640px]">
                  <div className="px-space-md py-space-sm bg-surface-container-low rounded-t-xl flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-1 flex-wrap">
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-bold text-body-sm" type="button">
                        H1
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-bold text-body-sm" type="button">
                        H2
                      </button>
                      <div className="w-px h-4 bg-outline-variant mx-1" />
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Bold" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          format_bold
                        </span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Italic" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          format_italic
                        </span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Quote" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          format_quote
                        </span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Key Stat Callout" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          numbers
                        </span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-primary font-title-md text-[13px] flex items-center gap-1" title="Insert Linked Citation" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                        {" "}
                        <span>
                          Cite
                        </span>
                        {" "}
                      </button>
                      <div className="w-px h-4 bg-outline-variant mx-1" />
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Undo" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          undo
                        </span>
                      </button>
                      <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Redo" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          redo
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-label-mono uppercase text-on-surface-variant">
                        Fact-Check Overlay
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        {" "}
                        <input defaultChecked="" className="sr-only peer" id="overlay-toggle" type="checkbox" />
                        {" "}
                        <div className="w-9 h-5 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        {" "}
                      </label>
                    </div>
                  </div>
                  <div className="p-space-lg flex-1 flex flex-col gap-space-md">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-semibold">
                        FEATURE ARTICLE • POLAR METEOROLOGY
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        {" Whispering Gales of Antarctica: Decoding Katabatic Wind Turbines at Maitri Station "}
                      </h2>
                      <div className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono pt-1">
                        <span>
                          By Dr. Ananya Sen & NCPOR Editorial Lead
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          Maitri 70°45′57″S, 11°44′09″E
                        </span>
                        <span>
                          •
                        </span>
                        <span>
                          Updated 14:45 IST
                        </span>
                      </div>
                    </div>
                    <div className="space-y-space-md text-on-surface font-body-md text-body-md leading-relaxed">
                      <p>
                        {" "}
                        {" "}
                        <span className="bg-surface-container-low px-1 py-0.5 rounded decoration-2 underline decoration-[#007f5d] cursor-pointer hover:bg-surface-container transition-colors" title="Verified against NCPOR-TR-2024-11 §3.2 (Confidence 99.4%)">
                          {" During the transition from polar autumn to mid-winter in the Schirmacher Oasis, katabatic wind velocities frequently surge beyond 45 meters per second (162 km/h) within a mere twenty-minute window. "}
                        </span>
                        {" "}
                        <sup className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-tertiary-container text-on-tertiary-container font-semibold ml-0.5 cursor-pointer">
                          {" SRC-1 §3.2 "}
                        </sup>
                        {" "}
                        {" "}
                        <span className="bg-surface-container-low px-1 py-0.5 rounded decoration-2 underline decoration-[#007f5d] cursor-pointer hover:bg-surface-container transition-colors ml-1" title="Verified against NCPOR-TR-2024-11 Fig 4.1 (Confidence 98.7%)">
                          {" These density-driven gravity flows cascade down the 3,000-meter Antarctic ice dome, funnelling extreme cryogenic air masses directly over India's Maitri Research Base. "}
                        </span>
                        {" "}
                        <sup className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-tertiary-container text-on-tertiary-container font-semibold ml-0.5 cursor-pointer">
                          {" SRC-1 Fig 4.1 "}
                        </sup>
                        {" "}
                      </p>
                      <p>
                        {" "}
                        {" "}
                        <span className="bg-surface-container-high px-1 py-0.5 rounded decoration-2 underline decoration-[#d97706] cursor-pointer hover:bg-surface-container-highest transition-colors" title="Requires Clarification / Inferred, Confidence 74.2%">
                          {" Field teams noted that this localized atmospheric pressure drop of 24 hPa may correlate directly with accelerated coastal sea-ice fracture in the Lazarev Sea. "}
                        </span>
                        {" "}
                        <sup className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-secondary-container text-on-secondary-container font-semibold ml-0.5 cursor-pointer">
                          {" ⚠️ INFERRED: Needs PI Check "}
                        </sup>
                        {" "}
                        {" "}
                        <span className="bg-surface-container-low px-1 py-0.5 rounded decoration-2 underline decoration-[#007f5d] cursor-pointer hover:bg-surface-container transition-colors ml-1" title="Verified against Field Dispatch #42 (Confidence 99.1%)">
                          {" Equipped with heated ultrasonic 3D sonic anemometers, the atmospheric physics cadre captured micro-turbulent eddies at 20 Hz without sensor riming. "}
                        </span>
                        {" "}
                        <sup className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-tertiary-container text-on-tertiary-container font-semibold ml-0.5 cursor-pointer">
                          {" SRC-2 Dispatch #42 "}
                        </sup>
                        {" "}
                      </p>
                      <div className="flex flex-col gap-space-xs">
                        <p>
                          {" "}
                          {" "}
                          <span className="bg-error-container/40 px-1 py-0.5 rounded decoration-2 underline decoration-error text-on-surface cursor-pointer" title="Fact Check Warning: Unsubstantiated or Disputed, Confidence 42%">
                            {" Temperature drops recorded during the storm reached -78.4°C, marking an all-time record for the Schirmacher Oasis region. "}
                          </span>
                          {" "}
                          <sup className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-error text-on-error font-semibold ml-0.5 cursor-pointer">
                            {" ❌ UNVERIFIED: Discrepancy Found "}
                          </sup>
                          {" "}
                        </p>
                        <div className="p-space-sm rounded-lg bg-surface-bright shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm mt-1">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">
                              error
                            </span>
                            <div className="flex flex-col text-[13px] leading-snug">
                              <span className="font-semibold text-error">
                                Numerical Discrepancy Detected (NetCDF-4 Level 2)
                              </span>
                              <span className="text-on-surface-variant">
                                {"Source record shows "}
                                <strong>
                                  -38.4°C
                                </strong>
                                {" at 03:40 UTC, not "}
                                <strong>
                                  -78.4°C
                                </strong>
                                . Likely OCR digit misread from raw analog chart.
                              </span>
                            </div>
                          </div>
                          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-on-primary font-title-md text-[12px] shrink-0 hover:bg-primary-container transition-colors shadow-sm" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[15px]">
                              check
                            </span>
                            {" "}
                            <span>
                              Apply Correction: -38.4°C
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                      <p className="text-on-surface-variant italic pt-2">
                        {" Understanding these severe wind dynamics is vital not only for ensuring the structural integrity of India's Maitri station modules, but also for calibrating Southern Ocean numerical climate models predicting global maritime storm tracks. "}
                      </p>
                    </div>
                  </div>
                  <div className="px-space-md py-space-sm bg-surface-container-low rounded-b-xl flex flex-wrap items-center justify-between gap-space-md font-label-mono text-label-mono text-on-surface-variant">
                    <div className="flex items-center gap-space-md">
                      <span>
                        {"Word Count: "}
                        <strong className="text-on-surface">
                          942 words
                        </strong>
                      </span>
                      <span>
                        •
                      </span>
                      <span>
                        {"Est. Reading Time: "}
                        <strong className="text-on-surface">
                          4m 10s
                        </strong>
                      </span>
                      <span>
                        •
                      </span>
                      <span>
                        {"Flesch-Kincaid: "}
                        <strong className="text-on-surface">
                          Grade 10.2
                        </strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary" />
                      <span className="text-on-surface">
                        {"Grounding: "}
                        <strong>
                          91% Strict
                        </strong>
                        {", "}
                        <strong>
                          6% Inferred
                        </strong>
                        {", "}
                        <strong className="text-error">
                          3% Discrepant
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
              </main>
              <aside className="lg:col-span-3 flex flex-col gap-space-md">
                {" "}
                {" "}
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        find_in_page
                      </span>
                      <h2 className="font-title-md text-body-sm text-on-surface">
                        Source Evidence
                      </h2>
                    </div>
                    <span className="font-label-mono text-[10px] px-2 py-0.5 rounded-full bg-surface-container-low text-primary font-semibold">
                      {" Docked: SRC-1 "}
                    </span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low shadow-sm flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-[10px] uppercase font-bold text-primary">
                        NCPOR-TR-2024-11, P. 18
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">
                        Sec 3.2
                      </span>
                    </div>
                    <h3 className="font-title-md text-[13px] text-on-surface font-semibold">
                      {" Atmospheric Boundary Layer Dynamics (Schirmacher Oasis) "}
                    </h3>
                    <div className="p-2.5 rounded bg-surface-container-lowest font-body-sm text-[12px] leading-relaxed text-on-surface shadow-sm">
                      <p className="text-on-surface-variant italic mb-1 text-[11px] font-label-mono uppercase">
                        Verbatim Source Log:
                      </p>
                      <p>
                        {" \"...maximum gust velocities of "}
                        <mark className="bg-secondary-container text-on-secondary-container px-1 font-semibold">
                          46.2 m/s
                        </mark>
                        {" recorded at 03:40 UTC on 14 March 2024; barometric plummet: "}
                        <mark className="bg-secondary-container text-on-secondary-container px-1 font-semibold">
                          24.1 hPa over 6 hours
                        </mark>
                        {" resulting from katabatic descent off the polar cap...\" "}
                      </p>
                    </div>
                    <div className="overflow-x-auto mt-1">
                      <table className="w-full text-left font-label-mono text-[10px] text-on-surface-variant">
                        <thead>
                          <tr className="bg-surface-container">
                            <th className="py-1 px-1.5 font-semibold text-on-surface">
                              Sensor
                            </th>
                            <th className="py-1 px-1.5 font-semibold text-on-surface">
                              Peak Wind
                            </th>
                            <th className="py-1 px-1.5 font-semibold text-on-surface">
                              Ambient Temp
                            </th>
                            <th className="py-1 px-1.5 font-semibold text-on-surface">
                              Baro
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container">
                          <tr>
                            <td className="py-1 px-1.5 font-semibold text-primary">
                              Sonic-3D-A
                            </td>
                            <td className="py-1 px-1.5">
                              46.2 m/s
                            </td>
                            <td className="py-1 px-1.5 text-on-surface font-semibold">
                              -38.4°C
                            </td>
                            <td className="py-1 px-1.5">
                              978.2 hPa
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 px-1.5 font-semibold text-primary">
                              AWS-Maitri-2
                            </td>
                            <td className="py-1 px-1.5">
                              44.8 m/s
                            </td>
                            <td className="py-1 px-1.5 text-on-surface font-semibold">
                              -38.2°C
                            </td>
                            <td className="py-1 px-1.5">
                              978.4 hPa
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Link className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 mt-1 rounded bg-surface-container-lowest text-primary hover:bg-surface-container font-label-mono text-[11px] font-semibold transition-colors shadow-sm" to="/resources/ncpor-tr-2024-08">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        picture_as_pdf
                      </span>
                      {" "}
                      <span>
                        Inspect Full Technical Report (PDF)
                      </span>
                      {" "}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <span className="font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold">
                      Verification Dossier
                    </span>
                    <div className="p-2 rounded-lg bg-surface-bright flex items-center justify-between text-[12px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[16px]">
                          check_circle
                        </span>
                        <span className="text-on-surface">
                          Numerical Data (NetCDF Telemetry)
                        </span>
                      </div>
                      <span className="font-label-mono text-[10px] text-tertiary font-semibold uppercase">
                        Verified
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-bright flex items-center justify-between text-[12px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[16px]">
                          check_circle
                        </span>
                        <span className="text-on-surface">
                          Author Attribution: Dr. R. Verma
                        </span>
                      </div>
                      <span className="font-label-mono text-[10px] text-tertiary font-semibold uppercase">
                        Verified
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-bright flex items-center justify-between text-[12px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[16px]">
                          verified
                        </span>
                        <span className="text-on-surface">
                          MoES Data Policy (CC-BY-4.0)
                        </span>
                      </div>
                      <span className="font-label-mono text-[10px] text-tertiary font-semibold uppercase">
                        Approved
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-surface-bright flex items-center justify-between text-[12px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[16px]">
                          shield
                        </span>
                        <span className="text-on-surface">
                          DPDP 2023 Privacy Check
                        </span>
                      </div>
                      <span className="font-label-mono text-[10px] text-tertiary font-semibold uppercase">
                        Passed
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low text-[12px] leading-relaxed flex flex-col gap-1.5 mt-1">
                    <div className="flex items-center gap-1.5 text-primary font-semibold font-title-md text-[12px]">
                      <span className="material-symbols-outlined text-[15px]">
                        neurology
                      </span>
                      <span>
                        Grounding Log Explanation
                      </span>
                    </div>
                    <p className="text-on-surface-variant font-body-sm text-[12px]">
                      {" Sentence 1 directly synthesizes Section 3.2, Paragraph 2. Numerical values verified against Level-2 processed NetCDF telemetry from the Maitri Sonic Array. "}
                    </p>
                  </div>
                </div>
                {" "}
              </aside>
              <div className="hidden absolute top-0 right-0 w-80 bg-surface-container-lowest rounded-xl shadow-xl p-space-md z-30 flex-col gap-space-md" id="history-drawer">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      history
                    </span>
                    <h3 className="font-title-md text-body-sm text-on-surface">
                      Version History
                    </h3>
                  </div>
                  <button className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" id="close-history-btn" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      close
                    </span>
                    {" "}
                  </button>
                </div>
                <div className="flex flex-col gap-space-sm max-h-[580px] overflow-y-auto pr-1">
                  <div className="p-3 rounded-lg bg-surface-container-low shadow-sm flex flex-col gap-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-label-mono font-bold text-primary">
                        v3.2 (Current Active)
                      </span>
                      <span className="font-label-mono text-[10px] text-tertiary bg-surface-container-lowest px-1.5 py-0.5 rounded font-semibold">
                        14:45 IST
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface font-medium leading-snug">
                      {" AI Assistant + Dr. Sen synthesis with NetCDF telemetry cross-verification. "}
                    </p>
                    <div className="flex items-center justify-between font-label-mono text-[10px] text-on-surface-variant">
                      <span>
                        +140 words • 1 correction
                      </span>
                      <span className="text-primary font-semibold">
                        Current State
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-bright hover:bg-surface-container-low transition-colors flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-label-mono font-semibold text-on-surface">
                        v3.1 (Auto-Draft)
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">
                        13:20 IST
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant leading-snug">
                      {" Automated ingestion from NetCDF-4 Katabatic spike alert pipeline. "}
                    </p>
                    <div className="flex items-center justify-between font-label-mono text-[10px]">
                      <span className="text-on-surface-variant">
                        +620 words
                      </span>
                      <button className="px-2 py-0.5 rounded bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary font-semibold transition-colors" type="button">
                        {" Restore "}
                      </button>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-bright hover:bg-surface-container-low transition-colors flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-label-mono font-semibold text-on-surface">
                        v3.0 (Prompt Gen)
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">
                        10:15 IST
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant leading-snug">
                      {" Initial MoES polar science outreach template prompt generation. "}
                    </p>
                    <div className="flex items-center justify-between font-label-mono text-[10px]">
                      <span className="text-on-surface-variant">
                        +480 words
                      </span>
                      <button className="px-2 py-0.5 rounded bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary font-semibold transition-colors" type="button">
                        {" Restore "}
                      </button>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-bright hover:bg-surface-container-low transition-colors flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono text-label-mono font-semibold text-on-surface">
                        v2.0 (Outline)
                      </span>
                      <span className="font-label-mono text-[10px] text-on-surface-variant">
                        Yesterday
                      </span>
                    </div>
                    <p className="text-[12px] text-on-surface-variant leading-snug">
                      {" Draft outline created by Field Communications Officer. "}
                    </p>
                    <div className="flex items-center justify-between font-label-mono text-[10px]">
                      <span className="text-on-surface-variant">
                        Outline skeleton
                      </span>
                      <button className="px-2 py-0.5 rounded bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary font-semibold transition-colors" type="button">
                        {" Restore "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {" "}
        </main>
      </div>
    </>
  );
}
