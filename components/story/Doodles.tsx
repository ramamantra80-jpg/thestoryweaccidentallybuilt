"use client";

// Simple hand-drawn-ish doodles. All use currentColor so the parent
// can tint them. Keep them intentionally rough and minimal.

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function BookDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9 L20 12 L20 34 L6 31 Z" {...stroke} />
      <path d="M34 9 L20 12 L20 34 L34 31 Z" {...stroke} />
      <path d="M20 12 L20 34" {...stroke} />
      <path d="M10 16 L16 17" {...stroke} strokeWidth={1.3} />
      <path d="M10 21 L16 22" {...stroke} strokeWidth={1.3} />
    </svg>
  );
}

export function CalendarDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="9" width="28" height="25" rx="3" {...stroke} />
      <path d="M6 16 H34" {...stroke} />
      <path d="M13 6 V12 M27 6 V12" {...stroke} />
      <circle cx="14" cy="23" r="1.4" fill="currentColor" />
      <circle cx="20" cy="23" r="1.4" fill="currentColor" />
      <circle cx="26" cy="23" r="1.4" fill="currentColor" />
      <path d="M24 28 l2.5 2.5 L31 26" {...stroke} strokeWidth={2.2} />
    </svg>
  );
}

export function BusDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 50" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="74" height="28" rx="6" {...stroke} />
      <rect x="12" y="14" width="13" height="11" rx="2" {...stroke} strokeWidth={1.5} />
      <rect x="30" y="14" width="13" height="11" rx="2" {...stroke} strokeWidth={1.5} />
      <rect x="48" y="14" width="13" height="11" rx="2" {...stroke} strokeWidth={1.5} />
      <rect x="66" y="14" width="9" height="11" rx="2" {...stroke} strokeWidth={1.5} />
      {/* heads in the windows */}
      <circle cx="18.5" cy="20" r="2.4" fill="currentColor" />
      <circle cx="36.5" cy="20" r="2.4" fill="currentColor" />
      <circle cx="54.5" cy="20" r="2.4" fill="currentColor" />
      <circle cx="22" cy="42" r="5" {...stroke} />
      <circle cx="64" cy="42" r="5" {...stroke} />
      <path d="M6 36 H80" {...stroke} />
    </svg>
  );
}

export function MusicNote({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M7 16 V5 L15 3 V14" {...stroke} strokeWidth={1.6} />
      <circle cx="5" cy="16" r="2.2" {...stroke} strokeWidth={1.6} />
      <circle cx="13" cy="14" r="2.2" {...stroke} strokeWidth={1.6} />
    </svg>
  );
}

export function ChairDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 36" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M9 4 V20 M9 20 H22 M22 8 V20" {...stroke} />
      <path d="M9 20 L7 32 M22 20 L24 32" {...stroke} />
      <path d="M9 14 H22" {...stroke} strokeWidth={1.4} />
    </svg>
  );
}

export function WarningDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4 L33 29 H3 Z" {...stroke} />
      <path d="M18 13 V20" {...stroke} />
      <circle cx="18" cy="24" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function PaperDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4 H22 L26 9 V36 H6 Z" {...stroke} />
      <path d="M22 4 V9 H26" {...stroke} strokeWidth={1.4} />
      <path d="M10 16 H22 M10 21 H22 M10 26 H18" {...stroke} strokeWidth={1.3} />
    </svg>
  );
}

export function ElephantDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* body */}
      <ellipse cx="20" cy="21" rx="14" ry="11" {...stroke} />
      {/* head */}
      <circle cx="34" cy="18" r="9" {...stroke} />
      {/* ear */}
      <path d="M32 11 q7 -2 7 6 q-3 3 -7 1" {...stroke} strokeWidth={1.6} />
      {/* trunk */}
      <path d="M42 19 q7 2 5 10 q-1 4 -5 4" {...stroke} />
      {/* eye */}
      <circle cx="36" cy="16" r="1.1" fill="currentColor" />
      {/* legs */}
      <path d="M12 31 V37 M20 32 V38 M28 31 V37" {...stroke} strokeWidth={1.8} />
    </svg>
  );
}

