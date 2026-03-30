"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname();

  return (
    <nav
      className="p-4"
    >
        <div
          className="flex gap-2.5"
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
    </nav>
  )
}

export default Header