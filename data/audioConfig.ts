// ─────────────────────────────────────────────────────────────
//  SOUNDTRACK  —  the optional background music for the story.
//
//  1. drop your audio file at:  public/audio/story-soundtrack.mp3
//     (or change `src` below to point wherever you put it)
//  2. tweak the volumes / copy here — nothing else to touch.
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

  /** volume through chapters 1–4 */
  baseVolume: 0.1,
  /** slightly warmer through chapter 5 (the graduation arc) */
  chapterFiveVolume: 0.15,

  /** chapter 6 fades the music out and reaches silence on this line */
  fadeToZeroLine: "the story was real.",

  /** how long (ms) the volume eases between levels when you change pages */
  rampMs: 1400,

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
