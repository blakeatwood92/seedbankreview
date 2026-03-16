import { Metadata } from "next"
import { SEOPageTemplate } from "@/components/seo-page-template"

export const metadata: Metadata = {
  title: "Best Cannabis Seeds for Nova Scotia 2026 | NS Growing Guide",
  description: "Find the best cannabis seeds for Nova Scotia's maritime climate. Mold-resistant strains, humidity-tolerant genetics, and seed banks that ship to NS. Complete Nova Scotia growing guide.",
  keywords: "cannabis seeds nova scotia, weed seeds ns, marijuana seeds nova scotia, growing cannabis nova scotia, halifax seed banks",
  openGraph: {
    title: "Best Cannabis Seeds for Nova Scotia 2026",
    description: "Cannabis strains and seed banks perfect for Nova Scotia's maritime growing conditions.",
    type: "article",
  },
}

const seedBanks = [
  {
    name: "Quebec Cannabis Seeds",
    slug: "quebec-cannabis-seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
    rating: 4.5,
    description: "Eastern Canadian genetics bred for Maritime climates. Fast shipping to Nova Scotia.",
    specialties: ["Maritime Climate", "Mold Resistant", "Fast Shipping East"],
    affiliateUrl: "https://quebeccannabisseeds.com",
  },
  {
    name: "True North Seed Bank",
    slug: "true-north",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.2,
    description: "Reliable Canadian seed bank with fast delivery to Nova Scotia. Wide strain selection.",
    specialties: ["Fast NS Shipping", "Large Selection", "Interac E-Transfer"],
    affiliateUrl: "https://truenorthseedbank.com",
  },
  {
    name: "Jordan of the Islands",
    slug: "jordan-of-the-islands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
    rating: 4.7,
    description: "BC genetics that perform well in humid coastal climates like Nova Scotia.",
    specialties: ["Coastal Adapted", "Mold Resistant", "Canadian Bred"],
    affiliateUrl: "https://jordanoftheislands.com",
  },
  {
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    description: "International bank with delivery guarantee. Great mold-resistant strain selection.",
    specialties: ["Delivery Guarantee", "Free Seeds", "Mold Resistant Options"],
    affiliateUrl: "https://herbiesheadshop.com",
  },
]

const strains = [
  {
    name: "Frisian Dew",
    type: "Hybrid",
    thc: "14-18%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "Specifically bred for humid outdoor conditions. Exceptional mold resistance - perfect for NS.",
  },
  {
    name: "Northern Lights",
    type: "Indica",
    thc: "18-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "Classic strain with natural mold resistance. Finishes early before NS fall humidity peaks.",
  },
  {
    name: "Critical Auto",
    type: "Indica",
    thc: "14-18%",
    floweringTime: "8 weeks total",
    difficulty: "Very Easy",
    description: "Fast auto that finishes before humid September weather. Excellent for Maritime timing.",
  },
  {
    name: "Blue Cheese",
    type: "Indica",
    thc: "17-20%",
    floweringTime: "8-9 weeks",
    difficulty: "Easy",
    description: "UK-bred strain adapted to damp conditions. Dense buds with good mold resistance.",
  },
  {
    name: "Early Skunk",
    type: "Hybrid",
    thc: "15-18%",
    floweringTime: "7-8 weeks",
    difficulty: "Very Easy",
    description: "Bred by Sensi Seeds for early outdoor harvest. Very forgiving in Maritime conditions.",
  },
  {
    name: "Grape Skunk",
    type: "Indica",
    thc: "18-22%",
    floweringTime: "8 weeks",
    difficulty: "Easy",
    description: "Quebec Cannabis Seeds strain bred for Eastern Canada. Performs well in NS humidity.",
  },
]

