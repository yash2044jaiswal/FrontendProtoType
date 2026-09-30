import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_authentication_access_portal_signup_login_reset/code.html
const BODY_CLASS = "bg-background font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

export default function AuthPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_2px_12px_rgba(7,28,54,0.04)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md flex-shrink-0">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">
                  ac_unit
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider mt-0.5">
                  NCPOR • MoES India
                </span>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary-container/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed-dim opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-container" />
              </span>
              <span className="font-label-mono text-label-mono text-on-secondary-container font-semibold tracking-wider uppercase">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-5" data-active-classes="text-primary font-bold">
            <Link aria-current="page" className="transition-colors text-primary font-bold" data-path="home" to="/">
              Home
            </Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="live-tracker" to="/live/soe-01">
              Live Tracker
            </Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="publications" to="/publications">
              Publications
            </Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="education" to="/education">
              Education
            </Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors font-body-sm text-body-sm" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm">
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[18px]">
                search
              </span>
              <span className="font-body-sm text-body-sm">
                Search
              </span>
              <kbd className="font-label-mono text-label-mono px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant">
                ⌘K
              </kbd>
            </button>
            <div className="hidden md:flex items-center px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-mono text-label-mono font-medium">
              <span className="text-primary font-semibold">
                EN
              </span>
              <span className="mx-1 text-outline-variant">
                |
              </span>
              <span className="hover:text-on-surface cursor-pointer transition-colors">
                HI
              </span>
            </div>
            <Link className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-title-md text-title-md transition-colors shadow-sm" data-path="auth" to="/auth">
              Sign In / Register
            </Link>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <div className="w-full bg-surface-container-low/70 py-3 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-mono text-label-mono">
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                  {" "}
                  <span className="material-symbols-outlined text-[15px]">
                    lock_open
                  </span>
                  {" POLARIS SECURE GATEWAY "}
                </span>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-on-surface">
                  Citizen Science & Research Access
                </span>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="bg-secondary-container/70 text-on-secondary-container px-2 py-0.5 rounded-full font-semibold">
                  Guest Tier
                </span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant font-label-mono text-label-mono">
                <span className="hidden md:inline-flex items-center gap-1.5">
                  {" "}
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                  {" NKN SSO Federation Online "}
                </span>
                <span className="text-outline-variant hidden md:inline">
                  |
                </span>
                <span>
                  LAT: 70°45′57″S • LONG: 11°44′09″E (Maitri)
                </span>
              </div>
            </div>
          </div>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-surface-container-lowest shadow-[0_8px_30px_rgba(7,28,54,0.06)] overflow-hidden">
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest font-semibold">
                      {" POLARIS Research Network • Access Node "}
                    </span>
                    <div className="inline-flex p-1 rounded-xl bg-surface-container" role="tablist">
                      <button aria-selected="true" className="px-4 py-1.5 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm shadow-sm transition-all" type="button">
                        {" Sign Up "}
                      </button>
                      <button aria-selected="false" className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-all" type="button">
                        {" Login "}
                      </button>
                      <button aria-selected="false" className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-body-sm text-body-sm transition-all" type="button">
                        {" Reset Password "}
                      </button>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface font-light tracking-tight">
                      {" Join the Polar Science Community "}
                    </h1>
                    <p className="mt-2 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" Access authenticated research logs, save live telemetry streams, and earn polar expedition credentials accredited by MoES. "}
                    </p>
                  </div>
                  <div className="space-y-4 mb-8">
                    <button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all duration-200 shadow-sm group" type="button">
                      {" "}
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z" fill="#4285F4" />
                        <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.94H1.27v3.14C3.25 21.27 7.31 24 12 24z" fill="#34A853" />
                        <path d="M5.28 14.26c-.25-.72-.38-1.49-.38-2.26s.13-1.54.38-2.26V6.6H1.27C.46 8.22 0 10.05 0 12s.46 3.78 1.27 5.4l4.01-3.14z" fill="#FBBC05" />
                        <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.73 1.27 6.6l4.01 3.14c.95-2.84 3.6-4.99 6.72-4.99z" fill="#EA4335" />
                      </svg>
                      {" "}
                      <span className="font-title-md text-body-md font-semibold text-on-surface group-hover:text-primary transition-colors">
                        {" Continue with Google Science & Education "}
                      </span>
                      {" "}
                    </button>
                    <div className="relative flex items-center justify-center py-2">
                      <div className="w-full h-px bg-surface-container-high" />
                      <span className="absolute bg-surface-container-lowest px-4 font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                        {" or register with institutional / personal email "}
                      </span>
                    </div>
                  </div>
                  <form className="space-y-6" onSubmit={(e)=>window.__pol(e,"event.preventDefault(); window.__polaris.go(\"/account\")")}>
                    {" "}
                    {" "}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="fullName">
                          {" "}
                          <span>
                            Full Legal Name
                          </span>
                          {" "}
                          <span className="font-label-mono text-label-mono text-on-surface-variant font-normal">
                            Official Record
                          </span>
                          {" "}
                        </label>
                        <div className="relative flex items-center">
                          <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px]">
                            person
                          </span>
                          <input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="fullName" type="text" defaultValue="Dr. Suniti Sharma" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="userEmail">
                          {" "}
                          <span>
                            Institutional or Personal Email
                          </span>
                          {" "}
                          <span className="font-label-mono text-label-mono text-tertiary font-medium">
                            SSO Compatible
                          </span>
                          {" "}
                        </label>
                        <div className="relative flex items-center">
                          <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px]">
                            mail
                          </span>
                          <input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container transition-all" id="userEmail" type="email" defaultValue="suniti.sharma@ncaor.gov.in" />
                        </div>
                        <p className="font-label-mono text-label-mono text-on-surface-variant mt-0.5">
                          Supports academic domains & National Knowledge Network (NKN) federations.
                        </p>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                        {" "}
                        <span>
                          Select Polar Participation Role
                        </span>
                        {" "}
                        <span className="font-label-mono text-label-mono text-primary font-medium">
                          Determines dossier permissions
                        </span>
                        {" "}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                              explore
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant font-bold">
                              U
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="font-title-md text-body-sm text-on-surface font-semibold">
                              Citizen Explorer
                            </div>
                            <div className="font-label-mono text-[10px] text-on-surface-variant mt-0.5">
                              Public Observatories
                            </div>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-secondary-container/70 shadow-sm cursor-pointer transition-all flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-primary-container text-[20px]">
                              school
                            </span>
                            <span className="font-label-mono text-label-mono text-primary-container font-bold">
                              E
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="font-title-md text-body-sm text-primary font-bold">
                              Student / Educator
                            </div>
                            <div className="font-label-mono text-[10px] text-on-secondary-container mt-0.5 font-medium">
                              Curricula & Telemetry
                            </div>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                              science
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant font-bold">
                              S
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="font-title-md text-body-sm text-on-surface font-semibold">
                              MoES Researcher
                            </div>
                            <div className="font-label-mono text-[10px] text-on-surface-variant mt-0.5">
                              Coring & Raw Radiometry
                            </div>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-all flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                              cloud_sync
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface-variant font-bold">
                              C
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="font-title-md text-body-sm text-on-surface font-semibold">
                              Data Contributor
                            </div>
                            <div className="font-label-mono text-[10px] text-on-surface-variant mt-0.5">
                              Glacial Survey Uploads
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="flex flex-col gap-1.5 md:col-span-1">
                        <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="langPref">
                          {" Portal Interface Language "}
                        </label>
                        <div className="relative">
                          <select className="w-full appearance-none pl-3.5 pr-8 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary-container" id="langPref" defaultValue="English (Default)">
                            <option>
                              English (Default)
                            </option>
                            <option>
                              Hindi (हिंदी)
                            </option>
                            <option>
                              Marathi (मराठी)
                            </option>
                            <option>
                              Tamil (தமிழ்)
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-2.5 top-3 text-on-surface-variant pointer-events-none text-[18px]">
                            expand_more
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
                          {" "}
                          <span>
                            Exploration & Research Focus
                          </span>
                          {" "}
                          <span className="font-label-mono text-label-mono text-on-surface-variant">
                            Tap to configure feed
                          </span>
                          {" "}
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          <button className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-mono text-label-mono font-medium flex items-center gap-1 shadow-sm" type="button">
                            {" "}
                            <span>
                              Katabatic Winds
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                            {" "}
                          </button>
                          <button className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-mono text-label-mono font-medium flex items-center gap-1 shadow-sm" type="button">
                            {" "}
                            <span>
                              Cryosphere & Glaciers
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                            {" "}
                          </button>
                          <button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-label-mono text-label-mono font-medium" type="button">
                            {" + Arctic Moorings "}
                          </button>
                          <button className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-mono text-label-mono font-medium flex items-center gap-1 shadow-sm" type="button">
                            {" "}
                            <span>
                              Southern Ocean Biogeochemistry
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                            {" "}
                          </button>
                          <button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-label-mono text-label-mono font-medium" type="button">
                            {" + Polar Astronomy "}
                          </button>
                          <button className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-label-mono text-label-mono font-medium" type="button">
                            {" + Station Living History "}
                          </button>
                        </div>
                      </div>
                    </div>
                    {" "}
                    {" "}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        {" "}
                        <input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-primary-container border-outline" type="checkbox" />
                        {" "}
                        <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {" I agree to the "}
                          <Link className="text-primary hover:underline font-medium" to="/search">
                            Terms of Research Access
                          </Link>
                          {" and consent to data processing under the "}
                          <strong className="text-on-surface">
                            Digital Personal Data Protection (DPDP) Act, 2023
                          </strong>
                          {" of the Republic of India. "}
                        </span>
                        {" "}
                      </label>
                    </div>
                    {" "}
                    {" "}
                    <div className="pt-2">
                      <button className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-title-md text-title-md transition-all duration-200 shadow-md" type="submit">
                        {" "}
                        <span>
                          Create Polar Science Account
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[20px]">
                          arrow_forward
                        </span>
                        {" "}
                      </button>
                    </div>
                    {" "}
                  </form>
                </div>
                <div className="mt-8 pt-6 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3 text-on-surface-variant font-body-sm text-body-sm">
                  <span>
                    Already registered in the scientific registry?
                  </span>
                  <Link className="text-primary hover:underline font-semibold flex items-center gap-1" to="/auth">
                    {" "}
                    <span>
                      Switch to Secure Login
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      login
                    </span>
                    {" "}
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 bg-gradient-to-br from-[#071c36] via-[#0f2e4e] to-[#1f7a8c] text-on-primary p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern height="32" id="grid-dots" patternUnits="userSpaceOnUse" width="32">
                        {" "}
                        <circle cx="2" cy="2" fill="#e3f8ff" r="1" />
                        {" "}
                      </pattern>
                    </defs>
                    <rect fill="url(#grid-dots)" height="100%" width="100%" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-primary-fixed font-label-mono text-label-mono uppercase tracking-widest font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />
                    {" Member Privileges • Cryosphere Network "}
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-primary font-light">
                    {" Spearheading High-Latitude Science & Open Cryology "}
                  </h2>
                </div>
                <div className="relative z-10 my-8 py-4">
                  <div className="w-full h-56 rounded-2xl bg-[#031326]/60 backdrop-blur-md p-4 relative overflow-hidden flex items-end justify-center shadow-inner">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 500 240">
                      <circle cx="80" cy="40" fill="#a9edff" opacity="0.9" r="1.5" />
                      <circle cx="120" cy="25" fill="#ffffff" r="2" />
                      <circle cx="230" cy="50" fill="#a9edff" opacity="0.7" r="1.5" />
                      <circle cx="410" cy="30" fill="#ffffff" r="2.5" />
                      <circle cx="440" cy="70" fill="#a9edff" r="1.2" />
                      <circle cx="340" cy="20" fill="#ffffff" r="1" />
                      <line opacity="0.6" stroke="#a9edff" strokeDasharray="2 2" strokeWidth="0.8" x1="390" x2="410" y1="40" y2="70" />
                      <line opacity="0.6" stroke="#a9edff" strokeDasharray="2 2" strokeWidth="0.8" x1="410" x2="430" y1="70" y2="45" />
                      <line opacity="0.6" stroke="#a9edff" strokeDasharray="2 2" strokeWidth="0.8" x1="390" x2="400" y1="40" y2="20" />
                      <line opacity="0.6" stroke="#a9edff" strokeDasharray="2 2" strokeWidth="0.8" x1="400" x2="430" y1="20" y2="45" />
                      <path d="M0,80 Q140,20 250,65 T500,45" fill="none" filter="blur(6px)" opacity="0.35" stroke="#48deab" strokeWidth="12" />
                      <path d="M0,95 Q180,40 320,80 T500,60" fill="none" filter="blur(4px)" opacity="0.3" stroke="#83d2e6" strokeWidth="8" />
                      <polygon fill="#0d3559" opacity="0.9" points="-20,240 60,140 160,200 240,130 360,210 440,120 520,240" />
                      <polygon fill="#1b4d79" opacity="0.5" points="60,140 100,165 70,240" />
                      <polygon fill="#1b4d79" opacity="0.5" points="240,130 280,160 250,240" />
                      <polygon fill="#1b4d79" opacity="0.5" points="440,120 480,160 450,240" />
                      <path d="M-10,210 Q150,195 300,215 T510,205 L510,250 L-10,250 Z" fill="#e0f2fe" opacity="0.95" />
                      <path d="M120,225 L380,225" opacity="0.4" stroke="#1f7a8c" strokeDasharray="4 6" strokeWidth="1.5" />
                      <g transform="translate(180, 160)">
                        <line stroke="#071c36" strokeWidth="2.5" x1="20" x2="20" y1="46" y2="55" />
                        <line stroke="#071c36" strokeWidth="2.5" x1="80" x2="80" y1="46" y2="55" />
                        <line stroke="#071c36" strokeWidth="2.5" x1="50" x2="50" y1="46" y2="55" />
                        <rect fill="#ffffff" height="15" rx="3" width="70" x="15" y="32" />
                        <rect fill="#006070" height="6" rx="1" width="8" x="18" y="36" />
                        <rect fill="#006070" height="6" rx="1" width="8" x="30" y="36" />
                        <rect fill="#006070" height="6" rx="1" width="8" x="42" y="36" />
                        <path d="M 62,32 A 16,16 0 0,1 94,32 Z" fill="#a9edff" />
                        <path d="M 78,16 L 78,32" stroke="#006070" strokeWidth="1" />
                        <path d="M 68,22 L 88,22" stroke="#006070" strokeWidth="1" />
                        <line stroke="#ffffff" strokeWidth="2" x1="8" x2="8" y1="47" y2="8" />
                        <line stroke="#48deab" strokeWidth="1.5" x1="4" x2="12" y1="14" y2="14" />
                        <circle cx="8" cy="7" fill="#f5a623" r="2.5" />
                        <rect fill="#ff9933" height="2" width="10" x="58" y="36" />
                        <rect fill="#ffffff" height="2" width="10" x="58" y="38" />
                        <rect fill="#138808" height="2" width="10" x="58" y="40" />
                      </g>
                      <circle cx="340" cy="200" fill="#6afbc6" r="4" />
                      <circle cx="340" cy="200" opacity="0.6" r="9" stroke="#6afbc6" strokeWidth="1">
                        {" "}
                        <animate attributeName="r" dur="3s" repeatCount="indefinite" values="4;14;4" />
                        {" "}
                        <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.8;0;0.8" />
                        {" "}
                      </circle>
                    </svg>
                    <div className="absolute bottom-2.5 right-3 font-label-mono text-[10px] text-white/70 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                      {" SCHIRMACHER OASIS MODEL #71 "}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl p-5 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-mono text-label-mono text-tertiary-fixed font-semibold uppercase tracking-wider">
                      {" Benefit 01 of 03 "}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-5 rounded-full bg-primary-fixed" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                    {" Synchronize Live Antarctic & Arctic Telemetry "}
                  </h3>
                  <p className="mt-2 font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                    {" Bookmark continuous in-situ meteorological streams from Maitri, Bharati, and Himadri stations directly to your personal research dossier with minute-level precision. "}
                  </p>
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/15">
                    <button className="text-white/70 hover:text-white font-label-mono text-label-mono flex items-center gap-1" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_back
                      </span>
                      {" PREV "}
                    </button>
                    <span className="font-label-mono text-label-mono text-white/50">
                      SLIDE NAVIGATION
                    </span>
                    <button className="text-white hover:text-primary-fixed font-label-mono text-label-mono flex items-center gap-1 font-semibold" type="button">
                      {" NEXT "}
                      <span className="material-symbols-outlined text-[16px]">
                        arrow_forward
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/15 text-center">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-tertiary-fixed font-bold">
                      48+
                    </span>
                    <span className="font-label-mono text-[10px] text-white/80 uppercase tracking-wide">
                      Open Datasets
                    </span>
                  </div>
                  <div className="flex flex-col border-x border-white/15">
                    <span className="font-headline-sm text-headline-sm text-primary-fixed font-bold">
                      3 Bases
                    </span>
                    <span className="font-label-mono text-[10px] text-white/80 uppercase tracking-wide">
                      Maitri • Bharati • Himadri
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-tertiary-fixed-dim font-bold">
                      100%
                    </span>
                    <span className="font-label-mono text-[10px] text-white/80 uppercase tracking-wide">
                      MoES Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full bg-surface-container-low py-6 px-6 lg:px-12 my-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    vpn_key
                  </span>
                </div>
                <div>
                  <span className="font-title-md text-title-md font-semibold text-on-surface">
                    Need to recover your Polar credentials?
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Follow our authenticated zero-trust cryo-token recovery protocol below.
                  </p>
                </div>
              </div>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container font-title-md text-body-sm shadow-sm transition-all" href="#reset-flow">
                {" "}
                <span>
                  Jump to Reset Flow
                </span>
                {" "}
                <span className="material-symbols-outlined text-[16px]">
                  south
                </span>
                {" "}
              </a>
            </div>
          </div>
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 flex flex-col items-center" id="reset-flow">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-mono text-label-mono uppercase tracking-widest font-semibold mb-3">
                <span className="material-symbols-outlined text-[14px]">
                  shield
                </span>
                {" Credential Recovery Protocol "}
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                {" Secure Credential Recovery Flow "}
              </h2>
              <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {" Demonstrating the 3-step reset journey with interactive cryptographic password validation and active device revocation. "}
              </p>
            </div>
            <div className="w-full max-w-3xl mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mono text-label-mono text-tertiary font-bold uppercase">
                      Step 01 • Done
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface truncate font-semibold">
                      Identity & Email
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      check
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mono text-label-mono text-tertiary font-bold uppercase">
                      Step 02 • Done
                    </span>
                    <span className="font-title-md text-body-sm text-on-surface truncate font-semibold">
                      6-Digit Cryo-Token
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-primary-container text-on-primary shadow-md">
                  <div className="w-8 h-8 rounded-full bg-on-primary text-primary-container flex items-center justify-center font-title-md font-bold flex-shrink-0">
                    {" 3 "}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mono text-label-mono text-tertiary-fixed font-bold uppercase">
                      Step 03 • Active
                    </span>
                    <span className="font-title-md text-body-sm text-on-primary truncate font-bold">
                      Set New Password
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[560px] bg-surface-container-lowest rounded-2xl shadow-[0_12px_40px_rgba(7,28,54,0.08)] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {" Create New Secure Password "}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      verified_user
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
                      {" Target ID: "}
                      <strong className="text-on-surface">
                        rohan.sen@kvs.edu.in
                      </strong>
                      {" "}
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center text-primary-container flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    password
                  </span>
                </div>
              </div>
              <form className="space-y-6" onSubmit={(e)=>window.__pol(e,"event.preventDefault(); window.__polaris.go(\"/account\")")}>
                {" "}
                {" "}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="newPassword">
                    {" "}
                    <span>
                      New Access Password
                    </span>
                    {" "}
                    <span className="font-label-mono text-label-mono text-tertiary font-bold">
                      Cryo-Grade Level 4
                    </span>
                    {" "}
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface-variant text-[20px]">
                      lock
                    </span>
                    <input className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md tracking-wider focus:outline-none focus:ring-2 focus:ring-primary-container" id="newPassword" type="text" defaultValue="Polar#Maitri2025!" />
                    <button className="absolute right-3 text-on-surface-variant hover:text-on-surface" title="Toggle visibility" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        visibility
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="space-y-2 p-3.5 rounded-xl bg-surface-container-low">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Cryptographic Strength:
                    </span>
                    <span className="font-label-mono text-label-mono text-tertiary font-bold flex items-center gap-1">
                      {" "}
                      <span className="h-2 w-2 rounded-full bg-tertiary" />
                      {" Very Strong (Score: 94/100) "}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 h-2 w-full">
                    <div className="h-full rounded-full bg-tertiary" />
                    <div className="h-full rounded-full bg-tertiary" />
                    <div className="h-full rounded-full bg-tertiary" />
                    <div className="h-full rounded-full bg-tertiary" />
                  </div>
                  <div className="flex justify-between font-label-mono text-[10px] text-on-surface-variant pt-1">
                    <span>
                      Base
                    </span>
                    <span>
                      Entropy Fair
                    </span>
                    <span>
                      Hardened
                    </span>
                    <span className="text-tertiary font-bold">
                      Expedition-Grade
                    </span>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="space-y-2">
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider font-semibold">
                    {" Validation Parameters "}
                  </span>
                  <ul className="space-y-1.5 font-body-sm text-body-sm">
                    <li className="flex items-center gap-2 text-tertiary">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                      {" "}
                      <span>
                        {"Minimum 10 characters "}
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          (16 characters entered)
                        </span>
                      </span>
                      {" "}
                    </li>
                    <li className="flex items-center gap-2 text-tertiary">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                      {" "}
                      <span>
                        Includes uppercase & lowercase letters
                      </span>
                      {" "}
                    </li>
                    <li className="flex items-center gap-2 text-tertiary">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                      {" "}
                      <span>
                        Contains at least one numerical digit (0-9)
                      </span>
                      {" "}
                    </li>
                    <li className="flex items-center gap-2 text-tertiary">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                      {" "}
                      <span>
                        Contains at least one special character (!@#$%^&*)
                      </span>
                      {" "}
                    </li>
                    <li className="flex items-center gap-2 text-tertiary">
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                      {" "}
                      <span>
                        Not previously utilized across past 3 expedition cycles
                      </span>
                      {" "}
                    </li>
                  </ul>
                </div>
                {" "}
                {" "}
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="confirmPassword">
                    {" "}
                    <span>
                      Confirm New Access Password
                    </span>
                    {" "}
                    <span className="font-label-mono text-label-mono text-tertiary flex items-center gap-1 font-semibold">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                      {" Passwords Match "}
                    </span>
                    {" "}
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-tertiary text-[20px]">
                      lock_clock
                    </span>
                    <input className="w-full pl-10 pr-10 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-tertiary" id="confirmPassword" type="password" defaultValue="Polar#Maitri2025!" />
                    <span className="material-symbols-outlined absolute right-3 text-tertiary text-[20px]">
                      check
                    </span>
                  </div>
                </div>
                {" "}
                {" "}
                <div className="p-3.5 rounded-xl bg-surface-container-low">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    {" "}
                    <input defaultChecked="" className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-primary-container border-outline" type="checkbox" />
                    {" "}
                    <div className="flex flex-col">
                      <span className="font-title-md text-body-sm text-on-surface font-semibold">
                        Revoke existing active sessions
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {" Sign out of all other active browser tabs, mobile loggers, and field station tablet devices immediately. "}
                      </span>
                    </div>
                    {" "}
                  </label>
                </div>
                {" "}
                {" "}
                <div className="flex flex-col gap-3 pt-2">
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-title-md text-title-md transition-all duration-200 shadow-md" type="submit">
                    {" "}
                    <span>
                      Update Password & Return to Login
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[20px]">
                      done_all
                    </span>
                    {" "}
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-title-md text-body-sm transition-colors" type="button">
                    {" "}
                    <span>
                      Cancel and Return to Portal Home
                    </span>
                    {" "}
                  </button>
                </div>
                {" "}
              </form>
              <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-center gap-2 text-center text-on-surface-variant font-label-mono text-[10px]">
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  verified
                </span>
                <span>
                  Protected by NCPOR 256-bit SSL & DPDP-compliant identity governance.
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[20px]">
                  ac_unit
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                POLARIS
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Government of India. Spearheading polar research, glacial studies, and Southern Ocean observations.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-label-mono text-label-mono px-2 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container uppercase tracking-wider font-semibold">
                Autonomous R&D Institute
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md font-semibold text-on-surface">
              Scientific Divisions
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                  Antarctic Cryosphere & Climate
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                  Arctic Environment & Svalbard Basin
                </a>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/graph">
                  Southern Ocean Hydrography
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                  Himalayan Cryosphere Observatory
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                  Polar Deep-Sea Coring Facility
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md font-semibold text-on-surface">
              Permanent Stations Status
            </span>
            <div className="flex flex-col gap-3 font-body-sm text-body-sm">
              <div className="p-2.5 rounded-lg bg-surface flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-on-surface">
                    Maitri Station
                  </span>
                  <span className="inline-flex items-center gap-1 font-label-mono text-label-mono text-tertiary">
                    <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Schirmacher Oasis, Antarctica
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-on-surface">
                    Bharati Station
                  </span>
                  <span className="inline-flex items-center gap-1 font-label-mono text-label-mono text-tertiary">
                    <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Larsemann Hills, Antarctica
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-on-surface">
                    Himadri Station
                  </span>
                  <span className="inline-flex items-center gap-1 font-label-mono text-label-mono text-tertiary">
                    <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
                    ONLINE
                  </span>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Ny-Ålesund, Svalbard, Arctic
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md font-semibold text-on-surface">
              Outreach & Compliance
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" to="/data">
                  Public Data Policy & Open Access
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                  Student Fellowship & Winter Schools
                </a>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                  Expedition Safety & Environmental Protocols
                </Link>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                  Right to Information (RTI)
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                  Terms of Use & Disclaimers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-surface-container py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
            <p>
              © 2025 National Centre for Polar and Ocean Research, Ministry of Earth Sciences, Govt. of India. All rights reserved.
            </p>
            <div className="flex items-center gap-4 font-label-mono text-label-mono">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-tertiary-fixed-dim" />
                National Science Portal
              </span>
              <span>
                Version 4.2.0-POL
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
