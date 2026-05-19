"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

export default function LightBoxExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Lightbox</Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Lightbox</DialogTitle>
        </DialogHeader>

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Preview"
          className="w-full rounded-lg"
        />
      </DialogContent>
    </Dialog>
  )
}