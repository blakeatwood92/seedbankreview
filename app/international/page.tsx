import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Globe, Truck, Shield, Clock, AlertTriangle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Best International Seed Banks That Ship to Canada | 2024 Guide",
  description: "Discover the top international cannabis seed banks that reliably ship to Canada. Compare shipping times, stealth options, customs success rates, and payment methods.",
  keywords: "international seed banks Canada, seed banks ship to Canada, overseas cannabis seeds, European seed banks Canada shipping",
}

const internationalBanks = [
  {
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    reviews: 2847,
    location: "United Kingdom",
    description: "World's largest cannabis seed bank with over 4000+ strains from 100+ breeders. Ships globally with stealth options.",
    paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer", "Cash"],
    shippingTime: "7-14 business days",
    shippingCost: "Free over $90",
    customsSuccess: "85%",
    specialties: ["Huge Selection", "Autoflowering Specialists", "Breeder Partnerships", "Free Seeds"],
    pros: ["Massive 4000+ strain selection", "Multiple payment options including crypto", "Regular promotions and freebies", "Established since 2003"],
    cons: ["Shipping takes 7-14 days", "Potential customs delays", "No guaranteed delivery to Canada"],
    affiliateUrl: "https://www.seedsman.com",
  },
  {
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    reviews: 1234,
    location: "International",
    description: "Premium international seed bank with their own Herbies Seeds line. Ships to Canada via Certified Mail with delivery guarantee.",
    paymentMethods: ["Credit Card", "Apple Pay", "Google Pay", "PayPal", "Interac", "Bitcoin", "USDT"],
    shippingTime: "9-12 days",
    shippingCost: "€10 (~$15 CAD)",
    customsSuccess: "95%",
    specialties: ["Delivery Guarantee", "Free Seeds with Orders", "Own Genetics Line", "Interac Accepted"],
    pros: ["Delivery guarantee - free reship if lost", "Accepts Interac for Canadians", "1 free seed per order + 1 per €20", "9-12 day delivery"],
    cons: ["Currency in EUR", "International shipping", "€10 shipping fee"],
    affiliateUrl: "https://herbiesheadshop.com",
  },
  {
    name: "ILGM",
    slug: "ilgm",
    logo: "/images/ilgm-logo.png",
    rating: 4.2,
    reviews: 987,
    location: "Netherlands",
    description: "I Love Growing Marijuana - Netherlands-based seed bank with comprehensive growing guides and guaranteed delivery.",
    paymentMethods: ["Credit Card", "Bitcoin", "Bank Transfer"],
    shippingTime: "7-25 business days",
    shippingCost: "Free shipping",
    customsSuccess: "90%",
    specialties: ["Growing Guides", "Guaranteed Delivery", "Beginner Strains", "24/7 Support"],
    pros: ["Free shipping worldwide", "Guaranteed delivery", "Excellent growing resources", "Beginner-friendly"],
    cons: ["Longer shipping times", "Smaller selection", "Higher prices"],
    affiliateUrl: "https://ilgm.com",
  },
  {
    name: "Crop King Seeds",
    slug: "crop-king-seeds",
    logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
    rating: 3.8,
    reviews: 756,
    location: "Canada/International",
    description: "Canadian seed bank with international shipping options. 80% germination guarantee on all seeds.",
    paymentMethods: ["Interac E-Transfer", "Credit Card", "Bitcoin"],
    shippingTime: "3-7 business days (Canada)",
    shippingCost: "Free over $75",
    customsSuccess: "100% (ships from Canada)",
    specialties: ["80% Germination Guarantee", "Feminized Seeds", "24/7 Live Chat", "Ships from Canada"],
    pros: ["Ships from within Canada", "80% germination guarantee", "24/7 support available", "No customs issues"],
    cons: ["Mixed reviews on quality", "Some shipping delays reported", "Limited strain selection"],
    affiliateUrl: "https://cropkingseeds.com",
  },
  {
    name: "Growers Choice Seeds",
    slug: "growers-choice-seeds",
    logo: "/images/growers-choice-logo.png",
    rating: 4.1,
    reviews: 543,
    location: "California, USA",
    description: "California-based seed bank with premium genetics, lab-tested seeds, and fast shipping to Canada.",
    paymentMethods: ["Credit Card", "Bitcoin", "Cash"],
    shippingTime: "5-10 business days",
    shippingCost: "$10 flat rate",
    customsSuccess: "88%",
    specialties: ["Premium Genetics", "Lab Tested", "High THC Strains", "Fast Shipping"],
    pros: ["Lab-tested genetics", "Fast shipping from USA", "High-quality strains", "Good germination rates"],
    cons: ["$10 flat shipping", "Smaller selection", "Potential customs delays"],
    affiliateUrl: "https://growerschoiceseeds.com",
  },
]

