"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Working with the 3D Studio team was a game-changer for our brand. Their innovative approach to 3D web experiences helped us stand out in a crowded market.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Marketing Director, Innovate Inc",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The team delivered beyond our expectations. The 3D product viewer they created has significantly increased our conversion rates and customer engagement.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Manager, NextGen",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Their attention to detail and technical expertise is unmatched. They transformed our vision into a stunning digital experience that our users love.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Design Lead, Creative Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As a designer myself, I have high standards. The 3D Studio team not only met those standards but exceeded them with their creativity and technical skill.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Kim",
    role: "CTO, Future Systems",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The integration of 3D elements into our web platform was seamless. Their team's technical knowledge and problem-solving abilities made the process smooth.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
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
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <motion.div variants={itemVariants}>
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                          {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <Star key={i + testimonial.rating} className="h-5 w-5 text-muted-foreground" />
                          ))}
                        </div>
                        <p className="mb-6 text-muted-foreground">"{testimonial.content}"</p>
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-4">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

