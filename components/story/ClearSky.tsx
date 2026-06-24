"use client";

// Chapter one — a calm, clear light-blue sky with just a hint of cream.
// Deliberately bare: no clouds, no sun (that's chapter four's look), so the
// beginning feels open and quiet.
export default function ClearSky({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #cfe0ec 0%, #dde7e6 52%, #ece7dc 100%)",
      }}
    />
  );
}
