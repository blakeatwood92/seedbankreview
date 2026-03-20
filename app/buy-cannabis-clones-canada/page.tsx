import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, MapPin, Truck, Leaf, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Where to Buy Cannabis Clones in Canada | Clone Vendors 2026",
  description: "Find trusted cannabis clone vendors in Canada. Compare Clone Superstore, Canada Clones Online, Premium Cannabis Clone, and more. Fast shipping, healthy plants.",
  keywords: "cannabis clones Canada, buy clones Canada, clone vendors Canada, cannabis clone delivery, marijuana clones online",
}

export default function BuyClonesCanadaPage() {
  const cloneVendors = [
    {
      rank: 1,
      name: "Clone Superstore",
      logo: "/images/clone-superstore-logo.png",
      rating: 4.5,
      reviews: 312,
      location: "Canada",
      description: "One of Canada's largest online clone retailers offering a wide selection of cannabis clones with nationwide shipping and a focus on healthy, rooted plants.",
      features: ["Wide Selection", "Nationwide Shipping", "Rooted Clones", "Quality Guarantee"],
      shippingInfo: "Ships across Canada",
      priceRange: "$$ - $$$",
      url: "https://clonesuperstore.com/",
    },
    {
      rank: 2,
      name: "Canada Clones Online",
      logo: "/images/canada-clones-online-logo.png",
      rating: 4.4,
      reviews: 245,
      location: "Canada",
      description: "Canadian clone vendor specializing in premium genetics with established mother plants. Known for healthy clones and responsive customer service.",
      features: ["Premium Genetics", "Healthy Plants", "Customer Support", "Variety Selection"],
      shippingInfo: "Canadian delivery",
      priceRange: "$$ - $$$",
      url: "https://www.canadaclonesonline.ca/",
    },
    {
      rank: 3,
      name: "Premium Cannabis Clone",
      logo: "/images/premium-cannabis-clone-logo.png",
      rating: 4.3,
      reviews: 189,
      location: "Canada",
      description: "Focused on delivering premium quality cannabis clones from elite mother plants. Offers a curated selection of popular and exotic strains.",
      features: ["Elite Genetics", "Premium Quality", "Exotic Strains", "Curated Selection"],
      shippingInfo: "Canada-wide shipping",
      priceRange: "$$$ - $$$$",
      url: "https://premiumcannabisclone.com/",
    },
    {
      rank: 4,
      name: "Online Clones",
      logo: "/images/online-clones-logo.png",
      rating: 4.2,
      reviews: 167,
      location: "Canada",
      description: "Convenient online platform for ordering cannabis clones in Canada. Offers a streamlined ordering process and reliable delivery across provinces.",
      features: ["Easy Ordering", "Reliable Delivery", "Multiple Strains", "Online Platform"],
      shippingInfo: "Ships to most provinces",
      priceRange: "$$ - $$$",
      url: "https://onlineclones.ca/",
    },
    {
      rank: 5,
      name: "Mr Clones",
      logo: "/images/mr-clones-logo.png",
      rating: 4.1,
      reviews: 134,
      location: "Canada",
      description: "Canadian clone provider offering a selection of cannabis clones with focus on beginner-friendly strains and established genetics.",
      features: ["Beginner Friendly", "Established Genetics", "Canadian Based", "Clone Variety"],
      shippingInfo: "Canadian shipping",
      priceRange: "$$ - $$$",
      url: "https://mrclones.com/",
    },
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
        <span className="ml-1 font-semibold">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-600">Cannabis Clones</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Where to Buy Cannabis Clones in Canada
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Skip the germination process and start with established plants. We've reviewed the top cannabis clone 
              vendors in Canada to help you find healthy, rooted clones delivered to your door.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Why Buy Cannabis Clones?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-lg">Advantages of Clones</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Guaranteed female plants</strong> - No risk of male plants or hermaphrodites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Skip germination</strong> - Start with established, rooted plants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Genetic consistency</strong> - Exact copy of the mother plant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Faster harvest</strong> - Several weeks head start on your grow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Known results</strong> - Predictable growth patterns and yields</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">Things to Consider</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Shipping stress</strong> - Clones can be sensitive during transport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Limited strains</strong> - Selection depends on what mothers are available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Pest risk</strong> - Clones can potentially carry pests or diseases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Higher cost</strong> - Usually more expensive per plant than seeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Seasonal availability</strong> - Some strains may not always be in stock</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clone Vendors List */}
        <h2 className="text-3xl font-bold mb-8 text-center">Top Cannabis Clone Vendors in Canada</h2>
        
        <div className="space-y-6 mb-12">
          {cloneVendors.map((vendor) => (
            <Card key={vendor.rank} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl">
                      #{vendor.rank}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{vendor.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {vendor.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Truck className="w-4 h-4" />
                            {vendor.shippingInfo}
                          </span>
                        </div>
                        {renderStars(vendor.rating)}
                        <span className="text-sm text-gray-500 ml-2">({vendor.reviews} reviews)</span>
                      </div>
                      <div className="flex gap-3">
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                          <a href={vendor.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Site
                          </a>
                        </Button>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{vendor.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vendor.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="bg-green-100 text-green-800">
                          <Leaf className="w-3 h-3 mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Price Range */}
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Price Range:</span> {vendor.priceRange}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Tips for Buying Cannabis Clones Online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Before Ordering</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>- Check reviews and reputation of the vendor</li>
                    <li>- Verify they ship to your province</li>
                    <li>- Understand their guarantee/replacement policy</li>
                    <li>- Plan your grow space before clones arrive</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">When Clones Arrive</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>- Unpack immediately and inspect for damage</li>
                    <li>- Check for signs of pests or disease</li>
                    <li>- Water lightly and place in low-light area initially</li>
                    <li>- Gradually introduce to your grow environment</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Best Time to Order</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>- Spring/early summer for outdoor grows</li>
                    <li>- Avoid extreme weather (hot summers, cold winters)</li>
                    <li>- Mid-week orders often ship faster</li>
                    <li>- Order early - popular strains sell out</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quarantine Protocol</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>- Keep new clones separate from existing plants</li>
                    <li>- Monitor for 1-2 weeks before introducing to grow room</li>
                    <li>- Inspect undersides of leaves for pests</li>
                    <li>- Consider preventative pest treatment</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clones vs Seeds Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Clones vs Seeds: Which is Right for You?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Factor</th>
                    <th className="text-left py-3 px-4">Clones</th>
                    <th className="text-left py-3 px-4">Seeds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Time to Harvest</td>
                    <td className="py-3 px-4 text-green-600">Faster (2-4 weeks head start)</td>
                    <td className="py-3 px-4">Standard timeline</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Genetic Consistency</td>
                    <td className="py-3 px-4 text-green-600">Exact copy of mother</td>
                    <td className="py-3 px-4">Variation possible</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Sex Guarantee</td>
                    <td className="py-3 px-4 text-green-600">Always female</td>
                    <td className="py-3 px-4">Feminized seeds 99%+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Strain Selection</td>
                    <td className="py-3 px-4">Limited to available mothers</td>
                    <td className="py-3 px-4 text-green-600">Thousands of options</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Shipping Risk</td>
                    <td className="py-3 px-4">Higher (live plants)</td>
                    <td className="py-3 px-4 text-green-600">Lower (dormant seeds)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Storage</td>
                    <td className="py-3 px-4">Must plant immediately</td>
                    <td className="py-3 px-4 text-green-600">Years if stored properly</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Cost per Plant</td>
                    <td className="py-3 px-4">Higher ($15-40+)</td>
                    <td className="py-3 px-4 text-green-600">Lower ($3-15)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Is it legal to buy cannabis clones in Canada?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, since cannabis legalization in 2018, adults can legally purchase cannabis plants and clones in Canada. 
                  You can grow up to 4 plants per household in most provinces (Quebec and Manitoba have restrictions).
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How are clones shipped?</h4>
                <p className="text-gray-600 text-sm">
                  Clones are typically shipped in specialized packaging with moisture retention and protection. 
                  Most vendors use express shipping to minimize transit time. Expect clones to arrive within 1-5 business days.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What if my clones arrive damaged?</h4>
                <p className="text-gray-600 text-sm">
                  Most reputable vendors offer replacement guarantees for dead-on-arrival clones. 
                  Document any damage with photos immediately upon arrival and contact the vendor within 24-48 hours.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I grow clones outdoors?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, but timing is important. In most of Canada, clones should be transplanted outdoors after the last frost 
                  (typically late May/early June). Gradually harden off clones before full outdoor exposure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Links */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Related Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/best-seed-banks-canada">Best Seed Banks Canada</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/growing-cannabis-in-canada">Growing Cannabis in Canada</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/autoflower-grow-guide">Autoflower Grow Guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/cannabis-soil-recipe">Cannabis Soil Recipe</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/are-cannabis-seeds-legal-canada">Cannabis Seeds Legal Canada</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
