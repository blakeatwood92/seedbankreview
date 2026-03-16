import { Metadata } from "next"
import { SEOPageTemplate } from "@/components/seo-page-template"

export const metadata: Metadata = {
  title: "Seed Banks That Ship to Canada 2026 | International Cannabis Seeds",
  description: "Find international seed banks that ship to Canada reliably. Compare shipping times, stealth options, customs success rates, and payment methods. Complete guide for ordering seeds to Canada.",
  keywords: "seed banks ship to canada, international seeds canada, order seeds to canada, cannabis seeds shipped canada, stealth shipping canada",
  openGraph: {
    title: "Seed Banks That Ship to Canada 2026",
    description: "International seed banks with reliable shipping to Canada, stealth options, and delivery guarantees.",
    type: "article",
  },
}

const seedBanks = [
  {
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    description: "Ships to Canada via Certified Mail in 9-12 days. Delivery guarantee - free reship if lost.",
    specialties: ["Delivery Guarantee", "9-12 Day Shipping", "Accepts Interac"],
    affiliateUrl: "https://herbiesheadshop.com",
  },
  {
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    description: "World's largest seed bank with 4000+ strains. Multiple stealth shipping options to Canada.",
    specialties: ["Stealth Shipping", "4000+ Strains", "Multiple Payment Options"],
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
  },
  {
    name: "ILGM (I Love Growing Marijuana)",
    slug: "ilgm",
    logo: "https://www.ilovegrowingmarijuana.com/wp-content/themes/flavor/flavor/images/logo-ilgm.png",
    rating: 4.3,
    description: "Guaranteed delivery to Canada with discreet shipping. Popular American seed bank.",
    specialties: ["Guaranteed Delivery", "Grow Guides", "Beginner Friendly"],
    affiliateUrl: "https://www.ilovegrowingmarijuana.com",
  },
  {
    name: "Attitude Seed Bank",
    slug: "attitude",
    logo: "https://www.cannabis-seeds-bank.co.uk/images/logo.png",
    rating: 4.1,
    description: "UK-based with excellent stealth shipping options. Guaranteed delivery available.",
    specialties: ["Stealth Shipping", "UK Based", "Breeder Promos"],
    affiliateUrl: "https://www.cannabis-seeds-bank.co.uk",
  },
  {
    name: "Crop King Seeds",
    slug: "crop-king-seeds",
    logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
    rating: 3.8,
    description: "Canadian-based but ships worldwide. No customs concerns for Canadian customers.",
    specialties: ["Canadian Based", "No Customs", "Germination Guarantee"],
    affiliateUrl: "https://cropkingseeds.com",
  },
  {
    name: "True North Seed Bank",
    slug: "true-north",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.2,
    description: "Canadian seed bank - domestic shipping means no customs. 2-4 day delivery.",
    specialties: ["Domestic Shipping", "No Customs", "Fast Delivery"],
    affiliateUrl: "https://truenorthseedbank.com",
  },
]

const strains = [
  {
    name: "Gorilla Glue #4",
    type: "Hybrid",
    thc: "25-30%",
    floweringTime: "8-9 weeks",
    difficulty: "Moderate",
    description: "World-famous strain available from most international banks. Exceptional resin production.",
  },
  {
    name: "Wedding Cake",
    type: "Hybrid",
    thc: "22-26%",
    floweringTime: "8-9 weeks",
    difficulty: "Moderate",
    description: "Popular US genetics available internationally. Sweet vanilla and tangy flavors.",
  },
  {
    name: "Gelato",
    type: "Hybrid",
    thc: "20-25%",
    floweringTime: "8-9 weeks",
    difficulty: "Moderate",
    description: "Bay Area genetics from Cookies Fam. Sweet, dessert-like terpene profile.",
  },
  {
    name: "Bruce Banner",
    type: "Hybrid",
    thc: "24-29%",
    floweringTime: "9-10 weeks",
    difficulty: "Moderate",
    description: "Potent hybrid available from international breeders. Smashes records for THC content.",
  },
  {
    name: "Runtz",
    type: "Hybrid",
    thc: "19-29%",
    floweringTime: "8-9 weeks",
    difficulty: "Moderate",
    description: "Trendy strain with candy-like flavor. Available from multiple international sources.",
  },
  {
    name: "Do-Si-Dos",
    type: "Indica",
    thc: "22-28%",
    floweringTime: "8-9 weeks",
    difficulty: "Moderate",
    description: "Cookies-family genetics. Potent indica with unique lime and mint flavors.",
  },
]

