"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bookmark, Heart, MessageCircle, Search, Share2, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const healthArticles = [
  {
    id: 1,
    title: "Essential Nutrients During Pregnancy",
    excerpt:
      "Learn about the key vitamins and minerals needed for a healthy pregnancy and where to find them in your diet.",
    category: "Nutrition",
    author: "Dr. Sarah Johnson",
    readTime: "5 min read",
    likes: 124,
    comments: 18,
    image: "/images/telehealth-hero.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Managing Morning Sickness Naturally",
    excerpt:
      "Discover natural remedies and lifestyle changes that can help reduce nausea and vomiting during early pregnancy.",
    category: "Pregnancy",
    author: "Dr. Amina Kargbo",
    readTime: "4 min read",
    likes: 89,
    comments: 12,
    image: "/images/telehealth-hero.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Mental Health Support for New Mothers",
    excerpt:
      "Understanding postpartum depression and anxiety, and finding the support you need during this important time.",
    category: "Mental Health",
    author: "Dr. Fatima Sesay",
    readTime: "6 min read",
    likes: 156,
    comments: 24,
    image: "/images/telehealth-hero.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Preparing for Labor and Delivery",
    excerpt: "What to expect during labor and how to prepare yourself physically and mentally for childbirth.",
    category: "Pregnancy",
    author: "Dr. Mariama Bangura",
    readTime: "8 min read",
    likes: 203,
    comments: 31,
    image: "/images/telehealth-hero.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Breastfeeding: Benefits and Best Practices",
    excerpt: "Everything you need to know about breastfeeding, from the benefits to common challenges and solutions.",
    category: "Newborn Care",
    author: "Dr. Hawa Turay",
    readTime: "7 min read",
    likes: 178,
    comments: 22,
    image: "/images/telehealth-hero.jpg",
    featured: false,
  },
]

const categories = ["All", "Pregnancy", "Nutrition", "Mental Health", "Newborn Care", "General Health"]

export default function HealthFeedPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedArticles, setLikedArticles] = useState<number[]>([])
  const [bookmarkedArticles, setBookmarkedArticles] = useState<number[]>([])

  const filteredArticles = healthArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  const toggleLike = (articleId: number) => {
    setLikedArticles((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId],
    )
  }

  const toggleBookmark = (articleId: number) => {
    setBookmarkedArticles((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId],
    )
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pregnancy":
        return "bg-pink-100 text-pink-800"
      case "Nutrition":
        return "bg-green-100 text-green-800"
      case "Mental Health":
        return "bg-blue-100 text-blue-800"
      case "Newborn Care":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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
          <h1 className="text-lg font-semibold mx-auto">Health Feed</h1>
          <Button variant="ghost" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-40 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="absolute inset-0">
          <Image src="/images/telehealth-hero.jpg" alt="Health Education" fill className="object-cover opacity-20" />
        </div>
        <div className="relative container px-4 h-full flex items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Health Education Hub</h2>
            <p className="text-teal-100">Stay informed with expert health advice and tips</p>
          </div>
        </div>
      </section>

      <main className="flex-1 container px-4 py-6 space-y-6">
        {/* Search and Filter */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search health articles..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Social Media Promotion */}
        <section className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Follow Us for More Content!</h3>
              <p className="text-sm text-teal-100">Get daily health tips and join our community</p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://youtube.com/@healthymama-sierraleone"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@healthymama.sl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/healthymama_sl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Featured Articles</h2>
            <div className="grid gap-4">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-2">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.excerpt}</p>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=24&width=24" />
                            <AvatarFallback className="text-xs">
                              {article.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{article.author}</span>
                        </div>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 h-8"
                            onClick={() => toggleLike(article.id)}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                likedArticles.includes(article.id) ? "fill-red-500 text-red-500" : ""
                              }`}
                            />
                            <span className="text-xs">{article.likes}</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-1 h-8">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-xs">{article.comments}</span>
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleBookmark(article.id)}
                          >
                            <Bookmark
                              className={`h-4 w-4 ${bookmarkedArticles.includes(article.id) ? "fill-current" : ""}`}
                            />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Regular Articles */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Latest Articles</h2>
          <div className="grid gap-4">
            {regularArticles.map((article) => (
              <Card key={article.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <Badge className={`${getCategoryColor(article.category)} text-xs`}>{article.category}</Badge>
                          <h3 className="font-medium line-clamp-2">{article.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 h-7"
                            onClick={() => toggleLike(article.id)}
                          >
                            <Heart
                              className={`h-3 w-3 ${
                                likedArticles.includes(article.id) ? "fill-red-500 text-red-500" : ""
                              }`}
                            />
                            <span className="text-xs">{article.likes}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => toggleBookmark(article.id)}
                          >
                            <Bookmark
                              className={`h-3 w-3 ${bookmarkedArticles.includes(article.id) ? "fill-current" : ""}`}
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  )
}
