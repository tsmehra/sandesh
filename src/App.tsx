import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import Firstpage from "./pages/firstpage"
import Secondpage from "@/pages/secondpage"

export function App({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppSidebar />
    </div>
    //  <SidebarProvider className="w-full">
    //   <AppSidebar />
    //   <main className="w-full">        
    //     <Firstpage />
    //   </main>
    // </SidebarProvider>

  )
}

export default App
