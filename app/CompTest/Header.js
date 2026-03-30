"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Cuisines", href: "/cuisines" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
  ];

  const normalizePath = (p) => p.replace(/\/$/, "");
  const isActiveLink = (href) =>
    mounted && normalizePath(path || "").startsWith(normalizePath(href));

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="mt-4 md:mt-6 flex items-center justify-between gap-4 md:gap-8 rounded-full bg-white/60 backdrop-blur-[24px] shadow px-5 py-2 md:px-6 md:py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={170}
            height={50}
            className="w-[120px] md:w-[170px] h-auto"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-outfit text-[16px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-200 ${
                isActiveLink(link.href)
                  ? "font-bold text-[#4e1a51]"
                  : "font-light text-[#4e1a51]/80 hover:opacity-60"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Search + Mobile Menu */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center rounded-full px-4 py-2 w-48 lg:w-64 shadow-sm bg-[#EED697]">
            <Search size={16} className="text-[#4e1a51]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full placeholder:text-[#4e1a51]/50 text-sm font-light"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={28} className="text-[#4e1a51]" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-40 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end mb-4 p-2"
          >
            <X size={28} className="text-[#4e1a51]" />
          </button>

          <div className="flex items-center rounded-full px-4 py-3 mb-8 shadow-inner bg-[#EED697]">
            <Search size={20} className="text-[#4e1a51]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-3 w-full text-lg font-light"
            />
          </div>

          <nav className="flex flex-col gap-5 overflow-y-auto pb-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[20px] font-medium tracking-tight hover:pl-2 transition-all duration-200 ${
                  isActiveLink(link.href)
                    ? "text-[#4e1a51] font-bold"
                    : "text-[#5A7012]"
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



