'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { BackButton } from "@/components/ui/back-button"
import axios from 'axios'

export default function QRScanPage() {
  const [qrData, setQrData] = useState<{ sessionId: string; qrCodeImg: string } | null>({
    "sessionId": "b352f11d-de85-4d5c-8323-9fb5959efe43",
    "qrCodeImg": "data:image/png;base64,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"
}
)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const BASE_URL = "https://3159-39-45-98-134.ngrok-free.app"

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        setIsLoading(true)
        setError(null)
        setQrData({
          "sessionId": "f888684c-d274-49c0-9658-c8364808fd43",
          "qrCodeImg": "data:image/png;base64,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"
        }
        )
        const response = await axios.get(`${BASE_URL}/api/qr-code`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })

        setQrData(response.data)
      } catch (error) {
        console.error('Error fetching QR code:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch QR code')
        setQrData({
          "sessionId": "f888684c-d274-49c0-9658-c8364808fd43",
          "qrCodeImg": "data:image/png;base64,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"
        }
        )
      } finally {
        setIsLoading(false)
      }
    }

    // fetchQRCode()
  }, [])

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <BackButton />
        <h1 className="text-2xl font-semibold mb-8">Link Network Companion App</h1>

        <Card className="animate-scale-in">
          <CardContent className="flex flex-col items-center gap-6 p-6">
            <p className="text-muted-foreground text-center">
              Scan this QR code to link the app to your device
            </p>

            <div className="bg-white p-4 rounded-lg hover-scale">
              {isLoading ? (
                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-2">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-muted-foreground">Loading QR code...</p>
                </div>
              ) : error ? (
                <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-2">
                  <p className="text-sm text-red-500 text-center">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                  >
                    Retry
                  </button>
                </div>
              ) : qrData ? (
                <img
                  src={qrData.qrCodeImg}
                  alt="QR Code"
                  className="w-[200px] h-[200px]"
                />
              ) : null}
            </div>

            <div className="text-sm text-muted-foreground text-center">
              <p>Lorem ipsum is simply dummy text of the printing</p>
              <p>Lorem ipsum is simply dummy text of the printing</p>
              <p>Lorem ipsum is simply dummy text of the printing</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 