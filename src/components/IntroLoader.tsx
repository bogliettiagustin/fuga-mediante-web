"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const LINES = ["INDIE IS DEAD", "GOD BLESS", "FUGA MEDIANTE"];
const TYPING_DURATION_MS = 5000;
const HOLD_MS = 400;
const FADE_MS = 700;

const TOTAL_CHARS = LINES.reduce((sum, line) => sum + line.length, 0);

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [typedCount, setTypedCount] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const stepMs = TYPING_DURATION_MS / TOTAL_CHARS;
    const interval = setInterval(() => {
      setTypedCount((count) => Math.min(count + 1, TOTAL_CHARS));
    }, stepMs);

    const holdTimeout = setTimeout(() => {
      clearInterval(interval);
      setFadingOut(true);
      setTimeout(onDone, FADE_MS);
    }, TYPING_DURATION_MS + HOLD_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(holdTimeout);
    };
  }, [onDone]);

  const visibleLines = useMemo(() => {
    return LINES.reduce<{ lines: string[]; remaining: number }>(
      (acc, line) => ({
        lines: [...acc.lines, line.slice(0, Math.max(0, acc.remaining))],
        remaining: acc.remaining - line.length,
      }),
      { lines: [], remaining: typedCount },
    ).lines;
  }, [typedCount]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-cream px-6"
      animate={{ opacity: fadingOut ? 0 : 1 }}
      transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
    >
      <h1 className="text-center font-display uppercase leading-[0.95] text-ink text-[10vw] sm:text-[6vw]">
        {visibleLines.map((text, i) => (
          <span key={i} className="block">
            {text}
          </span>
        ))}
      </h1>
    </motion.div>
  );
}
