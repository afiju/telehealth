"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Phone, MessageCircle, Users, BookOpen, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const supportResources = [
  {
    id: 1,
    title: "Understanding Your Body Changes",
    description: "Learn about the physical and emotional changes during teenage pregnancy",
    category: "Education",
    icon: "📚",
    content: [
      "Your body is going through many changes - this is normal",
      "Weight gain, breast changes, and mood swings are expected",
      "Morning sickness usually improves after the first trimester",
      "It's important to eat healthy foods for you and your baby",
    ],
  },
  {
    id: 2,
    title: "Emotional Support & Mental Health",
    description: "Coping with feelings and finding emotional support during pregnancy",
    category: "Mental Health",
    icon: "💝",
    content: [
      "It's normal to feel scared, confused, or overwhelmed",
      "Talk to trusted adults like family, teachers, or counselors",
      "Join support groups with other young mothers",
      "Practice relaxation techniques like deep breathing",
    ],
  },
  {
    id: 3,
    title: "Continuing Your Education",
    description: "How to balance pregnancy, motherhood, and your studies",
    category: "Education",
    icon: "🎓",
    content: [
      "You have the right to continue your education",
      "Talk to your school about support programs",
      "Consider flexible learning options",
      "Plan for childcare while studying",
    ],
  },
  {
    id: 4,
    title: "Nutrition for Young Mothers",
    description: "Special nutritional needs for teenage pregnancy",
    category: "Health",
    icon: "🥗",
    content: [
      "You need extra nutrients because you're still growing too",
      "Take prenatal vitamins with folic acid and iron",
      "Eat plenty of fruits, vegetables, and whole grains",
      "Avoid alcohol, smoking, and drugs completely",
    ],
  },
]

const emergencyContacts = [
  {
    name: "Young Mothers Helpline",
    number: "116-MAMA",
    description: "24/7 support for young pregnant women",
    type: "support",
  },
  {
    name: "Teen Pregnancy Counseling",
    number: "117-TEEN",
    description: "Free counseling and guidance",
    type: "counseling",
  },
  {
    name: "Educational Support Line",
    number: "118-LEARN",
    description: "Help with continuing education",
    type: "education",
  },
]

const peerStories = [
  {
    id: 1,
    name: "Aminata, 17",
    story:
      "I was scared when I found out I was pregnant at 16. But with support from my family and the health center, I'm now a proud mother and still in school.",
    tip: "Don't be afraid to ask for help. There are people who care about you.",
  },
  {
    id: 2,
    name: "Fatima, 18",
    story:
      "The hardest part was telling my parents. But they supported me, and now I'm studying to become a nurse while raising my beautiful daughter.",
    tip: "Your dreams don't have to end. You can still achieve your goals.",
  },
  {
    id: 3,
    name: "Mariama, 19",
    story:
      "I thought my life was over when I got pregnant at 17. Now I see that becoming a mother made me stronger and more determined.",
    tip: "Take care of your health and your baby's health. Attend all your prenatal appointments.",
  },
]

