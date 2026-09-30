import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

const BODY_CLASS = "bg-[#EEF2F6] text-polar-text font-inter antialiased min-h-screen";
const HTML_CLASS = "";
const PAGE_CSS = `.font-merriweather { font-family: 'Merriweather', serif; }
    .font-inter { font-family: 'Inter', sans-serif; }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #F1F5F9;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 3px;
    }
    /* Tab pill active transitions */
    .view-frame {
      display: none;
    }
    .view-frame.active {
      display: block;
    }
    /* Radar rings for globe slot */
    .radar-grid {
      background-image: 
        radial-gradient(circle at center, rgba(31, 122, 140, 0.12) 0%, transparent 65%),
        repeating-radial-gradient(circle at center, rgba(31, 122, 140, 0.25) 0, rgba(31, 122, 140, 0.25) 1px, transparent 1px, transparent 40px);
    }`;

// Initial Expeditions Sample Data
const INITIAL_EXPEDITIONS = [
  {
    id: '43-IAE',
    code: 'NCPOR-EXP-ANT-2023-43',
    name: '43rd Indian Antarctic Expedition (43-IAE)',
    lead: 'Dr. R. Verma',
    status: 'Active In-Field',
    statusType: 'active',
    region: 'Antarctica',
    base: 'Maitri & Bharati Stations',
    dates: 'Nov 2023 – Mar 2025',
    subDate: 'Day 194 of 500',
    coords: `70°45'57" S, 11°44'09" E`,
    publishState: 'Public Live',
    publishType: 'public',
    completeness: 100,
    completenessText: 'Verified',
  },
  {
    id: '17-IAE',
    code: 'NCPOR-EXP-ARC-2024-17',
    name: '17th Indian Arctic Expedition (Summer 2024)',
    lead: 'Dr. Ananya Sen',
    status: 'Active In-Field',
    statusType: 'active',
    region: 'Arctic',
    base: 'Himadri Station (Ny-Ålesund)',
    dates: 'Jun 2024 – Oct 2024',
    subDate: 'Day 42 of 60',
    coords: `78°55'30" N, 11°56'20" E`,
    publishState: 'Public Live',
    publishType: 'public',
    completeness: 92,
    completenessText: 'Complete',
  },
  {
    id: 'SOE-01',
    code: 'NCPOR-EXP-SOE-2024-01',
    name: 'Southern Ocean Expedition 2024 (SOE-01)',
    lead: 'Dr. S. K. Ramanathan',
    status: 'Vessel Transit',
    statusType: 'active',
    region: 'Southern Ocean',
    base: 'RV Bharati (Prydz Bay Sector)',
    dates: 'Jan 2024 – Apr 2024',
    subDate: 'Cruise Leg 3 of 4',
    coords: `54°12'18" S, 68°24'02" E`,
    publishState: 'Public Live',
    publishType: 'public',
    completeness: 85,
    completenessText: 'Valid',
  },
  {
    id: 'M2-REV02',
    code: 'NCPOR-EXP-ANT-2025-M2',
    name: 'Maitri-II Site Modernisation Survey',
    lead: 'Cryo Infrastructure Div',
    status: 'Upcoming 2025',
    statusType: 'staging',
    region: 'Antarctica',
    base: 'Schirmacher Oasis Moraine',
    dates: 'Dec 2024 – Feb 2025',
    subDate: 'Staging Phase 1',
    coords: `70°46'00" S, 11°45'15" E`,
    publishState: 'Draft (Hidden)',
    publishType: 'draft',
    completeness: 45,
    completenessText: 'Incomplete',
  },
  {
    id: '42-IAE',
    code: 'NCPOR-EXP-ANT-2022-42',
    name: '42nd Indian Antarctic Expedition (42-IAE)',
    lead: 'Dr. M. K. Joshi',
    status: 'Completed',
    statusType: 'completed',
    region: 'Antarctica',
    base: 'Larsemann Hills & Maitri',
    dates: 'Nov 2022 – Mar 2024',
    subDate: 'Archived',
    coords: `69°24'28" S, 76°11'14" E`,
    publishState: 'Archived Public',
    publishType: 'archived',
    completeness: 100,
    completenessText: 'Locked',
  },
];

