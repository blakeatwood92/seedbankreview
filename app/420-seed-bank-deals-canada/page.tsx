"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tag,
  ExternalLink,
  CheckCircle,
  Calendar,
  Copy,
  Leaf,
  Sprout,
  Sun,
  Users,
  ArrowRight,
  Clock,
  ShieldCheck,
  MapPin,
  Send,
  Percent,
} from "lucide-react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Easy to update deals array - just add/remove/edit deals here
const deals = [
  {
    id: 1,
    seedBank: "Herbies Seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    description: "International seed bank with 7-day shipping to Canada and delivery guarantee.",
    offer: "Up to 40% Off + Free Seeds",
    promoCode: null,
    startDate: "April 15, 2026",
    endDate: "April 25, 2026",
    shipsToCanada: true,
    category: ["best-overall", "autoflower", "beginner"],
    url: "https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639",
    featured: true,
  },
  {
    id: 2,
    seedBank: "Quebec Cannabis Seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
    description: "Quebec-based seed bank with fast 3 business day shipping across Canada.",
    offer: "20% Off All Seeds",
    promoCode: "420CANADA",
    startDate: "April 18, 2026",
    endDate: "April 22, 2026",
    shipsToCanada: true,
    category: ["best-overall", "outdoor", "beginner"],
    url: "https://quebeccannabisseeds.com",
    featured: true,
  },
  {
    id: 3,
    seedBank: "True North Seed Bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    description: "Established Canadian seed bank since 2009 with 800+ strains.",
    offer: "Buy 2 Get 1 Free on Select Strains",
    promoCode: null,
    startDate: "April 15, 2026",
    endDate: "April 30, 2026",
    shipsToCanada: true,
    category: ["best-overall", "autoflower"],
    url: "https://truenorthseedbank.com",
    featured: false,
  },
  {
    id: 4,
    seedBank: "Seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    description: "World's largest seed bank with 4000+ strains and stealth shipping.",
    offer: "25% Off Sitewide + Free Gifts",
    promoCode: "420DEALS",
    startDate: "April 10, 2026",
    endDate: "April 25, 2026",
    shipsToCanada: true,
    category: ["best-overall", "outdoor"],
    url: "https://www.seedsman.com",
    featured: false,
  },
  {
    id: 5,
    seedBank: "Highly Stoned Seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cd25f659-37f1-4d5f-a1ee-8d23a1ee1939-7h9cWtPaa76zf6bfJ0qd3DfgRBZOeZ.jpeg",
    description: "Nova Scotia-based seed bank with exclusive in-house genetics.",
    offer: "15% Off + Free Shipping",
    promoCode: "420NS",
    startDate: "April 19, 2026",
    endDate: "April 21, 2026",
    shipsToCanada: true,
    category: ["autoflower", "beginner"],
    url: "https://highlystonedseeds.com",
    featured: false,
  },
  {
    id: 6,
    seedBank: "Seeds Online",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsonline-logohq-1xFBylCeFT6DzT0x5mdcnxvDXFSiSH.png",
    description: "Canadian seed bank offering affordable single seeds with free extras.",
    offer: "Buy Any 5 Seeds, Get 2 Free",
    promoCode: null,
    startDate: "April 15, 2026",
    endDate: "April 22, 2026",
    shipsToCanada: true,
    category: ["beginner", "outdoor"],
    url: "https://seedsonline.ca",
    featured: false,
  },
]

const categories = [
  {
    id: "best-overall",
    title: "Best Overall Deals",
    description: "Top picks with the biggest discounts",
    icon: Tag,
    color: "green",
  },
  {
    id: "autoflower",
    title: "Autoflower Deals",
    description: "Fast-finishing genetics on sale",
    icon: Clock,
    color: "purple",
  },
  {
    id: "outdoor",
    title: "Outdoor Grow Deals",
    description: "Canada-friendly outdoor strains",
    icon: Sun,
    color: "amber",
  },
  {
    id: "beginner",
    title: "Beginner-Friendly Deals",
    description: "Easy to grow strains at great prices",
    icon: Sprout,
    color: "teal",
  },
]

