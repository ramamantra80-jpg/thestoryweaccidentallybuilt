"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import SpeechBubble from "../story/SpeechBubble";
import { chapterTwo } from "@/data/storyContent";

const page = chapterTwo.pages[2]; // 2C

// the pile of academic suffering — labels come from data (labels.p1..p5)
const paperChips = [
  { key: "p1", bg: "rgba(232,200,74,0.4)", rotate: "-6deg" },
  { key: "p2", bg: "rgba(138,172,190,0.4)", rotate: "4deg" },
  { key: "p3", bg: "rgba(240,196,196,0.55)", rotate: "-3deg" },
  { key: "p4", bg: "rgba(122,158,138,0.32)", rotate: "6deg" },
  { key: "p5", bg: "rgba(196,120,80,0.26)", rotate: "-4deg" },
] as const;

export default function Scene2C() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex items-end justify-between gap-5 w-full">
          {/* her, buried under labelled papers */}
          <div className="flex flex-col items-center w-[52%]">
            <div className="flex flex-wrap justify-center gap-1.5 mb-2 max-w-[180px]">
              {paperChips.map(({ key, bg, rotate }) => (
                <span
                  key={key}
                  className="font-handwrite text-ink-soft text-xs px-2 py-0.5 rounded"
                  style={{ backgroundColor: bg, transform: `rotate(${rotate})` }}
                >
                  {page.labels?.[key]}
                </span>
              ))}
            </div>
            <Stickman pose="idle" hair className="w-10 h-auto" />
          </div>

          {/* him, confused, asking for help */}
          <div className="flex flex-col items-center w-[42%]">
            <SpeechBubble color="pink" className="mb-2 text-xs">
              {page.speech?.him}
            </SpeechBubble>
            <Stickman pose="shrug" flip className="w-10 h-auto" />
            <span
              className="font-handwrite text-ink text-[11px] px-2 py-0.5 rounded mt-2 rotate-[-2deg]"
              style={{ backgroundColor: "rgba(232,200,74,0.55)" }}
            >
              {page.labels?.help}
            </span>
          </div>
        </div>
      }
    />
  );
}
