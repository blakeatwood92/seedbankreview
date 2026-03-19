import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle, Scale, Home } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Are Cannabis Seeds Legal in Canada? | 2026 Laws Explained",
  description: "Understand cannabis seed laws in Canada. Learn about federal regulations, provincial limits, and what's legal for home cultivation in 2026.",
  keywords: "cannabis seeds legal canada, marijuana laws canada, growing cannabis legal, cannabis act canada, home growing laws",
}

export default function SeedsLegalPage() {
  const provinces = [
    { name: "British Columbia", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Alberta", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Saskatchewan", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Manitoba", plants: 0, notes: "Home growing prohibited", legal: false },
    { name: "Ontario", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Quebec", plants: 0, notes: "Home growing prohibited", legal: false },
    { name: "New Brunswick", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Nova Scotia", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Prince Edward Island", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Newfoundland & Labrador", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Yukon", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Northwest Territories", plants: 4, notes: "Home growing permitted", legal: true },
    { name: "Nunavut", plants: 4, notes: "Home growing permitted", legal: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Legal Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Are Cannabis Seeds Legal in Canada?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yes, cannabis seeds are legal to purchase and possess in Canada. Here's everything you need 
            to know about cannabis seed laws and home cultivation regulations.
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-12 border-green-300 bg-green-50">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Yes, Cannabis Seeds Are Legal in Canada</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Under the Cannabis Act (2018), adults can legally purchase, possess, and cultivate cannabis seeds 
              in most of Canada. Federal law permits up to 4 plants per household, though some provinces have 
              additional restrictions.
            </p>
          </CardContent>
        </Card>

        {/* The Cannabis Act */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-green-600" />
              The Cannabis Act (Bill C-45)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              On October 17, 2018, Canada became the second country in the world to fully legalize recreational 
              cannabis through the Cannabis Act. This federal law established the legal framework for cannabis 
              production, distribution, sale, and possession.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">What's Legal Federally</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Purchase seeds from licensed retailers or online
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Possess unlimited seeds at home
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Grow up to 4 plants per household
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Give seeds to other adults (no selling)
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Possess up to 30g in public
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">What's Not Legal</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Growing more than 4 plants per household
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Selling seeds without a license
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Growing in public or visible from public areas
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Minors purchasing or possessing seeds
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    Taking seeds across international borders
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Provincial Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <Home className="w-8 h-8 inline-block mr-2 text-green-600" />
            Home Growing by Province
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            While federal law permits home cultivation, provinces can add additional restrictions. 
            Manitoba and Quebec have prohibited home growing entirely.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {provinces.map((province, index) => (
              <Card key={index} className={province.legal ? "border-green-200" : "border-red-200"}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{province.name}</h3>
                    {province.legal ? (
                      <Badge className="bg-green-100 text-green-800">{province.plants} plants</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">Prohibited</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{province.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Manitoba & Quebec Warning */}
        <Card className="mb-12 border-amber-300 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Note for Manitoba and Quebec Residents</h3>
                <p className="text-gray-600 mb-4">
                  While you can legally purchase and possess cannabis seeds in Manitoba and Quebec, 
                  these provinces have banned home cultivation. You cannot legally grow cannabis plants 
                  at home in these provinces, regardless of federal law.
                </p>
                <p className="text-sm text-gray-500">
                  Purchasing seeds for collection purposes or for future use in other jurisdictions 
                  remains legal. However, germinating seeds in these provinces is prohibited.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Buying Seeds */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Where to Legally Buy Cannabis Seeds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Licensed Retailers</h3>
                <p className="text-sm text-gray-600">
                  Government-run cannabis stores and licensed private retailers sell seeds legally. 
                  Selection may be limited compared to online seed banks.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Online Seed Banks</h3>
                <p className="text-sm text-gray-600">
                  Canadian online seed banks offer wider variety and competitive prices. Seeds ship 
                  discreetly and legally within Canada.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Other Adults</h3>
                <p className="text-sm text-gray-600">
                  You can legally receive seeds from other adults as gifts. Selling without a 
                  license is prohibited.
                </p>
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
                <h3 className="font-semibold mb-2">Can I order seeds from international seed banks?</h3>
                <p className="text-sm text-gray-600">
                  Yes, but seeds may be subject to customs inspection. Many international banks offer 
                  delivery guarantees. Canadian seed banks eliminate this concern entirely.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is there a limit on how many seeds I can buy?</h3>
                <p className="text-sm text-gray-600">
                  There's no federal limit on purchasing or possessing seeds. However, you can only 
                  grow 4 plants at a time per household (in permitted provinces).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I bring seeds across provincial borders?</h3>
                <p className="text-sm text-gray-600">
                  Yes, you can travel with seeds within Canada. However, you cannot grow them in 
                  provinces where home cultivation is prohibited.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I take seeds out of Canada?</h3>
                <p className="text-sm text-gray-600">
                  No. It's illegal to transport cannabis products, including seeds, across 
                  international borders - even to countries where cannabis is legal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Buy Legal Cannabis Seeds?</h2>
          <p className="text-gray-600 mb-6">Browse trusted Canadian seed banks with fast, legal domestic shipping.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/seed-banks">View Seed Banks</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/how-to-buy-cannabis-seeds-canada">Buying Guide</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
