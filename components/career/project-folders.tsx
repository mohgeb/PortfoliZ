"use client"

import { useState } from "react"
import { Folder, FolderOpen, File, ChevronRight, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const folders = {
  "Folder 1: Projects Completed": [
    { name: "Medical Data Visualizer", url: "https://github.com/mohgeb/Medical-Data-Visualizer" },
    { name: "Demographic Data Analyzer", url: "https://github.com/mohgeb/Demographic-Data-Analyzer" },
    { name: "Time Series Data Visualizer", url: "https://github.com/mohgeb/Time-Series-Data-Visualizer" },
    { name: "Mean, VAR, and Standard Deviation Calculator", url: "https://github.com/mohgeb/Mean_VAR_STD" },
    { name: "Sea Level Predictor", url: "https://github.com/mohgeb/Sea-Level-Predictor" },
  ],
  "Folder 2: Ongoing Projects": [
    { name: "Interactive Portfolio Dashboard | PortfoliZ", url: "https://github.com/mohgeb/PortfoliZ" },
    { name: "Genomic Annotation of Naegleria fowleri: Identifying Metabolic Drivers of Neurophagia", url: "https://docs.google.com/document/d/1SxLLJF4AzSgr_QVRDRF8BaN0rRy3nh4zTGTggIj-iA8/edit?usp=sharing" },
  ],
  "Folder 3: Research Completed": [
    { name: "Differential CO2 Production in Yeast Fermentation: A Comparison of Maple Syrup and Sucralose", url: "https://drive.google.com/file/d/14enJeqM1xi2vlEngpQ0XyGA2prHvxgy7/view?usp=sharing" },
  ],
  "Folder 4: Proposed Hypotheses & Ideas": [
    { name: "Genomic Annotation of Naegleria fowleri: Identifying Metabolic Drivers of Neurophagia", url: "https://docs.google.com/document/d/1SxLLJF4AzSgr_QVRDRF8BaN0rRy3nh4zTGTggIj-iA8/edit?usp=sharing" },
    { name: "Analyzing Demographic Data of Alzheimer's Disease Patients to Identify Common Lifestyle Traits", url: "https://docs.google.com/document/d/1KHOvwB0wEfM4HntM8ih3xVbUAy682wxm3hKTLYqUfrM/edit?usp=sharing" }

  ],
}

export function ProjectFolders() {
  const [openFolders, setOpenFolders] = useState<string[]>([])

  const toggleFolder = (folder: string) => {
    setOpenFolders((current) => (current.includes(folder) ? current.filter((f) => f !== folder) : [...current, folder]))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects & Research Repository</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(folders).map(([folder, files]) => (
            <Collapsible key={folder} open={openFolders.includes(folder)} onOpenChange={() => toggleFolder(folder)}>
              <CollapsibleTrigger className="flex w-full items-center gap-2 rounded-lg p-2 hover:bg-muted">
                {openFolders.includes(folder) ? (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    <FolderOpen className="h-4 w-4 text-primary" />
                  </>
                ) : (
                  <>
                    <ChevronRight className="h-4 w-4" />
                    <Folder className="h-4 w-4 text-primary" />
                  </>
                )}
                <span className="text-sm font-medium">{folder}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-9 mt-1 space-y-1">
                  {files.map((file) => (
                    <a
                      key={file.name}
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg p-2 text-sm hover:bg-muted"
                    >
                      <File className="h-4 w-4" />
                      {file.name}
                    </a>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

