"use client";

import ChapterCover from "../story/ChapterCover";
import Stickman from "../story/Stickman";
import {
  StickerDoodle,
  SunDoodle,
  QuestionDoodle,
  OnionDoodle,
  MoonDoodle,
  ZzzDoodle,
  DogDoodle,
  ScrollDoodle,
  SwordDoodle,
} from "../story/Doodles";
import { chapterFour } from "@/data/storyContent";

export default function ChapterFourCover() {
  return (
    // the day sky is shared across the chapter (rendered in StoryShell);
    // this cover just lays the cast + floating icons on top of it
    <ChapterCover intro={chapterFour.intro} theme="day">
      <div className="flex flex-col items-center gap-4">
        {/* floating icons — top scatter */}
        <div className="flex items-center gap-4">
          <StickerDoodle className="w-6 text-warm-yellow" />
          <SunDoodle className="w-7 text-warm-yellow" />
          <QuestionDoodle className="w-5 text-dusty-blue" />
          <OnionDoodle className="w-6 text-terracotta" />
        </div>

        {/* two stick figures: one confused, one chaotic */}
        <div className="flex items-end justify-center gap-9">
          <div className="relative flex flex-col items-center">
            <QuestionDoodle className="absolute -top-4 -right-4 w-4 text-dusty-blue" />
            <Stickman pose="shrug" className="w-12 h-auto" />
          </div>
          <div className="relative flex flex-col items-center">
            <StickerDoodle className="absolute -top-4 -left-4 w-4 text-warm-yellow" />
            <Stickman pose="happy" hair flip className="w-12 h-auto" />
          </div>
        </div>

        {/* floating icons — bottom scatter */}
        <div className="flex items-center gap-4 text-muted">
          <MoonDoodle className="w-6" />
          <ZzzDoodle className="w-5 text-dusty-blue" />
          <DogDoodle className="w-7" />
          <ScrollDoodle className="w-7 text-terracotta" />
          <SwordDoodle className="w-6 text-ink" />
        </div>
      </div>
    </ChapterCover>
  );
}
