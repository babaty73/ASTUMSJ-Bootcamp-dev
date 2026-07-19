import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-semibold"
      : "text-gray-300 hover:text-white transition";

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Blog App
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
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

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <NavLink
            to="/"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/create"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            Create
          </NavLink>

          <NavLink
            to="/bookmarks"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            Bookmarks
          </NavLink>
        </div>
      )}
    </nav>
  );
}
export default Navbar;