import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
  const canadianReviews = [
    {
      name: "FastBuzz.com",
      slug: "fastbuzz",
      rating: 4.8,
      location: "British Columbia, Canada",
      flag: "🇨🇦",
      summary: "Leading Canadian seed bank with exceptional customer service and premium West Coast genetics.",
      reviewed: false,
      payments: ["Interac e-Transfer", "Credit Card", "Bitcoin"],
      shipping: "1-2 days",
    },
    {
      name: "True North Seed Bank",
      slug: "true-north",
      rating: 4.7,
      location: "Ontario, Canada",
      flag: "🇨🇦",
      summary: "Trusted Canadian source with years of experience and verified genetics from coast to coast.",
      reviewed: false,
      payments: ["Interac e-Transfer", "Credit Card", "Cash"],
      shipping: "2-4 days",
    },
    {
      name: "Toronto Cannabis Seeds (TCS)",
      slug: "toronto-cannabis-seeds",
      rating: 4.5,
      location: "Ontario, Canada",
      flag: "🇨🇦",
      summary: "Toronto-based seed bank offering stealth shipping and variety packs with rotating promotions.",
      reviewed: false,
      payments: ["Visa/Mastercard", "Interac e-Transfer", "Cash", "Money Order"],
      shipping: "Varies by location",
      website: "torontocannabisseeds.com",
    },
    {
      name: "Canuk Seeds",
      slug: "canuk-seeds",
      rating: 4.4,
      location: "Canada",
      flag: "🇨🇦",
      summary: "Canadian seed bank with delivery insurance options and discreet packaging for domestic orders.",
      reviewed: false,
      payments: ["Credit/Debit Cards", "Interac e-Transfer", "Money Order"],
      shipping: "3-14 business days",
      website: "canukseeds.com",
    },
    {
      name: "Crop King Seeds",
      slug: "crop-king-seeds",
      rating: 4.6,
      location: "British Columbia, Canada",
      flag: "🇨🇦",
      summary: "Established Canadian seed bank with germination guarantee and Bitcoin payment bonuses.",
      reviewed: false,
      payments: ["Visa/Mastercard", "Interac e-Transfer", "Bitcoin"],
      shipping: "Tracked shipping",
      website: "cropkingseeds.com",
    },
    {
      name: "Sunwest Genetics",
      slug: "sunwest-genetics",
      rating: 4.3,
      location: "Vancouver, Canada",
      flag: "🇨🇦",
      summary: "Vancouver-based genetics company shipping via Canada Post with 3-7 day delivery times.",
      reviewed: false,
      payments: ["Visa/Mastercard", "Interac e-Transfer", "Bitcoin", "Cash"],
      shipping: "3-7 days from Vancouver",
      website: "sunwestgenetics.com",
    },
    {
      name: "Beaver Seeds",
      slug: "beaver-seeds",
      rating: 4.2,
      location: "Vancouver, Canada",
      flag: "🇨🇦",
      summary: "Vancouver-based seed bank with free shipping thresholds and bonus seed promotions.",
      reviewed: false,
      payments: ["Credit Card", "Bitcoin", "Cash"],
      shipping: "3-7 days via Canada Post",
      website: "beaverseed.com",
    },
    {
      name: "Rocket Seeds",
      slug: "rocket-seeds",
      rating: 4.0,
      location: "Ontario, Canada",
      flag: "🇨🇦",
      summary: "Canadian seed bank offering priority and ground shipping options with promotional deals.",
      reviewed: false,
      payments: ["Visa/Mastercard", "Bitcoin", "Interac e-Transfer"],
      shipping: "3-7 days Priority, 3-14 days Ground",
      website: "rocketseeds.com",
    },
    {
      name: "Sonoma Seeds",
      slug: "sonoma-seeds",
      rating: 4.1,
      location: "Vancouver, Canada",
      flag: "🇨🇦",
      summary: "Vancouver-based seed bank with discreet shipping and occasional sales promotions.",
      reviewed: false,
      payments: ["Visa/Mastercard", "Interac e-Transfer", "Bitcoin"],
      shipping: "3-7 days from Vancouver",
      website: "sonomaseeds.com",
    },
    {
      name: "Vancouver Seed Bank",
      slug: "vancouver-seed-bank",
      rating: 4.0,
      location: "Vancouver, Canada",
      flag: "🇨🇦",
      summary: "Vancouver-based seed bank with newsletter deals and contactable support line.",
      reviewed: false,
      payments: ["Interac e-Transfer", "MoneyGram", "Money Order"],
      shipping: "Discreet methods",
      website: "vancouverseedbank.ca",
    },
    {
      name: "BC Bud Depot",
      slug: "bc-bud-depot",
      rating: 4.3,
      location: "British Columbia, Canada",
      flag: "🇨🇦",
      summary: "Award-winning BC-based seed bank with free shipping over $200 and various promotions.",
      reviewed: false,
      payments: ["Visa/Mastercard", "Bitcoin", "Cash"],
      shipping: "5-7 business days North America",
      website: "bcbuddepot.com",
    },
    {
      name: "Jordan of the Islands",
      slug: "jordan-islands",
      rating: 4.6,
      location: "British Columbia, Canada",
      flag: "🇨🇦",
      summary: "Heritage Canadian breeder offering unique island-bred cannabis genetics since the 90s.",
      reviewed: false,
      payments: ["Interac e-Transfer", "Bitcoin", "Cash"],
      shipping: "Canada/Worldwide discreet",
      website: "jordanoftheislands.com",
    },
    {
      name: "EC Genetics",
      slug: "ec-genetics",
      rating: 3.9,
      location: "Canada",
      flag: "🇨🇦",
      summary: "Canada-based genetics company with simple e-Transfer payment flow and auto-deposit.",
      reviewed: false,
      payments: ["Interac e-Transfer", "Cash", "Money Order"],
      shipping: "Contact for details",
      website: "ecgenetics.ca",
    },
    {
      name: "Weed-Seeds.ca",
      slug: "weed-seeds-ca",
      rating: 3.8,
      location: "Canada",
      flag: "🇨🇦",
      summary: "Canadian seed bank with province-specific pages and comprehensive strain guides.",
      reviewed: false,
      payments: ["Interac e-Transfer"],
      shipping: "Varies by province",
      website: "weed-seeds.ca",
    },
  ]

  const internationalReviews = [
    {
      name: "Herbies Head Shop",
      slug: "herbies-headshop",
      rating: 4.3,
      location: "United Kingdom",
      flag: "🇬🇧",
      summary: "UK-based seed bank with excellent customer service and stealth shipping to Canada.",
      reviewed: true,
      payments: ["Credit Cards", "Bitcoin", "Bank Transfer"],
      shipping: "10-21 days to Canada",
    },
    {
      name: "Seedsman",
      slug: "seedsman",
      rating: 4.6,
      location: "International",
      flag: "🌍",
      summary: "World's largest cannabis seed bank with over 4000+ strains and global shipping to Canada.",
      reviewed: false,
      payments: ["Credit Cards", "Bitcoin", "Bank Transfer"],
      shipping: "7-14 days to Canada",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
            🇨🇦 Comprehensive Reviews
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cannabis Seed Bank Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth reviews of cannabis seed banks serving Canadian customers. Read our comprehensive analysis of
            Canadian and international options.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        {/* Canadian Seed Banks Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <span className="text-red-600">🇨🇦</span>
              Canadian Seed Banks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Domestic seed banks offering fast shipping, no customs delays, and Canadian payment methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {canadianReviews.map((review) => (
              <Card key={review.slug} className="hover:shadow-lg transition-shadow border-red-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{review.flag}</span>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                    </div>
                    {review.reviewed ? (
                      <Badge className="bg-green-100 text-green-800">Reviewed</Badge>
                    ) : (
                      <Badge variant="outline">Coming Soon</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{review.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.rating}/5</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{review.summary}</p>

                  <div className="space-y-2 mb-4 text-xs">
                    <div>
                      <span className="font-medium text-red-600">Payments:</span>
                      <span className="text-gray-600 ml-1">{review.payments.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-medium text-red-600">Shipping:</span>
                      <span className="text-gray-600 ml-1">{review.shipping}</span>
                    </div>
                    {review.website && (
                      <div>
                        <span className="font-medium text-red-600">Website:</span>
                        <span className="text-gray-600 ml-1">{review.website}</span>
                      </div>
                    )}
                  </div>

                  {review.reviewed ? (
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href={`/reviews/${review.slug}`}>Read Full Review</Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full">
                      Review Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* International Seed Banks Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <span className="text-blue-600">🌍</span>
              International Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              International seed banks that ship to Canada - longer delivery times but often larger selections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalReviews.map((review) => (
              <Card key={review.slug} className="hover:shadow-lg transition-shadow border-blue-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{review.flag}</span>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                    </div>
                    {review.reviewed ? (
                      <Badge className="bg-green-100 text-green-800">Reviewed</Badge>
                    ) : (
                      <Badge variant="outline">Coming Soon</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{review.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.rating}/5</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{review.summary}</p>

                  <div className="space-y-2 mb-4 text-xs">
                    <div>
                      <span className="font-medium text-blue-600">Payments:</span>
                      <span className="text-gray-600 ml-1">{review.payments.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-600">Shipping:</span>
                      <span className="text-gray-600 ml-1">{review.shipping}</span>
                    </div>
                  </div>

                  {review.reviewed ? (
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={`/reviews/${review.slug}`}>Read Full Review</Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full">
                      Review Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're constantly adding new reviews. Check out our comprehensive seed bank rankings or browse by category to
            find the perfect genetics for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/seed-banks">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Seed Banks
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/provinces">Provincial Growing Guides</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
