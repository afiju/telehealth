"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Baby, Volume2, Download, Play, Pause } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function Module2Page() {
  const [currentSection, setCurrentSection] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null)

  const totalSections = 4

  const moduleContent = {
    title: "Early Pregnancy Care",
    description: "First trimester care and what to expect",
    sections: [
      {
        title: "First Antenatal Visit",
        content: `Your first antenatal visit is one of the most important appointments during pregnancy. It should happen as soon as you know you're pregnant, ideally before 12 weeks.

What happens during your first visit:
• Confirmation of pregnancy through tests
• Medical history review and physical examination
• Blood tests to check for anemia, HIV, syphilis, and blood type
• Blood pressure and weight measurements
• Calculation of your due date
• Discussion of your health and lifestyle
• Prescription of prenatal vitamins and supplements

Important tests during first trimester:
• Hemoglobin test for anemia
• HIV testing and counseling
• Syphilis screening
• Hepatitis B testing
• Urine tests for infections
• Blood group and Rhesus factor

In Sierra Leone, antenatal care is available at:
• Government hospitals and health centers
• Private clinics and hospitals
• NGO health facilities
• Community health posts

Remember to bring:
• Any previous medical records
• List of current medications
• Questions you want to ask
• A support person if desired`,
      },
      {
        title: "Managing Morning Sickness",
        content: `Morning sickness affects up to 80% of pregnant women, usually starting around 6 weeks and improving by 12-16 weeks. Despite its name, it can happen any time of day.

Common symptoms:
• Nausea and vomiting
• Food aversions and cravings
• Sensitivity to smells
• Fatigue and dizziness
• Heartburn and indigestion

Natural remedies that help:
• Eat small, frequent meals (every 2-3 hours)
• Choose bland, dry foods like crackers or toast
• Drink ginger tea or chew fresh ginger
• Stay hydrated with small sips of water
• Get plenty of rest and avoid triggers
• Try vitamin B6 supplements (consult your provider first)

Local remedies in Sierra Leone:
• Ginger root tea (fresh or dried)
• Lemon water or lemon slices
• Peppermint tea
• Small portions of rice or bread
• Avoid spicy or fatty foods

When to seek help:
• Vomiting more than 3 times per day
• Unable to keep food or fluids down
• Signs of dehydration (dark urine, dizziness)
• Severe abdominal pain
• Weight loss of more than 2kg

Severe morning sickness (hyperemesis gravidarum) requires medical treatment and may need hospitalization.`,
      },
      {
        title: "Recognizing Danger Signs",
        content: `Knowing the warning signs during early pregnancy can save your life and your baby's life. Seek immediate medical attention if you experience any of these symptoms.

Serious danger signs:
• Heavy bleeding (soaking more than one pad per hour)
• Severe abdominal or pelvic pain
• Severe headaches with blurred vision
• High fever (over 38°C/100.4°F)
• Persistent vomiting with inability to keep fluids down
• Severe dizziness or fainting
• Burning sensation when urinating
• Absence of fetal movement (after 20 weeks)

Signs of miscarriage:
• Heavy bleeding with clots
• Severe cramping or back pain
• Tissue passing from the vagina
• Sudden decrease in pregnancy symptoms

Signs of ectopic pregnancy:
• Sharp, stabbing pain on one side
• Shoulder pain
• Dizziness or fainting
• Vaginal bleeding
• Nausea and vomiting

Emergency contacts in Sierra Leone:
• National Emergency: 999
• Ambulance Service: 999
• Connaught Hospital: +232 22 222 271
• Princess Christian Maternity Hospital: +232 22 224 439

What to do in an emergency:
• Call for help immediately
• Go to the nearest hospital
• Bring someone with you if possible
• Don't wait for symptoms to get worse
• Keep a list of emergency contacts handy`,
      },
      {
        title: "Early Pregnancy Nutrition",
        content: `Good nutrition during early pregnancy is crucial for your baby's development and your own health. The first trimester is when your baby's organs are forming.

Essential nutrients for early pregnancy:
• Folic acid (400-800 mcg daily) - prevents birth defects
• Iron (27 mg daily) - prevents anemia
• Calcium (1000 mg daily) - for bone development
• Protein - for tissue growth
• Vitamin D - for bone health
• Omega-3 fatty acids - for brain development

Foods to include:
• Dark green leafy vegetables (cassava leaves, spinach)
• Citrus fruits (oranges, lemons)
• Lean proteins (fish, chicken, beans)
• Whole grains (brown rice, millet)
• Dairy products or alternatives
• Nuts and seeds

Local nutritious foods in Sierra Leone:
• Cassava leaves (rich in folate and iron)
• Sweet potatoes (vitamin A and fiber)
• Groundnuts (protein and healthy fats)
• Fish (protein and omega-3s)
• Plantains (potassium and vitamin B6)
• Palm oil (vitamin A, use in moderation)

Foods to avoid:
• Raw or undercooked meat and fish
• Unpasteurized dairy products
• Raw eggs
• High-mercury fish
• Alcohol and tobacco
• Excessive caffeine
• Unwashed fruits and vegetables

Meal planning tips:
• Eat 5-6 small meals daily
• Include protein at every meal
• Choose whole grains over refined
• Drink 8-10 glasses of clean water daily
• Take prenatal vitamins as prescribed
• Cook food thoroughly and eat fresh`,
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
      }

      synthesis.speak(utterance)
      setIsPlaying(true)
      setSpeechSynthesis(synthesis)
    }
  }

  const stopSpeech = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel()
      setIsPlaying(false)
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
            <Badge className="bg-blue-100 text-blue-800">
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
                <Baby className="h-5 w-5 text-blue-500" />
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

              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-medium text-blue-800 mb-2">Key Takeaways:</h4>
                <ul className="space-y-1">
                  <li className="flex gap-2 text-sm text-blue-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Early antenatal care is crucial for healthy pregnancy</span>
                  </li>
                  <li className="flex gap-2 text-sm text-blue-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Know the danger signs and when to seek help</span>
                  </li>
                  <li className="flex gap-2 text-sm text-blue-700">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>Good nutrition supports healthy development</span>
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
              className="bg-blue-600 hover:bg-blue-700"
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
