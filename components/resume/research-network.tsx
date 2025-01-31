"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const resourceData = [
  {
    name: "Research Hub",
    publications: 0,
    citations: 5,
    collaborations: 0,
    resources: 92,
  },
  {
    name: "ResearchGate",
    publications: 1,
    citations: 9,
    collaborations: 1,
    resources: 85,
  },
  {
    name: "Bibliotheca",
    publications: 0,
    citations: 3,
    collaborations: 0,
    resources: 88,
  },
  {
    name: "Kaggle",
    publications: 0,
    citations: 8,
    collaborations: 0,
    resources: 95,
  },
  {
    name: "NCBI",
    publications: 0,
    citations: 9,
    collaborations: 0,
    resources: 87,
  },
]

const metrics = ["publications", "citations", "collaborations", "resources"]

export function ResearchNetwork() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Research Resources Network</CardTitle>
        <CardDescription>Comparative analysis of research platforms and their metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <ChartContainer
            config={{
              publications: {
                label: "Publications",
                color: "hsl(var(--chart-1))",
              },
              citations: {
                label: "Citations",
                color: "hsl(var(--chart-2))",
              },
              collaborations: {
                label: "Collaborations",
                color: "hsl(var(--chart-3))",
              },
              resources: {
                label: "Available Resources",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={resourceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                {metrics.map((metric, index) => (
                  <Radar
                    key={metric}
                    name={metric.charAt(0).toUpperCase() + metric.slice(1)}
                    dataKey={metric}
                    stroke={`var(--color-${metric})`}
                    fill={`var(--color-${metric})`}
                    fillOpacity={0.5}
                  />
                ))}
              </RadarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Platform Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[360px] pr-4">
                {resourceData.map((platform) => (
                  <div key={platform.name} className="mb-6 last:mb-0">
                    <h4 className="font-semibold mb-2">{platform.name}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {metrics.map((metric) => (
                        <div key={metric} className="flex items-center justify-between">
                          <Badge variant="outline" className="capitalize">
                            {metric}
                          </Badge>
                          <span className="font-medium">{platform[metric as keyof typeof platform]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

