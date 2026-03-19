import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Sun, Droplets, Leaf, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Autoflower Grow Guide for Canada 2026 | Complete Beginner's Guide",
  description: "Learn how to grow autoflowering cannabis in Canada. Complete guide covering germination, lighting, nutrients, and harvesting autoflower seeds for maximum yields.",
  keywords: "autoflower grow guide, growing autoflowers canada, autoflowering cannabis, how to grow autos, autoflower tips",
}

export default function AutoflowerGrowGuidePage() {
  const timeline = [
    { week: "1", stage: "Germination", description: "Seed sprouts and first leaves emerge", tips: "Keep soil moist, warm (75-80°F)" },
    { week: "2-3", stage: "Seedling", description: "First true leaves develop", tips: "Light nutrients, 18-20 hours light" },
    { week: "3-4", stage: "Early Veg", description: "Rapid growth begins", tips: "Increase nutrients, consider LST" },
    { week: "4-5", stage: "Late Veg/Pre-flower", description: "Plant shows sex, stretches", tips: "Last chance for training" },
    { week: "5-7", stage: "Early Flower", description: "Buds begin forming", tips: "Switch to bloom nutrients" },
    { week: "7-9", stage: "Mid Flower", description: "Buds fatten, trichomes develop", tips: "Peak feeding, watch humidity" },
    { week: "9-11", stage: "Late Flower", description: "Buds ripen, pistils darken", tips: "Reduce nutrients, check trichomes" },
    { week: "10-12", stage: "Harvest", description: "Trichomes cloudy/amber", tips: "Flush 1-2 weeks before chop" },
  ]

  const commonMistakes = [
    { mistake: "Transplanting too often", solution: "Start in final pot - autos don't recover well from transplant stress" },
    { mistake: "Overwatering seedlings", solution: "Let soil dry between waterings, especially early on" },
    { mistake: "Too much training too late", solution: "Only train during veg - stop once flowering starts" },
    { mistake: "Overfeeding", solution: "Use 1/2-3/4 strength nutrients - autos are sensitive" },
    { mistake: "Wrong light schedule", solution: "18-20 hours light throughout entire grow" },
    { mistake: "Harvesting too early", solution: "Check trichomes with magnifier - wait for cloudy/amber" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Growing Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Autoflower Grow Guide for Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Autoflowering cannabis is perfect for Canadian growers - fast harvests, compact plants, 
            and no need to worry about light schedules. Learn everything you need for a successful auto grow.
          </p>
        </div>

        {/* Why Autos */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Why Grow Autoflowers in Canada?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Fast Harvests</h3>
                <p className="text-sm text-gray-600">Seed to harvest in 8-12 weeks</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <Sun className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">No Light Stress</h3>
                <p className="text-sm text-gray-600">Flowers regardless of light schedule</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg text-center">
                <span className="text-3xl block mb-2">🍁</span>
                <h3 className="font-semibold mb-1">Short Season Friendly</h3>
                <p className="text-sm text-gray-600">Perfect for Canadian outdoor grows</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <span className="text-3xl block mb-2">📦</span>
                <h3 className="font-semibold mb-1">Compact Size</h3>
                <p className="text-sm text-gray-600">Great for small spaces and stealth</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Autoflower Growth Timeline</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Most autoflowers complete their lifecycle in 8-12 weeks from seed. Here's what to expect 
            and how to care for your plants at each stage.
          </p>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-2">Week {item.week}</Badge>
                        <h3 className="font-bold text-lg">{item.stage}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-green-600">{item.tips}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-600 rounded-full transform md:-translate-x-1/2 mt-6"></div>
                  
                  <div className="md:hidden ml-8 flex-1">
                    <Card>
                      <CardContent className="p-4">
                        <Badge className="mb-2">Week {item.week}</Badge>
                        <h3 className="font-bold text-lg">{item.stage}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-green-600">{item.tips}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Tips */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sun className="w-5 h-5 text-yellow-500" />
                Lighting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  18-20 hours of light per day
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Some growers use 24h light
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  LED lights work best for efficiency
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  No need to change schedule for flowering
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Droplets className="w-5 h-5 text-blue-500" />
                Watering
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Water when top inch of soil is dry
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Don't overwater - autos are sensitive
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Use pots with good drainage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  pH water to 6.0-7.0 for soil
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Leaf className="w-5 h-5 text-green-500" />
                Nutrients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Use 1/2 to 3/4 strength doses
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Start nutrients week 2-3
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Switch to bloom nutes at first flowers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Flush 1-2 weeks before harvest
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Common Mistakes */}
        <Card className="mb-12 border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              Common Autoflower Mistakes to Avoid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {commonMistakes.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-1">{item.mistake}</h4>
                  <p className="text-sm text-gray-600"><strong>Solution:</strong> {item.solution}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pot Size */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Recommended Pot Sizes for Autoflowers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">3-5 Gal</div>
                <h3 className="font-semibold mb-1">Standard Auto</h3>
                <p className="text-sm text-gray-600">Most autoflowers thrive in 3-5 gallon pots</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">5-7 Gal</div>
                <h3 className="font-semibold mb-1">Large Auto</h3>
                <p className="text-sm text-gray-600">For bigger yielding auto strains</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">1-2 Gal</div>
                <h3 className="font-semibold mb-1">Micro/Stealth</h3>
                <p className="text-sm text-gray-600">For small spaces - reduces final size</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Important: Plant directly in final pot - transplanting stunts autoflowers
            </p>
          </CardContent>
        </Card>

        {/* Best Strains */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Autoflower Strains for Canadian Growers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/strains/gorilla-cookies-auto">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <Badge className="mb-2">FastBuds</Badge>
                  <h3 className="font-semibold mb-2">Gorilla Cookies Auto</h3>
                  <p className="text-sm text-gray-600">Heavy yielder with potent effects. 9-10 weeks seed to harvest.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/strains/sour-crack-auto">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <Badge className="mb-2">Mephisto</Badge>
                  <h3 className="font-semibold mb-2">Sour Crack Auto</h3>
                  <p className="text-sm text-gray-600">Lightning fast - ready in 60-65 days. Great for impatient growers.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/strains/northern-lights">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <Badge className="mb-2">Classic</Badge>
                  <h3 className="font-semibold mb-2">Northern Lights Auto</h3>
                  <p className="text-sm text-gray-600">Beginner-friendly classic. Forgiving and reliable.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Growing Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-nutrients-for-cannabis">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Nutrients</h3>
                  <p className="text-sm text-gray-600">Top nutrient brands for cannabis growing.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-grow-lights-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Grow Lights</h3>
                  <p className="text-sm text-gray-600">LED lights for indoor autoflower grows.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/outdoor-growing-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Outdoor Growing</h3>
                  <p className="text-sm text-gray-600">Tips for growing autos outdoors in Canada.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Find Autoflower Seeds</h2>
          <p className="text-gray-600 mb-6">Browse the best autoflowering seeds from trusted Canadian seed banks.</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/best-autoflower-seeds-canada">Browse Autoflower Seeds</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
