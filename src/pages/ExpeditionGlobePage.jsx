import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Globe from 'react-globe.gl';
import worldData from 'world-atlas/countries-110m.json';
import { feature } from 'topojson-client';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_expedition_globe_complete_3_frame_showcase/code.html
const BODY_CLASS = "w-full h-screen overflow-hidden flex flex-col bg-[#050B18]";
const HTML_CLASS = "";
const PAGE_CSS = "/* Custom sleek scrollbar for panels */\n    ::-webkit-scrollbar {\n      width: 5px;\n      height: 5px;\n    }\n    ::-webkit-scrollbar-track {\n      background: transparent;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: rgba(31, 122, 140, 0.25);\n      border-radius: 9999px;\n    }\n    ::-webkit-scrollbar-thumb:hover {\n      background: rgba(31, 122, 140, 0.5);\n    }\n  \n\n    body {\n      background-color: #030712;\n      color: #0f172a;\n      font-family: 'Inter', sans-serif;\n      overflow-x: hidden;\n      user-select: none;\n    }\n    .font-serif {\n      font-family: 'Merriweather', serif;\n    }\n    /* SVG & Line markers */\n    .leader-line {\n      stroke: #1F7A8C;\n      stroke-width: 1.5;\n      stroke-dasharray: 4 2;\n    }";
const PAGE_SCRIPT = "// Switches smoothly between the 3 high-fidelity application states\n    function switchFrame(frameId) {\n      // Hide all frames\n      const frames = ['frame-1', 'frame-2', 'frame-3'];\n      frames.forEach(id => {\n        const el = document.getElementById(id + '-view');\n        const btn = document.getElementById('btn-' + id);\n        if (el) el.classList.add('hidden');\n        if (btn) {\n          btn.className = 'px-3 py-1 rounded text-slate-300 hover:text-white font-medium hover:bg-white/5 transition-all flex items-center gap-1.5';\n        }\n      });\n\n      // Show selected frame\n      const target = document.getElementById(frameId + '-view');\n      const targetBtn = document.getElementById('btn-' + frameId);\n      if (target) target.classList.remove('hidden');\n      if (targetBtn) {\n        targetBtn.className = 'px-3 py-1 rounded text-white font-medium bg-teal transition-all shadow-sm flex items-center gap-1.5';\n      }\n    }\n\n    // Toggle Citation Popover Preview in Frame 3\n    function toggleCitationPreview() {\n      const popover = document.getElementById('citation-popover');\n      if (popover) {\n        popover.classList.toggle('hidden');\n      }\n    }\n\n    // Keyboard 'Esc' handler for closing the drawer\n    document.addEventListener('keydown', function(e) {\n      if (e.key === 'Escape') {\n        switchFrame('frame-1');\n      }\n    });";

/* ------------------------------------------------------------------ */
/* Globe (merged from GlobalView)                                      */
/* ------------------------------------------------------------------ */
const countries = feature(worldData, worldData.objects.countries).features;

// Same expeditions as shown in the Frame 1 panel
const expeditions = [
  { id: 1, name: "43rd Indian Antarctic (Bharati)", lat: -69.4, lng: 76.2, year: "2023", description: "Live expedition", frame: "frame-2" },
  { id: 2, name: "IndARC Kongsfjorden", lat: 78.9, lng: 11.9, year: "2024", description: "Arctic Svalbard, Hydro-CTD", frame: "frame-2" },
  { id: 3, name: "Southern Ocean 2006", lat: -62, lng: 60, year: "2006", description: "Polar Front transect", frame: "frame-3" },
  { id: 4, name: "Himansh Spiti Basin", lat: 32.4, lng: 77.6, year: "2020", description: "Mass balance", frame: "frame-2" },
  { id: 5, name: "SOE-02 Repeat Track", lat: -57.5, lng: 48.0, year: "2009", description: "14 cores", frame: "frame-2" },
];

