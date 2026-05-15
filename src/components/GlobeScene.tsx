// src/components/GlobeScene.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const HUB_LAT = 30.0444;
const HUB_LNG = 31.2357;

export default function GlobeScene() {
  const globeRef = useRef<any>(null);
  const [arcsData, setArcsData] = useState<any[]>([]);
  const [ringsData, setRingsData] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const N = 30;
    const arcs = [];
    const rings = [];

    rings.push({
      lat: HUB_LAT,
      lng: HUB_LNG,
      color: "#a3e635",
      maxR: 5,
      propagationSpeed: 2,
      repeatPeriod: 1000
    });

    for (let i = 0; i < N; i++) {
      const targetLat = (Math.random() - 0.5) * 160;
      const targetLng = (Math.random() - 0.5) * 360;

      arcs.push({
        startLat: HUB_LAT,
        startLng: HUB_LNG,
        endLat: targetLat,
        endLng: targetLng,
        color: ["#38bdf8", "#818cf8", "#c084fc"][Math.floor(Math.random() * 3)],
      });

      rings.push({
        lat: targetLat,
        lng: targetLng,
        color: "#38bdf8",
        maxR: 2 + Math.random() * 2,
        propagationSpeed: 1 + Math.random(),
        repeatPeriod: 1000 + Math.random() * 2000
      });
    }

    setArcsData(arcs);
    setRingsData(rings);
  }, []);

  // Use this function instead of useEffect to guarantee the globe is ready
  const handleGlobeReady = () => {
    setIsLoaded(true);

    if (globeRef.current) {
      const controls = globeRef.current.controls();

      // Keep cinematic rotation
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;

      // Zoom is natively enabled by default, so we don't need to disable it anymore!

      // Pan to hub
      globeRef.current.pointOfView({ lat: HUB_LAT, lng: HUB_LNG, altitude: 2.2 }, 3000);
    }
  };

  // 1. Function to pause rotation
  const handleMouseEnter = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = false;
    }
  };

  // 2. Function to resume rotation
  const handleMouseLeave = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
    }
  };

  return (
    <div
      className="w-full h-full min-h-[600px] flex items-center justify-center cursor-move overflow-hidden rounded-3xl bg-gradient-to-b from-base-100 to-black shadow-2xl relative"
      style={{ touchAction: 'none' }}
      // 3. Attach the mouse events to the wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Loading fallback */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 z-10 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <span className="loading loading-ring loading-lg text-info"></span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <Globe
          ref={globeRef}
          onGlobeReady={handleGlobeReady}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={2000}
          arcsTransitionDuration={1000}
          ringsData={ringsData}
          ringColor="color"
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          atmosphereColor="#38bdf8"
          atmosphereAltitude={0.15}
        />
      </div>

      {/* <div className="absolute top-6 left-6 z-20 pointer-events-none">
        <div className="badge badge-info badge-outline bg-black/50 backdrop-blur-md">
          LIVE DATA STREAM
        </div>
      </div> */}
    </div>
  );
}