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
    * Dual-overlay fixed Navbar utilizing `mix-blend-difference` for smart color inversion over scrolling backgrounds.
    * Responsive mobile dropdown menu.
    * Reusable `BackgroundText` utility component for massive, subtle background typography.
2.  **Phase 2: Framer Motion (DOM Physics)**
    * Raw HTML manipulated in 3D space using native `z` props and Framer Motion's physics engine (`rotateX`, `rotateY`).
    * Features a 3D intersecting gyroscope and dynamic light glare that reacts to mouse coordinates.
3.  **Phase 3: React Three Fiber (Native WebGL)**
    * Native WebGL pipeline via Three.js.
    * Features a complex Torus Knot utilizing `MeshTransmissionMaterial` for real-time light refraction and glass physics.
    * Highly calibrated `ContactShadows` to prevent bounding-box clipping in standard DOM layouts.
4.  **Phase 4: Spline (Visual Editor)**
    * A full-bleed, responsive 3D background showcasing multiple scenes.
    * Wrapped in a Framer Motion `<AnimatePresence>` carousel for smooth scaling/fading between different Spline exports.
    * Glassmorphic overlay UI for scene control.
5.  **Phase 5: Globe.gl (Data Geospatial)**
    * A "Hub and Spoke" data visualization mapping a central geographic node (Cairo) to random global destinations.
    * Features pulsing radar rings, cinematic auto-rotation, and custom `onMouseEnter`/`onMouseLeave` rotation pausing.
    * Forced client-side rendering via `next/dynamic`.
6.  **Phase 6: Atropos (Micro-Interactions)**
    * A "Quantum Core" futuristic ID card utilizing `atropos` for deep holographic parallax hover effects.
    * Features extreme layer offsets (from -8 to +8) to exaggerate the optical illusion of depth.
7.  **Phase 7: Pure Modern CSS (Native Browser Math)**
    * A 3D Lissajous knot built with zero JavaScript physics.
    * Relies entirely on native CSS trigonometric functions (`sin()` and `cos()`) inside `calc()` combined with hardware-accelerated `translate3d`.

## ⚡ Performance Optimizations & Technical Decisions

We encountered and resolved several critical performance bottlenecks and configuration clashes due to the heavy nature of stacking multiple WebGL contexts:

* **GPU Context Management (The `LazyScene` Wrapper):** Running Three.js, Globe.gl, and Spline simultaneously caused severe GPU memory leaks and hard system freezes. We built a `LazyScene` wrapper using Framer Motion's `useInView` to unmount heavy WebGL canvases when they scroll out of the viewport, preserving memory.
* **Dual-Overlay Blend Modes:** Applying `mix-blend-difference` to fixed `z-index` navbars causes stacking context trapping. We bypassed this by rendering two perfectly overlapping navbars—one handling the blend math, and one invisible layer passing clicks through to maintain primary accent colors.
* **Spline Initialization State:** Placing mouse-tracking Spline scenes inside a sliding carousel causes infinite `requestAnimationFrame` crash loops. We resolved this by tying the canvas opacity to Spline's native `onLoad` Application event, preventing premature coordinate calculations.
* **Turbopack vs. Webpack Aliasing:** To resolve "Multiple instances of Three.js" warnings between `@react-three/fiber` and `@splinetool/react-spline`, we aliased `three` in `next.config.ts`. Because Next.js 16 defaults to Turbopack, we explicitly configured the `turbopack` block alongside `webpack`.
* **Touch Action Fixes:** Added `style={{ touchAction: 'none' }}` directly to the innermost `<Canvas>` elements to satisfy the `@use-gesture` library and prevent touch-scrolling conflicts on mobile devices.
* **Framer Motion Type Safety:** Replaced unnecessary `<motion.div>` elements with standard `<div>` elements for static depth layers to optimize performance and resolve `Transform | undefined` TypeScript errors.
* **CSS Custom Property Types:** Used bracket notation `['--index' as any]` in React style props to pass custom CSS variables to our Pure CSS 3D scene without breaking standard `CSSProperties` type checking.

## ⚠️ Known Quirks (Safe to Ignore)

* **Console Warnings in Dev:** You will see warnings like `Multiple instances of Three.js being imported` and `THREE.Clock: This module has been deprecated`. This is caused by `@splinetool/react-spline` relying on a pre-compiled, heavily customized internal version of Three.js that bypasses Next.js alias configs. These warnings only show in development and will be stripped in production.
* **Atropos Types:** The `atropos/css` import throws a missing type declaration warning in some strict TS environments. This is a library-side export map issue and does not affect the build or CSS rendering.

## 🏃‍♂️ How to Run

```bash
# Install dependencies
npm install

# Run the development server (uses Turbopack)
npm run dev
```
Open http://localhost:3000 with your browser to see the result.