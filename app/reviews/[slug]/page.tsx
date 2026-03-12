"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Star,
  ExternalLink,
  Globe,
  CreditCard,
  Truck,
  Package,
  Shield,
  Users,
  Award,
  CheckCircle,
  XCircle,
  ThumbsUp,
  MessageSquare,
  Calendar,
  MapPin,
} from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

// Seed bank data - you can expand this with more details later
const seedBankData: Record<string, {
  name: string
  logo: string
  rating: number
  reviews: number
  location: string
  country: string
  flag: string
  established: string
  description: string
  longDescription: string
  affiliateUrl: string
  paymentMethods: string[]
  deliveryTime: string
  shippingCost: string
  strainCount: string
  specialties: string[]
  pros: string[]
  cons: string[]
  criteriaRatings: {
    paymentMethods: number
    seedVariety: number
    genetics: number
    customerExperience: number
    reputation: number
  }
  accentColor: string
}> = {
  "true-north": {
    name: "True North Seed Bank",
    logo: "https://truenorthseedbank.com/skin/frontend/flavor/flavor/images/truenorth-seed-bank-logo.png",
    rating: 4.8,
    reviews: 1247,
    location: "Ontario, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "2009",
    description: "Trusted Canadian source with years of experience and verified genetics from coast to coast.",
    longDescription: "True North Seed Bank has been a cornerstone of the Canadian cannabis seed industry since 2009. Based in Ontario, they've built a reputation for reliability, diverse genetics, and excellent customer service. They offer one of the widest selections of cannabis seeds available to Canadians, partnering with top breeders worldwide while maintaining competitive pricing.",
    affiliateUrl: "https://truenorthseedbank.com",
    paymentMethods: ["Interac E-Transfer", "Credit Card", "Cash", "Money Order"],
    deliveryTime: "2-4 business days",
    shippingCost: "Free over $75",
    strainCount: "800+",
    specialties: ["Established Reputation", "Wide Selection", "Secure Payment", "Quality Guarantee"],
    pros: [
      "One of Canada's most established seed banks (since 2009)",
      "Huge selection with 800+ strains",
      "Fast domestic shipping (2-4 days)",
      "Free shipping on orders over $75",
      "Accepts Interac E-Transfer (preferred by Canadians)",
      "No customs concerns - ships from Canada",
      "Excellent customer service reputation",
      "Regular promotions and free seeds",
    ],
    cons: [
      "Some strains can be pricier than competitors",
      "Website could use a modern refresh",
      "Limited bulk pricing options",
      "No germination guarantee",
    ],
    criteriaRatings: {
      paymentMethods: 4.9,
      seedVariety: 4.8,
      genetics: 4.7,
      customerExperience: 4.8,
      reputation: 4.9,
    },
    accentColor: "red",
  },
  "jordan-of-the-islands": {
    name: "Jordan of the Islands",
    logo: "https://jordanoftheislands.com/wp-content/uploads/2023/03/joti-logo.png",
    rating: 4.7,
    reviews: 892,
    location: "British Columbia, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "1990s",
    description: "Renowned Canadian breeder offering unique island-bred cannabis genetics since the 90s.",
    longDescription: "Jordan of the Islands is a legendary Canadian cannabis breeder based in British Columbia. Operating since the 1990s, they've developed a cult following for their unique island-bred genetics. Their strains are specifically adapted to Canadian climates, making them ideal for outdoor growers across the country. They're known for working directly with customers and providing authentic breeder-direct genetics.",
    affiliateUrl: "https://jordanoftheislands.com",
    paymentMethods: ["Interac E-Transfer", "Cash", "Money Order", "Crypto"],
    deliveryTime: "3-5 business days",
    shippingCost: "$15 flat rate",
    strainCount: "200+",
    specialties: ["Original Genetics", "Breeder Direct", "Island Strains", "Organic Seeds"],
    pros: [
      "Heritage Canadian breeder since the 90s",
      "Unique island-bred genetics not found elsewhere",
      "Direct from breeder - authentic genetics guaranteed",
      "Strains adapted for Canadian climates",
      "Excellent for outdoor growing",
      "Accepts cryptocurrency payments",
      "Personal customer service from the breeder",
      "Organic growing practices",
    ],
    cons: [
      "Smaller selection than larger seed banks",
      "$15 flat rate shipping on all orders",
      "Website is basic and could be improved",
      "Limited payment options compared to competitors",
    ],
    criteriaRatings: {
      paymentMethods: 4.3,
      seedVariety: 4.2,
      genetics: 4.9,
      customerExperience: 4.7,
      reputation: 4.9,
    },
    accentColor: "green",
  },
  "quebec-cannabis-seeds": {
    name: "Quebec Cannabis Seeds",
    logo: "https://quebeccannabisseeds.com/img/logo.png",
    rating: 4.6,
    reviews: 578,
    location: "Quebec, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "2010s",
    description: "Quebec-based seed bank built for Canadian hobbyists with easy-to-grow genetics suited for northern climates.",
    longDescription: "Quebec Cannabis Seeds specializes in genetics that thrive in Canada's northern climate. Based in Quebec, they understand the unique challenges Canadian growers face with shorter growing seasons. Their selection emphasizes beginner-friendly strains, autoflowers, and genetics specifically bred for outdoor success in cold climates. They offer express shipping options with free express on orders over $200.",
    affiliateUrl: "https://quebeccannabisseeds.com",
    paymentMethods: ["Credit Card", "Interac E-Transfer"],
    deliveryTime: "Regular: 3-7 days | Express: 1-2 days",
    shippingCost: "Free express shipping over $200",
    strainCount: "300+",
    specialties: ["Beginner Friendly", "Outdoor Genetics", "Northern Climate", "Free Express $200+"],
    pros: [
      "Genetics bred specifically for Canadian climates",
      "Express shipping option (1-2 days)",
      "Free express shipping on orders over $200",
      "Great for beginner growers",
      "Strong autoflower selection",
      "Ideal for short growing seasons",
      "Quebec-based with French/English support",
      "Focus on cold-resistant genetics",
    ],
    cons: [
      "Smaller selection than major seed banks",
      "Regular shipping can take up to 7 days",
      "$200 minimum for free express shipping",
      "Limited payment methods",
    ],
    criteriaRatings: {
      paymentMethods: 4.2,
      seedVariety: 4.4,
      genetics: 4.6,
      customerExperience: 4.5,
      reputation: 4.6,
    },
    accentColor: "blue",
  },
  "goback-seed-bank": {
    name: "GoBack Seed Bank",
    logo: "/images/goback-logo.png",
    rating: 4.5,
    reviews: 423,
    location: "Alberta, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "2010s",
    description: "Value-focused Canadian seed bank with competitive pricing and quality genetics for all budgets.",
    longDescription: "GoBack Seed Bank is an Alberta-based seed bank focused on providing quality genetics at competitive prices. They cater to budget-conscious growers without sacrificing seed quality. Known for their bulk order discounts and student-friendly pricing, they're a popular choice for Canadian growers looking to maximize value.",
    affiliateUrl: "https://gobackseedbank.com",
    paymentMethods: ["Interac E-Transfer", "Bitcoin", "Cash"],
    deliveryTime: "2-5 business days",
    shippingCost: "Free over $50",
    strainCount: "400+",
    specialties: ["Competitive Prices", "Bulk Orders", "Prairie Genetics", "Student Discounts"],
    pros: [
      "Excellent value for money",
      "Free shipping over $50 (lowest threshold)",
      "Bulk order discounts available",
      "Student discount programs",
      "Fast shipping (2-5 days)",
      "Accepts Bitcoin for privacy",
      "Prairie-adapted genetics",
      "Good selection at 400+ strains",
    ],
    cons: [
      "Newer than some established competitors",
      "Website could be more user-friendly",
      "Less brand recognition",
      "Limited international shipping",
    ],
    criteriaRatings: {
      paymentMethods: 4.4,
      seedVariety: 4.5,
      genetics: 4.4,
      customerExperience: 4.5,
      reputation: 4.3,
    },
    accentColor: "amber",
  },
  "seedsman": {
    name: "Seedsman",
    logo: "https://www.seedsman.com/media/logo/stores/1/seedsman-logo.png",
    rating: 4.6,
    reviews: 2847,
    location: "International",
    country: "International",
    flag: "🌍",
    established: "2003",
    description: "World's largest cannabis seed bank with over 4000+ strains and global shipping to Canada.",
    longDescription: "Seedsman is one of the world's largest and most established cannabis seed banks, operating since 2003. With over 4000 strains from 100+ breeders, they offer unparalleled selection. They ship globally including to Canada, and are known for their competitive pricing, regular promotions, and excellent customer service.",
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
    paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer", "Cash"],
    deliveryTime: "7-14 business days",
    shippingCost: "Free over $90",
    strainCount: "4000+",
    specialties: ["Huge Selection", "Autoflowering Specialists", "Global Shipping", "Breeder Partnerships"],
    pros: [
      "Massive selection with 4000+ strains",
      "Partnerships with 100+ top breeders",
      "Excellent pricing and regular deals",
      "Stealth shipping options",
      "Accepts multiple payment methods",
      "Established reputation since 2003",
      "Great customer support",
      "Frequent promotions and freebies",
    ],
    cons: [
      "International shipping takes 7-14 days",
      "Potential customs delays to Canada",
      "No guaranteed delivery to Canada",
      "Currency conversion fees may apply",
    ],
    criteriaRatings: {
      paymentMethods: 4.7,
      seedVariety: 5.0,
      genetics: 4.6,
      customerExperience: 4.5,
      reputation: 4.7,
    },
    accentColor: "purple",
  },
  "crop-king-seeds": {
    name: "Crop King Seeds",
    logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
    rating: 4.4,
    reviews: 756,
    location: "British Columbia, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "2005",
    description: "Canadian seed bank specializing in feminized and autoflowering seeds with guaranteed germination.",
    longDescription: "Crop King Seeds is a well-established Canadian seed bank based in British Columbia, operating since 2005. They're known for their germination guarantee, making them a low-risk choice for new growers. They specialize in feminized and autoflowering seeds, with genetics suited for Canadian growing conditions.",
    affiliateUrl: "https://cropkingseeds.com",
    paymentMethods: ["Interac E-Transfer", "Credit Card", "Bitcoin"],
    deliveryTime: "3-7 business days",
    shippingCost: "Free over $75",
    strainCount: "300+",
    specialties: ["Germination Guarantee", "Feminized Seeds", "Customer Support", "Beginner Friendly"],
    pros: [
      "Germination guarantee on all seeds",
      "Established Canadian company since 2005",
      "Excellent beginner-friendly strains",
      "Fast Canadian shipping",
      "Bitcoin payment bonus available",
      "Strong customer support",
      "Focus on feminized genetics",
      "No customs issues",
    ],
    cons: [
      "Smaller selection than competitors",
      "Prices slightly higher than some",
      "Website can be slow at times",
      "Limited bulk discounts",
    ],
    criteriaRatings: {
      paymentMethods: 4.5,
      seedVariety: 4.2,
      genetics: 4.4,
      customerExperience: 4.6,
      reputation: 4.5,
    },
    accentColor: "orange",
  },
}

