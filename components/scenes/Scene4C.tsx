"use client";

import StoryPanel from "../story/StoryPanel";
import TapedPhoto from "../story/TapedPhoto";
import { chapterFour } from "@/data/storyContent";
import { memes } from "@/data/memes";

const page = chapterFour.pages[2]; // 4C

export default function Scene4C() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-4 w-full">
          {/* just the memes, taped in */}
          <div className="flex justify-center gap-5">
            {(memes["4c"] ?? []).map((p, i) => (
              <TapedPhoto key={i} {...p} className="w-[112px]" />
            ))}
          </div>
        </div>
      }
    />
  );
}
