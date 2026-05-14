// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundText from "@/components/BackgroundText";
import FramerScene from "@/components/FramerScene";
import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      {/* Phase 2: Framer Motion Section */}
      <section id="framer" className="relative min-h-screen flex items-center justify-center border-t border-white/10 overflow-hidden">
        <BackgroundText text="FRAMER MOTION" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">DOM <br /><span className="text-primary">PHYSICS</span></h2>
            <p className="text-xl opacity-70 max-w-md">
              Hover over the card. We are not rendering to a canvas here. This is raw HTML manipulated in 3D space using CSS transforms, driven by React and Framer Motion's physics engine.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-primary">
              <li>No WebGL required</li>
              <li>Native DOM elements remain selectable</li>
              <li>Hardware-accelerated CSS rendering</li>
            </ul>
          </div>

          <div className="h-[600px] w-full flex items-center justify-center">
            <FramerScene />
          </div>
        </div>
      </section>

      {/* Phase 3: Three.js Section */}
      <section id="threejs" className="relative min-h-screen flex items-center justify-center border-t border-white/10 bg-base-300 overflow-hidden">
        <BackgroundText text="REACT THREE FIBER" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

          {/* Canvas on the left for zig-zag layout */}
          <div className="h-[600px] w-full flex items-center justify-center order-2 lg:order-1">
            <ThreeScene />
          </div>

          <div className="text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">NATIVE <br /><span className="text-secondary">WEBGL</span></h2>
            <p className="text-xl opacity-70 max-w-md">
              Grab and drag the object. This is a WebGL canvas rendering a complex mathematical geometry (Torus Knot) in real-time. The material calculates actual light refraction, chromatic aberration, and thickness.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-secondary">
              <li>Full WebGL pipeline via Three.js</li>
              <li>Real-time lighting and environment reflections</li>
              <li>High-performance geometry rendering</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Phase 4: Spline Section (Placeholder) */}
      <section id="spline" className="relative min-h-screen flex items-center justify-center border-t border-white/10">
        <BackgroundText text="SPLINE DESIGN" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center">Interactive Spline Scene</h2>
          <p className="text-center opacity-50 mt-4">[Spline Object will go here]</p>
        </div>
      </section>
    </main>
  );
}