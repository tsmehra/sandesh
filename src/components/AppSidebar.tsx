"use client"

import { useState } from "react"

import {
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Clock3,
  Folder,
  Grid2X2,
  LayoutGrid,
  MoreHorizontal,
  Settings,
  SquareTerminal,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import Secondpage from "@/pages/secondpage"
import Thirdpage from "@/pages/Thirdpage"

function AppSidebar() {
  const [playgroundOpen, setPlaygroundOpen] = useState(true)
  const [modelsOpen, setModelsOpen] = useState(false)
  const [docsOpen, setDocsOpen] = useState(false)

  return (
    <Sidebar className="border-r bg-[#f5f5f5]">
      {/* HEADER */}
      <SidebarHeader className="border-b px-4 py-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
              <SquareTerminal className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-sm font-semibold">
                Anandabazar
              </h2>

              <p className="text-xs text-muted-foreground">
                CMC Enterprise V 0.2
              </p>
            </div>
          </div>

          <ChevronDown className="mt-1 h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="px-2 py-4">
        {/* PLATFORM */}
        <SidebarGroup>
          <p className="mb-3 px-2 text-xs text-muted-foreground">
            Platform
          </p>

          <SidebarMenu>
            {/* PLAYGROUND */}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() =>
                  setPlaygroundOpen(!playgroundOpen)
                }
                className="justify-between"
              >
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4" />
                  <span>Playground</span>
                </div>

                {playgroundOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </SidebarMenuButton>

              {playgroundOpen && (
                <div className="ml-6 mt-2 space-y-1 border-l pl-3">
                  <button className="block text-sm text-muted-foreground hover:text-black">
                    Overview
                  </button>

                  <button className="block text-sm text-muted-foreground hover:text-black">
                    Analytics
                  </button>

                  <button className="block text-sm text-muted-foreground hover:text-black">
                    Reports
                  </button>
                </div>
              )}
            </SidebarMenuItem>

            {/* HISTORY */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Clock3 className="h-4 w-4" />
                <span>History</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* STARRED */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <BookOpen className="h-4 w-4" />
                <span>Starred</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* SETTINGS */}
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* MODELS */}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setModelsOpen(!modelsOpen)}
                className="justify-between"
              >
                <div className="flex items-center gap-2">
                  <Grid2X2 className="h-4 w-4" />
                  <span>Models</span>
                </div>

                {modelsOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </SidebarMenuButton>

              {modelsOpen && (
                <div className="ml-6 mt-2 space-y-1 border-l pl-3">
                  <button className="block text-sm text-muted-foreground hover:text-black">
                    GPT-4
                  </button>

                  <button className="block text-sm text-muted-foreground hover:text-black">
                    Claude
                  </button>

                  <button className="block text-sm text-muted-foreground hover:text-black">
                    Gemini
                  </button>
                </div>
              )}
            </SidebarMenuItem>

            {/* DOCUMENTATION */}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setDocsOpen(!docsOpen)}
                className="justify-between"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Documentation</span>
                </div>

                {docsOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </SidebarMenuButton>

              {docsOpen && (
                <div className="ml-6 mt-2 space-y-1 border-l pl-3">
                  <button className="block text-sm text-muted-foreground hover:text-black">
                    API Docs
                  </button>

                  <button className="block text-sm text-muted-foreground hover:text-black">
                    Guides
                  </button>

                  <button className="block text-sm text-muted-foreground hover:text-black">
                    Examples
                  </button>
                </div>
              )}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* PROJECTS */}
        <SidebarGroup className="mt-8">
          <p className="mb-3 px-2 text-xs text-muted-foreground">
            Projects
          </p>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Folder className="h-4 w-4" />
                <span>Design Engineering</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <Briefcase className="h-4 w-4" />
                <span>Sales & Marketing</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <LayoutGrid className="h-4 w-4" />
                <span>Travel</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <MoreHorizontal className="h-4 w-4" />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="border-t p-3">
        <div className="flex items-center gap-3 rounded-xl bg-white p-2 shadow-sm">
          <img
            src="https://github.com/shadcn.png"
            alt="avatar"
            className="h-10 w-10 rounded-full"
          />

          <div className="flex-1">
            <p className="text-sm font-medium">
              shadcn
            </p>

            <p className="text-xs text-muted-foreground">
              me@example.com
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* TOP HEADER */}
        <header className="flex h-16 items-center border-b bg-white px-4">
          <SidebarTrigger />

          <h1 className="ml-4 text-lg font-semibold">
            Dashboard
          </h1>
        </header>

        {/* MAIN CONTENT */}
        <main className="p-6">



          {/* React Router */}

          {/* First Page */}
          <Secondpage />
          {/* <Thirdpage /> */}





        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}