"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Book Appointment" },
]

export function Navbar() {
  const pathname = usePathname()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash navigation on home page
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault()
      const element = document.getElementById(href.split("#")[1])
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Elegance
        </Link>
        
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <a
            href="/#services"
            onClick={(e) => handleScroll(e, "/#services")}
            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            Services
          </a>
          <a
            href="/#about"
            onClick={(e) => handleScroll(e, "/#about")}
            className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            About
          </a>
          <Link
            href="/booking"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/booking" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Book Appointment
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}