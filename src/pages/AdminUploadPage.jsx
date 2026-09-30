import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_scientific_upload_centre_admin_upload/code.html
const BODY_CLASS = "bg-[#EEF2F6] text-polar-text font-inter antialiased min-h-screen";
const HTML_CLASS = "";
const PAGE_CSS = ".font-merriweather { font-family: 'Merriweather', serif; }\n    .font-inter { font-family: 'Inter', sans-serif; }\n    .custom-scrollbar::-webkit-scrollbar {\n      width: 6px;\n      height: 6px;\n    }\n    .custom-scrollbar::-webkit-scrollbar-track {\n      background: #F1F5F9;\n    }\n    .custom-scrollbar::-webkit-scrollbar-thumb {\n      background: #CBD5E1;\n      border-radius: 3px;\n    }\n    /* Tab pill active transitions */\n    .view-frame {\n      display: none;\n    }\n    .view-frame.active {\n      display: block;\n    }\n    /* Radar rings for globe slot */\n    .radar-grid {\n      background-image: \n        radial-gradient(circle at center, rgba(31, 122, 140, 0.12) 0%, transparent 65%),\n        repeating-radial-gradient(circle at center, rgba(31, 122, 140, 0.25) 0, rgba(31, 122, 140, 0.25) 1px, transparent 1px, transparent 40px);\n    }";
const PAGE_SCRIPT = "function toggleDuplicateModal(show) {\n    const modal = document.getElementById('duplicate-modal');\n    if (show) {\n      modal.classList.remove('hidden');\n    } else {\n      modal.classList.add('hidden');\n    }\n  }\n\n  function confirmResolution() {\n    toggleDuplicateModal(false);\n    alert('Ingest conflict resolved: Inbound file tagged as v2.0 revision. Ready for processing.');\n  }\n\n  function simulateSubmission() {\n    alert('Batch payload dispatched to POLARIS AI Processing & OCR pipeline (3 files, 1.96 GB). Redirecting to /admin/ai-processing...');\n  }\n\n  function setCoords(lat, lon, label) {\n    document.getElementById('coord-lat').value = lat;\n    document.getElementById('coord-lon').value = lon;\n  }\n\n  function toggleOfflineBanner(checkbox) {\n    const strip = document.getElementById('offline-indicator-strip');\n    if (checkbox.checked) {\n      strip.style.opacity = '0.5';\n    } else {\n      strip.style.opacity = '1';\n    }\n  }\n\n  // Drag and drop visual cues\n  const dropZone = document.getElementById('drop-zone');\n  if (dropZone) {\n    ['dragenter', 'dragover'].forEach(eventName => {\n      dropZone.addEventListener(eventName, (e) => {\n        e.preventDefault();\n        dropZone.classList.add('bg-secondary-container');\n      }, false);\n    });\n    ['dragleave', 'drop'].forEach(eventName => {\n      dropZone.addEventListener(eventName, (e) => {\n        e.preventDefault();\n        dropZone.classList.remove('bg-secondary-container');\n      }, false);\n    });\n  }\nfunction switchFrame(frameId, btnElement) {\n      // Hide all frames\n      document.querySelectorAll('.view-frame').forEach(el => el.classList.remove('active'));\n      \n      // Show selected frame\n      const target = document.getElementById(frameId);\n      if (target) {\n        target.classList.add('active');\n      }\n\n      // Update button active styling\n      document.querySelectorAll('.frame-btn').forEach(btn => {\n        btn.classList.remove('bg-white', 'text-teal-polaris', 'shadow-xs', 'font-semibold');\n        btn.classList.add('text-slate-600', 'font-medium');\n      });\n\n      if (btnElement) {\n        btnElement.classList.add('bg-white', 'text-teal-polaris', 'shadow-xs', 'font-semibold');\n        btnElement.classList.remove('text-slate-600', 'font-medium');\n      }\n    }";

