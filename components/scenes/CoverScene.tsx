"use client";

import { motion } from "framer-motion";

export default function CoverScene() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-8 bg-bg overflow-hidden">

      {/* Subtle warm texture dots — very light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Dots />
      </div>

      <div className="relative max-w-md w-full text-center">
        {/* Small handwrite label above */}
        <motion.p
          className="font-handwrite text-muted text-base mb-4"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          yeah this actually happened 
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-display text-ink leading-[1.1]"
          style={{ fontSize: "clamp(2.4rem, 8vw, 4rem)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          The Story We
          <br />
          <em
            className="not-italic"
            style={{ color: "#c47850" }}
          >
            Accidentally
          </em>
          <br />
          Built
        </motion.h1>

        {/* Squiggle underline */}
        <motion.div
          className="flex justify-center mt-4 mb-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          style={{ transformOrigin: "center" }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          <Squiggle />
        </motion.div>

        {/* Subtitle — casual */}
        <motion.p
          className="font-sans text-muted text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          a small archive of a chapter that somehow happened.
        </motion.p>

        {/* Small annotation */}
        <motion.p
          className="font-handwrite text-sage text-sm mt-3 rotate-[-1deg]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          (featuring: you and me)
        </motion.p>
      </div>
    </div>
  );
}

function Squiggle() {
  return (
    <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 5 Q12 1 22 5 Q32 9 42 5 Q52 1 62 5 Q72 9 82 5 Q92 1 102 5 Q112 9 118 5"
        stroke="#c47850"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

function Dots() {
  const dots = [
    { x: "8%", y: "12%" }, { x: "88%", y: "8%" },
    { x: "5%", y: "78%" }, { x: "92%", y: "82%" },
    { x: "15%", y: "45%" }, { x: "85%", y: "55%" },
    { x: "50%", y: "6%" }, { x: "48%", y: "92%" },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2.5" fill="#d8c8b0" opacity="0.45" />
      ))}
    </svg>
  );
}
