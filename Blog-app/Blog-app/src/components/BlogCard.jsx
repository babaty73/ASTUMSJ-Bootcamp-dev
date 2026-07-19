import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 block"
    >
      <h2 className="text-xl font-bold mb-4">
        {post.title}
      </h2>

      <p className="text-gray-600 line-clamp-3 mb-5">
        {post.body}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {post.reactions?.likes && (
        <p className="text-sm text-gray-500">
            👍 {post.reactions.likes} Likes
        </p>
      )}
    </Link>
  );
}

export default BlogCard;