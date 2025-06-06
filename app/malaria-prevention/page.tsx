import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Bug, Moon, Thermometer, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function MalariaPreventionPage() {
  const preventionMethods = [
    {
      title: "Sleep Under Treated Nets",
      description: "Use insecticide-treated bed nets every night",
      icon: Moon,
      tips: [
        "Ensure the net covers the entire bed",
        "Tuck the net under the mattress",
        "Check for holes and repair them",
        "Replace nets every 2-3 years",
      ],
      color: "blue",
    },
    {
      title: "Remove Standing Water",
      description: "Eliminate mosquito breeding sites around your home",
      icon: Bug,
      tips: [
        "Empty containers that collect water",
        "Clean gutters regularly",
        "Cover water storage containers",
        "Fill in puddles and ditches",
      ],
      color: "green",
    },
    {
      title: "Use Repellents",
      description: "Apply mosquito repellents on exposed skin",
      icon: Shield,
      tips: [
        "Use repellents containing DEET",
        "Apply before going outside",
        "Reapply as directed",
        "Use especially during evening hours",
      ],
      color: "purple",
    },
  ]

  const symptoms = [
    { symptom: "High fever", severity: "high" },
    { symptom: "Chills and sweating", severity: "high" },
    { symptom: "Headache", severity: "medium" },
    { symptom: "Body aches", severity: "medium" },
    { symptom: "Nausea and vomiting", severity: "medium" },
    { symptom: "Fatigue", severity: "medium" },
    { symptom: "Loss of appetite", severity: "low" },
  ]

  const specialGroups = [
    {
      group: "Pregnant Women",
      risks: [
        "Higher risk of severe malaria",
        "Risk of anemia",
        "Risk of low birth weight babies",
        "Risk of pregnancy complications",
      ],
      prevention: [
        "Sleep under treated nets",
        "Take preventive medication (IPTp)",
        "Attend regular antenatal visits",
        "Seek immediate care for fever",
      ],
      color: "pink",
    },
    {
      group: "Children Under 5",
      risks: [
        "Most vulnerable to severe malaria",
        "Risk of cerebral malaria",
        "Risk of severe anemia",
        "Higher mortality risk",
      ],
      prevention: [
        "Sleep under treated nets",
        "Prompt treatment of fever",
        "Complete vaccination schedule",
        "Good nutrition to boost immunity",
      ],
      color: "orange",
    },
  ]

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
          <h1 className="text-lg font-semibold mx-auto">Malaria Prevention</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-red-900 mb-2">Protect Yourself from Malaria</h2>
                <p className="text-red-700 mb-4">
                  Malaria is preventable and treatable. Learn how to protect yourself and your family.
                </p>
                <div className="bg-red-200 p-3 rounded-md">
                  <p className="text-sm text-red-800 font-medium">
                    🦟 Malaria is transmitted by infected mosquitoes that bite between dusk and dawn
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Prevention Methods</h2>
            <Badge variant="outline">3 Key Methods</Badge>
          </div>

          <div className="grid gap-4">
            {preventionMethods.map((method, index) => {
              const IconComponent = method.icon
              const colorClasses = {
                blue: "bg-blue-50 border-blue-200 text-blue-700",
                green: "bg-green-50 border-green-200 text-green-700",
                purple: "bg-purple-50 border-purple-200 text-purple-700",
              }

              return (
                <Card key={index} className={`border-l-4 ${colorClasses[method.color as keyof typeof colorClasses]}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-white">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">How to do it:</h4>
                      <ul className="space-y-1">
                        {method.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-red-500" />
                Recognize Malaria Symptoms
              </CardTitle>
              <CardDescription>Know the signs and seek treatment immediately</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-md">
                  <h3 className="font-medium text-red-800 mb-2">⚠️ Seek immediate medical care if you have:</h3>
                  <div className="grid gap-2">
                    {symptoms.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.symptom}</span>
                        <Badge
                          variant={
                            item.severity === "high"
                              ? "destructive"
                              : item.severity === "medium"
                                ? "default"
                                : "secondary"
                          }
                          className="text-xs"
                        >
                          {item.severity === "high" ? "Urgent" : item.severity === "medium" ? "Important" : "Monitor"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-md">
                  <h4 className="font-medium text-amber-800 mb-2">Remember:</h4>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li>• Malaria symptoms can appear 7-30 days after being bitten</li>
                    <li>• Early treatment prevents severe complications</li>
                    <li>• Don't wait - seek care immediately for fever</li>
                    <li>• Complete the full course of treatment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Special Protection for Vulnerable Groups</h2>
          </div>

          <div className="grid gap-4">
            {specialGroups.map((group, index) => {
              const colorClasses = {
                pink: "bg-pink-50 border-pink-200",
                orange: "bg-orange-50 border-orange-200",
              }

              return (
                <Card key={index} className={`border-l-4 ${colorClasses[group.color as keyof typeof colorClasses]}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{group.group}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-red-800">Higher Risks:</h4>
                      <ul className="space-y-1">
                        {group.risks.map((risk, riskIndex) => (
                          <li key={riskIndex} className="text-sm flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-green-800">Prevention Steps:</h4>
                      <ul className="space-y-1">
                        {group.prevention.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-sm flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Treatment Information</CardTitle>
              <CardDescription>What to expect when seeking malaria treatment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="p-3 bg-blue-50 rounded-md">
                    <h4 className="font-medium text-blue-800 mb-1">Rapid Diagnostic Tests (RDTs)</h4>
                    <p className="text-sm text-blue-700">
                      Healthcare workers use quick blood tests to confirm malaria. Results are available in 15-20
                      minutes.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-800 mb-1">Artemisinin-based Combination Therapy (ACT)</h4>
                    <p className="text-sm text-green-700">
                      The recommended treatment for uncomplicated malaria. Take all tablets as prescribed, even if you
                      feel better.
                    </p>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-md">
                    <h4 className="font-medium text-purple-800 mb-1">Severe Malaria</h4>
                    <p className="text-sm text-purple-700">
                      Requires immediate hospitalization and intravenous treatment. Don't delay seeking care for severe
                      symptoms.
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-md">
                    <h4 className="font-medium text-amber-800 mb-1">Free Treatment</h4>
                    <p className="text-sm text-amber-700">
                      Malaria diagnosis and treatment are free at government health facilities for children under 5 and
                      pregnant women.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-bold text-green-900 mb-2">Need Help?</h3>
                <p className="text-sm text-green-700 mb-4">
                  If you have fever or suspect malaria, seek medical care immediately. Early treatment saves lives.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:999">Emergency: 999</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/healthcare-finder">Find Clinic</Link>
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
