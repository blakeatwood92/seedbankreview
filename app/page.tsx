import { Hero } from "@/components/hero"
import { FeaturedBanks } from "@/components/featured-banks"
import { AffiliateBanners } from "@/components/affiliate-banners"
import { ReviewCriteria } from "@/components/review-criteria"
import { SeedsmanSection } from "@/components/seedsman-section"
import { CanadianAdvantage } from "@/components/canadian-advantage"
import { RegionalGuide } from "@/components/regional-guide"
import { Newsletter } from "@/components/newsletter"
import { PromoBanner420 } from "@/components/promo-banner-420"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PromoBanner420 />
      <Hero />
      <FeaturedBanks />
      <AffiliateBanners />
      <ReviewCriteria />
      <SeedsmanSection />
      <CanadianAdvantage />
      <RegionalGuide />
      <Newsletter />
    </main>
  )
}
