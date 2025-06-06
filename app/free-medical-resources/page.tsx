"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, Phone, FileText, Stethoscope, Pill, Baby, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

const freeHealthcarePrograms = [
  {
    id: 1,
    title: "Free Healthcare Initiative",
    provider: "Ministry of Health",
    description: "Free healthcare for pregnant women, lactating mothers, and children under 5",
    eligibility: ["Pregnant women", "Breastfeeding mothers", "Children under 5 years"],
    services: [
      "Prenatal care",
      "Delivery services",
      "Postnatal care",
      "Child immunizations",
      "Malaria treatment",
      "Basic medications",
    ],
    howToAccess: "Visit any government health center with your ID card or referral letter",
    locations: "All government hospitals and health centers nationwide",
    icon: "👶",
  },
  {
    id: 2,
    title: "Community Outreach Clinics",
    provider: "NGO Health Alliance",
    description: "Mobile clinics providing free basic healthcare in rural communities",
    eligibility: ["All women in rural communities", "Children", "Elderly"],
    services: [
      "Basic health checkups",
      "Reproductive health services",
      "Family planning",
      "Health education",
      "Nutritional support",
    ],
    howToAccess: "Check the schedule for when mobile clinics visit your community",
    locations: "Rural communities across all districts",
    icon: "🏥",
  },
  {
    id: 3,
    title: "Women's Health Initiative",
    provider: "International Aid Organization",
    description: "Comprehensive women's health services at no cost",
    eligibility: ["All women of reproductive age", "Adolescent girls"],
    services: [
      "Reproductive health services",
      "Cancer screenings",
      "Family planning",
      "STI testing and treatment",
      "Mental health support",
    ],
    howToAccess: "Register at any participating health center with your ID",
    locations: "Major cities and district capitals",
    icon: "💗",
  },
  {
    id: 4,
    title: "Emergency Medical Fund",
    provider: "Healthcare Trust",
    description: "Financial assistance for emergency medical situations",
    eligibility: ["Low-income women", "Medical emergencies only"],
    services: [
      "Emergency surgery coverage",
      "Critical care costs",
      "Essential medications",
      "Medical transport assistance",
    ],
    howToAccess: "Apply through hospital social workers or community health workers",
    locations: "All regional and district hospitals",
    icon: "🚑",
  },
]

const upcomingClinics = [
  {
    date: "June 15, 2025",
    location: "Central Community Center",
    services: ["Prenatal checkups", "Child immunizations", "General consultations"],
    time: "9:00 AM - 3:00 PM",
    district: "Western Area",
  },
  {
    date: "June 18, 2025",
    location: "Eastern Village Square",
    services: ["Women's health screenings", "Family planning", "Nutritional support"],
    time: "8:00 AM - 4:00 PM",
    district: "Eastern Province",
  },
  {
    date: "June 22, 2025",
    location: "Northern Health Post",
    services: ["Maternal health", "Child health", "Malaria testing and treatment"],
    time: "9:00 AM - 2:00 PM",
    district: "Northern Province",
  },
]

const emergencyContacts = [
  {
    name: "National Medical Emergency",
    number: "999",
    description: "For life-threatening emergencies",
  },
  {
    name: "Maternal Health Hotline",
    number: "117-MAMA",
    description: "24/7 support for pregnancy emergencies",
  },
  {
    name: "Free Healthcare Helpline",
    number: "116-FREE",
    description: "Information about free healthcare services",
  },
  {
    name: "Medical Transport Service",
    number: "118-RIDE",
    description: "Free transport for medical emergencies",
  },
]

const healthDocuments = [
  {
    title: "Free Healthcare ID Card",
    description: "Required to access free government healthcare services",
    howToGet: "Register at your local health center with your national ID and proof of eligibility",
  },
  {
    title: "Maternal Health Booklet",
    description: "Records all prenatal visits and child health information",
    howToGet: "Provided at your first prenatal visit at any health center",
  },
  {
    title: "Medical Exemption Certificate",
    description: "For those with chronic conditions requiring ongoing care",
    howToGet: "Apply through a doctor at government hospitals with medical records",
  },
]

