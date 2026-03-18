import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Globe, Package, Gift, Shield, CreditCard } from "lucide-react"
import Link from "next/link"

export function SeedsmanSection() {
  // Renamed internally but keeping component name for compatibility
  const herbiesFeatures = [
    {
      title: "Delivery Guarantee",
      description: "Free reship if your order is lost or doesn't arrive",
      icon: Shield,
    },
    {
      title: "Free Seeds Program",
      description: "1 free seed per order + 1 additional per €20 spent",
      icon: Gift,
    },
    {
      title: "Accepts Interac",
      description: "Convenient payment for Canadian customers",
      icon: CreditCard,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              International Partner - Ships to Canada
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Herbies Seeds - Delivery Guaranteed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International seed bank with their own genetics line, reliable Canada shipping, and a delivery guarantee
              that means you never lose your order.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-lg">4.5/5</span>
                  <span className="text-gray-500">(1,234 reviews)</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Canadian Growers Choose Herbies</h3>
                <p className="text-gray-600 mb-6">
                  Herbies ships to Canada via Certified Mail in 9-12 days. Their delivery guarantee means if your
                  package is lost or fails to arrive, they reship for free - no questions asked.
                </p>
              </div>

              <div className="grid gap-4 mb-8">
                {herbiesFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <a
                    href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Shop Herbies Seeds
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-green-200 text-green-700 bg-transparent">
                  <Link href="/reviews/herbies-headshop">Read Full Review</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <CardTitle className="text-center">Featured: Apple Betty Auto</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg"
                      alt="Herbies Seeds"
                      className="w-24 h-24 mx-auto mb-4 rounded-full"
                    />
                    <Badge className="mb-3 bg-yellow-500 text-black">10-20% OFF</Badge>
                    <h4 className="font-bold text-lg mb-2">Apple Betty Auto</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Sweet apple pie flavors with relaxing effects. Easy-to-grow autoflower perfect for Canadian
                      climates.
                    </p>
                    <ul className="text-sm text-gray-500 mb-4 space-y-1">
                      <li>THC: 20-24%</li>
                      <li>Flowering: 8-9 weeks</li>
                      <li>Yield: Up to 500g/m²</li>
                    </ul>
                    <a
                      href="https://herbiesheadshop.com/cannabis-seeds/apple-betty-auto?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Shop This Strain
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Herbies Canada Shipping Details</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-green-700">Shipping Time</p>
                  <p className="text-gray-600">9-12 days via Certified Mail</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700">Shipping Cost</p>
                  <p className="text-gray-600">€10 (~$15 CAD)</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700">Payment Options</p>
                  <p className="text-gray-600">Interac, Credit Card, Bitcoin, PayPal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
