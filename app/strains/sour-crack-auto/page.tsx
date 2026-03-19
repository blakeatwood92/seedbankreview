import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Zap, Leaf, ExternalLink, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Sour Crack Auto Strain Review | Canada Seed Bank Reviews",
  description: "Complete guide to growing Sour Crack Auto by Mephisto Genetics in Canada. Lightning-fast 60-65 day harvest, sour candy flavor, and energizing effects.",
  keywords: "Sour Crack Auto, Mephisto Genetics, fast autoflower Canada, cannabis seeds Canada, quick harvest strain",
}

export default function SourCrackAutoPage() {
  const strainInfo = {
    name: "Sour Crack Auto",
    breeder: "Mephisto Genetics",
    type: "Sativa-dominant Hybrid",
    genetics: "Green Crack x 24 Carat",
    thc: "20-24%",
    cbd: "<1%",
    floweringTime: "60-65 days from seed",
    height: "45-75cm",
    yield: "30-80g per plant",
    difficulty: "Beginner",
    climate: "All Climates",
    flavors: ["Sour Candy", "Citrus", "Lemon", "Sweet"],
    effects: ["Energetic", "Uplifting", "Focused", "Creative"],
    medicalUses: ["Depression", "Fatigue", "Stress", "Mood Disorders"],
  }

  const faqs = [
    {
      question: "How fast can I harvest Sour Crack Auto?",
      answer: "Sour Crack Auto is one of the fastest autoflowers available, finishing in just 60-65 days from seed to harvest. Some phenotypes can finish even faster at 55-60 days. This makes it perfect for Canadian growers who want multiple harvests per season."
    },
    {
      question: "What makes Sour Crack Auto special?",
      answer: "Sour Crack Auto is prized for its incredibly fast finishing time without sacrificing potency (20-24% THC). The sativa-dominant effects provide energetic, uplifting highs that are perfect for daytime use. The sour candy and citrus flavor profile is also highly sought after."
    },
    {
      question: "Can I grow multiple cycles of Sour Crack Auto outdoors in Canada?",
      answer: "Yes! Due to its 60-65 day lifecycle, you can potentially grow 2-3 cycles outdoors in southern Canada. Start the first batch in late May, second in mid-July, and harvest both before frost. In northern regions, you can reliably get at least one full cycle."
    },
    {
      question: "Is Sour Crack Auto good for small spaces?",
      answer: "Sour Crack Auto is excellent for small spaces due to its compact size (45-75cm). It's ideal for micro-grows, stealth grows, and space buckets. The small stature also makes it perfect for balcony growing in Canadian apartments."
    },
    {
      question: "Where can I buy authentic Mephisto Genetics Sour Crack Auto?",
      answer: "Authentic Mephisto Genetics seeds can be purchased from authorized vendors including Herbies Seeds, Seeds Online (one of the few authorized Canadian vendors), and directly from Mephisto during their seed drops. Be cautious of counterfeit seeds from unauthorized sources."
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
            <span className="text-gray-900">Sour Crack Auto</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-yellow-500">Lightning Fast</Badge>
              <Badge className="bg-green-600">Autoflower</Badge>
              <Badge className="bg-orange-500">Sativa-Dominant</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Sour Crack Auto</h1>
            <p className="text-xl text-yellow-100 mb-6">
              The fastest autoflower from Mephisto Genetics. From seed to harvest in just 60-65 days 
              with energizing sativa effects and mouth-watering sour candy flavor.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span>{strainInfo.thc} THC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span>{strainInfo.floweringTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-yellow-300" />
                <span>Compact: {strainInfo.height}</span>
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
                  Sour Crack Auto by Mephisto Genetics is legendary in the autoflower community for being one of the 
                  fastest-finishing cannabis strains available anywhere. Created by crossing Green Crack with 24 Carat, 
                  this sativa-dominant hybrid delivers a potent, energizing experience in record time.
                </p>
                <p>
                  With a seed-to-harvest time of just 60-65 days, Sour Crack Auto allows Canadian growers to achieve 
                  multiple harvests in a single season - something that was previously impossible with traditional 
                  photoperiod strains in our northern climate.
                </p>
                <h3>Perfect for Canada's Short Growing Season</h3>
                <p>
                  The ultra-fast lifecycle of Sour Crack Auto makes it uniquely suited for Canadian outdoor growing. 
                  Even in regions with shorter summers like the Prairies or Northern Ontario, growers can confidently 
                  plant in June and harvest before September frost. Southern growers in Ontario, BC, and the Maritimes 
                  can potentially achieve two full outdoor harvests.
                </p>
                <p>
                  The compact size (45-75cm) makes Sour Crack Auto perfect for balcony grows, guerrilla growing, 
                  or discreet backyard gardens. Despite its small stature, the dense, resinous buds pack a serious 
                  punch with 20-24% THC content.
                </p>
                <h3>Mephisto Genetics Quality</h3>
                <p>
                  Mephisto Genetics is renowned for producing some of the highest-quality autoflowering genetics in 
                  the world. Their breeding program focuses on creating stable, potent autos that rival photoperiod 
                  strains in quality. Sour Crack Auto exemplifies this commitment to excellence.
                </p>
              </CardContent>
            </Card>

            {/* Growing Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Growing Sour Crack Auto in Canada</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Speed Growing Tips</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Plant directly in final container (7-15L) - no time for transplant recovery</li>
                    <li>Use 20/4 light schedule for maximum growth speed</li>
                    <li>Start nutrients early at light doses (week 1-2)</li>
                    <li>Don't top or HST - stick to LST only due to short lifecycle</li>
                    <li>Keep environment optimal - no room for stress recovery</li>
                    <li>Harvest when 20-30% trichomes are amber for best effects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Outdoor Growing in Canada</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>First crop: Plant late May/early June, harvest late July/August</li>
                    <li>Second crop (southern regions): Plant mid-July, harvest mid-September</li>
                    <li>Excellent for guerrilla growing due to speed and small size</li>
                    <li>Minimal pest/mold exposure due to short flowering period</li>
                    <li>Works in all Canadian provinces - even short northern summers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expected Timeline</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <ul className="space-y-1 text-sm">
                      <li><strong>Days 1-7:</strong> Germination and seedling</li>
                      <li><strong>Days 8-21:</strong> Vegetative growth</li>
                      <li><strong>Days 22-50:</strong> Flowering</li>
                      <li><strong>Days 50-65:</strong> Final ripening and harvest</li>
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
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>{effect}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      True to its Green Crack heritage, Sour Crack Auto delivers an energizing, cerebral high 
                      perfect for daytime activities, creative work, and social situations.
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
                      Medical users appreciate Sour Crack Auto for combating depression, chronic fatigue, 
                      and lack of motivation without the drowsiness of indica strains.
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
                    <dt className="text-gray-600">Seed to Harvest</dt>
                    <dd className="font-medium text-yellow-600">{strainInfo.floweringTime}</dd>
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
                    <Badge key={flavor} variant="outline" className="bg-yellow-50">{flavor}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Where to Buy */}
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle>Where to Buy Seeds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600 mb-4">
                  Get authentic Mephisto Genetics Sour Crack Auto from authorized vendors:
                </p>
                <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <a href="https://herbiesheadshop.com/ca/cannabis-seeds/sour-crack-auto?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buy from Herbies Seeds
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/reviews/seeds-online">
                    Seeds Online (Authorized)
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
                <Link href="/strains/gorilla-cookies-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Gorilla Cookies Auto</span>
                  <span className="text-sm text-gray-500 block">High yielding, potent</span>
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
                  <p className="text-sm text-gray-600">Master autoflowering cannabis cultivation in Canada.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-autoflower-seeds-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Autoflower Seeds Canada</h3>
                  <p className="text-sm text-gray-600">Top autoflowering strains for Canadian climate.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/outdoor-growing-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Outdoor Growing in Canada</h3>
                  <p className="text-sm text-gray-600">Tips for successful outdoor cannabis cultivation.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