export default function AdminExpeditionsPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: "" });

  // State Management
  const [activeFrame, setActiveFrame] = useState('frame-list');
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [expeditions, setExpeditions] = useState(INITIAL_EXPEDITIONS);

  // Quick Add Modal Form State
  const [quickAddForm, setQuickAddForm] = useState({
    name: '44th Indian Antarctic Expedition (44-IAE)',
    status: 'Active Field',
    latitude: '-70.7658',
    longitude: '11.7358',
    startDate: '2024-11-15',
    endDate: '2025-04-30',
  });

  // Step 2 Wizard Form State
  const [wizardForm, setWizardForm] = useState({
    landmark: 'Schirmacher Oasis, Queen Maud Land',
    latitude: '-70.7667',
    longitude: '11.7500',
    coordFormat: 'DEC',
  });

  const [waypoints, setWaypoints] = useState([
    { id: 1, name: 'Maitri Main Station (Hub)', coords: '-70.7667° S, 11.7358° E', desc: 'Basecamp Origin', dist: 'Leg 0 km' },
    { id: 2, name: 'Priydarshini Lake Core Trench', coords: '-70.7512° S, 11.7104° E', desc: 'Subglacial Core', dist: '+4.2 km' },
    { id: 3, name: 'Maitri-II Planned Ridge Site (Terminal)', coords: '-70.7600° S, 11.7500° E', desc: 'Construction Apex', dist: '+8.7 km' },
  ]);

  // Filter expeditions based on search and region
  const filteredExpeditions = expeditions.filter((exp) => {
    const matchesSearch =
      exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.lead.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.base.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion =
      regionFilter === 'All' || exp.region.toLowerCase() === regionFilter.toLowerCase();

    return matchesSearch && matchesRegion;
  });

  // Action Handlers
  const handleDeleteExpedition = (id) => {
    setExpeditions((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuickAddSubmit = (e) => {
    e.preventDefault();
    if (!quickAddForm.name) return;

    const newExp = {
      id: `EXP-${Date.now().toString().slice(-4)}`,
      code: `NCPOR-EXP-ANT-${new Date().getFullYear()}-${Math.floor(Math.random() * 90 + 10)}`,
      name: quickAddForm.name,
      lead: 'Dr. Ananya Sen',
      status: quickAddForm.status === 'Active Field' ? 'Active In-Field' : quickAddForm.status,
      statusType: quickAddForm.status === 'Active Field' ? 'active' : 'staging',
      region: 'Antarctica',
      base: 'Maitri Station',
      dates: `${quickAddForm.startDate} – ${quickAddForm.endDate}`,
      subDate: 'Newly Created',
      coords: `${quickAddForm.latitude}° S, ${quickAddForm.longitude}° E`,
      publishState: 'Draft (Hidden)',
      publishType: 'draft',
      completeness: 50,
      completenessText: 'In Progress',
    };

    setExpeditions([newExp, ...expeditions]);
    setActiveFrame('frame-list');
  };

  const handleAddWaypoint = () => {
    const nextNum = waypoints.length + 1;
    setWaypoints([
      ...waypoints,
      {
        id: Date.now(),
        name: `Waypoint ${nextNum} Sector`,
        coords: `-70.${7600 + nextNum * 10}° S, 11.${7500 + nextNum * 10}° E`,
        desc: 'Field Survey Spot',
        dist: `+${(nextNum * 2.5).toFixed(1)} km`,
      },
    ]);
  };

  const handleRemoveWaypoint = (id) => {
    setWaypoints(waypoints.filter((w) => w.id !== id));
  };

  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}

      {/* Header */}
      <header className="bg-white border-b border-polar-border sticky top-0 z-50 px-8 py-3.5 shadow-xs">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-polaris/10 flex items-center justify-center text-teal-polaris font-bold">
                <svg className="w-5 h-5 text-teal-polaris" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
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
              <span className="text-slate-400">Clearance:</span>
              <span className="font-semibold text-slate-700">Tier A (Supervisory)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1" />
            </div>
          </div>

          {/* Frame Switcher Buttons */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              className={`frame-btn px-4 py-1.5 text-xs rounded-md transition-all ${
                activeFrame === 'frame-list'
                  ? 'bg-white text-teal-polaris shadow-xs font-semibold'
                  : 'text-slate-600 font-medium hover:text-slate-900'
              }`}
              onClick={() => setActiveFrame('frame-list')}
            >
              Frame A: Master Expedition List
            </button>
            <button
              className={`frame-btn px-4 py-1.5 text-xs rounded-md transition-all ${
                activeFrame === 'frame-modal'
                  ? 'bg-white text-teal-polaris shadow-xs font-semibold'
                  : 'text-slate-600 font-medium hover:text-slate-900'
              }`}
              onClick={() => setActiveFrame('frame-modal')}
            >
              Frame B: Quick Add Modal
            </button>
            <button
              className={`frame-btn px-4 py-1.5 text-xs rounded-md transition-all ${
                activeFrame === 'frame-wizard'
                  ? 'bg-white text-teal-polaris shadow-xs font-semibold'
                  : 'text-slate-600 font-medium hover:text-slate-900'
              }`}
              onClick={() => setActiveFrame('frame-wizard')}
            >
              Frame C: Step 2 Location Wizard
            </button>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="inline-flex items-center px-2 py-1 rounded bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              INSAT-3DR Synced
            </span>
            <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
              <div className="w-7 h-7 rounded-full bg-teal-polaris text-white flex items-center justify-center font-semibold text-xs shadow-xs">
                AS
              </div>
              <span className="font-medium text-slate-700">Dr. Ananya Sen</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="max-w-[1440px] mx-auto flex min-h-[calc(100vh-65px)] bg-[#F6F9FC]">
        {/* Sidebar */}
        <aside className="w-[240px] bg-white border-r border-polar-border flex flex-col justify-between shrink-0 shadow-xs">
          <div>
            <div className="p-5 border-b border-slate-100 flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-polaris/10 border border-teal-polaris/20 flex items-center justify-center text-teal-polaris font-bold">
                <svg className="w-5 h-5 text-teal-polaris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 tracking-tight">NCPOR FIELD OPS</div>
                <div className="text-[11px] text-slate-500 font-medium">Polar Expedition Wing</div>
              </div>
            </div>
            <nav className="p-3 space-y-1">
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Dashboard</span>
              </Link>
              <Link className="flex items-center justify-between px-3 py-2 rounded-lg bg-teal-polaris/10 text-teal-polaris text-xs font-semibold border-l-4 border-teal-polaris transition-all" to="/admin/expeditions">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-teal-polaris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeWidth="2" />
                  </svg>
                  <span>Expedition Manager</span>
                </div>
                <span className="text-[10px] bg-teal-polaris text-white px-1.5 py-0.5 rounded-full font-bold">
                  {expeditions.length}
                </span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/upload">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>Upload & Datasets</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/ai-queue">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>AI Processing & OCR</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/studio">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Content Studio</span>
              </Link>
              <Link className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/review">
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Review Queue</span>
                </div>
                <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                  5
                </span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/publishing">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Publishing</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/rights">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Rights & Licenses</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/integrations">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                <span>Integrations</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/analytics">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Analytics</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/users">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Users & Access</span>
              </Link>
              <Link className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-xs font-medium transition-colors" to="/admin/audit-logs">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span>Audit Logs</span>
              </Link>
            </nav>
          </div>

          <div className="p-3 border-t border-slate-100 bg-slate-50/50">
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] space-y-1">
              <div className="flex items-center justify-between text-slate-500 font-mono">
                <span>Maitri Ground:</span>
                <span className="text-emerald-600 font-bold">-18.4°C</span>
              </div>
              <div className="flex items-center justify-between text-slate-500 font-mono">
                <span>Himadri Base:</span>
                <span className="text-teal-600 font-bold">-6.8°C</span>
              </div>
              <div className="pt-1 border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-between">
                <span>NKN Secure Uplink</span>
                <span className="text-emerald-600">● 100% OK</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Top Search & Profile Bar */}
          <div className="h-16 bg-white border-b border-polar-border px-8 flex items-center justify-between shrink-0">
            <div className="relative w-96">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search expeditions by code, PI, or base... ⌘K"
                className="w-full bg-[#F6F9FC] border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-polaris focus:bg-white transition-all"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-mono">
                <span className="text-teal-polaris font-semibold">
                  Active Expeditions: {expeditions.filter((x) => x.statusType === 'active').length}
                </span>
                <span className="text-slate-300">|</span>
                <span>Uplink: 99.8% Normal</span>
              </div>
              <button className="relative p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
              </button>
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-xs font-semibold text-slate-800">Dr. Ananya Sen</div>
                  <div className="text-[10px] text-teal-polaris font-medium uppercase tracking-wider">
                    Supervisory Admin (A)
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-polaris to-teal-dark text-white flex items-center justify-center font-bold text-xs shadow-xs border border-white">
                  AS
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 overflow-y-auto">
            {/* FRAME A: MASTER EXPEDITION LIST */}
            <section id="frame-list" className={`view-frame ${activeFrame === 'frame-list' ? 'active' : ''} space-y-6`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-teal-polaris mb-1">
                    <span>Field Operations Command</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-mono">/admin/expeditions</span>
                  </div>
                  <h1 className="text-2xl font-merriweather font-bold text-slate-900 tracking-tight">
                    Expedition Manager
                  </h1>
                  <p className="text-xs text-slate-500 mt-1">
                    Supervise polar missions, update active waypoints, configure telemetry streams and manage open-access metadata.
                  </p>
                </div>
                <div className="flex items-center space-x-2.5">
                  <button className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs cursor-pointer">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span>Import CSV / KML</span>
                  </button>
                  <button
                    className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold text-teal-polaris bg-teal-polaris/10 border border-teal-polaris/30 rounded-lg hover:bg-teal-polaris/20 transition-all shadow-xs cursor-pointer"
                    onClick={() => setActiveFrame('frame-modal')}
                  >
                    <svg className="w-4 h-4 text-teal-polaris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Quick Add</span>
                  </button>
                  <button
                    className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-white bg-teal-polaris hover:bg-teal-hover rounded-lg transition-all shadow-sm cursor-pointer"
                    onClick={() => setActiveFrame('frame-wizard')}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span>+ Add Expedition</span>
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      Total Missions
                    </p>
                    <p className="text-xl font-bold text-slate-900 mt-1 font-merriweather">
                      43{' '}
                      <span className="text-xs font-sans text-slate-400 font-normal">
                        Antarctic / Arctic
                      </span>
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      Active Field Deployments
                    </p>
                    <p className="text-xl font-bold text-emerald-600 mt-1 font-merriweather">
                      {expeditions.filter((e) => e.statusType === 'active').length}{' '}
                      <span className="text-xs font-sans text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                        Transmitting
                      </span>
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      Planned / In Staging
                    </p>
                    <p className="text-xl font-bold text-blue-600 mt-1 font-merriweather">
                      2{' '}
                      <span className="text-xs font-sans text-slate-400 font-normal">
                        Maitri-II & 18th Arctic
                      </span>
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      Avg Metadata Integrity
                    </p>
                    <p className="text-xl font-bold text-teal-polaris mt-1 font-merriweather">
                      94.2%{' '}
                      <span className="text-xs font-sans text-slate-400 font-normal">
                        WMO / ISO
                      </span>
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-teal-polaris/10 flex items-center justify-center text-teal-polaris">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expeditions Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="px-6 py-3.5 border-b border-slate-200 bg-[#FCFDFE] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-500 font-medium">Filter Region:</span>
                    {['All', 'Antarctica', 'Arctic', 'Southern Ocean'].map((region) => {
                      const count =
                        region === 'All'
                          ? expeditions.length
                          : expeditions.filter((e) => e.region.toLowerCase() === region.toLowerCase()).length;
                      const isActive = regionFilter === region;
                      return (
                        <button
                          key={region}
                          onClick={() => setRegionFilter(region)}
                          className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-teal-polaris text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          {region} ({count})
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex items-center space-x-3 text-slate-500">
                    <span className="inline-flex items-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
                      Published ({expeditions.filter((x) => x.publishType === 'public').length})
                    </span>
                    <span className="inline-flex items-center">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mr-1.5" />
                      Staging Draft ({expeditions.filter((x) => x.publishType === 'draft').length})
                    </span>
                    <span className="text-slate-300">|</span>
                    <span>
                      Sort by: <strong>Deployment Date (Newest)</strong>
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px] font-semibold">
                        <th className="py-3 px-5">Expedition Code & Name</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Region & Origin</th>
                        <th className="py-3 px-4">Operational Dates</th>
                        <th className="py-3 px-4 font-mono">Primary Coordinates</th>
                        <th className="py-3 px-4">Publish State</th>
                        <th className="py-3 px-4 w-36">Completeness</th>
                        <th className="py-3 px-5 text-right">Row Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {filteredExpeditions.length === 0 ? (
                        <tr>
                          <td colSpan="8" className="text-center py-8 text-slate-400 italic">
                            No matching expeditions found.
                          </td>
                        </tr>
                      ) : (
                        filteredExpeditions.map((item) => (
                          <tr
                            key={item.id}
                            className={`hover:bg-slate-50/80 transition-colors group ${
                              item.statusType === 'staging' ? 'bg-amber-50/30' : ''
                            }`}
                          >
                            <td className="py-3.5 px-5">
                              <div className="font-semibold text-slate-900 group-hover:text-teal-polaris transition-colors flex items-center space-x-1.5">
                                <span>{item.name}</span>
                                {item.statusType === 'staging' && (
                                  <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold">
                                    Staging
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-slate-400 font-mono">
                                {item.code} • Lead: {item.lead}
                              </div>
                            </td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                                  item.statusType === 'active'
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                    : item.statusType === 'staging'
                                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                                }`}
                              >
                                {item.statusType === 'active' && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                                )}
                                {item.status}
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-slate-800">{item.region}</div>
                              <div className="text-[11px] text-slate-500">{item.base}</div>
                            </td>
                            <td className="py-3.5 px-4 font-mono text-[11px]">
                              <div>{item.dates}</div>
                              <div className={item.statusType === 'staging' ? 'text-amber-600 font-medium' : 'text-slate-400'}>
                                {item.subDate}
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-mono text-[11px] text-slate-600">
                              {item.coords}
                            </td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold ${
                                  item.publishType === 'draft'
                                    ? 'bg-slate-100 text-slate-600 border border-slate-200'
                                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                                }`}
                              >
                                {item.publishState}
                              </span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="space-y-1">
                                <div className="flex justify-between text-[10px] font-mono">
                                  <span className={`font-semibold ${item.statusType === 'staging' ? 'text-amber-700' : 'text-slate-700'}`}>
                                    {item.completeness}%
                                  </span>
                                  <span className={`font-medium ${item.completeness === 100 ? 'text-emerald-600' : item.statusType === 'staging' ? 'text-amber-600' : 'text-teal-polaris'}`}>
                                    {item.completenessText}
                                  </span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                  <div
                                    className={`h-1.5 rounded-full ${
                                      item.completeness === 100
                                        ? 'bg-emerald-500'
                                        : item.statusType === 'staging'
                                        ? 'bg-amber-500'
                                        : 'bg-teal-polaris'
                                    }`}
                                    style={{ width: `${item.completeness}%` }}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-5 text-right">
                              <div className="inline-flex items-center space-x-1">
                                {item.statusType === 'staging' ? (
                                  <button
                                    title="Continue Wizard"
                                    className="px-2 py-1 bg-teal-polaris text-white text-[10px] font-semibold rounded hover:bg-teal-hover transition-colors cursor-pointer"
                                    onClick={() => setActiveFrame('frame-wizard')}
                                  >
                                    Complete Step 2 →
                                  </button>
                                ) : (
                                  <>
                                    <button
                                      title="Edit Expedition"
                                      className="p-1.5 text-slate-400 hover:text-teal-polaris hover:bg-slate-100 rounded transition-colors cursor-pointer"
                                      onClick={() => setActiveFrame('frame-wizard')}
                                    >
                                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                      </svg>
                                    </button>
                                    <button
                                      title="Duplicate Record"
                                      className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                                    >
                                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                      </svg>
                                    </button>
                                    <button
                                      title="View on 3D Globe"
                                      className="p-1.5 text-slate-400 hover:text-teal-polaris hover:bg-teal-50 rounded transition-colors cursor-pointer"
                                      onClick={() => setActiveFrame('frame-wizard')}
                                    >
                                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeWidth="2" />
                                      </svg>
                                    </button>
                                  </>
                                )}
                                <button
                                  title="Delete"
                                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors cursor-pointer"
                                  onClick={() => handleDeleteExpedition(item.id)}
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-2">
                    <span>Showing 1 to {filteredExpeditions.length} of {expeditions.length} expeditions</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">Page size: 10 per page</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="px-2.5 py-1 bg-white border border-slate-300 rounded text-slate-400 cursor-not-allowed">
                      Previous
                    </button>
                    <button className="px-2.5 py-1 bg-teal-polaris text-white font-semibold rounded cursor-pointer">
                      1
                    </button>
                    <button className="px-2.5 py-1 bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 rounded cursor-pointer">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* FRAME B: QUICK ADD MODAL */}
            <section id="frame-modal" className={`view-frame ${activeFrame === 'frame-modal' ? 'active' : ''} space-y-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-teal-polaris mb-1">
                    <span>Modal State Demonstration</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-mono">Component: QuickAddExpeditionModal</span>
                  </div>
                  <h2 className="text-xl font-merriweather font-bold text-slate-900 tracking-tight">
                    Quick Add Expedition Modal
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Lightweight rapid registration modal with 6 core parameters for swift telemetry ingestion.
                  </p>
                </div>
                <button
                  className="text-xs text-teal-polaris hover:underline font-semibold flex items-center space-x-1 cursor-pointer"
                  onClick={() => setActiveFrame('frame-list')}
                >
                  <span>← Back to Expedition Table</span>
                </button>
              </div>

              <div className="relative bg-slate-900/40 p-8 rounded-2xl border border-slate-300/80 backdrop-blur-xs flex items-center justify-center min-h-[580px]">
                <form onSubmit={handleQuickAddSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-[#F8FAFC]">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-polaris/10 text-teal-polaris flex items-center justify-center">
                        <svg className="w-4 h-4 text-teal-polaris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 font-merriweather">
                          Quick Add Expedition
                        </h3>
                        <p className="text-[11px] text-slate-500">
                          Provide 6 basic coordinates & timeframe parameters
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors cursor-pointer"
                      onClick={() => setActiveFrame('frame-list')}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-6 space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        1. Expedition Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={quickAddForm.name}
                        onChange={(e) => setQuickAddForm({ ...quickAddForm, name: e.target.value })}
                        placeholder="e.g. 44th Indian Antarctic Expedition"
                        className="w-full bg-[#F6F9FC] border border-slate-300 rounded-lg px-3 py-2 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-teal-polaris focus:bg-white transition-all"
                      />
                      <p className="text-[10px] text-slate-400 mt-1">
                        Official MoES registered mission moniker and code prefix.
                      </p>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5">
                        2. Operational Status <span className="text-rose-500">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Active Field', 'Upcoming', 'Archived'].map((statusOpt) => (
                          <label
                            key={statusOpt}
                            className={`border rounded-lg p-2 flex items-center space-x-2 cursor-pointer ${
                              quickAddForm.status === statusOpt
                                ? 'border-2 border-teal-polaris bg-teal-polaris/5 text-teal-dark font-medium'
                                : 'border-slate-200 hover:border-slate-300 text-slate-600'
                            }`}
                          >
                            <input
                              type="radio"
                              name="quick_status"
                              checked={quickAddForm.status === statusOpt}
                              onChange={() => setQuickAddForm({ ...quickAddForm, status: statusOpt })}
                              className="text-teal-polaris focus:ring-teal-polaris"
                            />
                            <span>{statusOpt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1.5">
                          3. Latitude <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={quickAddForm.latitude}
                            onChange={(e) => setQuickAddForm({ ...quickAddForm, latitude: e.target.value })}
                            placeholder="-70.7658 or 70°45'S"
                            className="w-full font-mono bg-[#F6F9FC] border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-polaris focus:bg-white transition-all"
                          />
                          <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono">
                            DEC
                          </span>
                        </div>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1.5">
                          4. Longitude <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={quickAddForm.longitude}
                            onChange={(e) => setQuickAddForm({ ...quickAddForm, longitude: e.target.value })}
                            placeholder="11.7358 or 11°44'E"
                            className="w-full font-mono bg-[#F6F9FC] border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-polaris focus:bg-white transition-all"
                          />
                          <span className="absolute right-2.5 top-2 text-[10px] text-slate-400 font-mono">
                            DEC
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1.5">
                          5. Start Date <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={quickAddForm.startDate}
                          onChange={(e) => setQuickAddForm({ ...quickAddForm, startDate: e.target.value })}
                          className="w-full font-mono bg-[#F6F9FC] border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-polaris focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1.5">
                          6. End Date <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={quickAddForm.endDate}
                          onChange={(e) => setQuickAddForm({ ...quickAddForm, endDate: e.target.value })}
                          className="w-full font-mono bg-[#F6F9FC] border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-polaris focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="p-2.5 bg-teal-polaris/5 rounded-lg border border-teal-polaris/20 flex items-center justify-between text-[11px]">
                      <div className="flex items-center space-x-2 text-teal-dark">
                        <svg className="w-4 h-4 text-teal-polaris shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                          Geo-resolved: <strong>Maitri Station Vicinity (Queen Maud Land)</strong>
                        </span>
                      </div>
                      <span className="text-emerald-600 font-semibold font-mono">Valid Grid</span>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      className="text-xs text-teal-polaris hover:underline font-semibold flex items-center space-x-1 cursor-pointer"
                      onClick={() => setActiveFrame('frame-wizard')}
                    >
                      <span>Open in Full 4-Step Wizard →</span>
                    </button>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                        onClick={() => setActiveFrame('frame-list')}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 text-xs font-semibold text-white bg-teal-polaris hover:bg-teal-hover rounded-lg transition-colors shadow-xs cursor-pointer"
                      >
                        Create Expedition
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>

            {/* FRAME C: STEP 2 LOCATION WIZARD */}
            <section id="frame-wizard" className={`view-frame ${activeFrame === 'frame-wizard' ? 'active' : ''} space-y-6`}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-teal-polaris mb-1">
                      <span>Expedition Deployment Wizard</span>
                      <span className="text-slate-300">•</span>
                      <span className="font-mono text-slate-500">Draft ID: EXP-2025-M2-REV02</span>
                    </div>
                    <h2 className="text-xl font-merriweather font-bold text-slate-900 tracking-tight">
                      Step 2: Geospatial Coordinates & Waypoint Route
                    </h2>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Autosaved at 14:32 UTC</span>
                    </div>
                    <button
                      className="text-xs text-slate-500 hover:text-slate-800 font-medium px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => setActiveFrame('frame-list')}
                    >
                      Save Draft & Exit
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
                    <div className="flex items-center space-x-2 text-emerald-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                      <span>1. Basics & Metadata</span>
                    </div>
                    <div className="flex items-center space-x-2 text-teal-polaris">
                      <span className="w-5 h-5 rounded-full bg-teal-polaris text-white flex items-center justify-center text-[10px] font-bold">
                        2
                      </span>
                      <span className="underline decoration-2 underline-offset-4">
                        2. Location & Waypoints
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] font-bold">
                        3
                      </span>
                      <span>3. Media & Content</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[10px] font-bold">
                        4
                      </span>
                      <span>4. Review & Publish</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-emerald-500 w-1/4 h-full" />
                    <div className="bg-teal-polaris w-1/4 h-full" />
                    <div className="bg-slate-200 w-2/4 h-full" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 lg:col-span-5 space-y-5">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h3 className="font-bold text-slate-900 font-merriweather">
                        Primary Deployment Base
                      </h3>
                      <div className="flex items-center bg-slate-100 p-0.5 rounded-md border border-slate-200 text-[10px]">
                        <button
                          className={`px-2 py-0.5 rounded font-semibold cursor-pointer ${
                            wizardForm.coordFormat === 'DEC'
                              ? 'bg-white text-teal-polaris shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                          onClick={() => setWizardForm({ ...wizardForm, coordFormat: 'DEC' })}
                        >
                          DEC (Decimal)
                        </button>
                        <button
                          className={`px-2 py-0.5 rounded font-semibold cursor-pointer ${
                            wizardForm.coordFormat === 'DMS'
                              ? 'bg-white text-teal-polaris shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                          onClick={() => setWizardForm({ ...wizardForm, coordFormat: 'DMS' })}
                        >
                          DMS (Deg Min Sec)
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Search Antarctic / Arctic Landmark
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={wizardForm.landmark}
                          onChange={(e) => setWizardForm({ ...wizardForm, landmark: e.target.value })}
                          placeholder="Search polar base, nunatak, glacier or fjord..."
                          className="w-full bg-[#F6F9FC] border border-slate-300 rounded-lg pl-8 pr-3 py-2 text-slate-800 font-medium focus:ring-2 focus:ring-teal-polaris focus:outline-none focus:bg-white transition-all"
                        />
                        <svg className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {[
                          { label: '+ Maitri', val: 'Maitri Station, Antarctica', lat: '-70.7667', lng: '11.7358' },
                          { label: '+ Bharati', val: 'Bharati Station, Antarctica', lat: '-69.4072', lng: '76.1872' },
                          { label: '+ Himadri (Ny-Ålesund)', val: 'Himadri Station, Ny-Ålesund', lat: '78.9250', lng: '11.9222' },
                          { label: '+ IndARC Mooring', val: 'IndARC Svalbard Deep Mooring', lat: '78.9000', lng: '12.0000' },
                        ].map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium text-[10px] hover:bg-teal-polaris/10 hover:text-teal-polaris transition-colors cursor-pointer"
                            onClick={() =>
                              setWizardForm({
                                ...wizardForm,
                                landmark: item.val,
                                latitude: item.lat,
                                longitude: item.lng,
                              })
                            }
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Latitude (°S/°N)
                        </label>
                        <input
                          type="text"
                          value={wizardForm.latitude}
                          onChange={(e) => setWizardForm({ ...wizardForm, latitude: e.target.value })}
                          className="w-full font-mono bg-[#F6F9FC] border border-slate-300 rounded-lg px-3 py-1.5 text-slate-800 focus:ring-2 focus:ring-teal-polaris focus:outline-none"
                        />
                        <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
                          DMS: 70°46'00" S
                        </p>
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Longitude (°E/°W)
                        </label>
                        <input
                          type="text"
                          value={wizardForm.longitude}
                          onChange={(e) => setWizardForm({ ...wizardForm, longitude: e.target.value })}
                          className="w-full font-mono bg-[#F6F9FC] border border-slate-300 rounded-lg px-3 py-1.5 text-slate-800 focus:ring-2 focus:ring-teal-polaris focus:outline-none"
                        />
                        <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
                          DMS: 11°45'00" E
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
                      <span>
                        Geodetic Datum: <strong>WGS84 (EPSG:4326)</strong>
                      </span>
                      <span className="text-teal-polaris font-semibold">Elev: 117 m ASL</span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-slate-900 font-merriweather">
                          Waypoints & Route Legs
                        </h3>
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                          {waypoints.length} Waypoints
                        </span>
                      </div>
                      <button
                        type="button"
                        className="text-teal-polaris hover:underline font-semibold text-[11px] flex items-center space-x-1 cursor-pointer"
                        onClick={handleAddWaypoint}
                      >
                        <span>+ Add Waypoint</span>
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Drag items to reorder expedition transect sequence or click on the 3D globe picker.
                    </p>

                    <div className="space-y-2 pt-1">
                      {waypoints.map((wp, index) => (
                        <div
                          key={wp.id}
                          className={`p-3 rounded-xl border flex items-center justify-between group cursor-grab active:cursor-grabbing transition-all ${
                            index === waypoints.length - 1
                              ? 'bg-teal-polaris/5 border-teal-polaris/30'
                              : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-slate-400 group-hover:text-slate-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                              </svg>
                            </span>
                            <span
                              className={`w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] font-bold ${
                                index === waypoints.length - 1 ? 'bg-teal-dark' : 'bg-teal-polaris'
                              }`}
                            >
                              {index + 1}
                            </span>
                            <div>
                              <div className={`font-semibold ${index === waypoints.length - 1 ? 'text-teal-dark' : 'text-slate-800'}`}>
                                {wp.name}
                              </div>
                              <div className={`text-[10px] font-mono ${index === waypoints.length - 1 ? 'text-teal-polaris' : 'text-slate-500'}`}>
                                {wp.coords} • {wp.desc}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className={`text-[10px] font-mono ${index === waypoints.length - 1 ? 'text-teal-polaris font-semibold' : 'text-slate-400'}`}>
                              {wp.dist}
                            </span>
                            <button
                              type="button"
                              className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded cursor-pointer"
                              onClick={() => handleRemoveWaypoint(wp.id)}
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span>Total Planned Transect:</span>
                      <span className="font-bold text-slate-800">12.9 km (Over-ice sledge route)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      className="px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => setActiveFrame('frame-list')}
                    >
                      ← Back to Step 1 (Basics)
                    </button>
                    <button
                      type="button"
                      className="px-5 py-2 text-xs font-semibold text-white bg-teal-polaris hover:bg-teal-hover rounded-lg transition-colors shadow-sm cursor-pointer"
                      onClick={() => setActiveFrame('frame-list')}
                    >
                      Proceed to Step 3 (Media & Content) →
                    </button>
                  </div>
                </div>

                {/* Interactive 3D Geospatial Pin Drop Column */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-polaris animate-pulse" />
                        <h3 className="font-bold text-slate-900 font-merriweather text-xs">
                          Interactive 3D Geospatial Pin Drop
                        </h3>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button className="px-2 py-1 text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-medium transition-colors cursor-pointer">
                          Reset View
                        </button>
                        <button className="px-2 py-1 text-[10px] bg-teal-polaris text-white rounded font-medium transition-colors cursor-pointer">
                          Full Screen
                        </button>
                      </div>
                    </div>

                    <div className="relative w-full h-[480px] bg-slate-950 rounded-xl overflow-hidden radar-grid flex items-center justify-center border border-slate-800">
                      <div className="text-center space-y-3 z-10 px-4">
                        <div className="w-16 h-16 rounded-full bg-teal-polaris/20 border border-teal-polaris/40 flex items-center justify-center mx-auto animate-pulse">
                          <svg className="w-8 h-8 text-teal-polaris" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeWidth="1.5" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white font-merriweather">
                            3D Globe Telemetry Engine Loaded
                          </div>
                          <div className="text-xs text-slate-400 font-mono mt-1">
                            Coordinates: {wizardForm.latitude}° S, {wizardForm.longitude}° E
                          </div>
                        </div>
                        <div className="inline-flex items-center space-x-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-700 text-[11px] text-slate-300">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>CesiumJS / WebGL Active • Topo Layer Synced</span>
                        </div>
                      </div>
                    </div>
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