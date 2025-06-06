"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Navigation,
  Stethoscope,
  Baby,
  Heart,
  Users,
  Loader2,
  MapPinIcon,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Coordinates {
  lat: number
  lng: number
}

interface HealthcareFacility {
  name: string
  type: string
  specialties: string[]
  location: string
  coordinates: Coordinates
  distance?: number
  phone: string
  hours: string
  services: string[]
  icon: any
  color: string
  googleMapsUrl?: string
}

export default function HealthcareFinderPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null)
  const [locationLoading, setLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)

  const healthcareFacilities: HealthcareFacility[] = [
    {
      name: "Princess Christian Maternity Hospital",
      type: "Government Hospital",
      specialties: ["Maternal Health", "Emergency Care", "Neonatal Care"],
      location: "Freetown, Western Area",
      coordinates: { lat: 8.4721, lng: -13.2348 }, // FRCM+Q4 Freetown coordinates
      phone: "+232 22 222 333",
      hours: "24/7",
      services: ["Free maternal care", "Emergency delivery", "Antenatal care", "Postnatal care"],
      icon: Baby,
      color: "green",
    },
    {
      name: "Connaught Hospital",
      type: "Government Hospital",
      specialties: ["General Medicine", "Emergency Care", "Surgery"],
      location: "Freetown, Western Area",
      coordinates: { lat: 8.4657, lng: -13.2317 }, // Approximate coordinates for Connaught Hospital
      phone: "+232 22 444 555",
      hours: "24/7",
      services: ["Emergency care", "General consultation", "Laboratory services", "Pharmacy"],
      icon: Stethoscope,
      color: "blue",
      googleMapsUrl: "https://maps.app.goo.gl/bpXCVxHtBAXfGoUb7",
    },
    {
      name: "Marie Stopes Clinic",
      type: "Private Clinic",
      specialties: ["Reproductive Health", "Family Planning", "Maternal Health"],
      location: "Freetown, Western Area",
      coordinates: { lat: 8.4606, lng: -13.2302 }, // Approximate coordinates for Marie Stopes
      phone: "+232 76 111 222",
      hours: "Mon-Fri: 8AM-5PM, Sat: 9AM-2PM",
      services: ["Family planning", "Antenatal care", "STI testing", "Counseling"],
      icon: Heart,
      color: "pink",
      googleMapsUrl: "https://maps.app.goo.gl/GPshSA8YzW9fhhED7",
    },
    {
      name: "Bo Government Hospital",
      type: "Government Hospital",
      specialties: ["Maternal Health", "General Medicine", "Pediatrics"],
      location: "Bo, Southern Province",
      coordinates: { lat: 7.9644, lng: -11.7383 }, // Bo coordinates
      phone: "+232 32 222 444",
      hours: "24/7",
      services: ["Maternal care", "Child health", "Emergency services", "Laboratory"],
      icon: Baby,
      color: "purple",
    },
    {
      name: "Makeni Government Hospital",
      type: "Government Hospital",
      specialties: ["General Medicine", "Surgery", "Maternal Health"],
      location: "Makeni, Northern Province",
      coordinates: { lat: 8.8837, lng: -12.0471 }, // Makeni coordinates
      phone: "+232 71 333 555",
      hours: "24/7",
      services: ["General consultation", "Surgical services", "Maternal care", "Emergency care"],
      icon: Stethoscope,
      color: "amber",
    },
  ]

  const communityHealthWorkers = [
    {
      name: "Aminata Kamara",
      area: "Central Freetown",
      coordinates: { lat: 8.4657, lng: -13.2317 },
      phone: "+232 76 123 456",
      specialties: ["Maternal Health", "Child Health", "Immunizations"],
      languages: ["English", "Krio", "Temne"],
      distance: 0,
    },
    {
      name: "Mohamed Sesay",
      area: "East End Freetown",
      coordinates: { lat: 8.48, lng: -13.22 },
      phone: "+232 76 234 567",
      specialties: ["General Health", "Malaria Prevention", "Nutrition"],
      languages: ["English", "Krio", "Mende"],
      distance: 0,
    },
    {
      name: "Fatmata Bangura",
      area: "Wellington",
      coordinates: { lat: 8.45, lng: -13.18 },
      phone: "+232 76 345 678",
      specialties: ["Maternal Health", "Family Planning", "Health Education"],
      languages: ["English", "Krio"],
      distance: 0,
    },
  ]

  // Calculate distance between two coordinates using Haversine formula
  const calculateDistance = (coord1: Coordinates, coord2: Coordinates): number => {
    const R = 6371 // Earth's radius in kilometers
    const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180
    const dLng = ((coord2.lng - coord1.lng) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((coord1.lat * Math.PI) / 180) *
        Math.cos((coord2.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  // Get user's current location
  const getCurrentLocation = () => {
    setLocationLoading(true)
    setLocationError(null)

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser")
      setLocationLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        setUserLocation(coords)
        setLocationLoading(false)
      },
      (error) => {
        let errorMessage = "Unable to get your location"
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user"
            break
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable"
            break
          case error.TIMEOUT:
            errorMessage = "Location request timed out"
            break
        }
        setLocationError(errorMessage)
        setLocationLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      },
    )
  }

  // Calculate distances and sort facilities
  const facilitiesWithDistance = healthcareFacilities
    .map((facility) => ({
      ...facility,
      distance: userLocation ? calculateDistance(userLocation, facility.coordinates) : undefined,
    }))
    .sort((a, b) => {
      if (a.distance && b.distance) {
        return a.distance - b.distance
      }
      return 0
    })

  const chwsWithDistance = communityHealthWorkers
    .map((chw) => ({
      ...chw,
      distance: userLocation ? calculateDistance(userLocation, chw.coordinates) : 0,
    }))
    .sort((a, b) => a.distance - b.distance)

  const filteredFacilities = facilitiesWithDistance.filter(
    (facility) =>
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const filteredCHWs = chwsWithDistance.filter(
    (chw) =>
      chw.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chw.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chw.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-700 border-green-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      pink: "bg-pink-100 text-pink-700 border-pink-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getIconColor = (color: string) => {
    const colors = {
      green: "text-green-600",
      blue: "text-blue-600",
      pink: "text-pink-600",
      purple: "text-purple-600",
      amber: "text-amber-600",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const formatDistance = (distance: number | undefined) => {
    if (!distance) return "Distance unknown"
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`
    }
    return `${distance.toFixed(1)}km`
  }

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const handleDirections = (facility: HealthcareFacility) => {
    if (facility.googleMapsUrl) {
      window.open(facility.googleMapsUrl, "_blank")
    } else {
      const query = encodeURIComponent(`${facility.name}, ${facility.location}`)
      window.open(`https://maps.google.com/?q=${query}`, "_blank")
    }
  }

  const handleDirectionsCHW = (chw: any) => {
    const query = encodeURIComponent(`${chw.area}, Freetown, Sierra Leone`)
    window.open(`https://maps.google.com/?q=${query}`, "_blank")
  }

  useEffect(() => {
    // Automatically get location on component mount
    getCurrentLocation()
  }, [])

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
          <h1 className="text-lg font-semibold mx-auto">Healthcare Finder</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-6 space-y-6">
        <section>
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4">
              <div className="text-center">
                <h2 className="text-lg font-bold text-blue-900 mb-2">Find Healthcare Near You</h2>
                <p className="text-sm text-blue-700">
                  Locate hospitals, clinics, and community health workers in your area
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Search by location or facility name..."
                className="flex-1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setSearchTerm("")}>
                <Navigation className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={getCurrentLocation}
                disabled={locationLoading}
                className="flex items-center gap-2"
              >
                {locationLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPinIcon className="h-4 w-4" />}
                {locationLoading ? "Getting Location..." : "Update Location"}
              </Button>

              {userLocation && (
                <Badge variant="secondary" className="text-xs">
                  Location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                </Badge>
              )}

              {locationError && (
                <Badge variant="destructive" className="text-xs">
                  {locationError}
                </Badge>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Healthcare Facilities</h2>
            <Badge variant="outline">{filteredFacilities.length} Facilities</Badge>
          </div>

          <div className="grid gap-4">
            {filteredFacilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <Card key={index} className={`border-l-4 ${getColorClasses(facility.color)}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-white">
                          <IconComponent className={`h-5 w-5 ${getIconColor(facility.color)}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{facility.name}</CardTitle>
                          <CardDescription>{facility.type}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {formatDistance(facility.distance)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {facility.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {facility.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{facility.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>{facility.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{facility.hours}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleCall(facility.phone)}>
                        <Phone className="h-4 w-4 mr-1" />
                        Call Now
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDirections(facility)}>
                        <Navigation className="h-4 w-4 mr-1" />
                        Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
            {filteredFacilities.length === 0 && searchTerm && (
              <div className="text-center py-8 text-gray-500">
                <p>No healthcare facilities found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Community Health Workers</h2>
            <Badge variant="outline">{filteredCHWs.length} CHWs</Badge>
          </div>

          <div className="grid gap-4">
            {filteredCHWs.map((chw, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-100">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{chw.name}</h3>
                        <p className="text-sm text-muted-foreground">{chw.area}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {formatDistance(chw.distance)}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {chw.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Languages:</h4>
                      <div className="flex flex-wrap gap-1">
                        {chw.languages.map((language, languageIndex) => (
                          <Badge key={languageIndex} variant="outline" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{chw.phone}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleCall(chw.phone)}>
                        <Phone className="h-4 w-4 mr-1" />
                        Call CHW
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDirectionsCHW(chw)}>
                        <Navigation className="h-4 w-4 mr-1" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredCHWs.length === 0 && searchTerm && (
              <div className="text-center py-8 text-gray-500">
                <p>No community health workers found matching "{searchTerm}"</p>
              </div>
            )}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
              <CardDescription>For immediate medical emergencies</CardDescription>
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
                  <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => handleCall("999")}>
                    999
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Baby className="h-4 w-4 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Maternal Emergency Hotline</h4>
                      <p className="text-xs text-muted-foreground">24/7 maternal health support</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleCall("+23276555000")}>
                    Call
                  </Button>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Heart className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Health Information Line</h4>
                      <p className="text-xs text-muted-foreground">General health advice</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" onClick={() => handleCall("+23276777888")}>
                    Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>How to Access Healthcare</CardTitle>
              <CardDescription>Important information about healthcare access in Sierra Leone</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-3">
                  <div className="p-3 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-800 mb-1">Free Maternal Healthcare</h4>
                    <p className="text-sm text-green-700">
                      Pregnant women, lactating mothers, and children under 5 receive free healthcare at government
                      facilities.
                    </p>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-md">
                    <h4 className="font-medium text-blue-800 mb-1">What to Bring</h4>
                    <p className="text-sm text-blue-700">
                      Bring your health card, any previous medical records, and a list of current medications.
                    </p>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-md">
                    <h4 className="font-medium text-purple-800 mb-1">Community Health Workers</h4>
                    <p className="text-sm text-purple-700">
                      CHWs provide basic health services in communities and can refer you to health facilities when
                      needed.
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-md">
                    <h4 className="font-medium text-amber-800 mb-1">Transportation</h4>
                    <p className="text-sm text-amber-700">
                      Plan for transportation to health facilities, especially for emergencies. Some communities have
                      ambulance services.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
