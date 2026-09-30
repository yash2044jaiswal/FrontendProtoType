import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_story_detail_overwintering_in_the_schirmacher_oasis_stories_slug/code.html
const BODY_CLASS = "bg-surface font-body-md text-body-md text-on-surface antialiased";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "// --- Hero Slider Logic ---\n    var currentSlide = 0;\n    var sliderCaptions = [\n      \"Maitri Station during midwinter twilight at -42°C with active magnetospheric sensors running continuous ionospheric logging.\",\n      \"The Priyadarshini freshwater lake bed frozen under 2 meters of crystal blue ice during peak July polar solstice.\",\n      \"Launching the 00:00 UTC electrochemical ozone sonde from the wind-sheltered inflation hangar at Pod 2.\",\n      \"Aurora Australis curtain illuminating the Schirmacher Oasis nunataks during extreme solar particle event.\"\n    ];\n\n    function setSlide(index) {\n      currentSlide = index;\n      var counter = document.getElementById(\"slider-counter\");\n      var caption = document.getElementById(\"slider-caption\");\n      var img = document.getElementById(\"hero-slider-img\");\n      if (counter) counter.innerText = \"0\" + (currentSlide + 1) + \" / 04\";\n      if (caption && caption.lastElementChild) {\n        caption.lastElementChild.innerText = sliderCaptions[currentSlide];\n      }\n      if (img) {\n        img.style.opacity = \"0.7\";\n        setTimeout(function() { img.style.opacity = \"1\"; }, 150);\n      }\n    }\n\n    function nextSlide() {\n      currentSlide = (currentSlide + 1) % 4;\n      setSlide(currentSlide);\n    }\n\n    function prevSlide() {\n      currentSlide = (currentSlide - 1 + 4) % 4;\n      setSlide(currentSlide);\n    }\n\n    // --- Audio Player Simulation ---\n    var isPlaying = false;\n    var speeds = [\"1.0x\", \"1.2x\", \"1.5x\", \"2.0x\"];\n    var speedIndex = 0;\n\n    function toggleAudioPlayback() {\n      isPlaying = !isPlaying;\n      var icon = document.getElementById(\"audio-play-icon\");\n      if (icon) {\n        icon.innerText = isPlaying ? \"pause\" : \"play_arrow\";\n      }\n      showToast(isPlaying ? \"Audio dispatch playing (03:15 / 08:40)\" : \"Audio dispatch paused\");\n    }\n\n    function cycleSpeed() {\n      speedIndex = (speedIndex + 1) % speeds.length;\n      var label = document.getElementById(\"speed-label\");\n      if (label) label.innerText = speeds[speedIndex];\n      showToast(\"Audio speed set to \" + speeds[speedIndex]);\n    }\n\n    function seekAudio(event) {\n      var track = document.getElementById(\"audio-scrubber-track\");\n      if (!track) return;\n      var rect = track.getBoundingClientRect();\n      var clickX = event.clientX - rect.left;\n      var percent = Math.max(0, Math.min(100, (clickX / rect.width) * 100));\n      var bar = document.getElementById(\"audio-progress-bar\");\n      var thumb = document.getElementById(\"audio-thumb\");\n      if (bar) bar.style.width = percent + \"%\";\n      if (thumb) thumb.style.left = percent + \"%\";\n      var timeSec = Math.floor((percent / 100) * 520);\n      var m = Math.floor(timeSec / 60);\n      var s = timeSec % 60;\n      var timeDisplay = document.getElementById(\"current-time-display\");\n      if (timeDisplay) timeDisplay.innerText = \"0\" + m + \":\" + (s < 10 ? \"0\" : \"\") + s;\n    }\n\n    var isMuted = false;\n    function toggleMute() {\n      isMuted = !isMuted;\n      var vol = document.getElementById(\"volume-icon\");\n      if (vol) vol.innerText = isMuted ? \"volume_off\" : \"volume_up\";\n      showToast(isMuted ? \"Audio muted\" : \"Audio unmuted\");\n    }\n\n    // --- Source Drawer Interaction ---\n    function openSourceDrawer(sourceId) {\n      var drawer = document.getElementById(\"source-drawer\");\n      var backdrop = document.getElementById(\"drawer-backdrop\");\n      if (drawer) drawer.classList.remove(\"translate-x-full\");\n      if (backdrop) backdrop.classList.remove(\"hidden\");\n    }\n\n    function closeSourceDrawer() {\n      var drawer = document.getElementById(\"source-drawer\");\n      var backdrop = document.getElementById(\"drawer-backdrop\");\n      if (drawer) drawer.classList.add(\"translate-x-full\");\n      if (backdrop) backdrop.classList.add(\"hidden\");\n    }\n\n    document.addEventListener(\"keydown\", function(e) {\n      if (e.key === \"Escape\") closeSourceDrawer();\n    });\n\n    // --- Toast & Copy Utility ---\n    function showToast(message) {\n      var toast = document.getElementById(\"action-toast\");\n      var txt = document.getElementById(\"toast-text\");\n      if (txt) txt.innerText = message;\n      if (toast) {\n        toast.classList.remove(\"translate-y-24\", \"opacity-0\");\n        setTimeout(function() {\n          toast.classList.add(\"translate-y-24\", \"opacity-0\");\n        }, 3200);\n      }\n    }\n\n    function copyCitation() {\n      var bibtex = \"@article{sen2025schirmacher, title={Overwintering in the Schirmacher Oasis: 365 Days of Isolation at Maitri Station}, author={Sen, Ananya}, journal={NCPOR Polar Dispatches}, year={2025}, volume={42}, number={1}}\";\n      if (navigator.clipboard) {\n        navigator.clipboard.writeText(bibtex);\n      }\n      showToast(\"Citation copied in BibTeX & APA format.\");\n    }\n\n    function toggleBookmark(btn) {\n      var icon = btn.querySelector(\".material-symbols-outlined\");\n      var label = btn.querySelector(\"span:last-child\");\n      if (icon && icon.innerText === \"bookmark_border\") {\n        icon.innerText = \"bookmark\";\n        icon.style.color = \"#006070\";\n        if (label) label.innerText = \"Saved\";\n        showToast(\"Diary dispatch bookmarked to your polar workspace.\");\n      } else if (icon) {\n        icon.innerText = \"bookmark_border\";\n        icon.style.color = \"\";\n        if (label) label.innerText = \"Bookmark\";\n        showToast(\"Bookmark removed.\");\n      }\n    }\n\n    function showShareDialog() {\n      showToast(\"Story share link copied: /stories/overwintering-in-the-schirmacher-oasis\");\n    }\n\n    function downloadSimulation() {\n      showToast(\"Downloading NCPOR Technical Report TR-2024-02.pdf (2.4 MB)...\");\n    }\n\n    function askPresetPrompt(promptText) {\n      showToast(\"Ask POLARIS: Inquiring '\" + promptText + \"'\");\n    }\n\n    function openAskPolaris() {\n      showToast(\"Connecting to POLARIS AI Cryospheric Model...\");\n    }\n\n    function toggleVideoPlayback(container) {\n      showToast(\"Opening 4K Blizzard Stream [Maitri Anemometer Feed: Pod 4]\");\n    }";

