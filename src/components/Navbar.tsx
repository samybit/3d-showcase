export default function Navbar() {
  return (
    <div className="navbar fixed top-0 z-50 w-full mix-blend-difference text-white">
      <div className="flex-1">
        <a href="#" className="btn btn-ghost text-xl tracking-widest font-bold hover:bg-transparent">
          3D<span className="text-primary">WEB</span>
        </a>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-semibold tracking-wide">
          <li><a href="#framer">DOM 3D</a></li>
          <li><a href="#threejs">WebGL</a></li>
          <li><a href="#spline">Spline</a></li>
          <li><a href="#globe">Globe.gl</a></li>
          <li><a href="#atropos">Atropos</a></li>
          <li><a href="#css3d">Pure CSS</a></li>
        </ul>
      </div>
    </div>
  );
}