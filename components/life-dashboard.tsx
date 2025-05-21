"use client"
import { BookRecommendations } from "./life/book-recommendations"
import { ProfessionalCards } from "./life/professional-cards"
import { HappinessAchievement } from "./life/happiness-achievement"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Coffee, Code, ScrollText, Fish } from "lucide-react"

const activityData = [
  {
    title: "Books Read",
    icon: Book,
    value: "42",
    description: "Books completed this year",
  },
  {
    title: "Research Papers",
    icon: ScrollText,
    value: "85",
    description: "Papers read & studfied",
  },
  {
    title: "Coding Hours",
    icon: Code,
    value: "348",
    description: "Hours spent coding",
  },
  {
    title: "Coffee Consumed",
    icon: Coffee,
    value: "867",
    description: "Cups of coffee",
  },
  {
    title: "Miles Swum",
    icon: Fish,
    value: "124",
    description: "Miles covered swimming",
  },
]

export default function LifeDashboard() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {activityData.map((activity) => (
          <Card key={activity.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{activity.title}</CardTitle>
              <activity.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activity.value}</div>
              <p className="text-xs text-muted-foreground">{activity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <BookRecommendations />
        <ProfessionalCards />
      </div>
      <HappinessAchievement />
    </div>
  )
}
