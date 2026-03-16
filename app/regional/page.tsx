import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Thermometer, Sun, Droplets, Calendar, AlertTriangle, CheckCircle, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Cannabis Growing Tips by Canadian Province | Regional Guides",
  description: "Province-specific cannabis growing tips for Canadian growers. Learn about climate zones, growing seasons, strain recommendations, and local regulations across Canada.",
  keywords: "cannabis growing Canada, growing tips by province, Canadian cannabis climate zones, outdoor growing Canada",
}

const provinces = [
  {
    name: "British Columbia",
    slug: "british-columbia",
    climate: "Temperate Oceanic",
    hardiness: "Zone 6-9",
    outdoorSeason: "May - October",
    avgFirstFrost: "Mid October",
    avgLastFrost: "Late April",
    humidity: "High (coastal), Moderate (interior)",
    bestStrains: ["Northern Lights", "Blue Dream", "God Bud", "Pink Kush"],
    tips: [
      "Coastal areas have high humidity - choose mold-resistant strains",
      "Interior BC (Okanagan) has ideal Mediterranean-like conditions",
      "Island strains from JOTI are bred specifically for BC climate",
      "Watch for botrytis (bud rot) in late September rain",
    ],
    challenges: ["Late season rain", "Coastal fog", "Mold pressure"],
    legal: "4 plants per household (non-medical)",
  },
  {
    name: "Ontario",
    slug: "ontario",
    climate: "Continental / Humid",
    hardiness: "Zone 4-6",
    outdoorSeason: "Late May - Late September",
    avgFirstFrost: "Late September (north) / Mid October (south)",
    avgLastFrost: "Mid May (south) / Early June (north)",
    humidity: "Moderate to High",
    bestStrains: ["Northern Lights", "Early Girl", "Critical Mass", "White Widow"],
    tips: [
      "Southern Ontario has longer season - photoperiods work well",
      "Northern Ontario needs fast-finishing strains or autos",
      "Start seedlings indoors in April to maximize season",
      "Humid summers require good airflow - train plants for ventilation",
    ],
    challenges: ["Variable weather", "Humidity swings", "Early frost in north"],
    legal: "4 plants per household",
  },
  {
    name: "Quebec",
    slug: "quebec",
    climate: "Continental / Subarctic (north)",
    hardiness: "Zone 3-5",
    outdoorSeason: "Late May - Early October",
    avgFirstFrost: "Early October (south) / Mid September (north)",
    avgLastFrost: "Late May",
    humidity: "Moderate",
    bestStrains: ["Early Miss", "Quebec Gold", "Northern Lights Auto", "Fast Bud"],
    tips: [
      "Short season requires autoflowers or fast-finishing photoperiods",
      "Quebec Cannabis Seeds breeds specifically for this climate",
      "Southern Quebec near Montreal has longer growing window",
      "Consider greenhouse extension for extra weeks",
    ],
    challenges: ["Short season", "Cold nights", "Early fall frost"],
    legal: "4 plants per household",
  },
  {
    name: "Alberta",
    slug: "alberta",
    climate: "Semi-Arid Continental",
    hardiness: "Zone 2-4",
    outdoorSeason: "Late May - Mid September",
    avgFirstFrost: "Mid September",
    avgLastFrost: "Late May",
    humidity: "Low",
    bestStrains: ["Durban Poison", "Early Skunk", "Autoflowers", "Quick One"],
    tips: [
      "Low humidity is great for avoiding mold",
      "Southern Alberta (Chinook zones) can be warmer",
      "Strong UV at elevation increases potency",
      "Wind protection essential - use stakes and supports",
    ],
    challenges: ["Short season", "Cold nights", "Strong winds", "Hail"],
    legal: "4 plants per household",
  },
  {
    name: "Manitoba & Saskatchewan",
    slug: "prairies",
    climate: "Continental / Semi-Arid",
    hardiness: "Zone 2-3",
    outdoorSeason: "Early June - Early September",
    avgFirstFrost: "Early September",
    avgLastFrost: "Late May",
    humidity: "Low",
    bestStrains: ["Autoflowers only recommended", "Northern Lights Auto", "Quick One", "Early Miss"],
    tips: [
      "Autoflowers are strongly recommended for outdoor growing",
      "Very short frost-free window requires fastest genetics",
      "Excellent for indoor growing year-round",
      "Greenhouses essential for photoperiod strains",
    ],
    challenges: ["Very short season", "Extreme temperature swings", "Early frost"],
    legal: "4 plants per household",
  },
  {
    name: "Nova Scotia",
    slug: "nova-scotia",
    climate: "Humid Continental / Maritime",
    hardiness: "Zone 5-6",
    outdoorSeason: "Late May - Mid October",
    avgFirstFrost: "Mid October",
    avgLastFrost: "Late May",
    humidity: "High",
    bestStrains: ["Mold-resistant strains", "Frisian Dew", "Holland's Hope", "Early Skunk"],
    tips: [
      "Maritime climate with high humidity requires mold-resistant genetics",
      "Cooler temperatures can bring out purple colors",
      "Relatively long season compared to other Atlantic provinces",
      "Sea breezes help with airflow but can stress plants",
    ],
    challenges: ["High humidity", "Atlantic storms", "Fog and moisture"],
    legal: "4 plants per household",
  },
]

