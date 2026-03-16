import { Metadata } from "next"
import { SEOPageTemplate } from "@/components/seo-page-template"

export const metadata: Metadata = {
  title: "Best Cannabis Seeds for British Columbia 2026 | BC Growing Guide",
  description: "Discover the best cannabis seeds for British Columbia. BC Bud genetics, local breeders, and strains perfect for Vancouver, Victoria, and the BC climate. Expert growing tips.",
  keywords: "cannabis seeds british columbia, bc seeds, bc bud seeds, vancouver cannabis seeds, victoria weed seeds, bc cannabis growing",
  openGraph: {
    title: "Best Cannabis Seeds for British Columbia 2026",
    description: "BC growing guide with local breeders, legendary BC genetics, and strain recommendations.",
    type: "article",
  },
}

const seedBanks = [
  {
    name: "Jordan of the Islands",
    slug: "jordan-of-the-islands",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-company-lgo-backup-zbA78eurgy53gyRao2trw0BRP1tE1e.png",
    rating: 4.7,
    description: "Legendary BC breeder since 1992. Creator of God Bud and other BC classics. Vancouver Island based.",
    specialties: ["BC Legend", "God Bud Creator", "Local BC Shipping"],
    affiliateUrl: "https://jordanoftheislands.com",
  },
  {
    name: "True North Seed Bank",
    slug: "true-north",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tnsb_logo-7MCHjFEh91tG5in9Vjgyg7mV65npjx.png",
    rating: 4.2,
    description: "Carries multiple BC breeders including JOTI. Fast shipping across British Columbia.",
    specialties: ["Multiple BC Breeders", "Fast BC Shipping", "Large Selection"],
    affiliateUrl: "https://truenorthseedbank.com",
  },
  {
    name: "Crop King Seeds",
    slug: "crop-king-seeds",
    logo: "https://www.cropkingseeds.com/wp-content/uploads/2021/06/crop-king-seeds-logo.png",
    rating: 3.8,
    description: "Vancouver-based seed bank with germination guarantee. Local BC company.",
    specialties: ["Vancouver Based", "Germination Guarantee", "Feminized Seeds"],
    affiliateUrl: "https://cropkingseeds.com",
  },
  {
    name: "Seedsman",
    slug: "seedsman",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/seedsman-logo_1-0LbwKPv9WxDs9ZUlqN7h7BWdHOrWME.avif",
    rating: 4.0,
    description: "International bank carrying BC genetics plus 4000+ other strains worldwide.",
    specialties: ["BC Genetics Available", "Huge Selection", "Competitive Prices"],
    affiliateUrl: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432",
  },
  {
    name: "Herbies Seeds",
    slug: "herbies-headshop",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-BfEN16kC7tIVKqxs5NuiqmRo1AX2Yz.jpeg",
    rating: 4.5,
    description: "International selection with delivery guarantee to BC. Free seeds with orders.",
    specialties: ["Delivery Guarantee", "Free Seeds", "International Genetics"],
    affiliateUrl: "https://herbiesheadshop.com",
  },
]

const strains = [
  {
    name: "God Bud",
    type: "Indica",
    thc: "15-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "BC legend bred by Jordan of the Islands. The definitive BC Bud strain.",
  },
  {
    name: "Blue God",
    type: "Indica",
    thc: "18-22%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "God Bud x Blueberry cross from JOTI. Beautiful colors and potent BC genetics.",
  },
  {
    name: "Island Sweet Skunk",
    type: "Sativa",
    thc: "18-22%",
    floweringTime: "9-10 weeks",
    difficulty: "Moderate",
    description: "Vancouver Island sativa legend. Energetic high with sweet grapefruit aroma.",
  },
  {
    name: "Texada Timewarp",
    type: "Sativa",
    thc: "15-18%",
    floweringTime: "7-8 weeks",
    difficulty: "Easy",
    description: "Early-finishing BC outdoor sativa. Bred on Texada Island for short seasons.",
  },
  {
    name: "Pink Kush",
    type: "Indica",
    thc: "20-25%",
    floweringTime: "10-11 weeks",
    difficulty: "Moderate",
    description: "Famous BC indica known for its sedating effects. Popular in the Vancouver scene.",
  },
  {
    name: "BC Big Bud",
    type: "Indica",
    thc: "15-20%",
    floweringTime: "8-9 weeks",
    difficulty: "Easy",
    description: "Heavy-yielding BC classic. Great for outdoor grows in the Fraser Valley.",
  },
]

