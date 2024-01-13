// Logo
import { Logo } from "@/lib/icons/Logo"

// Composites
import { DarkModeToggle } from "../theme/DardModeToggle"

// Helpers
import Link from "next/link"
import { cn } from "@/lib/utils"

// Primitives
import { Button } from "../ui/button"

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex justify-between items-center space-x-4 lg:space-x-6 px-4 py-2 h-fit border-b ", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        <Logo />
      </Link>

    <div className="flex gap-3">

      <DarkModeToggle />

      <Button variant="outline" className="px-3 py-1 text-sm text-center ">
        <Link
          href="/signin"
          className="font-sm "
        >
          Sign Up
        </Link>
      </Button>
      
      <Button variant="default"   className="px-3 py-1 text-sm text-center text-black rounded-sm hover:text-black">
        <Link
          href="/signin"
          className="font-sm "
        >
          Sign In
        </Link>
      </Button>

      </div>
    </nav>
  )
}