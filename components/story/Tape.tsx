"use client";

type Color = "yellow" | "sage" | "pink" | "blue";

const COLORS: Record<Color, string> = {
  yellow: "#f0d878",
  sage: "#b8d4c4",
  pink: "#f0c4c4",
  blue: "#bcd0dc",
};

interface Props {
  color?: Color;
  rotate?: number;
  width?: number;
  height?: number;
  className?: string;
}

/** A little strip of washi tape. Position it with className (absolute, etc.). */
export default function Tape({
  color = "yellow",
  rotate = 0,
  width = 76,
  height = 22,
  className = "",
}: Props) {
  return (
    <span
      className={`block ${className}`}
      style={{
        width,
        height,
        backgroundColor: COLORS[color],
        opacity: 0.82,
        transform: `rotate(${rotate}deg)`,
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(44,31,20,0.08)",
      }}
    />
  );
}
