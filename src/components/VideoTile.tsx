"use client";

import { useState } from "react";
import { VideoOff } from "lucide-react";

export default function VideoTile({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-square flex-col items-center justify-center gap-2 bg-ink/90 p-2 text-center">
        <VideoOff className="h-5 w-5 text-cream/60" strokeWidth={1.5} />
        <span className="text-[10px] uppercase tracking-wide text-cream/60">
          Subí el video de {label}
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-square overflow-hidden bg-ink">
      <video
        className="h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onError={() => setHasError(true)}
      />
    </div>
  );
}