// Sample community reviews - in production, these would come from a database
const sampleCommunityReviews = [
  {
    id: 1,
    author: "CanadianGrower420",
    location: "Ontario",
    rating: 5,
    date: "2024-02-15",
    title: "Excellent service and fast shipping!",
    content: "Ordered on Monday, received by Thursday. Seeds were packaged discreetly and all germinated perfectly. Will definitely order again.",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    author: "BCBudFan",
    location: "British Columbia",
    rating: 4,
    date: "2024-01-28",
    title: "Great genetics, minor shipping delay",
    content: "The seeds are top quality and the strains I grew turned out amazing. Shipping took a bit longer than expected (7 days) but customer service kept me informed.",
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    author: "QuebecGrows",
    location: "Quebec",
    rating: 5,
    date: "2024-01-10",
    title: "Best Canadian seed bank!",
    content: "Been ordering from them for 3 years now. Always reliable, great selection, and they throw in freebies. Highly recommend for any Canadian grower.",
    helpful: 31,
    verified: true,
  },
]

export default function SeedBankReviewPage({ params }: { params: { slug: string } }) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviewRating, setReviewRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  
  const seedBank = seedBankData[params.slug]
  
  if (!seedBank) {
    notFound()
  }

  const accentClasses = {
    red: {
      bg: "bg-red-600",
      hover: "hover:bg-red-700",
      light: "bg-red-50",
      lightHover: "hover:bg-red-100",
      text: "text-red-600",
      border: "border-red-200",
      badge: "bg-red-100 text-red-800",
      gradient: "from-red-50 to-red-100",
    },
    green: {
      bg: "bg-green-600",
      hover: "hover:bg-green-700",
      light: "bg-green-50",
      lightHover: "hover:bg-green-100",
      text: "text-green-600",
      border: "border-green-200",
      badge: "bg-green-100 text-green-800",
      gradient: "from-green-50 to-green-100",
    },
    blue: {
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      light: "bg-blue-50",
      lightHover: "hover:bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-800",
      gradient: "from-blue-50 to-blue-100",
    },
    amber: {
      bg: "bg-amber-600",
      hover: "hover:bg-amber-700",
      light: "bg-amber-50",
      lightHover: "hover:bg-amber-100",
      text: "text-amber-600",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-800",
      gradient: "from-amber-50 to-amber-100",
    },
    purple: {
      bg: "bg-purple-600",
      hover: "hover:bg-purple-700",
      light: "bg-purple-50",
      lightHover: "hover:bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
      badge: "bg-purple-100 text-purple-800",
      gradient: "from-purple-50 to-purple-100",
    },
    orange: {
      bg: "bg-orange-600",
      hover: "hover:bg-orange-700",
      light: "bg-orange-50",
      lightHover: "hover:bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
      badge: "bg-orange-100 text-orange-800",
      gradient: "from-orange-50 to-orange-100",
    },
  }

  const colors = accentClasses[seedBank.accentColor as keyof typeof accentClasses] || accentClasses.red

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${colors.gradient} py-16`}>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className={`mb-4 ${colors.badge}`}>
              {seedBank.flag} {seedBank.country} Seed Bank Review
            </Badge>
            
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center p-4">
                <img
                  src={seedBank.logo}
                  alt={`${seedBank.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{seedBank.name} Review</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              {seedBank.description}
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(seedBank.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{seedBank.rating}/5</span>
              <span className="text-gray-600">({seedBank.reviews} reviews)</span>
            </div>

            <Button asChild size="lg" className={`${colors.bg} ${colors.hover} mr-4`}>
              <a href={seedBank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit {seedBank.name}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className={`w-8 h-8 ${colors.text} mx-auto mb-2`} />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-gray-600">{seedBank.location}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Package className={`w-8 h-8 ${colors.text} mx-auto mb-2`} />
              <h3 className="font-semibold mb-1">Strains</h3>
              <p className="text-sm text-gray-600">{seedBank.strainCount} varieties</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className={`w-8 h-8 ${colors.text} mx-auto mb-2`} />
              <h3 className="font-semibold mb-1">Shipping</h3>
              <p className="text-sm text-gray-600">{seedBank.deliveryTime}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className={`w-8 h-8 ${colors.text} mx-auto mb-2`} />
              <h3 className="font-semibold mb-1">Established</h3>
              <p className="text-sm text-gray-600">Since {seedBank.established}</p>
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>About {seedBank.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">{seedBank.longDescription}</p>
          </CardContent>
        </Card>

        {/* Detailed Review Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Review Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(seedBank.criteriaRatings).map(([key, rating]) => {
              const titles: Record<string, string> = {
                paymentMethods: "Payment Methods",
                seedVariety: "Seed Variety",
                genetics: "Trustworthy Genetics",
                customerExperience: "Customer Experience",
                reputation: "Reputation",
              }

              const icons: Record<string, typeof CreditCard> = {
                paymentMethods: CreditCard,
                seedVariety: Package,
                genetics: Shield,
                customerExperience: Users,
                reputation: Award,
              }

              const Icon = icons[key]

              return (
                <Card key={key}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-lg">{titles[key]}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{rating}/5</span>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Pros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {seedBank.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Cons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {seedBank.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className={`w-5 h-5 ${colors.text}`} />
              Payment Methods Accepted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {seedBank.paymentMethods.map((method) => (
                <div key={method} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{method}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Reviews Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <MessageSquare className={`w-8 h-8 ${colors.text}`} />
              Community Reviews
            </h2>
            <Button 
              onClick={() => setShowReviewForm(!showReviewForm)}
              className={`${colors.bg} ${colors.hover}`}
            >
              Write a Review
            </Button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <Card className={`mb-8 ${colors.border}`}>
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name (or Alias)</Label>
                      <Input id="name" placeholder="e.g., CanadianGrower123" />
                    </div>
                    <div>
                      <Label htmlFor="location">Location (Province)</Label>
                      <Input id="location" placeholder="e.g., Ontario" />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Your Rating</Label>
                    <div className="flex items-center gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoverRating || reviewRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {reviewRating > 0 && `${reviewRating}/5`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title">Review Title</Label>
                    <Input id="title" placeholder="Summarize your experience" />
                  </div>

                  <div>
                    <Label htmlFor="review">Your Review</Label>
                    <Textarea 
                      id="review" 
                      placeholder="Share details about your experience - shipping time, seed quality, customer service, etc."
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className={`${colors.bg} ${colors.hover}`}>
                      Submit Review
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setShowReviewForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Existing Reviews */}
          <div className="space-y-6">
            {sampleCommunityReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.author}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified Purchase
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(review.date).toLocaleDateString('en-CA', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-2">{review.title}</h4>
                  <p className="text-gray-600 mb-4">{review.content}</p>
                  
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      Helpful ({review.helpful})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Verdict */}
        <Card className={`bg-gradient-to-br ${colors.gradient} ${colors.border}`}>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Final Verdict</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(seedBank.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{seedBank.rating}/5</span>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              {seedBank.name} is a {seedBank.rating >= 4.5 ? "highly recommended" : "solid"} choice for Canadian cannabis growers. 
              {seedBank.country === "Canada" 
                ? " As a domestic seed bank, you'll enjoy fast shipping and no customs concerns."
                : " While international shipping takes longer, their selection and reputation make them worth considering."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className={`${colors.bg} ${colors.hover}`}>
                <a href={seedBank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit {seedBank.name}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/seed-banks">Compare All Seed Banks</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