const faqs = [
  {
    question: "When do 420 seed deals start?",
    answer: "Most seed banks start their 420 promotions between April 10-15 and run through April 25-30. The biggest discounts are typically available on April 20th itself. We recommend checking back regularly as new deals are added throughout the month.",
  },
  {
    question: "Do these seed banks ship to Canada?",
    answer: "Yes, all seed banks featured on this page ship to Canada. Canadian-based seed banks like Quebec Cannabis Seeds and True North Seed Bank offer the fastest domestic shipping (2-5 days), while international banks like Herbies typically deliver within 7-12 days.",
  },
  {
    question: "Are these deals updated regularly?",
    answer: "Yes, we update this page throughout the 420 season as new deals become available. The 'Last Updated' date at the top of the page shows when we last verified these offers. Bookmark this page and check back for the latest promotions.",
  },
  {
    question: "What are the best 420 deals for beginners?",
    answer: "For beginners, we recommend looking at autoflower deals from Quebec Cannabis Seeds or Seeds Online. These strains are easier to grow and more forgiving of mistakes. Look for deals that include free seeds so you have extras to practice with.",
  },
  {
    question: "Do I need a promo code to get these deals?",
    answer: "Some deals require a promo code at checkout, while others are applied automatically. We clearly indicate which deals need a code and provide a copy button for easy use. If a deal says 'No code needed,' the discount will be applied automatically.",
  },
  {
    question: "Are 420 deals available year-round?",
    answer: "420 deals are specific to the April cannabis celebration period. However, many seed banks offer promotions throughout the year during events like Black Friday, Christmas, and their anniversary sales. Check our main seed bank pages for current ongoing offers.",
  },
]

const internalLinks = [
  { title: "Top Seed Banks", href: "/seed-banks", description: "Compare all ranked seed banks" },
  { title: "Cannabis Breeders", href: "/top-cannabis-breeders-canada", description: "Learn about top breeders" },
  { title: "Growing Guides", href: "/guides", description: "Tips for Canadian growers" },
  { title: "Free Seeds Program", href: "/free-seeds-canada", description: "Apply for free test seeds" },
]

