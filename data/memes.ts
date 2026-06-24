// ─────────────────────────────────────────────────────────────
//  MEME PHOTOS  —  the real images taped into the scrapbook.
//
//  1. drop the image files into  public/memes/
//  2. point `src` at them (and tweak captions/tilt/tape colour here)
//
//  keyed by story-page id ("3b", "3c", "4a", "4c"). add more anytime.
// ─────────────────────────────────────────────────────────────

export type TapeTint = "yellow" | "sage" | "pink" | "blue";

export interface MemePhoto {
  src: string; // path under /public, e.g. "/memes/wolf.jpg"
  caption?: string; // little handwritten label under the photo
  rotate?: number; // tilt in degrees (default ~ -3)
  tape?: TapeTint; // washi-tape colour
}

export const memes: Record<string, MemePhoto[]> = {
  // 3B — Two Different Grinds  → gangster "serious" spongebob (me, grinding)
  "3b": [
    {
      src: "/memes/spongebob-serious.jpg",
      caption: "we locking in",
      rotate: -4,
      tape: "blue",
    },
  ],

  // 3C — Wolf Mode  → the lone-wolf-by-the-sea painting
  "3c": [
    {
      src: "/memes/wolf.jpg",
      caption: "certified lone wolf 🐺",
      rotate: 3,
      tape: "sage",
    },
  ],

  // 4A — Mandarin Exam  → the medieval writer crafting the message
  "4a": [
    {
      src: "/memes/medieval-writer.jpg",
      caption: "me drawing ✍️",
      rotate: -4,
      tape: "yellow",
    },
  ],

  // 4C — Peak Absurdity  → patrick sleeping + the ai dog-on-a-dolphin
  "4c": [
    {
      src: "/memes/patrick-sleeping.jpg",
      caption: "patrick (us fr)",
      rotate: -5,
      tape: "pink",
    },
    {
      src: "/memes/dog-dolphin.jpg",
      caption: "u after the exam",
      rotate: 5,
      tape: "blue",
    },
  ],

  // 5B — Canon Event  → the real graduation photo (not a meme this time)
  "5b": [
    {
      src: "/memes/graduation.jpg",
      caption: "graduation day 🎓",
      rotate: -3,
      tape: "yellow",
    },
  ],
};
