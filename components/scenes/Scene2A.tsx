"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import SpeechBubble from "../story/SpeechBubble";
import { BookDoodle, CalendarDoodle } from "../story/Doodles";
import { chapterTwo } from "@/data/storyContent";

const page = chapterTwo.pages[0]; // 2A

export default function Scene2A() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex items-end justify-between gap-2">
          {/* him + book */}
          <div className="flex flex-col items-center w-[46%]">
            <SpeechBubble className="mb-2 text-xs">
              {page.speech?.him}
            </SpeechBubble>
            <div className="relative">
              <Stickman pose="idle" className="w-11 h-auto" />
              <BookDoodle className="absolute -right-3 top-5 w-6 text-terracotta" />
            </div>
            <span className="font-handwrite text-muted text-[11px] mt-1">
              {page.labels?.book}
            </span>
          </div>

          {/* her + calendar */}
          <div className="flex flex-col items-center w-[46%]">
            <SpeechBubble color="blue" className="mb-2 text-xs">
              {page.speech?.her}
            </SpeechBubble>
            <div className="relative">
              <Stickman pose="idle" hair flip className="w-11 h-auto" />
              <CalendarDoodle className="absolute -left-3 top-5 w-6 text-dusty-blue" />
            </div>
            <span className="font-handwrite text-muted text-[11px] mt-1">
              {page.labels?.calendar}
            </span>
          </div>
        </div>
      }
    />
  );
}
