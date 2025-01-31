"use client"

import { Suspense, useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import Script from "next/script"

const CareerJourney = dynamic(() => import("@/components/career-journey"), {
  loading: () => <div>Loading Career Journey...</div>,
  ssr: false,
})
const SkillsAnalytics = dynamic(() => import("@/components/skills-analytics"), {
  loading: () => <div>Loading Skills & Analytics...</div>,
  ssr: false,
})
const DataResume = dynamic(() => import("@/components/data-resume"), {
  loading: () => <div>Loading Data Resume...</div>,
  ssr: false,
})
const LifeDashboard = dynamic(() => import("@/components/life-dashboard"), {
  loading: () => <div>Loading Life Dashboard...</div>,
  ssr: false,
})

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="w-full">
      <Script src="https://d3js.org/d3.v7.min.js" strategy="beforeInteractive" />
      <Tabs defaultValue="career" className="space-y-4">
        <div className="sticky top-14 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="career">Career Journey</TabsTrigger>
            <TabsTrigger value="skills">Skills & Analytics</TabsTrigger>
            <TabsTrigger value="resume">Data Resume</TabsTrigger>
            <TabsTrigger value="life">Life Dashboard</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="career">
          <Suspense fallback={<div>Loading Career Journey...</div>}>
            <CareerJourney />
          </Suspense>
        </TabsContent>
        <TabsContent value="skills">
          <Suspense fallback={<div>Loading Skills & Analytics...</div>}>
            <SkillsAnalytics />
          </Suspense>
        </TabsContent>
        <TabsContent value="resume">
          <Suspense fallback={<div>Loading Data Resume...</div>}>
            <DataResume />
          </Suspense>
        </TabsContent>
        <TabsContent value="life">
          <Suspense fallback={<div>Loading Life Dashboard...</div>}>
            <LifeDashboard />
          </Suspense>
        </TabsContent>
      </Tabs>
      {showBackToTop && (
        <Button className="fixed bottom-4 right-4 rounded-full p-2" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

