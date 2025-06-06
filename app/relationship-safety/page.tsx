"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Heart, AlertTriangle, Phone, Users, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const warningSignsData = [
  {
    id: 1,
    title: "Pressure for Sex",
    description: "He pressures you to have sex or makes you feel guilty for saying no",
    redFlags: [
      "Says 'if you love me, you'll do it'",
      "Gets angry when you say no",
      "Threatens to leave you",
      "Says other girls would do it",
      "Makes you feel bad about your boundaries",
    ],
    icon: "🚩",
    severity: "high",
  },
  {
    id: 2,
    title: "Isolation Tactics",
    description: "He tries to separate you from family and friends",
    redFlags: [
      "Doesn't want you talking to friends",
      "Says your family doesn't understand",
      "Gets jealous of your other relationships",
      "Wants all your free time",
      "Criticizes people who care about you",
    ],
    icon: "🔒",
    severity: "high",
  },
  {
    id: 3,
    title: "Age Gap Concerns",
    description: "Much older men targeting young girls",
    redFlags: [
      "He's significantly older than you",
      "He has a job while you're in school",
      "He gives expensive gifts early on",
      "He says you're 'mature for your age'",
      "He doesn't want to meet your parents",
    ],
    icon: "⚠️",
    severity: "high",
  },
  {
    id: 4,
    title: "False Promises",
    description: "Makes promises he likely won't keep",
    redFlags: [
      "Promises to marry you soon",
      "Says he'll take care of you forever",
      "Makes big promises with no action",
      "Changes his story often",
      "Avoids talking about the future seriously",
    ],
    icon: "💔",
    severity: "medium",
  },
  {
    id: 5,
    title: "Disrespects Boundaries",
    description: "Doesn't respect your 'no' in any situation",
    redFlags: [
      "Touches you when you say stop",
      "Goes through your phone",
      "Shows up uninvited",
      "Ignores your wishes",
      "Makes decisions for you",
    ],
    icon: "🛑",
    severity: "high",
  },
]

const protectionStrategies = [
  {
    title: "Know Your Worth",
    description: "You are valuable and deserve respect",
    tips: [
      "You deserve someone who respects your decisions",
      "Your education and future matter more than any relationship",
      "You don't need a boyfriend to be complete",
      "Real love waits and respects boundaries",
      "You have the right to say no at any time",
    ],
    icon: "👑",
  },
  {
    title: "Set Clear Boundaries",
    description: "Decide your limits and stick to them",
    tips: [
      "Decide what you're comfortable with before dating",
      "Communicate your boundaries clearly",
      "Don't compromise your values for anyone",
      "It's okay to change your mind",
      "Trust your instincts if something feels wrong",
    ],
    icon: "🛡️",
  },
  {
    title: "Stay Connected",
    description: "Keep strong relationships with family and friends",
    tips: [
      "Talk to trusted adults about your relationships",
      "Don't isolate yourself from friends and family",
      "Have friends meet anyone you're dating",
      "Keep your own interests and activities",
      "Listen to concerns from people who care about you",
    ],
    icon: "👥",
  },
  {
    title: "Education First",
    description: "Prioritize your education and future goals",
    tips: [
      "Focus on completing your education",
      "Have goals and dreams beyond relationships",
      "Don't let anyone discourage your ambitions",
      "Remember that pregnancy can change your life plans",
      "Invest in yourself and your future",
    ],
    icon: "📚",
  },
]

const contraceptionInfo = [
  {
    method: "Abstinence",
    effectiveness: "100%",
    description: "Not having sexual intercourse",
    pros: ["Completely prevents pregnancy and STDs", "No side effects", "Free"],
    cons: ["Requires commitment from both partners"],
    availability: "Always available",
  },
  {
    method: "Condoms",
    effectiveness: "85-98%",
    description: "Barrier method that prevents sperm from reaching egg",
    pros: ["Protects against STDs", "Available without prescription", "Inexpensive"],
    cons: ["Must be used correctly every time", "Can break or slip"],
    availability: "Available at health centers, pharmacies",
  },
  {
    method: "Birth Control Pills",
    effectiveness: "91-99%",
    description: "Daily hormone pills that prevent ovulation",
    pros: ["Very effective when used correctly", "Can regulate periods"],
    cons: ["Must remember to take daily", "Doesn't protect against STDs", "Requires prescription"],
    availability: "Available at health centers with consultation",
  },
  {
    method: "Injectable Contraceptives",
    effectiveness: "94-99%",
    description: "Hormone injection given every 3 months",
    pros: ["Long-lasting", "Private", "Very effective"],
    cons: ["Requires regular clinic visits", "Doesn't protect against STDs"],
    availability: "Available at health centers",
  },
]

