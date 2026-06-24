// ─────────────────────────────────────────────────────────────
//  CHAT THREADS  —  the back-and-forth shown as little chat bubbles.
//
//  each line is { from: "me" | "her", text }. "me" sits on the right
//  (blue), "her" sits on the left (pink). reorder / reword freely.
//
//  keyed by story-page id ("3a", "3c", "4b", "4c").
// ─────────────────────────────────────────────────────────────

export type ChatLine = { from: "me" | "her"; text: string };

export const chats: Record<string, ChatLine[]> = {
  // 3A — The Exam Monster (her, spiralling)
  "3a": [
    { from: "her", text: "terrible" },
    { from: "her", text: "haven't studied" },
    { from: "her", text: "too much to study" },
    { from: "her", text: "i regret procrastinating" },
  ],

  // 3C — Wolf Mode (the nocturnal arc)
  "3c": [
    { from: "her", text: "i'm practically nocturnal now" },
  ],

  // 4B — School Misunderstanding (the sleepover that never was)
  "4b": [
    { from: "me", text: "ru sleeping at school?" },
    { from: "her", text: "yea" },
    { from: "me", text: "wait… actually?" },
    { from: "her", text: "pics." },
    { from: "her", text: "stemas too lame for that" },
  ],

  // 4C — Peak Absurdity is just the meme photos now (no chat)
};
