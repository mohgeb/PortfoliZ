"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "@/components/search"
import { Notifications } from "@/components/notifications"
import { UserNav } from "@/components/user-nav"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-10 pr-10">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Mohamed's Dashboard</span>
          </a>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <a href="/">Home</a>
              <a href="/career">Career Journey</a>
              <a href="/skills">Skills & Analytics</a>
              <a href="/resume">Data Resume</a>
              <a href="/life">Life Dashboard</a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <ContactForm />
            <Search />
            <Notifications />
            <ThemeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  )
}

