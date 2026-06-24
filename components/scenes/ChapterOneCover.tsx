"use client";

import { motion } from "framer-motion";
import Stickman from "../story/Stickman";

export default function ChapterOneCover() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 bg-bg text-center">
      {/* taped chapter tag */}
      <motion.div
        className="mb-5 rotate-[-2deg]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <span
          className="font-sans text-xs uppercase tracking-[0.25em] text-ink-soft px-3 py-1.5 inline-block"
          style={{ backgroundColor: "#f0d878", opacity: 0.95, borderRadius: 2 }}
        >
          chapter one
        </span>
      </motion.div>

      {/* title */}
      <motion.h1
        className="font-display text-ink leading-[1.05]"
        style={{ fontSize: "clamp(2.8rem, 11vw, 4.4rem)" }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        The Stranger
      </motion.h1>

      {/* subtitle */}
      <motion.p
        className="font-handwrite text-terracotta text-xl mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        (when we first talked)
      </motion.p>

      {/* two strangers, a dotted line between */}
      <motion.div
        className="flex items-center justify-center gap-1 mt-9"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <Stickman pose="idle" className="w-12 h-auto" />
        <svg width="70" height="20" viewBox="0 0 70 20" fill="none" className="opacity-50">
          <path
            d="M4 10 H66"
            stroke="#9a8878"
            strokeWidth="1.6"
            strokeDasharray="4 5"
            strokeLinecap="round"
          />
        </svg>
        <Stickman pose="idle" hair className="w-12 h-auto" />
      </motion.div>

      {/* caption */}
      <motion.p
        className="font-sans text-muted text-sm mt-8 max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        where a random referral accidentally became lore.
      </motion.p>
    </div>
  );
}
