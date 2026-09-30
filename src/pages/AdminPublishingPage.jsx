import { Link } from 'react-router-dom';
import { useLegacyPage } from '../lib/legacy';

// Migrated from: polaris_publishing_content_calendar_admin_publishing/code.html
const BODY_CLASS = "bg-surface font-body-md text-body-md text-on-surface";
const HTML_CLASS = "";
const PAGE_CSS = "@layer base{html,body{margin:0;padding:0;}body{overscroll-behavior:none;}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}";
const PAGE_SCRIPT = "(function () {\n      const channelButtons = document.querySelectorAll('.channel-tab-btn');\n      const channelNameLabel = document.getElementById('active-channel-name');\n      const charCounter = document.getElementById('char-counter');\n      const captionField = document.getElementById('caption-field');\n      const livePreviewText = document.getElementById('live-preview-text');\n      const tabA = document.getElementById('tab-variant-a');\n      const tabB = document.getElementById('tab-variant-b');\n      const btnApplyAi = document.getElementById('btn-apply-ai-time');\n      const targetTimeInput = document.getElementById('target-time');\n      const hashtagPills = document.querySelectorAll('.hashtag-pill');\n\n      const variantA = \"Indian Southern Ocean Expedition (ISOE-01) completes 4,200nm hydrographic transect across the Antarctic Polar Front. First NetCDF-4 CTD profiling salinity layers down to 3,800m now indexed. #PolarScience #Antarctica #SouthernOcean\";\n      const variantB = \"Dataset Release [SOE-2024-CTD]: Quality-controlled CTD & hydrographic profiles from 64°12'S 58°34'W are published under CC-BY-4.0. Accessible via NPDC Data Portal DOI: 10.5065/ncpor-soe01. #NCPOR #ClimateTelemetry #PolarScience\";\n\n      // Channel switcher\n      channelButtons.forEach(btn => {\n        btn.addEventListener('click', () => {\n          channelButtons.forEach(b => {\n            b.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-sm');\n            b.classList.add('text-on-surface-variant');\n          });\n          btn.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-sm');\n          btn.classList.remove('text-on-surface-variant');\n\n          const channel = btn.getAttribute('data-channel');\n          if (channel === 'web') channelNameLabel.textContent = 'polaris.ncpor.res.in';\n          if (channel === 'x') channelNameLabel.textContent = '@MoES_POLARIS';\n          if (channel === 'linkedin') channelNameLabel.textContent = 'NCPOR Polar Science Research Network';\n          if (channel === 'rss') channelNameLabel.textContent = 'NPDC Wire (XML 2.0 Feed)';\n        });\n      });\n\n      // Synchronize live preview & character counter\n      if (captionField && livePreviewText && charCounter) {\n        captionField.addEventListener('input', () => {\n          livePreviewText.textContent = captionField.value;\n          charCounter.textContent = captionField.value.length;\n          if (captionField.value.length > 280) {\n            charCounter.classList.add('text-error');\n          } else {\n            charCounter.classList.remove('text-error');\n          }\n        });\n      }\n\n      // Variant switcher\n      if (tabA && tabB) {\n        tabA.addEventListener('click', () => {\n          captionField.value = variantA;\n          livePreviewText.textContent = variantA;\n          charCounter.textContent = variantA.length;\n          tabA.classList.remove('opacity-75', 'bg-surface-container-low');\n          tabA.classList.add('bg-surface-container');\n          tabB.classList.add('opacity-75', 'bg-surface-container-low');\n          tabB.classList.remove('bg-surface-container');\n        });\n\n        tabB.addEventListener('click', () => {\n          captionField.value = variantB;\n          livePreviewText.textContent = variantB;\n          charCounter.textContent = variantB.length;\n          tabB.classList.remove('opacity-75', 'bg-surface-container-low');\n          tabB.classList.add('bg-surface-container');\n          tabA.classList.add('opacity-75', 'bg-surface-container-low');\n          tabA.classList.remove('bg-surface-container');\n        });\n      }\n\n      // AI time recommendation button\n      if (btnApplyAi && targetTimeInput) {\n        btnApplyAi.addEventListener('click', () => {\n          targetTimeInput.value = '18:45';\n          btnApplyAi.textContent = 'Applied';\n          btnApplyAi.classList.add('bg-tertiary', 'text-on-tertiary');\n          setTimeout(() => {\n            btnApplyAi.textContent = 'Apply Time';\n            btnApplyAi.classList.remove('bg-tertiary', 'text-on-tertiary');\n          }, 2000);\n        });\n      }\n\n      // Hashtag pill append\n      hashtagPills.forEach(pill => {\n        pill.addEventListener('click', () => {\n          const tag = pill.getAttribute('data-tag');\n          if (captionField && !captionField.value.includes(tag)) {\n            captionField.value += ' ' + tag;\n            livePreviewText.textContent = captionField.value;\n            charCounter.textContent = captionField.value.length;\n          }\n        });\n      });\n\n      // Quick Publish trigger\n      const publishBtn = document.getElementById('btn-publish-now');\n      if (publishBtn) {\n        publishBtn.addEventListener('click', () => {\n          const original = publishBtn.innerHTML;\n          publishBtn.innerHTML = '<span class=\"material-symbols-outlined text-[17px] animate-spin\">refresh</span> Releasing...';\n          setTimeout(() => {\n            publishBtn.innerHTML = '<span class=\"material-symbols-outlined text-[17px]\">done_all</span> Dispatched!';\n            publishBtn.classList.replace('bg-primary', 'bg-tertiary');\n            setTimeout(() => {\n              publishBtn.innerHTML = original;\n              publishBtn.classList.replace('bg-tertiary', 'bg-primary');\n            }, 2500);\n          }, 1200);\n        });\n      }\n    })();";

