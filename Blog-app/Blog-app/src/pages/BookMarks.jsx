import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import BlogCard from "../components/BlogCard";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);

  if (bookmarks.length === 0) {
    return (
      <div className="text-center mt-24">
    <h1 className="text-4xl font-bold">
        No Bookmarks
    </h1>

    <p className="text-gray-500 mt-3">
        Save your favorite posts to read later.
    </p>
</div>
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