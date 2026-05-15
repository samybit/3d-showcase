// src/components/FramerScene.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

export default function FramerScene() {
  // 1. Setup motion values for mouse coordinates
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // 2. Wrap them in springs for fluid, bouncy movement
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3. Map the spring values to 3D rotation angles (Increased for more drama)
  const rotateX = useTransform(springY, [0, 1], [25, -25]);
  const rotateY = useTransform(springX, [0, 1], [-25, 25]);

  // 4. Map the springs to a dynamic glare/sheen effect
  const glareX = useTransform(springX, [0, 1], ["-100%", "100%"]);
  const glareY = useTransform(springY, [0, 1], ["-100%", "100%"]);
  const glareOpacity = useTransform(springY, [0, 1], [0.1, 0.4]);

  // 5. Handle mouse movement relative to the container
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  // 6. Reset to center when the mouse leaves
  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      className="w-full h-full flex items-center justify-center p-8 group"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-md aspect-[3/4] rounded-3xl bg-base-100/40 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Layer 1: Dynamic Glare (Moves with the light source) */}
        <motion.div
          style={{ x: glareX, y: glareY, opacity: glareOpacity }}
          className="absolute inset-0 z-50 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_50%)] mix-blend-overlay"
        />

        {/* Layer 2: Deep Background Orb */}
        <motion.div
          style={{ z: -80 }}
          className="absolute w-64 h-64 bg-primary rounded-full blur-[100px] opacity-30"
        />

        {/* Layer 3: Floating Grid Base */}
        <motion.div
          style={{ z: 20 }}
          className="absolute inset-6 rounded-2xl border border-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"
        />

        {/* Layer 4: 3D Gyroscope Rings (Replacing the single ring) */}
        <motion.div
          style={{ z: 60, transformStyle: "preserve-3d" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ rotateX: 360, rotateY: 180 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 border-[3px] border-primary/80 shadow-lg shadow-primary/40 rounded-full"
          />
          <motion.div
            animate={{ rotateY: 360, rotateZ: 180 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 border-[3px] border-secondary/80 shadow-lg shadow-secondary/40 rounded-full"
          />
          <motion.div
            animate={{ rotateZ: 360, rotateX: 180 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-56 h-56 border-[3px] border-accent/80 shadow-lg shadow-accent/40 rounded-full"
          />
        </motion.div>

        {/* Layer 5: High-Z Foreground UI */}
        <motion.div
          style={{ z: 100, transformStyle: "preserve-3d" }}
          className="flex flex-col items-center gap-6 z-10"
        >
          {/* Super elevated logo block */}
          <motion.div
            style={{ z: 140 }}
            className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20"
          >
            <span className="text-5xl font-black text-white drop-shadow-lg">DOM</span>
          </motion.div>

          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold tracking-tight text-white drop-shadow-md">CSS Physics</h3>
            <p className="text-sm text-white/70 max-w-[260px] font-medium">
              Zero WebGL. 100% native DOM elements rendered in absolute 3D space using Framer Motion.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <motion.button
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => alert("Native DOM click event fired! No WebGL raycasting required.")}
              className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white backdrop-blur-md shadow-lg cursor-pointer"
            >
              X/Y Tracking
            </motion.button>

            <motion.button
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => alert("Spring physics activated! Notice how the 3D card keeps tracking your mouse even while the button alerts.")}
              className="px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white backdrop-blur-md shadow-lg cursor-pointer"
            >
              Spring Physics
            </motion.button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}