import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, MapPin, Truck, CreditCard, Package } from "lucide-react"

export default function SeedBanksPage() {
  const seedBanks = [
    {
      rank: 1,
      name: "FastBuzz.com",
      logo: "/images/fastbuzz-logo.png",
      rating: 4.8,
      reviews: 1247,
      location: "British Columbia, Canada",
      description: "Leading Canadian seed bank with exceptional customer service and premium West Coast genetics.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Bitcoin", "Cash"],
      deliveryTime: "1-2 business days",
      shippingCost: "Free over $100",
      specialties: ["Same-Day Processing", "Discreet Packaging", "BC Genetics", "24/7 Support"],
      strainCount: "500+",
      affiliate: true,
    },
    {
      rank: 2,
      name: "True North Seed Bank",
      logo: "/images/truenorth-logo.png",
      rating: 4.7,
      reviews: 892,
      location: "Ontario, Canada",
      description: "Trusted Canadian source with years of experience and verified genetics from coast to coast.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Cash", "Money Order"],
      deliveryTime: "2-4 business days",
      shippingCost: "Free over $75",
      specialties: ["Established Reputation", "Wide Selection", "Secure Payment", "Quality Guarantee"],
      strainCount: "800+",
      affiliate: true,
    },
    {
      rank: 3,
      name: "Jordan of the Islands",
      logo: "/images/jordan-islands-logo.png",
      rating: 4.6,
      reviews: 634,
      location: "British Columbia, Canada",
      description: "Renowned Canadian breeder offering unique island-bred cannabis genetics since the 90s.",
      paymentMethods: ["Interac E-Transfer", "Cash", "Money Order"],
      deliveryTime: "3-5 business days",
      shippingCost: "$15 flat rate",
      specialties: ["Original Genetics", "Breeder Direct", "Island Strains", "Organic Seeds"],
      strainCount: "200+",
      affiliate: true,
    },
    {
      rank: 4,
      name: "GoBack Seed Bank",
      logo: "/images/goback-logo.png",
      rating: 4.5,
      reviews: 423,
      location: "Alberta, Canada",
      description: "Value-focused Canadian seed bank with competitive pricing and quality genetics for all budgets.",
      paymentMethods: ["Interac E-Transfer", "Bitcoin", "Cash"],
      deliveryTime: "2-5 business days",
      shippingCost: "Free over $50",
      specialties: ["Competitive Prices", "Bulk Orders", "Prairie Genetics", "Student Discounts"],
      strainCount: "400+",
      affiliate: true,
    },
    {
      rank: 5,
      name: "Seedsman",
      logo: "/images/seedsman-logo.png",
      rating: 4.6,
      reviews: 2847,
      location: "International",
      description: "World's largest cannabis seed bank with over 4000+ strains and global shipping to Canada.",
      paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer", "Cash"],
      deliveryTime: "7-14 business days",
      shippingCost: "Free over $90",
      specialties: ["Huge Selection", "Autoflowering Specialists", "Global Shipping", "Breeder Partnerships"],
      strainCount: "4000+",
      affiliate: true,
      affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
    },
    {
      rank: 6,
      name: "Crop King Seeds",
      logo: "/images/cropking-logo.png",
      rating: 4.4,
      reviews: 756,
      location: "British Columbia, Canada",
      description: "Canadian seed bank specializing in feminized and autoflowering seeds with guaranteed germination.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Bitcoin"],
      deliveryTime: "3-7 business days",
      shippingCost: "Free over $75",
      specialties: ["Germination Guarantee", "Feminized Seeds", "Customer Support", "Beginner Friendly"],
      strainCount: "300+",
      affiliate: false,
    },
    {
      rank: 7,
      name: "Herbies Seeds",
      logo: "/images/herbies-logo.png",
      rating: 4.3,
      reviews: 1234,
      location: "International",
      description: "UK-based seed bank with excellent customer service and stealth shipping to Canada.",
      paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer"],
      deliveryTime: "10-21 business days",
      shippingCost: "Free over $60",
      specialties: ["Stealth Shipping", "Customer Service", "Variety Packs", "Freebies"],
      strainCount: "2500+",
      affiliate: false,
    },
    {
      rank: 8,
      name: "ILGM (I Love Growing Marijuana)",
      logo: "/images/ilgm-logo.png",
      rating: 4.2,
      reviews: 987,
      location: "International",
      description: "Netherlands-based seed bank with growing guides and guaranteed delivery to Canada.",
      paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer"],
      deliveryTime: "7-25 business days",
      shippingCost: "Free shipping",
      specialties: ["Growing Guides", "Guaranteed Delivery", "Beginner Strains", "24/7 Support"],
      strainCount: "150+",
      affiliate: false,
    },
    {
      rank: 9,
      name: "Growers Choice Seeds",
      logo: "/images/growers-choice-logo.png",
      rating: 4.1,
      reviews: 543,
      location: "International",
      description: "California-based seed bank with premium genetics and fast shipping to Canada.",
      paymentMethods: ["Credit Card", "Bitcoin", "Cash"],
      deliveryTime: "5-10 business days",
      shippingCost: "$10 flat rate",
      specialties: ["Premium Genetics", "Fast Shipping", "Lab Tested", "High THC Strains"],
      strainCount: "200+",
      affiliate: false,
    },
    {
      rank: 10,
      name: "Rocket Seeds",
      logo: "/images/rocket-seeds-logo.png",
      rating: 4.0,
      reviews: 321,
      location: "Ontario, Canada",
      description: "Canadian seed bank focusing on high-quality genetics and excellent customer service.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Cash"],
      deliveryTime: "2-5 business days",
      shippingCost: "Free over $100",
      specialties: ["Quality Genetics", "Canadian Service", "Fast Processing", "Discreet Shipping"],
      strainCount: "250+",
      affiliate: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
            🇨🇦 Top 10 Seed Banks
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Best Cannabis Seed Banks for Canadians</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive ranking of the top 10 cannabis seed banks serving Canadian customers, including payment
            methods, delivery times, and specialties.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        <div className="space-y-8">
          {seedBanks.map((bank) => (
            <Card key={bank.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-muted/30">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Badge className="text-lg px-3 py-1 bg-red-600 text-white">#{bank.rank}</Badge>
                    <div className="w-16 h-16 bg-white rounded-lg border-2 border-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={bank.logo || "/placeholder.svg"}
                        alt={`${bank.name} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{bank.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{bank.location}</span>
                        {bank.location.includes("Canada") && <span className="text-red-600">🇨🇦</span>}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
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
                        <span className="text-gray-500">({bank.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {bank.affiliateUrl ? (
                      <Button asChild className="bg-red-600 hover:bg-red-700">
                        <a href={bank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </a>
                      </Button>
                    ) : (
                      <Button className="bg-red-600 hover:bg-red-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Site
                      </Button>
                    )}
                    <Button variant="outline">Read Review</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">{bank.description}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <CreditCard className="w-4 h-4 mr-2 text-red-600" />
                      Payment Methods
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {bank.paymentMethods.map((method) => (
                        <li key={method}>• {method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <Truck className="w-4 h-4 mr-2 text-red-600" />
                      Delivery Info
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">{bank.deliveryTime}</p>
                    <p className="text-sm text-gray-600">{bank.shippingCost}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <Package className="w-4 h-4 mr-2 text-red-600" />
                      Strain Selection
                    </h4>
                    <p className="text-sm text-gray-600">{bank.strainCount} strains</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {bank.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
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
    </div>
  )
}
