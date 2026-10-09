import { useId, useState } from "react";

// ============================================================
// KIND ALIASES  (purane naam -> naye canonical naam)
// ============================================================
const ALIASES = {
  ice: "ice-core",
  ship: "vessel",
  station: "antarctic-station",
  life: "penguins",
};

// ============================================================
// SVG FALLBACK ART  (jab image load na ho)
// ============================================================
const ART = {
  "arctic-station": [
    "#0B1F3A",
    "#1F7A8C",
    "Arctic research station",
    <>
      <circle cx="150" cy="40" r="14" fill="#fff" opacity=".85" />
      <path d="M0 140 L50 100 L100 130 L160 90 L200 120 V200 H0Z" fill="#fff" opacity=".92" />
      <rect x="70" y="110" width="60" height="26" fill="#E3ECF3" />
      <rect x="66" y="102" width="68" height="10" fill="#d9482f" />
      <line x1="160" y1="90" x2="160" y2="140" stroke="#E3ECF3" strokeWidth="2" />
      <rect x="162" y="92" width="20" height="5" fill="#ff9933" />
      <rect x="162" y="97" width="20" height="5" fill="#ffffff" />
      <rect x="162" y="102" width="20" height="5" fill="#138808" />
    </>,
  ],

  "antarctic-station": [
    "#3D7CAE",
    "#E3ECF3",
    "Antarctic research station",
    <>
      <path d="M0 150 L60 120 L120 145 L200 115 V200 H0Z" fill="#fff" />
      <rect x="60" y="118" width="46" height="24" rx="4" fill="#E3ECF3" />
      <rect x="112" y="108" width="56" height="30" rx="4" fill="#f7fbff" />
      <rect x="60" y="118" width="46" height="6" rx="2" fill="#d9482f" />
      <rect x="112" y="108" width="56" height="6" rx="2" fill="#d9482f" />
      <path d="M132 108 a18 14 0 0 1 36 0 Z" fill="#dbe7f2" />
      <g fill="#ffd66b">
        <rect x="70" y="130" width="10" height="8" rx="1" />
        <rect x="88" y="130" width="10" height="8" rx="1" />
        <rect x="122" y="122" width="10" height="8" rx="1" />
        <rect x="148" y="122" width="10" height="8" rx="1" />
      </g>
    </>,
  ],

  "ice-core": [
    "#06203A",
    "#0E3D63",
    "Ice core sample",
    <>
      <rect x="86" y="40" width="28" height="120" rx="14" fill="#e6f6ff" />
      <rect x="86" y="60" width="28" height="6" fill="#a9d9f2" />
      <rect x="86" y="80" width="28" height="8" fill="#9fd2ee" />
      <rect x="86" y="104" width="28" height="6" fill="#bfe4f7" />
      <rect x="86" y="122" width="28" height="10" fill="#a3d5f0" />
      <rect x="86" y="40" width="28" height="120" rx="14" fill="none" stroke="#7cc4e8" strokeWidth="2" />
      <circle cx="100" cy="70" r="2" fill="#fff" />
      <circle cx="108" cy="94" r="2" fill="#fff" />
      <circle cx="94" cy="118" r="2" fill="#fff" />
    </>,
  ],

  aurora: [
    "#050B18",
    "#0B1F3A",
    "Aurora over polar sky",
    <>
      <path d="M0 60 Q50 10 100 55 T200 40 V95 Q150 70 100 100 T0 95Z" fill="#2ECC9A" opacity=".55" />
      <path d="M0 80 Q60 30 120 70 T200 60 V110 Q150 90 100 115 T0 105Z" fill="#7ee6ff" opacity=".3" />
      <path d="M0 160 L200 152 V200 H0Z" fill="#E3ECF3" />
      <ellipse cx="100" cy="180" rx="80" ry="6" fill="#2ECC9A" opacity=".15" />
    </>,
  ],

  vessel: [
    "#0B1F3A",
    "#175F6E",
    "Polar research vessel",
    <>
      <path d="M0 135 Q25 122 50 135 T100 135 T150 135 T200 135 V200 H0Z" fill="#BFE3F0" opacity=".8" />
      <path d="M60 120 h80 l-12 -22 h-50z M100 98 v-30 l22 24z" fill="#fff" />
      <rect x="118" y="102" width="14" height="10" fill="#ffd66b" />
      <line x1="160" y1="90" x2="160" y2="140" stroke="#cfd8e3" strokeWidth="2" />
      <rect x="162" y="92" width="18" height="5" fill="#ff9933" />
      <rect x="162" y="97" width="18" height="5" fill="#ffffff" />
      <rect x="162" y="102" width="18" height="5" fill="#138808" />
    </>,
  ],

  glacier: [
    "#4A5B6D",
    "#0B1F3A",
    "Himalayan glacier",
    <>
      <path d="M0 200 L45 90 L85 140 L130 55 L200 150 V200Z" fill="#fff" opacity=".92" />
      <path d="M130 55 L110 95 L130 90 L148 102Z" fill="#BFE3F0" />
      <path d="M45 90 L60 115 L45 120 L32 112Z" fill="#BFE3F0" />
      <path d="M60 200 Q110 175 200 185" stroke="#6fb6e0" strokeWidth="5" fill="none" opacity=".85" />
    </>,
  ],

  penguins: [
    "#175F6E",
    "#0B1F3A",
    "Penguins in the Southern Ocean",
    <>
      <path d="M0 110 Q50 95 100 110 T200 110 V200 H0Z" fill="#BFE3F0" opacity=".6" />
      <path d="M0 140 Q50 130 100 140 T200 140 V200 H0Z" fill="#E3ECF3" />
      {/* penguin 1 */}
      <ellipse cx="70" cy="150" rx="14" ry="22" fill="#22303d" />
      <ellipse cx="70" cy="154" rx="9" ry="16" fill="#f6fbff" />
      <circle cx="70" cy="126" r="9" fill="#22303d" />
      <circle cx="67" cy="124" r="1.8" fill="#fff" />
      <path d="M78 126 l10 3 -10 3z" fill="#f2a33c" />
      {/* penguin 2 */}
      <ellipse cx="118" cy="158" rx="11" ry="18" fill="#22303d" />
      <ellipse cx="118" cy="161" rx="7" ry="13" fill="#f6fbff" />
      <circle cx="118" cy="138" r="7" fill="#22303d" />
      <circle cx="116" cy="137" r="1.4" fill="#fff" />
      <path d="M124 138 l8 2 -8 3z" fill="#f2a33c" />
    </>,
  ],

  himalaya: [
    "#2B4F7A",
    "#FFD9A8",
    "Himalayan peaks",
    <>
      <circle cx="150" cy="40" r="16" fill="#ffe1a8" />
      <path d="M0 160 L50 90 L90 130 L140 60 L200 140 V200 H0Z" fill="#4f6f92" />
      <path d="M140 60 L160 90 L140 96 L124 86Z" fill="#fff" />
      <path d="M50 90 L66 110 L50 116 L36 108Z" fill="#fff" />
      <path d="M0 170 Q80 155 160 170 T200 165 V200 H0Z" fill="#dfeaf5" />
    </>,
  ],
};

