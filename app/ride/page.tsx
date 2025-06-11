"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Car } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

export default function RideOfferPage() {
  const [formData, setFormData] = useState({
    pickup: "",
    destination: "",
    date: "",
    time: "",
    seats: "",
    price: "",
    carType: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting ride offer:", formData)
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-8">Ride Offer</h1>
        
        <Card className="p-6 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2 hover-scale">
                <Label htmlFor="pickup">Pickup Location</Label>
                <Input
                  id="pickup"
                  name="pickup"
                  placeholder="Enter pickup location"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 hover-scale">
                <Label htmlFor="destination">Destination</Label>
                <Input
                  id="destination"
                  name="destination"
                  placeholder="Enter destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 hover-scale">
                <Label htmlFor="carType">Car Type</Label>
                <Input
                  id="carType"
                  name="carType"
                  placeholder="Enter car type (e.g., Sedan, SUV)"
                  value={formData.carType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 hover-scale">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2 hover-scale">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 hover-scale">
                  <Label htmlFor="seats">Available Seats</Label>
                  <Input
                    id="seats"
                    name="seats"
                    type="number"
                    min="1"
                    placeholder="Number of seats"
                    value={formData.seats}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2 hover-scale">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 hover-scale"
              disabled={Object.values(formData).some(value => !value)}
            >
              <Car className="w-5 h-5 mr-2" />
              Send Ride Offer
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
} 