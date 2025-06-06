"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Heart, Phone, Lock, AlertTriangle, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const preventionMethods = [
  {
    id: 1,
    title: "Abstinence",
    description: "The most effective way to prevent HIV and STDs",
    effectiveness: "100%",
    details: [
      "Choosing not to have sexual contact",
      "Completely prevents sexual transmission",
      "Your choice and your right",
      "No judgment - it's a healthy decision",
    ],
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Condom Use",
    description: "Barrier protection during sexual activity",
    effectiveness: "85-98%",
    details: [
      "Use a new condom every time",
      "Check expiration date",
      "Store in cool, dry place",
      "Available free at health centers",
    ],
    icon: "🔒",
  },
  {
    id: 3,
    title: "Know Your Status",
    description: "Regular testing for you and your partner",
    effectiveness: "Prevention tool",
    details: [
      "Get tested regularly",
      "Know your partner's status",
      "Early detection saves lives",
      "Testing is confidential",
    ],
    icon: "🩺",
  },
  {
    id: 4,
    title: "Limit Partners",
    description: "Reduce risk by limiting sexual partners",
    effectiveness: "High",
    details: [
      "Fewer partners = lower risk",
      "Mutual monogamy with tested partner",
      "Communicate openly about sexual health",
      "Make informed decisions together",
    ],
    icon: "💑",
  },
]

const commonSTDs = [
  {
    name: "HIV",
    description: "Human Immunodeficiency Virus",
    symptoms: ["Flu-like symptoms initially", "Fatigue", "Weight loss", "Frequent infections"],
    prevention: "Use condoms, know status, avoid sharing needles",
    treatment: "Antiretroviral therapy (ART) - life-saving medication",
    urgency: "high",
  },
  {
    name: "Chlamydia",
    description: "Common bacterial infection",
    symptoms: ["Often no symptoms", "Painful urination", "Unusual discharge", "Pelvic pain"],
    prevention: "Use condoms, regular testing",
    treatment: "Curable with antibiotics",
    urgency: "medium",
  },
  {
    name: "Gonorrhea",
    description: "Bacterial infection",
    symptoms: ["Painful urination", "Discharge", "Pelvic pain", "Sometimes no symptoms"],
    prevention: "Use condoms, regular testing",
    treatment: "Curable with antibiotics",
    urgency: "medium",
  },
  {
    name: "Syphilis",
    description: "Bacterial infection with stages",
    symptoms: ["Painless sores", "Rash", "Fever", "Can affect organs if untreated"],
    prevention: "Use condoms, regular testing",
    treatment: "Curable with antibiotics",
    urgency: "high",
  },
  {
    name: "Herpes",
    description: "Viral infection (HSV-1 or HSV-2)",
    symptoms: ["Painful blisters", "Flu-like symptoms", "Recurring outbreaks"],
    prevention: "Use condoms, avoid contact during outbreaks",
    treatment: "Manageable with antiviral medication",
    urgency: "medium",
  },
]

const supportResources = [
  {
    title: "Free Testing Centers",
    description: "Confidential HIV and STD testing",
    contact: "Call 116-TEST",
    hours: "Monday-Friday 8AM-5PM",
    icon: "🏥",
  },
  {
    title: "Youth Counseling",
    description: "Confidential support for young people",
    contact: "Call 117-YOUTH",
    hours: "24/7 Support Line",
    icon: "💬",
  },
  {
    title: "Treatment Support",
    description: "Help accessing HIV/STD treatment",
    contact: "Call 118-TREAT",
    hours: "Monday-Friday 9AM-4PM",
    icon: "💊",
  },
  {
    title: "Peer Support Groups",
    description: "Connect with others in similar situations",
    contact: "Call 119-PEER",
    hours: "Weekly meetings",
    icon: "👥",
  },
]

const mythsFacts = [
  {
    myth: "You can get HIV from mosquito bites",
    fact: "HIV cannot be transmitted through mosquito bites. HIV is only transmitted through specific body fluids.",
  },
  {
    myth: "You can tell if someone has HIV by looking at them",
    fact: "People with HIV can look completely healthy. The only way to know is through testing.",
  },
  {
    myth: "HIV is a death sentence",
    fact: "With proper treatment, people with HIV can live long, healthy lives.",
  },
  {
    myth: "You can get STDs from toilet seats",
    fact: "STDs are not transmitted through toilet seats, swimming pools, or casual contact.",
  },
  {
    myth: "Birth control pills protect against STDs",
    fact: "Birth control pills only prevent pregnancy, not STDs. Use condoms for STD prevention.",
  },
]

