"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    if (isMuted) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "unMute" }),
        "*"
      );
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
        "*"
      );
      setIsMuted(false);
    } else {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "mute" }),
        "*"
      );
      setIsMuted(true);
    }
  };

  return (
    <div className="relative aspect-video border-2 border-primary-brand rounded-lg overflow-hidden bg-slate-100 group shadow-[0_0_30px_-5px_rgba(93,25,108,0.2)]">
      <iframe
        ref={iframeRef}
        className="w-full h-full object-cover"
        src="https://www.youtube.com/embed/glrX_vFsiqo?autoplay=1&mute=1&loop=1&playlist=glrX_vFsiqo&controls=1&enablejsapi=1&playsinline=1"
        title="The Trading Minds - Hero Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {/* Interactive Unmute Banner / Button */}
      {isMuted && (
        <button
          onClick={toggleMute}
          type="button"
          className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary-brand/90 hover:bg-primary-brand text-white text-xs font-semibold shadow-lg backdrop-blur-sm transition-all duration-200 transform hover:scale-105 active:scale-95 animate-pulse"
        >
          <VolumeX className="w-4 h-4 text-secondary-brand animate-bounce" />
          <span>Tap to Unmute / Turn On Sound</span>
        </button>
      )}

      {!isMuted && (
        <button
          onClick={toggleMute}
          type="button"
          className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-sm transition-all"
        >
          <Volume2 className="w-4 h-4 text-green-400" />
          <span>Sound On (Click to Mute)</span>
        </button>
      )}
    </div>
  );
}
