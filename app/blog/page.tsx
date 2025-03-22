import ClientBlogWrapper from "@/components/client-blog-wrapper";

// Mock blog data
export const blogPosts = [
  {
    id: 1,
    title: "The Future of 3D Web Experiences",
    excerpt:
      "Exploring how 3D technologies are transforming the way we interact with websites and digital content.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Mar 15, 2023",
    author: "Alex Johnson",
    category: "Technology",
    tags: ["3D", "Web Development", "Future Trends"],
  },
  {
    id: 2,
    title: "Optimizing 3D Models for Web Performance",
    excerpt:
      "Best practices for creating lightweight 3D models that don't compromise on visual quality or performance.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 28, 2023",
    author: "Sarah Williams",
    category: "3D Modeling",
    tags: ["Optimization", "Performance", "3D Models"],
  },
  {
    id: 3,
    title: "Creating Immersive User Experiences with Three.js",
    excerpt:
      "A deep dive into using Three.js to create engaging and interactive 3D experiences on the web.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Feb 10, 2023",
    author: "Michael Chen",
    category: "Development",
    tags: ["Three.js", "WebGL", "Interactive"],
  },
  {
    id: 4,
    title: "The Role of 3D in E-commerce",
    excerpt:
      "How 3D product visualization is revolutionizing online shopping and boosting conversion rates.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Jan 25, 2023",
    author: "Emily Rodriguez",
    category: "E-commerce",
    tags: ["E-commerce", "Product Visualization", "Conversion"],
  },
  {
    id: 5,
    title: "Designing for AR and VR: Best Practices",
    excerpt:
      "Guidelines for creating effective and user-friendly augmented and virtual reality experiences.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Jan 12, 2023",
    author: "David Kim",
    category: "Design",
    tags: ["AR", "VR", "Design", "User Experience"],
  },
  {
    id: 6,
    title: "The Intersection of AI and 3D Design",
    excerpt:
      "Exploring how artificial intelligence is changing the landscape of 3D modeling and design.",
    image: "/placeholder.svg?height=400&width=600",
    date: "Dec 28, 2022",
    author: "Lisa Wang",
    category: "Technology",
    tags: ["AI", "3D Design", "Innovation"],
  },
];

export const categories = [
  "All",
  "Technology",
  "3D Modeling",
  "Development",
  "E-commerce",
  "Design",
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground">
          Stay updated with our latest insights and developments
        </p>
      </div>
      <ClientBlogWrapper />
    </div>
  );
}
