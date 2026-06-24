"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import ChatThread from "../story/ChatThread";
import {
  TentDoodle,
  CameraDoodle,
  QuestionDoodle,
  ZzzDoodle,
  CloudDoodle,
} from "../story/Doodles";
import { chapterFour } from "@/data/storyContent";
import { chats } from "@/data/chats";

const page = chapterFour.pages[1]; // 4B

export default function Scene4B() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-3 w-full">
          {/* the misunderstanding, as an actual chat */}
          <ChatThread lines={chats["4b"] ?? []} />

          {/* confused him → imaginary tent ← facepalming her */}
          <div className="flex items-end justify-center gap-6">
            <div className="relative flex flex-col items-center">
              <QuestionDoodle className="absolute -top-5 -right-2 w-4 text-dusty-blue" />
              <Stickman pose="idle" className="w-11 h-auto" />
            </div>

            <div className="relative flex flex-col items-center">
              <CloudDoodle className="absolute -top-5 -left-3 w-7 text-muted opacity-60" />
              <ZzzDoodle className="absolute -top-4 right-0 w-4 text-dusty-blue" />
              <TentDoodle className="w-12 text-sage" />
            </div>

            <div className="relative flex flex-col items-center">
              <Stickman pose="shrug" hair flip className="w-11 h-auto" />
              <CameraDoodle className="absolute -right-6 bottom-0 w-7 text-muted" />
            </div>
          </div>
        </div>
      }
    />
  );
}
