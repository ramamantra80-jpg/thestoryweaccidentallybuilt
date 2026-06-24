"use client";

import { motion } from "framer-motion";

// A soft cloudy-daylight backdrop for chapter four — the aftermath of the
// grind. Lighter and warmer than the night sky (pale blue fading to cream),
// with a low sun glow and a few clouds drifting slowly. "we survived the
// night, but the brain damage remains."

const clouds = [
  { top: "12%", size: 150, dur: 46, delay: 0, op: 0.75 },
  { top: "26%", size: 104, dur: 60, delay: 5, op: 0.55 },
  { top: "8%", size: 122, dur: 52, delay: 16, op: 0.65 },
  { top: "38%", size: 86, dur: 66, delay: 10, op: 0.45 },
];

function Cloud({ size, op }: { size: number; op: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      style={{ opacity: op }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#fdfcf8">
        <ellipse cx="34" cy="38" rx="26" ry="17" />
        <ellipse cx="57" cy="33" rx="22" ry="20" />
        <ellipse cx="72" cy="40" rx="17" ry="13" />
        <ellipse cx="50" cy="45" rx="32" ry="13" />
      </g>
    </svg>
  );
}

export default function DaySky({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        background:
          "radial-gradient(135% 100% at 50% -15%, #cfe0ec 0%, #e6e9e0 46%, #f4ede0 100%)",
      }}
    >
      {/* low warm sun glow */}
      <div
        className="absolute -top-12 right-10 w-48 h-48 rounded-full blur-3xl"
        style={{ background: "rgba(240, 214, 130, 0.45)" }}
      />

      {/* slowly drifting clouds */}
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: c.top, left: 0 }}
          initial={{ x: "-26vw" }}
          animate={{ x: ["-26vw", "122vw"] }}
          transition={{
            duration: c.dur,
            delay: c.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Cloud size={c.size} op={c.op} />
        </motion.div>
      ))}
    </div>
  );
}
