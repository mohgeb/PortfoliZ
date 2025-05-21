"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const technicalSkills = [
  { name: "Python", level: 95 },
  { name: "Data Manipulation", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Data Extraction", level: 88 },
  { name: "Data Visualization", level: 92 },
  { name: "Statistical Analysis", level: 89 },
]

const softSkills = [
  { name: "Communication", level: 80 },
  { name: "Problem Solving", level: 84 },
  { name: "Teamwork", level: 88 },
  { name: "Adaptability", level: 95 },
  { name: "Critical Thinking", level: 93 },
  { name: "Time Management", level: 92 },
  { name: "Leadership", level: 40 },
  { name: "Creativity", level: 89 },
]

const languages = {
  programming: [
    { name: "Python", level: 95 },
    { name: "R", level: 75 },
    { name: "SQL", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "LaTeX", level: 85 },
  ],
  spoken: [
    { name: "English", level: 100 },
    { name: "Arabic", level: 95 },
    { name: "French", level: 60 },
  ],
}

const certifications = [
  { name: "Data Analysis with Python Certificate", issuer: "freeCodeCamp", year: 2024 },
  { name: "Responsive Web Design Certificate", issuer: "freeCodeCamp", year: 2024 },
]

const projectMetrics = [
  { name: "Data Analysis", completed: 5, ongoing: 3 },
  { name: "Machine Learning", completed: 1, ongoing: 2 },
  { name: "Web Development", completed: 5, ongoing: 1 },
  { name: "Research Papers", completed: 1, ongoing: 3 },
  { name: "Open Source Contributions", completed: 0, ongoing: 5 },
]

export default function SkillsAnalytics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Skills Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="technical" className="space-y-4">
            <TabsList>
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={technicalSkills}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Skills" dataKey="level" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="soft" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  {softSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={softSkills}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Skills" dataKey="level" stroke="#16a34a" fill="#22c55e" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Language Proficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="programming" className="space-y-4">
              <TabsList>
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="spoken">Spoken</TabsTrigger>
              </TabsList>
              <TabsContent value="programming" className="space-y-2">
                {languages.programming.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{lang.name}</span>
                      <span>{lang.level}%</span>
                    </div>
                    <Progress value={lang.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="spoken" className="space-y-2">
                {languages.spoken.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{lang.name}</span>
                      <span>{lang.level}%</span>
                    </div>
                    <Progress value={lang.level} className="h-2" />
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#3b82f6" name="Completed Projects" />
              <Bar dataKey="ongoing" fill="#22c55e" name="Ongoing Projects" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technologies & Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "R",
              "SQL",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "Pandas",
              "NumPy",
              "Matplotlib",
              "Seaborn",
              "Jupyter",
              "Git",
              "Docker",
              "AWS",
              "Google Cloud Platform",
              "Tableau",
              "Power BI",
              "Apache Spark",
              "Hadoop",
              "MongoDB",
            ].map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
