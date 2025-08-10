import Link from "next/link"
import { Leaf } from "lucide-react"

export function Footer() {
  const footerLinks = {
    "Seed Banks": [
      { name: "Canada", href: "/canada" },
      { name: "International", href: "/international" },
      { name: "Autoflowering", href: "/autoflowering" },
      { name: "Top Rated", href: "/top-rated" },
    ],
    Resources: [
      { name: "Growing Guides", href: "/guides" },
      { name: "Strain Reviews", href: "/strains" },
      { name: "Regional Tips", href: "/regional" },
      { name: "FAQ", href: "/faq" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    "Canadian Specific": [
      { name: "BC Seed Banks", href: "/bc-seed-banks" },
      { name: "Alberta Seed Banks", href: "/alberta-seed-banks" },
      { name: "Ontario Seed Banks", href: "/ontario-seed-banks" },
      { name: "Quebec Seed Banks", href: "/quebec-seed-banks" },
    ],
  }

  return (
    <footer className="bg-black text-white">
      <div className="container px-4 mx-auto py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-red-500" />
              <span className="font-bold text-xl">Seed Bank Reviews</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted source for cannabis seed bank reviews and recommendations in Canada. Find the best genetics
              for your growing needs.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Seed Bank Reviews Canada. All rights reserved.
            <span className="block mt-1">
              Please consume cannabis responsibly and in accordance with Canadian laws.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
