import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Leaf, ExternalLink, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Apple Betty Strain Review | Canada Seed Bank Reviews",
  description: "Complete guide to growing Apple Betty by Herbies Seeds in Canada. Sweet apple pie flavors, balanced hybrid effects, and excellent yields.",
  keywords: "Apple Betty, Herbies Seeds, apple strain Canada, hybrid cannabis, dessert strain cannabis",
}

export default function AppleBettyPage() {
  const strainInfo = {
    name: "Apple Betty",
    breeder: "Herbies Seeds",
    type: "Balanced Hybrid (50% Indica / 50% Sativa)",
    genetics: "Apple Fritter x Betty Boo",
    thc: "24-29%",
    cbd: "<1%",
    floweringTime: "8-9 weeks",
    height: "100-150cm",
    yield: "500-600g/m² indoor",
    difficulty: "Beginner to Intermediate",
    climate: "Mild to Warm",
    flavors: ["Apple Pie", "Cinnamon", "Vanilla", "Sweet Dough"],
    effects: ["Euphoric", "Relaxed", "Creative", "Happy"],
    medicalUses: ["Stress", "Depression", "Pain", "Appetite Loss"],
  }

  const faqs = [
    {
      question: "What does Apple Betty taste like?",
      answer: "Apple Betty has a remarkable dessert-like flavor profile that truly lives up to its name. Expect sweet, baked apple notes with hints of cinnamon, vanilla, and pastry dough - like smoking a slice of warm apple pie. The terpene profile is dominated by caryophyllene, limonene, and myrcene."
    },
    {
      question: "Is Apple Betty good for beginners?",
      answer: "Yes, Apple Betty is suitable for beginner to intermediate growers. It has a relatively easy grow pattern with good resistance to common issues. The balanced hybrid genetics make it forgiving, though some training techniques like LST can help maximize yields."
    },
    {
      question: "What effects does Apple Betty produce?",
      answer: "Apple Betty delivers a well-balanced hybrid high. It starts with euphoric, uplifting cerebral effects that boost creativity and mood, then gradually transitions into relaxing body effects. It's versatile enough for daytime or evening use depending on dosage."
    },
    {
      question: "How long does Apple Betty take to flower?",
      answer: "Apple Betty has a relatively quick flowering time of 8-9 weeks. This makes it suitable for outdoor growing in Canada, with harvest typically falling in late September to early October in most regions."
    },
    {
      question: "Where can I buy Apple Betty seeds in Canada?",
      answer: "Apple Betty is an exclusive Herbies Seeds strain, available directly from Herbies which ships to Canada with delivery guarantee. This ensures you're getting authentic genetics directly from the breeder."
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container px-4 mx-auto py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/strains" className="hover:text-green-600">Strains</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Apple Betty</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-700 to-amber-800 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-red-600">Photoperiod</Badge>
              <Badge className="bg-amber-600">Balanced Hybrid</Badge>
              <Badge className="bg-orange-600">Dessert Strain</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Apple Betty</h1>
            <p className="text-xl text-red-100 mb-6">
              Herbies Seeds' delicious dessert strain. Sweet apple pie flavors with 
              balanced hybrid effects - the perfect treat for cannabis connoisseurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-300" />
                <span>{strainInfo.thc} THC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-300" />
                <span>{strainInfo.floweringTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-amber-300" />
                <span>{strainInfo.yield}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Strain Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Apple Betty is an original creation from Herbies Seeds, crafted by crossing Apple Fritter 
                  with Betty Boo. This perfectly balanced hybrid (50/50) delivers the best of both worlds: 
                  uplifting cerebral stimulation paired with soothing body relaxation, all wrapped in an 
                  irresistible apple pie flavor profile.
                </p>
                <p>
                  With THC levels reaching up to 29%, Apple Betty packs a serious punch while maintaining 
                  a smooth, enjoyable experience. The terpene profile creates flavors and aromas reminiscent 
                  of freshly baked apple pie with notes of cinnamon, vanilla, and sweet dough.
                </p>
                <h3>A True Dessert Strain</h3>
                <p>
                  The "dessert strain" category has exploded in popularity, and Apple Betty stands out as 
                  one of the most authentic apple-flavored cannabis varieties available. Unlike strains 
                  that only hint at their namesake flavor, Apple Betty delivers a full sensory experience 
                  that truly tastes like baked apples and pastry.
                </p>
                <p>
                  This makes Apple Betty particularly popular among concentrate makers and flavor chasers. 
                  The strain produces excellent hash, rosin, and extracts that retain the apple pie 
                  terpene profile.
                </p>
                <h3>Versatile Effects</h3>
                <p>
                  The balanced 50/50 genetics mean Apple Betty is versatile enough for various occasions. 
                  Lower doses provide creative, focused energy suitable for daytime tasks, while higher 
                  doses lean more toward relaxation and unwinding. Canadian users appreciate its flexibility 
                  for both recreational and medical applications.
                </p>
              </CardContent>
            </Card>

            {/* Growing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Growing Apple Betty in Canada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Indoor Growing Tips</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Vegetate under 18/6 light, flower under 12/12</li>
                    <li>Medium-tall height (100-150cm) - consider topping or SCROG</li>
                    <li>Maintain 23-27°C temperatures for optimal terpene production</li>
                    <li>Keep humidity at 45-55% during flowering</li>
                    <li>Good airflow prevents mold in dense buds</li>
                    <li>Slightly cooler temps in late flower can enhance apple aromas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Outdoor Growing in Canada</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Well-suited for southern Canadian climates</li>
                    <li>Plant after last frost (late May/early June)</li>
                    <li>Harvest in late September to early October</li>
                    <li>The 8-9 week flowering time fits Canadian season well</li>
                    <li>Protect from heavy rain during late flowering</li>
                    <li>Greenhouse growing extends the season in cooler regions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Maximizing Flavor</h3>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm text-amber-800">
                      To maximize Apple Betty's dessert terpene profile, maintain proper temperatures 
                      (not exceeding 27°C), use organic nutrients, and implement a proper flush for 
                      the final 1-2 weeks. Slow drying at 60% humidity for 10-14 days followed by 
                      2-4 weeks of curing will bring out the full apple pie flavor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Effects & Medical */}
            <Card>
              <CardHeader>
                <CardTitle>Effects & Medical Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Recreational Effects</h3>
                    <div className="space-y-2">
                      {strainInfo.effects.map((effect) => (
                        <div key={effect} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>{effect}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      The experience begins with uplifting euphoria and creative energy, 
                      gradually transitioning to comfortable body relaxation without heavy sedation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Medical Applications</h3>
                    <div className="space-y-2">
                      {strainInfo.medicalUses.map((use) => (
                        <div key={use} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span>{use}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Medical users find Apple Betty helpful for managing stress, depression, 
                      and mild to moderate pain while maintaining functional clarity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Strain Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Strain Information</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Breeder</dt>
                    <dd className="font-medium">{strainInfo.breeder}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Type</dt>
                    <dd className="font-medium">{strainInfo.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">THC</dt>
                    <dd className="font-medium text-red-600">{strainInfo.thc}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">CBD</dt>
                    <dd className="font-medium">{strainInfo.cbd}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Flowering Time</dt>
                    <dd className="font-medium">{strainInfo.floweringTime}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Height</dt>
                    <dd className="font-medium">{strainInfo.height}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Yield</dt>
                    <dd className="font-medium">{strainInfo.yield}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Difficulty</dt>
                    <dd className="font-medium">{strainInfo.difficulty}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Flavors */}
            <Card>
              <CardHeader>
                <CardTitle>Flavor Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {strainInfo.flavors.map((flavor) => (
                    <Badge key={flavor} variant="outline" className="bg-amber-50">{flavor}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where to Buy */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle>Where to Buy Seeds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Get authentic Apple Betty seeds directly from Herbies Seeds:
                </p>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <a href="https://herbiesheadshop.com/ca/cannabis-seeds/apple-betty-herbies-seeds?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy from Herbies Seeds
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/reviews/herbies-headshop">
                    Read Herbies Review
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/seed-banks">
                    Compare All Seed Banks
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Related Strains */}
            <Card>
              <CardHeader>
                <CardTitle>Related Strains</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/strains/grandmommy-purple" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Grandmommy Purple</span>
                  <span className="text-sm text-gray-500 block">Herbies original, grape flavor</span>
                </Link>
                <Link href="/strains/gorilla-cookies-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Gorilla Cookies Auto</span>
                  <span className="text-sm text-gray-500 block">Cookie genetics, high THC</span>
                </Link>
                <Link href="/strains/blue-dream" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Blue Dream</span>
                  <span className="text-sm text-gray-500 block">Fruity balanced hybrid</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/reviews/herbies-headshop">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Herbies Seeds Review</h3>
                  <p className="text-sm text-gray-600">Full review of Herbies - home of Apple Betty.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-seed-banks-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Seed Banks Canada</h3>
                  <p className="text-sm text-gray-600">Top-rated seed banks shipping to Canada.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/grow-tent-setup-guide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Grow Tent Setup Guide</h3>
                  <p className="text-sm text-gray-600">Complete guide to indoor growing setup.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
