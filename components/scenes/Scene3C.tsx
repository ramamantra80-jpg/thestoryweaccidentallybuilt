"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import ChatThread from "../story/ChatThread";
import TapedPhoto from "../story/TapedPhoto";
import { ClockDoodle, CoffeeDoodle, PaperDoodle } from "../story/Doodles";
import { chapterThree } from "@/data/storyContent";
import { memes } from "@/data/memes";
import { chats } from "@/data/chats";

const page = chapterThree.pages[2]; // 3C

export default function Scene3C() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-3 w-full">
          {/* clock-at-midnight + coffee (the moon lives in the page corner now) */}
          <div className="flex items-center justify-center gap-4 text-muted">
            <ClockDoodle className="w-6" />
            <CoffeeDoodle className="w-6" />
          </div>

          {/* tired stickgirl + the lone-wolf meme taped beside her */}
          <div className="flex items-end justify-center gap-5">
            {/* her — papers, exhausted */}
            <div className="relative flex flex-col items-center">
              <PaperDoodle className="absolute -top-4 -right-2 w-4 text-muted rotate-12" />
              <PaperDoodle className="absolute -top-2 -left-3 w-4 text-muted -rotate-6" />
              <Stickman pose="shrug" hair className="w-12 h-auto" />
            </div>

            {(memes["3c"] ?? []).map((p, i) => (
              <TapedPhoto key={i} {...p} className="w-24" />
            ))}
          </div>

          {/* the late-night chat */}
          <ChatThread lines={chats["3c"] ?? []} />
        </div>
      }
    />
  );
}
