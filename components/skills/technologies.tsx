"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = {
  "Data Analysis": ["Python", "R", "SQL", "Pandas", "NumPy", "SciPy", "Jupyter", "Tableau", "Power BI"],
  "Web Development": ["JavaScript", "D3.js", "Tailwind CSS", "HTML5", "CSS", "Responsive Design", "UI/UX Design"],
  Research: ["LaTeX", "MATLAB", "SPSS", "Stata", "Research Gate", "Google Scholar"],
  Academics: ["Academic Writing", "Statistical Analysis", "Research Methodology", "Peer Review"],
}

export function Technologies() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Technologies & Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(technologies).map(([category, tools]) => (
            <div key={category} className="space-y-3">
              <h3 className="font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
