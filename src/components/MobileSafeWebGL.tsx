// src/components/MobileSafeWebGL.tsx
"use client";

import { useState, useEffect } from "react";
import ThreeScene from "./ThreeScene";
import LazyScene from "./LazyScene";

export default function MobileSafeWebGL() {
  const [isMobile, setIsMobile] = useState(false);
  const [userConsented, setUserConsented] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if the screen is mobile-sized (Tailwind's md breakpoint is 768px)
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Prevent SSR hydration mismatch by rendering a safe empty state until mounted
  if (!isMounted) {
    return <div className="w-full h-full rounded-3xl bg-black/5 animate-pulse" />;
  }

  // If it's a mobile device and they haven't clicked the button, show the warning
  if (isMobile && !userConsented) {
    return (
      <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-black/5 rounded-3xl border border-black/10 backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-warning mb-4 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2 text-black">Heavy 3D Render</h3>
        <p className="text-sm text-black/70 mb-8 max-w-[260px] font-medium">
          This WebGL glass simulation is highly demanding and may cause your device to overheat or lag.
        </p>
        <button
          onClick={() => setUserConsented(true)}
          className="btn btn-warning btn-outline rounded-full px-8 font-bold border-2"
        >
          Render Anyway
        </button>
      </div>
    );
  }

  // If it's a desktop OR they consented on mobile, render the heavy scene safely!
  return (
    <LazyScene>
      <ThreeScene />
    </LazyScene>
  );
}