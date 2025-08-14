import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Globe, Package, Zap } from "lucide-react"

export function SeedsmanSection() {
  const seedsmanFeatures = [
    {
      title: "4000+ Strains",
      description: "World's largest selection of cannabis genetics",
      icon: Package,
    },
    {
      title: "Autoflowering Specialists",
      description: "Extensive collection of auto-flowering varieties",
      icon: Zap,
    },
    {
      title: "Global Shipping",
      description: "Ships to Canada with discreet packaging",
      icon: Globe,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              🌍 International Partner
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Seedsman - World's Largest Seed Bank</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While we focus on Canadian seed banks, Seedsman offers the world's largest selection of cannabis genetics
              with reliable shipping to Canada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-lg">4.6/5</span>
                  <span className="text-gray-500">(2,847 reviews)</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Why Choose Seedsman?</h3>
                <p className="text-gray-600 mb-6">
                  Established in 2003, Seedsman has become the world's most trusted cannabis seed bank, offering an
                  unmatched selection of genetics from top breeders worldwide.
                </p>
              </div>

              <div className="grid gap-4 mb-8">
                {seedsmanFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href="https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Shop Seedsman Deals
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-700 bg-transparent">
                  <a
                    href="https://www.seedsman.com/us-en/cannabis-seeds/flowering-type/autoflowering-feminised-cannabis-seeds?a_aid=6898fd6444bda&a_bid=c0f03fc3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse Autoflowers
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <CardTitle className="text-center">Featured Seedsman Promotions</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <a
                    href="https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <img
                      src="https://seedsman.postaffiliatepro.com/accounts/default1/aang5ubmn24/0dde5432.gif"
                      alt="Summer Cannabis Seed Discounts!"
                      title="Summer Cannabis Seed Discounts!"
                      className="w-full h-auto"
                    />
                  </a>
                  <img
                    style={{ border: 0 }}
                    src="https://seedsman.postaffiliatepro.com/scripts/aang5uimn24?a_aid=6898fd6444bda&a_bid=0dde5432"
                    width="1"
                    height="1"
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Important Note for Canadian Customers</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                While Seedsman offers excellent genetics and ships to Canada, please be aware that international
                shipments may face customs delays or seizures. For guaranteed delivery and faster shipping, we recommend
                our featured Canadian seed banks above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
