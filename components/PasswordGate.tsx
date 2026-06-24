"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PasswordGate() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // after a few misses, the error nudges toward the actual hint
  const errorMessage =
    attempts >= 3 ? "check the first time we chatted on IG 👀" : "nope, try again :)";

  const attempt = async () => {
    if (busy || !value) return;
    setBusy(true);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: value }),
      });
      if (res.ok) {
        // server set the cookie — re-render the page (now the story shows)
        router.refresh();
        return;
      }
    } catch {
      // network hiccup → fall through to the error state
    }
    setError(true);
    setAttempts((a) => a + 1);
    setShakeKey((k) => k + 1);
    setValue("");
    setBusy(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative bg-bg">
      <motion.div
        className="flex flex-col items-center gap-6 w-full max-w-[300px] px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Icon */}
        <motion.div
          key={shakeKey}
          className="text-muted"
          animate={shakeKey > 0 ? { rotate: [0, -7, 7, -4, 4, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <LockIcon />
        </motion.div>

        {/* Label */}
        <div className="text-center space-y-1">
          <p className="font-handwrite text-terracotta text-base tracking-wide">
            the story
          </p>
          <h1 className="text-2xl text-ink font-display font-normal">
            Enter password
          </h1>
        </div>

        {/* Input */}
        <div className="w-full space-y-2">
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && attempt()}
            placeholder="password..."
            autoComplete="off"
            autoFocus
            className="w-full bg-transparent border-0 border-b-2 border-border text-ink placeholder:text-muted text-center py-2.5 text-base font-sans focus:outline-none focus:border-terracotta transition-colors duration-300"
          />

          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                key={shakeKey}
                className="text-error text-xs text-center font-sans"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Button */}
        <button
          onClick={attempt}
          disabled={busy}
          className="w-full bg-ink text-card font-sans text-sm font-medium py-3 rounded-xl tracking-wide hover:bg-ink-soft active:scale-[0.98] transition-all duration-150 disabled:opacity-60"
        >
          let me in →
        </button>
      </motion.div>

      {/* Hint sticky note — bottom right, slightly rotated */}
      <motion.div
        className="absolute bottom-7 right-5 sm:right-8 rotate-[2deg]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="rounded-sm p-3 max-w-[170px]"
          style={{
            backgroundColor: "#f0d878",
            boxShadow: "2px 3px 10px rgba(44,31,20,0.12)",
          }}
        >
          <p className="font-handwrite text-ink-soft text-sm leading-snug">
            hint: the day the lore began
          </p>
          <p className="font-handwrite text-muted text-xs mt-1">
            (dd/mm/yyyy, no spaces)
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4" y="16" width="24" height="13" rx="3"
        stroke="currentColor" strokeWidth="1.5"
      />
      <path
        d="M10 16V11C10 7.686 12.686 5 16 5C19.314 5 22 7.686 22 11V16"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      <circle cx="16" cy="22.5" r="2" fill="currentColor" />
    </svg>
  );
}
