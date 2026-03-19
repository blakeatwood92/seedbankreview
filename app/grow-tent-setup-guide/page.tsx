import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Box, Fan, Thermometer, Droplets, DollarSign, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Grow Tent Setup Guide Canada 2026 | Complete Indoor Growing Setup",
  description: "Step-by-step guide to setting up a cannabis grow tent in Canada. Complete equipment list, budget breakdowns, and expert tips for indoor growing.",
  keywords: "grow tent setup Canada, indoor cannabis grow room, cannabis tent setup, indoor growing equipment, grow tent guide",
}

export default function GrowTentSetupGuidePage() {
  const equipmentList = [
    {
      category: "Grow Tent",
      items: [
        { name: "4x4 Grow Tent", price: "$150-300", essential: true, notes: "Most popular size for home grows" },
        { name: "2x4 Grow Tent", price: "$100-200", essential: false, notes: "Good for beginners or limited space" },
      ]
    },
    {
      category: "Lighting",
      items: [
        { name: "LED Grow Light (300-450W)", price: "$300-700", essential: true, notes: "Spider Farmer, Mars Hydro recommended" },
        { name: "Light Timer", price: "$15-30", essential: true, notes: "Digital timer for light schedules" },
        { name: "Light Hangers", price: "$15-25", essential: true, notes: "Adjustable rope ratchets" },
      ]
    },
    {
      category: "Ventilation",
      items: [
        { name: "Inline Fan (4-6 inch)", price: "$80-200", essential: true, notes: "AC Infinity highly recommended" },
        { name: "Carbon Filter", price: "$60-150", essential: true, notes: "Matched to fan size" },
        { name: "Ducting", price: "$20-40", essential: true, notes: "4 or 6 inch aluminum ducting" },
        { name: "Clip Fans", price: "$20-40", essential: true, notes: "For air circulation" },
      ]
    },
    {
      category: "Environment Control",
      items: [
        { name: "Temp/Humidity Monitor", price: "$20-50", essential: true, notes: "Digital with min/max tracking" },
        { name: "Humidifier", price: "$40-80", essential: false, notes: "For seedling/veg stages" },
        { name: "Dehumidifier", price: "$150-300", essential: false, notes: "For flowering stage in humid climates" },
      ]
    },
    {
      category: "Growing Medium",
      items: [
        { name: "Fabric Pots (5-7 gallon)", price: "$5-15 each", essential: true, notes: "Better than plastic pots" },
        { name: "Soil/Coco Coir", price: "$20-50", essential: true, notes: "ProMix HP or Coco Coir recommended" },
        { name: "Perlite", price: "$15-30", essential: true, notes: "For soil aeration" },
      ]
    },
    {
      category: "Nutrients & pH",
      items: [
        { name: "Nutrient Kit", price: "$50-150", essential: true, notes: "General Hydroponics, Advanced Nutrients" },
        { name: "pH Meter", price: "$15-50", essential: true, notes: "Digital pH pen" },
        { name: "pH Up/Down", price: "$20-30", essential: true, notes: "For adjusting water pH" },
      ]
    },
  ]

  const budgets = [
    {
      level: "Budget Setup",
      total: "$500-700 CAD",
      tentSize: "2x4 ft",
      plants: "2-3 plants",
      description: "Perfect for beginners testing the waters",
    },
    {
      level: "Standard Setup",
      total: "$800-1200 CAD",
      tentSize: "4x4 ft",
      plants: "4-6 plants",
      description: "Most popular for serious home growers",
    },
    {
      level: "Premium Setup",
      total: "$1500-2500 CAD",
      tentSize: "4x4 or 5x5 ft",
      plants: "4-9 plants",
      description: "High-end equipment, maximum yields",
    },
  ]

  const faqs = [
    {
      question: "What size grow tent should I start with?",
      answer: "For beginners, a 2x4 or 3x3 tent is ideal - enough space for 2-4 plants without overwhelming complexity. If you have the space and budget, a 4x4 tent offers the best balance of yield potential and manageability. Remember, Canada allows up to 4 plants per household in most provinces."
    },
    {
      question: "How much does it cost to run a grow tent monthly?",
      answer: "A typical 4x4 setup with a 400W LED costs approximately $40-60 CAD per month in electricity (varies by province). This includes lights, fans, and environmental controls. The most significant cost is lighting - using efficient LEDs reduces this substantially compared to HPS."
    },
    {
      question: "Do I need a carbon filter?",
      answer: "Yes, absolutely. Cannabis produces strong odors, especially during flowering. A properly sized carbon filter connected to your inline fan will eliminate virtually all smell. This is essential for keeping your grow discrete and being a considerate neighbor."
    },
    {
      question: "What's the best growing medium for beginners?",
      answer: "Soil is most forgiving for beginners. Use a quality potting mix like ProMix HP or Fox Farm Ocean Forest. Coco coir offers faster growth but requires more precise nutrient management. Avoid miracle-gro or other time-release nutrient soils."
    },
    {
      question: "How do I control temperature and humidity?",
      answer: "Your inline fan and air circulation handle most temperature control. In winter, the heat from lights usually keeps temps adequate. For humidity, use a small humidifier during veg (target 50-70%) and potentially a dehumidifier during flowering (target 40-50%). The AC Infinity controller automates this process."
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
            <span className="text-gray-900">Grow Tent Setup Guide</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-800 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500 mb-4">Complete Guide 2026</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Grow Tent Setup Guide for Canada</h1>
            <p className="text-xl text-green-100">
              Everything you need to set up your first indoor cannabis grow. 
              Complete equipment lists, step-by-step instructions, and budget breakdowns.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 mx-auto py-12">
        {/* Budget Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {budgets.map((budget) => (
            <Card key={budget.level} className="text-center">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{budget.level}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{budget.total}</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Tent: {budget.tentSize}</div>
                  <div>Capacity: {budget.plants}</div>
                </div>
                <p className="text-sm text-gray-500 mt-3">{budget.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Setting Up Your First Grow Tent</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  A grow tent provides the perfect controlled environment for cannabis cultivation in Canada. 
                  Whether you're dealing with harsh winters or simply want year-round growing capability, 
                  an indoor setup gives you complete control over your plants' environment.
                </p>
                <p>
                  This guide walks you through everything you need - from selecting the right tent size 
                  to installing ventilation and choosing the best lights. Follow these steps and you'll 
                  have a professional-quality grow room ready for your first seeds.
                </p>
                <h3>Why Grow Tents?</h3>
                <ul>
                  <li><strong>Light control:</strong> Reflective interior maximizes light efficiency</li>
                  <li><strong>Environment control:</strong> Easy to manage temperature and humidity</li>
                  <li><strong>Odor control:</strong> Sealed design works with carbon filters</li>
                  <li><strong>Portability:</strong> Can be disassembled and moved if needed</li>
                  <li><strong>Cost-effective:</strong> Cheaper than building a dedicated room</li>
                </ul>
              </CardContent>
            </Card>

            {/* Equipment List */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Equipment Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {equipmentList.map((category) => (
                  <div key={category.category}>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      {category.category === "Grow Tent" && <Box className="w-5 h-5" />}
                      {category.category === "Ventilation" && <Fan className="w-5 h-5" />}
                      {category.category === "Environment Control" && <Thermometer className="w-5 h-5" />}
                      {category.category === "Growing Medium" && <Droplets className="w-5 h-5" />}
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.items.map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            {item.essential ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                            )}
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-gray-500">{item.notes}</div>
                            </div>
                          </div>
                          <div className="text-green-600 font-medium">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Step by Step */}
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Setup Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">Assemble the Grow Tent</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Find a level spot away from windows (to prevent light leaks). Assemble the frame, 
                        attach the fabric cover, and ensure all zippers close completely. Most tents take 15-30 minutes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Install Ventilation System</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Mount the inline fan inside the tent near the top. Connect carbon filter to fan, 
                        then run ducting from fan to an exhaust port. This creates negative pressure that 
                        pulls fresh air in through bottom vents.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">Hang Your Grow Light</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Use adjustable rope ratchets to hang light from the top crossbars. Start with 
                        light at maximum height, then lower as plants grow. Connect to timer set for 
                        18/6 (veg) or 12/12 (flower).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold">Set Up Air Circulation</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Clip small oscillating fans to tent poles. Position to create gentle airflow 
                        across the canopy. This strengthens stems and prevents hot/humid spots.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold">Prepare Growing Containers</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Fill fabric pots with your soil/coco mix. Pre-moisten the medium and let it 
                        sit overnight. Place pots on saucers or a drain tray.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div>
                    <div>
                      <h4 className="font-semibold">Test Your Environment</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Run the system for 24 hours before adding plants. Check temperature stays 
                        between 20-28°C and humidity is 50-70%. Adjust fan speed and add humidifier 
                        if needed.
                      </p>
                    </div>
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
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Canadian Legal Info
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <p>
                  Under Canadian federal law, adults can grow up to 4 cannabis plants per household 
                  (not per person). Quebec and Manitoba have provincial restrictions.
                </p>
                <p>
                  Plants must not be visible from public spaces. Indoor growing in a tent is the 
                  most compliant and discrete option.
                </p>
                <Link href="/are-cannabis-seeds-legal-canada" className="text-green-700 hover:underline font-medium block">
                  Learn more about cannabis laws in Canada
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Guides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/best-grow-lights-canada" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Best Grow Lights Canada</span>
                  <span className="text-sm text-gray-500 block">LED light recommendations</span>
                </Link>
                <Link href="/best-nutrients-for-cannabis" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Best Cannabis Nutrients</span>
                  <span className="text-sm text-gray-500 block">Feeding your plants</span>
                </Link>
                <Link href="/cannabis-soil-recipe" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Cannabis Soil Recipe</span>
                  <span className="text-sm text-gray-500 block">DIY super soil guide</span>
                </Link>
                <Link href="/autoflower-grow-guide" className="block p-2 hover:bg-gray-50 rounded">
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
                  <span className="text-sm text-gray-500 block">Best beginner strain</span>
                </Link>
                <Link href="/strains/gorilla-cookies-auto" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Gorilla Cookies Auto</span>
                  <span className="text-sm text-gray-500 block">High yield, compact</span>
                </Link>
                <Link href="/best-autoflower-seeds-canada" className="block p-2 hover:bg-gray-50 rounded">
                  <span className="font-medium">Best Autoflower Seeds</span>
                  <span className="text-sm text-gray-500 block">Easiest for tent grows</span>
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
                  <p className="text-sm text-gray-600">Complete beginner's guide to Canadian cultivation.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-seed-banks-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Seed Banks Canada</h3>
                  <p className="text-sm text-gray-600">Where to buy quality seeds for your grow.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/how-to-buy-cannabis-seeds-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How to Buy Seeds in Canada</h3>
                  <p className="text-sm text-gray-600">Step-by-step guide to ordering seeds.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
