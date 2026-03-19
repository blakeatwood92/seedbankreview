import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Leaf, Beaker, AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Best Cannabis Soil Recipe for Canada | DIY Super Soil Guide 2026",
  description: "Learn how to make the perfect cannabis soil mix for Canadian grows. DIY super soil recipes, amendments, and organic growing tips for indoor and outdoor cultivation.",
  keywords: "cannabis soil recipe, super soil canada, organic cannabis soil, DIY grow medium, cannabis amendments",
}

export default function CannabisSoilRecipePage() {
  const baseIngredients = [
    { name: "Peat Moss or Coco Coir", amount: "1/3 of total volume", purpose: "Water retention and aeration" },
    { name: "Perlite", amount: "1/3 of total volume", purpose: "Drainage and oxygen to roots" },
    { name: "Compost or Worm Castings", amount: "1/3 of total volume", purpose: "Nutrients and beneficial microbes" },
  ]

  const amendments = [
    { name: "Bone Meal", amount: "2 cups per cubic foot", nutrient: "Phosphorus", timing: "Flowering" },
    { name: "Blood Meal", amount: "1 cup per cubic foot", nutrient: "Nitrogen", timing: "Vegetative" },
    { name: "Kelp Meal", amount: "1 cup per cubic foot", nutrient: "Potassium & Trace Minerals", timing: "All stages" },
    { name: "Dolomite Lime", amount: "1 cup per cubic foot", nutrient: "Calcium & Magnesium", timing: "pH buffer" },
    { name: "Azomite", amount: "1/2 cup per cubic foot", nutrient: "Trace Minerals", timing: "All stages" },
    { name: "Bat Guano", amount: "1 cup per cubic foot", nutrient: "NPK Boost", timing: "Flowering" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-800">Growing Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cannabis Soil Recipe for Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create the perfect growing medium for healthy cannabis plants. Our DIY super soil recipe 
            is optimized for Canadian growers and works for both indoor and outdoor cultivation.
          </p>
        </div>

        {/* Why Soil Matters */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Why Quality Soil Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The foundation of a successful cannabis grow starts with your soil. Quality soil provides essential 
              nutrients, proper drainage, and a healthy environment for beneficial microorganisms. For Canadian 
              growers, having the right soil mix is especially important for outdoor grows where plants need to 
              thrive in our shorter growing season.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">Nutrient Availability</h3>
                <p className="text-sm text-gray-600">Good soil slowly releases nutrients throughout the grow cycle</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Root Health</h3>
                <p className="text-sm text-gray-600">Proper aeration and drainage prevent root rot</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold mb-2">Microbial Life</h3>
                <p className="text-sm text-gray-600">Beneficial bacteria and fungi boost plant health</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Base Recipe */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Basic Soil Recipe</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Start with this simple 3-part base mix. It provides excellent drainage, water retention, 
            and a foundation for adding nutrients.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {baseIngredients.map((ingredient, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-700">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{ingredient.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-2">{ingredient.amount}</Badge>
                  <p className="text-sm text-gray-600">{ingredient.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Super Soil Amendments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Super Soil Amendments</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Add these organic amendments to create a "super soil" that feeds your plants throughout 
            the entire grow cycle with minimal additional fertilizing.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {amendments.map((amendment, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{amendment.name}</h3>
                    <Badge variant="outline" className="text-xs">{amendment.timing}</Badge>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{amendment.amount}</p>
                  <p className="text-sm text-green-600">{amendment.nutrient}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cooking Instructions */}
        <Card className="mb-12 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="w-6 h-6 text-amber-600" />
              How to "Cook" Your Super Soil
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shrink-0">1</span>
                <div>
                  <h4 className="font-semibold">Mix All Ingredients</h4>
                  <p className="text-sm text-gray-600">Combine base ingredients and amendments in a large container or tarp. Mix thoroughly.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shrink-0">2</span>
                <div>
                  <h4 className="font-semibold">Moisten the Mix</h4>
                  <p className="text-sm text-gray-600">Add water until the soil is moist but not soggy - like a wrung-out sponge.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shrink-0">3</span>
                <div>
                  <h4 className="font-semibold">Let It Cook</h4>
                  <p className="text-sm text-gray-600">Store in a dark place for 4-6 weeks. This allows microbes to break down amendments into plant-available nutrients.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800 shrink-0">4</span>
                <div>
                  <h4 className="font-semibold">Turn Weekly</h4>
                  <p className="text-sm text-gray-600">Mix the soil once a week to ensure even decomposition and prevent anaerobic pockets.</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Canadian Tips */}
        <Card className="mb-12 border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🍁</span>
              Tips for Canadian Growers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Outdoor Growing</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Start cooking soil indoors in late winter for spring planting
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Add extra perlite in rainy regions like BC for better drainage
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Consider raised beds to warm soil faster in spring
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Indoor Growing</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Store extra soil in a cool, dark place
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Re-amend and reuse soil between grows to save money
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Add mycorrhizae when transplanting for stronger roots
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning */}
        <Card className="mb-12 border-yellow-300 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Important: Don't Use Fresh Super Soil for Seedlings</h3>
                <p className="text-sm text-gray-600">
                  Fresh super soil is too "hot" (high in nutrients) for seedlings and clones. Start young plants 
                  in a lighter mix or plain base soil, then transplant into super soil once they have 3-4 sets 
                  of true leaves. Alternatively, fill containers with super soil on the bottom half and lighter 
                  soil on top.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Growing Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/best-nutrients-for-cannabis">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Nutrients for Cannabis</h3>
                  <p className="text-sm text-gray-600">Learn about feeding schedules and nutrient brands.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/autoflower-grow-guide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Autoflower Grow Guide</h3>
                  <p className="text-sm text-gray-600">Special considerations for autoflowering strains.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/outdoor-growing-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Outdoor Growing in Canada</h3>
                  <p className="text-sm text-gray-600">Tips for successful outdoor cultivation.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Growing?</h2>
          <p className="text-gray-600 mb-6">Find quality cannabis seeds from trusted Canadian seed banks.</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/seed-banks">Browse Seed Banks</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
