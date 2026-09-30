import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react_router_dom';
import { useLegacyPage } from '../lib/legacy';

const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";

// Mock Data for Inquiry Stream
const INQUIRIES_DATA = [
  {
    id: "#INQ-8842",
    name: "Prof. Rajesh Nair",
    affiliation: "Delhi University • Dept of Physics",
    topic: "Maitri Station Katabatic Winds",
    topicCategory: "Cryosphere & Glaciers",
    status: "Urgent SLA",
    assignedTo: "Dr. Ananya Sen (Atmospheric Lead)",
    assignedShort: "AS",
    timeAgo: "3h ago via Web",
    slaTime: "1h 45m left",
    urgency: true,
    payload: `Respected Polar Scientists at MoES / NCPOR,

We are currently modeling wind-energy shear curves at high latitudes. How does the bare rocky surface of the Schirmacher Oasis terrain impact nocturnal katabatic acceleration compared to the uninterrupted polar continental ice plateau? Specifically, are there notable thermal updrafts from dark nunataks during 24-hour summer daylight cycles that decelerate gravity drainage flows?`,
    draft: `Dear Prof. Rajesh Nair,

Thank you for contacting the National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences.

Regarding your query on katabatic dynamics over Schirmacher Oasis: The deglaciated bedrock surface acts as an effective thermal perturbation to pure katabatic gravity currents draining from the East Antarctic Plateau. During summer insolation, the low albedo of the oasis rocky terrain (albedo ~ 0.15–0.22 vs 0.85 on continental ice) triggers localized sensible heat fluxes of up to 90–120 W/m². This creates localized convective cells that disrupt and lift the shallow (~100–150m deep) katabatic inversion layer.

Consequently, AWS sensor arrays situated at Maitri Station record a sharp velocity attenuation and upward mixing during mid-afternoon hours, shifting nighttime drainage velocities from ~18 m/s down to 4–6 m/s at the boundary interface. Please refer to our published datasets referenced below.`,
    attachment: "DU-Phys-MSc-Curriculum-Annex.pdf (420 KB)",
    loggedDate: "Oct 18, 2024 • 11:42 IST"
  },
  {
    id: "#INQ-8839",
    name: "Sunita Deshmukh",
    affiliation: "High School Educator • Pune Vidyapeeth",
    topic: "NCERT Class 9 Cryosphere Module",
    topicCategory: "IndARC Oceanography",
    status: "In Review",
    assignedTo: "Dr. K. Raman (Oceanography)",
    assignedShort: "KR",
    timeAgo: "6h ago via Email",
    slaTime: "SLA: 14h left",
    urgency: false,
    payload: `Requesting high-res raw sensor readings from IndARC mooring for school classroom demonstration of thermohaline fjord stratification.`,
    draft: `Dear Sunita Deshmukh,

We are happy to support educational outreach for NCERT Class 9 modules. We have curated open-access IndARC salinity and temperature datasets formatted for secondary school demonstrations.`,
    attachment: "IndARC-Sample-Data-2024.csv (1.2 MB)",
    loggedDate: "Oct 18, 2024 • 08:30 IST"
  },
  {
    id: "#INQ-8831",
    name: "Aravind Sharma",
    affiliation: "Postgrad Scholar • IIT Madras",
    topic: "Bharati Station Auroral Data",
    topicCategory: "Bharati Magnetics",
    status: "New / Unassigned",
    assignedTo: "Unassigned",
    assignedShort: "UN",
    timeAgo: "10h ago via Portal",
    slaTime: "SLA: 19h left",
    urgency: false,
    payload: `Are magnetosphere fluxgate magnetometer daily traces publicly accessible under DPDP open science license for auroral substorm machine learning?`,
    draft: `Dear Aravind Sharma,

Yes, daily magnetosphere fluxgate magnetometer traces from Bharati Station are made available for research and machine learning applications under open science guidelines.`,
    attachment: null,
    loggedDate: "Oct 18, 2024 • 04:15 IST"
  },
  {
    id: "#INQ-8828",
    name: "Meenakshi Iyer",
    affiliation: "Science Journalist • Bengaluru",
    topic: "Himadri Arctic Seabird Ecology",
    topicCategory: "Cryosphere & Glaciers",
    status: "Draft Ready",
    assignedTo: "Dr. M. Barman (Ecosystems)",
    assignedShort: "MB",
    timeAgo: "14h ago via Press Kit",
    slaTime: "SLA: 22h left",
    urgency: false,
    payload: `Seeking commentary on recent Little Auk colony migration variations observed around Kongsfjorden during the 2024 spring thaw cycle.`,
    draft: `Dear Meenakshi Iyer,

Thank you for reaching out regarding marine ecology in Kongsfjorden. Our team at Himadri Station has observed subtle shifts in microplankton density that correlate with Little Auk foraging ranges.`,
    attachment: "Himadri-Ecosystem-Brief-2024.pdf (890 KB)",
    loggedDate: "Oct 17, 2024 • 20:00 IST"
  }
];

