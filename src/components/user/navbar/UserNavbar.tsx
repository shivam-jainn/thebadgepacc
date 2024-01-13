import Link from "next/link"

import { cn } from "@/lib/utils"

// Logo
import { Logo } from "@/lib/icons/Logo"

// Composites
import SearchBarNav from "./searchbar/SearchBarNav"
import AlertDrawer from "./alerts/AlertDrawer"
import { AvatarNav } from "./avatar-dropdown/AvatarNav"

export function UserNavbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex justify-between px-4 py-2 mb-2 items-center  lg:space-x-6", className)}
      {...props}
    >
      <div className="max-md:hidden">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary max-md:hidden"
      >
        <Logo />
      </Link>
      </div>

      
    <div className="flex items-center gap-6">
      <div className="md:w-[200px]">
      <SearchBarNav />
      </div>
      <AlertDrawer/>
   
      <AvatarNav />
      </div>
    </nav>
  )
}