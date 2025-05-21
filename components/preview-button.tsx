"use client"

import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useRouter } from "next/navigation"

export function PreviewButton() {
  const router = useRouter()

  const handlePreview = async () => {
    try {
      const response = await fetch("/api/preview")
      if (response.ok) {
        router.push("/preview")
      }
    } catch (error) {
      console.error("Failed to enter preview mode:", error)
    }
  }

  return (
    <Button onClick={handlePreview} variant="outline" size="sm">
      <Eye className="mr-2 h-4 w-4" />
      Preview
    </Button>
  )
}
