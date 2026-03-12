"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Search,
  Leaf,
  Sun,
  Home,
  Snowflake,
  Zap,
  ThumbsUp,
  Clock,
  ExternalLink,
  Filter,
  X,
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type Strain = {
  name: string
  type: "Indica" | "Sativa" | "Hybrid"
  thcRange: string
  floweringTime: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  environment: "Indoor" | "Outdoor" | "Both"
  tags: string[]
  description: string
  seedBanks: { name: string; url: string }[]
}

const strains: Strain[] = [
  {
    name: "Northern Lights",
    type: "Indica",
    thcRange: "16-21%",
    floweringTime: "7-9 weeks",
    difficulty: "Beginner",
    environment: "Both",
    tags: ["Feminized", "Indoor", "Outdoor", "Beginner-friendly", "Canadian climate friendly"],
    description: "A classic indica known for its resilience, fast flowering, and resinous buds. Perfect for Canadian growers.",
    seedBanks: [
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "Quebec Cannabis Seeds", url: "https://quebeccannabisseeds.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "White Widow",
    type: "Hybrid",
    thcRange: "18-25%",
    floweringTime: "8-9 weeks",
    difficulty: "Beginner",
    environment: "Both",
    tags: ["Feminized", "Indoor", "Outdoor", "Beginner-friendly", "High THC"],
    description: "Legendary hybrid with balanced effects and excellent resin production. Hardy genetics suitable for cooler climates.",
    seedBanks: [
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "Jordan of the Islands", url: "https://jordanoftheislands.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "Blue Dream Auto",
    type: "Hybrid",
    thcRange: "17-24%",
    floweringTime: "10-12 weeks (seed to harvest)",
    difficulty: "Beginner",
    environment: "Both",
    tags: ["Autoflower", "Feminized", "Indoor", "Outdoor", "Beginner-friendly", "Short season"],
    description: "Autoflowering version of the popular Blue Dream. Great for short Canadian summers with no light schedule needed.",
    seedBanks: [
      { name: "Quebec Cannabis Seeds", url: "https://quebeccannabisseeds.com" },
      { name: "GoBack Seed Bank", url: "https://gobackseedbank.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "Girl Scout Cookies",
    type: "Hybrid",
    thcRange: "25-28%",
    floweringTime: "9-10 weeks",
    difficulty: "Intermediate",
    environment: "Indoor",
    tags: ["Feminized", "Indoor", "High THC"],
    description: "Potent hybrid with dessert-like flavors. Best grown indoors where conditions can be carefully controlled.",
    seedBanks: [
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "BC God Bud",
    type: "Indica",
    thcRange: "22-27%",
    floweringTime: "7-8 weeks",
    difficulty: "Intermediate",
    environment: "Both",
    tags: ["Feminized", "Indoor", "Outdoor", "High THC", "Canadian climate friendly"],
    description: "Award-winning BC original with tropical flavors and powerful effects. Developed for Canadian growing conditions.",
    seedBanks: [
      { name: "Jordan of the Islands", url: "https://jordanoftheislands.com" },
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
    ],
  },
  {
    name: "Quick One Auto",
    type: "Hybrid",
    thcRange: "13-15%",
    floweringTime: "8 weeks (seed to harvest)",
    difficulty: "Beginner",
    environment: "Both",
    tags: ["Autoflower", "Feminized", "Indoor", "Outdoor", "Beginner-friendly", "Short season", "Canadian climate friendly"],
    description: "One of the fastest autoflowers available. Perfect for Canadian growers wanting multiple harvests or late starts.",
    seedBanks: [
      { name: "Quebec Cannabis Seeds", url: "https://quebeccannabisseeds.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "Gorilla Glue #4",
    type: "Hybrid",
    thcRange: "25-30%",
    floweringTime: "8-9 weeks",
    difficulty: "Intermediate",
    environment: "Indoor",
    tags: ["Feminized", "Indoor", "High THC"],
    description: "Extremely potent strain with heavy resin production. Known for its sticky buds and powerful effects.",
    seedBanks: [
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "GoBack Seed Bank", url: "https://gobackseedbank.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "Early Miss Auto",
    type: "Indica",
    thcRange: "15-20%",
    floweringTime: "7-8 weeks (seed to harvest)",
    difficulty: "Beginner",
    environment: "Outdoor",
    tags: ["Autoflower", "Feminized", "Outdoor", "Beginner-friendly", "Short season", "Canadian climate friendly"],
    description: "Bred specifically for northern climates. Finishes before first frost in most Canadian regions.",
    seedBanks: [
      { name: "Quebec Cannabis Seeds", url: "https://quebeccannabisseeds.com" },
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
    ],
  },
  {
    name: "Afghan Kush",
    type: "Indica",
    thcRange: "17-20%",
    floweringTime: "7-8 weeks",
    difficulty: "Beginner",
    environment: "Both",
    tags: ["Feminized", "Indoor", "Outdoor", "Beginner-friendly", "Canadian climate friendly"],
    description: "Pure indica landrace from the Hindu Kush mountains. Extremely resilient and mold-resistant.",
    seedBanks: [
      { name: "Jordan of the Islands", url: "https://jordanoftheislands.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
      { name: "GoBack Seed Bank", url: "https://gobackseedbank.com" },
    ],
  },
  {
    name: "Jack Herer",
    type: "Sativa",
    thcRange: "18-24%",
    floweringTime: "10-12 weeks",
    difficulty: "Intermediate",
    environment: "Indoor",
    tags: ["Feminized", "Indoor", "High THC"],
    description: "Award-winning sativa-dominant strain with cerebral effects. Longer flowering time best suited for indoor grows.",
    seedBanks: [
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "Purple Kush",
    type: "Indica",
    thcRange: "17-22%",
    floweringTime: "8 weeks",
    difficulty: "Beginner",
    environment: "Both",
    tags: ["Feminized", "Indoor", "Outdoor", "Beginner-friendly", "Canadian climate friendly"],
    description: "Beautiful purple-hued indica with grape and earthy flavors. Cold temperatures enhance purple coloring.",
    seedBanks: [
      { name: "Quebec Cannabis Seeds", url: "https://quebeccannabisseeds.com" },
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "Jordan of the Islands", url: "https://jordanoftheislands.com" },
    ],
  },
  {
    name: "Critical Mass Auto",
    type: "Indica",
    thcRange: "18-22%",
    floweringTime: "9-10 weeks (seed to harvest)",
    difficulty: "Beginner",
    environment: "Both",
    tags: ["Autoflower", "Feminized", "Indoor", "Outdoor", "Beginner-friendly", "Canadian climate friendly"],
    description: "Heavy yielding autoflower with dense, resinous buds. Great for beginners wanting big harvests.",
    seedBanks: [
      { name: "GoBack Seed Bank", url: "https://gobackseedbank.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "OG Kush",
    type: "Hybrid",
    thcRange: "20-26%",
    floweringTime: "8-9 weeks",
    difficulty: "Advanced",
    environment: "Indoor",
    tags: ["Feminized", "Indoor", "High THC"],
    description: "Legendary strain with complex flavors. Requires careful attention to nutrients and environment.",
    seedBanks: [
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
    ],
  },
  {
    name: "Frisian Dew",
    type: "Hybrid",
    thcRange: "14-17%",
    floweringTime: "7-8 weeks",
    difficulty: "Beginner",
    environment: "Outdoor",
    tags: ["Feminized", "Outdoor", "Beginner-friendly", "Short season", "Canadian climate friendly"],
    description: "Bred for outdoor growing in northern Europe. Exceptional mold resistance and early finish time.",
    seedBanks: [
      { name: "Quebec Cannabis Seeds", url: "https://quebeccannabisseeds.com" },
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
    ],
  },
  {
    name: "Bruce Banner Auto",
    type: "Hybrid",
    thcRange: "25-29%",
    floweringTime: "10-11 weeks (seed to harvest)",
    difficulty: "Intermediate",
    environment: "Indoor",
    tags: ["Autoflower", "Feminized", "Indoor", "High THC"],
    description: "One of the strongest autoflowers available. Named after the Hulk for its incredible potency.",
    seedBanks: [
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
      { name: "Seedsman", url: "https://www.seedsman.com/us-en/promotions?a_aid=6898fd6444bda&a_bid=0dde5432" },
      { name: "GoBack Seed Bank", url: "https://gobackseedbank.com" },
    ],
  },
  {
    name: "Island Sweet Skunk",
    type: "Sativa",
    thcRange: "16-19%",
    floweringTime: "8-9 weeks",
    difficulty: "Intermediate",
    environment: "Both",
    tags: ["Feminized", "Indoor", "Outdoor", "Canadian climate friendly"],
    description: "Vancouver Island original with sweet grapefruit flavors. A true Canadian classic bred for BC climate.",
    seedBanks: [
      { name: "Jordan of the Islands", url: "https://jordanoftheislands.com" },
      { name: "True North Seed Bank", url: "https://truenorthseedbank.com" },
    ],
  },
]

const filterOptions = [
  { id: "Autoflower", label: "Autoflower", icon: Clock },
  { id: "Feminized", label: "Feminized", icon: Leaf },
  { id: "Indoor", label: "Indoor", icon: Home },
  { id: "Outdoor", label: "Outdoor", icon: Sun },
  { id: "Short season", label: "Short Season", icon: Snowflake },
  { id: "High THC", label: "High THC", icon: Zap },
  { id: "Beginner-friendly", label: "Beginner Friendly", icon: ThumbsUp },
  { id: "Canadian climate friendly", label: "Canadian Climate", icon: Snowflake },
]

function FilterCheckbox({
  id,
  label,
  icon: Icon,
  checked,
  onCheckedChange,
}: {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}) {
  return (
    <div className="flex items-center space-x-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="border-gray-300 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
      />
      <Label
        htmlFor={id}
        className="flex items-center gap-2 text-sm font-medium cursor-pointer text-gray-700"
      >
        <Icon className="w-4 h-4 text-gray-500" />
        {label}
      </Label>
    </div>
  )
}

function FilterPanel({
  activeFilters,
  toggleFilter,
}: {
  activeFilters: string[]
  toggleFilter: (filter: string) => void
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Filter Strains</h3>
      <div className="space-y-3">
        {filterOptions.map((option) => (
          <FilterCheckbox
            key={option.id}
            id={option.id}
            label={option.label}
            icon={option.icon}
            checked={activeFilters.includes(option.id)}
            onCheckedChange={() => toggleFilter(option.id)}
          />
        ))}
      </div>
    </div>
  )
}

function StrainCard({ strain }: { strain: Strain }) {
  const typeColors = {
    Indica: "bg-purple-100 text-purple-800",
    Sativa: "bg-green-100 text-green-800",
    Hybrid: "bg-blue-100 text-blue-800",
  }

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  }

  const environmentIcons = {
    Indoor: <Home className="w-4 h-4" />,
    Outdoor: <Sun className="w-4 h-4" />,
    Both: (
      <div className="flex gap-1">
        <Home className="w-4 h-4" />
        <Sun className="w-4 h-4" />
      </div>
    ),
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{strain.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge className={typeColors[strain.type]}>{strain.type}</Badge>
                {strain.tags.includes("Autoflower") && (
                  <Badge variant="outline" className="border-amber-300 text-amber-700">
                    Auto
                  </Badge>
                )}
              </div>
            </div>
            <Badge className={difficultyColors[strain.difficulty]}>{strain.difficulty}</Badge>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{strain.description}</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">THC</p>
              <p className="font-semibold text-gray-900">{strain.thcRange}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Flowering</p>
              <p className="font-semibold text-gray-900 text-sm">{strain.floweringTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-gray-500">Environment:</span>
            <div className="flex items-center gap-1 text-gray-700">
              {environmentIcons[strain.environment]}
              <span className="text-sm font-medium">{strain.environment}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {strain.tags
              .filter((tag) => !["Feminized", "Autoflower", "Indoor", "Outdoor"].includes(tag))
              .slice(0, 3)
              .map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
          </div>
        </div>

        <div className="border-t bg-gray-50 p-4">
          <p className="text-xs font-medium text-gray-700 mb-2">Available at:</p>
          <div className="flex flex-wrap gap-2">
            {strain.seedBanks.map((bank) => (
              <Button
                key={bank.name}
                asChild
                variant="outline"
                size="sm"
                className="text-xs h-7 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
              >
                <a href={bank.url} target="_blank" rel="noopener noreferrer">
                  {bank.name}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function StrainsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    )
  }

  const clearFilters = () => {
    setActiveFilters([])
    setSearchQuery("")
  }

  const filteredStrains = useMemo(() => {
    return strains.filter((strain) => {
      const matchesSearch =
        searchQuery === "" ||
        strain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        strain.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        strain.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesFilters =
        activeFilters.length === 0 || activeFilters.every((filter) => strain.tags.includes(filter))

      return matchesSearch && matchesFilters
    })
  }, [searchQuery, activeFilters])

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
            Strain Directory
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Cannabis Strain Database
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect strain for Canadian growing conditions. Filter by type, difficulty, and
            climate compatibility.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-white rounded-xl border p-5">
              <FilterPanel activeFilters={activeFilters} toggleFilter={toggleFilter} />
              {activeFilters.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="mt-4 w-full text-gray-500 hover:text-red-600"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Mobile Filter */}
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search strains by name, type, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden h-12 px-4">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                    {activeFilters.length > 0 && (
                      <Badge className="ml-2 bg-red-600">{activeFilters.length}</Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filter Strains</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterPanel activeFilters={activeFilters} toggleFilter={toggleFilter} />
                    {activeFilters.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="mt-4 w-full text-gray-500 hover:text-red-600"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Clear Filters
                      </Button>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Active Filters Display */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-gray-500">Active filters:</span>
                {activeFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant="secondary"
                    className="bg-red-100 text-red-800 cursor-pointer hover:bg-red-200"
                    onClick={() => toggleFilter(filter)}
                  >
                    {filter}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            )}

            {/* Results Count */}
            <p className="text-sm text-gray-500 mb-4">
              Showing {filteredStrains.length} of {strains.length} strains
            </p>

            {/* Strain Grid */}
            {filteredStrains.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredStrains.map((strain) => (
                  <StrainCard key={strain.name} strain={strain} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <Leaf className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">No strains found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
