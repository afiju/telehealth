"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertTriangle, Phone, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const emergencyGuides = [
  {
    id: "bleeding",
    title: "Severe Bleeding",
    category: "Critical",
    urgency: "high",
    image: "/images/telehealth-hero.jpg",
    steps: [
      "Apply direct pressure to the wound using a clean cloth or bandage.",
      "If possible, elevate the injured area above the level of the heart.",
      "Do not remove the cloth if it becomes soaked with blood; add another cloth on top.",
      "If bleeding doesn't stop or is severe, seek immediate medical attention.",
      "For severe bleeding, apply pressure to the nearest pressure point.",
    ],
  },
  {
    id: "burns",
    title: "Burns",
    category: "Injury",
    urgency: "medium",
    image: "/images/telehealth-hero.jpg",
    steps: [
      "Remove the person from the source of the burn.",
      "Cool the burn with cool (not cold) running water for 10-15 minutes.",
      "Do not apply ice directly to the burn.",
      "Cover the burn with a clean, non-stick bandage or cloth.",
      "Do not apply ointments, butter, or other home remedies to serious burns.",
      "Seek medical attention for severe burns.",
    ],
  },
  {
    id: "choking",
    title: "Choking",
    category: "Critical",
    urgency: "high",
    image: "/images/telehealth-hero.jpg",
    steps: [
      "If the person can cough or speak, encourage them to keep coughing.",
      "If they cannot breathe, perform the Heimlich maneuver.",
      "Stand behind the person and wrap your arms around their waist.",
      "Make a fist and place it above the navel, below the ribcage.",
      "Grasp your fist with your other hand and thrust upward and inward.",
      "Repeat until the object is expelled or the person becomes unconscious.",
    ],
  },
  {
    id: "pregnancy-emergency",
    title: "Pregnancy Emergency",
    category: "Maternal",
    urgency: "high",
    image: "/images/telehealth-hero.jpg",
    steps: [
      "Call emergency services immediately.",
      "If experiencing severe bleeding, lie down and elevate legs.",
      "For severe abdominal pain, find a comfortable position.",
      "If water breaks, note the time and color of fluid.",
      "Stay calm and keep track of contractions if in labor.",
      "Do not eat or drink anything until medical help arrives.",
    ],
  },
  {
    id: "fever",
    title: "High Fever",
    category: "General",
    urgency: "medium",
    image: "/images/telehealth-hero.jpg",
    steps: [
      "Take temperature to confirm fever (over 38°C/100.4°F).",
      "Remove excess clothing and blankets.",
      "Apply cool, damp cloths to forehead and wrists.",
      "Drink plenty of fluids to prevent dehydration.",
      "Take fever-reducing medication as directed.",
      "Seek medical attention if fever exceeds 39°C/102°F or persists.",
    ],
  },
  {
    id: "allergic-reaction",
    title: "Allergic Reaction",
    category: "Critical",
    urgency: "high",
    image: "/images/telehealth-hero.jpg",
    steps: [
      "Remove or avoid the allergen if known.",
      "If the person has an epinephrine auto-injector, help them use it.",
      "Call emergency services immediately for severe reactions.",
      "Help the person sit up if having trouble breathing.",
      "Loosen tight clothing around the neck and waist.",
      "Monitor breathing and be prepared to perform CPR if needed.",
    ],
  },
]

const emergencyContacts = [
  { name: "National Emergency", number: "999", type: "emergency" },
  { name: "Ambulance Service", number: "117", type: "medical" },
  { name: "Police", number: "119", type: "police" },
  { name: "Fire Service", number: "118", type: "fire" },
]

export default function EmergencyAidPage() {
  const [selectedGuide, setSelectedGuide] = useState<(typeof emergencyGuides)[0] | null>(null)

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Critical":
        return "🚨"
      case "Maternal":
        return "🤱"
      case "Injury":
        return "🩹"
      case "General":
        return "🏥"
      default:
        return "❗"
    }
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
          <h1 className="text-lg font-semibold mx-auto">Emergency Aid Guide</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-32 bg-gradient-to-r from-red-600 to-red-700">
        <div className="absolute inset-0">
          <Image
            src="/images/telehealth-hero.jpg"
            alt="Emergency Medical Care"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur rounded-full p-3">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Emergency First Aid</h2>
              <p className="text-red-100 text-sm">Quick access to life-saving information</p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        {/* Emergency Contacts */}
        <section>
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Phone className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
              <CardDescription className="text-red-700">Call immediately in case of emergency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {emergencyContacts.map((contact, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-3 flex flex-col items-center gap-1 border-red-300 hover:bg-red-100"
                    asChild
                  >
                    <a href={`tel:${contact.number}`}>
                      <span className="font-semibold text-red-800">{contact.number}</span>
                      <span className="text-xs text-red-700">{contact.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Guides */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">First Aid Guides</h2>
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              Quick Access
            </Badge>
          </div>

          <div className="grid gap-4">
            {emergencyGuides.map((guide) => (
              <Dialog key={guide.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={guide.image || "/placeholder.svg"}
                            alt={guide.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg">{getCategoryIcon(guide.category)}</span>
                                <Badge className={getUrgencyColor(guide.urgency)}>
                                  {guide.urgency === "high"
                                    ? "Critical"
                                    : guide.urgency === "medium"
                                      ? "Important"
                                      : "General"}
                                </Badge>
                              </div>
                              <h3 className="font-medium">{guide.title}</h3>
                              <p className="text-sm text-muted-foreground">{guide.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <span className="text-xl">{getCategoryIcon(guide.category)}</span>
                      {guide.title}
                    </DialogTitle>
                    <DialogDescription>
                      Follow these steps carefully. Call emergency services if needed.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="relative h-32 rounded-md overflow-hidden">
                      <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium">Steps to follow:</h4>
                      <ol className="space-y-2">
                        {guide.steps.map((step, index) => (
                          <li key={index} className="flex gap-3 text-sm">
                            <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center text-xs font-medium">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    {guide.urgency === "high" && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-3">
                        <p className="text-sm text-red-800 font-medium">
                          ⚠️ This is a medical emergency. Call 999 immediately if the situation is severe.
                        </p>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Important Notice */}
        <section>
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-medium text-amber-800">Important Disclaimer</h3>
                  <p className="text-sm text-amber-700">
                    This guide provides basic first aid information only. It does not replace professional medical
                    training or emergency services. Always call emergency services for serious injuries or medical
                    emergencies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <MobileNav />
    </div>
  )
}
