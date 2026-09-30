import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_admin_dashboard_admin/code.html
const BODY_CLASS = "bg-surface-container-low font-body-md text-on-surface antialiased min-h-screen";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "";

// Sample dataset for Priority Review Queue items
const INITIAL_REVIEW_ITEMS = [
  {
    id: 1,
    category: 'ATMOSPHERIC',
    categoryClass: 'bg-surface-container-highest text-primary',
    type: 'Datasets',
    title: 'NCPOR-TR-2024-11: Katabatic Boundary Layer',
    submitter: 'Dr. R. Verma • 1.4 GB NetCDF4',
    station: 'Maitri Base',
    submitted: '18h ago',
    slaText: '02h 18m',
    slaIcon: 'timer',
    slaClass: 'bg-error-container text-on-error-container font-bold'
  },
  {
    id: 2,
    category: 'OCEANOGRAPHY',
    categoryClass: 'bg-secondary-container/70 text-on-secondary-container',
    type: 'Datasets',
    title: 'IndARC Fjord Salinity Sensor CTD 2024',
    submitter: 'P. Nambiar • 412 MB Sensor Logs',
    station: 'Himadri (Kongsfjorden)',
    submitted: '26h ago',
    slaText: '09h 45m',
    slaIcon: 'alarm',
    slaClass: 'bg-secondary-container text-on-secondary-container font-semibold'
  },
  {
    id: 3,
    category: 'MEMOIR',
    categoryClass: 'bg-surface-container-highest text-primary',
    type: 'Stories',
    title: 'Overwintering Moraine Flora Survival',
    submitter: 'Dr. Suniti Sharma • 8 Photo Plates + TXT',
    station: 'Bharati Station',
    submitted: '1d ago',
    slaText: '18h 20m',
    slaIcon: 'alarm',
    slaClass: 'bg-secondary-container text-on-secondary-container font-semibold'
  },
  {
    id: 4,
    category: 'GLACIOLOGY',
    categoryClass: 'bg-surface-container-highest text-primary',
    type: 'Reports',
    title: 'Cryosphere Coring Log Batch #09',
    submitter: 'Glaciology Team • 92 MB CSV/Spectral',
    station: 'Himansh (Spiti)',
    submitted: '2d ago',
    slaText: '32h 10m',
    slaIcon: 'alarm_on',
    slaClass: 'bg-surface-container text-on-surface-variant'
  },
  {
    id: 5,
    category: 'ECOLOGY',
    categoryClass: 'bg-surface-container-highest text-primary',
    type: 'Reports',
    title: 'Polar Wildlife Census 2024-Q1 (Adélie)',
    submitter: 'Bio-Team • Drone Orthomosaics',
    station: 'Schirmacher Oasis',
    submitted: '2d ago',
    slaText: '44h 00m',
    slaIcon: 'alarm_on',
    slaClass: 'bg-surface-container text-on-surface-variant'
  }
];