export default function FreeMedicalResourcesPage() {
  const { toast } = useToast()
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [district, setDistrict] = useState("")

  const filteredPrograms = freeHealthcarePrograms.filter((program) => {
    return (
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const handleEligibilityCheck = () => {
    if (!district) {
      toast({
        title: "Please select your district",
        description: "We need this information to check your eligibility",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Eligibility Confirmed!",
      description: "You are eligible for free healthcare services. Visit your nearest health center.",
    })
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
          <h1 className="text-lg font-semibold mx-auto">Free Medical Resources</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-40 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="absolute inset-0">
          <Image
            src="/images/telehealth-hero.jpg"
            alt="Free Medical Resources"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Free Healthcare Access</h2>
            <p className="text-blue-100 text-sm">Resources and support for women to access free medical care</p>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        {/* Quick Eligibility Check */}
        <section>
          <Card className="border-teal-200 bg-teal-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-teal-800">
                <Stethoscope className="h-5 w-5" />
                Quick Eligibility Check
              </CardTitle>
              <CardDescription className="text-teal-700">
                Find out if you qualify for free healthcare services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Are you:</Label>
                  <RadioGroup defaultValue="pregnant">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pregnant" id="pregnant" />
                      <Label htmlFor="pregnant">Pregnant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="breastfeeding" id="breastfeeding" />
                      <Label htmlFor="breastfeeding">Breastfeeding</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="child-under-5" id="child-under-5" />
                      <Label htmlFor="child-under-5">Mother of child under 5</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="district">Your District:</Label>
                  <RadioGroup value={district} onValueChange={setDistrict}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="western" id="western" />
                      <Label htmlFor="western">Western Area</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="northern" id="northern" />
                      <Label htmlFor="northern">Northern Province</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="eastern" id="eastern" />
                      <Label htmlFor="eastern">Eastern Province</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="southern" id="southern" />
                      <Label htmlFor="southern">Southern Province</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button onClick={handleEligibilityCheck} className="w-full bg-teal-600 hover:bg-teal-700">
                  Check Eligibility
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Tabs */}
        <section>
          <Tabs defaultValue="programs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="clinics">Free Clinics</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="space-y-4">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search healthcare programs..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="grid gap-4">
                  {filteredPrograms.map((program) => (
                    <Card key={program.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="text-3xl">{program.icon}</div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <Badge className="mb-2 bg-blue-100 text-blue-800">{program.provider}</Badge>
                                <h3 className="font-medium">{program.title}</h3>
                                <p className="text-sm text-muted-foreground">{program.description}</p>
                              </div>
                            </div>

                            {selectedProgram === program.id ? (
                              <div className="mt-3 space-y-3">
                                <div className="p-3 bg-blue-50 rounded-md">
                                  <h4 className="font-medium text-blue-800 mb-2">Who is eligible:</h4>
                                  <ul className="space-y-1">
                                    {program.eligibility.map((item, index) => (
                                      <li key={index} className="flex gap-2 text-sm text-blue-700">
                                        <span className="text-blue-600">•</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="p-3 bg-green-50 rounded-md">
                                  <h4 className="font-medium text-green-800 mb-2">Services provided:</h4>
                                  <ul className="space-y-1">
                                    {program.services.map((service, index) => (
                                      <li key={index} className="flex gap-2 text-sm text-green-700">
                                        <span className="text-green-600">•</span>
                                        <span>{service}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="p-3 bg-purple-50 rounded-md">
                                  <h4 className="font-medium text-purple-800 mb-2">How to access:</h4>
                                  <p className="text-sm text-purple-700">{program.howToAccess}</p>
                                </div>

                                <div className="p-3 bg-amber-50 rounded-md">
                                  <h4 className="font-medium text-amber-800 mb-2">Where to find:</h4>
                                  <p className="text-sm text-amber-700">{program.locations}</p>
                                </div>

                                <Button variant="ghost" size="sm" onClick={() => setSelectedProgram(null)}>
                                  Show Less
                                </Button>
                              </div>
                            ) : (
                              <Button variant="outline" size="sm" onClick={() => setSelectedProgram(program.id)}>
                                Learn More
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {filteredPrograms.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No programs found matching your search.</p>
                      <Button variant="outline" className="mt-2" onClick={() => setSearchQuery("")}>
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="clinics" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Upcoming Free Clinics</h3>
                <p className="text-sm text-muted-foreground">
                  Mobile and temporary clinics offering free healthcare services
                </p>
              </div>

              <div className="grid gap-4">
                {upcomingClinics.map((clinic, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <Calendar className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">{clinic.date}</h4>
                              <p className="text-sm text-muted-foreground">{clinic.time}</p>
                            </div>
                          </div>
                          <Badge>{clinic.district}</Badge>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-full mt-1">
                            <MapPin className="h-5 w-5 text-green-700" />
                          </div>
                          <div>
                            <h4 className="font-medium">{clinic.location}</h4>
                            <div className="mt-2">
                              <p className="text-sm font-medium text-muted-foreground">Services offered:</p>
                              <ul className="mt-1 space-y-1">
                                {clinic.services.map((service, i) => (
                                  <li key={i} className="flex gap-2 text-sm">
                                    <span className="text-green-600">•</span>
                                    <span>{service}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Phone className="h-4 w-4" />
                            <span>Call for Info</span>
                          </Button>
                          <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                            <Calendar className="h-4 w-4" />
                            <span>Add Reminder</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Find More Free Clinics</CardTitle>
                  <CardDescription>Free clinics are regularly scheduled in different communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="district-search">Search by District:</Label>
                      <div className="flex gap-2">
                        <Input id="district-search" placeholder="Enter your district or community" />
                        <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
                      </div>
                    </div>

                    <div className="p-3 bg-blue-50 rounded-md">
                      <p className="text-sm text-blue-700">
                        <strong>Tip:</strong> You can also call the Free Healthcare Helpline at 116-FREE to find out
                        when free clinics will be in your area.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Required Documents</h3>
                <p className="text-sm text-muted-foreground">
                  Documents you may need to access free healthcare services
                </p>
              </div>

              <div className="grid gap-4">
                {healthDocuments.map((doc, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="bg-amber-100 p-3 rounded-full h-fit">
                          <FileText className="h-5 w-5 text-amber-700" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                          <div className="p-3 bg-amber-50 rounded-md">
                            <h5 className="text-sm font-medium text-amber-800">How to get this document:</h5>
                            <p className="text-sm text-amber-700 mt-1">{doc.howToGet}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Document Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm">
                      Need help getting your documents? Community health workers can assist you with the application
                      process.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="gap-2">
                        <Phone className="h-4 w-4" />
                        <span>Call for Help</span>
                      </Button>
                      <Button className="gap-2 bg-teal-600 hover:bg-teal-700">
                        <FileText className="h-4 w-4" />
                        <span>Document Guide</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="emergency" className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">Emergency Medical Support</h3>
                <p className="text-sm text-muted-foreground">Free emergency services and contacts</p>
              </div>

              <Card className="border-red-200 bg-red-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-red-800">Emergency Contacts</CardTitle>
                  <CardDescription className="text-red-700">Call immediately in case of emergency</CardDescription>
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

              <Card>
                <CardHeader>
                  <CardTitle>Free Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-md">
                      <div className="flex items-center gap-3 mb-2">
                        <Baby className="h-5 w-5 text-blue-700" />
                        <h4 className="font-medium text-blue-800">Maternal Emergencies</h4>
                      </div>
                      <p className="text-sm text-blue-700">
                        All pregnancy-related emergencies are covered under the Free Healthcare Initiative. Go to any
                        government hospital immediately.
                      </p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-md">
                      <div className="flex items-center gap-3 mb-2">
                        <Pill className="h-5 w-5 text-green-700" />
                        <h4 className="font-medium text-green-800">Emergency Medications</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        Life-saving medications are provided free of charge in emergency situations at government
                        facilities.
                      </p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-md">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-5 w-5 text-purple-700" />
                        <h4 className="font-medium text-purple-800">Emergency Transport</h4>
                      </div>
                      <p className="text-sm text-purple-700">
                        Free ambulance services are available for medical emergencies. Call 118-RIDE for assistance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Patient Rights */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Know Your Rights</CardTitle>
              <CardDescription>Every woman has the right to access healthcare</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800">Right to Free Healthcare</h4>
                  <p className="text-sm text-blue-700">
                    Pregnant women, breastfeeding mothers, and children under 5 have the legal right to free healthcare
                    services at government facilities.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800">Right to Quality Care</h4>
                  <p className="text-sm text-blue-700">
                    You have the right to receive respectful, quality care regardless of your ability to pay.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800">Right to Information</h4>
                  <p className="text-sm text-blue-700">
                    You have the right to clear information about your health condition, treatment options, and
                    available services.
                  </p>
                </div>

                <div className="mt-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Download Patient Rights Guide</Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  <a href="tel:116-FREE">
                    <Phone className="h-6 w-6" />
                    <span className="text-sm">Call Helpline</span>
                  </a>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/health-bot">
                    <Stethoscope className="h-6 w-6" />
                    <span className="text-sm">Health Assistant</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/symptom-checker">
                    <Search className="h-6 w-6" />
                    <span className="text-sm">Find Nearest Clinic</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Link href="/emergency-aid">
                    <Baby className="h-6 w-6" />
                    <span className="text-sm">Maternal Services</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Important Disclaimer */}
        <section>
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> While this information is regularly updated, program details, eligibility
                criteria, and services may change. Always confirm with the healthcare provider or call the Free
                Healthcare Helpline for the most current information.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <MobileNav />
    </div>
  )
}