const faqs = [
  {
    question: "Is it legal to grow cannabis in British Columbia?",
    answer: "Yes, adults 19+ in BC can grow up to 4 cannabis plants per household. The BC Cannabis Control and Licensing Act allows home cultivation on private property. Plants should not be visible from public spaces, and landlords may restrict growing in rental properties.",
  },
  {
    question: "Why is BC famous for cannabis?",
    answer: "BC has been Canada's cannabis capital since the 1960s. The mild coastal climate, especially on Vancouver Island and the Gulf Islands, is ideal for outdoor growing. BC breeders developed legendary strains like God Bud, Island Sweet Skunk, and Texada Timewarp that influenced cannabis worldwide.",
  },
  {
    question: "When should I plant cannabis outdoors in BC?",
    answer: "Coastal BC (Vancouver, Victoria) can plant outdoors from early to mid-May. Interior BC should wait until late May or early June after last frost. BC's mild climate allows for one of Canada's longest outdoor seasons, with harvest typically from late September to mid-October.",
  },
  {
    question: "What makes BC genetics special?",
    answer: "BC breeders have been developing outdoor-adapted genetics for decades. Strains like God Bud and Texada Timewarp were specifically bred for BC's climate - finishing early enough for the rainy fall while thriving in the mild summer temperatures. Many are naturally mold resistant.",
  },
  {
    question: "Can I grow sativas outdoors in BC?",
    answer: "Yes! BC's mild climate and long season make it one of the few places in Canada where outdoor sativas can thrive. Island Sweet Skunk and Texada Timewarp are BC-bred sativas developed for local conditions. Coastal areas like Vancouver Island are ideal for sativa growing.",
  },
  {
    question: "Where can I buy seeds in Vancouver?",
    answer: "While licensed BC Cannabis Stores don't typically sell seeds, you can legally order online from seed banks. Jordan of the Islands ships from Vancouver Island, Crop King Seeds is Vancouver-based, and True North Seed Bank delivers quickly to BC. International options like Seedsman also ship to Vancouver.",
  },
]

const relatedPages = [
  {
    title: "Best Seed Banks Canada",
    href: "/best-seed-banks-canada",
    description: "Complete Canadian seed bank guide",
  },
  {
    title: "Best Outdoor Strains",
    href: "/best-outdoor-strains-canada",
    description: "Top outdoor genetics for Canada",
  },
  {
    title: "Seeds for Ontario",
    href: "/best-seeds-ontario",
    description: "Ontario growing guide",
  },
  {
    title: "Best Autoflower Seeds",
    href: "/best-autoflower-seeds-canada",
    description: "Fast-finishing auto strains",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Cannabis Seeds for British Columbia 2026",
  "description": "Complete guide to BC cannabis seeds, local breeders, and growing tips for British Columbia.",
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

export default function BestSeedsBritishColumbiaPage() {
  return (
    <SEOPageTemplate
      title="Best Cannabis Seeds for British Columbia 2026"
      subtitle="Home of BC Bud - Legendary Genetics from the West Coast"
      introContent="British Columbia is Canada's cannabis heartland, home to legendary breeders and some of the world's most famous strains. Find authentic BC genetics and growing tips for the West Coast."
      mainContent={[
        "British Columbia has been Canada's cannabis capital for decades. The mild coastal climate, progressive culture, and dedicated breeders have made BC synonymous with quality cannabis genetics worldwide.",
        "BC Bud isn't just a name - it represents a legacy of breeding excellence. Strains like God Bud, Island Sweet Skunk, and Texada Timewarp were developed here specifically for local growing conditions and have gone on to influence cannabis genetics globally.",
        "Jordan of the Islands represents the pinnacle of BC breeding. Operating from Vancouver Island since 1992, they've created award-winning genetics that thrive in BC's unique climate. Their God Bud strain is perhaps the most famous BC export.",
        "BC's climate offers significant advantages for cannabis growing. The mild winters, warm summers, and coastal moisture create ideal conditions. Vancouver Island and the Gulf Islands are particularly renowned for outdoor growing, with some of the longest seasons in Canada.",
        "For BC growers, we recommend prioritizing local genetics. Strains bred here are adapted to BC's climate - they finish at the right time, handle the fall moisture, and produce quality that matches the legendary BC Bud reputation.",
      ]}
      seedBanks={seedBanks}
      strains={strains}
      faqs={faqs}
      relatedPages={relatedPages}
      schemaData={schemaData}
    />
  )
}