export default function AdminUploadPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      {" "}
      {" "}
      <header className="bg-white border-b border-polar-border sticky top-0 z-50 px-8 py-3.5 shadow-xs">
        {" "}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-polaris/10 flex items-center justify-center text-teal-polaris font-bold">
                <svg className="w-5 h-5 text-teal-polaris" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold tracking-tight text-slate-900 text-sm">
                    POLARIS ADMIN CONSOLE
                  </span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-teal-polaris/10 text-teal-polaris border border-teal-polaris/20">
                    MoES Portal v4.2
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">
                  Route: /admin/expeditions • Roles: C, S, A (E read-only)
                </p>
              </div>
            </div>
            <div className="h-6 w-px bg-slate-200 mx-2" />
            <div className="flex items-center space-x-1.5 text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
              <span className="text-slate-400">
                Clearance:
              </span>
              <span className="font-semibold text-slate-700">
                Tier A (Supervisory)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1" />
            </div>
          </div>
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button className="frame-btn px-4 py-1.5 text-xs font-semibold rounded-md transition-all bg-white text-teal-polaris shadow-xs" onClick={(e)=>window.__pol(e,"switchFrame('frame-list', this)")}>
              {" Frame A: Master Expedition List "}
            </button>
            <button className="frame-btn px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-md transition-all" onClick={(e)=>window.__pol(e,"switchFrame('frame-modal', this)")}>
              {" Frame B: Quick Add Modal "}
            </button>
            <button className="frame-btn px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-md transition-all" onClick={(e)=>window.__pol(e,"switchFrame('frame-wizard', this)")}>
              {" Frame C: Step 2 Location Wizard "}
            </button>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="inline-flex items-center px-2 py-1 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
              {" "}
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              {" INSAT-3DR Synced "}
            </span>
            <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
              <div className="w-7 h-7 rounded-full bg-teal-polaris text-white flex items-center justify-center font-semibold text-xs shadow-xs">
                {" AS "}
              </div>
              <span className="font-medium text-slate-700">
                Dr. Ananya Sen
              </span>
            </div>
          </div>
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      <div className="max-w-[1440px] mx-auto flex min-h-[calc(100vh-65px)] bg-[#F6F9FC]">
        <aside className="w-[240px] bg-white border-r border-polar-border flex flex-col justify-between shrink-0 shadow-xs">
          {" "}
          <div>
            <div className="p-5 border-b border-slate-100 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-polaris/10 border border-teal-polaris/20 flex items-center justify-center text-teal-polaris font-bold">
                <svg className="w-5 h-5 text-teal-polaris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 tracking-tight">
                  NCPOR FIELD OPS
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  Polar Expedition Wing
                </div>
              </div>
            </div>
            <nav className="p-3 space-y-1">
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Dashboard
                </span>
                {" "}
              </Link>
              <Link className="flex items-center justify-between px-3 py-2 rounded-lg bg-teal-polaris/10 text-teal-polaris text-xs font-semibold border-l-4 border-teal-polaris transition-all" to="/admin/expeditions">
                {" "}
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-teal-polaris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeWidth="2" />
                  </svg>
                  <span>
                    Expedition Manager
                  </span>
                </div>
                {" "}
                <span className="text-[10px] bg-teal-polaris text-white px-1.5 py-0.5 rounded-full font-bold">
                  12
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/upload">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Upload & Datasets
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/ai-queue">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  AI Processing & OCR
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/studio">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Content Studio
                </span>
                {" "}
              </Link>
              <Link className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/review">
                {" "}
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>
                    Review Queue
                  </span>
                </div>
                {" "}
                <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                  5
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/publishing">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Publishing
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/rights">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Rights & Licenses
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/integrations">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Integrations
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/analytics">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Analytics
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/users">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Users & Access
                </span>
                {" "}
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/audit-logs">
                {" "}
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Audit Logs
                </span>
                {" "}
              </Link>
            </nav>
          </div>
          {" "}
          {" "}
          <div className="p-3 border-t border-slate-100 bg-slate-50/50">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] space-y-1">
              <div className="flex items-center justify-between text-slate-500 font-mono">
                <span>
                  Maitri Ground:
                </span>
                <span className="text-emerald-600 font-bold">
                  -18.4°C
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-500 font-mono">
                <span>
                  Himadri Base:
                </span>
                <span className="text-teal-600 font-bold">
                  -6.8°C
                </span>
              </div>
              <div className="pt-1 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between">
                <span>
                  NKN Secure Uplink
                </span>
                <span className="text-emerald-600">
                  ● 100% OK
                </span>
              </div>
            </div>
          </div>
          {" "}
        </aside>
        <main className="flex-1 flex flex-col min-w-0">
          <div className="flex flex-col w-full">
            <section className="bg-surface-container-lowest px-space-lg py-space-sm shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-space-md min-w-0">
                <div className="flex items-center space-x-space-xs text-secondary font-label-mono text-label-mono uppercase">
                  <span>
                    Field Operations Command
                  </span>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    Admin / Upload
                  </span>
                </div>
                <div className="h-4 w-px bg-surface-container" />
                <div className="relative w-80">
                  <span className="material-symbols-outlined absolute left-2.5 top-2 text-outline text-body-sm">
                    search
                  </span>
                  <input className="w-full pl-8 pr-12 py-1.5 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-lg focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all placeholder:text-outline" placeholder="Search metadata, SHA hashes, or PIs (Press ⌘K)..." type="text" />
                  <kbd className="absolute right-2 top-2 px-1.5 py-0.5 text-[10px] font-label-mono bg-surface-container text-secondary rounded shadow-xs">
                    ⌘K
                  </kbd>
                </div>
              </div>
              <div className="flex items-center space-x-space-md shrink-0">
                <div className="flex items-center space-x-space-xs px-2.5 py-1 rounded-full bg-surface-container-low text-secondary font-label-mono text-label-mono">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span>
                    NKN Node 04: Synced
                  </span>
                  <span className="text-outline-variant">
                    •
                  </span>
                  <span className="text-on-surface font-semibold">
                    99.8% Nominal
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="relative p-2 rounded-lg text-secondary hover:bg-surface-container transition-colors" title="Notifications" onClick={(e)=>window.__pol(e,"toggleDuplicateModal(true)")}>
                    {" "}
                    <span className="material-symbols-outlined text-title-md">
                      notifications
                    </span>
                    {" "}
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
                    {" "}
                  </button>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono">
                    <span className="material-symbols-outlined text-body-sm text-primary">
                      verified_user
                    </span>
                    <span className="font-bold tracking-tight">
                      ADMIN (TIER A)
                    </span>
                    <span className="text-on-secondary-container opacity-60">
                      NIC L4
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="px-space-lg pt-space-md pb-space-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                <div className="space-y-space-xs">
                  <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight font-serif">
                    Scientific Data Upload & Ingestion Centre
                  </h1>
                  <p className="font-body-sm text-body-sm text-secondary max-w-3xl">
                    {" Batch ingest raw NetCDF-4, GeoTIFF, HDF5, high-resolution glaciological imagery, and sonic anemometry into the NCPOR polar repository node. "}
                  </p>
                </div>
                <div className="flex items-center space-x-space-sm shrink-0">
                  <label className="flex items-center space-x-2 cursor-pointer bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                    {" "}
                    <span className="font-label-mono text-label-mono text-secondary">
                      Offline Cache Engine
                    </span>
                    {" "}
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" id="offline-switch" type="checkbox" onChange={(e)=>window.__pol(e,"toggleOfflineBanner(this)")} />
                      <div className="w-8 h-4 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary" />
                    </div>
                    {" "}
                  </label>
                  <a className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-body-sm text-body-sm hover:bg-surface-container-high transition-colors" href="#guidelines">
                    {" "}
                    <span className="material-symbols-outlined text-body-sm">
                      description
                    </span>
                    {" "}
                    <span>
                      Batch Guidelines PDF
                    </span>
                    {" "}
                  </a>
                  <button className="flex items-center space-x-1.5 px-4 py-1.5 bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold rounded-lg shadow-sm hover:bg-primary transition-all" onClick={(e)=>window.__pol(e,"document.getElementById('file-upload-input').click()")}>
                    {" "}
                    <span className="material-symbols-outlined text-body-sm">
                      add
                    </span>
                    {" "}
                    <span>
                      + New Upload Batch
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </section>
            <section className="px-space-lg pb-space-sm" id="offline-indicator-strip">
              <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary-container flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-headline-sm">
                      satellite_alt
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="font-title-md text-title-md text-on-surface">
                        Offline Sync Engine: Active
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-label-mono font-label-mono bg-secondary-fixed text-on-secondary-fixed">
                        2 items in local spillway
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {" Encrypted SQLite buffer holding 84.2 MB. Datasets will spool and stream automatically once INSAT-3DR Ku-band reconnects. "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-secondary font-label-mono text-label-mono self-end lg:self-center shrink-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-tertiary" />
                    <span>
                      Buffer: 84.2 MB Encrypted
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="material-symbols-outlined text-body-sm text-outline">
                      history
                    </span>
                    <span>
                      Uplink Heartbeat: 6m ago
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-medium">
                      Retry Telemetry
                    </button>
                    <button className="px-2.5 py-1 rounded bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors font-medium">
                      Force Sync Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="px-space-lg pb-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              <div className="lg:col-span-7 flex flex-col space-y-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col relative overflow-hidden">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-primary text-title-md">
                        cloud_upload
                      </span>
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Data Ingestion Terminal
                      </h2>
                    </div>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Max Ingest Envelope: 2.5 GB / batch
                    </span>
                  </div>
                  <div className="relative my-space-xs p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col items-center justify-center text-center cursor-pointer group" id="drop-zone" onClick={(e)=>window.__pol(e,"document.getElementById('file-upload-input').click()")}>
                    <input className="hidden" id="file-upload-input" multiple="" type="file" />
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-primary mb-3 shadow-xs group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        folder_zip
                      </span>
                    </div>
                    <p className="font-title-md text-title-md text-on-surface mb-1">
                      {" Drag & drop NetCDF (.nc), CSV, GeoTIFF, HDF5, or raw field telemetry "}
                    </p>
                    <p className="font-body-sm text-body-sm text-secondary mb-3">
                      {" or "}
                      <span className="text-primary font-semibold underline underline-offset-2">
                        Browse Files
                      </span>
                      {" from Local Station / NKN Workstation "}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-xl">
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono">
                        NetCDF-4 (.nc)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono">
                        GeoTIFF (.tif)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono">
                        HDF5 (.h5)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono">
                        CSV / TSV
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono">
                        SONIC AWS (.dat)
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-mono text-label-mono">
                        RAW Imagery / Drone
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-space-xs text-secondary overflow-x-auto">
                    <span className="font-label-mono text-label-mono uppercase shrink-0">
                      Instrument Presets:
                    </span>
                    <button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors shrink-0">
                      Maitri AWS Raw
                    </button>
                    <button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors shrink-0">
                      IndARC Mooring CTD
                    </button>
                    <button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors shrink-0">
                      Ny-Ålesund Aerosols
                    </button>
                    <button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors shrink-0">
                      Field Drone Orthos
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-primary text-title-md">
                        stream
                      </span>
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Live Ingest Queue & Batch Stream
                      </h2>
                    </div>
                    <span className="font-label-mono text-label-mono text-tertiary font-semibold flex items-center space-x-1">
                      {" "}
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
                      {" "}
                      <span>
                        Uplink Active: 42.1 MB/s
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="p-3 bg-surface-container-low rounded-xl flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className="material-symbols-outlined text-primary text-headline-sm">
                            dataset
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="font-title-md text-body-sm text-on-surface font-semibold truncate">
                                IndARC_Kongsfjorden_CTD_2024_Q2.nc
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-primary-fixed text-on-primary-fixed font-bold">
                                UPLOADING 68%
                              </span>
                            </div>
                            <div className="font-label-mono text-label-mono text-secondary flex items-center space-x-2">
                              <span>
                                1.42 GB
                              </span>
                              <span>
                                •
                              </span>
                              <span className="text-primary font-medium">
                                42.4 MB/s
                              </span>
                              <span>
                                •
                              </span>
                              <span>
                                18s remaining
                              </span>
                              <span>
                                •
                              </span>
                              <span className="text-outline">
                                Target: Arctic Ocean Node
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 shrink-0">
                          <button className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container rounded-md" title="Pause Ingest">
                            {" "}
                            <span className="material-symbols-outlined text-body-sm">
                              pause
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 text-secondary hover:text-error hover:bg-surface-container rounded-md" title="Cancel Ingest">
                            {" "}
                            <span className="material-symbols-outlined text-body-sm">
                              close
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                        <div className="bg-primary-container h-1.5 rounded-full transition-all duration-300" style={{"width": "68%"}} />
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className="material-symbols-outlined text-secondary text-headline-sm">
                            table_chart
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="font-title-md text-body-sm text-on-surface font-semibold truncate">
                                Maitri_Katabatic_Sonic_Anemometer_Batch08.csv
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-secondary-fixed text-on-secondary-fixed font-bold">
                                PAUSED 45%
                              </span>
                            </div>
                            <div className="font-label-mono text-label-mono text-secondary flex items-center space-x-2">
                              <span>
                                380 MB
                              </span>
                              <span>
                                •
                              </span>
                              <span className="text-outline">
                                Held by QoS Rule: Bandwidth reserved for IndARC
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 shrink-0">
                          <button className="p-1.5 text-primary hover:text-on-primary-fixed hover:bg-surface-container rounded-md" title="Resume Ingest">
                            {" "}
                            <span className="material-symbols-outlined text-body-sm">
                              play_arrow
                            </span>
                            {" "}
                          </button>
                          <button className="p-1.5 text-secondary hover:text-error hover:bg-surface-container rounded-md" title="Remove">
                            {" "}
                            <span className="material-symbols-outlined text-body-sm">
                              delete
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                        <div className="bg-outline h-1.5 rounded-full" style={{"width": "45%"}} />
                      </div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3 min-w-0">
                        <span className="material-symbols-outlined text-outline text-headline-sm">
                          satellite
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="font-title-md text-body-sm text-on-surface font-semibold truncate">
                              Schirmacher_Glacier_Melt_Drone_Ortho.tif
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-surface-container-highest text-secondary font-bold">
                              QUEUED
                            </span>
                          </div>
                          <div className="font-label-mono text-label-mono text-secondary">
                            920 MB • Waiting for bandwidth scheduler allocation
                          </div>
                        </div>
                      </div>
                      <button className="px-2.5 py-1 text-label-mono font-label-mono rounded bg-surface-container text-primary hover:bg-secondary-container transition-colors shrink-0">
                        {" Prioritize "}
                      </button>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3 min-w-0">
                        <span className="material-symbols-outlined text-tertiary text-headline-sm">
                          check_circle
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center space-x-2">
                            <span className="font-title-md text-body-sm text-on-surface font-semibold truncate">
                              NyAlesund_Aerosol_Optical_Depth_Jul2024.nc
                            </span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-label-mono bg-tertiary-container text-on-tertiary font-bold">
                              INGESTED ✓
                            </span>
                          </div>
                          <div className="font-label-mono text-label-mono text-secondary flex items-center space-x-2 truncate">
                            <span>
                              184 MB
                            </span>
                            <span>
                              •
                            </span>
                            <span className="text-tertiary font-medium">
                              SHA-256 Verified: 4a2f…e98c
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              Stored on GlusterFS Tier 1
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 shrink-0">
                        <button className="p-1.5 text-secondary hover:text-primary rounded-md" title={"Inspect Hash & Log"}>
                          {" "}
                          <span className="material-symbols-outlined text-body-sm">
                            receipt_long
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-surface-container">
                    <div className="font-label-mono text-label-mono text-secondary">
                      <span className="text-on-surface font-bold">
                        1.96 GB
                      </span>
                      {" of 2.88 GB transferred (1 Active, 1 Paused, 1 Queued, 1 Ingested) "}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-label-mono font-label-mono text-secondary hover:text-on-surface px-2 py-1 rounded bg-surface-container">
                        Pause All
                      </button>
                      <button className="text-label-mono font-label-mono text-primary hover:text-primary-container px-2 py-1 rounded bg-surface-container">
                        Resume All
                      </button>
                      <button className="text-label-mono font-label-mono text-outline hover:text-error px-2 py-1 rounded bg-surface-container">
                        Clear Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col space-y-space-md">
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-primary text-title-md">
                        history_edu
                      </span>
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Dataset Provenance & Classification
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-mono text-label-mono">
                      Form 100% Valid
                    </span>
                  </div>
                  <div className="space-y-3 font-body-sm text-body-sm">
                    <div>
                      <label className="block font-label-mono text-label-mono text-secondary uppercase mb-1">
                        Associated Expedition Campaign
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-low text-on-surface rounded-lg px-3 py-2 text-body-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary" defaultValue="43rd Indian Antarctic Expedition (43-IAE / 2023-24)">
                          <option>
                            43rd Indian Antarctic Expedition (43-IAE / 2023-24)
                          </option>
                          <option>
                            42nd Indian Antarctic Expedition (42-IAE / 2022-23)
                          </option>
                          <option>
                            Indian Arctic Expedition - Ny-Ålesund Summer Phase 2024
                          </option>
                          <option>
                            Southern Ocean Expedition 2024 (SOE-XIII)
                          </option>
                          <option>
                            Himalayan Cryosphere Chandra Basin Field Mission
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-secondary pointer-events-none text-body-sm">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-label-mono text-label-mono text-secondary uppercase mb-1">
                          Collection Start
                        </label>
                        <input className="w-full bg-surface-container-low text-on-surface rounded-lg px-3 py-1.5 text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="date" defaultValue="2024-01-15" />
                      </div>
                      <div>
                        <label className="block font-label-mono text-label-mono text-secondary uppercase mb-1">
                          Collection End
                        </label>
                        <input className="w-full bg-surface-container-low text-on-surface rounded-lg px-3 py-1.5 text-body-sm focus:outline-none focus:ring-1 focus:ring-primary" type="date" defaultValue="2024-03-30" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-mono text-label-mono text-secondary uppercase mb-1">
                        Data Governance & License
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-low text-on-surface rounded-lg px-3 py-2 text-body-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary" defaultValue="CC-BY-4.0 (MoES Open Polar Data Policy 2022)">
                          <option>
                            CC-BY-4.0 (MoES Open Polar Data Policy 2022)
                          </option>
                          <option>
                            CC-BY-NC-SA 4.0 (Non-Commercial Research Shared)
                          </option>
                          <option>
                            Government of India Open Data License (GODL-India)
                          </option>
                          <option>
                            SCAR Antarctic Treaty Restricted License
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-secondary pointer-events-none text-body-sm">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-mono text-label-mono text-secondary uppercase mb-1.5">
                        Access Level Clearance
                      </label>
                      <div className="grid grid-cols-3 gap-1.5 text-center">
                        <label className="cursor-pointer">
                          {" "}
                          <input defaultChecked="" className="peer sr-only" name="access-tier" type="radio" />
                          {" "}
                          <span className="block py-1.5 px-2 rounded-lg bg-surface-container-low text-secondary font-label-mono text-label-mono peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
                            {" Public Open "}
                          </span>
                          {" "}
                        </label>
                        <label className="cursor-pointer">
                          {" "}
                          <input className="peer sr-only" name="access-tier" type="radio" />
                          {" "}
                          <span className="block py-1.5 px-2 rounded-lg bg-surface-container-low text-secondary font-label-mono text-label-mono peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
                            {" Moratorium "}
                          </span>
                          {" "}
                        </label>
                        <label className="cursor-pointer">
                          {" "}
                          <input className="peer sr-only" name="access-tier" type="radio" />
                          {" "}
                          <span className="block py-1.5 px-2 rounded-lg bg-surface-container-low text-secondary font-label-mono text-label-mono peer-checked:bg-primary-container peer-checked:text-on-primary transition-all">
                            {" Embargo 12mo "}
                          </span>
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-mono text-label-mono text-secondary uppercase mb-1">
                        Scientific Vocabulary & Keywords
                      </label>
                      <div className="p-2 bg-surface-container-low rounded-lg flex flex-wrap gap-1.5 items-center">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono flex items-center space-x-1">
                          {" "}
                          <span>
                            #Cryosphere
                          </span>
                          {" "}
                          <button className="hover:text-error">
                            ×
                          </button>
                          {" "}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono flex items-center space-x-1">
                          {" "}
                          <span>
                            #KatabaticWinds
                          </span>
                          {" "}
                          <button className="hover:text-error">
                            ×
                          </button>
                          {" "}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono flex items-center space-x-1">
                          {" "}
                          <span>
                            #Kongsfjorden
                          </span>
                          {" "}
                          <button className="hover:text-error">
                            ×
                          </button>
                          {" "}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono flex items-center space-x-1">
                          {" "}
                          <span>
                            #MooringCTD
                          </span>
                          {" "}
                          <button className="hover:text-error">
                            ×
                          </button>
                          {" "}
                        </span>
                        <button className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-mono text-label-mono hover:bg-surface-container-high transition-colors">
                          {" + Add Tag "}
                        </button>
                      </div>
                    </div>
                    <div className="pt-1 flex items-center justify-between text-secondary font-label-mono text-label-mono bg-surface-container-low p-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <span className="material-symbols-outlined text-body-sm text-primary">
                          person
                        </span>
                        <span>
                          {"Lead Submitter: "}
                          <strong className="text-on-surface">
                            Dr. Sneha Verma (Oceanographer, NCPOR)
                          </strong>
                        </span>
                      </div>
                      <span className="text-tertiary">
                        Verified NKN
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="material-symbols-outlined text-primary text-title-md">
                        pin_drop
                      </span>
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Geospatial Deployment Point
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-mono text-label-mono">
                      WGS-84 Datum
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-space-sm items-center">
                    <div className="w-[260px] h-[180px] rounded-xl bg-surface-container-highest relative overflow-hidden flex items-center justify-center shrink-0 radar-grid" id="polaris-globe-mini-upload">
                      <svg className="absolute inset-0 w-full h-full text-primary opacity-30" fill="none" viewBox="0 0 260 180">
                        <circle cx="130" cy="90" r="70" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1" />
                        <circle cx="130" cy="90" r="45" stroke="currentColor" strokeWidth="0.75" />
                        <circle cx="130" cy="90" r="20" stroke="currentColor" strokeWidth="0.75" />
                        <line stroke="currentColor" strokeWidth="0.5" x1="130" x2="130" y1="10" y2="170" />
                        <line stroke="currentColor" strokeWidth="0.5" x1="30" x2="230" y1="90" y2="90" />
                        <path d="M100 65 Q130 50 160 65 Q175 90 160 115 Q130 130 100 115 Q85 90 100 65Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
                      </svg>
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md animate-bounce">
                          <span className="material-symbols-outlined text-[16px]">
                            location_on
                          </span>
                        </div>
                        <span className="mt-1 px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-[10px] font-label-mono text-on-surface shadow-xs font-bold">
                          {" Maitri Station "}
                        </span>
                      </div>
                      <div className="absolute bottom-1.5 left-2 right-2 flex justify-between text-[9px] font-label-mono text-secondary bg-surface-container-lowest/80 px-1.5 py-0.5 rounded backdrop-blur-xs">
                        <span>
                          LAT: -70°45'57" S
                        </span>
                        <span>
                          LON: 11°44'09" E
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 w-full space-y-2">
                      <div>
                        <label className="block font-label-mono text-label-mono text-secondary uppercase mb-0.5">
                          Deployment Latitude
                        </label>
                        <input className="w-full bg-surface-container-low text-on-surface rounded-lg px-2.5 py-1.5 font-label-mono text-label-mono focus:outline-none focus:ring-1 focus:ring-primary" id="coord-lat" type="text" defaultValue={"-70°45'57\" S"} />
                      </div>
                      <div>
                        <label className="block font-label-mono text-label-mono text-secondary uppercase mb-0.5">
                          Deployment Longitude
                        </label>
                        <input className="w-full bg-surface-container-low text-on-surface rounded-lg px-2.5 py-1.5 font-label-mono text-label-mono focus:outline-none focus:ring-1 focus:ring-primary" id="coord-lon" type="text" defaultValue={"11°44'09\" E"} />
                      </div>
                      <div className="text-[11px] font-label-mono text-secondary flex items-center justify-between">
                        <span>
                          Altitude: 117m ASL
                        </span>
                        <span className="text-tertiary">
                          Queen Maud Land
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors" onClick={(e)=>window.__pol(e,"setCoords('-70°45\\'57\" S', '11°44\\'09\" E', 'Maitri')")}>
                      📍 Pin to Maitri
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors" onClick={(e)=>window.__pol(e,"setCoords('-69°24\\'29\" S', '76°11\\'14\" E', 'Bharati')")}>
                      📍 Pin to Bharati
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors" onClick={(e)=>window.__pol(e,"setCoords('78°55\\'28\" N', '11°55\\'20\" E', 'Himadri')")}>
                      📍 Pin to Himadri
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-mono text-label-mono hover:bg-secondary-container transition-colors" onClick={(e)=>window.__pol(e,"setCoords('-55°12\\'00\" S', '40°18\\'00\" E', 'RV Bharati')")}>
                      📍 RV Bharati Track
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="sticky bottom-0 z-40 bg-surface-container-lowest border-t border-surface-container px-space-lg py-3 shadow-lg">
              <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-3 text-secondary font-label-mono text-label-mono">
                  <div className="flex items-center space-x-1.5 text-tertiary font-semibold">
                    <span className="material-symbols-outlined text-body-sm">
                      check_circle
                    </span>
                    <span>
                      Metadata completeness: 100% Verified
                    </span>
                  </div>
                  <span>
                    •
                  </span>
                  <span>
                    3 Datasets Ready for Ingestion
                  </span>
                  <span>
                    •
                  </span>
                  <button className="text-primary hover:underline flex items-center space-x-1" onClick={(e)=>window.__pol(e,"toggleDuplicateModal(true)")}>
                    {" "}
                    <span className="material-symbols-outlined text-body-sm">
                      policy
                    </span>
                    {" "}
                    <span>
                      Duplicate Pre-Check (1 Warning)
                    </span>
                    {" "}
                  </button>
                </div>
                <div className="flex items-center space-x-space-sm shrink-0">
                  <button className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm font-medium hover:bg-surface-container-high transition-colors">
                    {" Save Ingestion Draft "}
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-surface-container text-primary font-body-sm text-body-sm font-semibold hover:bg-secondary-container transition-colors" onClick={(e)=>window.__pol(e,"toggleDuplicateModal(true)")}>
                    {" Check Duplicates "}
                  </button>
                  <button className="px-5 py-2 rounded-lg bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary shadow-sm flex items-center space-x-2 transition-all" onClick={(e)=>window.__pol(e,"simulateSubmission()")}>
                    {" "}
                    <span className="material-symbols-outlined text-body-sm">
                      auto_awesome
                    </span>
                    {" "}
                    <span>
                      Send to AI Processing & Ingest Pipeline →
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </section>
            <div className="fixed inset-0 z-50 bg-on-background/40 backdrop-blur-xs flex items-center justify-center p-4 hidden" id="duplicate-modal">
              <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full p-space-lg shadow-xl border border-surface-container flex flex-col space-y-space-sm animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-title-md">
                        warning
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-serif">
                        Duplicate Ingestion Pre-Check Detected
                      </h3>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Pre-ingestion SHA-256 fingerprint matching policy engine warning.
                      </p>
                    </div>
                  </div>
                  <button className="p-1 rounded-md text-secondary hover:bg-surface-container" onClick={(e)=>window.__pol(e,"toggleDuplicateModal(false)")}>
                    {" "}
                    <span className="material-symbols-outlined">
                      close
                    </span>
                    {" "}
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-secondary-container/40 text-on-secondary-container font-body-sm text-body-sm">
                  {" File "}
                  <code className="font-label-mono font-bold text-primary">
                    IndARC_Kongsfjorden_CTD_2024_Q2.nc
                  </code>
                  {" matches "}
                  <strong>
                    98.4%
                  </strong>
                  {" temporal and checksum similarity with repository record "}
                  <span className="font-label-mono font-semibold">
                    NCPOR-DS-2023-ARC-014
                  </span>
                  {". "}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-surface-container-low space-y-1.5">
                    <div className="flex items-center justify-between text-secondary font-label-mono text-[10px]">
                      <span className="uppercase">
                        Existing Repository Record
                      </span>
                      <span className="text-outline">
                        v1.2 Active
                      </span>
                    </div>
                    <div className="font-title-md text-body-sm text-on-surface font-semibold truncate">
                      IndARC_Kongsfjorden_CTD_v1.nc
                    </div>
                    <div className="text-secondary font-label-mono text-[11px] space-y-0.5">
                      <div>
                        Uploaded: 2023-11-12
                      </div>
                      <div>
                        Author: Dr. M. Ramanathan
                      </div>
                      <div>
                        Size: 1.38 GB (12,400 timesteps)
                      </div>
                      <div>
                        Calibration: Seabird 911plus (Factory 2021)
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary-container/30 space-y-1.5">
                    <div className="flex items-center justify-between text-primary font-label-mono text-[10px]">
                      <span className="uppercase font-bold">
                        Incoming Ingest Candidate
                      </span>
                      <span className="text-tertiary font-bold">
                        Newer Data
                      </span>
                    </div>
                    <div className="font-title-md text-body-sm text-on-surface font-semibold truncate">
                      IndARC_Kongsfjorden_CTD_2024_Q2.nc
                    </div>
                    <div className="text-secondary font-label-mono text-[11px] space-y-0.5">
                      <div>
                        Uploaded: Today (2024-04-18)
                      </div>
                      <div>
                        Author: Dr. Sneha Verma
                      </div>
                      <div>
                        Size: 1.42 GB (12,980 timesteps)
                      </div>
                      <div>
                        Calibration: Post-cruise drift corrected 2024
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-1 font-body-sm text-body-sm">
                  <label className="block font-label-mono text-label-mono text-secondary uppercase">
                    Ingestion Conflict Resolution Strategy
                  </label>
                  <label className="flex items-start space-x-3 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                    {" "}
                    <input defaultChecked="" className="mt-1 text-primary focus:ring-primary" name="duplicate-resolution" type="radio" />
                    {" "}
                    <div>
                      <div className="font-semibold text-on-surface text-body-sm">
                        Create New Dataset Revision v2.0 (Recommended)
                      </div>
                      <div className="text-secondary text-[12px]">
                        Preserves historical release v1.2 while linking newer sensor calibrations under the same DOI lineage.
                      </div>
                    </div>
                    {" "}
                  </label>
                  <label className="flex items-start space-x-3 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                    {" "}
                    <input className="mt-1 text-primary focus:ring-primary" name="duplicate-resolution" type="radio" />
                    {" "}
                    <div>
                      <div className="font-semibold text-on-surface text-body-sm">
                        Overwrite Existing Dataset (Requires Lead PI Approval)
                      </div>
                      <div className="text-secondary text-[12px]">
                        Replaces data payload directly. Existing user citations will refer to the overwritten hash.
                      </div>
                    </div>
                    {" "}
                  </label>
                  <label className="flex items-start space-x-3 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                    {" "}
                    <input className="mt-1 text-primary focus:ring-primary" name="duplicate-resolution" type="radio" />
                    {" "}
                    <div>
                      <div className="font-semibold text-on-surface text-body-sm">
                        Discard Inbound Candidate
                      </div>
                      <div className="text-secondary text-[12px]">
                        Cancel ingestion for this item and retain the repository in its current status.
                      </div>
                    </div>
                    {" "}
                  </label>
                </div>
                <div className="pt-space-xs flex items-center justify-end space-x-space-sm border-t border-surface-container">
                  <button className="px-4 py-2 rounded-lg bg-surface-container text-secondary font-body-sm text-body-sm hover:text-on-surface hover:bg-surface-container-high transition-colors" onClick={(e)=>window.__pol(e,"toggleDuplicateModal(false)")}>
                    {" Cancel Ingestion "}
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary transition-colors" onClick={(e)=>window.__pol(e,"confirmResolution()")}>
                    {" Confirm & Proceed with Revision v2.0 "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {" "}
          {" "}
        </main>
      </div>
      {" "}
      {" "}
      {" "}
    </>
  );
}
