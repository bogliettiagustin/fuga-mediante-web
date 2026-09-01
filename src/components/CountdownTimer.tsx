"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { KeyRound } from "lucide-react";

const TARGET_DATE = new Date("2026-09-17T19:00:00-03:00");
const ACCESS_PASSWORD = "morriseynotdead";

function getTimeLeft() {
  const diffMs = Math.max(0, TARGET_DATE.getTime() - Date.now());
  const totalSeconds = Math.floor(diffMs / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: diffMs === 0,
  };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export default function CountdownTimer({ onDone }: { onDone: () => void }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (timeLeft.done) {
      onDone();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft.done, onDone]);

  function handleUnlock() {
    if (password === ACCESS_PASSWORD) {
      router.push("/video");
    } else {
      setPassword("");
    }
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-cream px-6">
      <h1 className="text-center font-display uppercase leading-[0.95] text-ink text-[16vw] sm:text-[9vw]">
        {pad(days)}d:{pad(hours)}h:{pad(minutes)}m:{pad(seconds)}s
      </h1>

      <div className="flex items-center gap-2">
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleUnlock();
          }}
          autoComplete="off"
          className="h-9 w-36 border-2 border-ink bg-cream px-3 text-sm text-ink outline-none"
        />
        <button
          type="button"
          onClick={handleUnlock}
          aria-label="Ingresar"
          className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink text-ink"
        >
          <KeyRound className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
