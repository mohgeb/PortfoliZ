"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const languages = {
  technical: [
    { name: "Python", level: 95 },
    { name: "R", level: 90 },
    { name: "SQL", level: 85 },
    { name: "MATLAB", level: 80 },
  ],
  spoken: [
    { name: "English", level: 100 },
    { name: "Arabic", level: 95 },
    { name: "French", level: 60 },
  ],
}

export function LanguageProficiency() {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Language Proficiency</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold">Technical Languages</h3>
            {languages.technical.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{lang.name}</span>
                  <span>{lang.level}%</span>
                </div>
                <Progress value={lang.level} className="h-2">
                  <div className="h-full bg-primary" style={{ width: `${lang.level}%` }} />
                </Progress>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Spoken Languages</h3>
            {languages.spoken.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{lang.name}</span>
                  <span>{lang.level}%</span>
                </div>
                <Progress value={lang.level} className="h-2">
                  <div className="h-full bg-primary" style={{ width: `${lang.level}%` }} />
                </Progress>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

