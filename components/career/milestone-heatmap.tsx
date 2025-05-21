"use client"

import { useState, useEffect, useMemo } from "react"
import * as d3 from "d3"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

const milestones = [
  {
    date: "2021-10-15",
    title: "2nd Place in Biology",
    type: "competition",
    details: "Virtual Meet of October",
    description: "Achieved second place in Biology, the state-wide virtual-meet UIL competition.",
  },
  {
    date: "2022-03-10",
    title: "4th Place in District UIL",
    type: "competition",
    details: "District UIL Competition",
    description: "Secured fourth place in the District UIL competition for Biology.",
  },
  {
    date: "2022-03-20",
    title: "7th Place in Mathematics",
    type: "competition",
    details: "UIL Competition",
    description: "Ranked seventh in the state-level UIL mathematics competition.",
  },
  {
    date: "2022-05-15",
    title: "Full-Ride Merit Scholarship",
    type: "award",
    details: "Amigo organization for Texas Tech University",
    description:
      "Awarded a full-ride merit scholarship by the Amigo organization for outstanding academic performance.",
  },
  {
    date: "2023-07-01",
    title: "Employee of the Month",
    type: "award",
    details: "VXI",
    description: "Recognized as Employee of the Month at VXI for outstanding performance and dedication.",
  },
  {
    date: "2023-11-30",
    title: "Research Paper Published",
    type: "publication",
    details: "CO2 production and yeast fermentation under fructose influence",
    description:
      "Published a research paper on CO2 production in yeast fermentation, exploring the influence of fructose.",
  },
  {
    date: "2024-01-15",
    title: "Dean's List",
    type: "award",
    details: "College of Arts and Sciences, Texas Tech University",
    description: "Named to the Dean's List for the Fall 2023 semester at Texas Tech University.",
  },
  {
    date: "2024-02-10",
    title: "Sea-Level Predictor Project",
    type: "project",
    details: "FreeCodeCamp project",
    description: "Developed a machine learning model to predict sea-level changes as part of a FreeCodeCamp project.",
  },
  {
    date: "2024-03-05",
    title: "Time-Series Analysis Project",
    type: "project",
    details: "FreeCodeCamp project",
    description:
      "Completed an advanced time-series analysis project, demonstrating proficiency in statistical forecasting techniques.",
  },
  {
    date: "2024-04-20",
    title: "Medical Data Visualizer",
    type: "project",
    details: "Data visualization project",
    description:
      "Created an interactive medical data visualizer, enhancing the interpretation of complex health datasets.",
  },
  {
    date: "2024-06-15",
    title: "Demographic Data Analyzer",
    type: "project",
    details: "Data analysis project",
    description: "Developed a comprehensive demographic data analyzer, revealing key societal trends and patterns.",
  },
  {
    date: "2024-08-01",
    title: "Responsive Web Design Certificate",
    type: "certificate",
    details: "FreeCodeCamp certification",
    description:
      "Earned the Responsive Web Design certification from FreeCodeCamp, demonstrating proficiency in modern web development techniques.",
  },
  {
    date: "2024-10-15",
    title: "Data Analysis with Python Certificate",
    type: "certificate",
    details: "FreeCodeCamp certification",
    description:
      "Completed the Data Analysis with Python certification, showcasing advanced skills in data manipulation and visualization.",
  },
  {
    date: "2025-01-15",
    title: "Deployed PortfoliZ",
    type: "Project",
    details: "Dashboard Based Portfolio for my Professional Suit",
    description:
      "Built the Dashboard Porfolio to Meet Unconventionality, Simplicity, and Professionality while finding a space to share my professional work and showcase my technical skills.",
  },
]

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export function MilestoneHeatmap() {
  const [selectedYear, setSelectedYear] = useState<string>(new Date().getFullYear().toString())
  const [selectedMonth, setSelectedMonth] = useState<string>("all")
  const [tooltipContent, setTooltipContent] = useState<string | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null)

  const years = useMemo(() => {
    const uniqueYears = new Set(milestones.map((m) => new Date(m.date).getFullYear()))
    return Array.from(uniqueYears).sort((a, b) => b - a)
  }, [])

  const filteredMilestones = useMemo(() => {
    const year = Number.parseInt(selectedYear)
    const month = Number.parseInt(selectedMonth)
    return milestones.filter((m) => {
      const date = new Date(m.date)
      return date.getFullYear() === year && (selectedMonth === "all" || date.getMonth() === month)
    })
  }, [selectedYear, selectedMonth])

  const getColor = (count: number) => {
    const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
    return colors[Math.min(count, colors.length - 1)]
  }

  useEffect(() => {
    const svgContainer = d3.select("#heatmap-container")
    svgContainer.selectAll("svg").remove() // Clear previous heatmap

    const containerWidth = svgContainer.node().getBoundingClientRect().width
    const cellSize = Math.floor(containerWidth / 53) - 2
    const cellGap = 1
    const weekWidth = cellSize * 7 + cellGap * 6
    const width = weekWidth * 53
    const height = cellSize * 7 + cellGap * 6

    const svg = svgContainer
      .append("svg")
      .attr("width", "100%")
      .attr("height", height + 40) // Increased height by 10px
      .append("g")
      .attr("transform", "translate(20,30)") // Increased y-translation by 10px

    const year = Number.parseInt(selectedYear)
    const month = Number.parseInt(selectedMonth)
    const startDate = new Date(year, 0, 1)
    const endDate = new Date(year + 1, 0, 1)

    const dateRange = d3.timeDays(startDate, endDate)

    const svg_g = svg

    const weeks = d3.timeWeeks(d3.timeWeek.floor(startDate), endDate)

    svg_g
      .selectAll(".week")
      .data(weeks)
      .join("g")
      .attr("class", "week")
      .attr("transform", (d, i) => `translate(${i * (cellSize + cellGap)}, 0)`)
      .selectAll(".day")
      .data((d) => d3.timeDays(d, new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7)))
      .join("rect")
      .attr("class", "day")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", 0)
      .attr("y", (d) => d.getDay() * (cellSize + cellGap))
      .attr("fill", (d) => {
        const count = filteredMilestones.filter((m) => m.date === d.toISOString().split("T")[0]).length
        return getColor(count)
      })
      .attr("opacity", (d) => (selectedMonth === "all" || d.getMonth() === month ? 1 : 0.3))
      .on("mouseover", (event, d) => {
        const dateString = d.toISOString().split("T")[0]
        const dayMilestones = filteredMilestones.filter((m) => m.date === dateString)
        if (dayMilestones.length > 0) {
          const content = dayMilestones
            .map(
              (m) => `
          <strong>${m.title}</strong><br>
          ${m.description}<br>
          <em>${m.date}</em>
        `,
            )
            .join("<hr>")
          setTooltipContent(content)
          setTooltipPosition({ x: event.pageX, y: event.pageY })
        } else {
          setTooltipContent(null)
          setTooltipPosition(null)
        }
      })
      .on("mouseout", () => {
        setTooltipContent(null)
        setTooltipPosition(null)
      })

    // Add month labels with enhanced styling
    svg_g
      .selectAll(".month-label")
      .data(months)
      .join("text")
      .attr("class", "month-label")
      .attr("x", (d, i) => {
        const date = new Date(year, i, 1)
        const weekOffset = d3.timeWeek.count(d3.timeYear(date), date)
        return weekOffset * (cellSize + cellGap)
      })
      .attr("y", -5)
      .attr("text-anchor", "start")
      .text((d) => d.slice(0, 3)) // Show only first 3 letters of month name
      .attr("font-size", "10px")
      .attr("font-weight", "500")
      .attr("fill", "currentColor")
      .attr("cursor", "pointer")
      .style("user-select", "none")
      .attr("opacity", (d, i) => (selectedMonth === "all" || selectedMonth === i.toString() ? 1 : 0.5))
      .on("click", (event, d) => {
        const monthIndex = months.indexOf(d)
        setSelectedMonth(selectedMonth === monthIndex.toString() ? "all" : monthIndex.toString())
      })
    // Add weekday labels
    svg_g
      .selectAll(".weekday-label")
      .data(weekdays)
      .join("text")
      .attr("class", "weekday-label")
      .attr("x", -2)
      .attr("y", (d, i) => i * (cellSize + cellGap) + cellSize / 2)
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .text((d) => d[0])
      .attr("font-size", 10)

    // Add legend
    const legend = svg_g
      .append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${width - 200}, ${height + 20})`)

    const legendItems = [0, 1, 2, 3, 4]

    legend
      .selectAll(".legend-item")
      .data(legendItems)
      .join("rect")
      .attr("class", "legend-item")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", (d, i) => i * (cellSize + 5))
      .attr("fill", (d) => getColor(d))

    legend
      .append("text")
      .attr("x", (cellSize + 5) * legendItems.length + 5)
      .attr("y", cellSize / 2)
      .attr("dominant-baseline", "middle")
      .text("Less")
      .attr("font-size", 10)

    legend
      .append("text")
      .attr("x", -35)
      .attr("y", cellSize / 2)
      .attr("dominant-baseline", "middle")
      .attr("text-anchor", "end")
      .text("More")
      .attr("font-size", 10)
  }, [selectedYear, selectedMonth, filteredMilestones])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Contribution Heatmap</CardTitle>
          <div className="flex space-x-2">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Months</SelectItem>
                {months.map((month, index) => (
                  <SelectItem key={month} value={index.toString()}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div id="heatmap-container" className="w-full">
            {tooltipContent && tooltipPosition && (
              <div
                className="absolute z-10 p-2 bg-white border border-gray-200 rounded shadow-lg pointer-events-none max-w-xs"
                style={{
                  left: `${tooltipPosition.x}px`,
                  top: `${tooltipPosition.y}px`,
                  transform: "translate(-50%, -100%)",
                }}
                dangerouslySetInnerHTML={{ __html: tooltipContent }}
              />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contribution Activity</h3>
            <ScrollArea className="h-[200px]">
              {filteredMilestones
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-2 mb-2">
                    <div className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: getColor(1) }}></div>
                    <div>
                      <p className="font-medium">{milestone.title}</p>
                      <p className="text-sm text-muted-foreground">{formatDate(milestone.date)}</p>
                      <p className="text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
