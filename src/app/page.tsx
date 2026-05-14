// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundText from "@/components/BackgroundText";
import FramerScene from "@/components/FramerScene";
import ThreeScene from "@/components/ThreeScene";
import SplineScene from "@/components/SplineScene";
import GlobeScene from "@/components/GlobeScene";
import AtroposScene from "@/components/AtroposScene";
import PureCSSScene from "@/components/PureCSSScene";

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
              <li>Native DOM elements (buttons, text) remain selectable</li>
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

      {/* Phase 4: Spline Section */}
      <section id="spline" className="relative min-h-screen flex items-center justify-center border-t border-white/10 overflow-hidden">
        <BackgroundText text="SPLINE DESIGN" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">VISUAL <br /><span className="text-accent">EDITOR</span></h2>
            <p className="text-xl opacity-70 max-w-md">
              Interact with the keyboard. Spline provides a visual 3D modeling environment that exports directly into React components. It abstracts away the complex math of Three.js into a designer-friendly interface.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-accent">
              <li>Visual editing and animation</li>
              <li>Built-in interactivity and states</li>
              <li>Easy iframe or React component export</li>
            </ul>
          </div>
          <div className="h-[600px] w-full flex items-center justify-center p-4">
            <SplineScene />
          </div>
        </div>
      </section>

      {/* Phase 5: Globe.gl Section */}
      <section id="globe" className="relative min-h-screen flex items-center justify-center border-t border-white/10 bg-base-300 overflow-hidden">
        <BackgroundText text="REACT GLOBE GL" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="h-[600px] w-full flex items-center justify-center order-2 lg:order-1">
            <GlobeScene />
          </div>
          <div className="text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">DATA <br /><span className="text-info">GEOSPATIAL</span></h2>
            <p className="text-xl opacity-70 max-w-md">
              Spin the earth. When dealing with 3D data visualization, specialized libraries like Globe.gl map geographical coordinates to WebGL geometry, allowing thousands of animated data points to render effortlessly.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-info">
              <li>Lat/Lng coordinate mapping to 3D space</li>
              <li>Animated flight paths and data arcs</li>
              <li>High-performance data rendering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 6: Atropos Section */}
      <section id="atropos" className="relative min-h-screen flex items-center justify-center border-t border-white/10 overflow-hidden">
        <BackgroundText text="ATROPOS PARALLAX" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">MICRO <br /><span className="text-warning">INTERACTIONS</span></h2>
            <p className="text-xl opacity-70 max-w-md">
              Hover over the data slab. Atropos creates stunning, multi-layered holographic parallax effects. It excels at adding extreme depth to UI cards and heroic imagery without the heavy overhead of a full 3D engine.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-warning">
              <li>Hardware-accelerated CSS transformations</li>
              <li>Touch and gyro-sensor support for mobile</li>
              <li>Built-in highlight and shadow engine</li>
            </ul>
          </div>
          <div className="h-[600px] w-full flex items-center justify-center">
            <AtroposScene />
          </div>
        </div>
      </section>

      {/* Phase 7: Pure CSS Section */}
      <section id="css3d" className="relative min-h-screen flex items-center justify-center border-t border-white/10 bg-base-300 overflow-hidden pb-20">
        <BackgroundText text="PURE MODERN CSS" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

          <div className="h-[600px] w-full flex items-center justify-center order-2 lg:order-1">
            <PureCSSScene />
          </div>

          <div className="text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">NATIVE <br /><span className="text-error">BROWSER MATH</span></h2>
            <p className="text-xl opacity-70 max-w-md">
              This 3D Lissajous knot uses zero JavaScript for its physics or positioning. It relies entirely on native CSS trigonometric functions <code>sin()</code> and <code>cos()</code> calculated inside the browser engine.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-error">
              <li>No WebGL or canvas required</li>
              <li>100% native CSS math via <code>calc()</code></li>
              <li>Minimal DOM nodes with high-performance <code>translate3d</code></li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}