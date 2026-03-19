import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, Leaf, Zap, Moon, Sun } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Best Cannabis Seeds in Canada 2026 | Top Strains Guide",
  description: "Discover the best cannabis seeds available in Canada for 2026. Compare top strains by type, effects, and growing difficulty with recommendations from experts.",
  keywords: "best cannabis seeds canada, top strains canada, best weed seeds, cannabis seeds 2026, marijuana seeds canada",
}

export default function BestCannabisSeedsPage() {
  const topStrains = [
    {
      name: "Gorilla Cookies Auto",
      breeder: "FastBuds",
      type: "Autoflower",
      thc: "25-28%",
      yield: "High",
      difficulty: "Easy",
      flowerTime: "9-10 weeks",
      effects: "Potent, Relaxing, Euphoric",
      href: "/strains/gorilla-cookies-auto",
    },
    {
      name: "Northern Lights",
      breeder: "Various",
      type: "Photoperiod",
      thc: "18-22%",
      yield: "Medium-High",
      difficulty: "Easy",
      flowerTime: "7-8 weeks",
      effects: "Relaxing, Sleepy, Happy",
      href: "/strains/northern-lights",
    },
    {
      name: "Blue Dream",
      breeder: "Various",
      type: "Photoperiod",
      thc: "21-24%",
      yield: "High",
      difficulty: "Easy",
      flowerTime: "9-10 weeks",
      effects: "Balanced, Creative, Uplifting",
      href: "/strains/blue-dream",
    },
    {
      name: "Grandmommy Purple",
      breeder: "Ethos",
      type: "Photoperiod",
      thc: "28-33%",
      yield: "High",
      difficulty: "Moderate",
      flowerTime: "8-9 weeks",
      effects: "Potent, Relaxing, Sedating",
      href: "/strains/grandmommy-purple",
    },
    {
      name: "Sour Crack Auto",
      breeder: "Mephisto",
      type: "Autoflower",
      thc: "20-24%",
      yield: "Medium",
      difficulty: "Easy",
      flowerTime: "60-65 days",
      effects: "Energetic, Focused, Happy",
      href: "/strains/sour-crack-auto",
    },
    {
      name: "Apple Betty",
      breeder: "Ethos",
      type: "Photoperiod",
      thc: "25-30%",
      yield: "High",
      difficulty: "Moderate",
      flowerTime: "8-9 weeks",
      effects: "Balanced, Creative, Relaxing",
      href: "/strains/apple-betty",
    },
  ]

  const categories = [
    {
      title: "Best Autoflowers",
      icon: Zap,
      description: "Fast, easy, and perfect for beginners or short seasons",
      strains: ["Gorilla Cookies Auto", "Sour Crack Auto", "Northern Lights Auto"],
      href: "/best-autoflower-seeds-canada",
    },
    {
      title: "Best for Beginners",
      icon: Leaf,
      description: "Forgiving genetics that tolerate mistakes",
      strains: ["Northern Lights", "Blue Dream", "White Widow"],
      href: "/strains",
    },
    {
      title: "Best for Relaxation",
      icon: Moon,
      description: "Indica-dominant strains for evening use",
      strains: ["Grandmommy Purple", "Northern Lights", "Purple Kush"],
      href: "/strains",
    },
    {
      title: "Best for Outdoor",
      icon: Sun,
      description: "Hardy strains suited to Canadian climate",
      strains: ["Northern Lights", "Durban Poison", "Early Skunk"],
      href: "/best-outdoor-strains-canada",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">2026 Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Best Cannabis Seeds in Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experts have tested and reviewed hundreds of strains to bring you the best cannabis 
            seeds available to Canadian growers in 2026.
          </p>
        </div>

        {/* Top Strains */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Top Rated Strains for 2026</h2>
          
          <div className="space-y-4">
            {topStrains.map((strain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex items-center gap-4 lg:w-1/4">
                      <span className="text-2xl font-bold text-green-600">#{index + 1}</span>
                      <div>
                        <Link href={strain.href} className="font-bold text-lg hover:text-green-600">{strain.name}</Link>
                        <p className="text-sm text-gray-500">{strain.breeder}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 lg:w-1/4">
                      <Badge className={strain.type === "Autoflower" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                        {strain.type}
                      </Badge>
                      <Badge variant="outline">THC: {strain.thc}</Badge>
                      <Badge variant="outline">{strain.difficulty}</Badge>
                    </div>
                    
                    <div className="lg:w-1/4">
                      <p className="text-sm text-gray-600">
                        <strong>Yield:</strong> {strain.yield} | <strong>Flower:</strong> {strain.flowerTime}
                      </p>
                      <p className="text-sm text-gray-500">{strain.effects}</p>
                    </div>
                    
                    <div className="lg:w-1/4 lg:text-right">
                      <div className="flex items-center gap-1 lg:justify-end mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <Button asChild size="sm">
                        <Link href={strain.href}>View Strain</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Browse by Category</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <category.icon className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.strains.map((strain, i) => (
                        <Badge key={i} variant="outline">{strain}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* How to Choose */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>How to Choose the Right Seeds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Consider Your Setup</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <strong>Indoor vs Outdoor:</strong> Some strains perform better in controlled environments
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <strong>Space Available:</strong> Choose compact strains for small tents
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <strong>Time Constraints:</strong> Autoflowers are fastest; photos offer more control
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Consider Your Goals</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <strong>Desired Effects:</strong> Indica for relaxation, Sativa for energy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <strong>THC Tolerance:</strong> Start with moderate THC if you're new
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <strong>Flavor Preference:</strong> Fruity, earthy, diesel - genetics determine taste
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Where to Buy */}
        <Card className="mb-12 border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Where to Buy Quality Seeds in Canada</h2>
            <p className="text-gray-600 mb-4">
              We've reviewed and ranked the best Canadian seed banks based on selection, pricing, 
              customer service, and shipping speed. All recommended seed banks offer germination 
              guarantees and discreet packaging.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/seed-banks">View Top Seed Banks</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Related Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">More Strain Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-autoflower-seeds-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Autoflower Seeds</h3>
                  <p className="text-sm text-gray-600">Top autoflowering strains for Canadian growers.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-outdoor-strains-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Outdoor Strains</h3>
                  <p className="text-sm text-gray-600">Hardy strains for Canadian outdoor growing.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/strains">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Full Strain Directory</h3>
                  <p className="text-sm text-gray-600">Browse all reviewed strains.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow?</h2>
          <p className="text-gray-600 mb-6">Find these strains at trusted Canadian seed banks.</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/seed-banks">Browse Seed Banks</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
