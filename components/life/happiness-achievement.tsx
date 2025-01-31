"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer } from "recharts"

const achievementData = [
  { achievements: 2, happiness: 60, date: "2020-Q1" },
  { achievements: 3, happiness: 65, date: "2020-Q2" },
  { achievements: 4, happiness: 70, date: "2020-Q3" },
  { achievements: 5, happiness: 75, date: "2020-Q4" },
  { achievements: 6, happiness: 80, date: "2021-Q1" },
  { achievements: 7, happiness: 85, date: "2021-Q2" },
  { achievements: 8, happiness: 90, date: "2021-Q3" },
  { achievements: 10, happiness: 95, date: "2021-Q4" },
]

export function HappinessAchievement() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Happiness vs. Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis type="number" dataKey="achievements" name="Achievements" unit=" achievements" />
              <YAxis type="number" dataKey="happiness" name="Happiness" unit="%" />
              <ZAxis type="category" dataKey="date" name="Period" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="Happiness-Achievement Correlation" data={achievementData} fill="hsl(var(--primary))" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

