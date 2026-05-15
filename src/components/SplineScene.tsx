// src/components/SplineScene.tsx
"use client";

import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10 relative">
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-base-100">
        <span className="loading loading-ring loading-lg text-accent"></span>
      </div>

      <Spline
        style={{ touchAction: 'none' }}
        scene="https://prod.spline.design/FyKGH-PYH9QRf9j5/scene.splinecode"
      />
    </div>
  );
}