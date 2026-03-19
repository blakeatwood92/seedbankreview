import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Leaf, Droplets } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Best Nutrients for Cannabis in Canada 2026 | Complete Feeding Guide",
  description: "Discover the best cannabis nutrients available in Canada. Compare top brands like Advanced Nutrients, General Hydroponics, and Gaia Green for healthy plants and maximum yields.",
  keywords: "cannabis nutrients canada, best fertilizer for weed, cannabis feeding schedule, marijuana nutrients, grow nutrients",
}

export default function BestNutrientsPage() {
  const nutrientBrands = [
    {
      name: "Advanced Nutrients",
      type: "Synthetic",
      rating: 4.8,
      price: "$$$",
      bestFor: "Maximum yields, experienced growers",
      pros: ["pH Perfect technology", "Complete feeding systems", "Proven results"],
      cons: ["Expensive", "Can be complex for beginners"],
      products: ["Micro-Grow-Bloom", "Big Bud", "Overdrive"],
    },
    {
      name: "General Hydroponics",
      type: "Synthetic",
      rating: 4.7,
      price: "$$",
      bestFor: "Hydroponic and soil grows",
      pros: ["Affordable", "Widely available in Canada", "Versatile"],
      cons: ["Requires pH management", "Multiple bottles needed"],
      products: ["Flora Series", "FloraNova", "CaliMagic"],
    },
    {
      name: "Gaia Green",
      type: "Organic",
      rating: 4.6,
      price: "$$",
      bestFor: "Organic soil grows, Canadian-made",
      pros: ["Canadian company", "Slow-release", "Organic certified"],
      cons: ["Slower results", "Not for hydroponics"],
      products: ["All Purpose 4-4-4", "Power Bloom 2-8-4", "Worm Castings"],
    },
    {
      name: "Remo Nutrients",
      type: "Synthetic",
      rating: 4.5,
      price: "$$",
      bestFor: "Canadian growers wanting local brand",
      pros: ["Canadian company", "Complete system", "Good support"],
      cons: ["Less widely known", "Multiple products needed"],
      products: ["Micro", "Grow", "Bloom", "MagnifiCal"],
    },
  ]

  const feedingSchedule = [
    { stage: "Seedling", weeks: "1-2", nitrogen: "Low", phosphorus: "Low", potassium: "Low", notes: "Plain water or 1/4 strength" },
    { stage: "Early Veg", weeks: "3-4", nitrogen: "Medium", phosphorus: "Low", potassium: "Medium", notes: "Start at 1/2 strength" },
    { stage: "Late Veg", weeks: "5-6", nitrogen: "High", phosphorus: "Medium", potassium: "Medium", notes: "Full strength, focus on N" },
    { stage: "Transition", weeks: "7", nitrogen: "Medium", phosphorus: "Medium", potassium: "Medium", notes: "Begin switching to bloom" },
    { stage: "Early Flower", weeks: "8-10", nitrogen: "Low", phosphorus: "High", potassium: "High", notes: "Switch to bloom nutrients" },
    { stage: "Mid Flower", weeks: "11-13", nitrogen: "Low", phosphorus: "High", potassium: "High", notes: "Peak feeding, add boosters" },
    { stage: "Late Flower", weeks: "14-15", nitrogen: "None", phosphorus: "Medium", potassium: "Medium", notes: "Reduce nutrients" },
    { stage: "Flush", weeks: "16+", nitrogen: "None", phosphorus: "None", potassium: "None", notes: "Plain water only" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Growing Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Best Nutrients for Cannabis in Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The right nutrients can dramatically improve your yields and bud quality. Compare the best 
            cannabis nutrient brands available to Canadian growers and learn proper feeding techniques.
          </p>
        </div>

        {/* NPK Basics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Understanding NPK: The Big Three
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-bold text-lg text-green-700 mb-2">N - Nitrogen</h3>
                <p className="text-sm text-gray-600 mb-2">Essential for vegetative growth, leaf development, and chlorophyll production.</p>
                <Badge variant="outline">High during Veg</Badge>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="font-bold text-lg text-amber-700 mb-2">P - Phosphorus</h3>
                <p className="text-sm text-gray-600 mb-2">Critical for root development, energy transfer, and flower/bud production.</p>
                <Badge variant="outline">High during Flower</Badge>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-bold text-lg text-blue-700 mb-2">K - Potassium</h3>
                <p className="text-sm text-gray-600 mb-2">Regulates water uptake, enzyme activation, and overall plant health.</p>
                <Badge variant="outline">Important Always</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Brands */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Top Nutrient Brands for Canadian Growers</h2>
          
          <div className="space-y-6">
            {nutrientBrands.map((brand, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{brand.name}</h3>
                        <Badge className={brand.type === "Organic" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                          {brand.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(brand.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{brand.rating}/5</span>
                      </div>
                      <p className="text-sm text-gray-600">Price: {brand.price}</p>
                      <p className="text-sm text-green-600 font-medium mt-1">Best for: {brand.bestFor}</p>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <h4 className="font-semibold mb-2 text-green-700">Pros</h4>
                      <ul className="space-y-1">
                        {brand.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                      <h4 className="font-semibold mb-2 mt-3 text-red-700">Cons</h4>
                      <ul className="space-y-1">
                        {brand.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600">- {con}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <h4 className="font-semibold mb-2">Popular Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.products.map((product, i) => (
                          <Badge key={i} variant="outline">{product}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feeding Schedule */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Basic Feeding Schedule</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            This general schedule works for most photoperiod strains. Autoflowers have a compressed schedule 
            - reduce timeframes and use lighter doses.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="p-3 text-left">Stage</th>
                  <th className="p-3 text-left">Weeks</th>
                  <th className="p-3 text-center">N</th>
                  <th className="p-3 text-center">P</th>
                  <th className="p-3 text-center">K</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {feedingSchedule.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-medium">{row.stage}</td>
                    <td className="p-3">{row.weeks}</td>
                    <td className="p-3 text-center">
                      <Badge className={
                        row.nitrogen === "High" ? "bg-green-600" :
                        row.nitrogen === "Medium" ? "bg-green-400" :
                        row.nitrogen === "Low" ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-600"
                      }>{row.nitrogen}</Badge>
                    </td>
                    <td className="p-3 text-center">
                      <Badge className={
                        row.phosphorus === "High" ? "bg-amber-600" :
                        row.phosphorus === "Medium" ? "bg-amber-400" :
                        row.phosphorus === "Low" ? "bg-amber-200 text-amber-800" : "bg-gray-200 text-gray-600"
                      }>{row.phosphorus}</Badge>
                    </td>
                    <td className="p-3 text-center">
                      <Badge className={
                        row.potassium === "High" ? "bg-blue-600" :
                        row.potassium === "Medium" ? "bg-blue-400" :
                        row.potassium === "Low" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"
                      }>{row.potassium}</Badge>
                    </td>
                    <td className="p-3 text-sm text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips */}
        <Card className="mb-12 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="w-6 h-6 text-blue-600" />
              Pro Tips for Feeding Cannabis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm"><strong>Start low, go slow:</strong> Begin at 1/4-1/2 recommended strength and increase gradually.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm"><strong>Check pH:</strong> Keep pH between 6.0-7.0 for soil, 5.5-6.5 for hydro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm"><strong>Watch your plants:</strong> Yellow leaves, burnt tips, and slow growth indicate nutrient issues.</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm"><strong>Flush before harvest:</strong> Use plain water for the last 1-2 weeks for better taste.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm"><strong>Don't overfeed:</strong> More nutrients doesn't mean bigger yields - it often causes problems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm"><strong>Consider CalMag:</strong> Most Canadian tap water is soft and benefits from calcium/magnesium supplements.</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Related Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Related Growing Guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/cannabis-soil-recipe">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cannabis Soil Recipe</h3>
                  <p className="text-sm text-gray-600">DIY super soil for organic growing.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/autoflower-grow-guide">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Autoflower Grow Guide</h3>
                  <p className="text-sm text-gray-600">Special feeding for autoflowering strains.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-grow-lights-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Best Grow Lights</h3>
                  <p className="text-sm text-gray-600">LED lights for indoor cultivation.</p>
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
