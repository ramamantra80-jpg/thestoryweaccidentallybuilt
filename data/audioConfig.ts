// ─────────────────────────────────────────────────────────────
//  SOUNDTRACK  —  the optional background music for the story.
//
//  1. drop your audio file at:  public/audio/story-soundtrack.mp3
//     (or change `src` below to point wherever you put it)
//  2. tweak the per-chapter volumes / copy here — nothing else to touch.
//
//  volumes are 0–1. they're intentionally low; this is a background
//  memory, not a concert.
// ─────────────────────────────────────────────────────────────
export const storyAudioConfig = {
  /** master on/off — set false to remove the whole music feature */
  enabled: true,

  /** where the file lives (under /public) */
  src: "/audio/story-soundtrack.mp3",
  loop: true,

  // ── per-chapter background volume (each one is independent) ──
  //    nudge any single number to make that chapter louder / softer.
  volumes: {
    opening: 0.12, // intro · cover · tutorial · music screen
    chapter1: 0.13, // the stranger (clear sky)
    chapter2: 0.15, // the school saga (warm day)
    chapter3: 0.08, // the grind arc (night) — quieter, moodier
    chapter4: 0.16, // the chaos (cloudy day) — a touch more present
    chapter5: 0.24, // the graduation arc — warmer / stronger
    // chapter 6 fades from chapter5's level down to silence (see below)
  },

  /** chapter 6 fades the music out and reaches silence on this line */
  fadeToZeroLine: "the story was real.",

  /**
   * how long (ms) the volume glides between levels. higher = smoother,
   * slower cross-fades between chapters. (uses Web Audio when available
   * for a click-free, Spotify-style ramp.)
   */
  rampMs: 2600,

  // ── copy on the music-choice screen (shown right after the tutorial) ──
  choiceTitle: "This story was designed with a soundtrack.",
  choiceSubtitle: "you can read it with music, or keep it quiet.",
  playLabel: "play with music",
  silentLabel: "continue silently",
  note: "you can mute it anytime.",

  // ── floating control labels ──
  onLabel: "music on",
  mutedLabel: "muted",
};
