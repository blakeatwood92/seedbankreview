import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, Sun, Snowflake } from "lucide-react"

export function RegionalGuide() {
  const provincialGuides = [
    {
      title: "British Columbia",
      description: "Mild winters, long growing seasons",
      icon: Sun,
      recommendations: ["Heat-tolerant varieties", "Drought-resistant strains", "Shade-tolerant genetics"],
      seedBanks: ["Desert specialists", "Mediterranean genetics"],
      growingTips: ["Ensure good drainage", "Use high-quality soil"],
    },
    {
      title: "Ontario",
      description: "Four distinct seasons, fertile soil",
      icon: Sun,
      recommendations: ["Photoperiod strains", "Sativa-dominant hybrids", "Medium flowering time"],
      seedBanks: ["Jordan of the Islands", "International options"],
      growingTips: ["Monitor temperature fluctuations", "Provide ample sunlight"],
    },
    {
      title: "Quebec",
      description: "Cold winters, short growing seasons",
      icon: Snowflake,
      recommendations: ["Autoflowering varieties", "Fast-finishing strains", "Cold-resistant genetics"],
      seedBanks: ["FastBuzz.com", "True North Seed Bank"],
      growingTips: ["Use grow lights during winter", "Maintain indoor humidity"],
    },
    {
      title: "Alberta",
      description: "Hot summers, cold winters",
      icon: Thermometer,
      recommendations: ["Heat-tolerant varieties", "Drought-resistant strains", "Shade-tolerant genetics"],
      seedBanks: ["Desert specialists", "Mediterranean genetics"],
      growingTips: ["Protect plants from extreme heat", "Use cold frames for winter growing"],
    },
    // Additional provinces can be added here
  ]

  return (
    <section className="py-20 bg-red-100/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Provincial Growing Guide</h2>
          <p className="text-xl text-red-600 max-w-3xl mx-auto">
            Find the best seed banks and genetics for your specific Canadian province and growing conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {provincialGuides.map((guide) => {
            const Icon = guide.icon
            return (
              <Card key={guide.title} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <p className="text-sm text-red-600">{guide.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Recommended Genetics:</h4>
                      <ul className="text-xs text-red-600 space-y-1">
                        {guide.recommendations.map((rec) => (
                          <li key={rec}>• {rec}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Best Seed Banks:</h4>
                      <ul className="text-xs text-red-600 space-y-1">
                        {guide.seedBanks.map((bank) => (
                          <li key={bank}>• {bank}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Growing Tips:</h4>
                      <ul className="text-xs text-red-600 space-y-1">
                        {guide.growingTips.map((tip) => (
                          <li key={tip}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-red-600 border-red-600 bg-transparent">
            Get Personalized Recommendations
          </Button>
        </div>
      </div>
    </section>
  )
}
