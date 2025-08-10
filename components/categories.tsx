import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Globe, Zap } from "lucide-react"
import Link from "next/link"

export function Categories() {
  const categories = [
    {
      title: "Canada Seed Banks",
      description: "Top-rated Canadian seed banks with domestic shipping and local payment options.",
      icon: MapPin,
      href: "/canada",
      features: ["Domestic Shipping", "CAD Payments", "No Customs Issues"],
    },
    {
      title: "International Seed Banks",
      description: "Global seed banks shipping worldwide with the best genetics and variety.",
      icon: Globe,
      href: "/international",
      features: ["Worldwide Shipping", "Huge Selection", "Established Breeders"],
    },
    {
      title: "Autoflowering Specialists",
      description: "Seed banks specializing in high-quality autoflowering cannabis genetics.",
      icon: Zap,
      href: "/autoflowering",
      features: ["Auto Specialists", "Fast Harvest", "Beginner Friendly"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect seed bank for your needs, whether you're looking for local options or international
            variety.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="relative group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={category.href}>Explore {category.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
