import Link from "next/link"

const HERBIES_AFFILIATE_URL = "https://herbiesheadshop.com/?utm_source=689e356589639&utm_medium=people&utm_campaign=689e356589639_partner&a_aid=689e356589639"

interface HerbiesBannerProps {
  variant?: "wide" | "tall" | "sidebar"
  className?: string
}

export function HerbiesBanner({ variant = "wide", className = "" }: HerbiesBannerProps) {
  // Wide banner (300x600) - good for sidebars or between content
  if (variant === "wide") {
    return (
      <Link 
        href={HERBIES_AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/300%D1%85600-THGeUDylXQYkEIDcQlUvCbJ37hcsT6.png"
          alt="Herbies Seeds - Buy cannabis seeds in Canada with 100% Germination Guarantee"
          className="w-full h-auto"
          loading="lazy"
        />
      </Link>
    )
  }

  // Tall/sidebar banner (120x600) - good for narrow sidebars
  if (variant === "tall" || variant === "sidebar") {
    return (
      <Link 
        href={HERBIES_AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/120%D1%85600-huDSSsTpchIhH4LZkvCilb51Iru0Zg.png"
          alt="Herbies Seeds - Free seeds with every order"
          className="w-full h-auto"
          loading="lazy"
        />
      </Link>
    )
  }

  return null
}

// Inline banner component for use within content sections
export function HerbiesInlineBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <Link 
        href={HERBIES_AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block max-w-[300px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/300%D1%85600-THGeUDylXQYkEIDcQlUvCbJ37hcsT6.png"
          alt="Herbies Seeds - Buy cannabis seeds in Canada with 100% Germination Guarantee"
          className="w-full h-auto"
          loading="lazy"
        />
      </Link>
    </div>
  )
}

// Sidebar banner wrapper for sticky positioning
export function HerbiesSidebarBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`sticky top-24 ${className}`}>
      <p className="text-xs text-gray-500 mb-2 text-center">Sponsored</p>
      <HerbiesBanner variant="wide" />
    </div>
  )
}