const growingCalendar = [
  { month: "January-February", activity: "Plan your grow, order seeds, prepare equipment" },
  { month: "March", activity: "Start autoflowers indoors, prep soil for outdoor season" },
  { month: "April", activity: "Start photoperiods indoors under lights for outdoor transplant" },
  { month: "May", activity: "Harden off seedlings, transplant outdoors after last frost" },
  { month: "June", activity: "Vegetative growth phase, training and topping" },
  { month: "July", activity: "Peak vegetative growth, continue training, watch for pests" },
  { month: "August", activity: "Flowering begins for most photoperiods outdoors" },
  { month: "September", activity: "Peak flowering, watch for mold, reduce watering" },
  { month: "October", activity: "Harvest time for most strains, begin drying and curing" },
  { month: "November-December", activity: "Indoor growing season, plan next year's grow" },
]

export default function RegionalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-cyan-800 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-600">
              <MapPin className="w-3 h-3 mr-1" />
              Regional Growing Guides
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Canadian Cannabis Growing by Region
            </h1>
            <p className="text-xl text-teal-100 mb-6">
              Climate-specific tips for every Canadian province
            </p>
            <p className="text-teal-200 max-w-2xl mx-auto">
              Canada's diverse climates mean growing success depends heavily on choosing the right strains 
              and techniques for your specific region. Find expert tips for your province below.
            </p>
          </div>
        </div>
      </section>

      {/* Province Cards */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Growing Tips by Province</h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {provinces.map((province) => (
              <Card key={province.slug} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-teal-600" />
                        {province.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">{province.climate}</Badge>
                        <Badge variant="outline">Zone {province.hardiness}</Badge>
                      </div>
                    </div>
                    <Badge className="bg-green-600 w-fit">{province.legal}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-5 h-5 text-teal-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Outdoor Season</div>
                        <div className="text-sm text-muted-foreground">{province.outdoorSeason}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Thermometer className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">First Frost</div>
                        <div className="text-sm text-muted-foreground">{province.avgFirstFrost}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Sun className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Last Frost</div>
                        <div className="text-sm text-muted-foreground">{province.avgLastFrost}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Droplets className="w-5 h-5 text-cyan-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium">Humidity</div>
                        <div className="text-sm text-muted-foreground">{province.humidity}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Tips */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-4 h-4" />
                        Growing Tips
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {province.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Strains & Challenges */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Recommended Strains</h4>
                        <div className="flex flex-wrap gap-1">
                          {province.bestStrains.map((strain) => (
                            <Badge key={strain} variant="secondary" className="text-xs">{strain}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-amber-700">
                          <AlertTriangle className="w-4 h-4" />
                          Main Challenges
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {province.challenges.map((challenge) => (
                            <Badge key={challenge} variant="outline" className="text-xs text-amber-700 border-amber-300">{challenge}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Calendar */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Canadian Growing Calendar</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            A general timeline for outdoor cannabis growing in Canada. Adjust based on your specific province and local climate.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-3">
              {growingCalendar.map((item, index) => (
                <div key={item.month} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-32 flex-shrink-0">
                    <Badge variant={
                      index < 2 ? "secondary" : 
                      index < 5 ? "default" : 
                      index < 9 ? "secondary" : "outline"
                    } className="text-xs">
                      {item.month}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Climate Zone Map Description */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Understanding Canadian Hardiness Zones</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-700">2-3</span>
                </div>
                <h3 className="font-bold mb-2">Zones 2-3 (Coldest)</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Prairies, Northern Ontario, Northern Quebec. Very short growing season with early frost.
                </p>
                <Badge variant="outline" className="text-xs">Autoflowers Recommended</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-green-700">4-5</span>
                </div>
                <h3 className="font-bold mb-2">Zones 4-5 (Moderate)</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Southern Ontario, Quebec, Atlantic provinces. Decent season length, varied strain options.
                </p>
                <Badge variant="outline" className="text-xs">Most Strains Work</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-orange-700">6-9</span>
                </div>
                <h3 className="font-bold mb-2">Zones 6-9 (Warmest)</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Southern BC, Vancouver Island, Okanagan. Longest season, widest strain selection.
                </p>
                <Badge variant="outline" className="text-xs">All Strains Viable</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-teal-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Find the Right Seeds for Your Region</h2>
          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
            Browse our strain recommendations and find seed banks that ship to your province.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-teal-800 hover:bg-teal-50">
              <Link href="/strains">Browse Strains</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-teal-700">
              <Link href="/seed-banks">View Seed Banks</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
