"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

const softSkillCategories = [
  {
    category: "Leadership & Management",
    skills: [
      {
        name: "Team Leadership",
        progress: 88,
        details: ["Team Building", "Mentoring", "Decision Making"],
        description: "Leading and managing research teams effectively",
      },
      {
        name: "Project Management",
        progress: 85,
        details: ["Planning", "Execution", "Risk Management"],
        description: "Managing complex research projects and timelines",
      },
    ],
  },
  {
    category: "Communication & Collaboration",
    skills: [
      {
        name: "Research Communication",
        progress: 92,
        details: ["Technical Writing", "Presentations", "Documentation"],
        description: "Effectively communicating complex research findings",
      },
      {
        name: "Cross-functional Collaboration",
        progress: 90,
        details: ["Team Work", "Knowledge Sharing", "Networking"],
        description: "Working effectively across different research domains",
      },
    ],
  },
  {
    category: "Problem Solving & Analysis",
    skills: [
      {
        name: "Critical Thinking",
        progress: 95,
        details: ["Analysis", "Evaluation", "Solution Design"],
        description: "Advanced problem-solving and analytical thinking",
      },
      {
        name: "Research Methodology",
        progress: 93,
        details: ["Study Design", "Data Collection", "Analysis"],
        description: "Designing and implementing research methodologies",
      },
    ],
  },
  {
    category: "Adaptability & Growth",
    skills: [
      {
        name: "Continuous Learning",
        progress: 94,
        details: ["Self-Development", "New Technologies", "Industry Trends"],
        description: "Staying current with research developments",
      },
      {
        name: "Innovation Mindset",
        progress: 89,
        details: ["Creative Thinking", "Problem Solving", "Initiative"],
        description: "Developing innovative solutions and approaches",
      },
    ],
  },
]

export function SoftSkills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Professional Soft Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {softSkillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-1/3 text-sm">{skill.name}</div>
                    <div className="w-1/2">
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                    <div className="w-1/12 text-sm text-right">{skill.progress}%</div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.description}</p>
                          <ul className="list-disc list-inside mt-1">
                            {skill.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-xs">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

