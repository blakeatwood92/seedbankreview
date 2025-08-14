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
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react"

export default function HerbiesReviewPage() {
  const overallRating = 4.3
  const criteriaRatings = {
    paymentMethods: 4.5,
    seedVariety: 4.8,
    genetics: 4.2,
    customerExperience: 4.0,
    reputation: 4.1,
  }

  const pros = [
    "Massive seed selection (2500+ strains)",
    "Excellent stealth shipping to Canada",
    "Regular promotions and freebies",
    "Multiple payment options including crypto",
    "Good customer service response times",
    "Detailed strain information",
    "Established reputation since 2000s",
    "Ships worldwide including Canada",
  ]

  const cons = [
    "International shipping can take 2-3 weeks",
    "Potential customs delays/seizures",
    "No germination guarantee",
    "Higher shipping costs than domestic options",
    "Currency conversion fees for CAD",
    "Limited tracking once in Canada Post system",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800">
              🌍 International Seed Bank Review
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Herbies Head Shop Review</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive review of Herbies Head Shop for Canadian cannabis enthusiasts. Established UK-based seed
              bank with global shipping.
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

            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 mr-4">
              <a
                href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Herbies Head Shop
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
              <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-gray-600">United Kingdom</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Package className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Strains</h3>
              <p className="text-sm text-gray-600">2500+ varieties</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Truck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Shipping to Canada</h3>
              <p className="text-sm text-gray-600">10-21 business days</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Established</h3>
              <p className="text-sm text-gray-600">Since 2000s</p>
            </CardContent>
          </Card>
        </div>

        {/* Affiliate Banners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Current Herbies Promotions</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
                <CardTitle>Spring 2024 Deals</CardTitle>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <a
                  href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-lg">
                    <div className="text-4xl mb-4">🌸</div>
                    <h3 className="text-xl font-bold mb-2">Spring Cannabis Seed Sale</h3>
                    <p className="text-gray-600 mb-4">Up to 40% off selected strains + free seeds</p>
                    <Button className="bg-purple-600 hover:bg-purple-700">Shop Spring Deals</Button>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center">
                <CardTitle>Tracking Banner</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center">
                  <iframe
                    name="banner"
                    src="https://panel.herbiesheadshop.com/scripts/dbm4mh?a_aid=689e356589639&a_bid=846496a9&w=1"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
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
                <Card key={key}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-600" />
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
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-purple-600" />
              Payment Methods Accepted
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Credit/Debit Cards</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Bitcoin</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Bank Transfer</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Cash (Mail)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Canadian Customers Warning */}
        <div className="mb-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Note for Canadian Customers</h3>
              <p className="text-yellow-700 text-sm mb-4">
                Herbies Head Shop is an international seed bank shipping from the UK. While they offer excellent
                genetics and service, Canadian customers should be aware of potential customs delays or seizures. For
                guaranteed delivery and faster shipping, consider our featured Canadian seed banks.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">Shipping Considerations:</h4>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• 10-21 business day delivery</li>
                    <li>• Potential customs delays</li>
                    <li>• No delivery guarantee</li>
                    <li>• Currency conversion fees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">Canadian Alternatives:</h4>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• FastBuzz.com (1-2 day delivery)</li>
                    <li>• True North Seed Bank</li>
                    <li>• Jordan of the Islands</li>
                    <li>• No customs concerns</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Verdict */}
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
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
              Herbies Head Shop is a reputable international seed bank with an impressive selection of cannabis
              genetics. While they offer excellent variety and customer service, Canadian customers should weigh the
              longer shipping times and potential customs issues against the benefits of shopping domestically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <a
                  href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Herbies Head Shop
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/seed-banks">Compare Canadian Options</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
