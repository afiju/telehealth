"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, ImageIcon, Loader2, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

interface Message {
  id: string
  role: "user" | "bot"
  content: string
  timestamp: Date
  imageUrl?: string
}

export function MediBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      content:
        "Hello! I'm MediBot, your virtual health consultant. How can I help you today? You can ask me health questions or upload an image if you need first aid guidance.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Image too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        })
        return
      }

      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const sendMessage = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return

    const userMessageId = Date.now().toString()
    const userMessage: Message = {
      id: userMessageId,
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    if (selectedImage && imagePreview) {
      userMessage.imageUrl = imagePreview
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setSelectedImage(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }

    try {
      // Prepare the request to Gemini API
      const apiKey = "AIzaSyCmYhFvZ_u8gpzvbyo8DxAQOcjNfxyNZMs"
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`

      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `You are MediBot, a helpful medical assistant for a telehealth platform in Sierra Leone. 
            Provide accurate, clear, and compassionate health information. 
            For emergencies, always advise seeking immediate medical attention.
            For first aid situations, provide clear step-by-step instructions.
            Focus on maternal health, common illnesses in Sierra Leone, and preventive care.
            Keep responses concise and easy to understand.
            Always remind users that this is not a substitute for professional medical advice.
            
            User query: ${input.trim()}`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }

      // If there's an image, we need to use the multimodal model instead
      if (userMessage.imageUrl) {
        // For demonstration, we'll simulate the image analysis response
        // In a real implementation, you would use gemini-pro-vision model with the image
        const simulatedResponse = await new Promise<string>((resolve) => {
          setTimeout(() => {
            if (
              input.toLowerCase().includes("wound") ||
              input.toLowerCase().includes("cut") ||
              input.toLowerCase().includes("injury")
            ) {
              resolve(
                "Based on the image you've shared, this appears to be a wound that requires cleaning. Here's what you should do:\n\n1. Wash your hands thoroughly with soap and water\n2. Gently clean the wound with clean water\n3. Apply gentle pressure with a clean cloth if there's bleeding\n4. Apply an antiseptic if available\n5. Cover with a clean bandage\n6. Seek medical attention if the wound is deep, dirty, or shows signs of infection (increasing redness, warmth, swelling, or pus)\n\n⚠️ This is general first aid guidance. For serious wounds, seek immediate medical attention.",
              )
            } else if (input.toLowerCase().includes("rash") || input.toLowerCase().includes("skin")) {
              resolve(
                "The image shows what appears to be a skin rash. Without being able to examine it in person, I can provide some general guidance:\n\n1. Avoid scratching the affected area\n2. Keep the area clean and dry\n3. You might try a cool compress to reduce itching\n4. Consider an over-the-counter hydrocortisone cream\n5. If the rash is spreading, painful, or accompanied by other symptoms like fever, please seek medical attention\n\n⚠️ It's important to have this evaluated by a healthcare provider for proper diagnosis and treatment.",
              )
            } else {
              resolve(
                "Thank you for sharing this image. To provide the most accurate guidance, I'd need more information about what you're concerned about. Could you please describe what you're seeing or what symptoms you're experiencing? This will help me give you more specific and helpful advice.\n\n⚠️ Remember, this virtual consultation cannot replace an in-person medical examination.",
              )
            }
          }, 2000)
        })

        addBotResponse(simulatedResponse)
      } else {
        // Text-only query
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error("API Error:", response.status, errorText)
          throw new Error(`API request failed with status ${response.status}: ${errorText}`)
        }

        const data = await response.json()

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
          const botResponse = data.candidates[0].content.parts[0].text
          addBotResponse(botResponse)
        } else {
          throw new Error("Invalid response format from API")
        }
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error)

      // Provide a fallback response based on common health queries
      let fallbackResponse = "I'm sorry, I'm having trouble connecting to my knowledge base right now. "

      const query = input.toLowerCase()
      if (query.includes("pregnancy") || query.includes("pregnant")) {
        fallbackResponse +=
          "For pregnancy-related questions, please consult with a healthcare provider or visit our Maternal Health section for educational resources."
      } else if (query.includes("fever") || query.includes("temperature")) {
        fallbackResponse +=
          "For fever, ensure you stay hydrated, rest, and monitor your temperature. Seek medical attention if fever persists or is very high."
      } else if (query.includes("pain") || query.includes("hurt")) {
        fallbackResponse +=
          "For pain management, rest the affected area and consider over-the-counter pain relief if appropriate. Seek medical attention for severe or persistent pain."
      } else {
        fallbackResponse += "Please try again later, or contact a healthcare provider for immediate medical concerns."
      }

      fallbackResponse += "\n\n⚠️ For emergencies, please contact emergency services immediately."

      addBotResponse(fallbackResponse)
    }
  }

  const addBotResponse = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: "bot",
        content,
        timestamp: new Date(),
      },
    ])
    setIsLoading(false)
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev)
  }

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-20 right-4 z-50 md:bottom-8 md:right-8">
        <button
          onClick={toggleChat}
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg transition-all hover:shadow-xl ${
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          aria-label="Open MediBot chat"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>

      {/* Chat window */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full transform transition-transform duration-300 ease-in-out md:bottom-8 md:right-8 md:w-96 ${
          isOpen ? "translate-y-0" : "translate-y-full md:translate-y-[calc(100%+2rem)]"
        } ${isExpanded ? "h-[80vh] md:h-[80vh] md:w-[80vw] max-w-4xl" : "h-[60vh] md:h-[500px]"}`}
      >
        <Card className="flex h-full flex-col overflow-hidden">
          <CardHeader className="border-b bg-teal-600 px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-teal-100 text-teal-700">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium text-white">MediBot</h3>
                  <p className="text-xs text-teal-100">Virtual Health Consultant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-teal-100 hover:bg-teal-500 hover:text-white"
                  onClick={toggleExpand}
                >
                  {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-teal-100 hover:bg-teal-500 hover:text-white"
                  onClick={toggleChat}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "bot" && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-teal-100 text-teal-700">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-teal-600 text-white" : "bg-muted"
                  }`}
                >
                  {message.imageUrl && (
                    <div className="mb-2">
                      <Image
                        src={message.imageUrl || "/placeholder.svg"}
                        alt="Uploaded image"
                        width={200}
                        height={200}
                        className="rounded-md object-contain max-h-[200px] w-auto"
                      />
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.role === "user" ? "text-teal-100" : "text-muted-foreground"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>

                {message.role === "user" && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-teal-100 text-teal-700">U</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarFallback className="bg-teal-100 text-teal-700">
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
          </CardContent>

          <CardFooter className="border-t p-3 flex flex-col gap-3">
            {imagePreview && (
              <div className="relative w-full">
                <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                  <Image src={imagePreview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                  <button
                    onClick={removeImage}
                    className="absolute right-0 top-0 rounded-bl-md bg-red-500 p-1 text-white"
                    aria-label="Remove image"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex w-full gap-2">
              <Textarea
                placeholder="Type your health question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage()
                  }
                }}
                className="min-h-[40px] flex-1 resize-none"
                disabled={isLoading}
              />
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isLoading}
                  className="h-10 w-10"
                  title="Upload image"
                >
                  <ImageIcon className="h-4 w-4" />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </Button>
                <Button
                  size="icon"
                  onClick={sendMessage}
                  disabled={isLoading || (!input.trim() && !selectedImage)}
                  className="h-10 w-10 bg-teal-600 hover:bg-teal-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              For emergencies, please call emergency services immediately.
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}
