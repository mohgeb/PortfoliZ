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
import { BookOpen, ExternalLink } from "lucide-react"

const documentationLinks = [
  { name: "Getting Started", url: "https://example.com/docs/getting-started" },
  { name: "API Reference", url: "https://example.com/docs/api-reference" },
  { name: "User Guide", url: "https://example.com/docs/user-guide" },
  { name: "Troubleshooting", url: "https://example.com/docs/troubleshooting" },
  { name: "FAQs", url: "https://example.com/docs/faqs" },
]

export function ProjectDocumentation() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <BookOpen className="mr-2 h-4 w-4" />
          Documentation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Project Documentation</DialogTitle>
          <DialogDescription>
            Access comprehensive documentation for the Genomic Annotation of Naegleria fowleri project.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[300px] w-full pr-4">
          {documentationLinks.map((link, index) => (
            <Button key={index} variant="ghost" className="w-full justify-between mb-2" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
