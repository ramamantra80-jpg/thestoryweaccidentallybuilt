"use client";

type Pose = "idle" | "point" | "happy" | "shrug";

interface Props {
  pose?: Pose;
  hair?: boolean;
  flip?: boolean;
  color?: string;
  className?: string;
}

/** A simple expressive stick figure. Use `flip` to face the other way. */
export default function Stickman({
  pose = "idle",
  hair = false,
  flip = false,
  color = "#2c1f14",
  className = "",
}: Props) {
  const s = 2.4;
  const cap = "round" as const;

  const arms = {
    idle: (
      <>
        <line x1="40" y1="48" x2="26" y2="66" stroke={color} strokeWidth={s} strokeLinecap={cap} />
        <line x1="40" y1="48" x2="54" y2="66" stroke={color} strokeWidth={s} strokeLinecap={cap} />
      </>
    ),
    point: (
      <>
        <line x1="40" y1="48" x2="27" y2="64" stroke={color} strokeWidth={s} strokeLinecap={cap} />
        <line x1="40" y1="46" x2="68" y2="44" stroke={color} strokeWidth={s} strokeLinecap={cap} />
      </>
    ),
    happy: (
      <>
        <line x1="40" y1="48" x2="24" y2="32" stroke={color} strokeWidth={s} strokeLinecap={cap} />
        <line x1="40" y1="48" x2="56" y2="32" stroke={color} strokeWidth={s} strokeLinecap={cap} />
      </>
    ),
    shrug: (
      <>
        <line x1="40" y1="48" x2="24" y2="40" stroke={color} strokeWidth={s} strokeLinecap={cap} />
        <line x1="40" y1="48" x2="56" y2="40" stroke={color} strokeWidth={s} strokeLinecap={cap} />
      </>
    ),
  }[pose];

  return (
    <svg
      viewBox="0 0 80 116"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      {/* head */}
      <circle cx="40" cy="22" r="14" stroke={color} strokeWidth={s} />
      {/* face */}
      <circle cx="35" cy="20" r="1.6" fill={color} />
      <circle cx="45" cy="20" r="1.6" fill={color} />
      <path d="M34 27 Q40 31 46 27" stroke={color} strokeWidth="1.8" strokeLinecap={cap} fill="none" />
      {/* hair */}
      {hair && (
        <>
          <path d="M26 16 Q26 3 40 4 Q54 3 54 16" stroke={color} strokeWidth={s} fill="none" strokeLinecap={cap} />
          <path d="M26 14 Q21 30 23 42" stroke={color} strokeWidth={s} fill="none" strokeLinecap={cap} />
          <path d="M54 14 Q59 30 57 42" stroke={color} strokeWidth={s} fill="none" strokeLinecap={cap} />
        </>
      )}
      {/* body */}
      <line x1="40" y1="36" x2="40" y2="78" stroke={color} strokeWidth={s} strokeLinecap={cap} />
      {arms}
      {/* legs */}
      <line x1="40" y1="78" x2="28" y2="104" stroke={color} strokeWidth={s} strokeLinecap={cap} />
      <line x1="40" y1="78" x2="52" y2="104" stroke={color} strokeWidth={s} strokeLinecap={cap} />
    </svg>
  );
}
