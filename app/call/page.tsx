"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

export default function CallPage() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle call functionality
    console.log("Calling:", phoneNumber)
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-md mx-auto">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-8">Enter telephone number to call</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in">
          <div className="space-y-2">
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="text-lg h-12 hover-scale"
              pattern="[0-9]*"
              inputMode="numeric"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 hover-scale"
            disabled={!phoneNumber}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call
          </Button>
        </form>
      </div>
    </div>
  )
} 