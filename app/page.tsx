"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CuboidIcon as Cube,
  Code,
  Zap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Play,
  Star,
  Users,
  Award,
  Layers3,
  Sparkles,
  Globe,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

// Metadata is moved to layout.tsx

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is typical md breakpoint
    }

    // Check initial
    checkMobile()

    // Handle resize
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden relative" role="main">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/30"></div>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `
                  radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)
                `,
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              }}
            ></div>
          </div>

          {/* Geometric Shapes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-blue-400/10 animate-float-geometric"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                transform: `rotate(${Math.random() * 360}deg) translateY(${scrollY * 0.02 * (i % 4)}px)`,
                borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "0%" : "20%",
              }}
            />
          ))}

          {/* Animated Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                className="animate-pulse-line"
                style={{
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Hexagonal Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, transparent 20px, rgba(59, 130, 246, 0.1) 21px, rgba(59, 130, 246, 0.1) 22px, transparent 23px),
                linear-gradient(0deg, transparent 24%, rgba(147, 51, 234, 0.05) 25%, rgba(147, 51, 234, 0.05) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.05) 75%, rgba(147, 51, 234, 0.05) 76%, transparent 77%),
                linear-gradient(60deg, transparent 24%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.05) 75%, rgba(6, 182, 212, 0.05) 76%, transparent 77%),
                linear-gradient(-60deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%)
              `,
              backgroundSize: "80px 140px",
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          ></div>

          {/* Flowing Particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-particle-flow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
            />
          ))}

          {/* Dynamic Noise Overlay */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(59, 130, 246, 0.03) 2px,
                  rgba(59, 130, 246, 0.03) 4px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(147, 51, 234, 0.03) 2px,
                  rgba(147, 51, 234, 0.03) 4px
                )
              `,
              transform: `translate(${scrollY * 0.01}px, ${scrollY * -0.01}px)`,
            }}
          ></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 transition-all duration-500">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-700 group-hover:scale-110">
                <Cube className="w-6 h-6 group-hover:animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                3D Teams
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["Services", "Portfolio", "Team", "Contact"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-100 hover:text-blue-300 transition-all duration-300 group py-2 font-medium"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 group-hover:w-full transition-all duration-500"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
                Request Quote
              </Button>
              <button
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 w-64 h-full bg-black/90 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="px-4 py-4 space-y-6">
              {["Services", "Portfolio", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-gray-200 hover:text-blue-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </nav>      {/* Hero Section */}
      <section 
        aria-label="Hero"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        itemScope
        itemType="https://schema.org/WebPageElement">
          {/* Hero Background Effects */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow hidden md:block"
              style={{ transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)` }}
            ></div>
            <div
              className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow hidden md:block"
              style={{
                transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * -0.008}px)`,
                animationDelay: "2s",
              }}
            ></div>
            <div
              className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-2xl animate-pulse-slow hidden md:block"
              style={{
                transform: `translate(${mousePosition.x * 0.003}px, ${mousePosition.y * 0.003}px)`,
                animationDelay: "1s",
              }}
            ></div>
            
            {/* Static background elements for mobile */}
            <div className="md:hidden">
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
              <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Animated Title */}
              <div className="mb-6">              <h1 className="text-6xl md:text-8xl font-bold leading-tight" itemProp="headline">
                <span className="inline-block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
                  Professional 3D Modeling
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  & Web Design Services
                </span>
              </h1>
              </div>

              <div className="mb-8">
                <p className="text-xl md:text-3xl text-gray-300 leading-relaxed animate-fade-in max-w-4xl mx-auto">
                  We transform ideas into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                    stunning 3D models
                  </span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                    immersive web experiences
                  </span>{" "}
                  that captivate and engage your audience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up animation-delay-600">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-xl px-10 py-8 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    See Our Work
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/20 text-xl px-10 py-8 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hidden md:block">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
        id="services" 
        aria-label="Our Services"
        className="py-32 relative"
        itemScope
        itemType="https://schema.org/Service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="overflow-hidden">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-slide-up">
                  Our Services
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up animation-delay-200">
                  From concept to creation, we deliver cutting-edge 3D solutions and web experiences
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Cube,
                  title: "3D Modeling",
                  description:
                    "High-quality 3D models for products, architecture, characters, and environments with photorealistic rendering.",
                  features: [
                    "Product Visualization",
                    "Architectural Renders",
                    "Character Design",
                    "Environment Creation",
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                  delay: "0s",
                },
                {
                  icon: Globe,
                  title: "Interactive Web Design",
                  description: "Modern, responsive websites with immersive user experiences and cutting-edge animations.",
                  features: [
                    "WebGL Integration",
                    "Three.js Development",
                    "Responsive Design",
                    "Performance Optimization",
                  ],
                  gradient: "from-purple-500 to-pink-500",
                  delay: "0.2s",
                },
                {
                  icon: Sparkles,
                  title: "AR/VR Experiences",
                  description:
                    "Immersive augmented and virtual reality applications for training, marketing, and entertainment.",
                  features: ["VR Applications", "AR Filters", "360° Experiences", "Interactive Demos"],
                  gradient: "from-cyan-500 to-blue-500",
                  delay: "0.4s",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden animate-slide-up"
                  style={{ animationDelay: service.delay }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-10 text-center relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg`}
                    >
                      <service.icon className="w-10 h-10 group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 mb-8 text-lg leading-relaxed">{service.description}</p>
                    <ul className="text-gray-300 space-y-3">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center group-hover:text-white transition-colors duration-300"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Portfolio
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Explore our latest projects and see how we bring ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card
                  key={item}
                  className="group bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden hover:scale-110 hover:-rotate-2 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/25 relative"
                >
                  <div className="relative h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=250&width=400`}
                      alt={`Portfolio item ${item}`}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-300"></div>

                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold mb-2 text-white">Project {item}</h3>
                      <p className="text-gray-100 mb-4 font-medium">3D Visualization & Web Design</p>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 border-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 text-white font-medium"
                      >
                        View Project
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/20 text-xl px-10 py-6 hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 group"
              >
                View All Projects
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge tools and frameworks to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: "Blender", icon: Layers3, color: "from-orange-500 to-red-500" },
                { name: "Three.js", icon: Code, color: "from-green-500 to-emerald-500" },
                { name: "React", icon: Zap, color: "from-blue-500 to-cyan-500" },
                { name: "WebGL", icon: Globe, color: "from-purple-500 to-pink-500" },
                { name: "Unity", icon: Cube, color: "from-indigo-500 to-purple-500" },
                { name: "Cinema 4D", icon: Sparkles, color: "from-yellow-500 to-orange-500" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="text-center group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-2xl`}
                  >
                    <tech.icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                  </div>
                  <p className="text-lg font-semibold text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-500">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section 
        id="team" 
        aria-label="Our Team"
        className="py-32 bg-black/30 backdrop-blur-sm"
        itemScope
        itemType="https://schema.org/Organization">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Creative professionals passionate about pushing the boundaries of digital design
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { name: "Alex Chen", role: "Lead 3D Artist", specialty: "Character Design", delay: "0s" },
                { name: "Sarah Johnson", role: "Web Developer", specialty: "Three.js Expert", delay: "0.2s" },
                { name: "Mike Rodriguez", role: "Creative Director", specialty: "AR/VR Development", delay: "0.4s" },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 hover:-translate-y-4 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 animate-slide-up"
                  style={{ animationDelay: member.delay }}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=320&width=400`}
                        alt={member.name}
                        width={400}
                        height={320}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent group-hover:from-black/70 transition-all duration-500"></div>

                      {/* Floating Social Icons */}
                      <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {[Linkedin, Twitter, Github].map((Icon, idx) => (
                          <Link
                            key={idx}
                            href="#"
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-125 transition-all duration-300"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 mb-2 text-lg font-semibold">{member.role}</p>
                      <p className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                        {member.specialty}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-10 text-center">
              {[
                { number: "150+", label: "Projects Completed", icon: Award, delay: "0s" },
                { number: "50+", label: "Happy Clients", icon: Users, delay: "0.1s" },
                { number: "5+", label: "Years Experience", icon: Star, delay: "0.2s" },
                { number: "24/7", label: "Support Available", icon: Zap, delay: "0.3s" },
              ].map((stat, index) => (
                <div key={index} className="group animate-slide-up" style={{ animationDelay: stat.delay }}>
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                    <stat.icon className="w-12 h-12 text-blue-400 group-hover:animate-pulse" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <p className="text-gray-100 text-xl group-hover:text-white font-medium transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
        id="contact" 
        aria-label="Contact Us"
        className="py-32 bg-black/30 backdrop-blur-sm"
        itemScope
        itemType="https://schema.org/ContactPage">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Ready to bring your vision to life? Let's discuss your next project
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="animate-slide-up">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <CardContent className="p-10">
                    <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Send us a message
                    </h3>
                    <form className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                          <Input
                            placeholder="Your Name"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg group-hover:bg-white/10 transition-all duration-300 focus:scale-105"
                          />
                        </div>
                        <div className="group">
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg group-hover:bg-white/10 transition-all duration-300 focus:scale-105"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <Input
                          placeholder="Subject"
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg group-hover:bg-white/10 transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div className="group">
                        <Textarea
                          placeholder="Your Message"
                          rows={6}
                          className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 text-lg group-hover:bg-white/10 transition-all duration-300 focus:scale-105 resize-none"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 h-16 text-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 group">
                        <span className="flex items-center">
                          Send Message
                          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-10 animate-slide-up animation-delay-200">
                <div>
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: "hello@3dteams.com", color: "from-blue-500 to-cyan-500" },
                      { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "from-purple-500 to-pink-500" },
                      { icon: MapPin, label: "Location", value: "San Francisco, CA", color: "from-cyan-500 to-blue-500" },
                    ].map((contact, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-6 group hover:scale-105 transition-transform duration-300"
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg`}
                        >
                          <contact.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-xl text-gray-300 group-hover:text-white transition-colors duration-300">
                            {contact.label}
                          </p>
                          <p className="text-gray-200 text-lg group-hover:text-white transition-colors duration-300 font-medium">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold mb-6 text-white">Follow Us</h4>
                  <div className="flex space-x-6">
                    {[
                      { icon: Twitter, color: "from-blue-400 to-blue-600" },
                      { icon: Linkedin, color: "from-blue-600 to-blue-800" },
                      { icon: Github, color: "from-gray-600 to-gray-800" },
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href="#"
                        className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-500 shadow-lg hover:shadow-2xl group`}
                      >
                        <social.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-6 md:mb-0 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
                  <Cube className="w-7 h-7" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  3D Teams
                </span>
              </div>
              <p className="text-gray-400 text-center md:text-left text-lg">
                © 2024 3D Teams. All rights reserved.
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  {" "}
                  Crafting the future of digital experiences.
                </span>
              </p>
            </div>
          </div>
        </footer>
      </main>
  )
}
