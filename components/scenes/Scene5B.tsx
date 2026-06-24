"use client";

import StoryPanel from "../story/StoryPanel";
import TapedPhoto from "../story/TapedPhoto";
import DoodleLabel from "../story/DoodleLabel";
import { CameraDoodle } from "../story/Doodles";
import { chapterFive } from "@/data/storyContent";
import { memes } from "@/data/memes";

const page = chapterFive.pages[1]; // 5B
const L = page.labels ?? {};

export default function Scene5B() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-3 w-full">
          {/* the photo, as a kept memory object */}
          <div className="flex items-center justify-center gap-4">
            {(memes["5b"] ?? []).map((p, i) => (
              <TapedPhoto key={i} {...p} className="w-36" />
            ))}

            <div className="flex flex-col items-center gap-2">
              <CameraDoodle className="w-9 text-muted" />
              <DoodleLabel tint="yellow" rotate={-4}>
                {L.tag}
              </DoodleLabel>
            </div>
          </div>
        </div>
      }
    />
  );
}
