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

  // 3. Map the spring values to 3D rotation angles
  const rotateX = useTransform(springY, [0, 1], [15, -15]);
  const rotateY = useTransform(springX, [0, 1], [-15, 15]);

  // 4. Handle mouse movement relative to the container
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    mouseX.set(xPct);
    mouseY.set(yPct);
  }

  // 5. Reset to center when the mouse leaves
  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div
      className="w-full h-full flex items-center justify-center p-8"
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
        className="relative w-full max-w-md aspect-[3/4] rounded-3xl bg-base-100/10 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center"
      >
        {/* Layer 1: Glowing orb pushed back into the card */}
        <motion.div
          style={{ transform: "translateZ(-50px)" }}
          className="absolute w-48 h-48 bg-primary rounded-full blur-[80px] opacity-40"
        />

        {/* Layer 2: Grid background resting slightly above the card surface */}
        <motion.div
          style={{ transform: "translateZ(20px)" }}
          className="absolute inset-4 rounded-2xl border border-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-20"
        />

        {/* Layer 3: Main UI elements floating significantly higher */}
        <motion.div
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
          className="flex flex-col items-center gap-6 z-10"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="text-4xl font-black text-black">DOM</span>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-white mb-2">CSS 3D</h3>
            <p className="text-sm opacity-70 max-w-[250px]">
              Manipulating the Document Object Model in three-dimensional space using physics-based values.
            </p>
          </div>

          <div className="flex gap-2">
            <div className="badge badge-primary badge-outline">X/Y Tracking</div>
            <div className="badge badge-secondary badge-outline">Spring Physics</div>
          </div>
        </motion.div>

        {/* Layer 4: Decorative floating ring at maximum Z-depth */}
        <motion.div
          style={{ transform: "translateZ(120px)" }}
          className="absolute w-64 h-64 border border-secondary/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}