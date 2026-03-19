import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Leaf, ExternalLink, ChevronRight, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Northern Lights Strain Review | Canada Seed Bank Reviews",
  description: "Complete guide to growing Northern Lights in Canada. The classic indica strain perfect for beginners, with fast flowering and proven Canadian climate resilience.",
  keywords: "Northern Lights, classic indica, beginner cannabis Canada, easy to grow strain, Canadian cannabis seeds",
}

export default function NorthernLightsPage() {
  const strainInfo = {
    name: "Northern Lights",
    breeder: "Multiple (Original Sensi Seeds)",
    type: "Pure Indica (95% Indica / 5% Sativa)",
    genetics: "Afghani x Thai",
    thc: "16-21%",
    cbd: "0.1-0.3%",
    floweringTime: "7-9 weeks",
    height: "80-130cm",
    yield: "500-550g/m² indoor",
    difficulty: "Beginner",
    climate: "All Climates",
    flavors: ["Pine", "Earthy", "Sweet", "Spicy"],
    effects: ["Relaxed", "Sleepy", "Happy", "Euphoric"],
    medicalUses: ["Insomnia", "Pain", "Stress", "Muscle Spasms"],
  }

  const faqs = [
    {
      question: "Why is Northern Lights considered the best strain for beginners?",
      answer: "Northern Lights is legendary for its forgiving nature and resilience. It tolerates beginner mistakes well, has strong resistance to pests and mold, requires minimal maintenance, and finishes quickly (7-9 weeks). Its compact size also makes it perfect for small grow spaces. For Canadian first-time growers, it's the safest choice."
    },
    {
      question: "Is Northern Lights good for Canadian outdoor growing?",
      answer: "Yes, Northern Lights is exceptionally well-suited for Canadian outdoor growing. Its fast 7-9 week flowering time means harvest before frost in most regions. The indica genetics provide natural resistance to cold temperatures, and it handles humidity fluctuations well. It thrives in all Canadian provinces."
    },
    {
      question: "What's the difference between Northern Lights and Northern Lights Auto?",
      answer: "Northern Lights (photoperiod) requires a 12/12 light cycle to flower and typically grows larger with potentially higher yields. Northern Lights Auto flowers automatically regardless of light schedule, finishes faster (60-70 days from seed), stays smaller, and is even easier for beginners but with slightly lower yields."
    },
    {
      question: "How does Northern Lights smell?",
      answer: "Northern Lights has a relatively subtle smell compared to modern strains, making it popular for discreet growing. The aroma is earthy and piney with sweet, spicy undertones. When smoked, it delivers smooth, sweet smoke with hints of pine and honey."
    },
    {
      question: "Where can I buy Northern Lights seeds in Canada?",
      answer: "Northern Lights seeds are available from virtually all reputable seed banks shipping to Canada, including True North Seed Bank, Quebec Cannabis Seeds, Herbies Seeds, and Seeds Online. Both original Sensi Seeds versions and modern interpretations are available."
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
            <span className="text-gray-900">Northern Lights</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-emerald-600">
                <Award className="w-3 h-3 mr-1" />
                Classic Strain
              </Badge>
              <Badge className="bg-green-600">Pure Indica</Badge>
              <Badge className="bg-teal-600">Beginner Friendly</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Northern Lights</h1>
            <p className="text-xl text-emerald-100 mb-6">
              The legendary indica that revolutionized home growing. Award-winning genetics, 
              beginner-friendly cultivation, and proven performance in Canadian climates since the 1980s.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-300" />
                <span>{strainInfo.thc} THC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-300" />
                <span>{strainInfo.floweringTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-emerald-300" />
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
                  Northern Lights is one of the most famous and influential cannabis strains ever created. 
                  Originally bred in the Pacific Northwest and perfected in the Netherlands by Sensi Seeds, 
                  this pure indica has won countless Cannabis Cup awards and served as the genetic foundation 
                  for hundreds of modern strains.
                </p>
                <p>
                  For Canadian growers, Northern Lights holds a special place. Its fast flowering time, 
                  cold resistance, and forgiving nature make it ideally suited for our climate and growing 
                  conditions. Whether you're growing in British Columbia, Ontario, or the Maritimes, 
                  Northern Lights delivers consistent, reliable results.
                </p>
                <h3>Why Northern Lights is Perfect for Beginners</h3>
                <p>
                  Northern Lights has earned its reputation as the #1 beginner strain for good reason:
                </p>
                <ul>
                  <li><strong>Forgiving:</strong> Recovers well from overwatering, nutrient issues, and training mistakes</li>
                  <li><strong>Resistant:</strong> Strong natural resistance to mold, pests, and temperature fluctuations</li>
                  <li><strong>Fast:</strong> Quick 7-9 week flowering time reduces time for problems to develop</li>
                  <li><strong>Compact:</strong> Manageable height for small spaces and stealth growing</li>
                  <li><strong>Quiet:</strong> Relatively low odor compared to modern strains</li>
                  <li><strong>Stable:</strong> Decades of breeding means consistent, predictable results</li>
                </ul>
                <h3>A Piece of Cannabis History</h3>
                <p>
                  Northern Lights represents cannabis history that Canadian growers can be part of. 
                  Its genetics have contributed to legendary strains like Super Silver Haze, Shiva Skunk, 
                  and countless others. Growing Northern Lights connects you to the roots of modern cannabis culture.
                </p>
              </CardContent>
            </Card>

            {/* Growing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Growing Northern Lights in Canada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Indoor Growing Tips</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Veg for 3-4 weeks under 18/6, then switch to 12/12 for flowering</li>
                    <li>Compact structure makes it ideal for SOG (Sea of Green) setups</li>
                    <li>Moderate nutrient needs - avoid overfeeding</li>
                    <li>Tolerates temperatures from 15-28°C but optimal is 20-26°C</li>
                    <li>Lower odor than most strains but still use carbon filter</li>
                    <li>Great for first-time growers learning the basics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Outdoor Growing in Canada</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Suitable for ALL Canadian provinces - even shorter seasons</li>
                    <li>Plant after last frost (late May to early June)</li>
                    <li>Harvest mid-September to early October</li>
                    <li>Excellent mold resistance for humid Canadian falls</li>
                    <li>Handles cool nights well - no issue with early fall temps</li>
                    <li>Compact size good for discreet backyard growing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Common Beginner Mistakes Northern Lights Forgives</h3>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <ul className="space-y-1 text-sm">
                      <li><strong>Overwatering:</strong> Recovers quickly once corrected</li>
                      <li><strong>Nutrient burn:</strong> Shows symptoms clearly, recovers with flush</li>
                      <li><strong>Light stress:</strong> Tolerates imperfect light schedules</li>
                      <li><strong>Temperature swings:</strong> Handles a wide range</li>
                      <li><strong>Pruning mistakes:</strong> Bounces back from over-trimming</li>
                    </ul>
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
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span>{effect}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Northern Lights delivers a classic indica experience - a dreamy, euphoric head 
                      high that melts into full-body relaxation. Perfect for evening unwinding.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Medical Applications</h3>
                    <div className="space-y-2">
                      {strainInfo.medicalUses.map((use) => (
                        <div key={use} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span>{use}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      A go-to medical strain for decades. Excellent for insomnia, chronic pain, 
                      and muscle tension. The moderate THC level makes it manageable for new medical users.
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
                    <dd className="font-medium text-emerald-600">{strainInfo.floweringTime}</dd>
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
                    <dd className="font-medium text-green-600">{strainInfo.difficulty}</dd>
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
                    <Badge key={flavor} variant="outline" className="bg-emerald-50">{flavor}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where to Buy */}
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle>Where to Buy Seeds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Northern Lights is widely available from trusted Canadian seed banks:
                </p>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
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
                <Link href="/strains/blue-dream" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Blue Dream</span>
                  <span className="text-sm text-gray-500 block">Popular beginner hybrid</span>
                </Link>
                <Link href="/strains/grandmommy-purple" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Grandmommy Purple</span>
                  <span className="text-sm text-gray-500 block">Heavy indica, purple</span>
                </Link>
                <Link href="/strains/gorilla-cookies-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Gorilla Cookies Auto</span>
                  <span className="text-sm text-gray-500 block">Modern auto, high yield</span>
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
                  <p className="text-sm text-gray-600">Complete beginner's guide to Canadian cannabis cultivation.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-outdoor-strains-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Outdoor Strains Canada</h3>
                  <p className="text-sm text-gray-600">Top strains for outdoor growing in Canadian climate.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/seed-banks">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Seed Bank Reviews</h3>
                  <p className="text-sm text-gray-600">Find the best seed banks shipping to Canada.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
