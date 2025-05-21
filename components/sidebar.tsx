"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Briefcase,
  GraduationCap,
  LineChart,
  Heart,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react"
import { useSidebar } from "@/components/sidebar-provider"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <div
      className={cn(
        "fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] border-r bg-background transition-[width] duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        className,
      )}
    >
      <div className="flex w-full justify-end p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="mb-2"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <nav className={cn(
        "flex flex-col w-full gap-4 mt-2",
        isCollapsed ? "items-center" : "items-start px-4"
      )}>
        <NavItem 
          href="/" 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboard" 
          isActive={pathname === "/"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          href="/career" 
          icon={<Briefcase size={18} />} 
          label="Career Journey" 
          isActive={pathname === "/career"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          href="/case-studies" 
          icon={<FileText size={18} />} 
          label="Case Studies" 
          isActive={pathname === "/case-studies"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          href="/skills" 
          icon={<LineChart size={18} />} 
          label="Skills Analytics" 
          isActive={pathname === "/skills"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          href="/resume" 
          icon={<GraduationCap size={18} />} 
          label="Data Resume" 
          isActive={pathname === "/resume"} 
          isCollapsed={isCollapsed}
        />
        <NavItem 
          href="/life" 
          icon={<Heart size={18} />} 
          label="Life Dashboard" 
          isActive={pathname === "/life"} 
          isCollapsed={isCollapsed}
        />
      </nav>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
  isCollapsed: boolean
}

function NavItem({ href, icon, label, isActive, isCollapsed }: NavItemProps) {
  if (isCollapsed) {
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-md",
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
        )}
      >
        {icon}
      </Link>
    )
  }
  
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center w-full h-10 gap-3 px-2 rounded-md",
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  )
}
