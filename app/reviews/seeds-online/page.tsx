import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  DollarSign,
  Zap,
  Gift,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Seeds Online Review 2026 - Cheap Cannabis Seeds Canada | $1 Single Seeds",
  description: "Seeds Online review for Canadian growers. Buy single cannabis seeds starting at $1. Canadian seed bank with fast domestic shipping, large breeder selection, and cheap autoflower seeds.",
  keywords: "cheap cannabis seeds Canada, buy cannabis seeds Canada, single cannabis seeds, Canadian seed banks, cheap autoflower seeds, Seeds Online review",
}

export default function SeedsOnlineReviewPage() {
  const overallRating = 4.3
  const criteriaRatings = {
    paymentMethods: 4.0,
    seedVariety: 4.8,
    genetics: 4.5,
    customerExperience: 4.2,
    reputation: 4.0,
  }

  const pros = [
    "Extremely affordable - single seeds starting at just $1",
    "$3 single seed options for premium genetics",
    "Canadian-based with fast domestic shipping",
    "Large breeder selection including Ethos, FastBuds, Mephisto",
    "Free seeds included with orders",
    "Fast order processing - often same day",
    "No customs delays - ships within Canada",
    "Accepts E-transfer for easy Canadian payments",
    "Cryptocurrency payments with bonus freebies",
  ]

  const cons = [
    "Some seeds packaged in-house (not original breeder packaging)",
    "All sales final - no returns accepted",
    "Newer seed bank compared to established competitors",
    "Limited payment options compared to international banks",
  ]

  const breeders = [
    "Ethos Genetics",
    "FastBuds",
    "Mephisto Genetics",
    "Seedsman",
    "Exotic Genetics",
    "Compound Genetics",
    "In House Genetics",
    "Barney's Farm",
  ]

  const faqs = [
    {
      question: "Is Seeds Online a Canadian seed bank?",
      answer: "Yes, Seeds Online is a Canadian-based seed bank that ships domestically within Canada. This means faster delivery times and no customs delays compared to ordering from international seed banks."
    },
    {
      question: "Do they sell single cannabis seeds?",
      answer: "Yes, Seeds Online specializes in single seed purchases. You can buy individual seeds starting at just $1, with premium genetics available at $3 per seed. This allows you to test different strains without committing to full packs."
    },
    {
      question: "How fast is Seeds Online shipping?",
      answer: "Seeds Online processes orders quickly, often the same day. Many Canadian customers report receiving their orders within just a few days of placing them, thanks to domestic shipping within Canada."
    },
    {
      question: "What payment methods does Seeds Online accept?",
      answer: "Seeds Online accepts E-transfer (Interac), cryptocurrency (with bonus freebies), and mailed cash. E-transfer is the most popular option for Canadian customers."
    },
    {
      question: "Are the seeds in original breeder packaging?",
      answer: "Premium seeds may come in original breeder packaging, while other seeds may be packaged by Seeds Online. The quality of the genetics remains the same regardless of packaging."
    },
    {
      question: "Does Seeds Online offer free seeds?",
      answer: "Yes, Seeds Online includes free seeds with orders. They also run promotions and promo codes like '247' for additional discounts and freebies."
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 to-black py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84267487_115064260055533_1100969039028551680_n-oMcDc3E2crRygpg0ehG6mlStSkcmx1.jpg"
                alt="Seeds Online Logo"
                width={150}
                height={150}
                className="mx-auto rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
              Canadian Seed Bank - Ships From Canada
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Seeds Online Review</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Canadian seed bank offering extremely affordable cannabis seeds with single seeds starting at just $1. 
              Fast domestic shipping and a large selection of top breeders.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(overallRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">{overallRating}/5</span>
              <span className="text-gray-400">(Based on our 5-factor analysis)</span>
            </div>

            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a
                href="https://weedseedsonline.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Seeds Online
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
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Starting Price</h3>
              <p className="text-sm text-gray-600">$1 per seed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Shipping</h3>
              <p className="text-sm text-gray-600">Fast Canadian Domestic</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Specialty</h3>
              <p className="text-sm text-gray-600">Single Seed Sales</p>
            </CardContent>
          </Card>
        </div>

        {/* Overview Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Overview</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Seeds Online is a Canadian seed bank that has carved out a unique niche in the market by focusing on 
              affordability and convenience. Unlike many seed banks that only sell full packs, Seeds Online allows 
              Canadian growers to purchase individual seeds starting at incredibly low prices.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              The seed bank offers single seeds starting at just $1, with premium genetics available at $3 per seed. 
              They carry genetics from multiple well-known breeders and ship domestically within Canada, meaning 
              faster delivery times and no customs delays for Canadian customers.
            </p>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <DollarSign className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">$1 and $3 Single Seeds</h3>
                <p className="text-sm text-gray-600">Buy individual seeds at incredibly low prices to test genetics without committing to full packs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Gift className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Free Seeds With Orders</h3>
                <p className="text-sm text-gray-600">Get bonus seeds included with your order, plus additional freebies with crypto payments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fast Order Processing</h3>
                <p className="text-sm text-gray-600">Orders are often processed the same day, with many customers receiving seeds within days.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Package className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Large Breeder Selection</h3>
                <p className="text-sm text-gray-600">Access genetics from top breeders like Ethos, FastBuds, Mephisto, and more.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Truck className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Canadian Domestic Shipping</h3>
                <p className="text-sm text-gray-600">Ships from within Canada - no customs delays or international shipping wait times.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Discreet Packaging</h3>
                <p className="text-sm text-gray-600">All orders shipped in discreet packaging for privacy and security.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Single Seeds Pricing Section */}
        <Card className="mb-16 border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              Single Seeds Starting at $1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              One of the biggest advantages of Seeds Online is the ability to buy individual seeds at extremely low 
              prices. This is perfect for growers who want to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-800">$1 Seeds</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Budget-friendly entry point for new growers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Test multiple strains without breaking the bank</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Great for experimentation and pheno hunting</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-800">$3 Premium Seeds</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Access to top-tier genetics from premium breeders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Still significantly cheaper than buying full packs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Try expensive strains without the full investment</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Breeder Selection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Breeder Selection</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Seeds Online carries genetics from multiple well-known breeders, giving Canadian growers access to 
            premium genetics at affordable prices.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {breeders.map((breeder) => (
              <Card key={breeder} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <p className="font-medium text-gray-800">{breeder}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Review Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Review Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(criteriaRatings).map(([key, rating]) => {
              const titles: Record<string, string> = {
                paymentMethods: "Payment Methods",
                seedVariety: "Seed Variety",
                genetics: "Trustworthy Genetics",
                customerExperience: "Customer Experience",
                reputation: "Reputation",
              }

              const icons: Record<string, any> = {
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

        {/* Shipping Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-green-600" />
              Shipping to Canada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Seeds Online ships orders quickly and processes orders the same day when possible. As a Canadian-based 
              seed bank, they ship domestically within Canada, which means:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Many customers receive orders within just a few days</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">No Customs</h4>
                <p className="text-sm text-gray-600">Domestic shipping means no customs delays or seizures</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Same Day Processing</h4>
                <p className="text-sm text-gray-600">Orders are often processed and shipped the same day</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              Payment Methods Accepted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 p-4 bg-green-100 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <span className="font-medium">E-Transfer (Interac)</span>
                  <p className="text-xs text-gray-500">Most popular for Canadians</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <CheckCircle className="w-5 h-5 text-yellow-600" />
                <div>
                  <span className="font-medium">Cryptocurrency</span>
                  <p className="text-xs text-gray-500">Extra freebies with crypto</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-gray-600" />
                <div>
                  <span className="font-medium">Mailed Cash</span>
                  <p className="text-xs text-gray-500">Discrete option available</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Promotions */}
        <Card className="mb-16 border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-yellow-600" />
              Promotions & Freebies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Current Offers:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Free seeds included with every order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Extra freebies with cryptocurrency payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Marked-down seeds and clearance deals</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Promo Codes:</h4>
                <div className="bg-white p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-600 mb-2">Try promo code:</p>
                  <code className="bg-yellow-100 px-3 py-1 rounded font-mono font-bold text-yellow-800">247</code>
                  <p className="text-xs text-gray-500 mt-2">Check website for current active promotions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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

        {/* Internal Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Compare With Other Seed Banks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/reviews/herbies-headshop" className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Herbies Seeds</h3>
                  <p className="text-sm text-gray-600 mb-3">International seed bank with delivery guarantee to Canada and massive strain selection.</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                    <span className="text-sm ml-1">4.5/5</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/reviews/seedsman" className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Seedsman</h3>
                  <p className="text-sm text-gray-600 mb-3">World's largest seed bank with 4000+ strains from 100+ breeders.</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                    <span className="text-sm ml-1">4.0/5</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-seed-banks-canada" className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Canadian Seed Banks</h3>
                  <p className="text-sm text-gray-600 mb-3">Complete guide to the best seed banks for Canadian growers in 2026.</p>
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm ml-1">Full Comparison Guide</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-br from-gray-900 to-black text-white">
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
                      i < Math.floor(overallRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold">{overallRating}/5</span>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Seeds Online is an excellent choice for Canadian growers looking for affordable cannabis seeds with 
              fast domestic shipping. Their $1 and $3 single seed options make it easy to try new genetics without 
              a big investment, and the domestic shipping means no customs delays. While some seeds may not come 
              in original breeder packaging, the value and convenience make Seeds Online a solid option for 
              budget-conscious Canadian growers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://weedseedsonline.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Seeds Online
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/seed-banks">Compare All Seed Banks</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
