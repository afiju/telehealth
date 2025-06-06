"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RelationshipsModulePage() {
  const [currentLesson, setCurrentLesson] = useState(1)
  const totalLessons = 5

  const nextLesson = () => {
    if (currentLesson < totalLessons) {
      setCurrentLesson(currentLesson + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/modules">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Modules
            </Link>
          </Button>
          <h1 className="text-lg font-semibold mx-auto">Healthy Relationships</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <div className="flex justify-between items-center mb-4">
            <Badge className="bg-purple-100 text-purple-800">
              Lesson {currentLesson} of {totalLessons}
            </Badge>
            <Badge variant="outline">10% Complete</Badge>
          </div>

          <div className="space-y-1 mb-4">
            <Progress value={(currentLesson / totalLessons) * 100} className="h-2" />
          </div>

          {currentLesson === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  What Makes a Healthy Relationship?
                </CardTitle>
                <CardDescription>Understanding respect, trust, and communication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-48 rounded-md overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Healthy Relationships"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p>
                    A healthy relationship is built on mutual respect, trust, and good communication. Whether it's with
                    friends, family, or romantic partners, understanding what makes relationships healthy helps you
                    build better connections and protect yourself.
                  </p>

                  <h3 className="text-lg font-medium">Signs of a Healthy Relationship</h3>
                  <div className="grid gap-3">
                    <div className="flex gap-3 p-3 bg-green-50 rounded-md">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Respect</h4>
                        <p className="text-sm text-green-700">
                          Both people value each other's opinions, feelings, and boundaries
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-green-50 rounded-md">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Trust</h4>
                        <p className="text-sm text-green-700">
                          You can rely on each other and feel secure in the relationship
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-green-50 rounded-md">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Good Communication</h4>
                        <p className="text-sm text-green-700">
                          You can talk openly about feelings, problems, and needs
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-green-50 rounded-md">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Support</h4>
                        <p className="text-sm text-green-700">You encourage each other's goals and dreams</p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-green-50 rounded-md">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Equality</h4>
                        <p className="text-sm text-green-700">Decisions are made together, and both voices matter</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium">Warning Signs to Watch For</h3>
                  <div className="grid gap-3">
                    <div className="flex gap-3 p-3 bg-red-50 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-800">Controlling Behavior</h4>
                        <p className="text-sm text-red-700">
                          Trying to control what you wear, who you see, or where you go
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-red-50 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-800">Pressure</h4>
                        <p className="text-sm text-red-700">Pressuring you to do things you're not comfortable with</p>
                      </div>
                    </div>

                    <div className="flex gap-3 p-3 bg-red-50 rounded-md">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-800">Disrespect</h4>
                        <p className="text-sm text-red-700">
                          Name-calling, put-downs, or making you feel bad about yourself
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <h4 className="font-medium text-purple-800 mb-2">Remember:</h4>
                    <ul className="space-y-1">
                      <li className="flex gap-2 text-sm text-purple-700">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span>You deserve to be treated with respect in all relationships</span>
                      </li>
                      <li className="flex gap-2 text-sm text-purple-700">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span>It's okay to say no to anything that makes you uncomfortable</span>
                      </li>
                      <li className="flex gap-2 text-sm text-purple-700">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span>Trust your feelings - if something doesn't feel right, it probably isn't</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Tabs defaultValue="read">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="read">Read</TabsTrigger>
                    <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                  </TabsList>
                  <TabsContent value="read" className="space-y-4 pt-4">
                    <p>
                      In the next lessons, we'll learn about setting boundaries, recognizing unhealthy relationships,
                      and how to get help if you need it.
                    </p>
                    <p>
                      Remember, healthy relationships take work from both people, and you should never have to change
                      who you are to make someone else happy.
                    </p>
                  </TabsContent>
                  <TabsContent value="scenarios" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-md">
                        <h4 className="font-medium text-blue-800 mb-2">Scenario 1:</h4>
                        <p className="text-sm text-blue-700 mb-2">
                          Your boyfriend gets angry when you spend time with your female friends and says you should
                          only spend time with him.
                        </p>
                        <p className="text-xs text-blue-600">
                          <strong>This is a warning sign:</strong> Healthy relationships allow you to maintain
                          friendships.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-md">
                        <h4 className="font-medium text-green-800 mb-2">Scenario 2:</h4>
                        <p className="text-sm text-green-700 mb-2">
                          Your partner listens when you say you're not ready for physical intimacy and doesn't pressure
                          you.
                        </p>
                        <p className="text-xs text-green-600">
                          <strong>This is healthy:</strong> Respecting boundaries is a sign of a good relationship.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="quiz" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">1. Which of these is a sign of a healthy relationship?</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-a" name="q1" />
                            <label htmlFor="q1-a" className="text-sm">
                              Your partner decides what you should wear
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-b" name="q1" />
                            <label htmlFor="q1-b" className="text-sm">
                              You can talk openly about your feelings
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-c" name="q1" />
                            <label htmlFor="q1-c" className="text-sm">
                              Your partner gets jealous when you talk to others
                            </label>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Check Answers</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}

          {currentLesson > 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  Lesson {currentLesson}
                </CardTitle>
                <CardDescription>Continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 rounded-md p-8 flex flex-col items-center justify-center">
                  <Shield className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Lesson content is being prepared</p>
                  <p className="text-xs text-gray-400 mt-1">Check back soon for updates</p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={prevLesson} disabled={currentLesson === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous Lesson
            </Button>
            <Button
              onClick={nextLesson}
              disabled={currentLesson === totalLessons}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Next Lesson <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
