"use client";

import { motion } from "framer-motion";
import NotebookPaper from "../story/NotebookPaper";
import PanelLabel from "../story/PanelLabel";
import Highlight from "../story/Highlight";
import Stickman from "../story/Stickman";
import SpeechBubble from "../story/SpeechBubble";
import StickyNote from "../story/StickyNote";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Scene1A() {
  return (
    <div className="flex items-center justify-center w-full h-full px-5 py-8">
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <NotebookPaper>
          <motion.div {...fade(0.3)}>
            <PanelLabel badge="1A" title="The Recommendation" tint="sage" />
          </motion.div>

          <motion.p
            className="font-handwrite text-muted text-base mt-2 mb-4"
            {...fade(0.7)}
          >
            where it started
          </motion.p>

          <motion.p
            className="font-reading text-ink text-base leading-relaxed mb-3"
            {...fade(1.6)}
          >
            i asked Ben if he knew someone <Highlight>kind</Highlight>,{" "}
            <Highlight color="yellow">smart</Highlight>, {" "}
            <Highlight color="sage">good vibes</Highlight>, and alligned with my{" "}
            <Highlight color="sage">criteria</Highlight>.
          </motion.p>

          <motion.p
            className="font-reading text-ink text-base leading-relaxed"
            {...fade(2.7)}
          >
            turns out he pointed me to someone from{" "}
            <Highlight color="pink">my old school</Highlight>.
          </motion.p>

          {/* the exchange */}
          <motion.div
            className="flex items-end justify-between gap-2 mt-6 mb-5"
            {...fade(3.8)}
          >
            <div className="flex flex-col items-center w-[44%]">
              <SpeechBubble className="mb-2 text-sm">
                know anyone gud?
              </SpeechBubble>
              <Stickman pose="idle" className="w-11 h-auto" />
            </div>

            <div className="flex flex-col items-center w-[44%]">
              <SpeechBubble color="yellow" className="mb-2 text-sm">
                yeah. her 
              </SpeechBubble>
              <Stickman pose="point" className="w-12 h-auto" />
              <span className="font-handwrite text-muted text-xs mt-0.5">
                Ben
              </span>
            </div>
          </motion.div>

          {/* punchline box */}
          <motion.div
            className="rounded-xl p-3"
            style={{ border: "2px dashed #d8c8b0" }}
            {...fade(4.8)}
          >
            <p className="font-handwrite text-ink text-lg leading-snug">
              same school but{" "}
              <span className="text-terracotta">never met. not once.</span> 🤯
            </p>
          </motion.div>
        </NotebookPaper>

        {/* plot twist sticky */}
        <motion.div
          className="absolute -bottom-5 -left-2"
          initial={{ opacity: 0, y: 10, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -4 }}
          transition={{ delay: 5.5, duration: 0.6 }}
        >
          <StickyNote color="blue" rotate={-4} className="max-w-[150px]">
            <p className="font-handwrite text-ink-soft text-sm leading-snug">
              it actually began with a referral
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>
    </div>
  );
}
