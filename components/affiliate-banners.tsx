"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Gift, Truck, Shield, Star } from "lucide-react"

export function AffiliateBanners() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Cannabis Seed Deals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exclusive promotions and discounts from our trusted partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Herbies Main Banner */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg"
                  alt="Herbies Seeds"
                  className="w-20 h-20 mx-auto mb-4 rounded-full"
                />
                <Badge className="mb-3 bg-yellow-500 text-black">10-20% OFF</Badge>
                <h3 className="font-bold text-lg mb-2">Herbies Seeds</h3>
                <p className="text-gray-600 text-sm mb-4">
                  International seed bank with delivery guarantee to Canada
                </p>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm ml-1">4.5/5</span>
                </div>
                <a
                  href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Shop Herbies
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Apple Betty Auto Banner */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="text-center">
                <Badge className="mb-3 bg-purple-100 text-purple-800">Featured Strain</Badge>
                <h3 className="font-bold text-lg mb-2">Apple Betty Auto</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Sweet apple pie flavors with relaxing effects. Easy autoflower for Canadian climates.
                </p>
                <ul className="text-xs text-gray-500 mb-4 space-y-1">
                  <li>THC: 20-24%</li>
                  <li>Flowering: 8-9 weeks</li>
                  <li>Indica Dominant</li>
                </ul>
                <a
                  href="https://herbiesheadshop.com/cannabis-seeds/apple-betty-auto?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Strain
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Free Seeds Program Banner */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Free Seeds Program</h3>
                <p className="text-gray-600 text-sm mb-4">Get free seeds with every Herbies order</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4 text-left">
                  <li className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-green-600" />
                    1 free seed with every order
                  </li>
                  <li className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-green-600" />
                    +1 additional seed per €20 spent
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    Delivery guarantee included
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-green-600" />
                    Ships to Canada in 9-12 days
                  </li>
                </ul>
                <a
                  href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Claim Free Seeds
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            * Herbies ships to Canada via Certified Mail with delivery guarantee. Accepts Interac for Canadian
            customers.
          </p>
        </div>
      </div>
    </section>
  )
}
