"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Database, FileText, GitBranch, Clock, TrendingUp, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const activities = [
  {
    name: "Genetic Research",
    description: "Genomic Annotation of Naegleria fowleri: Identifying Metabolic Drivers of Neurophagia",
    hours: 0,
    progress: 70,
    icon: Brain,
    color: "bg-blue-500",
    timeSpent: "Last updated 2 hours ago",
    priority: "medium",
  },
  {
    name: "Analyzing Demographic Data of Alzheimer's Disease Patients",
    description: "Data Analysis Project Proposal: Analyzing Demographic Data of Alzheimer's Disease Patients to Identify Common Lifestyle Traits",
    hours: 0,
    progress: 0,
    icon: Database,
    color: "bg-gray-500",
    timeSpent: "Last updated 4 hours ago",
    priority: "medium",
  },
  {
    name: "Landing a Research Assistant Position with Dr. Sid O'Brayant",
    description: "Trying to land a Job/Research/Internship in the fields of Analytics, Biopharmaceutical, Data, or Mathematics.",
    hours: 112,
    progress: 10,
    icon: FileText,
    color: "bg-purple-500",
    timeSpent: "Last updated 1 hour ago",
    priority: "high",
  },
  {
    name: "Interactive Portfolio Dashboard",
    description: "Building an Interactive Portfolio to showcase my professional experiencec in an inconventional way",
    hours: 112,
    progress: 80,
    icon: GitBranch,
    color: "bg-green-500",
    timeSpent: "Last updated 3 hours ago",
    priority: "high",
  },
]

export function CurrentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Current Activities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <Card key={activity.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4">
                    <div className={`p-2 rounded-lg ${activity.color}`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-sm font-medium leading-none">{activity.name}</h4>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Badge variant={activity.priority === "high" ? "destructive" : "secondary"}>
                            {activity.priority}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Priority level</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="bg-muted p-4">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Progress</span>
                      </div>
                      <span className="font-medium">{activity.progress}%</span>
                    </div>
                    <Progress value={activity.progress} className="h-2" />
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Time Spent</span>
                      </div>
                      <span>{activity.hours}h</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {activity.timeSpent}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

