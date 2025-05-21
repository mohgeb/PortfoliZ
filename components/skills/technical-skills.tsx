"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

const skillCategories = [
  {
    category: "Data Science & Machine Learning",
    skills: [
      {
        name: "Machine Learning Algorithms",
        progress: 90,
        details: ["Neural Networks", "Random Forests", "SVM"],
        description: "Development and implementation of ML models",
      },
      {
        name: "Deep Learning",
        progress: 85,
        details: ["TensorFlow", "PyTorch", "CNN"],
        description: "Neural network architecture and training",
      },
      {
        name: "Natural Language Processing",
        progress: 82,
        details: ["NLTK", "Transformers", "BERT"],
        description: "Text analysis and processing",
      },
    ],
  },
  {
    category: "Mathematics & Statistics",
    skills: [
      {
        name: "Applied Mathematics",
        progress: 95,
        details: ["Linear Algebra", "Calculus", "Optimization"],
        description: "Mathematical modeling and problem-solving",
      },
      {
        name: "Statistical Analysis",
        progress: 88,
        details: ["Hypothesis Testing", "Regression", "Time Series"],
        description: "Statistical methods and analysis",
      },
      {
        name: "Probability Theory",
        progress: 85,
        details: ["Distributions", "Stochastic Processes", "Bayesian"],
        description: "Probabilistic modeling and inference",
      },
    ],
  },
  {
    category: "Programming & Development",
    skills: [
      {
        name: "Python Development",
        progress: 92,
        details: ["NumPy", "Pandas", "Scikit-learn"],
        description: "Scientific computing and data analysis",
      },
      {
        name: "R Programming",
        progress: 88,
        details: ["tidyverse", "ggplot2", "caret"],
        description: "Statistical computing and graphics",
      },
      {
        name: "SQL & Databases",
        progress: 85,
        details: ["PostgreSQL", "MongoDB", "Query Optimization"],
        description: "Database management and querying",
      },
    ],
  },
]

export function TechnicalSkills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Technical Skills Proficiency</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
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
