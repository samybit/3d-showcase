// src/components/AtroposScene.tsx
"use client";

import Atropos from "atropos/react";
import "atropos/atropos.css";

export default function AtroposScene() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <Atropos
        className="w-full max-w-sm aspect-[5/7] rounded-[2rem]"
        activeOffset={40}
        shadowScale={1.1}
        rotateXMax={15}
        rotateYMax={15}
        highlight={true}
      >
        {/* Main Card Container: Dark, frosted glass look */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black shadow-2xl">

          {/* LAYER 1: Deep Background Glow (-8) */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 bg-warning/30 blur-[80px] rounded-full"
            data-atropos-offset="-8"
          />
          <div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"
            data-atropos-offset="-6"
          />

          {/* LAYER 2: The Grid (-4) */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]"
            data-atropos-offset="-4"
          />

          {/* LAYER 3: Mid-ground Abstract Shapes (0 to 2) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-48 h-48 border border-white/10 rounded-full absolute"
              data-atropos-offset="0"
            />
            <div
              className="w-32 h-32 border border-warning/30 rounded-full absolute"
              data-atropos-offset="2"
            />
          </div>

          {/* LAYER 4: Foreground Content (4 to 8) */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 z-10 pointer-events-none">

            {/* Top Bar */}
            <div className="w-full flex justify-between items-start">
              <div data-atropos-offset="4" className="space-y-1">
                <div className="text-xs font-mono text-white/50 tracking-widest">ID // 893-X</div>
                <div className="badge badge-warning badge-sm outline-none border-none bg-warning/20 text-warning">
                  ACTIVE
                </div>
              </div>
              <div data-atropos-offset="5" className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
              </div>
            </div>

            {/* Center Core Graphic */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div
                data-atropos-offset="7"
                className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-warning/80 to-primary/80 shadow-[0_0_30px_rgba(251,191,36,0.4)] flex items-center justify-center rotate-45 transform-gpu backdrop-blur-lg border border-white/30"
              >
                <div className="w-12 h-12 bg-black/50 rounded-lg -rotate-45" />
              </div>
            </div>

            {/* Bottom Text Block */}
            <div className="w-full space-y-1">
              <h3
                data-atropos-offset="8"
                className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 tracking-tight"
              >
                QUANTUM
              </h3>
              <p
                data-atropos-offset="6"
                className="text-sm font-mono text-warning tracking-widest uppercase"
              >
                Core Processing
              </p>
              <p
                data-atropos-offset="4"
                className="text-xs text-white/40 pt-2"
              >
                Hover to initialize parallax matrix.
              </p>
            </div>

          </div>
        </div>
      </Atropos>
    </div>
  );
}