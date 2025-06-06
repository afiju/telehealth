"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, BookOpen, MapPin, Phone, Heart, Shield, Users, Volume2 } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/maternal-health", label: "Maternal Health", icon: Heart },
    { href: "/malaria-prevention", label: "Malaria Prevention", icon: Shield },
    { href: "/nutrition", label: "Nutrition", icon: BookOpen },
    { href: "/healthcare-finder", label: "Find Healthcare", icon: MapPin },
    { href: "/audio-lessons", label: "Audio Lessons", icon: Volume2 },
    { href: "/community-health-workers", label: "Community Health Workers", icon: Users },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-6">
          <div className="text-center pb-4 border-b">
            <h2 className="text-lg font-bold text-green-700">HealthWise Sierra Leone</h2>
            <p className="text-sm text-muted-foreground">Maternal Health Education</p>
          </div>

          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 text-lg font-medium hover:text-green-600 transition-colors p-2 rounded-md hover:bg-green-50"
                onClick={() => setOpen(false)}
              >
                <IconComponent className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}

          <div className="pt-4 border-t">
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="tel:999">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency: 999
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="tel:+23276555000">
                  <Heart className="h-4 w-4 mr-2" />
                  Maternal Hotline
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
