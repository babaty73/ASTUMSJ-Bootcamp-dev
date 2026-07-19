import BlogCard from "../components/BlogCard";

function Home({ posts, loading, error }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-500 text-xl">
        {error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Latest Posts
          </h1>

          <p className="text-gray-500 mt-2">
            Read and discover interesting blogs.
          </p>
        </div>

        <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
          {posts.length} Posts
        </span>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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