"use client";

type Color = "card" | "yellow" | "sage" | "pink" | "blue";

const BG: Record<Color, string> = {
  card: "#fdfaf3",
  yellow: "#f6e9b8",
  sage: "#d2e1d7",
  pink: "#f6dada",
  blue: "#d2e0e8",
};

interface Props {
  children: React.ReactNode;
  color?: Color;
  className?: string;
}

/** A comic speech bubble with a little tail pointing down. */
export default function SpeechBubble({
  children,
  color = "card",
  className = "",
}: Props) {
  const bg = BG[color];
  return (
    <div className={`relative ${className}`}>
      <div
        className="rounded-2xl px-3 py-1.5 font-handwrite text-ink leading-tight text-center"
        style={{
          backgroundColor: bg,
          border: "1.5px solid #d8c8b0",
        }}
      >
        {children}
      </div>
      {/* tail */}
      <span
        className="absolute left-1/2 -translate-x-1/2 -bottom-[6px] w-3 h-3 rotate-45"
        style={{
          backgroundColor: bg,
          borderRight: "1.5px solid #d8c8b0",
          borderBottom: "1.5px solid #d8c8b0",
        }}
      />
    </div>
  );
}
