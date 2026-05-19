"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import StackForm from "./editstack"

export default function SheetDemo() {
  return (
    <Sheet>
      {/* Button */}
      <SheetTrigger asChild>
        <Button>Save Changes</Button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent className="gap-0 justify-flexstart">
        <SheetHeader className="pl-0 pr-0">
          <SheetTitle className="border-b border-gray-300 pb-4 pl-4 pr-0">Add/Edit Stack</SheetTitle>
        </SheetHeader>
        <div>
          <StackForm />
        </div>
      </SheetContent>
    </Sheet>
  )
}