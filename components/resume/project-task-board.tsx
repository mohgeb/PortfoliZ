import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { KanbanSquare, CheckCircle2, Circle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const taskData = {
  todo: [
    { id: 1, title: "Implement new genetic marker detection algorithm", priority: "high" },
    { id: 2, title: "Update documentation for API v2", priority: "medium" },
    { id: 3, title: "Design user interface for data visualization", priority: "medium" },
  ],
  inProgress: [
    { id: 4, title: "Optimize data processing pipeline", priority: "high" },
    { id: 5, title: "Integrate machine learning model for prediction", priority: "high" },
  ],
  done: [
    { id: 6, title: "Set up continuous integration pipeline", priority: "medium" },
    { id: 7, title: "Implement user authentication system", priority: "high" },
  ],
}

function TaskList({ tasks, icon: Icon }: { tasks: any[]; icon: any }) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start space-x-2">
          <Icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
          <div>
            <div>{task.title}</div>
            <Badge variant={task.priority === "high" ? "destructive" : "secondary"}>{task.priority}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ProjectTaskBoard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <KanbanSquare className="mr-2 h-4 w-4" />
          Task Board
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Project Task Board</DialogTitle>
          <DialogDescription>Overview of current tasks for the Genetic Analysis Tool project.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">To Do ({taskData.todo.length})</h4>
              <TaskList tasks={taskData.todo} icon={Circle} />
            </div>
            <div>
              <h4 className="mb-2 font-semibold">In Progress ({taskData.inProgress.length})</h4>
              <TaskList tasks={taskData.inProgress} icon={AlertCircle} />
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Done ({taskData.done.length})</h4>
              <TaskList tasks={taskData.done} icon={CheckCircle2} />
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
