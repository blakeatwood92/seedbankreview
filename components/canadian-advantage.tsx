import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Shield, CreditCard, Users, Clock, Leaf } from "lucide-react"

export function CanadianAdvantage() {
  const advantages = [
    {
      title: "No Customs Delays",
      description:
        "Domestic shipping means no border delays or customs seizures. Your seeds arrive safely and quickly.",
      icon: Truck,
      highlight: "2-5 day delivery",
    },
    {
      title: "Interac E-Transfer",
      description: "Pay securely with your Canadian bank account. No international fees or currency conversion.",
      icon: CreditCard,
      highlight: "Instant payment",
    },
    {
      title: "Legal Compliance",
      description: "All seed banks operate within Canadian cannabis regulations and provincial guidelines.",
      icon: Shield,
      highlight: "100% legal",
    },
    {
      title: "Canadian Customer Service",
      description: "Get support in your timezone with representatives who understand Canadian cannabis laws.",
      icon: Users,
      highlight: "Local support",
    },
    {
      title: "Climate-Adapted Genetics",
      description: "Seeds bred and tested for Canadian growing conditions, from coast to coast to coast.",
      icon: Leaf,
      highlight: "Canadian-bred",
    },
    {
      title: "Same-Day Processing",
      description: "Many Canadian seed banks offer same-day order processing and next-day shipping options.",
      icon: Clock,
      highlight: "Fast processing",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="text-lg">🇨🇦</span>
            The Canadian Advantage
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Buy from Canadian Seed Banks?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the benefits of buying cannabis seeds from trusted Canadian sources versus international
            alternatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => {
            const Icon = advantage.icon
            return (
              <Card
                key={advantage.title}
                className="relative group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-600"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                      {advantage.highlight}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-red-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Supporting Canadian Cannabis Culture</h3>
              <p className="text-gray-600 mb-6">
                When you buy from Canadian seed banks, you're supporting local businesses, Canadian breeders, and the
                growth of our domestic cannabis industry. Plus, you get the peace of mind that comes with buying from
                regulated, legal sources.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Supporting local economy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  <span>Legal & regulated</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/canadian-cannabis.png"
                alt="Canadian cannabis cultivation"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-2">
                <span className="text-2xl">🇨🇦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
