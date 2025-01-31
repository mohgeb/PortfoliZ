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
import { Github, GitBranch, GitCommit, GitPullRequest } from "lucide-react"

const repositoryData = {
  name: "genomic-annotation-nFowleri",
  description: "A comprehensive tool for genetic marker analysis and visualization.",
  branches: ["main", "develop", "feature/new-algorithm", "bugfix/data-processing"],
  commits: [
    { hash: "a1b2c3d", message: "Implement new genetic marker detection algorithm", author: "Mohamed Gebril" },
    { hash: "e4f5g6h", message: "Optimize data processing pipeline", author: "Mohamed Gebril" },
    { hash: "i7j8k9l", message: "Fix sequence alignment bug", author: "Mohamed Gebril" },
  ],
  pullRequests: [
    { number: 42, title: "Add batch processing feature", author: "John Doe" },
    { number: 41, title: "Update documentation for API v2", author: "Jane Smith" },
  ],
}

export function ProjectRepository() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <Github className="mr-2 h-4 w-4" />
          Repository
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Project Repository: {repositoryData.name}</DialogTitle>
          <DialogDescription>{repositoryData.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold">Branches</h4>
              <div className="space-y-2">
                {repositoryData.branches.map((branch, index) => (
                  <div key={index} className="flex items-center">
                    <GitBranch className="mr-2 h-4 w-4" />
                    <span>{branch}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Recent Commits</h4>
              <div className="space-y-2">
                {repositoryData.commits.map((commit, index) => (
                  <div key={index} className="flex items-start">
                    <GitCommit className="mr-2 h-4 w-4 mt-1" />
                    <div>
                      <div className="font-mono text-sm">{commit.hash}</div>
                      <div>{commit.message}</div>
                      <div className="text-sm text-muted-foreground">by {commit.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Open Pull Requests</h4>
              <div className="space-y-2">
                {repositoryData.pullRequests.map((pr, index) => (
                  <div key={index} className="flex items-start">
                    <GitPullRequest className="mr-2 h-4 w-4 mt-1" />
                    <div>
                      <div>
                        #{pr.number} {pr.title}
                      </div>
                      <div className="text-sm text-muted-foreground">by {pr.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