export default function AdminPublishingPage() {
  useLegacyPage({ bodyClass: BODY_CLASS, htmlClass: HTML_CLASS, script: PAGE_SCRIPT });
  return (
    <>
      {PAGE_CSS ? <style>{PAGE_CSS}</style> : null}
      <aside className="fixed left-0 top-0 h-full w-60 bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col min-h-0">
          <div className="p-space-md border-b border-surface-container-low">
            <div className="flex items-center gap-space-xs">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold">
                P
              </div>
              <div>
                <div className="font-title-md text-title-md font-bold tracking-tight text-primary leading-none">
                  POLARIS
                </div>
                <div className="font-label-mono text-label-mono text-outline leading-none mt-1">
                  MOES PORTAL V4.2
                </div>
              </div>
            </div>
            <div className="mt-space-md bg-surface-container-low p-space-xs rounded-lg">
              <div className="font-title-md text-title-md text-on-surface truncate">
                Dr. Ananya Sen
              </div>
              <div className="font-label-mono text-label-mono text-secondary truncate">
                Supervisory • Roles: C, S, E, A
              </div>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-space-xs py-space-sm space-y-0.5" data-active-classes="bg-primary-container text-on-primary-container font-semibold">
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="admin-dashboard" to="/admin">
              <span className="material-symbols-outlined text-[18px]">
                dashboard
              </span>
              <span>
                Dashboard
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="expedition-manager" to="/admin/expeditions">
              <span className="material-symbols-outlined text-[18px]">
                explore
              </span>
              <span>
                Expedition Manager
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="upload-and-datasets" to="/admin/upload">
              <span className="material-symbols-outlined text-[18px]">
                upload_file
              </span>
              <span>
                Upload & Datasets
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="ai-processing-and-ocr" to="/admin/ai-queue">
              <span className="material-symbols-outlined text-[18px]">
                neurology
              </span>
              <span>
                AI Processing & OCR
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="content-studio" to="/admin/studio">
              <span className="material-symbols-outlined text-[18px]">
                edit_document
              </span>
              <span>
                Content Studio
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="review-queue" to="/admin/review">
              <span className="material-symbols-outlined text-[18px]">
                fact_check
              </span>
              <span>
                Review Queue
              </span>
            </Link>
            <Link aria-current="page" className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg transition-all bg-primary-container text-on-primary-container font-semibold" data-path="publishing-and-releases" to="/admin/publishing">
              <span className="material-symbols-outlined text-[18px]">
                rocket_launch
              </span>
              <span>
                Publishing & Releases
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="rights-and-licenses" to="/admin/rights">
              <span className="material-symbols-outlined text-[18px]">
                policy
              </span>
              <span>
                Rights & Licenses
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="integrations-npdc" to="/admin/integrations">
              <span className="material-symbols-outlined text-[18px]">
                hub
              </span>
              <span>
                Integrations (NPDC)
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="analytics-and-telemetry" to="/admin/analytics">
              <span className="material-symbols-outlined text-[18px]">
                insights
              </span>
              <span>
                Analytics & Telemetry
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="users-and-access" to="/admin/users">
              <span className="material-symbols-outlined text-[18px]">
                group
              </span>
              <span>
                Users & Access
              </span>
            </Link>
            <Link className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="audit-logs" to="/admin/audit-logs">
              <span className="material-symbols-outlined text-[18px]">
                receipt_long
              </span>
              <span>
                Audit Logs
              </span>
            </Link>
          </nav>
        </div>
        <div className="p-space-sm border-t border-surface-container-low space-y-space-xs">
          <div className="bg-surface-container-low p-space-xs rounded-lg space-y-1 font-label-mono text-label-mono">
            <div className="flex items-center justify-between text-on-surface">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                NKN Node 04
              </span>
              <span className="text-tertiary font-bold">
                Synced
              </span>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant">
              <span>
                Maitri
              </span>
              <span>
                -18.4°C
              </span>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant">
              <span>
                Himadri
              </span>
              <span>
                -6.8°C
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 px-1">
            <a className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" data-path="documentation" href="#" onClick={(e)=>e.preventDefault()}>
              <span className="material-symbols-outlined text-[16px]">
                menu_book
              </span>
              Docs
            </a>
            <a className="flex items-center gap-1 font-label-md text-label-md text-error hover:opacity-80 transition-opacity" data-path="sign-out" href="#" onClick={(e)=>{e.preventDefault();window.__polaris.logout()}}>
              <span className="material-symbols-outlined text-[16px]">
                logout
              </span>
              Sign out
            </a>
          </div>
        </div>
      </aside>
      <div className="pl-60">
        <header className="fixed top-0 left-60 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="relative flex items-center w-72">
              <span className="material-symbols-outlined absolute left-3 text-[18px] text-outline">
                search
              </span>
              <input className="w-full pl-9 pr-12 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search portal, datasets, records..." type="text" />
              <kbd className="absolute right-2 px-1.5 py-0.5 bg-surface-container-lowest rounded font-label-mono text-label-mono text-on-surface-variant shadow-sm">
                ⌘K
              </kbd>
            </div>
            <div className="hidden xl:flex items-center gap-space-xs">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low font-label-mono text-label-mono text-on-surface">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                <span>
                  Maitri: -18.4°C
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low font-label-mono text-label-mono text-on-surface">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span>
                  Himadri: -6.8°C
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low font-label-mono text-label-mono text-on-surface">
                <span className="w-2 h-2 rounded-full bg-primary-container" />
                <span>
                  Bharati: -14.2°C
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="hidden md:inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container font-label-mono text-label-mono text-on-surface font-semibold tracking-wider">
              ADMIN (ROLES: E, A) NIC L4
            </div>
            <button className="relative p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">
              <span className="material-symbols-outlined text-[22px]">
                notifications
              </span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </header>
        <main className="relative pt-16 bg-surface min-h-screen">
          <div className="flex flex-col w-full">
            <div className="px-space-md lg:px-space-lg py-space-md space-y-space-md pb-24">
              <div className="space-y-space-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-label-mono text-label-mono text-outline uppercase tracking-wider">
                    <span className="hover:text-primary transition-colors cursor-pointer">
                      Field Operations Command
                    </span>
                    <span>
                      /
                    </span>
                    <span className="text-primary font-bold">
                      Admin Publishing
                    </span>
                    <span>
                      /
                    </span>
                    <span className="bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold">
                      Roles: E, A
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-on-surface font-label-mono text-label-mono">
                    <span className="material-symbols-outlined text-[15px] text-tertiary">
                      verified_user
                    </span>
                    <span className="font-bold text-on-surface">
                      APPROVED ITEMS ONLY:
                    </span>
                    <span className="text-on-surface-variant truncate max-w-xs md:max-w-md">
                      Strict gatekeeper active. Dual-signed outreach artifacts from /admin/review only.
                    </span>
                  </div>
                </div>
                <div className="pt-1">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-normal tracking-tight">
                    {" Omnichannel Publishing & Polar Outreach Calendar "}
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 max-w-4xl">
                    {" Distribute verified scientific dispatches, high-resolution dataset releases, and expedition briefings across multi-platform communication channels. "}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-2">
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                        Queued for Release
                      </div>
                      <div className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5">
                        7 Dispatches
                      </div>
                      <div className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[15px]">
                          schedule
                        </span>
                        {" Next drop: Today, 17:30 IST "}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        pending_actions
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                        Published This Month
                      </div>
                      <div className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5">
                        24 Releases
                      </div>
                      <div className="font-body-sm text-body-sm text-tertiary flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[15px]">
                          trending_up
                        </span>
                        {" +18% outreach reach "}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-[22px]">
                        rocket_launch
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                        Channel Health
                      </div>
                      <div className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5">
                        100% Synced
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary truncate max-w-[170px] mt-0.5">
                        {" Portal, X, LinkedIn, NPDC "}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined text-[22px]">
                        hub
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-between">
                    <div>
                      <div className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                        Engagement Peak
                      </div>
                      <div className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5">
                        18:00 - 20:00
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary mt-0.5">
                        {" Polar Science Digest slot "}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        bolt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between pb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                        <h2 className="font-title-md text-title-md text-on-surface font-bold tracking-tight">
                          Channel Target & Live Simulation
                        </h2>
                      </div>
                      <span className="px-2 py-0.5 bg-surface-container font-label-mono text-label-mono rounded text-secondary uppercase">
                        Feed Engine v4.2
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-surface-container-low rounded-lg">
                      <button className="channel-tab-btn active flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md bg-surface-container-lowest text-primary shadow-sm font-label-md text-label-md text-center transition-all" data-channel="web" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          language
                        </span>
                        {" "}
                        <span>
                          Web Portal
                        </span>
                        {" "}
                      </button>
                      <button className="channel-tab-btn flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/50 font-label-md text-label-md text-center transition-all" data-channel="x" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          tag
                        </span>
                        {" "}
                        <span>
                          X / Twitter
                        </span>
                        {" "}
                      </button>
                      <button className="channel-tab-btn flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/50 font-label-md text-label-md text-center transition-all" data-channel="linkedin" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          business_center
                        </span>
                        {" "}
                        <span>
                          LinkedIn
                        </span>
                        {" "}
                      </button>
                      <button className="channel-tab-btn flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/50 font-label-md text-label-md text-center transition-all" data-channel="rss" type="button">
                        {" "}
                        <span className="material-symbols-outlined text-[16px]">
                          rss_feed
                        </span>
                        {" "}
                        <span>
                          NPDC Wire
                        </span>
                        {" "}
                      </button>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 bg-surface-container rounded-lg font-label-mono text-label-mono">
                      <div className="flex items-center gap-2 text-on-surface">
                        <span className="w-2 h-2 rounded-full bg-tertiary" />
                        <span id="active-channel-name">
                          polaris.ncpor.res.in
                        </span>
                        <span className="text-secondary">
                          • High-Availability Edge CDN
                        </span>
                      </div>
                      <span className="text-tertiary font-bold">
                        READY
                      </span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-space-sm space-y-space-xs">
                      <div className="flex items-center justify-between text-secondary font-label-mono text-label-mono px-1">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px]">
                            devices
                          </span>
                          <span>
                            DEVICE PREVIEW: DISPATCH CARD
                          </span>
                        </div>
                        <span className="text-outline">
                          1280x720 • Crisp Bathymetry Layer
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-[14px] font-bold">
                              {" P "}
                            </div>
                            <div>
                              <div className="font-title-md text-title-md text-on-surface leading-tight flex items-center gap-1">
                                <span>
                                  NCPOR Polar Science
                                </span>
                                <span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>
                                  verified
                                </span>
                              </div>
                              <div className="font-label-mono text-label-mono text-secondary">
                                @MoES_POLARIS • Official Dispatch
                              </div>
                            </div>
                          </div>
                          <div className="px-2 py-0.5 bg-surface-container text-primary font-label-mono text-label-mono rounded-full">
                            {" SOE-2024-01 "}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                            {" Southern Ocean Expedition 01 Vessel Track & Hydrography "}
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed" id="live-preview-text">
                            {" Indian Southern Ocean Expedition (ISOE-01) completes 4,200nm hydrographic transect across the Antarctic Polar Front. First NetCDF-4 CTD profiling salinity layers down to 3,800m now indexed. "}
                          </p>
                        </div>
                        <div className="relative rounded-lg overflow-hidden h-44 bg-surface-container-high group">
                          <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Scientific bathymetric hydrography map visualization of Southern Ocean Antarctica research vessel cruise track with contour lines in deep teal and cyan colors with telemetry depth markers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiHGwS8-2SZIN9oQIjcky5PuhmsncpagGoC8G4srxXhf-MkkJpnNWBAn6eJ6x0pPMXrpWgCZzTwxJOv0J4NKINkz5RnrO0kaJd0jjVF8qwFrTsAqHdkShrHzkVmRP5JVOsLvWpvzIfekvFA_rvkjd178_R-klIJ0sNDu96j9cElW3DMS6ISbJT0jYvvYT9E4Buq_75bdrKRKAtaEWtoKQhSQjvPCpWjvvP0FoRKNAUEQdqlOA-8YOk" />
                          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent flex items-end p-2.5 justify-between">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur font-label-mono text-label-mono text-on-surface font-semibold">
                                {" GEO-TIFF 32-BIT "}
                              </span>
                              <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-mono text-label-mono">
                                {" CTD PROFILES "}
                              </span>
                            </div>
                            <div className="font-label-mono text-label-mono text-surface-bright flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">
                                pin_drop
                              </span>
                              {" 64°12'S 58°34'W "}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container rounded-lg font-label-mono text-label-mono text-primary font-medium hover:bg-surface-container-high cursor-pointer transition-colors">
                            <span className="material-symbols-outlined text-[15px]">
                              link
                            </span>
                            <span>
                              doi:10.5065/ncpor-soe01
                            </span>
                          </div>
                          <div className="flex items-center gap-1 font-label-mono text-label-mono text-tertiary">
                            <span className="material-symbols-outlined text-[16px]">
                              history_edu
                            </span>
                            <span>
                              Dual-signed: Dr. Sen (Chief Sci)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-sm pt-space-xs flex flex-wrap items-center justify-between gap-2 font-label-mono text-label-mono text-secondary">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[15px] text-primary">
                          text_fields
                        </span>
                        {" "}
                        <strong className="text-on-surface" id="char-counter">
                          214
                        </strong>
                        {"/280 chars "}
                      </span>
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-[15px] text-primary">
                          attachment
                        </span>
                        {" 1.4 MB GeoTIFF "}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-tertiary">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                      <span>
                        WCAG AAA Alt-Text Verified
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between pb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                        <h2 className="font-title-md text-title-md text-on-surface font-bold tracking-tight">
                          Caption & Variant Studio
                        </h2>
                      </div>
                      <div className="font-label-mono text-label-mono text-secondary">
                        From Queue #REV-8821
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">
                        Source Artifact (Dual-Signed)
                      </label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm py-2 px-3 pr-8 rounded-lg appearance-none focus:outline-none focus:bg-surface-container cursor-pointer" id="approved-item-select" defaultValue="soe01">
                          <option value="soe01">
                            SOE-01: Southern Ocean Expedition 01 Vessel Track & Hydrography (Approved: Dr. Sen)
                          </option>
                          <option value="maitri_wind">
                            EXP-43: Maitri Station Katabatic Wind Profiler Autumn Series (Approved: Ops Lead)
                          </option>
                          <option value="indarc">
                            INDARC-08: Kongsfjorden Mooring CTD Polar Winter Depth Series (Approved: MoES Arctic)
                          </option>
                        </select>
                        <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[18px] text-outline pointer-events-none">
                          arrow_drop_down
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                          A/B Narrative Angle
                        </span>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold flex items-center gap-1">
                          {" "}
                          <span className="material-symbols-outlined text-[13px]">
                            auto_awesome
                          </span>
                          {" Variant A +32% Projected Clicks "}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="variant-btn p-2 rounded-lg bg-surface-container text-left transition-all" id="tab-variant-a" type="button">
                          {" "}
                          <div className="flex items-center justify-between">
                            <span className="font-label-md text-label-md font-bold text-on-surface">
                              Variant A (Public Discovery)
                            </span>
                            <span className="w-2 h-2 rounded-full bg-primary-container" />
                          </div>
                          {" "}
                          <div className="font-label-mono text-label-mono text-secondary mt-0.5 truncate">
                            Broad engagement • Polar current story
                          </div>
                          {" "}
                        </button>
                        <button className="variant-btn p-2 rounded-lg bg-surface-container-low text-left opacity-75 hover:opacity-100 transition-all" id="tab-variant-b" type="button">
                          {" "}
                          <div className="flex items-center justify-between">
                            <span className="font-label-md text-label-md font-bold text-on-surface">
                              Variant B (Data Rigor)
                            </span>
                            <span className="w-2 h-2 rounded-full bg-outline" />
                          </div>
                          {" "}
                          <div className="font-label-mono text-label-mono text-secondary mt-0.5 truncate">
                            Academic citation • NetCDF & CC-BY
                          </div>
                          {" "}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="font-label-mono text-label-mono text-secondary uppercase tracking-wider" htmlFor="caption-field">
                          Copywriting Sandbox
                        </label>
                        <button className="font-label-mono text-label-mono text-primary flex items-center gap-1 hover:underline" id="btn-rephrase" type="button">
                          {" "}
                          <span className="material-symbols-outlined text-[14px]">
                            psychology
                          </span>
                          {" Rephrase for Polar Clarity "}
                        </button>
                      </div>
                      <textarea className="w-full bg-surface-container-low text-on-surface p-3 rounded-lg font-body-sm text-body-sm leading-relaxed focus:outline-none focus:bg-surface-container transition-colors resize-none" id="caption-field" rows="4" defaultValue={"Indian Southern Ocean Expedition (ISOE-01) completes 4,200nm hydrographic transect across the Antarctic Polar Front. First NetCDF-4 CTD profiling salinity layers down to 3,800m now indexed. #PolarScience #Antarctica #SouthernOcean"} />
                    </div>
                    <div className="space-y-1.5">
                      <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">
                        Recommended Topic Taxonomies (NCPOR Curated)
                      </span>
                      <div className="flex flex-wrap gap-1.5" id="hashtag-tray">
                        <button className="hashtag-pill px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono flex items-center gap-1 transition-colors" data-tag="#PolarScience" type="button">
                          {" "}
                          <span className="text-primary font-bold">
                            #PolarScience
                          </span>
                          {" "}
                          <span className="text-tertiary text-[10px]">
                            98%
                          </span>
                          {" "}
                        </button>
                        <button className="hashtag-pill px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono flex items-center gap-1 transition-colors" data-tag="#Antarctica" type="button">
                          {" "}
                          <span className="text-primary font-bold">
                            #Antarctica
                          </span>
                          {" "}
                          <span className="text-tertiary text-[10px]">
                            96%
                          </span>
                          {" "}
                        </button>
                        <button className="hashtag-pill px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono flex items-center gap-1 transition-colors" data-tag="#SouthernOcean" type="button">
                          {" "}
                          <span className="text-primary font-bold">
                            #SouthernOcean
                          </span>
                          {" "}
                          <span className="text-tertiary text-[10px]">
                            92%
                          </span>
                          {" "}
                        </button>
                        <button className="hashtag-pill px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono flex items-center gap-1 transition-colors" data-tag="#NCPOR" type="button">
                          {" "}
                          <span className="text-primary font-bold">
                            #NCPOR
                          </span>
                          {" "}
                          <span className="text-secondary text-[10px]">
                            89%
                          </span>
                          {" "}
                        </button>
                        <button className="hashtag-pill px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-mono text-label-mono flex items-center gap-1 transition-colors" data-tag="#ClimateTelemetry" type="button">
                          {" "}
                          <span className="text-primary font-bold">
                            #ClimateTelemetry
                          </span>
                          {" "}
                          <span className="text-secondary text-[10px]">
                            85%
                          </span>
                          {" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-sm p-3 bg-surface-container-low rounded-xl flex items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                        insights
                      </span>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface font-bold">
                          Optimal Broadcast Window: Today at 18:45 IST
                        </div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight">
                          {" +34% estimated academic & public reach based on NKN telemetry server peaks. "}
                        </div>
                      </div>
                    </div>
                    <button className="shrink-0 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md transition-all shadow-sm" id="btn-apply-ai-time" type="button">
                      {" Apply Time "}
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="flex items-center justify-between pb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                        <h2 className="font-title-md text-title-md text-on-surface font-bold tracking-tight">
                          Dispatch Controls
                        </h2>
                      </div>
                      <span className="font-label-mono text-label-mono text-secondary">
                        UTC+05:30
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">
                        Execution Policy
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
                          {" "}
                          <input className="text-primary focus:ring-0" name="release-mode" type="radio" value="immediate" />
                          {" "}
                          <span className="font-label-md text-label-md text-on-surface">
                            Immediate
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container cursor-pointer transition-colors">
                          {" "}
                          <input defaultChecked="" className="text-primary focus:ring-0" name="release-mode" type="radio" value="scheduled" />
                          {" "}
                          <span className="font-label-md text-label-md text-on-surface font-bold">
                            Scheduled
                          </span>
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">
                          Target Date
                        </label>
                        <div className="relative">
                          <input className="w-full bg-surface-container-low text-on-surface font-label-mono text-label-mono py-2 px-2.5 pr-7 rounded-lg focus:outline-none focus:bg-surface-container" id="target-date" type="text" defaultValue="2024-10-24" />
                          <span className="material-symbols-outlined absolute right-2 top-2 text-[18px] text-outline pointer-events-none">
                            calendar_month
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">
                          Target Time (IST)
                        </label>
                        <div className="relative">
                          <input className="w-full bg-surface-container-low text-on-surface font-label-mono text-label-mono py-2 px-2.5 pr-7 rounded-lg focus:outline-none focus:bg-surface-container" id="target-time" type="text" defaultValue="18:45" />
                          <span className="material-symbols-outlined absolute right-2 top-2 text-[18px] text-outline pointer-events-none">
                            schedule
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 pt-1">
                      <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider block">
                        Downstream Relays
                      </span>
                      <div className="space-y-1.5">
                        <label className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm cursor-pointer">
                          {" "}
                          <input defaultChecked="" className="rounded text-primary focus:ring-0 w-4 h-4 bg-surface-container-low" type="checkbox" />
                          {" "}
                          <span>
                            Push to NPDC National Polar Catalog
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-2.5 text-on-surface font-body-sm text-body-sm cursor-pointer">
                          {" "}
                          <input defaultChecked="" className="rounded text-primary focus:ring-0 w-4 h-4 bg-surface-container-low" type="checkbox" />
                          {" "}
                          <span>
                            Distribute to MoES Press Desk RSS 2.0
                          </span>
                          {" "}
                        </label>
                        <label className="flex items-center gap-2.5 text-on-surface-variant font-body-sm text-body-sm cursor-pointer hover:text-on-surface">
                          {" "}
                          <input className="rounded text-primary focus:ring-0 w-4 h-4 bg-surface-container-low" type="checkbox" />
                          {" "}
                          <span>
                            SMS Dispatch to Field Station Satcoms
                          </span>
                          {" "}
                        </label>
                      </div>
                    </div>
                    <div className="p-2.5 bg-surface-container-low rounded-lg space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-on-surface font-medium">
                          Automatic Archive Date
                        </span>
                        <input className="rounded text-primary focus:ring-0" type="checkbox" />
                      </div>
                      <p className="font-label-mono text-label-mono text-secondary">
                        Retire public bulletin after 90 days of station transmission.
                      </p>
                    </div>
                  </div>
                  <div className="mt-space-sm p-3 bg-surface-container rounded-lg space-y-1">
                    <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md font-bold">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        policy
                      </span>
                      <span>
                        Legal & Open Science Mandate
                      </span>
                    </div>
                    <p className="font-label-mono text-label-mono text-secondary leading-normal">
                      {" All outbound drops automatically inherit CC-BY-4.0 open data attribution and DPDP-2023 sovereignty hashing. "}
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col justify-between">
                  <div className="space-y-space-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                          <h2 className="font-title-md text-title-md text-on-surface font-bold tracking-tight">
                            Editorial Calendar
                          </h2>
                        </div>
                        <div className="flex items-center bg-surface-container-low rounded-lg p-0.5">
                          <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-on-surface transition-colors" title="Previous Month" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              chevron_left
                            </span>
                            {" "}
                          </button>
                          <span className="px-2 font-label-md text-label-md font-bold text-on-surface">
                            October 2024
                          </span>
                          <button className="p-1 hover:bg-surface-container rounded text-on-surface-variant hover:text-on-surface transition-colors" title="Next Month" type="button">
                            {" "}
                            <span className="material-symbols-outlined text-[18px]">
                              chevron_right
                            </span>
                            {" "}
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 font-label-mono text-label-mono">
                        <button className="px-2 py-1 rounded bg-primary text-on-primary" type="button">
                          All (24)
                        </button>
                        <button className="px-2 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant" type="button">
                          Portal (12)
                        </button>
                        <button className="px-2 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant" type="button">
                          Social (8)
                        </button>
                        <button className="px-2 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant" type="button">
                          Datasets (4)
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="grid grid-cols-7 gap-1 text-center font-label-mono text-label-mono text-secondary uppercase py-1">
                        <div>
                          Mon
                        </div>
                        <div>
                          Tue
                        </div>
                        <div>
                          Wed
                        </div>
                        <div>
                          Thu
                        </div>
                        <div>
                          Fri
                        </div>
                        <div>
                          Sat
                        </div>
                        <div>
                          Sun
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 font-body-sm text-body-sm">
                        <div className="p-1.5 h-16 bg-surface-container-lowest text-outline rounded text-left opacity-40 font-label-mono text-label-mono">
                          30
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          1
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          2
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          3
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          4
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          5
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          6
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          7
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          8
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          9
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          10
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          11
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          12
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          13
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          14
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          15
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          16
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          17
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono flex flex-col justify-between">
                          <span className="text-on-surface">
                            18
                          </span>
                          <div className="bg-tertiary/15 text-tertiary px-1 py-0.5 rounded text-[10px] font-bold truncate" title="Published: Maitri Wind Telemetry">
                            {" ✓ Maitri Wind "}
                          </div>
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          19
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          20
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono flex flex-col justify-between">
                          <span className="text-on-surface">
                            21
                          </span>
                          <div className="bg-tertiary/15 text-tertiary px-1 py-0.5 rounded text-[10px] font-bold truncate" title="Published: IndARC CTD Briefing">
                            {" ✓ IndARC CTD "}
                          </div>
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          22
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          23
                        </div>
                        <div className="p-1.5 h-16 bg-primary-container text-on-primary-container rounded-lg shadow-sm text-left font-label-mono text-label-mono flex flex-col justify-between cursor-pointer">
                          <div className="flex items-center justify-between">
                            <span className="font-bold">
                              24 TODAY
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                          </div>
                          <div className="bg-surface-container-lowest text-primary px-1 py-0.5 rounded text-[10px] font-bold truncate">
                            {" 18:45 SOE-01 "}
                          </div>
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          25
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono flex flex-col justify-between">
                          <span className="text-on-surface">
                            26
                          </span>
                          <div className="bg-secondary-container text-on-secondary-container px-1 py-0.5 rounded text-[10px] font-bold truncate" title="Scheduled: Dakshin Gangotri Archival">
                            {" 11:00 Gangotri "}
                          </div>
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          27
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          28
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono flex flex-col justify-between">
                          <span className="text-on-surface">
                            29
                          </span>
                          <div className="bg-secondary-fixed text-on-secondary-fixed px-1 py-0.5 rounded text-[10px] font-bold truncate" title="Scheduled: Himansh Glacier Mass Balance">
                            {" 15:30 Himansh "}
                          </div>
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono text-on-surface-variant">
                          30
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-low rounded text-left font-label-mono text-label-mono flex flex-col justify-between">
                          <span className="text-on-surface">
                            31
                          </span>
                          <div className="bg-surface-container-high text-on-surface px-1 py-0.5 rounded text-[10px] font-bold truncate" title="Staging: National Polar Symposium">
                            {" 14:00 Symposium "}
                          </div>
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-lowest text-outline rounded text-left opacity-40 font-label-mono text-label-mono">
                          1
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-lowest text-outline rounded text-left opacity-40 font-label-mono text-label-mono">
                          2
                        </div>
                        <div className="p-1.5 h-16 bg-surface-container-lowest text-outline rounded text-left opacity-40 font-label-mono text-label-mono">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-sm p-3 bg-surface-container-low rounded-lg flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        event_available
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-bold">
                        Oct 24 Schedule:
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        1 Release Queued (18:45 IST) • Web Portal + X + LinkedIn + NPDC
                      </span>
                    </div>
                    <button className="font-label-mono text-label-mono text-primary font-bold hover:underline" type="button">
                      {" View All Oct Releases → "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 left-60 right-0 h-16 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_-2px_12px_rgba(0,0,0,0.04)] px-space-lg flex items-center justify-between z-30">
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                <span className="material-symbols-outlined text-[17px] text-tertiary">
                  lock
                </span>
                <span className="hidden sm:inline">
                  Approved Items Only: Content carries signed scientific verification prior to broadcast.
                </span>
                <span className="sm:hidden">
                  Strict Gatekeeper Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" id="btn-save-draft" type="button">
                  {" Save Draft "}
                </button>
                <button className="px-4 py-2 rounded-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-label-md text-label-md flex items-center gap-1.5 transition-colors" id="btn-schedule-dispatch" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[16px]">
                    alarm
                  </span>
                  {" "}
                  <span>
                    Schedule Dispatch
                  </span>
                  {" "}
                </button>
                <button className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.02]" id="btn-publish-now" type="button">
                  {" "}
                  <span className="material-symbols-outlined text-[17px]">
                    send
                  </span>
                  {" "}
                  <span>
                    Publish Now
                  </span>
                  {" "}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
