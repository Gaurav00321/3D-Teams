"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb");
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <primitive ref={modelRef} object={scene} scale={2} position={[0, -1, 0]} />
  );
}

function FloatingText() {
  const { viewport } = useThree();
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={textRef}
        position={[0, 1.5, 0]}
        fontSize={viewport.width > 10 ? 0.5 : 0.35}
        color="#ffffff"
        font="/fonts/Inter_Bold.json"
        anchorX="center"
        anchorY="middle"
      >
        IMMERSIVE EXPERIENCES
      </Text>
    </Float>
  );
}

export default function HeroSection() {
  // No need for isMounted state since we're using dynamic import with ssr: false

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model />
        <FloatingText />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Crafting Digital Experiences
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              We create immersive 3D experiences that captivate and engage your
              audience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-background/20 backdrop-blur-sm hover:bg-background/30"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="animate-bounce"
        >
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm text-white pointer-events-auto"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
