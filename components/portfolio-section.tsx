"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "3D Modeling", "Web Development", "UI/UX Design", "Animation"]

const projects = [
  {
    id: 1,
    title: "E-commerce 3D Product Viewer",
    category: "3D Modeling",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "An interactive 3D product viewer for an e-commerce platform, allowing users to examine products from all angles.",
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A complete redesign of a corporate website with modern aesthetics and improved user experience.",
  },
  {
    id: 3,
    title: "Mobile App Interface",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "A clean and intuitive mobile app interface designed for optimal user experience and engagement.",
  },
  {
    id: 4,
    title: "Product Launch Animation",
    category: "Animation",
    image: "/placeholder.svg?height=600&width=800",
    description: "A captivating animation sequence created for a product launch event, highlighting key features.",
  },
  {
    id: 5,
    title: "Architectural Visualization",
    category: "3D Modeling",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed 3D visualization of an architectural project, showcasing interior and exterior designs.",
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive dashboard for a SaaS platform with data visualization and user management features.",
  },
]

export default function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeTab === "All" ? projects : projects.filter((project) => project.category === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Our Portfolio</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest work and see how we've helped clients achieve their digital goals.
          </p>
        </div>

        <Tabs defaultValue="All" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <div
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.category}</p>
                  <Button size="sm" variant="outline" className="w-fit bg-white/10 backdrop-blur-sm hover:bg-white/20">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button size="lg">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>{selectedProject?.category}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="rounded-lg overflow-hidden mb-6">
              {selectedProject && (
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              )}
            </div>
            <p className="text-muted-foreground">{selectedProject?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

