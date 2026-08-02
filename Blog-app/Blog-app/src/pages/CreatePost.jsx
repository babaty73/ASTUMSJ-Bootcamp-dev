import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

function CreatePost({ posts, setPosts }) {
  const navigate = useNavigate();

  function handleCreate(post) {
    const newPost = {
      ...post,
      id: Date.now(),
      tags: post.tags || [],
      reactions: {
        likes: 0,
      },
      comments: [],
    };

    setPosts([newPost, ...posts]);

    navigate("/");
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">
        Create Post
      </h1>

      <BlogForm onSubmit={handleCreate} />
    </>
  );
}

export default CreatePost;