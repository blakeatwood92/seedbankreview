"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Leaf,
  Sun,
  Home,
  Camera,
  MessageSquare,
  CheckCircle,
  Users,
  Send,
  ArrowRight,
  Sprout,
  ThermometerSun,
  MapPin,
  Clock,
  FileText,
  Building2,
  BookOpen,
  Snowflake,
  Zap,
  Calendar,
  ExternalLink,
} from "lucide-react"

export default function FreeSeedsCanadaPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    province: "",
    growType: "",
    experience: "",
    setup: "",
    previousStrains: "",
    photoLink: "",
    whyJoin: "",
    canProvideUpdates: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      const response = await fetch('/api/free-seeds-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit application')
      }
      
      setFormSubmitted(true)
    } catch (error) {
      setSubmitError("There was an error submitting your application. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ]

  const howItWorks = [
    {
      step: 1,
      title: "Growers Apply",
      description: "Canadian growers submit applications with their experience and setup details",
      icon: FileText,
    },
    {
      step: 2,
      title: "Breeders Reach Out",
      description: "Breeders and seed banks can submit genetics for community testing",
      icon: Building2,
    },
    {
      step: 3,
      title: "Community Testing",
      description: "Selected growers may be featured in grow journals with real feedback",
      icon: Sprout,
    },
    {
      step: 4,
      title: "Honest Updates",
      description: "Photos, progress updates, and honest feedback help build better reviews",
      icon: Camera,
    },
  ]

  const growJournalCategories = [
    {
      title: "Indoor Grow Journals",
      description: "Tent grows, hydro setups, and controlled environment results",
      icon: Home,
      color: "purple",
      status: "Coming Soon",
    },
    {
      title: "Outdoor Grow Journals",
      description: "Full season Canadian outdoor grows and climate testing",
      icon: Sun,
      color: "amber",
      status: "Coming Soon",
    },
    {
      title: "Autoflower Tests",
      description: "Fast finishing autoflower strain testing and results",
      icon: Zap,
      color: "blue",
      status: "Coming Soon",
    },
    {
      title: "Canadian Climate Results",
      description: "Regional performance data from across Canada",
      icon: Snowflake,
      color: "teal",
      status: "Coming Soon",
    },
  ]

  const recentUpdates = [
    {
      type: "grower",
      title: "Grower Applications Open",
      description: "We are accepting applications from Canadian growers for the 2026 season",
      date: "March 2026",
    },
    {
      type: "breeder",
      title: "Breeder Submissions Welcome",
      description: "Seed banks and breeders can submit genetics for community testing",
      date: "Ongoing",
    },
    {
      type: "journal",
      title: "Grow Journals Coming Soon",
      description: "Community grow logs will be published as testing progresses",
      date: "Summer 2026",
    },
  ]

  const requirements = [
    "Must be located in Canada",
    "Must be serious about completing the grow",
    "Must be willing to share grow updates",
    "Must be able to send photos during the grow",
    "Must provide honest feedback on genetics, germination, vigor, and final results",
    "Indoor and outdoor growers are both welcome",
    "Previous grow experience is preferred, but newer growers can still apply",
  ]

  const applicationQuestions = [
    "How many years have you been growing?",
    "Do you grow indoor or outdoor?",
    "What is your setup?",
    "What strains have you grown before?",
    "Can you share photos from previous grows?",
    "When is your next grow starting?",
    "Can you commit to sending updates and pictures?",
  ]

  const faqs = [
    {
      question: "How can growers get free seeds in Canada?",
      answer:
        "Growers can apply through our community seed testing program. We connect Canadian growers with breeders and seed banks who want real-world feedback. Selected applicants may receive free cannabis seeds in exchange for providing grow updates, photos, and honest reviews.",
    },
    {
      question: "Do seed banks offer free seeds in Canada?",
      answer:
        "Yes, many seed banks offer free seeds with orders or through promotional programs. Our community testing program works directly with breeders and seed banks who want to get their genetics tested by Canadian growers in real growing conditions.",
    },
    {
      question: "Can indoor and outdoor growers both apply?",
      answer:
        "Yes, we welcome both indoor and outdoor growers. Different growing environments provide valuable data for Canadian growers. Indoor growers can test year-round, while outdoor growers provide crucial data on how strains perform in Canadian climates and short seasons.",
    },
    {
      question: "Do I need grow experience to join?",
      answer:
        "Experience is helpful but not required. We look for growers who are committed to providing quality feedback, regular updates, and honest reviews. Newer growers who are dedicated to learning and documenting their grows can still apply.",
    },
    {
      question: "Will every applicant receive seeds?",
      answer:
        "No, submitting an application does not guarantee you will receive free seeds. We review all applications and select growers based on their experience, setup, location, and ability to provide thorough feedback and documentation.",
    },
    {
      question: "Can breeders and seed banks submit genetics for testing?",
      answer:
        "Yes, we welcome submissions from breeders and seed banks who want their genetics tested by the Canadian growing community. This provides real-world feedback, exposure, and potential reviews on our platform.",
    },
    {
      question: "What is the Canadian grower community?",
      answer:
        "Our Canadian grower community is a network of home growers across all provinces who participate in seed testing, share grow journals, and provide honest feedback on cannabis genetics. This helps other Canadian growers make informed decisions about which seeds to buy.",
    },
  ]

  return (
    <>
      <head>
        <title>Free Seeds in Canada | Canada Seed Bank Reviews</title>
        <meta
          name="description"
          content="Explore free seeds in Canada, grower applications, breeder submissions, and community grow journals at Canada Seed Bank Reviews. Join the Canadian grower community."
        />
        <meta
          name="keywords"
          content="free seeds Canada, free cannabis seeds Canada, Canadian grower community, seed tester Canada, breeder submissions Canada, grow journals Canada"
        />
      </head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
          <div className="container px-4 mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              Canadian Grower Community
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Free Seeds in Canada
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This page is for Canadian growers, breeders, and seed banks who want to participate in 
              community testing, grow journals, and real-world feedback. Join our network of growers 
              helping to build better seed reviews for the Canadian cannabis community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() =>
                  document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Sprout className="w-5 h-5 mr-2" />
                Apply as a Grower
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document.getElementById("breeder-section")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Building2 className="w-5 h-5 mr-2" />
                Submit as a Breeder
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Last updated: March 2026
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item) => (
                <Card key={item.step} className="text-center border-2 hover:border-green-200 transition-colors">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-sm font-medium text-green-600 mb-2">Step {item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Requirements</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6">
                    To participate in our seed testing program, growers should meet the following
                    criteria:
                  </p>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We May Ask Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What We May Ask Applicants</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {applicationQuestions.map((question, index) => (
                <Card key={index} className="bg-green-50 border-green-100">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm">{question}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Are Doing This */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-6">Building the Canadian Grower Community</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  We are incredibly thankful to the breeders and seed banks that have sent seeds for
                  review. The reality is that with the amount of seeds we currently have, it would
                  take years to test everything ourselves.
                </p>
                <p>
                  That is why we are opening this up to the community. By working with growers across
                  Canada, we can gather real grow logs, photos, and honest feedback from different
                  setups and climates. This helps us build better, more useful reviews for Canadian
                  growers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breeder and Seed Bank Section */}
        <section id="breeder-section" className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Breeders and Seed Banks</h2>
                <p className="text-gray-600 text-lg">
                  Are you a breeder or seed bank looking for exposure, community feedback, and review opportunities?
                </p>
              </div>
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We work with breeders and seed banks who want their genetics tested by real Canadian growers 
                      in real growing conditions. This provides valuable feedback and potential exposure through:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Community grow journals featuring your genetics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Honest feedback from indoor and outdoor growers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Canadian climate testing data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Review opportunities on our platform</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Link href="/contact">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact Us About Submissions
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Indoor and Outdoor Growers Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Who Can Apply</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Indoor Growers */}
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-purple-900">Indoor Growers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Tent grows
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Hydro or soil
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Controlled environments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      Autoflower and photoperiod testing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Outdoor Growers */}
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Sun className="w-6 h-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl text-amber-900">Outdoor Growers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      Full season grows
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      Canadian climate testing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      Short season feedback
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                      Regional performance insights
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Apply to Test Seeds</h2>

              {formSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-8 pb-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted</h3>
                    <p className="text-green-700">
                      Thank you for your interest. We will review your application and be in touch if
                      you are selected for the seed testing program.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="province">Province *</Label>
                          <Select
                            value={formData.province}
                            onValueChange={(value) => setFormData({ ...formData, province: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select province" />
                            </SelectTrigger>
                            <SelectContent>
                              {provinces.map((province) => (
                                <SelectItem key={province} value={province}>
                                  {province}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="growType">Indoor or Outdoor *</Label>
                          <Select
                            value={formData.growType}
                            onValueChange={(value) => setFormData({ ...formData, growType: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select grow type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="indoor">Indoor</SelectItem>
                              <SelectItem value="outdoor">Outdoor</SelectItem>
                              <SelectItem value="both">Both</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience</Label>
                          <Select
                            value={formData.experience}
                            onValueChange={(value) => setFormData({ ...formData, experience: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1">Less than 1 year</SelectItem>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5+">5+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="setup">Grow Setup</Label>
                          <Input
                            id="setup"
                            value={formData.setup}
                            onChange={(e) => setFormData({ ...formData, setup: e.target.value })}
                            placeholder="e.g., 4x4 tent, LED lights, soil"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="previousStrains">Previous Strains Grown</Label>
                        <Input
                          id="previousStrains"
                          value={formData.previousStrains}
                          onChange={(e) =>
                            setFormData({ ...formData, previousStrains: e.target.value })
                          }
                          placeholder="e.g., Northern Lights, Blue Dream, White Widow"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="photoLink">Link to Grow Photos or Social Media</Label>
                        <Input
                          id="photoLink"
                          value={formData.photoLink}
                          onChange={(e) => setFormData({ ...formData, photoLink: e.target.value })}
                          placeholder="Instagram, Imgur, or other link"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="whyJoin">Why Do You Want to Join? *</Label>
                        <Textarea
                          id="whyJoin"
                          required
                          value={formData.whyJoin}
                          onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                          placeholder="Tell us why you're interested in testing seeds and what you can contribute to the community..."
                          rows={4}
                        />
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="canProvideUpdates"
                          checked={formData.canProvideUpdates}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, canProvideUpdates: checked as boolean })
                          }
                        />
                        <Label htmlFor="canProvideUpdates" className="text-sm text-gray-600 leading-relaxed">
                          I confirm that I can provide regular grow updates, photos throughout the
                          grow cycle, and honest feedback on the seeds I receive. *
                        </Label>
                      </div>

                      <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
                        <p>
                          <strong>Note:</strong> Submitting this application does not guarantee that
                          you will receive free seeds. We review all applications and select growers
                          based on their experience, setup, and ability to provide quality feedback.
                        </p>
                      </div>

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-sm text-red-700">
                          {submitError}
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!formData.canProvideUpdates || isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Community Grow Journals */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Community Grow Journals</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                As growers complete their tests, we will be publishing real grow journals with photos, 
                updates, and results. These journals help Canadian growers make informed decisions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {growJournalCategories.map((category, index) => {
                const colorClasses = {
                  purple: "border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50",
                  amber: "border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50",
                  blue: "border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50",
                  teal: "border-teal-200 bg-gradient-to-br from-teal-50 to-green-50",
                }
                const iconColorClasses = {
                  purple: "bg-purple-100 text-purple-600",
                  amber: "bg-amber-100 text-amber-600",
                  blue: "bg-blue-100 text-blue-600",
                  teal: "bg-teal-100 text-teal-600",
                }
                return (
                  <Card key={index} className={`border-2 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {category.status}
                      </Badge>
                      <h3 className="font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Recent Updates Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Recent Updates</h2>
                <p className="text-gray-600">
                  Stay informed about open opportunities and community news
                </p>
              </div>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          update.type === "grower" ? "bg-green-100" : 
                          update.type === "breeder" ? "bg-blue-100" : "bg-amber-100"
                        }`}>
                          {update.type === "grower" && <Sprout className="w-5 h-5 text-green-600" />}
                          {update.type === "breeder" && <Building2 className="w-5 h-5 text-blue-600" />}
                          {update.type === "journal" && <BookOpen className="w-5 h-5 text-amber-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold">{update.title}</h3>
                            <span className="text-sm text-gray-500">{update.date}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{update.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-white rounded-lg border px-4"
                  >
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Want to Test Free Seeds in Canada?
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              If you are a Canadian grower who can provide updates, pictures, and honest feedback,
              we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-green-700 hover:bg-green-50"
                onClick={() =>
                  document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