export default function StoryDetailPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg shrink-0">
            <a className="flex flex-col group" data-path="home" href="#" onClick={(e)=>e.preventDefault()}>
              <span className="font-headline-sm text-headline-sm text-primary-container tracking-tight group-hover:text-primary transition-colors">
                POLARIS
              </span>
              <span className="font-label-mono text-label-mono text-outline tracking-wider uppercase">
                NCPOR • MOES INDIA
              </span>
            </a>
            <div className="hidden xl:flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-container-low shadow-[0_1px_4px_rgba(7,28,54,0.04)]">
              <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
              <span className="font-label-mono text-label-mono text-on-surface">
                Maitri: -18.4°C | 14kt S
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" data-active-classes="bg-primary-container text-on-primary font-title-md rounded-lg">
            <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="home" to="/">
              Home
            </Link>
            <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="expedition-globe" to="/globe">
              Expedition Globe
            </Link>
            <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="repository" to="/repository">
              Repository
            </Link>
            <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="timeline" to="/timeline">
              Timeline
            </Link>
            <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="media" to="/media">
              Media
            </Link>
            <Link aria-current="page" className="px-3 py-2 transition-colors bg-primary-container text-on-primary font-title-md rounded-lg" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
              Stories
            </Link>
            <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="education" to="/education">
              Education
            </Link>
            <Link className="px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="ask-polaris" to="/ask">
              Ask Polaris
            </Link>
          </nav>
          <div className="flex items-center gap-space-sm shrink-0">
            <button aria-label="Search Scientific Archive" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </button>
            <button aria-label="Language Switcher" className="px-2.5 py-1 rounded-lg bg-surface-container-low font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
              EN | HI
            </button>
            <button aria-label="Toggle Audio Narrator" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Audio Narrator" type="button">
              <span className="material-symbols-outlined text-[20px]">
                volume_up
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <div className="fixed bottom-6 left-8 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-3 px-4 py-3 rounded-xl bg-inverse-surface text-inverse-on-surface shadow-xl" id="action-toast">
            <span className="material-symbols-outlined text-primary-fixed text-[20px]">
              check_circle
            </span>
            <span className="font-body-sm text-body-sm" id="toast-text">
              Citation copied to clipboard (BibTeX format).
            </span>
          </div>
          <section className="w-full bg-surface-container-lowest pt-8 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-mono text-label-mono text-outline">
                  <Link className="hover:text-primary transition-colors" data-path="home" to="/">
                    Home
                  </Link>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <Link className="hover:text-primary transition-colors" data-path="stories" to="/stories/overwintering-in-the-schirmacher-oasis">
                    Stories
                  </Link>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-on-surface-variant">
                    Expedition Diaries
                  </span>
                  <span className="text-outline-variant">
                    /
                  </span>
                  <span className="text-on-surface font-semibold truncate max-w-[240px] md:max-w-none">
                    Overwintering in the Schirmacher Oasis
                  </span>
                </nav>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-mono text-label-mono uppercase tracking-wider font-semibold">
                    {" Expedition Diaries "}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-low text-primary-container font-label-mono text-label-mono flex items-center gap-1.5 shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined text-[15px] text-tertiary">
                      verified
                    </span>
                    {" Verified by NCPOR Scientist "}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface-container-low text-primary-container font-label-mono text-label-mono flex items-center gap-1.5 shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      fact_check
                    </span>
                    {" Peer-Reviewed Field Data "}
                  </span>
                </div>
              </div>
              <div className="max-w-5xl mb-8">
                <h1 className="font-display-hero text-display-hero text-on-surface mb-6 leading-tight">
                  {" Overwintering in the Schirmacher Oasis: 365 Days of Isolation at Maitri Station "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light max-w-4xl">
                  {" When the polar sun drops beneath the horizon for three unbroken months, an eerie jade glow sweeps across Queen Maud Land. Inside Maitri Base, forty scientists and engineers maintain India's permanent foothold in Antarctica. "}
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 bg-surface-container-low/40 rounded-xl p-5">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait of Dr. Ananya Sen, atmospheric physicist at NCPOR, dressed in red polar extreme weather expedition gear, smiling against clean laboratory instrumentation with soft neutral lighting and academic gravitas." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU4qDIW8tg9HfUSZxrQ8GRSYb60GhX6E4SI7OJRN1kTiCuYxorYTVPYyxOs8D2CCd9CwrqnRhWZ7s0ZGakH1qMXkZ4_HSSuPTXoctY_lnc5MiQYd7_k00hCD1NioHiX0SxFvi3uVoelCLCO26bSq8YVmd7OjlAeA3n5dxLCh4jAkUVncvvzCR8TGVzuuaa0i9EqpeIKevQ6Q4xpZfwmc96LpwLYWkaZTuFrGr2LA0u6ht9lMq5OvSD" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#2ECC9A] ring-2 ring-surface-container-lowest" title="Currently active at Maitri telemetry hub" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-title-md text-title-md text-on-surface">
                        Dr. Ananya Sen
                      </span>
                      <span className="font-label-mono text-label-mono text-outline font-normal">
                        • Lead Atmospheric Physicist, 42nd IAE
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-label-mono text-label-mono text-outline mt-0.5">
                      <span>
                        14 February 2025
                      </span>
                      <span>
                        •
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          timer
                        </span>
                        {" 8 min read"}
                      </span>
                      <span>
                        •
                      </span>
                      <span className="text-primary-container font-semibold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[14px]">
                          explore
                        </span>
                        {" 70°45'57\" S, 11°44'09\" E"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container-high transition-all flex items-center gap-1.5 shadow-sm font-label-mono text-label-mono" title="Save this diary entry" type="button" onClick={(e)=>window.__pol(e,"toggleBookmark(this)")}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      bookmark_border
                    </span>
                    {" "}
                    <span>
                      Bookmark
                    </span>
                    {" "}
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container-high transition-all flex items-center gap-1.5 shadow-sm font-label-mono text-label-mono" title="Share Dispatch" type="button" onClick={(e)=>window.__pol(e,"showShareDialog()")}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      share
                    </span>
                    {" "}
                    <span>
                      Share
                    </span>
                    {" "}
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container-high transition-all flex items-center gap-1.5 shadow-sm font-label-mono text-label-mono" title="Generate APA/BibTeX Citation" type="button" onClick={(e)=>window.__pol(e,"copyCitation()")}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      format_quote
                    </span>
                    {" "}
                    <span>
                      Cite
                    </span>
                    {" "}
                  </button>
                  <button className="w-9 h-9 rounded-lg bg-surface-container-lowest text-on-surface hover:text-primary hover:bg-surface-container-high transition-all flex items-center justify-center shadow-sm" title="Print Polar Dispatch" type="button" onClick={(e)=>window.__pol(e,"window.print()")}>
                    {" "}
                    <span className="material-symbols-outlined text-[18px]">
                      print
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-lowest pb-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-high group">
                <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
                  <img className="w-full h-full object-cover transition-opacity duration-500 ease-in-out" data-alt="High-latitude polar twilight at Maitri Station in the ice-free Schirmacher Oasis Antarctica. The main research pods glow with warm tungsten lights against deep lapis night, while vibrant emerald green aurora australis sweeps across cold jagged rocky nunataks and frozen Priyadarshini freshwater lake. Clear atmospheric clarity with faint meteorological sensor towers in the background." id="hero-slider-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmIdr7wM6QsV9Rdga-v15ovhcVBS13XchUOuksT17G7DISY2EO-UGwmMhx0k9cnTAb_2YLq8InH1Y22FDY6CfD9nJ2a2ykOtBvV6FjxkHJfxWNgxJK5NxJO7SCx20ehFCiGMKfGnVjN3C-D_XvR2QqZc5MavConrtJPXWzaMCtagaM5NzgQmCxLeJFmuTL9-OgB3Cnwot1mXEBcq9Pwmp3BotCQq-BU7XEzPuqc_SeEgSn2UuIT_Gg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <button aria-label="Previous photo" className="pointer-events-auto w-11 h-11 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-on-surface backdrop-blur-md flex items-center justify-center shadow-lg transition-transform active:scale-95 group-hover:translate-x-1" type="button" onClick={(e)=>window.__pol(e,"prevSlide()")}>
                      {" "}
                      <span className="material-symbols-outlined text-[24px]">
                        chevron_left
                      </span>
                      {" "}
                    </button>
                    <button aria-label="Next photo" className="pointer-events-auto w-11 h-11 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-on-surface backdrop-blur-md flex items-center justify-center shadow-lg transition-transform active:scale-95 group-hover:-translate-x-1" type="button" onClick={(e)=>window.__pol(e,"nextSlide()")}>
                      {" "}
                      <span className="material-symbols-outlined text-[24px]">
                        chevron_right
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-on-primary">
                    <div className="flex items-center gap-3">
                      <span className="font-label-mono text-label-mono px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-white font-semibold">
                        {" PHOTO LOG #IAE-42-884 "}
                      </span>
                      <span className="font-label-mono text-label-mono text-white/90" id="slider-counter">
                        {" 01 / 04 "}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button aria-label="Go to slide 1" className="h-2 rounded-full transition-all duration-300 w-8 bg-primary-fixed" onClick={(e)=>window.__pol(e,"setSlide(0)")} />
                      <button aria-label="Go to slide 2" className="h-2 rounded-full transition-all duration-300 w-2 bg-white/40 hover:bg-white/70" onClick={(e)=>window.__pol(e,"setSlide(1)")} />
                      <button aria-label="Go to slide 3" className="h-2 rounded-full transition-all duration-300 w-2 bg-white/40 hover:bg-white/70" onClick={(e)=>window.__pol(e,"setSlide(2)")} />
                      <button aria-label="Go to slide 4" className="h-2 rounded-full transition-all duration-300 w-2 bg-white/40 hover:bg-white/70" onClick={(e)=>window.__pol(e,"setSlide(3)")} />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2" id="slider-caption">
                    {" "}
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0">
                      camera_alt
                    </span>
                    {" "}
                    <span>
                      Maitri Station during midwinter twilight at -42°C with active magnetospheric sensors running continuous ionospheric logging.
                    </span>
                    {" "}
                  </p>
                  <span className="font-label-mono text-label-mono text-outline shrink-0">
                    Photo credit: NCPOR / 42nd IAE Expeditionary Unit
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="sticky top-20 z-40 w-full bg-surface-container-lowest/95 backdrop-blur-xl shadow-md transition-shadow duration-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4 shrink-0">
                  <button aria-label="Play Audio Dispatch" className="w-11 h-11 rounded-full bg-primary-container hover:bg-primary text-on-primary flex items-center justify-center shadow transition-transform active:scale-95 shrink-0" id="audio-play-btn" type="button" onClick={(e)=>window.__pol(e,"toggleAudioPlayback()")}>
                    {" "}
                    <span className="material-symbols-outlined text-[26px]" id="audio-play-icon">
                      play_arrow
                    </span>
                    {" "}
                  </button>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-label-mono text-label-mono uppercase tracking-wider text-primary font-bold">
                        Audio Dispatch
                      </span>
                    </div>
                    <span className="font-title-md text-title-md text-on-surface truncate max-w-sm sm:max-w-md">
                      {" Dr. Ananya Sen on Polar Night Isolation "}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-4 max-w-2xl px-2">
                  <span className="font-label-mono text-label-mono text-on-surface-variant tabular-nums" id="current-time-display">
                    03:15
                  </span>
                  <div className="relative flex-1 h-7 flex items-center cursor-pointer group" id="audio-scrubber-track" onClick={(e)=>window.__pol(e,"seekAudio(event)")}>
                    <div className="absolute inset-0 flex items-center justify-between gap-1 opacity-25">
                      <span className="w-1 h-3 bg-primary rounded-full" />
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      <span className="w-1 h-2 bg-primary rounded-full" />
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      <span className="w-1 h-7 bg-primary rounded-full" />
                      <span className="w-1 h-3 bg-primary rounded-full" />
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      <span className="w-1 h-2 bg-primary rounded-full" />
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      <span className="w-1 h-7 bg-primary rounded-full" />
                      <span className="w-1 h-3 bg-primary rounded-full" />
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      <span className="w-1 h-2 bg-primary rounded-full" />
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      <span className="w-1 h-7 bg-primary rounded-full" />
                      <span className="w-1 h-3 bg-primary rounded-full" />
                      <span className="w-1 h-4 bg-primary rounded-full" />
                      <span className="w-1 h-2 bg-primary rounded-full" />
                    </div>
                    <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden relative">
                      <div className="h-full bg-primary-container rounded-full transition-all duration-150" id="audio-progress-bar" style={{"width": "37.5%"}} />
                    </div>
                    <div className="absolute w-3.5 h-3.5 bg-primary rounded-full shadow-md -translate-x-1.5 transition-all duration-150 group-hover:scale-125" id="audio-thumb" style={{"left": "37.5%"}} />
                  </div>
                  <span className="font-label-mono text-label-mono text-outline tabular-nums">
                    08:40
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="relative">
                    <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-mono text-label-mono text-on-surface flex items-center gap-1 shadow-sm transition-colors" id="speed-btn" type="button" onClick={(e)=>window.__pol(e,"cycleSpeed()")}>
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        speed
                      </span>
                      {" "}
                      <span id="speed-label">
                        1.0x
                      </span>
                      {" "}
                    </button>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low font-label-mono text-label-mono text-on-surface shadow-sm">
                    <span className="material-symbols-outlined text-[15px] text-primary">
                      record_voice_over
                    </span>
                    <span>
                      Dr. Sharma (AI Voice)
                    </span>
                  </div>
                  <div className="flex items-center bg-surface-container-low rounded-lg p-0.5 shadow-sm font-label-mono text-label-mono">
                    <button className="px-2 py-1 rounded bg-surface-container-lowest text-primary-container font-bold shadow-xs" type="button">
                      EN
                    </button>
                    <button className="px-2 py-1 rounded text-outline hover:text-on-surface transition-colors" type="button">
                      HI
                    </button>
                  </div>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" title="Toggle audio sound" type="button" onClick={(e)=>window.__pol(e,"toggleMute()")}>
                    {" "}
                    <span className="material-symbols-outlined text-[20px]" id="volume-icon">
                      volume_up
                    </span>
                    {" "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          <main className="w-full bg-surface py-12">
            {" "}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <article className="lg:col-span-8 flex flex-col space-y-12">
                  {" "}
                  {" "}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-widest">
                      <span>
                        Section 01
                      </span>
                      <span>
                        •
                      </span>
                      <span>
                        Polar Solstice Transition
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface leading-snug">
                      {" The Descent into the Polar Night "}
                    </h2>
                    <p className="font-body-lg text-body-lg text-[#1E293B] leading-[1.8]">
                      {" The astronomical sunset in mid-May over the Schirmacher Oasis is not an abrupt blackout; rather, it is a prolonged, spectral twilight that bleeds into the permafrost over a fortnight. As the sun skims the northern horizon for the final time before disappearing until August, the solar radiation index drops to zero, and the continental ice sheet shifts into its most volatile thermodynamic cycle "}
                      <button className="inline-flex items-center justify-center px-1.5 py-0.5 text-primary hover:text-white hover:bg-primary rounded text-[13px] font-bold transition-colors ml-0.5" title="Click to view Source Reference [1]: NCPOR Technical Report TR-2024-02" type="button" onClick={(e)=>window.__pol(e,"openSourceDrawer(1)")}>
                        [1]
                      </button>
                      {". "}
                    </p>
                    <p className="font-body-lg text-body-lg text-[#1E293B] leading-[1.8]">
                      {" At Maitri Base, constructed on rocky moraine ridges surrounded by glacial ice, the sensory deprivation is almost instantaneous. Without atmospheric moisture to diffuse light, celestial clarity reaches optical thresholds impossible in temperate zones. Yet with this stillness comes the sudden fury of "}
                      {" "}
                      <span className="relative inline-block group">
                        {" "}
                        <button className="text-primary font-semibold underline decoration-dashed underline-offset-4 cursor-help focus:outline-none focus:ring-2 focus:ring-primary rounded" type="button">
                          {" katabatic winds "}
                        </button>
                        {" "}
                        {" "}
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-80 p-4 rounded-xl bg-inverse-surface text-inverse-on-surface shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-30">
                          {" "}
                          <span className="block font-title-md text-title-md text-primary-fixed mb-1 flex items-center justify-between">
                            {" "}
                            <span>
                              Katabatic Wind (noun)
                            </span>
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              air
                            </span>
                            {" "}
                          </span>
                          {" "}
                          <span className="block font-body-sm text-body-sm text-inverse-on-surface/90 leading-relaxed mb-3">
                            {" High-density, gravity-driven polar winds that cascade down the continental ice sheets of Queen Maud Land, frequently exceeding 160 km/h with wind chills plunging below -55°C. "}
                          </span>
                          {" "}
                          <span className="flex items-center justify-between pt-2 bg-white/10 -mx-4 -mb-4 px-4 py-2 rounded-b-xl font-label-mono text-label-mono text-primary-fixed-dim">
                            {" "}
                            <span>
                              Telemetry Record
                            </span>
                            {" "}
                            <span className="font-bold text-white">
                              Maitri Anemometer: 182 km/h
                            </span>
                            {" "}
                          </span>
                          {" "}
                        </span>
                        {" "}
                      </span>
                      {" roaring off the polar plateau, scouring the station pods with abrasive snow plumes that extinguish visibility down to less than thirty centimeters within seconds. "}
                    </p>
                    <blockquote className="my-6 p-6 rounded-2xl bg-surface-container-low shadow-sm">
                      {" "}
                      <p className="font-headline-sm text-headline-sm text-primary italic leading-relaxed">
                        {" “You step out of the pressurized lock into what feels like the void of open space. The cold doesn't just bite; it searches for every seam in your gear like pressurized water.” "}
                      </p>
                      {" "}
                      <footer className="mt-3 font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
                        {" "}
                        <span className="w-6 h-0.5 bg-primary-container" />
                        {" "}
                        <span>
                          Field Log entry, Day 142 of overwintering isolation
                        </span>
                        {" "}
                      </footer>
                      {" "}
                    </blockquote>
                  </section>
                  {" "}
                  {" "}
                  <section className="space-y-4">
                    <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-md overflow-hidden">
                      <div className="flex items-center justify-between mb-4 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[22px]">
                            schema
                          </span>
                          <h3 className="font-title-md text-title-md text-on-surface font-bold">
                            {" Figure 1: Schirmacher Oasis Topographic & Atmospheric Stratification "}
                          </h3>
                        </div>
                        <span className="font-label-mono text-label-mono px-2.5 py-1 rounded bg-surface-container text-primary-container font-semibold">
                          {" CROSS-SECTION GEO-04 "}
                        </span>
                      </div>
                      <div className="w-full bg-gradient-to-b from-[#E7EEFF] via-[#F0F5FA] to-[#DEE8FF] rounded-xl p-6 relative overflow-hidden">
                        <svg className="w-full h-auto text-primary" fill="none" viewBox="0 0 760 280">
                          <path d="M 0,40 Q 200,60 400,30 T 760,50" opacity="0.6" stroke="#83d2e6" strokeDasharray="4 4" strokeWidth="1.5" />
                          <path d="M 0,70 Q 220,90 450,60 T 760,80" opacity="0.4" stroke="#83d2e6" strokeDasharray="4 4" strokeWidth="1.5" />
                          <g className="wind-arrows" opacity="0.85">
                            <path d="M 40,40 L 160,110" markerEnd="url(#arrow)" stroke="#006070" strokeWidth="2" />
                            <text className="text-[11px] font-mono fill-[#006070] font-semibold" x="50" y="32">
                              Katabatic Jet Stream (-55°C)
                            </text>
                            <path d="M 120,60 L 220,130" stroke="#006070" strokeWidth="2" />
                            <path d="M 180,80 L 280,150" stroke="#006070" strokeWidth="2" />
                          </g>
                          <path d="M 0,110 Q 120,120 220,160 L 220,280 L 0,280 Z" fill="#C4E8F5" />
                          <text className="text-[12px] font-mono fill-[#071c36] font-bold" x="24" y="180">
                            Continental Ice Sheet
                          </text>
                          <text className="text-[10px] font-mono fill-[#41636e]" x="24" y="198">
                            Elev: 2,500m ASL
                          </text>
                          <path d="M 220,160 C 260,190 310,210 360,200 C 410,190 460,205 520,195 C 560,185 600,165 620,170 L 620,280 L 220,280 Z" fill="#9BA8B0" />
                          <path d="M 330,202 C 370,225 430,225 470,202 Z" fill="#1F7A8C" opacity="0.85" />
                          <text className="text-[11px] font-mono fill-[#001f26] font-semibold" x="345" y="238">
                            Priyadarshini Lake
                          </text>
                          <g transform="translate(485, 170)">
                            <rect fill="#006070" height="24" rx="4" width="48" x="0" y="0" />
                            <circle cx="24" cy="-6" fill="#f5a623" r="5" />
                            <line stroke="#006070" strokeWidth="2" x1="24" x2="24" y1="-1" y2="0" />
                            <text className="text-[11px] font-mono fill-[#071c36] font-bold" x="-12" y="-12">
                              Maitri Base (117m)
                            </text>
                          </g>
                          <path d="M 620,170 Q 680,180 760,185 L 760,280 L 620,280 Z" fill="#C1E6F3" />
                          <text className="text-[11px] font-mono fill-[#071c36] font-bold" x="635" y="210">
                            Ice Shelf (Nivlisen)
                          </text>
                          <text className="text-[10px] font-mono fill-[#41636e]" x="635" y="226">
                            Slope to Southern Ocean
                          </text>
                          <defs>
                            <marker id="arrow" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="5" refY="5" viewBox="0 0 10 10">
                              {" "}
                              <path d="M 0 0 L 10 5 L 0 10 z" fill="#006070" />
                              {" "}
                            </marker>
                          </defs>
                        </svg>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-4 leading-relaxed">
                        {" "}
                        <span className="font-bold text-on-surface">
                          Topographic cross-section of Maitri Base:
                        </span>
                        {" Situated directly in the ice-free Schirmacher Oasis basin, the station acts as an acoustic and meteorological gateway between the descending katabatic acceleration off the Queen Maud Land polar plateau and the northern Nivlisen Ice Shelf. "}
                      </p>
                    </div>
                  </section>
                  {" "}
                  {" "}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-widest">
                      <span>
                        Section 02
                      </span>
                      <span>
                        •
                      </span>
                      <span>
                        Sub-Zero Cryospheric Protocols
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface leading-snug">
                      {" Science at -40°C: Ionospheres & Paleoclimate "}
                    </h2>
                    <p className="font-body-lg text-body-lg text-[#1E293B] leading-[1.8]">
                      {" Despite extreme surface freezes, scientific operations do not decelerate; they accelerate. The winter window provides pristine electromagnetic isolation. At Maitri's High-Frequency Doppler Radar facility, our physicists capture real-time geomagnetically induced currents during intense auroral substorms. Without solar ionization interference, the upper ionospheric D-layer reflects low-frequency beacon pulses with mathematical fidelity "}
                      <button className="inline-flex items-center justify-center px-1.5 py-0.5 text-primary hover:text-white hover:bg-primary rounded text-[13px] font-bold transition-colors ml-0.5" title="Click to view Source Reference [2]: Cryospheric Ozone Sondes" type="button" onClick={(e)=>window.__pol(e,"openSourceDrawer(2)")}>
                        [2]
                      </button>
                      {". "}
                    </p>
                    <p className="font-body-lg text-body-lg text-[#1E293B] leading-[1.8]">
                      {" Twice a week, in winds hovering near 40 knots, the meteorological team releases helium-filled electrochemical ozone sondes. Launching an eight-foot latex balloon requires three handlers clad in extreme-cold suits to stabilize the rig against sudden gusts while delicate sensors record tropospheric-to-stratospheric temperature inversions up to 35 kilometers aloft. "}
                    </p>
                    <div className="rounded-2xl bg-surface-container-high overflow-hidden shadow-lg">
                      <div className="relative aspect-video w-full bg-black group flex items-center justify-center cursor-pointer" onClick={(e)=>window.__pol(e,"toggleVideoPlayback(this)")}>
                        <img className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity" data-alt="Dramatic 4K footage still of an intense whiteout polar blizzard slamming into orange and teal research container modules at Maitri Station Antarctica. Snow drift streaks horizontally across powerful exterior spotlights while an expedition member in high-visibility gear checks safety lifelines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUze8epHFktjaqvFOgsjD5YW1P3fIfDK5tx4SmxXOlu_zrRGQHEmXk997ijt6e-6DqPhQCLIBR_ptVxCglOlaWR60eJaV70G2mENOdvV2148LBMDlc96ZbwZON8eV4B1IDvFarFb2MLnX5VbT0Obotlo5gXlNA8lPswyodZAilEVZZup-iS-jETIk4SXIl0MhPRCVfR6FgyDPRlOu4jrAh7rA-fiOLGRZlsi4Jjbuw7ADXNTulJ5vO" />
                        <div className="absolute w-16 h-16 rounded-full bg-primary-container/90 text-on-primary flex items-center justify-center shadow-2xl backdrop-blur-md group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-[36px]">
                            play_arrow
                          </span>
                        </div>
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur text-white font-label-mono text-label-mono font-bold flex items-center gap-1">
                            {" "}
                            <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                            {" 4K UHD "}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-mono text-label-mono">
                            {" CC: EN / HI "}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur text-white font-label-mono text-label-mono font-mono">
                            {" 0:20 "}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 bg-surface-container-low flex items-center justify-between">
                        <div>
                          <h4 className="font-title-md text-title-md text-on-surface">
                            Field Dispatch: 0:20 Clip — Blizzard Ingress at Container Pod 4
                          </h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Live anemometer logging showing sudden surge from 22 kts to 84 kts in under six minutes.
                          </p>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-mono text-label-mono shadow-xs hover:bg-surface-container transition-colors shrink-0" type="button">
                          {" Full Dispatch Log "}
                        </button>
                      </div>
                    </div>
                  </section>
                  {" "}
                  {" "}
                  <section className="space-y-6">
                    <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-widest">
                      <span>
                        Section 03
                      </span>
                      <span>
                        •
                      </span>
                      <span>
                        Human Cohesion & Survival
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface leading-snug">
                      {" Psychological Endurance and the Midwinter Feast "}
                    </h2>
                    <p className="font-body-lg text-body-lg text-[#1E293B] leading-[1.8]">
                      {" Isolation at high latitudes is as much a test of psychological fortitude as it is of mechanical resilience. With the supply vessel "}
                      <em>
                        MV Vasiliy Golovnin
                      </em>
                      {" docked thousands of miles away in Cape Town, the forty souls at Maitri rely exclusively on internal systems. The hydroponic module becomes an oasis within an oasis, yielding modest harvests of coriander, bok choy, and cherry tomatoes that provide vital crisp textures and morale-boosting aromas amid months of freeze-dried rations. "}
                    </p>
                    <p className="font-body-lg text-body-lg text-[#1E293B] leading-[1.8]">
                      {" On June 21st, coinciding with the Southern Hemisphere's winter solstice, the contingent celebrates Midwinter Day—an unbroken tradition across all Antarctic treaty nations. Congratulatory radiograms arrive from Himadri in the Arctic, Bharati station in the Larsemann Hills, and the Ministry in New Delhi. Around a feast crafted from carefully preserved staples, researchers and army engineers swap stories, unified by the humbling awareness that outside their insulated double walls, Queen Maud Land sleeps in total, freezing serenity. "}
                    </p>
                  </section>
                  {" "}
                  {" "}
                  <div className="p-8 rounded-2xl bg-surface-container-low flex flex-col sm:flex-row items-center gap-6 shadow-sm">
                    <img className="w-20 h-20 rounded-xl object-cover shrink-0" data-alt="Square portrait of Dr. Ananya Sen in Antarctic research lab coat reviewing geophysical data readouts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQxhnbV_Xpvzs4HvN5LPF2Gug8dqTFNhN9SpwNRNtb6nRgzx_GIe1vl83Hy1PcYHuRwevEnNQs8wAIDXYj7KOU0hh7ylwSMggBWzoT0Bh-wWTI3VLPMR4aTayCsO75KOccCQRphrFiGHo_OwVGgt9zBC96NtDZwAvILdU3oue9oM7XZopyScm4b5EV5AMdXyeMj7c3nSLrnxEGVUq0Rv_h3crxKcjut51ka2wCG636WougQLQlpSFc" />
                    <div className="space-y-2 text-center sm:text-left">
                      <span className="font-label-mono text-label-mono text-primary font-semibold uppercase tracking-wider">
                        About the Contributor
                      </span>
                      <h4 className="font-title-md text-title-md text-on-surface">
                        Dr. Ananya Sen
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        {" Senior Scientist at the National Centre for Polar and Ocean Research (NCPOR), Goa. She completed two wintering stints at Maitri and Bharati stations and currently leads the Indian Middle Atmosphere Dynamics Program. "}
                      </p>
                    </div>
                  </div>
                  {" "}
                </article>
                <aside className="lg:col-span-4 flex flex-col space-y-8 lg:sticky lg:top-36">
                  {" "}
                  {" "}
                  <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-md space-y-5">
                    <div className="flex items-center justify-between pb-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">
                          pin_drop
                        </span>
                        <span className="font-label-mono text-label-mono uppercase tracking-wider text-outline font-bold">
                          Where this happened
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#2ECC9A]/15 text-[#006448] font-label-mono text-label-mono font-bold flex items-center gap-1">
                        {" "}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC9A]" />
                        {" OPERATIONAL "}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Maitri Station, Schirmacher Oasis
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Central Dronning Maud Land, East Antarctica
                      </p>
                      <p className="font-label-mono text-label-mono text-primary-container font-medium mt-1">
                        70°45'57" S, 11°44'09" E • Elev. 117m ASL
                      </p>
                    </div>
                    <div className="flex justify-center w-full my-2">
                      <div className="rounded-xl flex items-center justify-center text-center p-4" id="polaris-globe-mini-story" style={{"width": "320px", "height": "320px", "backgroundColor": "#050B18", "border": "2px dashed #1F7A8C"}}>
                        <span className="font-label-mono text-label-mono text-primary-fixed tracking-wider">
                          {" GLOBE SLOT - polaris-globe-mini-story "}
                        </span>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-container-low/70 space-y-2">
                      <div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface">
                        <span className="text-outline">
                          Current Temp:
                        </span>
                        <span className="font-bold text-primary">
                          -18.4°C
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface">
                        <span className="text-outline">
                          Wind Velocity:
                        </span>
                        <span className="font-bold">
                          14 kts S
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-mono text-label-mono text-on-surface">
                        <span className="text-outline">
                          Solar Cycle:
                        </span>
                        <span className="font-bold text-[#F5A623]">
                          0h (Polar Night)
                        </span>
                      </div>
                    </div>
                    <Link className="w-full py-3 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center gap-2 shadow-sm transition-all focus:ring-2 focus:ring-primary focus:outline-none" data-path="expedition-globe" to="/globe">
                      {" "}
                      <span>
                        View Station on Expedition Globe
                      </span>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        north_east
                      </span>
                      {" "}
                    </Link>
                  </div>
                  {" "}
                  {" "}
                  <div className="rounded-2xl bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-6 shadow-md space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">
                            auto_awesome
                          </span>
                        </div>
                        <span className="font-title-md text-title-md text-on-surface">
                          Ask POLARIS
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-mono text-label-mono font-semibold">
                        {" MoES AI Engine "}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {" Have questions about ice cores, katabatic winds, or life at Maitri Base? Inquire with our grounded science model. "}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary font-label-mono text-label-mono text-on-surface-variant transition-colors text-left" type="button" onClick={(e)=>window.__pol(e,"askPresetPrompt(this.innerText)")}>
                        {" How cold does it get? "}
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary font-label-mono text-label-mono text-on-surface-variant transition-colors text-left" type="button" onClick={(e)=>window.__pol(e,"askPresetPrompt(this.innerText)")}>
                        {" What do they eat? "}
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary font-label-mono text-label-mono text-on-surface-variant transition-colors text-left" type="button" onClick={(e)=>window.__pol(e,"askPresetPrompt(this.innerText)")}>
                        {" How does IndARC compare? "}
                      </button>
                    </div>
                    <button className="w-full py-2.5 px-4 rounded-xl bg-surface-container-lowest text-primary-container font-title-md text-title-md flex items-center justify-center gap-2 shadow-sm hover:bg-primary hover:text-on-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary" type="button" onClick={(e)=>window.__pol(e,"openAskPolaris()")}>
                      {" "}
                      <span className="material-symbols-outlined text-[18px]">
                        psychology
                      </span>
                      {" "}
                      <span>
                        Ask POLARIS about this story
                      </span>
                      {" "}
                    </button>
                  </div>
                  {" "}
                  {" "}
                  <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm space-y-3">
                    <span className="font-label-mono text-label-mono uppercase tracking-wider text-outline font-bold">
                      Facility Dossier
                    </span>
                    <div className="space-y-2 text-on-surface font-body-sm text-body-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-outline">
                          Commissioned:
                        </span>
                        <span className="font-medium">
                          1989 (36 Years Operational)
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-outline">
                          Winter Crew Capacity:
                        </span>
                        <span className="font-medium">
                          25 - 40 Scientists
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-outline">
                          Freshwater Source:
                        </span>
                        <span className="font-medium">
                          Lake Priyadarshini
                        </span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-outline">
                          Geomagnetic Dip:
                        </span>
                        <span className="font-mono text-primary font-semibold">
                          66.8° S
                        </span>
                      </div>
                    </div>
                  </div>
                  {" "}
                </aside>
              </div>
            </div>
            {" "}
          </main>
          <aside className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] bg-surface-container-lowest shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col" id="source-drawer">
            {" "}
            {" "}
            <div className="p-6 bg-surface-container-low flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    menu_book
                  </span>
                  <span className="font-title-md text-title-md text-on-surface">
                    Source Reference [1]
                  </span>
                </div>
                <span className="font-label-mono text-label-mono text-outline">
                  Grounded Science Archival Record
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline font-label-mono text-label-mono text-outline">
                  Esc
                </span>
                <button aria-label="Close drawer" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" type="button" onClick={(e)=>window.__pol(e,"closeSourceDrawer()")}>
                  {" "}
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                  {" "}
                </button>
              </div>
            </div>
            {" "}
            {" "}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="p-3.5 rounded-xl bg-secondary-container/50 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  verified_user
                </span>
                <div>
                  <span className="block font-title-md text-body-sm text-on-surface font-bold">
                    100% NCPOR Archival Grounding
                  </span>
                  <span className="block font-label-mono text-label-mono text-on-surface-variant">
                    Validated against National Polar Data Center master catalog.
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider block">
                    Document Type
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold text-primary">
                    OFFICIAL MINISTRY TECHNICAL REPORT
                  </span>
                </div>
                <div>
                  <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider block">
                    Document Title
                  </span>
                  <h4 className="font-headline-sm text-body-lg text-on-surface font-bold mt-1">
                    {" NCPOR Technical Report TR-2024-02: Micro-Meteorological Baseline & Geomagnetic Variance at Schirmacher Oasis (2023-2024) "}
                  </h4>
                </div>
                <div>
                  <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider block">
                    Authors & Affiliation
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    {" Dr. Ananya Sen, Atmospheric Wing; Polar Physics Group, Maitri 42nd Contingent. "}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider block">
                      Identifier
                    </span>
                    <span className="font-label-mono text-label-mono text-primary select-all">
                      doi: 10.5194/ncpor-tr-2024-02
                    </span>
                  </div>
                  <div>
                    <span className="font-label-mono text-label-mono text-outline uppercase tracking-wider block">
                      Publisher
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface">
                      MoES, Govt. of India
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-surface-container-low shadow-inner space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-outline uppercase">
                    Executive Abstract Excerpt
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-outline">
                    description
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed italic">
                  {" “Observations recorded across 365 continuous diurnal cycles in the Schirmacher Oasis revealed a mean annual surface temperature of -10.2°C with absolute winter minima reaching -42.8°C. Katabatic flow initiation correlated strongly with 500hPa geopotential height drops over the Antarctic interior, producing wind acceleration rates exceeding 18 m/s per hour...” "}
                </p>
                <div className="pt-2">
                  <span className="font-label-mono text-label-mono text-outline">
                    Classification: Public Access • Unrestricted Research
                  </span>
                </div>
              </div>
            </div>
            {" "}
            {" "}
            <div className="p-6 bg-surface-container-lowest shadow-lg space-y-2.5">
              <Link className="w-full py-3 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center gap-2 shadow-sm transition-colors" data-path="repository" to="/data">
                {" "}
                <span>
                  Open in NPDC (National Polar Data Center)
                </span>
                {" "}
                <span className="material-symbols-outlined text-[18px]">
                  open_in_new
                </span>
                {" "}
              </Link>
              <button className="w-full py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-title-md text-body-sm flex items-center justify-center gap-2 transition-colors" type="button" onClick={(e)=>window.__pol(e,"downloadSimulation()")}>
                {" "}
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                {" "}
                <span>
                  Download PDF (2.4 MB)
                </span>
                {" "}
              </button>
            </div>
            {" "}
          </aside>
          <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs z-40 hidden transition-opacity" id="drawer-backdrop" onClick={(e)=>window.__pol(e,"closeSourceDrawer()")} />
          <section className="w-full bg-surface-container-lowest py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-widest mb-3">
                  <span>
                    Continuous Observation Series
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                  {" Related Field Dispatches & Stories "}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
                  {" Discover more first-hand accounts from India's research stations across Antarctica, the Arctic, and the Himalayas. "}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article className="flex flex-col rounded-2xl bg-surface p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  {" "}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-5 bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up of a sparkling deep-ice core extracted from the Antarctic ice sheet showing translucent blue trapped air bubbles from ancient atmosphere resting on a stainless steel analysis tray at Bharati Station." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV-MkTNABqjyPlydziNS45BLtRcClcP6bQiczyGQYIrxp3-AUIephB0W6Vy9uYYOE3YXGCFmNMOtE6RIyFUrrmqwz8I9IGtwIdqxxo536BgywlVV08ISck9TQKBTrJcDrpTm02TQ181qLn6S8H-PhqpvzttTkfweGWlaphuTHwfS4bfm_VaoVZnluc88Hevg8rBRB3NgK1934I8K72oNX9qR0ztTk5stfgcqhYC8RL2Wt9CueFMgco" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono font-semibold">
                      {" Science Explained "}
                    </span>
                  </div>
                  {" "}
                  <div className="flex items-center gap-2 font-label-mono text-label-mono text-outline mb-2">
                    <span>
                      6 min read
                    </span>
                    <span>
                      •
                    </span>
                    <span className="text-tertiary font-semibold flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        check_circle
                      </span>
                      {" Verified by NCPOR Scientist "}
                    </span>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {" Decoding Ancient Atmospheres: What a 1,000-Meter Antarctic Ice Core Teaches Us "}
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                    {" Trapped within polar ice crystals are greenhouse gas signatures dating back 100,000 years. Our glaciologists unbox the newest drilling recovery from Dome-C. "}
                  </p>
                  {" "}
                  <div className="mt-auto pt-4 flex items-center justify-between text-primary font-title-md text-body-sm">
                    <span>
                      Read Field Dispatch
                    </span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="flex flex-col rounded-2xl bg-surface p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  {" "}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-5 bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Rugged Himalayan glaciated peak over the Chandra Basin in Himachal Pradesh with researchers in yellow cold-weather mountaineering gear setting up automatic weather station sensors on rugged moraine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDraRorGcfZ1bAIuBKcJLYFJlV4ByZJvGgsfzJv1YMjkPvdTy91SxNuZbIKxneyuhyCuEmWGKitzrlCyiMD8CqWp2t7pHpbrpCt07MEjPU0J3yquzCKViacwK9vc3SlJxnpZRNKpCsfqRBRubnZ5qL90OVjiJi3Cz0aI5R4H3hqakKL0HpYGridmvJNvgT6v3b5twh8q7o_mKNsjUPPbVK8TMm59bz4Bo8x2HZaKwqaN80XW-aLv9Wn" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono font-semibold">
                      {" Climate & Cryosphere "}
                    </span>
                  </div>
                  {" "}
                  <div className="flex items-center gap-2 font-label-mono text-label-mono text-outline mb-2">
                    <span>
                      5 min read
                    </span>
                    <span>
                      •
                    </span>
                    <span className="text-[#F5A623] font-semibold flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        sensors
                      </span>
                      {" Telemetry Synced "}
                    </span>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {" The Retreating Frontiers of Chandra Basin: Monitoring Himalayan Glacial Melt "}
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                    {" Operating from the Himansh high-altitude observatory at 4,000 meters, Indian glaciologists measure ablation rates that directly impact subcontinental river hydrology. "}
                  </p>
                  {" "}
                  <div className="mt-auto pt-4 flex items-center justify-between text-primary font-title-md text-body-sm">
                    <span>
                      Read Field Dispatch
                    </span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                  {" "}
                </article>
                <article className="flex flex-col rounded-2xl bg-surface p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  {" "}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-5 bg-surface-container">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Subsurface oceanographic research mooring winch in Svalbard Arctic fjord Kongsfjorden with research vessel deck crew deploying IndARC acoustic sensor arrays into dark polar waters." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnxVcqPqgprfv-wRcxfOKj9hr5Z4hsjZisht1Kt1nLa8-M9vNRJTk7tgPLQ_xxB8IhVBqBRA6PB-aT_yhtQNY8Bu-Kye93viLVlod1uPhgyYxd3U17Ao0V692F2265pQWwwf-RHgBu9kMoT9q1udC7sgwrvRDUAWn0yP_xRxhScs8Uw5os9M6_VikMU2ygFW8y4HAF9ENJU-qr-z-EenyckUwYugtfKaM1u6xn0JwKDcCQHfdXGln9" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-label-mono text-label-mono font-semibold">
                      {" Expedition Diaries "}
                    </span>
                  </div>
                  {" "}
                  <div className="flex items-center gap-2 font-label-mono text-label-mono text-outline mb-2">
                    <span>
                      7 min read
                    </span>
                    <span>
                      •
                    </span>
                    <span className="text-primary font-semibold flex items-center gap-1">
                      {" "}
                      <span className="material-symbols-outlined text-[14px]">
                        water
                      </span>
                      {" IndARC Data "}
                    </span>
                  </div>
                  {" "}
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {" Sub-surface Mooring in Kongsfjorden: Listening to the Arctic Fjord in Winter "}
                  </h3>
                  {" "}
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-6">
                    {" From Ny-Ålesund, India's IndARC subsurface observatory gathers oceanic temperature and salinity data under solid Arctic sea-ice, bridging monsoon climate models. "}
                  </p>
                  {" "}
                  <div className="mt-auto pt-4 flex items-center justify-between text-primary font-title-md text-body-sm">
                    <span>
                      Read Field Dispatch
                    </span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                  {" "}
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(7,28,54,0.03)] mt-space-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
            <div className="flex flex-col gap-space-sm">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary-container tracking-tight">
                  POLARIS
                </span>
                <span className="font-label-mono text-label-mono text-outline uppercase">
                  NCPOR • MoES India
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                The national public science portal for polar frontiers, oceanic dynamics, and cryospheric observation led by the National Centre for Polar and Ocean Research.
              </p>
              <div className="mt-space-sm flex flex-col font-label-mono text-label-mono text-outline leading-tight gap-1">
                <span>
                  Headquarters: Headland Sada, Vasco-da-Gama, Goa 403804, India
                </span>
                <span>
                  Accreditation: ISO 9001:2015 Scientific Operations
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-on-surface">
                Polar Stations
              </h3>
              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a className="hover:text-primary transition-colors flex justify-between items-center" data-path="expedition-globe" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Bharati (Antarctica)
                    </span>
                    <span className="font-label-mono text-label-mono text-outline">
                      69°24′S 76°11′E
                    </span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex justify-between items-center" data-path="expedition-globe" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      Maitri (Antarctica)
                    </span>
                    <span className="font-label-mono text-label-mono text-outline">
                      70°46′S 11°44′E
                    </span>
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors flex justify-between items-center" data-path="expedition-globe" to="/base-stations/himadri">
                    <span>
                      Himadri (Ny-Ålesund, Arctic)
                    </span>
                    <span className="font-label-mono text-label-mono text-outline">
                      78°55′N 11°56′E
                    </span>
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors flex justify-between items-center" data-path="expedition-globe" href="#" onClick={(e)=>e.preventDefault()}>
                    <span>
                      IndARC (Kongsfjorden Fjord)
                    </span>
                    <span className="font-label-mono text-label-mono text-outline">
                      Moored Subsurface
                    </span>
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors flex justify-between items-center" data-path="timeline" to="/stories/overwintering-in-the-schirmacher-oasis">
                    <span>
                      Dakshin Gangotri (Historical)
                    </span>
                    <span className="font-label-mono text-label-mono text-outline">
                      Heritage Site
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-on-surface">
                Data & Outreach
              </h3>
              <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="repository" to="/repository">
                    Open Data Repositories (PACON)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="expedition-globe" to="/globe">
                    Interactive 3D Polar Globe
                  </Link>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" data-path="education" href="#" onClick={(e)=>e.preventDefault()}>
                    Polar Fellowship Programs
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" data-path="media" href="#" onClick={(e)=>e.preventDefault()}>
                    Scientific Bulletins & Ice Radar Logs
                  </a>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" data-path="ask-polaris" to="/ask">
                    Ask Polaris AI Outreach Engine
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-sm">
              <h3 className="font-title-md text-title-md text-on-surface">
                Expedition Dispatches
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Receive verified polar scientific updates, telemetry notices, and expedition logs directly.
              </p>
              <form className="flex flex-col sm:flex-row gap-space-xs mt-space-xs" onSubmit={(e)=>window.__pol(e,"event.preventDefault();")}>
                <input className="flex-1 px-3 py-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container" placeholder="researcher@institution.gov.in" required="" type="email" />
                <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-title-md text-body-sm hover:bg-primary transition-colors flex items-center justify-center gap-1" type="submit">
                  <span>
                    Send
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    send
                  </span>
                </button>
              </form>
              <span className="font-label-mono text-label-mono text-outline">
                Bi-weekly verified science digest. Zero spam.
              </span>
            </div>
          </div>
          <div className="pt-8 mt-4 bg-surface-container-low/50 rounded-xl p-4 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl leading-relaxed text-center md:text-left">
              Sample data & scientific simulation notice: Field dispatches, telemetry samples, and educational summaries are prepared for public science outreach by NCPOR & MoES India.
            </p>
            <p className="font-label-mono text-label-mono text-outline text-center md:text-right shrink-0">
              © 2025 NCPOR • MoES India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
