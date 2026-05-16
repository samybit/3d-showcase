# DIMENSIONS UNLEASHED: 3D Web Showcase

A vertical storytelling web experience exploring seven distinct approaches to rendering the third dimension in the browser. 

This project serves as both a visual showcase and a technical reference for implementing different 3D libraries and techniques within a modern React framework.

## 🛠 Tech Stack
* **Framework:** Next.js 16.2.6 (App Router + Turbopack)
* **UI Library:** React 19
* **Styling:** Tailwind CSS v4 + DaisyUI v5.0 (Dark/Black theme primary)
* **Language:** TypeScript

## 🚀 The 8 Phases (Implemented Sections)

The page is structured as a single continuous scroll, featuring an alternating "zebra stripe" high-contrast background (Black and off-white/5% opacity).

1.  **Phase 1: Setup & Hero**
    * Dual-overlay fixed Navbar utilizing `mix-blend-difference` for smart color inversion over scrolling backgrounds.
    * Responsive mobile dropdown menu.
    * Reusable `BackgroundText` utility component for massive, subtle background typography.
    * Interactive volumetric ink-smoke particle effect integrated directly via `@tsparticles/engine`.
2.  **Phase 2: Framer Motion (DOM Physics)**
    * Raw HTML manipulated in 3D space using native `z` props and Framer Motion's physics engine (`rotateX`, `rotateY`).
    * Features interactive physical buttons (`whileHover`, `whileTap`) to demonstrate that native DOM events function perfectly in CSS 3D space without requiring WebGL raycasting.
3.  **Phase 3: React Three Fiber (Native WebGL)**
    * Native WebGL pipeline via Three.js.
    * Features a complex Torus Knot utilizing `MeshTransmissionMaterial` for real-time light refraction and glass physics.
    * Protected by a `<MobileSafeWebGL />` firewall that requires explicit user consent before mounting heavy rendering contexts on mobile devices.
4.  **Phase 4: Spline (Visual Editor)**
    * A full-bleed, responsive 3D background showcasing multiple scenes.
    * Wrapped in a Framer Motion `<AnimatePresence>` carousel for smooth scaling/fading between different Spline exports.
    * Glassmorphic overlay UI for scene control.
5.  **Phase 5: Globe.gl (Data Geospatial)**
    * A "Hub and Spoke" data visualization mapping a central geographic node (Cairo) to random global destinations.
    * Features pulsing radar rings, cinematic auto-rotation, and custom `onMouseEnter`/`onMouseLeave` rotation pausing.
    * Forced client-side rendering via `next/dynamic` with strict `isMounted` lifecycle tracking to prevent asynchronous state leaks.
6.  **Phase 6: Atropos (Micro-Interactions)**
    * A "Quantum Core" futuristic ID card utilizing `atropos` for deep holographic parallax hover effects.
    * Features extreme layer offsets (from -8 to +8) to exaggerate the optical illusion of depth.
7.  **Phase 7: Pure Modern CSS (Native Browser Math)**
    * A 3D Lissajous knot built with zero JavaScript physics.
    * Relies entirely on native CSS trigonometric functions (`sin()` and `cos()`) inside `calc()` combined with hardware-accelerated `translate3d`.
8.  **Phase 8: tsParticles (2D-to-3D Illusion)**
    * A "Quantum Constellation" full-bleed background utilizing the `@tsparticles/engine`.
    * Demonstrates how 2D canvas rendering can simulate 3D depth using mathematical parallax and interactive pointer tethering.
    * Bypasses the standard React wrapper for strict Turbopack compatibility.

## ⚡ Performance Optimizations & Technical Decisions

We encountered and resolved several critical performance bottlenecks and configuration clashes due to the heavy nature of stacking multiple WebGL contexts:

* **Aggressive VRAM Garbage Collection (`LazyScene` Wrapper):** Running Three.js, Globe.gl, and Spline simultaneously causes severe GPU memory leaks and hard system freezes. We built a `<LazyScene>` wrapper using Framer Motion's `useInView` (with a 600px margin) that strictly returns `null` when off-screen, forcing the browser to instantly dump the WebGL context from Video RAM.
* **Mobile WebGL Firewall:** Calculating physical glass refraction causes mobile GPUs to violently overheat and crash. We implemented a strictly gated component that detects mobile viewports and suspends initialization until the user explicitly opts in.
* **Resolution & DPR Capping:** High-end laptops with Retina displays attempt to calculate 3D scenes at 4K density, causing extreme fan noise. We programmatically capped the `devicePixelRatio` limit across Three.js and Globe.gl instances to a maximum of `1.5x`, cutting GPU calculation loads by up to 60%.
* **Ghost Loaders (CSS Animations):** Using `opacity-0` to hide DaisyUI's continuous CSS loading rings causes the GPU to indefinitely process invisible frames. We switched to strict conditional React unmounting (`{!isLoaded && <Loader />}`) to permanently kill the animation cycles once scenes are ready.
* **16-bit Depth Buffer Z-Fighting:** Mobile GPUs compress depth buffers, causing `<ContactShadows>` to flicker violently against base planes. We resolved this by passing `depthWrite={false}` to transparent shadow materials.
* **Color Space Interpolation Bugs:** Tailwind v4 defaults to `oklab` color spaces, which Framer Motion cannot currently interpolate during hover animations. We bypassed this by explicitly declaring `rgba` start states in inline styles for physical buttons.
* **Dual-Overlay Blend Modes:** Applying `mix-blend-difference` to fixed `z-index` navbars causes stacking context trapping. We bypassed this by rendering two perfectly overlapping navbars—one handling the blend math, and one invisible layer passing clicks through to maintain primary accent colors.
* **Vercel Build Configurations (`.npmrc`):** Strict React 19 dependency resolution fails on beta packages (like `@tsparticles`). We included a local `.npmrc` file with `legacy-peer-deps=true` and `ignore-scripts=true` to guarantee stable, automated cloud deployments.
* **Turbopack vs. Webpack Aliasing:** To resolve "Multiple instances of Three.js" warnings between `@react-three/fiber` and `@splinetool/react-spline`, we explicitly configured the `turbopack` block alongside `webpack` in `next.config.ts`.

## ⚠️ Known Quirks (Safe to Ignore)

* **WebGL/ANGLE Compiler Warnings:** You may see console warnings regarding "loop unrolling" or "uninitialized variables (f_blur)". These are low-level graphics driver optimizations triggered by Three.js shader compilation and do not affect performance or stability.
* **Console Warnings in Dev:** You will see warnings like `Multiple instances of Three.js being imported` and `THREE.Clock: This module has been deprecated`. This is caused by `@splinetool/react-spline` relying on a pre-compiled, internal version of Three.js that bypasses Next.js alias configs. These only show in development and are stripped in production.

## 🏃‍♂️ How to Run

```bash
# Install dependencies
npm install

# Run the development server (uses Turbopack)
npm run dev
```
Open http://localhost:3000 with your browser to see the result.