"use client"
import { MBTIAnalysis } from "./resume/mbti-analysis"
import { FeaturedProject } from "./resume/featured-project"
import { ResearchNetwork } from "./resume/research-network"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function DataResume() {
  const handleDownload = () => {
    // Convert Google Drive sharing URL to direct download URL
    const fileId = "15LgniHtOE50JSsWDBr5EbnVWmM6vwoh9"
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

    // Open the download URL in a new tab
    window.open(downloadUrl, "_blank")
  }

  return (
    <div className="space-y-6">
      <FeaturedProject />
      <ResearchNetwork />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Resume & Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download ATS Resume
            </Button>
            <div className="space-y-2">
              <h4 className="font-medium">Key Resources</h4>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Work Experience</li>
                <li>University Affiliation</li>
                <li>Projects Completed</li>
                <li>Certificates & Awards</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <MBTIAnalysis />
      </div>
    </div>
  )
}
