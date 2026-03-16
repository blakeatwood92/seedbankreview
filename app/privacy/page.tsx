import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Canada Seed Bank Reviews",
  description: "Privacy Policy for Canada Seed Bank Reviews. Learn how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, Canada Seed Bank Reviews",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-slate-700">
              <Shield className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-slate-300">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <h2>Introduction</h2>
            <p>
              Canada Seed Bank Reviews ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website canadaseedbankreviews.ca.
            </p>

            <h2>Information We Collect</h2>
            
            <h3>Information You Provide</h3>
            <p>We may collect information you provide directly to us, including:</p>
            <ul>
              <li>Contact information (name, email address) when you contact us</li>
              <li>Any other information you choose to provide in communications</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information, including:</p>
            <ul>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and general location</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and communications</li>
              <li>Analyze website usage to improve our content and user experience</li>
              <li>Monitor and analyze trends and usage patterns</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your 
              browsing activities. These technologies help us analyze website traffic, remember 
              your preferences, and deliver relevant content.
            </p>
            <p>We use the following types of cookies:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site (Google Analytics)</li>
              <li><strong>Advertising cookies:</strong> Used to deliver relevant advertisements and track ad campaign performance</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>We may use third-party services that collect and process data, including:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and usage tracking</li>
              <li><strong>Affiliate Networks:</strong> When you click affiliate links, third-party seed banks may collect information according to their own privacy policies</li>
            </ul>

            <h2>Affiliate Disclosure</h2>
            <p>
              Our website contains affiliate links. When you click on these links and make a purchase, 
              we may earn a commission. The seed banks you visit through our links have their own 
              privacy policies governing how they collect and use your data.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the Internet or electronic storage 
              is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for individuals under the age of 19 (or the legal age for 
              cannabis in your province). We do not knowingly collect personal information from minors.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please <Link href="/contact" className="text-green-600 hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
