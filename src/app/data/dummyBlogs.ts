import { Blog } from "../types/blog";

export const blogs: Blog[] = Array.from({ length: 12 }).map((_, i) => ({
    id: `${i}`,
    title: `Understanding React Patterns ${i + 1}`,
    summary:
        "This blog explains advanced React patterns like compound components, render props, and hooks in a very practical way.",
    author: {
        name: "Himanshu",
        avatar: "https://i.pravatar.cc/150?img=" + (i + 1),
        headline: "Frontend Developer",
    },
    tags: ["react", "javascript", "frontend"],
    likes: Math.floor(Math.random() * 100),
    isSaved: false,
}));