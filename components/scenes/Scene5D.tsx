"use client";

import StoryPanel from "../story/StoryPanel";
import DoodleLabel from "../story/DoodleLabel";
import { AustraliaDoodle, SuitcaseDoodle, PlaneDoodle } from "../story/Doodles";
import { chapterFive } from "@/data/storyContent";

const page = chapterFive.pages[3]; // 5D
const L = page.labels ?? {};

export default function Scene5D() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-4 w-full">
          {/* packed up, pointed somewhere new */}
          <div className="flex items-end justify-center gap-6">
            <SuitcaseDoodle className="w-10 text-ink-soft" />

            <div className="relative flex flex-col items-center">
              <AustraliaDoodle className="w-16 text-terracotta" />
              <DoodleLabel tint="sage" className="mt-1">
                {L.place}
              </DoodleLabel>
            </div>

            <PlaneDoodle className="w-8 text-muted -rotate-12 mb-2" />
          </div>

          <DoodleLabel tint="yellow" rotate={-3}>
            {L.date}
          </DoodleLabel>
        </div>
      }
    />
  );
}
