"use client";

import ChapterCover from "../story/ChapterCover";
import Stickman from "../story/Stickman";
import {
  BookDoodle,
  PaperDoodle,
  BusDoodle,
  CalendarDoodle,
  WarningDoodle,
} from "../story/Doodles";
import { chapterTwo } from "@/data/storyContent";

export default function ChapterTwoCover() {
  return (
    <ChapterCover intro={chapterTwo.intro} theme="day">
      <div className="flex flex-col items-center gap-5">
        {/* one stickman with a book, one drowning in papers */}
        <div className="flex items-end justify-center gap-12">
          <div className="relative">
            <Stickman pose="idle" className="w-12 h-auto" />
            <BookDoodle className="absolute -right-3 top-6 w-6 text-terracotta" />
          </div>
          <div className="relative">
            <Stickman pose="idle" hair className="w-12 h-auto" />
            <PaperDoodle className="absolute -left-3 top-3 w-4 text-muted -rotate-12" />
            <PaperDoodle className="absolute -right-3 top-6 w-4 text-muted rotate-12" />
          </div>
        </div>

        {/* tiny doodle row */}
        <div className="flex items-center gap-5 text-muted">
          <BusDoodle className="w-12" />
          <CalendarDoodle className="w-6" />
          <WarningDoodle className="w-6 text-terracotta" />
        </div>
      </div>
    </ChapterCover>
  );
}
