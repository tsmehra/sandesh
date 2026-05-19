"use client";

import * as React from "react";
import { Check, Sheet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import StackListTable from "./tabledata";
import MenuTable from "./tabledatasecond";
// import SheetDemo from "./sheetmodel";

export default function CreateSectionPage() {
  return (
  <div className="min-h-screen p-6">
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Create New Section
        </h1>
      </div>
      
      {/* Tabs */}
      <Tabs defaultValue="page-details" className="w-full">
        <TabsList className="grid w-fit grid-cols-3">
          <TabsTrigger value="page-details">
            Page Details
          </TabsTrigger>
          
          <TabsTrigger value="manage-stack">
            Manage Stack
          </TabsTrigger>
          
          <TabsTrigger value="manage-menu">
            Manage Menu
          </TabsTrigger>
        </TabsList>
        
        {/* PAGE DETAILS */}
        <TabsContent value="page-details" className="mt-6">
          <div className="space-y-6">
            {/* Main Form */}
            <Card className="rounded-2xl border shadow-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label>Name</Label>
                    
                    <Input placeholder="Select Name" />
                  </div>
                  
                  {/* Parent */}
                  <div className="space-y-2">
                    <Label>Select Parent</Label>
                    
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="None" />
                      </SelectTrigger>
                      
                      <SelectContent>
                        <SelectItem value="none">
                          None
                        </SelectItem>
                        
                        <SelectItem value="home">
                          Home
                        </SelectItem>
                        
                        <SelectItem value="blog">
                          Blog
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Slug */}
                  <div className="space-y-2">
                    <Label>Slug</Label>
                    
                    <Input placeholder="Enter a URL-safe slug" />
                    
                    <p className="text-xs text-muted-foreground">
                      Only lowercase letters, numbers,
                      and hyphens are allowed.
                    </p>
                  </div>
                  
                  {/* Display Name */}
                  <div className="space-y-2">
                    <Label>Page Display Name</Label>
                    
                    <Input placeholder="Enter Page Display Name" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* SEO */}
            <Card className="rounded-2xl border shadow-sm">
              <CardContent className="space-y-6 p-6">
                {/* Meta Title */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    Meta Title
                    <span className="text-red-500">*</span>
                  </Label>
                  
                  <Input placeholder="Meta Title" />
                  
                  <p className="text-xs text-muted-foreground">
                    Default title ..... News in Bengali,
                    Videos and Photos about ....
                  </p>
                </div>
                
                {/* Meta Description */}
                <div className="space-y-2">
                  <Label>Meta Description</Label>
                  
                  <Input placeholder="Meta Description" />
                  
                  <p className="text-xs text-muted-foreground">
                    Default Description ..... News in
                    Bengali, Videos and Photos about ....
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Bottom Section */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              {/* Left */}
              <div className="flex flex-1 flex-col gap-4">
                <Button
                variant="outline"
                className="w-fit"
                >
                Discard Changes
              </Button>
              
              <div className="flex flex-col gap-4 md:flex-row">
                {/* Upload */}
                <div className="w-full max-w-sm space-y-3">
                  <Input type="file" />
                  
                  <div className="flex items-start gap-3 rounded-xl border bg-gray-50 p-4">
                    <div className="mt-0.5 rounded-md bg-white p-1 shadow-sm">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium">
                        Index in Google
                      </p>
                      
                      <p className="text-xs text-muted-foreground">
                        Lorem Ipsum is simply dummy
                        text
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Switches */}
                <div className="space-y-6">
                  {/* Published */}
                  <div className="flex items-center justify-between gap-8 rounded-xl border bg-white px-4 py-3 mb-2">
                    <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
                    <div>
                      <p className="text-sm font-medium">
                        Published
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="text-sm font-medium">
                        Status
                      </p>
                  </div>
                  {/* Status */}
                  <div className="flex items-center justify-between gap-4 rounded-xl border bg-white px-4 py-3">
                    <Switch defaultChecked className="data-[state=checked]:bg-green-500"/>
                    <div>
                      <p className="text-sm font-medium">
                        Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right */}
            <Button className="h-11 rounded-xl px-6">
              Save Changes
            </Button>
          </div>
        </div>
      </TabsContent>
      
      {/* MANAGE STACK */}
      <TabsContent value="manage-stack">
         <Card className="mt-6 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex w-full gap-6">
              <div className="w-1/6 space-y-1 flex flex-col">
                <label>Use Defult Template</label>
                <div className="flex items-center justify-between gap-8 rounded-lg border bg-white px-4 py-1.5">
                  
                  <div className="flex gap-2">
                    <Switch defaultChecked className="data-[state=checked]:bg-green-500" />
                     <p className="text-sm font-medium">
                      yes
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="space-y-2 w-full">
                <Label>Custom Page ID</Label>
                
                <Select>
                  <SelectTrigger className="w-80">
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  
                  <SelectContent>
                    <SelectItem value="none">
                      0
                    </SelectItem>
                    
                    <SelectItem value="home">
                      0
                    </SelectItem>
                    
                    <SelectItem value="blog">
                      0
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
          </CardContent>
        </Card>

        <StackListTable />
       {/* <SheetDemo />  */} 
      </TabsContent>
      
      {/* MANAGE MENU */}
      <TabsContent value="manage-menu">
        <MenuTable />
        <div className="border-t border-border pt-4 mt-10 flex justify-between">
        <Button variant="ghost" className="border border-gray-300 shadow-md hover:shadow-lg">Discard Changes</Button>
        <Button>Save Changes</Button>
      </div>
      </TabsContent>
    </Tabs>
  </div>
</div>
);
}