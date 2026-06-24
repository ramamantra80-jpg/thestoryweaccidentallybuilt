"use client";

import Tape from "./Tape";

type Color = "yellow" | "sage" | "pink" | "blue";

const COLORS: Record<Color, string> = {
  yellow: "#f3e4a8",
  sage: "#cfe0d4",
  pink: "#f3d6d6",
  blue: "#cddbe6",
};

interface Props {
  children: React.ReactNode;
  color?: Color;
  rotate?: number;
  withTape?: boolean;
  tapeColor?: Color;
  className?: string;
}

/** A small sticky note for side comments / plot twists / fun facts. */
export default function StickyNote({
  children,
  color = "yellow",
  rotate = -2,
  withTape = false,
  tapeColor = "yellow",
  className = "",
}: Props) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {withTape && (
        <Tape
          color={tapeColor}
          width={48}
          height={16}
          rotate={-3}
          className="absolute -top-2 left-1/2 -translate-x-1/2 z-10"
        />
      )}
      <div
        className="rounded-sm px-3 py-2"
        style={{
          backgroundColor: COLORS[color],
          boxShadow: "2px 3px 8px rgba(44,31,20,0.12)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
