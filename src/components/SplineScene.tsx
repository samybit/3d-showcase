// src/components/SplineScene.tsx
"use client";

import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  return (
    <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10 relative">
      {/* Loading fallback in case the Spline asset takes a moment to fetch */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-base-100">
        <span className="loading loading-ring loading-lg text-accent"></span>
      </div>

      {/* 
        This URL points to a public 3D interactive keyboard created in Spline.
        You can replace this with your own .splinecode export URL later.
      */}
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </div>
  );
}