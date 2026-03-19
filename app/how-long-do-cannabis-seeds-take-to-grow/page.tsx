import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Sun, Leaf, Flower } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "How Long Do Cannabis Seeds Take to Grow? | Complete Timeline 2026",
  description: "Learn cannabis growth timelines from seed to harvest. Compare autoflower vs photoperiod growing times and plan your Canadian grow schedule.",
  keywords: "cannabis grow time, how long to grow weed, seed to harvest time, cannabis timeline, growing schedule",
}

export default function GrowTimePage() {
  const photoperiodStages = [
    { stage: "Germination", duration: "1-7 days", description: "Seed sprouts and taproot emerges" },
    { stage: "Seedling", duration: "2-3 weeks", description: "First leaves develop, roots establish" },
    { stage: "Vegetative", duration: "3-16 weeks", description: "Plant grows in size, no flowers yet" },
    { stage: "Flowering", duration: "8-11 weeks", description: "Buds develop and mature" },
    { stage: "Harvest", duration: "1-2 days", description: "Cut, trim, and begin drying" },
    { stage: "Drying/Curing", duration: "2-8 weeks", description: "Dry and cure for best quality" },
  ]

  const autoflowerStages = [
    { stage: "Germination", duration: "1-5 days", description: "Seed sprouts and taproot emerges" },
    { stage: "Seedling", duration: "1-2 weeks", description: "First leaves develop quickly" },
    { stage: "Vegetative", duration: "2-4 weeks", description: "Brief veg period, auto-transitions" },
    { stage: "Flowering", duration: "5-8 weeks", description: "Flowers automatically, buds mature" },
    { stage: "Harvest", duration: "1-2 days", description: "Cut, trim, and begin drying" },
    { stage: "Drying/Curing", duration: "2-8 weeks", description: "Dry and cure for best quality" },
  ]

  const strainComparison = [
    { type: "Fast Autoflower", seedToHarvest: "8-9 weeks", totalTime: "10-12 weeks", example: "Sour Crack Auto" },
    { type: "Standard Autoflower", seedToHarvest: "10-12 weeks", totalTime: "12-16 weeks", example: "Gorilla Cookies Auto" },
    { type: "Fast Photoperiod", seedToHarvest: "12-14 weeks", totalTime: "14-18 weeks", example: "Northern Lights" },
    { type: "Standard Photoperiod", seedToHarvest: "14-18 weeks", totalTime: "16-22 weeks", example: "Blue Dream" },
    { type: "Long Flowering Sativa", seedToHarvest: "18-24 weeks", totalTime: "20-28 weeks", example: "Haze varieties" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Growing Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">How Long Do Cannabis Seeds Take to Grow?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From seed to harvest, cannabis typically takes 3-6 months depending on the strain type. 
            Autoflowers are fastest at 8-12 weeks, while photoperiods take 14-24+ weeks.
          </p>
        </div>

        {/* Quick Answer */}
        <Card className="mb-12 border-green-300 bg-green-50">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-12 h-12 text-green-600" />
              <div>
                <h2 className="text-2xl font-bold">Quick Answer</h2>
                <p className="text-gray-600">Seed to harvest timeline (not including drying/curing)</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-lg mb-1">Autoflowers</h3>
                <p className="text-3xl font-bold text-green-600">8-12 weeks</p>
                <p className="text-sm text-gray-500">Fastest option for Canadian growers</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-bold text-lg mb-1">Photoperiods</h3>
                <p className="text-3xl font-bold text-blue-600">14-24+ weeks</p>
                <p className="text-sm text-gray-500">Larger yields, more control</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Photoperiod Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <Sun className="w-8 h-8 inline-block mr-2 text-yellow-500" />
            Photoperiod Growth Timeline
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Photoperiod plants flower based on light schedule changes. Indoor growers control when 
            flowering begins by switching to 12/12 light. Outdoor plants flower naturally as days shorten.
          </p>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-yellow-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-4">
              {photoperiodStages.map((item, index) => (
                <div key={index} className="relative flex items-center gap-4">
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-yellow-500 rounded-full transform -translate-x-1/2"></div>
                  <div className="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <Card className="inline-block text-left md:text-right">
                      <CardContent className="p-4">
                        <Badge className="mb-1">{item.duration}</Badge>
                        <h3 className="font-bold">{item.stage}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center mt-6 text-lg font-semibold text-yellow-700">
            Total: 14-24+ weeks seed to harvest + 2-8 weeks drying/curing
          </p>
        </div>

        {/* Autoflower Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            <Flower className="w-8 h-8 inline-block mr-2 text-green-500" />
            Autoflower Growth Timeline
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Autoflowers flower automatically based on age, not light schedule. This makes them faster 
            and ideal for Canadian outdoor grows where the season is short.
          </p>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-green-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-4">
              {autoflowerStages.map((item, index) => (
                <div key={index} className="relative flex items-center gap-4">
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2"></div>
                  <div className="ml-10 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <Card className="inline-block text-left md:text-right">
                      <CardContent className="p-4">
                        <Badge className="mb-1 bg-green-100 text-green-800">{item.duration}</Badge>
                        <h3 className="font-bold">{item.stage}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center mt-6 text-lg font-semibold text-green-700">
            Total: 8-12 weeks seed to harvest + 2-8 weeks drying/curing
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Strain Type Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-4 text-left">Strain Type</th>
                  <th className="p-4 text-left">Seed to Harvest</th>
                  <th className="p-4 text-left">Total (w/ Cure)</th>
                  <th className="p-4 text-left">Example</th>
                </tr>
              </thead>
              <tbody>
                {strainComparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-medium">{row.type}</td>
                    <td className="p-4">{row.seedToHarvest}</td>
                    <td className="p-4">{row.totalTime}</td>
                    <td className="p-4 text-green-600">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Factors Affecting Time */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Factors That Affect Growing Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Can Speed Up Growth</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>- Choosing fast-finishing autoflower genetics</li>
                  <li>- Optimal lighting (18-20 hours for autos)</li>
                  <li>- Proper nutrients and pH</li>
                  <li>- Ideal temperature (70-85F)</li>
                  <li>- Starting with clones instead of seeds</li>
                  <li>- Shorter vegetative period (photos)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Can Slow Down Growth</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>- Stress from transplanting or training</li>
                  <li>- Nutrient deficiencies or overfeeding</li>
                  <li>- Temperature extremes</li>
                  <li>- Pests or disease</li>
                  <li>- Insufficient lighting</li>
                  <li>- Sativa-dominant long-flowering genetics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Canadian Growing Season */}
        <Card className="mb-12 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🍁</span>
              Canadian Outdoor Growing Season
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Canada's short growing season is a challenge for outdoor growers. Most regions have 
              frost-free periods from late May to early October - roughly 4-5 months.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">Best for Canadian Outdoors</h3>
                <ul className="space-y-1 text-sm">
                  <li>- Autoflowers (finish before frost)</li>
                  <li>- Fast-finishing photoperiods</li>
                  <li>- Cold-resistant genetics</li>
                  <li>- Indica-dominant strains</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold mb-2">Challenging for Canadian Outdoors</h3>
                <ul className="space-y-1 text-sm">
                  <li>- Long-flowering sativas</li>
                  <li>- Tropical genetics</li>
                  <li>- Strains needing 12+ weeks flower</li>
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
                  <p className="text-sm text-gray-600">Complete guide to growing autoflowers fast.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/outdoor-growing-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Outdoor Growing in Canada</h3>
                  <p className="text-sm text-gray-600">Tips for the Canadian outdoor season.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-autoflower-seeds-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Autoflower Seeds</h3>
                  <p className="text-sm text-gray-600">Top autoflower strains for Canadian growers.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Growing?</h2>
          <p className="text-gray-600 mb-6">Find quality seeds from trusted Canadian seed banks.</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/seed-banks">Browse Seed Banks</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
