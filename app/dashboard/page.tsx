"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { useNetworkStatus } from "@/components/network-status-provider"
import {
  Baby,
  Download,
  FileText,
  Phone,
  Heart,
  Thermometer,
  Shield,
  Stethoscope,
  AlertCircle,
  BookOpen,
  Users,
  MapPin,
  Volume2,
  WifiOff,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { MediBot } from "@/components/medi-bot"

export default function DashboardPage() {
  const { isOnline } = useNetworkStatus()
  const [userName, setUserName] = useState("Fatmata")

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-16 md:pb-0">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <MobileNav />
            <h1 className="text-lg font-semibold text-green-700">HealthWise SL</h1>
          </div>

          <div className="flex items-center gap-2">
            {!isOnline && (
              <Badge variant="outline" className="gap-1 border-amber-300 text-amber-700 bg-amber-50">
                <WifiOff className="h-3 w-3" />
                <span>Offline</span>
              </Badge>
            )}
          </div>
        </div>
      </header>

      <section className="relative h-32 rounded-lg overflow-hidden mb-6">
        <Image
          src="/placeholder.svg?height=128&width=384"
          alt="Maternal Health Education"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 flex items-center">
          <div className="container px-4">
            <h2 className="text-xl font-bold text-white">Healthy Mothers, Healthy Families</h2>
            <p className="text-green-100 text-sm">Education for better maternal health outcomes</p>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section className="space-y-2">
          <h2 className="text-2xl font-bold">Welcome back, {userName}</h2>
          <p className="text-muted-foreground">Continue your health education journey</p>
        </section>

        {/* Quick Actions */}
        <section>
          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-green-50 border-green-100">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-2">
                  <Baby className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-medium text-green-900">Pregnancy Care</h3>
                <p className="text-xs text-green-700 mt-1">Prenatal to postnatal</p>
                <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/maternal-health">Learn</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-3 mb-2">
                  <Stethoscope className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-medium text-blue-900">Find Healthcare</h3>
                <p className="text-xs text-blue-700 mt-1">Clinics & CHWs near you</p>
                <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/healthcare-finder">Find</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Virtual Health Consultant */}
        <section>
          <MediBot />
        </section>

        {/* Learning Progress */}
        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                Your Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Maternal Health Modules</span>
                    <span className="font-medium">3 of 8 completed</span>
                  </div>
                  <Progress value={37.5} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-sm">
                  <div className="bg-green-50 rounded-md p-2">
                    <p className="text-xs text-green-700">Completed</p>
                    <p className="font-medium text-green-900">3 Modules</p>
                  </div>
                  <div className="bg-blue-50 rounded-md p-2">
                    <p className="text-xs text-blue-700">Next Topic</p>
                    <p className="font-medium text-blue-900">Safe Delivery</p>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/learning-modules">Continue Learning</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Health Topics */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Health Education Topics</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/topics">View All</Link>
            </Button>
          </div>

          <div className="grid gap-3">
            <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-pink-200 p-3 flex-shrink-0">
                    <Baby className="h-6 w-6 text-pink-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-pink-900">Maternal Health</h3>
                    <p className="text-sm text-pink-700">Complete guide to pregnancy, delivery, and postnatal care</p>
                    <Button asChild size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <Link href="/maternal-health">Start Learning</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-red-200 p-3 flex-shrink-0">
                    <Shield className="h-6 w-6 text-red-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-red-900">Malaria Prevention</h3>
                    <p className="text-sm text-red-700">Protect yourself and your family from malaria</p>
                    <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                      <Link href="/malaria-prevention">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-orange-200 p-3 flex-shrink-0">
                    <Heart className="h-6 w-6 text-orange-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-orange-900">Nutrition & Diet</h3>
                    <p className="text-sm text-orange-700">Proper nutrition for mothers and children</p>
                    <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700">
                      <Link href="/nutrition">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="rounded-full bg-purple-200 p-3 flex-shrink-0">
                    <Thermometer className="h-6 w-6 text-purple-700" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-purple-900">Infectious Diseases</h3>
                    <p className="text-sm text-purple-700">Prevention and management of common infections</p>
                    <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <Link href="/infectious-diseases">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Audio Content */}
        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-blue-500" />
                Audio Lessons
              </CardTitle>
              <CardDescription>Listen to health education in your language</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Volume2 className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Prenatal Care (Krio)</h4>
                      <p className="text-xs text-muted-foreground">15 minutes</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Play
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Volume2 className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Safe Delivery (Mende)</h4>
                      <p className="text-xs text-muted-foreground">12 minutes</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Play
                  </Button>
                </div>

                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/audio-lessons">View All Audio Lessons</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Community Health Workers */}
        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Community Health Workers
              </CardTitle>
              <CardDescription>Connect with local health workers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Users className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Aminata Kamara</h4>
                      <p className="text-xs text-muted-foreground">CHW - Your Area</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+23276123456">Call</a>
                  </Button>
                </div>

                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/community-health-workers">Find CHWs Near You</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Healthcare Facilities */}
        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                Nearby Healthcare Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Stethoscope className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Community Health Center</h4>
                      <p className="text-xs text-muted-foreground">2.5 km away</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/healthcare-finder">Directions</Link>
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Baby className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Maternal Health Clinic</h4>
                      <p className="text-xs text-muted-foreground">5.1 km away</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/healthcare-finder">Directions</Link>
                  </Button>
                </div>

                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href="/healthcare-finder">Find More Facilities</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contacts */}
        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Phone className="h-4 w-4 text-red-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Emergency Services</h4>
                      <p className="text-sm text-muted-foreground">Police, Fire, Ambulance</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200" asChild>
                    <a href="tel:999">Call 999</a>
                  </Button>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Baby className="h-4 w-4 text-red-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Maternal Emergency</h4>
                      <p className="text-sm text-muted-foreground">24/7 Maternal Health Hotline</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+23276555000">Call</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Offline Content */}
        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-indigo-500" />
                Offline Content
              </CardTitle>
              <CardDescription>Download for offline access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-indigo-500" />
                    <div>
                      <h4 className="font-medium">Maternal Health Guide</h4>
                      <p className="text-xs text-muted-foreground">PDF - 3.2 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-5 w-5 text-indigo-500" />
                    <div>
                      <h4 className="font-medium">Audio Lessons Pack</h4>
                      <p className="text-xs text-muted-foreground">Audio - 45 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-indigo-500" />
                    <div>
                      <h4 className="font-medium">Emergency Procedures</h4>
                      <p className="text-xs text-muted-foreground">PDF - 1.1 MB</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Daily Health Tip */}
        <section>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                Daily Health Tip
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-pink-50 p-4 rounded-md">
                  <h3 className="font-medium text-pink-800 mb-2">Iron-Rich Foods During Pregnancy</h3>
                  <p className="text-sm text-pink-700">
                    Eat foods like groundnut leaves, fish, beans, and palm oil to prevent anemia during pregnancy. These
                    foods help your baby grow strong and healthy.
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button variant="ghost" size="sm">
                    Previous Tip
                  </Button>
                  <Button variant="ghost" size="sm">
                    Next Tip
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <MobileNav />
    </div>
  )
}
