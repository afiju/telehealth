"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MessageSquare, Send, Lock, Search } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AskPage() {
  const [question, setQuestion] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const commonQuestions = [
    {
      question: "What is the right age to start having sex?",
      answer:
        "There's no 'right' age that applies to everyone. What matters is that you feel ready emotionally and physically, you're in a safe and consensual relationship, and you understand the responsibilities and risks involved.",
      category: "General",
    },
    {
      question: "How can I say no to pressure from my boyfriend?",
      answer:
        "You have the right to say no at any time. Practice saying phrases like 'I'm not ready,' 'I don't want to,' or 'I'm not comfortable with that.' A respectful partner will accept your decision without argument.",
      category: "Relationships",
    },
    {
      question: "What are the signs of pregnancy?",
      answer:
        "Early signs include missed periods, nausea, breast tenderness, and fatigue. If you think you might be pregnant, it's important to take a pregnancy test and speak with a healthcare provider.",
      category: "Health",
    },
    {
      question: "How can I protect myself from STIs?",
      answer:
        "The best protection is abstinence. If you choose to be sexually active, using condoms correctly and consistently, getting tested regularly, and having open conversations with partners about sexual health are important.",
      category: "Health",
    },
    {
      question: "Is it normal to have questions about my body?",
      answer:
        "Yes, it's completely normal to have questions about your body, especially during puberty and adolescence. Don't be afraid to ask trusted adults, healthcare providers, or use reliable educational resources.",
      category: "General",
    },
  ]

  const filteredQuestions = commonQuestions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
          <h1 className="text-lg font-semibold mx-auto">Ask Questions</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="rounded-full bg-blue-200 p-3 flex-shrink-0">
                  <Lock className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-2">Your Privacy is Protected</h3>
                  <p className="text-sm text-blue-700">
                    All questions are anonymous and confidential. We're here to provide you with accurate, helpful
                    information about sexual health and relationships.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Tabs defaultValue="ask" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ask">Ask a Question</TabsTrigger>
            <TabsTrigger value="browse">Browse Answers</TabsTrigger>
          </TabsList>

          <TabsContent value="ask" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  Ask Your Question
                </CardTitle>
                <CardDescription>
                  Get confidential answers to your questions about sexual health, relationships, and your body
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="question" className="text-sm font-medium">
                    What would you like to know?
                  </label>
                  <Textarea
                    id="question"
                    placeholder="Type your question here... Remember, this is completely anonymous and confidential."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category (optional)</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                      General Health
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                      Relationships
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                      Body Changes
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                      Pregnancy
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                      STIs
                    </Badge>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled={!question.trim()}>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Question
                </Button>

                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-medium text-blue-800 mb-2">How it works:</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Your question is completely anonymous</li>
                    <li>• Health educators will provide accurate information</li>
                    <li>• You'll receive an answer within 24 hours</li>
                    <li>• For urgent health concerns, contact a healthcare provider</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="browse" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-500" />
                  Browse Common Questions
                </CardTitle>
                <CardDescription>Find answers to frequently asked questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <Card key={index} className="border-l-4 border-l-purple-500">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <h4 className="font-medium text-purple-900">{item.question}</h4>
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700">{item.answer}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredQuestions.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No questions found matching your search.</p>
                    <Button variant="ghost" onClick={() => setSearchQuery("")} className="mt-2">
                      Clear search
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Need Immediate Help?</CardTitle>
              <CardDescription>If you're in an emergency or need urgent support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="tel:999">
                    <span className="mr-2">🚨</span>
                    Emergency Services - 999
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="tel:+23276123456">
                    <span className="mr-2">📞</span>
                    Youth Helpline - +232 76 123 456
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/resources">
                    <span className="mr-2">🏥</span>
                    Find Local Health Services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
