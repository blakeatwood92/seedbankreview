"use client"

import Link from "next/link"
import { X, Flame, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export function PromoBanner420() {
  const [isVisible, setIsVisible] = useState(true)
  const [daysUntil420, setDaysUntil420] = useState(0)

  useEffect(() => {
    // Calculate days until April 20, 2026
    const today = new Date()
    const target = new Date(2026, 3, 20) // April 20, 2026
    const diffTime = target.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysUntil420(diffDays > 0 ? diffDays : 0)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-sm md:text-base">
          <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
          <span className="font-medium">
            {daysUntil420 > 0 ? (
              <>
                <span className="font-bold">{daysUntil420} days</span> until 420!
              </>
            ) : (
              <span className="font-bold">420 Deals are LIVE!</span>
            )}
          </span>
          <span className="hidden sm:inline">—</span>
          <span className="hidden sm:inline">Seed bank deals coming soon</span>
          <Link
            href="/420-seed-bank-deals-canada"
            className="inline-flex items-center gap-1 bg-white text-green-700 px-3 py-1 rounded-full font-semibold text-sm hover:bg-green-50 transition-colors ml-2"
          >
            View Deals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-green-700/50 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
