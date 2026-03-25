"use client";
 
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
 
export default function Navbar() {
  const path = usePathname();
 
  return (
    <div className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto">
      <header className="mt-6 flex items-center justify-between gap-8 rounded-full bg-white/60 backdrop-blur-[24px] shadow-[0px_4px_13.4px_0px_#0000001F] px-6 py-3">
 
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tiger Tiger Logo"
            width={170}
            height={50}
            priority
          />
        </Link>
 
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-outfit text-[18px] text-[#556D08]">
 
          <Link
            href="/"
            className={path === "/" ? "font-bold" : ""}
          >
            Home
          </Link>
 
          <Link
            href="/products"
            className={path.startsWith("/products") ? "font-bold" : ""}
          >
            Products
          </Link>
 
          <Link
            href="/cuisines"
            className={path.startsWith("/cuisines") ? "font-bold" : ""}
          >
            Cuisines
          </Link>
 
          <Link
            href="/blogs"
            className={path.startsWith("/blogs") ? "font-bold" : ""}
          >
            Blogs
          </Link>
 
          <Link
            href="/contact"
            className={path.startsWith("/contact") ? "font-bold" : ""}
          >
            Contact
          </Link>
 
          <Link
            href="/about"
            className={path.startsWith("/about") ? "font-bold" : ""}
          >
            About
          </Link>
 
          <Link
            href="/login"
            className={path.startsWith("/login") ? "font-bold" : ""}
          >
            Login
          </Link>
        </nav>
 
        {/* Search */}
        <div className="hidden md:flex items-center bg-[#E8D28A] rounded-full px-5 py-2 w-64">
          <Search size={18} className="text-[#556D08]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-3 w-full text-[#556D08]"
          />
        </div>
 
      </header>
    </div>
  );
}