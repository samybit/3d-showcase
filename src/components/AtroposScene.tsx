// src/components/AtroposScene.tsx
"use client";

import Atropos from "atropos/react";
// Atropos requires its core CSS to function correctly
import "atropos/css";

export default function AtroposScene() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <Atropos
        className="w-full max-w-sm aspect-[3/4] rounded-3xl"
        activeOffset={40}
        shadowScale={1.05}
        highlight={true}
      >
        {/* Container inside Atropos needs to match dimensions */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-base-100 shadow-2xl">

          {/* Deep Background: Pushed far back (-5) */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-warning/20 via-base-100 to-base-300"
            data-atropos-offset="-5"
          />

          {/* Grid Layer: Pushed slightly back (-2) */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]"
            data-atropos-offset="-2"
          />

          {/* Main Content: Resting at 0 and popping out positively */}
          <div className="absolute inset-0 flex flex-col items-center justify-between p-8 z-10">

            {/* Top Badge: Popping out (3) */}
            <div data-atropos-offset="3" className="w-full flex justify-between items-center">
              <span className="badge badge-warning badge-outline">LEVEL 6</span>
              <div className="w-4 h-4 rounded-full bg-warning animate-pulse shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
            </div>

            {/* Center Graphic: Popping out aggressively (6) */}
            <div data-atropos-offset="6" className="relative group cursor-pointer">
              <div className="w-32 h-32 rounded-full border-4 border-warning flex items-center justify-center backdrop-blur-sm bg-black/30">
                <span className="text-5xl font-black text-warning">A</span>
              </div>
            </div>

            {/* Bottom Text: Staggered pop out (2 to 4) */}
            <div className="text-center w-full">
              <h3 data-atropos-offset="4" className="text-3xl font-bold tracking-widest text-white mb-2 uppercase">
                Hologram
              </h3>
              <p data-atropos-offset="2" className="text-xs opacity-60 font-mono">
                OPTICAL_PARALLAX_ENGAGED
              </p>
            </div>

          </div>
        </div>
      </Atropos>
    </div>
  );
}