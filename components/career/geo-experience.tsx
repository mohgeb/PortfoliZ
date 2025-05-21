"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { feature } from "topojson-client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { MapPin, ZoomIn, ZoomOut, RotateCcw, Building2, CalendarDays, GraduationCap, Briefcase } from "lucide-react"

const locations = [
  {
    name: "Lubbock, Texas",
    coordinates: [-101.8552, 33.5779],
    experience: "Studied at Texas Tech University",
    details: "Advanced studies in Mathematics and Data Science",
    period: "2021 - Present",
    type: "education",
    color: "#FF6B6B",
    keyPoints: [
      "Pursued advanced mathematics and data science courses",
      "Engaged in cutting-edge research projects",
      "Collaborated with leading professors in the field",
    ],
  },
  {
    name: "Fort Worth, Texas",
    coordinates: [-97.3208, 32.7555],
    experience: "Studied at Arlington Heights High School",
    details: "Early education and foundation building",
    period: "2017 - 2021",
    type: "education",
    color: "#4ECDC4",
    keyPoints: [
      "Excelled in mathematics and science courses",
      "Participated in various academic competitions",
      "Developed a strong foundation for future studies",
    ],
  },
  {
    name: "Alexandria, Egypt",
    coordinates: [29.9187, 31.2001],
    experience: "Research at Bibliotheca Alexandrina",
    details: "Genetics sequencing, slicing, and annotating research",
    period: "Summer 2023",
    type: "research",
    color: "#45B7D1",
    keyPoints: [
      "Conducted advanced genetics research",
      "Collaborated with international researchers",
      "Gained hands-on experience with cutting-edge sequencing technologies",
    ],
  },
  {
    name: "Liverpool, England",
    coordinates: [-2.9916, 53.4084],
    experience: "Applied Mathematician and Data Annotator",
    details: "One year professional experience in data analysis",
    period: "2023 - Present",
    type: "work",
    color: "#96CEB4",
    keyPoints: [
      "Applied mathematical models to real-world problems",
      "Developed and maintained large datasets",
      "Collaborated with cross-functional teams on data-driven projects",
    ],
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "education":
      return GraduationCap
    case "research":
      return Building2
    case "work":
      return Briefcase
    default:
      return MapPin
  }
}

export function GeoExperience() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [worldData, setWorldData] = useState<any>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 })
  const [tooltip, setTooltip] = useState({ show: false, content: "", x: 0, y: 0 })

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((response) => response.json())
      .then((data) => {
        const world = feature(data, data.objects.countries)
        setWorldData(world)
      })
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const { width } = svgRef.current.getBoundingClientRect()
        setDimensions({ width, height: width * 0.5 })
      }
    }

    window.addEventListener("resize", updateDimensions)
    updateDimensions()

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (!worldData || !svgRef.current) return

    const svg = d3.select(svgRef.current)
    const { width, height } = dimensions
    const projection = d3.geoMercator().fitSize([width, height], worldData)
    const path = d3.geoPath().projection(projection)

    svg.selectAll("*").remove()

    const g = svg.append("g")

    g.append("g")
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", path as any)
      .attr("fill", "hsl(var(--muted))")
      .attr("stroke", "hsl(var(--border))")
      .attr("stroke-width", 0.5)

    const zoom = d3
      .zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        g.attr("transform", event.transform)
        updateDotSizes(event.transform.k)
      })

    svg.call(zoom as any)

    function updateDotSizes(k: number) {
      g.selectAll("circle").attr("r", 5 / Math.sqrt(k))
    }

    locations.forEach((location) => {
      g.append("circle")
        .attr("cx", projection(location.coordinates as [number, number])![0])
        .attr("cy", projection(location.coordinates as [number, number])![1])
        .attr("r", 5)
        .attr("fill", location.color)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("cursor", "pointer")
        .on("click", () => setSelectedLocation(location.name))
        .on("mouseover", (event) => {
          setTooltip({
            show: true,
            content: location.keyPoints.join("\n"),
            x: event.pageX,
            y: event.pageY,
          })
        })
        .on("mouseout", () => setTooltip({ show: false, content: "", x: 0, y: 0 }))
    })

    if (selectedLocation) {
      const location = locations.find((l) => l.name === selectedLocation)
      if (location) {
        const [x, y] = projection(location.coordinates as [number, number])!
        svg
          .transition()
          .duration(750)
          .call(
            zoom.transform as any,
            d3.zoomIdentity
              .translate(width / 2, height / 2)
              .scale(4)
              .translate(-x, -y),
          )
      }
    }
  }, [worldData, selectedLocation, dimensions])

  const handleZoomIn = () => {
    d3.select(svgRef.current)
      .transition()
      .call(d3.zoom().scaleBy as any, 1.5)
  }

  const handleZoomOut = () => {
    d3.select(svgRef.current)
      .transition()
      .call(d3.zoom().scaleBy as any, 1 / 1.5)
  }

  const handleReset = () => {
    d3.select(svgRef.current)
      .transition()
      .call(d3.zoom().transform as any, d3.zoomIdentity)
    setSelectedLocation(null)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Global Experience
            </CardTitle>
            <div className="text-sm text-muted-foreground">Academic and professional journey across continents</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleReset}>
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div className="order-2 md:order-1">
            <div className="relative w-full rounded-lg border bg-muted/10" style={{ height: dimensions.height }}>
              <svg ref={svgRef} width="100%" height="100%" />
              {tooltip.show && (
                <div
                  style={{
                    position: "absolute",
                    left: `${tooltip.x}px`,
                    top: `${tooltip.y}px`,
                    transform: "translate(-50%, -100%)",
                    backgroundColor: "white",
                    padding: "8px",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    zIndex: 1000,
                    pointerEvents: "none",
                    whiteSpace: "pre-line",
                  }}
                >
                  {tooltip.content}
                </div>
              )}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <ScrollArea className="h-[400px] rounded-lg border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Location Timeline</h4>
                <div className="relative space-y-4">
                  {locations.map((location, index) => {
                    const Icon = getIcon(location.type)
                    return (
                      <div
                        key={location.name}
                        className={`relative pl-6 ${index !== locations.length - 1 ? "pb-4" : ""} ${
                          selectedLocation === location.name
                            ? "opacity-100"
                            : "opacity-60 hover:opacity-100 transition-opacity"
                        }`}
                      >
                        {index !== locations.length - 1 && (
                          <div
                            className="absolute left-[0.6rem] top-3 h-full w-px bg-border"
                            style={{
                              backgroundColor: location.color,
                              opacity: 0.2,
                            }}
                          />
                        )}
                        <Button
                          variant="ghost"
                          className="h-auto w-full p-2 justify-start"
                          onClick={() => setSelectedLocation(location.name)}
                        >
                          <div
                            className="absolute left-0 top-2 rounded-full p-1"
                            style={{ backgroundColor: location.color }}
                          >
                            <Icon className="h-3 w-3 text-white" />
                          </div>
                          <div className="space-y-1 text-left">
                            <div className="text-sm font-medium">{location.name}</div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <CalendarDays className="mr-1 h-3 w-3" />
                              {location.period}
                            </div>
                            <div className="text-xs text-muted-foreground">{location.experience}</div>
                          </div>
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
