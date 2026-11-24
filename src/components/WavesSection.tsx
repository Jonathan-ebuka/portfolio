"use client";

import { InteractiveWavesBackground } from "./InteractiveWavesBackground";

export default function WavesSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <InteractiveWavesBackground
        lineColor="rgba(0, 0, 0, 0.15)"
        backgroundColor="transparent"
        waveSpeedX={0.0125}
        waveSpeedY={0.005}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.925}
        tension={0.005}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      {/* Fade-out gradient at the bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-64"
        style={{
          background: "linear-gradient(to bottom, transparent, #ffffff)",
        }}
      />
      <div className="relative z-0">{children}</div>
    </div>
  );
}
