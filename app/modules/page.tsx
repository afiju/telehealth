import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, Shield, AlertCircle, BookOpen, MessageSquare, Clock } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function ModulesPage() {
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
          <h1 className="text-lg font-semibold mx-auto">Learning Modules</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <h2 className="text-xl font-bold mb-4">Your Learning Journey</h2>
          <div className="grid gap-4">
            <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-pink-200 p-3 flex-shrink-0">
                    <Heart className="h-6 w-6 text-pink-700" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-pink-900">Understanding Your Body</h3>
                        <p className="text-sm text-pink-700">Learn about reproductive health and puberty</p>
                      </div>
                      <Badge className="bg-pink-200 text-pink-800">30% Complete</Badge>
                    </div>
                    <div className="space-y-1">
                      <Progress value={30} className="h-1" />
                    </div>
                    <Button asChild size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <Link href="/modules/body">Continue Learning</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-purple-200 p-3 flex-shrink-0">
                    <Shield className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-purple-900">Healthy Relationships</h3>
                        <p className="text-sm text-purple-700">Recognize safe and respectful relationships</p>
                      </div>
                      <Badge className="bg-purple-200 text-purple-800">10% Complete</Badge>
                    </div>
                    <div className="space-y-1">
                      <Progress value={10} className="h-1" />
                    </div>
                    <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Link href="/modules/relationships">Continue Learning</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-blue-200 p-3 flex-shrink-0">
                    <AlertCircle className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-blue-900">STI Prevention</h3>
                        <p className="text-sm text-blue-700">Learn about sexually transmitted infections</p>
                      </div>
                      <Badge className="bg-blue-200 text-blue-800">0% Complete</Badge>
                    </div>
                    <div className="space-y-1">
                      <Progress value={0} className="h-1" />
                    </div>
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/modules/sti-prevention">Start Learning</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-amber-200 p-3 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-amber-700" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-amber-900">Pregnancy Prevention</h3>
                        <p className="text-sm text-amber-700">Understanding contraception and family planning</p>
                      </div>
                      <Badge className="bg-amber-200 text-amber-800">0% Complete</Badge>
                    </div>
                    <div className="space-y-1">
                      <Progress value={0} className="h-1" />
                    </div>
                    <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700">
                      <Link href="/modules/pregnancy-prevention">Start Learning</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-green-200 p-3 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-green-700" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-green-900">Communication Skills</h3>
                        <p className="text-sm text-green-700">Learn to say no and set boundaries</p>
                      </div>
                      <Badge className="bg-green-200 text-green-800">0% Complete</Badge>
                    </div>
                    <div className="space-y-1">
                      <Progress value={0} className="h-1" />
                    </div>
                    <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                      <Link href="/modules/communication">Start Learning</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-500" />
                Learning Schedule
              </CardTitle>
              <CardDescription>Recommended learning path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Week 1-2</h3>
                  <ul className="space-y-1">
                    <li className="text-sm flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                      <span>Understanding Your Body</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Week 3-4</h3>
                  <ul className="space-y-1">
                    <li className="text-sm flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <span>Healthy Relationships</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Week 5-6</h3>
                  <ul className="space-y-1">
                    <li className="text-sm flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>STI Prevention</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Week 7-8</h3>
                  <ul className="space-y-1">
                    <li className="text-sm flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                      <span>Pregnancy Prevention</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
