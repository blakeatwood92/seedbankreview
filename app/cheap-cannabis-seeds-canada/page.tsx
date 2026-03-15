import { Metadata } from "next"
import { SEOPageTemplate } from "@/components/seo-page-template"

export const metadata: Metadata = {
  title: "Cheap Cannabis Seeds Canada 2026 | Budget Seeds & Deals",
  description: "Find cheap cannabis seeds in Canada without sacrificing quality. Budget strains, bulk deals, free seed promotions, and affordable seed banks for Canadian growers.",
  keywords: "cheap cannabis seeds canada, budget seeds canada, affordable marijuana seeds, discount seeds canada, bulk cannabis seeds canada",
  openGraph: {
    title: "Cheap Cannabis Seeds Canada 2026 | Budget Seeds & Deals",
    description: "Quality cannabis seeds at affordable prices for Canadian growers. Budget strains and deals.",
    type: "article",
  },
}

const seedBanks = [
  {
    name: "Quebec Cannabis Seeds",
    slug: "quebec-cannabis-seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
    rating: 4.5,
    description: "Budget-friendly Canadian bank with regular seeds from $2/seed. Extra seeds included free.",
    specialties: ["Low Prices", "Free Extra Seeds", "Discount Codes"],
    affiliateUrl: "https://quebeccannabisseeds.com",
  },
  {
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    description: "Free seed with every order + 1 free seed per €20 spent. Regular promotions and deals.",
    specialties: ["Free Seeds Program", "Regular Promos", "Competitive Prices"],
    affiliateUrl: "https://herbiesheadshop.com",
  },
  {
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    description: "Huge selection with budget options under $5/seed. Bitcoin payment gets 15% discount.",
    specialties: ["Budget Options", "Bitcoin Discount", "Bulk Pricing"],
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
  },
  {
    name: "True North Seed Bank",
    slug: "true-north",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.2,
    description: "Mix and match singles starting at $5. Frequent sales and free seed promotions.",
    specialties: ["Single Seed Options", "Sales Events", "Free Seeds"],
    affiliateUrl: "https://truenorthseedbank.com",
  },
  {
    name: "Jordan of the Islands",
    slug: "jordan-of-the-islands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
    rating: 4.7,
    description: "Regular seeds from $5 each with 12 free breeder's choice per order. Excellent value.",
    specialties: ["Free Breeder's Choice", "Regular Seeds", "Bulk Deals"],
    affiliateUrl: "https://jordanoftheislands.com",
  },
  {
    name: "Crop King Seeds",
    slug: "crop-king-seeds",
    logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
    rating: 3.8,
    description: "Mix and match 3-packs from $35. Germination guarantee protects your investment.",
    specialties: ["Mix & Match", "Germination Guarantee", "Starter Packs"],
    affiliateUrl: "https://cropkingseeds.com",
  },
]

const strains = [
  {
    name: "Northern Lights",
    type: "Indica",
    thc: "18-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Very Easy",
    description: "Classic budget strain available everywhere. Easy to grow, reliable results, great value.",
  },
  {
    name: "White Widow",
    type: "Hybrid",
    thc: "18-25%",
    floweringTime: "8-9 weeks",
    difficulty: "Easy",
    description: "Dutch classic with wide availability and competitive pricing. Excellent for beginners.",
  },
  {
    name: "Critical",
    type: "Indica",
    thc: "14-18%",
    floweringTime: "7-8 weeks",
    difficulty: "Very Easy",
    description: "Budget-friendly heavy yielder. Fast flowering means quick turnaround.",
  },
  {
    name: "AK-47",
    type: "Hybrid",
    thc: "15-20%",
    floweringTime: "8-9 weeks",
    difficulty: "Easy",
    description: "Award-winning strain at affordable prices. Balanced effects and good yields.",
  },
  {
    name: "Skunk #1",
    type: "Hybrid",
    thc: "15-19%",
    floweringTime: "8-9 weeks",
    difficulty: "Very Easy",
    description: "The original hybrid at budget prices. Foundation of countless modern strains.",
  },
  {
    name: "Blue Dream",
    type: "Hybrid",
    thc: "17-24%",
    floweringTime: "9-10 weeks",
    difficulty: "Easy",
    description: "Popular strain with competitive pricing. High yields offset seed cost.",
  },
]

