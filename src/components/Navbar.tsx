// components/Navbar.tsx
export default function Navbar() {
  return (
    <div className="navbar bg-base-100/50 backdrop-blur-md fixed top-0 z-50 border-b border-white/10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl tracking-widest font-bold">
          3D<span className="text-primary">WEB</span>
        </a>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-semibold tracking-wide">
          <li><a href="#framer">DOM 3D</a></li>
          <li><a href="#threejs">WebGL</a></li>
          <li><a href="#spline">Spline</a></li>
        </ul>
      </div>
    </div>
  );
}