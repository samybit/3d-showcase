// src/components/SplineScene.tsx
"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";

const SPLINE_SCENES = [
  {
    title: "Boxes Hover",
    url: "https://prod.spline.design/FyKGH-PYH9QRf9j5/scene.splinecode",
  },
  {
    title: "Interactive Keyboard",
    url: "https://prod.spline.design/K8YPYhDudHxbZz9E/scene.splinecode",
  },
  {
    title: "Interactive Controller",
    url: "https://prod.spline.design/aj0gt8vzVzVy-FfK/scene.splinecode",
  }
];

export default function SplineScene() {
  const [index, setIndex] = useState(0);

  // Carousel logic wrapping around the array bounds
  const handleNext = () => setIndex((prev) => (prev + 1) % SPLINE_SCENES.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + SPLINE_SCENES.length) % SPLINE_SCENES.length);

  function handleSplineKeyDown(e: any) {
    // Check if the object triggered in Spline is named "Key Esc" 
    if (e.target.name === 'Key Esc') {

      // Programmatically force a download
      const link = document.createElement("a");
      link.href = "/Samy_Barsoum_CV.pdf";
      link.download = "Samy_Barsoum_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10 relative group bg-base-100">

      {/* Loading fallback behind the scene */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="loading loading-ring loading-lg text-accent"></span>
      </div>

      {/* 2. AnimatePresence handles the exit and entry animations of the 3D canvases */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Spline
              style={{ touchAction: 'none' }}
              scene={SPLINE_SCENES[index].url}
              // Attach the event listener to the Spline component
              onKeyDown={handleSplineKeyDown}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Glassmorphic Control UI */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg z-20 transition-transform duration-300 transform group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        <button onClick={handlePrev} className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
          ❮
        </button>
        <div className="text-center min-w-[140px]">
          <p className="text-sm font-bold text-accent truncate">{SPLINE_SCENES[index].title}</p>
          <p className="text-xs text-white/60 font-mono tracking-widest">{index + 1} / {SPLINE_SCENES.length}</p>
        </div>
        <button onClick={handleNext} className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
          ❯
        </button>
      </div>

    </div>
  );
}