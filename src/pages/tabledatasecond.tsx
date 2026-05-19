"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Plus, MoreVertical, Pencil } from "lucide-react"

const menuItems = [
  {
    id: 1,
    name: "Kolkata",
    title: "Kolkata",
    type: "Section",
    contentId: 10,
    tab: "Same Tab",
    tabVariant: "destructive",
  },
  {
    id: 2,
    name: "West Bengal",
    title: "West Bengal",
    type: "Section",
    contentId: 13,
    tab: "New Tab",
    tabVariant: "default",
  },
]

export default function MenuTable() {
  return (
    <Card className="w-full rounded-xl border bg-white shadow-sm mt-8">
      <CardHeader className="flex flex-row items-center justify-between border-b px-6 py-4">
        <CardTitle className="text-sm font-semibold">
          ALL Menu Items
        </CardTitle>

        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add New
        </Button>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Content ID</TableHead>
              <TableHead>Tab</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {menuItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>

                <TableCell>{item.title}</TableCell>

                <TableCell>{item.type}</TableCell>

                <TableCell>{item.contentId}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      item.tabVariant === "destructive"
                        ? "destructive"
                        : "default"
                    }
                    className={
                      item.tabVariant === "default"
                        ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                        : "bg-red-100 text-red-700 hover:bg-red-100"
                    }
                  >
                    {item.tab}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      Edit
                    </Button>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <div className="h-60 bg-gradient-to-b from-gray-200 to-white-500 text-white m-6 rounded-xl flex justify-center items-center flex-col">
        <p className="text-lg font-semibold text-black">No data to display yet</p>
        <p className="text-gray-500 text-xs">Create or import data to get started</p>
      </div>
    </Card>
    
  )
}