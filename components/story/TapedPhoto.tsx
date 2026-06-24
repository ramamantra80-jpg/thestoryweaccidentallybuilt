"use client";

import { useState } from "react";
import Tape from "./Tape";
import type { MemePhoto } from "@/data/memes";

interface Props extends MemePhoto {
  /** controls the width, e.g. "w-24" */
  className?: string;
}

/**
 * A meme pinned into the scrapbook: a little polaroid frame with washi tape
 * on the corners, tilted. Falls back to a placeholder until the image file
 * exists in /public, so it never shows a broken-image icon.
 */
export default function TapedPhoto({
  src,
  caption,
  rotate = -3,
  tape = "yellow",
  className = "w-24",
}: Props) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* tape on the top corners */}
      <Tape
        color={tape}
        width={32}
        height={13}
        rotate={-20}
        className="absolute -top-2 -left-1 z-10"
      />
      <Tape
        color={tape}
        width={32}
        height={13}
        rotate={17}
        className="absolute -top-2 -right-1 z-10"
      />

      {/* polaroid frame */}
      <div
        className="bg-card rounded-[3px] p-1.5 pb-2"
        style={{
          border: "1px solid #e0d0b8",
          boxShadow: "2px 4px 9px rgba(44,31,20,0.20)",
        }}
      >
        <div className="relative w-full aspect-square overflow-hidden rounded-[2px] bg-bg-warm">
          {!broken ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={caption ?? "meme"}
              onError={() => setBroken(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-0.5 text-muted">
              <span className="text-xl leading-none">📷</span>
              <span className="font-handwrite text-[9px] leading-tight px-1 text-center opacity-80">
                drop in /memes
              </span>
            </div>
          )}
        </div>

        {caption && (
          <p className="font-handwrite text-ink-soft text-[11px] leading-tight text-center mt-1">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
