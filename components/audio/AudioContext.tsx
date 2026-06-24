"use client";

import { createContext, useContext } from "react";

/** localStorage keys so the choice + mute survive a refresh */
export const AUDIO_STORAGE = {
  choice: "sw_audio_choice",
  muted: "sw_audio_muted",
} as const;

export type AudioChoice = "music" | "silent" | null;

export interface StoryAudio {
  /** what the reader picked on the music screen (null = not asked yet) */
  choice: AudioChoice;
  muted: boolean;
  chooseMusic: () => void;
  chooseSilent: () => void;
  toggleMute: () => void;
  /** advance to the next page (used by the music-choice screen) */
  next: () => void;
}

export const AudioCtx = createContext<StoryAudio | null>(null);

export function useStoryAudio(): StoryAudio {
  const ctx = useContext(AudioCtx);
  if (!ctx) {
    throw new Error("useStoryAudio must be used inside the story shell");
  }
  return ctx;
}
