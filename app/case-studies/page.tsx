"use client"

import { useState, useEffect } from "react"
import { CaseStudiesGrid } from "@/components/case-studies-grid"
import { Star, StarHalf, ExternalLink, Clock } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Malak Elghamrawy",
    role: "Undergraduate Student, MIU",
    initial: "ME",
    image: "/imgs/dots.png", // Using a local image to avoid external URL issues
    quote:
      "Mohamed is an invaluable asset. His ability to explain complex concepts with clarity is remarkable. He's professional, detail-oriented, and delivers high-quality work.",
    rating: 5,
    project: "Backend Integration for E-commerce Website",
    duration: "3 Days",
    linkedin: "https://www.linkedin.com/in/example1/",
  },
  {
    id: 2,
    name: "Rawaa Ahmed",
    role: "Undergraduate Student, MIU",
    initial: "RA",
    image: "/imgs/golden-ratio.png", // Using a local image to avoid external URL issues
    quote:
      "Working with Mohamed was a privilege. His passion for development and ability to simplify complex ideas made a huge impact. Any team would be lucky to have him.",
    rating: 5,
    project: "Database Design for E-commerce Website",
    duration: "2 days",
    linkedin: "https://www.linkedin.com/in/example2/",
  },
]

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
    </div>
  )
}

function ClientTestimonials() {
  const [current, setCurrent] = useState(0)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearTimeout(timer)
  }, [current])

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <div className="relative h-full">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`
            absolute inset-0 w-full h-full flex items-center transition-all duration-500 ease-in-out
            ${
              index === current
                ? "opacity-100 translate-x-0"
                : index < current
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }
          `}
        >
          <div className="w-full h-full bg-card rounded-lg p-8 flex flex-col shadow-sm border">
            <div className="flex-1">
              {/* Project and duration info */}
              <div className="flex justify-between items-center mb-4">
                <div className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded">
                  {testimonial.project}
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{testimonial.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                {/* Profile picture instead of initials */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border">
                  {imageError[testimonial.id] ? (
                    <div className="w-full h-full flex items-center justify-center bg-black/10 text-foreground">
                      <span className="text-lg font-medium">{testimonial.initial}</span>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-black/10 flex items-center justify-center">
                      <span className="text-lg font-medium">{testimonial.initial}</span>
                    </div>
                  )}
                </div>
                <div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-lg flex items-center hover:text-primary transition-colors"
                  >
                    {testimonial.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="mt-1">
                    <RatingStars rating={testimonial.rating} />
                  </div>
                </div>
              </div>

              <div className="relative">
                <p className="text-muted-foreground leading-relaxed">{testimonial.quote}</p>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-foreground scale-125" : "bg-muted hover:bg-foreground/50"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
        <p className="text-muted-foreground">
          Explore detailed case studies of my most significant projects and their impact.
        </p>
      </div>

      <CaseStudiesGrid />

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Client Testimonials</h2>

        {/* Enhanced testimonials with profile pictures */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative h-[300px] overflow-hidden">
            {/* Testimonial Slider - Client-side component */}
            <ClientTestimonials />
          </div>
        </div>
      </div>
    </div>
  )
}
