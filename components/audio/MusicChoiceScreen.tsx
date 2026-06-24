"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MusicNote } from "../story/Doodles";
import { useStoryAudio, AUDIO_STORAGE } from "./AudioContext";
import { storyAudioConfig as cfg } from "@/data/audioConfig";

// A quiet invitation, not a feature: "before you continue, here's the
// soundtrack for the memory."
export default function MusicChoiceScreen() {
  const audio = useStoryAudio();

  // already chosen on a previous visit? render nothing — the shell glides past
  const [alreadyChosen] = useState(() => {
    try {
      return (
        typeof window !== "undefined" &&
        localStorage.getItem(AUDIO_STORAGE.choice) !== null
      );
    } catch {
      return false;
    }
  });

  const pick = (withMusic: boolean) => (e: React.MouseEvent) => {
    e.stopPropagation(); // don't let the tap also flip a page
    if (withMusic) audio.chooseMusic();
    else audio.chooseSilent();
    audio.next();
  };

  if (alreadyChosen) return null;

  return (
    <div className="grow min-h-full w-full flex flex-col items-center justify-center px-8 text-center bg-bg">
      <motion.div
        className="flex flex-col items-center gap-7 max-w-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="text-terracotta"
          initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <MusicNote className="w-9" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="font-display text-ink text-2xl leading-snug">
            {cfg.choiceTitle}
          </h1>
          <p className="font-handwrite text-muted text-lg">{cfg.choiceSubtitle}</p>
        </div>

        <div className="flex flex-col items-center gap-3 w-full">
          <button
            onClick={pick(true)}
            className="w-full max-w-[220px] bg-ink text-card font-sans text-sm font-medium py-3 rounded-xl tracking-wide hover:bg-ink-soft active:scale-[0.98] transition-all duration-150"
          >
            {cfg.playLabel}
          </button>
          <button
            onClick={pick(false)}
            className="font-handwrite text-muted text-lg hover:text-ink-soft transition-colors underline underline-offset-4 decoration-border"
          >
            {cfg.silentLabel}
          </button>
        </div>

        <p className="font-handwrite text-muted text-sm">{cfg.note}</p>
      </motion.div>
    </div>
  );
}
