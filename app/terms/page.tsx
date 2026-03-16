import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Canada Seed Bank Reviews",
  description: "Terms of Service for Canada Seed Bank Reviews. Read our terms and conditions for using our website.",
  keywords: "terms of service, terms and conditions, Canada Seed Bank Reviews",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-slate-700">
              <FileText className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-slate-300">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Canada Seed Bank Reviews (canadaseedbankreviews.ca), you agree 
              to be bound by these Terms of Service. If you do not agree to these terms, please 
              do not use our website.
            </p>

            <h2>Age Requirement</h2>
            <p>
              You must be at least 19 years of age (or the legal age for cannabis in your province) 
              to access and use this website. By using this site, you represent and warrant that 
              you meet this age requirement.
            </p>

            <h2>Purpose of Website</h2>
            <p>
              Canada Seed Bank Reviews is an informational website that provides reviews, comparisons, 
              and educational content about cannabis seed banks and home growing. We are:
            </p>
            <ul>
              <li>NOT a seed bank or retailer</li>
              <li>NOT affiliated with any government agency</li>
              <li>NOT providing legal, medical, or professional advice</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The information provided on this website is for general informational purposes only. 
              While we strive to provide accurate and up-to-date information:
            </p>
            <ul>
              <li>We make no warranties about the completeness, reliability, or accuracy of this information</li>
              <li>Reviews and ratings are based on aggregated user experiences and our research, and may not reflect your experience</li>
              <li>Seed bank policies, pricing, and availability may change without notice</li>
              <li>Growing results may vary based on numerous factors beyond our control</li>
            </ul>

            <h2>Affiliate Links and Third-Party Content</h2>
            <p>
              Our website contains affiliate links to third-party seed banks and retailers. When you 
              click on these links and make a purchase:
            </p>
            <ul>
              <li>We may earn a commission at no additional cost to you</li>
              <li>You will be redirected to third-party websites with their own terms and privacy policies</li>
              <li>We are not responsible for the products, services, or practices of these third parties</li>
              <li>Any transactions you make are between you and the seed bank</li>
            </ul>

            <h2>User Responsibilities</h2>
            <p>By using this website, you agree to:</p>
            <ul>
              <li>Comply with all applicable federal, provincial, and local laws regarding cannabis</li>
              <li>Not use our content for illegal purposes</li>
              <li>Verify that home growing is legal in your province before purchasing seeds</li>
              <li>Not hold us responsible for your purchasing decisions or growing outcomes</li>
            </ul>

            <h2>Legal Compliance</h2>
            <p>
              Cannabis laws vary by province and country. It is your responsibility to understand 
              and comply with the laws in your jurisdiction. Home cultivation is prohibited in 
              Manitoba and Quebec. Some municipalities may have additional restrictions.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is our 
              property or the property of our content suppliers and is protected by Canadian and 
              international copyright laws. You may not reproduce, distribute, or create derivative 
              works without our written permission.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Canada Seed Bank Reviews and its operators 
              shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages arising from your use of this website or reliance on any information provided.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Canada Seed Bank Reviews and its operators 
              from any claims, damages, or expenses arising from your use of the website or violation 
              of these terms.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting to the website. Your continued use of the website 
              after any changes constitutes acceptance of the new terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the 
              laws of Canada, without regard to conflicts of law principles.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about these Terms of Service, please <Link href="/contact" className="text-green-600 hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
