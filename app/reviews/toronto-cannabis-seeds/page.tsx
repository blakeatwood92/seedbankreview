import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Star,
  ExternalLink,
  MapPin,
  CreditCard,
  Truck,
  Package,
  Shield,
  Users,
  Award,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function TorontoCannabisSeeds() {
  const overallRating = 4.5
  const criteriaRatings = {
    paymentMethods: 4.7,
    seedVariety: 4.4,
    genetics: 4.3,
    customerExperience: 4.5,
    reputation: 4.6,
  }

  const pros = [
    "Toronto-based for fast Ontario delivery",
    "Multiple payment options including phone orders",
    "Stealth shipping methods",
    "Variety packs available",
    "Rotating promotional offers",
    "Accepts cash and money orders",
    "Canadian customer service",
    "Discreet packaging",
  ]

  const cons = [
    "Shipping times vary by location",
    "Limited online strain information",
    "No Bitcoin payments listed",
    "Smaller selection than larger competitors",
    "Website could be more modern",
    "Limited customer reviews online",
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
              🇨🇦 Canadian Seed Bank Review
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Toronto Cannabis Seeds (TCS) Review</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive review of Toronto Cannabis Seeds for Canadian cannabis enthusiasts. Ontario-based seed bank
              with stealth shipping and variety packs.
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

            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 mr-4">
              <a href="https://torontocannabisseeds.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Toronto Cannabis Seeds
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-red-200">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-gray-600">Toronto, Ontario 🇨🇦</p>
            </CardContent>
          </Card>
          <Card className="text-center border-red-200">
            <CardContent className="p-6">
              <Package className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Specialties</h3>
              <p className="text-sm text-gray-600">Variety Packs</p>
            </CardContent>
          </Card>
          <Card className="text-center border-red-200">
            <CardContent className="p-6">
              <Truck className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Shipping</h3>
              <p className="text-sm text-gray-600">Stealth Methods</p>
            </CardContent>
          </Card>
          <Card className="text-center border-red-200">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Focus</h3>
              <p className="text-sm text-gray-600">Canadian Market</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Review Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Detailed Review Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(criteriaRatings).map(([key, rating]) => {
              const titles = {
                paymentMethods: "Payment Methods",
                seedVariety: "Seed Variety",
                genetics: "Trustworthy Genetics",
                customerExperience: "Customer Experience",
                reputation: "Reputation",
              }

              const icons = {
                paymentMethods: CreditCard,
                seedVariety: Package,
                genetics: Shield,
                customerExperience: Users,
                reputation: Award,
              }

              const Icon = icons[key as keyof typeof icons]

              return (
                <Card key={key} className="border-red-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">{titles[key as keyof typeof titles]}</CardTitle>
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

        {/* Payment Methods */}
        <Card className="mb-16 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-red-600" />
              Payment Methods Accepted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Visa/Mastercard</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Interac e-Transfer</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Cash by Mail</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Money Order</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
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
              Toronto Cannabis Seeds offers a solid option for Ontario-based customers looking for domestic shipping and
              variety packs. While they may not have the largest selection, their focus on stealth shipping and Canadian
              customer service makes them a reliable choice for discrete orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <a href="https://torontocannabisseeds.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Toronto Cannabis Seeds
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/seed-banks">Compare Other Canadian Banks</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
