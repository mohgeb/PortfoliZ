"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, Clock, Target, AlertCircle } from "lucide-react"
import { ProjectDocumentation } from "./project-documentation"
import { ProjectRepository } from "./project-repository"
import { ProjectTaskBoard } from "./project-task-board"

const projectData = {
  overview: {
    status: "In Progress",
    startDate: "2024-10-15",
    targetDate: "2025-12-31",
  },
  metrics: {
    overallProgress: 25,
    tasksCompleted: 15,
    totalTasks: 60,
  },
  updates: [
    {
      date: "2025-01-25",
      message: "Data Acquisition & Collection",
      type: "feature",
    },
    {
      date: "2025-01-23",
      message: "Literature review on genetic markers",
      type: "improvement",
    },
    {
      date: "2025-01-20",
      message: "Fixed sequence alignment bug",
      type: "bug",
    },
  ],
  sprintTasks: [
    {
      task: "Genomic Annotation",
      status: "in-progress",
      priority: "high",
    },
    {
      task: "Pathway Analysis",
      status: "pending",
      priority: "medium",
    },
    {
      task: "Functional Annotation",
      status: "pending",
      priority: "medium",
    },
    {
      task: "Analysis & Report",
      status: "pending",
      priority: "medium",
    },
  ],
  teamActivity: [
    {
      user: "Mohamed Gebril",
      action: "Committed code",
      time: "2 hours ago",
      avatar: "/avatars/sarah.jpg",
    },
    {
      user: "Mohamed Gebril",
      action: "Updated documentation",
      time: "4 hours ago",
      avatar: "/avatars/alex.jpg",
    },
    {
      user: "Mohamed Gebril",
      action: "Merged pull request",
      time: "6 hours ago",
      avatar: "/avatars/maria.jpg",
    },
  ],
}

export function FeaturedProject() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Project: Genomic Annotation of Naegleria fowleri</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Project Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Status</span>
                  </div>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500">
                    {projectData.overview.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Start Date</span>
                  </div>
                  <span className="text-sm">{projectData.overview.startDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Target Date</span>
                  </div>
                  <span className="text-sm">{projectData.overview.targetDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Progress Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{projectData.metrics.overallProgress}%</span>
                  </div>
                  <Progress value={projectData.metrics.overallProgress} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Tasks Completed</span>
                  </div>
                  <span className="text-sm">
                    {projectData.metrics.tasksCompleted}/{projectData.metrics.totalTasks}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.updates.map((update, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className={`mt-0.5 rounded-full p-1 ${
                        update.type === "feature"
                          ? "bg-green-500/20 text-green-500"
                          : update.type === "improvement"
                            ? "bg-blue-500/20 text-blue-500"
                            : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      <AlertCircle className="h-3 w-3" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">{update.message}</p>
                      <p className="text-xs text-muted-foreground">{update.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Sprint Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Current Sprint Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.sprintTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        task.priority === "high"
                          ? "bg-red-500"
                          : task.priority === "medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                    />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">{task.task}</p>
                      <p className="text-xs text-muted-foreground capitalize">{task.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Team Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.teamActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.avatar} />
                      <AvatarFallback>
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Project Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <ProjectDocumentation />
                <ProjectRepository />
                <ProjectTaskBoard />
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
