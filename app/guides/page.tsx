import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Users, Video, FileText, Lightbulb } from "lucide-react"

export default function GuidesPage() {
  const quickTips = [
    {
      title: "Choose the Right Seeds",
      description: "Select genetics suited for your climate and experience level",
      icon: "🌱",
    },
    {
      title: "Start with Quality Soil",
      description: "Good soil is the foundation of a successful grow",
      icon: "🌍",
    },
    {
      title: "Control Your Environment",
      description: "Temperature, humidity, and airflow are crucial",
      icon: "🌡️",
    },
    {
      title: "Be Patient",
      description: "Cannabis takes time - don't rush the process",
      icon: "⏰",
    },
  ]

  const externalResources = [
    {
      name: "Leafly Growing Guide",
      description: "Comprehensive growing guides from seed to harvest",
      url: "https://www.leafly.com/news/growing",
      category: "Complete Guides",
      icon: BookOpen,
    },
    {
      name: "Royal Queen Seeds Blog",
      description: "Expert growing tips and strain information",
      url: "https://www.royalqueenseeds.com/blog/",
      category: "Expert Tips",
      icon: Lightbulb,
    },
    {
      name: "Grow Weed Easy",
      description: "Step-by-step tutorials for beginners",
      url: "https://www.growweedeasy.com/",
      category: "Beginner Friendly",
      icon: FileText,
    },
    {
      name: "r/microgrowery",
      description: "Reddit community for small-scale cannabis growing",
      url: "https://www.reddit.com/r/microgrowery/",
      category: "Community",
      icon: Users,
    },
    {
      name: "Jorge Cervantes YouTube",
      description: "Video tutorials from the cannabis growing expert",
      url: "https://www.youtube.com/user/jorgecervantesmj",
      category: "Video Tutorials",
      icon: Video,
    },
    {
      name: "I Love Growing Marijuana",
      description: "Free growing guides and troubleshooting tips",
      url: "https://www.ilovegrowingmarijuana.com/guides/",
      category: "Free Resources",
      icon: BookOpen,
    },
    {
      name: "Cannabis Training University",
      description: "Professional cannabis education and certification",
      url: "https://www.cannabistraininguniversity.com/",
      category: "Professional Training",
      icon: FileText,
    },
    {
      name: "Maximum Yield Magazine",
      description: "Advanced growing techniques and industry news",
      url: "https://www.maximumyield.com/",
      category: "Advanced Techniques",
      icon: Lightbulb,
    },
  ]

  const canadianSpecific = [
    {
      title: "Health Canada Guidelines",
      description: "Official government information on legal home cultivation",
      url: "https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis.html",
    },
    {
      title: "Canadian Climate Considerations",
      description: "Growing tips specific to Canadian weather patterns and seasons",
      tips: [
        "Short outdoor season in most provinces",
        "Indoor growing recommended for consistent results",
        "Consider autoflowering varieties for northern climates",
      ],
    },
    {
      title: "Legal Compliance",
      description: "Staying within Canadian cannabis laws while growing",
      tips: [
        "Maximum 4 plants per household",
        "Must be grown from legal seeds/clones",
        "Keep plants secure and out of public view",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
            🇨🇦 Growing Resources
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cannabis Growing Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential resources and expert recommendations for growing cannabis in Canada. We've curated the best
            external resources to help you succeed.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        {/* Quick Tips Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Growing Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip) => (
              <Card key={tip.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{tip.icon}</div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Canadian Specific Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Canadian Growing Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {canadianSpecific.map((item) => (
              <Card key={item.title} className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">{item.title}</CardTitle>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardHeader>
                <CardContent>
                  {item.url ? (
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Official Site
                      </a>
                    </Button>
                  ) : (
                    <ul className="space-y-2">
                      {item.tips?.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* External Resources Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended Growing Resources</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We've curated the best external resources for cannabis growing education. These trusted sites offer
            comprehensive guides, community support, and expert advice.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalResources.map((resource) => {
              const Icon = resource.icon
              return (
                <Card key={resource.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
          <p className="text-yellow-700 text-sm">
            Cannabis cultivation laws vary by province and municipality in Canada. Always ensure you're complying with
            local regulations before starting any grow operation. The external resources listed are for educational
            purposes only, and we are not responsible for their content or accuracy.
          </p>
        </div>
      </div>
    </div>
  )
}