function PolarisGlobe() {
  const globeRef = useRef(null);
  const wrapRef = useRef(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Size the globe to its container (not the window), so it fits below header + nav
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize({
        width: r.width > 50 ? r.width : window.innerWidth,
        height: r.height > 50 ? r.height : window.innerHeight - 104, // header 40 + nav 64
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const handlePointClick = (d) => {
    globeRef.current?.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.7 }, 1200);
    // Reuse the existing frame-switch buttons
    document.getElementById("btn-" + d.frame)?.click();
  };

  const countryName = (c) => c?.properties?.name || "Unknown country";

  return (
    <div ref={wrapRef} className="absolute inset-0 w-full h-full">
      {size.width > 0 && size.height > 0 && (
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="#050B18"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere
          atmosphereColor="#60a5fa"
          atmosphereAltitude={0.12}
          polygonsData={countries}
          polygonCapColor={(c) => (c === hoveredCountry ? "rgba(34,211,238,0.35)" : "rgba(15,100,150,0.05)")}
          polygonSideColor={() => "rgba(0,0,0,0)"}
          polygonStrokeColor={(c) => (c === hoveredCountry ? "#ffffff" : "#80d8ff")}
          polygonAltitude={(c) => (c === hoveredCountry ? 0.008 : 0.002)}
          polygonLabel={(c) =>
            `<div style="background:#020617;color:#fff;padding:8px 12px;border:1px solid #67e8f9;border-radius:8px;font:600 13px Arial">${countryName(c)}</div>`
          }
          onPolygonHover={(c) => setHoveredCountry(c || null)}
          pointsData={expeditions}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={0.015}
          pointRadius={0.35}
          pointColor={() => "#fb923c"}
          pointLabel={(d) =>
            `<div style="background:#fff;color:#0f172a;padding:8px 10px;border-radius:8px;font-family:Arial"><b>${d.name}</b><br/>Year: ${d.year}<br/>${d.description}</div>`
          }
          onPointClick={handlePointClick}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function ExpeditionGlobePage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      {" "}
      {" "}
      {" "}
      <header className="h-10 bg-[#0A1324] border-b border-teal/30 px-4 flex items-center justify-between text-xs text-white z-50 shrink-0">
        {" "}
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-teal animate-pulse" />
          <span className="font-semibold tracking-wider text-slate-300 uppercase text-[10px]">
            POLARIS Viewport Emulator [1440x900]
          </span>
        </div>
        {" "}
        <div className="flex items-center space-x-1 bg-[#050B18] p-1 rounded-lg border border-teal/40">
          <span className="px-2 text-slate-400 text-[11px] font-medium mr-1">
            Active State:
          </span>
          <button className="px-3 py-1 rounded text-white font-medium bg-teal transition-all shadow-sm flex items-center gap-1.5" id="btn-frame-1" onClick={(e)=>window.__pol(e,"switchFrame('frame-1')")}>
            {" "}
            <span>
              Frame 1: Default Panel
            </span>
            {" "}
          </button>
          <button className="px-3 py-1 rounded text-slate-300 hover:text-white font-medium hover:bg-white/5 transition-all flex items-center gap-1.5" id="btn-frame-2" onClick={(e)=>window.__pol(e,"switchFrame('frame-2')")}>
            {" "}
            <span>
              Frame 2: Pin & Tooltip
            </span>
            {" "}
          </button>
          <button className="px-3 py-1 rounded text-slate-300 hover:text-white font-medium hover:bg-white/5 transition-all flex items-center gap-1.5" id="btn-frame-3" onClick={(e)=>window.__pol(e,"switchFrame('frame-3')")}>
            {" "}
            <span>
              Frame 3: Full Drawer
            </span>
            {" "}
          </button>
        </div>
        {" "}
        <div className="flex items-center space-x-3 text-slate-400">
          <span className="text-[11px] font-mono text-teal-light">
            SYS::WGS-84 / ORBIT-RENDER-OK
          </span>
          <span className="bg-teal/20 text-teal-300 px-2 py-0.5 rounded text-[10px] font-medium border border-teal/30">
            NCPOR-DESKTOP
          </span>
        </div>
        {" "}
      </header>
      {" "}
      {" "}
      {" "}
      <main className="relative flex-1 w-full overflow-hidden flex flex-col">
        {" "}
        {" "}
        {" "}
        <nav className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-40 shrink-0 shadow-sm">
          <div className="flex items-center space-x-6">
            <Link className="flex items-center space-x-3 group" to="/expeditions/soe-01">
              {" "}
              <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center text-white shadow-sm ring-2 ring-teal/20">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              {" "}
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg tracking-tight text-slate-900 font-sans">
                    POLARIS
                  </span>
                  <span className="text-[10px] font-semibold bg-slate-100 text-teal px-1.5 py-0.5 rounded border border-slate-200">
                    EXPEDITIONS
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium">
                  NCPOR • MOES INDIA
                </p>
              </div>
              {" "}
            </Link>
            <div className="hidden xl:flex items-center bg-teal-soft border border-teal/20 px-2.5 py-1 rounded-full text-xs text-teal font-medium">
              <span className="w-2 h-2 rounded-full bg-teal animate-ping mr-1.5" />
              <span>
                {"Maitri Station: "}
                <strong>
                  -18.4°C
                </strong>
              </span>
              <span className="text-slate-300 mx-1.5">
                |
              </span>
              <span className="text-slate-500">
                Wind: 22 kts
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-600">
            <Link className="px-3 py-1.5 rounded-md hover:text-teal hover:bg-slate-50 transition-colors" to="/">
              Home
            </Link>
            <Link className="px-3.5 py-1.5 rounded-md text-teal bg-teal-soft font-semibold border-b-2 border-teal" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-1.5 rounded-md hover:text-teal hover:bg-slate-50 transition-colors" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-1.5 rounded-md hover:text-teal hover:bg-slate-50 transition-colors" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-1.5 rounded-md hover:text-teal hover:bg-slate-50 transition-colors" to="/media">
              Media
            </Link>
            <Link className="px-3 py-1.5 rounded-md hover:text-teal hover:bg-slate-50 transition-colors" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-1.5 rounded-md hover:text-teal hover:bg-slate-50 transition-colors" to="/education">
              Education
            </Link>
            <Link className="px-3 py-1.5 rounded-md hover:text-teal hover:bg-slate-50 transition-colors flex items-center gap-1" to="/ask">
              {" "}
              <span>
                Ask Polaris
              </span>
              {" "}
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              {" "}
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-slate-500 hover:text-teal hover:bg-slate-100 rounded-lg transition-colors" title="Global Search">
              {" "}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {" "}
            </button>
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs font-semibold text-slate-600">
              <button className="px-2 py-1 bg-white text-teal rounded shadow-sm">
                EN
              </button>
              <button className="px-2 py-1 hover:text-slate-900">
                HI
              </button>
            </div>
            <button className="p-2 text-slate-500 hover:text-teal hover:bg-slate-100 rounded-lg transition-colors" title="Radio Stations">
              {" "}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {" "}
            </button>
            <button className="p-2 text-slate-500 hover:text-teal hover:bg-slate-100 rounded-lg transition-colors" title="Light Theme">
              {" "}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {" "}
            </button>
            <div className="h-6 w-[1px] bg-slate-200" />
            <button className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-xs ring-2 ring-teal/30 hover:ring-teal transition-all">
              {" "}
              <span>
                NP
              </span>
              {" "}
            </button>
          </div>
        </nav>
        {" "}
        {" "}
        {" "}
        {" "}
        <div className="relative flex-1 bg-[#050B18] overflow-hidden" style={{ minHeight: "calc(100vh - 104px)" }}>
          {/* GLOBE SLOT: real interactive globe now lives here */}
          <div className="absolute inset-0 z-0" id="polaris-globe-main">
            <PolarisGlobe />
          </div>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[980px] max-w-[95%] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80 p-2 z-30 flex items-center justify-between text-xs">
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl">
              <button className="px-3 py-1.5 rounded-lg bg-teal text-white font-semibold shadow-sm transition-all">
                All (44)
              </button>
              <button className="px-3 py-1.5 rounded-lg text-slate-700 font-medium hover:text-slate-900 transition-all flex items-center gap-1.5">
                {" "}
                <span className="w-2 h-2 rounded-full bg-amber-live animate-ping" />
                {" "}
                <span>
                  Live (2)
                </span>
                {" "}
              </button>
              <button className="px-3 py-1.5 rounded-lg text-slate-700 font-medium hover:text-slate-900 transition-all">
                Completed (36)
              </button>
              <button className="px-3 py-1.5 rounded-lg text-slate-700 font-medium hover:text-slate-900 transition-all">
                Upcoming (6)
              </button>
            </div>
            <div className="relative">
              <select className="bg-white border border-slate-200 text-slate-700 py-1.5 pl-3 pr-8 rounded-lg font-medium focus:ring-2 focus:ring-teal focus:border-teal text-xs">
                <option>
                  Region: All Polar
                </option>
                <option>
                  Antarctica (Prydz Bay)
                </option>
                <option>
                  Arctic (Svalbard IndARC)
                </option>
                <option>
                  Southern Ocean
                </option>
                <option>
                  Himalayan Cryosphere
                </option>
              </select>
            </div>
            <div className="relative">
              <select className="bg-white border border-slate-200 text-slate-700 py-1.5 pl-3 pr-8 rounded-lg font-medium focus:ring-2 focus:ring-teal focus:border-teal text-xs">
                <option>
                  Discipline: All Fields
                </option>
                <option>
                  Oceanography & CTD
                </option>
                <option>
                  Glaciology & Ice Cores
                </option>
                <option>
                  Atmospheric Physics
                </option>
                <option>
                  Marine Paleoclimatology
                </option>
              </select>
            </div>
            <div className="flex items-center bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-lg text-slate-600 font-mono text-[11px]">
              <svg className="w-3.5 h-3.5 mr-1.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>
                2006 – 2026
              </span>
            </div>
            <div className="relative w-48">
              <input className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-7 pr-2 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-teal focus:border-teal" placeholder="Place / -69.4, 76.2" type="text" />
              <svg className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex items-center space-x-1 pl-1">
              <button className="p-1.5 text-slate-400 hover:text-teal rounded-md transition-colors" title="Reset Filters">
                {" "}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
              </button>
              <button className="p-1.5 text-slate-400 hover:text-teal rounded-md transition-colors" title="Share View">
                {" "}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
              </button>
            </div>
          </div>
          <aside className="absolute right-4 top-24 flex flex-col space-y-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-slate-200/80 text-slate-600 z-30">
            {" "}
            <button className="w-9 h-9 rounded-xl bg-teal text-white flex items-center justify-center font-bold text-xs shadow-sm hover:bg-teal-dark transition-colors" title="Toggle 3D">
              {" 3D "}
            </button>
            {" "}
            <button className="w-9 h-9 rounded-xl hover:bg-slate-100 flex flex-col items-center justify-center text-[9px] font-semibold text-slate-700 transition-colors" title="Arc View">
              {" "}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {" ARC "}
            </button>
            {" "}
            <button className="w-9 h-9 rounded-xl hover:bg-slate-100 flex flex-col items-center justify-center text-[9px] font-semibold text-slate-700 transition-colors" title="Antarctic View">
              {" "}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {" ANT "}
            </button>
            {" "}
            <div className="w-6 h-[1px] bg-slate-200 mx-auto" />
            {" "}
            <button className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center transition-colors" title="Reset Rotation">
              {" "}
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              {" "}
            </button>
            {" "}
            <button className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-700 transition-colors" title="Zoom In">
              {" + "}
            </button>
            {" "}
            <button className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-700 transition-colors" title="Zoom Out">
              {" − "}
            </button>
            {" "}
            <div className="w-6 h-[1px] bg-slate-200 mx-auto" />
            {" "}
            <button className="w-9 h-9 rounded-xl hover:bg-teal-soft hover:text-teal flex items-center justify-center transition-colors" title="Compass Orientation">
              {" "}
              <svg className="w-4 h-4 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <polygon fill="currentColor" points="12 6 15 12 12 18 9 12 12 6" />
              </svg>
              {" "}
            </button>
            {" "}
          </aside>
          {/* FRAME 1 - section is click-through so the globe stays interactive; panel itself is clickable */}
          <section className="frame-state absolute inset-0 z-20 pointer-events-none" id="frame-1-view">
            <div className="absolute left-6 top-6 bottom-20 w-80 pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden">
              <div className="p-3.5 border-b border-slate-200 flex items-center justify-between shrink-0">
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="font-bold text-sm text-slate-900 font-sans">
                      Expeditions
                    </h2>
                    <span className="text-[10px] font-semibold bg-teal text-white px-2 py-0.5 rounded-full">
                      NCPOR
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Showing 6 of 44 field teams
                  </p>
                </div>
                <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-slate-600">
                  <button className="p-1 rounded bg-white text-teal shadow-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                  <button className="p-1 rounded hover:text-slate-900">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
                <div className="p-3 rounded-xl bg-teal-soft border-2 border-teal shadow-sm cursor-pointer hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-teal text-white flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-slate-900 leading-tight">
                          43rd Indian Antarctic
                        </h3>
                        <p className="text-[10px] text-slate-500">
                          Nov 2023 – Present • Bharati
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-bg text-amber-live border border-amber-border">
                      {" ● LIVE "}
                    </span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-teal/15 flex items-center justify-between text-[10px] font-mono text-teal">
                    <span>
                      Lat 69.4° S, Lon 76.2° E
                    </span>
                    <span className="flex items-center gap-1 font-sans font-semibold">
                      View Pin →
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-teal/50 cursor-pointer transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-teal flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-slate-900 leading-tight">
                          IndARC Kongsfjorden
                        </h3>
                        <p className="text-[10px] text-slate-500">
                          Arctic Svalbard • 192m depth
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-bg text-amber-live border border-amber-border">
                      {" ● LIVE "}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>
                      Lat 78.9° N, Lon 11.9° E
                    </span>
                    <span className="font-sans text-slate-500">
                      Hydro-CTD
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-teal cursor-pointer transition-all" onClick={(e)=>window.__pol(e,"switchFrame('frame-3')")}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-soft text-teal flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-slate-900 leading-tight">
                          Southern Ocean 2006
                        </h3>
                        <p className="text-[10px] text-slate-500">
                          Jan – Apr 2006 • Polar Front
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {" DONE "}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>
                      Lat 55°S–68°S
                    </span>
                    <span className="font-sans text-teal font-medium">
                      Click to open drawer
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-purple-upcoming/50 cursor-pointer transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-bg text-purple-upcoming flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-slate-900 leading-tight">
                          44th Antarctic Summer
                        </h3>
                        <p className="text-[10px] text-slate-500">
                          Nov 2025 • Bharati & Maitri
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-bg text-purple-upcoming border border-purple-border">
                      {" UPCOMING "}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>
                      Cape Town Staging
                    </span>
                    <span className="font-sans text-slate-500">
                      48 Crew
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-teal/50 cursor-pointer transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-teal flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-slate-900 leading-tight">
                          Himansh Spiti Basin
                        </h3>
                        <p className="text-[10px] text-slate-500">
                          Himalaya • 4,200m altitude
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {" DONE "}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>
                      Lat 32.4° N, Lon 77.6° E
                    </span>
                    <span className="font-sans text-slate-500">
                      Mass Balance
                    </span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-teal/50 cursor-pointer transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-teal flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-slate-900 leading-tight">
                          SOE-02 Repeat Track
                        </h3>
                        <p className="text-[10px] text-slate-500">
                          Feb – Apr 2009 • ORV Sagar Kanya
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {" DONE "}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>
                      Lat 57.5° S, Lon 48.0° E
                    </span>
                    <span className="font-sans text-slate-500">
                      14 Cores
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-200 p-3 bg-slate-50/90 shrink-0">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span>
                      MAP & DATA LAYERS
                    </span>
                  </div>
                  <span className="text-[10px] text-teal cursor-pointer">
                    Hide ▲
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    {" "}
                    <input defaultChecked="" className="rounded text-teal focus:ring-teal h-3.5 w-3.5" type="checkbox" />
                    {" "}
                    <span className="font-medium">
                      Stations
                    </span>
                    {" "}
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    {" "}
                    <input defaultChecked="" className="rounded text-teal focus:ring-teal h-3.5 w-3.5" type="checkbox" />
                    {" "}
                    <span className="font-medium">
                      Datasets
                    </span>
                    {" "}
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    {" "}
                    <input defaultChecked="" className="rounded text-teal focus:ring-teal h-3.5 w-3.5" type="checkbox" />
                    {" "}
                    <span className="font-medium">
                      Media Pins
                    </span>
                    {" "}
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    {" "}
                    <input defaultChecked="" className="rounded text-teal focus:ring-teal h-3.5 w-3.5" type="checkbox" />
                    {" "}
                    <span className="font-medium">
                      Sea-Ice Extent
                    </span>
                    {" "}
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    {" "}
                    <input className="rounded text-teal focus:ring-teal h-3.5 w-3.5" type="checkbox" />
                    {" "}
                    <span>
                      Currents
                    </span>
                    {" "}
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    {" "}
                    <input className="rounded text-teal focus:ring-teal h-3.5 w-3.5" type="checkbox" />
                    {" "}
                    <span>
                      Day/Night Line
                    </span>
                    {" "}
                  </label>
                </div>
              </div>
            </div>
          </section>
          {/* FRAME 2 - section is click-through; aside, tooltip and card re-enable pointer events */}
          <section className="frame-state hidden absolute inset-0 z-20 pointer-events-none" id="frame-2-view">
            <aside className="absolute left-6 top-6 bottom-20 w-16 pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 flex flex-col items-center py-4 space-y-4 z-30">
              {" "}
              <button className="p-2.5 rounded-xl bg-teal-soft text-teal hover:bg-teal hover:text-white transition-all shadow-xs" title="Expand panel" onClick={(e)=>window.__pol(e,"switchFrame('frame-1')")}>
                {" "}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
              </button>
              {" "}
              <div className="w-8 h-[1px] bg-slate-200" />
              {" "}
              <button className="p-2 rounded-xl text-teal bg-teal-soft" title="Expeditions Layer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <circle cx="12" cy="12" fill="currentColor" r="3" />
                </svg>
              </button>
              {" "}
              <button className="p-2 rounded-xl text-slate-400 hover:text-teal hover:bg-slate-100" title="Layers">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {" "}
              <button className="p-2 rounded-xl text-slate-400 hover:text-teal hover:bg-slate-100" title="Filters">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {" "}
              <button className="p-2 rounded-xl text-slate-400 hover:text-teal hover:bg-slate-100" title="Saved">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {" "}
              <div className="flex-1" />
              {" "}
              <button className="p-2 rounded-xl text-slate-400 hover:text-teal hover:bg-slate-100" title="Telemetry">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {" "}
            </aside>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
              <circle cx="590" cy="330" fill="#1F7A8C" fillOpacity="0.2" r="14" />
              <circle cx="590" cy="330" fill="#1F7A8C" r="7" stroke="#FFFFFF" strokeWidth="2" />
              <path className="leader-line" d="M590 330 L640 280 L680 280" fill="none" />
            </svg>
            <div className="absolute left-[540px] top-[345px] bg-[#050B18]/90 border border-teal/40 px-2 py-0.5 rounded text-[10px] font-mono text-teal-light">
              {" 69.4°S, 76.2°E "}
            </div>
            <div className="absolute left-[680px] top-[100px] w-[350px] pointer-events-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-30 animate-fade-in">
              <div className="relative h-36 bg-gradient-to-tr from-slate-900 via-teal-dark to-slate-800 p-4 flex flex-col justify-between text-white overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-medium border border-white/20">
                    {" ORV SAGAR KANYA • CRUISE SK-221 "}
                  </span>
                  <button className="w-6 h-6 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-xs" onClick={(e)=>window.__pol(e,"switchFrame('frame-1')")}>
                    ✕
                  </button>
                </div>
                <div className="opacity-70 flex items-center space-x-2 text-xs">
                  <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span className="text-[11px] font-mono text-slate-200">
                    Polar Front Transect 2006
                  </span>
                </div>
                <div className="flex space-x-1.5 justify-center">
                  <span className="w-4 h-1 rounded-full bg-teal" />
                  <span className="w-1.5 h-1 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1 rounded-full bg-white/40" />
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {" ✓ COMPLETED "}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Jan – Mar 2006 • 68d
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mt-1 font-serif">
                    Southern Ocean Expedition 2006
                  </h3>
                  <p className="text-xs font-mono text-teal mt-0.5">
                    Lat 69.4° S | Lon 76.2° E
                  </p>
                </div>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {" Pioneering multidisciplinary Southern Ocean cruise investigating Antarctic circumpolar current dynamics, carbon flux sequestration, and sediment core paleoclimate records across the polar frontal zone. "}
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="bg-teal-soft text-teal px-2 py-0.5 rounded-md font-medium border border-teal/20 flex items-center gap-1">
                    {" "}
                    <span>
                      ✦
                    </span>
                    {" AI-Drafted "}
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium border border-slate-200 flex items-center gap-1">
                    {" "}
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" Source: NPDC/MoES "}
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md font-medium border border-emerald-200 flex items-center gap-1">
                    {" "}
                    <span>
                      ✓
                    </span>
                    {" Verified by NCPOR "}
                  </span>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center text-[10px] font-medium text-slate-700 mb-1">
                    <span className="flex items-center gap-1 text-slate-600">
                      {" "}
                      <svg className="w-3 h-3 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path clipRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" fillRule="evenodd" />
                      </svg>
                      {" Scientific Confidence "}
                    </span>
                    <span className="text-teal font-bold font-mono">
                      High 92%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="bg-teal h-full rounded-full" style={{"width": "92%"}} />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-teal-soft/60 px-2.5 py-1.5 rounded-xl border border-teal/20 text-xs">
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-[10px]">
                      ▶
                    </button>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-800">
                        Audio Briefing
                      </div>
                      <div className="text-[9px] text-slate-500">
                        1:24 / 3:10 • AI Voice
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-medium">
                    <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700">
                      1.0x
                    </span>
                    <span className="text-teal font-semibold">
                      EN
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-1">
                  <button className="flex-1 bg-teal hover:bg-teal-dark text-white font-medium py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors" onClick={(e)=>window.__pol(e,"switchFrame('frame-3')")}>
                    {" "}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                    <span>
                      See Full Details
                    </span>
                    {" "}
                  </button>
                  <button className="p-2 border border-slate-200 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors" title="Share Expedition">
                    {" "}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                  </button>
                  <button className="p-2 border border-slate-200 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors" title="Bookmark">
                    {" "}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute left-[380px] top-[180px] z-30">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-amber-live/30 animate-ping" />
                <div className="w-5 h-5 rounded-full bg-amber-live border-2 border-white shadow-lg flex items-center justify-center text-white text-[9px] font-bold">
                  {" • "}
                </div>
              </div>
              <div className="absolute left-6 -top-4 w-60 bg-white rounded-xl shadow-xl border border-slate-200 p-2.5 animate-fade-in pointer-events-auto">
                <div className="flex items-center justify-between text-[10px] mb-1">
                  <span className="text-slate-400 font-medium uppercase tracking-wider text-[9px]">
                    HOVER STATE PREVIEW
                  </span>
                  <span className="bg-amber-bg text-amber-live px-1.5 py-0.2 rounded font-bold border border-amber-border">
                    ● LIVE
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-soft text-teal flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-xs text-slate-900 truncate">
                      IndARC Mooring V
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      Svalbard • 192m depth
                    </p>
                  </div>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-600">
                  <span>
                    Lat 78.9° N, Lon 11.9° E
                  </span>
                  <span className="text-teal font-sans">
                    ›
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* FRAME 3 - unchanged: full-screen backdrop intentionally blocks the globe */}
          <section className="frame-state hidden absolute inset-0 z-20 pointer-events-auto" id="frame-3-view">
            <aside className="absolute left-6 top-6 bottom-20 w-16 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/90 flex flex-col items-center py-4 space-y-4 z-20">
              {" "}
              <button className="p-2.5 rounded-xl bg-teal-soft text-teal hover:bg-teal hover:text-white transition-all shadow-xs" title="Expand panel" onClick={(e)=>window.__pol(e,"switchFrame('frame-1')")}>
                {" "}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
              </button>
              {" "}
              <div className="w-8 h-[1px] bg-slate-200" />
              {" "}
              <button className="p-2 rounded-xl text-teal bg-teal-soft" title="Expeditions Layer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <circle cx="12" cy="12" fill="currentColor" r="3" />
                </svg>
              </button>
              {" "}
              <button className="p-2 rounded-xl text-slate-400 hover:text-teal hover:bg-slate-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {" "}
              <button className="p-2 rounded-xl text-slate-400 hover:text-teal hover:bg-slate-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {" "}
            </aside>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all" />
            <div className="absolute top-4 left-24 bg-slate-900/90 text-white px-4 py-2 rounded-xl border border-teal/40 flex items-center space-x-3 text-xs z-30">
              <span className="bg-teal text-white font-bold px-2 py-0.5 rounded text-[10px]">
                SOE-01
              </span>
              <span className="text-slate-300">
                ORV Sagar Kanya
              </span>
              <span className="text-slate-500">
                |
              </span>
              <span className="text-teal-light font-mono">
                Station 14 to 42 Active
              </span>
              <span className="text-slate-400 text-[11px] ml-2">
                ⓘ Click any citation superscript to verify against archives
              </span>
            </div>
            <div className="absolute right-[460px] top-64 w-72 bg-white rounded-2xl shadow-2xl border-2 border-teal p-3.5 text-xs z-40 animate-fade-in" id="citation-popover">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                <span className="font-bold text-teal flex items-center gap-1">
                  {" "}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  {" "}
                  <span>
                    Citation [1] Preview
                  </span>
                  {" "}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  DOI:10.1016/polar.2007
                </span>
              </div>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                {" \"Antarctic Polar Front (APF) jet speed was measured at 0.42 m/s through the Kerguelen Trench using lowered ADCP sensors during Cruise SK-221.\" "}
              </p>
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-medium">
                  NCPOR Technical Report 2006
                </span>
                <a className="text-teal font-semibold hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                  Open PDF ↗
                </a>
              </div>
            </div>
            <aside className="absolute right-0 top-0 bottom-0 w-[440px] bg-white shadow-2xl border-l border-slate-200 flex flex-col z-30 overflow-hidden">
              {" "}
              {" "}
              <div className="p-3.5 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white">
                <div className="flex items-center space-x-2">
                  <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors" title="Close Drawer (Esc)" onClick={(e)=>window.__pol(e,"switchFrame('frame-1')")}>
                    {" "}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" "}
                  </button>
                  <span className="text-xs font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 border border-slate-200">
                    ESC
                  </span>
                  <span className="text-xs text-slate-400">
                    / Expeditions / Southern Ocean
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500" title="Share">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                  <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500" title="Bookmark">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </div>
              {" "}
              {" "}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-950 relative text-white">
                  <div className="h-44 bg-gradient-to-tr from-slate-900 via-teal-dark to-slate-800 p-3 flex flex-col justify-between relative">
                    <div className="flex items-center justify-between z-10">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono border border-white/20">
                        {" 1 / 14 MEDIA "}
                      </span>
                      <span className="bg-teal text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                        {" ORV Sagar Kanya "}
                      </span>
                    </div>
                    <div className="self-center flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4.5 3.5l11 6.5-11 6.5z" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-medium text-slate-200 mt-1">
                        Field Clip: CTD Deployment
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 z-10">
                      <span className="font-mono text-teal-light">
                        0:20 • Prydz Bay Shelf
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="bg-white/20 hover:bg-white/30 px-1.5 py-0.5 rounded font-mono text-[9px]">
                          CC ON
                        </button>
                        <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-900 py-1.5 flex justify-center space-x-1">
                    <span className="w-5 h-1 bg-teal rounded-full" />
                    <span className="w-1.5 h-1 bg-slate-700 rounded-full" />
                    <span className="w-1.5 h-1 bg-slate-700 rounded-full" />
                    <span className="w-1.5 h-1 bg-slate-700 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {" ● COMPLETED "}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Jan 25 – Apr 03, 2006
                    </span>
                    <span className="text-slate-300">
                      •
                    </span>
                    <span className="text-xs text-slate-500">
                      68 Days at Sea
                    </span>
                  </div>
                  <h2 className="font-bold text-lg text-slate-900 mt-1 font-serif leading-snug">
                    {" Southern Ocean Expedition 2006 (SOE-01) "}
                  </h2>
                  <div className="mt-2.5 flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-bold text-xs">
                        {" MR "}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          Dr. M. Ravichandran
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Chief Scientist & Lead Oceanographer, NCPOR
                        </div>
                      </div>
                    </div>
                    <div className="flex -space-x-1.5 overflow-hidden">
                      <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-700 text-white text-[9px] flex items-center justify-center font-bold">
                        SK
                      </span>
                      <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-teal text-white text-[9px] flex items-center justify-center font-bold">
                        AB
                      </span>
                      <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-800 text-white text-[9px] flex items-center justify-center font-bold">
                        NR
                      </span>
                      <span className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-300 text-slate-700 text-[9px] flex items-center justify-center font-bold">
                        +18
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 tracking-wider uppercase flex items-center justify-between">
                    <span>
                      EXPEDITION STATUS MODALITIES
                    </span>
                    <span className="text-teal font-normal lowercase">
                      interactive preview
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-border text-xs">
                    <div className="flex items-center justify-between text-[11px] font-bold text-amber-900">
                      <span className="flex items-center gap-1.5">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-amber-live animate-ping" />
                        {" LIVE TELEMETRY (43RD IAE ACTIVE) "}
                      </span>
                      <span className="font-mono text-[10px] text-amber-800">
                        Via INSAT • 4m ago
                      </span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-700">
                      <div>
                        {"POS: "}
                        <strong>
                          69°24'S, 76°11'E
                        </strong>
                      </div>
                      <div>
                        {"SOG: "}
                        <strong>
                          11.4 kts (Ice Transit)
                        </strong>
                      </div>
                      <div>
                        {"HDG: "}
                        <strong>
                          142° SE
                        </strong>
                      </div>
                      <div>
                        {"SEA TEMP: "}
                        <strong>
                          -1.4°C
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-bg/60 border border-purple-border text-xs">
                    <div className="flex items-center justify-between text-[11px] font-bold text-purple-900">
                      <span className="flex items-center gap-1.5">
                        {" "}
                        <svg className="w-3.5 h-3.5 text-purple-upcoming" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        {" UPCOMING MISSION (44TH IAE) "}
                      </span>
                      <span className="font-mono text-[10px] text-purple-upcoming font-bold">
                        T-48d 14h 22m
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between text-[11px] text-purple-950">
                      <span>
                        Staging: Cape Town • R/V Kronprins Haakon
                      </span>
                      <button className="text-[10px] bg-purple-upcoming text-white px-2 py-0.5 rounded font-semibold hover:bg-purple-800">
                        Notify
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                      {" "}
                      <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {" Location & Hydrography "}
                    </h4>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                      SOUTHERN SECTOR
                    </span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-600 font-sans">
                    <div className="flex justify-between">
                      <span className="text-slate-500">
                        Prydz Bay & Kerguelen Plateau
                      </span>
                      <span className="font-semibold text-slate-800 font-mono">
                        Piston Core #4
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100 space-y-0.5">
                      <div className="flex justify-between">
                        <span>
                          {"Decimal: "}
                          <strong>
                            Lat -69.3782°, Lon 76.1925°
                          </strong>
                        </span>
                        <button className="text-teal font-sans hover:underline text-[10px]">
                          Copy
                        </button>
                      </div>
                      <div>
                        {"DMS: "}
                        <strong>
                          69° 22' 41" S, 76° 11' 33" E
                        </strong>
                      </div>
                      <div className="text-teal">
                        {"Bathymetric Depth: "}
                        <strong>
                          3,420 m (Deep Trench)
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-1 text-[11px]">
                    <button className="flex-1 bg-slate-100 hover:bg-slate-200 py-1.5 px-2 rounded-lg font-medium text-slate-700 transition-colors flex items-center justify-center gap-1">
                      {" "}
                      <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {" "}
                      <span>
                        Route from NCPOR Goa
                      </span>
                      {" "}
                    </button>
                    <button className="flex-1 bg-slate-100 hover:bg-slate-200 py-1.5 px-2 rounded-lg font-medium text-slate-700 transition-colors flex items-center justify-center gap-1">
                      {" "}
                      <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {" "}
                      <span>
                        View in 3D GIS
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-teal-soft/40 border border-teal/20 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-teal font-bold text-xs flex items-center gap-1">
                        {" "}
                        <span>
                          ✦
                        </span>
                        {" AI Synthesis "}
                      </span>
                      <span className="text-[9px] bg-white text-teal px-1.5 py-0.2 rounded border border-teal/20 font-medium">
                        AI-Drafted
                      </span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-medium">
                        MoES Verified
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-teal">
                      94%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-teal h-full rounded-full" style={{"width": "94%"}} />
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {" Pioneering multidisciplinary expedition conducting deep CTD profiling across the Antarctic Polar Front"}
                    <button className="text-teal font-bold font-mono px-0.5 hover:underline cursor-pointer" onClick={(e)=>window.__pol(e,"toggleCitationPreview()")}>
                      ¹
                    </button>
                    {" to map Southern Ocean overturning circulation dynamics. Retrieved five sediment piston cores spanning 450,000 years of paleoclimate records"}
                    <button className="text-teal font-bold font-mono px-0.5 hover:underline cursor-pointer" onClick={(e)=>window.__pol(e,"toggleCitationPreview()")}>
                      ²
                    </button>
                    {" with ultra-high resolution diatom bio-stratigraphy"}
                    <button className="text-teal font-bold font-mono px-0.5 hover:underline cursor-pointer" onClick={(e)=>window.__pol(e,"toggleCitationPreview()")}>
                      ³
                    </button>
                    . Quantified air-sea CO₂ exchange rates showing intense winter drawdown
                    <button className="text-teal font-bold font-mono px-0.5 hover:underline cursor-pointer" onClick={(e)=>window.__pol(e,"toggleCitationPreview()")}>
                      ⁴
                    </button>
                    , establishing India's first long-term Southern Ocean biogeochemical baseline
                    <button className="text-teal font-bold font-mono px-0.5 hover:underline cursor-pointer" onClick={(e)=>window.__pol(e,"toggleCitationPreview()")}>
                      ⁵
                    </button>
                    {". "}
                  </p>
                  <div className="flex items-center justify-between pt-1 border-t border-teal/15 text-xs">
                    <button className="flex items-center space-x-1.5 text-teal font-medium hover:text-teal-dark">
                      {" "}
                      <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-[9px]">
                        ▶
                      </span>
                      {" "}
                      <span>
                        Listen 2:45m
                      </span>
                      {" "}
                    </button>
                    <div className="flex items-center space-x-3 text-slate-500 text-xs">
                      <button className="hover:text-teal">
                        EN / HI
                      </button>
                      <button className="hover:text-teal" title="Regenerate Summary">
                        ↻
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xs text-slate-800 flex items-center justify-between">
                    {" "}
                    <span>
                      Key Scientific Findings
                    </span>
                    {" "}
                    <span className="text-[10px] text-slate-500 font-normal">
                      3 Peer-Reviewed Findings
                    </span>
                    {" "}
                  </h4>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-800">
                        Polar Front Current Velocity Anomalies
                      </span>
                      <span className="font-mono text-teal font-bold text-[11px]">
                        0.42 m/s
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Measured jet speed reaching 0.42 m/s at 200m depth, showing strong bathymetric steering through Kerguelen Trench.
                    </p>
                    <Link className="inline-flex items-center gap-1 text-[10px] text-teal font-medium hover:underline pt-0.5" to="/resources/ncpor-tr-2024-08">
                      {" "}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {" "}
                      <span>
                        NCPOR Scientific Report 2006, p.12 ↗
                      </span>
                      {" "}
                    </Link>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-800">
                        Carbon Sequestration Saturation
                      </span>
                      <span className="font-mono text-emerald-700 font-bold text-[11px]">
                        High Uptake
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      High biological pump efficiency observed south of 58°S with pronounced pCO₂ undersaturation during austral summer.
                    </p>
                    <a className="inline-flex items-center gap-1 text-[10px] text-teal font-medium hover:underline pt-0.5" href="#" onClick={(e)=>e.preventDefault()}>
                      {" "}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {" "}
                      <span>
                        Technical Cruise Log Vol 1, p.48 ↗
                      </span>
                      {" "}
                    </a>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-800">
                        Sub-bottom Sediment Stratigraphy
                      </span>
                      <span className="font-mono text-slate-600 font-bold text-[11px]">
                        450 kyr BP
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Identified intact Brunhes-Matuyama magnetic polarity transition at 4.2m depth in Core PC-04.
                    </p>
                    <Link className="inline-flex items-center gap-1 text-[10px] text-teal font-medium hover:underline pt-0.5" to="/data">
                      {" "}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {" "}
                      <span>
                        NPDC GeoData Archive, p.104 ↗
                      </span>
                      {" "}
                    </Link>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-2 flex space-x-3 text-xs font-semibold text-slate-500">
                  <span className="text-teal border-b-2 border-teal pb-1">
                    Overview
                  </span>
                  <span className="hover:text-slate-700 cursor-pointer">
                    Media (14)
                  </span>
                  <span className="hover:text-slate-700 cursor-pointer">
                    Reports (4)
                  </span>
                  <span className="hover:text-slate-700 cursor-pointer">
                    Datasets (9)
                  </span>
                  <span className="hover:text-slate-700 cursor-pointer">
                    Stories (2)
                  </span>
                </div>
              </div>
              {" "}
              {" "}
              <div className="p-3 bg-white border-t border-slate-200 shrink-0 space-y-2">
                <button className="w-full bg-teal hover:bg-teal-dark text-white font-medium py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all">
                  {" "}
                  <span>
                    Open Full Expedition Page
                  </span>
                  {" "}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  {" "}
                </button>
                <div className="grid grid-cols-4 gap-1.5 text-[11px] text-slate-600 font-medium">
                  <button className="py-1.5 px-1 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-[10px]">
                    {" "}
                    <svg className="w-3.5 h-3.5 text-slate-600 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" PDF Brief "}
                  </button>
                  <button className="py-1.5 px-1 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-[10px]">
                    {" "}
                    <svg className="w-3.5 h-3.5 text-slate-600 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" Cite DOI "}
                  </button>
                  <button className="py-1.5 px-1 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-[10px]">
                    {" "}
                    <svg className="w-3.5 h-3.5 text-slate-600 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" Compare "}
                  </button>
                  <button className="py-1.5 px-1 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-[10px]">
                    {" "}
                    <svg className="w-3.5 h-3.5 text-slate-600 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    {" Share "}
                  </button>
                </div>
              </div>
              {" "}
            </aside>
          </section>
          <footer className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[920px] max-w-[95%] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 px-4 py-2 z-30 flex items-center justify-between text-xs">
            {" "}
            {" "}
            <div className="flex items-center space-x-2 font-mono text-[11px] text-slate-700 bg-slate-100/90 px-3 py-1.5 rounded-xl border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span>
                {"Lat "}
                <strong>
                  12.34° N
                </strong>
              </span>
              <span className="text-slate-300">
                •
              </span>
              <span>
                {"Lon "}
                <strong>
                  56.78° E
                </strong>
              </span>
              <span className="text-slate-300">
                •
              </span>
              <span>
                {"Alt "}
                <strong>
                  8,200 km
                </strong>
              </span>
              <span className="text-slate-300">
                •
              </span>
              <span className="text-teal font-sans font-semibold text-[10px]">
                INSAT TELEMETRY
              </span>
            </div>
            {" "}
            {" "}
            <div className="flex items-center space-x-3 flex-1 max-w-sm mx-4">
              <button className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center shrink-0 hover:bg-teal-dark shadow-xs" title="Play timeline scrub">
                {" ▶ "}
              </button>
              <span className="font-mono text-[11px] text-slate-500">
                2006
              </span>
              <div className="relative flex-1 h-2 bg-slate-200 rounded-full flex items-center cursor-pointer">
                <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-teal rounded-full" />
                <div className="absolute left-3/4 -translate-x-1/2 w-4 h-4 bg-white border-2 border-teal rounded-full shadow-md">
                  <span className="absolute -top-6 -left-3 bg-slate-900 text-white font-mono text-[9px] px-1 rounded whitespace-nowrap">
                    2024
                  </span>
                </div>
              </div>
              <span className="font-mono text-[11px] font-bold text-slate-800">
                2026
              </span>
            </div>
            {" "}
            {" "}
            <div className="flex items-center space-x-2.5">
              <button className="px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs flex items-center gap-1 transition-colors">
                {" "}
                <svg className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Compare
                </span>
                {" "}
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-teal-soft text-teal font-medium text-xs hover:bg-teal hover:text-white transition-all flex items-center gap-1.5 border border-teal/20">
                {" "}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {" "}
                <span>
                  Guided Tour
                </span>
                {" "}
              </button>
              <div className="flex items-center space-x-1.5 pl-1 text-[11px] font-medium text-slate-600">
                <span>
                  Auto-narrate
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  {" "}
                  <input defaultChecked="" className="sr-only peer" type="checkbox" />
                  {" "}
                  <div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-teal" />
                  {" "}
                </label>
              </div>
            </div>
            {" "}
          </footer>
        </div>
        {" "}
        {" "}
      </main>
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
    </>
  );
}