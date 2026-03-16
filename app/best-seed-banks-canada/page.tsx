import { Metadata } from "next"
import { SEOPageTemplate } from "@/components/seo-page-template"

export const metadata: Metadata = {
  title: "Best Seed Banks in Canada 2026 | Top Canadian Cannabis Seed Sources",
  description: "Discover the best seed banks in Canada for 2026. Compare top-rated Canadian cannabis seed sources with verified reviews, fast shipping, and quality genetics. Find trusted seed banks that ship across Canada.",
  keywords: "best seed banks canada, canadian seed banks, cannabis seeds canada, marijuana seeds canada, weed seeds canada, buy seeds canada",
  openGraph: {
    title: "Best Seed Banks in Canada 2026 | Top Canadian Cannabis Seed Sources",
    description: "Compare the best Canadian seed banks with verified reviews, fast domestic shipping, and premium genetics.",
    type: "article",
  },
}

const seedBanks = [
  {
    name: "True North Seed Bank",
    slug: "true-north",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.2,
    description: "Established Canadian seed bank since 2009 with 800+ strains and fast domestic shipping.",
    specialties: ["Large Selection", "Canadian Based", "Interac E-Transfer"],
    affiliateUrl: "https://truenorthseedbank.com",
  },
  {
    name: "Jordan of the Islands",
    slug: "jordan-of-the-islands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
    rating: 4.7,
    description: "Legendary BC breeder since 1992, creator of God Bud. Known for generous extras and quality genetics.",
    specialties: ["Original Genetics", "Breeder Direct", "God Bud Creator"],
    affiliateUrl: "https://jordanoftheislands.com",
  },
  {
    name: "Quebec Cannabis Seeds",
    slug: "quebec-cannabis-seeds",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wyoXlcHaLEtobhRtGiIzCnFwxo1oKI.png",
    rating: 4.5,
    description: "Quebec-based seed bank with genetics suited for northern climates. Express shipping available.",
    specialties: ["Northern Climate", "Free Express $200+", "Beginner Friendly"],
    affiliateUrl: "https://quebeccannabisseeds.com",
  },
  {
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    description: "World's largest seed bank with 4000+ strains. Ships to Canada with stealth options.",
    specialties: ["Huge Selection", "Global Shipping", "Breeder Partnerships"],
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
  },
  {
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    description: "International seed bank with delivery guarantee. Ships to Canada in 9-12 days via Certified Mail.",
    specialties: ["Delivery Guarantee", "Free Seeds", "Accepts Interac"],
    affiliateUrl: "https://herbiesheadshop.com",
  },
  {
    name: "Crop King Seeds",
    slug: "crop-king-seeds",
    logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
    rating: 3.8,
    description: "BC-based seed bank with 80% germination guarantee. Specializes in feminized and autoflower seeds.",
    specialties: ["Germination Guarantee", "Feminized Seeds", "Canadian Based"],
    affiliateUrl: "https://cropkingseeds.com",
  },
]

const strains = [
  {
    name: "Northern Lights",
    type: "Indica",
    thc: "18-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "Classic indica perfect for Canadian indoor grows. Resilient, fast-flowering, and potent.",
  },
  {
    name: "Blue Dream",
    type: "Hybrid",
    thc: "17-24%",
    floweringTime: "9-10 weeks",
    difficulty: "Moderate",
    description: "Popular hybrid with balanced effects. Great for both new and experienced growers.",
  },
  {
    name: "White Widow",
    type: "Hybrid",
    thc: "18-25%",
    floweringTime: "8-9 weeks",
    difficulty: "Easy",
    description: "Dutch classic known for heavy resin production. Excellent for Canadian climates.",
  },
  {
    name: "God Bud",
    type: "Indica",
    thc: "15-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "BC-bred legend from Jordan of the Islands. Perfect for Canadian outdoor growing.",
  },
]

