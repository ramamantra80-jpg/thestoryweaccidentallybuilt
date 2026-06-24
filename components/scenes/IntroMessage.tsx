"use client";

import { motion } from "framer-motion";

const paragraphs = [
  { id: "greeting", text: "Hi Marv,", style: "greeting" },
  {
    id: "p1",
    text: "Somewhere along the IB, stickers, baking, surfing dogs, Patrick, sonion, and Australia...",
    style: "body",
  },
  {
    id: "p2",
    text: "we accidentally created enough lore for a story.",
    style: "body",
  },
  { id: "p3", text: "So yeah, I made one.", style: "body" },
  { id: "signoff", text: "enjoy", style: "signoff" },
];

export default function IntroMessage() {
  return (
    <div className="flex items-center justify-center w-full h-full px-5 py-8 bg-bg">
      <motion.div
        className="relative w-full max-w-sm"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.4, 1, 0.36, 1] }}
      >
        {/* Washi tape strip at top */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-sm rotate-[-1deg] z-10"
          style={{
            backgroundColor: "#b8d4c4",
            opacity: 0.85,
          }}
        />

        {/* Card */}
        <div
          className="rounded-2xl overflow-hidden relative"
          style={{
            backgroundColor: "#fdfaf3",
            border: "1.5px solid #e0d0b8",
            boxShadow: "4px 5px 0px #e0c8a0",
          }}
        >
          {/* Ring holes column */}
          <div
            className="absolute left-0 top-0 bottom-0 w-9 flex flex-col justify-evenly items-center"
            style={{ borderRight: "1.5px solid #e8dcc8" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-[11px] h-[11px] rounded-full"
                style={{
                  border: "1.5px solid #d0c0a8",
                  backgroundColor: "#f4ede0",
                }}
              />
            ))}
          </div>

          {/* Note content */}
          <div className="pl-12 pr-6 py-7">
            {paragraphs.map((p, i) => (
              <motion.p
                key={p.id}
                className={`font-reading text-ink leading-relaxed ${
                  p.style === "greeting"
                    ? "text-xl mb-5"
                    : p.style === "signoff"
                    ? "text-lg mt-5"
                    : "text-base mb-4"
                }`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.9 + i * 1.3,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {p.text}
              </motion.p>
            ))}

            {/* Small handwrite annotation */}
            <motion.p
              className="font-handwrite text-terracotta text-sm mt-1 -rotate-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7.8, duration: 0.7 }}
            >
               yes, this is random
            </motion.p>

            {/* Doodle */}
            <motion.div
              className="mt-5"
              style={{ color: "#9a8878", opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 8.6, duration: 1.0 }}
            >
              <DoodleRow />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DoodleRow() {
  return (
    <svg
      viewBox="0 0 220 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[190px]"
    >
      {/* Stick figure */}
      <circle cx="22" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="22" y1="20" x2="22" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="30" x2="10" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="30" x2="34" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="44" x2="14" y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="44" x2="30" y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Dashed trail */}
      <path d="M 42 32 Q 80 8 122 32 Q 158 52 198 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" strokeLinecap="round" />
      {/* Cookie */}
      <circle cx="96" cy="52" r="6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="94" cy="50" r="1" fill="currentColor" />
      <circle cx="97" cy="53" r="1" fill="currentColor" />
      <circle cx="94" cy="54" r="0.8" fill="currentColor" />
      {/* Globe */}
      <circle cx="185" cy="50" r="8" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="185" cy="50" rx="3.5" ry="8" stroke="currentColor" strokeWidth="1" />
      <line x1="177" y1="50" x2="193" y2="50" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
