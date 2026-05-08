"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react"; 
import { useState } from "react";
// 🟢 Step 1: SearchBox ko import karein
import SearchBox from "./SearchBox"; 

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Products", 
      href: "#", 
      dropdown: [
        { name: "All", href: "/products/best-sellers" },
        { name: "Featured", href: "/feature_product" },
        { name: "New", href: "/products/new" },
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
            width={150} 
            height={50} 
            alt="logo"
            priority
            className="w-[100px] h-auto"
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

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${isProductHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-6 py-3 text-[#4e1a51] hover:bg-[#4e1a51] hover:text-white transition-all duration-200 text-sm font-medium"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 🟢 Step 2: SearchBox Call */}
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
             <SearchBox /> 
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
          
          {/* 🟢 Mobile Search */}
          <div className="mt-4 mb-6">
            <SearchBox />
          </div>

          <nav className="flex flex-col gap-6">
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
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}