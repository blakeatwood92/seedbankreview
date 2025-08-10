import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, MapPin } from "lucide-react"

export function TopSeedBanks() {
  const canadianBanks = [
    {
      name: "FastBuzz.com",
      rating: 4.8,
      location: "Canada",
      specialties: ["Fast Shipping", "Discreet Packaging", "Canadian Genetics"],
      description: "Leading Canadian seed bank with exceptional customer service and premium genetics.",
      affiliate: true,
    },
    {
      name: "True North Seed Bank",
      rating: 4.7,
      location: "Canada",
      specialties: ["Established Reputation", "Wide Selection", "Secure Payment"],
      description: "Trusted Canadian source with years of experience and verified genetics.",
      affiliate: true,
    },
    {
      name: "Jordan of the Islands",
      rating: 4.6,
      location: "Canada",
      specialties: ["Original Genetics", "Breeder Direct", "Island Genetics"],
      description: "Renowned Canadian breeder offering unique island-bred cannabis genetics.",
      affiliate: true,
    },
    {
      name: "GoBack Seed Bank",
      rating: 4.5,
      location: "Canada",
      specialties: ["Competitive Prices", "Bulk Orders", "Regular Promotions"],
      description: "Value-focused Canadian seed bank with competitive pricing and quality genetics.",
      affiliate: true,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Top Canadian Seed Banks</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our highest-rated Canadian seed banks, perfect for domestic orders with fast, discreet shipping.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {canadianBanks.map((bank, index) => (
            <Card key={bank.name} className="relative group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        #{index + 1}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{bank.location}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{bank.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(bank.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{bank.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{bank.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {bank.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Site
                  </Button>
                  <Button variant="outline" size="sm">
                    Read Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Canadian Seed Banks
          </Button>
        </div>
      </div>
    </section>
  )
}
