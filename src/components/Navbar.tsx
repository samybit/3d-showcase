// src/components/Navbar.tsx
export default function Navbar() {
  // Store links in a variable so we don't duplicate code for mobile/desktop
  const navLinks = (
    <>
      <li><a href="#framer">DOM 3D</a></li>
      <li><a href="#threejs">WebGL</a></li>
      <li><a href="#spline">Spline</a></li>
      <li><a href="#globe">Globe.gl</a></li>
      <li><a href="#atropos">Atropos</a></li>
      <li><a href="#css3d">Pure CSS</a></li>
    </>
  );

  return (
    <div className="navbar fixed top-0 z-50 w-full mix-blend-difference text-white px-4 md:px-0">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost text-xl tracking-widest font-bold hover:bg-transparent">
          3D<span className="text-primary">WEB</span>
        </a>
      </div>

      <div className="flex-none">

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-semibold tracking-wide">
            {navLinks}
          </ul>
        </div>

        {/* Mobile Menu (Hidden on desktop) */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          {/* The dropdown background is black. 
            Because the parent has `mix-blend-difference`, 
            this will intelligently invert to white if the user opens it over a white section! 
          */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-black border border-white/20 rounded-box w-52 font-semibold tracking-wide">
            {navLinks}
          </ul>
        </div>

      </div>
    </div>
  );
}