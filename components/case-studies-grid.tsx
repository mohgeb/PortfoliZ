"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Lightbulb, Zap, Award } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

// Define the case study type
type CaseStudy = {
  id: string
  title: string
  role: string
  problem: string
  process: string
  stack: string[]
  codeSnippet?: string
  challenges: string
  results: string
  github?: string
  demo?: string
}

// Sample case studies data
const caseStudies = [
  {
    id: "portfolio-dashboard",
    title: "Interactive Portfolio Dashboard",
    role: "Full Stack Developer",
    problem:
      "Create a comprehensive portfolio that showcases professional achievements, skills, and projects in an interactive and engaging way.",
    process:
      "I approached this by designing a dashboard-style interface with multiple sections to organize different aspects of my professional profile. I focused on creating a clean UI with interactive elements to improve user engagement.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "React"],
    codeSnippet: `// Dynamic tab component implementation
const TabContent = ({ activeTab }: { activeTab: string }) => {
  switch (activeTab) {
    case "technical":
      return <TechnicalSkills />;
    case "languages":
      return <LanguageProficiency />;
    case "soft":
      return <SoftSkills />;
    default:
      return <TechnicalSkills />;
  }
};`,
    challenges:
      "The main challenge was creating a responsive layout that works well on all devices while maintaining the dashboard aesthetic. I solved this by implementing a collapsible sidebar and responsive grid layouts.",
    results:
      "The final portfolio dashboard effectively showcases my skills and projects in an interactive format, resulting in increased engagement and positive feedback from potential employers.",
    github: "https://github.com/username/portfolio-dashboard",
    demo: "https://portfolio.example.com",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    role: "Backend Developer",
    problem: "Build a scalable e-commerce platform with real-time inventory management and secure payment processing.",
    process:
      "I designed a microservices architecture to handle different aspects of the e-commerce platform, focusing on scalability and maintainability.",
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "Stripe API"],
    challenges:
      "Implementing real-time inventory updates across multiple services was challenging. I solved this using Redis pub/sub for event-driven communication between services.",
    results:
      "The platform successfully handles thousands of transactions daily with 99.9% uptime and has reduced operational costs by 30%.",
    github: "https://github.com/username/ecommerce-platform",
  },
  {
    id: "finance-sms-pipeline",
    title: "Finance SMS ETL",
    role: "Full-Stack Data Pipeline Developer",
    problem: "Managing personal finances based on Vodafone Cash SMS messages was manually time-consuming and error-prone. The user wanted a monthly financial report and dashboard automatically generated from Google Messages/Vodafone Cash transactions, without relying on manual bookkeeping.",
    process:
      "I exported the SMS messages from Google Messages in XML format, then used Python (on Google Colab) to parse, clean, and categorize the data using xml, pandas, and regex. I transformed the messages into a structured DataFrame with monthly groupings, computed totals, and identified financial behaviors. Finally, I generated an .xlsx report and embedded a visual dashboard with line charts using openpyxl for manual review and trend analysis.",
    stack: ["Python", "Google Messages XML Backup", "Google Colab", "Pandas", "Openxyl"],
    codeSnippet:`import xml.etree.ElementTree as ET
import pandas as pd

tree = ET.parse('sms_backup.xml')
root = tree.getroot()

msgs = []
for sms in root.findall('sms'):
    if 'vodafone' in sms.attrib['address'].lower():
        msgs.append({
            'date': sms.attrib['date'],
            'body': sms.attrib['body']
        })

df = pd.DataFrame(msgs)
df['date'] = pd.to_datetime(df['date'], unit='ms')
`, 
    challenges:
      "Extracting structured financial information from unstructured Vodafone Cash SMS messages required building custom regex patterns to identify transaction types and amounts. Managing various inconsistent message formats and timezones was difficult, especially when categorizing ATM transactions, deposits, and card creation. Ensuring accurate month-wise aggregation and eliminating duplicate messages also added complexity to the pipeline.

",
    results: "The pipeline successfully automated monthly financial reporting from SMS, saving several hours of manual work. It revealed key insights such as peak spending months, recurring patterns in ATM usage, and monthly net savings. The result was a professional, Excel-based dashboard that could be reused and updated every month with zero code changes.",
    demo: "https://ai-generator.example.com",
  },
]

export function CaseStudiesGrid() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openCaseStudy = (study: CaseStudy) => {
    setSelectedStudy(study)
    setIsModalOpen(true)
  }

  // Helper function to get thumbnail image based on case study id
  const getThumbnailBg = (id: string) => {
    switch (id) {
      case "portfolio-dashboard":
        return "bg-gradient-to-br from-blue-900 to-purple-900"
      case "ecommerce-platform":
        return "bg-gradient-to-br from-green-900 to-teal-900"
      case "ai-content-generator":
        return "bg-gradient-to-br from-red-900 to-orange-900"
      default:
        return "bg-gradient-to-br from-gray-800 to-gray-900"
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg cursor-pointer"
            onClick={() => openCaseStudy(study)}
          >
            {/* Add grayscale filter to the thumbnail div */}
            <div
              className={`aspect-video w-full ${getThumbnailBg(study.id)} flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300`}
            >
              {/* Display project title in the center */}
              <div className="text-center p-4">
                <h3 className="font-bold text-xl text-white mb-2">{study.title}</h3>
                <p className="text-white/80 text-sm">{study.role}</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <div className="flex flex-wrap gap-2 mb-2">
                  {study.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} className="bg-white/20 text-white hover:bg-white/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm opacity-90 line-clamp-2">{study.problem}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedStudy && (
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{selectedStudy.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
              <div className="space-y-6 py-2">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                    <Zap className="h-4 w-4" /> My Role
                  </h3>
                  <p className="text-base">{selectedStudy.role}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" /> Problem / Client Request
                  </h3>
                  <p className="text-base">{selectedStudy.problem}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                    <Code className="h-4 w-4" /> My Thought Process
                  </h3>
                  <p className="text-base">{selectedStudy.process}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Technical Stack</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedStudy.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedStudy.codeSnippet && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Key Code Snippet</h3>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      <code>{selectedStudy.codeSnippet}</code>
                    </pre>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                    <Zap className="h-4 w-4" /> Challenges & Solutions
                  </h3>
                  <p className="text-base">{selectedStudy.challenges}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
                    <Award className="h-4 w-4" /> Results & Impact
                  </h3>
                  <p className="text-base">{selectedStudy.results}</p>
                </div>

                {(selectedStudy.github || selectedStudy.demo) && (
                  <div className="flex gap-4 pt-2">
                    {selectedStudy.github && (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={selectedStudy.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {selectedStudy.demo && (
                      <Button variant="default" size="sm" className="gap-2" asChild>
                        <a href={selectedStudy.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
