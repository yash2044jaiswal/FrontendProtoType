import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AccessibilityAboutPage() {
  const navigate = useNavigate();

  // Tab State: 'access' or 'about'
  const [activeTab, setActiveTab] = useState('access');

  // Accessibility State Controls
  const [scalePercent, setScalePercent] = useState(100);
  const [contrastActive, setContrastActive] = useState(false);
  const [dyslexiaActive, setDyslexiaActive] = useState(false);
  const [satActive, setSatActive] = useState(false);

  // Audio Player Controls
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1.0);
  const [currentTrack, setCurrentTrack] = useState({
    title: 'Overwintering at Maitri: Acoustic Soundscapes & Scientific Field Logs',
    duration: '12:15',
    currTime: '03:42'
  });
  const [waveformPct, setWaveformPct] = useState(30);

  // Modal State
  const [transcriptOpen, setTranscriptOpen] = useState(false);

  // Workflow Callout State
  const [workflowDetail, setWorkflowDetail] = useState({
    step: 1,
    title: 'Step 1: In-Situ Field Data Collection Overview',
    desc: 'Instruments operate under sub-zero extremes (-40°C to -89°C). Automated telemetry stations use solar/wind regenerative battery banks with triple-redundant data loggers.'
  });

  // FAQ Accordion State
  const [openFaqs, setOpenFaqs] = useState({ 'faq-1': true });

  // Search Palette State
  const [searchQuery, setSearchQuery] = useState('');

  // Handlers
  const adjustTextScale = (delta) => {
    setScalePercent((prev) => Math.max(90, Math.min(130, prev + delta)));
  };

  const handleSelectTrack = (title, duration) => {
    setCurrentTrack({
      title,
      duration,
      currTime: '00:00'
    });
    setAudioPlaying(true);
    setWaveformPct(0);
  };

  const handleWaveformClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
    setWaveformPct(pct);
  };

  const showWorkflowDetail = (step) => {
    const details = {
      1: {
        title: 'Step 1: In-Situ Field Data Collection',
        desc: 'Instruments operate under extreme sub-zero conditions (-40°C to -89°C). Automated weather stations employ wind/solar hybrid micro-turbines with triple-redundant data loggers.'
      },
      2: {
        title: 'Step 2: Satellite Downlink via INSAT & Polar Relays',
        desc: 'Telemetry packets are serialized, compressed, and broadcasted over UHF/L-band channels to INSAT-3D and Iridium constellations, received at NCPOR ground station in Vasco-da-Gama.'
      },
      3: {
        title: 'Step 3: NPDC Calibration & Quality Control',
        desc: 'National Polar Data Centre algorithms scan for instrument drift, sensor icing, and multipath transmission errors, flagging outliers against historical baseline records.'
      },
      4: {
        title: 'Step 4: POLARIS Synthesis & Audio Translation',
        desc: 'The POLARIS processing engine converts numerical matrices into human-readable scientific briefs, synchronized audio narratives, and interactive cartography.'
      },
      5: {
        title: 'Step 5: Open Dissemination & Policy Sharing',
        desc: 'Datasets are served via open REST/GraphQL APIs, supporting school climate education, parliamentary reports, and global IPCC research consortiums.'
      }
    };
    if (details[step]) {
      setWorkflowDetail({ step, ...details[step] });
    }
  };

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <style>{`
        @layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}
        ::-webkit-scrollbar{display:none;}
        @keyframes telemetryPulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.4;transform:scale(0.85);}}
        .telemetry-dot{animation:telemetryPulse 2s cubic-bezier(0.4,0,0.6,1) infinite;}
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-20 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-lg shrink-0">
            <Link className="flex items-center gap-space-md group cursor-pointer" to="/">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[24px]">
                  explore
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight leading-none">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-secondary uppercase leading-tight mt-1">
                  NCPOR · MoES · Govt. of India
                </span>
              </div>
            </Link>
            <div className="hidden xl:flex items-center gap-space-sm bg-surface-container px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary-container telemetry-dot" />
              <span className="font-label-mono text-label-mono text-secondary font-semibold">
                Maitri: -18.4°C | 14 kt S
              </span>
            </div>
          </div>
          <nav className="hidden 2xl:flex items-center gap-1 font-label-md text-label-md" data-active-classes="bg-primary-container text-on-primary-container rounded-lg">
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
            <Link className="px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="community" to="/community">
              Community
            </Link>
            <Link className="px-3 py-2 bg-primary-container text-on-primary-container rounded-lg transition-colors" data-path="about-accessibility" to="/about/accessibility">
              About & Accessibility
            </Link>
          </nav>
          <div className="flex items-center gap-space-md shrink-0">
            <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center justify-between w-44 px-3 py-1.5 bg-surface-container rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors focus-within:ring-2 focus-within:ring-primary">
              <span className="flex items-center gap-2 font-body-sm text-body-sm w-full">
                <span className="material-symbols-outlined text-[18px]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search polar records..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-on-surface placeholder:text-on-surface-variant text-body-sm"
                />
              </span>
              <kbd className="font-label-mono text-label-mono bg-surface px-1.5 py-0.5 rounded shadow-sm text-secondary shrink-0">
                ⌘K
              </kbd>
            </form>
            <div className="flex items-center bg-surface-container rounded-lg p-0.5">
              <button className="px-2.5 py-1 rounded font-label-mono text-label-mono bg-surface-container-lowest text-primary font-bold shadow-sm" type="button">
                EN
              </button>
              <button className="px-2.5 py-1 rounded font-label-mono text-label-mono text-secondary hover:text-on-surface transition-colors cursor-pointer" type="button">
                HI
              </button>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <section className="w-full bg-surface-container-low/70 py-16 px-margin">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                  <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                    <span className="material-symbols-outlined text-[16px]">
                      home
                    </span>
                    <span>
                      Home
                    </span>
                  </Link>
                  <span>
                    /
                  </span>
                  <span className="text-primary font-semibold">
                    About & Accessibility
                  </span>
                </nav>
                <div className="inline-flex items-center gap-2 bg-surface-container-lowest shadow-sm px-3.5 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="font-label-mono text-label-mono text-on-surface tracking-wider font-semibold">
                    GOVERNMENT OF INDIA • MINISTRY OF EARTH SCIENCES • NCPOR PUBLIC ACCESS INITIATIVE
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
                <div className="max-w-3xl space-y-4">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-light tracking-tight">
                    Accessibility Centre & About{" "}
                    <span className="font-bold text-primary">
                      POLARIS
                    </span>
                  </h1>
                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                    The National Centre for Polar and Ocean Research (NCPOR) is committed to barrier-free, equitable dissemination of Arctic, Antarctic, and Himalayan scientific discoveries. Explore adaptive controls, auditory dispatches, and institutional governance frameworks.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex flex-col items-center bg-surface-container px-4 py-2.5 rounded-xl shadow-sm text-center">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      AAA
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      WCAG 2.2
                    </span>
                  </div>
                  <div className="flex flex-col items-center bg-surface-container px-4 py-2.5 rounded-xl shadow-sm text-center">
                    <span className="font-headline-sm text-headline-sm text-tertiary font-bold">
                      GIGW 3.0
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      MeitY Certified
                    </span>
                  </div>
                  <div className="flex flex-col items-center bg-surface-container px-4 py-2.5 rounded-xl shadow-sm text-center">
                    <span className="font-headline-sm text-headline-sm text-primary-container font-bold">
                      100%
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Open Access
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div aria-label="Portal Navigation Tabs" className="inline-flex p-1.5 bg-surface-container rounded-2xl shadow-sm" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    id="tab-btn-access"
                    aria-controls="panel-accessibility"
                    aria-selected={activeTab === 'access'}
                    onClick={() => setActiveTab('access')}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-title-md text-title-md transition-all cursor-pointer ${
                      activeTab === 'access'
                        ? 'shadow-sm bg-primary text-on-primary font-semibold'
                        : 'text-secondary hover:text-on-surface font-medium'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      accessibility_new
                    </span>
                    <span>
                      Accessibility Centre
                    </span>
                    <span className={`font-label-mono text-label-mono px-2 py-0.5 rounded-full ${
                      activeTab === 'access' ? 'bg-on-primary/20 text-on-primary' : 'bg-surface-container-high text-secondary'
                    }`}>
                      /accessibility
                    </span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    id="tab-btn-about"
                    aria-controls="panel-about"
                    aria-selected={activeTab === 'about'}
                    onClick={() => setActiveTab('about')}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-title-md text-title-md transition-all cursor-pointer ${
                      activeTab === 'about'
                        ? 'shadow-sm bg-primary text-on-primary font-semibold'
                        : 'text-secondary hover:text-on-surface font-medium'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      info
                    </span>
                    <span>
                      About NCPOR & POLARIS
                    </span>
                    <span className={`font-label-mono text-label-mono px-2 py-0.5 rounded-full ${
                      activeTab === 'about' ? 'bg-on-primary/20 text-on-primary' : 'bg-surface-container-high text-secondary'
                    }`}>
                      /about
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ACCESSIBILITY PANEL */}
          <div className={`w-full flex-col gap-24 py-16 px-margin max-w-[1280px] mx-auto ${activeTab === 'access' ? 'flex' : 'hidden'}`} id="panel-accessibility">
            <section className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                    Sensory Adaptation Engine
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-light mt-1">
                    Interface Preferences & Ergonomics
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-secondary font-label-mono text-label-mono bg-surface-container px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span>
                    Adaptive Profiles Saved to Session Memory
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        format_size
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold pt-1">
                      Text Scaling
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Enlarge typographic scales globally up to 130% without clipping.
                    </p>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-low p-1.5 rounded-xl">
                    <button
                      type="button"
                      title="Decrease font size"
                      onClick={() => adjustTextScale(-10)}
                      className="w-9 h-9 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high flex items-center justify-center text-on-surface font-bold shadow-sm transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        remove
                      </span>
                    </button>
                    <span className="font-label-mono text-label-mono font-bold text-primary" id="scale-indicator">
                      {scalePercent}% {scalePercent === 100 ? 'Default' : ''}
                    </span>
                    <button
                      type="button"
                      title="Increase font size"
                      onClick={() => adjustTextScale(10)}
                      className="w-9 h-9 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high flex items-center justify-center text-on-surface font-bold shadow-sm transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        contrast
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold pt-1">
                      High Contrast Mode
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Elevate color ratio to 7:1 (WCAG AAA) with stark monochromes.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className={`font-label-mono text-label-mono ${contrastActive ? 'text-primary font-bold' : 'text-secondary'}`}>
                      {contrastActive ? 'WCAG AAA (7:1)' : 'Standard (4.5:1)'}
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={contrastActive}
                      onClick={() => setContrastActive(!contrastActive)}
                      className={`w-12 h-6 rounded-full relative p-0.5 transition-colors focus:outline-none cursor-pointer ${
                        contrastActive ? 'bg-primary' : 'bg-surface-container-high'
                      }`}
                    >
                      <span
                        className={`block w-5 h-5 bg-surface-container-lowest rounded-full shadow-sm transform transition-transform ${
                          contrastActive ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        spellcheck
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold pt-1">
                      Dyslexia Support
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Increases letter spacing, line height, and distinct baseline weights.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className={`font-label-mono text-label-mono ${dyslexiaActive ? 'text-primary font-bold' : 'text-secondary'}`}>
                      {dyslexiaActive ? 'Enhanced Spacing' : 'Standard Glyphs'}
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={dyslexiaActive}
                      onClick={() => setDyslexiaActive(!dyslexiaActive)}
                      className={`w-12 h-6 rounded-full relative p-0.5 transition-colors focus:outline-none cursor-pointer ${
                        dyslexiaActive ? 'bg-primary' : 'bg-surface-container-high'
                      }`}
                    >
                      <span
                        className={`block w-5 h-5 bg-surface-container-lowest rounded-full shadow-sm transform transition-transform ${
                          dyslexiaActive ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        satellite_alt
                      </span>
                    </div>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold pt-1">
                      Satellite Data Mode
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      Replaces 3D globes and heavy video feeds with lightweight raw telemetry.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className={`font-label-mono text-label-mono ${satActive ? 'text-primary font-bold' : 'text-secondary'}`}>
                      {satActive ? 'Low-Data Active' : 'Standard (Rich)'}
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={satActive}
                      onClick={() => setSatActive(!satActive)}
                      className={`w-12 h-6 rounded-full relative p-0.5 transition-colors focus:outline-none cursor-pointer ${
                        satActive ? 'bg-primary' : 'bg-surface-container-high'
                      }`}
                    >
                      <span
                        className={`block w-5 h-5 bg-surface-container-lowest rounded-full shadow-sm transform transition-transform ${
                          satActive ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low px-6 py-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary-container ring-4 ring-primary-container/20" />
                  <span className="font-title-md text-title-md text-on-surface font-medium">
                    Focus Indicator Assist
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary">
                    High-visibility 2px oceanic cyan focus ring active globally.
                  </span>
                </div>
                <div className="flex items-center gap-3 font-label-mono text-label-mono text-secondary">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      check_circle
                    </span>
                    Screen Reader Verified
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      check_circle
                    </span>
                    ARIA 1.2 Landmarks
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      check_circle
                    </span>
                    Reduced Motion Responsive
                  </span>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-6">
              <div className="space-y-1">
                <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                  Standard Key Bindings
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-light">
                  Rapid Keyboard Navigation Matrix
                </h2>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
                        <th className="py-4 px-6 font-semibold">
                          Key Combination
                        </th>
                        <th className="py-4 px-6 font-semibold">
                          Target Action
                        </th>
                        <th className="py-4 px-6 font-semibold">
                          Operational Context
                        </th>
                        <th className="py-4 px-6 font-semibold">
                          Standard Reference
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <div className="inline-flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                              Tab
                            </kbd>
                            <span className="text-secondary text-xs">or</span>
                            <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                              Shift + Tab
                            </kbd>
                          </div>
                        </td>
                        <td className="py-3.5 px-6 font-medium">
                          Sequential Element Focus
                        </td>
                        <td className="py-3.5 px-6 text-secondary">
                          Traverse forwards or backwards across navigation controls, accordions, and tools
                        </td>
                        <td className="py-3.5 px-6 font-label-mono text-label-mono text-secondary">
                          W3C UAAG 2.0
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <div className="inline-flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                              Space
                            </kbd>
                            <span className="text-secondary text-xs">/</span>
                            <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                              Enter
                            </kbd>
                          </div>
                        </td>
                        <td className="py-3.5 px-6 font-medium">
                          Activate Component / Expand Accordion
                        </td>
                        <td className="py-3.5 px-6 text-secondary">
                          Execute primary actions, collapse/expand panels, and trigger media streaming
                        </td>
                        <td className="py-3.5 px-6 font-label-mono text-label-mono text-secondary">
                          HTML5 Interactive
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                            Alt + 1
                          </kbd>
                        </td>
                        <td className="py-3.5 px-6 font-medium">
                          Bypass Header & Skip to Main Content
                        </td>
                        <td className="py-3.5 px-6 text-secondary">
                          Immediate jump to the focal research payload or tabular data view
                        </td>
                        <td className="py-3.5 px-6 font-label-mono text-label-mono text-secondary">
                          WCAG 2.4.1 Bypass
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                            Alt + A
                          </kbd>
                        </td>
                        <td className="py-3.5 px-6 font-medium">
                          Toggle Accessibility Preferences Dock
                        </td>
                        <td className="py-3.5 px-6 text-secondary">
                          Quick access drawer for font scale, high contrast, and screen assistance
                        </td>
                        <td className="py-3.5 px-6 font-label-mono text-label-mono text-secondary">
                          Custom AccessKey
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                            Alt + G
                          </kbd>
                        </td>
                        <td className="py-3.5 px-6 font-medium">
                          Switch to 3D/2D Expedition Globe
                        </td>
                        <td className="py-3.5 px-6 text-secondary">
                          Direct jump to polar station orbital telemetry and Antarctic research sites
                        </td>
                        <td className="py-3.5 px-6 font-label-mono text-label-mono text-secondary">
                          POLARIS Route Key
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <div className="inline-flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                              ⌘K
                            </kbd>
                            <span className="text-secondary text-xs">or</span>
                            <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                              Alt + S
                            </kbd>
                          </div>
                        </td>
                        <td className="py-3.5 px-6 font-medium">
                          Global Polar Repository Search
                        </td>
                        <td className="py-3.5 px-6 text-secondary">
                          Activates command palette for core specimens, papers, and expedition manifests
                        </td>
                        <td className="py-3.5 px-6 font-label-mono text-label-mono text-secondary">
                          Command Palette
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-3.5 px-6">
                          <kbd className="px-2 py-1 bg-surface-container rounded font-label-mono text-label-mono text-primary font-bold shadow-sm">
                            Esc
                          </kbd>
                        </td>
                        <td className="py-3.5 px-6 font-medium">
                          Close Overlays, Modals & Audio Drawers
                        </td>
                        <td className="py-3.5 px-6 text-secondary">
                          Restores focus to preceding interactive element seamlessly
                        </td>
                        <td className="py-3.5 px-6 font-label-mono text-label-mono text-secondary">
                          WAI-ARIA Dialog
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                    Auditory Science Service
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-light">
                    Spoken Dispatches & Polar Soundscapes
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-secondary max-w-md">
                  Fully described acoustic telemetry, field recordings, and research summaries recorded in dual English &amp; Hindi audio streams.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl shadow-md p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-surface-container">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      aria-label="Play Master Dispatch"
                      onClick={() => setAudioPlaying(!audioPlaying)}
                      className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md hover:bg-primary-container transition-transform active:scale-95 shrink-0 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[32px]">
                        {audioPlaying ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-tertiary" />
                        <span className="font-label-mono text-label-mono text-primary uppercase font-bold">
                          Now Loaded: Field Dispatch #04
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        {currentTrack.title}
                      </h3>
                      <span className="font-label-mono text-label-mono text-secondary">
                        Narration by Dr. Ananya Sen, Atmospheric Division, NCPOR
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center bg-surface-container-low px-3 py-1.5 rounded-lg text-secondary font-label-mono text-label-mono">
                      <span className="material-symbols-outlined text-[18px] mr-1.5 text-primary">
                        record_voice_over
                      </span>
                      <span>
                        Natural Human
                      </span>
                    </div>
                    <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
                      {[1.0, 1.25, 1.5].map((speed) => (
                        <button
                          key={speed}
                          type="button"
                          onClick={() => setPlaySpeed(speed)}
                          className={`px-2.5 py-1 rounded font-label-mono text-label-mono cursor-pointer transition-colors ${
                            playSpeed === speed
                              ? 'text-primary font-bold bg-surface-container-lowest shadow-sm'
                              : 'text-secondary hover:text-on-surface'
                          }`}
                        >
                          {speed.toFixed(speed % 1 === 0 ? 1 : 2)}x
                        </button>
                      ))}
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-low hover:bg-surface-container rounded-lg font-label-mono text-label-mono text-on-surface transition-colors cursor-pointer" title="Download Audio File" type="button">
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        download
                      </span>
                      <span>
                        MP3
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTranscriptOpen(true)}
                      title="View Full Text Transcript"
                      className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-low hover:bg-surface-container rounded-lg font-label-mono text-label-mono text-on-surface transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        description
                      </span>
                      <span>
                        Transcript
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-mono text-label-mono text-secondary">
                    <span>
                      {currentTrack.currTime}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-tertiary">
                        48kHz High-Fidelity Audio
                      </span>
                      <span>•</span>
                      <span>
                        Acoustic Hydrophone &amp; Anemometer Array
                      </span>
                    </div>
                    <span>
                      {currentTrack.duration}
                    </span>
                  </div>
                  <div
                    onClick={handleWaveformClick}
                    className="w-full bg-surface-container h-8 rounded-lg relative overflow-hidden flex items-center px-1 cursor-pointer group"
                  >
                    <svg className="w-full h-6 text-outline-variant group-hover:text-secondary transition-colors" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 400 30">
                      <path d="M2,15 L4,10 L4,20 L6,15 M8,15 L10,6 L10,24 L12,15 M14,15 L16,12 L16,18 L18,15 M20,15 L22,4 L22,26 L24,15 M26,15 L28,8 L28,22 L30,15 M32,15 L34,14 L34,16 L36,15 M38,15 L40,2 L40,28 L42,15 M44,15 L46,9 L46,21 L48,15 M50,15 L52,7 L52,23 L54,15 M56,15 L58,11 L58,19 L60,15 M62,15 L64,5 L64,25 L66,15 M68,15 L70,13 L70,17 L72,15 M74,15 L76,3 L76,27 L78,15 M80,15 L82,10 L82,20 L84,15 M86,15 L88,6 L88,24 L90,15 M92,15 L94,12 L94,18 L96,15 M98,15 L100,5 L100,25 L102,15 M104,15 L106,9 L106,21 L108,15 M110,15 L112,4 L112,26 L114,15 M116,15 L118,12 L118,18 L120,15 M122,15 L124,7 L124,23 L126,15 M128,15 L130,2 L130,28 L132,15 M134,15 L136,11 L136,19 L138,15 M140,15 L142,6 L142,24 L144,15 M146,15 L148,8 L148,22 L150,15 M152,15 L154,13 L154,17 L156,15 M158,15 L160,4 L160,26 L162,15 M164,15 L166,10 L166,20 L168,15 M170,15 L172,5 L172,25 L174,15 M176,15 L178,11 L178,19 L180,15 M182,15 L184,8 L184,22 L186,15 M188,15 L190,3 L190,27 L192,15 M194,15 L196,10 L196,20 L198,15 M200,15 L202,6 L202,24 L204,15 M206,15 L208,12 L208,18 L210,15 M212,15 L214,4 L214,26 L216,15 M218,15 L220,9 L220,21 L222,15 M224,15 L226,14 L226,16 L228,15 M230,15 L232,5 L232,25 L234,15 M236,15 L238,8 L238,22 L240,15 M242,15 L244,11 L244,19 L246,15 M248,15 L250,3 L250,27 L252,15 M254,15 L256,10 L256,20 L258,15 M260,15 L262,7 L262,23 L264,15 M266,15 L268,12 L268,18 L270,15 M272,15 L274,5 L274,25 L276,15 M278,15 L280,9 L280,21 L282,15 M284,15 L286,2 L286,28 L288,15 M290,15 L292,8 L292,22 L294,15 M296,15 L298,13 L298,17 L300,15 M302,15 L304,6 L304,24 L306,15 M308,15 L310,10 L310,20 L312,15 M314,15 L316,4 L316,26 L318,15 M320,15 L322,12 L322,18 L324,15 M326,15 L328,7 L328,23 L330,15 M332,15 L334,3 L334,27 L336,15 M338,15 L340,11 L340,19 L342,15 M344,15 L346,6 L346,24 L348,15 M350,15 L352,8 L352,22 L354,15 M356,15 L358,13 L358,17 L360,15 M362,15 L364,5 L364,25 L366,15 M368,15 L370,10 L370,20 L372,15 M374,15 L376,4 L376,26 L378,15 M380,15 L382,9 L382,21 L384,15 M386,15 L388,12 L388,18 L390,15 M392,15 L394,6 L394,24 L396,15 M398,15 L400,14 L400,16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <div className="absolute left-0 top-0 bottom-0 bg-primary/25 pointer-events-none transition-all" style={{ width: `${waveformPct}%` }} />
                    <div className="absolute top-1 bottom-1 w-1 bg-primary rounded-full pointer-events-none shadow" style={{ left: `${waveformPct}%` }} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div
                  onClick={() => handleSelectTrack('The Cryospheric Sentinel: 40 Years of Indian Science in Antarctica', '14:20')}
                  className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary transition-colors flex items-center justify-center font-label-mono text-label-mono font-bold text-secondary">
                      01
                    </span>
                    <div className="flex flex-col">
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        The Cryospheric Sentinel: 40 Years of Indian Science in Antarctica
                      </h4>
                      <span className="font-body-sm text-body-sm text-secondary">
                        Historical expedition overview from Dakshin Gangotri to Bharati station
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                      Overview
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      14:20
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-primary group-hover:translate-x-1 transition-transform">
                      play_circle
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleSelectTrack('Sounds of the Schirmacher Oasis: Wind Shear & Polar Night Survival', '08:45')}
                  className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary transition-colors flex items-center justify-center font-label-mono text-label-mono font-bold text-secondary">
                      02
                    </span>
                    <div className="flex flex-col">
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        Sounds of the Schirmacher Oasis: Wind Shear &amp; Polar Night Survival
                      </h4>
                      <span className="font-body-sm text-body-sm text-secondary">
                        Raw acoustic field recording captured at Maitri Station during a 45-knot blizzard
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono font-semibold">
                      Field Recording
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      08:45
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-primary group-hover:translate-x-1 transition-transform">
                      play_circle
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleSelectTrack('Glacier Ablation in Chandra Basin, Himalayas', '06:30')}
                  className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary transition-colors flex items-center justify-center font-label-mono text-label-mono font-bold text-secondary">
                      03
                    </span>
                    <div className="flex flex-col">
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        Glacier Ablation in Chandra Basin, Himalayas
                      </h4>
                      <span className="font-body-sm text-body-sm text-secondary">
                        Briefing on mass balance shifts observed from Himansh Observatory (Spiti, HP)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                      Research Briefing
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      06:30
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-primary group-hover:translate-x-1 transition-transform">
                      play_circle
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleSelectTrack('IndARC: Listening to Arctic Fjords beneath Kongsfjorden Ice', '11:15')}
                  className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary transition-colors flex items-center justify-center font-label-mono text-label-mono font-bold text-secondary">
                      04
                    </span>
                    <div className="flex flex-col">
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        IndARC: Listening to Arctic Fjords beneath Kongsfjorden Ice
                      </h4>
                      <span className="font-body-sm text-body-sm text-secondary">
                        Sub-surface mooring acoustic telemetry detecting marine glaciers calving
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary font-label-mono text-label-mono font-semibold">
                      Marine Acoustics
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      11:15
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-primary group-hover:translate-x-1 transition-transform">
                      play_circle
                    </span>
                  </div>
                </div>
                <div
                  onClick={() => handleSelectTrack('Emperor Penguin Bio-Telemetry in Prydz Bay', '07:50')}
                  className="bg-surface-container-lowest p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary transition-colors flex items-center justify-center font-label-mono text-label-mono font-bold text-secondary">
                      05
                    </span>
                    <div className="flex flex-col">
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                        Emperor Penguin Bio-Telemetry in Prydz Bay
                      </h4>
                      <span className="font-body-sm text-body-sm text-secondary">
                        Colony dynamics and dive profiling recorded near the Larsemann Hills
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono font-semibold">
                      Wildlife Ecology
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      07:50
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-primary group-hover:translate-x-1 transition-transform">
                      play_circle
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ABOUT PANEL */}
          <div className={`w-full flex-col gap-24 py-16 px-margin max-w-[1280px] mx-auto ${activeTab === 'about' ? 'flex' : 'hidden'}`} id="panel-about">
            <section className="flex flex-col gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                      Autonomous R&amp;D Institution
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-light leading-tight">
                      National Centre for Polar &amp; Ocean Research (NCPOR)
                    </h2>
                  </div>
                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                    Headquartered at Headland Sada, Vasco-da-Gama, Goa, NCPOR is the premier nodal agency under the Ministry of Earth Sciences (MoES), Government of India. Mandated to orchestrate, conduct, and sustain India's expeditions across the Southern Ocean, Antarctica, the Arctic, and High-Altitude Himalayas.
                  </p>
                  <div className="p-5 rounded-2xl bg-surface-container-low flex flex-col sm:flex-row gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0">
                      <span className="material-symbols-outlined text-[26px]">
                        public
                      </span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                        The POLARIS Digital Outreach Engine
                      </h4>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">
                        Polar Long-term Archive &amp; Interactive Research Information System (POLARIS) translates complex oceanic telemetry, ice core paleoclimate curves, and station metrics into open, accessible public science.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-surface-container pb-3">
                      <span className="font-title-md text-title-md font-semibold text-on-surface">
                        Permanent Research Assets
                      </span>
                      <span className="font-label-mono text-label-mono px-2.5 py-1 bg-tertiary-container/15 text-tertiary font-bold rounded-full">
                        4 Active Hubs
                      </span>
                    </div>
                    <ul className="space-y-3 font-body-sm text-body-sm">
                      <li className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-on-surface block">
                            Bharati Station
                          </span>
                          <span className="text-secondary font-label-mono text-label-mono">
                            Larsemann Hills, Antarctica • 69°24'S, 76°11'E
                          </span>
                        </div>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold">
                          Year-Round
                        </span>
                      </li>
                      <li className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-on-surface block">
                            Maitri Station
                          </span>
                          <span className="text-secondary font-label-mono text-label-mono">
                            Schirmacher Oasis, Antarctica • 70°46'S, 11°44'E
                          </span>
                        </div>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold">
                          Year-Round
                        </span>
                      </li>
                      <li className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-on-surface block">
                            Himadri Station
                          </span>
                          <span className="text-secondary font-label-mono text-label-mono">
                            Ny-Ålesund, Svalbard, Arctic • 78°55'N, 11°56'E
                          </span>
                        </div>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold">
                          Seasonal
                        </span>
                      </li>
                      <li className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-on-surface block">
                            Himansh Observatory
                          </span>
                          <span className="text-secondary font-label-mono text-label-mono">
                            Chandra Basin, Spiti Valley, Himalayas • 4,000m ASL
                          </span>
                        </div>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold">
                          Active
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                    End-to-End Pipeline
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-light">
                    Scientific Telemetry &amp; Public Outreach Lifecycle
                  </h2>
                </div>
                <span className="font-label-mono text-label-mono text-secondary">
                  Click any step for pipeline mechanics
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((step) => {
                  const titles = ['', 'In-Situ Sensing', 'Satellite Relay', 'NPDC Validation', 'POLARIS Engine', 'Open Dissemination'];
                  const icons = ['', 'sensors', 'satellite', 'verified', 'auto_graph', 'share'];
                  const descs = [
                    '',
                    'Autonomous Weather Stations (AWS), ice-core drilling, and underwater seabed moorings.',
                    'Encrypted burst downlink via INSAT & Iridium constellation to the NCPOR Earth Station in Goa.',
                    'Calibration, automated spike filtering, and metadata tagging by the National Polar Data Centre.',
                    'Synthesis of numerical climate models into interactive charts, 3D scenes, and audio briefings.',
                    'Free public access for academic researchers, school curricula, and international science bodies.'
                  ];
                  return (
                    <div
                      key={step}
                      onClick={() => showWorkflowDetail(step)}
                      className={`bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between gap-6 group hover:translate-y-[-2px] ${
                        workflowDetail.step === step ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-label-mono text-label-mono font-bold text-primary px-2 py-0.5 rounded bg-secondary-container">
                            0{step}
                          </span>
                          <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[24px]">
                            {icons[step]}
                          </span>
                        </div>
                        <h3 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                          {titles[step]}
                        </h3>
                        <p className="font-body-sm text-body-sm text-secondary">
                          {descs[step]}
                        </p>
                      </div>
                      <span className="font-label-mono text-label-mono text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Inspect Specs
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low transition-all" id="workflow-callout">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    info
                  </span>
                  <div>
                    <h4 className="font-title-md text-title-md font-semibold text-on-surface" id="workflow-callout-title">
                      {workflowDetail.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary mt-0.5" id="workflow-callout-desc">
                      {workflowDetail.desc}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-6">
              <div className="space-y-1">
                <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                  Governance &amp; Open Access
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-light">
                  Compliance &amp; Legal Framework
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-container/15 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      format_image_left
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md font-semibold text-on-surface">
                    DPDP Act 2023 Compliant
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Strict conformity with the Digital Personal Data Protection Act (Govt. of India). Zero user telemetry tracking without explicit consent.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      gavel
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md font-semibold text-on-surface">
                    GIGW 3.0 Level AAA
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Certified under Guidelines for Indian Government Websites 3.0, guaranteeing bilingual accessibility, semantic HTML, and rapid page speeds.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-container text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      accessibility
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md font-semibold text-on-surface">
                    W3C WCAG 2.2 AAA
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Audited for universal accessibility with full keyboard trapping protection, accessible SVG sound charts, and text enlargement up to 200%.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      lock_open
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md font-semibold text-on-surface">
                    MoES Data Policy 2024
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Standard scientific telemetry is designated Public Domain or Creative Commons CC BY-SA 4.0 for non-commercial education and research.
                  </p>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-6">
              <div className="space-y-1">
                <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                  Frequently Asked Questions
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-light">
                  Institutional Answers &amp; Data Policy
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    id: 'faq-1',
                    question: 'How does NCPOR protect observational data integrity and user privacy on POLARIS?',
                    answer: "NCPOR operates under the statutory provisions of the Digital Personal Data Protection (DPDP) Act 2023 and the MoES National Data Policy. Telemetry from polar stations is cryptographically hashed at the edge server prior to satellite transmission. Users exploring POLARIS are never subject to tracking cookies or marketing pixels; telemetry queries and preferences are cached locally in your client's session storage."
                  },
                  {
                    id: 'faq-2',
                    question: 'Can educators and students reuse POLARIS diagrams, maps, and audio briefings?',
                    answer: 'Yes. All scientific charts, audio soundscapes, educational kits, and bathymetric diagrams are published under the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license. You are free to share and adapt material provided proper attribution is given to "National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India".'
                  },
                  {
                    id: 'faq-3',
                    question: 'How are polar telemetry datasets verified prior to public release?',
                    answer: 'Field data undergoes a two-tier review process. Real-time telemetry is tagged with raw indicators and confidence intervals. Within 30 days, the National Polar Data Centre (NPDC) performs cross-instrument calibration against international benchmarks (e.g., SCAR and WMO GTS stations) to produce Golden Record quality archival datasets.'
                  },
                  {
                    id: 'faq-4',
                    question: 'How can individuals with disabilities request alternative scientific media formats?',
                    answer: 'Our Public Outreach Cell provides braille-ready digital embossing files (.brf), large-print tactile charts, and structured audio descriptions upon email request. Requests are processed within 5 working days by the Nodal Accessibility Officer without any charge.'
                  }
                ].map((faq) => {
                  const isOpen = !!openFaqs[faq.id];
                  return (
                    <div key={faq.id} className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden transition-all">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-surface-container-low/40 transition-colors cursor-pointer"
                      >
                        <span className="font-title-md text-title-md font-semibold text-on-surface">
                          {faq.question}
                        </span>
                        <span className={`material-symbols-outlined text-primary text-[24px] transition-transform transform ${isOpen ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-1 text-secondary font-body-md text-body-md leading-relaxed border-t border-surface-container/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-sm space-y-6">
                <div className="space-y-1">
                  <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
                    Official Liaison Desk
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Nodal Outreach &amp; Grievance Support
                  </h3>
                </div>
                <p className="font-body-md text-body-md text-secondary">
                  For technical barriers, data licensing clarifications, school visits to the ice core facility, or accessibility accommodations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1">
                    <span className="font-label-mono text-label-mono text-secondary uppercase">
                      Postal Address
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium">
                      National Centre for Polar and Ocean Research,<br />
                      Ministry of Earth Sciences, Headland Sada,<br />
                      Vasco-da-Gama, Goa - 403804, India.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low space-y-1">
                    <span className="font-label-mono text-label-mono text-secondary uppercase">
                      Direct Channels
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      <span className="font-semibold block">
                        Email:
                      </span>
                      <a className="text-primary hover:underline" href="mailto:outreach@ncpor.gov.in">
                        outreach@ncpor.gov.in
                      </a>
                      <br />
                      <a className="text-primary hover:underline" href="mailto:polaris-access@ncpor.gov.in">
                        polaris-access@ncpor.gov.in
                      </a>
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface pt-1">
                      <span className="font-semibold">
                        Phone:
                      </span>
                      {" +91 832 2525500 "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-high/60 p-8 rounded-2xl flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      science
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface font-bold">
                    Scientific Simulation Notice
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                    Sample data, atmospheric simulations, acoustic field dispatches, and educational models hosted on this portal are calibrated directly against active NCPOR research stations in Antarctica, the Arctic, and the Himalayas.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="font-label-mono text-label-mono px-3 py-1.5 rounded-full bg-surface-container-lowest text-primary font-bold shadow-sm inline-block">
                    MoES Public Science Mandate
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* TRANSCRIPT MODAL */}
          {transcriptOpen && (
            <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-4" id="transcript-modal">
              <div className="bg-surface-container-lowest max-w-2xl w-full rounded-2xl shadow-2xl p-6 lg:p-8 flex flex-col gap-5 max-h-[870px] overflow-hidden">
                <div className="flex items-center justify-between border-b border-surface-container pb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      text_snippet
                    </span>
                    <h3 className="font-title-md text-title-md font-bold text-on-surface">
                      Audio Transcript &amp; Synchronized Notes
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Close modal"
                    onClick={() => setTranscriptOpen(false)}
                    className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>
                <div className="overflow-y-auto space-y-4 pr-2 font-body-md text-body-md text-secondary">
                  <div className="p-3 rounded-lg bg-surface-container-low font-label-mono text-label-mono text-primary font-semibold">
                    Dispatch #04: Overwintering at Maitri: Acoustic Soundscapes &amp; Scientific Field Logs
                  </div>
                  <p>
                    <strong className="text-on-surface">
                      [00:00 - 02:15]
                    </strong>
                    {" Background anemometer readings show 42-knot katabatic winds rolling from the Polar Plateau down toward the Schirmacher Oasis. Station logs record an external temperature of -24.8°C with wind chill factor approximating -39°C."}
                  </p>
                  <p>
                    <strong className="text-on-surface">
                      [02:16 - 05:40]
                    </strong>
                    {" The low resonant drone corresponds to the structural guy-wires of the meteorological mast. Micro-barograph instruments register rapid pressure dips indicating the ingress of a circumpolar low-pressure cyclone."}
                  </p>
                  <p>
                    <strong className="text-on-surface">
                      [05:41 - 09:20]
                    </strong>
                    {" Narration by Dr. Sen discusses psychological acclimatization, sensory isolation during the four-month Polar Night, and automated spectrophotometer telemetry monitoring stratospheric ozone recovery over Queen Maud Land."}
                  </p>
                  <p>
                    <strong className="text-on-surface">
                      [09:21 - 12:15]
                    </strong>
                    {" Closing observations on lake ice thickness at Lake Priyadarshini and transmission of satellite data packets to NCPOR Earth Station, Goa."}
                  </p>
                </div>
                <div className="flex justify-end pt-2 border-t border-surface-container">
                  <button
                    type="button"
                    onClick={() => setTranscriptOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors cursor-pointer"
                  >
                    Dismiss Transcript
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(7,28,54,0.03)]">
        <div className="max-w-[1440px] mx-auto px-margin py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[28px]">
                  ac_unit
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                National Centre for Polar and Ocean Research (NCPOR), an autonomous R&amp;D institution under the Ministry of Earth Sciences, Government of India. Custodian of Indian Antarctic, Arctic, and Southern Ocean missions.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 bg-surface-container rounded-full font-label-mono text-label-mono text-primary font-semibold">
                  ISO 9001:2015 Scientific Facility
                </span>
              </div>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Scientific Divisions
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/cryosphere">
                    Cryosphere &amp; Climate Science
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/graph">
                    Polar Environment &amp; Oceanography
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/geophysics">
                    Marine Geophysics &amp; Deep-Sea Coring
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/search">
                    Himalayan Glaciology Research
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/atmospheric">
                    Atmospheric &amp; Space Physics
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Outreach &amp; Access
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/repository">
                    National Polar Data Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Research Expedition Logistics Portal
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/people/ananya-sen">
                    Scientist Fellowship &amp; PhD Grants
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/curricula">
                    School &amp; University Open Curricula
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/about/accessibility">
                    Accessibility Statement &amp; Screen Reader
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                Stations &amp; Telemetry
              </h4>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-secondary">
                <li className="flex items-center justify-between">
                  <span>
                    Bharati Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Maitri Station (Antarctica)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himadri (Ny-Ålesund, Arctic)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    IndARC (Kongsfjorden)
                  </span>
                  <span className="font-label-mono text-label-mono text-secondary-fixed-dim font-semibold">
                    Periodic
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>
                    Himansh (Spiti, Himalaya)
                  </span>
                  <span className="font-label-mono text-label-mono text-tertiary-container font-semibold">
                    Online
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 bg-surface-container/60 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex flex-col gap-1">
              <p className="font-label-mono text-label-mono text-on-surface-variant">
                © 2025 National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Govt. of India. All rights reserved.
              </p>
              <p className="font-label-mono text-label-mono text-secondary">
                Scientific Simulation Notice: Telemetry models and climate data streams are calibrated against verified NCPOR polar stations.
              </p>
            </div>
            <div className="flex items-center gap-space-lg shrink-0">
              <Link className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" to="/data">
                Terms of Data Use
              </Link>
              <Link className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" to="/privacy">
                Privacy Policy
              </Link>
              <a className="font-label-mono text-label-mono text-secondary hover:text-primary transition-colors" href="https://moes.gov.in" target="_blank" rel="noopener noreferrer">
                MoES Portal
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}