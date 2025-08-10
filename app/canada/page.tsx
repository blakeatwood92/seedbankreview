import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, Truck, CreditCard } from "lucide-react"

export default function CanadaPage() {
  const canadianBanks = [
    {
      name: "FastBuzz.com",
      rating: 4.8,
      reviews: 1247,
      description: "Premium Canadian seed bank with lightning-fast shipping and exceptional customer service.",
      pros: ["Same-day shipping", "Discreet packaging", "Canadian genetics", "Excellent support"],
      cons: ["Higher prices", "Limited international shipping"],
      paymentMethods: ["Credit Card", "E-Transfer", "Bitcoin"],
      shippingTime: "1-3 days",
      affiliate: true,
    },
    {
      name: "True North Seed Bank",
      rating: 4.7,
      reviews: 892,
      description: "Established Canadian seed bank with a reputation for quality genetics and reliable service.",
      pros: ["Wide selection", "Established reputation", "Secure payment", "Quality genetics"],
      cons: ["Slower shipping", "Limited promotions"],
      paymentMethods: ["Credit Card", "E-Transfer", "Cash"],
      shippingTime: "3-5 days",
      affiliate: true,
    },
    {
      name: "Jordan of the Islands",
      rating: 4.6,
      reviews: 634,
      description: "Renowned Canadian breeder offering unique island-bred cannabis genetics.",
      pros: ["Original genetics", "Breeder direct", "Unique strains", "Island genetics"],
      cons: ["Limited selection", "Higher prices", "Seasonal availability"],
      paymentMethods: ["E-Transfer", "Cash", "Money Order"],
      shippingTime: "2-4 days",
      affiliate: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🇨🇦 Canadian Seed Banks
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Best Cannabis Seed Banks in Canada</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Top-rated Canadian seed banks offering domestic shipping, local payment methods, and no customs concerns for
            Canadian growers.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        <div className="space-y-8">
          {canadianBanks.map((bank, index) => (
            <Card key={bank.name} className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Badge className="text-lg px-3 py-1">#{index + 1}</Badge>
                    <div>
                      <CardTitle className="text-2xl">{bank.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
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
                        <span className="text-muted-foreground">({bank.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </Button>
                    <Button variant="outline">Read Full Review</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">{bank.description}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Payment Methods
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {bank.paymentMethods.map((method) => (
                        <li key={method}>• {method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center">
                      <Truck className="w-4 h-4 mr-2" />
                      Shipping Time
                    </h4>
                    <p className="text-sm text-muted-foreground">{bank.shippingTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-green-600">Pros</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {bank.pros.slice(0, 3).map((pro) => (
                        <li key={pro}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-red-600">Cons</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {bank.cons.slice(0, 3).map((con) => (
                        <li key={con}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
