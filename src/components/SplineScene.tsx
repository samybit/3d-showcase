// src/components/SplineScene.tsx
"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import { Application } from "@splinetool/runtime";

const SPLINE_SCENES = [
  {
    title: "Interactive Keyboard",
    url: "https://prod.spline.design/K8YPYhDudHxbZz9E/scene.splinecode",
  },
  {
    title: "Boxes Hover",
    url: "https://prod.spline.design/FyKGH-PYH9QRf9j5/scene.splinecode",
  },
  {
    title: "Cursor following",
    url: "https://prod.spline.design/vwsHNl8huPZcRX7G/scene.splinecode",
  },
];

export default function SplineScene() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  function onLoad(splineApp: Application) {
    setIsLoaded(true);
  }

  const handleNext = () => {
    setIsLoaded(false);
    setIndex((prev) => (prev + 1) % SPLINE_SCENES.length);
  };

  const handlePrev = () => {
    setIsLoaded(false);
    setIndex((prev) => (prev - 1 + SPLINE_SCENES.length) % SPLINE_SCENES.length);
  };

  return (
    <div className="absolute inset-0 w-full h-full group z-0">

      {/* Loading fallback */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="loading loading-ring loading-lg text-accent"></span>
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden translate-y-1/4 md:translate-y-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Spline
              style={{
                touchAction: 'none',
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 0.5s ease"
              }}
              scene={SPLINE_SCENES[index].url}
              onLoad={onLoad}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glassmorphic Control UI (Now floats at the absolute bottom of the screen) */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-black/60 md:bg-black/40 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 shadow-lg z-20 transition-all duration-300 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <button onClick={handlePrev} className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
          ❮
        </button>
        <div className="text-center min-w-[120px] md:min-w-[140px]">
          <p className="text-xs md:text-sm font-bold text-accent truncate">{SPLINE_SCENES[index].title}</p>
          <p className="text-[10px] md:text-xs text-white/60 font-mono tracking-widest">{index + 1} / {SPLINE_SCENES.length}</p>
        </div>
        <button onClick={handleNext} className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
          ❯
        </button>
      </div>

    </div>
  );
}