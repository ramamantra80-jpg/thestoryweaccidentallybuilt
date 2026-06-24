"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { AustraliaDoodle } from "../story/Doodles";
import { toAustralia } from "@/data/transitions";

// the flight path as a normalized quadratic bezier (fractions of the box),
// so the plane and the dotted line always line up, at any screen size.
const P0 = { x: 0.07, y: 0.82 }; // home
const P1 = { x: 0.5, y: 0.06 }; // arc peak (control point)
const P2 = { x: 0.93, y: 0.58 }; // destination

const bezier = (t: number, a: number, b: number, c: number) =>
  (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
const deriv = (t: number, a: number, b: number, c: number) =>
  2 * (1 - t) * (b - a) + 2 * t * (c - b);

export default function PaperPlaneInterstitial() {
  const progress = useMotionValue(0);

  // one smooth glide along the curve, easing in and out
  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 3.2,
      ease: [0.4, 0, 0.25, 1],
      delay: 0.35,
    });
    return () => controls.stop();
  }, [progress]);

  const left = useTransform(progress, (t) => `${bezier(t, P0.x, P1.x, P2.x) * 100}%`);
  const top = useTransform(progress, (t) => `${bezier(t, P0.y, P1.y, P2.y) * 100}%`);
  const rotate = useTransform(progress, (t) => {
    const dx = deriv(t, P0.x, P1.x, P2.x);
    const dy = deriv(t, P0.y, P1.y, P2.y);
    return (Math.atan2(dy, dx) * 180) / Math.PI; // nose follows the path
  });

  return (
    <div className="grow min-h-full w-full flex flex-col items-center justify-center px-8 text-center">
      <div className="relative w-full max-w-sm aspect-[2/1]">
        {/* dotted flight path (same 2:1 box, so no stroke distortion) */}
        <svg viewBox="0 0 360 180" className="absolute inset-0 w-full h-full">
          <path
            d="M25 148 Q 180 11 335 104"
            stroke="#c9ad77"
            strokeWidth="2.5"
            strokeDasharray="3 9"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* home dot */}
        <span
          className="absolute block w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ left: "7%", top: "82%", background: "#c47850" }}
        />
        {/* destination */}
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "93%", top: "58%" }}
        >
          <AustraliaDoodle className="w-10 text-terracotta" />
        </span>

        {/* labels */}
        <span
          className="absolute font-handwrite text-ink-soft text-sm -translate-x-1/2"
          style={{ left: "9%", top: "92%" }}
        >
          {toAustralia.from}
        </span>
        <span
          className="absolute font-handwrite text-ink-soft text-sm -translate-x-1/2"
          style={{ left: "84%", top: "38%" }}
        >
          {toAustralia.to}
        </span>

        {/* the plane, gliding smoothly along the curve */}
        <motion.div
          className="absolute"
          style={{ left, top, x: "-50%", y: "-50%", rotate }}
        >
          {/* a paper plane pointing right, so it nose-follows the path */}
          <svg
            viewBox="0 0 40 40"
            className="w-7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13 L35 20 L5 27 L13 20 Z"
              stroke="#111111"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M13 20 L35 20"
              stroke="#111111"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* new chapter unlocked */}
      <motion.p
        className="font-handwrite text-muted text-lg mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.9 }}
      >
        {toAustralia.note}
      </motion.p>
    </div>
  );
}