// Mock Data for Roster
const INITIAL_ROSTER = [
  { id: 1, name: "Dr. Vikramaditya Rathore", affiliation: "Banaras Hindu University, Geophysics", category: "Researcher", targetEvent: "Mid-Winter Aurora & Space Physics Live", registeredOn: "Today, 09:14 IST", status: "Confirmed" },
  { id: 2, name: "Pooja Namboodiri", affiliation: "Kendriya Vidyalaya No. 1, Kochi", category: "Educator", targetEvent: "Himadri Arctic Ocean Laboratory Tour", registeredOn: "Yesterday, 18:22 IST", status: "Confirmed" },
  { id: 3, name: "Tanmay Kulkarni", affiliation: "IISc Bangalore, Climate Sciences", category: "Student", targetEvent: "Southern Ocean Carbon Sink Symposium", registeredOn: "Oct 17, 14:10 IST", status: "Confirmed" },
  { id: 4, name: "Farooq Abdullah Mir", affiliation: "Kashmir Environmental Forum", category: "Public Citizen", targetEvent: "Mid-Winter Aurora & Space Physics Live", registeredOn: "Oct 16, 20:05 IST", status: "Waitlisted (#22)" }
];

export default function AdminEventsInboxPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS });

  const location = useLocation();

  // SLA Timer State
  const [totalSeconds, setTotalSeconds] = useState(1 * 3600 + 44 * 60 + 18);

  // Search & Filter State
  const [globalSearch, setGlobalSearch] = useState("");
  const [inquirySearch, setInquirySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [topicFilter, setTopicFilter] = useState("All Topics");
  const [activeTabFilter, setActiveTabFilter] = useState("All");

  // Active Inquiry Selection
  const [selectedInquiry, setSelectedInquiry] = useState(INQUIRIES_DATA[0]);
  const [responseDraft, setResponseDraft] = useState(INQUIRIES_DATA[0].draft);
  const [assignedExpert, setAssignedExpert] = useState(INQUIRIES_DATA[0].assignedTo);

  // New Event Form State
  const [eventTitle, setEventTitle] = useState("Live From Bharati Station: Mid-Winter Scientific Briefing");
  const [outreachType, setOutreachType] = useState("Public Webinar");
  const [dateTimeZone, setDateTimeZone] = useState("July 24, 2025 • 15:30 IST (10:00 UTC)");

  // Roster Search
  const [rosterSearch, setRosterSearch] = useState("");

  // SLA Timer interval effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) => {
    const hours = String(Math.floor(sec / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const seconds = String(sec % 60).padStart(2, '0');
    return `${hours}h : ${minutes}m : ${seconds}s`;
  };

  // Sync Draft when selected inquiry changes
  const handleSelectInquiry = (inquiry) => {
    setSelectedInquiry(inquiry);
    setResponseDraft(inquiry.draft);
    setAssignedExpert(inquiry.assignedTo);
  };

  // Claim Inquiry Handler
  const handleClaimInquiry = (e, inquiry) => {
    e.stopPropagation();
    const updated = { ...inquiry, assignedTo: "Dr. Ananya Sen (Atmospheric Lead)", assignedShort: "AS", status: "Assigned to Me" };
    setSelectedInquiry(updated);
    setAssignedExpert("Dr. Ananya Sen (Atmospheric Lead)");
    alert(`Inquiry ${inquiry.id} claimed successfully!`);
  };

  // Filtered Inquiries
  const filteredInquiries = INQUIRIES_DATA.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.affiliation.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.topic.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.id.toLowerCase().includes(inquirySearch.toLowerCase());

    const matchesStatus =
      statusFilter === "All Statuses" ||
      (statusFilter === "New / Unassigned" && inq.status === "New / Unassigned") ||
      (statusFilter === "In Review" && inq.status === "In Review") ||
      (statusFilter === "SLA Escalation" && inq.urgency) ||
      (statusFilter === "Draft Ready" && inq.status === "Draft Ready");

    const matchesTopic =
      topicFilter === "All Topics" || inq.topicCategory === topicFilter;

    let matchesQuickTab = true;
    if (activeTabFilter === "Urgent SLA") matchesQuickTab = inq.urgency;
    if (activeTabFilter === "Assigned to Me") matchesQuickTab = inq.assignedShort === "AS";
    if (activeTabFilter === "Draft Ready") matchesQuickTab = inq.status === "Draft Ready";

    return matchesSearch && matchesStatus && matchesTopic && matchesQuickTab;
  });

  // Filtered Roster
  const filteredRoster = INITIAL_ROSTER.filter((item) =>
    item.name.toLowerCase().includes(rosterSearch.toLowerCase()) ||
    item.affiliation.toLowerCase().includes(rosterSearch.toLowerCase()) ||
    item.targetEvent.toLowerCase().includes(rosterSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(rosterSearch.toLowerCase())
  );

  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}

      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[240px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col min-h-0">
          <div className="h-[72px] px-space-md flex items-center gap-space-sm bg-surface-container-lowest">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-title-md text-title-md tracking-tight font-bold text-on-surface leading-none">
                POLARIS
              </span>
              <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary mt-0.5">
                MOES ADMIN PORTAL
              </span>
            </div>
          </div>
          <div className="overflow-y-auto px-space-sm py-space-sm flex-1">
            <nav className="flex flex-col gap-1">
              {[
                { label: 'Dashboard', icon: 'dashboard', path: '/admin', id: 'dashboard' },
                { label: 'Expeditions', icon: 'explore', path: '/expeditions/soe-01', id: 'expeditions' },
                { label: 'Upload', icon: 'cloud_upload', path: '/admin/upload', id: 'upload' },
                { label: 'AI Queue', icon: 'auto_awesome', path: '/admin/ai-queue', id: 'ai-queue' },
                { label: 'Content Studio', icon: 'draw', path: '/admin/studio', id: 'content-studio' },
                { label: 'Review', icon: 'fact_check', path: '/admin/review', id: 'review' },
                { label: 'Publishing', icon: 'publish', path: '/admin/publishing', id: 'publishing' },
                { label: 'Media Library', icon: 'photo_library', path: '/admin/media', id: 'media-library' },
                { label: 'Education Manager', icon: 'school', path: '/admin/education', id: 'education-manager' },
                { label: 'Events & Inbox', icon: 'mail', path: '/admin/events-inbox', id: 'events-and-inbox' },
                { label: 'Rights & Integrations', icon: 'integration_instructions', path: '/admin/rights', id: 'rights-and-integrations' },
                { label: 'Analytics', icon: 'monitoring', path: '/admin/analytics', id: 'analytics' },
                { label: 'Notifications', icon: 'notifications', path: '/admin/notifications', id: 'notifications' },
                { label: 'Users', icon: 'group', path: '/admin/users', id: 'users' },
                { label: 'Settings', icon: 'settings', path: '/admin/profile', id: 'settings' },
              ].map((item) => {
                const isActive = location.pathname === item.path || (item.path === '/admin/events-inbox' && location.pathname.includes('events-inbox'));
                return (
                  <Link
                    key={item.id}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-primary-container text-on-primary-container font-semibold"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                    }`}
                    data-path={item.id}
                    to={item.path}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {item.icon}
                    </span>
                    <span className="font-body-sm text-body-sm">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <div className="p-space-sm bg-surface-container-low m-space-sm rounded-lg flex items-center gap-space-sm">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-body-sm text-body-sm font-semibold text-on-surface truncate">
              Dr. Ananya Sen
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant truncate">
              Lead Scientist / Editor
            </span>
          </div>
        </div>
      </aside>

      {/* Top Header */}
      <div className="pl-[240px]">
        <header className="fixed top-0 left-[240px] right-0 h-[72px] bg-surface-container-lowest/90 backdrop-blur-xl z-40 flex items-center justify-between px-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface font-semibold">
                HIMADRI TELEMETRY ONLINE
              </span>
            </div>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                search
              </span>
              <input
                className="bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline pl-9 pr-4 py-1.5 rounded-lg w-64 focus:outline-none focus:bg-surface-container-lowest transition-all"
                placeholder="Global Search (⌘K)"
                type="text"
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="bg-secondary-container text-on-secondary-container font-label-mono text-label-mono px-3 py-1 rounded-full uppercase">
              SCIENTIST / EDITOR (S, E, A)
            </span>
            <button
              className="w-9 h-9 rounded-full hover:bg-surface-container-low flex items-center justify-center text-on-surface-variant transition-colors cursor-pointer"
              onClick={() => alert("No new notifications")}
            >
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

        {/* Main Content Area */}
        <main className="relative pt-[72px] bg-surface min-h-screen">
          <div className="max-w-[1440px] mx-auto p-space-lg">
            <div className="flex flex-col w-full gap-space-lg">
              
              {/* Top Banner & Overview */}
              <div className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-xs text-secondary font-label-mono text-label-mono uppercase tracking-wider">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                    <span>Polaris Outreach Console</span>
                    <span className="text-outline-variant">/</span>
                    <span className="text-primary font-semibold">MOES-EVENTS-INBOX-V2</span>
                  </div>
                  <div className="flex items-center gap-space-xs bg-surface-container-low px-3 py-1 rounded-full text-secondary font-label-mono text-label-mono">
                    <span className="material-symbols-outlined text-[15px] text-tertiary">
                      verified_user
                    </span>
                    <span>DPDP COMPLIANT PROTOCOL #POL-EVT-2025</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                  <div>
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Events & Expert Inbox
                    </h1>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
                      Manage polar public webinars, school workshops, expedition livestreams, and scientific inquiries from the national 'Ask an Expert' portal.
                    </p>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <button
                      className="bg-surface-container-low hover:bg-surface-container text-on-surface px-4 py-2 rounded-lg font-title-md text-body-sm flex items-center gap-2 transition-all cursor-pointer"
                      onClick={() => alert("Opening Routing Rules Configuration Modal...")}
                    >
                      <span className="material-symbols-outlined text-[18px]">tune</span>
                      <span>Routing Rules</span>
                    </button>
                    <button
                      className="bg-primary hover:bg-primary-container text-on-primary px-4 py-2 rounded-lg font-title-md text-body-sm flex items-center gap-2 transition-all shadow-sm cursor-pointer"
                      onClick={() => {
                        const titleInput = document.getElementById("newEventTitleInput");
                        if (titleInput) titleInput.focus();
                      }}
                    >
                      <span className="material-symbols-outlined text-[18px]">add_box</span>
                      <span>New Live Event</span>
                    </button>
                  </div>
                </div>

                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-md">
                  <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                        Upcoming Outreach
                      </span>
                      <span className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">
                        4 Active
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        2 Webinars • 2 School Tours
                      </span>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">videocam</span>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                        Registrations
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                          3,420
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          / 4,000 cap
                        </span>
                      </div>
                      <div className="w-28 bg-surface-container rounded-full h-1.5 mt-1.5 overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "85.5%" }} />
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">groups</span>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                        Inquiry Triage
                      </span>
                      <span className="font-headline-md text-headline-md text-on-surface font-semibold mt-1">
                        18 In Queue
                      </span>
                      <span className="font-label-mono text-label-mono text-error font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />
                        4 Urgent SLA Escapes
                      </span>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-error-container flex items-center justify-center text-on-error-container shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">priority_high</span>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                        Avg. Expert SLA
                      </span>
                      <span className="font-headline-md text-headline-md text-tertiary font-semibold mt-1">
                        4.2 Hours
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {"SLA Target < 24.0h"}
                      </span>
                    </div>
                    <div className="w-11 h-11 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">timer</span>
                    </div>
                  </div>
                </div>

                {/* Section Quick Jump Buttons */}
                <div className="flex items-center gap-space-sm pt-space-xs overflow-x-auto">
                  <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-title-md text-body-sm font-semibold flex items-center gap-2 shadow-sm shrink-0 cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">forum</span>
                    <span>Expert Inquiries Inbox (18)</span>
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-lg font-title-md text-body-sm flex items-center gap-2 transition-all shrink-0 cursor-pointer"
                    onClick={() => document.getElementById("eventsScheduler")?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="material-symbols-outlined text-[18px]">event</span>
                    <span>Live Events & Workshops (4)</span>
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-lg font-title-md text-body-sm flex items-center gap-2 transition-all shrink-0 cursor-pointer"
                    onClick={() => document.getElementById("rosterSection")?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="material-symbols-outlined text-[18px]">assignment_turned_in</span>
                    <span>Registrations & Attendance (3,420)</span>
                  </button>
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface px-4 py-2 rounded-lg font-title-md text-body-sm flex items-center gap-2 transition-all shrink-0 cursor-pointer"
                    onClick={() => alert("Navigating to Published FAQ Knowledge Base...")}
                  >
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                    <span>Published FAQ Knowledge Base (142)</span>
                  </button>
                </div>
              </div>

              {/* Inquiry Queue & Detail Split View */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                
                {/* Left Stream Column */}
                <div className="lg:col-span-5 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">
                          search
                        </span>
                        <input
                          className="w-full bg-surface-container-low pl-9 pr-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all"
                          placeholder="Search by citizen, institute, keyword..."
                          type="text"
                          value={inquirySearch}
                          onChange={(e) => setInquirySearch(e.target.value)}
                        />
                      </div>
                      <button className="p-2 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface cursor-pointer" title="Filter attributes">
                        <span className="material-symbols-outlined text-[20px]">filter_list</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        className="bg-surface-container-low text-on-surface font-body-sm text-body-sm px-2.5 py-1.5 rounded-lg flex-1 focus:outline-none cursor-pointer"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                      >
                        <option value="All Statuses">All Statuses (18)</option>
                        <option value="New / Unassigned">New / Unassigned</option>
                        <option value="In Review">In Review</option>
                        <option value="SLA Escalation">SLA Escalation</option>
                        <option value="Draft Ready">Draft Ready</option>
                      </select>

                      <select
                        className="bg-surface-container-low text-on-surface font-body-sm text-body-sm px-2.5 py-1.5 rounded-lg flex-1 focus:outline-none cursor-pointer"
                        value={topicFilter}
                        onChange={(e) => setTopicFilter(e.target.value)}
                      >
                        <option value="All Topics">All Topics / Stations</option>
                        <option value="Cryosphere & Glaciers">Cryosphere & Glaciers</option>
                        <option value="Maitri AWS">Maitri AWS</option>
                        <option value="IndARC Oceanography">IndARC Oceanography</option>
                        <option value="Bharati Magnetics">Bharati Magnetics</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                      <button
                        onClick={() => setActiveTabFilter("All")}
                        className={`${
                          activeTabFilter === "All"
                            ? "bg-secondary-container text-on-secondary-container font-semibold"
                            : "bg-surface-container-low text-secondary hover:text-on-surface"
                        } px-2.5 py-1 rounded-full font-label-mono text-label-mono cursor-pointer transition-colors shrink-0`}
                      >
                        All (18)
                      </button>

                      <button
                        onClick={() => setActiveTabFilter("Urgent SLA")}
                        className={`${
                          activeTabFilter === "Urgent SLA"
                            ? "bg-error-container text-on-error-container font-semibold"
                            : "bg-surface-container-low text-secondary hover:text-on-surface"
                        } px-2.5 py-1 rounded-full font-label-mono text-label-mono cursor-pointer flex items-center gap-1 shrink-0 transition-colors`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-error" />
                        Urgent SLA (4)
                      </button>

                      <button
                        onClick={() => setActiveTabFilter("Assigned to Me")}
                        className={`${
                          activeTabFilter === "Assigned to Me"
                            ? "bg-secondary-container text-on-secondary-container font-semibold"
                            : "bg-surface-container-low text-secondary hover:text-on-surface"
                        } px-2.5 py-1 rounded-full font-label-mono text-label-mono cursor-pointer shrink-0 transition-colors`}
                      >
                        Assigned to Me (6)
                      </button>

                      <button
                        onClick={() => setActiveTabFilter("Draft Ready")}
                        className={`${
                          activeTabFilter === "Draft Ready"
                            ? "bg-secondary-container text-on-secondary-container font-semibold"
                            : "bg-surface-container-low text-secondary hover:text-on-surface"
                        } px-2.5 py-1 rounded-full font-label-mono text-label-mono cursor-pointer shrink-0 transition-colors`}
                      >
                        Draft Ready (5)
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-space-sm" id="inquiryStream">
                    {filteredInquiries.length === 0 ? (
                      <div className="bg-surface-container-lowest p-space-md rounded-xl text-center text-secondary font-body-sm">
                        No inquiries match the current filters.
                      </div>
                    ) : (
                      filteredInquiries.map((inq) => {
                        const isSelected = selectedInquiry.id === inq.id;
                        return (
                          <div
                            key={inq.id}
                            onClick={() => handleSelectInquiry(inq)}
                            className={`p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all relative overflow-hidden ${
                              isSelected
                                ? "bg-surface-container-lowest bg-gradient-to-r from-primary/10 via-transparent to-transparent ring-1 ring-primary/30"
                                : "bg-surface-container-lowest hover:bg-surface-container-low/50"
                            }`}
                          >
                            {isSelected && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />}
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex flex-col">
                                <span className="font-title-md text-title-md font-semibold text-on-surface">
                                  {inq.name}
                                </span>
                                <span className="font-body-sm text-body-sm text-secondary">
                                  {inq.affiliation}
                                </span>
                              </div>
                              <span
                                className={`${
                                  inq.urgency
                                    ? "bg-error-container text-on-error-container font-semibold"
                                    : "bg-secondary-container text-on-secondary-container"
                                } px-2 py-0.5 rounded-full font-label-mono text-label-mono flex items-center gap-1 shrink-0`}
                              >
                                {inq.urgency && (
                                  <span className="material-symbols-outlined text-[13px]">
                                    alarm
                                  </span>
                                )}
                                {inq.slaTime}
                              </span>
                            </div>

                            <div className="mt-2.5 flex items-center gap-2">
                              <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-label-mono text-label-mono">
                                {inq.topic}
                              </span>
                              <span className="font-label-mono text-label-mono text-outline">
                                {inq.id}
                              </span>
                            </div>

                            <p className="mt-2 font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                              "{inq.payload.replace(/\n+/g, ' ')}"
                            </p>

                            <div className="mt-3 pt-2.5 flex items-center justify-between font-label-mono text-label-mono text-secondary">
                              {inq.assignedTo !== "Unassigned" ? (
                                <div className="flex items-center gap-1.5">
                                  <div className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold">
                                    {inq.assignedShort}
                                  </div>
                                  <span className="text-on-surface font-medium">
                                    Assigned: {inq.assignedTo.split(' ')[0]} {inq.assignedTo.split(' ')[1]}
                                  </span>
                                </div>
                              ) : (
                                <button
                                  onClick={(e) => handleClaimInquiry(e, inq)}
                                  className="bg-primary/10 hover:bg-primary/20 text-primary px-2.5 py-1 rounded font-label-mono text-label-mono font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                                >
                                  <span className="material-symbols-outlined text-[14px]">
                                    pan_tool
                                  </span>
                                  Claim Inquiry
                                </button>
                              )}
                              <span>{inq.timeAgo}</span>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Right Detail Column */}
                <div className="lg:col-span-7 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-label-mono text-label-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                            INQUIRY {selectedInquiry.id}
                          </span>
                          <span className="bg-tertiary-container/20 text-tertiary px-2 py-0.5 rounded-full font-label-mono text-label-mono font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-[13px]">
                              verified
                            </span>
                            Verified Academic
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-label-mono text-label-mono text-secondary">
                            Assigned Expert:
                          </span>
                          <select
                            className="bg-surface-container-low font-body-sm text-body-sm text-on-surface px-2.5 py-1 rounded-lg focus:outline-none font-medium cursor-pointer"
                            value={assignedExpert}
                            onChange={(e) => setAssignedExpert(e.target.value)}
                          >
                            <option value="Dr. Ananya Sen (Atmospheric Lead)">
                              Dr. Ananya Sen (Atmospheric Lead)
                            </option>
                            <option value="Dr. K. Raman (Oceanography)">
                              Dr. K. Raman (Oceanography)
                            </option>
                            <option value="Dr. M. Barman (Ecosystems)">
                              Dr. M. Barman (Ecosystems)
                            </option>
                            <option value="Reassign to Expeditions Pool">
                              Reassign to Expeditions Pool
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between mt-1">
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          {selectedInquiry.name}
                        </h2>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Logged: {selectedInquiry.loggedDate}
                        </span>
                      </div>
                    </div>

                    {/* Timer Box */}
                    <div className="bg-error-container/40 p-space-md rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-error text-[28px] animate-pulse">
                          hourglass_bottom
                        </span>
                        <div>
                          <div className="font-title-md text-title-md font-semibold text-on-error-container">
                            SLA Priority Countdown
                          </div>
                          <div className="font-body-sm text-body-sm text-on-error-container/80">
                            Guaranteed turnaround for verified educational inquiries
                          </div>
                        </div>
                      </div>
                      <div className="bg-surface-container-lowest px-4 py-2 rounded-lg shadow-sm text-right">
                        <div className="font-label-mono text-label-mono uppercase tracking-wider text-error font-bold">
                          Time Left
                        </div>
                        <div className="font-label-mono text-title-md font-bold text-error tracking-wider" id="slaTimer">
                          {formatTime(totalSeconds)}
                        </div>
                      </div>
                    </div>

                    {/* Inquiry Payload */}
                    <div className="bg-surface-container-low p-space-md rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary font-semibold">
                          Inquiry Payload
                        </span>
                        <span className="font-label-mono text-label-mono text-outline">
                          Channel: Citizen Science Portal / Academic Gateway
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed whitespace-pre-line">
                        "{selectedInquiry.payload}"
                      </p>
                      {selectedInquiry.attachment && (
                        <div className="mt-3 flex items-center gap-2 text-secondary font-label-mono text-label-mono">
                          <span className="material-symbols-outlined text-[16px]">
                            attachment
                          </span>
                          <span>Attached syllabus context: {selectedInquiry.attachment}</span>
                        </div>
                      )}
                    </div>

                    {/* AI Assistant & Response Editor */}
                    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm bg-gradient-to-b from-surface-container-low/40 to-surface-container-lowest">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-md bg-primary-container text-on-primary-container flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">
                              auto_awesome
                            </span>
                          </div>
                          <div>
                            <span className="font-title-md text-title-md font-semibold text-on-surface">
                              Polaris-SciLLM v3
                            </span>
                            <span className="font-label-mono text-label-mono text-secondary ml-2">
                              (NCPOR Fact-Locked Knowledge Model)
                            </span>
                          </div>
                        </div>
                        <span className="bg-tertiary-container text-on-tertiary-container px-2.5 py-1 rounded-full font-label-mono text-label-mono font-semibold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                          98% Factuality Match
                        </span>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                          Expert Reviewed Response Draft
                        </label>
                        <textarea
                          className="w-full bg-surface-container-low p-space-md rounded-lg font-body-sm text-body-sm text-on-surface leading-relaxed focus:outline-none focus:bg-surface-container-lowest transition-all resize-y"
                          rows="6"
                          value={responseDraft}
                          onChange={(e) => setResponseDraft(e.target.value)}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5 pt-1">
                        <span className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                          Verified NCPOR Repositories & Citations
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          <Link
                            className="bg-surface-container-low hover:bg-surface-container px-2.5 py-1 rounded font-label-mono text-label-mono text-primary flex items-center gap-1.5 transition-colors"
                            to="/stories/overwintering-in-the-schirmacher-oasis"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              description
                            </span>
                            NCPOR-TR-2024-08 (Schirmacher Boundary Layer)
                          </Link>
                          <Link
                            className="bg-surface-container-low hover:bg-surface-container px-2.5 py-1 rounded font-label-mono text-label-mono text-primary flex items-center gap-1.5 transition-colors"
                            to="/live/soe-01"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              sensors
                            </span>
                            AWS-Maitri-2023-Sensor-Feed #12 (Live Telemetry)
                          </Link>
                          <span className="bg-surface-container-low px-2.5 py-1 rounded font-label-mono text-label-mono text-secondary">
                            DOI: 10.5065/D6POLARIS
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                        <div className="flex items-center gap-1.5">
                          <button
                            className="bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface px-2.5 py-1.5 rounded-lg font-label-mono text-label-mono flex items-center gap-1 transition-all cursor-pointer"
                            onClick={() => {
                              setResponseDraft(`[Regenerated Draft] ${selectedInquiry.draft}`);
                            }}
                          >
                            <span className="material-symbols-outlined text-[15px]">
                              refresh
                            </span>
                            Regenerate AI Draft
                          </button>

                          <button
                            className="bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface px-2.5 py-1.5 rounded-lg font-label-mono text-label-mono flex items-center gap-1 transition-all cursor-pointer"
                            onClick={() => alert("Translating response draft to Hindi...")}
                          >
                            <span className="material-symbols-outlined text-[15px]">
                              translate
                            </span>
                            Translate to Hindi (राजभाषा)
                          </button>

                          <button
                            className="bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface px-2.5 py-1.5 rounded-lg font-label-mono text-label-mono flex items-center gap-1 transition-all cursor-pointer"
                            onClick={() => alert("Draft saved successfully!")}
                          >
                            <span className="material-symbols-outlined text-[15px]">
                              save
                            </span>
                            Save Draft
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            className="bg-surface-container-low hover:bg-error-container text-on-surface-variant hover:text-on-error-container px-3 py-2 rounded-lg font-body-sm text-body-sm transition-all cursor-pointer"
                            title="Spam / Off-topic"
                            onClick={() => alert(`Marked ${selectedInquiry.id} as spam/off-topic.`)}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              flag
                            </span>
                          </button>

                          <button
                            className="bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary px-3.5 py-2 rounded-lg font-title-md text-body-sm flex items-center gap-1.5 transition-all cursor-pointer"
                            onClick={() => alert(`Published response from ${selectedInquiry.id} to Public FAQ Knowledge Base!`)}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              menu_book
                            </span>
                            <span>Publish to Public FAQ</span>
                          </button>

                          <button
                            className="bg-primary hover:bg-primary-container text-on-primary px-5 py-2 rounded-lg font-title-md text-body-sm font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                            onClick={() => alert(`Reply successfully sent to ${selectedInquiry.name} (${selectedInquiry.id})!`)}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              send
                            </span>
                            <span>Send Reply to Inquirer</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Scheduler Section */}
              <div id="eventsScheduler" className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">
                        calendar_month
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Upcoming Outreach Event & Webinar Scheduler
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Coordinate high-bandwidth live relays from Maitri, Bharati, and Himadri research stations
                      </p>
                    </div>
                  </div>
                  <span className="bg-surface-container-low text-secondary font-label-mono text-label-mono px-3 py-1.5 rounded-full">
                    SYNCED WITH NIC BROADCAST GATEWAY
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md bg-surface-container-low/50 p-space-md rounded-xl">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                      Event Title
                    </label>
                    <input
                      id="newEventTitleInput"
                      className="bg-surface-container-lowest px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none shadow-sm"
                      type="text"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                      Outreach Type
                    </label>
                    <select
                      className="bg-surface-container-lowest px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none shadow-sm cursor-pointer"
                      value={outreachType}
                      onChange={(e) => setOutreachType(e.target.value)}
                    >
                      <option value="Public Webinar">Public Webinar</option>
                      <option value="School Live Link (NCERT)">School Live Link (NCERT)</option>
                      <option value="Scientist Panel Debate">Scientist Panel Debate</option>
                      <option value="Ask Me Anything (Citizen Direct)">Ask Me Anything (Citizen Direct)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                      Date, Time & Zone
                    </label>
                    <input
                      className="bg-surface-container-lowest px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none shadow-sm"
                      type="text"
                      value={dateTimeZone}
                      onChange={(e) => setDateTimeZone(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-mono text-label-mono uppercase tracking-wider text-secondary">
                      Designated Panelists
                    </label>
                    <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2 py-1.5 rounded-lg shadow-sm">
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-label-mono text-label-mono truncate">
                        Dr. Ananya Sen
                      </span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-label-mono text-label-mono truncate">
                        Station Leader Maitri
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm hover:shadow-md transition-all">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="bg-primary text-on-primary font-label-mono text-label-mono px-2.5 py-0.5 rounded-full font-semibold">
                          BROADCAST READY
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Cap: 1,000 / 920 Reg
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Mid-Winter Aurora & Space Physics Live
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Live streaming real-time all-sky camera feed from Bharati Station, Larsemann Hills.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-label-mono text-label-mono text-primary font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">
                          schedule
                        </span>
                        Tomorrow, 15:30 IST
                      </span>
                      <button
                        className="bg-surface-container-lowest hover:bg-surface-container text-on-surface px-3 py-1.5 rounded-lg font-label-mono text-label-mono font-semibold shadow-sm transition-all cursor-pointer"
                        onClick={() => alert("Managing broadcast link for Aurora & Space Physics Live...")}
                      >
                        Manage Link
                      </button>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm hover:shadow-md transition-all">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="bg-secondary-container text-on-secondary-container font-label-mono text-label-mono px-2.5 py-0.5 rounded-full font-semibold">
                          SCHOOL WORKSHOP
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Cap: 1,500 / 1,240 Reg
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Himadri Arctic Ocean Laboratory Tour
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Interactive Ny-Ålesund laboratory virtual walkthrough for Kendriya Vidyalaya students.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-label-mono text-label-mono text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">
                          schedule
                        </span>
                        Jul 28, 11:00 IST
                      </span>
                      <button
                        className="bg-surface-container-lowest hover:bg-surface-container text-on-surface px-3 py-1.5 rounded-lg font-label-mono text-label-mono font-semibold shadow-sm transition-all cursor-pointer"
                        onClick={() => alert("Managing broadcast link for Himadri Arctic Lab Tour...")}
                      >
                        Manage Link
                      </button>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col justify-between gap-space-sm hover:shadow-md transition-all">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="bg-surface-container-highest text-on-surface font-label-mono text-label-mono px-2.5 py-0.5 rounded-full font-semibold">
                          SCIENTIST PANEL
                        </span>
                        <span className="font-label-mono text-label-mono text-secondary">
                          Cap: 1,500 / 1,260 Reg
                        </span>
                      </div>
                      <h3 className="font-title-md text-title-md font-bold text-on-surface">
                        Southern Ocean Carbon Sink Symposium
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Joint dialogue with NIO and NCPOR researchers discussing biogeochemical eddy transfers.
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-label-mono text-label-mono text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">
                          schedule
                        </span>
                        Aug 05, 14:00 IST
                      </span>
                      <button
                        className="bg-surface-container-lowest hover:bg-surface-container text-on-surface px-3 py-1.5 rounded-lg font-label-mono text-label-mono font-semibold shadow-sm transition-all cursor-pointer"
                        onClick={() => alert("Managing broadcast link for Southern Ocean Carbon Sink Symposium...")}
                      >
                        Manage Link
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                  <button
                    className="bg-surface-container-low hover:bg-surface-container text-secondary px-4 py-2 rounded-lg font-title-md text-body-sm transition-all cursor-pointer"
                    onClick={() => {
                      setEventTitle("Live From Bharati Station: Mid-Winter Scientific Briefing");
                      setOutreachType("Public Webinar");
                      setDateTimeZone("July 24, 2025 • 15:30 IST (10:00 UTC)");
                    }}
                  >
                    Discard Edits
                  </button>
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary px-5 py-2 rounded-lg font-title-md text-body-sm font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                    onClick={() => alert(`Successfully scheduled & published event: "${eventTitle}"`)}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      publish
                    </span>
                    <span>Schedule & Publish Event</span>
                  </button>
                </div>
              </div>

              {/* Roster Table Section */}
              <div id="rosterSection" className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">
                        how_to_reg
                      </span>
                    </div>
                    <div>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Registrations & Attendance Roster
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Audit and verify public participants registered for polar webinars and school workshops
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-2.5 top-2 text-outline text-[16px]">
                        search
                      </span>
                      <input
                        className="bg-surface-container-low pl-8 pr-3 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none"
                        placeholder="Filter roster..."
                        type="text"
                        value={rosterSearch}
                        onChange={(e) => setRosterSearch(e.target.value)}
                      />
                    </div>
                    <button
                      className="bg-surface-container-low hover:bg-surface-container text-on-surface px-3 py-1.5 rounded-lg font-label-mono text-label-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                      onClick={() => alert("Exporting participant roster to CSV...")}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        download
                      </span>
                      <span>Export (CSV)</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-lg">
                  <table className="w-full text-left font-body-sm text-body-sm">
                    <thead className="bg-surface-container-low text-secondary font-label-mono text-label-mono uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Attendee Name</th>
                        <th className="py-3 px-4">Institution / Affiliation</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Target Event</th>
                        <th className="py-3 px-4">Registered On</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-0">
                      {filteredRoster.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="py-4 text-center text-secondary">
                            No attendees found matching filter.
                          </td>
                        </tr>
                      ) : (
                        filteredRoster.map((item) => (
                          <tr key={item.id} className="hover:bg-surface-container-low/40 transition-colors">
                            <td className="py-3.5 px-4 font-semibold text-on-surface">
                              {item.name}
                            </td>
                            <td className="py-3.5 px-4 text-on-surface-variant">
                              {item.affiliation}
                            </td>
                            <td className="py-3.5 px-4">
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-label-mono text-label-mono">
                                {item.category}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-on-surface truncate max-w-xs">
                              {item.targetEvent}
                            </td>
                            <td className="py-3.5 px-4 font-label-mono text-label-mono text-secondary">
                              {item.registeredOn}
                            </td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`${
                                  item.status.includes("Confirmed")
                                    ? "bg-tertiary-container/20 text-tertiary"
                                    : "bg-error-container text-on-error-container"
                                } px-2 py-0.5 rounded-full font-label-mono text-label-mono font-semibold flex items-center gap-1 w-max`}
                              >
                                {item.status.includes("Confirmed") ? (
                                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                                ) : (
                                  <span className="material-symbols-outlined text-[12px]">
                                    schedule
                                  </span>
                                )}
                                {item.status}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                className="text-secondary hover:text-primary p-1 rounded cursor-pointer"
                                title="Resend Link / Manage"
                                onClick={() => alert(`Action triggered for ${item.name}`)}
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  {item.status.includes("Confirmed") ? "forward_to_inbox" : "manage_accounts"}
                                </span>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between font-label-mono text-label-mono text-secondary pt-space-xs">
                  <span>Showing {filteredRoster.length} of 3,420 registered attendees</span>
                  <div className="flex items-center gap-1">
                    <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface cursor-pointer disabled:opacity-50">
                      Prev
                    </button>
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary">
                      1
                    </span>
                    <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface cursor-pointer">
                      2
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface cursor-pointer">
                      3
                    </button>
                    <span className="px-1">...</span>
                    <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface cursor-pointer">
                      855
                    </button>
                    <button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface cursor-pointer">
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer Banner */}
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-sm text-secondary font-label-mono text-label-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="text-on-surface font-semibold">
                    LEVEL 4 SECURE ENVIRONMENT • MoES / NCPOR GOA
                  </span>
                  <span className="text-outline-variant">|</span>
                  <span>Polaris Outreach Protocol #POL-EVT-2025</span>
                </div>
                <div className="text-center md:text-right">
                  © National Centre for Polar and Ocean Research, Ministry of Earth Sciences, Govt. of India. All rights reserved.
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}