import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Star,
  ExternalLink,
  CreditCard,
  Truck,
  Package,
  Shield,
  Users,
  CheckCircle,
  XCircle,
  Gift,
  MapPin,
  Clock,
  MessageCircle,
  Leaf,
  FlaskConical,
  Camera,
  Sprout,
  AlertCircle,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Gasd Up Seeds Review (Canada 2026) - Nova Scotia Cannabis Seedbank",
  description: "Gasd Up Seeds review for Canadian growers. Nova Scotia-based seedbank with fast local shipping, real breeder packs, and strong customer service. Buy cannabis seeds Canada.",
  keywords: "Gasd Up Seeds review, Canadian seedbank Nova Scotia, buy cannabis seeds Canada, fast shipping seedbank Canada, Nova Scotia cannabis seeds",
}

export default function GasdUpSeedsReviewPage() {
  const overallRating = 4.2
  const criteriaRatings = {
    paymentMethods: 4.5,
    seedVariety: 4.0,
    genetics: 4.3,
    customerExperience: 4.5,
    reputation: 4.0,
  }

  const pros = [
    "Canadian-based (Nova Scotia) - supports local",
    "Fast local shipping (1-2 days within NS)",
    "Real breeder packs - no white label products",
    "Good communication and customer service",
    "Freebies included on orders $200+",
    "Free shipping over $50",
    "Accepts credit cards and Google Pay",
    "Discreet shipping under 'Riverside Treasures'",
    "Tracking included on orders over $250",
    "Delivery guarantee stated by seller",
  ]

  const cons = [
    "No confirmed germination testing yet (in progress)",
    "Some strain info may be limited",
    "E-transfer not fully integrated (manual process)",
    "Newer operation - building reputation",
  ]

  const faqs = [
    {
      question: "Where is Gasd Up Seeds located?",
      answer: "Gasd Up Seeds is based in Nova Scotia, Canada. This makes them an excellent choice for Canadian growers, especially those on the East Coast who want fast local shipping."
    },
    {
      question: "How fast is shipping from Gasd Up Seeds?",
      answer: "Gasd Up Seeds offers very fast shipping within Nova Scotia (1-2 days). For the rest of Canada, typical delivery times are competitive with other domestic seedbanks. Free shipping is available on orders over $50."
    },
    {
      question: "What payment methods does Gasd Up Seeds accept?",
      answer: "Gasd Up Seeds accepts major credit cards and Google Pay directly through their website. E-transfer is also available but requires manual processing off-site. This gives Canadian customers flexible payment options."
    },
    {
      question: "Are Gasd Up Seeds legitimate breeder packs?",
      answer: "Yes, Gasd Up Seeds sells original sealed breeder packs from well-known breeders. They focus on quality over bulk and do not sell white label or repackaged seeds."
    },
    {
      question: "Is shipping discreet?",
      answer: "Yes, all orders ship discreetly under the business name 'Riverside Treasures' with no cannabis branding on the package. Stickers are included as a bonus with orders."
    },
    {
      question: "Does Gasd Up Seeds offer freebies?",
      answer: "Yes, breeder freebies are included on orders over $200. These are genuine breeder promotional seeds, not random extras."
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-black py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-xl overflow-hidden border-4 border-white/20 shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/475543832_426187703911637_152434204950628002_n-4o0JuLlDM72po666KhR2qk5eqMnYb0.jpg"
                alt="Gasd Up Seeds Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
              Local Canadian Seedbank
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Gasd Up Seeds Review (Canada 2026)</h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              Nova Scotia-based seedbank offering breeder packs, fast local shipping, and strong customer service.
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
              <span className="text-2xl font-bold text-white">{overallRating}</span>
              <span className="text-gray-400">/ 5.0</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href="https://highlystonedseeds.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Seeds (External Link)
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="#full-review">
                  Read Full Review
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto py-12">
        {/* Quick Summary Box */}
        <Card className="mb-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-green-600" />
              Quick Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Nova Scotia, Canada</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Truck className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Ships From</p>
                  <p className="font-medium">Canada</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Clock className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Delivery (NS)</p>
                  <p className="font-medium">1-2 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Gift className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Free Shipping</p>
                  <p className="font-medium">$50+</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Package className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Tracking</p>
                  <p className="font-medium">Free over $250</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <CreditCard className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Payment</p>
                  <p className="font-medium">CC, Google Pay, E-transfer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Gift className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Freebies</p>
                  <p className="font-medium">On $200+ orders</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Discreet</p>
                  <p className="font-medium">&quot;Riverside Treasures&quot;</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">
                <strong>Verdict:</strong> Strong local option with fast shipping and good customer service. Full review pending order test.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Note / Disclaimer */}
        <Card className="mb-8 border-2 border-yellow-300 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Review Note</h3>
                <p className="text-yellow-700">
                  This review is based on direct communication with the seller. A full hands-on order and germination test is currently in progress. 
                  This page will be updated with real results once testing is complete.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                Pros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <XCircle className="w-5 h-5" />
                Cons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Review Sections */}
        <div id="full-review" className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Review</h2>
          
          {/* Genetics & Seed Quality */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Genetics & Seed Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Gasd Up Seeds focuses on quality over quantity. They sell original sealed breeder packs from well-known 
                  cannabis breeders - no white label or repackaged genetics. This is a major plus for growers who want 
                  to know exactly what they&apos;re getting.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">What We Like</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>- Original sealed breeder packs</li>
                      <li>- Seeds from reputable breeders</li>
                      <li>- Focus on quality over bulk freebies</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">To Consider</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>- Some strain details may be limited</li>
                      <li>- Germination testing in progress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping & Delivery */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-green-600" />
                Shipping & Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Being based in Nova Scotia gives Gasd Up Seeds a major advantage for Canadian growers, especially 
                  those on the East Coast. Local customers report 1-2 day delivery times, which is exceptional for 
                  the Canadian seedbank market.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Ships from NS</h4>
                    <p className="text-xs text-gray-500">Canadian domestic shipping</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">1-2 Day Local</h4>
                    <p className="text-xs text-gray-500">Within Nova Scotia</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Gift className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Free Shipping $50+</h4>
                    <p className="text-xs text-gray-500">Low threshold for free delivery</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Delivery Guarantee:</strong> The seller has stated they offer a delivery guarantee. 
                    Tracking is included free on orders over $250.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Service */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
                Customer Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Based on our direct communication with Gasd Up Seeds, customer service appears to be a strong point. 
                  As a smaller operation, they offer a more personal touch compared to larger seedbanks.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">Responsive Communication</h4>
                      <p className="text-sm text-gray-600">Quick and friendly responses to inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">Fair Issue Resolution</h4>
                      <p className="text-sm text-gray-600">Will work with customers to resolve problems fairly</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Packaging & Discretion */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-green-600" />
                Packaging & Discretion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Gasd Up Seeds takes discretion seriously. All orders ship under the business name &quot;Riverside Treasures&quot; 
                  with no cannabis branding or obvious indicators of the contents.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Discreet Name</h4>
                    <p className="text-xs text-gray-500">&quot;Riverside Treasures&quot;</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">No Branding</h4>
                    <p className="text-xs text-gray-500">Plain packaging</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Gift className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">Stickers Included</h4>
                    <p className="text-xs text-gray-500">Bonus with orders</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payments */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Gasd Up Seeds offers flexible payment options compared to many Canadian seedbanks. Credit cards and 
                  Google Pay work directly through their website, making checkout simple and secure.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 p-4 bg-green-100 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="font-medium">Credit Card</span>
                      <p className="text-xs text-gray-500">Direct checkout</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-4 bg-green-100 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="font-medium">Google Pay</span>
                      <p className="text-xs text-gray-500">Quick and easy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <div>
                      <span className="font-medium">E-Transfer</span>
                      <p className="text-xs text-gray-500">Manual (off-site)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Criteria Ratings */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Rating Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(criteriaRatings).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-40 text-sm font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-600 h-3 rounded-full"
                      style={{ width: `${(value / 5) * 100}%` }}
                    />
                  </div>
                  <div className="w-12 text-right font-medium">{value}/5</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Order Test Coming Soon */}
        <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <FlaskConical className="w-5 h-5" />
              Order Test Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              We have placed an order with Gasd Up Seeds and will be documenting the full experience. 
              This section will be updated with real results.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Delivery Speed</h4>
                <p className="text-xs text-gray-500">Coming soon</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Packaging Photos</h4>
                <p className="text-xs text-gray-500">Coming soon</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                <Sprout className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Germination Results</h4>
                <p className="text-xs text-gray-500">Coming soon</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-blue-200">
                <Leaf className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Grow Results</h4>
                <p className="text-xs text-gray-500">Coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Final Verdict</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.floor(overallRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-3xl font-bold text-green-700 mb-4">{overallRating} / 5.0</p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Gasd Up Seeds looks like a promising Canadian seedbank, especially for growers in Nova Scotia 
              looking for fast delivery and legit breeder packs. Their focus on quality genetics, strong 
              customer service, and flexible payment options make them worth considering. Once we complete 
              a full order and grow test, this review will be updated with real results.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="https://highlystonedseeds.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Gasd Up Seeds
              </a>
            </Button>
            <p className="text-sm text-gray-500 mt-4">Support local Canadian seedbanks</p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
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

        {/* Related Links */}
        <Card>
          <CardHeader>
            <CardTitle>Related Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/best-seed-banks-canada" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-1">Best Seed Banks Canada</h4>
                <p className="text-sm text-gray-500">Compare top Canadian seedbanks</p>
              </Link>
              <Link href="/best-seeds-nova-scotia" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-1">Best Seeds for Nova Scotia</h4>
                <p className="text-sm text-gray-500">Strains for East Coast growing</p>
              </Link>
              <Link href="/seed-banks-that-ship-to-canada" className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold mb-1">Seed Banks That Ship to Canada</h4>
                <p className="text-sm text-gray-500">All your shipping options</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
