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
} from "lucide-react"

export default function FreeSeedsCanadaPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit to a backend
    setFormSubmitted(true)
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
      title: "Apply",
      description: "Tell us about your grow experience and setup",
      icon: FileText,
    },
    {
      step: 2,
      title: "Share Your Details",
      description: "Let us know if you grow indoor or outdoor",
      icon: Home,
    },
    {
      step: 3,
      title: "Get Selected",
      description: "If selected, receive seeds to test",
      icon: Sprout,
    },
    {
      step: 4,
      title: "Provide Feedback",
      description: "Send progress updates, photos, and final results",
      icon: Camera,
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
      question: "Is this available across Canada?",
      answer:
        "Yes, this program is focused on growers located in Canada. We accept applications from all provinces and territories.",
    },
    {
      question: "Do I need to be an expert grower?",
      answer:
        "No, you do not need to be an expert. Experience helps, but newer growers who are committed to learning and providing feedback can still apply.",
    },
    {
      question: "Will everyone receive seeds?",
      answer:
        "No, submitting an application does not guarantee selection. We review each application and select growers based on their experience, setup, and ability to provide quality feedback.",
    },
    {
      question: "What do I need to provide in return?",
      answer:
        "Selected growers are expected to provide regular grow updates, photos throughout the grow cycle, and honest feedback on germination rates, plant vigor, yield, and overall genetics quality.",
    },
    {
      question: "Are indoor and outdoor growers both accepted?",
      answer:
        "Yes, we welcome both indoor and outdoor growers. Different growing environments provide valuable data for Canadian growers in various situations.",
    },
  ]

  return (
    <>
      <head>
        <title>Free Seeds in Canada for Growers | Canada Seed Bank Reviews</title>
        <meta
          name="description"
          content="Apply to test free seeds in Canada. We are looking for indoor and outdoor growers who can provide updates, photos, and honest feedback for seed reviews."
        />
        <meta
          name="keywords"
          content="free seeds Canada, cannabis seed testers Canada, free cannabis seeds for growers, indoor growers Canada, outdoor growers Canada"
        />
      </head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
          <div className="container px-4 mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              Community Grow Program
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Free Seeds in Canada for Growers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are looking for Canadian growers to help test seeds from breeders and seed banks.
              In exchange, selected growers may receive free seeds and be asked to provide honest
              feedback, grow updates, and photos throughout the process.
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
                Apply to Test Seeds
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message Us
                </Button>
              </Link>
            </div>
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
              <h2 className="text-3xl font-bold mb-6">Why We Are Doing This</h2>
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

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!formData.canProvideUpdates}
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Community Grow Logs Coming Soon */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
                <CardContent className="py-8">
                  <Leaf className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Community Grow Logs Coming Soon
                  </h3>
                  <p className="text-gray-500">
                    As growers complete their tests, we will be adding real grow logs and results
                    to the site. Check back for updates from the community.
                  </p>
                </CardContent>
              </Card>
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
