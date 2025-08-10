import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 bg-red-600">
      <div className="container px-4 mx-auto">
        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur">
          <CardContent className="p-8 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Stay Updated on Canadian Cannabis</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest cannabis reviews, exclusive deals, and growing tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">No spam, unsubscribe anytime. We respect your privacy.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
