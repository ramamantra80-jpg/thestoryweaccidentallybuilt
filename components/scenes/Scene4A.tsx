"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import SpeechBubble from "../story/SpeechBubble";
import TapedPhoto from "../story/TapedPhoto";
import { LanternDoodle, StampDoodle, PaperDoodle } from "../story/Doodles";
import { chapterFour } from "@/data/storyContent";
import { memes } from "@/data/memes";

const page = chapterFour.pages[0]; // 4A
const bubbleColors = ["pink", "yellow", "sage"] as const;

export default function Scene4A() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-3 w-full">
          {/* the (questionable) Chinese encouragement */}
          <div className="flex flex-wrap justify-center gap-2 max-w-[330px]">
            {(page.bubbles ?? []).map((b, i) => (
              <SpeechBubble
                key={i}
                color={bubbleColors[i % bubbleColors.length]}
                className="text-xs"
              >
                {b}
              </SpeechBubble>
            ))}
          </div>

          {/* lantern · him proudly presenting · exam paper · the meme */}
          <div className="flex items-end justify-center gap-5">
            <LanternDoodle className="w-8 text-terracotta" />
            <div className="relative flex flex-col items-center">
              <Stickman pose="point" className="w-12 h-auto" />
              <StampDoodle className="absolute -right-6 bottom-1 w-6 text-terracotta -rotate-12" />
            </div>
            <PaperDoodle className="w-6 text-muted" />
            {(memes["4a"] ?? []).map((p, i) => (
              <TapedPhoto key={i} {...p} className="w-20" />
            ))}
          </div>
        </div>
      }
    />
  );
}
