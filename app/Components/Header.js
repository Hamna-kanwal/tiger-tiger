"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Recipes", href: "/recipes" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
  ];

  // Active link check
  const isActive = (href) => path === href;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4">
      {/* Capsule Design Header */}
      <header className="mt-4 md:mt-6 flex items-center justify-between gap-4 md:gap-8 rounded-full bg-white/60 backdrop-blur-[24px] shadow-sm border border-white/20 px-5 py-2 md:px-6 md:py-3 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={50}
            className="w-[120px] md:w-[150px] h-auto"
            priority 
          />
        </Link>

        {/* Desktop Links (Ab is mein Recipes seari shamil hai) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] xl:text-[16px] transition-all duration-200 ${
                isActive(link.href)
                  ? "font-bold text-[#4e1a51]"
                  : "font-light text-[#4e1a51]/80 hover:text-[#4e1a51]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search & Mobile Menu */}
       <div className="flex items-center gap-5">
  <div className="hidden md:flex items-center rounded-full px-6 py-3 w-full lg:w-[250px] bg-[#4e1a51]">
    <Search size={22} className="text-white shrink-0" />
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent outline-none ml-4 w-full placeholder:text-white/80 text-lg text-white"
    />
  </div>

  <button
    onClick={() => setIsMenuOpen(true)}
    className="lg:hidden p-2"
  >
    <Menu size={32} className="text-[#4e1a51]" />
  </button>
</div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-[60] ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white transition-transform duration-300 ease-in-out z-[70] lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <button onClick={() => setIsMenuOpen(false)} className="self-end p-2">
            <X size={26} className="text-[#4e1a51]" />
          </button>
          
          <nav className="flex flex-col gap-6 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg ${
                  isActive(link.href) ? "text-[#4e1a51] font-bold" : "text-[#5A7012]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}