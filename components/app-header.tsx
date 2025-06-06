"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WifiOff, Menu } from "lucide-react"
import { useNetworkStatus } from "@/components/network-status-provider"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function AppHeader() {
  const { isOnline } = useNetworkStatus()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">SH</span>
          </div>
          <span className="font-bold text-lg">SafeHer</span>
        </Link>

        <div className="flex items-center gap-2">
          {!isOnline && (
            <Badge variant="destructive" className="text-xs">
              <WifiOff className="h-3 w-3 mr-1" />
              Offline
            </Badge>
          )}

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-6">
                <Link
                  href="/dashboard"
                  className="text-lg font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/modules"
                  className="text-lg font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learning Modules
                </Link>
                <Link
                  href="/ask"
                  className="text-lg font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ask Questions
                </Link>
                <Link
                  href="/resources"
                  className="text-lg font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Local Resources
                </Link>
                <Link
                  href="/emergency"
                  className="text-lg font-medium hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Emergency Help
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
