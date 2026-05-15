// src/components/Navbar.tsx
export default function Navbar() {
  const navLinks = (
    <>
      <li><a href="#framer">DOM 3D</a></li>
      <li><a href="#threejs">WebGL</a></li>
      <li><a href="#spline">Spline</a></li>
      <li><a href="#globe">Globe.gl</a></li>
      <li><a href="#atropos">Atropos</a></li>
      <li><a href="#css3d">Pure CSS</a></li>
      <li><a href="#tsparticles">Particles</a></li>
    </>
  );

  return (
    <>
      {/* LAYER 1: The Inverting Layer (mix-blend-difference) */}
      <div className="navbar fixed top-0 z-40 w-full px-3 md:px-6 mix-blend-difference text-white">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost text-xl tracking-widest font-bold hover:bg-transparent">
            3D<span className="opacity-0">WEB</span> {/* Invisible spacer */}
          </a>
        </div>

        <div className="flex-none">
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1 font-semibold tracking-wide">
              {navLinks}
            </ul>
          </div>

          <div className="dropdown dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-black border border-white/20 rounded-box w-52 font-semibold tracking-wide">
              {navLinks}
            </ul>
          </div>
        </div>
      </div>

      {/* LAYER 2: The Color Text Layer (Ignores blend, ignores clicks) */}
      <div className="navbar fixed top-0 z-50 w-full px-3 md:px-6 pointer-events-none">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost text-xl tracking-widest font-bold hover:bg-transparent">
            <span className="opacity-0">3D</span> {/* Invisible spacer */}
            <span className="text-primary pointer-events-auto">WEB</span> {/* Visible color! */}
          </a>
        </div>

        {/* Invisible structural clone to guarantee exact pixel alignment */}
        <div className="flex-none opacity-0">
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks}
            </ul>
          </div>
          <div className="dropdown dropdown-end md:hidden">
            <div className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}