"use client";

import dynamic from "next/dynamic";

const BlogContent = dynamic(() => import("@/components/blog-content"), {
  ssr: false,
});

export default function ClientBlogWrapper() {
  return <BlogContent />;
}
