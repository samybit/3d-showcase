// src/components/ParticlesScene.tsx
"use client";

import { useEffect, useId } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesScene({ className }: { className?: string }) {
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
            detectsOn: "parent",
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

  return <div id={containerId} className={className} />;
}