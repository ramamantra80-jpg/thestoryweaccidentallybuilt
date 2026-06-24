"use client";

import { motion } from "framer-motion";
import { StickerDoodle, QuestionDoodle, OnionDoodle } from "../story/Doodles";
import { toGraduation } from "@/data/transitions";

// the quiet bridge from chapter four's internet chaos into real life:
// the doodles drift up and fade, then two calm lines settle in.
export default function InterstitialGraduation() {
  return (
    <div className="grow min-h-full w-full flex flex-col items-center justify-center px-8 text-center">
      {/* the chaos, floating away */}
      <motion.div
        aria-hidden
        className="flex items-center gap-5 mb-8"
        initial={{ opacity: 0.7, y: 0 }}
        animate={{ opacity: 0, y: -44 }}
        transition={{ delay: 0.4, duration: 2.4, ease: "easeOut" }}
      >
        <StickerDoodle className="w-6 text-warm-yellow" />
        <QuestionDoodle className="w-5 text-dusty-blue" />
        <OnionDoodle className="w-6 text-terracotta" />
      </motion.div>

      {/* reality, settling in */}
      <div className="flex flex-col gap-3">
        {toGraduation.map((line, i) => (
          <motion.p
            key={i}
            className="font-reading text-ink text-xl sm:text-2xl leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 1.7, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
