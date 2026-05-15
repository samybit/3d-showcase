"use client";

import { useEffect, useId } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Smoke({ inverse = false, isActive = false }: { inverse?: boolean; isActive?: boolean }) {
  // Generate a unique ID for this specific smoke instance
  const rawId = useId().replace(/:/g, "");
  const containerId = `smoke-${rawId}`;

  useEffect(() => {
    let containerInstance: any;

    // 1. Load the slim engine
    loadSlim(tsParticles).then(() => {

      // 2. Command the engine to inject the canvas directly into our div!
      tsParticles.load({
        id: containerId,
        options: {
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: {
              value: 30, // Dense enough to form solid clouds
              density: { enable: true, width: 100, height: 100 },
            },
            color: { value: inverse ? "#000000" : "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: inverse ? 0.7 : 0.35 },
              animation: { enable: true, speed: 0.5, sync: false },
            },
            size: {
              value: { min: 10, max: 40 },
              animation: { enable: true, speed: 5, sync: false },
            },
            move: {
              enable: true,
              speed: { min: 0.5, max: 2 },
              direction: "top",
              random: true,
              straight: false,
              outModes: { default: "out" }, // Infinite updraft loop
            },
          },
        }
      }).then((container) => {
        // Save the instance so we can destroy it later
        containerInstance = container;
      });
    });

    // 3. Clean up the canvas when the component unmounts (Important for React Strict Mode!)
    return () => {
      if (containerInstance) {
        containerInstance.destroy();
      }
    };
  }, [containerId, inverse]);

  return (
    <div
      id={containerId}
      className={`absolute inset-[-50%] z-0 pointer-events-none blur-[6px] transition-opacity duration-500
      ${inverse ? "mix-blend-multiply" : "mix-blend-screen"}
      ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
    />
  );
}