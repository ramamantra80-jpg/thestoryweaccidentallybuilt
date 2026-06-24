"use client";

import { motion } from "framer-motion";
import { MusicNote } from "../story/Doodles";
import { useStoryAudio } from "./AudioContext";
import { storyAudioConfig as cfg } from "@/data/audioConfig";

// a tiny handmade pill in the corner — tap to mute / unmute. nothing fancy.
export default function FloatingMusicControl() {
  const { muted, toggleMute } = useStoryAudio();

  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        toggleMute();
      }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      aria-label={muted ? "unmute music" : "mute music"}
      className="absolute bottom-5 left-4 z-30 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
      style={{
        backgroundColor: "rgba(253,250,243,0.82)",
        border: "1.5px solid #e0d0b8",
        boxShadow: "1px 2px 6px rgba(44,31,20,0.10)",
        backdropFilter: "blur(2px)",
      }}
    >
      <span
        className="relative text-ink-soft"
        style={{ opacity: muted ? 0.45 : 1 }}
      >
        <MusicNote className="w-3.5" />
        {muted && (
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] rotate-45"
            style={{ height: 1.5, backgroundColor: "#c47850" }}
          />
        )}
      </span>
      <span className="font-handwrite text-ink-soft text-xs leading-none">
        {muted ? cfg.mutedLabel : cfg.onLabel}
      </span>
    </motion.button>
  );
}
