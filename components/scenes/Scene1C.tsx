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

export default function Scene1C() {
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
            <PanelLabel badge="1C" title="The First Discoveries" tint="yellow" />
          </motion.div>

          <motion.p
            className="font-reading text-ink text-base leading-relaxed mt-4 mb-5"
            {...fade(1.3)}
          >
            names, usual questions... slowly finding out{" "}
            <Highlight color="yellow">who she is</Highlight>.
          </motion.p>

          {/* her world vs my world */}
          <motion.div className="flex gap-3 mb-5" {...fade(2.4)}>
            <div className="flex-1 text-center">
              <p className="font-handwrite text-terracotta text-base mb-1">
                her world
              </p>
              <div
                className="rounded-xl py-3"
                style={{ backgroundColor: "rgba(240,196,196,0.35)" }}
              >
                <div className="text-2xl leading-tight">🍰🍪</div>
                <p className="font-handwrite text-ink-soft text-sm mt-1">
                  i love baking!
                </p>
              </div>
            </div>

            <div className="flex-1 text-center">
              <p className="font-handwrite text-dusty-blue text-base mb-1">
                my world
              </p>
              <div
                className="rounded-xl py-3"
                style={{ backgroundColor: "rgba(138,172,190,0.28)" }}
              >
                <div className="text-2xl leading-tight">📚👨🏻‍💻</div>
                <p className="font-handwrite text-ink-soft text-sm mt-1">
                  i read books!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="font-handwrite text-muted text-base mb-3"
            {...fade(3.5)}
          >
            and then... i just remembered:
          </motion.p>

          {/* the pizza confession */}
          <motion.div
            className="flex items-end justify-between gap-2"
            {...fade(4.5)}
          >
            <div className="flex flex-col items-center w-[44%]">
              <SpeechBubble color="pink" className="mb-2 text-xs">
                i made red velvet cookies
              </SpeechBubble>
              <Stickman pose="idle" hair className="w-10 h-auto" />
            </div>
            <div className="flex flex-col items-center w-[48%]">
              <SpeechBubble color="blue" className="mb-2 text-xs">
                i turned a pizza into a cracker.
              </SpeechBubble>
              <Stickman pose="shrug" flip className="w-11 h-auto" />
            </div>
          </motion.div>
        </NotebookPaper>

        {/* fun fact sticky */}
        <motion.div
          className="absolute -bottom-5 left-2"
          initial={{ opacity: 0, y: 10, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ delay: 5.2, duration: 0.6 }}
        >
          <StickyNote color="sage" rotate={-3} className="max-w-[180px]">
            <p className="font-handwrite text-ink-soft text-sm leading-snug">
              the pizza never recovered.
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>
    </div>
  );
}
