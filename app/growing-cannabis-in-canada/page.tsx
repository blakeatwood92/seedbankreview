import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Home, Sun, Droplets, Leaf, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Growing Cannabis in Canada 2026 | Complete Beginner's Guide",
  description: "Learn how to grow cannabis in Canada from seed to harvest. Covers indoor and outdoor growing, legal limits, equipment, and tips for Canadian growers.",
  keywords: "growing cannabis canada, how to grow weed canada, cannabis cultivation guide, home growing canada, beginner growing guide",
}

export default function GrowingCannabisinCanadaPage() {
  const guides = [
    {
      title: "Autoflower Grow Guide",
      description: "Complete guide to growing autoflowering cannabis - perfect for beginners and short seasons.",
      href: "/autoflower-grow-guide",
      icon: Leaf,
      color: "green",
    },
    {
      title: "Outdoor Growing in Canada",
      description: "Master outdoor cultivation with regional guides, planting schedules, and strain recommendations.",
      href: "/outdoor-growing-canada",
      icon: Sun,
      color: "yellow",
    },
    {
      title: "Best Grow Lights",
      description: "Compare LED grow lights for indoor cannabis cultivation in Canada.",
      href: "/best-grow-lights-canada",
      icon: Sun,
      color: "blue",
    },
    {
      title: "Grow Tent Setup",
      description: "Complete guide to setting up your indoor grow tent from start to finish.",
      href: "/grow-tent-setup-guide",
      icon: Home,
      color: "purple",
    },
    {
      title: "Cannabis Soil Recipe",
      description: "DIY super soil recipe optimized for Canadian growers.",
      href: "/cannabis-soil-recipe",
      icon: Leaf,
      color: "amber",
    },
    {
      title: "Best Nutrients",
      description: "Top nutrient brands and feeding schedules for healthy plants.",
      href: "/best-nutrients-for-cannabis",
      icon: Droplets,
      color: "green",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800">
            <span className="mr-1">🍁</span> Canadian Growing Guide
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Growing Cannabis in Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete resource for growing cannabis at home in Canada. From understanding the law 
            to harvesting your first crop, we've got you covered.
          </p>
        </div>

        {/* Legal Quick Info */}
        <Card className="mb-12 border-green-300 bg-green-50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-3">Is Home Growing Legal in Canada?</h2>
                <p className="text-gray-600 mb-4">
                  Yes! Under the Cannabis Act, adults can grow up to 4 cannabis plants per household 
                  in most provinces. Manitoba and Quebec have banned home cultivation.
                </p>
                <Button asChild variant="outline">
                  <Link href="/are-cannabis-seeds-legal-canada">Full Legal Guide</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600">4</p>
                  <p className="text-sm text-gray-600">Plants per household</p>
                </div>
                <div className="p-4 bg-white rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600">10/13</p>
                  <p className="text-sm text-gray-600">Provinces allow it</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indoor vs Outdoor */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Indoor vs Outdoor Growing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-6 h-6 text-blue-600" />
                  Indoor Growing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Complete environmental control year-round. Higher startup cost but more consistent results.
                  </p>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Grow year-round
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Control light, temp, humidity
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        No weather concerns
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Multiple harvests per year
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>- Higher electricity costs</li>
                      <li>- Equipment investment required</li>
                      <li>- Requires more attention</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/grow-tent-setup-guide">Indoor Setup Guide</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-6 h-6 text-green-600" />
                  Outdoor Growing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Harness free sunlight with lower costs. Limited to Canada's short growing season.
                  </p>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Free sunlight
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Lower startup cost
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Larger potential yields
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        More natural terpene profiles
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>- Short Canadian season</li>
                      <li>- Weather/pest concerns</li>
                      <li>- One harvest per year</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/outdoor-growing-canada">Outdoor Growing Guide</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Getting Started Steps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Getting Started: 5 Steps to Your First Grow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Check Your Provincial Laws</h3>
                  <p className="text-sm text-gray-600">Confirm home growing is legal in your province. Manitoba and Quebec prohibit it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Choose Indoor or Outdoor</h3>
                  <p className="text-sm text-gray-600">Decide based on your space, budget, and timeline. Indoor offers more control; outdoor is more affordable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Select Your Seeds</h3>
                  <p className="text-sm text-gray-600">Beginners should start with autoflowers - they're forgiving and fast. Consider your growing environment when choosing.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Gather Equipment</h3>
                  <p className="text-sm text-gray-600">For indoor: tent, lights, fans, pots, soil. For outdoor: pots or garden bed, soil amendments, possibly stakes/cages.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">5</div>
                <div>
                  <h3 className="font-semibold mb-1">Start Growing!</h3>
                  <p className="text-sm text-gray-600">Germinate your seeds, plant them, and follow our guides for watering, feeding, and care through harvest.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guide Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <BookOpen className="w-8 h-8 inline-block mr-2 text-green-600" />
            Growing Guides
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Link key={index} href={guide.href}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <guide.icon className={`w-8 h-8 text-${guide.color}-600 mb-3`} />
                    <h3 className="font-semibold mb-2">{guide.title}</h3>
                    <p className="text-sm text-gray-600">{guide.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Beginner Strains */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Best Strains for Canadian Beginners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              These strains are forgiving, resilient, and well-suited to Canadian growing conditions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/strains/northern-lights">
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Badge className="mb-2">Classic</Badge>
                  <h3 className="font-semibold">Northern Lights</h3>
                  <p className="text-sm text-gray-600">Hardy, forgiving, and fast. Perfect first grow.</p>
                </div>
              </Link>
              <Link href="/strains/gorilla-cookies-auto">
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Badge className="mb-2 bg-green-100 text-green-800">Autoflower</Badge>
                  <h3 className="font-semibold">Gorilla Cookies Auto</h3>
                  <p className="text-sm text-gray-600">Heavy yields with minimal effort.</p>
                </div>
              </Link>
              <Link href="/strains/blue-dream">
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Badge className="mb-2">Popular</Badge>
                  <h3 className="font-semibold">Blue Dream</h3>
                  <p className="text-sm text-gray-600">Easy to grow with great results.</p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/how-to-buy-cannabis-seeds-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How to Buy Seeds</h3>
                  <p className="text-sm text-gray-600">Guide to purchasing cannabis seeds in Canada.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/how-long-do-cannabis-seeds-take-to-grow">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Growth Timeline</h3>
                  <p className="text-sm text-gray-600">How long from seed to harvest?</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/strains">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Strain Directory</h3>
                  <p className="text-sm text-gray-600">Browse strains by type and effects.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Growing?</h2>
          <p className="text-gray-600 mb-6">Find quality cannabis seeds from trusted Canadian seed banks.</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/seed-banks">Browse Seed Banks</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
