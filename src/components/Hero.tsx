// src/components/Hero.tsx
import Smoke from "./Smoke";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">

      {/* Explicitly hardcoded light gradient (No more base-100 theme variables!) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-200 -z-10" />

      <div className="text-center z-10">
        {/* Explicitly black text */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black drop-shadow-sm mb-6">
          DIMENSIONS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/40 to-black pr-1">
            UNLEASHED
          </span>
        </h1>

        {/* Explicitly dark gray text for the paragraph */}
        <p className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-12 font-medium tracking-wide">
          Scroll down to explore seven unique approaches to rendering the third dimension in the browser.
        </p>

        {/* The Button Wrapper with the Smoke Effect */}
        <div className="relative inline-block group">
          {/* inverse={true} ensures the smoke is black! */}
          <Smoke isActive={true} inverse={true} />

          <a
            href="#framer"

            className="relative z-10 btn btn-lg rounded-full bg-black/5 hover:bg-black text-black hover:text-white border border-black/20 hover:border-black backdrop-blur-md transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.05)] hover:shadow-[0_0_60px_rgba(0,0,0,0.2)] px-10"
          >
            Begin Journey
          </a>
        </div>
      </div>

    </section>
  );
}