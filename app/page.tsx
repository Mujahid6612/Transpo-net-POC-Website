import { Card } from "@/components/ui/card"
import Link from "next/link"
import { QrCode, Phone, MessageSquare, Car } from "lucide-react"

const options = [
  {
    title: "Scan QR",
    icon: QrCode,
    href: "/qr-scan",
    description: "Scan QR Code"
  },
  {
    title: "Make Call",
    icon: Phone,
    href: "/call",
    description: "Make a call"
  },
  {
    title: "Send Message",
    icon: MessageSquare,
    href: "/message",
    description: "Send a message"
  },
  {
    title: "Ride Offer",
    icon: Car,
    href: "/ride",
    description: "Create ride offer"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Network App</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option, index) => {
            const Icon = option.icon
            return (
              <Link href={option.href} key={option.title}>
                <Card className="p-6 hover-scale hover:bg-accent/50 transition-all cursor-pointer animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <h2 className="text-xl font-medium">{option.title}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
