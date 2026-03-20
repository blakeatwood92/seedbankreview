import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, MapPin, Truck, CreditCard, Package } from "lucide-react"
import Link from "next/link"

export default function SeedBanksPage() {
  const seedBanks = [
    {
      rank: 1,
      name: "True North Seed Bank",
      slug: "true-north",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
      rating: 4.8,
      reviews: 1247,
      location: "Ontario, Canada",
      description: "Trusted Canadian source with years of experience and verified genetics from coast to coast.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Cash", "Money Order"],
      deliveryTime: "2-4 business days",
      shippingCost: "Free over $75",
      specialties: ["Established Reputation", "Wide Selection", "Secure Payment", "Quality Guarantee"],
      strainCount: "800+",
      affiliate: true,
      affiliateUrl: "https://truenorthseedbank.com",
    },
{
  rank: 2,
  name: "Quebec Cannabis Seeds",
      slug: "quebec-cannabis-seeds",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
      rating: 4.6,
      reviews: 578,
      location: "Quebec, Canada",
      description: "Quebec-based seed bank built for Canadian hobbyists with easy-to-grow genetics suited for northern climates and first-time growers. Regular shipping 3-7 days, express shipping 1-2 days.",
      paymentMethods: ["Credit Card", "Interac E-Transfer"],
      deliveryTime: "Regular: 3-7 days | Express: 1-2 days",
      shippingCost: "Free express shipping over $200",
      specialties: ["Beginner Friendly", "Outdoor Genetics", "Northern Climate", "Free Express $200+"],
      strainCount: "300+",
      affiliate: true,
      affiliateUrl: "https://quebeccannabisseeds.com",
    },
    {
      rank: 3,
      name: "Butterbean Birdseed",
      slug: "butterbean-birdseed",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-Z58t5ADg5F6WMHT7mVUV4BJ0DPcwth.png",
      rating: 4.5,
      reviews: 156,
      location: "Canada",
      description: "Canadian autoflower breeder specializing in fast-finishing strains for northern climates. Direct from breeder with unique genetics like Mac N Cheese Auto and Banana Runtz Auto.",
      paymentMethods: ["Interac E-Transfer", "Cash"],
      deliveryTime: "3-7 business days",
      shippingCost: "Varies",
      specialties: ["Autoflower Specialist", "Canadian Breeder", "Northern Climate Genetics", "Direct from Breeder"],
      strainCount: "50+",
      affiliate: false,
      affiliateUrl: "#",
    },
    {
      rank: 4,
      name: "Seeds Online",
      slug: "seeds-online",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84267487_115064260055533_1100969039028551680_n-oMcDc3E2crRygpg0ehG6mlStSkcmx1.jpg",
      rating: 4.6,
      reviews: 312,
      location: "Canada",
      description: "Established Canadian seed bank in their 7th year of service. Single seeds from $1, authorized vendor for Ethos and exclusive Canadian vendor for Square One/Robinhood Genetics.",
      paymentMethods: ["PayPal", "Interac E-Transfer", "Crypto", "Cash"],
      deliveryTime: "2-5 business days",
      shippingCost: "Varies",
      specialties: ["7 Years in Business", "Single Seed Sales", "Authorized Ethos Vendor", "$1 Seeds Available"],
      strainCount: "500+",
      affiliate: false,
      affiliateUrl: "https://weedseedsonline.net",
    },
    {
      rank: 5,
      name: "GoBack Seed Bank",
      slug: "goback-seed-bank",
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
      affiliateUrl: "https://gobackseedbank.com",
    },
    {
      rank: 6,
      name: "Herbies Seeds",
      slug: "herbies-headshop",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
      rating: 4.5,
      reviews: 1234,
      location: "International",
      description: "International seed bank with their own Herbies Seeds line plus hundreds of strains from well-known breeders. Ships to Canada via Certified Mail with delivery guarantee.",
      paymentMethods: ["Credit Card", "Apple Pay", "Google Pay", "PayPal", "Interac", "Bank Transfer", "Bitcoin", "USDT"],
      deliveryTime: "9-12 days to Canada",
      shippingCost: "€10 (~$15 CAD)",
      specialties: ["Delivery Guarantee", "Free Seeds with Orders", "Own Genetics Line", "Regular Promotions"],
      strainCount: "2500+",
      affiliate: true,
      affiliateUrl: "https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639",
    },
    {
      rank: 7,
      name: "Crop King Seeds",
      slug: "crop-king-seeds",
      logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
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
      affiliateUrl: "https://cropkingseeds.com",
    },
    {
      rank: 8,
      name: "Seedsman",
      slug: "seedsman",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
      rating: 4.0,
      reviews: 2847,
      location: "International",
      description: "World's largest cannabis seed bank with over 4000+ strains. Mixed reviews on service quality.",
      paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer", "Cash"],
      deliveryTime: "7-14 business days",
      shippingCost: "Free over $90",
      specialties: ["Huge Selection", "Autoflowering Specialists", "Global Shipping", "Breeder Partnerships"],
      strainCount: "4000+",
      affiliate: false,
      affiliateUrl: "https://www.seedsman.com",
    },
    {
      rank: 9,
      name: "ILGM (I Love Growing Marijuana)",
      slug: "ilgm",
      logo: "https://www.ilovegrowingmarijuana.com/wp-content/themes/flavor/images/ilgm-logo.svg",
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
      affiliateUrl: "https://ilgm.com",
    },
    {
      rank: 10,
      name: "Growers Choice Seeds",
      slug: "growers-choice-seeds",
      logo: "https://www.growerschoiceseeds.com/wp-content/uploads/2020/08/growers-choice-seeds-logo.png",
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
      affiliateUrl: "https://growerschoiceseeds.com",
    },
    {
      rank: 11,
      name: "Rocket Seeds",
      slug: "rocket-seeds",
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
      affiliateUrl: "https://rfrk.net/rocketseeds",
    },
    {
      rank: 12,
      name: "Gasd Up Seeds",
      slug: "gasd-up-seeds",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/475543832_426187703911637_152434204950628002_n-4o0JuLlDM72po666KhR2qk5eqMnYb0.jpg",
      rating: 4.4,
      reviews: 87,
      location: "British Columbia, Canada",
      description: "BC-based seed bank specializing in exclusive in-house genetics, Exotic Genetix crosses, and fast Canadian shipping with e-transfer payments.",
      paymentMethods: ["Interac E-Transfer"],
      deliveryTime: "2-5 business days",
      shippingCost: "$15 flat rate",
      specialties: ["In-House Genetics", "Exotic Genetix Crosses", "BC Based", "Fast Shipping"],
      strainCount: "50+",
      affiliate: false,
      affiliateUrl: "https://gasdupseeds.com",
    },
    {
      rank: 13,
      name: "Montreal Cannabis Seeds",
      slug: "montreal-cannabis-seeds",
      logo: "/images/montreal-cannabis-seeds-logo.png",
      rating: 4.3,
      reviews: 245,
      location: "Montreal, Quebec",
      description: "Quebec-based seed bank offering a curated selection of cannabis genetics with fast Canadian shipping and bilingual customer support.",
      paymentMethods: ["Interac E-Transfer", "Credit Card", "Crypto"],
      deliveryTime: "2-5 business days",
      shippingCost: "Free over $150",
      specialties: ["Quebec Based", "Bilingual Support", "Canadian Genetics", "Fast Shipping"],
      strainCount: "200+",
      affiliate: false,
      affiliateUrl: "https://montrealcannabis-seeds.ca/",
    },
    {
      rank: 14,
      name: "Jordan of the Islands",
      slug: "jordan-of-the-islands",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
      rating: 3.2,
      reviews: 892,
      location: "British Columbia, Canada",
      description: "Historic Canadian breeder (since 1992) known for God Bud. Recent reports of communication issues and germination problems - order with caution.",
      paymentMethods: ["Interac E-Transfer", "Cash", "Money Order", "Crypto"],
      deliveryTime: "3-5 business days",
      shippingCost: "$15 flat rate",
      specialties: ["Original Genetics", "Breeder Direct", "Island Strains", "God Bud Creator"],
      strainCount: "200+",
      affiliate: false,
      affiliateUrl: "https://jordanoftheislands.com",
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
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <a href={bank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Site
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/reviews/${bank.slug}`}>Read Review</Link>
                    </Button>
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