export default function AdminDashboardPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  const location = useLocation();

  // State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedLayer, setSelectedLayer] = useState('Stations');
  const [queueItems, setQueueItems] = useState(INITIAL_REVIEW_ITEMS);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Filter queue items based on selected tab and search query
  const filteredQueueItems = queueItems.filter((item) => {
    const matchesFilter = activeFilter === 'All' || item.type === activeFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.submitter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.station.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Action handlers
  const handleSignOut = (e) => {
    e.preventDefault();
    if (window.__polaris && typeof window.__polaris.logout === 'function') {
      window.__polaris.logout();
    } else {
      console.warn('Polaris logout handler not available.');
    }
  };

  const handleQuickApprove = (id) => {
    setQueueItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleMoreOptions = (id, e) => {
    e.stopPropagation();
    setActiveMenuId((prev) => (prev === id ? null : id));
  };

  const handleApproveNext = () => {
    if (queueItems.length > 0) {
      setQueueItems((prev) => prev.slice(1));
    }
  };

  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 bottom-0 w-60 bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col justify-between select-none overflow-y-auto">
        <div className="flex flex-col">
          <div className="px-space-md py-space-md border-b border-outline-variant/20">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  ac_unit
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-primary font-bold tracking-tight leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest mt-0.5">
                  Admin System
                </span>
              </div>
            </div>
            <div className="mt-space-sm flex items-center justify-between">
              <span className="font-label-mono text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">
                MoES Portal v4.2
              </span>
              <span className="w-2 h-2 rounded-full bg-tertiary" title="Operational Node" />
            </div>
          </div>
          <div className="px-space-md py-space-sm bg-surface-container-low/70 border-b border-outline-variant/20">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[16px]">
                verified_user
              </span>
              <div className="flex flex-col overflow-hidden">
                <span className="font-label-md text-label-md text-on-surface truncate">
                  Dr. Ananya Sen
                </span>
                <span className="font-label-mono text-label-mono text-secondary truncate">
                  Admin (Tier A)
                </span>
              </div>
            </div>
          </div>
          <nav className="flex flex-col py-space-xs px-space-xs gap-0.5" data-active-classes="bg-secondary-container/40 text-primary font-semibold border-l-2 border-primary">
            {[
              { path: '/admin', label: 'Dashboard', icon: 'dashboard', dataPath: 'dashboard' },
              { path: '/admin/expeditions', label: 'Expedition Manager', icon: 'explore', dataPath: 'expedition-manager' },
              { path: '/admin/upload', label: 'Upload & Datasets', icon: 'database', dataPath: 'upload-and-datasets' },
              { path: '/admin/ai-queue', label: 'AI Processing & OCR', icon: 'document_scanner', dataPath: 'ai-processing-and-ocr' },
              { path: '/admin/studio', label: 'Content Studio', icon: 'edit_note', dataPath: 'content-studio' },
              { path: '/admin/review', label: 'Review Queue', icon: 'rate_review', dataPath: 'review-queue', badge: queueItems.length },
              { path: '/admin/publishing', label: 'Publishing & Releases', icon: 'public', dataPath: 'publishing-and-releases' },
              { path: '/admin/rights', label: 'Rights & Licenses', icon: 'policy', dataPath: 'rights-and-licenses' },
              { path: '/admin/integrations', label: 'Integrations (NPDC)', icon: 'hub', dataPath: 'integrations' },
              { path: '/admin/analytics', label: 'Analytics & Telemetry', icon: 'insights', dataPath: 'analytics-and-telemetry' },
              { path: '/admin/users', label: 'Users & Access', icon: 'manage_accounts', dataPath: 'users-and-access' },
              { path: '/admin/audit-logs', label: 'Audit Logs', icon: 'receipt_long', dataPath: 'audit-logs' },
            ].map((navItem) => {
              const isActive = location.pathname === navItem.path;
              return (
                <Link
                  key={navItem.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between px-space-sm py-2 rounded transition-colors ${
                    isActive
                      ? 'bg-secondary-container/40 text-primary font-semibold border-l-2 border-primary'
                      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-body-sm text-body-sm'
                  }`}
                  data-path={navItem.dataPath}
                  to={navItem.path}
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      {navItem.icon}
                    </span>
                    <span>{navItem.label}</span>
                  </div>
                  {navItem.badge !== undefined && (
                    <span className="font-label-mono text-[10px] px-1.5 py-0.5 rounded-full bg-error-container text-on-error-container font-bold">
                      {navItem.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="p-space-sm border-t border-outline-variant/20 flex flex-col gap-space-xs bg-surface-container-lowest">
          <div className="p-2 rounded bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-mono text-[10px] text-on-surface-variant font-medium">
                NKN Node 04: Synced
              </span>
            </div>
            <span className="font-label-mono text-[10px] text-secondary font-bold">
              24ms
            </span>
          </div>
          <div className="flex items-center justify-between px-1">
            <Link className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1" to="/admin/profile">
              <span className="material-symbols-outlined text-[14px]">
                help
              </span>
              <span>
                Help & Docs
              </span>
            </Link>
            <a className="font-label-md text-label-md text-secondary hover:text-error transition-colors flex items-center gap-1 cursor-pointer" href="#" onClick={handleSignOut}>
              <span className="material-symbols-outlined text-[14px]">
                logout
              </span>
              <span>
                Sign Out
              </span>
            </a>
          </div>
        </div>
      </aside>
      <div className="pl-60 flex flex-col min-h-screen">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 z-40 px-space-md flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-space-md flex-1 max-w-xl">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input
                className="w-full pl-9 pr-14 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant/40 text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Search expeditions, datasets, DOIs..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-container-highest/60 text-on-surface-variant font-label-mono text-[10px] border border-outline-variant/30 pointer-events-none">
                ⌘K
              </kbd>
            </div>
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[15px]">
                sensors
              </span>
              <span className="font-label-mono text-[11px] text-on-surface-variant">
                <strong className="text-on-surface">
                  Maitri:
                </strong>
                {" -18.4°C "}
                <span className="text-outline-variant mx-1">
                  •
                </span>
                {" "}
                <strong className="text-on-surface">
                  Himadri:
                </strong>
                {" -6.8°C"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="relative p-2 rounded-full text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors cursor-pointer" type="button" aria-label="Notifications">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
            </button>
            <div className="h-4 w-px bg-outline-variant/40 mx-1" />
            <span className="font-label-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded bg-secondary-container text-on-secondary-container font-bold">
              ADMIN (SUPERVISORY)
            </span>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1.5 pl-1 cursor-pointer group focus:outline-none"
                onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-primary/20">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">
                    person
                  </span>
                </div>
                <span className="material-symbols-outlined text-secondary text-[16px] group-hover:text-primary transition-colors">
                  expand_more
                </span>
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-outline-variant/30 rounded-lg shadow-lg py-1 z-50">
                  <Link
                    to="/admin/profile"
                    className="block px-4 py-2 text-body-sm text-on-surface hover:bg-surface-container-low"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Profile Settings
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-body-sm text-error hover:bg-surface-container-low"
                    onClick={(e) => {
                      setIsProfileDropdownOpen(false);
                      handleSignOut(e);
                    }}
                  >
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="relative pt-16 flex-1 w-full bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto p-space-xl">
            <div className="flex flex-col w-full">
              <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
                <div className="flex flex-col max-w-3xl">
                  <div className="flex items-center gap-space-xs mb-1.5">
                    <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-tertiary" />
                    <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary font-semibold">
                      {" MoES Scientific Command Console • NCPOR Node 01 "}
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-light">
                    {" Operational Command & Content Oversight "}
                  </h1>
                  <p className="font-body-md text-body-md text-secondary mt-1">
                    {" Unified administration dashboard for NCPOR polar field telemetry, peer review queues, and MoES open data dissemination. "}
                  </p>
                  <div className="mt-space-sm flex flex-wrap items-center gap-x-space-sm gap-y-1 font-label-mono text-label-mono text-on-surface-variant">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-medium">
                      {" Active Session: Dr. Ananya Sen (NCPOR Admin / Scientist-F) "}
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span className="px-2 py-0.5 rounded bg-secondary-container/60 text-on-secondary-container font-semibold">
                      {" Permissions: Tier A Full Oversight "}
                    </span>
                    <span className="text-outline-variant">
                      •
                    </span>
                    <span className="text-tertiary flex items-center gap-1 font-semibold">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        encrypted
                      </span>
                      {" NIC Clearance Level 4 "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-space-xs self-start lg:self-end">
                  <Link to="/admin/upload" className="group flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high transition-all shadow-sm font-label-md text-label-md font-semibold cursor-pointer">
                    {" "}
                    <span className="material-symbols-outlined text-[17px] text-primary group-hover:scale-110 transition-transform">
                      cloud_upload
                    </span>
                    {" "}
                    <span>
                      Upload Data
                    </span>
                    {" "}
                  </Link>
                  <Link to="/admin/expeditions" className="group flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high transition-all shadow-sm font-label-md text-label-md font-semibold cursor-pointer">
                    {" "}
                    <span className="material-symbols-outlined text-[17px] text-primary group-hover:rotate-45 transition-transform">
                      add_location_alt
                    </span>
                    {" "}
                    <span>
                      Add Expedition
                    </span>
                    {" "}
                  </Link>
                  <Link to="/admin/studio" className="group flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high transition-all shadow-sm font-label-md text-label-md font-semibold cursor-pointer">
                    {" "}
                    <span className="material-symbols-outlined text-[17px] text-tertiary-container group-hover:rotate-12 transition-transform">
                      auto_awesome
                    </span>
                    {" "}
                    <span>
                      New AI Draft
                    </span>
                    {" "}
                  </Link>
                  <button onClick={handleApproveNext} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all shadow-sm font-label-md text-label-md font-semibold cursor-pointer" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      verified
                    </span>
                    {" "}
                    <span>
                      Approve Next
                    </span>
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                    {" "}
                  </button>
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
                <Link className="group block p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container-lowest/90 transition-all shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden" data-path="upload-and-datasets" to="/admin/upload">
                  {" "}
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                      Pending Uploads
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-secondary-container/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">
                        database
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-display-hero text-[38px] leading-[44px] text-on-surface font-light">
                      14
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      batches
                    </span>
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    6 raw NetCDF datasets, 8 logbooks
                  </p>
                  {" "}
                  <div className="mt-3 pt-2.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container font-label-mono text-[10px] text-on-surface-variant font-medium">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {" +3 from yesterday "}
                    </span>
                    <span className="font-label-mono text-[11px] text-primary group-hover:translate-x-1 transition-transform flex items-center font-semibold">
                      {" Review → "}
                    </span>
                  </div>
                  {" "}
                </Link>
                <Link className="group block p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container-lowest/90 transition-all shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden" data-path="review-queue" to="/admin/review">
                  {" "}
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                      Awaiting Review
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-error-container/40 flex items-center justify-center text-error group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">
                        fact_check
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-display-hero text-[38px] leading-[44px] text-on-surface font-light">
                      {queueItems.length}
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      submissions
                    </span>
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    5 research reports, 3 field dispatches
                  </p>
                  {" "}
                  <div className="mt-3 pt-2.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-mono text-[10px] font-bold">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />
                      {" 2 near SLA breach (≤ 4h) "}
                    </span>
                    <span className="font-label-mono text-[11px] text-primary group-hover:translate-x-1 transition-transform flex items-center font-semibold">
                      {" Queue → "}
                    </span>
                  </div>
                  {" "}
                </Link>
                <Link className="group block p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container-lowest/90 transition-all shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden" data-path="publishing-and-releases" to="/admin/publishing">
                  {" "}
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                      Published this Week
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-secondary-container/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">
                        public
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-display-hero text-[38px] leading-[44px] text-on-surface font-light">
                      27
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      releases
                    </span>
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    19 open datasets, 8 educational packs
                  </p>
                  {" "}
                  <div className="mt-3 pt-2.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-mono text-[10px] font-semibold">
                      {" ↑ 18% vs last week "}
                    </span>
                    <span className="font-label-mono text-[11px] text-primary group-hover:translate-x-1 transition-transform flex items-center font-semibold">
                      {" Catalog → "}
                    </span>
                  </div>
                  {" "}
                </Link>
                <Link className="group block p-space-lg rounded-2xl bg-surface-container-lowest hover:bg-surface-container-lowest/90 transition-all shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden" data-path="expedition-manager" to="/admin/expeditions">
                  {" "}
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                      Live Expeditions
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-tertiary-container/15 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[18px]">
                        explore
                      </span>
                    </div>
                  </div>
                  {" "}
                  <div className="mt-space-sm flex items-baseline gap-2">
                    <span className="font-display-hero text-[38px] leading-[44px] text-on-surface font-light">
                      3
                    </span>
                    <span className="font-headline-sm text-headline-sm text-tertiary font-semibold">
                      Active
                    </span>
                  </div>
                  {" "}
                  <p className="font-body-sm text-body-sm text-secondary mt-1 truncate">
                    43rd IAE, 17th Arctic, SOE-01
                  </p>
                  {" "}
                  <div className="mt-3 pt-2.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-mono text-[10px] font-semibold">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                      {" Telemetry 99.8% normal "}
                    </span>
                    <span className="font-label-mono text-[11px] text-primary group-hover:translate-x-1 transition-transform flex items-center font-semibold">
                      {" Track → "}
                    </span>
                  </div>
                  {" "}
                </Link>
              </section>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-7 flex flex-col gap-space-xl">
                  <section className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                            {" Priority Review Queue "}
                          </h2>
                          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-bold">
                            {` ${queueItems.length} Pending MoES Validation `}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary mt-0.5">
                          {" Strict peer-review SLA adherence required for international Arctic/Antarctic data exchange. "}
                        </span>
                      </div>
                      <div className="flex items-center p-1 rounded-xl bg-surface-container-low text-secondary text-[11px] font-label-mono font-medium self-start sm:self-center">
                        {['All', 'Datasets', 'Reports', 'Stories'].map((filter) => {
                          const isSelected = activeFilter === filter;
                          const count = filter === 'All' ? queueItems.length : queueItems.filter((i) => i.type === filter).length;
                          return (
                            <button
                              key={filter}
                              onClick={() => setActiveFilter(filter)}
                              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-surface-container-lowest text-primary font-semibold shadow-sm'
                                  : 'hover:text-on-surface'
                              }`}
                              type="button"
                            >
                              {filter === 'All' ? `All (${count})` : filter}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="overflow-x-auto w-full -mx-space-lg px-space-lg">
                      <table className="w-full text-left font-body-sm text-body-sm">
                        <thead>
                          <tr className="bg-surface-container-low/60 text-secondary font-label-mono text-[11px] uppercase tracking-wider">
                            <th className="py-2.5 px-3 rounded-l-lg font-medium">
                              Item & Submitter
                            </th>
                            <th className="py-2.5 px-3 font-medium">
                              Station / Origin
                            </th>
                            <th className="py-2.5 px-3 font-medium">
                              Submitted
                            </th>
                            <th className="py-2.5 px-3 font-medium">
                              SLA Countdown
                            </th>
                            <th className="py-2.5 px-3 rounded-r-lg font-medium text-right">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-on-surface">
                          {filteredQueueItems.length === 0 ? (
                            <tr>
                              <td colSpan="5" className="py-6 text-center text-secondary font-body-sm">
                                No items found matching the selected criteria.
                              </td>
                            </tr>
                          ) : (
                            filteredQueueItems.map((item) => (
                              <tr key={item.id} className="hover:bg-surface-container-low/40 transition-colors">
                                <td className="py-3 px-3">
                                  {" "}
                                  <div className="flex flex-col max-w-xs">
                                    <div className="flex items-center gap-1.5">
                                      <span className={`px-1.5 py-0.5 rounded font-label-mono text-[10px] font-semibold ${item.categoryClass}`}>
                                        {item.category}
                                      </span>
                                      <span className="font-title-md text-title-md font-medium text-on-surface truncate">
                                        {item.title}
                                      </span>
                                    </div>
                                    <span className="font-body-sm text-body-sm text-secondary truncate mt-0.5">
                                      {item.submitter}
                                    </span>
                                  </div>
                                  {" "}
                                </td>
                                <td className="py-3 px-3 whitespace-nowrap">
                                  {" "}
                                  <span className="inline-flex items-center gap-1 font-label-mono text-label-mono text-secondary">
                                    {" "}
                                    <span className="material-symbols-outlined text-[14px] text-primary">
                                      navigation
                                    </span>
                                    {` ${item.station} `}
                                  </span>
                                  {" "}
                                </td>
                                <td className="py-3 px-3 whitespace-nowrap font-label-mono text-label-mono text-secondary">
                                  {` ${item.submitted} `}
                                </td>
                                <td className="py-3 px-3 whitespace-nowrap">
                                  {" "}
                                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-mono text-[11px] ${item.slaClass}`}>
                                    {" "}
                                    <span className="material-symbols-outlined text-[13px]">
                                      {item.slaIcon}
                                    </span>
                                    {` ${item.slaText} `}
                                  </span>
                                  {" "}
                                </td>
                                <td className="py-3 px-3 text-right whitespace-nowrap relative">
                                  {" "}
                                  <div className="flex items-center justify-end gap-1">
                                    <Link
                                      to="/admin/review"
                                      className="px-2.5 py-1 rounded bg-primary-container text-on-primary font-label-md text-[11px] font-semibold hover:bg-primary transition-colors cursor-pointer"
                                    >
                                      {" Review & Sign "}
                                    </Link>
                                    <button
                                      onClick={() => handleQuickApprove(item.id)}
                                      className="p-1 rounded text-tertiary hover:bg-surface-container-low transition-colors cursor-pointer"
                                      title="Quick Approve"
                                      type="button"
                                    >
                                      {" "}
                                      <span className="material-symbols-outlined text-[18px]">
                                        check_circle
                                      </span>
                                      {" "}
                                    </button>
                                    <button
                                      onClick={(e) => toggleMoreOptions(item.id, e)}
                                      className="p-1 rounded text-secondary hover:bg-surface-container-low transition-colors cursor-pointer"
                                      title="More options"
                                      type="button"
                                    >
                                      {" "}
                                      <span className="material-symbols-outlined text-[18px]">
                                        more_vert
                                      </span>
                                      {" "}
                                    </button>
                                  </div>
                                  {activeMenuId === item.id && (
                                    <div className="absolute right-3 top-10 bg-surface-container-lowest border border-outline-variant/30 rounded shadow-md z-50 text-left py-1 w-32">
                                      <button
                                        onClick={() => {
                                          setActiveMenuId(null);
                                          handleQuickApprove(item.id);
                                        }}
                                        className="w-full text-left px-3 py-1 text-[11px] text-on-surface hover:bg-surface-container-low"
                                      >
                                        Approve
                                      </button>
                                      <button
                                        onClick={() => {
                                          setActiveMenuId(null);
                                        }}
                                        className="w-full text-left px-3 py-1 text-[11px] text-error hover:bg-surface-container-low"
                                      >
                                        Reject
                                      </button>
                                    </div>
                                  )}
                                  {" "}
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-space-md pt-3 flex flex-col sm:flex-row items-center justify-between gap-space-xs font-label-mono text-label-mono text-secondary">
                      <span>
                        {`Showing ${filteredQueueItems.length} of ${queueItems.length} items awaiting scientific accreditation`}
                      </span>
                      <Link className="text-primary hover:underline flex items-center gap-1 font-semibold" data-path="review-queue" to="/admin/review">
                        {" "}
                        <span>
                          View Complete Queue
                        </span>
                        {" "}
                        <span>
                          →
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </section>
                  <section className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
                    <div className="flex items-center justify-between pb-space-md">
                      <div className="flex flex-col">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                          {" Portal Dissemination & Telemetry Ingestion "}
                        </h2>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {" Continuous live throughput across Indian National Knowledge Network (NKN) gateway. "}
                        </span>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container/50 text-primary font-label-mono text-[11px] font-semibold">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                        {" Telemetry Ingestion: Nominal "}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-xs">
                      <div className="p-space-md rounded-xl bg-surface-container-low/70 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="font-label-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
                              {" Public Data Downloads (Past 14 Days) "}
                            </span>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="font-headline-md text-headline-md text-on-surface font-normal">
                                14,890
                              </span>
                              <span className="font-label-mono text-[11px] text-tertiary font-semibold">
                                ↑ 22.4% MoES
                              </span>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-secondary font-label-mono text-[10px]">
                            {" Peak: 1,420 DL/day "}
                          </span>
                        </div>
                        <div className="mt-4 w-full h-24 relative">
                          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 80">
                            <defs>
                              <linearGradient id="downloadGradient" x1="0" x2="0" y1="0" y2="1">
                                {" "}
                                <stop offset="0%" stopColor="#006070" stopOpacity="0.28" />
                                {" "}
                                <stop offset="100%" stopColor="#006070" stopOpacity="0.0" />
                                {" "}
                              </linearGradient>
                            </defs>
                            <path d="M0,65 Q25,60 50,52 T100,58 T150,35 T200,42 T250,18 T300,10 L300,80 L0,80 Z" fill="url(#downloadGradient)" />
                            <path d="M0,65 Q25,60 50,52 T100,58 T150,35 T200,42 T250,18 T300,10" fill="none" stroke="#006070" strokeLinecap="round" strokeWidth="2.5" />
                            <circle cx="300" cy="10" fill="#006070" r="3.5" />
                            <circle cx="250" cy="18" fill="#1f7a8c" r="3" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-label-mono text-secondary mt-1">
                          <span>
                            Nov 01
                          </span>
                          <span>
                            Nov 08
                          </span>
                          <span>
                            Today (Nov 15)
                          </span>
                        </div>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-low/70 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="font-label-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
                              {" Telemetry Influx (Maitri & Himadri) "}
                            </span>
                            <div className="flex items-baseline gap-2 mt-1">
                              <span className="font-headline-md text-headline-md text-on-surface font-normal">
                                98.4
                              </span>
                              <span className="font-label-mono text-[11px] text-secondary font-semibold">
                                kPak/hr
                              </span>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-tertiary font-label-mono text-[10px] font-semibold flex items-center gap-1">
                            {" "}
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping" />
                            {" Live Feed "}
                          </span>
                        </div>
                        <div className="mt-4 w-full h-24 flex items-end gap-1 px-1">
                          <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[45%]" />
                          <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[60%]" />
                          <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[52%]" />
                          <div className="flex-1 bg-surface-container-highest rounded-t-sm h-[70%]" />
                          <div className="flex-1 bg-secondary-container rounded-t-sm h-[65%]" />
                          <div className="flex-1 bg-secondary-container rounded-t-sm h-[82%]" />
                          <div className="flex-1 bg-secondary-container rounded-t-sm h-[75%]" />
                          <div className="flex-1 bg-primary-fixed-dim rounded-t-sm h-[88%]" />
                          <div className="flex-1 bg-primary rounded-t-sm h-[94%]" />
                          <div className="flex-1 bg-primary rounded-t-sm h-[85%]" />
                          <div className="flex-1 bg-primary-container rounded-t-sm h-[92%] animate-pulse" />
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-label-mono text-secondary mt-1">
                          <span>
                            06:00 UTC
                          </span>
                          <span>
                            12:00 UTC
                          </span>
                          <span>
                            Current: 98.4k
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-xl">
                  <section className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
                    <div className="flex items-center justify-between pb-space-sm">
                      <div className="flex flex-col">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                          {" Live Geospatial Telemetry "}
                        </h2>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {" Circumpolar ground stations & RV fleet positioning "}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-bold">
                        {" 3 ACTIVE BEACONS "}
                      </span>
                    </div>
                    <div className="w-full flex justify-center py-2">
                      <div className="relative w-full max-w-[420px] h-[300px] rounded-xl overflow-hidden shadow-inner flex flex-col justify-between p-3 select-none" id="polaris-globe-mini-dashboard" style={{"background": "radial-gradient(circle at 50% 50%, #0a2540 0%, #051426 100%)"}}>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 420 300">
                          <circle cx="210" cy="150" fill="none" r="130" stroke="#83d2e6" strokeDasharray="2 4" strokeWidth="0.7" />
                          <circle cx="210" cy="150" fill="none" r="95" stroke="#83d2e6" strokeWidth="0.8" />
                          <circle cx="210" cy="150" fill="none" r="60" stroke="#83d2e6" strokeDasharray="3 3" strokeWidth="0.6" />
                          <circle cx="210" cy="150" fill="none" r="25" stroke="#83d2e6" strokeWidth="0.6" />
                          <line stroke="#83d2e6" strokeDasharray="3 3" strokeWidth="0.5" x1="210" x2="210" y1="0" y2="300" />
                          <line stroke="#83d2e6" strokeDasharray="3 3" strokeWidth="0.5" x1="0" x2="420" y1="150" y2="150" />
                          <path d="M160,110 Q210,90 260,115 Q270,160 250,195 Q205,215 165,185 Q145,150 160,110 Z" fill="#1f314d" fillOpacity="0.3" stroke="#83d2e6" strokeWidth="0.8" />
                          <path d="M190,40 Q220,35 240,55 Q230,75 200,70 Z" fill="#1f314d" fillOpacity="0.3" stroke="#83d2e6" strokeWidth="0.8" />
                        </svg>
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md border-0 text-primary-fixed font-label-mono text-[10px] font-semibold">
                            <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />
                            <span>
                              LIVE TELEMETRY: 3 PINS
                            </span>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-lowest/10 backdrop-blur-md text-on-primary-container font-label-mono text-[9px]">
                            <span className="material-symbols-outlined text-[12px] text-tertiary-fixed">
                              satellite_alt
                            </span>
                            <span>
                              INSAT-3DR Uplink Online
                            </span>
                          </div>
                        </div>
                        {(selectedLayer === 'Stations' || selectedLayer === 'Weather') && (
                          <div className="absolute left-[38%] top-[62%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
                            <div className="relative flex items-center justify-center">
                              <span className="absolute w-6 h-6 rounded-full bg-tertiary/40 animate-ping" />
                              <span className="w-3 h-3 rounded-full bg-tertiary-fixed shadow-sm" />
                            </div>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-inverse-surface/90 text-inverse-on-surface backdrop-blur-md font-label-mono text-[10px] whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                              <div className="font-bold text-tertiary-fixed">
                                43rd IAE • Maitri
                              </div>
                              <div className="text-[9px] text-surface-dim">
                                70°45'S, 11°44'E • -18.4°C
                              </div>
                            </div>
                          </div>
                        )}
                        {(selectedLayer === 'Stations' || selectedLayer === 'Weather') && (
                          <div className="absolute left-[54%] top-[22%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
                            <div className="relative flex items-center justify-center">
                              <span className="absolute w-6 h-6 rounded-full bg-primary-fixed/40 animate-ping" />
                              <span className="w-3 h-3 rounded-full bg-primary-fixed shadow-sm" />
                            </div>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-inverse-surface/90 text-inverse-on-surface backdrop-blur-md font-label-mono text-[10px] whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                              <div className="font-bold text-primary-fixed">
                                17th Arctic • Himadri
                              </div>
                              <div className="text-[9px] text-surface-dim">
                                78°55'N, 11°56'E • -6.8°C
                              </div>
                            </div>
                          </div>
                        )}
                        {(selectedLayer === 'Vessels' || selectedLayer === 'Stations') && (
                          <div className="absolute left-[70%] top-[72%] -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer">
                            <div className="relative flex items-center justify-center">
                              <span className="absolute w-5 h-5 rounded-full bg-secondary-fixed/50 animate-pulse" />
                              <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed shadow-sm" />
                            </div>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-inverse-surface/90 text-inverse-on-surface backdrop-blur-md font-label-mono text-[10px] whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                              <div className="font-bold text-secondary-fixed">
                                SOE-01 • RV Bharati
                              </div>
                              <div className="text-[9px] text-surface-dim">
                                Course 142° • In Transit 11.2 kn
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="relative z-10 flex items-center justify-between text-on-primary-container font-label-mono text-[10px] pt-1 border-0">
                          <span className="opacity-80">
                            NCPOR Polar Radar v4.2
                          </span>
                          <span className="text-tertiary-fixed font-semibold">
                            Carrier Synced: 24ms
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-sm pt-space-xs flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1 font-label-mono text-[11px]">
                        <span className="text-secondary mr-1 font-medium">
                          Layers:
                        </span>
                        {['Stations', 'Vessels', 'Weather'].map((layer) => {
                          const isSelected = selectedLayer === layer;
                          return (
                            <button
                              key={layer}
                              onClick={() => setSelectedLayer(layer)}
                              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-surface-container text-primary font-semibold'
                                  : 'bg-surface-container-low text-secondary hover:text-on-surface'
                              }`}
                              type="button"
                            >
                              {layer}
                            </button>
                          );
                        })}
                      </div>
                      <Link className="text-primary hover:underline font-label-mono text-label-mono font-semibold flex items-center gap-1" data-path="expedition-manager" to="/admin/expeditions">
                        {" "}
                        <span>
                          Full Expedition Map View
                        </span>
                        {" "}
                        <span>
                          →
                        </span>
                        {" "}
                      </Link>
                    </div>
                  </section>
                  <section className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
                    <div className="flex items-center justify-between pb-space-sm">
                      <div className="flex flex-col">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-normal">
                          {" Audit & Operational Activity "}
                        </h2>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {" Real-time audit log of system events, OCR batching, and sign-offs. "}
                        </span>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-tertiary" title="Real-time Webhook Active" />
                    </div>
                    <div className="flex flex-col gap-space-md pt-space-sm">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[17px]">
                            document_scanner
                          </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                            {" "}
                            <strong className="font-semibold text-primary">
                              AI Auto-OCR completed
                            </strong>
                            {" for 1989 Maitri Station Log ("}
                            <span className="font-label-mono text-[11px]">
                              NCPOR-ARC-014
                            </span>
                            {"). "}
                          </p>
                          <div className="flex items-center gap-2 mt-1 font-label-mono text-[10px] text-secondary">
                            <span>
                              12 mins ago
                            </span>
                            <span>
                              •
                            </span>
                            <span className="text-tertiary font-medium">
                              POLARIS AI Engine
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-tertiary-container/15 text-tertiary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[17px]">
                            verified_user
                          </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                            {" Dataset "}
                            <strong className="font-semibold font-label-mono text-[12px] text-on-surface">
                              NPDC-ANT-2024-ATM-042
                            </strong>
                            {" approved by Dr. S. K. Ramanathan. "}
                          </p>
                          <div className="flex items-center gap-2 mt-1 font-label-mono text-[10px] text-secondary">
                            <span>
                              45 mins ago
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              Scientist-G Peer Clearance
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-secondary-container/60 text-on-secondary-container flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[17px]">
                            badge
                          </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                            {" User role upgraded: "}
                            <strong className="font-semibold text-on-surface">
                              R. Sen
                            </strong>
                            {" elevated to Contributor (Level 3). "}
                          </p>
                          <div className="flex items-center gap-2 mt-1 font-label-mono text-[10px] text-secondary">
                            <span>
                              2 hours ago
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              By System Admin (Dr. Sen)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[17px]">
                            sensors
                          </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                            {" Himadri Weather Station sensor recalibration packet logged. "}
                          </p>
                          <div className="flex items-center gap-2 mt-1 font-label-mono text-[10px] text-secondary">
                            <span>
                              4 hours ago
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              Via Ka-Band Satellite Link
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[17px]">
                            post_add
                          </span>
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                            {" New Expedition proposal draft created: "}
                            <strong className="font-semibold text-on-surface">
                              SOE-02 Winter Drift
                            </strong>
                            {". "}
                          </p>
                          <div className="flex items-center gap-2 mt-1 font-label-mono text-[10px] text-secondary">
                            <span>
                              6 hours ago
                            </span>
                            <span>
                              •
                            </span>
                            <span>
                              By Polar Ops Command
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-md pt-3 flex items-center justify-between">
                      <Link className="text-primary hover:underline font-label-mono text-label-mono font-semibold flex items-center gap-1" data-path="audit-logs" to="/admin/audit-logs">
                        {" "}
                        <span>
                          View Full Audit Trail (2,410 events)
                        </span>
                        {" "}
                        <span>
                          →
                        </span>
                        {" "}
                      </Link>
                      <span className="font-label-mono text-[10px] text-secondary">
                        SHA-256 Verified
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-md px-space-xl">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">
                security
              </span>
              <div className="flex flex-col">
                <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                  National Centre for Polar and Ocean Research (NCPOR)
                </span>
                <span className="font-label-mono text-[10px] text-secondary">
                  Ministry of Earth Sciences (MoES), Government of India • Official Scientific Repository
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-md font-label-mono text-label-mono text-secondary">
              <span>
                Security Clearance: Level 4
              </span>
              <span className="text-outline-variant">
                •
              </span>
              <span>
                NIC Certified Data Pipeline
              </span>
              <span className="text-outline-variant">
                •
              </span>
              <span>
                POLARIS Engine v4.2.1-prod
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}