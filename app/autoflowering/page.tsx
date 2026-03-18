import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Clock, Sun, Droplets, ThermometerSun, CheckCircle, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Autoflowering Cannabis Seeds in Canada | 2024 Guide",
  description: "Find the best autoflowering cannabis seeds for Canadian growers. Compare top autoflower strains, seed banks, and tips for growing autos in Canada's climate.",
  keywords: "autoflowering seeds Canada, best autoflower strains, auto cannabis seeds, autoflowering cannabis Canada",
}

const autoflowerStrains = [
  {
    name: "Northern Lights Auto",
    breeder: "Various",
    type: "Indica",
    thc: "18-22%",
    cbd: "<1%",
    floweringTime: "8-10 weeks",
    yield: "400-500g/m²",
    difficulty: "Beginner",
    description: "Classic indica genetics in auto form. Perfect for Canadian climates with strong mold resistance and compact size.",
    climate: "Cold tolerant",
    height: "60-100cm",
  },
  {
    name: "Blue Dream Auto",
    breeder: "Various",
    type: "Hybrid",
    thc: "17-21%",
    cbd: "<1%",
    floweringTime: "9-11 weeks",
    yield: "350-450g/m²",
    difficulty: "Beginner",
    description: "Balanced hybrid with berry flavors. Great daytime strain with uplifting effects and easy growing.",
    climate: "Adaptable",
    height: "80-120cm",
  },
  {
    name: "Critical Purple Auto",
    breeder: "Various",
    type: "Indica",
    thc: "16-20%",
    cbd: "<1%",
    floweringTime: "8-9 weeks",
    yield: "400-550g/m²",
    difficulty: "Beginner",
    description: "Fast finishing purple beauty with high yields. Excellent for northern provinces with short summers.",
    climate: "Cold resistant",
    height: "70-100cm",
  },
  {
    name: "Amnesia Haze Auto",
    breeder: "Various",
    type: "Sativa",
    thc: "20-24%",
    cbd: "<1%",
    floweringTime: "10-12 weeks",
    yield: "350-400g/m²",
    difficulty: "Intermediate",
    description: "Award-winning sativa in auto form. Energetic high with citrus flavors. Longer flowering but worth the wait.",
    climate: "Warm preferred",
    height: "90-140cm",
  },
  {
    name: "Gorilla Glue Auto",
    breeder: "Various",
    type: "Hybrid",
    thc: "22-26%",
    cbd: "<1%",
    floweringTime: "8-10 weeks",
    yield: "400-500g/m²",
    difficulty: "Intermediate",
    description: "Ultra-potent auto with sticky resin production. Heavy yields and powerful effects. Great for extracts.",
    climate: "Adaptable",
    height: "80-110cm",
  },
  {
    name: "White Widow Auto",
    breeder: "Various",
    type: "Hybrid",
    thc: "18-22%",
    cbd: "<1%",
    floweringTime: "8-10 weeks",
    yield: "350-450g/m²",
    difficulty: "Beginner",
    description: "Legendary Dutch genetics in auto form. Balanced effects with frosty appearance. Highly resilient.",
    climate: "Cold tolerant",
    height: "60-90cm",
  },
]

const seedBanks = [
  {
    name: "Quebec Cannabis Seeds",
    slug: "quebec-cannabis-seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
    rating: 4.6,
    autoCount: "50+",
    description: "Canadian seed bank specializing in autoflowers suited for northern climates.",
    specialties: ["Northern Climate Autos", "Beginner Friendly", "Fast Shipping"],
    affiliateUrl: "https://quebeccannabisseeds.com",
  },
  {
    name: "True North Seed Bank",
    slug: "true-north-seed-bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.8,
    autoCount: "200+",
    description: "Huge selection of autoflowers from top breeders worldwide.",
    specialties: ["Wide Selection", "Multiple Breeders", "Frequent Sales"],
    affiliateUrl: "https://truenorthseedbank.com",
  },
  {
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    autoCount: "500+",
    description: "Massive international selection with own autoflower genetics line.",
    specialties: ["Own Genetics", "Free Seeds", "Delivery Guarantee"],
    affiliateUrl: "https://herbiesheadshop.com",
  },
  {
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    autoCount: "1000+",
    description: "World's largest selection of autoflowering seeds from 100+ breeders.",
    specialties: ["Largest Selection", "Rare Genetics", "Bulk Discounts"],
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
  },
]

