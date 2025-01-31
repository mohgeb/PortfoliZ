"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, ScrollText, User2 } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function UserNav() {
  const [isOpenToWork, setIsOpenToWork] = useState(true)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQEXXAqcTFPGig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731792481636?e=1743638400&v=beta&t=z6-mBeVpWx5A7yxI0Cm7IHzkb2qXW6ra_BV4TKJ36AU" alt="Mohamed Gebril" />
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <div className="text-xl font-medium">Mohamed Gebril</div>
            <div className="text-sm text-muted-foreground">
              Data Scientist | Applied Mathematician | Bioinformatician
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <MapPin className="mr-2 h-4 w-4" />
            <span>Lubbock, Texas</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>mgebril180@gmail.com</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ScrollText className="mr-2 h-4 w-4" />
            <div className="flex flex-col space-y-1">
              <span>Education</span>
              <span className="text-sm text-muted-foreground">Texas Tech University</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Current Skills</DropdownMenuLabel>
        <div className="p-2">
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">D3.js</Badge>
            <Badge variant="secondary">Web Development</Badge>
            <Badge variant="secondary">Data Analysis</Badge>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Connect</DropdownMenuLabel>
        <DropdownMenuGroup className="flex p-2">
            <a className="w-full" href="https://github.com/mohgeb" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="w-full">
                <Github className="h-4 w-4" />
             </Button>
            </a>
            <a className="w-full" href="https://www.linkedin.com/in/mohamed-gebril-364ab72a8/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="w-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="p-2">
          <Badge
            className="w-full justify-center cursor-pointer"
            variant={isOpenToWork ? "success" : "destructive"}
            onClick={() => setIsOpenToWork(!isOpenToWork)}
          >
            {isOpenToWork ? "Open to Work" : "Not Open to Work"}
          </Badge>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

