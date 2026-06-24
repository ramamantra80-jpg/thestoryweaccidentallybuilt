"use client";

import { motion } from "framer-motion";
import Stickman from "../story/Stickman";
import { chapterSix } from "@/data/storyContent";

// pure black on a pure white page — a blank canvas, one quiet screen at a time
const INK = "#111111";

// all pacing lives in the data file (chapterSix.timing) so it's easy to tune
const t = chapterSix.timing;

function BlankScreen({
  title,
  subtitle,
  lines = [],
  ending = false,
}: {
  title?: string;
  subtitle?: string;
  lines?: string[];
  ending?: boolean;
}) {
  const endingDelay = t.firstLineDelay + lines.length * t.lineGap + t.endingPause;

  return (
    <div
      className="grow min-h-full w-full flex flex-col items-center justify-center px-8 py-16 text-center"
      style={{ color: INK }}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: t.titleDelay,
            duration: t.titleDuration,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-neutral-400 mb-3">
            {chapterSix.chapterLabel}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl" style={{ color: INK }}>
            {title}
          </h1>
          {subtitle && (
            <p className="font-reading italic text-neutral-400 text-base mt-2">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {lines.length > 0 && (
        <div className="flex flex-col gap-3 max-w-sm">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="font-reading text-lg sm:text-xl leading-relaxed"
              style={{ color: INK }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: t.firstLineDelay + i * t.lineGap,
                duration: t.lineDuration,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      )}

      {ending && (
        <>
          {/* two little figures, a bit apart */}
          <motion.div
            className="mt-14 flex items-end gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: endingDelay, duration: t.endingDuration }}
          >
            <Stickman pose="idle" color={INK} className="w-7 h-auto" />
            <Stickman pose="idle" hair flip color={INK} className="w-7 h-auto" />
          </motion.div>

          {/* a gentle option, not a CTA */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation(); // don't let the tap also flip a page
              window.dispatchEvent(new CustomEvent("story:restart"));
            }}
            className="mt-12 font-sans text-sm text-neutral-400 hover:text-neutral-700 underline underline-offset-4 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: endingDelay + t.replayPause, duration: t.lineDuration }}
          >
            {chapterSix.replayLabel}
          </motion.button>
        </>
      )}
    </div>
  );
}

// the title screen
export function ChapterSixTitle() {
  return <BlankScreen title={chapterSix.title} subtitle={chapterSix.subtitle} />;
}

// one screen per entry in chapterSix.sections — the last one closes with the
// two stick figures. built from a factory so adding / splitting screens only
// means editing the `sections` array in the data file (no new components).
export function makeSection(index: number, ending = false) {
  function ChapterSixSection() {
    return <BlankScreen lines={chapterSix.sections[index] ?? []} ending={ending} />;
  }
  ChapterSixSection.displayName = `ChapterSixSection${index + 1}`;
  return ChapterSixSection;
}
