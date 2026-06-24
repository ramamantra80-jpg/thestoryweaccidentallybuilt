"use client";

type Tint = "yellow" | "sage" | "pink" | "blue" | "terracotta";

const BG: Record<Tint, string> = {
  yellow: "rgba(232, 200, 74, 0.4)",
  sage: "rgba(122, 158, 138, 0.32)",
  pink: "rgba(240, 196, 196, 0.55)",
  blue: "rgba(138, 172, 190, 0.4)",
  terracotta: "rgba(196, 120, 80, 0.26)",
};

interface Props {
  children: React.ReactNode;
  tint?: Tint;
  rotate?: number;
  className?: string;
}

/** A small pastel hand-labelled tag, used to annotate doodles. */
export default function DoodleLabel({
  children,
  tint = "yellow",
  rotate = 0,
  className = "",
}: Props) {
  return (
    <span
      className={`font-handwrite text-ink-soft text-xs px-2 py-0.5 rounded inline-block ${className}`}
      style={{ backgroundColor: BG[tint], transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
