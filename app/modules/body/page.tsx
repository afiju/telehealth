"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, Heart, BookOpen } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BodyModulePage() {
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
          <h1 className="text-lg font-semibold mx-auto">Understanding Your Body</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <div className="flex justify-between items-center mb-4">
            <Badge className="bg-pink-100 text-pink-800">
              Lesson {currentLesson} of {totalLessons}
            </Badge>
            <Badge variant="outline">30% Complete</Badge>
          </div>

          <div className="space-y-1 mb-4">
            <Progress value={(currentLesson / totalLessons) * 100} className="h-2" />
          </div>

          {currentLesson === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Introduction to Reproductive Health
                </CardTitle>
                <CardDescription>Understanding your body and how it works</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-48 rounded-md overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Reproductive Health"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p>
                    Welcome to the first lesson on understanding your body. In this module, you'll learn about female
                    reproductive health, puberty, and how your body works.
                  </p>

                  <h3 className="text-lg font-medium">What is Reproductive Health?</h3>
                  <p>
                    Reproductive health refers to the complete physical, mental, and social well-being in all matters
                    related to the reproductive system. It's important to understand your body so you can:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Make informed decisions about your health</li>
                    <li>Recognize when something might be wrong</li>
                    <li>Take care of yourself properly</li>
                    <li>Feel confident and comfortable with your body</li>
                  </ul>

                  <h3 className="text-lg font-medium">Why This Matters</h3>
                  <p>
                    Understanding your body is the first step to taking control of your health. When you know how your
                    body works, you can better protect yourself from unwanted pregnancies, sexually transmitted
                    infections, and make healthier choices.
                  </p>

                  <div className="bg-pink-50 p-4 rounded-md">
                    <h4 className="font-medium text-pink-800 mb-2">Key Takeaways:</h4>
                    <ul className="space-y-1">
                      <li className="flex gap-2 text-sm text-pink-700">
                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                        <span>Your body belongs to you, and you have the right to understand it</span>
                      </li>
                      <li className="flex gap-2 text-sm text-pink-700">
                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                        <span>Knowledge about your body helps you make better health decisions</span>
                      </li>
                      <li className="flex gap-2 text-sm text-pink-700">
                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                        <span>Understanding reproductive health is important for all young women</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Tabs defaultValue="read">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="read">Read</TabsTrigger>
                    <TabsTrigger value="watch">Watch</TabsTrigger>
                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                  </TabsList>
                  <TabsContent value="read" className="space-y-4 pt-4">
                    <p>
                      In the next lessons, we'll explore the female reproductive system, menstruation, puberty, and how
                      to take care of your reproductive health.
                    </p>
                    <p>
                      Remember, learning about your body is nothing to be ashamed of. It's an important part of growing
                      up and taking responsibility for your health.
                    </p>
                  </TabsContent>
                  <TabsContent value="watch" className="pt-4">
                    <div className="bg-gray-100 rounded-md p-8 flex flex-col items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Video content available offline</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Download Video
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="quiz" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">1. Why is understanding your body important?</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-a" name="q1" />
                            <label htmlFor="q1-a" className="text-sm">
                              To make informed decisions about your health
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-b" name="q1" />
                            <label htmlFor="q1-b" className="text-sm">
                              To impress your friends
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-c" name="q1" />
                            <label htmlFor="q1-c" className="text-sm">
                              It's not important
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">2. What is reproductive health?</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q2-a" name="q2" />
                            <label htmlFor="q2-a" className="text-sm">
                              Only about having babies
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q2-b" name="q2" />
                            <label htmlFor="q2-b" className="text-sm">
                              Complete physical, mental, and social well-being related to the reproductive system
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q2-c" name="q2" />
                            <label htmlFor="q2-c" className="text-sm">
                              Only important for married women
                            </label>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-pink-600 hover:bg-pink-700">Check Answers</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}

          {currentLesson === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  The Female Reproductive System
                </CardTitle>
                <CardDescription>Understanding your reproductive organs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-48 rounded-md overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=192&width=384"
                    alt="Female Reproductive System"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p>
                    In this lesson, we'll learn about the female reproductive system - the parts of your body involved
                    in menstruation, pregnancy, and sexual health.
                  </p>

                  <h3 className="text-lg font-medium">External and Internal Organs</h3>
                  <p>
                    The female reproductive system consists of both external and internal organs. Understanding these
                    parts helps you take better care of your health.
                  </p>

                  <h4 className="font-medium">External Parts:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vulva - the external genital area</li>
                    <li>Labia - the "lips" that protect the vaginal opening</li>
                    <li>Clitoris - sensitive tissue with many nerve endings</li>
                    <li>Urethral opening - where urine leaves the body</li>
                    <li>Vaginal opening - entrance to the vagina</li>
                  </ul>

                  <h4 className="font-medium">Internal Parts:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vagina - a muscular canal connecting the external genitals to the uterus</li>
                    <li>Cervix - the lower part of the uterus that connects to the vagina</li>
                    <li>Uterus (womb) - where a baby develops during pregnancy</li>
                    <li>Fallopian tubes - tubes that carry eggs from the ovaries to the uterus</li>
                    <li>Ovaries - produce eggs and hormones like estrogen</li>
                  </ul>

                  <div className="bg-pink-50 p-4 rounded-md">
                    <h4 className="font-medium text-pink-800 mb-2">Key Takeaways:</h4>
                    <ul className="space-y-1">
                      <li className="flex gap-2 text-sm text-pink-700">
                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                        <span>Your reproductive system is a natural, healthy part of your body</span>
                      </li>
                      <li className="flex gap-2 text-sm text-pink-700">
                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                        <span>Understanding these parts helps you recognize health problems</span>
                      </li>
                      <li className="flex gap-2 text-sm text-pink-700">
                        <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
                        <span>Each part has an important function in reproduction and health</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Tabs defaultValue="read">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="read">Read</TabsTrigger>
                    <TabsTrigger value="watch">Watch</TabsTrigger>
                    <TabsTrigger value="quiz">Quiz</TabsTrigger>
                  </TabsList>
                  <TabsContent value="read" className="space-y-4 pt-4">
                    <p>
                      In the next lesson, we'll learn about menstruation (periods) and the monthly cycle that your body
                      goes through.
                    </p>
                    <p>
                      Remember, every woman's body is unique, and it's normal for there to be some differences in how
                      these parts look and function.
                    </p>
                  </TabsContent>
                  <TabsContent value="watch" className="pt-4">
                    <div className="bg-gray-100 rounded-md p-8 flex flex-col items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Video content available offline</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Download Video
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="quiz" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">1. Where does a baby develop during pregnancy?</h4>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-a" name="q1" />
                            <label htmlFor="q1-a" className="text-sm">
                              Ovaries
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-b" name="q1" />
                            <label htmlFor="q1-b" className="text-sm">
                              Uterus (womb)
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input type="radio" id="q1-c" name="q1" />
                            <label htmlFor="q1-c" className="text-sm">
                              Fallopian tubes
                            </label>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-pink-600 hover:bg-pink-700">Check Answers</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}

          {currentLesson > 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Lesson {currentLesson}
                </CardTitle>
                <CardDescription>Continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 rounded-md p-8 flex flex-col items-center justify-center">
                  <BookOpen className="h-12 w-12 text-gray-400 mb-2" />
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
              className="bg-pink-600 hover:bg-pink-700"
            >
              Next Lesson <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
              <CardDescription>Expand your knowledge with these materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-pink-500" />
                    <div>
                      <h4 className="font-medium">Female Body Guide</h4>
                      <p className="text-xs text-muted-foreground">PDF - 1.2 MB</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-pink-500" />
                    <div>
                      <h4 className="font-medium">Menstrual Health</h4>
                      <p className="text-xs text-muted-foreground">PDF - 0.8 MB</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
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
