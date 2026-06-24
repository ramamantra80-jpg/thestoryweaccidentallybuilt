"use client";

import { motion } from "framer-motion";

const instructions = [
  {
    id: "right",
    highlight: "right" as const,
    text: "tap right to keep going",
  },
  {
    id: "left",
    highlight: "left" as const,
    text: "tap left to go back",
  },
  {
    id: "keys",
    highlight: "both" as const,
    text: "arrow keys work too (on desktop)",
  },
];

export default function TutorialScene() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 bg-bg">
      <div className="w-full max-w-[300px]">

        {/* Header — handwritten, casual */}
        <motion.div
          className="mb-9"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <p className="font-handwrite text-ink-soft text-xl">
            before you begin:
          </p>
          <div
            className="mt-1 h-[2px] w-24 rounded-full"
            style={{ backgroundColor: "#c47850", opacity: 0.4 }}
          />
        </motion.div>

        {/* Instructions */}
        <div className="flex flex-col gap-5">
          {instructions.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <PhoneCard highlight={item.highlight} />
              <p className="text-ink-soft font-sans text-sm leading-snug flex-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-9 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <p className="text-muted font-sans text-xs">
            take your time. no rush. it&apos;s not going anywhere.
          </p>
          <p className="font-handwrite text-terracotta text-sm">
            tap right when you&apos;re ready →
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function PhoneCard({ highlight }: { highlight: "left" | "right" | "both" }) {
  return (
    <div
      className="shrink-0 w-12 h-[70px] rounded-[9px] relative overflow-hidden"
      style={{
        border: "1.5px solid #d8c8b0",
        backgroundColor: "#fdfaf3",
      }}
    >
      {/* Fake screen lines */}
      <div className="absolute inset-x-[6px] top-[8px] flex flex-col gap-[5px] opacity-30">
        <div className="h-[3px] rounded-full w-3/4 self-center" style={{ background: "#9a8878" }} />
        <div className="h-[2px] rounded-full w-1/2 self-center" style={{ background: "#9a8878" }} />
      </div>

      {/* Highlight zone */}
      {highlight === "right" && (
        <div
          className="absolute right-0 top-0 bottom-0 w-[52%] rounded-r-[7px]"
          style={{ backgroundColor: "rgba(196,120,80,0.18)", borderLeft: "1px solid rgba(196,120,80,0.3)" }}
        />
      )}
      {highlight === "left" && (
        <div
          className="absolute left-0 top-0 bottom-0 w-[48%] rounded-l-[7px]"
          style={{ backgroundColor: "rgba(196,120,80,0.18)", borderRight: "1px solid rgba(196,120,80,0.3)" }}
        />
      )}
      {highlight === "both" && (
        <div className="absolute inset-0 flex items-center justify-between px-[7px]">
          <span className="text-[10px]" style={{ color: "rgba(196,120,80,0.6)" }}>←</span>
          <span className="text-[10px]" style={{ color: "rgba(196,120,80,0.6)" }}>→</span>
        </div>
      )}
    </div>
  );
}
