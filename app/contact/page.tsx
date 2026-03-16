import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Clock, HelpCircle, Building, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Canada Seed Bank Reviews",
  description: "Get in touch with Canada Seed Bank Reviews. Questions about seed banks, growing advice, or partnership inquiries - we're here to help Canadian growers.",
  keywords: "contact Canada Seed Bank Reviews, cannabis seed bank help, growing questions Canada",
}

const contactReasons = [
  {
    icon: HelpCircle,
    title: "General Questions",
    description: "Questions about seed banks, growing, or our reviews",
    response: "1-2 business days",
  },
  {
    icon: AlertCircle,
    title: "Report an Issue",
    description: "Report incorrect information or update a seed bank listing",
    response: "24-48 hours",
  },
  {
    icon: Building,
    title: "Business Inquiries",
    description: "Partnerships, advertising, or seed bank listing requests",
    response: "2-3 business days",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-slate-700">
              <Mail className="w-3 h-3 mr-1" />
              Contact
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have a question about seed banks or need help with your grow? 
              We're here to help fellow Canadian growers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {contactReasons.map((reason) => (
              <Card key={reason.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{reason.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {reason.response}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy. 
                  We'll never share your information with third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h2>
            <p className="text-muted-foreground mb-6">
              Check our FAQ page for answers to common questions about buying seeds, 
              growing in Canada, and using our site.
            </p>
            <Button asChild variant="outline">
              <Link href="/faq">View Frequently Asked Questions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Note About Seed Bank Issues */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Note</h3>
                <p className="text-amber-700 text-sm">
                  We are an independent review site and not affiliated with any seed bank. 
                  If you have issues with an order, please contact the seed bank directly. 
                  We can help point you in the right direction, but we cannot resolve order 
                  disputes or provide refunds on behalf of seed banks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
