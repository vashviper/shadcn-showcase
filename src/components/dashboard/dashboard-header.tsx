"use client"

import Link from "next/link"
import { House } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

interface DashboardHeaderProps {
  title?: string
}

export function DashboardHeader({ title = "Dashboard" }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <Button size="sm" asChild>
          <Link href="/">
            <House className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </header>
  )
}
