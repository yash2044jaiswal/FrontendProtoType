---
name: Polaris Outreach
colors:
  surface: '#f9f9ff'
  surface-dim: '#c8dbfe'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d6e3ff'
  on-surface: '#071c36'
  on-surface-variant: '#3f484b'
  inverse-surface: '#1f314d'
  inverse-on-surface: '#ecf1ff'
  outline: '#6f797c'
  outline-variant: '#bec8cb'
  surface-tint: '#006879'
  primary: '#006070'
  on-primary: '#ffffff'
  primary-container: '#1f7a8c'
  on-primary-container: '#e3f8ff'
  inverse-primary: '#83d2e6'
  secondary: '#41636e'
  on-secondary: '#ffffff'
  secondary-container: '#c1e6f3'
  on-secondary-container: '#466873'
  tertiary: '#006448'
  on-tertiary: '#ffffff'
  tertiary-container: '#007f5d'
  on-tertiary-container: '#ceffe6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a9edff'
  primary-fixed-dim: '#83d2e6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5b'
  secondary-fixed: '#c4e8f5'
  secondary-fixed-dim: '#a9ccd9'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#294b56'
  tertiary-fixed: '#6afbc6'
  tertiary-fixed-dim: '#48deab'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#00513a'
  background: '#f9f9ff'
  on-background: '#071c36'
  surface-variant: '#d6e3ff'
typography:
  display-hero:
    fontFamily: Merriweather
    fontSize: 48px
    fontWeight: '300'
    lineHeight: 60px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Merriweather
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Merriweather
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Merriweather
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Merriweather
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Merriweather
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-mono:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the clinical precision, majestic stillness, and scientific gravitas of polar expeditions. It serves researchers, educators, policymakers, and the global public engaging with national polar and ocean research. 

The aesthetic is built on high-latitude minimalism: expansive white space evoking ice sheets, crisp linear structures reflecting scientific instrumentation, and disciplined accents inspired by atmospheric phenomena. It avoids decorative clutter in favor of high-legibility typographic hierarchies, surgical line work, and an airy editorial tone. The interface feels institutional yet accessible, quiet yet intellectually commanding.

## Colors

The palette balances clean ice fields with deep maritime ink. Contrast meets strict accessibility thresholds across all reading environments.

### Core Swatches
- **Primary Brand (`#1F7A8C`)**: Deep sub-polar ocean teal. Anchors primary calls-to-action, active navigational triggers, and key brand elements.
- **Secondary / Ice (`#BFE3F0`)**: Glacial melt blue. Serves as tinted fills, subtle interactive states, and accent highlights.
- **Tertiary / Aurora Green (`#2ECC9A`)**: Bio-luminescence and auroral ionization. Denotes success states, positive scientific findings, and active sensor operations.
- **Neutral / Deep Ink (`#0B1F3A`)**: Antarctic winter night. Used for headlines, high-contrast labels, and primary body content to secure absolute legibility.

### Functional & Surface Roles
- **Canvas Base**: Pure white (`#FFFFFF`) ensures maximum luminance and open air.
- **Surface Variant / Soft Band**: Glacial drift pale tint (`#F6F9FC`) for alternating editorial segments, data tables, and card interiors.
- **Structural Outlines**: Perimeter ice boundary (`#E3ECF3`) delivering delicate structural grid lines and card frames.
- **Muted Content**: Atmospheric slate (`#4A5B6D`) for metadata, secondary summaries, and assistive captions.
- **Status Amber (LIVE)**: Solar flare (`#F5A623`) exclusively for ongoing telemetry, real-time transmissions, and live expeditions.
- **Status Purple (Scheduled)**: Polar twilight (`#7C5CFF`) for planned missions, upcoming webinars, and embargoed findings.
- **Status Crimson (Alert)**: Hazard red (`#D64545`) for extreme weather alerts, emergency notices, and operational disconnects.

## Typography

The typographic pairing contrasts authoritative, literary heft with clean scientific functionality.

- **Editorial Headings (`Merriweather`)**: Conveys scholarly rigor, historical expedition logbooks, and institutional prestige. Used at light and regular weights with generous line spacing to prevent visual crowding in long titles.
- **Interface & Reading Text (`Inter`)**: Neutral, highly legible grotesque suited for sensor readouts, telemetry coordinates, metadata, and long-form scientific reporting.
- **Labels & Microcopy**: Formatted in crisp upper or medium case with positive letter tracking (`0.06em` to `0.08em`) to resemble specimen labels, cartographic callouts, and instrument panels.

## Layout & Spacing

The layout philosophy mirrors the vast openness of polar environments, using generous spatial padding rather than heavy dividers to separate thematic zones.

### Grid System
- **Desktop (≥ 1200px)**: 12-column symmetrical grid, maximum content width of `1280px`, outer margin `3rem` (`48px`), column gutter `1.5rem` (`24px`).
- **Tablet (768px - 1199px)**: 8-column layout, outer margin `2rem` (`32px`), column gutter `1.25rem` (`20px`).
- **Mobile (< 768px)**: 4-column layout, outer margin `1.25rem` (`20px`), column gutter `1rem` (`16px`).

