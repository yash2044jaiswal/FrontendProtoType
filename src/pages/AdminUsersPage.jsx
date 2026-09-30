import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_users_access_administration_admin_users/code.html
const BODY_CLASS = "bg-[#eef2f6] text-[#071c36] font-sans antialiased text-[14px]";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base {\n      html, body { margin: 0; padding: 0; }\n      body { overscroll-behavior: none; }\n    }\n    ::-webkit-scrollbar { width: 6px; height: 6px; }\n    ::-webkit-scrollbar-track { background: #f0f3ff; }\n    ::-webkit-scrollbar-thumb { background: #bec8cb; border-radius: 9999px; }\n    ::-webkit-scrollbar-thumb:hover { background: #6f797c; }";
const PAGE_SCRIPT = "function switchFrameView(mode) {\n      const f1 = document.getElementById('frame-1');\n      const f2 = document.getElementById('frame-2');\n      const fu = document.getElementById('frame-users');\n      const wrapper = document.getElementById('frames-wrapper');\n      \n      const tabF1 = document.getElementById('tab-f1');\n      const tabF2 = document.getElementById('tab-f2');\n      const tabUsers = document.getElementById('tab-users');\n      const tabDual = document.getElementById('tab-dual');\n\n      // Reset tabs style\n      [tabF1, tabF2, tabUsers, tabDual].forEach(t => {\n        if (t) t.className = \"px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#dee8ff] hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5\";\n      });\n\n      const activeTabClass = \"px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 bg-[#1F7A8C] text-white shadow-sm ring-2 ring-[#1F7A8C]\";\n\n      if (mode === 'f1') {\n        if(f1) f1.classList.remove('hidden');\n        if(f2) f2.classList.add('hidden');\n        if(fu) fu.classList.add('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        tabF1.className = activeTabClass;\n      } else if (mode === 'f2') {\n        if(f1) f1.classList.add('hidden');\n        if(f2) f2.classList.remove('hidden');\n        if(fu) fu.classList.add('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        tabF2.className = activeTabClass;\n      } else if (mode === 'users') {\n        if(f1) f1.classList.add('hidden');\n        if(f2) f2.classList.add('hidden');\n        if(fu) fu.classList.remove('hidden');\n        wrapper.className = \"w-full max-w-[1440px] flex flex-col gap-8 transition-all duration-300\";\n        if(tabUsers) tabUsers.className = activeTabClass;\n      } else if (mode === 'dual') {\n        if(f1) f1.classList.remove('hidden');\n        if(f2) f2.classList.remove('hidden');\n        if(fu) fu.classList.remove('hidden');\n        wrapper.className = \"w-full max-w-[1700px] flex flex-col gap-10 transition-all duration-300\";\n        tabDual.className = activeTabClass;\n      }\n    }";

export default function AdminUsersPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      {" "}
      {" "}
      {" "}
      <aside className="fixed left-0 top-[45px] bottom-0 bg-white border-r border-[#E3ECF3] z-40 flex flex-col justify-between p-4 w-[68px]">
        <button className="absolute top-3 right-3 text-[#6f797c] hover:text-[#071c36] p-1 rounded-lg md:hidden" onClick={(e)=>window.__pol(e,"this.closest('aside').classList.add('hidden')")}>
          <span className="material-symbols-outlined text-[20px]">
            close
          </span>
        </button>
        <button className="absolute top-3 right-3 text-[#6f797c] hover:text-[#071c36] p-1 rounded-lg md:hidden" onClick={(e)=>window.__pol(e,"this.closest('aside').classList.add('hidden')")}>
          <span className="material-symbols-outlined text-[20px]">
            close
          </span>
        </button>
        {" "}
        <div>
          <div className="flex items-center gap-2 px-2 py-3 mb-6 border-b border-[#E3ECF3]">
            <span className="material-symbols-outlined text-[#1F7A8C]">
              admin_panel_settings
            </span>
            <span className="font-bold text-xs uppercase tracking-wider text-[#071c36] sidebar-text hidden">
              Admin Control
            </span>
            <button className="ml-auto p-1 rounded-lg text-[#6f797c] hover:text-[#071c36] hover:bg-[#f0f9fa] transition-colors" onClick={(e)=>window.__pol(e,"const aside = this.closest('aside'); aside.classList.toggle('w-[240px]'); aside.classList.toggle('w-[68px]'); aside.querySelectorAll('.sidebar-text').forEach(el => el.classList.toggle('hidden'));")}>
              <span className="material-symbols-outlined text-[18px]">
                chevron_left
              </span>
            </button>
          </div>
          <nav className="flex flex-col gap-1" data-active-classes="bg-[#f0f9fa] text-[#1F7A8C] font-semibold">
            <Link className="px-3 py-2 rounded-lg text-xs text-[#3f484b] hover:bg-[#f0f9fa] hover:text-[#1F7A8C] transition-all flex items-center gap-2" data-path="/admin/rights" to="/admin/rights">
              <span className="material-symbols-outlined text-[16px]">
                policy
              </span>
              {" "}
              <span className="sidebar-text hidden">
                Rights & Integrations
              </span>
            </Link>
            <Link className="px-3 py-2 rounded-lg text-xs text-[#3f484b] hover:bg-[#f0f9fa] hover:text-[#1F7A8C] transition-all flex items-center gap-2" data-path="/admin/analytics" to="/admin/analytics">
              <span className="material-symbols-outlined text-[16px]">
                insights
              </span>
              {" "}
              <span className="sidebar-text hidden">
                Analytics & MoES
              </span>
            </Link>
            <Link className="px-3 py-2 rounded-lg text-xs bg-[#f0f9fa] text-[#1F7A8C] font-semibold transition-all flex items-center gap-2" data-path="/admin/users" to="/admin/users">
              <span className="material-symbols-outlined text-[16px]">
                group
              </span>
              {" "}
              <span className="sidebar-text hidden">
                Users & Access
              </span>
            </Link>
            <Link className="px-3 py-2 rounded-lg text-xs text-[#3f484b] hover:bg-[#f0f9fa] hover:text-[#1F7A8C] transition-all flex items-center gap-2" data-path="/admin/audit-logs" to="/admin/audit-logs">
              <span className="material-symbols-outlined text-[16px]">
                history
              </span>
              {" "}
              <span className="sidebar-text hidden">
                Audit Logs
              </span>
            </Link>
          </nav>
        </div>
        {" "}
        <div className="text-[11px] text-[#6f797c] px-2 pt-4 border-t border-[#E3ECF3]">
          <span className="sidebar-text hidden">
            POLARIS v2.4 · MoES
          </span>
        </div>
        {" "}
      </aside>
      {" "}
      {" "}
      <main className="w-full min-h-screen p-4 md:p-6 pl-[264px] overflow-x-auto flex justify-center">
        <div className="flex flex-col w-full">
          <div className="w-full bg-white border-b border-[#E3ECF3] px-6 py-3 flex items-center justify-between mb-8 shadow-sm">
            <div className="flex items-center gap-2 mr-2">
              <button className="p-2 text-[#3f484b] hover:bg-[#F6F9FC] rounded-lg transition-colors" onClick={(e)=>window.__pol(e,"document.querySelector('aside.fixed.left-0').classList.remove('hidden')")}>
                <span className="material-symbols-outlined text-[20px]">
                  menu
                </span>
              </button>
              <button className="p-2 text-[#3f484b] hover:bg-[#F6F9FC] rounded-lg transition-colors" onClick={(e)=>window.__pol(e,"document.querySelector('aside.fixed.left-0').classList.remove('hidden')")}>
                <span className="material-symbols-outlined text-[20px]">
                  menu
                </span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#6f797c] text-[18px]">
                  search
                </span>
                <input className="bg-[#F6F9FC] border border-[#E3ECF3] rounded-lg pl-10 pr-4 py-2 text-xs w-72 focus:outline-none focus:ring-2 focus:ring-[#1F7A8C] transition-all text-[#071c36]" placeholder="Global search telemetry (⌘K)..." type="text" />
              </div>
              <div className="hidden lg:flex items-center gap-3 text-xs text-[#3f484b]">
                <span className="flex items-center gap-1 font-mono bg-[#F6F9FC] px-2.5 py-1 rounded-md border border-[#E3ECF3]">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-[#059669]" />
                  {" Himadri Stn: -14°C "}
                </span>
                <span className="flex items-center gap-1 font-mono bg-[#F6F9FC] px-2.5 py-1 rounded-md border border-[#E3ECF3]">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-[#059669]" />
                  {" Bharati Stn: -2°C "}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#1F7A8C]/10 text-[#1F7A8C] font-bold border border-[#1F7A8C]/20 flex items-center gap-1">
                {" "}
                <span className="material-symbols-outlined text-[14px]">
                  security
                </span>
                {" ADMIN ONLY "}
              </span>
              <button className="relative p-2 text-[#3f484b] hover:bg-[#F6F9FC] rounded-lg transition-colors">
                {" "}
                <span className="material-symbols-outlined text-[20px]">
                  notifications
                </span>
                {" "}
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#D64545] rounded-full" />
                {" "}
              </button>
              <div className="flex items-center gap-2 pl-2 border-l border-[#E3ECF3]">
                <div className="w-8 h-8 rounded-full bg-cover bg-center border border-[#1F7A8C]" data-alt="Portrait of a senior male Indian polar scientist with graying beard wearing a winter parka over a formal collar shirt, standing inside a dimly lit research control room with glowing monitors displaying ice sheet telemetry graphs in soft cyan and deep navy hues." style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAl6mRrS1gYblIgaWdQ5Rr6oEpt-yt_MxytZNrFk2CiGSBXvQzAuBgtnnYMKshh8TGEomQCOl-LBOrbBE788VZiqb93Ww5M16T8CdWx2WRm8c7g1lrsENugJpz6RQVj8rgOOmqlhTK8wNSLqyzd-wQcAjIAZStCaq4TI614TgBWatpxd1MKbNZLp_8sovCGLPS8ePtbZ5vJH-nFPjJ1xDTcFupxFaiEmUlumr2MXQLdsFuVuOpCtw-o')"}} />
                <div className="hidden md:block text-left">
                  <div className="text-xs font-bold text-[#071c36]">
                    Dr. A. R. Sharma
                  </div>
                  <div className="text-[10px] text-[#6f797c]">
                    NIC-L4 Security Clearance
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 pb-16 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E3ECF3] shadow-card">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-[#1F7A8C] font-semibold tracking-wider uppercase">
                    POLARIS ACCESS CONTROL SYSTEM
                  </span>
                  <span className="text-[#6f797c]">
                    •
                  </span>
                  <span className="text-xs text-[#6f797c] font-mono">
                    NODE: NCPOR-GOA-HQ
                  </span>
                </div>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#071c36]">
                  Users & Access Administration
                </h1>
                <p className="text-xs md:text-sm text-[#3f484b] mt-1">
                  Manage staff access rights, institutional roles, cryptographic audit trails, and system backups.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer" onClick={(e)=>window.__pol(e,"document.getElementById('invite-modal').classList.remove('hidden')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    person_add
                  </span>
                  {" Invite user "}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E3ECF3] shadow-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1F7A8C]">
                        group
                      </span>
                      <h2 className="text-base font-bold text-[#071c36]">
                        Authorized Personnel & Scopes
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-[#6f797c] bg-[#F6F9FC] px-2.5 py-1 rounded-md border border-[#E3ECF3]">
                      5 Active Records
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#E3ECF3] text-[11px] font-mono text-[#6f797c] uppercase tracking-wider">
                          <th className="py-3 px-3">
                            User & Email
                          </th>
                          <th className="py-3 px-3">
                            Role
                          </th>
                          <th className="py-3 px-3">
                            2FA
                          </th>
                          <th className="py-3 px-3">
                            Item-Level Permissions
                          </th>
                          <th className="py-3 px-3">
                            Last Active
                          </th>
                          <th className="py-3 px-3 text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E3ECF3]/60 text-xs">
                        <tr className="hover:bg-[#F6F9FC] transition-colors group">
                          <td className="py-3.5 px-3">
                            {" "}
                            <div className="font-bold text-[#071c36]">
                              Dr. Meera Nambiar
                            </div>
                            {" "}
                            <div className="text-[11px] text-[#6f797c]">
                              meera.nambiar@ncpor.res.in
                            </div>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="px-2 py-0.5 rounded-md bg-[#1F7A8C]/10 text-[#1F7A8C] font-semibold text-[11px]">
                              Admin
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="inline-flex items-center gap-1 text-[#059669] font-medium text-[11px]">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                              {" Enabled "}
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <div className="flex flex-wrap gap-1">
                              <span className="bg-[#F6F9FC] border border-[#E3ECF3] px-2 py-0.5 rounded text-[10px] text-[#3f484b]">
                                Himadri Arctic
                              </span>
                              <span className="bg-[#F6F9FC] border border-[#E3ECF3] px-2 py-0.5 rounded text-[10px] text-[#3f484b]">
                                Southern Ocean
                              </span>
                            </div>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3 text-[#6f797c] font-mono text-[11px]">
                            2m ago
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            {" "}
                            <button className="p-1 rounded hover:bg-[#E3ECF3] transition-colors focus:ring-2 focus:ring-[#1F7A8C]">
                              {" "}
                              <span className="material-symbols-outlined text-[16px] text-[#6f797c]">
                                more_vert
                              </span>
                              {" "}
                            </button>
                            {" "}
                          </td>
                        </tr>
                        <tr className="hover:bg-[#F6F9FC] transition-colors group">
                          <td className="py-3.5 px-3">
                            {" "}
                            <div className="font-bold text-[#071c36]">
                              Vikramaditya Roy
                            </div>
                            {" "}
                            <div className="text-[11px] text-[#6f797c]">
                              v.roy@moes.gov.in
                            </div>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="px-2 py-0.5 rounded-md bg-[#006070]/10 text-[#006070] font-semibold text-[11px]">
                              Editor
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="inline-flex items-center gap-1 text-[#059669] font-medium text-[11px]">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                              {" Enabled "}
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="bg-[#F6F9FC] border border-[#E3ECF3] px-2 py-0.5 rounded text-[10px] text-[#3f484b]">
                              AI Studio
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3 text-[#6f797c] font-mono text-[11px]">
                            1h ago
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            {" "}
                            <button className="p-1 rounded hover:bg-[#E3ECF3] transition-colors focus:ring-2 focus:ring-[#1F7A8C]">
                              {" "}
                              <span className="material-symbols-outlined text-[16px] text-[#6f797c]">
                                more_vert
                              </span>
                              {" "}
                            </button>
                            {" "}
                          </td>
                        </tr>
                        <tr className="hover:bg-[#F6F9FC] transition-colors group">
                          <td className="py-3.5 px-3">
                            {" "}
                            <div className="font-bold text-[#071c36]">
                              Prof. Rajesh Swaminathan
                            </div>
                            {" "}
                            <div className="text-[11px] text-[#6f797c]">
                              swaminathan@iisc.ac.in
                            </div>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="px-2 py-0.5 rounded-md bg-[#3f484b]/10 text-[#3f484b] font-semibold text-[11px]">
                              Scientist
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="inline-flex items-center gap-1 text-[#D64545] font-medium text-[11px]">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D64545]" />
                              {" Disabled "}
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="bg-[#F6F9FC] border border-[#E3ECF3] px-2 py-0.5 rounded text-[10px] text-[#3f484b]">
                              Himalayan Glaciers
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3 text-[#6f797c] font-mono text-[11px]">
                            3d ago
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            {" "}
                            <button className="p-1 rounded hover:bg-[#E3ECF3] transition-colors focus:ring-2 focus:ring-[#1F7A8C]">
                              {" "}
                              <span className="material-symbols-outlined text-[16px] text-[#6f797c]">
                                more_vert
                              </span>
                              {" "}
                            </button>
                            {" "}
                          </td>
                        </tr>
                        <tr className="hover:bg-[#F6F9FC] transition-colors group">
                          <td className="py-3.5 px-3">
                            {" "}
                            <div className="font-bold text-[#071c36]">
                              Ananya Sen
                            </div>
                            {" "}
                            <div className="text-[11px] text-[#6f797c]">
                              ananya.sen@ncpor.res.in
                            </div>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="px-2 py-0.5 rounded-md bg-[#6B21A8]/10 text-[#6B21A8] font-semibold text-[11px]">
                              Contributor
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="inline-flex items-center gap-1 text-[#059669] font-medium text-[11px]">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                              {" Enabled "}
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="bg-[#F6F9FC] border border-[#E3ECF3] px-2 py-0.5 rounded text-[10px] text-[#3f484b]">
                              Bharati Station
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3 text-[#6f797c] font-mono text-[11px]">
                            5h ago
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            {" "}
                            <button className="p-1 rounded hover:bg-[#E3ECF3] transition-colors focus:ring-2 focus:ring-[#1F7A8C]">
                              {" "}
                              <span className="material-symbols-outlined text-[16px] text-[#6f797c]">
                                more_vert
                              </span>
                              {" "}
                            </button>
                            {" "}
                          </td>
                        </tr>
                        <tr className="hover:bg-[#F6F9FC] transition-colors group">
                          <td className="py-3.5 px-3">
                            {" "}
                            <div className="font-bold text-[#071c36]">
                              Capt. R. K. Varma
                            </div>
                            {" "}
                            <div className="text-[11px] text-[#6f797c]">
                              rk.varma@navy.mil.in
                            </div>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="px-2 py-0.5 rounded-md bg-[#3f484b]/10 text-[#3f484b] font-semibold text-[11px]">
                              Scientist
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="inline-flex items-center gap-1 text-[#059669] font-medium text-[11px]">
                              {" "}
                              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                              {" Enabled "}
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3">
                            {" "}
                            <span className="bg-[#F6F9FC] border border-[#E3ECF3] px-2 py-0.5 rounded text-[10px] text-[#3f484b]">
                              Southern Ocean
                            </span>
                            {" "}
                          </td>
                          <td className="py-3.5 px-3 text-[#6f797c] font-mono text-[11px]">
                            1d ago
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            {" "}
                            <button className="p-1 rounded hover:bg-[#E3ECF3] transition-colors focus:ring-2 focus:ring-[#1F7A8C]">
                              {" "}
                              <span className="material-symbols-outlined text-[16px] text-[#6f797c]">
                                more_vert
                              </span>
                              {" "}
                            </button>
                            {" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E3ECF3] flex items-center justify-between text-xs text-[#6f797c]">
                  <span className="">
                    Showing 1 to 5 of 42 total institutional accounts
                  </span>
                  <div className="flex items-center gap-1">
                    <button className="px-3 py-1 rounded bg-[#F6F9FC] border border-[#E3ECF3] text-[#071c36] font-medium">
                      Prev
                    </button>
                    <button className="px-3 py-1 rounded bg-[#1F7A8C] text-white font-medium">
                      1
                    </button>
                    <button className="px-3 py-1 rounded bg-[#F6F9FC] border border-[#E3ECF3] text-[#071c36] font-medium">
                      2
                    </button>
                    <button className="px-3 py-1 rounded bg-[#F6F9FC] border border-[#E3ECF3] text-[#071c36] font-medium">
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-[#E3ECF3] shadow-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1F7A8C]">
                        database
                      </span>
                      <h2 className="text-base font-bold text-[#071c36]">
                        Backup & Restore
                      </h2>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" title="System Auto-Backup Active" />
                  </div>
                  <div className="bg-[#F6F9FC] rounded-xl p-4 border border-[#E3ECF3] mb-6">
                    <div className="text-xs font-mono text-[#6f797c] mb-1">
                      AUTOMATED SNAPSHOT STATUS
                    </div>
                    <div className="text-sm font-bold text-[#071c36] mb-2">
                      Last encrypted snapshot: 2 hours ago • 2.4 GB
                    </div>
                    <div className="w-full bg-[#E3ECF3] rounded-full h-1.5 overflow-hidden">
                      <div className="bg-[#1F7A8C] h-full w-[84%] rounded-full" />
                    </div>
                    <div className="flex justify-between items-center mt-2 text-[11px] text-[#6f797c]">
                      <span className="">
                        SHA-256 Verified
                      </span>
                      <span className="">
                        Next in 4h
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#071c36] mb-1.5">
                        Backup Frequency Schedule
                      </label>
                      <select className="w-full bg-[#F6F9FC] border border-[#E3ECF3] rounded-lg px-3 py-2 text-xs text-[#071c36] focus:ring-2 focus:ring-[#1F7A8C] focus:outline-none">
                        <option>
                          Every 6 Hours (Recommended for High Latency)
                        </option>
                        <option>
                          Daily at 00:00 UTC
                        </option>
                        <option>
                          Weekly Deep Archive
                        </option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#F6F9FC] border border-[#E3ECF3]">
                      <div>
                        <div className="text-xs font-bold text-[#071c36]">
                          Immutable Cloud Mirroring
                        </div>
                        <div className="text-[11px] text-[#6f797c]">
                          Off-site replica at NIC Delhi Data Center
                        </div>
                      </div>
                      <input defaultChecked="" className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C] w-4 h-4" type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E3ECF3] flex flex-col gap-2.5">
                  <button className="w-full bg-[#F6F9FC] hover:bg-[#E3ECF3] border border-[#E3ECF3] text-[#071c36] text-xs font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#1F7A8C]">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>
                    {" Download Snapshot "}
                  </button>
                  <button className="w-full bg-[#D64545]/10 hover:bg-[#D64545]/20 text-[#D64545] text-xs font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#D64545]">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      restart_alt
                    </span>
                    {" Initiate Secure Restore "}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E3ECF3] shadow-card p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A8C]">
                    history
                  </span>
                  <h2 className="text-base font-bold text-[#071c36]">
                    System Audit Log & Cryptographic Trails
                  </h2>
                </div>
                <button className="text-xs text-[#1F7A8C] font-semibold hover:underline flex items-center gap-1">
                  {" Export Verification Cert "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                  {" "}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#E3ECF3] text-[11px] font-mono text-[#6f797c] uppercase tracking-wider">
                      <th className="py-3 px-3">
                        Operator (Who)
                      </th>
                      <th className="py-3 px-3">
                        Action & Entity (What)
                      </th>
                      <th className="py-3 px-3">
                        AI Model / Engine Version
                      </th>
                      <th className="py-3 px-3">
                        Timestamp (UTC)
                      </th>
                      <th className="py-3 px-3">
                        SHA-256 Seal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E3ECF3]/60 text-xs">
                    <tr className="hover:bg-[#F6F9FC] transition-colors">
                      <td className="py-3 px-3 font-bold text-[#071c36]">
                        {"Dr. Meera Nambiar "}
                        <span className="text-[10px] font-normal text-[#6f797c] block">
                          NIC-L4 Admin
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {" "}
                        <span className="text-[#059669] font-medium">
                          MODIFIED ROLE
                        </span>
                        {" — User ID #104 (Assigned Editor scope) "}
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#3f484b]">
                        NCPOR-OCR v2.4
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#6f797c]">
                        2023-10-24 14:22:01
                      </td>
                      <td className="py-3 px-3 font-mono text-[10px] text-[#1F7A8C] truncate max-w-[140px]" title="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855">
                        {" e3b0c44298fc1c149afbf4c... "}
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F6F9FC] transition-colors">
                      <td className="py-3 px-3 font-bold text-[#071c36]">
                        {"Vikramaditya Roy "}
                        <span className="text-[10px] font-normal text-[#6f797c] block">
                          MoES HQ
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {" "}
                        <span className="text-[#1F7A8C] font-medium">
                          EXPORTED DATASET
                        </span>
                        {" — Himadri Core Ice Density (CSV) "}
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#3f484b]">
                        Claude 3.5 Sonnet
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#6f797c]">
                        2023-10-24 12:05:43
                      </td>
                      <td className="py-3 px-3 font-mono text-[10px] text-[#1F7A8C] truncate max-w-[140px]" title="8f14e45fceea167a5a36dedd4bea2543d396de6484cdb1c67a42a03f42111c18">
                        {" 8f14e45fceea167a5a36dedd... "}
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F6F9FC] transition-colors">
                      <td className="py-3 px-3 font-bold text-[#071c36]">
                        {"System Daemon "}
                        <span className="text-[10px] font-normal text-[#6f797c] block">
                          Automated Cron
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {" "}
                        <span className="text-[#059669] font-medium">
                          SNAPSHOT CREATED
                        </span>
                        {" — State 2.4 GB Encrypted Archive "}
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#3f484b]">
                        POLARIS-Core v2.4
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#6f797c]">
                        2023-10-24 10:00:00
                      </td>
                      <td className="py-3 px-3 font-mono text-[10px] text-[#1F7A8C] truncate max-w-[140px]" title="9b71d228f742188497d312a32223a5666ded84b3e839e2e69123891b2234120f">
                        {" 9b71d228f742188497d312a3... "}
                      </td>
                    </tr>
                    <tr className="hover:bg-[#F6F9FC] transition-colors">
                      <td className="py-3 px-3 font-bold text-[#071c36]">
                        {"Prof. Rajesh Swaminathan "}
                        <span className="text-[10px] font-normal text-[#6f797c] block">
                          IISc Bangalore
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {" "}
                        <span className="text-[#D64545] font-medium">
                          AUTH FAILURE
                        </span>
                        {" — Invalid 2FA Token Attempt (IP: 14.139.x) "}
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#3f484b]">
                        NCPOR-Auth v1.9
                      </td>
                      <td className="py-3 px-3 font-mono text-[11px] text-[#6f797c]">
                        2023-10-24 08:15:12
                      </td>
                      <td className="py-3 px-3 font-mono text-[10px] text-[#1F7A8C] truncate max-w-[140px]" title="3c29a8f4c1920192eab881923fa1092834bba7182281923a100293847291a01b">
                        {" 3c29a8f4c1920192eab88192... "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071c36]/50 backdrop-blur-sm p-4 hidden" id="invite-modal">
            <div className="bg-white rounded-2xl border border-[#E3ECF3] shadow-2xl max-w-lg w-full p-6 md:p-8 animate-in fade-in zoom-in duration-200">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E3ECF3]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#1F7A8C]">
                    person_add
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#071c36]">
                    Invite New Institutional User
                  </h3>
                </div>
                <button className="text-[#6f797c] hover:text-[#071c36] p-1 rounded-lg" onClick={(e)=>window.__pol(e,"document.getElementById('invite-modal').classList.add('hidden')")}>
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                  {" "}
                </button>
              </div>
              <form className="space-y-4" onSubmit={(e)=>window.__pol(e,"event.preventDefault(); document.getElementById('invite-modal').classList.add('hidden');")}>
                {" "}
                <div>
                  <label className="block text-xs font-bold text-[#071c36] mb-1.5">
                    Official Email Address (.gov.in / .res.in / .ac.in)
                  </label>
                  <input className="w-full bg-[#F6F9FC] border border-[#E3ECF3] rounded-lg px-3 py-2 text-xs text-[#071c36] focus:ring-2 focus:ring-[#1F7A8C] focus:outline-none" placeholder="researcher@ncpor.res.in" required="" type="email" />
                </div>
                {" "}
                <div>
                  <label className="block text-xs font-bold text-[#071c36] mb-1.5">
                    Assigned Institutional Role
                  </label>
                  <select className="w-full bg-[#F6F9FC] border border-[#E3ECF3] rounded-lg px-3 py-2 text-xs text-[#071c36] focus:ring-2 focus:ring-[#1F7A8C] focus:outline-none">
                    <option>
                      Admin (Full system & user management privileges)
                    </option>
                    <option>
                      Editor (Content moderation & metadata curation)
                    </option>
                    <option>
                      Scientist (Telemetry access & AI workbench)
                    </option>
                    <option>
                      Contributor (Dataset upload & field logs)
                    </option>
                  </select>
                </div>
                {" "}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#F6F9FC] border border-[#E3ECF3]">
                  <div>
                    <div className="text-xs font-bold text-[#071c36]">
                      Enforce 2FA Hardware Token / Authenticator
                    </div>
                    <div className="text-[11px] text-[#6f797c]">
                      Mandatory for NIC Level 4 security compliance
                    </div>
                  </div>
                  <input defaultChecked="" className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C] w-4 h-4" type="checkbox" />
                </div>
                {" "}
                <div>
                  <label className="block text-xs font-bold text-[#071c36] mb-2">
                    Geographic & Functional Scopes
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-2 p-2 rounded-lg bg-[#F6F9FC] border border-[#E3ECF3] text-xs text-[#3f484b] cursor-pointer">
                      {" "}
                      <input defaultChecked="" className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C]" type="checkbox" />
                      {" Arctic Node (Himadri) "}
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg bg-[#F6F9FC] border border-[#E3ECF3] text-xs text-[#3f484b] cursor-pointer">
                      {" "}
                      <input defaultChecked="" className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C]" type="checkbox" />
                      {" Antarctic Node (Bharati) "}
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg bg-[#F6F9FC] border border-[#E3ECF3] text-xs text-[#3f484b] cursor-pointer">
                      {" "}
                      <input className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C]" type="checkbox" />
                      {" Himalayan Glaciers "}
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg bg-[#F6F9FC] border border-[#E3ECF3] text-xs text-[#3f484b] cursor-pointer">
                      {" "}
                      <input defaultChecked="" className="rounded text-[#1F7A8C] focus:ring-[#1F7A8C]" type="checkbox" />
                      {" AI Studio & OCR Engine "}
                    </label>
                  </div>
                </div>
                {" "}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E3ECF3]">
                  <button className="px-4 py-2 rounded-lg text-xs font-semibold text-[#3f484b] hover:bg-[#F6F9FC] transition-colors" type="button" onClick={(e)=>window.__pol(e,"document.getElementById('invite-modal').classList.add('hidden')")}>
                    {" Cancel "}
                  </button>
                  <button className="bg-[#1F7A8C] hover:bg-[#165e6d] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-[#1F7A8C]" type="submit">
                    {" Send Invitation "}
                  </button>
                </div>
                {" "}
              </form>
            </div>
          </div>
        </div>
      </main>
      {" "}
      {" "}
      {" "}
    </>
  );
}
