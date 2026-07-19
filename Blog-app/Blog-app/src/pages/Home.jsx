import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Home() {
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

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading posts...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500 mt-10">
        {error}
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Latest Blog Posts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;