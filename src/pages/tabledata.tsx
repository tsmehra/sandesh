"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pencil } from "lucide-react"
import SheetDemo from "./sheetmodel"

const stackList = [
  {
    name: "ATF",
    title: "ATF Display",
    sorterId: 118,
    template: "section_atf",
    status: "Enabled",
  },
  {
    name: "BTF",
    title: "BTF Display",
    sorterId: 125,
    template: "section_btf",
    status: "Enabled",
  },
]

export default function StackListTable() {
  return (
    <div className="w-full mt-6">
      <Card className="rounded-xl border shadow-sm">
        <CardHeader className="border-b pb-4">
          <CardTitle className="text-base font-semibold">
            Stack List
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Sorter ID</TableHead>
                  <TableHead>Template File Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {stackList.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">
                      {item.name}
                    </TableCell>

                    <TableCell>{item.title}</TableCell>

                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span>{item.sorterId}</span>
                        
                      </div>
                    </TableCell>

                    <TableCell>{item.template}</TableCell>

                    <TableCell>
                      <Badge
                        variant="outline"
                        className="border-green-200 bg-green-50 text-green-700 hover:bg-green-50"
                      >
                        {item.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <div className="border-t border-border pt-4 mt-10 flex justify-between">
        <Button variant="ghost" className="border border-gray-300 shadow-md hover:shadow-lg">Discard Changes</Button>
        {/* <Button>Save Changespp</Button> */}
        <SheetDemo />
      </div>
    </div>
  )
}