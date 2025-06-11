"use client"

import { Button } from "./button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      className="
        animate-slide-in-left
        mb-4 px-6 py-2
        rounded-full
        bg-background/80 backdrop-blur-sm
        hover:bg-accent/80
        hover:shadow-lg
        hover:-translate-x-1
        active:scale-95
        transition-all duration-300
        group
        touch-nones
      "
      onClick={() => router.back()}
    >
      <ChevronLeft className="
        w-5 h-5 mr-2
        group-hover:-translate-x-1
        transition-transform duration-300
      " />
      <span className="font-medium">Back</span>
    </Button>
  )
} 