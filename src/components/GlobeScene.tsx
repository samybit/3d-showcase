// src/components/GlobeScene.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Force client-side rendering to avoid 'window is not defined' SSR errors
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function GlobeScene() {
  const [arcsData, setArcsData] = useState<any[]>([]);

  // Generate random flight paths / data connections
  useEffect(() => {
    const N = 40;
    const arcs = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      // Pick random colors from a DaisyUI-compatible palette
      color: ["#38bdf8", "#818cf8", "#c084fc"][Math.floor(Math.random() * 3)],
    }));
    setArcsData(arcs);
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center cursor-move overflow-hidden rounded-3xl border border-white/10 bg-base-100 shadow-2xl relative">
      {/* Loading fallback while the heavy WebGL component loads */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <span className="loading loading-ring loading-lg text-info"></span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Globe
          width={600}
          height={600}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={1500}
          arcsTransitionDuration={0}
          atmosphereColor="#38bdf8"
          atmosphereAltitude={0.25}
        />
      </div>
    </div>
  );
}