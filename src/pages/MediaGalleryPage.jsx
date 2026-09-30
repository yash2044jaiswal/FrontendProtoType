import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_polar_media_gallery_media/code.html
const BODY_CLASS = "bg-surface font-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "(function () {\n      const activeNavClasses = \"bg-primary-container text-on-primary font-semibold rounded-lg shadow-sm border-b-2 border-primary-fixed\";\n      const inactiveNavClasses = \"px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors\";\n      document.querySelectorAll(\"header nav a\").forEach(link => {\n        if (link.getAttribute(\"data-path\") === \"media\") {\n          link.className = `px-3 py-1.5 font-label-md text-label-md ${activeNavClasses}`;\n        } else {\n          link.className = inactiveNavClasses;\n        }\n      });\n    })();";

export default function MediaGalleryPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(7,28,54,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  explore
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase">
                  Polaris
                </span>
                <span className="font-label-mono text-label-mono text-secondary tracking-widest">
                  NCPOR • MOES INDIA
                </span>
              </div>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low" data-active-classes="bg-primary-container text-on-primary font-semibold rounded-lg shadow-sm border-b-2 border-primary-fixed">
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-1.5 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm shrink-0">
            <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-mono">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse" />
              <span>
                MAITRI -18°C
              </span>
            </div>
            <button aria-label={"Search telemetry & records"} className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            <div className="flex items-center bg-surface-container rounded-lg p-0.5 font-label-mono text-label-mono">
              <button className="px-2 py-1 rounded bg-surface-container-lowest text-primary font-bold shadow-xs" type="button">
                EN
              </button>
              <button className="px-2 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                HI
              </button>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-64px)]">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center -z-10">
              <svg className="w-[1600px] h-[800px] text-primary" fill="none" stroke="currentColor" viewBox="0 0 1200 600">
                <path d="M-100,100 C200,80 400,240 700,180 C1000,120 1100,280 1300,250" strokeWidth="1.2" />
                <path d="M-100,200 C150,190 380,320 680,290 C980,260 1150,420 1300,380" strokeWidth="1" />
                <path d="M-100,300 C220,310 490,440 790,400 C1050,360 1180,520 1300,490" strokeWidth="0.8" />
                <circle cx="850" cy="220" r="140" strokeDasharray="4 6" strokeWidth="0.75" />
                <circle cx="850" cy="220" r="190" strokeWidth="0.5" />
                <path d="M850,50 L850,390 M680,220 L1020,220" strokeDasharray="2 4" strokeWidth="0.5" />
              </svg>
            </div>
            <section className="max-w-7xl mx-auto px-gutter pt-8 pb-12 w-full">
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono uppercase tracking-wider mb-space-md">
                <Link className="hover:text-primary transition-colors" to="/">
                  Home
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <Link className="hover:text-primary transition-colors" to="/media">
                  Media & Dispatches
                </Link>
                <span className="text-outline-variant">
                  /
                </span>
                <span className="text-primary font-semibold">
                  Archival Imagery & Expeditions
                </span>
              </nav>
              <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono">
                  {" "}
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container" />
                  {" NCPOR PHOTO & CINEMA ARCHIVE • CC-BY 4.0 OPEN DATA "}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-mono text-label-mono">
                  {" "}
                  <span className="material-symbols-outlined text-[14px]">
                    satellite_alt
                  </span>
                  {" GEOSPATIAL TELEMETRY SYNCED "}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
                <div className="lg:col-span-8 space-y-space-sm">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                    {" Polar Eye: Visual Chronicles of Earth’s Extremes "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                    {" Curated high-resolution scientific photography, expedition footage, and cryospheric telemetry captured across Antarctica, the Arctic, the Southern Ocean, and the Himalayan Third Pole. "}
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end gap-space-sm pb-1">
                  <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      verified
                    </span>
                    {" Scientific Attribution Guide "}
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-all" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      cloud_download
                    </span>
                    {" Batch Exporter "}
                  </button>
                </div>
              </div>
            </section>
          </div>
          <section className="max-w-7xl mx-auto px-gutter pb-10 w-full">
            <div className="flex items-center justify-between overflow-x-auto pb-4 gap-space-md border-b-0">
              <div className="flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low shadow-sm">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-xs" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    photo_camera
                  </span>
                  {" "}
                  <span>
                    Photos
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono">
                    1,842
                  </span>
                  {" "}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    videocam
                  </span>
                  {" "}
                  <span>
                    Videos
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                    340
                  </span>
                  {" "}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    360
                  </span>
                  {" "}
                  <span>
                    360° Immersive
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                    56
                  </span>
                  {" "}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    folder_special
                  </span>
                  {" "}
                  <span>
                    Collections
                  </span>
                  {" "}
                  <span className="px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                    24
                  </span>
                  {" "}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    newspaper
                  </span>
                  {" "}
                  <span>
                    Press Kit & B-Roll
                  </span>
                  {" "}
                </button>
              </div>
              <div className="hidden xl:flex items-center gap-space-sm font-label-mono text-label-mono text-secondary">
                <span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping" />
                <span>
                  INDEX UPDATED: 44TH IAE DISPATCH #12
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md mt-space-sm">
              <div className="flex items-center gap-space-xs overflow-x-auto pb-1 text-label-mono">
                <span className="text-secondary uppercase font-semibold shrink-0 pr-2">
                  Domain:
                </span>
                <button className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-medium shrink-0 shadow-xs" type="button">
                  {" All Locations (1,842) "}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shrink-0" type="button">
                  {" Larsemann Hills (Bharati) "}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shrink-0" type="button">
                  {" Schirmacher Oasis (Maitri) "}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shrink-0" type="button">
                  {" Ny-Ålesund (Himadri) "}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shrink-0" type="button">
                  {" Chandra Basin (Himansh) "}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors shrink-0" type="button">
                  {" Prydz Bay & Southern Ocean "}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm pt-space-xs items-center">
                <div className="md:col-span-4 relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[18px]">
                    search
                  </span>
                  <input className="w-full pl-9 pr-4 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high transition-colors shadow-xs placeholder:text-on-surface-variant/70" placeholder="Search cryosphere, specimen, instrumentation ID..." type="text" />
                </div>
                <div className="md:col-span-3">
                  <div className="relative">
                    <select className="w-full appearance-none px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none cursor-pointer pr-8 shadow-xs">
                      <option>
                        Expedition Year: 1981–2026 (All)
                      </option>
                      <option>
                        44th Indian Antarctic Expedition (2024-25)
                      </option>
                      <option>
                        43rd Indian Antarctic Expedition (2023-24)
                      </option>
                      <option>
                        IndARC Kongsfjorden Mooring Transects
                      </option>
                      <option>
                        Dakshin Gangotri Historical (1981-1990)
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="relative">
                    <select className="w-full appearance-none px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none cursor-pointer pr-8 shadow-xs">
                      <option>
                        All Subjects: Scientific Taxonomy
                      </option>
                      <option>
                        Stations & Autonomous Architecture
                      </option>
                      <option>
                        Ice Shelves, Calving & Glaciology
                      </option>
                      <option>
                        Avian, Pelagic & Benthic Ecology
                      </option>
                      <option>
                        Oceanographic & Atmospheric Instruments
                      </option>
                      <option>
                        Aurora Australis & Geospace Physics
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-on-surface-variant pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="relative">
                    <select className="w-full appearance-none px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md focus:outline-none cursor-pointer pr-7 shadow-xs">
                      <option>
                        Newest First
                      </option>
                      <option>
                        Coordinates (S → N)
                      </option>
                      <option>
                        Highest Resolution
                      </option>
                      <option>
                        Most Peer-Cited
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2 top-2.5 text-on-surface-variant pointer-events-none text-[16px]">
                      sort
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant gap-space-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-on-surface">
                    Showing 9 of 1,842
                  </span>
                  <span>
                    verified polar photographic assets
                  </span>
                  <span className="text-outline-variant">
                    •
                  </span>
                  <span className="text-primary font-semibold">
                    Sensor calibrated (NCPOR Metrology Unit)
                  </span>
                </div>
                <div className="flex items-center gap-space-sm self-end sm:self-auto">
                  <button className="hover:text-primary transition-colors flex items-center gap-1" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      select_all
                    </span>
                    {" Select Visible (9) "}
                  </button>
                  <span className="text-outline-variant">
                    •
                  </span>
                  <button className="text-secondary font-semibold hover:text-primary transition-colors flex items-center gap-1" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[16px]">
                      download
                    </span>
                    {" Download Batch (Selected: 0) "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-gutter pb-24 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg items-start">
              <div className="flex flex-col gap-space-lg">
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/5] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern architectural polar research station Bharati elevated on stilts against a glowing emerald Aurora Australis ribbons across polar night sky in Larsemann Hills Antarctica. Crisp deep blues, cyan auroral glow, clean snow drifts, sharp atmospheric night lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCmHoXtFQ3jgaVv2ypUtacL-jBcYH7oXeIzLq7RDTl3xSTyyzgx5HhF0CPxgZd4nIvTG7HKlgcBYFyS0Gl96dlt1XSrg4uc552CPgURC9hrsGaKhyb1hB5VHA7SfV4g5jsdzsTpHXz6PB4-zVuhSc5PkTJV5uDj69xCET8wOiAn_VmAd8ZiyZnsirhHp4EVFZmHFSjEw4npZWayF0WdsThcu2-BE0tFV0khyNiKHeUlSSFAJ67D9xK" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-black/20" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono flex items-center gap-1">
                        {" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed" />
                        {" 69°24'S, 76°11'E "}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-mono text-label-mono font-bold">
                        {" 48MP RAW "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <span className="font-label-mono text-label-mono text-surface-dim uppercase tracking-wider block mb-0.5">
                        Larsemann Hills • Antarctica
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-primary leading-snug">
                        Bharati Station in Aurora Australis Twilight
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Optical auroral emissions captured via all-sky telemetry during geomagnetically perturbed conditions at Bharati research facility. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-mono text-label-mono">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0 NCPOR
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[16/10] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Massive glacial ice wall of Ny-Alesund glacier terminating into dark Arctic fjord waters of Kongsfjorden Svalbard. Giant serrated blue icebergs, jagged crevasses, distant snow clad Arctic mountains, cool arctic daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmf0BJdOSZTfesf8ffTWraQs4gserYnJhYGYk2Uiw2fmnSnqopEKCxaBoa8wKCWV2v5Uy1telbweCXh20GqsJnTSKJDZXzQvwSlsIJCyRZ_Pys7gCxV7u8nMz0RYNbbIiR-CZ-uRxtM9lqNO_84dVtvdVJmaunKZZHeV8qGy9HwLWlCqWPeENUDc_lppGjtyNzJsDUYPIrrA84paj4-df39GOyZCdvf7Pn5heFattN3UKE9HV_Cphn" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono">
                        {" 78°55'N, 11°56'E • ARCTIC "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <h3 className="font-title-md text-title-md text-on-primary">
                        Calving Front of Ny-Ålesund Glacier, Svalbard
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Continuous terminus retreat monitoring by IndARC science team documenting ocean-thermal erosion in Kongsfjorden basin. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/3] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Marine technicians and oceanographers in orange survival drysuits rigging yellow sub-surface flotation spheres and acoustic Doppler current profilers on aft deck of polar research vessel in Svalbard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSChXJqHLP-xj8xkcmNYd_OAlJFkUa0Z-GByxKXyaKAttIPInaEYTchqiC0CTAaF94uFnxAQPF4WH3pxJxnEhxK8yoD-rCXjMfgjvg-PCUNXCrpO4H19NomlnRTgwKgAAwbIUIf-o7RLp0RjvEGF4oL3QxQkquQSY21BEuiL56tMC3UXbw2-Ct0IpMXMyfam3KWrzrcYzxAF0f9m03UQupb72zD2mGCvK9Z43ltSa3jPL1oQkSWIa3" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono">
                        {" 78°59'N, 11°49'E • KNOT 1.2 "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <h3 className="font-title-md text-title-md text-on-primary">
                        IndARC Multi-Sensor Mooring Rigging
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Annual redeployment of underwater physical oceanography sensors tracking North Atlantic water intrusion into the Arctic. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
              </div>
              <div className="flex flex-col gap-space-lg">
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/3] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Massive stainless steel piston coring barrel suspended from stern hydraulic A-Frame of Indian oceanographic research vessel Sagar Kanya in turbulent churning Southern Ocean waters, overcast polar grey sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG6E7fX2BuM2fGyhb8ihhEeuH_-n3DsKYy9illnbl6Q36FWXR2W4hXIEdRB4oBPAR_W6G8ujSzAjBK9eF6fXSxCjMZOmRfL05uO-rlfA8CfgHCOBhc5Ga8YYHUhz1z24XL9t4Q0HWxK1yiX-z6-XowdIc7xtOW2fL4mCtH7UoJAVCRinmpPPemJ6tszAyFQc8KrviMUZZppMBviG-EBEUX0ZxouQqR0CDlNEWQ3wRf7ACbaWOH8mGb" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono">
                        {" 58°30'S, 78°13'E • SK-221 "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <h3 className="font-title-md text-title-md text-on-primary">
                        Piston Coring on ORV Sagar Kanya A-Frame
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Deep sea sediment retrieval at 3,800m depth reconstructing Quaternary paleoclimate variations and Southern Westerly wind shifts. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="group rounded-xl bg-surface-container-high overflow-hidden shadow-lg transition-all duration-300 flex flex-col relative scale-[1.01]">
                  {" "}
                  {" "}
                  <div className="bg-primary-container text-on-primary px-3 py-1 flex items-center justify-between font-label-mono text-label-mono font-semibold">
                    <span className="flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[16px] animate-pulse">
                        visibility
                      </span>
                      {" OPEN IN SCIENTIFIC VIEWER "}
                    </span>
                    <span>
                      ID: POLAR-IMG-2024-8841
                    </span>
                  </div>
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/3] bg-surface-container cursor-pointer" onClick={(e)=>window.__pol(e,"document.getElementById('lightbox-modal').scrollIntoView({behavior:'smooth'})")}>
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Remote Himalayan high-altitude research station Himansh in Spiti Valley at 4050 meters. Domed insulated scientific containers, solar photovoltaic arrays, automated meteorological tower, surrounded by rugged glacial moraine and snow-capped Himalayan peaks under crisp azure sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmHdkUJwgOsUySpuGrFvmurgUsLudYCfNnq7tPzyRiOHNz9hq1LilU_5RwB-7NttaFJIh_fN0Igybj-cpeOoyLfLy1y726LgiV0NLSf2mpk45fe5D66GrTun9JR7J-Ry4k0PjBpclzg4J4LsaLFM_4-qQ-xBZE22DEn5_MWMNPQmlN4lPUfwwehvOYEkMnF3UiKxv1vhuHBkS4Wr_aQfkltd8vr_j_vlbzZ9gjLr1FBJ3LQQRba7G3" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary font-label-mono text-label-mono shadow-xs">
                        {" 32°24'N, 77°37'E • 4,050m ASL "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <span className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-wider block">
                        Chandra Basin • Third Pole
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-primary">
                        Himansh High-Altitude Glaciology Camp
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Continuous monitoring hub for Himalayan cryospheric mass balance, energy fluxes, and permafrost dynamics in the Upper Chandra Basin. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">
                        Featured Focus Asset
                      </span>
                      <button className="text-primary font-bold inline-flex items-center gap-1 hover:underline" type="button">
                        {" Expand Lightbox "}
                        <span className="material-symbols-outlined text-[16px]">
                          open_in_full
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/5] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Paleoclimatologist scientist wearing sterile white thermal cleanroom suit carefully inspecting a translucent cylindrical polar ice core section on a back-lit light table inside -20 Celsius freezer laboratory vault in Antarctica, micro air bubbles visible trapped in crystalline ice." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_bqPI5Ej-XOytLaTxA_iWFvVqZ4PblDUaVN4p5_hpRlt_OUlFXEvzz1D942CQIHxw8LhJ8XV8XIFPFKijUeMAdqRjqQoGKP1f-mIIZw_pm0zTRSIyOdqgDDO2kkb4qMHeU3CgOSyPmeSimSbVgFXestIgmidy-ptItktlJriXeDDyq9kzY7osEHDhkTGMXePbPP61LMKRK1SQplM9p77WY3ZLZOsjRCJr881ZgteXVWMP2KRvW7m" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono">
                        {" DAKSHIN GANGOTRI VAULT "}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary font-label-mono text-label-mono font-bold">
                        {" -20°C LAB "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <span className="font-label-mono text-label-mono text-surface-dim uppercase tracking-wider block">
                        Cryo-Archival Archive
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-primary">
                        Deep Ice Core Stratigraphy Examination
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" High-resolution isotopic ratio analysis of air bubbles trapped 14,000 years before present, revealing paleo-greenhouse gas transitions. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
              </div>
              <div className="flex flex-col gap-space-lg">
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/3] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Maitri Research Station in Antarctica surrounded by Schirmacher Oasis rocky nunataks, with intense low katabatic winds whipping blinding ground snow spindrifts across the frozen freshwater Priyadarshini Lake under intense polar sunshine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVlr67QxSMbkecVA4N3kiyceJO3kd0JXg7Bm64TjkUT2iNaXHqg1S5zEgMIFP05BCsOKDSfOCamcIvMZiHEa8byTNnumbbvYde3ayy3Re3Z0u9CKvtFLE-rnOc3HpyK7YwKSDU03j09fJGMftBOSGemDPMeycauc8E7OcUOh8ZHO97Udu77cO1XUcQv0pOhBwaU1aPnVO7IDjGqebSsjddsC1ysMAyraSh_7rgHv4DexBtW_he6bG-" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono">
                        {" 70°45'S, 11°44'E • 52 KNOT GUSTS "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <h3 className="font-title-md text-title-md text-on-primary">
                        Katabatic Wind Drifts at Maitri Station
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Aerosol and boundary-layer turbulence records captured during severe gravity-wind surges cascading off the continental ice sheet. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/3] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Colony of Adelie penguins standing on bright turquoise fast-ice edge in Prydz Bay Antarctica. Deep sapphire ocean water, distant tabular icebergs on horizon, clean natural polar wildlife documentary photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMEJNKR_k3LfIawJTuMCBO8CDZtibas1wrQouv9bYqR48stGHI1VMSJ8kWRrgHGJSLsOPzfG4x9b9NzXvoxTBhX7BJVCb5vCU3JrK76FeSZTcadMSXU3k1DdHgNt8xSe-4XWtu5EmrEwtiVNcTvQlIBuhitfn2HtqRGtfgawNMzAVPNVZVIbshOgLeCtcxTpivoWzhoH5Mbz0Cd7riNEPPD8dOB-lsMujmEIalEkjdERTzW7wEEXLO" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono">
                        {" 69°22'S, 76°20'E • BIO-CENSUS "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <h3 className="font-title-md text-title-md text-on-primary">
                        Adélie Penguin Colony on Fast-Ice Floe
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Annual biological population census and tracking tagging program evaluating krill abundance in coastal East Antarctica. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
                <article className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                  {" "}
                  <div className="relative overflow-hidden aspect-[4/3] bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Circular titanium CTD rosette sampler dripping with ocean water being winched onto wet deck of research ship during vivid magenta and orange sub-polar sunset over foaming Southern Ocean waves." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ7VFkjsKydY_u2X7njsqmb65I4upIDXYcjg0POfVELb50rCKmkp6gpe-1miGFA4qhW6Z7ablMC8-VQonk96gnJ4IKQmFsHryK2awioaOV1Eqm1m8r35nAIb5X2L_T7RDBuzjXB-XBOwAy-TZ40kyzWYZ9e4gvLq3b4LbdDtPu09P5juig0LjU1bEiQgkPSCrQw4EqNY0QD1bg3Kktw8SC047ybx8VrvY_d-FnqTyKhNIGb5KGG7lh" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-on-surface/80 backdrop-blur-md text-surface-bright font-label-mono text-label-mono">
                        {" SOUTHERN OCEAN • 62°S TRANSECT "}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-surface-bright">
                      <h3 className="font-title-md text-title-md text-on-primary">
                        CTD Rosette Recovery in Heavy Swell
                      </h3>
                    </div>
                  </div>
                  {" "}
                  <div className="p-space-md flex flex-col gap-space-sm bg-surface-container-lowest">
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                      {" Conductivity, temperature, and depth hydrological casts measuring Antarctic Intermediate Water subduction rates. "}
                    </p>
                    <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-on-surface-variant">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-semibold">
                        CC-BY 4.0
                      </span>
                      <div className="flex items-center gap-1 text-primary">
                        <button aria-label="Inspect Full Resolution" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            zoom_in
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Bookmark Asset" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_border
                          </span>
                          {" "}
                        </button>
                        <button aria-label="Pin to Expedition Globe" className="p-1.5 rounded hover:bg-surface-container transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[18px]">
                            travel_explore
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {" "}
                </article>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-low py-16 px-gutter" id="lightbox-modal">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold">
                    {" High-Resolution Cryospheric Asset Lightbox (Interactive Modal State) "}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
                  <kbd className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold">
                    ESC
                  </kbd>
                  {" to exit modal "}
                  <span className="text-outline-variant">
                    •
                  </span>
                  <kbd className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold">
                    ←
                  </kbd>
                  <kbd className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold">
                    →
                  </kbd>
                  {" to cycle assets "}
                </div>
              </div>
              <div className="w-full rounded-2xl bg-surface-container-lowest shadow-2xl overflow-hidden flex flex-col">
                <div className="px-space-lg py-space-sm bg-surface-container flex items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <span className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-label-mono text-label-mono font-bold shrink-0">
                      {" POLAR-IMG-2024-8841 "}
                    </span>
                    <h2 className="font-title-md text-title-md text-on-surface truncate">
                      {" Himansh High-Altitude Glaciology Observatory at 4,050m (Chandra Basin) "}
                    </h2>
                  </div>
                  <div className="flex items-center gap-space-xs shrink-0">
                    <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Download Asset Metadata JSON" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        code
                      </span>
                      {" "}
                    </button>
                    <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Toggle Fullscreen" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        fullscreen
                      </span>
                      {" "}
                    </button>
                    <button className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" title="Close Lightbox" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[20px]">
                        close
                      </span>
                      {" "}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                  <div className="lg:col-span-8 bg-black/95 relative flex items-center justify-center p-4 sm:p-6 group select-none">
                    <div className="relative max-h-[540px] w-full flex items-center justify-center">
                      <img className="max-h-[520px] w-auto max-w-full object-contain rounded-lg shadow-2xl" data-alt="Ultra high-definition scientific photograph of Himansh research station in Spiti Valley at 4050 meters altitude. Red and cream insulated geodesic laboratory units, multi-tier weather instrumentation tower, Tibetan prayer flags snapping in mountain winds, surrounded by dramatic snow-capped glaciated Himalayan peaks under deep sapphire sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5FcAtWI18L8AVaDFIbterXsl8H2OSyuBJkfYHjAxb-_Wpe2zqCSr_aK2-Hn6-jpS5eZsortu900tZG40Aa4bHiuCJY_a-ovf1FsUMLPurRmCmXkdmD_UvySuuNxBTCxMqc6owlkf0IsM9GQXu1BqTguhIuC6zfXMG-n4t0YrxDdK_G6n-UEaMn4zxgytq6GVnNK-3evgOPs5AJPNmSEa81AjwgLJRyr2fU8SnIXivIr2p18gklWDV" />
                      <div className="absolute bottom-4 left-4 bg-on-surface/85 backdrop-blur-md text-surface-bright px-3 py-1.5 rounded-full flex items-center gap-2 font-label-mono text-label-mono shadow-lg">
                        <button className="w-5 h-5 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-colors" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[12px]">
                            play_arrow
                          </span>
                          {" "}
                        </button>
                        <span>
                          Field Audio: 4,000m Glacier Wind (0:45)
                        </span>
                        <svg className="w-12 h-3 text-secondary-fixed" fill="currentColor" viewBox="0 0 48 12">
                          <rect height="4" rx="1" width="2" x="0" y="4" />
                          <rect height="8" rx="1" width="2" x="4" y="2" />
                          <rect height="10" rx="1" width="2" x="8" y="1" />
                          <rect height="2" rx="1" width="2" x="12" y="5" />
                          <rect height="8" rx="1" width="2" x="16" y="2" />
                          <rect height="12" rx="1" width="2" x="20" y="0" />
                          <rect height="6" rx="1" width="2" x="24" y="3" />
                          <rect height="10" rx="1" width="2" x="28" y="1" />
                          <rect height="4" rx="1" width="2" x="32" y="4" />
                          <rect height="8" rx="1" width="2" x="36" y="2" />
                          <rect height="2" rx="1" width="2" x="40" y="5" />
                          <rect height="6" rx="1" width="2" x="44" y="3" />
                        </svg>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-on-surface/80 backdrop-blur-md rounded-lg p-1 text-surface-bright font-label-mono text-label-mono shadow-md">
                        <button className="w-7 h-7 rounded flex items-center justify-center hover:bg-surface-container/20 transition-colors" title="Zoom Out" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            remove
                          </span>
                          {" "}
                        </button>
                        <span className="px-1 font-semibold text-[11px]">
                          100%
                        </span>
                        <button className="w-7 h-7 rounded flex items-center justify-center hover:bg-surface-container/20 transition-colors" title="Zoom In" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            add
                          </span>
                          {" "}
                        </button>
                        <div className="w-px h-4 bg-outline-variant/40 mx-0.5" />
                        <button className="w-7 h-7 rounded flex items-center justify-center hover:bg-surface-container/20 transition-colors" title="Actual Pixels" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[16px]">
                            aspect_ratio
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <button aria-label="Previous Image" className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-on-surface/70 backdrop-blur-md text-surface-bright flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all shadow-md" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[22px]">
                        chevron_left
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Next Image" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-on-surface/70 backdrop-blur-md text-surface-bright flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all shadow-md" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[22px]">
                        chevron_right
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="lg:col-span-4 p-space-lg flex flex-col justify-between bg-surface-container-lowest overflow-y-auto">
                    <div className="space-y-space-md">
                      <div>
                        <span className="font-label-mono text-label-mono text-secondary uppercase font-semibold block mb-1">
                          Observation Summary
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                          {" Field station established by NCPOR in 2016 for continuous monitoring of Himalayan cryospheric mass balance, energy fluxes, and permafrost dynamics in the Spiti Valley. "}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 gap-2.5 pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                        <div className="flex items-start gap-2 bg-surface-container-low p-2 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                            badge
                          </span>
                          <div className="min-w-0">
                            <span className="font-label-mono text-label-mono text-secondary uppercase block">
                              Principal Credit
                            </span>
                            <span className="font-medium text-on-surface text-[12px] leading-tight block">
                              {" Dr. Parmanand Sharma, Glaciology Division, NCPOR / Ministry of Earth Sciences "}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 bg-surface-container-low p-2 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                            pin_drop
                          </span>
                          <div className="min-w-0">
                            <span className="font-label-mono text-label-mono text-secondary uppercase block">
                              Coordinates & Altitude
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface font-semibold block">
                              {" 32°24'18\" N, 77°37'42\" E • 4,050 m ASL "}
                            </span>
                            <span className="font-label-mono text-[10px] text-outline">
                              Spiti Sub-basin • Himachal Pradesh
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 bg-surface-container-low p-2 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                            copyright
                          </span>
                          <div className="min-w-0">
                            <span className="font-label-mono text-label-mono text-secondary uppercase block">
                              Rights & Open License
                            </span>
                            <span className="font-medium text-on-surface text-[12px] block">
                              {" CC-BY 4.0 Open Scientific Access (Commercial & educational reuse with attribution) "}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 bg-surface-container-low p-2 rounded-lg">
                          <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                            camera
                          </span>
                          <div className="min-w-0">
                            <span className="font-label-mono text-label-mono text-secondary uppercase block">
                              Sensor & Telemetry Specs
                            </span>
                            <span className="font-label-mono text-label-mono text-on-surface block">
                              {" 45.7 MP • 24mm f/8.0 • ISO 100 • 1/500s • DCI-P3 "}
                            </span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-high/60 space-y-1">
                          <span className="font-label-mono text-label-mono text-secondary uppercase flex items-center gap-1 font-semibold">
                            {" "}
                            <span className="material-symbols-outlined text-[14px]">
                              visibility
                            </span>
                            {" Screen-Reader Alt Text Verified "}
                          </span>
                          <p className="font-label-mono text-[11px] text-on-surface-variant italic leading-normal">
                            {" \"High-altitude scientific station with meteorological tower and domed shelters on barren Himalayan moraine beneath glaciated summits.\" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-space-md space-y-space-xs mt-space-sm border-t-0">
                      <button className="w-full py-2.5 px-4 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md font-semibold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-sm" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          download_for_offline
                        </span>
                        {" "}
                        <span>
                          Download Full-Res (18.4 MB TIFF / RAW)
                        </span>
                        {" "}
                      </button>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button className="py-2 px-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-mono text-label-mono text-center truncate" type="button">
                          {" JPG (Web 2MB) "}
                        </button>
                        <button className="py-2 px-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-mono text-label-mono text-center truncate" type="button">
                          {" Share Asset "}
                        </button>
                        <button className="py-2 px-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-mono text-label-mono text-center truncate" type="button">
                          {" Cite (DOI) "}
                        </button>
                      </div>
                      <button className="w-full py-2 px-3 rounded-lg bg-secondary-container/50 text-secondary hover:bg-secondary-container transition-colors font-label-md text-label-md flex items-center justify-center gap-1.5" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          travel_explore
                        </span>
                        {" "}
                        <span>
                          View on Expedition Globe (32.4050° N, 77.6283° E) ↗
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-gutter py-20 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
              <div className="space-y-1">
                <span className="font-label-mono text-label-mono text-secondary uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-error" />
                  {" Time-Lapse & Cinema Archives "}
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  {" Expedition Dispatches: Field Motion & Video Archive "}
                </h2>
              </div>
              <a className="inline-flex items-center gap-1 text-primary font-label-md text-label-md hover:underline" href="#" onClick={(e)=>e.preventDefault()}>
                {" Browse Complete 340 Video Records "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
                {" "}
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
              <div className="lg:col-span-7 rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm flex flex-col justify-between">
                <div className="relative aspect-video bg-black/90 overflow-hidden flex items-center justify-center">
                  <img className="w-full h-full object-cover" data-alt="Heavy steel bow of polar icebreaker breaking thick white pack ice in Weddell Sea Antarctica, fracturing geometric pressure ridges into churning cerulean water beneath moody polar sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYb61_Ux4QjaEQXoluySVWp28hSOrRNQuqx3m8h_DA4FQGlf_CQODpO69C6ig96Rel5ZXdoOkZl0BUfP6VyXuBw0l28MHGIWsllo93BzeeD6Gv-Aq6judk1wQ1qAHv7NkbcTk8K_fkWSnPmeUqGMvKLQYzeirN_RHzrUXvNYX3G4TnA9_x5LTkrJ5YaY5UCzOSfIymMFbet7UHVvsH1fIyuhJF0jWEQY0K_VMRVy329eJBfB60MGmB" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  <button aria-label="Play Expedition Video" className="absolute w-16 h-16 rounded-full bg-primary-container/90 hover:bg-primary text-on-primary flex items-center justify-center transition-transform hover:scale-110 shadow-xl backdrop-blur-sm" type="button">
                    {" "}
                    <span className="material-symbols-outlined text-[32px] ml-1">
                      play_arrow
                    </span>
                    {" "}
                  </button>
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-label-mono text-label-mono text-surface-bright">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md flex items-center gap-1.5">
                      {" "}
                      <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />
                      {" 4K UHD RAW "}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md">
                      {" CC: ENGLISH / HINDI TRANSCRIBED "}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent space-y-1.5">
                    <div className="w-full h-1.5 bg-surface-container-highest/40 rounded-full overflow-hidden cursor-pointer">
                      <div className="w-1/3 h-full bg-primary-fixed" />
                    </div>
                    <div className="flex items-center justify-between text-surface-bright font-label-mono text-[11px]">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-primary-fixed">
                          pause
                        </span>
                        <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-primary-fixed">
                          volume_up
                        </span>
                        <span>
                          0:15 / 0:45
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest/30 text-[10px] font-bold">
                          1080p
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest/30 text-[10px] font-bold">
                          1.0x
                        </span>
                        <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-primary-fixed">
                          fullscreen
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-space-md space-y-space-xs">
                  <div className="flex items-center justify-between font-label-mono text-label-mono">
                    <span className="text-secondary uppercase">
                      Weddell Sea • Antarctic Sea Ice Transect
                    </span>
                    <span className="text-on-surface-variant">
                      Archived: January 2024
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {" 0:45 Clip: Navigating Heavy Pack Ice in Weddell Sea "}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" Aft and prow perspective from RV Bharati as multi-year pack ice floes are systematically dissected during passage to Larsemann Hills. "}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-label-mono text-label-mono text-primary font-bold">
                      Duration: 0:45 • Audio: Uncompressed Hydrophone & Ambient
                    </span>
                    <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                      {" "}
                      <span className="material-symbols-outlined text-[16px]">
                        file_download
                      </span>
                      {" Download Broadcast Clip "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative aspect-video bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Aerial drone photography looking down vertically at Maitri Lake oasis in Antarctica, showing turquoise patterns of melting thaw ponds against brown rocky nunatak terrain." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXD1bbP3OzM5hlOg0cKTzfS2Zg6s9OTrAciwk1Zmq93SxsIGzn9kqOEYPhLZSsfgmfAwnUDXypNxaiqTXjrJpO9eX7Fqn21LQftsE0aJy74eVN9-3CBVOwIHeeNKPUz1YpoOVmvmeS1_Vnx8O0BYtfEoQu2ySM91yN3v3ASpBTgQMSq3n-kr61vNe0CzC1eyBgmt_tx2cRPLEGY3VIWaxTY1XpR6IPAnhbTR6ucXy4PhXLx2_2jcd3" />
                    <div className="absolute inset-0 bg-on-surface/20" />
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/75 text-surface-bright font-label-mono text-[10px]">
                      {" 0:30 • 4K 60fps "}
                    </div>
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-on-surface/75 text-surface-bright flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm flex-1 flex flex-col justify-between space-y-1">
                    <span className="font-label-mono text-[10px] text-secondary uppercase">
                      42nd IAE • Maitri
                    </span>
                    <h4 className="font-title-md text-[13px] leading-tight text-on-surface font-semibold line-clamp-2">
                      {" Drone Survey over Maitri Lake System "}
                    </h4>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-mono text-[10px] text-outline">
                        Schirmacher
                      </span>
                      <button aria-label="Download Clip" className="text-primary hover:text-on-surface transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative aspect-video bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Arctic scientific oceanographers lowering an Ice-Tethered Profiler cylinder through a drill hole in multi-year sea ice with Arctic fog in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMfyaFHii5y7A0dd-VRNQk0v3r87mxFvvdUFsVAzlj9K5popLVMUyXIE2LiASH8qvqU1EZCt-FA7X07mvJHvKuSEJf3xe5uyWoNChtT_8ICmeP50ViQ-RL2FZ6rWM9TZF1A6keB77TceZWt0RSMq-TDJolvTGZ9IWS9EwsPzkVUJQL5UCOhWJqOHiH4KfNHo4SPIrh8W1sOPbf_QUPPMkWBUvOAyn6Sk1wFZKC2IVCHmGR6xLYsPP" />
                    <div className="absolute inset-0 bg-on-surface/20" />
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/75 text-surface-bright font-label-mono text-[10px]">
                      {" 0:20 • Full HD "}
                    </div>
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-on-surface/75 text-surface-bright flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm flex-1 flex flex-col justify-between space-y-1">
                    <span className="font-label-mono text-[10px] text-secondary uppercase">
                      IndARC • Arctic
                    </span>
                    <h4 className="font-title-md text-[13px] leading-tight text-on-surface font-semibold line-clamp-2">
                      {" Deploying Ice-Tethered Profiler (ITP) "}
                    </h4>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-mono text-[10px] text-outline">
                        Kongsfjorden
                      </span>
                      <button aria-label="Download Clip" className="text-primary hover:text-on-surface transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative aspect-video bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Polar expeditioners in bright red thermal parkas demonstrating rope rescue and hauling system across deep blue glacial crevasse in Antarctica." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe22KUNvZxIPiZ13WN9xvCfhMpeBBnf6-ujxros-ALkhNDNKckVeWJjV0byVGsfXRocEnnFdqbAlvkWeg2MwpK_tDR5zN5Fzlit4kH5d3X-SKJBeYWxvCHzvHusQRy8Z8pCDEKfUeij14r7yaDpD3TH46RczAMx2_ziqYfoqkDTrqfk5UQ1YhmQI1e1Qxi_o7mSKVJO9J4tmjKikM4NPHSf_-8FMNjw5SMObCLTwlfDqCtzXUKmUUe" />
                    <div className="absolute inset-0 bg-on-surface/20" />
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/75 text-surface-bright font-label-mono text-[10px]">
                      {" 0:45 • 4K "}
                    </div>
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-on-surface/75 text-surface-bright flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm flex-1 flex flex-col justify-between space-y-1">
                    <span className="font-label-mono text-[10px] text-secondary uppercase">
                      Safety Protocol
                    </span>
                    <h4 className="font-title-md text-[13px] leading-tight text-on-surface font-semibold line-clamp-2">
                      {" Crevasse Rescue Drill at Schirmacher "}
                    </h4>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-mono text-[10px] text-outline">
                        Maitri Base
                      </span>
                      <button aria-label="Download Clip" className="text-primary hover:text-on-surface transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group rounded-xl bg-surface-container-lowest overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative aspect-video bg-surface-container overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Time lapse photography showing violent whiteout blizzard snow blowing rapidly past steel support pilings of Bharati polar station in Larsemann Hills." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPbfDnGFpLVwQSnJyV1cSxlVOhxw36ezZSEf2tHSAWaq3G7ydhxs_ikSbxilRdTC4y8XbT9LX-Zfb4WX3PazqqoSpOB9sOMaGVSsthTBYDDGR1vZ6nFqUaIcPkx3tPzH19q7MINxYicBZkXAUSP_oaKcsnEWfWcJ6RYWWt13zd88mEVQkdryJgNkgHbcoruyeJO5KqR-siI38UtQ-NqrjW98FGLso--69IZiWSIGR5ZxHeJbecW3_y" />
                    <div className="absolute inset-0 bg-on-surface/20" />
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-black/75 text-surface-bright font-label-mono text-[10px]">
                      {" 0:15 • 8K Time-Lapse "}
                    </div>
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-on-surface/75 text-surface-bright flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="p-space-sm flex-1 flex flex-col justify-between space-y-1">
                    <span className="font-label-mono text-[10px] text-secondary uppercase">
                      Bharati • Storm Tech
                    </span>
                    <h4 className="font-title-md text-[13px] leading-tight text-on-surface font-semibold line-clamp-2">
                      {" Blizzard Time-Lapse: Larsemann Hills "}
                    </h4>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-mono text-[10px] text-outline">
                        100 km/h Gust
                      </span>
                      <button aria-label="Download Clip" className="text-primary hover:text-on-surface transition-colors" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          download
                        </span>
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-high/40 py-12 px-gutter">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <div className="flex items-start gap-space-md max-w-2xl">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs shrink-0 mt-1">
                  <span className="material-symbols-outlined text-[24px]">
                    policy
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-title-md text-title-md text-on-surface">
                    Scientific Provenance & Attribution Mandate
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {" All polar imagery, cinematographic assets, and 360° telemetry are archived and peer-indexed under the "}
                    <strong>
                      National Polar Data Center (NPDC)
                    </strong>
                    {" and Ministry of Earth Sciences Open Data Policy. Assets are freely accessible for education, research, and non-commercial dissemination with attribution. "}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm shrink-0">
                <button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-xs transition-colors" type="button">
                  {" Media Accreditation "}
                </button>
                <button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-xs transition-colors" type="button">
                  {" High-Bandwidth Broadcast Feeds "}
                </button>
                <button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-xs transition-colors" type="button">
                  {" Commercial Archival Requests "}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_12px_rgba(7,28,54,0.03)]">
        <div className="max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
            <div className="space-y-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  public
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  POLARIS
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, Government of India. Headquartered at Headland Sada, Vasco da Gama, Goa, India.
              </p>
              <div className="flex flex-col gap-1 pt-space-xs">
                <span className="font-label-mono text-label-mono text-secondary uppercase">
                  Scientific Open Access Node
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  ISO 9001:2015 Certified Portal
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface mb-space-md">
                Polar Stations
              </h3>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Bharati Station
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      69°S Antarctic
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Maitri Station
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      70°S Antarctic
                    </span>
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors flex items-center justify-between" to="/base-stations/himadri">
                    <span>
                      Himadri Station
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      78°N Arctic
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      IndARC Observatory
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Kongsfjorden
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex items-center justify-between" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Dakshin Gangotri
                    </span>
                    <span className="font-label-mono text-label-mono text-secondary">
                      Ice Shelf Base
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface mb-space-md">
                Data & Outreach
              </h3>
              <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" to="/data">
                    National Polar Data Center (NPDC)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/repository">
                    MoES Open Data Repository
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Fellowship & Student Expeditions
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                    Atmospheric & Cryosphere Archives
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" to="/expeditions/soe-01">
                    Scientific Expedition Bulletins
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-space-md">
              <h3 className="font-title-md text-title-md text-on-surface">
                Expedition Dispatches
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Receive weekly scientific telemetry briefs, ice movement assessments, and research logs.
              </p>
              <form className="flex flex-col gap-space-xs" onSubmit={(e)=>e.preventDefault()}>
                <div className="flex rounded-lg overflow-hidden shadow-xs bg-surface-container-lowest">
                  <input className="px-3 py-2 text-body-sm font-body-sm text-on-surface bg-transparent focus:outline-none flex-1" placeholder="researcher@domain.gov.in" type="email" />
                  <button className="bg-primary-container text-on-primary px-3.5 py-2 font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center" type="button">
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </button>
                </div>
                <span className="font-label-mono text-label-mono text-secondary">
                  MoES Certified Data Transmission
                </span>
              </form>
            </div>
          </div>
          <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
            <div className="flex flex-wrap items-center gap-space-md">
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                MoES Terms of Use
              </a>
              <Link className="hover:text-primary transition-colors" to="/data">
                Data Policy & Attribution
              </Link>
              <Link className="hover:text-primary transition-colors" to="/about/accessibility">
                Screen Reader & Accessibility
              </Link>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                Grievances (CPGRAMS)
              </a>
              <a className="hover:text-primary transition-colors" href="#" onClick={(e)=>e.preventDefault()}>
                RTI Disclosures
              </a>
            </div>
            <div className="font-label-mono text-label-mono text-secondary">
              © 2025 NCPOR • Ministry of Earth Sciences, Govt. of India. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
