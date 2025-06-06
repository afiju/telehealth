import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, MapPin, MessageSquare, AlertTriangle, Heart, Shield } from "lucide-react"
import Link from "next/link"

export default function EmergencyPage() {
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
          <h1 className="text-lg font-semibold mx-auto">Emergency Help</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="rounded-full bg-red-200 p-3 flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="font-medium text-red-900 mb-2">Need Immediate Help?</h3>
                  <p className="text-sm text-red-700">
                    If you're in immediate danger or experiencing a medical emergency, call 999 right away.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Emergency Contacts</h2>
          <div className="grid gap-4">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-red-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-red-900">Emergency Services</h3>
                      <p className="text-sm text-red-700">Police, Fire, Ambulance</p>
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700" asChild>
                    <a href="tel:999">Call 999</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-blue-900">Youth Helpline</h3>
                      <p className="text-sm text-blue-700">Confidential support for young people</p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <a href="tel:+23276123456">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <MessageSquare className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-purple-900">Crisis Text Line</h3>
                      <p className="text-sm text-purple-700">Text support 24/7</p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <a href="sms:741741">Text HELP</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Immediate Support</h2>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  Sexual Violence Support
                </CardTitle>
                <CardDescription>If you've experienced sexual violence or assault</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-medium text-green-800 mb-2">Remember:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• It's not your fault</li>
                    <li>• You deserve support and care</li>
                    <li>• There are people who can help you</li>
                    <li>• You don't have to go through this alone</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="tel:+23276789012">
                      <Phone className="mr-2 h-4 w-4" />
                      Sexual Assault Hotline - +232 76 789 012
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/resources/sexual-violence">
                      <MapPin className="mr-2 h-4 w-4" />
                      Find Local Support Centers
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Pregnancy Support
                </CardTitle>
                <CardDescription>If you think you might be pregnant or need pregnancy support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-pink-50 p-4 rounded-md">
                  <h4 className="font-medium text-pink-800 mb-2">What to do:</h4>
                  <ul className="space-y-1 text-sm text-pink-700">
                    <li>• Take a pregnancy test</li>
                    <li>• Talk to a trusted adult or healthcare provider</li>
                    <li>• Know that you have options and support</li>
                    <li>• Don't face this alone</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="tel:+23276456789">
                      <Phone className="mr-2 h-4 w-4" />
                      Pregnancy Support Line - +232 76 456 789
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/resources/pregnancy">
                      <MapPin className="mr-2 h-4 w-4" />
                      Find Pregnancy Support Services
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Domestic Violence
                </CardTitle>
                <CardDescription>If you're experiencing abuse at home or in a relationship</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-amber-50 p-4 rounded-md">
                  <h4 className="font-medium text-amber-800 mb-2">Safety first:</h4>
                  <ul className="space-y-1 text-sm text-amber-700">
                    <li>• Trust your instincts about your safety</li>
                    <li>• Have a safety plan ready</li>
                    <li>• Know where you can go for help</li>
                    <li>• Abuse is never your fault</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="tel:+23276234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Domestic Violence Hotline - +232 76 234 567
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/resources/domestic-violence">
                      <MapPin className="mr-2 h-4 w-4" />
                      Find Safe Shelters
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Safety Planning</CardTitle>
              <CardDescription>Create a plan to keep yourself safe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800 mb-1">Identify Safe People</h4>
                  <p className="text-sm text-blue-700">
                    Think of trusted adults you can talk to: teachers, family members, counselors, or friends' parents.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800 mb-1">Know Safe Places</h4>
                  <p className="text-sm text-blue-700">
                    Identify places you can go if you need help: police stations, hospitals, community centers, or
                    trusted friends' homes.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800 mb-1">Keep Important Numbers</h4>
                  <p className="text-sm text-blue-700">
                    Save emergency contacts in your phone and memorize at least one important number.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800 mb-1">Trust Your Feelings</h4>
                  <p className="text-sm text-blue-700">
                    If something doesn't feel right, trust your instincts and seek help.
                  </p>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/resources/safety-planning">Learn More About Safety Planning</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4">
              <div className="text-center">
                <h3 className="font-medium text-green-900 mb-2">You Are Not Alone</h3>
                <p className="text-sm text-green-700 mb-3">
                  There are people who care about you and want to help. Reaching out for help is a sign of strength, not
                  weakness.
                </p>
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/resources">Find Local Support Resources</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
