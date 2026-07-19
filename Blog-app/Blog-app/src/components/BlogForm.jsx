import { useState } from "react";

function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    onSubmit({
      id: Date.now(),
      title,
      body,
      tags: ["custom"],
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Title"
        className="w-full border rounded p-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Content"
        rows={6}
        className="w-full border rounded p-3"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg"
      >
        Publish
      </button>
    </form>
  );
}

export default BlogForm;