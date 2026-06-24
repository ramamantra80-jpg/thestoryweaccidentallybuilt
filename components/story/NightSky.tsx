"use client";

import { motion } from "framer-motion";
import { MoonDoodle } from "./Doodles";

// A dark dusk backdrop with a glowing moon + a few twinkling stars.
// Used behind Chapter 3 (the grind-at-night arc): the cream cards float
// on top of it, the moon stays in the corner from the cover to the end.

const MOONLIGHT = "#ece3c8";

const stars = [
  { left: "10%", top: "15%", d: 0 },
  { left: "23%", top: "8%", d: 0.7 },
  { left: "39%", top: "13%", d: 1.4 },
  { left: "58%", top: "7%", d: 0.4 },
  { left: "72%", top: "11%", d: 1.1 },
  { left: "15%", top: "30%", d: 1.8 },
  { left: "85%", top: "33%", d: 0.9 },
];

interface Props {
  /** where the moon sits */
  moonSide?: "left" | "right";
  className?: string;
}

export default function NightSky({ moonSide = "right", className = "" }: Props) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        background:
          "radial-gradient(125% 95% at 50% -10%, #47506a 0%, #363d4d 44%, #2b2a32 100%)",
      }}
    >
      {/* the moon — the persistent night-grind motif */}
      <div
        className={`absolute top-4 ${moonSide === "right" ? "right-5" : "left-5"} w-12 h-12`}
        style={{ color: MOONLIGHT }}
      >
        <div
          className="absolute inset-0 rounded-full blur-lg"
          style={{ background: "rgba(236, 227, 200, 0.22)" }}
        />
        <MoonDoodle className="w-12 h-12 relative" />
      </div>

      {/* stars */}
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: 3,
            height: 3,
            backgroundColor: MOONLIGHT,
          }}
          animate={{ opacity: [0.2, 0.85, 0.2] }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            delay: s.d,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
