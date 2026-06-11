"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react"; 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBox from "./SearchBox"; 

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Kaunsa dropdown khula hai

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
    { name: "About", href: "/about" },
    { name: "Trade Register", href: "/trade-register" },
    { 
      name: "More", 
      href: "#", 
      dropdown: [
        { name: "Contact", href: "/contact" },
        { name: "Blogs", href: "/blogs" },
      ]
    },
    { name: "Download Our App", href: "/tt-app", isButton: true },
  ];

  const isActive = (href) => path === href;

  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 px-4 pointer-events-none">
        <header className="mt-4 flex items-center justify-between gap-4 md:gap-8 rounded-full bg-white/60 backdrop-blur-[24px] shadow-sm border border-white/20 px-5 py-2 md:px-6 md:py-3 max-w-7xl mx-auto pointer-events-auto">
          
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo.webp" width={150} height={50} alt="logo" priority className="w-[100px] h-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[15px] xl:text-[16px] flex items-center gap-1 transition-all duration-200 ${
                    isActive(link.href) ? "font-bold text-white" : "font-light text-white hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 ${openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    {link.dropdown.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href} className="block px-6 py-3 text-[#4e1a51] hover:bg-white hover:text-white transition-colors duration-200 text-sm font-medium">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden md:block"><SearchBox /></div>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2"><Menu size={32} className="text-[#4e1a51]" /></button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer (Pehle jaisa hi hai) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/40 z-50 lg:hidden backdrop-blur-sm" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed right-0 top-0 bottom-0 w-full max-w-[320px] bg-white z-50 lg:hidden p-6 shadow-2xl flex flex-col gap-6 overflow-y-auto">
              <div className="flex items-center justify-between border-b pb-4 border-gray-100">
                <Image src="/logo.webp" width={80} height={30} alt="logo" />
                <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full bg-gray-50 text-[#4e1a51]"><X size={24} /></button>
              </div>

              <nav className="flex flex-col gap-2 mt-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col w-full">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                          className="flex items-center justify-between w-full py-3 px-4 text-[#4e1a51] font-medium text-lg rounded-xl hover:bg-gray-50"
                        >
                          {link.name}
                          <ChevronDown size={18} className={`transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} />
                        </button>
                        {openDropdown === link.name && (
                          <div className="flex flex-col pl-6 border-l-2 border-gray-100 ml-4 gap-1 mt-1">
                            {link.dropdown.map((subItem) => (
                              <Link key={subItem.name} href={subItem.href} onClick={() => setIsMenuOpen(false)} className="py-2.5 px-4 text-[#4e1a51]/80 hover:text-[#4e1a51] text-base font-normal rounded-lg hover:bg-gray-50 block">
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link href={link.href} onClick={() => setIsMenuOpen(false)} className={`py-3 px-4 text-lg rounded-xl transition-all block ${isActive(link.href) ? "font-bold text-white bg-[#4e1a51]" : "font-medium text-[#4e1a51]/80 hover:text-[#4e1a51] hover:bg-gray-50"}`}>
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}