export default function AutofloweringPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-emerald-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-700">
              <Zap className="w-3 h-3 mr-1" />
              Autoflowering Seeds
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Best Autoflowering Seeds for Canada
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Fast, easy, and perfect for Canada's short growing season
            </p>
            <p className="text-green-200 max-w-2xl mx-auto">
              Autoflowering seeds are ideal for Canadian growers - they flower automatically regardless of light cycle, 
              finish faster, and are perfect for our short outdoor season or year-round indoor growing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Autoflowers */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Autoflowers in Canada?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Fast Harvest</h3>
                <p className="text-muted-foreground text-sm">
                  Seed to harvest in 8-12 weeks. Multiple harvests possible per season.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThermometerSun className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Cold Tolerant</h3>
                <p className="text-muted-foreground text-sm">
                  Ruderalis genetics make autos more resistant to cold Canadian temperatures.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">No Light Schedule</h3>
                <p className="text-muted-foreground text-sm">
                  Flowers automatically regardless of light hours. Simple for beginners.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold mb-2">Compact Size</h3>
                <p className="text-muted-foreground text-sm">
                  Stay small and discreet. Perfect for balconies, small gardens, or stealth grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Strains */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Top Autoflower Strains for Canada</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            These autoflowering strains have been selected for their performance in Canadian growing conditions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {autoflowerStrains.map((strain) => (
              <Card key={strain.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{strain.name}</CardTitle>
                    <Badge variant={
                      strain.type === "Indica" ? "default" : 
                      strain.type === "Sativa" ? "secondary" : "outline"
                    }>
                      {strain.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{strain.breeder}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{strain.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span><strong>THC:</strong> {strain.thc}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span><strong>Time:</strong> {strain.floweringTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThermometerSun className="w-4 h-4 text-green-500" />
                      <span><strong>Climate:</strong> {strain.climate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span><strong>Level:</strong> {strain.difficulty}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground pt-3 border-t">
                    <span>Yield: {strain.yield}</span>
                    <span>Height: {strain.height}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Strain Banner */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container px-4 mx-auto">
          <a
            href="https://herbiesheadshop.com/cannabis-seeds/apple-betty-auto?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-green-200">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-emerald-700 p-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Badge className="mb-2 bg-yellow-500 text-black">Featured Auto</Badge>
                    <h3 className="text-2xl font-bold">Apple Betty Auto</h3>
                    <p className="text-green-100 text-sm mt-1">by Herbies Seeds</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">10-20% OFF</Badge>
                    <Badge variant="secondary">Indica Dominant</Badge>
                    <Badge variant="secondary">Fast Flowering</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Sweet apple pie flavors with relaxing effects. Perfect for Canadian growers looking for a unique, 
                    easy-to-grow autoflower with exceptional taste.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Shop Apple Betty Auto
                  </Button>
                </div>
              </div>
            </Card>
          </a>
        </div>
      </section>

      {/* Seed Banks */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Best Seed Banks for Autoflowers</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            These seed banks have the best selection of autoflowering seeds with reliable shipping to Canada.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {seedBanks.map((bank) => (
              <Card key={bank.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={bank.logo}
                        alt={bank.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{bank.name}</h3>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{bank.rating}</span>
                        <Badge variant="secondary" className="text-xs">{bank.autoCount} Autos</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{bank.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {bank.specialties.map((spec) => (
                      <Badge key={spec} variant="outline" className="text-xs">{spec}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <a href={bank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Autos
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/reviews/${bank.slug}`}>Review</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Tips */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Autoflower Growing Tips for Canada</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  Outdoor Growing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Start outdoors from late May to early June in most provinces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Get 2-3 harvests per season by staggering plantings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Choose cold-tolerant strains for northern provinces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Most autos finish before September frost in Canada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  Indoor Growing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Run 18-20 hours of light throughout entire grow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Don't transplant - start in final container</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use light nutrient feeding - autos are sensitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>LST (Low Stress Training) works well, avoid heavy topping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-green-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Autoflowers?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Browse our complete seed bank directory to find the perfect autoflowering genetics for your grow.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
              <Link href="/seed-banks">View All Seed Banks</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
              <Link href="/strains">Browse All Strains</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
