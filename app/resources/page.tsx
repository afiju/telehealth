import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Phone, Clock, Heart, Shield, Users, Building } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const resources = [
    {
      name: "Marie Stopes Sierra Leone",
      type: "Health Clinic",
      services: ["Reproductive Health", "Family Planning", "STI Testing", "Counseling"],
      location: "Freetown, Western Area",
      phone: "+232 76 111 222",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM",
      description: "Comprehensive reproductive health services for young women",
      icon: Heart,
      color: "pink",
    },
    {
      name: "Planned Parenthood Sierra Leone",
      type: "Health Center",
      services: ["Contraception", "Pregnancy Testing", "Health Education", "Youth Services"],
      location: "Bo, Southern Province",
      phone: "+232 76 333 444",
      hours: "Mon-Fri: 9AM-4PM",
      description: "Youth-friendly reproductive health services",
      icon: Heart,
      color: "blue",
    },
    {
      name: "Women Against Violence",
      type: "Support Organization",
      services: ["Crisis Support", "Counseling", "Legal Aid", "Safe Shelter"],
      location: "Freetown, Western Area",
      phone: "+232 76 555 666",
      hours: "24/7 Hotline Available",
      description: "Support for survivors of gender-based violence",
      icon: Shield,
      color: "purple",
    },
    {
      name: "Youth Development Association",
      type: "Community Organization",
      services: ["Peer Education", "Life Skills", "Mentorship", "Support Groups"],
      location: "Makeni, Northern Province",
      phone: "+232 76 777 888",
      hours: "Mon-Sat: 10AM-6PM",
      description: "Empowering young people through education and support",
      icon: Users,
      color: "green",
    },
    {
      name: "Government Hospital - Maternal Health",
      type: "Public Hospital",
      services: ["Prenatal Care", "Emergency Care", "Family Planning", "STI Treatment"],
      location: "Kenema, Eastern Province",
      phone: "+232 76 999 000",
      hours: "24/7 Emergency Services",
      description: "Free maternal and reproductive health services",
      icon: Building,
      color: "amber",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "bg-pink-100 text-pink-700 border-pink-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      green: "bg-green-100 text-green-700 border-green-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconColor = (color: string) => {
    const colors = {
      pink: "text-pink-600",
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      amber: "text-amber-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

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
          <h1 className="text-lg font-semibold mx-auto">Local Resources</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="text-center">
                <h2 className="text-lg font-bold text-blue-900 mb-2">Find Support Near You</h2>
                <p className="text-sm text-blue-700">
                  These organizations provide confidential, youth-friendly services across Sierra Leone. All services
                  respect your privacy and rights.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Health & Support Services</h2>
            <Badge variant="outline">{resources.length} Resources</Badge>
          </div>

          <div className="grid gap-4">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon
              return (
                <Card key={index} className={`border-l-4 ${getColorClasses(resource.color)}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full bg-white`}>
                          <IconComponent className={`h-5 w-5 ${getIconColor(resource.color)}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{resource.name}</CardTitle>
                          <CardDescription>{resource.type}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">{resource.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Services Offered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {resource.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{resource.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>{resource.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{resource.hours}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" asChild>
                        <a href={`tel:${resource.phone}`}>Call Now</a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://maps.google.com/?q=${encodeURIComponent(resource.location)}`}>
                          Get Directions
                        </a>
                      </Button>
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
              <CardTitle>Emergency Contacts</CardTitle>
              <CardDescription>For immediate help and support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Phone className="h-4 w-4 text-red-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Emergency Services</h4>
                      <p className="text-xs text-muted-foreground">Police, Fire, Ambulance</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700" asChild>
                    <a href="tel:999">999</a>
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Youth Helpline</h4>
                      <p className="text-xs text-muted-foreground">24/7 confidential support</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href="tel:+23276123456">Call</a>
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sexual Violence Hotline</h4>
                      <p className="text-xs text-muted-foreground">Crisis support and counseling</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href="tel:+23276789012">Call</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Know Your Rights</CardTitle>
              <CardDescription>Important information about your healthcare rights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="p-3 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-800 mb-1">Right to Confidentiality</h4>
                    <p className="text-sm text-green-700">
                      Healthcare providers must keep your information private, even from your parents in many cases.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-800 mb-1">Right to Consent</h4>
                    <p className="text-sm text-green-700">
                      You have the right to make decisions about your own body and healthcare.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-800 mb-1">Right to Information</h4>
                    <p className="text-sm text-green-700">
                      You have the right to accurate, age-appropriate information about your health.
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-800 mb-1">Right to Respectful Care</h4>
                    <p className="text-sm text-green-700">
                      You deserve to be treated with respect and dignity by all healthcare providers.
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/rights">Learn More About Your Rights</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
