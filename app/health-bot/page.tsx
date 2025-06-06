"use client"

import { useState, useRef, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Bot, Loader2, Mic, Send, User } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const quickQuestions = [
  "I'm feeling nauseous, what should I do?",
  "When should I schedule my next prenatal visit?",
  "What foods should I avoid during pregnancy?",
  "I have a headache, is this normal?",
  "How can I manage morning sickness?",
  "What are signs of labor?",
]

export default function HealthBotPage() {
  const { toast } = useToast()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI health assistant. I'm here to help answer your health questions and provide guidance. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(content),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("nausea") || input.includes("nauseous")) {
      return "Nausea during pregnancy is very common, especially in the first trimester. Here are some tips: 1) Eat small, frequent meals 2) Try ginger tea or ginger candies 3) Avoid strong smells 4) Stay hydrated. If nausea is severe or you can't keep food down, please consult with a healthcare provider."
    }

    if (input.includes("headache")) {
      return "Headaches during pregnancy can be caused by hormonal changes, stress, or dehydration. Try: 1) Rest in a quiet, dark room 2) Apply a cold compress 3) Stay hydrated 4) Practice relaxation techniques. If headaches are severe, frequent, or accompanied by vision changes, contact your healthcare provider immediately."
    }

    if (input.includes("prenatal") || input.includes("visit")) {
      return "Prenatal visits are typically scheduled: 1) Every 4 weeks until 28 weeks 2) Every 2 weeks from 28-36 weeks 3) Weekly from 36 weeks until delivery. Your healthcare provider will give you a specific schedule based on your individual needs. Don't miss these important checkups!"
    }

    if (input.includes("food") || input.includes("eat")) {
      return "During pregnancy, avoid: 1) Raw or undercooked meat, eggs, and seafood 2) High-mercury fish 3) Unpasteurized dairy products 4) Excessive caffeine 5) Alcohol. Focus on eating a balanced diet with plenty of fruits, vegetables, whole grains, and lean proteins."
    }

    if (input.includes("morning sickness")) {
      return "Morning sickness affects many pregnant women. Try: 1) Eat crackers before getting out of bed 2) Eat small, frequent meals 3) Avoid spicy or fatty foods 4) Try vitamin B6 supplements (consult your doctor first) 5) Get plenty of rest. If symptoms are severe, talk to your healthcare provider."
    }

    if (input.includes("labor") || input.includes("birth")) {
      return "Signs of labor include: 1) Regular contractions that get stronger and closer together 2) Water breaking 3) Bloody show 4) Lower back pain 5) Pressure in pelvis. If you experience these signs, contact your healthcare provider or go to the hospital. Remember, every labor is different!"
    }

    return "Thank you for your question. While I can provide general health information, it's important to consult with a qualified healthcare provider for personalized medical advice. Would you like me to help you schedule a consultation with one of our doctors?"
  }

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      toast({
        title: "Voice input not supported",
        description: "Your browser doesn't support voice input",
        variant: "destructive",
      })
      return
    }

    const recognition = new (window as any).webkitSpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = "en-US"

    setIsListening(true)

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInputMessage(transcript)
      setIsListening(false)
    }

    recognition.onerror = () => {
      setIsListening(false)
      toast({
        title: "Voice input error",
        description: "Could not capture voice input",
        variant: "destructive",
      })
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
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
          <h1 className="text-lg font-semibold mx-auto">Health Assistant</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-32 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="absolute inset-0">
          <Image src="/images/telehealth-hero.jpg" alt="AI Health Assistant" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur rounded-full p-3">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AI Health Assistant</h2>
              <p className="text-blue-100 text-sm">Get instant health guidance 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 flex flex-col">
        {/* Quick Questions */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Questions</h3>
          <div className="grid grid-cols-1 gap-2">
            {quickQuestions.slice(0, 3).map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto p-3 whitespace-normal"
                onClick={() => sendMessage(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <Card className="flex-1 flex flex-col">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Chat with Health Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" ? "bg-teal-600 text-white" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user" ? "text-teal-100" : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>

                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback className="bg-teal-100 text-teal-700">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-blue-100 text-blue-700">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type your health question..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage(inputMessage)}
                    disabled={isLoading}
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleVoiceInput}
                  disabled={isLoading || isListening}
                  className={isListening ? "bg-red-100 border-red-300" : ""}
                >
                  <Mic className={`h-4 w-4 ${isListening ? "text-red-600" : ""}`} />
                </Button>
                <Button
                  onClick={() => sendMessage(inputMessage)}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
          <p className="text-xs text-amber-800">
            <strong>Important:</strong> This AI assistant provides general health information only and does not replace
            professional medical advice. For urgent medical concerns, contact your healthcare provider immediately.
          </p>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
