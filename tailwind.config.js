import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

// Merged from the inline `tailwind.config` blocks of all 43 original pages.
const original = {
  "theme": {
    "extend": {
      "colors": {
        "brand": "#1F7A8C",
        "brand-dark": "#006070",
        "polar-ink": "#0B1F3A",
        "polar-muted": "#4A5B6D",
        "polar-ice": "#BFE3F0",
        "polar-bg": "#FFFFFF",
        "polar-soft": "#F6F9FC",
        "polar-border": "#E3ECF3",
        "live-amber": "#F5A623",
        "upcoming-purple": "#7C5CFF",
        "aurora-green": "#2ECC9A",
        "danger-red": "#D64545",
        "on-primary-container": "#e3f8ff",
        "on-surface-variant": "#3f484b",
        "tertiary-fixed-dim": "#48deab",
        "on-tertiary-container": "#ceffe6",
        "outline-variant": "#bec8cb",
        "primary-container": "#1f7a8c",
        "primary-fixed": "a9edff",
        "on-secondary-fixed": "#001f27",
        "tertiary-fixed": "#6afbc6",
        "surface": "#f9f9ff",
        "on-tertiary-fixed": "#002115",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed-variant": "#00513a",
        "on-error": "#ffffff",
        "surface-container-high": "#dee8ff",
        "secondary-fixed": "#c4e8f5",
        "tertiary-container": "#007f5d",
        "surface-tint": "#006879",
        "primary-fixed-dim": "#83d2e6",
        "on-secondary-fixed-variant": "#294b56",
        "surface-container-low": "#f0f3ff",
        "tertiary": "#006448",
        "primary": "#006070",
        "on-surface": "#071c36",
        "secondary": "#41636e",
        "surface-container-highest": "#d6e3ff",
        "on-secondary-container": "#466873",
        "outline": "#6f797c",
        "on-background": "#071c36",
        "secondary-fixed-dim": "#a9ccd9",
        "on-primary": "#ffffff",
        "error": "#ba1a1a",
        "on-primary-fixed-variant": "#004e5b",
        "surface-dim": "#c8dbfe",
        "on-secondary": "#ffffff",
        "on-primary-fixed": "#001f26",
        "surface-variant": "#d6e3ff",
        "surface-container-lowest": "#ffffff",
        "surface-container": "#e7eeff",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#ecf1ff",
        "inverse-surface": "#1f314d",
        "on-error-container": "#93000a",
        "background": "#f9f9ff",
        "surface-bright": "#f9f9ff",
        "secondary-container": "#c1e6f3",
        "inverse-primary": "#83d2e6",
        "teal": {
          "50": "#f0f9fa",
          "100": "#d9eff3",
          "200": "#b5e0e8",
          "500": "#1F7A8C",
          "600": "#165e6d",
          "700": "#006070",
          "800": "#004e5b",
          "900": "#001f26",
          "DEFAULT": "#1F7A8C",
          "dark": "#022B3A",
          "light": "#E1EFE6",
          "soft": "#F0F8FA",
          "polaris": "#1F7A8C",
          "hover": "#186473",
          "surface": "#F4F9F9"
        },
        "space": {
          "bg": "#050B18",
          "card": "#081226"
        },
        "amber": {
          "live": "#D97706",
          "bg": "#FEF3C7",
          "border": "#FDE68A"
        },
        "purple": {
          "upcoming": "#7C3AED",
          "bg": "#EDE9FE",
          "border": "#DDD6FE"
        },
        "polar": {
          "bg": "#F6F9FC",
          "card": "#FFFFFF",
          "border": "#E2E8F0",
          "text": "#1E293B",
          "muted": "#64748B"
        },
        "surface-ground": "#F6F9FC",
        "card-border": "#E3ECF3",
        "embargo-purple": "#6B21A8",
        "status-green": "#059669"
      },
      "fontFamily": {
        "serif": [
          "Merriweather",
          "serif"
        ],
        "sans": [
          "Inter",
          "sans-serif"
        ],
        "mono": [
          "Inter",
          "monospace"
        ],
        "label-md": [
          "Inter"
        ],
        "display-hero-mobile": [
          "Merriweather"
        ],
        "headline-sm": [
          "Merriweather"
        ],
        "headline-lg-mobile": [
          "Merriweather"
        ],
        "label-mono": [
          "Inter"
        ],
        "body-sm": [
          "Inter"
        ],
        "title-md": [
          "Inter"
        ],
        "headline-md": [
          "Merriweather"
        ],
        "body-md": [
          "Inter"
        ],
        "display-hero": [
          "Merriweather"
        ],
        "body-lg": [
          "Inter"
        ],
        "headline-lg": [
          "Merriweather"
        ]
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
        "card": "16px",
        "2xl": "1rem"
      },
      "spacing": {
        "space-xs": "0.25rem",
        "gutter": "1.5rem",
        "space-lg": "1.5rem",
        "gutter-mobile": "1rem",
        "margin": "3rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "margin-mobile": "1.25rem",
        "space-xl": "2.5rem"
      },
      "fontSize": {
        "label-md": [
          "12px",
          {
            "lineHeight": "16px",
            "letterSpacing": "0.06em",
            "fontWeight": "600"
          }
        ],
        "display-hero-mobile": [
          "32px",
          {
            "lineHeight": "42px",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ],
        "headline-sm": [
          "20px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0em",
            "fontWeight": "700"
          }
        ],
        "headline-lg-mobile": [
          "26px",
          {
            "lineHeight": "36px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "label-mono": [
          "11px",
          {
            "lineHeight": "14px",
            "letterSpacing": "0.08em",
            "fontWeight": "500"
          }
        ],
        "body-sm": [
          "13px",
          {
            "lineHeight": "20px",
            "letterSpacing": "0.01em",
            "fontWeight": "400"
          }
        ],
        "title-md": [
          "16px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0.01em",
            "fontWeight": "600"
          }
        ],
        "headline-md": [
          "24px",
          {
            "lineHeight": "34px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "body-md": [
          "15px",
          {
            "lineHeight": "24px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "display-hero": [
          "48px",
          {
            "lineHeight": "60px",
            "letterSpacing": "-0.02em",
            "fontWeight": "300"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "28px",
            "letterSpacing": "0em",
            "fontWeight": "400"
          }
        ],
        "headline-lg": [
          "36px",
          {
            "lineHeight": "48px",
            "letterSpacing": "-0.01em",
            "fontWeight": "400"
          }
        ]
      },
      "boxShadow": {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "soft": "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        "glow-teal": "0 0 15px rgba(31, 122, 140, 0.6)",
        "glow-amber": "0 0 15px rgba(217, 119, 6, 0.6)",
        "card": "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        "card-hover": "0 10px 20px -3px rgba(31, 122, 140, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)"
      }
    }
  },
  "darkMode": "class"
}
;

export default {
  darkMode: original.darkMode ?? 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: original.theme.extend },
  plugins: [forms, containerQueries],
};
