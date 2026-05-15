import Smoke from "./Smoke";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">

      {/* Decorative background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-black to-black -z-10" />

      <div className="text-center z-10">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl mb-6">
          DIMENSIONS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            UNLEASHED
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium tracking-wide">
          Scroll down to explore six unique approaches to rendering the third dimension in the browser.
        </p>

        {/* The Button Wrapper with the Smoke Effect */}
        <div className="relative inline-block group">
          {/* We set isActive to true so it immediately catches their eye on landing! */}
          <Smoke isActive={true} />

          <a
            href="#framer"
            className="relative z-10 btn btn-lg rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white backdrop-blur-md transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] px-10"
          >
            Begin Journey
          </a>
        </div>
      </div>

    </section>
  );
}