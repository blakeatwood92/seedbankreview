import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, ChevronDown, Scale, Truck, CreditCard, Sprout, Shield, Leaf } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Cannabis Seeds Canada",
  description: "Get answers to common questions about buying cannabis seeds in Canada, legality, shipping, germination, and growing. Expert advice for Canadian growers.",
  keywords: "cannabis seeds FAQ Canada, buying seeds Canada legal, seed bank questions, growing cannabis FAQ",
}

const faqCategories = [
  {
    id: "legal",
    title: "Legal Questions",
    icon: Scale,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    faqs: [
      {
        question: "Is it legal to buy cannabis seeds in Canada?",
        answer: "Yes, it is completely legal to buy, possess, and germinate cannabis seeds in Canada since the Cannabis Act came into effect in October 2018. Adults can legally grow up to 4 cannabis plants per household in most provinces (except Manitoba and Quebec, which have restrictions on home growing). Seeds can be purchased from licensed retailers, online seed banks, or gifted between adults.",
      },
      {
        question: "Can I buy seeds from international seed banks?",
        answer: "Yes, you can order seeds from international seed banks and have them shipped to Canada. However, these seeds may be subject to customs inspection. Many international seed banks offer stealth shipping to minimize detection. If a package is seized, reputable seed banks will often reship your order at no cost. For guaranteed delivery, consider Canadian seed banks that ship domestically.",
      },
      {
        question: "How many plants can I legally grow in Canada?",
        answer: "Under federal law, adults can grow up to 4 cannabis plants per household (not per person) for personal use. However, Manitoba and Quebec have banned home cultivation entirely. Some provinces have additional restrictions, such as requiring plants to not be visible from public spaces. Always check your provincial and municipal regulations before growing.",
      },
      {
        question: "Do I need a license to grow cannabis at home?",
        answer: "No license is required for recreational home growing up to the 4-plant limit. However, if you want to grow more than 4 plants, you would need a medical cannabis license from Health Canada, which requires authorization from a healthcare practitioner. Commercial cultivation requires a separate federal license.",
      },
      {
        question: "Can I sell seeds or clones from my plants?",
        answer: "No, selling cannabis seeds, clones, or any cannabis products without a license is illegal in Canada. You can, however, give away seeds or clones to other adults (19+ in most provinces, 18+ in Alberta and Quebec) as long as no money changes hands. Only licensed producers and retailers can legally sell cannabis products.",
      },
    ],
  },
  {
    id: "buying",
    title: "Buying Seeds",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-100",
    faqs: [
      {
        question: "What payment methods do Canadian seed banks accept?",
        answer: "Canadian seed banks commonly accept Interac e-Transfer (most popular), credit cards, debit cards, Bitcoin and other cryptocurrencies, cash by mail, and money orders. International seed banks may accept credit cards, PayPal, bank transfers, and cryptocurrency. E-Transfer is preferred by Canadian banks due to its security and low fees.",
      },
      {
        question: "What's the difference between feminized, regular, and autoflower seeds?",
        answer: "Regular seeds produce roughly 50% male and 50% female plants - you'll need to identify and remove males. Feminized seeds are bred to produce only female (bud-producing) plants, eliminating the need to sex plants. Autoflowering seeds flower automatically based on age rather than light cycle, making them faster and easier for beginners. Most growers prefer feminized or autoflower seeds for simplicity.",
      },
      {
        question: "How do I know if a seed bank is legitimate?",
        answer: "Check for: established history and reputation, verified customer reviews on multiple platforms (Reddit, forums, Trustpilot), secure payment processing, clear shipping and return policies, responsive customer service, and physical presence or verifiable business information. Be wary of seed banks with only positive reviews, no contact information, or prices that seem too good to be true.",
      },
      {
        question: "What are 'freebies' and why do seed banks offer them?",
        answer: "Freebies are complimentary seeds that seed banks include with orders, usually from their own breeding programs or promotional strains. They're offered to encourage larger orders, introduce customers to new genetics, build loyalty, and differentiate from competitors. While freebies can be excellent quality, they may be untested strains - most growers use them for experimentation.",
      },
      {
        question: "How should I store seeds I'm not planting right away?",
        answer: "Store seeds in a cool, dark, dry place. Ideal conditions are 5-8°C (refrigerator door) with low humidity. Keep seeds in their original packaging or airtight containers with silica gel packets to absorb moisture. Properly stored seeds can remain viable for 3-5+ years. Avoid temperature fluctuations, light exposure, and high humidity which can reduce germination rates.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Truck,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    faqs: [
      {
        question: "How long does shipping take within Canada?",
        answer: "Domestic Canadian seed banks typically ship via Canada Post and deliver within 2-7 business days depending on location. Major cities usually receive orders in 2-4 days, while rural areas may take 5-7 days. Some seed banks offer Xpresspost for faster delivery (1-2 days) at additional cost. Orders are usually shipped within 1-2 business days of payment confirmation.",
      },
      {
        question: "Is shipping discreet?",
        answer: "Yes, all reputable seed banks use discreet packaging. Seeds are typically shipped in plain, unmarked packages with no indication of contents. The return address usually shows a generic business name rather than anything cannabis-related. Many banks offer 'stealth' options where seeds are hidden within everyday items for international shipments.",
      },
      {
        question: "What happens if my seeds don't arrive?",
        answer: "Policies vary by seed bank. Canadian domestic shipments rarely have issues. Most reputable seed banks will reship lost orders or provide refunds. For international orders, many banks offer 'guaranteed delivery' with free reshipping if seized by customs. Some charge extra for delivery insurance. Always check the seed bank's shipping guarantee policy before ordering.",
      },
      {
        question: "Will my seeds be seized at customs?",
        answer: "For domestic Canadian orders, this is not a concern - seeds shipped within Canada face no customs inspection. For international orders, there is a small risk of customs seizure. Reputable international seed banks report 85-95%+ delivery success rates to Canada. Stealth shipping options further reduce risk. If seized, you'll typically receive a letter - there are no legal consequences for the recipient.",
      },
      {
        question: "Can I track my seed order?",
        answer: "Most seed banks provide tracking numbers once your order ships. Canadian shipments via Canada Post can be tracked online. International shipments often have tracking up to the Canadian border, after which Canada Post tracking takes over. Some stealth shipments may not include tracking to avoid drawing attention to the package.",
      },
    ],
  },
  {
    id: "growing",
    title: "Growing & Germination",
    icon: Sprout,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    faqs: [
      {
        question: "What's the best germination method?",
        answer: "The paper towel method is most popular: place seeds between moist paper towels on a plate, cover to maintain humidity, keep at 20-25°C, and check daily. Seeds typically sprout in 24-72 hours. Other methods include directly planting in soil (1-2cm deep), using germination cubes, or soaking in water for 12-24 hours first. Avoid touching the taproot once emerged.",
      },
      {
        question: "My seeds didn't germinate - what went wrong?",
        answer: "Common causes: temperature too cold (below 18°C) or too hot (above 30°C), paper towels dried out or were too wet, seeds planted too deep, poor seed quality, or old seeds. Try again with fresh seeds in optimal conditions. If multiple seeds from the same batch fail, contact the seed bank - many offer germination guarantees. Store seeds properly to maintain viability.",
      },
      {
        question: "When is the best time to plant outdoors in Canada?",
        answer: "Wait until after your last frost date - typically late May for Southern Ontario/BC, early June for Quebec/Maritimes, and mid-June for prairies/northern regions. Start seedlings indoors 2-4 weeks before transplanting outside. For autoflowers, you can plant from May through July for multiple harvests. Check local frost dates for your specific area.",
      },
      {
        question: "How much does it cost to grow cannabis at home?",
        answer: "Outdoor growing is cheapest - seeds ($30-100), soil/amendments ($20-50), and basic nutrients ($30-50) can get you started for under $200. Indoor growing requires more investment: a basic tent setup with lights, fans, and filters costs $300-500 for a small grow. Ongoing costs include electricity ($20-50/month), nutrients, and soil. One successful plant can yield 50-500g+ depending on method.",
      },
      {
        question: "Should I grow indoors or outdoors?",
        answer: "It depends on your situation. Outdoor growing is cheaper, uses free sunlight, and produces large plants, but you're limited to one season and dependent on weather. Indoor growing offers year-round production, complete environmental control, and privacy, but requires equipment investment and ongoing electricity costs. Many Canadian growers do both - indoor through winter, outdoor in summer.",
      },
    ],
  },
  {
    id: "strains",
    title: "Strains & Genetics",
    icon: Leaf,
    color: "text-lime-600",
    bgColor: "bg-lime-100",
    faqs: [
      {
        question: "What strains are best for Canadian climates?",
        answer: "Look for strains bred for northern climates or with indica-dominant genetics that finish flowering quickly. Top picks include: Northern Lights (cold tolerant, fast), White Widow (resilient, mold resistant), Blue Dream (adaptable hybrid), any 'Early' or 'Fast' version strains, and autoflowers for short-season areas. BC-bred strains from Jordan of the Islands are specifically developed for Canadian conditions.",
      },
      {
        question: "What's the difference between indica and sativa?",
        answer: "Traditionally, indica strains are associated with relaxing, body-focused effects and shorter, bushier plants. Sativa strains are linked to energetic, cerebral effects and taller plants with longer flowering times. However, modern science shows these distinctions are oversimplified - effects depend more on cannabinoid and terpene profiles. Most modern strains are hybrids combining both genetics.",
      },
      {
        question: "What does THC percentage mean?",
        answer: "THC (tetrahydrocannabinol) percentage indicates the potency of the cannabis when grown under optimal conditions. Higher THC (20%+) generally means stronger psychoactive effects. However, THC% isn't everything - terpenes significantly influence the experience, and some users prefer lower-THC strains (15-18%) for more functional effects. Beginners should start with moderate THC strains.",
      },
      {
        question: "Are expensive seeds worth it?",
        answer: "Often yes, but not always. Premium seeds from reputable breeders typically offer: better germination rates, more stable genetics, predictable characteristics, and genuine breeding work. However, budget seeds from established banks can be excellent value. Avoid very cheap seeds from unknown sources - poor genetics lead to disappointing results regardless of your growing skills. Consider mid-range options from Canadian seed banks for best value.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-slate-700">
              <HelpCircle className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Everything you need to know about buying and growing cannabis seeds in Canada
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Can't find your answer? Browse our guides or reach out through our contact page.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b sticky top-0 z-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <category.icon className={`w-4 h-4 ${category.color}`} />
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${category.bgColor} rounded-full flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Browse our detailed guides or get in touch with us directly.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild>
                <Link href="/guides">View Growing Guides</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link href="/seed-banks" className="block">
              <Card className="h-full hover:shadow-md transition-shadow hover:border-green-300">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-green-700 mb-2">Seed Bank Directory</h3>
                  <p className="text-muted-foreground text-sm">Browse and compare all reviewed seed banks.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/strains" className="block">
              <Card className="h-full hover:shadow-md transition-shadow hover:border-green-300">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-green-700 mb-2">Strain Database</h3>
                  <p className="text-muted-foreground text-sm">Find the perfect strain for your needs.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/regional" className="block">
              <Card className="h-full hover:shadow-md transition-shadow hover:border-green-300">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-green-700 mb-2">Regional Tips</h3>
                  <p className="text-muted-foreground text-sm">Province-specific growing advice.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/autoflowering" className="block">
              <Card className="h-full hover:shadow-md transition-shadow hover:border-green-300">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-green-700 mb-2">Autoflower Guide</h3>
                  <p className="text-muted-foreground text-sm">Everything about auto seeds.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
