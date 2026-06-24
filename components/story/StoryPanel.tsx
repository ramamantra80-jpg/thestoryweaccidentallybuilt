"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import NotebookPaper from "./NotebookPaper";
import PanelLabel from "./PanelLabel";
import StickyNote from "./StickyNote";
import type { StoryPage } from "@/data/storyContent";

// Reading-pace timing — matches the Chapter 1 panels.
// Tweak these two numbers to speed up / slow down every data-driven page.
const BODY_START = 1.3; // when the first body line appears
const BODY_STEP = 0.85; // gap between body lines

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
});

interface Props {
  page: StoryPage;
  /** the page-specific drawing, dropped in below the body text */
  visual?: ReactNode;
  /** override when the visual fades in (seconds) */
  visualDelay?: number;
  /** drop the cream background so a chapter backdrop (night / day sky) shows */
  bare?: boolean;
}

/**
 * The shared tap-through story page: notebook card with a labelled header,
 * staggered body lines, an optional drawing, a caption, and a sticky note.
 * All text comes from `page` (see data/storyContent.ts).
 *
 * Grows to fill the shell's scroll area: it centres when it fits and simply
 * gets taller (and scrollable) when a page has a lot on it.
 */
export default function StoryPanel({ page, visual, visualDelay, bare = false }: Props) {
  const bodyEnd = BODY_START + Math.max(0, page.body.length - 1) * BODY_STEP;
  const vDelay = visualDelay ?? bodyEnd + 0.5;
  const captionDelay = vDelay + (visual ? 0.5 : 0.25);
  const stickyDelay = captionDelay + 0.4;
  const right = page.stickySide === "right";

  return (
    <div
      className={`relative grow min-h-full w-full flex flex-col items-center justify-center px-5 py-6 ${
        bare ? "" : "bg-bg"
      }`}
    >
      <motion.div
        className="relative z-10 w-full max-w-md sm:max-w-lg"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <NotebookPaper>
          <motion.div {...fade(0.3)}>
            <PanelLabel badge={page.label} title={page.title} tint={page.tint} />
          </motion.div>

          {page.eyebrow && (
            <motion.p
              className="font-handwrite text-muted text-base mt-1 mb-2"
              {...fade(0.7)}
            >
              {page.eyebrow}
            </motion.p>
          )}

          <div className={page.eyebrow ? "" : "mt-3"}>
            {page.body.map((line, i) => (
              <motion.p
                key={i}
                className="font-reading text-ink text-base leading-normal mb-1.5"
                {...fade(BODY_START + i * BODY_STEP)}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {visual && (
            <motion.div {...fade(vDelay)}>
              {/* divider keeps the drawing from crowding the text */}
              <div
                className="mt-2.5 mb-2.5 mx-1 border-t border-dashed"
                style={{ borderColor: "#e0d0b8" }}
              />
              <div className="flex justify-center">{visual}</div>
            </motion.div>
          )}

          {page.caption && (
            <motion.p
              className="font-handwrite text-muted text-center text-base mt-3"
              {...fade(captionDelay)}
            >
              {page.caption}
            </motion.p>
          )}

          {/* Sticky note lives in the bottom corner of the page, in flow, so it
              centres with the rest and can never cover the caption. */}
          {page.stickyNote && (
            <motion.div
              className={`mt-3 flex ${right ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 8, rotate: right ? 6 : -7 }}
              animate={{ opacity: 1, y: 0, rotate: right ? 3 : -4 }}
              transition={{ delay: stickyDelay, duration: 0.6 }}
            >
              <StickyNote
                color={page.stickyColor ?? "yellow"}
                rotate={right ? 3 : -4}
                className="max-w-[230px]"
              >
                <p className="font-handwrite text-ink-soft text-sm leading-snug">
                  {page.stickyNote}
                </p>
              </StickyNote>
            </motion.div>
          )}
        </NotebookPaper>
      </motion.div>
    </div>
  );
}
