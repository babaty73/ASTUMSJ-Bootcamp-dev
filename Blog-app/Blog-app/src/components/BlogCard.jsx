import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
    >
      <h2 className="text-xl font-bold mb-3">
        {post.title}
      </h2>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default BlogCard;