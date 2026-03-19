import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Leaf, ExternalLink, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Grandmommy Purple Strain Review | Canada Seed Bank Reviews",
  description: "Complete guide to growing Grandmommy Purple by Herbies Seeds in Canada. Stunning purple colors, grape flavors, and deeply relaxing indica effects.",
  keywords: "Grandmommy Purple, Herbies Seeds, purple cannabis Canada, indica strain, grape cannabis seeds",
}

export default function GrandmommyPurplePage() {
  const strainInfo = {
    name: "Grandmommy Purple",
    breeder: "Herbies Seeds",
    type: "Indica (80% Indica / 20% Sativa)",
    genetics: "Big Bud x Purple Urkle",
    thc: "23-33%",
    cbd: "<1%",
    floweringTime: "9-10 weeks",
    height: "80-140cm",
    yield: "550-600g/m² indoor",
    difficulty: "Beginner to Intermediate",
    climate: "Mild to Warm",
    flavors: ["Grape", "Berry", "Sweet", "Earthy"],
    effects: ["Relaxed", "Sleepy", "Happy", "Euphoric"],
    medicalUses: ["Insomnia", "Chronic Pain", "Stress", "Anxiety"],
  }

  const faqs = [
    {
      question: "What gives Grandmommy Purple its purple color?",
      answer: "Grandmommy Purple develops its stunning purple, blue, and violet hues due to high anthocyanin content in its genetics from Purple Urkle. Cooler nighttime temperatures during late flowering (around 15-18°C) can enhance these colors. Even without cold temps, the buds often display purple tones."
    },
    {
      question: "Is Grandmommy Purple a good strain for sleep?",
      answer: "Yes, Grandmommy Purple is excellent for sleep due to its heavy indica genetics (80%). The deeply relaxing body effects and sedative properties make it ideal for evening use and treating insomnia. Many users report it as one of the best strains for a restful night's sleep."
    },
    {
      question: "How long does Grandmommy Purple take to flower?",
      answer: "Grandmommy Purple has a flowering time of 9-10 weeks for photoperiod plants. Indoor growers can expect to harvest around week 9-10 after switching to 12/12 light cycle. Outdoor growers in Canada should harvest in early to mid-October before frost."
    },
    {
      question: "What yield can I expect from Grandmommy Purple?",
      answer: "Indoors, Grandmommy Purple yields 550-600g/m² under optimal conditions with proper training and lighting. Outdoor plants can produce 600-800g per plant in ideal conditions. The Big Bud genetics contribute to its impressive yields."
    },
    {
      question: "Where can I buy authentic Grandmommy Purple seeds?",
      answer: "Grandmommy Purple is an original Herbies Seeds strain, available directly from Herbies. They ship to Canada via Certified Mail with a delivery guarantee. Look for the official Herbies Seeds packaging to ensure authenticity."
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
            <span className="text-gray-900">Grandmommy Purple</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-purple-600">Photoperiod</Badge>
              <Badge className="bg-indigo-600">80% Indica</Badge>
              <Badge className="bg-pink-600">High THC: Up to 33%</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Grandmommy Purple</h1>
            <p className="text-xl text-purple-100 mb-6">
              Herbies Seeds' stunning indica masterpiece. Breathtaking purple colors, 
              intoxicating grape flavors, and deeply relaxing effects that melt away stress.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-pink-400" />
                <span>{strainInfo.thc} THC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-300" />
                <span>{strainInfo.floweringTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-purple-300" />
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
                  Grandmommy Purple is an original creation from Herbies Seeds, bred by crossing the legendary 
                  Big Bud with Purple Urkle. This indica-dominant powerhouse (80% Indica / 20% Sativa) has 
                  quickly become one of the most popular purple strains in Canada, prized for its bag appeal, 
                  incredible potency, and therapeutic effects.
                </p>
                <p>
                  With THC levels reaching an impressive 33%, Grandmommy Purple delivers a powerful body 
                  high that starts with gentle euphoria before settling into deep, full-body relaxation. 
                  The flavor profile is dominated by sweet grape and berry notes with earthy undertones - 
                  like a fine wine for cannabis connoisseurs.
                </p>
                <h3>Stunning Visual Appeal</h3>
                <p>
                  What sets Grandmommy Purple apart is its breathtaking appearance. The buds develop deep 
                  purple, blue, and violet hues contrasted with bright orange pistils and a thick coating 
                  of frosty trichomes. Even the sugar leaves turn purple, making this strain a showstopper 
                  in any garden.
                </p>
                <p>
                  While some purple strains require cold temperatures to show color, Grandmommy Purple's 
                  high anthocyanin content means it will display purple tones in most growing conditions. 
                  Cooler nighttime temperatures (15-18°C) during late flowering will enhance the colors even further.
                </p>
                <h3>Perfect Evening Strain</h3>
                <p>
                  Grandmommy Purple is best enjoyed in the evening or before bed. The heavy indica effects 
                  provide excellent relief from insomnia, chronic pain, and stress. Canadian medical cannabis 
                  users particularly appreciate its consistent, predictable effects for nighttime symptom management.
                </p>
              </CardContent>
            </Card>

            {/* Growing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Growing Grandmommy Purple in Canada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Indoor Growing Tips</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Veg under 18/6 light schedule, switch to 12/12 for flowering</li>
                    <li>SCROG or LST training recommended for even canopy</li>
                    <li>Keep temperatures at 24-26°C during day, drop to 18-20°C at night during late flower</li>
                    <li>Maintain 40-50% humidity during flowering to prevent mold</li>
                    <li>The dense buds benefit from good airflow and defoliation</li>
                    <li>Support heavy branches in late flower - Big Bud genetics mean heavy colas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Outdoor Growing in Canada</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Best suited for southern Ontario, BC, and Maritime climates</li>
                    <li>Plant outdoors after last frost (late May/early June)</li>
                    <li>Expect harvest in early to mid-October</li>
                    <li>Natural temperature drops in fall enhance purple coloring</li>
                    <li>Watch for mold in dense buds during wet fall weather</li>
                    <li>Consider greenhouse growing for extended season protection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Maximizing Purple Color</h3>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      To bring out the deepest purple colors, drop nighttime temperatures to 15-18°C during 
                      the last 2-3 weeks of flowering. This temperature difference triggers anthocyanin 
                      production. Indoor growers can achieve this with AC or by running lights during cooler 
                      nighttime hours.
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
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>{effect}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      The high begins with a gentle wave of euphoria that melts into deep physical 
                      relaxation. Expect couch-lock and eventual sleepiness - perfect for unwinding.
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
                      Highly effective for insomnia and chronic pain. The sedative properties help 
                      those struggling with sleep disorders achieve restful, uninterrupted sleep.
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
                    <dd className="font-medium text-purple-600">{strainInfo.thc}</dd>
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
                    <Badge key={flavor} variant="outline" className="bg-purple-50">{flavor}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where to Buy */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle>Where to Buy Seeds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Get authentic Grandmommy Purple seeds directly from Herbies Seeds:
                </p>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <a href="https://herbiesheadshop.com/ca/cannabis-seeds/grandmommy-purple-herbies-seeds?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639" target="_blank" rel="noopener noreferrer">
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
                <Link href="/strains/apple-betty" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Apple Betty</span>
                  <span className="text-sm text-gray-500 block">Herbies original, sweet apple</span>
                </Link>
                <Link href="/strains/northern-lights" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Northern Lights</span>
                  <span className="text-sm text-gray-500 block">Classic indica, beginner-friendly</span>
                </Link>
                <Link href="/strains/gorilla-cookies-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Gorilla Cookies Auto</span>
                  <span className="text-sm text-gray-500 block">High yielding, potent auto</span>
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
                  <p className="text-sm text-gray-600">Full review of Herbies - home of Grandmommy Purple.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-seed-banks-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Seed Banks for Canada</h3>
                  <p className="text-sm text-gray-600">Top-rated seed banks shipping to Canada.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/growing-cannabis-in-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Growing Cannabis in Canada</h3>
                  <p className="text-sm text-gray-600">Complete guide to Canadian cannabis cultivation.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
