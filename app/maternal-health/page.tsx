"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Baby, Heart, Calendar, AlertCircle, CheckCircle, Volume2, Download } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function MaternalHealthPage() {
  const modules = [
    {
      id: 1,
      title: "Planning for Pregnancy",
      description: "Preparing your body and mind for a healthy pregnancy",
      duration: "15 minutes",
      completed: true,
      topics: ["Preconception health", "Folic acid", "Healthy lifestyle", "Family planning"],
      icon: Heart,
      color: "green",
    },
    {
      id: 2,
      title: "Early Pregnancy Care",
      description: "First trimester care and what to expect",
      duration: "20 minutes",
      completed: true,
      topics: ["First antenatal visit", "Morning sickness", "Danger signs", "Nutrition"],
      icon: Baby,
      color: "blue",
    },
    {
      id: 3,
      title: "Antenatal Care Visits",
      description: "Regular checkups throughout pregnancy",
      duration: "18 minutes",
      completed: true,
      topics: ["Schedule of visits", "Tests and screenings", "Vaccinations", "Birth planning"],
      icon: Calendar,
      color: "purple",
    },
    {
      id: 4,
      title: "Safe Delivery Practices",
      description: "Preparing for labor and delivery",
      duration: "25 minutes",
      completed: false,
      topics: ["Signs of labor", "When to go to facility", "Delivery positions", "Emergency delivery"],
      icon: AlertCircle,
      color: "orange",
    },
    {
      id: 5,
      title: "Postnatal Care",
      description: "Care for mother and baby after delivery",
      duration: "22 minutes",
      completed: false,
      topics: ["Recovery after birth", "Breastfeeding", "Baby care", "Family planning"],
      icon: Heart,
      color: "pink",
    },
    {
      id: 6,
      title: "Newborn Care",
      description: "Essential care for your newborn baby",
      duration: "20 minutes",
      completed: false,
      topics: ["Immediate newborn care", "Feeding", "Immunizations", "Danger signs"],
      icon: Baby,
      color: "teal",
    },
    {
      id: 7,
      title: "Complications & Emergencies",
      description: "Recognizing and responding to danger signs",
      duration: "30 minutes",
      completed: false,
      topics: ["Pregnancy complications", "Emergency signs", "When to seek help", "First aid"],
      icon: AlertCircle,
      color: "red",
    },
    {
      id: 8,
      title: "Maternal Nutrition",
      description: "Eating well during pregnancy and breastfeeding",
      duration: "25 minutes",
      completed: false,
      topics: ["Nutritional needs", "Local foods", "Supplements", "Food safety"],
      icon: Heart,
      color: "amber",
    },
  ]

  const completedModules = modules.filter((m) => m.completed).length
  const progressPercentage = (completedModules / modules.length) * 100

  const getColorClasses = (color: string, completed: boolean) => {
    if (!completed) {
      return "bg-gray-50 border-gray-200 text-gray-600"
    }

    const colors = {
      green: "bg-green-50 border-green-200 text-green-700",
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700",
      teal: "bg-teal-50 border-teal-200 text-teal-700",
      red: "bg-red-50 border-red-200 text-red-700",
      amber: "bg-amber-50 border-amber-200 text-amber-700",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getButtonColor = (color: string, completed: boolean) => {
    if (completed) {
      return "bg-green-600 hover:bg-green-700"
    }

    const colors = {
      green: "bg-green-600 hover:bg-green-700",
      blue: "bg-blue-600 hover:bg-blue-700",
      purple: "bg-purple-600 hover:bg-purple-700",
      orange: "bg-orange-600 hover:bg-orange-700",
      pink: "bg-pink-600 hover:bg-pink-700",
      teal: "bg-teal-600 hover:bg-teal-700",
      red: "bg-red-600 hover:bg-red-700",
      amber: "bg-amber-600 hover:bg-amber-700",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const handleAudioClick = (moduleId: number) => {
    // Get module content based on moduleId
    const moduleTexts = {
      1: "Planning for Pregnancy: Preparing your body and mind for a healthy pregnancy. This includes preconception health, taking folic acid supplements, maintaining healthy lifestyle choices, and family planning decisions.",
      2: "Early Pregnancy Care: First trimester care including your first antenatal visit, managing morning sickness, recognizing danger signs, and proper nutrition during early pregnancy.",
      3: "Antenatal Care Visits: Regular checkups throughout pregnancy including schedule of visits, important tests and screenings, vaccinations, and birth planning preparation.",
      4: "Safe Delivery Practices: Preparing for labor and delivery including recognizing signs of labor, knowing when to go to the health facility, delivery positions, and emergency delivery procedures.",
      5: "Postnatal Care: Care for mother and baby after delivery including recovery after birth, breastfeeding guidance, newborn care, and family planning options.",
      6: "Newborn Care: Essential care for your newborn baby including immediate newborn care, feeding practices, immunization schedule, and recognizing danger signs in newborns.",
      7: "Complications & Emergencies: Recognizing and responding to danger signs including pregnancy complications, emergency signs, when to seek help, and basic first aid.",
      8: "Maternal Nutrition: Eating well during pregnancy and breastfeeding including nutritional needs, local foods, supplements, and food safety practices.",
    }

    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis
      const text = moduleTexts[moduleId as keyof typeof moduleTexts]
      const utterance = new SpeechSynthesisUtterance(text)

      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 1

      synthesis.speak(utterance)
    } else {
      alert("Speech synthesis not supported in this browser")
    }
  }

  const handleDownloadClick = (moduleId: number, moduleTitle: string) => {
    const moduleTexts = {
      1: `Planning for Pregnancy

Preparing your body and mind for a healthy pregnancy

This module covers:
- Preconception health checkups and preparations
- Importance of folic acid and when to start taking it
- Healthy lifestyle choices before pregnancy
- Family planning and timing decisions
- Available resources in Sierra Leone

Key takeaways:
• Start preparing your body before conception
• Take folic acid supplements daily
• Maintain a healthy lifestyle
• Plan your pregnancy timing carefully
• Seek preconception counseling`,

      2: `Early Pregnancy Care

First trimester care and what to expect

This module covers:
- Your first antenatal visit and what to expect
- Managing morning sickness naturally
- Recognizing danger signs in early pregnancy
- Proper nutrition during the first trimester
- Available healthcare services in Sierra Leone

Key takeaways:
• Attend your first antenatal visit early
• Learn to manage morning sickness
• Know the danger signs
• Eat nutritious foods
• Seek help when needed`,

      // Add content for modules 3-8 similarly...
    }

    const content =
      moduleTexts[moduleId as keyof typeof moduleTexts] ||
      `${moduleTitle}\n\nContent for this module is being prepared.`

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${moduleTitle.replace(/\s+/g, "_")}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-lg font-semibold mx-auto">Maternal Health Education</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-900 mb-2">Maternal Health Journey</h2>
                <p className="text-green-700 mb-4">Complete guide from pregnancy planning to postnatal care</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Your Progress</span>
                    <span className="font-medium">
                      {completedModules} of {modules.length} modules
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Learning Modules</h2>
            <Badge variant="outline">{modules.length} Modules</Badge>
          </div>

          <div className="grid gap-4">
            {modules.map((module) => {
              const IconComponent = module.icon
              return (
                <Card key={module.id} className={`border-l-4 ${getColorClasses(module.color, module.completed)}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${module.completed ? "bg-white" : "bg-gray-100"}`}>
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <IconComponent
                              className={`h-5 w-5 ${module.completed ? "text-green-600" : "text-gray-500"}`}
                            />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          <CardDescription>{module.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant={module.completed ? "default" : "secondary"}>{module.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {module.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className={getButtonColor(module.color, module.completed)} asChild>
                        <Link href={`/maternal-health/module-${module.id}`}>
                          {module.completed ? "Review" : "Start"} Module
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleAudioClick(module.id)}>
                        <Volume2 className="mr-2 h-4 w-4" />
                        Audio
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDownloadClick(module.id, module.title)}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Quick Reference Guides</CardTitle>
              <CardDescription>Essential information at your fingertips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Danger Signs in Pregnancy</h4>
                      <p className="text-xs text-muted-foreground">When to seek immediate help</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/maternal-health/danger-signs">View</Link>
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-medium">Antenatal Visit Schedule</h4>
                      <p className="text-xs text-muted-foreground">When to visit the clinic</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/maternal-health/visit-schedule">View</Link>
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-pink-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-pink-600" />
                    <div>
                      <h4 className="font-medium">Nutrition During Pregnancy</h4>
                      <p className="text-xs text-muted-foreground">Foods for healthy pregnancy</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/maternal-health/nutrition">View</Link>
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <Baby className="h-5 w-5 text-orange-600" />
                    <div>
                      <h4 className="font-medium">Birth Preparedness Plan</h4>
                      <p className="text-xs text-muted-foreground">Planning for safe delivery</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/maternal-health/birth-plan">View</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Audio Lessons in Local Languages</CardTitle>
              <CardDescription>Listen to maternal health education in your preferred language</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Prenatal Care (Krio)</h4>
                      <p className="text-xs text-muted-foreground">15 minutes • Basic antenatal care</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Play
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Safe Delivery (Mende)</h4>
                      <p className="text-xs text-muted-foreground">20 minutes • Delivery preparation</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Play
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Breastfeeding (Temne)</h4>
                      <p className="text-xs text-muted-foreground">18 minutes • Breastfeeding basics</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Play
                  </Button>
                </div>

                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/audio-lessons">View All Audio Lessons</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-bold text-blue-900 mb-2">Need Help?</h3>
                <p className="text-sm text-blue-700 mb-4">
                  If you have questions about maternal health or need immediate assistance, don't hesitate to reach out.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+23276555000">Maternal Hotline</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/healthcare-finder">Find Clinic</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
