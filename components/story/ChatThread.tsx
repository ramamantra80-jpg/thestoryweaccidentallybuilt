"use client";

import type { ChatLine } from "@/data/chats";

// a little messaging-app thread: "me" on the right (blue), "her" on the
// left (pink), each with the speaker's bottom corner squared off like a
// real chat bubble.

const BUBBLE: Record<ChatLine["from"], string> = {
  me: "#d2e0e8", // dusty blue
  her: "#f6dada", // soft pink
};

interface Props {
  lines: ChatLine[];
  className?: string;
}

export default function ChatThread({ lines, className = "" }: Props) {
  // empty / deleted thread → render nothing (no leftover gap)
  if (!lines || lines.length === 0) return null;

  return (
    <div className={`flex flex-col gap-1.5 w-full max-w-[290px] mx-auto ${className}`}>
      {lines.map((l, i) => {
        const me = l.from === "me";
        return (
          <div key={i} className={`flex ${me ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-[82%] px-3 py-1.5 font-handwrite text-ink leading-snug text-[15px]"
              style={{
                backgroundColor: BUBBLE[l.from],
                border: "1.5px solid #d8c8b0",
                borderRadius: 16,
                borderBottomRightRadius: me ? 4 : 16,
                borderBottomLeftRadius: me ? 16 : 4,
              }}
            >
              {l.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
