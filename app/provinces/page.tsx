import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Home, Leaf, AlertTriangle } from "lucide-react"

export default function ProvincesPage() {
  const provinces = [
    {
      name: "British Columbia",
      abbreviation: "BC",
      flag: "🏴󠁣󠁡󠁢󠁣󠁿", // BC flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. No height restrictions.",
      climate: "Mild coastal climate, ideal for outdoor growing",
      recommendedStrains: ["BC Bud varieties", "Outdoor-friendly strains"],
    },
    {
      name: "Alberta",
      abbreviation: "AB",
      flag: "🏴󠁣󠁡󠁡󠁢󠁿", // Alberta flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 18,
      notes: "Indoor growing only in some municipalities. Check local bylaws.",
      climate: "Continental climate with cold winters",
      recommendedStrains: ["Indoor varieties", "Cold-resistant genetics"],
    },
    {
      name: "Saskatchewan",
      abbreviation: "SK",
      flag: "🏴󠁣󠁡󠁳󠁫󠁿", // Saskatchewan flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Must be out of public view.",
      climate: "Prairie climate with short growing season",
      recommendedStrains: ["Fast-finishing strains", "Autoflowering varieties"],
    },
    {
      name: "Manitoba",
      abbreviation: "MB",
      flag: "🏴󠁣󠁡󠁭󠁢󠁿", // Manitoba flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Indoor growing only. Outdoor cultivation prohibited.",
      climate: "Continental climate, indoor growing required",
      recommendedStrains: ["Indoor varieties", "Compact strains"],
    },
    {
      name: "Ontario",
      abbreviation: "ON",
      flag: "🏴󠁣󠁡󠁯󠁮󠁿", // Ontario flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Must be out of public view.",
      climate: "Four-season climate, good for outdoor growing",
      recommendedStrains: ["Photoperiod strains", "Sativa-dominant hybrids"],
    },
    {
      name: "Quebec",
      abbreviation: "QC",
      flag: "🏴󠁣󠁡󠁱󠁣󠁿", // Quebec flag
      personalGrow: "0 plants (prohibited)",
      publicPossession: "30g dried cannabis",
      homePossession: "150g dried cannabis",
      minAge: 21,
      notes: "Home cultivation is prohibited in Quebec.",
      climate: "Four-season climate with cold winters",
      recommendedStrains: ["N/A - Growing prohibited"],
    },
    {
      name: "New Brunswick",
      abbreviation: "NB",
      flag: "🏴󠁣󠁡󠁮󠁢󠁿", // New Brunswick flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Indoor growing only. Must be locked and secure.",
      climate: "Maritime climate, indoor growing recommended",
      recommendedStrains: ["Indoor varieties", "Mold-resistant strains"],
    },
    {
      name: "Nova Scotia",
      abbreviation: "NS",
      flag: "🏴󠁣󠁡󠁮󠁳󠁿", // Nova Scotia flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Must be secure and out of public view.",
      climate: "Maritime climate with high humidity",
      recommendedStrains: ["Mold-resistant varieties", "Maritime genetics"],
    },
    {
      name: "Prince Edward Island",
      abbreviation: "PE",
      flag: "🏴󠁣󠁡󠁰󠁥󠁿", // PEI flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Must be secure and not visible from public areas.",
      climate: "Maritime climate, moderate growing season",
      recommendedStrains: ["Medium-season varieties", "Wind-resistant strains"],
    },
    {
      name: "Newfoundland and Labrador",
      abbreviation: "NL",
      flag: "🏴󠁣󠁡󠁮󠁬󠁿", // Newfoundland flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Must be secure and out of public view.",
      climate: "Cool maritime climate, short growing season",
      recommendedStrains: ["Fast-finishing varieties", "Cold-tolerant genetics"],
    },
    {
      name: "Yukon",
      abbreviation: "YT",
      flag: "🏴󠁣󠁡󠁹󠁴󠁿", // Yukon flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Extreme climate considerations.",
      climate: "Subarctic climate, very short growing season",
      recommendedStrains: ["Autoflowering varieties", "Extreme cold-resistant"],
    },
    {
      name: "Northwest Territories",
      abbreviation: "NT",
      flag: "🏴󠁣󠁡󠁮󠁴󠁿", // NWT flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Extreme climate considerations.",
      climate: "Subarctic climate, very short growing season",
      recommendedStrains: ["Autoflowering varieties", "Extreme cold-resistant"],
    },
    {
      name: "Nunavut",
      abbreviation: "NU",
      flag: "🏴󠁣󠁡󠁮󠁵󠁿", // Nunavut flag
      personalGrow: "4 plants per household",
      publicPossession: "30g dried cannabis",
      homePossession: "No limit",
      minAge: 19,
      notes: "Can grow outdoors. Extreme Arctic climate considerations.",
      climate: "Arctic climate, indoor growing strongly recommended",
      recommendedStrains: ["Indoor varieties only", "Compact autoflowers"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-red-50 to-red-100 py-16">
        <div className="container px-4 mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
            🇨🇦 Provincial Cannabis Laws
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cannabis Growing Laws by Province</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to cannabis cultivation laws, plant limits, and growing recommendations for every Canadian
            province and territory.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto py-16">
        <div className="mb-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Legal Disclaimer</h3>
              <p className="text-yellow-700 text-sm">
                Cannabis laws can change and may vary by municipality. Always check your local and provincial
                regulations before growing cannabis. This information is for educational purposes only and was last
                updated in 2024.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provinces.map((province) => (
            <Card
              key={province.abbreviation}
              className={`hover:shadow-lg transition-shadow ${
                province.personalGrow === "0 plants (prohibited)" ? "border-red-200 bg-red-50" : "border-green-200"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{province.flag}</span>
                    <CardTitle className="text-lg">{province.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {province.abbreviation}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Age: {province.minAge}+</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-4 h-4 text-red-600" />
                    <span className="font-medium text-sm">Personal Growing</span>
                  </div>
                  <p
                    className={`text-sm ${
                      province.personalGrow === "0 plants (prohibited)" ? "text-red-600 font-medium" : "text-gray-600"
                    }`}
                  >
                    {province.personalGrow}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-red-600" />
                    <span className="font-medium text-sm">Possession Limits</span>
                  </div>
                  <p className="text-sm text-gray-600">Public: {province.publicPossession}</p>
                  <p className="text-sm text-gray-600">Home: {province.homePossession}</p>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Growing Notes</h4>
                  <p className="text-xs text-gray-600">{province.notes}</p>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Climate & Recommendations</h4>
                  <p className="text-xs text-gray-600 mb-2">{province.climate}</p>
                  <div className="space-y-1">
                    {province.recommendedStrains.map((strain) => (
                      <Badge key={strain} variant="outline" className="text-xs mr-1 mb-1">
                        {strain}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-red-100">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Points to Remember</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Federal Limits (Canada-wide)</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Maximum 4 plants per household (not per person)</li>
                <li>• Plants must be grown from licensed seeds or seedlings</li>
                <li>• Maximum plant height varies by province</li>
                <li>• Must be grown in primary residence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-red-600">Provincial Variations</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quebec prohibits home cultivation entirely</li>
                <li>• Manitoba allows indoor growing only</li>
                <li>• Some municipalities have additional restrictions</li>
                <li>• Always check local bylaws before growing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