// ============================================================
// IMAGE URLS  (ye apne URLs se replace kar dena)
// ============================================================
export const PHOTO_URLS = {
  "arctic-station":
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=85",

  "antarctic-station":
    "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=1200&q=85",

  "ice-core":
    "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?auto=format&fit=crop&w=1200&q=85",

  aurora:
    "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1200&q=85",

  vessel:
    "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1200&q=85",

  glacier:
    "https://images.unsplash.com/photo-1500043357865-c6b8827edf10?auto=format&fit=crop&w=1200&q=85",

  penguins:
    "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1200&q=85",

  himalaya:
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=85",
};

// ============================================================
// Canonical kind resolver
// ============================================================
const CANONICAL_KINDS = Object.keys(ART);
export const SCENE_KINDS = CANONICAL_KINDS;

function resolveKind(kind) {
  const k = ALIASES[kind] || kind;
  return ART[k] ? k : "ice-core";
}

// ============================================================
// SVG FALLBACK COMPONENT
// ============================================================
export function SvgFallback({ kind, className = "" }) {
  const safeKind = resolveKind(kind);
  const [a, b, label, art] = ART[safeKind];
  const uniqueId = useId();
  const gradientId = `scene-grad-${safeKind}-${uniqueId.replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#${gradientId})`} />
      {art}
    </svg>
  );
}

// ============================================================
// SCENE  (main component - image load karta hai, fail hone pe SVG)
// ============================================================
export default function Scene({ kind = "aurora", className = "h-full w-full" }) {
  const safeKind = resolveKind(kind);
  const [stage, setStage] = useState("remote"); // remote -> local -> svg

  const remoteUrl = PHOTO_URLS[safeKind];
  const localUrl = `/images/about/${safeKind}.jpg`;
  const alt = ART[safeKind][2];

  const imgClass = `${className} object-cover`;

  if (stage === "remote" && remoteUrl) {
    return (
      <img
        src={remoteUrl}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imgClass}
        onError={() => setStage("local")}
      />
    );
  }

  if (stage === "local") {
    return (
      <img
        src={localUrl}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imgClass}
        onError={() => setStage("svg")}
      />
    );
  }

  return <SvgFallback kind={safeKind} className={className} />;
}

// ============================================================
// PHOTO  (optional wrapper - same fallback chain, alag API)
// ============================================================
export function Photo({ kind, className = "" }) {
  return <Scene kind={kind} className={className} />;
}