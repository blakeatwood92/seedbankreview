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
          {/* Herbies Canadian Banner */}
          <a
            href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/300%D1%85600-THGeUDylXQYkEIDcQlUvCbJ37hcsT6.png"
              alt="Herbies Seeds - Buy cannabis seeds in Canada with 100% Germination Guarantee"
              className="w-full h-auto"
              loading="lazy"
            />
          </a>

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
