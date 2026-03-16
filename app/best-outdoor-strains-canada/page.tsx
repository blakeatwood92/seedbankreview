import { Metadata } from "next"
import { SEOPageTemplate } from "@/components/seo-page-template"

export const metadata: Metadata = {
  title: "Best Outdoor Strains for Canada 2026 | Cannabis Seeds for Canadian Climate",
  description: "Discover the best outdoor cannabis strains for Canadian growing conditions. Mold-resistant, cold-hardy strains that thrive in Canadian summers. Expert strain recommendations.",
  keywords: "outdoor strains canada, outdoor cannabis seeds canada, cold climate cannabis, mold resistant strains, canadian outdoor growing",
  openGraph: {
    title: "Best Outdoor Strains for Canada 2026",
    description: "Find the perfect cannabis strains for Canadian outdoor growing conditions.",
    type: "article",
  },
}

const seedBanks = [
  {
    name: "Jordan of the Islands",
    slug: "jordan-of-the-islands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
    rating: 4.7,
    description: "BC breeder specializing in outdoor genetics bred for Canadian climates since 1992.",
    specialties: ["BC Outdoor Genetics", "Cold Hardy", "Mold Resistant"],
    affiliateUrl: "https://jordanoftheislands.com",
  },
  {
    name: "Quebec Cannabis Seeds",
    slug: "quebec-cannabis-seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
    rating: 4.5,
    description: "Outdoor genetics specifically bred for Quebec and northern Canadian climates.",
    specialties: ["Northern Climate", "Short Season", "Cold Resistant"],
    affiliateUrl: "https://quebeccannabisseeds.com",
  },
  {
    name: "True North Seed Bank",
    slug: "true-north",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.2,
    description: "Wide selection of outdoor strains from multiple breeders. Fast Canadian shipping.",
    specialties: ["Large Selection", "Canadian Based", "Multiple Breeders"],
    affiliateUrl: "https://truenorthseedbank.com",
  },
  {
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    description: "Huge catalog with outdoor specialists from Dutch Passion, Barney's Farm, and more.",
    specialties: ["Huge Selection", "Top Breeders", "Outdoor Specialists"],
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
  },
]

const strains = [
  {
    name: "God Bud",
    type: "Indica",
    thc: "15-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "BC legend from Jordan of the Islands. Bred specifically for Canadian outdoor growing. Finishes early.",
  },
  {
    name: "Frisian Dew",
    type: "Hybrid",
    thc: "14-18%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "Dutch Passion's famous outdoor strain. Extremely mold resistant with beautiful purple colors.",
  },
  {
    name: "Early Skunk",
    type: "Hybrid",
    thc: "15-18%",
    floweringTime: "7-8 weeks",
    difficulty: "Very Easy",
    description: "Sensi Seeds classic. Finishes early September in most of Canada. Very forgiving.",
  },
  {
    name: "Northern Lights",
    type: "Indica",
    thc: "18-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "Legendary strain that handles cold well. Fast flowering and excellent mold resistance.",
  },
  {
    name: "Blue Cheese",
    type: "Indica",
    thc: "17-20%",
    floweringTime: "8-9 weeks",
    difficulty: "Easy",
    description: "UK genetics crossed with Blueberry. Good mold resistance and unique flavor profile.",
  },
  {
    name: "Durban Poison",
    type: "Sativa",
    thc: "20-24%",
    floweringTime: "8-9 weeks",
    difficulty: "Moderate",
    description: "Pure sativa that finishes before frost. Energetic high with great outdoor yields.",
  },
]

