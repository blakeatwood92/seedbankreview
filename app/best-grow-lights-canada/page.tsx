import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Sun, Zap, DollarSign, ThermometerSun, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Grow Lights for Cannabis in Canada 2026 | Complete Guide",
  description: "Compare the best LED grow lights for cannabis in Canada. Expert reviews of top-rated lights for indoor growing with Canadian retailer recommendations.",
  keywords: "best grow lights Canada, LED grow lights cannabis, indoor growing lights, cannabis cultivation Canada, grow light reviews",
}

export default function BestGrowLightsCanadaPage() {
  const topLights = [
    {
      name: "Spider Farmer SF-4000",
      type: "LED Quantum Board",
      wattage: "450W",
      coverage: "4x4 ft",
      spectrum: "Full Spectrum",
      price: "$599-699 CAD",
      pros: ["Excellent efficiency", "Samsung LM301B diodes", "Dimmable", "Low heat"],
      cons: ["Higher initial cost", "No UV/IR switches"],
      bestFor: "Serious home growers, 4x4 tent setups",
    },
    {
      name: "Mars Hydro TSW 2000",
      type: "LED Quantum Board",
      wattage: "300W",
      coverage: "3x3 ft",
      spectrum: "Full Spectrum",
      price: "$299-399 CAD",
      pros: ["Great value", "Low heat output", "Quiet operation", "5-year warranty"],
      cons: ["Not as efficient as Spider Farmer", "No dimmer on base model"],
      bestFor: "Budget-conscious growers, 3x3 tents",
    },
    {
      name: "HLG 550 V2 Rspec",
      type: "LED Quantum Board",
      wattage: "480W",
      coverage: "4x4 ft",
      spectrum: "Full Spectrum + Deep Red",
      price: "$899-999 CAD",
      pros: ["Premium Samsung diodes", "Highest efficiency", "Made in USA", "Modular design"],
      cons: ["Expensive", "May need separate controller"],
      bestFor: "Commercial growers, maximum yield",
    },
    {
      name: "Viparspectra P2000",
      type: "LED Quantum Board",
      wattage: "200W",
      coverage: "2x4 ft",
      spectrum: "Full Spectrum",
      price: "$169-229 CAD",
      pros: ["Very affordable", "Good for beginners", "Dimmable", "Lightweight"],
      cons: ["Lower efficiency", "Smaller coverage"],
      bestFor: "Beginners, small grows, 2x2 or 2x4 spaces",
    },
  ]

  const faqs = [
    {
      question: "What size grow light do I need for cannabis?",
      answer: "A good rule of thumb is 30-50 watts per square foot for LED lights. For a 4x4 foot tent, you'd want 400-800 watts of LED. For a 2x4 tent, 200-400 watts is sufficient. Higher efficiency LEDs (like quantum boards with Samsung diodes) can use less wattage for the same results."
    },
    {
      question: "LED vs HPS lights for cannabis in Canada?",
      answer: "LED lights are now the preferred choice for Canadian growers. They produce less heat (important for small spaces), use 40-50% less electricity (significant given Canada's electricity costs), last longer (50,000+ hours), and produce fuller spectrum light. HPS may still have a place in large commercial operations but LED is superior for home grows."
    },
    {
      question: "How much do grow lights cost to run in Canada?",
      answer: "Running a 400W LED light for 18 hours/day (veg schedule) costs approximately $25-40 CAD per month depending on your province's electricity rates. During flowering at 12 hours, this drops to $17-27/month. Ontario and BC have some of the lowest rates, while the territories have the highest."
    },
    {
      question: "Where can I buy grow lights in Canada?",
      answer: "Popular Canadian retailers include Amazon.ca, Canadian Tire (basic options), hydroponics stores like GrowDaddy, IndoorGrowingCanada, and direct from manufacturers. Many Chinese brands (Spider Farmer, Mars Hydro) ship directly to Canada with reasonable shipping times."
    },
    {
      question: "Do I need different lights for veg and flower?",
      answer: "Modern full-spectrum LEDs work for both vegetative and flowering stages. The key is adjusting the light schedule (18/6 for veg, 12/12 for flower for photoperiod plants). Some premium lights have switches to boost red spectrum during flowering, but this isn't necessary - many growers achieve excellent results with basic full-spectrum LEDs."
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
            <Link href="/guides" className="hover:text-green-600">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Best Grow Lights Canada</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-amber-500 mb-4">Updated for 2026</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Best Grow Lights for Cannabis in Canada</h1>
            <p className="text-xl text-amber-100">
              Complete guide to choosing the right LED grow lights for indoor cannabis cultivation. 
              Compare top-rated lights with Canadian pricing and retailer recommendations.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto py-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Sun className="w-8 h-8 mx-auto mb-2 text-amber-500" />
              <div className="text-2xl font-bold">LED</div>
              <div className="text-sm text-gray-600">Recommended Type</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-2xl font-bold">30-50W</div>
              <div className="text-sm text-gray-600">Per Sq Foot</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">$200-1000</div>
              <div className="text-sm text-gray-600">Price Range CAD</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <ThermometerSun className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-gray-600">Hours Lifespan</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Choosing the Right Grow Light</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Selecting the right grow light is one of the most important decisions for indoor cannabis 
                  cultivation in Canada. Modern LED technology has revolutionized home growing, offering 
                  efficient, cool-running lights that produce excellent results without breaking the bank 
                  on electricity bills.
                </p>
                <p>
                  For Canadian growers, LED lights are particularly advantageous. Our cold winters mean 
                  less need for the heat that HPS lights produce, and the energy efficiency helps offset 
                  growing costs. Plus, LEDs last for years, making them a smart long-term investment.
                </p>
                <h3>What to Look For</h3>
                <ul>
                  <li><strong>Efficiency (PPE/PPF):</strong> Higher efficiency means more light per watt of electricity</li>
                  <li><strong>Coverage area:</strong> Match your light to your grow space</li>
                  <li><strong>Spectrum:</strong> Full-spectrum lights work for both veg and flower</li>
                  <li><strong>Heat output:</strong> Lower heat is better for small spaces</li>
                  <li><strong>Warranty:</strong> Look for 3-5 year warranties</li>
                  <li><strong>Dimming:</strong> Allows adjustment for different growth stages</li>
                </ul>
              </CardContent>
            </Card>

            {/* Top Lights */}
            <Card>
              <CardHeader>
                <CardTitle>Top Recommended Grow Lights for 2026</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {topLights.map((light, index) => (
                  <div key={light.name} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">
                            #{index + 1}
                          </span>
                          <h3 className="font-semibold text-lg">{light.name}</h3>
                        </div>
                        <p className="text-sm text-gray-500">{light.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">{light.price}</div>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-4 gap-4 mb-3 text-sm">
                      <div>
                        <span className="text-gray-500">Wattage:</span>
                        <span className="ml-1 font-medium">{light.wattage}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Coverage:</span>
                        <span className="ml-1 font-medium">{light.coverage}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Spectrum:</span>
                        <span className="ml-1 font-medium">{light.spectrum}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Best For:</span>
                        <span className="ml-1 font-medium">{light.bestFor}</span>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-green-600 font-medium text-sm">Pros:</span>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          {light.pros.map((pro) => (
                            <li key={pro} className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-red-600 font-medium text-sm">Cons:</span>
                        <ul className="text-sm text-gray-600 mt-1 space-y-1">
                          {light.cons.map((con) => (
                            <li key={con} className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Light Size Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Grow Light Size Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Tent Size</th>
                        <th className="text-left py-2">Recommended Wattage</th>
                        <th className="text-left py-2">Plant Count</th>
                        <th className="text-left py-2">Best Light Option</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">2x2 ft</td>
                        <td className="py-2">100-200W</td>
                        <td className="py-2">1-2 plants</td>
                        <td className="py-2">Viparspectra P1000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">2x4 ft</td>
                        <td className="py-2">200-400W</td>
                        <td className="py-2">2-4 plants</td>
                        <td className="py-2">Mars Hydro TSW 2000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">3x3 ft</td>
                        <td className="py-2">250-450W</td>
                        <td className="py-2">2-4 plants</td>
                        <td className="py-2">Spider Farmer SF-2000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">4x4 ft</td>
                        <td className="py-2">400-600W</td>
                        <td className="py-2">4-6 plants</td>
                        <td className="py-2">Spider Farmer SF-4000</td>
                      </tr>
                      <tr>
                        <td className="py-2">5x5 ft</td>
                        <td className="py-2">600-800W</td>
                        <td className="py-2">6-9 plants</td>
                        <td className="py-2">HLG 600 Rspec</td>
                      </tr>
                    </tbody>
                  </table>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <strong>Start with quality LEDs</strong>
                  <p className="text-gray-600 mt-1">Cheap blurple lights waste electricity and produce inferior results.</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <strong>Measure your space first</strong>
                  <p className="text-gray-600 mt-1">Buy the right size light for your tent/grow space.</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <strong>Consider electricity costs</strong>
                  <p className="text-gray-600 mt-1">More efficient lights save money long-term.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle>Related Guides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/grow-tent-setup-guide" className="block p-2 hover:bg-amber-100 rounded transition-colors">
                  <span className="font-medium">Grow Tent Setup Guide</span>
                  <span className="text-sm text-gray-500 block">Complete indoor setup</span>
                </Link>
                <Link href="/best-nutrients-for-cannabis" className="block p-2 hover:bg-amber-100 rounded transition-colors">
                  <span className="font-medium">Best Cannabis Nutrients</span>
                  <span className="text-sm text-gray-500 block">Feeding your plants</span>
                </Link>
                <Link href="/autoflower-grow-guide" className="block p-2 hover:bg-amber-100 rounded transition-colors">
                  <span className="font-medium">Autoflower Grow Guide</span>
                  <span className="text-sm text-gray-500 block">Growing autoflowers indoors</span>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Strains</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/strains/northern-lights" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Northern Lights</span>
                  <span className="text-sm text-gray-500 block">Compact, beginner-friendly</span>
                </Link>
                <Link href="/strains/gorilla-cookies-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Gorilla Cookies Auto</span>
                  <span className="text-sm text-gray-500 block">High yield, 20/4 light schedule</span>
                </Link>
                <Link href="/best-autoflower-seeds-canada" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Best Autoflower Seeds</span>
                  <span className="text-sm text-gray-500 block">All top auto recommendations</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/grow-tent-setup-guide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Grow Tent Setup Guide</h3>
                  <p className="text-sm text-gray-600">Everything you need for your indoor grow room.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/growing-cannabis-in-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Growing Cannabis in Canada</h3>
                  <p className="text-sm text-gray-600">Complete beginner's guide to Canadian cultivation.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-seed-banks-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Seed Banks Canada</h3>
                  <p className="text-sm text-gray-600">Where to buy quality cannabis seeds.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
