import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import BlogCard from "../components/BlogCard";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);

  if (bookmarks.length === 0) {
    return (
      <h1 className="text-center text-2xl">
        No bookmarks yet.
      </h1>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">
        Bookmarks
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </>
  );
}

export default Bookmarks;