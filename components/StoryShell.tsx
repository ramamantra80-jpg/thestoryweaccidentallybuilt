"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "./PageTransition";
import { AudioCtx, type StoryAudio } from "./audio/AudioContext";
import MusicChoiceScreen from "./audio/MusicChoiceScreen";
import FloatingMusicControl from "./audio/FloatingMusicControl";
import NightSky from "./story/NightSky";
import DaySky from "./story/DaySky";
import GoldenSky from "./story/GoldenSky";
import SchoolSky from "./story/SchoolSky";
import ClearSky from "./story/ClearSky";
import IntroMessage from "./scenes/IntroMessage";
import CoverScene from "./scenes/CoverScene";
import TutorialScene from "./scenes/TutorialScene";
import ChapterOneCover from "./scenes/ChapterOneCover";
import Scene1A from "./scenes/Scene1A";
import Scene1B from "./scenes/Scene1B";
import Scene1C from "./scenes/Scene1C";
import ChapterTwoCover from "./scenes/ChapterTwoCover";
import Scene2A from "./scenes/Scene2A";
import Scene2B from "./scenes/Scene2B";
import Scene2C from "./scenes/Scene2C";
import ChapterThreeCover from "./scenes/ChapterThreeCover";
import Scene3A from "./scenes/Scene3A";
import Scene3B from "./scenes/Scene3B";
import Scene3C from "./scenes/Scene3C";
import ChapterFourCover from "./scenes/ChapterFourCover";
import Scene4A from "./scenes/Scene4A";
import Scene4B from "./scenes/Scene4B";
import Scene4C from "./scenes/Scene4C";
import InterstitialGraduation from "./scenes/InterstitialGraduation";
import ChapterFiveCover from "./scenes/ChapterFiveCover";
import Scene5A from "./scenes/Scene5A";
import Scene5B from "./scenes/Scene5B";
import Scene5C from "./scenes/Scene5C";
import PaperPlaneInterstitial from "./scenes/PaperPlaneInterstitial";
import Scene5D from "./scenes/Scene5D";
import { ChapterSixTitle, makeSection } from "./scenes/ChapterSixFinale";
import { chapterSix } from "@/data/storyContent";
import { storyAudioConfig } from "@/data/audioConfig";
import type { ComponentType } from "react";

/** a chapter can run on a shared full-screen backdrop behind its slides */
type Backdrop = "clear" | "school" | "night" | "day" | "golden" | "blank";

interface SceneDef {
  C: ComponentType;
  backdrop?: Backdrop;
}

const SCENES: SceneDef[] = [
  // —— opening flow ——
  { C: IntroMessage },
  { C: CoverScene },
  { C: TutorialScene },
  // —— the soundtrack invitation ——
  { C: MusicChoiceScreen },
  // —— chapter one: the stranger (clear light-blue sky) ——
  { C: ChapterOneCover, backdrop: "clear" },
  { C: Scene1A, backdrop: "clear" },
  { C: Scene1B, backdrop: "clear" },
  { C: Scene1C, backdrop: "clear" },
  // —— chapter two: the school saga (warm daylight) ——
  { C: ChapterTwoCover, backdrop: "school" },
  { C: Scene2A, backdrop: "school" },
  { C: Scene2B, backdrop: "school" },
  { C: Scene2C, backdrop: "school" },
  // —— chapter three: the grind arc (night) ——
  { C: ChapterThreeCover, backdrop: "night" },
  { C: Scene3A, backdrop: "night" },
  { C: Scene3B, backdrop: "night" },
  { C: Scene3C, backdrop: "night" },
  // —— chapter four: the chaos continues (day) ——
  { C: ChapterFourCover, backdrop: "day" },
  { C: Scene4A, backdrop: "day" },
  { C: Scene4B, backdrop: "day" },
  { C: Scene4C, backdrop: "day" },
  // —— transition: internet chaos fades, real life arrives ——
  { C: InterstitialGraduation, backdrop: "golden" },
  // —— chapter five: the graduation arc (golden hour) ——
  { C: ChapterFiveCover, backdrop: "golden" },
  { C: Scene5A, backdrop: "golden" },
  { C: Scene5B, backdrop: "golden" },
  { C: Scene5C, backdrop: "golden" },
  // —— transition: the paper-plane hop to Australia ——
  { C: PaperPlaneInterstitial, backdrop: "golden" },
  { C: Scene5D, backdrop: "golden" },
  // —— chapter six: the blank canvas (golden hour fades to a white page) ——
  //    title screen, then one screen per entry in chapterSix.sections
  { C: ChapterSixTitle, backdrop: "blank" },
  ...chapterSix.sections.map((_, i) => ({
    C: makeSection(i, i === chapterSix.sections.length - 1),
    backdrop: "blank" as Backdrop,
  })),
];

