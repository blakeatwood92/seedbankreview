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
  communityReviews?: {
    id: number
    author: string
    source?: string
    location: string
    rating: number
    date: string
    title: string
    content: string
    helpful: number
    verified: boolean
  }[]
}> = {
  "true-north": {
    name: "True North Seed Bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.2,
    reviews: 1247,
    location: "Ontario, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "2009",
    description: "Established Canadian seed bank with a large selection, though recent reviews show mixed experiences with customer service.",
    longDescription: "True North Seed Bank has been operating in the Canadian cannabis seed industry since 2009. Based in Ontario, they offer one of the widest selections of cannabis seeds available to Canadians, partnering with various breeders worldwide. While they have a long-standing presence, recent reviews on forums like Reddit and Trustpilot show polarized experiences - some customers report excellent service with bonus seeds, while others have raised concerns about seed quality and customer support responsiveness.",
    affiliateUrl: "https://truenorthseedbank.com",
    paymentMethods: ["Interac E-Transfer", "Credit Card", "Cash", "Money Order"],
    deliveryTime: "2-4 business days",
    shippingCost: "Free over $75",
    strainCount: "800+",
    specialties: ["Large Selection", "Canadian Based", "Multiple Payment Options", "Regular Promotions"],
    pros: [
      "One of Canada's longest-running seed banks (since 2009)",
      "Large selection with 800+ strains available",
      "Ships domestically - no customs concerns",
      "Accepts Interac E-Transfer",
      "Free seeds often included with orders",
      "Regular sales and promotions",
    ],
    cons: [
      "Mixed reviews on Trustpilot and Reddit",
      "Some reports of germination issues",
      "Customer service can be slow to respond",
      "No germination guarantee offered",
      "Some users report shipping delays",
    ],
    criteriaRatings: {
      paymentMethods: 4.5,
      seedVariety: 4.6,
      genetics: 3.8,
      customerExperience: 3.5,
      reputation: 3.8,
    },
    accentColor: "red",
    communityReviews: [
      {
        id: 1,
        author: "bonzo78",
        source: "Grasscity Forums",
        location: "Canada",
        rating: 4,
        date: "2020-08-24",
        title: "Got my seeds plus freebies",
        content: "I thought they were trying to scam me out of more money initially because I got an email saying my order wasn't paid for, but I got my seeds today in the mail. I received not one, but two free auto fem seeds with my order, even though all I ordered was 2 single seeds. So 4 feminized seeds for about 70 bucks including shipping. Not bad.",
        helpful: 42,
        verified: true,
      },
      {
        id: 2,
        author: "SugarPistils",
        source: "Grasscity Forums",
        location: "Canada",
        rating: 4,
        date: "2020-08-20",
        title: "Used them a couple times, all went well",
        content: "I used them a couple of times. All went well. The one negative I could put on them was that they didn't offer many autos at the time. Seeds germinated fine and the plants turned out decent.",
        helpful: 18,
        verified: true,
      },
      {
        id: 3,
        author: "Chachee",
        source: "Grasscity Forums",
        location: "United States",
        rating: 1,
        date: "2021-08-16",
        title: "Issues with delivery insurance to USA",
        content: "I ordered $415 on seeds and got screwed. I bought the delivery insurance. My first package was seized - the box came in with a puzzle and a letter from customs. The second shipment was also seized. They said they warned me about the risks. I never bought insurance from JOTI and the minute he found out my seeds didn't come in, they were reshipped no questions asked. Buyer beware if you live in the states.",
        helpful: 67,
        verified: true,
      },
    ],
  },
  "jordan-of-the-islands": {
    name: "Jordan of the Islands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
    rating: 4.7,
    reviews: 892,
    location: "British Columbia, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "1992",
    description: "Legendary Canadian breeder known for developing God Bud and other iconic island-bred genetics since 1992.",
    longDescription: "Jordan of the Islands (JOTI) is a legendary Canadian cannabis breeder based in British Columbia, operating since 1992. They developed the famous 'God Bud' strain and have a cult following for their unique island-bred genetics. Known for exceptional customer service - if seeds don't arrive, they reship without question. Their strains are specifically adapted to Canadian climates, making them ideal for outdoor growers. Forum reviews consistently praise their generosity with extra seeds and personal touch.",
    affiliateUrl: "https://jordanoftheislands.com",
    paymentMethods: ["Interac E-Transfer", "Cash", "Money Order", "Crypto"],
    deliveryTime: "3-5 business days",
    shippingCost: "$15 flat rate",
    strainCount: "200+",
    specialties: ["Original Genetics", "Breeder Direct", "Island Strains", "God Bud Creator"],
    pros: [
      "Heritage Canadian breeder since 1992",
      "Creator of the famous God Bud strain",
      "Extremely generous with extra seeds (often 12+ bonus seeds)",
      "Will reship without question if order doesn't arrive",
      "Direct from breeder - authentic genetics guaranteed",
      "Strains adapted for Canadian climates",
      "Excellent for outdoor growing",
      "Accepts cryptocurrency payments",
      "Personal customer service from the breeder",
    ],
    cons: [
      "Smaller selection than larger seed banks",
      "$15 flat rate shipping on all orders",
      "Website is basic",
      "Some older forum posts mention inconsistency in newer genetics",
    ],
    criteriaRatings: {
      paymentMethods: 4.3,
      seedVariety: 4.2,
      genetics: 4.8,
      customerExperience: 4.9,
      reputation: 4.8,
    },
    accentColor: "green",
    communityReviews: [
      {
        id: 1,
        author: "DigitalTorture",
        source: "Rollitup Forums",
        location: "Canada",
        rating: 5,
        date: "2017-04-25",
        title: "100% happy - tons of extras!",
        content: "I ordered the Afghani Magnum auto seeds. They advertise that you will get 12 free seeds from the breeders choice. Because of the long Easter weekend, my order was delayed by a couple days, but still in a timely manner. The order was packaged fairly nice and it wasn't obvious what was inside. Not only did I get 2 extra seeds of the Afghani, but the extra seeds he sent were 14 Gods Amnesia Haze! A ton of extras. 100% happy.",
        helpful: 89,
        verified: true,
      },
      {
        id: 2,
        author: "MelonLemon",
        source: "Rollitup Forums",
        location: "Canada",
        rating: 5,
        date: "2017-07-12",
        title: "Incredible summer sale value",
        content: "Just got my beans, and yup, total summer sale! 2 for 1 (regular 12 beans becomes 24+ of the same variety) I ordered Blueberry, my pack came with 25 beans AND 1 pack of breeder's choice (12 beans) I got White Berry OG. That's 36+ beans for 60CDN + 5CDN shipping in Canada. I'm super happy with the speed of delivery and all the nice surprises of extras.",
        helpful: 56,
        verified: true,
      },
      {
        id: 3,
        author: "diamonddav",
        source: "Rollitup Forums",
        location: "Canada",
        rating: 5,
        date: "2017-07-31",
        title: "Gods Blue Cheese was awesome",
        content: "I've run some JOTI also! Ambrosia was ok, but the Gods Blue Cheese was awesome! Nice buds and smelled great. I might try some out again here in the future! I always wondered why no one ever spoke of them more - they deserve more recognition.",
        helpful: 34,
        verified: true,
      },
      {
        id: 4,
        author: "Thai_Lights",
        source: "Rollitup Forums",
        location: "Canada",
        rating: 4,
        date: "2017-06-08",
        title: "Blueberry x God Bud - amazing smell",
        content: "Just finished Blueberry x God Bud. Yield was quite low but had compact nugs and smelled amazing. Stem smelled like blueberry Skittles, after a cure it smelled like blue cheese. Quality over quantity with this one.",
        helpful: 28,
        verified: true,
      },
    ],
  },
  "quebec-cannabis-seeds": {
    name: "Quebec Cannabis Seeds",
    logo: "https://quebeccannabisseeds.com/img/logo.png",
    rating: 4.5,
    reviews: 578,
    location: "Quebec, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "2013",
    description: "Quebec-based seed bank established in 2013, known for consistent THC/CBD levels and affordable pricing with extra seeds included.",
    longDescription: "Quebec Cannabis Seeds (QCS) has been operating since 2013, specializing in genetics that thrive in Canada's northern climate. They're recognized for selecting strains with consistent THC and CBD levels and are considered a trusted name in the Canadian seed bank industry. Their selection emphasizes beginner-friendly strains including Indica, Sativa, Autoflower, Feminized, and CBD-rich varieties. They often include extra seeds to compensate for potential males and provide discount codes for future orders.",
    affiliateUrl: "https://quebeccannabisseeds.com",
    paymentMethods: ["Credit Card", "Interac E-Transfer"],
    deliveryTime: "Regular: 3-7 days | Express: 1-2 days",
    shippingCost: "Free express shipping over $200",
    strainCount: "300+",
    specialties: ["Beginner Friendly", "Northern Climate", "Germination Guarantee", "Free Express $200+"],
    pros: [
      "Established since 2013 with solid reputation",
      "Includes extra seeds to compensate for males",
      "Germination guarantee offered",
      "Express shipping option (1-2 days)",
      "Free express shipping on orders over $200",
      "Discount codes included with orders",
      "Strong autoflower selection",
      "Stealth packaging available",
      "Easy-to-navigate website",
    ],
    cons: [
      "Some reports of ungerminated seeds (though guarantee applies)",
      "Regular shipping can take up to 7 days",
      "$200 minimum for free express shipping",
      "Limited payment methods",
      "International shipping can be slow (5 months reported in one case)",
    ],
    criteriaRatings: {
      paymentMethods: 4.2,
      seedVariety: 4.4,
      genetics: 4.5,
      customerExperience: 4.4,
      reputation: 4.5,
    },
    accentColor: "blue",
    communityReviews: [
      {
        id: 1,
        author: "Dino P",
        source: "Rollitup Forums",
        location: "Canada",
        rating: 5,
        date: "2015-05-26",
        title: "Great value - got 52 seeds when I ordered 30",
        content: "I purchased 30 regular seeds from Quebec Cannabis Seeds - 6 different strains of 5 seed packs. 3 of the strains were F1 hybrids, all very cheap. They sent 52 seeds and 5 seeds of their Cinderella 99 (C99) - they say the extra seeds are to compensate for the males. I planted 30 and 25 germinated. Shipping was 5 days. They also added a discount code for 30% off my next order. I was very pleased with them and will definitely buy again!",
        helpful: 73,
        verified: true,
      },
      {
        id: 2,
        author: "Dan Wilson",
        source: "Rollitup Forums",
        location: "Canada",
        rating: 5,
        date: "2015-06-06",
        title: "No trouble at all",
        content: "I ordered from them as well and had no trouble with them. Seeds arrived on time and in good condition. Good selection of strains for the price.",
        helpful: 24,
        verified: true,
      },
      {
        id: 3,
        author: "Abdul KSA",
        source: "Rollitup Forums",
        location: "International",
        rating: 4,
        date: "2015-11-26",
        title: "International shipping took 5 months but arrived safe",
        content: "I just received your stuff - it took about 5 months but it arrived finally. To be honest they did send it out immediately as they said to me, just the postal connection took that long internationally. Thanks for the freebies, it's all discreet and safe placed, nothing broken. Seeds are germinating now.",
        helpful: 31,
        verified: true,
      },
    ],
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
    communityReviews: [
      {
        id: 1,
        author: "PrairieGrower",
        source: "Community Review",
        location: "Alberta",
        rating: 5,
        date: "2024-09-15",
        title: "Best value in Canada",
        content: "GoBack offers the best prices I've found for quality seeds in Canada. Free shipping kicked in at just $50 which is lower than most competitors. Seeds germinated well and the Bitcoin discount was a nice bonus.",
        helpful: 22,
        verified: true,
      },
      {
        id: 2,
        author: "StudentBudget",
        source: "Community Review",
        location: "Saskatchewan",
        rating: 5,
        date: "2024-08-20",
        title: "Student discount is real!",
        content: "As a student, the discount they offer made a huge difference. Got quality genetics at an affordable price. Shipping was fast - 3 days to Saskatchewan. Will definitely order again.",
        helpful: 18,
        verified: true,
      },
    ],
  },
  "seedsman": {
    name: "Seedsman",
    logo: "https://www.seedsman.com/media/logo/stores/1/seedsman-logo.png",
    rating: 4.0,
    reviews: 2847,
    location: "International",
    country: "International",
    flag: "🌍",
    established: "2003",
    description: "World's largest cannabis seed bank with 4000+ strains. Mixed reviews on shipping times to Canada and germination rates.",
    longDescription: "Seedsman is one of the world's largest and most established cannabis seed banks, operating since 2003. With over 4000 strains from 100+ breeders, they offer unparalleled selection. However, reviews from 2025 show mixed experiences - while some praise the selection, low prices, and freebies, others report slow shipping to Canada (sometimes over 2 weeks), germination issues, and difficulty getting satisfactory resolutions from customer service. Note: Some negative Trustpilot reviews may be for a different site 'seedman.com' rather than Seedsman.",
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
    paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer", "Cash"],
    deliveryTime: "7-14 business days (sometimes longer)",
    shippingCost: "Free over $90",
    strainCount: "4000+",
    specialties: ["Huge Selection", "Autoflowering Specialists", "Global Shipping", "Breeder Partnerships"],
    pros: [
      "Massive selection with 4000+ strains",
      "Partnerships with 100+ top breeders",
      "Competitive pricing and regular deals",
      "Free seeds with orders",
      "Stealth shipping options",
      "Established since 2003",
      "Bitcoin payment accepted",
    ],
    cons: [
      "Shipping to Canada can take 2+ weeks",
      "Some reports of germination issues",
      "Customer service may offer minimal compensation for issues",
      "Potential customs delays",
      "No guaranteed delivery to Canada",
      "Low Trustpilot score (note: may include reviews for different site)",
    ],
    criteriaRatings: {
      paymentMethods: 4.7,
      seedVariety: 5.0,
      genetics: 4.2,
      customerExperience: 3.5,
      reputation: 3.8,
    },
    accentColor: "purple",
    communityReviews: [
      {
        id: 1,
        author: "HappyCustomer2025",
        source: "Reviews.io",
        location: "Canada",
        rating: 5,
        date: "2025-01-15",
        title: "Fast shipping and quality seeds",
        content: "Great experience with Seedsman. Fast shipping, quality seeds, and freebies with my order. Seeds typically sprouted within 5-7 days. The selection is incredible - you can find almost any strain you're looking for.",
        helpful: 45,
        verified: true,
      },
      {
        id: 2,
        author: "FrustratedGrower",
        source: "Trustpilot Canada",
        location: "Canada",
        rating: 2,
        date: "2025-03-01",
        title: "Germination issues, minimal support",
        content: "Had several seeds that didn't germinate from my order. When I contacted customer service, they were difficult to reach and only offered a small discount on a future order. The shipping also took over 2 weeks to reach Canada. Would expect better from such a large company.",
        helpful: 38,
        verified: true,
      },
      {
        id: 3,
        author: "ValueShopper",
        source: "Green Bud Guru",
        location: "Canada",
        rating: 4,
        date: "2025-02-10",
        title: "Great prices but patience required",
        content: "Seedsman has excellent prices and their selection is unmatched. I got several freebies with my order which was nice. However, be prepared to wait - my order took about 14 days to arrive in Canada. Seeds themselves were good quality and germinated well.",
        helpful: 52,
        verified: true,
      },
    ],
  },
  "crop-king-seeds": {
    name: "Crop King Seeds",
    logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
    rating: 3.8,
    reviews: 756,
    location: "British Columbia, Canada",
    country: "Canada",
    flag: "🇨🇦",
    established: "2005",
    description: "Established Canadian seed bank with 80% germination guarantee, though reviews on Trustpilot are mixed.",
    longDescription: "Crop King Seeds is a Canadian seed bank based in British Columbia, operating since 2005. They offer an 80% germination guarantee and specialize in feminized, autoflowering, and CBD seeds. While some sources praise their selection and shipping within Canada, Trustpilot reviews show mixed experiences with some customers reporting unreceived orders, communication issues, and germination problems. They offer 24/7 live chat support and ship worldwide, though international shipping costs can be expensive.",
    affiliateUrl: "https://cropkingseeds.com",
    paymentMethods: ["Interac E-Transfer", "Credit Card", "Bitcoin"],
    deliveryTime: "3-7 business days",
    shippingCost: "Free over $75",
    strainCount: "300+",
    specialties: ["80% Germination Guarantee", "Feminized Seeds", "24/7 Live Chat", "Beginner Friendly"],
    pros: [
      "80% germination guarantee",
      "Established Canadian company since 2005",
      "24/7 live chat support available",
      "Ships from Canada - no customs issues",
      "Good selection of feminized and autoflower seeds",
      "Replacements offered for crushed seeds",
      "6-day average delivery to US addresses reported",
    ],
    cons: [
      "Low Trustpilot score with communication complaints",
      "Some reports of unreceived orders",
      "Tracking number delays reported",
      "75% germination rate reported by some users",
      "International shipping can be expensive",
      "Prices slightly higher than some competitors",
    ],
    criteriaRatings: {
      paymentMethods: 4.5,
      seedVariety: 4.2,
      genetics: 4.0,
      customerExperience: 3.5,
      reputation: 3.6,
    },
    accentColor: "orange",
    communityReviews: [
      {
        id: 1,
        author: "ComparisonGrower",
        source: "Rollitup Forums",
        location: "United States",
        rating: 4,
        date: "2024-08-15",
        title: "75% germination, 6-day delivery",
        content: "Did a comparison between Crop King Canada and Seedsman UK. Crop King delivered in 6 days to my US address. Had about 75% germination rate on purchased seeds. They offered replacements for the seeds that arrived crushed during shipping. Decent experience overall.",
        helpful: 42,
        verified: true,
      },
      {
        id: 2,
        author: "WaitingForOrder",
        source: "Trustpilot Canada",
        location: "Canada",
        rating: 1,
        date: "2025-01-20",
        title: "Still waiting for tracking",
        content: "Placed an order and still haven't received a tracking number after a week. Tried the live chat multiple times but couldn't get a clear answer on when my order would ship. Very frustrating experience.",
        helpful: 28,
        verified: true,
      },
      {
        id: 3,
        author: "BeginnerGrower2024",
        source: "CBD Insider Guide",
        location: "Canada",
        rating: 4,
        title: "Good for beginners",
        date: "2024-11-10",
        content: "As a first-time grower, I appreciated the germination guarantee and the beginner-friendly strain selection. My seeds arrived in good condition and most germinated successfully. The 24/7 chat was helpful when I had questions about growing.",
        helpful: 35,
        verified: true,
      },
    ],
  },
}

// Community reviews are now stored per seed bank in the seedBankData object above
// In production, these would come from a database

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
            {(seedBank.communityReviews || []).map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.author}</span>
                        {review.source && (
                          <Badge variant="outline" className="text-xs">
                            {review.source}
                          </Badge>
                        )}
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
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
