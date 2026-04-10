"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Buttons";

const Header = () => {

  const pathname = usePathname();

  return (
    <nav
      className="p-4 fixed top-0 bg-white w-full z-9 shadow lg:px-12"
    >
        <div
          className="flex justify-between"
        >
          <div
            className="flex gap-2.5 items-center"
          >
            <Link 
              href="/groww-sliding-ui"
              className={`link ${pathname === '/groww-sliding-ui' ? 'active' : ''}`}
            >
              Groww Sliding UI
            </Link>
            <Link 
              href="/"
              className={`link ${pathname === '/' ? 'active' : ''}`}
            >
              Blogs
            </Link>
          </div>
          <Button 
            variant="secondary"
            onClick={() => alert("Clicked!")}
          >
            Login
          </Button>
        </div>
    </nav>
  )
}

export default Header