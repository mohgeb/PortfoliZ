"use client"
import { Bell } from "lucide-react"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const notifications = [
  {
    title: "Project Z Completed",
    description: "PortfoliZ: An InteractiveDashboard Portfolio Project",
    date: "2025-01-31",
  },
  {
    title: "Certification Earned",
    description: "Data Analysis with Python Certificate",
    date: "2024-10-10",
  },
  {
    title: "Certification Earned",
    description: "Responsive Web Design Certificate",
    date: "2024-09-16",
  },
  {
    title: "Paper Published",
    description: "Differential CO2 Production in Yeast Fermentation: A Comparison of Maple Syrup and Sucralose",
    date: "2024-01-20",
  },
  // Add more notifications as needed
]

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary" />
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <div className="space-y-4">
          <div className="font-medium">Notifications</div>
          <ScrollArea className="h-[300px]">
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex flex-col space-y-1 border-b pb-4 last:border-0 last:pb-0">
                  <div className="font-medium">{notification.title}</div>
                  <div className="text-sm text-muted-foreground">{notification.description}</div>
                  <div className="text-xs text-muted-foreground">{notification.date}</div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </PopoverContent>
    </Popover>
  )
}