### Vertical Rhythm & Alternation
Sections alternate between pure white (`#FFFFFF`) and delicate glacier wash (`#F6F9FC`) bands. Section padding scales vertically with an airy rhythm: `4rem` to `6rem` on desktop and `2.5rem` on mobile. Related UI controls rely on compact distances (`space-xs` to `space-sm`), while content modules sit inside spacious card paddings (`space-lg` to `space-xl`).

## Elevation & Depth

This design system avoids heavy shadows, skewing instead toward crisp atmospheric layers, clean borders, and soft daylight diffusion.

- **Primary Boundary**: Depth is defined through 1px outlines in `#E3ECF3` rather than heavy drop shadows.
- **Resting Elevation**: Cards and modular containers rest flat on the canvas with a zero-offset, high-diffusion ambient shadow: `0 2px 12px rgba(11, 31, 58, 0.03)`.
- **Interactive Hover Elevation**: Interactive tiles lift slightly via a calm, diffused shadow: `0 8px 24px rgba(11, 31, 58, 0.06)`, paired with a delicate border shift toward `#BFE3F0`.
- **Floating Overlays & Sticky Navbars**: Modals, sticky headers, and drawers leverage a frosted ice treatment: backdrop blur of `12px` to `16px` over `rgba(255, 255, 255, 0.88)` tint, grounded by a clean 1px bottom border in `#E3ECF3`.

## Shapes

Corner radii balance precision engineering with approachable modern interaction. 

- **Containers & Content Cards**: Bound strictly to `1rem` (16px) radius, offering soft organic framing reminiscent of modern observational modules.
- **Buttons & Action Controls**: Fixed at `0.5rem` (8px) for crisp operational utility.
- **Pills, Badges & Chips**: Fully rounded (`9999px`) to frame single-datum points, status beacons, and telemetry markers.
- **Technical Outlines**: All vector lines, divider bars, and coordinate markers use clean geometric intersections without rounded caps.

## Components

### Buttons & Interactive Controls
- **Primary Button**: Solid fill in `#1F7A8C`, text in `#FFFFFF`, corner radius `8px`, horizontal padding `20px`, vertical padding `10px`. Hover shifts to `#165A68`.
- **Secondary / Ice Button**: Background `#F6F9FC`, border `1px solid #E3ECF3`, text `#0B1F3A`. Hover fills `#BFE3F0` with text `#0B1F3A`.
- **Ghost Action**: Transparent background, text `#1F7A8C`, paired with a forward directional arrow (`→`) that shifts 3px on hover.

### Expedition Cards
- Built with a uniform 16px corner radius, `1px solid #E3ECF3` border, white surface, and `24px` internal padding (`space-lg`).
- Feature an optional top image aperture with a 16:9 aspect ratio and seamless upper corner rounding.
- Hover transition triggers a subtle `translateY(-2px)` and ambient elevation glow.

### Scientific Trust Badges & Metadata Chips
- Encapsulated pills (`rounded-full`) with `6px` vertical and `12px` horizontal padding.
- Ministry & Institutional Affiliation Badges: Tinted `#F6F9FC` background, `1px solid #E3ECF3` border, typography set to `label-mono` in `#0B1F3A`.
- Topic Tags: Light `#BFE3F0` background at 30% opacity, `#1F7A8C` text, no border.

### Status Indicators
- **LIVE Telemetry**: Glowing pill containing a centered 8px circular dot in `#F5A623` with a CSS breathing pulse animation, text `#0B1F3A` in bold tracking.
- **Active Research (Green)**: `#2ECC9A` indicator dot with clean non-pulsing perimeter.
- **Upcoming (Purple)**: Light lavender tint background (`#7C5CFF` at 10% opacity) with solid `#7C5CFF` indicator text and marker.

### Sticky Navigation Header
- Height fixed at `72px`, pinned top, layered with `backdrop-filter: blur(12px)` over `rgba(255, 255, 255, 0.9)`.
- Border-bottom `1px solid #E3ECF3`.
- Houses the NCPOR emblem, portal typography, desktop navigation links with an indicator dot under active states, and a prominent primary action.

### Audio Accessibility Bar
- Dedicated persistent slim bar (44px) positioned below navigation or docked at the viewport base.
- Pale background `#F6F9FC` with top border `1px solid #E3ECF3`.
- Controls: Play/Pause toggle, variable speed selector (1x, 1.2x, 1.5x), waveform scrubbing indicator, and clear auditory screen-reader label.

### Modals & Expedition Drawers
- **Modal Dialogs**: Centered overlays with `16px` radius, pure white base, `32px` padding, framed by `1px solid #E3ECF3` with a soft backdrop overlay of `rgba(11, 31, 58, 0.4)`.
- **Sliding Data Drawer**: Slides from the right viewport edge (width: `480px` on desktop, `100%` on mobile), pure white fill, border-left `1px solid #E3ECF3`, housing dense scientific readouts, expedition logs, and high-resolution maps.

### Polar Vector Styling
- Minimalist topographic contour lines, bathymetric vectors, and compass compass-rose wireframes rendered in `#E3ECF3` and `#BFE3F0` at 0.75px to 1px stroke widths. Vectors remain decorative backgrounds without competing with foreground typographic hierarchy.