const supportStories = [
  {
    name: "Aminata, 18",
    story:
      "I almost dropped out of school for a boy who promised to marry me. My aunt helped me see he was just using me. Now I'm in university studying to be a teacher.",
    lesson: "Education opened doors I never imagined. I'm so glad I didn't give up my dreams.",
  },
  {
    name: "Fatima, 19",
    story:
      "I got pregnant at 16. The father disappeared when I told him. It was hard, but with family support, I finished school and now I help other girls avoid my mistakes.",
    lesson: "You can overcome challenges, but prevention is always better. Don't trust empty promises.",
  },
  {
    name: "Mariama, 17",
    story:
      "My boyfriend was pressuring me for sex. I talked to my older sister who helped me understand that real love doesn't pressure. I ended that relationship.",
    lesson: "Trust your instincts. If someone truly loves you, they'll respect your boundaries.",
  },
]

const emergencyContacts = [
  {
    name: "Girls' Safety Hotline",
    number: "116-SAFE",
    description: "24/7 support for girls in difficult relationships",
  },
  {
    name: "Teen Pregnancy Prevention",
    number: "117-PREVENT",
    description: "Information and support for contraception",
  },
  {
    name: "Family Planning Clinic",
    number: "118-PLAN",
    description: "Free contraception and counseling",
  },
  {
    name: "Crisis Support",
    number: "119-HELP",
    description: "Immediate help for girls in danger",
  },
]

