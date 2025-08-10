import Link from "next/link"
import { Leaf, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Top Seed Banks", href: "/seed-banks" },
    { name: "Provincial Guides", href: "/provinces" },
    { name: "Reviews", href: "/reviews" },
    { name: "Growing Guides", href: "/guides" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <Leaf className="h-7 w-7 text-red-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">🍁</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">Canada Seed Bank</span>
            <span className="text-sm text-red-600 font-medium -mt-1">Reviews</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-red-600 text-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