export default function Page420DealsCanada() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const filteredDeals = selectedCategory
    ? deals.filter((deal) => deal.category.includes(selectedCategory))
    : deals

  const featuredDeals = deals.filter((deal) => deal.featured)

  return (
    <>
      <head>
        <title>420 Seed Bank Deals Canada (2026) | Canada Seed Bank Reviews</title>
        <meta
          name="description"
          content="Find the best 420 cannabis seed deals in Canada. Updated list of discounts, promo codes, and offers from trusted seed banks that ship to Canada."
        />
        <meta
          name="keywords"
          content="420 seed deals Canada, cannabis seed deals Canada, seed bank promo codes, 420 discounts cannabis seeds, cannabis seed sales Canada"
        />
      </head>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
          <div className="container px-4 mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              420 Deals 2026
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Best 420 Seed Bank Deals in Canada (2026)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Looking for the best cannabis seed deals this 420? We&apos;ve rounded up current discounts, 
              promo codes, and offers from trusted seed banks that ship to Canada.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              <Calendar className="w-4 h-4 inline mr-1" />
              Last Updated: April 10, 2026
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() =>
                document.getElementById("deals-section")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Tag className="w-5 h-5 mr-2" />
              View Deals
            </Button>
          </div>
        </section>

        {/* Featured Deals Section */}
        <section id="deals-section" className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 border-amber-500 text-amber-700">
                Featured
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Top 420 Deals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our top picks for the best 420 cannabis seed deals available to Canadian growers right now.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {featuredDeals.map((deal) => (
                <Card key={deal.id} className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={deal.logo}
                          alt={`${deal.seedBank} logo`}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                        />
                        <div>
                          <CardTitle className="text-lg">{deal.seedBank}</CardTitle>
                          {deal.shipsToCanada && (
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              <MapPin className="w-3 h-3 mr-1" />
                              Ships to Canada
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Badge className="bg-amber-500 text-white">Featured</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                    <div className="bg-white rounded-lg p-4 mb-4 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Percent className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-lg text-green-700">{deal.offer}</span>
                      </div>
                      {deal.promoCode && (
                        <div className="flex items-center gap-2">
                          <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                            {deal.promoCode}
                          </code>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyPromoCode(deal.promoCode!)}
                            className="text-xs"
                          >
                            {copiedCode === deal.promoCode ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      )}
                      {!deal.promoCode && (
                        <p className="text-xs text-gray-500">No code needed - applied automatically</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {deal.startDate} - {deal.endDate}
                      </span>
                    </div>
                    <a href={deal.url} target="_blank" rel="noopener noreferrer sponsored">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        View Deal
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* All Deals */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">All 420 Deals</h3>
              <p className="text-gray-600 mb-6">
                Browse all available deals or filter by category
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  All Deals
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {cat.title}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredDeals.map((deal) => (
                <Card key={deal.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={deal.logo}
                        alt={`${deal.seedBank} logo`}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      />
                      <div>
                        <CardTitle className="text-base">{deal.seedBank}</CardTitle>
                        {deal.shipsToCanada && (
                          <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600">
                            Ships to Canada
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{deal.description}</p>
                    <div className="bg-green-50 rounded-lg p-3 mb-3">
                      <p className="font-semibold text-green-700">{deal.offer}</p>
                      {deal.promoCode && (
                        <div className="flex items-center gap-2 mt-2">
                          <code className="bg-white px-2 py-1 rounded text-xs font-mono border">
                            {deal.promoCode}
                          </code>
                          <button
                            onClick={() => copyPromoCode(deal.promoCode!)}
                            className="text-xs text-green-600 hover:text-green-700"
                          >
                            {copiedCode === deal.promoCode ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {deal.startDate} - {deal.endDate}
                    </p>
                    <a href={deal.url} target="_blank" rel="noopener noreferrer sponsored">
                      <Button variant="outline" className="w-full">
                        View Deal
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust These Deals */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6">Why Trust These Deals</h2>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Verified Seed Banks</h3>
                    <p className="text-gray-600 text-sm">
                      We only feature seed banks we have personally tested or verified through community feedback.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Canadian Shipping Focus</h3>
                    <p className="text-gray-600 text-sm">
                      Every seed bank listed ships to Canada with reliable delivery and stealth packaging.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Updated Regularly</h3>
                    <p className="text-gray-600 text-sm">
                      We check and update deals throughout the 420 season to ensure accuracy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Community Backed</h3>
                    <p className="text-gray-600 text-sm">
                      Our recommendations are based on real grower experiences and community feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Deals by Category</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find the perfect 420 deal based on your growing style and experience level.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {categories.map((category) => {
                const colorClasses = {
                  green: "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:border-green-300",
                  purple: "border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 hover:border-purple-300",
                  amber: "border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 hover:border-amber-300",
                  teal: "border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 hover:border-teal-300",
                }
                const iconColorClasses = {
                  green: "bg-green-100 text-green-600",
                  purple: "bg-purple-100 text-purple-600",
                  amber: "bg-amber-100 text-amber-600",
                  teal: "bg-teal-100 text-teal-600",
                }
                const dealCount = deals.filter((d) => d.category.includes(category.id)).length
                return (
                  <Card
                    key={category.id}
                    className={`border-2 cursor-pointer transition-all ${colorClasses[category.color as keyof typeof colorClasses]}`}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      document.getElementById("deals-section")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`}
                      >
                        <category.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                      <Badge variant="secondary">{dealCount} deals</Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Explore More</h2>
              <p className="text-gray-600">More resources for Canadian cannabis growers</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Card className="h-full hover:shadow-md transition-shadow hover:border-green-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-1">{link.title}</h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                      <ArrowRight className="w-4 h-4 text-green-600 mt-2" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Submit a Deal Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8 text-center">
                  <Send className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Are You a Seed Bank?</h2>
                  <p className="text-gray-600 mb-6">
                    Want to feature your 420 promotion on this page? We work with trusted seed banks 
                    that ship to Canada. Get in touch to have your deal listed.
                  </p>
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Submit Your Deal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Common questions about 420 seed deals in Canada</p>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="container px-4 mx-auto text-center">
            <Leaf className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don&apos;t Miss 420 Deals</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              420 is the best time of year to stock up on seeds. Check back regularly as new deals are added.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-700 hover:bg-gray-100"
              onClick={() =>
                document.getElementById("deals-section")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Tag className="w-5 h-5 mr-2" />
              View All Deals
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
