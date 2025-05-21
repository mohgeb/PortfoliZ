"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "@/components/search"
import { Notifications } from "@/components/notifications"
import { UserNav } from "@/components/user-nav"
import { ContactForm } from "@/components/contact-form"
import { useSidebar } from "@/components/sidebar-provider"

export function Header() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Mohamed's Dashboard</span>
          </Link>
        </div>

        <div className="flex-grow flex justify-center max-w-xl mx-auto w-lg">
          <Search />
        </div>

        <div className="flex items-center space-x-2">
          <ContactForm />
          <Notifications />
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