const faqs = [
  {
    question: "When should I plant cannabis outdoors in Canada?",
    answer: "In most of Canada, plant outdoors after the last frost date - typically late May to early June. Southern Ontario and BC can plant mid-May. Germinate seeds indoors 2-3 weeks before transplanting outside for a head start. Check your local frost dates for exact timing.",
  },
  {
    question: "What strains finish before frost in Canada?",
    answer: "Look for strains with 7-8 week flowering times that finish by late September. God Bud, Frisian Dew, Early Skunk, and Northern Lights are reliable early finishers. Autoflowers are also excellent for finishing before frost.",
  },
  {
    question: "How do I protect outdoor plants from mold in Canada?",
    answer: "Choose mold-resistant strains (Frisian Dew, Northern Lights), ensure good airflow between plants, shake off morning dew, avoid overhead watering, and harvest before heavy fall rains. In humid areas, consider autoflowers that finish earlier.",
  },
  {
    question: "Can I grow sativas outdoors in Canada?",
    answer: "Yes, but choose carefully. Pure sativas often finish too late for most of Canada. Look for fast-flowering sativas like Durban Poison or sativa-dominant hybrids that finish in 8-9 weeks. Southern BC and Ontario have the best sativa growing conditions.",
  },
  {
    question: "How much can I yield outdoors in Canada?",
    answer: "Outdoor yields depend on strain, growing conditions, and plant size. Expect 200-500g per plant for well-grown photoperiod strains in good conditions. Autoflowers typically yield 50-150g per plant but can be harvested 2-3 times per season.",
  },
  {
    question: "What's the best outdoor strain for beginners in Canada?",
    answer: "Northern Lights and Early Skunk are the most forgiving outdoor strains for Canadian beginners. Both handle cold, resist mold, finish early, and produce good yields with minimal intervention. God Bud from JOTI is another excellent beginner choice.",
  },
]

const relatedPages = [
  {
    title: "Best Autoflower Seeds",
    href: "/best-autoflower-seeds-canada",
    description: "Fast-finishing autos for Canadian summers",
  },
  {
    title: "Seeds for Ontario",
    href: "/best-seeds-ontario",
    description: "Best strains for Ontario outdoor growing",
  },
  {
    title: "Seeds for British Columbia",
    href: "/best-seeds-british-columbia",
    description: "Strains bred for BC climate",
  },
  {
    title: "Seeds for Nova Scotia",
    href: "/best-seeds-nova-scotia",
    description: "Strains for Maritime growing conditions",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Outdoor Cannabis Strains for Canada 2026",
  "description": "Complete guide to choosing outdoor cannabis strains for Canadian growing conditions.",
  "author": {
    "@type": "Organization",
    "name": "Canada Seed Bank Reviews",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Canada Seed Bank Reviews",
    "url": "https://www.canadaseedbankreviews.ca",
  },
  "datePublished": "2024-01-01",
  "dateModified": "2026-03-15",
}

export default function BestOutdoorStrainsCanadaPage() {
  return (
    <SEOPageTemplate
      title="Best Outdoor Strains for Canada 2026"
      subtitle="Cold-Hardy, Mold-Resistant Cannabis for Canadian Growing"
      introContent="Growing cannabis outdoors in Canada requires strains that can handle cool temperatures, resist mold, and finish flowering before the fall frost arrives."
      mainContent={[
        "Canada's outdoor growing season presents unique challenges: short summers, cool nights, and humid fall conditions that can promote mold. Choosing the right genetics is crucial for successful outdoor growing.",
        "The best outdoor strains for Canada share several key traits: fast flowering times (7-9 weeks), natural mold and pest resistance, tolerance for cool temperatures, and the ability to finish before October frosts.",
        "Canadian breeders like Jordan of the Islands have spent decades developing outdoor genetics specifically for our climate. Their God Bud strain has become legendary among Canadian outdoor growers for its reliability and quality.",
        "For most of Canada, look for indica-dominant strains or hybrids that finish in 7-8 weeks of flowering. Northern regions should prioritize autoflowers or very early finishers. Southern Ontario and BC can grow a wider variety including some fast sativas.",
        "Proper timing is essential for Canadian outdoor growing. Start seeds indoors in late April, transplant after the last frost (late May for most areas), and aim for harvest in late September to early October before heavy frosts arrive.",
      ]}
      seedBanks={seedBanks}
      strains={strains}
      faqs={faqs}
      relatedPages={relatedPages}
      schemaData={schemaData}
    />
  )
}
