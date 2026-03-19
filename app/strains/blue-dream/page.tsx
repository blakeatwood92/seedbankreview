import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Leaf, ExternalLink, ChevronRight, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Blue Dream Strain Review | Canada Seed Bank Reviews",
  description: "Complete guide to growing Blue Dream in Canada. America's most popular strain with balanced effects, blueberry flavors, and excellent yields for beginners.",
  keywords: "Blue Dream, sativa dominant hybrid, popular cannabis Canada, blueberry strain, balanced effects cannabis",
}

export default function BlueDreamPage() {
  const strainInfo = {
    name: "Blue Dream",
    breeder: "DJ Short / Unknown (California)",
    type: "Sativa-Dominant Hybrid (60% Sativa / 40% Indica)",
    genetics: "Blueberry x Haze",
    thc: "17-24%",
    cbd: "0.1-0.2%",
    floweringTime: "9-10 weeks",
    height: "150-200cm",
    yield: "500-600g/m² indoor",
    difficulty: "Beginner to Intermediate",
    climate: "Mild to Warm",
    flavors: ["Blueberry", "Sweet", "Berry", "Herbal"],
    effects: ["Euphoric", "Creative", "Relaxed", "Uplifted"],
    medicalUses: ["Depression", "Pain", "Stress", "Fatigue"],
  }

  const faqs = [
    {
      question: "Why is Blue Dream so popular?",
      answer: "Blue Dream has been America's most popular cannabis strain for years due to its perfect balance of effects. It provides uplifting cerebral stimulation without anxiety, paired with gentle body relaxation. The pleasant blueberry flavor and manageable THC levels (17-24%) make it approachable for all experience levels. It's also forgiving to grow."
    },
    {
      question: "Can Blue Dream be grown outdoors in Canada?",
      answer: "Yes, but Blue Dream prefers warmer climates and has a longer flowering time (9-10 weeks). It's best suited for southern British Columbia, southern Ontario, and the Maritimes. Consider Blue Dream Auto for shorter seasons or northern regions. Harvest typically falls in mid to late October."
    },
    {
      question: "What's the difference between Blue Dream and Blue Dream Auto?",
      answer: "Blue Dream Auto is the autoflowering version that finishes in 10-12 weeks from seed regardless of light schedule. It stays shorter (60-100cm vs 150-200cm), makes it better for Canadian outdoor growing. The photoperiod original has potentially higher yields and THC but requires light schedule management."
    },
    {
      question: "Is Blue Dream good for daytime use?",
      answer: "Yes, Blue Dream is considered one of the best daytime strains. Its sativa-dominant genetics provide energizing, creative effects that allow you to stay functional and productive. The indica genetics prevent anxiety that some pure sativas can cause, making it ideal for daytime social activities or creative work."
    },
    {
      question: "Where can I buy Blue Dream seeds in Canada?",
      answer: "Blue Dream seeds are available from most seed banks shipping to Canada. For authentic genetics, try Herbies Seeds, Seeds Online, or True North Seed Bank. Both regular photoperiod and autoflower versions are available from various breeders."
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
            <span className="text-gray-900">Blue Dream</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-blue-600">
                <Award className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
              <Badge className="bg-indigo-600">Sativa-Dominant</Badge>
              <Badge className="bg-purple-600">Balanced Effects</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blue Dream</h1>
            <p className="text-xl text-blue-100 mb-6">
              America's favorite cannabis strain. The perfect balance of cerebral invigoration 
              and full-body relaxation, wrapped in sweet blueberry flavors.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-300" />
                <span>{strainInfo.thc} THC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                <span>{strainInfo.floweringTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-blue-300" />
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
                  Blue Dream is arguably the most beloved cannabis strain in North America. Created in 
                  California by crossing DJ Short's famous Blueberry indica with the legendary Haze sativa, 
                  Blue Dream has dominated dispensary menus and grower gardens for over a decade.
                </p>
                <p>
                  What makes Blue Dream special is its remarkable balance. The sativa-dominant genetics 
                  (60/40) deliver uplifting, creative energy while the Blueberry parentage provides 
                  enough body relaxation to prevent anxiety and racing thoughts. This makes it one of 
                  the most approachable strains for both recreational and medical users.
                </p>
                <h3>The Perfect Introduction to Cannabis</h3>
                <p>
                  For new cannabis users in Canada, Blue Dream is often recommended as an ideal starting 
                  point. The manageable THC levels (17-24%), balanced effects, and pleasant flavor profile 
                  make it less intimidating than more potent or extreme strains. Experienced users 
                  appreciate it for its reliability and versatility.
                </p>
                <h3>Growing Blue Dream in Canada</h3>
                <p>
                  Blue Dream is moderately easy to grow, making it suitable for beginners willing to 
                  learn. The main challenge for Canadian growers is its longer flowering time (9-10 weeks) 
                  and preference for warmer temperatures. Indoor growing is recommended for most Canadian 
                  regions, though southern areas can successfully grow it outdoors with proper timing.
                </p>
                <p>
                  For easier outdoor cultivation, consider Blue Dream Auto, which finishes faster and 
                  is more resilient to cooler Canadian temperatures while maintaining the strain's 
                  characteristic effects and flavors.
                </p>
              </CardContent>
            </Card>

            {/* Growing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Growing Blue Dream in Canada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Indoor Growing Tips</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Tall growth (150-200cm) - use topping or SCROG to manage height</li>
                    <li>Veg under 18/6, flower under 12/12</li>
                    <li>Optimal temperature 21-26°C - avoid cold temps</li>
                    <li>Moderate to heavy feeder - responds well to nutrients</li>
                    <li>Good air circulation important for tall, bushy plants</li>
                    <li>Support branches during flowering - buds get heavy</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Outdoor Growing in Canada</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Best for southern Ontario, BC, and Maritime provinces</li>
                    <li>Needs long season - plant early June, harvest mid-October</li>
                    <li>Consider greenhouse or hoop house for temperature protection</li>
                    <li>Watch for powdery mildew in humid conditions</li>
                    <li>Blue Dream Auto is better for shorter seasons</li>
                    <li>Expect large plants - can reach 2m+ outdoors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Training Recommendations</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Blue Dream responds excellently to training techniques. Top the plant during veg 
                      to control height and promote bushier growth. SCROG (Screen of Green) works 
                      particularly well, maximizing the canopy coverage. LST (Low Stress Training) 
                      is also effective for beginners not ready for topping.
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
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{effect}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Blue Dream delivers a gentle cerebral rush that boosts creativity and focus, 
                      followed by full-body relaxation. Clear-headed and functional - not couch-lock.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Medical Applications</h3>
                    <div className="space-y-2">
                      {strainInfo.medicalUses.map((use) => (
                        <div key={use} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                          <span>{use}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Popular for daytime medical use. Effective for depression and fatigue 
                      while maintaining functionality. Gentle pain relief without heavy sedation.
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
                    <dd className="font-medium text-sm">{strainInfo.breeder}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Type</dt>
                    <dd className="font-medium">{strainInfo.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">THC</dt>
                    <dd className="font-medium">{strainInfo.thc}</dd>
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
                    <Badge key={flavor} variant="outline" className="bg-blue-50">{flavor}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where to Buy */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle>Where to Buy Seeds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Get Blue Dream seeds from trusted Canadian seed banks:
                </p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy from Herbies Seeds
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/reviews/seeds-online">
                    Seeds Online
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
                <Link href="/strains/northern-lights" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Northern Lights</span>
                  <span className="text-sm text-gray-500 block">Classic indica beginner strain</span>
                </Link>
                <Link href="/strains/gorilla-cookies-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Gorilla Cookies Auto</span>
                  <span className="text-sm text-gray-500 block">Potent hybrid, easy auto</span>
                </Link>
                <Link href="/strains/sour-crack-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Sour Crack Auto</span>
                  <span className="text-sm text-gray-500 block">Fast sativa-leaning auto</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/growing-cannabis-in-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Growing Cannabis in Canada</h3>
                  <p className="text-sm text-gray-600">Complete guide to Canadian cannabis cultivation.</p>
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
                  <p className="text-sm text-gray-600">Complete indoor growing setup guide.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
