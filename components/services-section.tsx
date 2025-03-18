"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers, Code, Palette, Film, Smartphone, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "3D Modeling",
    description: "Create detailed 3D models for various applications including web, gaming, and visualization.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description: "Build modern, responsive websites with the latest technologies and frameworks.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Design intuitive user interfaces and experiences that engage and delight users.",
  },
  {
    icon: <Film className="h-10 w-10 text-primary" />,
    title: "Animation",
    description: "Create stunning animations that bring your digital content to life.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Development",
    description: "Develop cross-platform mobile applications with seamless user experiences.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "AR/VR Solutions",
    description: "Create immersive augmented and virtual reality experiences for various platforms.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of services to help businesses create immersive digital experiences that engage users
            and drive results.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

