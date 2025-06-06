"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const symptoms = [
  "Headache",
  "Fever",
  "Nausea",
  "Fatigue",
  "Dizziness",
  "Abdominal Pain",
  "Back Pain",
  "Chest Pain",
  "Cough",
  "Shortness of Breath",
  "Sore Throat",
  "Vomiting",
  "Diarrhea",
  "Rash",
  "Swelling",
]

export default function SymptomCheckerPage() {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [symptomDuration, setSymptomDuration] = useState("")
  const [symptomSeverity, setSymptomSeverity] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [results, setResults] = useState<any>(null)

  const filteredSymptoms = symptoms.filter((symptom) => symptom.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSymptomToggle = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const handleNext = () => {
    if (step === 1 && selectedSymptoms.length === 0) {
      toast({
        title: "Please select at least one symptom",
        variant: "destructive",
      })
      return
    }

    if (step === 2 && !symptomDuration) {
      toast({
        title: "Please select symptom duration",
        variant: "destructive",
      })
      return
    }

    if (step === 3 && !symptomSeverity) {
      toast({
        title: "Please select symptom severity",
        variant: "destructive",
      })
      return
    }

    if (step < 4) {
      setStep(step + 1)
    } else {
      // Process results
      setIsLoading(true)

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        setResults({
          possibleConditions: [
            {
              name: "Common Cold",
              probability: "High",
              description: "A viral infection of the upper respiratory tract.",
              recommendations: [
                "Rest and stay hydrated",
                "Take over-the-counter pain relievers if needed",
                "Use a humidifier to ease congestion",
              ],
              urgency: "Low - Self care appropriate",
            },
            {
              name: "Seasonal Allergies",
              probability: "Medium",
              description: "An immune system response to environmental triggers.",
              recommendations: [
                "Avoid known allergens",
                "Consider over-the-counter antihistamines",
                "Use a saline nasal spray to clear sinuses",
              ],
              urgency: "Low - Self care appropriate",
            },
          ],
          shouldSeeDoctor: false,
        })
        setStep(5)
      }, 2000)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="symptom-search">Search Symptoms</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="symptom-search"
                  placeholder="Type to search symptoms..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Select Your Symptoms</Label>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto p-1">
                {filteredSymptoms.map((symptom) => (
                  <div key={symptom} className="flex items-center space-x-2">
                    <Checkbox
                      id={`symptom-${symptom}`}
                      checked={selectedSymptoms.includes(symptom)}
                      onCheckedChange={() => handleSymptomToggle(symptom)}
                    />
                    <label
                      htmlFor={`symptom-${symptom}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {symptom}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {selectedSymptoms.length > 0 && (
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm font-medium mb-2">Selected Symptoms:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptom) => (
                    <div
                      key={`selected-${symptom}`}
                      className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full flex items-center"
                    >
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>How long have you had these symptoms?</Label>
              <RadioGroup value={symptomDuration} onValueChange={setSymptomDuration}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="less-than-day" id="less-than-day" />
                  <Label htmlFor="less-than-day">Less than a day</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-3-days" id="1-3-days" />
                  <Label htmlFor="1-3-days">1-3 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4-7-days" id="4-7-days" />
                  <Label htmlFor="4-7-days">4-7 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-2-weeks" id="1-2-weeks" />
                  <Label htmlFor="1-2-weeks">1-2 weeks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="more-than-2-weeks" id="more-than-2-weeks" />
                  <Label htmlFor="more-than-2-weeks">More than 2 weeks</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>How severe are your symptoms?</Label>
              <RadioGroup value={symptomSeverity} onValueChange={setSymptomSeverity}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mild" id="mild" />
                  <Label htmlFor="mild">Mild - Noticeable but not interfering with daily activities</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="moderate" id="moderate" />
                  <Label htmlFor="moderate">Moderate - Somewhat interfering with daily activities</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="severe" id="severe" />
                  <Label htmlFor="severe">Severe - Significantly interfering with daily activities</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="very-severe" id="very-severe" />
                  <Label htmlFor="very-severe">Very Severe - Cannot perform daily activities</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Information (Optional)</Label>
              <Textarea
                id="additional-info"
                placeholder="Please provide any other details about your symptoms or health conditions..."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows={5}
              />
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> This symptom checker is for informational purposes only and does not replace
                professional medical advice.
              </p>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium">Symptom Assessment Complete</h3>
              <p className="text-sm text-muted-foreground mt-1">Based on the information you provided</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Possible Conditions</h4>
                {results.possibleConditions.map((condition: any, index: number) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-base">{condition.name}</CardTitle>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            condition.probability === "High"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {condition.probability} Match
                        </span>
                      </div>
                      <CardDescription>{condition.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Recommendations:</p>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                          {condition.recommendations.map((rec: string, i: number) => (
                            <li key={i}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-xs text-muted-foreground">Urgency: {condition.urgency}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <h4 className="font-medium text-blue-800 mb-2">Next Steps</h4>
                <p className="text-sm text-blue-700 mb-3">
                  {results.shouldSeeDoctor
                    ? "Based on your symptoms, we recommend consulting with a healthcare provider."
                    : "Your symptoms suggest a condition that may be managed with self-care, but monitor your symptoms closely."}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/health-bot">Talk to Health Bot</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/dashboard">Return to Dashboard</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-16 md:pb-0">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center h-16 px-4">
          <Button variant="ghost" size="sm" onClick={handleBack} disabled={step === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-lg font-semibold mx-auto">Symptom Checker</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>{step < 5 ? "Check Your Symptoms" : "Assessment Results"}</CardTitle>
            {step < 5 && (
              <CardDescription>
                Step {step} of 4:{" "}
                {step === 1
                  ? "Select Symptoms"
                  : step === 2
                    ? "Symptom Duration"
                    : step === 3
                      ? "Symptom Severity"
                      : "Additional Information"}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {step < 5 && (
              <div className="mb-6">
                <Progress value={(step / 4) * 100} className="h-2" />
              </div>
            )}

            {renderStepContent()}
          </CardContent>

          {step < 5 && (
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                Back
              </Button>
              <Button onClick={handleNext} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : step === 4 ? (
                  "Submit"
                ) : (
                  <>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          )}
        </Card>
      </main>

      <MobileNav />
    </div>
  )
}
