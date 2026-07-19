import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import Bookmarks from "./pages/BookMarks";

function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </>
  );
}

export default App;