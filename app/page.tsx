import { Hero } from "@/components/hero"
import { FeaturedBanks } from "@/components/featured-banks"
import { ReviewCriteria } from "@/components/review-criteria"
import { CanadianAdvantage } from "@/components/canadian-advantage"
import { RegionalGuide } from "@/components/regional-guide"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedBanks />
      <ReviewCriteria />
      <CanadianAdvantage />
      <RegionalGuide />
      <Newsletter />
    </main>
  )
}