// ── soundtrack volume map ──────────────────────────────────────
const BLANK_START = SCENES.findIndex((s) => s.backdrop === "blank");
// how far into chapter six the music should reach silence — keyed to the
// "the story was real." line so it stays correct if you reorder sections
const FADE_ZERO_OFFSET = (() => {
  const target = storyAudioConfig.fadeToZeroLine.trim().toLowerCase();
  const si = chapterSix.sections.findIndex((sec) =>
    sec.some((line) => line.trim().toLowerCase() === target)
  );
  return si >= 0 ? si + 1 : chapterSix.sections.length; // +1 for the title screen
})();

/** the target background volume for a given scene index */
function volumeForIndex(i: number): number {
  const bd = SCENES[i]?.backdrop;
  if (bd === "golden") return storyAudioConfig.chapterFiveVolume; // chapter 5
  if (bd === "blank") {
    // chapter 6 — ease down to silence by the "story was real" line
    if (FADE_ZERO_OFFSET <= 0) return 0;
    const p = i - BLANK_START;
    return storyAudioConfig.baseVolume * Math.max(0, 1 - p / FADE_ZERO_OFFSET);
  }
  return storyAudioConfig.baseVolume; // chapters 1–4 (and everything else)
}

export default function StoryShell() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = useCallback(() => {
    if (index < SCENES.length - 1) {
      setDirection(1);
      setIndex((i) => i + 1);
    }
  }, [index]);

  const goPrev = useCallback(() => {
    if (index > 0) {
      setDirection(-1);
      setIndex((i) => i - 1);
    }
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // each page starts scrolled to the top
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  // the finale's "read again" link returns to the very beginning
  useEffect(() => {
    const onRestart = () => {
      setDirection(-1);
      setIndex(0);
    };
    window.addEventListener("story:restart", onRestart);
    return () => window.removeEventListener("story:restart", onRestart);
  }, []);

  // tap the left ~40% to go back, the rest to go forward — but never while
  // selecting text or clicking the scrollbar (so scrolling stays free)
  const onSceneClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (window.getSelection()?.toString()) return;
      const w = e.currentTarget.clientWidth;
      if (e.clientX > w - 18) return;
      if (e.clientX < w * 0.4) goPrev();
      else goNext();
    },
    [goPrev, goNext]
  );

  // ── soundtrack ─────────────────────────────────────────────
  const audioRef = useRef<HTMLAudioElement>(null);
  const rampRef = useRef<number | null>(null);
  const [audioChoice, setAudioChoice] = useState<"music" | "silent" | null>(
    null
  );
  const [muted, setMuted] = useState(false);

  const chooseMusic = useCallback(() => {
    setAudioChoice("music");
    const a = audioRef.current;
    if (a) {
      a.volume = 0;
      a.play().catch(() => {}); // inside a click → autoplay is allowed
    }
  }, []);
  const chooseSilent = useCallback(() => setAudioChoice("silent"), []);
  const toggleMute = useCallback(() => setMuted((m) => !m), []);

  // ease the volume toward the page's target whenever the page or mute changes
  useEffect(() => {
    const a = audioRef.current;
    if (!a || audioChoice !== "music") return;
    const base = volumeForIndex(index);
    const target = muted ? 0 : base;
    if (base > 0.0005 && a.paused) a.play().catch(() => {});

    if (rampRef.current) window.clearInterval(rampRef.current);
    const from = a.volume;
    const steps = Math.max(1, Math.round(storyAudioConfig.rampMs / 50));
    let step = 0;
    rampRef.current = window.setInterval(() => {
      step += 1;
      const t = Math.min(1, step / steps);
      a.volume = Math.max(0, Math.min(1, from + (target - from) * t));
      if (t >= 1) {
        if (rampRef.current) window.clearInterval(rampRef.current);
        rampRef.current = null;
        if (base <= 0.0005) a.pause(); // chapter 6 silence → stop the audio
      }
    }, 50);

    return () => {
      if (rampRef.current) window.clearInterval(rampRef.current);
      rampRef.current = null;
    };
  }, [index, audioChoice, muted]);

  const audioValue = useMemo<StoryAudio>(
    () => ({
      choice: audioChoice,
      muted,
      chooseMusic,
      chooseSilent,
      toggleMute,
      next: goNext,
    }),
    [audioChoice, muted, chooseMusic, chooseSilent, toggleMute, goNext]
  );

  const Scene = SCENES[index].C;
  const backdrop = SCENES[index].backdrop;
  const scrollThumb =
    backdrop === "night"
      ? "#5b6273"
      : backdrop === "day"
        ? "#cdb98f"
        : backdrop === "golden"
          ? "#d4b07a"
          : backdrop === "school"
            ? "#d8b88c"
            : backdrop === "clear"
              ? "#b9c8d2"
              : backdrop === "blank"
                ? "#dcdcdc"
                : "#d8c8b0";
  const hintColor = backdrop === "night" ? "#e8dcc2" : "#2c1f14";

  return (
    <AudioCtx.Provider value={audioValue}>
      {storyAudioConfig.enabled && (
        // one shared audio element — lives here so it never remounts between pages
        <audio
          ref={audioRef}
          src={storyAudioConfig.src}
          loop={storyAudioConfig.loop}
          preload="auto"
        />
      )}
      <div className="relative w-full h-full overflow-hidden bg-bg">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
            <div className="relative w-full h-full group">
              {/* one shared backdrop per chapter, fixed behind the scroll so the
                  sky stays put while the card scrolls. keying by backdrop type
                  cross-fades night → day at the chapter 3 → 4 seam. */}
              <AnimatePresence>
                {backdrop && (
                  <motion.div
                    key={backdrop}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {backdrop === "night" ? (
                      <NightSky />
                    ) : backdrop === "day" ? (
                      <DaySky />
                    ) : backdrop === "golden" ? (
                      <GoldenSky />
                    ) : backdrop === "school" ? (
                      <SchoolSky />
                    ) : backdrop === "clear" ? (
                      <ClearSky />
                    ) : (
                      <div className="absolute inset-0 bg-white" />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* the scroll area also handles tap-to-navigate, so wheel/touch
                  scrolling is never blocked by an overlay */}
              <div
                ref={scrollRef}
                onClick={onSceneClick}
                className="story-scroll absolute inset-0 overflow-y-auto overflow-x-hidden flex flex-col"
                style={{ ["--scroll-thumb" as string]: scrollThumb }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <PageTransition key={index} direction={direction}>
                    <Scene />
                  </PageTransition>
                </AnimatePresence>
              </div>

              {/* hover hints — never block scroll or taps */}
              {index > 0 && (
                <div
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"
                  style={{ color: hintColor }}
                >
                  ←
                </div>
              )}
              {index < SCENES.length - 1 && (
                <div
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-20"
                  style={{ color: hintColor }}
                >
                  →
                </div>
              )}

              {/* progress dots */}
              <div className="pointer-events-none absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2 z-20">
                {SCENES.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[3px] rounded-full transition-all duration-500 ease-out ${
                      i === index ? "w-6 bg-terracotta" : "w-[6px] bg-border"
                    }`}
                  />
                ))}
              </div>

              {/* floating mute control — only with music, hidden on chapter six */}
              {audioChoice === "music" && backdrop !== "blank" && (
                <FloatingMusicControl />
              )}
            </div>
        </motion.div>
      </div>
    </AudioCtx.Provider>
  );
}
