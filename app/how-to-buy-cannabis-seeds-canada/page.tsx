import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, CreditCard, Truck, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "How to Buy Cannabis Seeds in Canada 2026 | Complete Buyer's Guide",
  description: "Learn how to safely buy cannabis seeds in Canada. Guide to payment methods, shipping, choosing seed banks, and what to look for when ordering seeds online.",
  keywords: "buy cannabis seeds canada, how to order seeds, cannabis seeds online canada, seed bank guide, buying marijuana seeds",
}

export default function HowToBuySeedsPage() {
  const steps = [
    {
      step: 1,
      title: "Choose a Reputable Seed Bank",
      description: "Look for seed banks with positive reviews, clear return policies, and good customer service. Canadian seed banks offer faster shipping and no customs risk.",
      tips: ["Check online reviews and forums", "Look for germination guarantees", "Verify payment security"],
    },
    {
      step: 2,
      title: "Select Your Strains",
      description: "Consider your growing environment (indoor/outdoor), experience level, and desired effects. Autoflowers are great for beginners and short Canadian summers.",
      tips: ["Beginner? Start with resilient strains", "Short season? Choose autoflowers", "Limited space? Look for compact varieties"],
    },
    {
      step: 3,
      title: "Choose Your Payment Method",
      description: "Most Canadian seed banks accept Interac e-transfer, which is fast and secure. Some also accept PayPal, credit cards, or cryptocurrency.",
      tips: ["E-transfer is most popular in Canada", "Crypto often comes with freebies", "Avoid wire transfers to unknown sellers"],
    },
    {
      step: 4,
      title: "Place Your Order",
      description: "Double-check your order, apply any coupon codes, and confirm your shipping address. Most seed banks ship discreetly.",
      tips: ["Look for free seed promotions", "Sign up for newsletters for deals", "Keep your order confirmation"],
    },
    {
      step: 5,
      title: "Receive and Store Seeds",
      description: "Seeds typically arrive in 2-7 days from Canadian banks. Store unused seeds in a cool, dark, dry place - they can remain viable for years.",
      tips: ["Check package for damage", "Store in fridge for long-term", "Keep in original packaging until use"],
    },
  ]

  const paymentMethods = [
    { method: "Interac E-Transfer", availability: "Most Canadian banks", pros: "Fast, secure, no fees", cons: "Canada only" },
    { method: "PayPal", availability: "Some seed banks", pros: "Buyer protection, use credit card", cons: "Not all banks accept it" },
    { method: "Credit Card", availability: "International banks", pros: "Convenient, familiar", cons: "May be declined, privacy concerns" },
    { method: "Cryptocurrency", availability: "Many seed banks", pros: "Private, often extra freebies", cons: "Learning curve, volatility" },
    { method: "Cash by Mail", availability: "Most seed banks", pros: "Anonymous", cons: "Risky, slower" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Buyer's Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">How to Buy Cannabis Seeds in Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buying cannabis seeds in Canada is legal and straightforward. This guide walks you through 
            the process from choosing a seed bank to receiving your order safely.
          </p>
        </div>

        {/* Legal Status */}
        <Card className="mb-12 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-green-600 shrink-0" />
              <div>
                <h2 className="text-xl font-bold mb-2">Legal Status in Canada</h2>
                <p className="text-gray-600">
                  Since October 2018, cannabis has been legal in Canada under the Cannabis Act. Adults can legally 
                  purchase cannabis seeds for personal cultivation. Most provinces allow growing up to 4 plants per 
                  household (Quebec and Manitoba have restrictions). Always check your provincial regulations.
                </p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/are-cannabis-seeds-legal-canada">Learn More About Cannabis Seed Laws</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Buying Guide</h2>
          
          <div className="space-y-6">
            {steps.map((item) => (
              <Card key={item.step}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tips.map((tip, i) => (
                          <Badge key={i} variant="outline" className="text-sm">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {tip}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <CreditCard className="w-8 h-8 inline-block mr-2 text-green-600" />
            Payment Methods
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Canadian seed banks offer various payment options. Here's what to expect with each method.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-4 text-left">Method</th>
                  <th className="p-4 text-left">Availability</th>
                  <th className="p-4 text-left">Pros</th>
                  <th className="p-4 text-left">Cons</th>
                </tr>
              </thead>
              <tbody>
                {paymentMethods.map((pm, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-medium">{pm.method}</td>
                    <td className="p-4 text-sm text-gray-600">{pm.availability}</td>
                    <td className="p-4 text-sm text-green-600">{pm.pros}</td>
                    <td className="p-4 text-sm text-gray-500">{pm.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* What to Look For */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>What to Look For in a Seed Bank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-600 mb-3">Green Flags</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Positive reviews on multiple platforms
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Clear shipping and return policies
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Germination guarantee
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Responsive customer service
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Discreet packaging options
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Secure payment processing
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-3">Red Flags</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    No reviews or only negative reviews
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Prices that seem too good to be true
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    No physical address or contact info
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Only accepts wire transfers
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Poorly designed website with errors
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    No SSL certificate (not HTTPS)
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Info */}
        <Card className="mb-12 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-6 h-6 text-blue-600" />
              Shipping Expectations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Canadian Seed Banks</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Delivery: 2-7 business days</li>
                  <li>No customs concerns</li>
                  <li>Often free shipping over a threshold</li>
                  <li>Canada Post or similar carriers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">International Seed Banks</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Delivery: 7-21 business days</li>
                  <li>May require customs clearance</li>
                  <li>Look for delivery guarantees</li>
                  <li>Stealth shipping recommended</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I buy cannabis seeds if I'm under 19?</h3>
                <p className="text-sm text-gray-600">No. You must be of legal age in your province to purchase cannabis seeds (19 in most provinces, 18 in Alberta and Quebec).</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Will my seeds be confiscated at customs?</h3>
                <p className="text-sm text-gray-600">If ordering from international seed banks, there's a small risk. Canadian seed banks eliminate this concern entirely since packages stay domestic.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How should I store seeds I'm not planting right away?</h3>
                <p className="text-sm text-gray-600">Store in a cool, dark, dry place. A sealed container in the refrigerator is ideal for long-term storage. Seeds can remain viable for 5+ years when stored properly.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Buy Seeds?</h2>
          <p className="text-gray-600 mb-6">Browse our reviews of trusted Canadian seed banks.</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/seed-banks">View Top Seed Banks</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
