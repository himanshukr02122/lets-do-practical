import { blogs } from "@/app/data/dummyBlogs";
import { Blog } from "@/app/types/blog";
import BlogCard from "./BlogCard";
import AdCard from "./ads/AdCard";

export default function BlogFeed() {
  return (
    <div className="space-y-4">
      {blogs.map((blog: Blog, index: number) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />

          {/* In-feed Ad */}
          {(index + 1) % 4 === 0 && <AdCard type="banner" />}
        </div>
      ))}
    </div>
  );
}