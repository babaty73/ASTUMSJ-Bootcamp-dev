import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [postRes, commentRes] = await Promise.all([
          fetch(`https://dummyjson.com/posts/${id}`),
          fetch(`https://dummyjson.com/comments/post/${id}`),
        ]);

        const postData = await postRes.json();
        const commentData = await commentRes.json();

        setPost(postData);
        setComments(commentData.comments);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  function handleBookmark() {
    const exists = bookmarks.find((b) => b.id === post.id);

    if (exists) {
      setBookmarks(bookmarks.filter((b) => b.id !== post.id));
    } else {
      setBookmarks([...bookmarks, post]);
    }
  }

  if (loading) return <h1>Loading...</h1>;

  const isBookmarked = bookmarks.some((b) => b.id === post.id);

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate("/")}
        className="bg-gray-700 text-white px-4 py-2 rounded"
      >
        ← Back
      </button>

      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-gray-700 mb-6">
          {post.body}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
  {post.tags?.length > 0 ? (
    post.tags.map((tag) => (
      <span
        key={tag}
        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
      >
        #{tag}
      </span>
    ))
  ) : (
    <span className="text-gray-500">
      No tags
    </span>
  )}
</div>

        <button
          onClick={handleBookmark}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          {isBookmarked ? "Remove Bookmark" : "Bookmark"}
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Comments
        </h2>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-100 rounded p-4"
            >
              <p>{comment.body}</p>

              <p className="text-sm text-gray-500 mt-2">
                — {comment.user.username}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;