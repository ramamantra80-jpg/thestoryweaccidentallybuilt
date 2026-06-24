"use client";

type Tint = "yellow" | "sage" | "pink" | "blue";

const TINT: Record<Tint, string> = {
  yellow: "rgba(232, 200, 74, 0.4)",
  sage: "rgba(122, 158, 138, 0.3)",
  pink: "rgba(240, 196, 196, 0.55)",
  blue: "rgba(138, 172, 190, 0.38)",
};

interface Props {
  badge: string;
  title: string;
  tint?: Tint;
}

/** A circled chapter-part badge + a highlighted title, comic-panel style. */
export default function PanelLabel({ badge, title, tint = "sage" }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-handwrite text-ink text-lg leading-none"
        style={{ border: "2px solid rgba(44,31,20,0.65)" }}
      >
        {badge}
      </span>
      <h2
        className="font-handwrite text-ink text-2xl leading-none px-2 py-1 rounded-md"
        style={{ backgroundColor: TINT[tint] }}
      >
        {title}
      </h2>
    </div>
  );
}
