import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
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
  Leaf,
  Snowflake,
  Clock,
  Gift,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Butterbean Birdseed Review 2025 | Canadian Cannabis Seed Breeder",
  description:
    "Butterbean Birdseed review - Canadian autoflower seed breeder specializing in fast finishing strains for northern climates. Ships within Canada with no customs risk.",
  keywords:
    "Butterbean Birdseed, Canadian cannabis seed breeder, Canadian autoflower seeds, buy cannabis seeds Canada, autoflower seeds Canada, northern climate cannabis",
}

export default function ButterbeanBirdseedReviewPage() {
  const overallRating = 4.5
  const criteriaRatings = {
    genetics: 4.6,
    seedVariety: 4.4,
    customerExperience: 4.7,
    shipping: 4.8,
    reputation: 4.3,
  }

  const pros = [
    "Canadian breeder - ships within Canada",
    "No customs risk or international delays",
    "Specializes in autoflower genetics for northern climates",
    "Fast finishing strains (70-90 days)",
    "Large selection of unique autoflower crosses",
    "Direct communication with the breeder",
    "Accepts e-transfer and cash",
    "Orders often include free seeds and promotional items",
    "Genetics designed for outdoor Canadian growing seasons",
  ]

  const cons = [
    "Smaller operation compared to large seed banks",
    "Limited payment options (no credit card)",
    "Newer breeder with less established reputation",
    "Stock availability may vary",
  ]

  const featuredStrains = [
    {
      name: "Mac N Cheese Auto",
      type: "Autoflower",
      genetics: "MAC x Cheese",
      flowerTime: "70-80 days",
      description: "Creamy, cheesy terpenes with relaxing effects. Great for Canadian outdoor grows.",
    },
    {
      name: "Banana Runtz Auto",
      type: "Autoflower",
      genetics: "Banana x Runtz",
      flowerTime: "75-85 days",
      description: "Sweet banana and candy flavors with potent effects. Compact plants with dense buds.",
    },
    {
      name: "Northern Skunk Auto",
      type: "Autoflower",
      genetics: "Northern Lights x Skunk",
      flowerTime: "70-80 days",
      description: "Classic Canadian genetics bred for cold resistance. Reliable and easy to grow.",
    },
    {
      name: "Grape Gorilla Auto",
      type: "Autoflower",
      genetics: "Grape x Gorilla Glue",
      flowerTime: "75-85 days",
      description: "Fruity grape aroma with heavy resin production. Perfect for extraction.",
    },
    {
      name: "Sunny D Auto",
      type: "Autoflower",
      genetics: "Orange x Diesel",
      flowerTime: "70-80 days",
      description: "Citrus burst with energizing effects. Great daytime strain for Canadian summers.",
    },
  ]

  const faqs = [
    {
      question: "Is Butterbean Birdseed a Canadian breeder?",
      answer:
        "Yes, Butterbean Birdseed is a Canadian cannabis seed breeder based in Canada. They develop and breed their own genetics specifically designed for northern climates and Canadian growing conditions.",
    },
    {
      question: "Do they ship within Canada?",
      answer:
        "Yes, Butterbean Birdseed ships within Canada. This means no customs risk, faster delivery times, and the convenience of Canadian payment options like e-transfer. Domestic shipping is a major advantage for Canadian growers.",
    },
    {
      question: "What types of seeds do they specialize in?",
      answer:
        "Butterbean Birdseed specializes in autoflower genetics and fast finishing strains designed for northern climates. Their strains typically finish in 70-90 days and feature genetics like Gorilla, Chemdawg, Kush, Cookies, Amnesia, Banana, and Gelato crosses.",
    },
    {
      question: "What payment methods do they accept?",
      answer:
        "Butterbean Birdseed accepts e-transfer and cash payments, which are common payment methods for Canadian seed breeders. These options are convenient for Canadian customers and avoid international payment processing fees.",
    },
    {
      question: "Do orders come with freebies?",
      answer:
        "Yes, orders from Butterbean Birdseed often include promotional items such as free seeds, stickers, grinders, lighter leashes, and sometimes apparel. The specific freebies may vary based on current promotions and order size.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-Z58t5ADg5F6WMHT7mVUV4BJ0DPcwth.png"
                alt="Butterbean Birdseed Logo"
                width={300}
                height={120}
                className="mx-auto"
              />
            </div>
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
              Canadian Seed Breeder - Ships from Canada
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Butterbean Birdseed Review</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Canadian cannabis breeder known for developing autoflower genetics and fast finishing strains suited for
              northern climates.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(overallRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{overallRating}/5</span>
              <span className="text-gray-600">(Based on our 5-factor analysis)</span>
            </div>

            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 mr-4">
              <a href="https://www.butterbeanbirdseed.ca/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Butterbean Birdseed
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
              <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-gray-600">Canada</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Specialty</h3>
              <p className="text-sm text-gray-600">Autoflowers</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Shipping</h3>
              <p className="text-sm text-gray-600">Within Canada</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Snowflake className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Climate Focus</h3>
              <p className="text-sm text-gray-600">Northern Climates</p>
            </CardContent>
          </Card>
        </div>

        {/* Overview Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">
                Butterbean Birdseed is a Canadian cannabis breeder that produces a wide selection of autoflower strains
                and experimental crosses using popular genetics. Their breeding work focuses on creating strains that
                perform well in outdoor Canadian growing seasons, with genetics including:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Gorilla</Badge>
                <Badge variant="secondary">Chemdawg</Badge>
                <Badge variant="secondary">Kush</Badge>
                <Badge variant="secondary">Cookies</Badge>
                <Badge variant="secondary">Amnesia</Badge>
                <Badge variant="secondary">Banana</Badge>
                <Badge variant="secondary">Gelato</Badge>
              </div>
              <p className="text-gray-600">
                As a Canadian breeder, Butterbean Birdseed understands the unique challenges of growing cannabis in
                northern climates. Their strains are selected and bred for cold resistance, fast finishing times, and
                the ability to thrive in shorter growing seasons.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Genetics and Breeding Style */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Genetics and Breeding Style</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">
                Butterbean Birdseed produces many unique autoflower crosses and develops strains with specific traits
                that Canadian growers need:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast Finishing Times</h4>
                    <p className="text-sm text-gray-600">Most strains finish between 70-90 days from seed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Large Plant Size</h4>
                    <p className="text-sm text-gray-600">Autoflowers bred to produce substantial yields</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Strong Terpene Profiles</h4>
                    <p className="text-sm text-gray-600">Focus on flavor and aroma in breeding selections</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Resin Production</h4>
                    <p className="text-sm text-gray-600">High trichome coverage for potency and extraction</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Review Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Review Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(criteriaRatings).map(([key, rating]) => {
              const titles: Record<string, string> = {
                genetics: "Genetics Quality",
                seedVariety: "Seed Variety",
                customerExperience: "Customer Experience",
                shipping: "Shipping (Canada)",
                reputation: "Reputation",
              }

              const icons: Record<string, typeof Shield> = {
                genetics: Shield,
                seedVariety: Package,
                customerExperience: Users,
                shipping: Truck,
                reputation: Award,
              }

              const Icon = icons[key]

              return (
                <Card key={key}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-600" />
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
                {pros.map((pro, index) => (
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
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Featured Strains */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended Strains</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStrains.map((strain) => (
              <Card key={strain.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50">
                  <Badge variant="secondary" className="w-fit mb-2">
                    {strain.type}
                  </Badge>
                  <CardTitle className="text-lg">{strain.name}</CardTitle>
                  <p className="text-sm text-gray-500">{strain.genetics}</p>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 mb-3">{strain.description}</p>
                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Clock className="w-4 h-4" />
                    <span>{strain.flowerTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shipping */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Shipping</h2>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Truck className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Canadian Domestic Shipping</h3>
                  <p className="text-green-700 mb-4">
                    One of the biggest advantages of ordering from Butterbean Birdseed is that they ship within Canada.
                    This means:
                  </p>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>No customs risk or seizures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Faster shipping times</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Canadian payment options available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Support a local Canadian breeder</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Butterbean Birdseed accepts common payment methods used by Canadian seed breeders:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">E-Transfer</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Cash</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Promotions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Promotions and Freebies</h2>
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Gift className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Orders Often Include Extras</h3>
                  <p className="text-amber-700 mb-4">
                    Orders from Butterbean Birdseed often include promotional items such as:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Free Seeds
                    </Badge>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Stickers
                    </Badge>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Grinders
                    </Badge>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Lighter Leashes
                    </Badge>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      Apparel
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Makes Them Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What Makes Butterbean Birdseed Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Canadian Breeder</h3>
                <p className="text-sm text-gray-600">Born and bred in Canada for Canadian growers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Northern Climate Genetics</h3>
                <p className="text-sm text-gray-600">Strains designed to thrive in Canadian weather</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Large Autoflower Library</h3>
                <p className="text-sm text-gray-600">Extensive collection of autoflowering genetics</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Unique Crosses</h3>
                <p className="text-sm text-gray-600">Experimental genetics you won't find elsewhere</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold mb-2">Direct Communication</h3>
                <p className="text-sm text-gray-600">Talk directly with the breeder for advice</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">Fast Finishing</h3>
                <p className="text-sm text-gray-600">Most strains complete in 70-90 days</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Related Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Compare With Other Seed Banks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/reviews/seedsman" className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Seedsman</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    International seed bank with 4000+ strains. Ships worldwide including Canada.
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm ml-1">4.0/5</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/reviews/herbies-headshop" className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Herbies Seeds</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    International seed bank with delivery guarantee to Canada. Ships in 9-12 days.
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-sm ml-1">4.5/5</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/seed-banks" className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">All Canadian Seed Banks</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Browse our complete list of Canadian seed banks with ratings and reviews.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View All
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
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
                      i < Math.floor(overallRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{overallRating}/5</span>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Butterbean Birdseed is an excellent choice for Canadian growers looking for autoflower genetics designed
              specifically for northern climates. As a Canadian breeder, they offer the significant advantage of
              domestic shipping with no customs risk. Their focus on fast finishing strains, unique genetics, and direct
              customer communication makes them stand out from larger international seed banks. If you're looking to
              support a Canadian breeder while getting quality autoflower genetics, Butterbean Birdseed is worth
              checking out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href="https://www.butterbeanbirdseed.ca/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Butterbean Birdseed
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/seed-banks">Compare Canadian Options</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
