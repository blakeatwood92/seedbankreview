import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Shield, Heart, CheckCircle, Leaf, Star, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Canada Seed Bank Reviews",
  description: "Learn about Canada Seed Bank Reviews - your trusted source for honest, unbiased cannabis seed bank reviews and growing resources for Canadian growers.",
  keywords: "about Canada Seed Bank Reviews, cannabis seed bank reviews, Canadian growers, seed bank comparison",
}

const values = [
  {
    icon: Shield,
    title: "Honest Reviews",
    description: "We provide unbiased, transparent reviews based on real experiences. We disclose affiliate relationships clearly.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Our recommendations are informed by thousands of reviews from real Canadian growers across multiple platforms.",
  },
  {
    icon: Target,
    title: "Canadian Focus",
    description: "Everything we do is tailored for Canadian growers - from climate-specific strain recommendations to domestic shipping options.",
  },
  {
    icon: Heart,
    title: "Passion for Growing",
    description: "We're growers ourselves who understand the joy of cultivating quality cannabis at home.",
  },
]

const stats = [
  { value: "50+", label: "Seed Banks Reviewed" },
  { value: "500+", label: "Strains Analyzed" },
  { value: "10K+", label: "Community Reviews" },
  { value: "2024", label: "Est." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-emerald-900 text-white py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2017%2C%202026%2C%2001_13_13%20PM-yqlQUllbDyng3KoHmK1UsYUYdrCobS.png"
                alt="Canada Seed Bank Reviews"
                width={500}
                height={280}
                className="mx-auto rounded-lg shadow-xl"
              />
            </div>
            <Badge className="mb-4 bg-green-700">
              <Leaf className="w-3 h-3 mr-1" />
              About Us
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Canada's Trusted Source for Seed Bank Reviews
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Helping Canadian growers find the best cannabis genetics since we started this journey of 
              reviewing seed banks and sharing our growing knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-green-600">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                When cannabis became legal in Canada in 2018, home growing opened up to millions of Canadians. 
                But we quickly realized that finding reliable information about seed banks was frustrating. 
                Fake reviews, unclear shipping policies, and no Canadian-specific guidance made choosing 
                where to buy seeds a gamble.
              </p>
              <p className="mb-4">
                We created Canada Seed Bank Reviews to solve this problem. As Canadian growers ourselves, 
                we understand the unique challenges of growing in our climate - short outdoor seasons, 
                cold temperatures, and the need for domestic shipping to avoid customs issues.
              </p>
              <p className="mb-4">
                Our team researches seed banks thoroughly, aggregates community reviews from Reddit, 
                GrowDiaries, and growing forums, and provides honest assessments that help fellow 
                Canadians make informed decisions. We believe every grower deserves access to quality 
                genetics without the guesswork.
              </p>
              <p>
                Whether you're growing your first plant or your hundredth, we're here to help you 
                find the perfect seeds for your Canadian grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Stand For</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Review Seed Banks</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Our Rating Criteria
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Seed quality and germination rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Shipping speed and reliability to Canada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Payment options for Canadian customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Customer service responsiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Value for money and promotions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  Our Research Process
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Aggregate reviews from multiple platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Place test orders to Canadian addresses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Verify shipping and payment claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Update reviews based on new information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Incorporate community feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-lg mb-3 text-amber-800">Affiliate Disclosure</h3>
            <p className="text-amber-700 text-sm">
              Some links on this site are affiliate links, meaning we may earn a commission if you make a purchase. 
              This does not affect our reviews or recommendations - we only recommend seed banks we genuinely trust. 
              Affiliate relationships are clearly marked, and our editorial content remains independent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Seeds?</h2>
          <p className="text-green-100 mb-6 max-w-xl mx-auto">
            Browse our comprehensive seed bank reviews and growing guides.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
              <Link href="/seed-banks">View Seed Banks</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
