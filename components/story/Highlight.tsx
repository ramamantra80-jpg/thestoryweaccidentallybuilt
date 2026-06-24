"use client";

type Color = "yellow" | "sage" | "pink" | "blue" | "terracotta";

const COLORS: Record<Color, string> = {
  yellow: "rgba(232, 200, 74, 0.45)",
  sage: "rgba(122, 158, 138, 0.32)",
  pink: "rgba(240, 196, 196, 0.6)",
  blue: "rgba(138, 172, 190, 0.4)",
  terracotta: "rgba(196, 120, 80, 0.26)",
};

export default function Highlight({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: Color;
}) {
  return (
    <span
      style={{
        background: COLORS[color],
        borderRadius: "4px",
        padding: "0.5px 4px",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </span>
  );
}
