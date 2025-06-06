"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertTriangle, Clock, Phone, Thermometer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const stomachPainCauses = [
  {
    id: 1,
    title: "Menstrual Cramps",
    description: "Pain during monthly periods - very common in young girls",
    symptoms: ["Lower belly pain", "Back pain", "Nausea", "Headache"],
    remedies: [
      "Apply heat pad to lower belly",
      "Take warm baths",
      "Gentle exercise like walking",
      "Drink plenty of water",
      "Rest and sleep well",
    ],
    urgency: "low",
    icon: "🌸",
  },
  {
    id: 2,
    title: "Food Poisoning",
    description: "Stomach upset from bad food or contaminated water",
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Fever", "Stomach cramps"],
    remedies: [
      "Drink lots of clean water",
      "Eat bland foods like rice or toast",
      "Avoid dairy and spicy foods",
      "Rest and let your body recover",
      "Use oral rehydration salts (ORS)",
    ],
    urgency: "medium",
    icon: "🤢",
  },
  {
    id: 3,
    title: "Stress & Anxiety",
    description: "Emotional stress can cause real stomach pain",
    symptoms: ["Stomach knots", "Loss of appetite", "Nausea", "Butterflies feeling"],
    remedies: [
      "Practice deep breathing",
      "Talk to someone you trust",
      "Do relaxing activities",
      "Get enough sleep",
      "Exercise regularly",
    ],
    urgency: "low",
    icon: "😰",
  },
  {
    id: 4,
    title: "Appendicitis",
    description: "Serious condition requiring immediate medical attention",
    symptoms: ["Sharp pain starting near belly button", "Pain moves to right side", "Fever", "Vomiting"],
    remedies: [
      "DO NOT eat or drink anything",
      "Call emergency services immediately",
      "Go to hospital right away",
      "Do not take pain medication",
      "Lie still and avoid movement",
    ],
    urgency: "high",
    icon: "🚨",
  },
  {
    id: 5,
    title: "Indigestion",
    description: "Upset stomach from eating too much or too fast",
    symptoms: ["Bloating", "Gas", "Heartburn", "Feeling too full"],
    remedies: [
      "Eat smaller meals more often",
      "Chew food slowly",
      "Avoid spicy or fatty foods",
      "Drink ginger tea",
      "Walk after eating",
    ],
    urgency: "low",
    icon: "🍽️",
  },
  {
    id: 6,
    title: "Urinary Tract Infection (UTI)",
    description: "Infection in the urinary system, common in girls",
    symptoms: ["Burning when urinating", "Frequent urination", "Lower belly pain", "Cloudy urine"],
    remedies: [
      "Drink lots of water",
      "Urinate frequently",
      "Wipe front to back",
      "Avoid holding urine",
      "See a healthcare provider",
    ],
    urgency: "medium",
    icon: "💧",
  },
]

const emergencySymptoms = [
  "Severe pain that gets worse quickly",
  "High fever (over 38.5°C/101°F)",
  "Vomiting blood or green liquid",
  "Cannot keep fluids down for 24 hours",
  "Signs of dehydration (dizziness, dry mouth)",
  "Pain that moves to the right side",
  "Difficulty walking due to pain",
]

