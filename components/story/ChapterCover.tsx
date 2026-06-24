"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { ChapterIntro } from "@/data/storyContent";

interface Props {
  intro: ChapterIntro;
  /** the little drawing between the subtitle and the caption */
  children?: ReactNode;
  /** push every reveal back by this many seconds (e.g. to play an intro first) */
  delayBase?: number;
  /**
   * cover mood:
   *  - "paper" (default): cream bg, dark ink text
   *  - "night": transparent bg (shows the night sky), moonlit text
   *  - "day":   transparent bg (shows the day sky), dark ink text
   *  - "golden": transparent bg (shows the golden-hour sky), dark ink text
   */
  theme?: "paper" | "night" | "day" | "golden";
}

/**
 * A reusable chapter intro / cover page. Same look as Chapter 1's cover,
 * but driven by content from data/storyContent.ts.
 */
export default function ChapterCover({
  intro,
  children,
  delayBase = 0,
  theme = "paper",
}: Props) {
  const d = delayBase;
  const bare = theme !== "paper"; // transparent so a chapter backdrop shows
  const night = theme === "night"; // moonlit (light) text
  return (
    <div
      className={`grow min-h-full w-full flex flex-col items-center justify-center px-8 py-8 text-center ${
        bare ? "" : "bg-bg"
      }`}
    >
      {/* taped chapter tag */}
      <motion.div
        className="mb-5 rotate-[-2deg]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: d + 0.15, duration: 0.5 }}
      >
        <span
          className="font-sans text-xs uppercase tracking-[0.25em] text-ink-soft px-3 py-1.5 inline-block"
          style={{ backgroundColor: "#f0d878", opacity: 0.95, borderRadius: 2 }}
        >
          {intro.chapterLabel}
        </span>
      </motion.div>

      {/* title */}
      <motion.h1
        className="font-display leading-[1.05]"
        style={{
          fontSize: "clamp(2.4rem, 10vw, 4rem)",
          color: night ? "#f4ecd8" : "#2c1f14",
        }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: d + 0.32, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {intro.title}
      </motion.h1>

      {/* subtitle */}
      <motion.p
        className="font-handwrite text-xl mt-2 max-w-xs"
        style={{ color: night ? "#e8b48f" : "#c47850" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 0.7, duration: 0.5 }}
      >
        {intro.subtitle}
      </motion.p>

      {/* the chapter-specific doodle */}
      {children && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 1.0, duration: 0.6 }}
        >
          {children}
        </motion.div>
      )}

      {/* caption */}
      <motion.p
        className="font-sans text-sm mt-6 max-w-xs"
        style={{ color: night ? "#c8bca8" : "#9a8878" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 1.4, duration: 0.6 }}
      >
        {intro.caption}
      </motion.p>
    </div>
  );
}