export function BugDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* body */}
      <ellipse cx="20" cy="23" rx="8" ry="10" {...stroke} />
      <path d="M20 14 V32" {...stroke} strokeWidth={1.3} />
      {/* head */}
      <circle cx="20" cy="10" r="3.5" {...stroke} strokeWidth={1.6} />
      {/* antennae */}
      <path d="M18 7 q-2 -3 -4 -4 M22 7 q2 -3 4 -4" {...stroke} strokeWidth={1.3} />
      {/* legs */}
      <path
        d="M12 18 l-5 -2 M12 23 h-6 M12 28 l-5 3 M28 18 l5 -2 M28 23 h6 M28 28 l5 3"
        {...stroke}
        strokeWidth={1.3}
      />
    </svg>
  );
}

export function MoonDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M28 7 A 14 14 0 1 0 28 33 A 11 11 0 1 1 28 7 Z" {...stroke} />
      {/* little star */}
      <path
        d="M33 13 l1 2 l2 1 l-2 1 l-1 2 l-1 -2 l-2 -1 l2 -1 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function CoffeeDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* cup */}
      <path d="M9 17 H29 V27 a4 4 0 0 1 -4 4 H13 a4 4 0 0 1 -4 -4 Z" {...stroke} />
      {/* handle */}
      <path d="M29 19 q6 0 6 5 q0 5 -6 5" {...stroke} strokeWidth={1.6} />
      {/* steam */}
      <path d="M15 11 q2 -3 0 -6 M21 11 q2 -3 0 -6" {...stroke} strokeWidth={1.4} />
    </svg>
  );
}

export function LaptopDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 36" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* screen */}
      <rect x="11" y="5" width="26" height="17" rx="2" {...stroke} />
      <path d="M15 10 H28 M15 14 H24" {...stroke} strokeWidth={1.2} />
      {/* base */}
      <path d="M7 30 H41 L38 22 H10 Z" {...stroke} />
    </svg>
  );
}

export function ClockDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="21" r="14" {...stroke} />
      <path d="M20 5 V9" {...stroke} strokeWidth={1.4} />
      {/* both hands at midnight (12:00) */}
      <path d="M20 21 V11" {...stroke} strokeWidth={1.8} />
      <path d="M20 21 V13" {...stroke} strokeWidth={1.8} />
      <circle cx="20" cy="21" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function LightningDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 2 L5 22 H11 L8 38 L20 15 H13 Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity={0.25}
      />
    </svg>
  );
}

export function WolfDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* ears */}
      <path d="M12 18 L9 5 L19 13" {...stroke} strokeLinejoin="round" />
      <path d="M36 18 L39 5 L29 13" {...stroke} strokeLinejoin="round" />
      {/* head */}
      <path d="M11 17 Q10 30 18 37 Q24 41 30 37 Q38 30 37 17" {...stroke} />
      <path d="M16 13 Q24 9 32 13" {...stroke} strokeWidth={1.6} />
      {/* eyes */}
      <path d="M17 24 q2.2 -2 4.4 0" {...stroke} strokeWidth={1.6} />
      <path d="M26.6 24 q2.2 -2 4.4 0" {...stroke} strokeWidth={1.6} />
      {/* snout + nose */}
      <path d="M21 31 Q24 34 27 31" {...stroke} strokeWidth={1.5} />
      <path d="M24 28 V31" {...stroke} strokeWidth={1.4} />
      <circle cx="24" cy="27.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

// ── chapter four: the chaos continues (daylight) ──────────────

export function SunDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="8" {...stroke} />
      <path
        d="M20 3 V8 M20 32 V37 M3 20 H8 M32 20 H37 M8 8 l3.4 3.4 M28.6 28.6 l3.4 3.4 M32 8 l-3.4 3.4 M11.4 28.6 l-3.4 3.4"
        {...stroke}
        strokeWidth={1.5}
      />
    </svg>
  );
}

export function CloudDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 27 q-8 0 -8 -7 q0 -7 8 -7 q1 -7 9 -7 q8 0 9 7 q7 0 7 7 q0 7 -7 7 Z"
        {...stroke}
      />
    </svg>
  );
}

