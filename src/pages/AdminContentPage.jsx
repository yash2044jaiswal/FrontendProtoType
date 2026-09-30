import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BODY_CLASS = "bg-[#f6f9fc] font-body-md text-on-surface antialiased flex flex-col min-h-screen";
const PAGE_CSS = `@layer base {
  html, body { margin: 0; padding: 0; }
  body { overscroll-behavior: none; }
}
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: #94a3b8; }`;

export default function AdminContentPage() {
  // 1. Tab State Management
  const [activeTab, setActiveTab] = useState('tab-editor');

  // 2. Story Directory & Search/Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [selectedStoryId, setSelectedStoryId] = useState(1);

  // Initial Stories List
  const storiesList = [
    {
      id: 1,
      title: "Overwintering in the Schirmacher Oasis: Survival, Science, and Solar Isolation",
      readTime: "8m read",
      author: "Dr. A. Sen",
      doiCount: "14 DOI Refs",
      location: "Maitri Station • 43rd IAE",
      status: "LIVE ON HOME HERO",
      statusType: "live",
      lang: "EN",
      category: "Live",
      words: "1,420 words",
      readTimeExact: "8.2 mins",
      repo: "NCPOR/EXP-43/SCHIR-09"
    },
    {
      id: 2,
      title: "Unlocking IndARC: Deep Water Moorings in Kongsfjorden Fjord",
      readTime: "5m read",
      author: "Peer Sign-off",
      doiCount: "8 DOI Refs",
      location: "Ny-Ålesund • Arctic",
      status: "REVIEW PENDING",
      statusType: "review",
      lang: "EN",
      category: "Review",
      words: "980 words",
      readTimeExact: "5.1 mins",
      repo: "NCPOR/ARC-24/IND-02"
    },
    {
      id: 3,
      title: "Katabatic Wind Surges & Glacier Runoff at Larsemann Hills",
      readTime: "6m read",
      author: "Saved 23m ago",
      doiCount: "5 DOI Refs",
      location: "Bharati Station",
      status: "DRAFT AUTOSAVED",
      statusType: "draft",
      lang: "EN",
      category: "Drafts",
      words: "1,120 words",
      readTimeExact: "6.4 mins",
      repo: "NCPOR/EXP-43/BHAR-04"
    },
    {
      id: 4,
      title: "Southern Ocean Carbon Flux: CTD Cast Results Transect Line 4",
      readTime: "10m read",
      author: "Dr. K. Nair",
      doiCount: "22 DOI Refs",
      location: "ORV Sagar Kanya",
      status: "ARCHIVED DISPATCH",
      statusType: "archived",
      lang: "Dec 2023",
      category: "Live",
      words: "2,100 words",
      readTimeExact: "11.0 mins",
      repo: "NCPOR/SOE-23/CTD-04"
    }
  ];

  // 3. Editor State
  const [storyTitle, setStoryTitle] = useState(storiesList[0].title);
  const [themeMode, setThemeMode] = useState('light'); // 'light' or 'dark'
  const [draftSavedMessage, setDraftSavedMessage] = useState(false);
  const [cdnPushedMessage, setCdnPushedMessage] = useState(false);
  const [homepageOrderSavedMessage, setHomepageOrderSavedMessage] = useState(false);

  // Update editor inputs when selected story changes
  const handleSelectStory = (story) => {
    setSelectedStoryId(story.id);
    setStoryTitle(story.title);
  };

  // 4. Interactive Comparison Slider State & Logic
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDraggingRef = useRef(false);
  const sliderContainerRef = useRef(null);

  const handleSliderUpdate = (clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    handleSliderUpdate(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDraggingRef.current) {
        handleSliderUpdate(e.clientX);
      }
    };
    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };
    const handleTouchMove = (e) => {
      if (isDraggingRef.current && e.touches && e.touches[0]) {
        handleSliderUpdate(e.touches[0].clientX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // 5. Button Action Handlers with temporary feedbacks
  const handleSaveDraft = () => {
    setDraftSavedMessage(true);
    setTimeout(() => setDraftSavedMessage(false), 2000);
  };

  const handlePushCDN = () => {
    setCdnPushedMessage(true);
    setTimeout(() => setCdnPushedMessage(false), 2000);
  };

  const handleApplyOrder = () => {
    setHomepageOrderSavedMessage(true);
    setTimeout(() => setHomepageOrderSavedMessage(false), 2000);
  };

  // Selected story metadata for editor info bar
  const activeStoryObj = storiesList.find(s => s.id === selectedStoryId) || storiesList[0];

  // Filtered stories logic
  const filteredStories = storiesList.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          story.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterCategory === 'All') return matchesSearch;
    if (filterCategory === 'Live') return matchesSearch && (story.category === 'Live' || story.statusType === 'live');
    if (filterCategory === 'Review') return matchesSearch && story.statusType === 'review';
    if (filterCategory === 'Drafts') return matchesSearch && story.statusType === 'draft';
    return matchesSearch;
  });

  return (
    <div className={BODY_CLASS}>
      <style>{PAGE_CSS}</style>

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-60 bg-surface-container-lowest z-50 flex flex-col justify-between border-r border-[#e2e8f0] shadow-sm">
        <div className="flex flex-col h-full">
          <div className="h-16 px-4 flex items-center gap-3 border-b border-[#e2e8f0]">
            <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-headline-sm text-base shadow-sm">
              ❄
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-title-md text-[15px] font-bold text-on-surface tracking-tight">
                  POLARIS
                </span>
                <span className="font-label-mono text-[10px] text-primary font-bold px-1.5 py-0.5 rounded bg-secondary-fixed">
                  MoES
                </span>
              </div>
              <p className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                NCPOR Portal
              </p>
            </div>
          </div>
          <nav className="flex-1 px-3 py-3 overflow-y-auto space-y-1">
            <div className="px-2 py-1 font-label-mono text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider">
              Operational
            </div>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin">
              <span className="material-symbols-outlined text-[18px]">
                grid_view
              </span>
              Dashboard
            </Link>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/expeditions/soe-01">
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
              Expeditions
            </Link>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/upload">
              <span className="material-symbols-outlined text-[18px]">
                upload_file
              </span>
              Upload
            </Link>
            <a className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" href="#" onClick={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined text-[18px]">
                neurology
              </span>
              AI Queue
            </a>
            <div className="pt-3 px-2 py-1 font-label-mono text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider">
              Editorial Studio
            </div>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/studio">
              <span className="material-symbols-outlined text-[18px]">
                edit_note
              </span>
              Content Studio
            </Link>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/review">
              <span className="material-symbols-outlined text-[18px]">
                rate_review
              </span>
              Review
            </Link>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/publishing">
              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
              Publishing
            </Link>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/media">
              <span className="material-symbols-outlined text-[18px]">
                photo_library
              </span>
              Media Library
            </Link>
            <Link aria-current="page" className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-primary-container text-white font-medium text-sm shadow-sm" to="/admin/content">
              <span className="material-symbols-outlined text-[18px]">
                auto_stories
              </span>
              Stories & Website
            </Link>
            <div className="pt-3 px-2 py-1 font-label-mono text-[10px] text-on-surface-variant font-semibold uppercase tracking-wider">
              Governance
            </div>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/rights">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              Rights & Integrations
            </Link>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/analytics">
              <span className="material-symbols-outlined text-[18px]">
                monitoring
              </span>
              Analytics
            </Link>
            <Link className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors text-sm font-medium" to="/admin/profile">
              <span className="material-symbols-outlined text-[18px]">
                settings
              </span>
              Settings
            </Link>
          </nav>
          <div className="p-3 border-t border-[#e2e8f0]">
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-surface-container-low border border-[#e2e8f0]">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 font-semibold text-xs">
                AS
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-on-surface truncate">
                  Dr. Ananya Sen
                </div>
                <div className="text-[11px] text-on-surface-variant truncate">
                  Lead Scientist / Editor
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="pl-60 flex-1 flex flex-col">
        {/* Top Header */}
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface-container-lowest/95 backdrop-blur-md border-b border-[#e2e8f0] z-40 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-[#e2e8f0]">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-mono text-[11px] font-semibold text-on-surface tracking-wider">
                HIMADRI TELEMETRY ONLINE
              </span>
            </div>
            <div className="relative w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input 
                className="w-full bg-[#f6f9fc] border border-[#e2e8f0] rounded-lg pl-9 pr-3 py-1.5 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container focus:bg-white transition-all" 
                placeholder="Search stories, policies, taxonomy... (⌘K)" 
                type="text" 
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-label-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold tracking-wider border border-[#b2d9e7]">
              AUTH: EDITOR & ADMIN (E, A)
            </span>
            <button className="relative p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error ring-2 ring-white" />
            </button>
            <button className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">
                help_outline
              </span>
            </button>
          </div>
        </header>

        {/* Main Body */}
        <main className="pt-16 pb-12 flex-1">
          <div className="w-full max-w-[1440px] mx-auto px-8 pt-8 flex flex-col gap-6">
            {/* Header Title Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-[#e2e8f0]">
              <div>
                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-label-mono mb-1">
                  <span className="uppercase tracking-widest font-semibold">
                    Polaris Editorial Core
                  </span>
                  <span>/</span>
                  <span className="text-primary font-bold">
                    Content-Mgr-V4
                  </span>
                  <span>•</span>
                  <span className="text-tertiary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    Ready for Production
                  </span>
                </div>
                <h1 className="font-headline-sm text-2xl font-bold text-on-surface tracking-tight">
                  Stories & Website Content Manager
                </h1>
                <p className="text-sm text-on-surface-variant mt-1 max-w-3xl">
                  Curate long-form scientific dispatches, govern homepage slot priority, and maintain compliant institutional pages for NCPOR & MoES.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e2e8f0] text-on-surface hover:bg-surface-container transition-all text-xs font-semibold shadow-sm" 
                  id="btnSaveDraft"
                  onClick={handleSaveDraft}
                  type="button"
                >
                  {draftSavedMessage ? (
                    <>
                      <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                      Draft Saved
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">
                        save
                      </span>
                      Save Working Draft
                    </>
                  )}
                </button>
                <button 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-container text-white text-xs font-semibold hover:opacity-95 shadow-sm transition-all" 
                  id="btnCreateStory"
                  type="button"
                  onClick={() => setActiveTab('tab-editor')}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add_circle
                  </span>
                  + Create New Story
                </button>
              </div>
            </div>

            {/* Tab Buttons */}
            <div className="flex items-center gap-2 border-b border-[#e2e8f0] pb-2 overflow-x-auto">
              <button 
                className={`tab-button px-5 py-2.5 rounded-xl font-label-md text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  activeTab === 'tab-editor'
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-white border border-[#e2e8f0] text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
                data-tab="tab-editor"
                onClick={() => setActiveTab('tab-editor')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  edit_document
                </span>
                Story Editor & Directory
              </button>
              <button 
                className={`tab-button px-5 py-2.5 rounded-xl font-label-md text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  activeTab === 'tab-homepage'
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-white border border-[#e2e8f0] text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
                data-tab="tab-homepage"
                onClick={() => setActiveTab('tab-homepage')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  view_quilt
                </span>
                Homepage Curator (Slots)
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${activeTab === 'tab-homepage' ? 'bg-white/20 text-white' : 'bg-secondary-fixed text-primary'}`}>
                  4 slots
                </span>
              </button>
              <button 
                className={`tab-button px-5 py-2.5 rounded-xl font-label-md text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  activeTab === 'tab-policies'
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-white border border-[#e2e8f0] text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
                data-tab="tab-policies"
                onClick={() => setActiveTab('tab-policies')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  policy
                </span>
                Institutional Pages & Policies
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${activeTab === 'tab-policies' ? 'bg-white/20 text-white' : 'bg-surface-container text-on-surface'}`}>
                  14 pages
                </span>
              </button>
              <button 
                className={`tab-button px-5 py-2.5 rounded-xl font-label-md text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  activeTab === 'tab-history'
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-white border border-[#e2e8f0] text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
                data-tab="tab-history"
                onClick={() => setActiveTab('tab-history')}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  history_edu
                </span>
                Version History (v3.4)
              </button>
            </div>

            {/* Tab 1: Story Editor & Directory */}
            <div className={`tab-content flex flex-col gap-6 ${activeTab === 'tab-editor' ? '' : 'hidden'}`} id="tab-editor">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-[#e2e8f0] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                      Published Stories
                    </div>
                    <div className="font-headline-sm text-2xl text-on-surface font-bold mt-1">
                      48
                    </div>
                    <div className="text-xs text-tertiary flex items-center gap-1 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[14px]">
                        public
                      </span>
                      Synced to CDN
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      auto_stories
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-[#e2e8f0] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                      In Review / Queue
                    </div>
                    <div className="font-headline-sm text-2xl text-on-surface font-bold mt-1">
                      6
                    </div>
                    <div className="text-xs text-secondary flex items-center gap-1 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[14px]">
                        schedule
                      </span>
                      2 awaiting peer sign-off
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-[20px]">
                      rate_review
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-[#e2e8f0] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                      Fact-Checked DOI
                    </div>
                    <div className="font-headline-sm text-2xl text-on-surface font-bold mt-1">
                      100%
                    </div>
                    <div className="text-xs text-tertiary flex items-center gap-1 mt-1 font-medium">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>
                      NCPOR Registry linked
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      fact_check
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-[#e2e8f0] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="font-label-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-medium">
                      Active Home Slots
                    </div>
                    <div className="font-headline-sm text-2xl text-on-surface font-bold mt-1">
                      4 of 4
                    </div>
                    <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px]">
                        event_repeat
                      </span>
                      Next swap: 06:00 IST
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">
                      view_carousel
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column - Directory */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-[#e2e8f0] shadow-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                      <div>
                        <h2 className="font-title-md text-base font-bold text-on-surface">
                          Story Directory
                        </h2>
                        <p className="font-label-mono text-[11px] text-on-surface-variant">
                          48 total dispatches
                        </p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#f1f5f9] text-on-surface font-semibold">
                        Triage
                      </span>
                    </div>
                    <div className="mt-3 space-y-3">
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                          search
                        </span>
                        <input 
                          className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl pl-9 pr-3 py-2 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-primary-container transition-all" 
                          placeholder="Search by title, author, or station..." 
                          type="text" 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                        {['All', 'Live', 'Review', 'Drafts'].map((cat) => (
                          <button 
                            key={cat}
                            type="button"
                            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                              filterCategory === cat
                                ? 'bg-primary text-white'
                                : 'bg-[#f1f5f9] text-on-surface-variant hover:text-on-surface'
                            }`}
                            onClick={() => setFilterCategory(cat)}
                          >
                            {cat === 'Review' ? 'Review (6)' : cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      {filteredStories.length === 0 ? (
                        <div className="p-4 text-center text-xs text-on-surface-variant">
                          No dispatches found.
                        </div>
                      ) : (
                        filteredStories.map((story) => {
                          const isSelected = selectedStoryId === story.id;
                          return (
                            <div 
                              key={story.id}
                              onClick={() => handleSelectStory(story)}
                              className={`p-4 rounded-xl transition-all cursor-pointer shadow-xs ${
                                isSelected 
                                  ? 'bg-[#f0f9fa] border-2 border-primary-container/80 relative' 
                                  : 'bg-white hover:bg-[#f8fafc] border border-[#e2e8f0]'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-mono text-[10px] font-bold ${
                                  story.statusType === 'live' 
                                    ? 'bg-tertiary text-white' 
                                    : story.statusType === 'review' 
                                      ? 'bg-secondary-container text-on-secondary-container' 
                                      : 'bg-[#f1f5f9] text-on-surface-variant'
                                }`}>
                                  {story.statusType === 'live' && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse" />
                                  )}
                                  {story.status}
                                </span>
                                <div className="flex items-center gap-1 text-[10px] font-label-mono font-semibold">
                                  <span className="px-1.5 py-0.5 rounded bg-white text-on-surface border border-[#e2e8f0]">
                                    {story.lang}
                                  </span>
                                  {story.statusType === 'live' && (
                                    <span className="px-1.5 py-0.5 rounded bg-[#e2e8f0] text-on-surface">
                                      HI
                                    </span>
                                  )}
                                </div>
                              </div>
                              <h3 className="font-headline-sm text-sm font-bold text-on-surface mt-2.5 leading-snug hover:text-primary transition-colors">
                                {story.title}
                              </h3>
                              <div className="flex items-center gap-3 mt-2 text-xs text-on-surface-variant">
                                <span className="flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[14px]">
                                    timer
                                  </span>
                                  {story.readTime}
                                </span>
                                <span>•</span>
                                <span className={story.statusType === 'review' ? 'text-error font-medium' : ''}>
                                  {story.author}
                                </span>
                                {story.doiCount && (
                                  <>
                                    <span>•</span>
                                    <span className="text-tertiary font-semibold">
                                      {story.doiCount}
                                    </span>
                                  </>
                                )}
                              </div>
                              <div className="flex items-center justify-between pt-3 mt-2 border-t border-primary-container/20 text-xs">
                                <span className="font-label-mono text-[11px] text-on-surface-variant">
                                  {story.location}
                                </span>
                                <span className="text-primary font-semibold flex items-center gap-0.5">
                                  {story.statusType === 'live' ? 'Editing' : story.statusType === 'review' ? 'Open' : story.statusType === 'draft' ? 'Resume' : 'Read-only Log'}
                                  {story.statusType === 'live' && (
                                    <span className="material-symbols-outlined text-[14px]">
                                      arrow_forward
                                    </span>
                                  )}
                                </span>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                      <div className="flex items-center justify-between text-xs font-semibold text-on-surface mb-1">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">
                            fact_check
                          </span>
                          ORCID Author Verification
                        </span>
                        <span className="text-tertiary">
                          38 / 38
                        </span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-1.5 overflow-hidden">
                        <div className="bg-tertiary h-1.5 rounded-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Editor Canvas */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#e2e8f0]">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f9fa] border border-primary-container/30 font-label-mono text-xs font-semibold text-primary">
                          <span className="material-symbols-outlined text-[14px]">
                            edit_document
                          </span>
                          ACTIVE STORY • DRAFT v3.4
                        </span>
                        <span className="text-xs text-on-surface-variant font-label-mono">
                          Autosaved 11:20 IST
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="inline-flex rounded-lg border border-[#e2e8f0] p-1 bg-[#f8fafc]">
                          <button 
                            type="button"
                            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors ${
                              themeMode === 'light'
                                ? 'bg-white text-on-surface shadow-xs'
                                : 'text-on-surface-variant hover:text-on-surface'
                            }`}
                            id="btnLightPreview"
                            onClick={() => setThemeMode('light')}
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              wb_sunny
                            </span>
                            Light
                          </button>
                          <button 
                            type="button"
                            className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors ${
                              themeMode === 'dark'
                                ? 'bg-white text-on-surface shadow-xs'
                                : 'text-on-surface-variant hover:text-on-surface'
                            }`}
                            id="btnDarkPreview"
                            onClick={() => setThemeMode('dark')}
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              bedtime
                            </span>
                            Polar Night
                          </button>
                        </div>
                        <button 
                          className="px-3 py-1.5 rounded-lg border border-[#e2e8f0] text-xs font-semibold text-primary hover:bg-[#f1f5f9] transition-colors flex items-center gap-1" 
                          onClick={() => setActiveTab('tab-history')}
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            history
                          </span>
                          History
                        </button>
                      </div>
                    </div>

                    <div className="mt-6">
                      <input 
                        className="w-full font-headline-sm text-2xl font-bold text-on-surface bg-transparent border-b border-transparent hover:border-[#cbd5e1] focus:border-primary-container focus:outline-none pb-1 transition-all" 
                        type="text" 
                        value={storyTitle} 
                        onChange={(e) => setStoryTitle(e.target.value)}
                      />
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-on-surface-variant font-label-mono">
                        <span>
                          CANVAS: <strong className="text-on-surface">{activeStoryObj.words}</strong>
                        </span>
                        <span>•</span>
                        <span>
                          READ TIME: <strong className="text-on-surface">{activeStoryObj.readTimeExact}</strong>
                        </span>
                        <span>•</span>
                        <span>
                          REPOSITORY: <code className="text-primary font-semibold bg-[#f1f5f9] px-2 py-0.5 rounded">{activeStoryObj.repo}</code>
                        </span>
                      </div>
                    </div>

                    {/* Editor Formatting Toolbar */}
                    <div className="mt-6 p-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-wrap">
                        <button type="button" className="px-2.5 py-1.5 rounded-lg hover:bg-white text-on-surface font-bold text-xs border border-transparent hover:border-[#cbd5e1]">
                          H2
                        </button>
                        <button type="button" className="px-2.5 py-1.5 rounded-lg hover:bg-white text-on-surface font-bold text-xs border border-transparent hover:border-[#cbd5e1]">
                          H3
                        </button>
                        <div className="w-px h-5 bg-[#cbd5e1] mx-1" />
                        <button type="button" className="p-1.5 rounded-lg hover:bg-white text-on-surface border border-transparent hover:border-[#cbd5e1]" title="Bold">
                          <span className="material-symbols-outlined text-[18px]">
                            format_bold
                          </span>
                        </button>
                        <button type="button" className="p-1.5 rounded-lg hover:bg-white text-on-surface border border-transparent hover:border-[#cbd5e1]" title="Italic">
                          <span className="material-symbols-outlined text-[18px]">
                            format_italic
                          </span>
                        </button>
                        <button type="button" className="p-1.5 rounded-lg hover:bg-white text-on-surface border border-transparent hover:border-[#cbd5e1]" title="Blockquote">
                          <span className="material-symbols-outlined text-[18px]">
                            format_quote
                          </span>
                        </button>
                        <div className="w-px h-5 bg-[#cbd5e1] mx-1" />
                        <button type="button" className="flex items-center gap-1 px-3 py-1 rounded-lg bg-secondary-container text-on-secondary-container text-xs font-semibold hover:bg-secondary-fixed transition-colors">
                          <span className="material-symbols-outlined text-[15px]">
                            compare
                          </span>
                          Insert Slider Block
                        </button>
                        <button type="button" className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-[#cbd5e1] text-primary text-xs font-semibold hover:bg-[#f1f5f9] transition-colors">
                          <span className="material-symbols-outlined text-[15px]">
                            bookmark_add
                          </span>
                          + Citation
                        </button>
                        <button type="button" className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-[#cbd5e1] text-primary text-xs font-semibold hover:bg-[#f1f5f9] transition-colors">
                          <span className="material-symbols-outlined text-[15px]">
                            spellcheck
                          </span>
                          Tag Glossary
                        </button>
                      </div>
                      <div className="text-[11px] font-label-mono text-tertiary flex items-center gap-1 font-semibold pr-2">
                        <span className="w-2 h-2 rounded-full bg-tertiary" />
                        Live Render
                      </div>
                    </div>

                    {/* Canvas Container (Theme Toggle Subject) */}
                    <div 
                      className={`mt-6 p-6 rounded-2xl transition-colors ${
                        themeMode === 'dark' 
                          ? 'bg-inverse-surface text-inverse-on-surface border border-gray-800' 
                          : 'bg-white text-on-surface border border-[#f1f5f9]'
                      }`} 
                      id="storyCanvasContainer"
                    >
                      <div className="text-base leading-relaxed relative">
                        <p>
                          <span className="float-left font-headline-sm text-5xl leading-none font-bold text-primary-container pr-3 pt-1">
                            F
                          </span>
                          or ninety-three consecutive solar days during the polar night at Maitri Station (70°45′57″S, 11°44′09″E), the sun remains entirely suppressed below the Antarctic horizon. Outside the pressurized habitation containers,{" "}
                          <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold border-b border-dashed border-primary cursor-help" title="Glossary: High-velocity downslope wind driven by gravity off the Antarctic ice sheet">
                            [[Katabatic Wind]]
                          </span>{" "}
                          systems accelerate down the polar plateau at speeds exceeding 140 km/h, sweeping across the barren, ice-free rocky terrain of the Schirmacher Range.
                        </p>
                      </div>

                      {/* Glacier Comparison Slider */}
                      <div className="my-6 p-5 rounded-2xl bg-[#f8fafc] text-on-surface border border-[#e2e8f0]">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">
                              layers
                            </span>
                            <span className="font-title-md text-sm font-bold text-on-surface">
                              Interactive Comparison: Schirmacher Lake Ice Cover (2014 vs. 2024)
                            </span>
                          </div>
                          <span className="font-label-mono text-[10px] bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider self-start sm:self-auto">
                            Multi-Spectral Sentinel-2 SAR
                          </span>
                        </div>

                        <div 
                          className="relative w-full h-80 rounded-xl overflow-hidden select-none border border-[#cbd5e1] cursor-ew-resize" 
                          id="glacierSliderContainer"
                          ref={sliderContainerRef}
                          onMouseDown={handleMouseDown}
                        >
                          {/* Before Image (Underneath) */}
                          <div 
                            className="absolute inset-0 bg-cover bg-center flex items-end p-4" 
                            data-alt="Satellite imagery 2014 Schirmacher Oasis perennial lake ice" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlMuQcfKixivsJH-8ZfdweD9n1KJcvlvWRPbDk2DJjxdSa4ZsNNuqjQtiMSVE2mtZ98ISTTxPYfe0wdKSzj6bmqnA4KS9m5j3H3NQxfcbet42OTcB4WeVF9lipe9jdpnRL7UNkCaEcc0xoauLwIccasVyyyslgTtdZhd-sTdF8LAJhuJJkZAwvtbKVW0SiqHj5EwseJ786-Nvrt3YHVTVtXxjIMutBxWxPb9uh7fIVJXd094RgHxof')" }}
                          >
                            <div className="px-2.5 py-1 rounded-md bg-on-surface/85 backdrop-blur-md text-white text-[11px] font-label-mono font-medium">
                              HISTORIC: FEB 2014 (94.2% LAKE ICE DENSITY)
                            </div>
                          </div>

                          {/* After Image (Clipped overlay) */}
                          <div 
                            className="absolute inset-y-0 left-0 overflow-hidden bg-cover bg-center flex items-end p-4 shadow-xl" 
                            data-alt="Satellite imagery 2024 Schirmacher Oasis melting nunatak ice" 
                            id="glacierSliderAfter" 
                            style={{ 
                              width: `${sliderPosition}%`,
                              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXCz51QQ7DeP9SbrN0L9yAJWi71JKtrPiTkWpGPxg-BH8oQfnCt0NwtdUwNLr0suIFifsJ0a1Ajn6oNlkvbXy_M65uYhIj_-SGUN5EfGUzr-w3tCePKA4vSYSgfTc5JR47zRpjZWte70IFh2BO6pHhWFh6tVoSdYEqz4zgrWt6-uLrc1BGBeIYcoKhDR3fx_PofKjSO_i_aBVkf7IjSU1WFu1rRPC0eZ7FSIJfoWXMj5vXxDETskeN')" 
                            }}
                          >
                            <div className="px-2.5 py-1 rounded-md bg-primary-container/90 backdrop-blur-md text-white text-[11px] font-label-mono font-medium whitespace-nowrap">
                              CURRENT OBSERVATION: FEB 2024 (78.6% LAKE ICE DENSITY)
                            </div>
                          </div>

                          {/* Slider Divider Handle */}
                          <div 
                            className="absolute top-0 bottom-0 -ml-3 w-6 flex items-center justify-center cursor-ew-resize z-20" 
                            id="glacierSliderHandle"
                            style={{ left: `${sliderPosition}%` }}
                          >
                            <div className="w-1 h-full bg-white shadow-md" />
                            <div className="absolute w-8 h-8 rounded-full bg-primary-container text-white shadow-lg flex items-center justify-center border-2 border-white">
                              <span className="material-symbols-outlined text-[16px]">
                                compare_arrows
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mt-3 font-label-mono text-[11px] text-on-surface-variant">
                          <span>
                            Drag handle horizontally to compare cryospheric shift over 10-year baseline.
                          </span>
                          <span className="text-primary font-semibold">
                            Sensor Source: NCPOR Cryosphere Portal
                          </span>
                        </div>
                      </div>

                      <div className="text-base leading-relaxed space-y-4">
                        <p>
                          The expeditionary science team maintained continuous boundary-layer atmospheric observations using ultrasonic anemometers and sonic detection ranging arrays. As confirmed by the telemetry record{" "}
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container font-label-mono text-xs font-semibold cursor-pointer hover:opacity-90">
                            <span className="material-symbols-outlined text-[13px]">
                              link
                            </span>
                            [Ref: NCPOR-TR-2024-08 (Maitri Boundary Layer)]
                          </span>
                          , turbulent heat flux anomalies spiked during early winter polar low depressions. The sensors situated near the base of the prominent{" "}
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold border-b border-dashed border-primary cursor-help" title="Glossary: An isolated peak of rock projecting above a surface of inland ice or snow">
                            [[Nunatak]]
                          </span>{" "}
                          outcrops registered ground level temperatures plummeting to -38.4°C with instantaneous gale shears reaching 41 m/s recorded by{" "}
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#eef2f6] text-primary font-label-mono text-xs font-semibold cursor-pointer hover:bg-[#e2e8f0]">
                            <span className="material-symbols-outlined text-[13px]">
                              sensors
                            </span>
                            [AWS Telemetry Station #4]
                          </span>
                          .
                        </p>
                      </div>

                      <div className="my-6 p-4 rounded-xl bg-[#f8fafc] text-on-surface border-l-4 border-primary-container flex gap-3 items-start">
                        <span className="material-symbols-outlined text-primary text-[28px] shrink-0 opacity-60">
                          format_quote
                        </span>
                        <div>
                          <blockquote className="font-headline-sm text-sm text-on-surface italic font-normal leading-relaxed">
                            "Wintering in East Antarctica is an unmatched discipline in biological resilience and precision data preservation. Even when the blizzard cuts the telemetry antenna, the human protocol continues without interruption."
                          </blockquote>
                          <div className="mt-2 font-label-mono text-[11px] text-on-surface-variant font-semibold uppercase">
                            — Dr. Ananya Sen, Station Commander (43rd Indian Antarctic Expedition)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-[#e2e8f0]">
                      <div className="flex items-center gap-2">
                        <span className="font-label-mono text-xs text-on-surface-variant">
                          PUBLISH DESTINATION:
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-mono text-xs font-semibold">
                          Homepage + Polar Dispatches RSS
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="px-4 py-2 rounded-xl bg-[#f1f5f9] hover:bg-[#e2e8f0] text-on-surface text-xs font-semibold transition-colors" type="button">
                          Schedule Release...
                        </button>
                        <button 
                          className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:opacity-95 shadow-sm transition-all flex items-center gap-2" 
                          id="btnPushCDN"
                          onClick={handlePushCDN}
                          type="button"
                        >
                          {cdnPushedMessage ? (
                            <>
                              <span className="material-symbols-outlined text-[16px]">verified</span>
                              Pushed Live to CDN
                            </>
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-[16px]">
                                publish
                              </span>
                              Update & Push to Live CDN
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 2: Homepage Curator (Slots) */}
            <div className={`tab-content flex flex-col gap-6 ${activeTab === 'tab-homepage' ? '' : 'hidden'}`} id="tab-homepage">
              <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e2e8f0]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-primary-container text-white">
                        <span className="material-symbols-outlined text-[18px]">
                          view_quilt
                        </span>
                      </span>
                      <h2 className="font-headline-sm text-xl font-bold text-on-surface">
                        Homepage Live Showcase Curator (Slot Matrix)
                      </h2>
                    </div>
                    <p className="text-sm text-on-surface-variant mt-1 max-w-3xl">
                      Arrange headline features and secondary cards displayed on the public landing page (
                      <code className="text-primary font-semibold">
                        /home
                      </code>
                      ). Position determines editorial weight and responsive layout priority.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <button className="px-4 py-2 rounded-xl bg-white border border-[#e2e8f0] hover:bg-surface-container text-on-surface text-xs font-medium transition-colors flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-[16px]">
                        history
                      </span>
                      Revert Order
                    </button>
                    <button 
                      className="px-5 py-2 rounded-xl bg-primary-container text-white text-xs font-semibold hover:opacity-95 shadow-sm transition-all flex items-center gap-1.5" 
                      id="btnApplyOrder"
                      onClick={handleApplyOrder}
                      type="button"
                    >
                      {homepageOrderSavedMessage ? (
                        <>
                          <span className="material-symbols-outlined text-[16px]">verified</span>
                          Homepage Order Saved
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>
                          Apply Homepage Order
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
                  {/* Slot 1 - Hero */}
                  <div className="md:col-span-12 rounded-2xl p-6 bg-[#f8fafc] border-2 border-primary-container/60 shadow-sm relative group">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e2e8f0]">
                      <div className="flex items-center gap-2">
                        <span className="cursor-grab text-outline hover:text-on-surface">
                          <span className="material-symbols-outlined text-[20px]">
                            drag_indicator
                          </span>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary text-white font-label-mono text-xs font-bold tracking-wider uppercase">
                          SLOT 1 • HERO FEATURE (100% WIDTH)
                        </span>
                        <span className="text-tertiary font-label-mono text-xs font-semibold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                          Active Live
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-on-surface text-xs hover:bg-[#f1f5f9] transition-colors" type="button">
                          Replace Content
                        </button>
                        <button className="px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-on-surface text-xs hover:bg-[#f1f5f9] transition-colors" type="button">
                          Schedule Window
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-4">
                      <div className="md:col-span-4 h-48 rounded-xl overflow-hidden bg-cover bg-center relative border border-[#cbd5e1]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhn2WVmQMYpSiNgJtg3HUazohjFLURztqLFsj67T-LeM15VSwqzDBEuxj0vt47A-sfKv74Xb9Do4_ekfoOYm6-0Cuv1-5xCAIjUbadtiKYUA6_Fs0o0NtC5eNSrtPXysVk3_mcV4GOpXYX3wpFZj40Ecbtxnd_nHhO3EVZlRezfH915LOzx9uHFAOWpQy-fLEg_mjTJd6OjwVKJU_RZosPuvyH7iTPinli6CXDeFZoamGqMTa_3aQP')" }}>
                        <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/75 text-white font-label-mono text-[10px]">
                          HERO BANNER ASSET
                        </div>
                      </div>
                      <div className="md:col-span-8 flex flex-col justify-between h-full py-1">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-label-mono text-primary font-bold">
                            <span>ANTARCTIC RESEARCH CLUSTER</span>
                            <span>•</span>
                            <span>43RD IAE FIELD DISPATCH</span>
                          </div>
                          <h3 className="font-headline-sm text-lg text-on-surface font-bold mt-1.5">
                            Overwintering in the Schirmacher Oasis: Survival, Science, and Solar Isolation
                          </h3>
                          <p className="text-sm text-on-surface-variant line-clamp-2 mt-2">
                            A personal chronicle and empirical investigation into 93 days of polar night, extreme katabatic microclimates, and microbial preservation beneath lake ice at Maitri Station.
                          </p>
                        </div>
                        <div className="flex items-center gap-4 pt-3 mt-3 border-t border-[#e2e8f0] text-xs text-on-surface-variant">
                          <span>
                            Author: <strong>Dr. Ananya Sen</strong>
                          </span>
                          <span>•</span>
                          <span>
                            Impressions: <strong>14.2K reads</strong>
                          </span>
                          <span>•</span>
                          <span>
                            CTR: <strong>9.4%</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slot 2 */}
                  <div className="md:col-span-4 rounded-2xl p-5 bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="cursor-grab text-outline hover:text-on-surface">
                            <span className="material-symbols-outlined text-[18px]">
                              drag_indicator
                            </span>
                          </span>
                          <span className="font-label-mono text-xs font-bold text-on-surface uppercase">
                            SLOT 2 • DISPATCH A
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-mono text-[10px] font-bold">
                          ACTIVE
                        </span>
                      </div>
                      <div className="h-32 rounded-xl overflow-hidden bg-cover bg-center border border-[#cbd5e1]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCphIiITCp4oMnfrzU4r4N6zR82HMGAXVn7hiOKZoioDii8RPahqVL8lkdPloGAjTMPTGm86VxYtYDf1bVVWLqy6bnlWQ8T4a2KZqnL5hrbXV5iSDLWrfYMxoJsvPq0pIutQE0hXDexChE0NSKYekd9aFTG4Fa7RkwnAsK4306_z6VOjGaLeu9DrWW4XXrT1TWFnkeQBrqwU_R90eayK_qVKddn5FfRmbUPujs9P3Urau-43s9gDMLo')" }} />
                      <h4 className="font-headline-sm text-sm font-bold text-on-surface mt-3">
                        IndARC Kongsfjorden Mooring Deployment
                      </h4>
                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                        Subsurface sensor array anchored at 192m depth tracking Atlantic water inflows into Arctic fjord ecosystems.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#e2e8f0]">
                      <span className="font-label-mono text-xs text-on-surface-variant">
                        Himadri Station
                      </span>
                      <button className="text-primary hover:underline font-label-mono text-xs font-semibold" type="button">
                        Change Slot →
                      </button>
                    </div>
                  </div>

                  {/* Slot 3 */}
                  <div className="md:col-span-4 rounded-2xl p-5 bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="cursor-grab text-outline hover:text-on-surface">
                            <span className="material-symbols-outlined text-[18px]">
                              drag_indicator
                            </span>
                          </span>
                          <span className="font-label-mono text-xs font-bold text-on-surface uppercase">
                            SLOT 3 • DISPATCH B
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-mono text-[10px] font-bold">
                          ACTIVE
                        </span>
                      </div>
                      <div className="h-32 rounded-xl overflow-hidden bg-cover bg-center border border-[#cbd5e1]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5-vljIUo9mBHhjzz3l6ybSp04wiK2mGHPwuRonMzSKn3fZu7uQe8zfDthDNekwwQnx98uRkqxKCOZo8S2FhYchMDEW4oMUOhNXkTdpWdoHQ_4pxpdxrDe53Q4U2-Mc1aomGaXx0_5URIcwqCRgK-GYUOASACF_TLvvwl6khAbkBX25C5tuqa6bao1OJGgjiwQ9IZMC97sst_0xPM8g5KSS_wZSc0Mr2NGNhOSH7SVs3ChPJqV8UyN')" }} />
                      <h4 className="font-headline-sm text-sm font-bold text-on-surface mt-3">
                        Southern Ocean Carbon Sink Observations
                      </h4>
                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                        Underway pCO2 measurements reveal seasonal fluctuations in biological pump efficiency south of the Polar Front.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#e2e8f0]">
                      <span className="font-label-mono text-xs text-on-surface-variant">
                        SOE-01 Cruise
                      </span>
                      <button className="text-primary hover:underline font-label-mono text-xs font-semibold" type="button">
                        Change Slot →
                      </button>
                    </div>
                  </div>

                  {/* Slot 4 */}
                  <div className="md:col-span-4 rounded-2xl p-5 bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="cursor-grab text-outline hover:text-on-surface">
                            <span className="material-symbols-outlined text-[18px]">
                              drag_indicator
                            </span>
                          </span>
                          <span className="font-label-mono text-xs font-bold text-on-surface uppercase">
                            SLOT 4 • DISPATCH C
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-label-mono text-[10px] font-bold">
                          ACTIVE
                        </span>
                      </div>
                      <div className="h-32 rounded-xl overflow-hidden bg-cover bg-center border border-[#cbd5e1]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhJczJ4PN3lD-cdMa6YM7qRhFgVqadOA7BTmf1cWfz0suOUF_waEiVtyt6JAhg6HPy-8yfk4uLmxordfVoklvhb-vAkEeqZVIevCyUVMkWw_h1LYW3FdE3uUTZrm5u0npzUSeed6dzeMfE7Y3yuoP-Q8tCTk_lHleKGopiO03bBnfJ5TU0aQtpDh0RWGPERdBlN7rMALx_qgRSwdAl55HHb29EmIjBP3SPBh-k2TBCe8Ccb3WwFcOD')" }} />
                      <h4 className="font-headline-sm text-sm font-bold text-on-surface mt-3">
                        Larsemann Hills Adélie Penguin Census
                      </h4>
                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                        Drone photogrammetry and acoustic monitoring identify resilient breeding pairs near Bharati Station.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#e2e8f0]">
                      <span className="font-label-mono text-xs text-on-surface-variant">
                        Bharati Station
                      </span>
                      <button className="text-primary hover:underline font-label-mono text-xs font-semibold" type="button">
                        Change Slot →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 3: Institutional Pages & Policies */}
            <div className={`tab-content flex flex-col gap-6 ${activeTab === 'tab-policies' ? '' : 'hidden'}`} id="tab-policies">
              <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#e2e8f0]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        policy
                      </span>
                      <h2 className="font-headline-sm text-xl font-bold text-on-surface">
                        Institutional Pages & Policy Governance
                      </h2>
                    </div>
                    <p className="text-sm text-on-surface-variant mt-1">
                      Mandatory Government Compliance, MoES statements, and statutory citizen-charter disclosures.
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-primary-container text-white text-xs font-semibold hover:opacity-95 shadow-sm transition-all flex items-center gap-1.5 self-start md:self-auto" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      add
                    </span>
                    Add Institutional Policy
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f1f5f9] transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-title-md text-sm font-semibold text-on-surface">
                          About NCPOR Polar Mission & Vision
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary text-white font-label-mono text-[10px] font-semibold">
                          Published
                        </span>
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        Last updated 12 days ago by Chief Admin • Reviewed by Director's Office
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-primary hover:bg-primary hover:text-white text-xs font-semibold transition-colors" type="button">
                        Edit Page
                      </button>
                      <button className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-white border border-transparent hover:border-[#e2e8f0]" title="Compare Revisions" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          history
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f1f5f9] transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-title-md text-sm font-semibold text-on-surface">
                          Open Data & DPDP Compliance Statement
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-semibold">
                          DPDP Act 2023
                        </span>
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        Verified compliance with Digital Personal Data Protection Act 2023 regulations
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-primary hover:bg-primary hover:text-white text-xs font-semibold transition-colors" type="button">
                        Edit Page
                      </button>
                      <button className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-white border border-transparent hover:border-[#e2e8f0]" title="Compare Revisions" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          history
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f1f5f9] transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-title-md text-sm font-semibold text-on-surface">
                          Accessibility Statement (GIGW 3.0 & WCAG 2.1 AAA)
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-primary font-label-mono text-[10px] font-semibold">
                          Changes Pending
                        </span>
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        Draft audio-description provisions under audit by NIC accessibility desk
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:opacity-90 transition-colors" type="button">
                        Review Diff
                      </button>
                      <button className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-white border border-transparent hover:border-[#e2e8f0]" title="Compare Revisions" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          history
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#f1f5f9] transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-title-md text-sm font-semibold text-on-surface">
                          Sample Data & Real-time Telemetry Disclaimer
                        </h4>
                        <span className="px-2 py-0.5 rounded-full bg-tertiary text-white font-label-mono text-[10px] font-semibold">
                          Active
                        </span>
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        Observational telemetry disclaimer for academic and non-commercial research use
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-primary hover:bg-primary hover:text-white text-xs font-semibold transition-colors" type="button">
                        Edit Page
                      </button>
                      <button className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-white border border-transparent hover:border-[#e2e8f0]" title="Compare Revisions" type="button">
                        <span className="material-symbols-outlined text-[18px]">
                          history
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab 4: Version History */}
            <div className={`tab-content flex flex-col gap-6 ${activeTab === 'tab-history' ? '' : 'hidden'}`} id="tab-history">
              <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm max-w-4xl">
                <div className="flex items-center justify-between pb-6 border-b border-[#e2e8f0]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      history_edu
                    </span>
                    <div>
                      <h2 className="font-headline-sm text-xl font-bold text-on-surface">
                        Version Trail (v3.4)
                      </h2>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Revision audit log for <em>"Overwintering in the Schirmacher Oasis"</em>
                      </p>
                    </div>
                  </div>
                  <span className="font-label-mono text-xs px-2.5 py-1 rounded bg-[#f1f5f9] text-on-surface font-semibold">
                    Active Story
                  </span>
                </div>

                <div className="relative pl-6 space-y-6 mt-6">
                  <div className="absolute top-3 bottom-3 left-2.5 w-0.5 bg-[#e2e8f0]" />
                  <div className="relative">
                    <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-white" />
                    <div className="p-4 rounded-xl bg-[#f0f9fa] border border-primary-container/30">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-xs font-bold text-primary">
                          v3.4 (CURRENT ACTIVE)
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Today 11:20 IST
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-on-surface mt-1">
                        Dr. Ananya Sen
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Added cryosphere sensor footnotes & glossary link to 'Nunatak' and 'Katabatic Wind'.
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-mono text-[10px] font-semibold">
                          +184 words
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white text-on-surface-variant font-label-mono text-[10px] border border-[#e2e8f0]">
                          +2 Citations
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-white" />
                    <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:bg-white transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-xs font-bold text-on-surface">
                          v3.3
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          Yesterday 16:45 IST
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-on-surface mt-1">
                        Editorial Desk (K. Nair)
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Language validation: Completed Hindi title & lead translation mirror.
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button className="text-primary hover:underline font-label-mono text-xs font-semibold" type="button">
                          Diff with v3.4
                        </button>
                        <span className="text-outline">•</span>
                        <button className="text-on-surface-variant hover:text-on-surface font-label-mono text-xs" type="button">
                          Restore
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-outline ring-4 ring-white" />
                    <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:bg-white transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-xs font-bold text-on-surface">
                          v3.2
                        </span>
                        <span className="font-label-mono text-[11px] text-on-surface-variant">
                          2 days ago
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-on-surface mt-1">
                        AI Content Studio Engine
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Auto-extracted key takeaway highlights and generated accessible audio transcription draft.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e2e8f0] flex items-center justify-between">
                  <button className="px-4 py-2 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-xs font-semibold text-on-surface hover:bg-[#f1f5f9] transition-colors flex items-center gap-1.5" type="button">
                    <span className="material-symbols-outlined text-[16px]">
                      file_download
                    </span>
                    Download Markdown
                  </button>
                  <button 
                    className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:opacity-95 transition-colors flex items-center gap-1.5" 
                    onClick={() => setActiveTab('tab-editor')}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_back
                    </span>
                    Return to Story Editor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-[#e2e8f0] mt-auto">
          <div className="w-full max-w-[1440px] mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  verified
                </span>
                <span className="font-label-mono text-[11px] text-on-surface font-semibold uppercase tracking-wider">
                  Level 4 Security Clearance Active
                </span>
              </div>
              <span>•</span>
              <span>
                Ministry of Earth Sciences (MoES) & NCPOR Provenance
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>
                DPDP Act 2023 Compliant
              </span>
              <span>•</span>
              <span>
                © 2024 National Centre for Polar and Ocean Research
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}