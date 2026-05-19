"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function StackForm() {
  const [status, setStatus] = React.useState(true)

  return (
    <div className="flex min-h-screen justify-center bg-muted/30 w-full">
      <div className="w-full flex flex-col justify-spacebetween">
        <div className="space-y-5 p-4">
          {/* Stack Name */}
          <div className="space-y-2">
            <Label htmlFor="stack-name">Stack Name</Label>

            <Input
              id="stack-name"
              placeholder="ATF"
              defaultValue="ATF"
            />
          </div>

          {/* Stack Title */}
          <div className="space-y-2">
            <Label htmlFor="stack-title">Stack Title</Label>

            <Input
              id="stack-title"
              placeholder="ATF Display"
              defaultValue="ATF Display"
            />
          </div>

          {/* Stack Template */}
          <div className="space-y-2">
            <Label>Stack Template</Label>

            <Select defaultValue="atf-display">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Template" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="atf-display">
                  ATF Display
                </SelectItem>

                <SelectItem value="hero-banner">
                  Hero Banner
                </SelectItem>

                <SelectItem value="card-layout">
                  Card Layout
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sorter ID */}
          <div className="space-y-2">
            <Label>Sorter ID</Label>

            <Select defaultValue="technology-atf-135">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Sorter" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="technology-atf-135">
                  Technology ATF: 135
                </SelectItem>

                <SelectItem value="marketing-atf-201">
                  Marketing ATF: 201
                </SelectItem>

                <SelectItem value="sales-atf-301">
                  Sales ATF: 301
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label>Status</Label>

            <div className="flex items-center gap-2 rounded-md border px-3 py-2 w-fit">
              <Switch className="data-[state=checked]:bg-green-500"
                checked={status}
                onCheckedChange={setStatus}
              />

              <span className="text-sm text-muted-foreground">
                {status ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t p-4">
          <Button variant="outline">
            Cancel
          </Button>

          <Button>
            Update
          </Button>
        </div>
      </div>
    </div>
  )
}