export function OnionDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* bulb */}
      <path d="M20 11 C10 13 8 25 14 32 C17 36 23 36 26 32 C32 25 30 13 20 11 Z" {...stroke} />
      {/* sprouts */}
      <path d="M20 11 q-2 -5 -4 -6 M20 11 q0 -6 0 -7 M20 11 q2 -5 4 -6" {...stroke} strokeWidth={1.4} />
      {/* skin lines */}
      <path d="M16 15 q-2 9 1 16 M24 15 q2 9 -1 16" {...stroke} strokeWidth={1.2} />
    </svg>
  );
}

export function DogDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* head */}
      <ellipse cx="22" cy="23" rx="12" ry="11" {...stroke} />
      {/* floppy ears */}
      <path d="M11 15 q-5 2 -4 12 q3 3 7 0" {...stroke} strokeWidth={1.6} />
      <path d="M33 15 q5 2 4 12 q-3 3 -7 0" {...stroke} strokeWidth={1.6} />
      {/* eyes + nose */}
      <circle cx="17" cy="21" r="1.4" fill="currentColor" />
      <circle cx="27" cy="21" r="1.4" fill="currentColor" />
      <circle cx="22" cy="26" r="2" fill="currentColor" />
      <path d="M22 28 v3 M22 31 q-3 1 -5 -1 M22 31 q3 1 5 -1" {...stroke} strokeWidth={1.3} />
    </svg>
  );
}

export function ScrollDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 32" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="8" width="26" height="16" {...stroke} />
      <ellipse cx="9" cy="16" rx="3" ry="9" {...stroke} />
      <ellipse cx="35" cy="16" rx="3" ry="9" {...stroke} />
      <path d="M15 13 H29 M15 17 H29 M15 21 H24" {...stroke} strokeWidth={1.1} />
    </svg>
  );
}

export function SwordDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 8 L18 24" {...stroke} />
      <path d="M33 5 L30 8 L31 11" {...stroke} strokeWidth={1.5} />
      <path d="M14 22 L22 30" {...stroke} />
      <path d="M18 24 L12 31" {...stroke} />
      <circle cx="11" cy="32" r="1.8" {...stroke} strokeWidth={1.4} />
    </svg>
  );
}

export function BannerDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5 V35" {...stroke} />
      <path d="M12 8 H33 L27 14 L33 20 H12 Z" {...stroke} />
    </svg>
  );
}

export function CastleDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* keep */}
      <path d="M14 34 V14 H34 V34" {...stroke} />
      {/* crenellations */}
      <path d="M14 14 V10 H18 V14 M22 14 V10 H26 V14 M30 14 V10 H34 V14" {...stroke} strokeWidth={1.5} />
      {/* gate */}
      <path d="M21 34 V24 a3 3 0 0 1 6 0 V34" {...stroke} />
      {/* flag */}
      <path d="M24 10 V5 M24 5 H30 L28 7 L30 9 H24" {...stroke} strokeWidth={1.3} />
      {/* side towers */}
      <path d="M8 34 V20 H14 M40 34 V20 H34" {...stroke} />
    </svg>
  );
}

export function LanternDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="7" width="10" height="3" {...stroke} strokeWidth={1.3} />
      <ellipse cx="20" cy="20" rx="11" ry="10" {...stroke} />
      <path d="M20 10 V30" {...stroke} strokeWidth={1.2} />
      <path d="M13 12 Q11 20 13 28 M27 12 Q29 20 27 28" {...stroke} strokeWidth={1.2} />
      <rect x="16" y="30" width="8" height="3" {...stroke} strokeWidth={1.3} />
      <path d="M20 33 V38" {...stroke} strokeWidth={1.2} />
    </svg>
  );
}

export function StampDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="9" width="22" height="22" rx="2" {...stroke} />
      <path d="M20 13 V27 M14 17 H26 M16 22 H24" {...stroke} strokeWidth={1.6} />
    </svg>
  );
}

