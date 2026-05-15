// src/components/PureCSSScene.tsx
"use client";

import React from "react";

export default function PureCSSScene() {
  // Enough particles to clearly define the 3D curve
  const particles = 180;

  return (
    <div className="w-full h-full flex items-center justify-center [perspective:1200px]">
      <style>{`
        @keyframes rotate-knot {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg); }
        }
      `}</style>

      {/* The rotating 3D container */}
      <div
        className="relative w-[300px] h-[300px] [transform-style:preserve-3d]"
        style={{ animation: 'rotate-knot 24s linear infinite' }}
      >
        {Array.from({ length: particles }).map((_, i) => (
          <div
            key={i}
            // w-3 h-3 is 12px. We offset by -6px top/left to center the anchor points
            className="absolute top-1/2 left-1/2 w-3 h-3 -ml-[6px] -mt-[6px] bg-error rounded-full shadow-[0_0_15px_var(--color-error)] border border-white/50"
            style={{
              ['--index' as any]: i,
              transform: `
                translate3d(
                  calc(sin(var(--index) * 2deg * 3) * 150px),
                  calc(cos(var(--index) * 2deg * 2) * 150px),
                  calc(sin(var(--index) * 2deg * 5) * 150px)
                )
              `
            }}
          />
        ))}

        {/* Central glowing core to anchor the visual */}
        {/* <div className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 bg-error/20 blur-xl rounded-full" /> */}
      </div>
    </div>
  );
}