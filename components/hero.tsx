import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">
      {/* Canadian-themed background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-red-600 text-8xl">🍁</div>
        <div className="absolute top-32 right-20 text-red-600 text-6xl">🍁</div>
        <div className="absolute bottom-20 left-1/4 text-red-600 text-7xl">🍁</div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800 border-red-200">
                <Shield className="w-4 h-4 mr-2" />
                🇨🇦 Trusted Canadian Reviews Since 2024
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Canada's Best
                <span className="text-red-600 block">Cannabis Seed Banks</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Comprehensive reviews of Canada's top cannabis seed banks. Find trusted genetics, secure Canadian
                payment options, and fast domestic shipping across all provinces.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Browse Canadian Seed Banks
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                >
                  Read Our Reviews
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>500+ Canadian Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>All 13 Provinces & Territories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-red-600" />
                  <span>Verified Canadian Genetics</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2017%2C%202026%2C%2001_13_13%20PM-yqlQUllbDyng3KoHmK1UsYUYdrCobS.png"
                  alt="Canada Seed Bank Reviews - Find the Best Seed Banks for Canadian Growers"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
