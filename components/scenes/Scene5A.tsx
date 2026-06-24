"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import DoodleLabel from "../story/DoodleLabel";
import { MedalDoodle, SchoolDoodle, PaperDoodle } from "../story/Doodles";
import { chapterFive } from "@/data/storyContent";

const page = chapterFive.pages[0]; // 5A
const L = page.labels ?? {};

export default function Scene5A() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-4 w-full">
          {/* the stress, now a faded flashback */}
          <div className="flex items-center justify-center gap-2 opacity-70">
            <PaperDoodle className="w-4 text-muted" />
            <DoodleLabel tint="pink">{L.p1}</DoodleLabel>
            <DoodleLabel tint="blue">{L.p2}</DoodleLabel>
            <DoodleLabel tint="sage">{L.p3}</DoodleLabel>
          </div>

          {/* her on the day, medal and all — someone watching from the side */}
          <div className="flex items-end justify-center gap-7">
            <div className="relative flex flex-col items-center">
              <Stickman pose="happy" hair className="w-12 h-auto" />
              <MedalDoodle className="absolute -right-5 top-7 w-6 text-warm-yellow" />
              <DoodleLabel tint="yellow" className="mt-1">
                {L.medal}
              </DoodleLabel>
            </div>

            <SchoolDoodle className="w-14 text-ink-soft self-end mb-1" />

            <Stickman pose="idle" flip className="w-9 h-auto opacity-70" />
          </div>
        </div>
      }
    />
  );
}
