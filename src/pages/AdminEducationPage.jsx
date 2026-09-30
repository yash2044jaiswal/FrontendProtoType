import { useState, useTransition } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

const BODY_CLASS = "bg-[#F6F9FC] font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

export default function AdminEducationPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS });
  const navigate = useNavigate();
  const [, startTransition] = useTransition();

  // --- Active Tab State ---
  const [activeTab, setActiveTab] = useState('quizzes'); // 'topics' | 'quizzes' | 'storyPacks' | 'glossary' | 'tours'

  // --- Search & Filters State ---
  const [searchQuery, setSearchQuery] = useState(''); // Empty search field by default
  const [selectedGrade, setSelectedGrade] = useState('Middle School (Gr. 6–8)');
  const [selectedRegion, setSelectedRegion] = useState('Antarctic & Arctic');
  const [selectedStatus, setSelectedStatus] = useState('Status: In Authoring');

  // --- Dropdown Toggles ---
  const [isGradeOpen, setIsGradeOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  // --- Form & Quiz Editable State ---
  const [moduleTitle, setModuleTitle] = useState("Katabatic Winds & Coastal Ice Dynamics in Dronning Maud Land");
  const [selectedGrades, setSelectedGrades] = useState(["Grade 8 Science", "Grade 9 Geography"]);
  const [showAddGrade, setShowAddGrade] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [auditRemarks, setAuditRemarks] = useState("Draft prepared from 43rd IAE meteorology dispatches. Clarification requested on Question 2 seasonal threshold with Dr. Sen.");

  // --- Student Preview Controls ---
  const [previewDevice, setPreviewDevice] = useState('desktop'); // 'desktop' | 'tablet'
  const [studentAnswer, setStudentAnswer] = useState('B'); // Default selected option in preview ('A', 'B', 'C')

  // --- Checkbox Checklist State ---
  const [checklist, setChecklist] = useState({
    scientific: true,
    vocabulary: true,
    accessibility: true,
    peerSignOff: false,
  });

  // Checklist handler
  const handleChecklistChange = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Grade badge toggle handler
  const toggleGrade = (gradeName) => {
    if (selectedGrades.includes(gradeName)) {
      setSelectedGrades(selectedGrades.filter(g => g !== gradeName));
    } else {
      setSelectedGrades([...selectedGrades, gradeName]);
    }
  };

  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}

      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="fixed left-0 top-0 h-screen w-[240px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="px-space-md py-space-lg flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">
                ac_unit
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-md text-title-md tracking-tight text-primary leading-none">
                POLARIS
              </span>
              <span className="font-label-mono text-label-mono text-secondary tracking-widest leading-tight mt-1">
                MOES ADMIN PORTAL
              </span>
            </div>
          </div>
          <div className="px-space-md py-space-xs">
            <div className="text-label-mono font-label-mono text-secondary uppercase px-space-sm py-space-xs tracking-wider">
              Operations Core
            </div>
          </div>
          <nav className="flex flex-col gap-1 px-space-sm" data-active-classes="bg-primary-container text-on-primary font-title-md rounded-lg">
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="dashboard" to="/admin">
              <span className="material-symbols-outlined text-[18px]">
                dashboard
              </span>
              <span className="font-body-sm text-body-sm">
                Dashboard
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="expeditions" to="/expeditions/soe-01">
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
              <span className="font-body-sm text-body-sm">
                Expeditions
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="upload" to="/admin/upload">
              <span className="material-symbols-outlined text-[18px]">
                cloud_upload
              </span>
              <span className="font-body-sm text-body-sm">
                Upload
              </span>
            </Link>
            <button className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors w-full text-left cursor-pointer" data-path="ai-queue" type="button" onClick={() => alert("AI Queue is currently idle.")}>
              <span className="material-symbols-outlined text-[18px]">
                smart_toy
              </span>
              <span className="font-body-sm text-body-sm">
                AI Queue
              </span>
            </button>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="content-studio" to="/admin/studio">
              <span className="material-symbols-outlined text-[18px]">
                edit_document
              </span>
              <span className="font-body-sm text-body-sm">
                Content Studio
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="review" to="/admin/review">
              <span className="material-symbols-outlined text-[18px]">
                fact_check
              </span>
              <span className="font-body-sm text-body-sm">
                Review
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="publishing" to="/admin/publishing">
              <span className="material-symbols-outlined text-[18px]">
                publish
              </span>
              <span className="font-body-sm text-body-sm">
                Publishing
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="media-library" to="/admin/media">
              <span className="material-symbols-outlined text-[18px]">
                perm_media
              </span>
              <span className="font-body-sm text-body-sm">
                Media Library
              </span>
            </Link>
            <Link aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-title-md rounded-lg cursor-pointer" data-path="education-manager" to="/admin/education">
              <span className="material-symbols-outlined text-[18px]">
                school
              </span>
              <span className="font-body-sm text-body-sm">
                Education Manager
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="rights-integrations" to="/admin/rights">
              <span className="material-symbols-outlined text-[18px]">
                key
              </span>
              <span className="font-body-sm text-body-sm">
                Rights & Integrations
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="analytics" to="/admin/analytics">
              <span className="material-symbols-outlined text-[18px]">
                monitoring
              </span>
              <span className="font-body-sm text-body-sm">
                Analytics
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="notifications" to="/admin/notifications">
              <span className="material-symbols-outlined text-[18px]">
                notifications
              </span>
              <span className="font-body-sm text-body-sm">
                Notifications
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="users" to="/admin/users">
              <span className="material-symbols-outlined text-[18px]">
                group
              </span>
              <span className="font-body-sm text-body-sm">
                Users
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer" data-path="settings" to="/admin/profile">
              <span className="material-symbols-outlined text-[18px]">
                settings
              </span>
              <span className="font-body-sm text-body-sm">
                Settings
              </span>
            </Link>
          </nav>
        </div>
        <div className="p-space-sm bg-surface-container-low">
          <div className="flex items-center gap-space-sm p-space-xs">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-title-md text-body-sm text-on-surface truncate font-semibold">
                Dr. Ananya Sen
              </span>
              <span className="font-label-mono text-label-mono text-secondary truncate">
                Lead Scientist / Editor
              </span>
            </div>
            <button className="text-secondary hover:text-on-surface p-1 rounded transition-colors cursor-pointer" type="button" title="Logout" onClick={() => navigate('/login')}>
              <span className="material-symbols-outlined text-[18px]">
                logout
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* --- HEADER --- */}
      <div className="pl-[240px] flex flex-col min-h-screen">
        <header className="fixed top-0 left-[240px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2 px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container">
              <span className="w-2 h-2 rounded-full bg-[#2ECC9A] inline-block animate-pulse" />
              <span className="font-label-mono text-label-mono tracking-wider font-semibold uppercase">
                HIMADRI TELEMETRY ONLINE
              </span>
            </div>
            <div className="hidden md:flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg gap-space-sm w-72 text-on-surface-variant focus-within:ring-2 focus-within:ring-primary/20">
              <span className="material-symbols-outlined text-[18px]">
                search
              </span>
              <input 
                type="text" 
                placeholder="Global Search" 
                className="bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none w-full"
              />
              <kbd className="font-label-mono text-label-mono bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-[0_1px_4px_rgba(0,0,0,0.04)] text-on-surface-variant">
                ⌘K
              </kbd>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono uppercase font-semibold">
              Scientist / Editor (S, E, A)
            </div>
            <button className="relative p-1.5 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" type="button" onClick={() => navigate('/admin/notifications')}>
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer" onClick={() => navigate('/admin/profile')}>
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </header>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="relative pt-16 flex-1 w-full bg-[#F6F9FC]">
          <div className="max-w-[1440px] mx-auto p-space-lg lg:p-space-xl">
            <div className="flex flex-col w-full">
              
              {/* TOP HEADER & METRICS SECTION */}
              <section className="flex flex-col gap-space-lg mb-space-xl">
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
                  <div className="flex flex-col max-w-3xl">
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono tracking-wider uppercase font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                        MoES Curriculum Division
                      </span>
                      <span className="text-outline font-label-mono text-label-mono">
                        |
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary tracking-wider uppercase">
                        POLARIS-EDU-AUTH-v4
                      </span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-normal">
                      Education Content Manager
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
                      Author, align, and validate polar science curriculum modules, educational quizzes, interactive 360° classroom tours, and glossary terms across Indian standard school & university grade bands.
                    </p>
                  </div>

                  {/* METRIC CARDS */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm w-full xl:w-auto">
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between min-w-[140px] hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between text-secondary">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider">
                          Curriculum
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          auto_stories
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface block">
                          142
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Modules Active
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between min-w-[140px] hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between text-secondary">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider">
                          Live Quizzes
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-tertiary">
                          quiz
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="font-headline-sm text-headline-sm text-on-surface block">
                          38
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          In Classroom
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between min-w-[140px] hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between text-secondary">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider">
                          Review Queue
                        </span>
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center gap-1.5">
                          <span className="font-headline-sm text-headline-sm text-amber-700 block">
                            4
                          </span>
                          <span className="font-label-mono text-[10px] uppercase font-bold text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">
                            Pending
                          </span>
                        </div>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Editorial Check
                        </span>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between min-w-[140px] hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between text-secondary">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider">
                          NCERT / CBSE
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          verified
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="font-headline-sm text-headline-sm text-primary block">
                          94%
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Core Alignment
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TABS & FILTER BAR */}
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 bg-surface-container-low p-1.5 rounded-xl">
                    <button 
                      onClick={() => setActiveTab('topics')}
                      className={`px-space-md py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                        activeTab === 'topics' 
                          ? 'font-title-md text-title-md bg-primary-container text-on-primary shadow-sm' 
                          : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`} 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        menu_book
                      </span>
                      Topics
                      <span className={`px-2 py-0.5 rounded-full text-label-mono font-label-mono ${
                        activeTab === 'topics' ? 'bg-surface-container-lowest/20 text-on-primary' : 'bg-surface-container text-secondary'
                      }`}>
                        24
                      </span>
                    </button>

                    <button 
                      onClick={() => setActiveTab('quizzes')}
                      className={`px-space-md py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                        activeTab === 'quizzes' 
                          ? 'font-title-md text-title-md bg-primary-container text-on-primary shadow-sm' 
                          : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`} 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        psychology_alt
                      </span>
                      Quizzes
                      <span className={`px-2 py-0.5 rounded-full text-label-mono font-label-mono ${
                        activeTab === 'quizzes' ? 'bg-surface-container-lowest/20 text-on-primary' : 'bg-surface-container text-secondary'
                      }`}>
                        38 ACTIVE
                      </span>
                    </button>

                    <button 
                      onClick={() => setActiveTab('storyPacks')}
                      className={`px-space-md py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                        activeTab === 'storyPacks' 
                          ? 'font-title-md text-title-md bg-primary-container text-on-primary shadow-sm' 
                          : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`} 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        auto_stories
                      </span>
                      Story Packs
                      <span className={`px-2 py-0.5 rounded-full text-label-mono font-label-mono ${
                        activeTab === 'storyPacks' ? 'bg-surface-container-lowest/20 text-on-primary' : 'bg-surface-container text-secondary'
                      }`}>
                        16
                      </span>
                    </button>

                    <button 
                      onClick={() => setActiveTab('glossary')}
                      className={`px-space-md py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                        activeTab === 'glossary' 
                          ? 'font-title-md text-title-md bg-primary-container text-on-primary shadow-sm' 
                          : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`} 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        spellcheck
                      </span>
                      Glossary
                      <span className={`px-2 py-0.5 rounded-full text-label-mono font-label-mono ${
                        activeTab === 'glossary' ? 'bg-surface-container-lowest/20 text-on-primary' : 'bg-surface-container text-secondary'
                      }`}>
                        180
                      </span>
                    </button>

                    <button 
                      onClick={() => setActiveTab('tours')}
                      className={`px-space-md py-2 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                        activeTab === 'tours' 
                          ? 'font-title-md text-title-md bg-primary-container text-on-primary shadow-sm' 
                          : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`} 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        view_in_ar
                      </span>
                      360° Tours
                      <span className={`px-2 py-0.5 rounded-full text-label-mono font-label-mono ${
                        activeTab === 'tours' ? 'bg-surface-container-lowest/20 text-on-primary' : 'bg-surface-container text-secondary'
                      }`}>
                        12
                      </span>
                    </button>
                  </div>

                  {/* SEARCH & FILTERS BAR */}
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm flex-1">
                      {/* Search Bar Input (Fix: No hardcoded defaultValue, fully interactive controlled state) */}
                      <div className="flex items-center bg-surface-container-low px-space-md py-2 rounded-lg gap-space-sm flex-1 max-w-md focus-within:ring-2 focus-within:ring-primary/20">
                        <span className="material-symbols-outlined text-[18px] text-outline">
                          search
                        </span>
                        <input 
                          className="bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none w-full" 
                          placeholder="Search quiz titles, curriculum codes, topics..." 
                          type="text" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                          <button 
                            type="button" 
                            onClick={() => setSearchQuery('')}
                            className="text-outline hover:text-on-surface text-[14px]"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      {/* Dropdown 1: Grade Band */}
                      <div className="flex items-center gap-space-xs overflow-x-auto relative">
                        <div className="relative">
                          <button 
                            type="button"
                            onClick={() => { setIsGradeOpen(!isGradeOpen); setIsRegionOpen(false); setIsStatusOpen(false); }}
                            className="flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px] text-secondary mr-1">
                              school
                            </span>
                            <span className="font-body-sm text-body-sm font-medium">
                              {selectedGrade}
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-outline ml-1">
                              arrow_drop_down
                            </span>
                          </button>
                          {isGradeOpen && (
                            <div className="absolute left-0 top-full mt-1 w-56 bg-surface-container-lowest shadow-lg rounded-lg border border-surface-container z-50 py-1">
                              {['Middle School (Gr. 6–8)', 'Secondary (Gr. 9–10)', 'Sr Sec (Gr. 11–12)', 'Undergraduate'].map(grade => (
                                <button
                                  key={grade}
                                  type="button"
                                  className="w-full text-left px-3 py-1.5 text-body-sm hover:bg-surface-container-low transition-colors"
                                  onClick={() => { setSelectedGrade(grade); setIsGradeOpen(false); }}
                                >
                                  {grade}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Dropdown 2: Region */}
                        <div className="relative">
                          <button 
                            type="button"
                            onClick={() => { setIsRegionOpen(!isRegionOpen); setIsGradeOpen(false); setIsStatusOpen(false); }}
                            className="flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px] text-secondary mr-1">
                              explore
                            </span>
                            <span className="font-body-sm text-body-sm font-medium">
                              {selectedRegion}
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-outline ml-1">
                              arrow_drop_down
                            </span>
                          </button>
                          {isRegionOpen && (
                            <div className="absolute left-0 top-full mt-1 w-48 bg-surface-container-lowest shadow-lg rounded-lg border border-surface-container z-50 py-1">
                              {['Antarctic & Arctic', 'Himalayas / Third Pole', 'Southern Ocean', 'Global Polar'].map(region => (
                                <button
                                  key={region}
                                  type="button"
                                  className="w-full text-left px-3 py-1.5 text-body-sm hover:bg-surface-container-low transition-colors"
                                  onClick={() => { setSelectedRegion(region); setIsRegionOpen(false); }}
                                >
                                  {region}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Dropdown 3: Status */}
                        <div className="relative">
                          <button 
                            type="button"
                            onClick={() => { setIsStatusOpen(!isStatusOpen); setIsGradeOpen(false); setIsRegionOpen(false); }}
                            className="flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[16px] text-secondary mr-1">
                              filter_alt
                            </span>
                            <span className="font-body-sm text-body-sm font-medium">
                              {selectedStatus}
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-outline ml-1">
                              arrow_drop_down
                            </span>
                          </button>
                          {isStatusOpen && (
                            <div className="absolute left-0 top-full mt-1 w-48 bg-surface-container-lowest shadow-lg rounded-lg border border-surface-container z-50 py-1">
                              {['Status: In Authoring', 'Status: Under Review', 'Status: Published', 'Status: Archived'].map(status => (
                                <button
                                  key={status}
                                  type="button"
                                  className="w-full text-left px-3 py-1.5 text-body-sm hover:bg-surface-container-low transition-colors"
                                  onClick={() => { setSelectedStatus(status); setIsStatusOpen(false); }}
                                >
                                  {status}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* TOP ACTION BUTTONS */}
                    <div className="flex items-center gap-space-sm shrink-0">
                      <button 
                        className="px-space-md py-2 rounded-lg font-body-sm text-body-sm bg-surface-container-low text-on-surface hover:bg-surface-container flex items-center gap-1.5 transition-colors cursor-pointer" 
                        type="button"
                        onClick={() => alert("NCERT Module Importer activated. Select XML or JSON syllabus file.")}
                      >
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          file_download
                        </span>
                        <span>
                          Import NCERT Module
                        </span>
                      </button>
                      <button 
                        className="px-space-md py-2 rounded-lg font-title-md text-body-sm bg-primary-container text-on-primary hover:bg-primary shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer" 
                        type="button"
                        onClick={() => alert("Creating a new manual quiz container.")}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          add_circle
                        </span>
                        <span>
                          + New Manual Quiz
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* TWO COLUMN WORKSPACE GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                
                {/* LEFT COLUMN: EDITING & QUESTION LIST (8 COLS) */}
                <div className="lg:col-span-8 flex flex-col gap-space-lg">
                  
                  {/* QUIZ METADATA EDITOR */}
                  <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                        <h2 className="font-title-md text-title-md text-on-surface uppercase tracking-wider">
                          Quiz Metadata & Curriculum Alignment
                        </h2>
                      </div>
                      <span className="font-label-mono text-label-mono px-2 py-0.5 bg-surface-container rounded text-secondary">
                        AUTOSAVED 14:22 IST
                      </span>
                    </div>

                    {/* Module Title Field */}
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-mono text-label-mono uppercase text-secondary">
                        Module / Quiz Title
                      </label>
                      <div className="flex items-center bg-surface-container-low px-space-md py-2.5 rounded-lg focus-within:ring-2 focus-within:ring-primary/20">
                        <input 
                          className="w-full bg-transparent font-title-md text-body-lg text-on-surface focus:outline-none" 
                          type="text" 
                          value={moduleTitle}
                          onChange={(e) => setModuleTitle(e.target.value)}
                        />
                        <span className="material-symbols-outlined text-[18px] text-outline">
                          edit
                        </span>
                      </div>
                    </div>

                    {/* Target Grade Bands & Mapping Code */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-mono text-label-mono uppercase text-secondary">
                          Target Grade Bands (Multi-Select)
                        </label>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          {selectedGrades.map(grade => (
                            <span key={grade} className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold flex items-center gap-1">
                              {grade}
                              <button 
                                type="button" 
                                onClick={() => toggleGrade(grade)}
                                className="material-symbols-outlined text-[14px] hover:text-error cursor-pointer"
                                title="Remove grade"
                              >
                                check
                              </button>
                            </span>
                          ))}

                          {!showAddGrade ? (
                            <button 
                              type="button"
                              onClick={() => setShowAddGrade(true)}
                              className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-mono text-label-mono hover:bg-surface-container-high cursor-pointer transition-colors"
                            >
                              + Sr Sec (11-12) Earth Sci
                            </button>
                          ) : (
                            <button 
                              type="button"
                              onClick={() => { toggleGrade("Sr Sec (11-12) Earth Sci"); setShowAddGrade(false); }}
                              className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-mono text-label-mono hover:bg-primary/20 cursor-pointer"
                            >
                              + Add "Sr Sec (11-12) Earth Sci"
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-mono text-label-mono uppercase text-secondary">
                          National Mapping Code
                        </label>
                        <div className="bg-surface-container-low p-2 rounded-lg flex items-center justify-between">
                          <span className="font-label-mono text-label-mono text-on-surface font-semibold truncate">
                            NCERT-GEO-VIII-C5 • MoES-PL-402
                          </span>
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            check_circle
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-surface-container-low rounded-lg text-body-sm text-secondary">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        hub
                      </span>
                      <span>
                        Linked Primary Topic:
                      </span>
                      <a href="#maitri-topic" onClick={(e) => e.preventDefault()} className="font-title-md text-body-sm text-primary underline underline-offset-2 hover:opacity-80">
                        Station Maitri & Schirmacher Oasis Meteorology
                      </a>
                    </div>
                  </section>

                  {/* AI Q-GEN ENGINE BANNER */}
                  <section className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] text-primary-container">
                          psychology
                        </span>
                        <span className="font-title-md text-body-sm text-on-surface font-semibold">
                          MoES Assisted Polar Q-Gen Engine
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-mono text-label-mono bg-surface-container-lowest px-2 py-0.5 rounded text-secondary shadow-sm">
                          ENGINE: POLARIS-EduLLM v2.4 (Cryo-Trained)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
                      <div className="flex items-center bg-surface-container-lowest px-space-md py-2.5 rounded-lg flex-1 shadow-sm focus-within:ring-2 focus-within:ring-primary/20">
                        <input 
                          className="bg-transparent w-full font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none" 
                          placeholder="e.g. Generate 5 multiple-choice questions on how gravitational drainage drives katabatic wind speeds at Maitri station..." 
                          type="text" 
                          value={aiPrompt}
                          onChange={(e) => setAiPrompt(e.target.value)}
                        />
                      </div>
                      <button 
                        className="px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-title-md text-body-sm shadow-sm flex items-center justify-center gap-2 whitespace-nowrap transition-colors cursor-pointer" 
                        type="button"
                        onClick={() => {
                          if(!aiPrompt) {
                            alert("Please enter a prompt for the AI Q-Gen engine.");
                          } else {
                            alert(`Generating questions based on: "${aiPrompt}"`);
                            setAiPrompt('');
                          }
                        }}
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          auto_awesome
                        </span>
                        <span>
                          Generate with AI
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-space-md text-label-mono font-label-mono text-secondary px-1">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                        Fact-locked to NCPOR Maitri & Bharati AWS telemetry archives
                      </span>
                      <span className="hidden md:inline">•</span>
                      <span className="hidden md:inline">Bloom Taxonomy: Understand & Apply</span>
                    </div>
                  </section>

                  {/* QUESTIONS CONTAINER */}
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          Questions in Module (5)
                        </h3>
                        <span className="font-label-mono text-label-mono bg-surface-container-high px-2 py-0.5 rounded text-secondary">
                          3 Verified • 1 Flagged • 1 Draft
                        </span>
                      </div>
                      <button 
                        className="text-primary hover:text-primary-container font-label-mono text-label-mono uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors" 
                        type="button"
                        onClick={() => alert("Drag handles enabled to reorder questions.")}
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          sort
                        </span>
                        Reorder Sequence
                      </button>
                    </div>

                    {/* QUESTION ITEM 1 */}
                    <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b border-surface-container">
                        <div className="flex items-center gap-space-sm">
                          <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm flex items-center justify-center">
                            1
                          </span>
                          <span className="font-title-md text-body-sm text-on-surface">
                            Multiple Choice Question
                          </span>
                          <span className="font-label-mono text-label-mono text-secondary">
                            Item #Q-KAT-01
                          </span>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-label-mono text-label-mono font-semibold">
                            <span className="material-symbols-outlined text-[14px] text-emerald-600">
                              verified
                            </span>
                            AI Confidence: 96% • High Factuality
                          </span>
                          <span className="font-label-mono text-[10px] text-secondary bg-surface-container-low px-2 py-0.5 rounded">
                            Ref: NCPOR Met TR-2023-14
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-mono text-label-mono uppercase text-secondary">
                          Question Stem
                        </label>
                        <p className="font-body-md text-body-md text-on-surface font-medium">
                          What primary physical mechanism accelerates katabatic winds as they descend from the Antarctic continental plateau toward the coastal ice shelf?
                        </p>
                      </div>

                      {/* OPTIONS */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low text-on-surface">
                          <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-label-mono font-label-mono text-secondary">
                            A
                          </span>
                          <span className="font-body-sm text-body-sm flex-1">
                            High solar radiation creating localized thermal convective updrafts along the moraine line.
                          </span>
                        </div>

                        <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-secondary-container/40 text-on-surface">
                          <span className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-label-mono font-label-mono">
                            <span className="material-symbols-outlined text-[14px]">
                              check
                            </span>
                          </span>
                          <span className="font-body-sm text-body-sm font-semibold flex-1">
                            Radiative cooling of surface air over elevated ice sheets causing dense air to drain downslope under gravity.
                          </span>
                          <span className="font-label-mono text-label-mono text-primary font-bold px-2 py-0.5 bg-surface-container-lowest rounded shadow-xs">
                            CORRECT OPTION
                          </span>
                        </div>

                        <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low text-on-surface">
                          <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-label-mono font-label-mono text-secondary">
                            C
                          </span>
                          <span className="font-body-sm text-body-sm flex-1">
                            Strong trade wind deflections around sub-glacial mountain ranges.
                          </span>
                        </div>

                        <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low text-on-surface">
                          <span className="w-5 h-5 rounded-full bg-surface-container flex items-center justify-center text-label-mono font-label-mono text-secondary">
                            D
                          </span>
                          <span className="font-body-sm text-body-sm flex-1">
                            Sudden pressure drops caused by ocean tidal swells beneath the ice front.
                          </span>
                        </div>
                      </div>

                      {/* PEDAGOGICAL EXPLANATION */}
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 mt-0.5">
                          school
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-label-mono text-label-mono uppercase font-bold text-on-surface">
                            NCPOR Pedagogical Explanation
                          </span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Prolonged radiative cooling of surface air over the elevated Antarctic ice dome creates a dense, cold surface layer that drains downhill under gravity, frequently exceeding 100 km/h upon reaching the Schirmacher Oasis edge.
                          </p>
                        </div>
                      </div>

                      {/* ACTION BUTTONS */}
                      <div className="flex items-center justify-between pt-space-xs text-body-sm">
                        <div className="flex items-center gap-space-sm">
                          <button 
                            className="text-secondary hover:text-on-surface flex items-center gap-1 font-body-sm text-body-sm cursor-pointer transition-colors" 
                            type="button"
                            onClick={() => alert("Edit Explanation dialog opened.")}
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              edit_note
                            </span>
                            Edit Explanation
                          </button>
                          <button 
                            className="text-secondary hover:text-on-surface flex items-center gap-1 font-body-sm text-body-sm cursor-pointer transition-colors" 
                            type="button"
                            onClick={() => alert("Rephrasing question stem with AI...")}
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              refresh
                            </span>
                            Rephrase Stem
                          </button>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <button 
                            className="text-error hover:text-on-error-container p-1 rounded transition-colors cursor-pointer" 
                            type="button"
                            title="Delete Item"
                            onClick={() => alert("Item #Q-KAT-01 deleted.")}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>

                    {/* QUESTION ITEM 2 */}
                    <article className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b border-surface-container">
                        <div className="flex items-center gap-space-sm">
                          <span className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface font-title-md text-body-sm flex items-center justify-center">
                            2
                          </span>
                          <span className="font-title-md text-body-sm text-on-surface">
                            Diagram Interpretation
                          </span>
                          <span className="font-label-mono text-label-mono text-secondary">
                            Item #Q-KAT-02
                          </span>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-label-mono text-label-mono font-semibold">
                            <span className="material-symbols-outlined text-[14px] text-amber-600">
                              warning
                            </span>
                            AI Confidence: 78% • Needs Review
                          </span>
                          <span className="font-label-mono text-[10px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-semibold">
                            NCERT Footnote Flag
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-mono text-label-mono uppercase text-secondary">
                          Question Stem
                        </label>
                        <p className="font-body-md text-body-md text-on-surface font-medium">
                          According to automatic weather station (AWS) telemetry at Maitri, in which polar season do katabatic wind gusts exceed 45 knots most frequently?
                        </p>
                      </div>

                      {/* SVG METEOROLOGY CHART */}
                      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-label-mono text-label-mono uppercase font-semibold text-secondary">
                            Maitri AWS Wind Velocity Distribution (Knots)
                          </span>
                          <span className="font-label-mono text-label-mono text-primary font-semibold">
                            NCPOR Telemetry Archive #AWS-MTR-23
                          </span>
                        </div>
                        <svg className="w-full h-16 text-primary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 600 70">
                          <line stroke="#dee8ff" strokeWidth="1" x1="0" x2="600" y1="60" y2="60" />
                          <line stroke="#dee8ff" strokeDasharray="2 2" strokeWidth="1" x1="0" x2="600" y1="20" y2="20" />
                          <rect fill="#c1e6f3" height="22" rx="3" width="45" x="50" y="38" />
                          <text fill="#41636e" fontFamily="Inter" fontSize="9" textAnchor="middle" x="72" y="68">
                            Summer
                          </text>
                          <text fill="#071c36" fontFamily="Inter" fontSize="9" textAnchor="middle" x="72" y="33">
                            18 kts
                          </text>
                          <rect fill="#1f7a8c" height="36" rx="3" width="45" x="190" y="24" />
                          <text fill="#41636e" fontFamily="Inter" fontSize="9" textAnchor="middle" x="212" y="68">
                            Autumn
                          </text>
                          <text fill="#071c36" fontFamily="Inter" fontSize="9" textAnchor="middle" x="212" y="19">
                            32 kts
                          </text>
                          <rect fill="#006070" height="52" rx="3" width="45" x="330" y="8" />
                          <text fill="#071c36" fontFamily="Inter" fontSize="9" fontWeight="bold" textAnchor="middle" x="352" y="68">
                            Winter
                          </text>
                          <text fill="#ba1a1a" fontFamily="Inter" fontSize="9" fontWeight="bold" textAnchor="middle" x="352" y="5">
                            54 kts*
                          </text>
                          <rect fill="#1f7a8c" height="32" rx="3" width="45" x="470" y="28" />
                          <text fill="#41636e" fontFamily="Inter" fontSize="9" textAnchor="middle" x="492" y="68">
                            Spring
                          </text>
                          <text fill="#071c36" fontFamily="Inter" fontSize="9" textAnchor="middle" x="492" y="23">
                            28 kts
                          </text>
                        </svg>
                        <div className="bg-amber-50 p-2 rounded text-amber-900 font-label-mono text-label-mono flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-amber-600">
                            info
                          </span>
                          <span>
                            Requires cross-verification with Maitri AWS 2023-2024 telemetry table before school distribution.
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-space-xs text-body-sm">
                        <div className="flex items-center gap-space-sm">
                          <button 
                            className="px-3 py-1.5 rounded bg-primary-container text-on-primary font-label-mono text-label-mono flex items-center gap-1 hover:bg-primary transition-colors cursor-pointer" 
                            type="button"
                            onClick={() => alert("Fact-check requested: Comparing against NCPOR Repo #AWS-MTR-23...")}
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              fact_check
                            </span>
                            Quick Fact-Check vs Repo
                          </button>
                          <button 
                            className="text-secondary hover:text-on-surface font-body-sm text-body-sm cursor-pointer transition-colors" 
                            type="button"
                            onClick={() => alert("Editing option choices...")}
                          >
                            Edit Options
                          </button>
                        </div>
                        <button 
                          className="text-secondary hover:text-on-surface font-body-sm text-body-sm cursor-pointer transition-colors" 
                          type="button"
                          onClick={() => alert("Rephrasing question...")}
                        >
                          Rephrase Question
                        </button>
                      </div>
                    </article>

                    {/* ADD MANUAL ITEM BUTTON */}
                    <button 
                      className="w-full py-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col items-center justify-center gap-1 text-on-surface-variant group cursor-pointer" 
                      type="button"
                      onClick={() => alert("Opening new question creator modal.")}
                    >
                      <div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[20px]">
                          add
                        </span>
                      </div>
                      <span className="font-title-md text-body-sm font-semibold text-primary mt-1">
                        + Add Manual Question Item
                      </span>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Choose MCQ, True/False, Diagram Analysis, or Drag-and-Drop Concept Match
                      </span>
                    </button>
                  </div>
                </div>

                {/* RIGHT COLUMN: LIVE PREVIEW & PUBLISHING GATEWAY (4 COLS) */}
                <div className="lg:col-span-4 flex flex-col gap-space-lg">
                  
                  {/* STUDENT LIVE PREVIEW SECTION */}
                  <section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          visibility
                        </span>
                        <span className="font-title-md text-title-md text-on-surface">
                          Student Live Preview
                        </span>
                      </div>
                      
                      {/* Device Mode Selector */}
                      <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
                        <button 
                          onClick={() => setPreviewDevice('desktop')}
                          className={`p-1 rounded cursor-pointer transition-colors ${
                            previewDevice === 'desktop' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-secondary hover:text-on-surface'
                          }`} 
                          type="button"
                          title="Desktop View"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            desktop_windows
                          </span>
                        </button>
                        <button 
                          onClick={() => setPreviewDevice('tablet')}
                          className={`p-1 rounded cursor-pointer transition-colors ${
                            previewDevice === 'tablet' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-secondary hover:text-on-surface'
                          }`} 
                          type="button"
                          title="Tablet View"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            tablet_mac
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Interactive Preview Container */}
                    <div className={`bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-md shadow-inner transition-all ${
                      previewDevice === 'tablet' ? 'max-w-[320px] mx-auto border-4 border-surface-container-high rounded-3xl' : ''
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-[10px] tracking-widest uppercase font-bold text-primary-container">
                          POLARIS STUDENT PORTAL
                        </span>
                        <span className="font-label-mono text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">
                            timer
                          </span>
                          08:30 remaining
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between font-label-mono text-[11px] text-secondary">
                          <span>Question 1 of 5</span>
                          <span>20% Completed</span>
                        </div>
                        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary-container h-full w-1/5 rounded-full" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-surface-container-lowest p-2 rounded-lg text-secondary">
                        <div className="flex items-center gap-2">
                          <button 
                            className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center hover:opacity-90 cursor-pointer" 
                            type="button"
                            onClick={() => alert("Playing audio narration...")}
                            title="Play Audio"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              volume_up
                            </span>
                          </button>
                          <span className="font-label-mono text-[11px] text-on-surface">
                            Listen in English / हिंदी
                          </span>
                        </div>
                        <span className="font-label-mono text-[10px] text-outline">
                          1.0x SPEED
                        </span>
                      </div>

                      <div className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg">
                        <p className="font-headline-sm text-body-sm text-on-surface font-semibold">
                          What primary physical mechanism accelerates katabatic winds as they descend from the Antarctic plateau?
                        </p>
                        
                        {/* Dynamic Interactive Student Choice Options */}
                        <div className="flex flex-col gap-1.5">
                          <div 
                            onClick={() => setStudentAnswer('A')}
                            className={`p-2 rounded text-body-sm flex items-center gap-2 cursor-pointer transition-colors ${
                              studentAnswer === 'A' 
                                ? 'bg-secondary-container/40 text-on-surface font-medium' 
                                : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              studentAnswer === 'A' ? 'bg-primary-container text-on-primary' : 'border border-outline'
                            }`}>
                              {studentAnswer === 'A' ? '✓' : 'A'}
                            </span>
                            <span>High solar radiation updrafts</span>
                          </div>

                          <div 
                            onClick={() => setStudentAnswer('B')}
                            className={`p-2 rounded text-body-sm flex items-center gap-2 cursor-pointer transition-colors ${
                              studentAnswer === 'B' 
                                ? 'bg-secondary-container/40 text-on-surface font-medium' 
                                : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              studentAnswer === 'B' ? 'bg-primary-container text-on-primary' : 'border border-outline'
                            }`}>
                              {studentAnswer === 'B' ? '✓' : 'B'}
                            </span>
                            <span>Radiative cooling & gravity drainage</span>
                          </div>

                          <div 
                            onClick={() => setStudentAnswer('C')}
                            className={`p-2 rounded text-body-sm flex items-center gap-2 cursor-pointer transition-colors ${
                              studentAnswer === 'C' 
                                ? 'bg-secondary-container/40 text-on-surface font-medium' 
                                : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              studentAnswer === 'C' ? 'bg-primary-container text-on-primary' : 'border border-outline'
                            }`}>
                              {studentAnswer === 'C' ? '✓' : 'C'}
                            </span>
                            <span>Ocean tidal swells</span>
                          </div>
                        </div>

                        <div className="bg-surface-container-low p-2 rounded flex items-center gap-2 text-label-mono text-[11px] text-secondary">
                          <span className="material-symbols-outlined text-[16px] text-primary">
                            lightbulb
                          </span>
                          <span>
                            Hint: Consider the temperature of air over high-altitude ice.
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-1">
                        <span className="font-label-mono text-[10px] text-outline">
                          NCERT ALIGNED EVALUATION
                        </span>
                        <button 
                          className="px-3 py-1 rounded bg-primary-container text-on-primary font-label-mono text-label-mono hover:bg-primary transition-colors cursor-pointer" 
                          type="button"
                          onClick={() => alert("Navigating to Question 2 in Preview")}
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  </section>

                  {/* PUBLISHING & QUALITY GATEWAY SECTION */}
                  <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center gap-2 pb-space-xs border-b border-surface-container">
                      <span className="material-symbols-outlined text-[20px] text-tertiary">
                        fact_check
                      </span>
                      <h2 className="font-title-md text-title-md text-on-surface">
                        Publishing & Quality Gateway
                      </h2>
                    </div>

                    {/* Interactive Quality Checklist (Fix: React state controlled inputs) */}
                    <div className="flex flex-col gap-2.5">
                      <label className={`flex items-start gap-2.5 cursor-pointer transition-opacity ${!checklist.scientific ? 'opacity-60' : ''}`}>
                        <input 
                          type="checkbox"
                          checked={checklist.scientific}
                          onChange={() => handleChecklistChange('scientific')}
                          className="mt-0.5 rounded text-primary focus:ring-0 cursor-pointer" 
                        />
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            Scientific Accuracy Validated
                          </span>
                          <span className="font-label-mono text-[11px] text-secondary">
                            Checked against NCPOR Antarctic telemetry logs
                          </span>
                        </div>
                      </label>

                      <label className={`flex items-start gap-2.5 cursor-pointer transition-opacity ${!checklist.vocabulary ? 'opacity-60' : ''}`}>
                        <input 
                          type="checkbox"
                          checked={checklist.vocabulary}
                          onChange={() => handleChecklistChange('vocabulary')}
                          className="mt-0.5 rounded text-primary focus:ring-0 cursor-pointer" 
                        />
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            Age-Appropriate Vocabulary
                          </span>
                          <span className="font-label-mono text-[11px] text-secondary">
                            Aligned to NCERT Middle School standards
                          </span>
                        </div>
                      </label>

                      <label className={`flex items-start gap-2.5 cursor-pointer transition-opacity ${!checklist.accessibility ? 'opacity-60' : ''}`}>
                        <input 
                          type="checkbox"
                          checked={checklist.accessibility}
                          onChange={() => handleChecklistChange('accessibility')}
                          className="mt-0.5 rounded text-primary focus:ring-0 cursor-pointer" 
                        />
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">
                            Accessibility & Alt-Tags
                          </span>
                          <span className="font-label-mono text-[11px] text-secondary">
                            Screen-reader labels for weather chart vectors
                          </span>
                        </div>
                      </label>

                      <label className={`flex items-start gap-2.5 cursor-pointer transition-opacity ${!checklist.peerSignOff ? 'opacity-60' : ''}`}>
                        <input 
                          type="checkbox"
                          checked={checklist.peerSignOff}
                          onChange={() => handleChecklistChange('peerSignOff')}
                          className="mt-0.5 rounded text-primary focus:ring-0 cursor-pointer" 
                        />
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-amber-900 font-semibold">
                            Lead Scientist Peer Sign-Off
                          </span>
                          <span className="font-label-mono text-[11px] text-amber-700">
                            Awaiting validation on Question 2 wind threshold
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Editorial Audit Remarks Field */}
                    <div className="flex flex-col gap-space-xs mt-1">
                      <label className="font-label-mono text-label-mono uppercase text-secondary">
                        Editorial Audit Remarks
                      </label>
                      <textarea 
                        className="w-full p-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20" 
                        rows="3" 
                        value={auditRemarks}
                        onChange={(e) => setAuditRemarks(e.target.value)}
                      />
                    </div>

                    <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                      <span className="font-label-mono text-label-mono text-secondary">
                        Your Role Authorization:
                      </span>
                      <span className="font-label-mono text-label-mono text-primary font-bold bg-surface-container px-2 py-0.5 rounded">
                        Scientist / Editor [S, E]
                      </span>
                    </div>

                    {/* PUBLISHING ACTION BUTTONS */}
                    <div className="flex flex-col gap-2 pt-space-xs">
                      <button 
                        className="w-full py-2.5 px-space-md rounded-lg bg-primary-container hover:bg-primary text-on-primary font-title-md text-body-sm shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer" 
                        type="button"
                        onClick={() => alert("Module sent for Editorial Review.")}
                      >
                        <span>
                          Send for Editorial Review
                        </span>
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          className="py-2 px-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low font-body-sm text-body-sm text-on-surface text-center transition-colors cursor-pointer" 
                          type="button"
                          onClick={() => alert("Working draft saved successfully.")}
                        >
                          Save Working Draft
                        </button>
                        <button 
                          className="py-2 px-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low font-body-sm text-body-sm text-secondary hover:text-on-surface flex items-center justify-center gap-1 transition-colors cursor-pointer" 
                          type="button"
                          onClick={() => alert("Generating PDF document export...")}
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            picture_as_pdf
                          </span>
                          <span>
                            Export PDF
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-secondary pt-2">
                      <span className="font-label-mono text-[10px]">
                        POLARIS ID: #EDU-2024-089
                      </span>
                      <span className="font-label-mono text-[10px]">
                        NCERT SYLLABUS REV. 3
                      </span>
                    </div>
                  </section>

                  {/* TEACHER COMPANION PACK CARD */}
                  <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        download_for_offline
                      </span>
                      <span className="font-title-md text-body-sm font-semibold">
                        Teacher Companion Pack
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Auto-generate classroom slide decks, student worksheets (Hindi & English), and experiment lab cards for this module.
                    </p>
                    <button 
                      className="mt-1 text-left font-label-mono text-label-mono uppercase text-primary font-bold hover:underline cursor-pointer" 
                      type="button"
                      onClick={() => alert("Downloading Teacher Companion Assets (.ZIP)...")}
                    >
                      Generate Companion Assets (ZIP) →
                    </button>
                  </div>

                </div>
              </div>

              {/* FOOTER METADATA */}
              <footer className="mt-space-xl pt-space-lg border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-sm text-secondary font-label-mono text-label-mono">
                <div className="flex items-center gap-space-md">
                  <span className="flex items-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-[16px]">
                      verified_user
                    </span>
                    NCPOR Scientific Review Protocol #2024-C
                  </span>
                  <span>•</span>
                  <span>Ministry of Earth Sciences, New Delhi</span>
                  <span>•</span>
                  <span>Central Board of Secondary Education (CBSE) Integrated</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="text-outline">
                    Live Telemetry Synchronized: 2024-10-24 14:24 IST
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                </div>
              </footer>

            </div>
          </div>
        </main>

        {/* BOTTOM GLOBAL FOOTER */}
        <footer className="w-full bg-surface-container-lowest py-space-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="max-w-[1440px] mx-auto px-space-lg flex flex-col md:flex-row items-center justify-between gap-space-xs">
            <div className="flex items-center gap-space-sm text-secondary font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-[16px] text-tertiary">
                shield
              </span>
              <span>
                LEVEL 4 SECURE ENVIRONMENT • MoES / NCPOR GOA
              </span>
            </div>
            <div className="font-label-mono text-label-mono text-outline">
              National Centre for Polar and Ocean Research © 2024. Ministry of Earth Sciences, Govt. of India.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}