const faqs = [
  {
    question: "Is it legal to grow cannabis in Nova Scotia?",
    answer: "Yes, adults 19+ in Nova Scotia can grow up to 4 cannabis plants per household for personal use under federal law. Plants must be grown on private property not visible from public spaces. Check municipal bylaws as some areas have additional restrictions.",
  },
  {
    question: "When should I plant cannabis outdoors in Nova Scotia?",
    answer: "In Nova Scotia, plant outdoors after the last frost - typically late May to early June. Halifax area can usually plant by May 24th weekend. Cape Breton may need to wait until early June. Start seeds indoors 2-3 weeks earlier for a head start.",
  },
  {
    question: "What are the biggest challenges growing cannabis in Nova Scotia?",
    answer: "Humidity and mold are the primary challenges in Nova Scotia. The maritime climate creates humid conditions especially in September when plants are finishing. Choose mold-resistant strains, ensure good airflow, and consider autoflowers that finish before peak humidity season.",
  },
  {
    question: "Do seed banks ship to Nova Scotia?",
    answer: "Yes, all major Canadian seed banks ship to Nova Scotia. Quebec Cannabis Seeds and True North Seed Bank offer fast domestic shipping (3-5 days typically). International banks like Herbies and Seedsman also ship to NS, though delivery takes 9-21 days.",
  },
  {
    question: "What strains are best for Nova Scotia's short summer?",
    answer: "Fast-finishing indicas and autoflowers perform best in Nova Scotia. Look for strains with 7-8 week flowering times like Northern Lights, Early Skunk, and Critical Auto. Avoid long-flowering sativas that won't finish before October frost.",
  },
  {
    question: "Can I grow cannabis indoors in Nova Scotia?",
    answer: "Absolutely! Indoor growing in Nova Scotia avoids the humidity and short season challenges. Set up in a spare room, basement, or grow tent. Many NS growers prefer indoor cultivation for year-round harvests regardless of weather.",
  },
]

const relatedPages = [
  {
    title: "Best Autoflower Seeds",
    href: "/best-autoflower-seeds-canada",
    description: "Fast-finishing autos for short seasons",
  },
  {
    title: "Best Outdoor Strains",
    href: "/best-outdoor-strains-canada",
    description: "Mold-resistant outdoor genetics",
  },
  {
    title: "Seeds for Ontario",
    href: "/best-seeds-ontario",
    description: "Ontario growing guide",
  },
  {
    title: "Best Seed Banks Canada",
    href: "/best-seed-banks-canada",
    description: "Complete seed bank directory",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Cannabis Seeds for Nova Scotia 2026",
  "description": "Guide to the best cannabis seeds and growing tips for Nova Scotia's maritime climate.",
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

export default function BestSeedsNovaScotiaPage() {
  return (
    <SEOPageTemplate
      title="Best Cannabis Seeds for Nova Scotia 2026"
      subtitle="Mold-Resistant Strains for Maritime Growing"
      introContent="Nova Scotia's maritime climate requires specially selected cannabis genetics that can handle humidity and finish before the wet fall weather arrives."
      mainContent={[
        "Growing cannabis in Nova Scotia presents unique challenges that growers in other provinces don't face. The maritime climate brings cool, humid conditions that can promote mold and bud rot, especially during the critical September finishing period.",
        "Successful Nova Scotia growers prioritize two key factors: mold resistance and early finishing times. The best strains for NS are indicas or indica-dominant hybrids that complete flowering by late September, before the wettest weather arrives.",
        "Autoflowering strains are particularly popular in Nova Scotia because they can be harvested in August or early September, well before humidity peaks. Many NS growers run multiple auto harvests throughout the summer.",
        "For outdoor growing in Nova Scotia, strategic plant placement is crucial. Choose locations with good morning sun to dry dew quickly, ensure adequate spacing between plants for airflow, and consider partially covered areas to protect from rain during flowering.",
        "Eastern Canadian seed banks like Quebec Cannabis Seeds breed specifically for Maritime conditions. Their genetics are tested in similar climates and offer the mold resistance Nova Scotia growers need.",
      ]}
      seedBanks={seedBanks}
      strains={strains}
      faqs={faqs}
      relatedPages={relatedPages}
      schemaData={schemaData}
    />
  )
}
