"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gift, Truck } from "lucide-react"

export function SidebarAffiliate() {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
        <h3 className="font-semibold mb-3 text-center text-sm">Featured Deals</h3>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg"
            alt="Herbies Seeds"
            className="w-20 h-20 mx-auto mb-3 rounded-full"
          />
          <Badge className="mb-2 bg-yellow-500 text-black">10-20% OFF</Badge>
          <h4 className="font-semibold text-sm mb-2">Herbies Seeds</h4>
          <ul className="text-xs text-gray-600 space-y-1 mb-3 text-left">
            <li className="flex items-center gap-1">
              <Gift className="w-3 h-3 text-green-600" />
              Free seeds with every order
            </li>
            <li className="flex items-center gap-1">
              <Truck className="w-3 h-3 text-green-600" />
              Ships to Canada in 9-12 days
            </li>
          </ul>
          <a
            href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
              <ExternalLink className="w-3 h-3 mr-1" />
              Shop Herbies
            </Button>
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 text-center">
        <h4 className="font-semibold mb-2 text-sm">Featured Strain</h4>
        <p className="text-xs text-gray-600 mb-3">Apple Betty Auto - Herbies Original</p>
        <a
          href="https://herbiesheadshop.com/cannabis-seeds/apple-betty-auto?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-purple-700 transition-colors"
        >
          View Strain
        </a>
      </div>
    </div>
  )
}
