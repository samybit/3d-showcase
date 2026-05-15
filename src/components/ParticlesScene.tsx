// src/components/ParticlesScene.tsx
"use client";

import { useEffect, useId } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesScene() {
  const rawId = useId().replace(/:/g, "");
  const containerId = `quantum-net-${rawId}`;

  useEffect(() => {
    let containerInstance: any;

    loadSlim(tsParticles).then(() => {
      tsParticles.load({
        id: containerId,
        options: {
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 120, // High refresh rate for buttery smooth links

          // The 3D Magic happens here
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab"], // Tethers to the mouse
                parallax: { enable: true, force: 60, smooth: 10 } // True 3D depth illusion!
              },
            },
            modes: {
              grab: {
                distance: 250,
                links: { opacity: 0.6, color: "#38bdf8" }
              },
            },
          },

          particles: {
            // Using your DaisyUI gradient colors
            color: { value: ["#38bdf8", "#818cf8", "#c084fc"] },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.15,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" } // Traps them in the glass box
            },
            number: {
              density: { enable: true, width: 800, height: 800 },
              value: 120 // High density for a complex web
            },
            opacity: { value: { min: 0.3, max: 0.7 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }
      }).then((container) => {
        containerInstance = container;
      });
    });

    return () => {
      if (containerInstance) containerInstance.destroy();
    };
  }, [containerId]);

  return (
    <div className="relative w-full h-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-black border border-white/10 shadow-2xl group">

      {/* The Particle Canvas Container */}
      <div id={containerId} className="absolute inset-0 z-0" />

      {/* Floating Glassmorphic UI Overlay (Matches your Phase 2 aesthetic) */}
      <div className="z-10 flex flex-col items-center gap-6 pointer-events-none transition-transform duration-700 group-hover:scale-105">
        <div className="w-24 h-24 rounded-2xl bg-black/50 border border-white/20 flex items-center justify-center shadow-lg shadow-info/20 backdrop-blur-md">
          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-info to-secondary">
            tsP
          </span>
        </div>

        <div className="text-center space-y-2 backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
          <h3 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">Particle Engine</h3>
          <p className="text-sm text-white/70 max-w-[280px] font-medium">
            2D canvas utilizing mathematical parallax and spatial tethering to simulate 3D volume.
          </p>
        </div>

        <div className="flex gap-2">
          <div className="badge badge-info badge-outline bg-black/40 backdrop-blur-md font-bold py-3">Parallax Z-Depth</div>
          <div className="badge badge-secondary badge-outline bg-black/40 backdrop-blur-md font-bold py-3">Node Tethers</div>
        </div>
      </div>

    </div>
  );
}