export function TentDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 36" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M22 6 L8 30 H36 Z" {...stroke} />
      <path d="M22 6 V30" {...stroke} strokeWidth={1.2} />
      <path d="M18 30 L22 20 L26 30" {...stroke} />
      <path d="M22 6 l3 -3" {...stroke} strokeWidth={1.2} />
    </svg>
  );
}

export function CameraDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 36" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="12" width="30" height="18" rx="3" {...stroke} />
      <path d="M16 12 l2 -3 h8 l2 3" {...stroke} />
      <circle cx="22" cy="21" r="6" {...stroke} />
      <circle cx="22" cy="21" r="2.5" {...stroke} strokeWidth={1.3} />
      <circle cx="32" cy="16" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function ZzzDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M9 26 H18 L9 34 H18" {...stroke} strokeWidth={1.7} />
      <path d="M20 16 H27 L20 23 H27" {...stroke} strokeWidth={1.4} />
      <path d="M29 8 H34 L29 13 H34" {...stroke} strokeWidth={1.2} />
    </svg>
  );
}

export function QuestionDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13 15 a7 7 0 1 1 10 6 q-3 2 -3 6" {...stroke} />
      <circle cx="20" cy="32" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function StickerDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5 Q22 18 35 20 Q22 22 20 35 Q18 22 5 20 Q18 18 20 5 Z" {...stroke} />
    </svg>
  );
}

// ── chapter five: the graduation arc (golden hour) ────────────

export function GradCapDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* mortarboard */}
      <path d="M24 8 L44 16 L24 24 L4 16 Z" {...stroke} strokeLinejoin="round" />
      {/* cap band */}
      <path d="M13 19 V27 Q24 33 35 27 V19" {...stroke} />
      {/* tassel */}
      <path d="M44 16 V29" {...stroke} strokeWidth={1.4} />
      <circle cx="44" cy="31" r="2" fill="currentColor" />
    </svg>
  );
}

export function MedalDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* ribbon */}
      <path d="M13 4 L20 22 M27 4 L20 22" {...stroke} />
      {/* medal */}
      <circle cx="20" cy="33" r="11" {...stroke} />
      <path
        d="M20 27 l1.7 3.5 3.9 .6 -2.8 2.7 .7 3.9 -3.5 -1.8 -3.5 1.8 .7 -3.9 -2.8 -2.7 3.9 -.6 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function PhoneDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 44" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="4" width="18" height="36" rx="4" {...stroke} />
      <path d="M11 7 H17" {...stroke} strokeWidth={1.4} />
      <circle cx="14" cy="35" r="1.6" {...stroke} strokeWidth={1.4} />
    </svg>
  );
}

export function PlaneDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18 L34 8 L18 33 L15 22 Z" {...stroke} strokeLinejoin="round" />
      <path d="M15 22 L34 8" {...stroke} strokeWidth={1.3} />
    </svg>
  );
}

export function SuitcaseDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="28" height="22" rx="3" {...stroke} />
      <path d="M17 14 V10 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V14" {...stroke} strokeWidth={1.6} />
      <path d="M8 21 H36" {...stroke} strokeWidth={1.2} />
      <path d="M14 21 V36 M30 21 V36" {...stroke} strokeWidth={1.2} />
    </svg>
  );
}

export function AustraliaDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 44" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 11 Q10 13 11 19 Q7 21 9 26 Q6 29 11 32 Q16 39 26 38 Q39 39 41 29 Q44 21 37 16 Q32 11 24 12 Q20 9 15 11 Z"
        {...stroke}
        strokeLinejoin="round"
      />
      <circle cx="33" cy="22" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function SchoolDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 40" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* roof */}
      <path d="M6 18 L26 6 L46 18" {...stroke} strokeLinejoin="round" />
      {/* hall body */}
      <path d="M10 18 V34 H42 V18" {...stroke} />
      {/* columns */}
      <path d="M16 18 V34 M22 18 V34 M30 18 V34 M36 18 V34" {...stroke} strokeWidth={1.3} />
      {/* steps */}
      <path d="M7 34 H45" {...stroke} />
      {/* flag */}
      <path d="M26 6 V2 H32 L30 4 L32 6 H26" {...stroke} strokeWidth={1.2} />
    </svg>
  );
}