export default function RelationshipSafetyPage() {
  const [selectedWarning, setSelectedWarning] = useState<number | null>(null)
  const [selectedStrategy, setSelectedStrategy] = useState<number | null>(null)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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
          <h1 className="text-lg font-semibold mx-auto">Relationship Safety</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-40 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0">
          <Image src="/images/telehealth-hero.jpg" alt="Relationship Safety" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Protect Your Future</h2>
            <p className="text-purple-100 text-sm">Stay safe, make informed choices, and protect your dreams</p>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        {/* Important Message */}
        <section>
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Heart className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-purple-800">Your Life, Your Choice</h3>
                  <p className="text-sm text-purple-700">
                    You are young, smart, and have a bright future ahead. Don't let anyone pressure you into decisions
                    that could change your life forever. You deserve respect, love, and the chance to achieve your
                    dreams. This page will help you recognize dangerous situations and protect yourself.
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
                Need Help Right Now?
              </CardTitle>
              <CardDescription className="text-red-700">
                If you're in an unsafe situation or need immediate support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {emergencyContacts.slice(0, 2).map((contact, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-md">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-red-800">{contact.name}</h4>
                        <p className="text-sm text-red-600">{contact.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-300" asChild>
                      <a href={`tel:${contact.number}`}>Call {contact.number}</a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <section>
          <Tabs defaultValue="warning-signs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="warning-signs">Warning Signs</TabsTrigger>
              <TabsTrigger value="protection">Protection</TabsTrigger>
              <TabsTrigger value="contraception">Prevention</TabsTrigger>
              <TabsTrigger value="stories">Stories</TabsTrigger>
            </TabsList>

            <TabsContent value="warning-signs" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Recognize the Warning Signs</h3>
                <p className="text-sm text-muted-foreground">
                  Learn to identify boys and men who might take advantage of you
                </p>
              </div>

              <div className="grid gap-4">
                {warningSignsData.map((warning) => (
                  <Card key={warning.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="text-3xl">{warning.icon}</div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge className={getSeverityColor(warning.severity)}>
                                {warning.severity === "high" ? "High Risk" : "Medium Risk"}
                              </Badge>
                              <h3 className="font-medium mt-2">{warning.title}</h3>
                              <p className="text-sm text-muted-foreground">{warning.description}</p>
                            </div>
                          </div>

                          {selectedWarning === warning.id ? (
                            <div className="mt-3 p-3 bg-red-50 rounded-md">
                              <h4 className="font-medium text-red-800 mb-2">Watch out for these behaviors:</h4>
                              <ul className="space-y-1">
                                {warning.redFlags.map((flag, index) => (
                                  <li key={index} className="flex gap-2 text-sm text-red-700">
                                    <span className="text-red-600">•</span>
                                    <span>{flag}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2"
                                onClick={() => setSelectedWarning(null)}
                              >
                                Show Less
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => setSelectedWarning(warning.id)}>
                              See Warning Signs
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800">Remember</h4>
                      <p className="text-sm text-amber-700">
                        If you see these warning signs, talk to a trusted adult immediately. You don't have to handle
                        this alone. Your safety and future are more important than any relationship.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protection" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Protect Yourself</h3>
                <p className="text-sm text-muted-foreground">Strategies to stay safe and make good decisions</p>
              </div>

              <div className="grid gap-4">
                {protectionStrategies.map((strategy, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="text-3xl">{strategy.icon}</div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-medium">{strategy.title}</h3>
                            <p className="text-sm text-muted-foreground">{strategy.description}</p>
                          </div>

                          {selectedStrategy === index ? (
                            <div className="mt-3 p-3 bg-blue-50 rounded-md">
                              <h4 className="font-medium text-blue-800 mb-2">How to do this:</h4>
                              <ul className="space-y-1">
                                {strategy.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="flex gap-2 text-sm text-blue-700">
                                    <span className="text-blue-600">•</span>
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2"
                                onClick={() => setSelectedStrategy(null)}
                              >
                                Show Less
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => setSelectedStrategy(index)}>
                              Learn More
                            </Button>
                          )}
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
                    Build Your Support Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-md">
                      <h4 className="font-medium text-green-800">Trusted Adults</h4>
                      <p className="text-sm text-green-700">
                        Parents, teachers, aunts, older sisters, or community leaders who care about you
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-md">
                      <h4 className="font-medium text-green-800">Good Friends</h4>
                      <p className="text-sm text-green-700">
                        Friends who support your goals and won't pressure you into bad decisions
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-md">
                      <h4 className="font-medium text-green-800">Professional Support</h4>
                      <p className="text-sm text-green-700">
                        Counselors, health workers, and support groups for young women
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contraception" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Pregnancy Prevention</h3>
                <p className="text-sm text-muted-foreground">
                  If you choose to be sexually active, protect yourself from unplanned pregnancy
                </p>
              </div>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <Lock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">Important: This is confidential</h4>
                      <p className="text-sm text-blue-700">
                        You have the right to private healthcare and contraception information. Health workers cannot
                        share your information without your permission.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {contraceptionInfo.map((method, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{method.method}</h3>
                          <Badge className="bg-green-100 text-green-800">{method.effectiveness} Effective</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{method.description}</p>

                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="p-3 bg-green-50 rounded-md">
                            <h4 className="font-medium text-green-800 text-sm mb-1">Advantages:</h4>
                            <ul className="space-y-1">
                              {method.pros.map((pro, i) => (
                                <li key={i} className="text-xs text-green-700 flex gap-1">
                                  <span>•</span>
                                  <span>{pro}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-3 bg-amber-50 rounded-md">
                            <h4 className="font-medium text-amber-800 text-sm mb-1">Considerations:</h4>
                            <ul className="space-y-1">
                              {method.cons.map((con, i) => (
                                <li key={i} className="text-xs text-amber-700 flex gap-1">
                                  <span>•</span>
                                  <span>{con}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="p-2 bg-blue-50 rounded-md">
                          <p className="text-xs text-blue-700">
                            <strong>Where to get it:</strong> {method.availability}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Getting Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm">
                      If you need contraception or have questions about preventing pregnancy, you can get confidential
                      help at:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="tel:117-PREVENT">
                          <Phone className="h-4 w-4" />
                          <span>Prevention Hotline</span>
                        </a>
                      </Button>
                      <Button variant="outline" className="gap-2" asChild>
                        <a href="tel:118-PLAN">
                          <Phone className="h-4 w-4" />
                          <span>Family Planning</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stories" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Real Stories from Young Women</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from the experiences of other girls (names changed for privacy)
                </p>
              </div>

              <div className="space-y-4">
                {supportStories.map((story, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-purple-100 text-purple-700">
                              {story.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{story.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              Survivor
                            </Badge>
                          </div>
                        </div>

                        <blockquote className="text-sm italic text-muted-foreground border-l-4 border-purple-200 pl-4">
                          "{story.story}"
                        </blockquote>

                        <div className="bg-purple-50 p-3 rounded-md">
                          <p className="text-sm font-medium text-purple-800">Her advice:</p>
                          <p className="text-sm text-purple-700">"{story.lesson}"</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Share Your Story</CardTitle>
                  <CardDescription>Help other girls by sharing your experience (anonymously)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm">
                      If you have a story that could help other young women, you can share it confidentially. Your
                      experience could save someone else from making the same mistakes.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Share Your Story</Button>
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
                  <a href="tel:116-SAFE">
                    <Phone className="h-6 w-6" />
                    <span className="text-sm">Safety Hotline</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/health-bot">
                    <Heart className="h-6 w-6" />
                    <span className="text-sm">Talk to AI Assistant</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <a href="tel:118-PLAN">
                    <Shield className="h-6 w-6" />
                    <span className="text-sm">Family Planning</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/young-mothers-support">
                    <Users className="h-6 w-6" />
                    <span className="text-sm">Support Groups</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Reminder */}
        <section>
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-green-800">Remember: You Are in Control</h3>
                <p className="text-sm text-green-700">
                  Your body, your choice, your future. No one has the right to pressure you into anything. You deserve
                  respect, love, and the chance to achieve all your dreams. Don't let anyone take that away from you.
                </p>
                <div className="flex justify-center mt-3">
                  <Badge className="bg-green-200 text-green-800">You are strong. You are valuable. You matter.</Badge>
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
