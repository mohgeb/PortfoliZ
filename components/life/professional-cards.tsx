"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react"

const professionals = [
  {
    name: "Travis Thompson, Ph.D.",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4D03AQE6Jm7RWt0CMQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516851205579?e=1743638400&v=beta&t=Y_623YK5HPU2XJXWrNqTDayHoj26CD-6ktVc_9mzbEw",
    role: "Mathematical Models and Neurodegenerative Disorders",
    institution: "Texas Tech University",
    impact: "Pioneering work in mathematical modeling of brain disorders",
    expertise: ["Mathematical Modeling", "Neuroscience", "Research Methods"],
    links: {
      linkedin: "https://www.linkedin.com/in/travisbthomp/",
      github: "https://github.com/travis-thompson",
      website: "https://www.mathemology.com/",
    },
  },
  {
    name: "Sid O'Bryant, Ph.D.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQGytBCzmlKRdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727363543493?e=1743638400&v=beta&t=bpAqiMTG5DjCjl3aStCJ8IQj_A5Un3xia_bx8Y7uKLI",
    role: "Alzheimer's Disease Research",
    institution: "University of North Texas",
    impact: "Revolutionary research in early Alzheimer's detection",
    expertise: ["Alzheimer's Research", "Biomarkers", "Clinical Trials"],
    links: {
      linkedin: "https://experts.unthsc.edu/en/persons/sid-obryant",
      website: "https://unt.edu/sid-obryant",
    },
  },
  {
    name: "Charles Severance, Ph.D.",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4E03AQHHeSP_-lW5gQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1588331332862?e=1743638400&v=beta&t=HIdSis9r-sxdHfvs1QI1IRmGphvOEllR2C-Mxy-s0fU",
    role: "Computer Engineering and Data Science",
    institution: "University of Michigan",
    impact: "Innovative approaches to teaching programming and data analysis",
    expertise: ["Computer Science", "Education", "Open Source"],
    links: {
      github: "https://github.com/csev",
      website: "https://dr-chuck.com",
    },
  },
  {
    name: "Gerald Juhnke, Ed.D.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQGCuu6jcMhw_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725198624080?e=1743638400&v=beta&t=wDCOD9OtkGRQ8HU3A5f8xAa6h8_Dj1FwiN4pjvc6ZRE",
    role: "Clinical Psychology",
    institution: "University of Texas",
    impact: "Groundbreaking work in psychological assessment methods",
    expertise: ["Clinical Psychology", "Assessment", "Mental Health"],
    links: {
      linkedin: "https://www.linkedin.com/in/jerryjuhnke/",
      mail: "mailto:gerald.juhnke@utsa.edu",
    },
  },
  {
    name: "Shima ElDehy, Ph.D.",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Clinical Psychotherapist and Autism Researcher",
    institution: "Alexandria University",
    impact: "Advanced research in autism spectrum disorders",
    expertise: ["Autism Research", "Clinical Psychology", "Behavioral Science"],
    links: {
      linkedin: "https://linkedin.com/in/shima-eldehy",
      website: "https://alexandria.edu/shima-eldehy",
    },
  },
  {
    name: "Mahmoud Attia, BEng",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQEfxCYNG6wPXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1567083753438?e=1743638400&v=beta&t=PJDc5Gds7um_Ery3o4JlBNMfB438lMw5VdIEK5965_A",
    role: "Software Engineer and Mentor",
    institution: "The German University in Cairo",
    impact: "Contributions to software development education",
    expertise: ["Software Engineering", "Mentorship", "Tech Education"],
    links: {
      github: "https://github.com/Atattia",
      linkedin: "https://www.linkedin.com/in/mahmoud-yousry-attia/",
    },
  },
]

export function ProfessionalCards() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((current) => (current === 0 ? professionals.length - 1 : current - 1))
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current === professionals.length - 1 ? 0 : current + 1))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Influential Professionals</CardTitle>
        <CardDescription>Mentors and collaborators who have shaped my professional journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative px-12">
          {" "}
          {/* Added padding for navigation buttons */}
          <div className="relative min-h-[400px]">
            {" "}
            {/* Fixed height container */}
            {professionals.map((professional, index) => (
              <div
                key={professional.name}
                className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                aria-hidden={index !== currentIndex}
              >
                <Card className="border-none shadow-none">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={professional.avatar} alt={professional.name} />
                        <AvatarFallback>
                          {professional.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <CardTitle>{professional.name}</CardTitle>
                        <CardDescription>{professional.role}</CardDescription>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{professional.institution}</p>
                      <p className="text-sm">{professional.impact}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {professional.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {professional.links.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={professional.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {professional.links.linkedin && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={professional.links.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {professional.links.mail && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={professional.links.mail}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {professional.links.website && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={professional.links.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2"
            aria-label="Previous professional"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2"
            aria-label="Next professional"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          {/* Navigation Dots */}
          <div className="mt-4 flex justify-center gap-1">
            {professionals.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`h-2 w-2 rounded-full p-0 ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to professional ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
