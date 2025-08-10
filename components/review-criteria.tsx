import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Package, Shield, Users, Award } from "lucide-react"

export function ReviewCriteria() {
  const criteria = [
    {
      title: "Payment Methods",
      description:
        "We evaluate the variety and security of payment options including credit cards, crypto, and cash. At Canadian Seed Bank, we prioritize Canadian financial institutions and secure transactions.",
      icon: CreditCard,
      weight: "20%",
    },
    {
      title: "Seed Variety",
      description:
        "Assessment of strain selection, breeder partnerships, and availability of different seed types. Our focus is on Canadian-grown seeds and partnerships with local breeders.",
      icon: Package,
      weight: "25%",
    },
    {
      title: "Trustworthy Genetics",
      description:
        "Verification of genetic authenticity, breeder reputation, and seed quality consistency. Canadian Seed Bank ensures that all seeds meet high genetic standards and come from reputable Canadian breeders.",
      icon: Shield,
      weight: "25%",
    },
    {
      title: "Customer Experience",
      description:
        "Evaluation of website usability, shipping speed, packaging, and customer support quality. We strive to provide a seamless experience for Canadian customers, with quick shipping and excellent support.",
      icon: Users,
      weight: "20%",
    },
    {
      title: "Reputation",
      description:
        "Community standing, years in business, customer reviews, and industry recognition. Canadian Seed Bank has a strong reputation in the Canadian cannabis community, built on years of experience and positive reviews.",
      icon: Award,
      weight: "10%",
    },
  ]

  return (
    <section className="py-20 bg-red-50 bg-gradient-to-r from-red-100 to-red-200">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Review Criteria</h2>
          <p className="text-xl text-red-600 max-w-3xl mx-auto">
            Every seed bank is evaluated using our comprehensive 5-factor scoring system to ensure you get accurate,
            unbiased recommendations tailored for Canadian cannabis enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((criterion) => {
            const Icon = criterion.icon
            return (
              <Card key={criterion.title} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                      {criterion.weight}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{criterion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600 text-sm leading-relaxed">{criterion.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
