"use client";

import dynamic from "next/dynamic";
import { blogPosts, categories } from "@/app/blog/page";

const BlogContent = dynamic(() => import("@/components/blog-content"), {
  ssr: false,
});

export default function ClientBlogWrapper() {
  return <BlogContent blogPosts={blogPosts} categories={categories} />;
}
