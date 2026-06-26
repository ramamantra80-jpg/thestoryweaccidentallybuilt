"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import SpeechBubble from "../story/SpeechBubble";
import DoodleLabel from "../story/DoodleLabel";
import { PhoneDoodle } from "../story/Doodles";
import { chapterFive } from "@/data/storyContent";

const page = chapterFive.pages[2]; // 5C
const L = page.labels ?? {};

export default function Scene5C() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-4 w-full">
          {/* the line that escaped — sits right above "me" (left of centre) */}
          <div className="w-full flex justify-center">
            <SpeechBubble color="blue" className="text-sm max-w-[250px] -translate-x-10">
              {page.speech?.line}
            </SpeechBubble>
          </div>

          {/* numbers exchanged — two phones, no hearts */}
          <div className="flex items-end justify-center gap-10">
            <div className="relative flex flex-col items-center">
              <Stickman pose="idle" className="w-11 h-auto" />
              <PhoneDoodle className="absolute -right-4 top-7 w-4 text-dusty-blue" />
              <DoodleLabel tint="blue" className="mt-1">
                {L.me}
              </DoodleLabel>
            </div>

            <div className="relative flex flex-col items-center">
              <Stickman pose="idle" hair flip className="w-11 h-auto" />
              <PhoneDoodle className="absolute -left-4 top-7 w-4 text-terracotta" />
              <DoodleLabel tint="pink" className="mt-1">
                {L.her}
              </DoodleLabel>
            </div>
          </div>
        </div>
      }
    />
  );
}
