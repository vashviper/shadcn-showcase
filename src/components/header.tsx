import { Cube } from "@phosphor-icons/react/dist/ssr"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Cube className="h-6 w-6 text-primary" weight="fill" />
          <span className="text-lg font-semibold">shadcn/ui Showcase</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#components" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Components
          </a>
          <a href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="https://github.com/shadcn/ui" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden sm:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
