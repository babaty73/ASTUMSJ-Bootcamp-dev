import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-white transition";

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">
          Blog App
        </h1>

        <div className="flex gap-8">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/create" className={linkStyle}>
            Create
          </NavLink>

          <NavLink to="/bookmarks" className={linkStyle}>
            Bookmarks
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;