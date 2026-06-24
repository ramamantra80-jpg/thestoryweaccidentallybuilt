"use client";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  current: number;
  total: number;
}

export default function NavigationZones({
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  current,
  total,
}: Props) {
  return (
    <>
      {/* Left zone */}
      <div
        className={`group absolute left-0 top-0 bottom-14 w-[40%] z-10 select-none ${
          canGoPrev ? "cursor-pointer" : "cursor-default"
        }`}
        onClick={canGoPrev ? onPrev : undefined}
      >
        {canGoPrev && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink opacity-0 group-hover:opacity-15 transition-opacity duration-300 text-xl pointer-events-none">
            ←
          </div>
        )}
      </div>

      {/* Right zone */}
      <div
        className={`group absolute right-0 top-0 bottom-14 w-[60%] z-10 select-none ${
          canGoNext ? "cursor-pointer" : "cursor-default"
        }`}
        onClick={canGoNext ? onNext : undefined}
      >
        {canGoNext && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-ink opacity-0 group-hover:opacity-15 transition-opacity duration-300 text-xl pointer-events-none">
            →
          </div>
        )}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2 pointer-events-none z-20">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-[3px] rounded-full transition-all duration-500 ease-out ${
              i === current
                ? "w-6 bg-terracotta"
                : "w-[6px] bg-border"
            }`}
          />
        ))}
      </div>
    </>
  );
}
