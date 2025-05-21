"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type Testimonial = {
  id: string
  name: string
  company?: string
  text: string
  stars: number
  projectType?: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Malak Elghamrawy",
    company: "Misr International University",
    text: "“Mohamed is an invaluable asset. His ability to explain complex frontend and backend concepts with clarity is remarkable. He’s incredibly professional, detail-oriented, and consistently delivers high-quality work. His problem-solving mindset and technical versatility make him truly stand out. I highly recommend him for any role demanding dedication and expertise.”",
    stars: 5,
    projectType: "E-commerce Platform",
  },
  {
    id: "2",
    name: "David Chen",
    company: "DataViz Solutions",
    text: "The data visualization dashboard Mohamed created transformed how our team interprets complex datasets. His ability to translate technical requirements into intuitive interfaces is remarkable.",
    stars: 5,
    projectType: "Data Dashboard",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    company: "HealthTech Innovations",
    text: "Working with Mohamed on our health tracking app was a pleasure. He quickly understood our vision and implemented features that exceeded our expectations. Highly recommended!",
    stars: 5,
    projectType: "Mobile App Development",
  },
  {
    id: "4",
    name: "Michael Taylor",
    company: "Creative Studios",
    text: "Mohamed's portfolio dashboard solution completely transformed how we showcase our work. The clean design and intuitive interface have received countless compliments from our clients.",
    stars: 5,
    projectType: "Portfolio Website",
  },
  {
    id: "5",
    name: "Sophia Williams",
    company: "AI Innovations",
    text: "The AI content generator Mohamed built has become an essential tool for our marketing team. His technical knowledge combined with an understanding of our business needs resulted in a perfect solution.",
    stars: 5,
    projectType: "AI Tool Development",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      <div className="absolute -top-6 left-4 text-primary/20">
        <Quote className="h-12 w-12" />
      </div>

      <div className="h-[280px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="border-none shadow-none bg-transparent h-full">
              <CardContent className="pt-6 px-6">
                <p className="text-lg italic mb-6">"{testimonials[activeIndex].text}"</p>
                <div className="flex flex-col">
                  <span className="font-semibold">{testimonials[activeIndex].name}</span>
                  {testimonials[activeIndex].company && (
                    <span className="text-sm text-muted-foreground">{testimonials[activeIndex].company}</span>
                  )}
                  <div className="flex items-center mt-2">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonials[activeIndex].stars ? "text-yellow-500" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {testimonials[activeIndex].projectType && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {testimonials[activeIndex].projectType}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index)
              setAutoplay(false)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              activeIndex === index ? "bg-primary w-6" : "bg-primary/30"
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
