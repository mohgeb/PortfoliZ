"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle } from "lucide-react"

const researchData = {
  overallProgress: 25,
  completedSteps: ["Literature review on genetic markers", "Data Acquisition"],
  nextSteps: [
    "Genomic Annotation",
    "Pathway Analysis",
    "Functional Annotation",
    "Analysis & Report",
    "Draft research paper",
    "Peer review submission",
    "Final revisions",
  ],
}

export function ResearchProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Research Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">{researchData.overallProgress}%</span>
          </div>
          <Progress value={researchData.overallProgress} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="font-medium">Completed Steps</h4>
            <ul className="space-y-2">
              {researchData.completedSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Next Steps</h4>
            <ul className="space-y-2">
              {researchData.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Circle className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
