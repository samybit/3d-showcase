import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import BackgroundText from "@/components/BackgroundText";

import FramerScene from "@/components/FramerScene";
import ThreeScene from "@/components/ThreeScene";
import SplineScene from "@/components/SplineScene";
import GlobeScene from "@/components/GlobeScene";
import AtroposScene from "@/components/AtroposScene";
import PureCSSScene from "@/components/PureCSSScene";
import ParticlesScene from "@/components/ParticlesScene";
import MobileSafeWebGL from "@/components/MobileSafeWebGL";

import LazyScene from "@/components/LazyScene";



export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      {/* Phase 2: Framer Motion Section (Dark) */}
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

      {/* Phase 3: Three.js Section (Light) */}
      <section id="threejs" className="relative min-h-screen flex items-center justify-center border-t border-black/10 bg-base-300 text-black overflow-hidden">
        <BackgroundText text="REACT THREE FIBER" darkText={true} />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

          <div className="h-[650px] w-full flex items-center justify-center order-2 lg:order-1">
            <MobileSafeWebGL />
          </div>

          <div className="text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">NATIVE <br /><span className="text-secondary">WEBGL</span></h2>
            <p className="text-xl opacity-80 max-w-md">
              Grab and drag the object. This is a WebGL canvas rendering a complex mathematical geometry (Torus Knot) in real-time. The material calculates actual light refraction, chromatic aberration, and thickness.
            </p>
            <ul className="space-y-2 font-medium list-disc list-inside marker:text-secondary">
              <li>Full WebGL pipeline via Three.js</li>
              <li>Real-time lighting and environment reflections</li>
              <li>High-performance geometry rendering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 4: Spline Section (Responsive Full Bleed) */}
      <section
        id="spline"
        className="relative min-h-screen flex items-start pt-28 md:pt-0 md:items-center border-t border-white/10 overflow-hidden bg-black"
      >
        <BackgroundText text="SPLINE DESIGN" />

        <div className="absolute inset-0 z-0 md:translate-x-1/4">
          <LazyScene>
            <SplineScene />
          </LazyScene>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pointer-events-none">
          <div className="text-left space-y-4 md:space-y-6 max-w-[95%] md:max-w-lg pointer-events-auto bg-black/60 md:bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">VISUAL <br /><span className="text-accent">EDITOR</span></h2>
            <p className="text-base md:text-lg opacity-80">
              Interact with the background. Spline provides a visual 3D modeling environment that exports directly into React components. It abstracts away the complex math of Three.js into a designer-friendly interface.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-accent font-medium text-sm md:text-base">
              <li>Visual editing and animation</li>
              <li>Built-in interactivity and states</li>
              <li>Easy React component export</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 5: Globe.gl Section (Light) */}
      <section id="globe" className="relative min-h-screen flex items-center justify-center border-t border-black/10 bg-base-300 text-black overflow-hidden">
        <BackgroundText text="REACT GLOBE GL" darkText={true} />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="h-[600px] w-full flex items-center justify-center order-2 lg:order-1">
            <LazyScene>
              <GlobeScene />
            </LazyScene>
          </div>
          <div className="text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">DATA <br /><span className="text-info">GEOSPATIAL</span></h2>
            <p className="text-xl opacity-80 max-w-md">
              Spin the earth. When dealing with 3D data visualization, specialized libraries like Globe.gl map geographical coordinates to WebGL geometry, allowing thousands of animated data points to render effortlessly.
            </p>
            <ul className="space-y-2 font-medium list-disc list-inside marker:text-info">
              <li>Lat/Lng coordinate mapping to 3D space</li>
              <li>Animated flight paths and data arcs</li>
              <li>High-performance data rendering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 6: Atropos Section (Dark) */}
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

      {/* Phase 7: Pure CSS Section (Light) */}
      {/* REMOVED pb-20 from here so it sits flush with the next section */}
      <section id="css3d" className="relative min-h-screen flex items-center justify-center border-t border-black/10 bg-base-300 text-black overflow-hidden">
        <BackgroundText text="PURE MODERN CSS" darkText={true} />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">

          <div className="h-[600px] w-full flex items-center justify-center order-2 lg:order-1">
            <PureCSSScene />
          </div>

          <div className="text-left space-y-6 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">NATIVE <br /><span className="text-error">BROWSER MATH</span></h2>
            <p className="text-xl opacity-80 max-w-md">
              This 3D Lissajous knot uses zero JavaScript for its physics or positioning. It relies entirely on native CSS trigonometric functions <code>sin()</code> and <code>cos()</code> calculated inside the browser engine.
            </p>
            <ul className="space-y-2 font-medium list-disc list-inside marker:text-error">
              <li>No WebGL or canvas required</li>
              <li>100% native CSS math via <code>calc()</code></li>
              <li>Minimal DOM nodes with high-performance <code>translate3d</code></li>
            </ul>
          </div>

        </div>
      </section>

      {/* Phase 8: tsParticles Section (Dark) */}
      <section id="tsparticles" className="relative min-h-screen flex items-center justify-center border-t border-white/10 overflow-hidden bg-black">
        <BackgroundText text="TS PARTICLES" />
        <ParticlesScene className="absolute inset-0 z-0" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">QUANTUM <br /><span className="text-info">CONSTELLATION</span></h2>
            <p className="text-xl opacity-70 max-w-md">
              Move your mouse through the grid. By leveraging native 2D canvas rendering with mathematical parallax, we can create the illusion of extreme 3D volumetric space with a fraction of the performance overhead.
            </p>
            <ul className="space-y-2 opacity-80 list-disc list-inside marker:text-info">
              <li>High-performance 2D Canvas rendering</li>
              <li>Mathematical Parallax Z-Depth</li>
              <li>Interactive node tethering</li>
            </ul>
          </div>
          <div className="h-[600px] w-full flex items-center justify-center">
            {/* Re-created the card from the original ParticlesScene, but without the particles inside it. */}
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl group">
              {/* Floating Glassmorphic UI Overlay */}
              <div className="z-10 flex flex-col items-center gap-6 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                <div className="w-24 h-24 rounded-2xl bg-black/50 border border-white/20 flex items-center justify-center shadow-lg shadow-info/20 backdrop-blur-md">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-info to-secondary">
                    tsP
                  </span>
                </div>

                <div className="text-center space-y-2 backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
                  <h3 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">Particle Engine</h3>
                  <p className="text-sm text-white/70 max-w-[280px] font-medium">
                    2D canvas utilizing mathematical parallax and spatial tethering to simulate 3D volume.
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="badge badge-info badge-outline bg-black/40 backdrop-blur-md font-bold py-3">Parallax Z-Depth</div>
                  <div className="badge badge-secondary badge-outline bg-black/40 backdrop-blur-md font-bold py-3">Node Tethers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}