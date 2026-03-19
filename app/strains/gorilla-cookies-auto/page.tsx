import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Clock, Thermometer, Droplets, Sun, Zap, Leaf, ExternalLink, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Gorilla Cookies Auto Strain Review | Canada Seed Bank Reviews",
  description: "Complete guide to growing Gorilla Cookies Auto in Canada. Learn about THC levels, flowering time, yield, growing tips, and where to buy seeds from trusted Canadian seed banks.",
  keywords: "Gorilla Cookies Auto, autoflower seeds Canada, Fast Buds, cannabis seeds Canada, grow Gorilla Cookies",
}

export default function GorillaCookiesAutoPage() {
  const strainInfo = {
    name: "Gorilla Cookies Auto",
    breeder: "Fast Buds",
    type: "Hybrid (Indica-dominant)",
    genetics: "Gorilla Glue x Girl Scout Cookies x Ruderalis",
    thc: "24-27%",
    cbd: "<1%",
    floweringTime: "8-9 weeks from seed",
    height: "80-120cm",
    yield: "450-600g/m² indoor",
    difficulty: "Beginner to Intermediate",
    climate: "Mild to Warm",
    flavors: ["Cookie Dough", "Diesel", "Earthy", "Sweet"],
    effects: ["Relaxed", "Euphoric", "Happy", "Creative"],
    medicalUses: ["Stress", "Pain", "Insomnia", "Anxiety"],
  }

  const faqs = [
    {
      question: "How long does Gorilla Cookies Auto take to harvest in Canada?",
      answer: "Gorilla Cookies Auto typically takes 8-9 weeks from seed to harvest, making it perfect for Canada's short growing season. Indoor growers can harvest year-round, while outdoor growers should plant after the last frost in late May or early June."
    },
    {
      question: "What yield can I expect from Gorilla Cookies Auto?",
      answer: "Indoor growers can expect 450-600g/m² under optimal conditions with good lighting. Outdoor plants in Canada can yield 50-200g per plant depending on climate, care, and whether you're growing in southern Ontario versus northern regions."
    },
    {
      question: "Is Gorilla Cookies Auto suitable for beginner growers?",
      answer: "Yes, Gorilla Cookies Auto is beginner-friendly due to its autoflowering genetics and resilient nature. It doesn't require light schedule changes and is forgiving of minor growing mistakes, making it ideal for first-time Canadian growers."
    },
    {
      question: "Where can I buy Gorilla Cookies Auto seeds in Canada?",
      answer: "You can purchase authentic Gorilla Cookies Auto seeds from reputable seed banks that ship to Canada, including Herbies Seeds, Seeds Online, and True North Seed Bank. Always buy from authorized vendors to ensure genuine Fast Buds genetics."
    },
    {
      question: "Can I grow Gorilla Cookies Auto outdoors in Canada?",
      answer: "Yes, Gorilla Cookies Auto is well-suited for outdoor growing in Canada due to its fast finishing time. Plant after the last frost (late May/June) and harvest by late August or September before cold weather sets in. It performs well in southern Ontario, British Columbia, and Nova Scotia climates."
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
            <span className="text-gray-900">Gorilla Cookies Auto</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-emerald-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-green-600">Autoflower</Badge>
              <Badge className="bg-purple-600">Indica-Dominant Hybrid</Badge>
              <Badge className="bg-yellow-600">High THC</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Gorilla Cookies Auto</h1>
            <p className="text-xl text-gray-200 mb-6">
              A powerhouse autoflower combining Gorilla Glue's potency with Girl Scout Cookies' flavor. 
              Perfect for Canadian growers seeking high yields and fast harvests.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>{strainInfo.thc} THC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>{strainInfo.floweringTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-400" />
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
                  Gorilla Cookies Auto is a remarkable autoflowering hybrid created by Fast Buds, combining the legendary 
                  genetics of Gorilla Glue #4 and Girl Scout Cookies with ruderalis for automatic flowering. This strain 
                  has quickly become a favorite among Canadian growers for its exceptional potency, generous yields, and 
                  beginner-friendly growing characteristics.
                </p>
                <p>
                  With THC levels reaching up to 27%, Gorilla Cookies Auto delivers a powerful, well-balanced high that 
                  starts with euphoric cerebral effects before settling into deep physical relaxation. The flavor profile 
                  is a delightful mix of sweet cookie dough, earthy diesel, and subtle mint undertones.
                </p>
                <h3>Why Gorilla Cookies Auto is Perfect for Canadian Growers</h3>
                <p>
                  Canada's shorter growing season makes autoflowering strains like Gorilla Cookies Auto ideal for outdoor 
                  cultivation. The 8-9 week seed-to-harvest timeline means you can plant after the last spring frost and 
                  harvest well before the first fall frost. Indoor growers appreciate the compact size (80-120cm) that 
                  fits well in grow tents and small spaces.
                </p>
                <p>
                  The strain's resilience to temperature fluctuations and resistance to common molds makes it well-suited 
                  for the variable Canadian climate, whether you're growing in British Columbia's mild coast, Ontario's 
                  humid summers, or the Maritime provinces.
                </p>
              </CardContent>
            </Card>

            {/* Growing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Growing Gorilla Cookies Auto in Canada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Indoor Growing Tips</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Use 18/6 or 20/4 light schedule for maximum yields</li>
                    <li>Maintain temperatures between 20-26°C during vegetative growth</li>
                    <li>Keep humidity at 50-60% during veg, reducing to 40-50% during flowering</li>
                    <li>LST (Low Stress Training) works well to increase light penetration</li>
                    <li>Use quality LED or HPS lights (400-600W equivalent per m²)</li>
                    <li>Don't transplant - plant directly in final container (11-20L)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Outdoor Growing in Canada</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Plant after last frost (late May in southern Ontario, early June elsewhere)</li>
                    <li>Choose a south-facing location with maximum sun exposure</li>
                    <li>Use fabric pots for better root aeration and portability</li>
                    <li>Protect from heavy rain during late flowering to prevent bud rot</li>
                    <li>Expect harvest by late August to mid-September</li>
                    <li>Consider greenhouse growing for extended season in cooler regions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Feeding Schedule</h3>
                  <p className="text-gray-600">
                    Gorilla Cookies Auto is a moderate feeder. Start with light nutrients at 25% strength during weeks 2-3, 
                    gradually increasing to 50-75% during peak flowering. Reduce nitrogen during flowering and increase 
                    phosphorus and potassium. Flush with plain water for the final 1-2 weeks before harvest.
                  </p>
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
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{effect}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      The high begins with an uplifting cerebral rush that boosts creativity and mood, 
                      then transitions into full-body relaxation without heavy sedation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Medical Applications</h3>
                    <div className="space-y-2">
                      {strainInfo.medicalUses.map((use) => (
                        <div key={use} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{use}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Medical users report relief from chronic pain, stress, and anxiety. 
                      The relaxing effects make it suitable for evening use and insomnia.
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
                    <Badge key={flavor} variant="outline" className="bg-amber-50">{flavor}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where to Buy */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle>Where to Buy Seeds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Purchase authentic Gorilla Cookies Auto seeds from these trusted seed banks that ship to Canada:
                </p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://herbiesheadshop.com/ca/cannabis-seeds/gorilla-cookies-auto?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy from Herbies Seeds
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/reviews/seeds-online">
                    View Seeds Online
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
                <Link href="/strains/sour-crack-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Sour Crack Auto</span>
                  <span className="text-sm text-gray-500 block">Fast finishing, sour flavor</span>
                </Link>
                <Link href="/strains/northern-lights" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Northern Lights</span>
                  <span className="text-sm text-gray-500 block">Classic indica, beginner-friendly</span>
                </Link>
                <Link href="/strains/blue-dream" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Blue Dream</span>
                  <span className="text-sm text-gray-500 block">Balanced hybrid, fruity</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/autoflower-grow-guide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Autoflower Growing Guide</h3>
                  <p className="text-sm text-gray-600">Complete guide to growing autoflowering cannabis in Canada.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-autoflower-seeds-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Autoflower Seeds for Canada</h3>
                  <p className="text-sm text-gray-600">Top autoflowering strains for Canadian growers.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/reviews/herbies-headshop">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Herbies Seeds Review</h3>
                  <p className="text-sm text-gray-600">Full review of Herbies Seeds - ships to Canada.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
