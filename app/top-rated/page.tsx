import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Trophy, Users, ThumbsUp, Shield, Award, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Top Rated Cannabis Seed Banks in Canada | 2024 Rankings",
  description: "The highest-rated cannabis seed banks for Canadian growers, ranked by community reviews, germination rates, shipping reliability, and customer service.",
  keywords: "top rated seed banks Canada, best cannabis seed banks, highest rated seed banks, seed bank rankings Canada",
}

const topRatedBanks = [
  {
    rank: 1,
    name: "True North Seed Bank",
    slug: "true-north-seed-bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.8,
    totalReviews: 2847,
    location: "Canada",
    established: "2009",
    germRate: "95%",
    shippingScore: 4.9,
    customerService: 4.7,
    valueScore: 4.6,
    description: "Canada's most trusted seed bank with the largest selection and consistent reliability over 15+ years.",
    highlights: [
      "Largest Canadian selection (5000+ strains)",
      "Ships from within Canada - no customs",
      "Regular promotions and freebies",
      "Multiple payment options including E-Transfer",
    ],
    affiliateUrl: "https://truenorthseedbank.com",
  },
  {
    rank: 2,
    name: "Jordan of the Islands",
    slug: "jordan-of-the-islands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
    rating: 4.7,
    totalReviews: 1523,
    location: "British Columbia, Canada",
    established: "1992",
    germRate: "97%",
    shippingScore: 4.8,
    customerService: 4.9,
    valueScore: 4.5,
    description: "Legendary BC breeder with 30+ years of developing unique island genetics suited for Canadian climates.",
    highlights: [
      "Original Canadian breeder (30+ years)",
      "Direct breeder relationship",
      "Famous God Bud genetics",
      "Exceptional germination guarantee",
    ],
    affiliateUrl: "https://jordanoftheislands.com",
  },
  {
    rank: 3,
    name: "Quebec Cannabis Seeds",
    slug: "quebec-cannabis-seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
    rating: 4.6,
    totalReviews: 987,
    location: "Quebec, Canada",
    established: "2013",
    germRate: "93%",
    shippingScore: 4.7,
    customerService: 4.6,
    valueScore: 4.8,
    description: "Budget-friendly Canadian seed bank with genetics specifically bred for northern climates.",
    highlights: [
      "Best value for Canadian growers",
      "Northern climate genetics",
      "Beginner-friendly strains",
      "Extra seeds to compensate for males",
    ],
    affiliateUrl: "https://quebeccannabisseeds.com",
  },
  {
    rank: 4,
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    totalReviews: 3421,
    location: "International",
    established: "2000",
    germRate: "94%",
    shippingScore: 4.5,
    customerService: 4.6,
    valueScore: 4.7,
    description: "International seed bank with delivery guarantee and Interac payments for Canadian customers.",
    highlights: [
      "Delivery guarantee to Canada",
      "Accepts Interac (E-Transfer)",
      "Free seeds on every order",
      "Own Herbies Seeds genetics line",
    ],
    affiliateUrl: "https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639",
  },
  {
    rank: 5,
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    totalReviews: 5632,
    location: "United Kingdom",
    established: "2003",
    germRate: "90%",
    shippingScore: 4.0,
    customerService: 4.1,
    valueScore: 4.5,
    description: "World's largest seed bank with unmatched selection from 100+ breeders worldwide.",
    highlights: [
      "Largest selection globally (4000+ strains)",
      "100+ breeder partnerships",
      "Competitive bulk pricing",
      "Extensive loyalty program",
    ],
    affiliateUrl: "https://www.seedsman.com",
  },
]

const ratingCriteria = [
  {
    name: "Community Reviews",
    icon: Users,
    description: "Verified reviews from real Canadian growers across multiple platforms",
    weight: "30%",
  },
  {
    name: "Germination Rate",
    icon: CheckCircle,
    description: "Reported success rates from seeds purchased and grown",
    weight: "25%",
  },
  {
    name: "Shipping Reliability",
    icon: Shield,
    description: "Delivery success, speed, and packaging quality to Canadian addresses",
    weight: "25%",
  },
  {
    name: "Value & Service",
    icon: ThumbsUp,
    description: "Overall value, customer support quality, and problem resolution",
    weight: "20%",
  },
]