const faqs = [
  {
    question: "Is it legal to order cannabis seeds to Canada from international seed banks?",
    answer: "Yes, cannabis seeds are legal to purchase and possess in Canada. While international shipments technically cross borders, cannabis seeds for personal cultivation are generally treated as low priority by CBSA. Many international banks offer stealth shipping and delivery guarantees for added security.",
  },
  {
    question: "What happens if my international seed order is seized at customs?",
    answer: "Reputable international seed banks like Herbies and Seedsman offer delivery guarantees or reshipment policies. If your order is seized or lost, they'll reship for free. This is why choosing established banks with guaranteed delivery is important for international orders.",
  },
  {
    question: "How long does international shipping take to reach Canada?",
    answer: "Shipping times vary by origin and method. Herbies (Spain) typically arrives in 9-12 days. Seedsman and Attitude (UK) take 10-21 days. US-based banks like ILGM usually arrive within 7-14 days. Canadian domestic orders arrive in 2-5 days.",
  },
  {
    question: "Should I choose international or Canadian seed banks?",
    answer: "Canadian seed banks offer faster shipping (2-5 days) and no customs concerns. International banks offer larger selections, exclusive breeders, and sometimes better prices. For rare genetics or specific breeders, international banks are worth the longer wait.",
  },
  {
    question: "What payment methods do international seed banks accept for Canadian orders?",
    answer: "Most international banks accept credit cards, Bitcoin, and bank transfers. Herbies notably accepts Interac for Canadian customers. Bitcoin often comes with discounts (10-15% off). Avoid banks that only accept cash or money orders.",
  },
  {
    question: "What is stealth shipping and do I need it?",
    answer: "Stealth shipping disguises seeds in everyday items (clothing, DVDs, toys) to avoid detection. While not strictly necessary for Canada, it provides extra peace of mind. Seedsman and Attitude offer various stealth options. Herbies includes discreet packaging standard.",
  },
]

const relatedPages = [
  {
    title: "Best Seed Banks Canada",
    href: "/best-seed-banks-canada",
    description: "Complete Canadian seed bank guide",
  },
  {
    title: "Best Autoflower Seeds",
    href: "/best-autoflower-seeds-canada",
    description: "Top auto strains available internationally",
  },
  {
    title: "Cheap Cannabis Seeds",
    href: "/cheap-cannabis-seeds-canada",
    description: "Budget-friendly seed options",
  },
  {
    title: "Seeds for Ontario",
    href: "/best-seeds-ontario",
    description: "International shipping to Ontario",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Seed Banks That Ship to Canada 2026",
  "description": "Guide to international seed banks that reliably ship cannabis seeds to Canada.",
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

export default function SeedBanksThatShipToCanadaPage() {
  return (
    <SEOPageTemplate
      title="Seed Banks That Ship to Canada 2026"
      subtitle="International Options with Reliable Canadian Delivery"
      introContent="Looking beyond Canadian seed banks? Discover international seed banks with proven track records shipping to Canada, including delivery guarantees and stealth shipping options."
      mainContent={[
        "While Canadian seed banks offer convenience and fast shipping, international seed banks provide access to exclusive breeders, rare genetics, and sometimes better prices. The key is choosing reputable banks with reliable shipping to Canada.",
        "The best international seed banks for Canadian customers offer delivery guarantees. This means if your order is lost or seized, they'll reship at no cost. Herbies Seeds, Seedsman, and ILGM all offer some form of guaranteed delivery to Canada.",
        "Shipping times from international banks typically range from 9-21 days depending on origin. UK-based banks (Seedsman, Attitude) and Spanish banks (Herbies) have established shipping routes to Canada with good success rates.",
        "For Canadian customers, stealth shipping provides extra security. Seeds are disguised in everyday items to avoid detection. While not strictly necessary given Canada's legal status, it offers peace of mind for the longer international journey.",
        "Payment options from international banks include credit cards, Bitcoin (often with 10-15% discount), bank transfers, and increasingly Interac for Canadian customers. Herbies notably accepts Interac, making payment convenient for Canadians.",
      ]}
      seedBanks={seedBanks}
      strains={strains}
      faqs={faqs}
      relatedPages={relatedPages}
      schemaData={schemaData}
    />
  )
}