export default function InternationalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-700">
              <Globe className="w-3 h-3 mr-1" />
              International Seed Banks
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Best International Seed Banks Shipping to Canada
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Access world-class genetics from top international breeders with reliable shipping to Canada
            </p>
            <p className="text-blue-200 max-w-2xl mx-auto">
              While Canadian seed banks offer convenience, international seed banks provide access to exclusive genetics, 
              rare strains, and often better prices. Here are the most reliable options for Canadian growers.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-muted-foreground">Vetted Int'l Banks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">90%+</div>
              <div className="text-sm text-muted-foreground">Avg Customs Success</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">10,000+</div>
              <div className="text-sm text-muted-foreground">Strains Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">7-14</div>
              <div className="text-sm text-muted-foreground">Avg Shipping Days</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Important: International Shipping Considerations</h3>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• International orders may be subject to customs inspection</li>
                      <li>• Shipping times are longer than domestic Canadian options (7-25 days)</li>
                      <li>• Many banks offer stealth shipping to minimize detection</li>
                      <li>• Some banks offer delivery guarantees with free reshipping if seized</li>
                      <li>• Consider banks that accept cryptocurrency for added privacy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured - Apple Betty Auto from Herbies */}
      <section className="py-8 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container px-4 mx-auto">
          <a
            href="https://herbiesheadshop.com/cannabis-seeds/apple-betty-auto?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-purple-200">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Badge className="mb-2 bg-yellow-500 text-black">Featured from Herbies</Badge>
                    <h3 className="text-2xl font-bold">Apple Betty Auto</h3>
                    <p className="text-purple-100 text-sm mt-1">Herbies Seeds Original</p>
                    <div className="mt-3 text-xl font-bold text-yellow-300">10-20% OFF</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">Autoflowering</Badge>
                    <Badge variant="secondary">Ships to Canada</Badge>
                    <Badge variant="secondary">Delivery Guarantee</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Sweet apple pie flavors with relaxing effects. Easy-to-grow autoflower from Herbies' own genetics line. 
                    Ships to Canada in 9-12 days with delivery guarantee.
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Shop Apple Betty Auto
                  </Button>
                </div>
              </div>
            </Card>
          </a>
        </div>
      </section>

      {/* Seed Bank Listings */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Top International Seed Banks for Canadians</h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {internationalBanks.map((bank, index) => (
              <Card key={bank.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <Badge className="text-lg px-3 py-1 bg-blue-600">#{index + 1}</Badge>
                      <div className="w-20 h-20 relative bg-white rounded-lg shadow-sm overflow-hidden flex-shrink-0">
                        <Image
                          src={bank.logo}
                          alt={bank.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{bank.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Globe className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm">{bank.location}</span>
                        </div>
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
                          <span className="font-medium">{bank.rating}</span>
                          <span className="text-muted-foreground text-sm">({bank.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 lg:ml-auto">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
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
                  <p className="text-muted-foreground mb-6">{bank.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {bank.specialties.map((spec) => (
                      <Badge key={spec} variant="secondary">{spec}</Badge>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Shipping Time</h4>
                        <p className="text-sm text-muted-foreground">{bank.shippingTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Customs Success</h4>
                        <p className="text-sm text-muted-foreground">{bank.customsSuccess}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm">Shipping Cost</h4>
                        <p className="text-sm text-muted-foreground">{bank.shippingCost}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Payment Methods</h4>
                      <div className="flex flex-wrap gap-1">
                        {bank.paymentMethods.slice(0, 3).map((method) => (
                          <Badge key={method} variant="outline" className="text-xs">{method}</Badge>
                        ))}
                        {bank.paymentMethods.length > 3 && (
                          <Badge variant="outline" className="text-xs">+{bank.paymentMethods.length - 3}</Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-green-600 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" /> Pros
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {bank.pros.map((pro) => (
                          <li key={pro}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-red-600 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Cons
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {bank.cons.map((con) => (
                          <li key={con}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose International */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Order from International Seed Banks?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Exclusive Genetics</h3>
                <p className="text-muted-foreground text-sm">
                  Access rare strains and exclusive genetics from world-renowned breeders not available in Canada.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Better Selection</h3>
                <p className="text-muted-foreground text-sm">
                  International banks often carry 10x more strains than domestic options, with better variety.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">Competitive Prices</h3>
                <p className="text-muted-foreground text-sm">
                  Many international banks offer better prices, freebies, and loyalty programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Prefer Domestic Shipping?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            For faster delivery and no customs concerns, check out our top-rated Canadian seed banks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/canada">Canadian Seed Banks</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              <Link href="/seed-banks">View All Seed Banks</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
