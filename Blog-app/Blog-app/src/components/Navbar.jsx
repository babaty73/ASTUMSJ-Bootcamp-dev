import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          Blog App
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link to="/create" className="hover:text-gray-200">
            Create Post
          </Link>

          <Link to="/bookmarks" className="hover:text-gray-200">
            Bookmarks
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;