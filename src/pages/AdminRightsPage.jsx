import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_admin_rights_integrations_analytics_showcase_admin_rights_admin/code.html
const BODY_CLASS = "bg-[#eef2f6] text-[#071c36] font-sans antialiased text-[14px]";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base {\n      html, body { margin: 0; padding: 0; }\n      body { overscroll-behavior: none; }\n    }\n    ::-webkit-scrollbar { width: 6px; height: 6px; }\n    ::-webkit-scrollbar-track { background: #f0f3ff; }\n    ::-webkit-scrollbar-thumb { background: #bec8cb; border-radius: 9999px; }\n    ::-webkit-scrollbar-thumb:hover { background: #6f797c; }";
const PAGE_SCRIPT = "function switchFrameView(mode) {\n      const f1 = document.getElementById('frame-1');\n      const f2 = document.getElementById('frame-2');\n      const wrapper = document.getElementById('frames-wrapper');\n      \n      const tabF1 = document.getElementById('tab-f1');\n      const tabF2 = document.getElementById('tab-f2');\n      const tabDual = document.getElementById('tab-dual');\n\n      // Reset tabs style\n      [tabF1, tabF2, tabDual].forEach(t => {\n        t.className = \"px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#dee8ff] hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5\";\n      });\n\n      const activeTabClass = \"px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 bg-[#1F7A8C] text-white shadow-sm ring-2 ring-[#1F7A8C]\";\n\n      if (mode === 'f1') {\n        f1.classList.remove('hidden');\n        f2.classList.add('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        tabF1.className = activeTabClass;\n      } else if (mode === 'f2') {\n        f1.classList.add('hidden');\n        f2.classList.remove('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        tabF2.className = activeTabClass;\n      } else if (mode === 'dual') {\n        f1.classList.remove('hidden');\n        f2.classList.remove('hidden');\n        wrapper.className = \"w-full max-w-[1700px] flex flex-col gap-10 transition-all duration-300\";\n        tabDual.className = activeTabClass;\n      }\n    }";

export default function AdminRightsPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      {" "}
      {" "}
      {" "}
      <main className="w-full min-h-screen p-4 md:p-6 overflow-x-auto flex justify-center">
        {" "}
        <div className="w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300" id="frames-wrapper">
          <div className="w-full bg-[#F6F9FC] rounded-2xl shadow-xl border border-[#E3ECF3] overflow-hidden flex flex-col min-h-screen">
            <div className="bg-white border-b border-[#E3ECF3] px-5 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#059669]/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <span className="font-mono text-xs font-semibold text-[#071c36]">
                    POLARIS ADMIN CONSOLE
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F6F9FC] text-[#1F7A8C] border border-[#E3ECF3]">
                    MoES Polar Science Platform
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#1F7A8C]/10 text-[#1F7A8C] border border-[#1F7A8C]/20">
                  Roles: Editor, Admin
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f59e0b]/15 text-[#b45309] font-mono text-[11px] font-bold border border-[#f59e0b]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
                  LIVE Telemetry
                </span>
              </div>
            </div>
            <div className="flex w-full flex-1">
              <aside className="w-[240px] shrink-0 bg-white border-r border-[#E3ECF3] flex flex-col justify-between p-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 px-1 py-1">
                    <div className="w-8 h-8 rounded-lg bg-[#1F7A8C] text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
                      P
                    </div>
                    <div>
                      <div className="font-serif font-bold text-base tracking-tight text-[#071c36] leading-none">
                        POLARIS
                      </div>
                      <div className="font-mono text-[10px] text-[#6f797c] tracking-wider mt-1">
                        MOES PORTAL V4.2
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F6F9FC] border border-[#E3ECF3] p-2.5 rounded-xl">
                    <div className="font-semibold text-xs text-[#071c36]">
                      Dr. Ananya Sen
                    </div>
                    <div className="font-mono text-[10px] text-[#6f797c] mt-0.5">
                      Editorial Staff / Roles: C, S, E, A
                    </div>
                  </div>
                  <nav className="space-y-1">
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin">
                      <span className="material-symbols-outlined text-[18px]">
                        dashboard
                      </span>
                      <span className="">
                        Dashboard
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/expeditions">
                      <span className="material-symbols-outlined text-[18px]">
                        explore
                      </span>
                      <span className="">
                        Expedition Manager
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/upload">
                      <span className="material-symbols-outlined text-[18px]">
                        upload_file
                      </span>
                      <span className="">
                        Upload & Datasets
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/ai-queue">
                      <span className="material-symbols-outlined text-[18px]">
                        neurology
                      </span>
                      <span className="">
                        AI Processing & OCR
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/studio">
                      <span className="material-symbols-outlined text-[18px]">
                        edit_document
                      </span>
                      <span className="">
                        Content Studio
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/review">
                      <span className="material-symbols-outlined text-[18px]">
                        fact_check
                      </span>
                      <span className="">
                        Review Queue
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/publishing">
                      <span className="material-symbols-outlined text-[18px]">
                        rocket_launch
                      </span>
                      <span className="">
                        Publishing & Releases
                      </span>
                    </Link>
                    <button id="nav-btn-rights" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#1F7A8C] text-white shadow-sm ring-2 ring-[#1F7A8C] text-left" onClick={(e)=>window.__pol(e,"showAdminTab('rights')")}>
                      <span className="material-symbols-outlined text-[18px]">
                        policy
                      </span>
                      <span className="">
                        Rights & Licenses
                      </span>
                    </button>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/integrations">
                      <span className="material-symbols-outlined text-[18px]">
                        hub
                      </span>
                      <span className="">
                        Integrations (NPDC)
                      </span>
                    </Link>
                    <button id="nav-btn-analytics" className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C] text-left" onClick={(e)=>window.__pol(e,"showAdminTab('analytics')")}>
                      <span className="material-symbols-outlined text-[18px]">
                        insights
                      </span>
                      <span className="">
                        Analytics & Telemetry
                      </span>
                    </button>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/users">
                      <span className="material-symbols-outlined text-[18px]">
                        group
                      </span>
                      <span className="">
                        Users & Access
                      </span>
                    </Link>
                    <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#3f484b] hover:bg-[#F6F9FC] hover:text-[#071c36] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]" to="/admin/audit-logs">
                      <span className="material-symbols-outlined text-[18px]">
                        receipt_long
                      </span>
                      <span className="">
                        Audit Logs
                      </span>
                    </Link>
                  </nav>
                </div>
                <div className="space-y-3 pt-4 border-t border-[#E3ECF3]">
                  <div className="bg-[#F6F9FC] p-2 rounded-lg font-mono text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-[#071c36]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                        NKN Node 04
                      </span>
                      <span className="text-[#059669] font-bold">
                        Synced
                      </span>
                    </div>
                    <div className="text-[#6f797c] text-[10px]">
                      Encrypted TLS 1.3 · 99.8% Polar Link
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <a className="flex items-center gap-1 text-xs text-[#6f797c] hover:text-[#1F7A8C] transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C] rounded" href="#" onClick={(e)=>e.preventDefault()}>
                      <span className="material-symbols-outlined text-[16px]">
                        menu_book
                      </span>
                      <span className="">
                        Docs
                      </span>
                    </a>
                    <a className="flex items-center gap-1 text-xs text-[#D64545] hover:opacity-80 transition-opacity ring-2 ring-transparent hover:ring-[#1F7A8C] rounded" href="#" onClick={(e)=>{e.preventDefault();window.__polaris.logout()}}>
                      <span className="material-symbols-outlined text-[16px]">
                        logout
                      </span>
                      <span className="">
                        Sign out
                      </span>
                    </a>
                  </div>
                </div>
              </aside>
              <div className="flex-1 flex flex-col min-w-0 bg-[#F6F9FC]">
                <header className="h-16 bg-white border-b border-[#E3ECF3] px-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6 flex-1 max-w-2xl">
                    <div className="relative w-72">
                      <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#6f797c] text-[18px]">
                        search
                      </span>
                      <input className="w-full bg-[#F6F9FC] border border-[#E3ECF3] rounded-lg pl-9 pr-12 py-1.5 text-xs text-[#071c36] placeholder-[#6f797c] focus:outline-none ring-2 ring-transparent focus:ring-[#1F7A8C] transition-all" placeholder="Search portal, datasets, telemetry..." type="text" />
                      <kbd className="absolute right-2.5 top-2 px-1.5 py-0.5 bg-white border border-[#E3ECF3] rounded text-[10px] font-mono text-[#6f797c]">
                        ⌘K
                      </kbd>
                    </div>
                    <div className="hidden lg:flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F6F9FC] border border-[#E3ECF3] font-mono text-xs text-[#071c36]">
                        <span className="w-2 h-2 rounded-full bg-[#059669]" />
                        <span className="">
                          Maitri: -18.4°C
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F6F9FC] border border-[#E3ECF3] font-mono text-xs text-[#071c36]">
                        <span className="w-2 h-2 rounded-full bg-[#1F7A8C]" />
                        <span className="">
                          Himadri: -6.8°C
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F6F9FC] border border-[#E3ECF3] font-mono text-xs text-[#071c36]">
                        <span className="w-2 h-2 rounded-full bg-[#41636e]" />
                        <span className="">
                          Bharati: -14.2°C
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-[#F6F9FC] border border-[#E3ECF3] p-1 rounded-xl">
                      <button id="tab-btn-rights" className="px-3 py-1.5 text-xs font-semibold bg-[#1F7A8C] text-white rounded-lg shadow-sm transition-all" onClick={(e)=>window.__pol(e,"showAdminTab('rights')")}>
                        Rights & Integrations
                      </button>
                      <button id="tab-btn-analytics" className="px-3 py-1.5 text-xs font-medium text-[#3f484b] hover:text-[#071c36] rounded-lg transition-all" onClick={(e)=>window.__pol(e,"showAdminTab('analytics')")}>
                        Analytics & Telemetry
                      </button>
                    </div>
                    <button className="relative p-2 text-[#6f797c] hover:text-[#071c36] hover:bg-[#F6F9FC] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                      <span className="material-symbols-outlined text-[20px]">
                        notifications
                      </span>
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D64545]" />
                    </button>
                    <div className="flex items-center gap-2 pl-2 border-l border-[#E3ECF3]">
                      <div className="w-8 h-8 rounded-full bg-[#1F7A8C] text-white flex items-center justify-center font-semibold text-xs shadow-sm">
                        AS
                      </div>
                      <div className="text-left hidden sm:block">
                        <div className="font-semibold text-xs text-[#071c36]">
                          Dr. Ananya Sen
                        </div>
                        <div className="text-[10px] text-[#6f797c]">
                          Editorial Staff
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="p-8 space-y-6 max-w-7xl w-full mx-auto">
                  <div id="section-rights" className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h1 className="font-serif text-2xl font-bold text-[#071c36]">
                            Rights and Integrations
                          </h1>
                          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#1F7A8C]/10 text-[#1F7A8C] font-semibold border border-[#1F7A8C]/20">
                            NCPOR-CLR v2.4
                          </span>
                        </div>
                        <p className="text-sm text-[#3f484b] mt-1.5 max-w-3xl">
                          Manage copyright clearance, open science licences, embargo policies, and synchronisation with national repositories.
                        </p>
                      </div>
                      <div className="shrink-0">
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-sm font-semibold shadow-sm transition-all ring-2 ring-[#1F7A8C] ring-offset-2">
                          <span className="material-symbols-outlined text-[18px]">
                            add
                          </span>
                          <span className="">
                            Add rights record
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl p-4 border border-[#059669]/30 shadow-card flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[20px]">
                              check_circle
                            </span>
                          </span>
                          <div>
                            <span className="font-semibold text-xs text-[#071c36]">
                              Connection Successful
                            </span>
                            <p className="text-xs text-[#3f484b]">
                              NPDC Gateway responded in 42ms with TLS 1.3 encryption.
                            </p>
                          </div>
                        </div>
                        <button className="p-1 text-[#6f797c] hover:text-[#071c36] hover:bg-[#F6F9FC] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                          <span className="material-symbols-outlined text-[16px]">
                            close
                          </span>
                        </button>
                      </div>
                      <div className="bg-white rounded-2xl p-4 border border-[#E3ECF3] shadow-card flex flex-col justify-center">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-semibold text-[#1F7A8C] flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#1F7A8C] animate-ping" />
                            Synchronising 43rd IAE NetCDF records...
                          </span>
                          <span className="font-mono font-bold text-[#1F7A8C]">
                            68%
                          </span>
                        </div>
                        <div className="w-full bg-[#F6F9FC] rounded-full h-2 overflow-hidden border border-[#E3ECF3]">
                          <div className="bg-[#1F7A8C] h-2 rounded-full transition-all duration-500" style={{"width": "68%"}} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card space-y-5">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <div className="relative w-80">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#6f797c] text-[18px]">
                              search
                            </span>
                            <input className="w-full pl-9 pr-3 py-2 bg-[#F6F9FC] border border-[#E3ECF3] rounded-xl text-xs text-[#071c36] placeholder-[#6f797c] focus:outline-none ring-2 ring-transparent focus:ring-[#1F7A8C] transition-all" placeholder="Filter rights by title or rights holder..." type="text" />
                          </div>
                          <select className="px-3 py-2 rounded-xl bg-[#F6F9FC] border border-[#E3ECF3] text-xs font-medium text-[#071c36] focus:outline-none ring-2 ring-transparent focus:ring-[#1F7A8C]">
                            <option>
                              All Access Tiers
                            </option>
                            <option>
                              Public
                            </option>
                            <option>
                              Restricted
                            </option>
                            <option>
                              Embargoed
                            </option>
                          </select>
                        </div>
                        <span className="font-mono text-xs text-[#6f797c] self-end sm:self-center">
                          Showing 5 registered assets
                        </span>
                      </div>
                      <div className="overflow-x-auto rounded-xl border border-[#E3ECF3]">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#F6F9FC] text-[#3f484b] text-xs font-semibold uppercase tracking-wider border-b border-[#E3ECF3]">
                              <th className="py-3 px-4">
                                Item & Format
                              </th>
                              <th className="py-3 px-4">
                                Rights Holder
                              </th>
                              <th className="py-3 px-4">
                                Licence
                              </th>
                              <th className="py-3 px-4">
                                Access Tier
                              </th>
                              <th className="py-3 px-4">
                                Embargo Date
                              </th>
                              <th className="py-3 px-4 text-center">
                                Watermark
                              </th>
                              <th className="py-3 px-4 text-right">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#E3ECF3] text-xs">
                            <tr className="hover:bg-[#F6F9FC] transition-colors cursor-pointer ring-2 ring-transparent hover:ring-[#1F7A8C]/20">
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 rounded-lg bg-[#1F7A8C]/10 text-[#1F7A8C] flex items-center justify-center font-mono font-bold text-[10px]">
                                    NetCDF
                                  </span>
                                  <div>
                                    <div className="font-semibold text-[#071c36]">
                                      SOE-01 Hydrographic CTD Transect
                                    </div>
                                    <div className="font-mono text-[10px] text-[#6f797c]">
                                      SOE-2023-CTD-981
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 font-medium text-[#071c36]">
                                NCPOR / MoES
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#071c36]">
                                CC-BY 4.0
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#1F7A8C]/10 text-[#1F7A8C] font-semibold text-[11px] border border-[#1F7A8C]/20 ring-2 ring-transparent hover:ring-[#1F7A8C]">
                                  Public
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#6f797c]">
                                None (Permanent)
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <button className="w-9 h-5 bg-[#E3ECF3] rounded-full relative p-0.5 inline-flex items-center ring-2 ring-[#1F7A8C]/40 focus:ring-[#1F7A8C]">
                                  <span className="w-4 h-4 rounded-full bg-white shadow" />
                                </button>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button className="p-1.5 text-[#6f797c] hover:text-[#1F7A8C] hover:bg-[#F6F9FC] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                                  <span className="material-symbols-outlined text-[18px]">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="bg-[#1F7A8C]/5 ring-2 ring-[#1F7A8C] rounded-lg cursor-pointer">
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 rounded-lg bg-[#D64545]/10 text-[#D64545] flex items-center justify-center font-mono font-bold text-[10px]">
                                    GeoTIFF
                                  </span>
                                  <div>
                                    <div className="font-semibold text-[#071c36]">
                                      Himadri Fjord High-Res Drone Orthomosaic
                                    </div>
                                    <div className="font-mono text-[10px] text-[#6f797c]">
                                      ARC-2024-DRN-02
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 font-medium text-[#071c36]">
                                MoES / Survey of India
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#071c36]">
                                MoES Research
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#D64545]/10 text-[#D64545] font-semibold text-[11px] border border-[#D64545]/20 ring-2 ring-[#D64545]/40">
                                  Restricted
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#D64545] font-semibold">
                                Indefinite
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <button className="w-9 h-5 bg-[#1F7A8C] rounded-full relative p-0.5 inline-flex items-center justify-end ring-2 ring-[#1F7A8C]">
                                  <span className="w-4 h-4 rounded-full bg-white shadow" />
                                </button>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button className="p-1.5 text-[#1F7A8C] bg-white rounded-lg transition-colors ring-2 ring-[#1F7A8C]">
                                  <span className="material-symbols-outlined text-[18px]">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="hover:bg-[#F6F9FC] transition-colors cursor-pointer ring-2 ring-transparent hover:ring-[#1F7A8C]/20">
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 rounded-lg bg-[#6B21A8]/10 text-[#6B21A8] flex items-center justify-center font-mono font-bold text-[10px]">
                                    CSV
                                  </span>
                                  <div>
                                    <div className="font-semibold text-[#071c36]">
                                      Maitri Deep Ice Core Isotope Stratigraphy
                                    </div>
                                    <div className="font-mono text-[10px] text-[#6f797c]">
                                      MAI-ICE-2024-C3
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 font-medium text-[#071c36]">
                                Glaciology Division, NCPOR
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#071c36]">
                                ODC-By
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#6B21A8]/10 text-[#6B21A8] font-semibold text-[11px] border border-[#6B21A8]/20 ring-2 ring-transparent hover:ring-[#6B21A8]">
                                  Embargoed
                                </span>
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#6B21A8]/10 text-[#6B21A8] font-bold">
                                  15 Jan 2025
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <button className="w-9 h-5 bg-[#1F7A8C] rounded-full relative p-0.5 inline-flex items-center justify-end ring-2 ring-[#1F7A8C]">
                                  <span className="w-4 h-4 rounded-full bg-white shadow" />
                                </button>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button className="p-1.5 text-[#6f797c] hover:text-[#1F7A8C] hover:bg-[#F6F9FC] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                                  <span className="material-symbols-outlined text-[18px]">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="hover:bg-[#F6F9FC] transition-colors cursor-pointer ring-2 ring-transparent hover:ring-[#1F7A8C]/20">
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 rounded-lg bg-[#1F7A8C]/10 text-[#1F7A8C] flex items-center justify-center font-mono font-bold text-[10px]">
                                    WAV
                                  </span>
                                  <div>
                                    <div className="font-semibold text-[#071c36]">
                                      43rd IAE Overwintering Crew Acoustic Log
                                    </div>
                                    <div className="font-mono text-[10px] text-[#6f797c]">
                                      IAE43-AUDIO-77
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 font-medium text-[#071c36]">
                                Polar Bioacoustics Lab
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#071c36]">
                                CC-BY 4.0
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#1F7A8C]/10 text-[#1F7A8C] font-semibold text-[11px] border border-[#1F7A8C]/20 ring-2 ring-transparent hover:ring-[#1F7A8C]">
                                  Public
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#6f797c]">
                                None
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <button className="w-9 h-5 bg-[#E3ECF3] rounded-full relative p-0.5 inline-flex items-center ring-2 ring-[#1F7A8C]/40 focus:ring-[#1F7A8C]">
                                  <span className="w-4 h-4 rounded-full bg-white shadow" />
                                </button>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button className="p-1.5 text-[#6f797c] hover:text-[#1F7A8C] hover:bg-[#F6F9FC] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                                  <span className="material-symbols-outlined text-[18px]">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                            <tr className="hover:bg-[#F6F9FC] transition-colors cursor-pointer ring-2 ring-transparent hover:ring-[#1F7A8C]/20">
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-3">
                                  <span className="w-8 h-8 rounded-lg bg-[#1F7A8C]/10 text-[#1F7A8C] flex items-center justify-center font-mono font-bold text-[10px]">
                                    TIFF
                                  </span>
                                  <div>
                                    <div className="font-semibold text-[#071c36]">
                                      Dakshin Gangotri 1983 Analog Barograph Scans
                                    </div>
                                    <div className="font-mono text-[10px] text-[#6f797c]">
                                      DG-1983-BARO
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 font-medium text-[#071c36]">
                                National Archives / MoES
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#071c36]">
                                MoES Research
                              </td>
                              <td className="py-3.5 px-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#1F7A8C]/10 text-[#1F7A8C] font-semibold text-[11px] border border-[#1F7A8C]/20 ring-2 ring-transparent hover:ring-[#1F7A8C]">
                                  Public
                                </span>
                              </td>
                              <td className="py-3.5 px-4 font-mono text-[#6f797c]">
                                None
                              </td>
                              <td className="py-3.5 px-4 text-center">
                                <button className="w-9 h-5 bg-[#E3ECF3] rounded-full relative p-0.5 inline-flex items-center ring-2 ring-[#1F7A8C]/40 focus:ring-[#1F7A8C]">
                                  <span className="w-4 h-4 rounded-full bg-white shadow" />
                                </button>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <button className="p-1.5 text-[#6f797c] hover:text-[#1F7A8C] hover:bg-[#F6F9FC] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                                  <span className="material-symbols-outlined text-[18px]">
                                    more_vert
                                  </span>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="bg-[#F6F9FC] border border-[#E3ECF3] rounded-xl p-5 flex flex-col items-center justify-center text-center">
                        <div className="w-9 h-9 rounded-full bg-white border border-[#E3ECF3] flex items-center justify-center text-[#6f797c] mb-2">
                          <span className="material-symbols-outlined text-[20px]">
                            filter_alt_off
                          </span>
                        </div>
                        <div className="font-semibold text-xs text-[#071c36]">
                          No records matching filter "Restricted Tier-2"
                        </div>
                        <p className="text-xs text-[#6f797c] mt-0.5">
                          No datasets currently fall under Tier-2 restrictions. Clear search parameters to review all repositories.
                        </p>
                        <button className="mt-3 px-3 py-1.5 rounded-lg bg-white border border-[#E3ECF3] text-xs font-semibold text-[#1F7A8C] hover:bg-[#1F7A8C] hover:text-white transition-all ring-2 ring-[#1F7A8C]">
                          Clear filter
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-[#E3ECF3]">
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-10 rounded-xl bg-[#1F7A8C]/10 text-[#1F7A8C] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[22px]">
                                  cloud_sync
                                </span>
                              </span>
                              <div>
                                <h3 className="font-semibold text-sm text-[#071c36]">
                                  National Polar Data Centre (NPDC)
                                </h3>
                                <div className="font-mono text-[11px] text-[#6f797c]">
                                  OAI-PMH · REST v3 Endpoint
                                </div>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-[#059669]/10 text-[#059669] font-semibold text-xs border border-[#059669]/20 flex items-center gap-1.5 ring-2 ring-transparent">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                              Connected
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mt-4 bg-[#F6F9FC] p-3 rounded-xl border border-[#E3ECF3]">
                            <div>
                              <div className="font-mono text-[10px] text-[#6f797c] uppercase">
                                API Key
                              </div>
                              <div className="flex items-center gap-1.5 font-mono text-xs text-[#071c36] font-semibold mt-1">
                                <span className="">
                                  ••••••••7f3a
                                </span>
                                <button className="p-0.5 text-[#6f797c] hover:text-[#071c36] ring-2 ring-transparent hover:ring-[#1F7A8C] rounded">
                                  <span className="material-symbols-outlined text-[14px]">
                                    visibility
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div>
                              <div className="font-mono text-[10px] text-[#6f797c] uppercase">
                                Sync Schedule
                              </div>
                              <select className="mt-1 bg-white border border-[#E3ECF3] rounded text-xs font-semibold text-[#1F7A8C] py-0.5 px-2 ring-2 ring-[#1F7A8C]">
                                <option>
                                  Hourly (Every :00)
                                </option>
                                <option>
                                  Daily
                                </option>
                                <option>
                                  Weekly
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-3 text-xs text-[#3f484b] flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[#059669] text-[16px]">
                              check_circle
                            </span>
                            <span className="">
                              14 minutes ago • 1,420 items verified
                            </span>
                          </div>
                          <div className="mt-3 bg-[#071c36] text-[#a9edff] p-3 rounded-xl font-mono text-[11px] space-y-1">
                            <div className="text-[#48deab]">
                              14:22:04 — NetCDF metadata handshake OK (200)
                            </div>
                            <div className="text-[#d6e3ff]">
                              14:21:58 — Schema validation ISO-19115 compliant
                            </div>
                            <div className="text-[#bec8cb]">
                              14:21:40 — 18 new expedition assets indexed
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 pt-3 border-t border-[#E3ECF3]">
                          <button className="px-4 py-2 rounded-xl bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-xs font-semibold shadow-sm transition-all ring-2 ring-[#1F7A8C]">
                            Sync now
                          </button>
                          <button className="px-4 py-2 rounded-xl bg-white border border-[#E3ECF3] hover:bg-[#F6F9FC] text-[#1F7A8C] text-xs font-semibold transition-all ring-2 ring-[#1F7A8C]">
                            Test connection
                          </button>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-[#E3ECF3]">
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-10 rounded-xl bg-[#D64545]/10 text-[#D64545] flex items-center justify-center">
                                <span className="material-symbols-outlined text-[22px]">
                                  account_balance
                                </span>
                              </span>
                              <div>
                                <h3 className="font-semibold text-sm text-[#071c36]">
                                  National Digital Library (NDLI)
                                </h3>
                                <div className="font-mono text-[11px] text-[#6f797c]">
                                  IIT Kharagpur Central Gateway
                                </div>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-[#D64545]/10 text-[#D64545] font-semibold text-xs border border-[#D64545]/20 flex items-center gap-1.5 ring-2 ring-transparent">
                              <span className="material-symbols-outlined text-[14px]">
                                error
                              </span>
                              Sync error
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mt-4 bg-[#F6F9FC] p-3 rounded-xl border border-[#E3ECF3]">
                            <div>
                              <div className="font-mono text-[10px] text-[#6f797c] uppercase">
                                API Key
                              </div>
                              <div className="flex items-center gap-1.5 font-mono text-xs text-[#071c36] font-semibold mt-1">
                                <span className="">
                                  ••••••••9b12
                                </span>
                                <button className="p-0.5 text-[#6f797c] hover:text-[#071c36] ring-2 ring-transparent hover:ring-[#1F7A8C] rounded">
                                  <span className="material-symbols-outlined text-[14px]">
                                    visibility
                                  </span>
                                </button>
                              </div>
                            </div>
                            <div>
                              <div className="font-mono text-[10px] text-[#6f797c] uppercase">
                                Sync Schedule
                              </div>
                              <select className="mt-1 bg-white border border-[#E3ECF3] rounded text-xs font-semibold text-[#071c36] py-0.5 px-2 ring-2 ring-[#1F7A8C]">
                                <option>
                                  Daily at 02:00 IST
                                </option>
                                <option>
                                  Hourly
                                </option>
                                <option>
                                  Weekly
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="mt-3 bg-[#D64545]/10 border border-[#D64545]/20 p-2.5 rounded-xl text-xs text-[#071c36]">
                            <span className="font-semibold text-[#D64545]">
                              Retry hint:
                            </span>
                            {" Check SSL credentials or network proxy."}
                          </div>
                          <div className="mt-3 bg-[#071c36] text-[#ffdad6] p-3 rounded-xl font-mono text-[11px] space-y-1">
                            <div className="text-[#ffb4ab]">
                              02:01:12 — HTTP 504 Gateway Timeout on /v2/harvest
                            </div>
                            <div className="text-[#bec8cb]">
                              02:00:45 — Retrying handshake (attempt 3 of 3)...
                            </div>
                            <div className="text-[#bec8cb]">
                              02:00:00 — Scheduled batch initiated (0 records)
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 pt-3 border-t border-[#E3ECF3]">
                          <button className="px-4 py-2 rounded-xl bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-xs font-semibold shadow-sm transition-all ring-2 ring-[#1F7A8C]">
                            Retry sync
                          </button>
                          <button className="px-4 py-2 rounded-xl bg-white border border-[#E3ECF3] hover:bg-[#F6F9FC] text-[#1F7A8C] text-xs font-semibold transition-all ring-2 ring-[#1F7A8C]">
                            Re-authenticate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="section-analytics" className="space-y-6 hidden">
                    <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h1 className="font-serif text-2xl font-bold text-[#071c36]">
                          Analytics & Telemetry
                        </h1>
                        <p className="text-sm text-[#3f484b] mt-1">
                          Cross-platform dissemination statistics for Indian Antarctic and Arctic Research Stations.
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="bg-[#F6F9FC] border border-[#E3ECF3] p-1 rounded-xl flex items-center">
                          <button className="px-3 py-1.5 text-xs font-medium text-[#3f484b] hover:text-[#071c36] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                            Last 7 days
                          </button>
                          <button className="px-3 py-1.5 text-xs font-semibold bg-[#1F7A8C] text-white rounded-lg shadow-sm ring-2 ring-[#1F7A8C]">
                            30 days
                          </button>
                          <button className="px-3 py-1.5 text-xs font-medium text-[#3f484b] hover:text-[#071c36] rounded-lg transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                            Custom
                          </button>
                        </div>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-sm font-semibold shadow-sm transition-all ring-2 ring-[#1F7A8C] ring-offset-2" onClick={(e)=>window.__pol(e,"document.getElementById('report-modal-panel').scrollIntoView({ behavior: 'smooth' })")}>
                          <span className="material-symbols-outlined text-[18px]">
                            assessment
                          </span>
                          <span className="">
                            Generate MoES Report
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-white rounded-2xl p-5 border border-[#E3ECF3] shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer group ring-2 ring-transparent hover:ring-[#1F7A8C]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#6f797c] uppercase tracking-wider">
                            Total visits
                          </span>
                          <span className="material-symbols-outlined text-[#6f797c] group-hover:text-[#1F7A8C] transition-colors text-[20px]">
                            visibility
                          </span>
                        </div>
                        <div className="mt-3 font-serif text-3xl font-bold text-[#071c36]">
                          148,290
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="inline-flex items-center text-xs font-bold text-[#059669]">
                            <span className="material-symbols-outlined text-[16px]">
                              trending_up
                            </span>
                            +18.4%
                          </span>
                          <svg className="w-20 h-6 text-[#059669]" fill="none" viewBox="0 0 70 20">
                            <path d="M0 16 L14 13 L28 17 L42 9 L56 7 L70 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-[#E3ECF3] shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer group ring-2 ring-transparent hover:ring-[#1F7A8C]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#6f797c] uppercase tracking-wider">
                            Searches
                          </span>
                          <span className="material-symbols-outlined text-[#6f797c] group-hover:text-[#1F7A8C] transition-colors text-[20px]">
                            search
                          </span>
                        </div>
                        <div className="mt-3 font-serif text-3xl font-bold text-[#071c36]">
                          42,810
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="inline-flex items-center text-xs font-bold text-[#059669]">
                            <span className="material-symbols-outlined text-[16px]">
                              trending_up
                            </span>
                            +12.1%
                          </span>
                          <svg className="w-20 h-6 text-[#059669]" fill="none" viewBox="0 0 70 20">
                            <path d="M0 17 L15 14 L30 11 L48 13 L70 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-[#E3ECF3] shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer group ring-2 ring-transparent hover:ring-[#1F7A8C]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#6f797c] uppercase tracking-wider">
                            Stories read
                          </span>
                          <span className="material-symbols-outlined text-[#6f797c] group-hover:text-[#1F7A8C] transition-colors text-[20px]">
                            menu_book
                          </span>
                        </div>
                        <div className="mt-3 font-serif text-3xl font-bold text-[#071c36]">
                          68,450
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="inline-flex items-center text-xs font-bold text-[#059669]">
                            <span className="material-symbols-outlined text-[16px]">
                              trending_up
                            </span>
                            +24.6%
                          </span>
                          <svg className="w-20 h-6 text-[#059669]" fill="none" viewBox="0 0 70 20">
                            <path d="M0 16 L16 12 L32 14 L50 6 L70 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-5 border border-[#E3ECF3] shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer group ring-2 ring-transparent hover:ring-[#1F7A8C]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#6f797c] uppercase tracking-wider">
                            Downloads
                          </span>
                          <span className="material-symbols-outlined text-[#6f797c] group-hover:text-[#1F7A8C] transition-colors text-[20px]">
                            download
                          </span>
                        </div>
                        <div className="mt-3 font-serif text-3xl font-bold text-[#071c36]">
                          9,120
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="inline-flex items-center text-xs font-bold text-[#D64545]">
                            <span className="material-symbols-outlined text-[16px]">
                              trending_down
                            </span>
                            -2.3%
                          </span>
                          <svg className="w-20 h-6 text-[#D64545]" fill="none" viewBox="0 0 70 20">
                            <path d="M0 5 L16 7 L32 4 L50 12 L70 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-serif font-bold text-base text-[#071c36]">
                              Views over time
                            </h3>
                            <p className="text-xs text-[#6f797c]">
                              Oct 1 - Oct 30, 2024 · Daily aggregates
                            </p>
                          </div>
                          <Link className="text-xs font-semibold text-[#1F7A8C] hover:underline ring-2 ring-transparent hover:ring-[#1F7A8C] rounded px-1" to="/data">
                            Download data (CSV)
                          </Link>
                        </div>
                        <div className="relative w-full h-48 mt-2">
                          <svg className="w-full h-full" fill="none" viewBox="0 0 450 160">
                            <defs>
                              <linearGradient id="chartViewsGrad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#1F7A8C" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#1F7A8C" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <line stroke="#E3ECF3" strokeDasharray="3 3" x1="0" x2="450" y1="30" y2="30" />
                            <line stroke="#E3ECF3" strokeDasharray="3 3" x1="0" x2="450" y1="75" y2="75" />
                            <line stroke="#E3ECF3" strokeDasharray="3 3" x1="0" x2="450" y1="120" y2="120" />
                            <path d="M15 130 L60 110 L115 118 L170 80 L225 85 L280 45 L335 22 L390 52 L435 40 L435 150 L15 150 Z" fill="url(#chartViewsGrad)" />
                            <path d="M15 130 L60 110 L115 118 L170 80 L225 85 L280 45 L335 22 L390 52 L435 40" stroke="#1F7A8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                            <circle className="animate-pulse" cx="335" cy="22" fill="#1F7A8C" r="5" />
                            <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="15" y="155">
                              Oct 1
                            </text>
                            <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="150" y="155">
                              Oct 10
                            </text>
                            <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="285" y="155">
                              Oct 20
                            </text>
                            <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="400" y="155">
                              Oct 30
                            </text>
                          </svg>
                          <div className="absolute top-2 right-24 bg-[#071c36] text-white px-2.5 py-1 rounded-lg text-[11px] font-mono shadow-md border border-[#1f314d]">
                            Oct 24: 6,420 visits
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-serif font-bold text-base text-[#071c36]">
                              Searches over time
                            </h3>
                            <p className="text-xs text-[#6f797c]">
                              Keyword queries processed
                            </p>
                          </div>
                          <Link className="text-xs font-semibold text-[#1F7A8C] hover:underline ring-2 ring-transparent hover:ring-[#1F7A8C] rounded px-1" to="/data">
                            Download data (CSV)
                          </Link>
                        </div>
                        <div className="w-full h-48 mt-2">
                          <svg className="w-full h-full" fill="none" viewBox="0 0 450 160">
                            <line stroke="#E3ECF3" strokeDasharray="3 3" x1="0" x2="450" y1="35" y2="35" />
                            <line stroke="#E3ECF3" strokeDasharray="3 3" x1="0" x2="450" y1="80" y2="80" />
                            <line stroke="#E3ECF3" strokeDasharray="3 3" x1="0" x2="450" y1="125" y2="125" />
                            <rect fill="#1F7A8C" height="60" opacity="0.6" rx="3" width="18" x="25" y="70" />
                            <rect fill="#1F7A8C" height="75" opacity="0.6" rx="3" width="18" x="58" y="55" />
                            <rect fill="#1F7A8C" height="45" opacity="0.6" rx="3" width="18" x="91" y="85" />
                            <rect fill="#1F7A8C" height="80" opacity="0.6" rx="3" width="18" x="124" y="50" />
                            <rect fill="#1F7A8C" height="90" opacity="0.6" rx="3" width="18" x="157" y="40" />
                            <rect fill="#1F7A8C" height="70" opacity="0.6" rx="3" width="18" x="190" y="60" />
                            <rect fill="#1F7A8C" height="100" opacity="0.6" rx="3" width="18" x="223" y="30" />
                            <rect fill="#1F7A8C" height="85" opacity="0.6" rx="3" width="18" x="256" y="45" />
                            <rect className="ring-2 ring-[#1F7A8C]" fill="#165e6d" height="115" rx="3" width="18" x="289" y="15" />
                            <rect fill="#1F7A8C" height="88" opacity="0.6" rx="3" width="18" x="322" y="42" />
                            <rect fill="#1F7A8C" height="65" opacity="0.6" rx="3" width="18" x="355" y="65" />
                            <rect fill="#1F7A8C" height="80" opacity="0.6" rx="3" width="18" x="388" y="50" />
                            <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="25" y="148">
                              W1
                            </text>
                            <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="157" y="148">
                              W2
                            </text>
                            <text fill="#165e6d" fontFamily="Inter" fontSize="10" fontWeight="bold" x="282" y="148">
                              Peak W3
                            </text>
                            <text fill="#6f797c" fontFamily="Inter" fontSize="10" x="388" y="148">
                              W4
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card space-y-4">
                        <div className="flex items-center justify-between pb-1">
                          <div>
                            <h3 className="font-serif font-bold text-base text-[#071c36]">
                              Top items
                            </h3>
                            <p className="text-xs text-[#6f797c]">
                              Highest public engagement across station records
                            </p>
                          </div>
                          <Link className="text-xs font-semibold text-[#1F7A8C] hover:underline ring-2 ring-transparent hover:ring-[#1F7A8C] rounded px-1" to="/data">
                            Download data (CSV)
                          </Link>
                        </div>
                        <div className="space-y-3.5 pt-1">
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-semibold text-[#071c36]">
                                1. Overwintering at Schirmacher
                              </span>
                              <span className="font-mono text-[#6f797c] font-bold">
                                24,190 views (92%)
                              </span>
                            </div>
                            <div className="w-full bg-[#F6F9FC] rounded-full h-2 overflow-hidden border border-[#E3ECF3]">
                              <div className="bg-[#1F7A8C] h-2 rounded-full" style={{"width": "92%"}} />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-semibold text-[#071c36]">
                                2. Katabatic Wind Spikes
                              </span>
                              <span className="font-mono text-[#6f797c] font-bold">
                                18,440 views (70%)
                              </span>
                            </div>
                            <div className="w-full bg-[#F6F9FC] rounded-full h-2 overflow-hidden border border-[#E3ECF3]">
                              <div className="bg-[#1F7A8C] h-2 rounded-full" style={{"width": "70%"}} />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-semibold text-[#071c36]">
                                3. Himadri Fjord Survey
                              </span>
                              <span className="font-mono text-[#6f797c] font-bold">
                                14,210 views (54%)
                              </span>
                            </div>
                            <div className="w-full bg-[#F6F9FC] rounded-full h-2 overflow-hidden border border-[#E3ECF3]">
                              <div className="bg-[#1F7A8C] h-2 rounded-full" style={{"width": "54%"}} />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-semibold text-[#071c36]">
                                4. IndARC Mooring
                              </span>
                              <span className="font-mono text-[#6f797c] font-bold">
                                11,850 views (45%)
                              </span>
                            </div>
                            <div className="w-full bg-[#F6F9FC] rounded-full h-2 overflow-hidden border border-[#E3ECF3]">
                              <div className="bg-[#1F7A8C] h-2 rounded-full" style={{"width": "45%"}} />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className="font-semibold text-[#071c36]">
                                5. 1983 DG Barograph
                              </span>
                              <span className="font-mono text-[#6f797c] font-bold">
                                8,920 views (34%)
                              </span>
                            </div>
                            <div className="w-full bg-[#F6F9FC] rounded-full h-2 overflow-hidden border border-[#E3ECF3]">
                              <div className="bg-[#1F7A8C] h-2 rounded-full" style={{"width": "34%"}} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-28 h-4 bg-[#F6F9FC] rounded animate-pulse" />
                            <div className="w-16 h-3 bg-[#F6F9FC] rounded animate-pulse" />
                          </div>
                          <div className="space-y-4 pt-2">
                            <div className="space-y-1.5">
                              <div className="flex justify-between">
                                <div className="w-32 h-3 bg-[#F6F9FC] rounded animate-pulse" />
                                <div className="w-10 h-3 bg-[#F6F9FC] rounded animate-pulse" />
                              </div>
                              <div className="w-full h-2 bg-[#F6F9FC] rounded animate-pulse" />
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex justify-between">
                                <div className="w-28 h-3 bg-[#F6F9FC] rounded animate-pulse" />
                                <div className="w-8 h-3 bg-[#F6F9FC] rounded animate-pulse" />
                              </div>
                              <div className="w-full h-2 bg-[#F6F9FC] rounded animate-pulse" />
                            </div>
                            <div className="space-y-1.5">
                              <div className="flex justify-between">
                                <div className="w-36 h-3 bg-[#F6F9FC] rounded animate-pulse" />
                                <div className="w-12 h-3 bg-[#F6F9FC] rounded animate-pulse" />
                              </div>
                              <div className="w-full h-2 bg-[#F6F9FC] rounded animate-pulse" />
                            </div>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-[#E3ECF3] text-center">
                          <span className="font-mono text-[10px] text-[#6f797c] uppercase tracking-wider">
                            Loading Skeleton State Variant
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
                      <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card flex flex-col items-center">
                        <div className="w-full flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-serif font-bold text-base text-[#071c36]">
                              Visits heatmap
                            </h3>
                            <p className="text-xs text-[#6f797c]">
                              Polar research stations and regional telemetry distribution
                            </p>
                          </div>
                          <div className="flex items-center gap-2 font-mono text-[11px] text-[#6f797c]">
                            <span className="">
                              Low
                            </span>
                            <div className="w-20 h-2 rounded-full bg-gradient-to-r from-[#d9eff3] via-[#1F7A8C] to-[#071c36]" />
                            <span className="">
                              High
                            </span>
                          </div>
                        </div>
                        <div className="w-[560px] max-w-full h-[360px] bg-[#050B18] rounded-2xl border-2 border-dashed border-[#1F7A8C] flex flex-col items-center justify-center text-center p-6 shadow-inner ring-2 ring-[#1F7A8C]">
                          <span className="font-mono text-xs md:text-sm font-bold text-[#a9edff] tracking-wider">
                            GLOBE SLOT - polaris-globe-mini-analytics
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4" id="report-modal-panel">
                        <div className="bg-white rounded-2xl p-6 border border-[#E3ECF3] shadow-card space-y-4">
                          <div className="flex items-center justify-between pb-2 border-b border-[#E3ECF3]">
                            <div className="flex items-center gap-2.5">
                              <span className="material-symbols-outlined text-[#1F7A8C] text-[22px]">
                                description
                              </span>
                              <h3 className="font-serif font-bold text-base text-[#071c36]">
                                Export MoES Dissemination Report
                              </h3>
                            </div>
                            <span className="font-mono text-[11px] text-[#6f797c] px-2 py-0.5 rounded bg-[#F6F9FC] border border-[#E3ECF3]">
                              Modal State
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-[#1F7A8C]/5 rounded-xl border border-[#1F7A8C] ring-2 ring-[#1F7A8C] cursor-pointer flex items-start gap-2.5">
                              <span className="material-symbols-outlined text-[#1F7A8C] text-[20px] mt-0.5">
                                picture_as_pdf
                              </span>
                              <div>
                                <div className="font-semibold text-xs text-[#071c36]">
                                  PDF Briefing
                                </div>
                                <div className="text-[11px] text-[#6f797c]">
                                  Executive charts & summaries
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-[#F6F9FC] rounded-xl border border-[#E3ECF3] hover:border-[#1F7A8C] cursor-pointer flex items-start gap-2.5 transition-colors ring-2 ring-transparent hover:ring-[#1F7A8C]">
                              <span className="material-symbols-outlined text-[#6f797c] text-[20px] mt-0.5">
                                table_chart
                              </span>
                              <div>
                                <div className="font-semibold text-xs text-[#071c36]">
                                  Excel / XLSX
                                </div>
                                <div className="text-[11px] text-[#6f797c]">
                                  Raw telemetry & station metrics
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="block font-mono text-[10px] text-[#6f797c] uppercase mb-1">
                              Date Interval
                            </label>
                            <input className="w-full bg-[#F6F9FC] border border-[#E3ECF3] rounded-xl px-3 py-2 text-xs font-mono font-medium text-[#071c36] ring-2 ring-[#1F7A8C]" readOnly="" type="text" defaultValue="01 Oct 2024 - 31 Oct 2024 (Last 30 Days)" />
                          </div>
                          <div className="space-y-2 pt-1">
                            <label className="flex items-center gap-2.5 text-xs text-[#071c36] cursor-pointer">
                              <input defaultChecked="" className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C] w-4 h-4 ring-2 ring-[#1F7A8C]" type="checkbox" />
                              <span className="">
                                Include charts & telemetry breakdowns
                              </span>
                            </label>
                            <label className="flex items-center gap-2.5 text-xs text-[#071c36] cursor-pointer">
                              <input defaultChecked="" className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C] w-4 h-4 ring-2 ring-[#1F7A8C]" type="checkbox" />
                              <span className="">
                                Attach digital signature & DPDP-2023 compliance seal
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E3ECF3]">
                            <button className="px-4 py-2 rounded-xl bg-white border border-[#E3ECF3] text-xs font-semibold text-[#3f484b] hover:bg-[#F6F9FC] transition-colors ring-2 ring-[#1F7A8C]">
                              Cancel
                            </button>
                            <button className="px-5 py-2 rounded-xl bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-xs font-semibold shadow-sm transition-all ring-2 ring-[#1F7A8C]">
                              Generate & Sign Report
                            </button>
                          </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 border border-[#059669]/30 shadow-card flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="w-9 h-9 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center shrink-0">
                              <span className="material-symbols-outlined text-[20px]">
                                verified
                              </span>
                            </span>
                            <div>
                              <div className="text-xs font-semibold text-[#071c36]">
                                {"Report ready: "}
                                <span className="font-mono text-[#1F7A8C]">
                                  MoES_Report_Oct2024_Signed.pdf (4.8 MB)
                                </span>
                              </div>
                              <div className="text-[11px] text-[#6f797c]">
                                Digital Signature verified by NIC
                              </div>
                            </div>
                          </div>
                          <button className="px-4 py-2 rounded-xl bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-xs font-semibold transition-all shrink-0 ring-2 ring-[#1F7A8C]">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="pt-4 pb-2 text-center">
                    <span className="font-mono text-xs text-[#6f797c]">
                      Sample data · Prepared for MoES/NCPOR Polar Science Administration · Telemetry Node: Maitri- Bharati- Himadri- IndARC · Security Clearance NIC-Level 4
                    </span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
        {" "}
      </main>
      {" "}
      {" "}
      {" "}
    </>
  );
}
