import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, MapPin, Truck, CreditCard } from "lucide-react"

export function FeaturedBanks() {
  const canadianBanks = [
    {
      name: "FastBuzz.com",
      logo: "/images/fastbuzz-logo.png",
      rating: 4.8,
      reviews: 1247,
      location: "British Columbia",
      specialties: ["Same-Day Shipping", "Discreet Packaging", "BC Genetics"],
      description: "Leading Canadian seed bank with exceptional customer service and premium West Coast genetics.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Bitcoin"],
      shippingTime: "1-2 days",
      provinces: ["BC", "AB", "ON", "QC"],
      affiliate: true,
    },
    {
      name: "True North Seed Bank",
      logo: "/images/truenorth-logo.png",
      rating: 4.7,
      reviews: 892,
      location: "Ontario",
      specialties: ["Established Reputation", "Wide Selection", "Secure Payment"],
      description: "Trusted Canadian source with years of experience and verified genetics from coast to coast.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Cash"],
      shippingTime: "2-4 days",
      provinces: ["ON", "QC", "BC", "AB"],
      affiliate: true,
    },
    {
      name: "Jordan of the Islands",
      logo: "/images/jordan-islands-logo.png",
      rating: 4.6,
      reviews: 634,
      location: "British Columbia",
      specialties: ["Original Genetics", "Breeder Direct", "Island Strains"],
      description: "Renowned Canadian breeder offering unique island-bred cannabis genetics since the 90s.",
      paymentMethods: ["Interac E-Transfer", "Cash", "Money Order"],
      shippingTime: "3-5 days",
      provinces: ["BC", "AB", "ON"],
      affiliate: true,
    },
    {
      name: "GoBack Seed Bank",
      logo: "/images/goback-logo.png",
      rating: 4.5,
      reviews: 423,
      location: "Alberta",
      specialties: ["Competitive Prices", "Bulk Orders", "Prairie Genetics"],
      description: "Value-focused Canadian seed bank with competitive pricing and quality genetics for all budgets.",
      paymentMethods: ["Interac E-Transfer", "Bitcoin", "Cash"],
      shippingTime: "2-5 days",
      provinces: ["AB", "BC", "SK", "MB"],
      affiliate: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
            🇨🇦 Made in Canada
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Top Canadian Seed Banks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our highest-rated Canadian seed banks, perfect for domestic orders with fast shipping across all provinces
            and territories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {canadianBanks.map((bank, index) => (
            <Card
              key={bank.name}
              className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-100"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Badge className="absolute -top-2 -left-2 bg-red-600 text-white z-10">#{index + 1}</Badge>
                      <div className="w-16 h-16 bg-white rounded-lg border-2 border-gray-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={bank.logo || "/placeholder.svg"}
                          alt={`${bank.name} logo`}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{bank.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-3 h-3 text-red-600" />
                        <span className="text-sm text-gray-600">{bank.location}</span>
                        <span className="text-red-600 text-sm">🇨🇦</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(bank.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{bank.rating}</span>
                        <span className="text-gray-500 text-sm">({bank.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{bank.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Truck className="w-4 h-4 text-red-600" />
                      <span className="font-medium">Shipping</span>
                    </div>
                    <p className="text-gray-600">{bank.shippingTime}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="w-4 h-4 text-red-600" />
                      <span className="font-medium">Payment</span>
                    </div>
                    <p className="text-gray-600">Interac E-Transfer</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {bank.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs border-red-200 text-red-700">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Ships to provinces:</p>
                  <div className="flex gap-1">
                    {bank.provinces.map((province) => (
                      <Badge key={province} variant="secondary" className="text-xs bg-red-50 text-red-700">
                        {province}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </Button>
                  <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
                    Full Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
            View All Canadian Seed Banks
          </Button>
        </div>
      </div>
    </section>
  )
}
