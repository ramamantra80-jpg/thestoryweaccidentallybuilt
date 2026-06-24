"use client";

import StoryPanel from "../story/StoryPanel";
import SpeechBubble from "../story/SpeechBubble";
import {
  BusDoodle,
  MusicNote,
  ChairDoodle,
  ElephantDoodle,
} from "../story/Doodles";
import { chapterTwo } from "@/data/storyContent";

const page = chapterTwo.pages[1]; // 2B

export default function Scene2B() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-2.5 w-full">
          {/* her field trip — the legendary bus */}
          <div className="flex flex-col items-center gap-1.5">
            <SpeechBubble color="sage" className="text-xs">
              {page.speech?.verdict}
            </SpeechBubble>
            <div className="relative">
              <BusDoodle className="w-36 text-ink" />
              <MusicNote className="absolute -top-3 left-3 w-4 text-terracotta" />
              <MusicNote className="absolute -top-4 right-10 w-3 text-sage" />
              {/* road sign */}
              <span
                className="absolute -right-4 -bottom-2 font-handwrite text-ink-soft text-[11px] px-1.5 py-0.5 rounded rotate-[3deg]"
                style={{ backgroundColor: "rgba(122,158,138,0.35)" }}
              >
                {page.labels?.sign}
              </span>
            </div>
          </div>

          {/* two little side-details, side by side and clearly labelled */}
          <div className="flex items-end justify-center gap-7 w-full">
            {/* her: the cursed chair */}
            <div className="flex flex-col items-center gap-1">
              <ChairDoodle className="w-6 text-muted" />
              <span className="font-handwrite text-muted text-[11px]">
                {page.labels?.chair}
              </span>
            </div>
            {/* him: the entire elephant memory */}
            <div className="flex flex-col items-center gap-1">
              <ElephantDoodle className="w-12 text-muted" />
              <span className="font-handwrite text-muted text-[11px]">
                {page.labels?.elephant}
              </span>
            </div>
          </div>
        </div>
      }
    />
  );
}
