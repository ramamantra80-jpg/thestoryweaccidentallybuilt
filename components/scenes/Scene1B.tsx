"use client";

import { motion } from "framer-motion";
import NotebookPaper from "../story/NotebookPaper";
import PanelLabel from "../story/PanelLabel";
import Stickman from "../story/Stickman";
import StickyNote from "../story/StickyNote";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
});

const pop = (delay: number) => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] as const },
});

export default function Scene1B() {
  return (
    <div className="flex items-center justify-center w-full h-full px-5 py-8 bg-bg">
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <NotebookPaper>
          <motion.div {...fade(0.3)}>
            <PanelLabel badge="1B" title="The Stranger" tint="blue" />
          </motion.div>

          <motion.p
            className="font-reading text-ink text-base leading-relaxed mt-4 mb-3"
            {...fade(1.3)}
          >
            at first, normal convos. names, school, basic stuff.
          </motion.p>

          <motion.p
            className="font-handwrite text-muted text-lg"
            {...fade(2.4)}
          >
            then slowly...
          </motion.p>

          {/* chaos floating around a stickman */}
          <div className="relative h-36 my-2">
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 bottom-0"
              {...fade(2.8)}
            >
              <Stickman pose="happy" hair className="w-14 h-auto" />
            </motion.div>

            <motion.span className="absolute left-2 top-6 text-2xl" {...pop(3.0)}>
              🤪
            </motion.span>
            <motion.span className="absolute left-10 top-0 text-xl" {...pop(3.15)}>
              😎
            </motion.span>
            <motion.span className="absolute right-12 top-1 text-2xl" {...pop(3.3)}>
              🦈
            </motion.span>
            <motion.span className="absolute right-1 top-10 text-2xl" {...pop(3.45)}>
              🧅
            </motion.span>
            <motion.span className="absolute left-6 bottom-3 text-xl" {...pop(3.6)}>
              🧽
            </motion.span>
            <motion.span
              className="absolute right-6 bottom-5 font-handwrite text-muted text-sm rotate-6"
              {...pop(3.75)}
            >
              ??
            </motion.span>
          </div>

          <motion.p
            className="font-reading text-ink text-base leading-relaxed"
            {...fade(4.5)}
          >
            the weirdness appeared. and somewhere along the way she got more
            unpredictable.
          </motion.p>
        </NotebookPaper>

        {/* the contrast — the key line */}
        <motion.div
          className="absolute -bottom-7 right-0"
          initial={{ opacity: 0, y: 12, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ delay: 5.4, duration: 0.6 }}
        >
          <StickyNote color="pink" rotate={2} withTape tapeColor="pink" className="max-w-[230px]">
            <p className="font-handwrite text-ink-soft text-sm leading-snug">
              i thought she was this serious, quiet girl. turns out one of the
              most unpredictable people i know 🤣
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>
    </div>
  );
}
