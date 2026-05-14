// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundText from "@/components/BackgroundText";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      {/* Phase 2: Framer Motion Section (Placeholder) */}
      <section id="framer" className="relative min-h-screen flex items-center justify-center border-t border-white/10">
        <BackgroundText text="FRAMER MOTION" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center">DOM 3D Transformations</h2>
          <p className="text-center opacity-50 mt-4">[Framer Motion 3D Object will go here]</p>
        </div>
      </section>

      {/* Phase 3: Three.js Section (Placeholder) */}
      <section id="threejs" className="relative min-h-screen flex items-center justify-center border-t border-white/10 bg-base-300">
        <BackgroundText text="REACT THREE FIBER" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center">Native WebGL</h2>
          <p className="text-center opacity-50 mt-4">[Three.js Scene will go here]</p>
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