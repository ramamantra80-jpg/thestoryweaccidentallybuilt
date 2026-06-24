"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import DoodleLabel from "../story/DoodleLabel";
import TapedPhoto from "../story/TapedPhoto";
import { LaptopDoodle, BugDoodle, PaperDoodle } from "../story/Doodles";
import { chapterThree } from "@/data/storyContent";
import { memes } from "@/data/memes";

const page = chapterThree.pages[1]; // 3B
const L = page.labels ?? {};

export default function Scene3B() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex items-stretch justify-center gap-3 w-full">
          {/* my grind */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <DoodleLabel tint="blue">{L.meTitle}</DoodleLabel>
            <div className="relative my-1">
              <Stickman pose="idle" className="w-11 h-auto" />
              <LaptopDoodle className="absolute -right-4 top-7 w-7 text-ink" />
              <BugDoodle className="absolute -left-3 top-1 w-4 text-terracotta" />
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 max-w-[150px]">
              <DoodleLabel tint="blue">{L.ai}</DoodleLabel>
              <DoodleLabel tint="blue">{L.bugs}</DoodleLabel>
              <DoodleLabel tint="blue">{L.broken}</DoodleLabel>
            </div>
          </div>

          {/* divider */}
          <div
            className="w-px self-stretch border-l border-dashed"
            style={{ borderColor: "#e0d0b8" }}
          />

          {/* her grind */}
          <div className="flex-1 flex flex-col items-center gap-2">
            <DoodleLabel tint="pink">{L.herTitle}</DoodleLabel>
            <div className="relative my-1">
              <Stickman pose="idle" hair flip className="w-11 h-auto" />
              <PaperDoodle className="absolute -right-3 top-2 w-4 text-muted rotate-12" />
              <PaperDoodle className="absolute -left-3 top-6 w-4 text-muted -rotate-12" />
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 max-w-[150px]">
              <DoodleLabel tint="pink">{L.ib}</DoodleLabel>
              <DoodleLabel tint="pink">{L.exams}</DoodleLabel>
              <DoodleLabel tint="pink">{L.essays}</DoodleLabel>
              <DoodleLabel tint="pink">{L.sleep}</DoodleLabel>
            </div>
          </div>
          </div>

          {/* the meme, taped in */}
          <div className="flex justify-center pt-1">
            {(memes["3b"] ?? []).map((p, i) => (
              <TapedPhoto key={i} {...p} className="w-24" />
            ))}
          </div>
        </div>
      }
    />
  );
}
