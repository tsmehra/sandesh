"use client"

import { Upload, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TemplatePreviewCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-[300px] rounded-xl border shadow-sm overflow-hidden">
        <CardHeader className="border-b bg-muted/30 px-4 py-3">
          <CardTitle className="text-base font-semibold text-slate-700">
            Template Design Preview
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          {/* Preview Area */}
          <div className="h-[180px] w-full bg-gray-200" />

          {/* Footer Actions */}
          <div className="flex items-center justify-between gap-3 p-4 bg-muted/20">
            <Button
              variant="outline"
              className="flex-1 h-10 rounded-xl text-sm font-medium"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Image
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-xl"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}