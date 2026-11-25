"use client";

import { useEffect, useRef, useState } from "react";
import { VideoOff } from "lucide-react";

export default function LoopVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  // Respect "reduce motion": keep the first frame instead of looping.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // The 404 can fire before hydration attaches onError, so check the state too.
    if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      setHasError(true);
      return;
    }
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) video.pause();
      else void video.play().catch(() => {});
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [hasError]);

  return (
    <div className="aspect-[528/410] w-full overflow-hidden bg-white outline outline-4 outline-black">
      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center text-ink/60">
          <VideoOff className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
          <span className="text-sm">Falta el video: subí el archivo a public{src}</span>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          aria-label={label}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
