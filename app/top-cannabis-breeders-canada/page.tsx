import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Star,
  ExternalLink,
  Leaf,
  Sun,
  Home,
  Snowflake,
  Zap,
  Users,
  MessageSquare,
  CheckCircle,
  ThermometerSun,
  Clock,
  Shield,
  Sprout,
  ArrowRight,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "Top Cannabis Breeders for Canada | Canada Seed Bank Reviews",
  description:
    "Discover the best cannabis breeders for Canadian growing conditions. Find genetics suited for indoor and outdoor grows, including short-season strains.",
  keywords:
    "cannabis breeders Canada, best cannabis breeders, autoflower breeders Canada, outdoor cannabis Canada, Canadian growing conditions",
}

export default function TopCannabisBreeders() {
  const breeders = [
    {
      name: "Mephisto Genetics",
      slug: "mephisto-genetics",
      description:
        "World-renowned autoflower breeder known for exceptional quality and potency. Their genetics are popular among Canadian growers for reliable performance in short seasons.",
      knownFor: ["Premium Autoflowers", "High Potency", "Stable Genetics"],
      bestFor: ["Indoor", "Outdoor Short Season", "All Experience Levels"],
      popularStrains: ["Forum Stomper", "Sour Stomper", "Double Grape"],
      carriedBy: ["True North Seed Bank", "Seeds Online"],
      rating: 4.9,
    },
    {
      name: "Night Owl Seeds",
      slug: "night-owl-seeds",
      description:
        "Premium autoflower breeder founded by Daz, formerly of Mephisto. Creates unique crosses with exceptional terpene profiles suited for Canadian indoor and outdoor grows.",
      knownFor: ["Autoflowers", "Unique Terpenes", "Limited Drops"],
      bestFor: ["Indoor", "Outdoor", "Experienced Growers"],
      popularStrains: ["Mango Sunrise", "Blue Microverse", "Wizard's Apprentice"],
      carriedBy: ["Seeds Online", "True North Seed Bank"],
      rating: 4.8,
    },
    {
      name: "Gnome Automatics",
      slug: "gnome-automatics",
      description:
        "Canadian autoflower breeder creating genetics specifically for northern climates. Known for fast-finishing, cold-resistant strains that thrive in Canadian conditions.",
      knownFor: ["Canadian Bred", "Cold Resistant", "Fast Finishing"],
      bestFor: ["Outdoor Canada", "Cold Climates", "Beginners"],
      popularStrains: ["Northern Cheese Haze", "Cosmic Queen", "Cheech Biggums"],
      carriedBy: ["True North Seed Bank", "Quebec Cannabis Seeds"],
      rating: 4.7,
    },
    {
      name: "Ethos Genetics",
      slug: "ethos-genetics",
      description:
        "Award-winning breeder known for exceptional photoperiod and autoflower genetics. Their strains perform well in controlled indoor environments across Canada.",
      knownFor: ["Award Winners", "Photo & Auto", "High THC"],
      bestFor: ["Indoor", "Experienced Growers", "Commercial"],
      popularStrains: ["Ethos Cookies", "Mandarin Cookies", "Planet of the Grapes"],
      carriedBy: ["Seeds Online", "True North Seed Bank"],
      rating: 4.8,
    },
    {
      name: "Dutch Passion",
      slug: "dutch-passion",
      description:
        "Legendary Dutch breeder with decades of experience. Known for stable, reliable genetics including autoflowers that perform well in Canadian outdoor conditions.",
      knownFor: ["Pioneer Breeder", "Feminized Seeds", "Stable Genetics"],
      bestFor: ["Indoor", "Outdoor", "Beginners"],
      popularStrains: ["Auto Ultimate", "Think Different", "Frisian Dew"],
      carriedBy: ["Herbies Seeds", "True North Seed Bank"],
      rating: 4.7,
    },
    {
      name: "Barney's Farm",
      slug: "barneys-farm",
      description:
        "Amsterdam-based breeder with Cannabis Cup winning strains. Their genetics are known for heavy yields and perform well in Canadian indoor setups.",
      knownFor: ["Cup Winners", "Heavy Yields", "Diverse Selection"],
      bestFor: ["Indoor", "All Levels", "High Yield"],
      popularStrains: ["Gorilla Zkittlez", "Wedding Cake", "Mimosa EVO"],
      carriedBy: ["Herbies Seeds", "True North Seed Bank"],
      rating: 4.6,
    },
    {
      name: "Fast Buds",
      slug: "fast-buds",
      description:
        "Specializes in fast-finishing autoflowers perfect for Canadian short seasons. Known for high-THC autos that can be harvested in as little as 8-9 weeks.",
      knownFor: ["Fast Autos", "High THC", "Beginner Friendly"],
      bestFor: ["Outdoor Short Season", "Indoor", "Beginners"],
      popularStrains: ["Gorilla Glue Auto", "Wedding Cheesecake Auto", "Zkittlez Auto"],
      carriedBy: ["Herbies Seeds", "True North Seed Bank"],
      rating: 4.5,
    },
    {
      name: "Royal Queen Seeds",
      slug: "royal-queen-seeds",
      description:
        "Major European breeder with a wide selection of photoperiod and autoflower strains. Their Quick flowering line is popular among Canadian outdoor growers.",
      knownFor: ["Large Selection", "Quick Line", "Consistent Quality"],
      bestFor: ["Indoor", "Outdoor", "All Levels"],
      popularStrains: ["Royal Gorilla", "Green Gelato", "Northern Light Auto"],
      carriedBy: ["Herbies Seeds", "Seedsman"],
      rating: 4.6,
    },
    {
      name: "Dinafem Seeds",
      slug: "dinafem-seeds",
      description:
        "Spanish breeder known for feminized and autoflower seeds. Their OG Kush Auto and Critical lines are favorites among Canadian growers for reliable results.",
      knownFor: ["Feminized Seeds", "Critical Line", "Reliable"],
      bestFor: ["Indoor", "Outdoor", "Beginners"],
      popularStrains: ["OG Kush Auto", "Critical+", "Dinamed CBD"],
      carriedBy: ["Seedsman", "True North Seed Bank"],
      rating: 4.5,
    },
    {
      name: "Butterbean Birdseed",
      slug: "butterbean-birdseed",
      description:
        "Canadian autoflower breeder specializing in fast-finishing strains for northern climates. Direct from breeder with unique genetics designed for Canadian conditions.",
      knownFor: ["Canadian Breeder", "Autoflowers", "Northern Climate Genetics"],
      bestFor: ["Outdoor Canada", "Cold Climates", "Short Season"],
      popularStrains: ["Mac N Cheese Auto", "Banana Runtz Auto"],
      carriedBy: ["Direct from Breeder"],
      rating: 4.5,
    },
  ]

  const categories = [
    {
      title: "Best Autoflower Breeders for Canada",
      icon: Zap,
      color: "blue",
      description: "Fast-finishing genetics perfect for Canadian short growing seasons",
      breeders: ["Mephisto Genetics", "Night Owl Seeds", "Gnome Automatics", "Fast Buds"],
    },
    {
      title: "Best Outdoor Breeders (Short Season)",
      icon: Sun,
      color: "amber",
      description: "Genetics that finish before Canadian frost arrives",
      breeders: ["Gnome Automatics", "Dutch Passion", "Butterbean Birdseed", "Fast Buds"],
    },
    {
      title: "Best Indoor Breeders",
      icon: Home,
      color: "purple",
      description: "Premium genetics for controlled indoor environments",
      breeders: ["Ethos Genetics", "Barney's Farm", "Mephisto Genetics", "Night Owl Seeds"],
    },
    {
      title: "Best for Beginners",
      icon: Sprout,
      color: "green",
      description: "Forgiving, easy-to-grow strains for first-time growers",
      breeders: ["Dutch Passion", "Fast Buds", "Royal Queen Seeds", "Dinafem Seeds"],
    },
  ]

  const rankingCriteria = [
    {
      icon: ThermometerSun,
      title: "Canadian Climate Performance",
      description: "How well genetics perform in Canadian indoor and outdoor conditions",
    },
    {
      icon: Shield,
      title: "Mold Resistance",
      description: "Resistance to mold and mildew in humid Canadian falls",
    },
    {
      icon: Home,
      title: "Indoor vs Outdoor Success",
      description: "Proven results in both controlled and natural environments",
    },
    {
      icon: Zap,
      title: "Autoflower Availability",
      description: "Availability of fast-finishing autoflower options",
    },
    {
      icon: CheckCircle,
      title: "Genetic Stability",
      description: "Consistent phenotypes and reliable germination rates",
    },
    {
      icon: Users,
      title: "Community Feedback",
      description: "Real grow results and reviews from Canadian growers",
    },
  ]

  const faqs = [
    {
      question: "What is a cannabis breeder?",
      answer:
        "A cannabis breeder is a person or company that develops new cannabis strains by crossing different genetics. They select for specific traits like potency, flavor, yield, flowering time, and resistance to pests or mold. Reputable breeders stabilize their genetics over multiple generations to ensure consistent results.",
    },
    {
      question: "What breeders are best for Canadian growing conditions?",
      answer:
        "The best breeders for Canadian conditions specialize in fast-finishing strains, autoflowers, and cold-resistant genetics. Mephisto Genetics, Night Owl Seeds, Gnome Automatics, and Fast Buds are popular choices. Canadian breeders like Butterbean Birdseed specifically develop strains for northern climates.",
    },
    {
      question: "Are autoflowers better for Canadian climates?",
      answer:
        "Autoflowers are often ideal for Canadian outdoor growing because they finish faster than photoperiod strains, typically in 70-90 days from seed. This allows Canadian growers to harvest before fall frost arrives. However, indoor growers can successfully grow both photoperiod and autoflower strains year-round.",
    },
    {
      question: "Can outdoor growers in Canada use these genetics?",
      answer:
        "Yes, many of these breeders offer genetics suited for Canadian outdoor growing. Look for autoflowers, fast-flowering photoperiods, or strains specifically bred for cold climates. Key factors include finishing time (before October frost), mold resistance, and cold tolerance.",
    },
    {
      question: "Where can I buy seeds from these breeders in Canada?",
      answer:
        "Canadian seed banks like True North Seed Bank, Seeds Online, and Quebec Cannabis Seeds carry many of these breeders. International options like Herbies Seeds and Seedsman also ship to Canada. Some breeders like Butterbean Birdseed sell direct to Canadian customers.",
    },
  ]

  const internalLinks = [
    { title: "Seed Bank Reviews", href: "/seed-banks", description: "Compare Canadian seed banks" },
    { title: "Strain Directory", href: "/strains", description: "Browse cannabis strains" },
    { title: "Growing Guides", href: "/guides", description: "Learn to grow cannabis" },
    { title: "Free Seeds Program", href: "/free-seeds-canada", description: "Join our grower community" },
    { title: "Autoflower Seeds", href: "/best-autoflower-seeds-canada", description: "Best autos for Canada" },
    { title: "Outdoor Strains", href: "/best-outdoor-strains-canada", description: "Outdoor genetics guide" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
            Canadian Growing Conditions
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Top Cannabis Breeders for Canada</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We highlight cannabis breeders whose genetics perform well in Canadian indoor and outdoor
            growing conditions, including short seasons and colder climates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-seeds-canada">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Grow Logs
              </Button>
            </Link>
            <Link href="/reviews">
              <Button size="lg" variant="outline">
                <Star className="w-5 h-5 mr-2" />
                View Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Rank Breeders */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Rank Breeders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our rankings focus on genetics that perform well for Canadian growers, considering
              climate, growing conditions, and community feedback.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rankingCriteria.map((criteria, index) => (
              <Card key={index} className="border-2 hover:border-green-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <criteria.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{criteria.title}</h3>
                      <p className="text-sm text-gray-600">{criteria.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Breeders List */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Cannabis Breeders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These breeders are known for producing genetics that perform well in Canadian growing
              conditions. Click through to find seed banks that carry their strains.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {breeders.map((breeder, index) => (
              <Card key={breeder.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Badge className="text-lg px-3 py-1 bg-green-600 text-white">#{index + 1}</Badge>
                      <div>
                        <CardTitle className="text-xl">{breeder.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(breeder.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-medium">{breeder.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{breeder.description}</p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Leaf className="w-4 h-4 mr-2 text-green-600" />
                        Known For
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {breeder.knownFor.map((item) => (
                          <Badge key={item} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Best For
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {breeder.bestFor.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-green-600" />
                        Popular Strains
                      </h4>
                      <p className="text-sm text-gray-600">{breeder.popularStrains.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2 text-green-600" />
                        Available At
                      </h4>
                      <p className="text-sm text-gray-600">{breeder.carriedBy.join(", ")}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex gap-3">
                    <Link href="/seed-banks">
                      <Button variant="outline" size="sm">
                        Find Seeds
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/free-seeds-canada">
                      <Button variant="ghost" size="sm">
                        View Grow Logs
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Breeders by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the right breeder for your specific growing situation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => {
              const colorClasses = {
                blue: "border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50",
                amber: "border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50",
                purple: "border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50",
                green: "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50",
              }
              const iconColorClasses = {
                blue: "bg-blue-100 text-blue-600",
                amber: "bg-amber-100 text-amber-600",
                purple: "bg-purple-100 text-purple-600",
                green: "bg-green-100 text-green-600",
              }
              return (
                <Card
                  key={index}
                  className={`border-2 ${colorClasses[category.color as keyof typeof colorClasses]}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`}
                      >
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{category.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.breeders.map((breeder) => (
                            <Badge key={breeder} variant="secondary" className="text-xs">
                              {breeder}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Canadian Grower Insights */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Snowflake className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Why Canadian Growers Need Specific Genetics</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Canadian growing conditions present unique challenges that require genetics bred for
                success. Our short outdoor season, with frost often arriving in September or October,
                means growers need fast-finishing strains that can complete flowering before the cold
                arrives.
              </p>
              <p>
                Indoor growers across Canada benefit from genetics that perform well in controlled
                environments, with stable phenotypes and predictable flowering times. Whether you are
                growing in a basement in Ontario or a garage in Alberta, the right genetics make all
                the difference.
              </p>
              <p>
                Autoflowers have become increasingly popular among Canadian growers because they can
                go from seed to harvest in as little as 70-90 days. This allows outdoor growers to
                start later in spring and still harvest before frost, while indoor growers can achieve
                multiple harvests per year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Explore More</h2>
            <p className="text-gray-600">Related resources for Canadian growers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {internalLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{link.title}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Breeder Submission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Are You a Cannabis Breeder?</h2>
            <p className="text-gray-600 mb-6">
              If you are a breeder with genetics suited for Canadian growers, reach out to be
              featured, reviewed, and tested by our community.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <MessageSquare className="w-5 h-5 mr-2" />
                Submit Your Breeder Info
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
