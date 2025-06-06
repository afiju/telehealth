import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Languages, Heart, BookOpen, Users, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-blue-100">
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8">
          <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=192&width=384"
              alt="HealthWise Sierra Leone - Maternal Health Education"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-green-900/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2">HealthWise</h1>
                <p className="text-green-100">Sierra Leone</p>
                <p className="text-sm text-green-200 mt-1">Maternal Health Education for All</p>
              </div>
            </div>
          </div>

          <Card className="w-full bg-white/90 backdrop-blur">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-green-800 mb-2">Improving Health Literacy</h2>
                  <p className="text-sm text-gray-600">
                    Accessible maternal health education for women and families across Sierra Leone
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Languages size={16} />
                    <span>English | Krio | Mende | Temne</span>
                  </Button>
                </div>

                <div className="grid gap-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/onboarding">
                      Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button variant="outline" asChild>
                    <Link href="/login">I Already Have an Account</Link>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  Free educational platform supported by the Ministry of Health, Sierra Leone
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4 w-full">
            <Card className="bg-white/80">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Heart className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="text-sm font-medium">Maternal Health</h3>
                <p className="text-xs text-muted-foreground mt-1">Pregnancy to postnatal care</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <BookOpen className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="text-sm font-medium">Health Education</h3>
                <p className="text-xs text-muted-foreground mt-1">Learn at your own pace</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="text-sm font-medium">Community</h3>
                <p className="text-xs text-muted-foreground mt-1">Connect with others</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <h3 className="text-sm font-medium">Local Resources</h3>
                <p className="text-xs text-muted-foreground mt-1">Find nearby healthcare</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center">
        <div className="space-y-4">
          <div className="text-sm text-green-700">
            <p className="font-medium">Supported by:</p>
            <p>Ministry of Health & Sanitation, Sierra Leone</p>
            <p>World Health Organization</p>
            <p>UNICEF Sierra Leone</p>
          </div>

          <div className="text-xs text-green-600">
            <p>Available offline • Works on any phone • Free to use</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
