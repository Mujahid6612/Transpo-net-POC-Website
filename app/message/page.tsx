"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageSquare } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

export default function MessagePage() {
  const [formData, setFormData] = useState({
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sending message:", formData)
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-8">Enter a Message</h1>
        
        <Card className="p-6 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2 hover-scale">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter message subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="transition-all hover:border-primary"
                />
              </div>

              <div className="space-y-2 hover-scale">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[200px] p-4 rounded-md border border-input bg-transparent resize-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all hover:border-primary"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 hover-scale"
              disabled={!formData.subject.trim() || !formData.message.trim()}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
} 