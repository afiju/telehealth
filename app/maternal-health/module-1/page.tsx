"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Heart, Volume2, Download, Play, Pause } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function Module1Page() {
  const [currentSection, setCurrentSection] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null)
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null)

  const totalSections = 4

  const moduleContent = {
    title: "Planning for Pregnancy",
    description: "Preparing your body and mind for a healthy pregnancy",
    sections: [
      {
        title: "Preconception Health",
        content: `Before you become pregnant, it's important to prepare your body for a healthy pregnancy. This means taking care of yourself physically, mentally, and emotionally.

Key steps for preconception health:
• Visit a healthcare provider for a preconception checkup
• Start taking folic acid supplements (400-800 micrograms daily)
• Maintain a healthy weight through proper diet and exercise
• Avoid smoking, alcohol, and harmful substances
• Get vaccinated if needed (especially rubella and hepatitis B)
• Manage any chronic conditions like diabetes or high blood pressure
• Take care of your mental health and reduce stress

A preconception checkup helps identify and address any health issues that could affect your pregnancy. Your healthcare provider will review your medical history, current medications, and lifestyle factors.`,
      },
      {
        title: "Folic Acid and Nutrition",
        content: `Folic acid is a B vitamin that helps prevent serious birth defects of the brain and spine. All women of reproductive age should take folic acid daily, even if they're not planning to get pregnant.

Why folic acid is important:
• Prevents neural tube defects like spina bifida
• Supports healthy cell division and DNA formation
• Reduces risk of heart defects and cleft lip
• Should be taken before conception and during early pregnancy

Good sources of folate (natural form of folic acid):
• Dark green leafy vegetables (spinach, kale)
• Citrus fruits and juices
• Beans and legumes
• Fortified cereals and grains
• Avocados and asparagus

In Sierra Leone, you can find folic acid supplements at:
• Government health centers
• Private pharmacies
• Marie Stopes clinics
• NGO health programs

Remember: Start taking folic acid at least one month before trying to conceive for maximum benefit.`,
      },
      {
        title: "Healthy Lifestyle Choices",
        content: `Making healthy lifestyle choices before pregnancy sets the foundation for a healthy baby and reduces pregnancy complications.

Diet and Nutrition:
• Eat a balanced diet with fruits, vegetables, whole grains, and lean proteins
• Include local foods like cassava leaves, sweet potatoes, and fish
• Drink plenty of clean water (at least 8 glasses daily)
• Limit caffeine intake
• Avoid raw or undercooked foods

Physical Activity:
• Engage in regular moderate exercise (30 minutes most days)
• Walking, swimming, and prenatal yoga are excellent choices
• Avoid contact sports and activities with fall risk
• Listen to your body and don't overexert

Sleep and Rest:
• Aim for 7-9 hours of quality sleep nightly
• Establish a regular sleep schedule
• Create a comfortable sleep environment
• Rest when you feel tired

Stress Management:
• Practice relaxation techniques like deep breathing
• Maintain social connections with family and friends
• Engage in activities you enjoy
• Seek support when needed`,
      },
      {
        title: "Family Planning and Timing",
        content: `Planning when to have children is an important decision that affects your health, your family's wellbeing, and your ability to provide for your children.

Factors to consider:
• Your age and health status
• Financial readiness and stability
• Relationship stability and support
• Career and education goals
• Spacing between children (recommended 18-24 months)

Benefits of family planning:
• Better maternal and child health outcomes
• Reduced risk of pregnancy complications
• Improved economic opportunities
• Better education for existing children
• Reduced maternal and infant mortality

Family planning methods available in Sierra Leone:
• Contraceptive pills and injections
• Intrauterine devices (IUDs)
• Implants and barrier methods
• Natural family planning methods
• Emergency contraception

Where to get family planning services:
• Government health centers and hospitals
• Marie Stopes Sierra Leone clinics
• Private healthcare providers
• Community health workers
• NGO health programs

Remember: Family planning is a right, and you have the power to decide when and how many children to have.`,
      },
    ],
  }

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(currentSection + 1)
      stopSpeech()
    }
  }

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
      stopSpeech()
    }
  }

  const startSpeech = () => {
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis
      const text = moduleContent.sections[currentSection - 1].content
      const utterance = new SpeechSynthesisUtterance(text)

      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 1

      utterance.onend = () => {
        setIsPlaying(false)
        setCurrentUtterance(null)
      }

      utterance.onerror = () => {
        setIsPlaying(false)
        setCurrentUtterance(null)
      }

      synthesis.speak(utterance)
      setCurrentUtterance(utterance)
      setIsPlaying(true)
      setSpeechSynthesis(synthesis)
    }
  }

  const stopSpeech = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel()
      setIsPlaying(false)
      setCurrentUtterance(null)
    }
  }

  const toggleSpeech = () => {
    if (isPlaying) {
      stopSpeech()
    } else {
      startSpeech()
    }
  }

  const downloadContent = () => {
    const fullContent =
      `${moduleContent.title}\n\n${moduleContent.description}\n\n` +
      moduleContent.sections
        .map((section, index) => `${index + 1}. ${section.title}\n\n${section.content}\n\n`)
        .join("")

    const blob = new Blob([fullContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${moduleContent.title.replace(/\s+/g, "_")}.txt`
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
            <Link href="/maternal-health">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Modules
            </Link>
          </Button>
          <h1 className="text-lg font-semibold mx-auto">{moduleContent.title}</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <div className="flex justify-between items-center mb-4">
            <Badge className="bg-green-100 text-green-800">
              Section {currentSection} of {totalSections}
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={toggleSpeech}>
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? "Pause" : "Listen"}
              </Button>
              <Button variant="outline" size="sm" onClick={downloadContent}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          <div className="space-y-1 mb-4">
            <Progress value={(currentSection / totalSections) * 100} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-500" />
                {moduleContent.sections[currentSection - 1].title}
              </CardTitle>
              <CardDescription>{moduleContent.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm max-w-none">
                {moduleContent.sections[currentSection - 1].content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-green-50 p-4 rounded-md">
                <h4 className="font-medium text-green-800 mb-2">Key Takeaways:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2 text-sm text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Preparation before pregnancy is crucial for healthy outcomes</span>
                  </li>
                  <li className="flex gap-2 text-sm text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Folic acid should be taken before conception</span>
                  </li>
                  <li className="flex gap-2 text-sm text-green-700">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Healthy lifestyle choices benefit both mother and baby</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prevSection} disabled={currentSection === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous Section
            </Button>
            <Button
              onClick={nextSection}
              disabled={currentSection === totalSections}
              className="bg-green-600 hover:bg-green-700"
            >
              Next Section <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Additional resources and support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/healthcare-finder">Find Clinic</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+23276555000">Call Hotline</a>
                </Button>
                <Button variant="outline" size="sm" onClick={downloadContent}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Module
                </Button>
                <Button variant="outline" size="sm" onClick={toggleSpeech}>
                  <Volume2 className="mr-2 h-4 w-4" />
                  {isPlaying ? "Stop Audio" : "Play Audio"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
