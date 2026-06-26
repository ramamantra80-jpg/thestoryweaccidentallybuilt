"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { track } from "@vercel/analytics";
import PageTransition from "./PageTransition";
import { AudioCtx, AUDIO_STORAGE, type StoryAudio } from "./audio/AudioContext";
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
  /** label sent to analytics so you can see how far each reader got */
  name: string;
}

const SCENES: SceneDef[] = [
  // —— opening flow ——
  { C: IntroMessage, name: "Intro" },
  { C: CoverScene, name: "Cover" },
  { C: TutorialScene, name: "Tutorial" },
  // —— the soundtrack invitation ——
  { C: MusicChoiceScreen, name: "Music choice" },
  // —— chapter one: the stranger (clear light-blue sky) ——
  { C: ChapterOneCover, backdrop: "clear", name: "Ch1 cover" },
  { C: Scene1A, backdrop: "clear", name: "Ch1A" },
  { C: Scene1B, backdrop: "clear", name: "Ch1B" },
  { C: Scene1C, backdrop: "clear", name: "Ch1C" },
  // —— chapter two: the school saga (warm daylight) ——
  { C: ChapterTwoCover, backdrop: "school", name: "Ch2 cover" },
  { C: Scene2A, backdrop: "school", name: "Ch2A" },
  { C: Scene2B, backdrop: "school", name: "Ch2B" },
  { C: Scene2C, backdrop: "school", name: "Ch2C" },
  // —— chapter three: the grind arc (night) ——
  { C: ChapterThreeCover, backdrop: "night", name: "Ch3 cover" },
  { C: Scene3A, backdrop: "night", name: "Ch3A" },
  { C: Scene3B, backdrop: "night", name: "Ch3B" },
  { C: Scene3C, backdrop: "night", name: "Ch3C" },
  // —— chapter four: the chaos continues (day) ——
  { C: ChapterFourCover, backdrop: "day", name: "Ch4 cover" },
  { C: Scene4A, backdrop: "day", name: "Ch4A" },
  { C: Scene4B, backdrop: "day", name: "Ch4B" },
  { C: Scene4C, backdrop: "day", name: "Ch4C" },
  // —— transition: internet chaos fades, real life arrives ——
  { C: InterstitialGraduation, backdrop: "golden", name: "Ch5 intro" },
  // —— chapter five: the graduation arc (golden hour) ——
  { C: ChapterFiveCover, backdrop: "golden", name: "Ch5 cover" },
  { C: Scene5A, backdrop: "golden", name: "Ch5A" },
  { C: Scene5B, backdrop: "golden", name: "Ch5B" },
  { C: Scene5C, backdrop: "golden", name: "Ch5C" },
  // —— transition: the paper-plane hop to Australia ——
  { C: PaperPlaneInterstitial, backdrop: "golden", name: "Ch5 plane" },
  { C: Scene5D, backdrop: "golden", name: "Ch5D" },
  // —— chapter six: the blank canvas (golden hour fades to a white page) ——
  //    title screen, then one screen per entry in chapterSix.sections
  { C: ChapterSixTitle, backdrop: "blank", name: "Ch6 title" },
  ...chapterSix.sections.map((_, i) => ({
    C: makeSection(i, i === chapterSix.sections.length - 1),
    backdrop: "blank" as Backdrop,
    name: `Ch6 line ${i + 1}`,
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

/** the target background volume for a given scene index (per chapter) */
function volumeForIndex(i: number): number {
  const v = storyAudioConfig.volumes;
  const bd = SCENES[i]?.backdrop;
  switch (bd) {
    case "clear":
      return v.chapter1;
    case "school":
      return v.chapter2;
    case "night":
      return v.chapter3;
    case "day":
      return v.chapter4;
    case "golden":
      return v.chapter5;
    case "blank": {
      // chapter 6 — ease from chapter five's level down to silence by the
      // "the story was real." line, then stay silent
      if (FADE_ZERO_OFFSET <= 0) return 0;
      const p = i - BLANK_START;
      return v.chapter5 * Math.max(0, 1 - p / FADE_ZERO_OFFSET);
    }
    default:
      return v.opening; // intro / cover / tutorial / music screen
  }
}

// the music-choice screen's position, so we can auto-skip it once chosen
const MUSIC_INDEX = SCENES.findIndex((s) => s.C === MusicChoiceScreen);

function lsGet(key: string): string | null {
  try {
    return typeof window !== "undefined" ? localStorage.getItem(key) : null;
  } catch {
    return null;
  }
}
function lsSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // private mode etc. — fine, we just won't remember
  }
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

  // analytics: log which part the reader is on. each part is its own event so
  // the dashboard reads like a funnel — Ch1 high, later chapters lower
  useEffect(() => {
    track(SCENES[index].name);
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

  // ── soundtrack (Web Audio → click-free, Spotify-style fades) ──
  const audioRef = useRef<HTMLAudioElement>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const builtRef = useRef(false);
  const fallbackRampRef = useRef<number | null>(null);
  const pauseTimerRef = useRef<number | null>(null);
  const [audioChoice, setAudioChoice] = useState<"music" | "silent" | null>(
    null
  );
  const [muted, setMuted] = useState(false);

  // build the Web Audio graph once (audio → gain → speakers)
  const ensureGraph = useCallback(() => {
    if (builtRef.current) return;
    const a = audioRef.current;
    if (!a) return;
    try {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) return; // no Web Audio → fall back to element.volume
      const ctx = new Ctor();
      const source = ctx.createMediaElementSource(a);
      const gain = ctx.createGain();
      gain.gain.value = 0;
      source.connect(gain).connect(ctx.destination);
      ctxRef.current = ctx;
      gainRef.current = gain;
      a.volume = 1; // from here, volume is controlled by the gain node
      builtRef.current = true;
    } catch {
      // leave builtRef false → smootherstep fallback on a.volume
    }
  }, []);

  // glide to a target volume — sample-accurate via Web Audio, eased fallback
  const rampTo = useCallback((target: number, ms: number) => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    const clamped = Math.max(0, Math.min(1, target));
    if (ctx && gain) {
      const now = ctx.currentTime;
      const g = gain.gain;
      g.cancelScheduledValues(now);
      g.setValueAtTime(g.value, now);
      g.linearRampToValueAtTime(clamped, now + Math.max(0.05, ms / 1000));
      return;
    }
    const a = audioRef.current;
    if (!a) return;
    if (fallbackRampRef.current) window.clearInterval(fallbackRampRef.current);
    const from = a.volume;
    const steps = Math.max(1, Math.round(ms / 40));
    let step = 0;
    fallbackRampRef.current = window.setInterval(() => {
      step += 1;
      const t = Math.min(1, step / steps);
      const eased = t * t * (3 - 2 * t); // smootherstep — no zipper
      a.volume = Math.max(0, Math.min(1, from + (clamped - from) * eased));
      if (t >= 1 && fallbackRampRef.current) {
        window.clearInterval(fallbackRampRef.current);
        fallbackRampRef.current = null;
      }
    }, 40);
  }, []);

  const chooseMusic = useCallback(() => {
    setAudioChoice("music");
    lsSet(AUDIO_STORAGE.choice, "music");
    ensureGraph();
    ctxRef.current?.resume().catch(() => {});
    const a = audioRef.current;
    if (a) {
      if (!builtRef.current) a.volume = 0; // fallback path starts silent
      a.play().catch(() => {}); // inside a click → autoplay is allowed
    }
  }, [ensureGraph]);
  const chooseSilent = useCallback(() => {
    setAudioChoice("silent");
    lsSet(AUDIO_STORAGE.choice, "silent");
  }, []);
  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      lsSet(AUDIO_STORAGE.muted, next ? "1" : "0");
      return next;
    });
  }, []);

  // restore the saved choice / mute on mount so a refresh doesn't re-ask
  useEffect(() => {
    const c = lsGet(AUDIO_STORAGE.choice);
    if (c === "music" || c === "silent") setAudioChoice(c);
    if (c === "music") ensureGraph(); // first gesture will resume + play it
    if (lsGet(AUDIO_STORAGE.muted) === "1") setMuted(true);
  }, [ensureGraph]);

  // once a choice is remembered, glide past the music screen (in whatever
  // direction the reader is moving) instead of asking again
  useEffect(() => {
    if (index === MUSIC_INDEX && audioChoice !== null) {
      if (direction === -1) goPrev();
      else goNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // ease the volume toward the page's target whenever the page or mute changes
  useEffect(() => {
    const a = audioRef.current;
    if (!a || audioChoice !== "music") return;
    const base = volumeForIndex(index);
    const target = muted ? 0 : base;

    if (pauseTimerRef.current) {
      window.clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    if (base > 0.0005 && a.paused) {
      ctxRef.current?.resume().catch(() => {});
      a.play().catch(() => {});
    }

    rampTo(target, storyAudioConfig.rampMs);

    // chapter 6 silence → pause once the fade has fully finished
    if (base <= 0.0005) {
      pauseTimerRef.current = window.setTimeout(() => {
        audioRef.current?.pause();
      }, storyAudioConfig.rampMs + 200);
    }

    return () => {
      if (pauseTimerRef.current) {
        window.clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }
    };
  }, [index, audioChoice, muted, rampTo]);

  // tidy up on unmount
  useEffect(() => {
    return () => {
      if (fallbackRampRef.current) window.clearInterval(fallbackRampRef.current);
      if (pauseTimerRef.current) window.clearTimeout(pauseTimerRef.current);
      ctxRef.current?.close().catch(() => {});
    };
  }, []);

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
