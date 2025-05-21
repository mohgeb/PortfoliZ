"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Download, FolderKanban } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    const mouse = { x: 0, y: 0 }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = Math.random() * 2 - 1
        this.vy = Math.random() * 2 - 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          this.vx -= Math.cos(angle) * 0.2
          this.vy -= Math.sin(angle) * 0.2
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(200, 200, 200, 0.8)"
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleDownload = () => {
    const fileId = "15LgniHtOE50JSsWDBr5EbnVWmM6vwoh9"
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
    window.open(downloadUrl, "_blank")
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="z-10 text-center space-y-8 px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to My Interactive Portfolio Dashboard</h1>
        <p className="text-xl">
          Explore my professional journey, skills, and personal achievements through this interactive dashboard.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Button asChild size="lg" aria-label="View Case Studies">
            <Link
              href="/case-studies"
              className="
                w-full sm:w-auto
                bg-black text-white
                group transition-all
                hover:bg-black/80 hover:shadow-md
                focus:ring-2 focus:ring-offset-2 focus:ring-black
                flex items-center justify-center
                rounded-md px-4 py-2 text-sm font-medium
              "
            >
              <FolderKanban className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              <span>Case Studies</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleDownload}
            className="w-full sm:w-auto group transition-all hover:shadow-md bg-white border-black-20 text-black hover:bg-white/10"
            aria-label="Download Resume"
          >
            <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            <span>Download Resume</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
