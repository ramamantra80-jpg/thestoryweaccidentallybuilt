"use client";

import StoryPanel from "../story/StoryPanel";
import Stickman from "../story/Stickman";
import ChatThread from "../story/ChatThread";
import { PaperDoodle, WarningDoodle } from "../story/Doodles";
import { chapterThree } from "@/data/storyContent";
import { chats } from "@/data/chats";

const page = chapterThree.pages[0]; // 3A

export default function Scene3A() {
  return (
    <StoryPanel
      page={page}
      bare
      visual={
        <div className="flex flex-col items-center gap-3 w-full">
          {/* her, spiralling */}
          <ChatThread lines={chats["3a"] ?? []} />

          {/* the buried stickgirl + a concerned bystander */}
          <div className="flex items-end justify-center gap-7">
            <div className="relative flex flex-col items-center">
              {/* papers piled on top */}
              <div className="flex justify-center -mb-1">
                <PaperDoodle className="w-4 text-muted -rotate-12" />
                <PaperDoodle className="w-4 text-muted" />
                <PaperDoodle className="w-4 text-muted rotate-12" />
              </div>
              <Stickman pose="shrug" hair className="w-12 h-auto" />
              <WarningDoodle className="absolute -right-6 bottom-1 w-6 text-terracotta" />
            </div>

            {/* concerned guy on the side */}
            <Stickman pose="idle" flip className="w-9 h-auto opacity-70" />
          </div>
        </div>
      }
    />
  );
}
