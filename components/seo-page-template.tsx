import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, ChevronRight, CheckCircle } from "lucide-react"

interface SeedBank {
  name: string
  slug: string
  logo: string
  rating: number
  description: string
  specialties: string[]
  affiliateUrl: string
}

interface Strain {
  name: string
  type: string
  thc: string
  floweringTime: string
  difficulty: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface RelatedPage {
  title: string
  href: string
  description: string
}

interface SEOPageProps {
  title: string
  subtitle: string
  introContent: string
  mainContent: string[]
  seedBanks: SeedBank[]
  strains: Strain[]
  faqs: FAQ[]
  relatedPages: RelatedPage[]
  schemaData: object
}

export function SEOPageTemplate({
  title,
  subtitle,
  introContent,
  mainContent,
  seedBanks,
  strains,
  faqs,
  relatedPages,
  schemaData,
}: SEOPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-900 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-green-100 mb-6">{subtitle}</p>
              <p className="text-green-200 max-w-2xl mx-auto">{introContent}</p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">{title}</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {mainContent.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Seed Banks */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Recommended Seed Banks</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              These trusted seed banks have been vetted by Canadian growers and offer reliable shipping across Canada.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {seedBanks.map((bank) => (
                <Card key={bank.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={bank.logo}
                          alt={bank.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{bank.name}</CardTitle>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{bank.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{bank.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {bank.specialties.slice(0, 3).map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        <a href={bank.affiliateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Visit Site
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/reviews/${bank.slug}`}>Review</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Strains */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Recommended Strains</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              These strains are well-suited for Canadian growing conditions and available from our recommended seed banks.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {strains.map((strain) => (
                <Card key={strain.name}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg">{strain.name}</h3>
                      <Badge variant={strain.type === "Indica" ? "default" : strain.type === "Sativa" ? "secondary" : "outline"}>
                        {strain.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{strain.description}</p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">THC</span>
                        <span className="font-medium">{strain.thc}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Flowering</span>
                        <span className="font-medium">{strain.floweringTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Difficulty</span>
                        <span className="font-medium">{strain.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/strains">View Full Strain Directory</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Related Guides</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {relatedPages.map((page) => (
                <Link key={page.href} href={page.href} className="block">
                  <Card className="h-full hover:shadow-md transition-shadow hover:border-green-300">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-green-700 mb-2">{page.title}</h3>
                      <p className="text-gray-600 text-sm">{page.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-green-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Growing?</h2>
            <p className="text-green-100 mb-6 max-w-xl mx-auto">
              Browse our complete seed bank directory to find the perfect genetics for your Canadian grow.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
                <Link href="/seed-banks">View All Seed Banks</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
                <Link href="/strains">Browse Strains</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
