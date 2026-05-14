// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-300">
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg">
          DIMENSIONS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            UNLEASHED
          </span>
        </h1>
        <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-10">
          Scroll down to explore three unique approaches to rendering the third dimension in the browser.
        </p>
        <a href="#framer" className="btn btn-primary btn-lg rounded-full">
          Begin Journey
        </a>
      </div>

      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
}