export default function HIVSTDSupportPage() {
  const [selectedPrevention, setSelectedPrevention] = useState<number | null>(null)
  const [selectedSTD, setSelectedSTD] = useState<string | null>(null)

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
          <h1 className="text-lg font-semibold mx-auto">HIV & STD Support</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-32 bg-gradient-to-r from-red-500 to-pink-600">
        <div className="absolute inset-0">
          <Image src="/images/telehealth-hero.jpg" alt="HIV and STD Support" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">HIV & STD Prevention & Support</h2>
            <p className="text-red-100 text-sm">Knowledge, prevention, and care for young women</p>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        {/* Privacy Notice */}
        <section>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Lock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue-800">Your Privacy is Protected</h3>
                  <p className="text-sm text-blue-700">
                    All information here is confidential. You have the right to private healthcare, testing, and
                    counseling. No one will share your information without your permission.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Support */}
        <section>
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-red-800">
                <AlertTriangle className="h-5 w-5" />
                Need Immediate Help?
              </CardTitle>
              <CardDescription className="text-red-700">
                If you think you've been exposed to HIV or need urgent support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-md">
                  <h4 className="font-medium text-red-800 mb-2">Post-Exposure Prophylaxis (PEP)</h4>
                  <p className="text-sm text-red-700 mb-2">
                    If you think you've been exposed to HIV in the last 72 hours, PEP can help prevent infection.
                  </p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                    <a href="tel:999">Call Emergency: 999</a>
                  </Button>
                </div>
                <div className="bg-white p-3 rounded-md">
                  <h4 className="font-medium text-red-800 mb-2">Crisis Support</h4>
                  <p className="text-sm text-red-700 mb-2">24/7 confidential support and counseling</p>
                  <Button size="sm" variant="outline" className="border-red-300 text-red-700" asChild>
                    <a href="tel:116-HELP">Call Support: 116-HELP</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <section>
          <Tabs defaultValue="prevention" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="prevention">Prevention</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="testing">Testing</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="prevention" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Prevention is Power</h3>
                <p className="text-sm text-muted-foreground">Knowledge and preparation are your best protection</p>
              </div>

              <div className="grid gap-4">
                {preventionMethods.map((method) => (
                  <Card key={method.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="text-3xl">{method.icon}</div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge className="mb-2 bg-green-100 text-green-800">
                                {method.effectiveness} Effective
                              </Badge>
                              <h3 className="font-medium">{method.title}</h3>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </div>

                          {selectedPrevention === method.id ? (
                            <div className="mt-3 p-3 bg-green-50 rounded-md">
                              <h4 className="font-medium text-green-800 mb-2">Key Points:</h4>
                              <ul className="space-y-1">
                                {method.details.map((detail, index) => (
                                  <li key={index} className="flex gap-2 text-sm text-green-700">
                                    <span className="text-green-600">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2"
                                onClick={() => setSelectedPrevention(null)}
                              >
                                Show Less
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => setSelectedPrevention(method.id)}>
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

            <TabsContent value="education" className="space-y-4">
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold">Understanding HIV & STDs</h3>
                  <p className="text-sm text-muted-foreground">
                    Accurate information helps you make informed decisions
                  </p>
                </div>

                {/* Common STDs */}
                <div className="space-y-4">
                  <h4 className="font-medium">Common STDs & HIV</h4>
                  {commonSTDs.map((std) => (
                    <Card key={std.name}>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge className={getUrgencyColor(std.urgency)}>
                                {std.urgency === "high" ? "High Priority" : "Treatable"}
                              </Badge>
                              <h4 className="font-medium mt-2">{std.name}</h4>
                              <p className="text-sm text-muted-foreground">{std.description}</p>
                            </div>
                          </div>

                          {selectedSTD === std.name ? (
                            <div className="space-y-3">
                              <div className="p-3 bg-blue-50 rounded-md">
                                <h5 className="font-medium text-blue-800 mb-2">Symptoms:</h5>
                                <ul className="space-y-1">
                                  {std.symptoms.map((symptom, index) => (
                                    <li key={index} className="flex gap-2 text-sm text-blue-700">
                                      <span className="text-blue-600">•</span>
                                      <span>{symptom}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="p-3 bg-green-50 rounded-md">
                                <h5 className="font-medium text-green-800 mb-2">Prevention:</h5>
                                <p className="text-sm text-green-700">{std.prevention}</p>
                              </div>

                              <div className="p-3 bg-purple-50 rounded-md">
                                <h5 className="font-medium text-purple-800 mb-2">Treatment:</h5>
                                <p className="text-sm text-purple-700">{std.treatment}</p>
                              </div>

                              <Button variant="ghost" size="sm" onClick={() => setSelectedSTD(null)}>
                                Show Less
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => setSelectedSTD(std.name)}>
                              Learn More
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Myths vs Facts */}
                <div className="space-y-4">
                  <h4 className="font-medium">Myths vs Facts</h4>
                  {mythsFacts.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="p-3 bg-red-50 rounded-md">
                            <h5 className="font-medium text-red-800 mb-1">❌ Myth:</h5>
                            <p className="text-sm text-red-700">{item.myth}</p>
                          </div>
                          <div className="p-3 bg-green-50 rounded-md">
                            <h5 className="font-medium text-green-800 mb-1">✅ Fact:</h5>
                            <p className="text-sm text-green-700">{item.fact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="testing" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Know Your Status</h3>
                <p className="text-sm text-muted-foreground">Regular testing is an important part of staying healthy</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Why Get Tested?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-md">
                      <h4 className="font-medium text-blue-800">Early Detection</h4>
                      <p className="text-sm text-blue-700">
                        Early treatment leads to better health outcomes and prevents transmission
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-md">
                      <h4 className="font-medium text-blue-800">Peace of Mind</h4>
                      <p className="text-sm text-blue-700">Knowing your status reduces anxiety and helps you plan</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-md">
                      <h4 className="font-medium text-blue-800">Protect Others</h4>
                      <p className="text-sm text-blue-700">
                        Knowing your status helps protect your partners and community
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Testing Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 rounded-md">
                        <h4 className="font-medium text-green-800">HIV Testing</h4>
                        <ul className="text-sm text-green-700 mt-2 space-y-1">
                          <li>• Rapid tests: Results in 20 minutes</li>
                          <li>• Blood tests: Most accurate</li>
                          <li>• Free at health centers</li>
                          <li>• Confidential and private</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-md">
                        <h4 className="font-medium text-purple-800">STD Testing</h4>
                        <ul className="text-sm text-purple-700 mt-2 space-y-1">
                          <li>• Urine or blood samples</li>
                          <li>• Physical examination</li>
                          <li>• Results in 1-7 days</li>
                          <li>• Treatment available if positive</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-md">
                      <h4 className="font-medium text-amber-800">When to Get Tested</h4>
                      <ul className="text-sm text-amber-700 mt-2 space-y-1">
                        <li>• Before becoming sexually active</li>
                        <li>• Before having sex with a new partner</li>
                        <li>• If you think you've been exposed</li>
                        <li>• At least once a year if sexually active</li>
                        <li>• If you have symptoms</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">You Are Not Alone</h3>
                <p className="text-sm text-muted-foreground">Support and resources are available to help you</p>
              </div>

              <div className="grid gap-4">
                {supportResources.map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="text-3xl">{resource.icon}</div>
                        <div className="flex-1 space-y-2">
                          <h3 className="font-medium">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-blue-500" />
                              <span className="text-sm font-medium">{resource.contact}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{resource.hours}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-500" />
                    Living with HIV/STDs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-md">
                      <h4 className="font-medium text-green-800">You Can Live a Full Life</h4>
                      <p className="text-sm text-green-700">
                        With proper treatment and care, people with HIV and STDs can live healthy, normal lives
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-md">
                      <h4 className="font-medium text-blue-800">Treatment Works</h4>
                      <p className="text-sm text-blue-700">
                        Modern treatments are very effective. Many STDs are completely curable
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-md">
                      <h4 className="font-medium text-purple-800">Support is Available</h4>
                      <p className="text-sm text-purple-700">
                        Counseling, support groups, and medical care are available to help you
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Peer Stories</CardTitle>
                  <CardDescription>Real experiences from young women (names changed for privacy)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-pink-50 rounded-md">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-pink-100 text-pink-700">A</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Aminata, 19</h4>
                          <Badge variant="outline" className="text-xs">
                            HIV Positive
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-pink-700 italic">
                        "Getting tested was scary, but knowing my status helped me get treatment early. I'm healthy now
                        and living my dreams. Don't let fear stop you from getting tested."
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-md">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-blue-100 text-blue-700">F</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Fatima, 17</h4>
                          <Badge variant="outline" className="text-xs">
                            STD Survivor
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-blue-700 italic">
                        "I was treated for chlamydia and learned so much about protecting myself. Now I help educate
                        other girls in my community. Knowledge is power!"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Quick Actions */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Get Help Now</CardTitle>
              <CardDescription>Immediate support and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
                  <a href="tel:116-TEST">
                    <Phone className="h-6 w-6" />
                    <span className="text-sm">Free Testing</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/health-bot">
                    <Heart className="h-6 w-6" />
                    <span className="text-sm">Talk to AI Assistant</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <a href="tel:117-YOUTH">
                    <Users className="h-6 w-6" />
                    <span className="text-sm">Youth Counseling</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/emergency-aid">
                    <AlertTriangle className="h-6 w-6" />
                    <span className="text-sm">Emergency Help</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Disclaimer */}
        <section>
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-medium text-amber-800">Important Information</h3>
                  <p className="text-sm text-amber-700">
                    This information is for educational purposes only. Always consult with a healthcare provider for
                    personal medical advice, testing, and treatment. If you think you've been exposed to HIV or an STD,
                    seek medical attention immediately.
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