const faqs = [
  {
    question: "Is it legal to buy cannabis seeds in Canada?",
    answer: "Yes, cannabis seeds are legal to purchase and possess in Canada since the Cannabis Act came into effect in October 2018. Adults can grow up to 4 plants per household for personal use in most provinces (Quebec and Manitoba have restrictions). Seeds can be purchased from licensed retailers or online seed banks.",
  },
  {
    question: "What's the best seed bank for beginners in Canada?",
    answer: "For beginners, we recommend Quebec Cannabis Seeds or True North Seed Bank. Both offer beginner-friendly strains, clear growing information, and reliable customer support. Quebec Cannabis Seeds specifically caters to first-time growers with easy-to-grow genetics suited for Canadian climates.",
  },
  {
    question: "How long does shipping take from Canadian seed banks?",
    answer: "Domestic Canadian seed banks typically deliver within 2-7 business days depending on your location. True North Seed Bank averages 2-4 days, while Quebec Cannabis Seeds offers express shipping in 1-2 days. International seed banks like Seedsman and Herbies take 9-21 days to reach Canada.",
  },
  {
    question: "Do Canadian seed banks accept Interac e-Transfer?",
    answer: "Yes, most Canadian seed banks accept Interac e-Transfer, which is often the preferred payment method. True North Seed Bank, Jordan of the Islands, Quebec Cannabis Seeds, and Crop King Seeds all accept Interac. International banks like Herbies also accept Interac for Canadian customers.",
  },
  {
    question: "What's the difference between feminized and autoflower seeds?",
    answer: "Feminized seeds produce only female plants (which produce buds) but require specific light cycles to flower. Autoflower seeds automatically begin flowering after a certain age regardless of light cycle, making them easier for beginners. Autoflowers typically have shorter growing cycles (8-10 weeks total) but may produce smaller yields.",
  },
  {
    question: "Which seed banks offer germination guarantees?",
    answer: "Crop King Seeds offers an 80% germination guarantee on all seeds. Quebec Cannabis Seeds provides a germination guarantee and often includes extra seeds to compensate for potential failures. Herbies Seeds offers a delivery guarantee - if your package doesn't arrive, they'll reship for free.",
  },
]

const relatedPages = [
  {
    title: "Best Autoflower Seeds",
    href: "/best-autoflower-seeds-canada",
    description: "Top autoflowering strains for Canadian growers",
  },
  {
    title: "Best Outdoor Strains",
    href: "/best-outdoor-strains-canada",
    description: "Strains that thrive in Canadian outdoor conditions",
  },
  {
    title: "Seed Banks That Ship to Canada",
    href: "/seed-banks-that-ship-to-canada",
    description: "International options with Canadian delivery",
  },
  {
    title: "Cheap Cannabis Seeds",
    href: "/cheap-cannabis-seeds-canada",
    description: "Budget-friendly seed options in Canada",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Seed Banks in Canada 2026",
  "description": "Comprehensive guide to the best cannabis seed banks in Canada with reviews, ratings, and recommendations.",
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
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.canadaseedbankreviews.ca/best-seed-banks-canada",
  },
}

export default function BestSeedBanksCanadaPage() {
  return (
    <SEOPageTemplate
      title="Best Seed Banks in Canada 2026"
      subtitle="Your Complete Guide to Buying Cannabis Seeds in Canada"
      introContent="Finding quality cannabis seeds in Canada has never been easier. We've researched and reviewed the top seed banks to help you find reliable genetics, fast shipping, and trusted service."
      mainContent={[
        "Canada's cannabis seed market has grown significantly since legalization in 2018. With the legal right to grow up to 4 plants per household in most provinces, more Canadians than ever are looking for quality genetics to start their home grows.",
        "When choosing a seed bank in Canada, there are several factors to consider: shipping speed and reliability, payment options (especially Interac e-Transfer), seed quality and germination rates, strain selection, and customer service reputation.",
        "Canadian seed banks offer distinct advantages over international options. Domestic shipping means no customs concerns, faster delivery times (often 2-5 days), and easier payment through Interac e-Transfer. However, international seed banks like Seedsman and Herbies offer larger selections and sometimes better prices.",
        "For beginners, we recommend starting with feminized or autoflowering seeds from established Canadian banks like True North Seed Bank or Quebec Cannabis Seeds. These banks offer beginner-friendly strains, clear growing guides, and responsive customer support.",
        "Experienced growers might appreciate Jordan of the Islands for their unique BC-bred genetics, or explore international options like Seedsman's massive 4000+ strain catalog. The best choice depends on your growing experience, budget, and specific strain preferences.",
      ]}
      seedBanks={seedBanks}
      strains={strains}
      faqs={faqs}
      relatedPages={relatedPages}
      schemaData={schemaData}
    />
  )
}
