import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Leaf, Beaker, AlertTriangle, Star, Droplets } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cannabis Soil Recipe Canada (Best Mix for Growing Weed)",
  description: "Learn the best cannabis soil recipes for Canadian growers. DIY super soil, living soil, and Blake Atwood's Canadian Grow Mix with easy-to-source ingredients.",
  keywords: "cannabis soil recipe, super soil canada, organic cannabis soil, DIY grow medium, cannabis amendments, living soil, weed soil mix",
}

export default function CannabisSoilRecipePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best soil for cannabis in Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best soil for cannabis in Canada is a well-draining mix with peat moss or coco coir, perlite, and compost or worm castings. Canadian growers need soil that handles humidity and provides good drainage due to our shorter growing seasons."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use regular potting soil for cannabis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular potting soil can work for cannabis but often lacks proper drainage and nutrients. It's better to amend it with perlite for drainage and worm castings for nutrients, or use a purpose-made cannabis soil recipe."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need nutrients with super soil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, properly made super soil contains all the nutrients your cannabis plants need from seed to harvest. This 'just add water' approach is one of the main benefits of super soil - no bottled nutrients required."
        }
      },
      {
        "@type": "Question",
        "name": "How long should soil sit before planting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Super soil should 'cook' for 2-4 weeks before use. This allows microbes to break down organic amendments into plant-available nutrients. Living soil benefits from even longer - up to 4-6 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Is organic soil better for cannabis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many growers prefer organic soil because it produces smoother-tasting buds, supports beneficial soil life, and is more environmentally sustainable. Organic super soil also simplifies feeding since you just add water."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-800">Growing Guide</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Best Cannabis Soil Recipe for Growing in Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create the perfect growing medium for healthy cannabis plants with our Canadian-optimized 
            soil recipes. From beginner mixes to advanced living soil, find the right recipe for your grow.
          </p>
        </div>

        {/* Why Soil Matters - Intro Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Why Quality Soil Matters for Canadian Growers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The foundation of a successful cannabis grow starts with your soil. For Canadian growers specifically, 
              having well-draining, nutrient-rich soil is critical due to our shorter growing seasons and higher 
              humidity levels in many regions. Quality soil provides essential nutrients, proper drainage, and a 
              healthy environment for beneficial microorganisms that help your plants thrive.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're growing indoors year-round or taking advantage of our summer outdoor season, the right 
              soil mix prevents common issues like root rot, nutrient lockout, and overwatering problems that plague 
              many Canadian grows.
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

        {/* Section 1: Beginner Mix */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Beginner Cannabis Soil Mix</h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            This simple 3-part base mix is perfect for new growers. It provides excellent drainage, water retention, 
            and a forgiving foundation that prevents the most common beginner mistakes like overwatering and root issues.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="text-center border-green-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">1</span>
                </div>
                <CardTitle className="text-lg">Peat Moss or Coco Coir</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-2 bg-green-100 text-green-800">1 Part</Badge>
                <p className="text-sm text-gray-600">Retains moisture while maintaining structure. Coco coir is more sustainable and has natural antifungal properties.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-amber-200">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-700">1</span>
                </div>
                <CardTitle className="text-lg">Compost</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-2 bg-amber-100 text-amber-800">1 Part</Badge>
                <p className="text-sm text-gray-600">Provides essential nutrients and beneficial microbes. Use quality compost or worm castings for best results.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">1</span>
                </div>
                <CardTitle className="text-lg">Perlite</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="mb-2 bg-blue-100 text-blue-800">1 Part</Badge>
                <p className="text-sm text-gray-600">Creates air pockets for root oxygenation and prevents soil compaction. Essential for proper drainage.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Why This Mix is Ideal for Beginners</h3>
              <p className="text-sm text-gray-600">
                This ratio is forgiving and hard to mess up. The perlite ensures excess water drains quickly, preventing 
                overwatering - the #1 beginner mistake. The compost provides enough nutrients for the first few weeks, 
                and you can add liquid nutrients later as needed. This mix is also very affordable and uses ingredients 
                available at any Canadian garden center.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Section 2: Super Soil Recipe */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Super Soil Recipe (Just Add Water Method)</h2>
          <p className="text-gray-600 max-w-3xl mb-4">
            Super soil is a pre-amended growing medium that contains everything your cannabis plants need from seed 
            to harvest. Once properly "cooked," you simply water your plants - no bottled nutrients required. This 
            organic approach produces excellent flavor and smooth smoke.
          </p>
          <p className="text-gray-600 max-w-3xl mb-8">
            <strong>Important:</strong> Super soil must sit for 2-4 weeks before use to allow microbes to break down 
            the amendments into plant-available nutrients.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Peat Moss</h3>
                <p className="text-sm text-gray-500">Base - 4 parts</p>
                <p className="text-xs text-green-600">Water retention</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Compost</h3>
                <p className="text-sm text-gray-500">2 parts</p>
                <p className="text-xs text-green-600">Nutrients & microbes</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Perlite</h3>
                <p className="text-sm text-gray-500">2 parts</p>
                <p className="text-xs text-green-600">Drainage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Worm Castings</h3>
                <p className="text-sm text-gray-500">2 cups/cu ft</p>
                <p className="text-xs text-green-600">Gentle nutrients</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Bone Meal</h3>
                <p className="text-sm text-gray-500">2 cups/cu ft</p>
                <p className="text-xs text-green-600">Phosphorus</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Blood Meal</h3>
                <p className="text-sm text-gray-500">1 cup/cu ft</p>
                <p className="text-xs text-green-600">Nitrogen</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Kelp Meal</h3>
                <p className="text-sm text-gray-500">1 cup/cu ft</p>
                <p className="text-xs text-green-600">Potassium & trace</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Rock Phosphate</h3>
                <p className="text-sm text-gray-500">1 cup/cu ft</p>
                <p className="text-xs text-green-600">Slow-release P</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Benefits of Super Soil</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  No bottled nutrients required - just add water throughout the grow
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Produces smoother, better-tasting buds with complex terpene profiles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  More forgiving of pH fluctuations due to buffering from organic matter
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  Can be reused and re-amended between grows
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Section 3: Living Soil */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Living Soil Mix (Advanced Growers)</h2>
          <p className="text-gray-600 max-w-3xl mb-8">
            Living soil takes organic growing to the next level by creating a self-sustaining ecosystem in your 
            containers. The microbial life feeds your plants naturally, and the soil actually improves over time. 
            This method is best for experienced growers who understand soil biology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Peat Moss</h3>
                <p className="text-sm text-gray-500">3 parts</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Perlite</h3>
                <p className="text-sm text-gray-500">1 part</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Worm Castings</h3>
                <p className="text-sm text-gray-500">1 part</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Compost</h3>
                <p className="text-sm text-gray-500">1 part</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Biochar</h3>
                <p className="text-sm text-gray-500">1/2 part</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Aged Manure</h3>
                <p className="text-sm text-gray-500">1/2 part</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Living Soil Benefits</h3>
              <p className="text-sm text-gray-600 mb-4">
                The microbial life in living soil forms symbiotic relationships with cannabis roots, delivering 
                nutrients on demand and protecting against pathogens. This creates long-term sustainability - the 
                soil gets better with each grow rather than depleting.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Living soil requires larger containers (minimum 10-15 gallons) to maintain 
                a stable ecosystem and benefits from cover crops and mulching.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Section 4: Blake Atwood's Canadian Mix */}
        <Card className="mb-12 border-2 border-red-300 bg-gradient-to-br from-red-50 to-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <Badge className="mb-1 bg-red-100 text-red-800">Featured Recipe</Badge>
                <CardTitle className="text-2xl">Blake Atwood's Canadian Grow Mix</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              This recipe was developed specifically for Canadian growing conditions, using easy-to-source ingredients 
              available at Canadian Tire, Home Depot, or local grow shops. It handles our humidity levels well and 
              provides excellent drainage while retaining enough moisture between waterings.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800">Pro-Mix HP</h4>
                <p className="text-sm text-gray-500">Base - 3.8 cu ft bale</p>
                <p className="text-xs text-gray-600 mt-1">High porosity peat-based mix</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800">Worm Castings</h4>
                <p className="text-sm text-gray-500">10-15% by volume</p>
                <p className="text-xs text-gray-600 mt-1">Gentle, balanced nutrition</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800">Extra Perlite</h4>
                <p className="text-sm text-gray-500">10-15% by volume</p>
                <p className="text-xs text-gray-600 mt-1">Improves drainage</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800">Bone Meal</h4>
                <p className="text-sm text-gray-500">1 cup per 10L</p>
                <p className="text-xs text-gray-600 mt-1">Phosphorus for flowering</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800">Kelp Meal</h4>
                <p className="text-sm text-gray-500">1/2 cup per 10L</p>
                <p className="text-xs text-gray-600 mt-1">Growth hormones & trace minerals</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800">Dolomite Lime</h4>
                <p className="text-sm text-gray-500">1 tbsp per 10L</p>
                <p className="text-xs text-gray-600 mt-1">pH buffer & calcium</p>
              </div>
            </div>
            
            <div className="bg-red-100 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Optional: Gaia Green All-Purpose & Bloom</h4>
              <p className="text-sm text-gray-600">
                Add Gaia Green 4-4-4 during veg and 2-8-4 during flower for extra nutrition. These are widely 
                available at Canadian grow shops and work perfectly with this mix.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Why It Works in Canada</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Extra perlite handles our humidity
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Pro-Mix HP available at any garden center
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Dolomite lime buffers our acidic tap water
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Best For</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Indoor grows in any province
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Container outdoor grows
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Both photos and autoflowers
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Pro Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pro Tips for Cannabis Soil</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Beaker className="w-5 h-5 text-amber-600" />
                  <h3 className="font-semibold">Layer Your Soil</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Put "hot" (nutrient-rich) super soil in the bottom third of your container and lighter soil on top. 
                  This protects seedlings while roots grow down into the nutrients.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Watering Tips</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Water thoroughly until you see 10-20% runoff, then wait until the top inch is dry before watering 
                  again. Lift your pots - light means dry, heavy means wet.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold">Drainage is Everything</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Always use containers with drainage holes. Add a layer of perlite or hydroton at the bottom. 
                  Cannabis roots need oxygen - soggy soil is the fastest way to kill a plant.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold">Avoid Nutrient Burn</h3>
                </div>
                <p className="text-sm text-gray-600">
                  More is not better. Start with less amendments than recommended and increase next grow if needed. 
                  Burnt tips are hard to fix but under-feeding is easy to correct.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 6: Autoflower Soil */}
        <Card className="mb-12 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-600" />
              Best Soil for Autoflowers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Autoflowering cannabis strains have specific soil requirements that differ from photoperiod plants. 
              Their shorter lifecycle and smaller root systems mean they're more sensitive to nutrients and need 
              a lighter soil mix.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Why Autoflowers Need Lighter Soil</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Shorter lifecycle (60-90 days) means less time to recover from stress
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Smaller root systems are easily burned by hot soil
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    No vegetative period to outgrow nutrient damage
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Autoflower Soil Recommendations</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Use 50-75% of normal amendment amounts
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Add extra perlite (30%) for faster drainage
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    Avoid blood meal - too much nitrogen
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Common Mistakes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Soil Mistakes to Avoid</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-red-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Overwatering</h3>
                    <p className="text-sm text-gray-600">The #1 killer of cannabis plants. Let soil dry between waterings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Too Many Nutrients</h3>
                    <p className="text-sm text-gray-600">Less is more. Start light and adjust based on plant response.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Poor Drainage</h3>
                    <p className="text-sm text-gray-600">Always add perlite. Use containers with drainage holes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Using Heavy Soil</h3>
                    <p className="text-sm text-gray-600">Avoid dense garden soil or clay. Cannabis needs airy, light medium.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section 8: Related Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Growing Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/best-autoflower-seeds-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Best Autoflower Seeds</h3>
                  <p className="text-sm text-gray-600">Top autoflower strains for Canadian growers.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/best-outdoor-strains-canada">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Best Outdoor Strains</h3>
                  <p className="text-sm text-gray-600">Strains that thrive in Canadian climates.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/reviews/herbies-headshop">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Herbies Seeds Review</h3>
                  <p className="text-sm text-gray-600">International seed bank with delivery guarantee.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/strains/gorilla-cookies-auto">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Gorilla Cookies Auto</h3>
                  <p className="text-sm text-gray-600">Fast Buds' heavy-yielding autoflower.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Section 9: FAQ */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What is the best soil for cannabis in Canada?</h3>
                <p className="text-sm text-gray-600">
                  The best soil for cannabis in Canada is a well-draining mix with peat moss or coco coir, perlite, 
                  and compost or worm castings. Canadian growers need soil that handles humidity and provides good 
                  drainage due to our shorter growing seasons.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I use regular potting soil for cannabis?</h3>
                <p className="text-sm text-gray-600">
                  Regular potting soil can work for cannabis but often lacks proper drainage and nutrients. It's 
                  better to amend it with perlite for drainage and worm castings for nutrients, or use a purpose-made 
                  cannabis soil recipe.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do I need nutrients with super soil?</h3>
                <p className="text-sm text-gray-600">
                  No, properly made super soil contains all the nutrients your cannabis plants need from seed to 
                  harvest. This "just add water" approach is one of the main benefits of super soil - no bottled 
                  nutrients required.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How long should soil sit before planting?</h3>
                <p className="text-sm text-gray-600">
                  Super soil should "cook" for 2-4 weeks before use. This allows microbes to break down organic 
                  amendments into plant-available nutrients. Living soil benefits from even longer - up to 4-6 weeks.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is organic soil better for cannabis?</h3>
                <p className="text-sm text-gray-600">
                  Many growers prefer organic soil because it produces smoother-tasting buds, supports beneficial 
                  soil life, and is more environmentally sustainable. Organic super soil also simplifies feeding 
                  since you just add water.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
