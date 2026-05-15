"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react"; 
import { useState } from "react";
import { motion } from "framer-motion"; 
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
        { name: "All", href: "/products" },
        { name: "Featured", href: "/feature_product" },
        { name: "Categories", href: "/categories" },
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
    <>
     

      {/* ⚪ Sticky Header - Ye news bar ke niche shuru hoga aur top par stick ho jayega */}
      <div className="sticky top-0 left-0 right-0 z-50 px-4 pointer-events-none">
        <header className="mt-4 flex items-center justify-between gap-4 md:gap-8 rounded-full bg-white/60 backdrop-blur-[24px] shadow-sm border border-white/20 px-5 py-2 md:px-6 md:py-3 max-w-7xl mx-auto pointer-events-auto">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/logo.webp" 
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
                        className="block px-6 py-3 text-[#4e1a51] hover:bg-[#4e1a51] hover:!text-white transition-colors duration-200 text-sm font-medium"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* SearchBox */}
          <div className="flex items-center gap-5">
            <div className="hidden md:block">
               <SearchBox /> 
            </div>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">
              <Menu size={32} className="text-[#4e1a51]" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Sidebar yahan niche hi rahega */}
    </>
  );
}