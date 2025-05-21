"use client"
import { GeoExperience } from "./career/geo-experience"
import { ResearchProgress } from "./career/research-progress"
import { MilestoneHeatmap } from "./career/milestone-heatmap"
import { CurrentActivities } from "./career/current-activities"
import { ProjectFolders } from "./career/project-folders"

export default function CareerJourney() {
  return (
    <div className="space-y-6">
      <GeoExperience />
      <div className="grid gap-6 md:grid-cols-2">
        <ResearchProgress />
        <ProjectFolders />
      </div>
      <MilestoneHeatmap />
      <CurrentActivities />
    </div>
  )
}
