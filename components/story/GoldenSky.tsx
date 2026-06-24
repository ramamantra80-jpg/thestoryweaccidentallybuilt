"use client";

import { motion } from "framer-motion";

// A warm golden-hour backdrop for chapter five — the moment the online story
// becomes real. Light sky blue up top, cream through the middle, soft gold low
// where the afternoon sun sits. Calm and warm, not a dramatic sunset.

const clouds = [
  { top: "16%", size: 132, dur: 64, delay: 0, op: 0.6 },
  { top: "30%", size: 96, dur: 78, delay: 9, op: 0.42 },
  { top: "10%", size: 110, dur: 70, delay: 22, op: 0.5 },
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
      <g fill="#fdf6e6">
        <ellipse cx="34" cy="38" rx="26" ry="17" />
        <ellipse cx="57" cy="33" rx="22" ry="20" />
        <ellipse cx="72" cy="40" rx="17" ry="13" />
        <ellipse cx="50" cy="45" rx="32" ry="13" />
      </g>
    </svg>
  );
}

export default function GoldenSky({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #cfe0ec 0%, #ece2c8 46%, #f3dca6 100%)",
      }}
    >
      {/* low afternoon sun glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          bottom: "-90px",
          width: "20rem",
          height: "20rem",
          background: "rgba(245, 200, 118, 0.55)",
        }}
      />

      {/* a few soft clouds drifting */}
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: c.top, left: 0 }}
          initial={{ x: "-28vw" }}
          animate={{ x: ["-28vw", "124vw"] }}
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