export default function StomachPainSupportPage() {
  const { toast } = useToast()
  const [selectedCause, setSelectedCause] = useState<number | null>(null)
  const [painLevel, setPainLevel] = useState("")
  const [painDuration, setPainDuration] = useState("")
  const [additionalSymptoms, setAdditionalSymptoms] = useState("")
  const [showAssessment, setShowAssessment] = useState(false)

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleQuickAssessment = () => {
    if (!painLevel || !painDuration) {
      toast({
        title: "Please complete the assessment",
        description: "Fill in all required fields",
        variant: "destructive",
      })
      return
    }

    let recommendation = ""
    if (painLevel === "severe" || painDuration === "getting-worse") {
      recommendation =
        "You should seek immediate medical attention. Call emergency services or go to the nearest hospital."
    } else if (painLevel === "moderate" || painDuration === "several-days") {
      recommendation = "You should see a healthcare provider within 24 hours. Monitor your symptoms closely."
    } else {
      recommendation = "Try home remedies and rest. If symptoms persist or worsen, consult a healthcare provider."
    }

    toast({
      title: "Assessment Complete",
      description: recommendation,
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-16 md:pb-0">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-lg font-semibold mx-auto">Stomach Pain Help</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-32 bg-gradient-to-r from-blue-500 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/telehealth-hero.jpg"
            alt="Stomach Pain Support"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Stomach Pain Support</h2>
            <p className="text-blue-100 text-sm">Understanding and managing stomach pain in young girls</p>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        {/* Emergency Warning */}
        <section>
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5" />
                When to Seek Emergency Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-red-700 font-medium">Call emergency services immediately if you have:</p>
                <ul className="space-y-1">
                  {emergencySymptoms.map((symptom, index) => (
                    <li key={index} className="flex gap-2 text-sm text-red-700">
                      <span className="text-red-600">•</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                    <a href="tel:999">Call 999</a>
                  </Button>
                  <Button size="sm" variant="outline" className="border-red-300 text-red-700" asChild>
                    <a href="tel:117">Call Ambulance</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Assessment */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-blue-500" />
                Quick Pain Assessment
              </CardTitle>
              <CardDescription>Help us understand your stomach pain better</CardDescription>
            </CardHeader>
            <CardContent>
              {!showAssessment ? (
                <Button onClick={() => setShowAssessment(true)} className="w-full">
                  Start Assessment
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label>How would you rate your pain?</Label>
                    <RadioGroup value={painLevel} onValueChange={setPainLevel}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mild" id="mild" />
                        <Label htmlFor="mild">Mild - Uncomfortable but manageable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate" />
                        <Label htmlFor="moderate">Moderate - Difficult to ignore</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="severe" id="severe" />
                        <Label htmlFor="severe">Severe - Very painful, hard to function</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>How long have you had this pain?</Label>
                    <RadioGroup value={painDuration} onValueChange={setPainDuration}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="few-hours" id="few-hours" />
                        <Label htmlFor="few-hours">A few hours</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-day" id="one-day" />
                        <Label htmlFor="one-day">About a day</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="several-days" id="several-days" />
                        <Label htmlFor="several-days">Several days</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="getting-worse" id="getting-worse" />
                        <Label htmlFor="getting-worse">Getting worse quickly</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Other symptoms you're experiencing:</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Describe any other symptoms like nausea, fever, vomiting, etc."
                      value={additionalSymptoms}
                      onChange={(e) => setAdditionalSymptoms(e.target.value)}
                    />
                  </div>

                  <Button onClick={handleQuickAssessment} className="w-full">
                    Get Recommendation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Common Causes */}
        <section>
          <Tabs defaultValue="causes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="causes">Common Causes</TabsTrigger>
              <TabsTrigger value="remedies">Home Remedies</TabsTrigger>
            </TabsList>

            <TabsContent value="causes" className="space-y-4">
              <div className="grid gap-4">
                {stomachPainCauses.map((cause) => (
                  <Card key={cause.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="text-3xl">{cause.icon}</div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge className={getUrgencyColor(cause.urgency)}>
                                {cause.urgency === "high"
                                  ? "Emergency"
                                  : cause.urgency === "medium"
                                    ? "See Doctor"
                                    : "Self Care"}
                              </Badge>
                              <h3 className="font-medium mt-2">{cause.title}</h3>
                              <p className="text-sm text-muted-foreground">{cause.description}</p>
                            </div>
                          </div>

                          {selectedCause === cause.id ? (
                            <div className="mt-3 space-y-3">
                              <div className="p-3 bg-blue-50 rounded-md">
                                <h4 className="font-medium text-blue-800 mb-2">Common Symptoms:</h4>
                                <ul className="space-y-1">
                                  {cause.symptoms.map((symptom, index) => (
                                    <li key={index} className="flex gap-2 text-sm text-blue-700">
                                      <span className="text-blue-600">•</span>
                                      <span>{symptom}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="p-3 bg-green-50 rounded-md">
                                <h4 className="font-medium text-green-800 mb-2">What You Can Do:</h4>
                                <ul className="space-y-1">
                                  {cause.remedies.map((remedy, index) => (
                                    <li key={index} className="flex gap-2 text-sm text-green-700">
                                      <span className="text-green-600">•</span>
                                      <span>{remedy}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <Button variant="ghost" size="sm" onClick={() => setSelectedCause(null)}>
                                Show Less
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => setSelectedCause(cause.id)}>
                              Learn More
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="remedies" className="space-y-4">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">🌿 Natural Remedies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-md">
                        <h4 className="font-medium text-green-800">Ginger Tea</h4>
                        <p className="text-sm text-green-700">Helps with nausea and stomach upset</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-md">
                        <h4 className="font-medium text-green-800">Warm Compress</h4>
                        <p className="text-sm text-green-700">Apply to belly for cramp relief</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-md">
                        <h4 className="font-medium text-green-800">Peppermint Tea</h4>
                        <p className="text-sm text-green-700">Soothes digestive issues</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">🍽️ Diet Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-md">
                        <h4 className="font-medium text-blue-800">BRAT Diet</h4>
                        <p className="text-sm text-blue-700">Bananas, Rice, Applesauce, Toast for upset stomach</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-md">
                        <h4 className="font-medium text-blue-800">Stay Hydrated</h4>
                        <p className="text-sm text-blue-700">Drink plenty of clean water and ORS</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-md">
                        <h4 className="font-medium text-blue-800">Avoid Triggers</h4>
                        <p className="text-sm text-blue-700">Skip spicy, fatty, or dairy foods when sick</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">🧘‍♀️ Stress Relief</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-50 rounded-md">
                        <h4 className="font-medium text-purple-800">Deep Breathing</h4>
                        <p className="text-sm text-purple-700">Breathe slowly to calm your stomach</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-md">
                        <h4 className="font-medium text-purple-800">Gentle Exercise</h4>
                        <p className="text-sm text-purple-700">Light walking can help digestion</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-md">
                        <h4 className="font-medium text-purple-800">Rest</h4>
                        <p className="text-sm text-purple-700">Get enough sleep to help your body heal</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* When to See a Doctor */}
        <section>
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <Clock className="h-5 w-5" />
                When to See a Healthcare Provider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-amber-700 font-medium">You should see a doctor if:</p>
                <ul className="space-y-1">
                  <li className="flex gap-2 text-sm text-amber-700">
                    <span className="text-amber-600">•</span>
                    <span>Pain lasts more than 2-3 days</span>
                  </li>
                  <li className="flex gap-2 text-sm text-amber-700">
                    <span className="text-amber-600">•</span>
                    <span>You have a fever with stomach pain</span>
                  </li>
                  <li className="flex gap-2 text-sm text-amber-700">
                    <span className="text-amber-600">•</span>
                    <span>You can't keep food or water down</span>
                  </li>
                  <li className="flex gap-2 text-sm text-amber-700">
                    <span className="text-amber-600">•</span>
                    <span>Pain is getting worse instead of better</span>
                  </li>
                  <li className="flex gap-2 text-sm text-amber-700">
                    <span className="text-amber-600">•</span>
                    <span>You're worried about your symptoms</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Get More Help</CardTitle>
              <CardDescription>Additional support and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/health-bot">
                    <Phone className="h-6 w-6" />
                    <span className="text-sm">Talk to AI Assistant</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/symptom-checker">
                    <Thermometer className="h-6 w-6" />
                    <span className="text-sm">Symptom Checker</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/emergency-aid">
                    <AlertTriangle className="h-6 w-6" />
                    <span className="text-sm">Emergency Guide</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <a href="tel:117">
                    <Phone className="h-6 w-6" />
                    <span className="text-sm">Call for Help</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <MobileNav />
    </div>
  )
}