export default function YoungMothersSupportPage() {
  const [selectedResource, setSelectedResource] = useState<number | null>(null)

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
          <h1 className="text-lg font-semibold mx-auto">Young Mothers Support</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-40 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0">
          <Image
            src="/images/telehealth-hero.jpg"
            alt="Support for Young Mothers"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">You Are Not Alone</h2>
            <p className="text-pink-100">Support and guidance for young mothers in Sierra Leone</p>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        {/* Important Message */}
        <section>
          <Card className="border-pink-200 bg-pink-50">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Heart className="h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-pink-800">A Message for You</h3>
                  <p className="text-sm text-pink-700">
                    Being pregnant as a young woman can feel overwhelming, but you are stronger than you know. This is a
                    safe space where you can find support, information, and connect with others who understand what
                    you're going through. Remember: you deserve care, respect, and support.
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
                If you're in crisis or need immediate support, call these numbers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {emergencyContacts.map((contact, index) => (
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

        {/* Support Resources */}
        <section>
          <Tabs defaultValue="resources" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="stories">Peer Stories</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="resources" className="space-y-4">
              <div className="grid gap-4">
                {supportResources.map((resource) => (
                  <Card key={resource.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="text-3xl">{resource.icon}</div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge className="mb-2" variant="secondary">
                                {resource.category}
                              </Badge>
                              <h3 className="font-medium">{resource.title}</h3>
                              <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </div>
                          </div>

                          {selectedResource === resource.id ? (
                            <div className="mt-3 p-3 bg-purple-50 rounded-md">
                              <ul className="space-y-2">
                                {resource.content.map((item, index) => (
                                  <li key={index} className="flex gap-2 text-sm">
                                    <span className="text-purple-600">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mt-2"
                                onClick={() => setSelectedResource(null)}
                              >
                                Show Less
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm" onClick={() => setSelectedResource(resource.id)}>
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

            <TabsContent value="stories" className="space-y-4">
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold">Stories from Young Mothers</h3>
                  <p className="text-sm text-muted-foreground">
                    Real experiences from young women who have been through similar journeys
                  </p>
                </div>

                {peerStories.map((story) => (
                  <Card key={story.id}>
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
                              Young Mother
                            </Badge>
                          </div>
                        </div>

                        <blockquote className="text-sm italic text-muted-foreground border-l-4 border-purple-200 pl-4">
                          "{story.story}"
                        </blockquote>

                        <div className="bg-purple-50 p-3 rounded-md">
                          <p className="text-sm font-medium text-purple-800">Her advice:</p>
                          <p className="text-sm text-purple-700">"{story.tip}"</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      Young Mothers Support Group
                    </CardTitle>
                    <CardDescription>Connect with other young mothers in your area</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-md">
                        <h4 className="font-medium text-blue-800 mb-2">Weekly Meetings</h4>
                        <p className="text-sm text-blue-700 mb-3">
                          Every Saturday at 2:00 PM at the Community Health Center
                        </p>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Join Group
                        </Button>
                      </div>

                      <div className="bg-green-50 p-4 rounded-md">
                        <h4 className="font-medium text-green-800 mb-2">Online Chat Support</h4>
                        <p className="text-sm text-green-700 mb-3">
                          24/7 chat with peer counselors and other young mothers
                        </p>
                        <Button size="sm" variant="outline" className="border-green-300 text-green-700">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Start Chat
                        </Button>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-md">
                        <h4 className="font-medium text-purple-800 mb-2">Educational Workshops</h4>
                        <p className="text-sm text-purple-700 mb-3">
                          Free workshops on parenting, health, and continuing education
                        </p>
                        <Button size="sm" variant="outline" className="border-purple-300 text-purple-700">
                          <BookOpen className="h-4 w-4 mr-2" />
                          View Schedule
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      Your Rights & Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-md">
                        <h4 className="font-medium text-green-800">Right to Education</h4>
                        <p className="text-sm text-green-700">
                          You have the right to continue your education during and after pregnancy
                        </p>
                      </div>

                      <div className="bg-green-50 p-3 rounded-md">
                        <h4 className="font-medium text-green-800">Right to Healthcare</h4>
                        <p className="text-sm text-green-700">
                          You deserve quality healthcare throughout your pregnancy
                        </p>
                      </div>

                      <div className="bg-green-50 p-3 rounded-md">
                        <h4 className="font-medium text-green-800">Protection from Discrimination</h4>
                        <p className="text-sm text-green-700">
                          You should not face discrimination because of your pregnancy
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Quick Actions */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Get immediate help and support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/health-bot">
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-sm">Talk to AI Assistant</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/symptom-checker">
                    <Heart className="h-6 w-6" />
                    <span className="text-sm">Check Symptoms</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/health-feed">
                    <BookOpen className="h-6 w-6" />
                    <span className="text-sm">Health Education</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/emergency-aid">
                    <AlertTriangle className="h-6 w-6" />
                    <span className="text-sm">Emergency Guide</span>
                  </Link>
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
