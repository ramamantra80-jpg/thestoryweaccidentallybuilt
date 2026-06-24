"use client";

import ChapterCover from "../story/ChapterCover";
import Stickman from "../story/Stickman";
import { SchoolDoodle, GradCapDoodle, CameraDoodle } from "../story/Doodles";
import { chapterFive } from "@/data/storyContent";

export default function ChapterFiveCover() {
  return (
    // the golden-hour sky is shared across the chapter (rendered in StoryShell)
    <ChapterCover intro={chapterFive.intro} theme="golden">
      <div className="flex flex-col items-center gap-5">
        {/* the hall, a cap, a camera */}
        <div className="flex items-end justify-center gap-4">
          <GradCapDoodle className="w-9 text-warm-yellow" />
          <SchoolDoodle className="w-16 text-ink-soft" />
          <CameraDoodle className="w-8 text-muted" />
        </div>

        {/* two stick figures, a little apart — about to finally meet */}
        <div className="flex items-end justify-center gap-16">
          <Stickman pose="idle" className="w-11 h-auto" />
          <Stickman pose="idle" hair flip className="w-11 h-auto" />
        </div>
      </div>
    </ChapterCover>
  );
}
