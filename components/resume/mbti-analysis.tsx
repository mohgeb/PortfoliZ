"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts"

const mbtiData = [
  { trait: "Introversion", value: 82 },
  { trait: "Intuition", value: 57 },
  { trait: "Thinking", value: 92 },
  { trait: "Judging", value: 96 },
  { trait: "Turbulent", value: 53 },
]

export function MBTIAnalysis() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>MBTI Profile (INTJ-T)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={mbtiData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="trait" />
              <Radar name="MBTI" dataKey="value" fill="hsl(var(--primary))" fillOpacity={0.5} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
