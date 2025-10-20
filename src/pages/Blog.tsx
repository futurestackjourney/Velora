// src/sections/Blog.tsx

import { BlogItems } from "../constants/Index";
import BlogCard from "../components/BlogCard";
import Hero from "../sections/Hero";
import HeadText from "../components/HeadText";

const Blog: React.FC = () => {
  return (
    <section className="mt-24">
      <Hero />
      <div className="section-padding">
        <HeadText headText="Playground" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BlogItems.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-end items-center mt-6 gap-4 text-brand-text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Blog;
