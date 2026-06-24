"use client";

import { motion } from "framer-motion";
import ChapterCover from "../story/ChapterCover";
import Stickman from "../story/Stickman";
import {
  LaptopDoodle,
  BugDoodle,
  PaperDoodle,
  CoffeeDoodle,
  ClockDoodle,
  WarningDoodle,
  WolfDoodle,
} from "../story/Doodles";
import { chapterThree } from "@/data/storyContent";

const MOONLIT = "#e8dcc2";

// the opening strike plays exactly once on mount (no repeat)
const strikeBase = { duration: 0.9, ease: "linear" as const };

// a faint distant flicker afterward, so the storm keeps rumbling while you read
const ambientTransition = {
  duration: 5,
  times: [0, 0.5, 0.54, 0.6, 0.7],
  repeat: Infinity,
  repeatDelay: 2.6,
  delay: 1.8,
  ease: "linear" as const,
};

export default function ChapterThreeCover() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* the night sky is shared across the chapter (rendered in StoryShell);
          this cover only adds the lightning + the cast on top of it */}

      {/* cover content sits above the sky, below the flashes */}
      <div className="relative z-10 w-full h-full">
        <ChapterCover intro={chapterThree.intro} delayBase={0.85} theme="night">
          <div
            className="relative flex flex-col items-center gap-4"
            style={{ color: MOONLIT }}
          >
            {/* the storm row: two grinders flanking a howling wolf */}
            <div className="flex items-end justify-center gap-5">
              {/* me + laptop + a bug */}
              <div className="relative">
                <Stickman pose="idle" color={MOONLIT} className="w-11 h-auto" />
                <LaptopDoodle className="absolute -right-4 top-7 w-7" />
                <BugDoodle className="absolute -left-3 top-2 w-4 text-terracotta" />
              </div>

              {/* the wolf — bigger, the chapter mascot */}
              <WolfDoodle className="w-16" />

              {/* her + papers */}
              <div className="relative">
                <Stickman
                  pose="idle"
                  hair
                  flip
                  color={MOONLIT}
                  className="w-11 h-auto"
                />
                <PaperDoodle className="absolute -right-3 top-3 w-4 rotate-12" />
                <PaperDoodle className="absolute -left-3 top-6 w-4 -rotate-12" />
              </div>
            </div>

            {/* small icon scatter */}
            <div className="flex items-center gap-5">
              <CoffeeDoodle className="w-6" />
              <ClockDoodle className="w-6" />
              <WarningDoodle className="w-6 text-terracotta" />
            </div>
          </div>
        </ChapterCover>
      </div>

      {/* ── distant ambient flicker (loops gently after the strike) ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20"
        style={{ backgroundColor: "#cdd9ec", mixBlendMode: "screen" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.2, 0.04, 0] }}
        transition={ambientTransition}
      />

      {/* ── the opening strike: full-screen flash, once ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30"
        style={{ backgroundColor: "#dce6f4", mixBlendMode: "screen" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.95, 0.12, 0.82, 0] }}
        transition={{ ...strikeBase, times: [0, 0.1, 0.2, 0.32, 0.62] }}
      />

      {/* ── the bolt itself: a big jagged streak down the screen ── */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-40 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.25, 0.95, 0] }}
        transition={{ ...strikeBase, times: [0, 0.08, 0.18, 0.28, 0.52] }}
      >
        <svg
          viewBox="0 0 300 600"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-auto"
          style={{ filter: "drop-shadow(0 0 14px #cdd9ec)" }}
        >
          <path
            d="M168 -20 L120 170 L178 182 L116 340 L168 352 L96 620"
            stroke="#fbfcff"
            strokeWidth={7}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M116 340 L66 440 L108 452 L82 560"
            stroke="#fbfcff"
            strokeWidth={5}
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}
