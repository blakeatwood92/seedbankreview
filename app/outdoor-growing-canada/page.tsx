import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sun, Cloud, Thermometer, Calendar, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Outdoor Cannabis Growing in Canada 2026 | Complete Guide",
  description: "Master outdoor cannabis cultivation in Canada. Learn planting schedules, climate tips, and best strains for Canadian outdoor growing from coast to coast.",
  keywords: "outdoor growing canada, growing cannabis outside, outdoor cannabis canada, outdoor strains canada, canadian outdoor grow",
}

export default function OutdoorGrowingPage() {
  const regionalGuide = [
    { 
      region: "British Columbia", 
      plantOut: "Late May - Early June",
      harvest: "Late September - October",
      climate: "Mild, can be humid",
      tips: "Watch for mold in coastal areas. Great for outdoor growing."
    },
    { 
      region: "Alberta / Prairies", 
      plantOut: "Early June",
      harvest: "Mid-September",
      climate: "Short season, low humidity",
      tips: "Choose fast-finishing strains. Wind protection helpful."
    },
    { 
      region: "Ontario", 
      plantOut: "Late May - Early June",
      harvest: "Late September - October",
      climate: "Variable, humid summers",
      tips: "Good outdoor season. Watch for early frost in north."
    },
    { 
      region: "Quebec", 
      plantOut: "Early June",
      harvest: "Mid-September",
      climate: "Humid, shorter season",
      tips: "Home growing prohibited - check current laws."
    },
    { 
      region: "Atlantic Canada", 
      plantOut: "Late May - June",
      harvest: "September - October",
      climate: "Humid, variable weather",
      tips: "Mold-resistant strains recommended."
    },
    { 
      region: "Northern Canada", 
      plantOut: "June",
      harvest: "Early September",
      climate: "Very short season, long days",
      tips: "Fast autoflowers only. Extended daylight hours."
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Growing Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Outdoor Cannabis Growing in Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Canada's climate presents unique challenges for outdoor growers, but with the right strains 
            and techniques, you can achieve impressive harvests from coast to coast.
          </p>
        </div>

        {/* Canadian Season Overview */}
        <Card className="mb-12 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🍁</span>
              Canadian Outdoor Growing Season
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Start Indoors</h3>
                <p className="text-sm text-gray-600">April - May</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <Sun className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Plant Outside</h3>
                <p className="text-sm text-gray-600">Late May - June</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg text-center">
                <Cloud className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold">Summer Growth</h3>
                <p className="text-sm text-gray-600">June - August</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg text-center">
                <Thermometer className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-semibold">Harvest</h3>
                <p className="text-sm text-gray-600">September - October</p>
              </div>
            </div>
            <p className="text-gray-600 text-center">
              Most regions have a frost-free window of approximately 120-150 days. 
              Autoflowers and fast-finishing photoperiods are ideal for maximizing this window.
            </p>
          </CardContent>
        </Card>

        {/* Regional Guide */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Growing by Region</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {regionalGuide.map((region, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{region.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div>
                      <span className="text-gray-500">Plant Out:</span>
                      <p className="font-medium">{region.plantOut}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Harvest:</span>
                      <p className="font-medium">{region.harvest}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Climate:</strong> {region.climate}
                  </p>
                  <p className="text-sm text-green-600">{region.tips}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Best Strains */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Best Strains for Canadian Outdoor Growing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-green-600 mb-3">Autoflowers (Recommended)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <Link href="/strains/northern-lights" className="hover:text-green-600">Northern Lights Auto</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <Link href="/strains/gorilla-cookies-auto" className="hover:text-green-600">Gorilla Cookies Auto</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>White Widow Auto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Critical Auto</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 mb-3">Fast Photoperiods</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <Link href="/strains/northern-lights" className="hover:text-blue-600">Northern Lights</Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Early Skunk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Frisian Dew</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Purple Kush</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-600 mb-3">Mold-Resistant</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Durban Poison</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Super Silver Haze</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Strawberry Cough</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <span>Jack Herer</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Essential Tips for Canadian Outdoor Growing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Starting Indoors</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Start seeds indoors 4-6 weeks before last frost
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Harden off plants gradually over 1-2 weeks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Don't plant out until night temps stay above 10°C
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Site Selection</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Choose south-facing location for maximum sun
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Ensure good drainage to prevent root rot
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Wind protection helps but some airflow prevents mold
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Dealing with Weather</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Have frost protection ready (blankets, tarps)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Shake plants after rain to prevent bud rot
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Consider greenhouse or hoop house for extra protection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Harvest Timing</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Monitor weather forecasts for early frost
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Check trichomes - don't harvest too early
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Harvest in stages if needed to beat weather
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Warning */}
        <Card className="mb-12 border-amber-300 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Mold Prevention is Critical</h3>
                <p className="text-gray-600 mb-3">
                  Canada's fall weather - cool temps and rain - creates perfect conditions for bud rot (botrytis). 
                  This is the #1 enemy of Canadian outdoor growers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>- Choose mold-resistant strains with airy bud structure</li>
                  <li>- Remove fan leaves in late flower to improve airflow</li>
                  <li>- Shake plants dry after rain</li>
                  <li>- Inspect buds daily during wet weather</li>
                  <li>- Harvest early if mold appears - it spreads fast</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/autoflower-grow-guide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Autoflower Grow Guide</h3>
                  <p className="text-sm text-gray-600">Perfect for short Canadian seasons.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-outdoor-strains-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Outdoor Strains</h3>
                  <p className="text-sm text-gray-600">Top strains bred for outdoor growing.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/cannabis-soil-recipe">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cannabis Soil Recipe</h3>
                  <p className="text-sm text-gray-600">DIY super soil for outdoor grows.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Find Outdoor Seeds</h2>
          <p className="text-gray-600 mb-6">Browse seeds perfect for Canadian outdoor growing.</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/seed-banks">Browse Seed Banks</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
