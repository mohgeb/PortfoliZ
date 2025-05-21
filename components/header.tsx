"use client"

import type React from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Search } from "@/components/search"
import { Notifications } from "@/components/notifications"
import { UserNav } from "@/components/user-nav"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useSidebar } from "@/components/sidebar-provider"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

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

export function ContactForm() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) throw new Error("Failed to send message")

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setOpen(false)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Hire Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Hire Me</DialogTitle>
          <DialogDescription>Send me a message and I&apos;ll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" className="min-h-[100px]" required />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
