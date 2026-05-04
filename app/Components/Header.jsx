"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react"; // ChevronDown icon add kiya
import { useState } from "react";

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false); // Dropdown state

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Products", 
      href: "/products",
      dropdown: [
        { name: "All Products", href: "/products" },
        { name: "Featured Products", href: "/products/featured" },
        { name: "New Products", href: "/products/new" },
      ]
    },
    { name: "Recipes", href: "/recipes" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/login" },
  ];

  const isActive = (href) => path === href;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4">
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdown && setIsProductHovered(true)}
              onMouseLeave={() => link.dropdown && setIsProductHovered(false)}
            >
              <Link
                href={link.href}
                className={`text-[15px] xl:text-[16px] flex items-center gap-1 transition-all duration-200 ${
                  isActive(link.href)
                    ? "font-bold text-[#4e1a51]"
                    : "font-light text-[#4e1a51]/80 hover:text-[#4e1a51]"
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform ${isProductHovered ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown Menu (Desktop) */}
              {link.dropdown && (
                <div className={`absolute top-full left-0 mt-2 md:w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${isProductHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-6 py-3 text-[#4e1a51] hover:bg-[#4e1a51] hover:text-white transition-colors text-sm"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search & Menu */}
        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center rounded-full px-6 py-3 w-full lg:w-[250px] bg-[#4e1a51]">
            <Search size={22} className="text-white shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none ml-4 w-full placeholder:text-white/80 text-lg text-white"
            />
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">
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
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.dropdown && setIsMenuOpen(false)}
                  className={`text-lg block ${
                    isActive(link.href) ? "text-[#4e1a51] font-bold" : "text-[#4e1a51]/80"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Sub-links for Mobile */}
                {link.dropdown && (
                  <div className="flex flex-col gap-3 mt-3 ml-4 border-l border-gray-100">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm text-gray-500 pl-4"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}