export default function TopRatedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-500">
              <Trophy className="w-3 h-3 mr-1" />
              2024 Rankings
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Top Rated Seed Banks for Canada
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              Ranked by Canadian growers, for Canadian growers
            </p>
            <p className="text-amber-200 max-w-2xl mx-auto">
              Our rankings are based on thousands of verified reviews, germination reports, shipping success rates, 
              and customer service experiences from the Canadian growing community.
            </p>
          </div>
        </div>
      </section>

      {/* Rating Criteria */}
      <section className="py-12 bg-white border-b">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How We Rank Seed Banks</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ratingCriteria.map((criteria) => (
              <Card key={criteria.name}>
                <CardContent className="p-5 text-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <criteria.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-semibold mb-1">{criteria.name}</h3>
                  <Badge variant="secondary" className="mb-2">{criteria.weight}</Badge>
                  <p className="text-muted-foreground text-xs">{criteria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">2024 Seed Bank Rankings</h2>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            {topRatedBanks.map((bank) => (
              <Card key={bank.slug} className={`overflow-hidden ${bank.rank === 1 ? 'ring-2 ring-amber-400 shadow-lg' : ''}`}>
                <CardHeader className={`${bank.rank === 1 ? 'bg-gradient-to-r from-amber-50 to-orange-50' : 'bg-muted/30'}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`relative ${bank.rank === 1 ? 'w-16 h-16' : 'w-14 h-14'}`}>
                        {bank.rank === 1 && (
                          <div className="absolute -top-2 -left-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center z-10">
                            <Trophy className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className={`w-full h-full flex items-center justify-center rounded-full ${
                          bank.rank === 1 ? 'bg-amber-500 text-white' : 
                          bank.rank === 2 ? 'bg-gray-400 text-white' : 
                          bank.rank === 3 ? 'bg-amber-700 text-white' : 
                          'bg-gray-200 text-gray-600'
                        }`}>
                          <span className="text-xl font-bold">#{bank.rank}</span>
                        </div>
                      </div>
                      <div className="w-16 h-16 relative bg-white rounded-lg shadow-sm overflow-hidden flex-shrink-0">
                        <Image
                          src={bank.logo}
                          alt={bank.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <CardTitle className={bank.rank === 1 ? 'text-2xl' : 'text-xl'}>{bank.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(bank.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-bold text-lg">{bank.rating}</span>
                          <span className="text-muted-foreground text-sm">({bank.totalReviews.toLocaleString()} reviews)</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <span>{bank.location}</span>
                          <span>•</span>
                          <span>Est. {bank.established}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 lg:ml-auto">
                      <Button asChild className={bank.rank === 1 ? 'bg-amber-600 hover:bg-amber-700' : 'bg-green-600 hover:bg-green-700'}>
                        <a href={bank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Site
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={`/reviews/${bank.slug}`}>Full Review</Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{bank.description}</p>
                  
                  {/* Score Breakdown */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-700">{bank.germRate}</div>
                      <div className="text-xs text-green-600">Germ Rate</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-700">{bank.shippingScore}/5</div>
                      <div className="text-xs text-blue-600">Shipping</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-700">{bank.customerService}/5</div>
                      <div className="text-xs text-purple-600">Service</div>
                    </div>
                    <div className="text-center p-3 bg-amber-50 rounded-lg">
                      <div className="text-lg font-bold text-amber-700">{bank.valueScore}/5</div>
                      <div className="text-xs text-amber-600">Value</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid md:grid-cols-2 gap-2">
                    {bank.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Test */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Testing Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Community Data</h3>
                  <p className="text-muted-foreground text-sm">
                    We aggregate reviews from multiple platforms including Reddit, GrowDiaries, SeedFinder, 
                    and growing forums to get a complete picture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Test Orders</h3>
                  <p className="text-muted-foreground text-sm">
                    We place test orders to Canadian addresses to verify shipping times, packaging quality, 
                    and actual germination rates firsthand.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Regular Updates</h3>
                  <p className="text-muted-foreground text-sm">
                    Rankings are updated quarterly based on new reviews, test results, and any reported 
                    changes in service quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-amber-700 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect Seed Bank</h2>
          <p className="text-amber-100 mb-6 max-w-xl mx-auto">
            Browse our complete directory with detailed reviews and comparisons for every seed bank.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
              <Link href="/seed-banks">View All Seed Banks</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-amber-600">
              <Link href="/canada">Canadian Seed Banks</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
