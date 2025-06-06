"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OnboardingPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    district: "",
    chiefdom: "",
    educationLevel: "",
    preferredLanguage: "english",
    isPregnant: false,
    hasChildren: false,
    numberOfChildren: "",
    healthWorkerAccess: "",
    acceptTerms: false,
  })

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step === 1 && !formData.name) {
      toast({
        title: "Please enter your name",
        variant: "destructive",
      })
      return
    }

    if (step === 2 && !formData.district) {
      toast({
        title: "Please select your district",
        variant: "destructive",
      })
      return
    }

    if (step === 3 && !formData.acceptTerms) {
      toast({
        title: "Please accept the terms to continue",
        variant: "destructive",
      })
      return
    }

    if (step < 3) {
      setStep(step + 1)
    } else {
      // Complete onboarding
      toast({
        title: "Welcome to HealthWise!",
        description: "Your learning journey begins now",
      })
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-blue-100">
      <header className="p-4">
        <Button variant="ghost" size="sm" onClick={handleBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    i <= step ? "bg-green-600 text-white" : "bg-green-200 text-green-700"
                  }`}
                >
                  {i < step ? <Check className="h-4 w-4" /> : i}
                </div>
              ))}
            </div>
            <div className="mt-2 h-1 w-full bg-green-200">
              <div
                className="h-full bg-green-600 transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          <Card className="w-full">
            <CardContent className="p-6">
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-center">Personal Information</h2>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) => updateFormData("age", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Language</Label>
                      <RadioGroup
                        defaultValue={formData.preferredLanguage}
                        onValueChange={(value) => updateFormData("preferredLanguage", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="english" id="english" />
                          <Label htmlFor="english">English</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="krio" id="krio" />
                          <Label htmlFor="krio">Krio</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mende" id="mende" />
                          <Label htmlFor="mende">Mende</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="temne" id="temne" />
                          <Label htmlFor="temne">Temne</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-center">Location & Background</h2>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Select value={formData.district} onValueChange={(value) => updateFormData("district", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your district" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="western-area">Western Area</SelectItem>
                          <SelectItem value="bo">Bo</SelectItem>
                          <SelectItem value="bonthe">Bonthe</SelectItem>
                          <SelectItem value="moyamba">Moyamba</SelectItem>
                          <SelectItem value="pujehun">Pujehun</SelectItem>
                          <SelectItem value="bombali">Bombali</SelectItem>
                          <SelectItem value="falaba">Falaba</SelectItem>
                          <SelectItem value="koinadugu">Koinadugu</SelectItem>
                          <SelectItem value="port-loko">Port Loko</SelectItem>
                          <SelectItem value="tonkolili">Tonkolili</SelectItem>
                          <SelectItem value="kailahun">Kailahun</SelectItem>
                          <SelectItem value="kenema">Kenema</SelectItem>
                          <SelectItem value="kono">Kono</SelectItem>
                          <SelectItem value="karene">Karene</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="educationLevel">Education Level</Label>
                      <Select
                        value={formData.educationLevel}
                        onValueChange={(value) => updateFormData("educationLevel", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No formal education</SelectItem>
                          <SelectItem value="primary">Primary school</SelectItem>
                          <SelectItem value="junior-secondary">Junior Secondary School (JSS)</SelectItem>
                          <SelectItem value="senior-secondary">Senior Secondary School (SSS)</SelectItem>
                          <SelectItem value="tertiary">Tertiary education</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Maternal Status</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="pregnant"
                            checked={formData.isPregnant}
                            onCheckedChange={(checked) => updateFormData("isPregnant", checked)}
                          />
                          <label htmlFor="pregnant" className="text-sm font-medium leading-none">
                            I am currently pregnant
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hasChildren"
                            checked={formData.hasChildren}
                            onCheckedChange={(checked) => updateFormData("hasChildren", checked)}
                          />
                          <label htmlFor="hasChildren" className="text-sm font-medium leading-none">
                            I have children
                          </label>
                        </div>
                      </div>
                    </div>

                    {formData.hasChildren && (
                      <div className="space-y-2">
                        <Label htmlFor="numberOfChildren">Number of Children</Label>
                        <Input
                          id="numberOfChildren"
                          type="number"
                          placeholder="How many children do you have?"
                          value={formData.numberOfChildren}
                          onChange={(e) => updateFormData("numberOfChildren", e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-center">Healthcare Access</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Do you have access to a Community Health Worker?</Label>
                      <RadioGroup
                        value={formData.healthWorkerAccess}
                        onValueChange={(value) => updateFormData("healthWorkerAccess", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="chw-yes" />
                          <Label htmlFor="chw-yes">Yes, I know my local CHW</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="chw-no" />
                          <Label htmlFor="chw-no">No, I don't know any CHW</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="chw-unsure" />
                          <Label htmlFor="chw-unsure">I'm not sure</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="bg-green-50 p-4 rounded-md text-sm">
                      <p className="mb-2 font-medium">By using HealthWise Sierra Leone, you agree to:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Use this platform for educational purposes</li>
                        <li>Understand this does not replace medical care</li>
                        <li>Seek professional help for medical emergencies</li>
                        <li>Share anonymous data to improve the platform</li>
                      </ul>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => updateFormData("acceptTerms", checked)}
                      />
                      <label htmlFor="terms" className="text-sm font-medium leading-none">
                        I understand and agree to these terms
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleNext}>
                  {step === 3 ? "Start Learning" : "Continue"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
