# DIMENSIONS UNLEASHED: 3D Web Showcase

A vertical storytelling web experience exploring six distinct approaches to rendering the third dimension in the browser. 

This project serves as both a visual showcase and a technical reference for implementing different 3D libraries and techniques within a modern React framework.

## 🛠 Tech Stack
* **Framework:** Next.js 16.2.6 (App Router + Turbopack)
* **UI Library:** React 19
* **Styling:** Tailwind CSS v4 + DaisyUI v5.0 (Dark/Black theme primary)
* **Language:** TypeScript

## 🚀 The 6 Phases (Implemented Sections)

The page is structured as a single continuous scroll, featuring an alternating "zebra stripe" high-contrast background (Black and off-white/5% opacity).

1.  **Phase 1: Setup & Hero**
    * Sticky glassmorphism Navbar with smooth anchor scrolling.
    * Hero section introducing the showcase.
    * Reusable `BackgroundText` utility component for massive, subtle background typography.
2.  **Phase 2: Framer Motion (DOM Physics)**
    * Raw HTML manipulated in 3D space using CSS transforms and Framer Motion's physics engine (`rotateX`, `rotateY`, `translateZ`, `perspective`).
3.  **Phase 3: React Three Fiber (Native WebGL)**
    * Native WebGL pipeline via Three.js.
    * Features a complex Torus Knot utilizing `MeshTransmissionMaterial` for real-time light refraction and glass physics, wrapped in `PresentationControls` for drag interaction.
4.  **Phase 4: Spline (Visual Editor)**
    * Interactive 3D scene built via Spline's visual editor and exported using `@splinetool/react-spline`.
5.  **Phase 5: Globe.gl (Data Geospatial)**
    * Data visualization mapping geographical coordinates to 3D space using `react-globe.gl` (forced client-side rendering via `next/dynamic`).
6.  **Phase 6: Atropos (Micro-Interactions)**
    * Holographic parallax hover effects and multi-layered UI depth utilizing `atropos`.
7.  **Phase 7: Pure Modern CSS (Native Browser Math)**
    * A 3D Lissajous knot built with zero JavaScript physics.
    * Relies entirely on native CSS trigonometric functions (`sin()` and `cos()`) inside `calc()` combined with hardware-accelerated `translate3d`.

## ⚡ Performance Optimizations & Technical Decisions

We encountered and resolved several critical performance bottlenecks and configuration clashes due to the heavy nature of stacking multiple WebGL contexts:

* **GPU Context Management (The `LazyScene` Wrapper):** Running Three.js, Globe.gl, and Spline simultaneously caused severe GPU memory leaks and hard system freezes. We built a `LazyScene` wrapper using Framer Motion's `useInView` to unmount heavy WebGL canvases when they scroll out of the viewport, preserving memory.
* **Turbopack vs. Webpack Aliasing:** To resolve "Multiple instances of Three.js" warnings between `@react-three/fiber` and `@splinetool/react-spline`, we aliased `three` in `next.config.ts`. Because Next.js 16 defaults to Turbopack, we explicitly configured the `turbopack` block alongside `webpack`.
* **Touch Action Fixes:** Added `style={{ touchAction: 'none' }}` to draggable WebGL canvases to satisfy the `@use-gesture` library and prevent touch-scrolling conflicts.
* **Framer Motion Type Safety:** Replaced unnecessary `<motion.div>` elements with standard `<div>` elements for static depth layers to optimize performance and resolve `Transform | undefined` TypeScript errors.
* **CSS Custom Property Types:** Used bracket notation `['--index' as any]` in React style props to pass custom CSS variables to our Pure CSS 3D scene without breaking standard `CSSProperties` type checking.

## ⚠️ Known Quirks (Safe to Ignore)

* **Console Warnings in Dev:** You will see warnings like `Multiple instances of Three.js being imported` and `THREE.Clock: This module has been deprecated`. This is caused by `@splinetool/react-spline` relying on a pre-compiled, heavily customized internal version of Three.js that bypasses Next.js alias configs. These warnings only show in development and will be stripped in production.

## 🏃‍♂️ How to Run

```bash
# Install dependencies
npm install

# Run the development server (uses Turbopack)
npm run dev
```
Open http://localhost:3000 with your browser to see the result.