const faqs = [
  {
    question: "What's the cheapest way to buy cannabis seeds in Canada?",
    answer: "Regular (non-feminized) seeds are the cheapest option, often 50-70% less than feminized seeds. Quebec Cannabis Seeds and Jordan of the Islands offer quality regulars from $2-5/seed. Bulk orders and Bitcoin payments also reduce costs.",
  },
  {
    question: "Are cheap cannabis seeds good quality?",
    answer: "Yes, price doesn't always indicate quality. Classic strains like Northern Lights and White Widow are inexpensive because they're widely available, not because they're inferior. Avoid extremely cheap seeds from unknown sources, but established budget options from reputable banks are reliable.",
  },
  {
    question: "Should I buy regular or feminized seeds on a budget?",
    answer: "Regular seeds are much cheaper but produce both male and female plants (you'll discard males). Feminized seeds cost more but guarantee female plants. For budget growers willing to identify and remove males, regular seeds offer significant savings.",
  },
  {
    question: "How can I get free cannabis seeds in Canada?",
    answer: "Many seed banks include free seeds with orders. Herbies gives 1 free seed per order + 1 per €20 spent. Jordan of the Islands includes 12 breeder's choice seeds free. True North and Quebec Cannabis Seeds also include freebies. Sign up for newsletters to catch promotions.",
  },
  {
    question: "Is it cheaper to grow from seed or buy cannabis?",
    answer: "Growing from seed is significantly cheaper long-term. A $10 seed can produce 100-500g of cannabis worth $1000+ at retail prices. Even with electricity and supplies, home growing costs about $1-3/gram compared to $8-15/gram retail.",
  },
  {
    question: "What are the best budget strains for beginners?",
    answer: "Northern Lights, White Widow, Critical, and Skunk #1 are all affordable, easy to grow, and widely available. These classic strains are forgiving of beginner mistakes and produce reliable results. Start with these before investing in expensive exotic genetics.",
  },
]

const relatedPages = [
  {
    title: "Best Seed Banks Canada",
    href: "/best-seed-banks-canada",
    description: "Complete seed bank directory",
  },
  {
    title: "Best Autoflower Seeds",
    href: "/best-autoflower-seeds-canada",
    description: "Fast-finishing budget autos",
  },
  {
    title: "Seed Banks That Ship to Canada",
    href: "/seed-banks-that-ship-to-canada",
    description: "International budget options",
  },
  {
    title: "Best Outdoor Strains",
    href: "/best-outdoor-strains-canada",
    description: "Affordable outdoor genetics",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cheap Cannabis Seeds Canada 2026",
  "description": "Guide to finding affordable cannabis seeds in Canada without sacrificing quality.",
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

export default function CheapCannabisSeedsCanadaPage() {
  return (
    <SEOPageTemplate
      title="Cheap Cannabis Seeds Canada 2026"
      subtitle="Quality Genetics on a Budget"
      introContent="You don't need to spend a fortune to grow great cannabis. Find affordable seeds from trusted Canadian banks with free seed programs, bulk deals, and budget-friendly strains."
      mainContent={[
        "Growing cannabis at home is already incredibly cost-effective compared to buying retail, but smart seed shopping can stretch your growing budget even further. Quality seeds don't have to be expensive.",
        "The best value in cannabis seeds comes from regular (non-feminized) seeds. These cost 50-70% less than feminized versions and produce the same genetics. You'll need to identify and remove male plants, but the savings are substantial for budget-conscious growers.",
        "Free seed programs are one of the best ways to maximize value. Herbies includes 1 free seed per order plus 1 additional free seed for every €20 spent. Jordan of the Islands throws in 12 breeder's choice seeds with every order. These freebies can double or triple your seed count.",
        "Classic strains like Northern Lights, White Widow, and Skunk #1 are inexpensive not because they're inferior, but because they're widely available and easy to produce. These proven genetics offer reliability and potency at budget prices.",
        "For maximum value, consider bulk orders, Bitcoin payment discounts (often 10-15% off), and seasonal sales. Sign up for seed bank newsletters to catch flash sales and promotional codes. Many banks offer significant discounts during 4/20 and holiday sales.",
      ]}
      seedBanks={seedBanks}
      strains={strains}
      faqs={faqs}
      relatedPages={relatedPages}
      schemaData={schemaData}
    />
  )
}
