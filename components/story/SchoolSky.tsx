"use client";

import { motion } from "framer-motion";

// A warm "school daylight" backdrop for chapter two — soft peach clouds
// drifting over a warm cream sky. Lighter and warmer than chapter four's
// pale-blue day sky, so the two daytime chapters still feel distinct.

const clouds = [
  { top: "5%", size: 172, dur: 62, delay: 0, op: 0.8 },
  { top: "13%", size: 120, dur: 80, delay: 7, op: 0.6 },
  { top: "21%", size: 150, dur: 70, delay: 19, op: 0.62 },
  { top: "31%", size: 104, dur: 90, delay: 11, op: 0.52 },
  { top: "41%", size: 138, dur: 98, delay: 28, op: 0.48 },
  { top: "50%", size: 112, dur: 84, delay: 4, op: 0.5 },
  { top: "60%", size: 158, dur: 68, delay: 23, op: 0.58 },
  { top: "70%", size: 118, dur: 92, delay: 14, op: 0.5 },
  { top: "80%", size: 136, dur: 104, delay: 35, op: 0.44 },
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
      <g fill="#f7ddbd">
        <ellipse cx="34" cy="38" rx="26" ry="17" />
        <ellipse cx="57" cy="33" rx="22" ry="20" />
        <ellipse cx="72" cy="40" rx="17" ry="13" />
        <ellipse cx="50" cy="45" rx="32" ry="13" />
      </g>
    </svg>
  );
}

export default function SchoolSky({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        background:
          "radial-gradient(120% 95% at 50% 28%, #fbf2e2 0%, #f7e8d0 52%, #f1dabb 100%)",
      }}
    >
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: c.top, left: 0 }}
          initial={{ x: "-30vw" }}
          animate={{ x: ["-30vw", "126vw"] }}
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
