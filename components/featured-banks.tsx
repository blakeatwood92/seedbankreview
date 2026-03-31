import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, MapPin, Truck, CreditCard, Globe } from "lucide-react"
import Link from "next/link"

export function FeaturedBanks() {
  const canadianBanks = [
    {
      name: "True North Seed Bank",
      slug: "true-north",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
      rating: 4.8,
      reviews: 1247,
      location: "Ontario",
      specialties: ["Established Reputation", "Wide Selection", "Secure Payment"],
      description: "Trusted Canadian source with years of experience and verified genetics from coast to coast.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Cash"],
      shippingTime: "2-4 days",
      provinces: ["ON", "QC", "BC", "AB"],
      affiliate: true,
      affiliateUrl: "https://truenorthseedbank.com",
    },
{
  name: "Quebec Cannabis Seeds",
      slug: "quebec-cannabis-seeds",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
      rating: 4.6,
      reviews: 578,
      location: "Quebec",
      specialties: ["Beginner Friendly", "Outdoor Genetics", "Northern Climate", "Free Express $200+"],
      description: "Quebec-based seed bank built for Canadian hobbyists with easy-to-grow genetics suited for northern climates. Fast 3 business day shipping across Canada.",
      paymentMethods: ["Credit Card", "Interac E-Transfer"],
      shippingTime: "3 business days",
      provinces: ["QC", "ON", "NB", "NS"],
      affiliate: true,
      affiliateUrl: "https://quebeccannabisseeds.com",
    },
    {
      name: "GoBack Seed Bank",
      slug: "goback-seed-bank",
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
      affiliateUrl: "https://gobackseedbank.com",
    },
    {
      name: "Butterbean Birdseed",
      slug: "butterbean-birdseed",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-Z58t5ADg5F6WMHT7mVUV4BJ0DPcwth.png",
      rating: 4.5,
      reviews: 156,
      location: "Canada",
      specialties: ["Autoflower Specialist", "Canadian Breeder", "Northern Climate", "Direct from Breeder"],
      description: "Canadian autoflower breeder specializing in fast-finishing strains for northern climates. Unique genetics like Mac N Cheese Auto and Banana Runtz Auto.",
      paymentMethods: ["Interac E-Transfer", "Cash"],
      shippingTime: "3-7 days",
      provinces: ["All Provinces"],
      affiliate: false,
      affiliateUrl: "#",
      isNew: true,
    },
    {
      name: "Seeds Online",
      slug: "seeds-online",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84267487_115064260055533_1100969039028551680_n-oMcDc3E2crRygpg0ehG6mlStSkcmx1.jpg",
      rating: 4.6,
      reviews: 312,
      location: "Canada",
      specialties: ["7 Years in Business", "PayPal Accepted", "$1 Seeds", "Authorized Ethos Vendor"],
      description: "Established Canadian seed bank in their 7th year. Single seeds from $1, authorized vendor for Ethos and exclusive Canadian vendor for Square One/Robinhood.",
      paymentMethods: ["PayPal", "Interac E-Transfer", "Crypto", "Cash"],
      shippingTime: "2-5 days",
      provinces: ["All Provinces"],
      affiliate: false,
      affiliateUrl: "https://weedseedsonline.net",
    },
    {
      name: "Highly Stoned Seeds",
      slug: "highly-stoned-seeds",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cd25f659-37f1-4d5f-a1ee-8d23a1ee1939-7h9cWtPaa76zf6bfJ0qd3DfgRBZOeZ.jpeg",
      rating: 4.4,
      reviews: 87,
      location: "Nova Scotia",
      specialties: ["In-House Genetics", "Exotic Genetix Crosses", "Nova Scotia Based", "Fast Shipping"],
      description: "Nova Scotia-based seed bank with exclusive in-house genetics and Exotic Genetix crosses. Fast Canadian shipping with credit card.",
      paymentMethods: ["Credit Card", "Google Pay", "Interac E-Transfer"],
      shippingTime: "2-5 days",
      provinces: ["All Provinces"],
      affiliate: false,
      affiliateUrl: "https://highlystonedseeds.com",
    },
  ]

  const internationalBanks = [
    {
      name: "Herbies Seeds",
      slug: "herbies-headshop",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
      rating: 4.5,
      reviews: 1234,
      location: "International",
      specialties: ["Delivery Guarantee", "Free Seeds", "Interac Payment"],
      description: "International seed bank with delivery guarantee to Canada. Ships in 9-12 days with Interac support.",
      paymentMethods: ["Credit Card", "Interac", "Bitcoin"],
      shippingTime: "9-12 days to Canada",
      provinces: ["All Provinces"],
      affiliate: true,
      affiliateUrl: "https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639",
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
                    <p className="text-gray-600">{bank.paymentMethods.join(", ")}</p>
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
                  <Button asChild className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                    <a href={bank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
                    <Link href={`/reviews/${bank.slug}`}>Full Review</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">International Options</h3>
            <p className="text-gray-600">
              While we focus on Canadian seed banks, here are trusted international options that ship to Canada
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {internationalBanks.map((bank, index) => (
              <Card
                key={bank.name}
                className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-100"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Badge className="absolute -top-2 -left-2 bg-blue-600 text-white z-10">International</Badge>
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
                          <Globe className="w-3 h-3 text-blue-600" />
                          <span className="text-sm text-gray-600">{bank.location}</span>
                          <span className="text-blue-600 text-sm">🌍</span>
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
                        <Truck className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Shipping</span>
                      </div>
                      <p className="text-gray-600">{bank.shippingTime}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Payment</span>
                      </div>
                      <p className="text-gray-600">{bank.paymentMethods.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {bank.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs border-blue-200 text-blue-700">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <a href={bank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Herbies
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent">
                      <Link href={`/reviews/${bank.slug}`}>Full Review</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
            <Link href="/seed-banks">View All Canadian Seed Banks</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
