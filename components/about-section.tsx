"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive object={scene} scale={2} position={[0, -1, 0]} />
    </Float>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">We create immersive digital experiences</h2>
              <p className="text-muted-foreground text-lg">
                Founded in 2015, our studio has been at the forefront of digital innovation, creating cutting-edge 3D
                experiences that push the boundaries of what's possible on the web.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To transform digital interactions through innovative 3D experiences that captivate and engage.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To lead the evolution of web experiences by blending creativity with cutting-edge technology.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2 h-[400px] lg:h-[500px]">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Model />
                <Environment preset="studio" />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

