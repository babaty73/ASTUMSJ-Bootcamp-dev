import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreatePost from "./pages/CreatePost";
import Bookmarks from "./pages/BookMarks";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/posts?limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                loading={loading}
                error={error}
              />
            }
          />

          <Route
            path="/create"
            element={
              <CreatePost
                posts={posts}
                setPosts={setPosts}
              />
            }
          />

          <Route
  path="/blog/:id"
  element={
    <BlogDetails
      posts={posts}
    />
  }
/>

          <Route
            path="/bookmarks"
            element={<Bookmarks />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;