"use client";

interface Props {
  children: React.ReactNode;
  holes?: boolean;
  className?: string;
}

/** The shared notebook-paper card: warm paper, soft border, offset shadow. */
export default function NotebookPaper({
  children,
  holes = true,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-2xl relative ${className}`}
      style={{
        backgroundColor: "#fdfaf3",
        border: "1.5px solid #e0d0b8",
        boxShadow: "4px 5px 0px #e0c8a0",
      }}
    >
      {holes && (
        <div
          className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-evenly items-center pointer-events-none"
          style={{ borderRight: "1.5px solid #e8dcc8" }}
        >
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="w-[10px] h-[10px] rounded-full"
              style={{
                border: "1.5px solid #d0c0a8",
                backgroundColor: "#f4ede0",
              }}
            />
          ))}
        </div>
      )}
      <div className={holes ? "pl-11 pr-5 py-6" : "px-6 py-6"}>{children}</div>
    </div>
  );
}
