"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Instagram, Facebook, Linkedin, Plus, Minus } from 'lucide-react';

const brandPurple = "#431A4F";
const brandGold = "#D2B57B";

// FIXED: Added props to the TikTok component so it can receive the color changes
const TikTokIcon = ({ size = 18, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className} 
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = {
    useful: {
      title: 'Useful Links',
      links: [
        { name: 'Cuisine', href: '/cuisine' },
        { name: 'Contact', href: '/contact' },
        { name: 'About Us', href: '/about' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Sign Up', href: '/signup' },
        { name: 'Login', href: '/login' },
      ]
    },
    categories: {
      title: 'Categories',
      links: [
        { name: 'Canned', href: '#' },
        { name: 'Drinks', href: '#' },
        { name: 'Frozen', href: '#' },
        { name: 'Noodles', href: '#' },
        { name: 'Nuts & Seeds', href: '#' },
        { name: 'Rice', href: '#' },
      ]
    }
  };

  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-16">
        
        {/* Column 1: Brand & Identity */}
        <div className="flex-1 flex flex-col gap-6 md:max-w-[320px] -mt-4">
          <Link href="/" className="inline-block transition-opacity hover:opacity-80">
            <Image 
              src="/logo.png" 
              alt="Tiger Tiger Logo" 
              width={150} 
              height={60} 
              priority 
              className="object-contain" 
            />
          </Link>
          <p style={{ color: brandPurple }} className="text-[16px] leading-relaxed font-normal opacity-90">
            Tiger Tiger brings premium Asian ingredients Japanese, Thai, Chinese, Korean and more to businesses across the UK. Authentic flavours, competitive pricing, reliable supply.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            {[
              { Icon: Instagram, id: 'ig' }, 
              { Icon: Facebook, id: 'fb' }, 
              { Icon: TikTokIcon, id: 'tt' }, 
              { Icon: Linkedin, id: 'li' }
            ].map(({ Icon, id }) => (
              <Link 
                key={id} 
                href="#" 
                onMouseEnter={() => setHoveredIcon(id)}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{ 
                  // If hovered, icon is white, background is gold. Otherwise, icon is purple, background transparent.
                  color: hoveredIcon === id ? '#fff' : brandPurple,
                  backgroundColor: hoveredIcon === id ? brandGold : 'transparent',
                  borderColor: hoveredIcon === id ? brandGold : '#e5e7eb'
                }}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                {/* We pass the 'text-white' class specifically when hovered to force the SVG to change */}
                <Icon size={18} className={hoveredIcon === id ? 'text-white' : ''} />
              </Link>
            ))}
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Useful Links Column */}
          <div className="border-b md:border-none border-gray-100 pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('useful')}
              className="w-full flex justify-between items-center md:pointer-events-none mb-0 md:mb-6"
            >
              <h3 style={{ color: brandPurple }} className="font-bold text-lg tracking-tight">Useful Links</h3>
              <span style={{ color: brandPurple }} className="md:hidden">
                {openSection === 'useful' ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <ul className={`${openSection === 'useful' ? 'flex' : 'hidden'} md:flex flex-col gap-3 mt-4 md:mt-0 text-[15px] font-normal`}>
              {sections.useful.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: brandPurple }} className="hover:opacity-60 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="border-b md:border-none border-gray-100 pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('categories')}
              className="w-full flex justify-between items-center md:pointer-events-none mb-0 md:mb-6"
            >
              <h3 style={{ color: brandPurple }} className="font-bold text-lg tracking-tight">Categories</h3>
              <span style={{ color: brandPurple }} className="md:hidden">
                {openSection === 'categories' ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <ul className={`${openSection === 'categories' ? 'flex' : 'hidden'} md:flex flex-col gap-3 mt-4 md:mt-0 text-[15px] font-normal`}>
              {sections.categories.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: brandPurple }} className="hover:opacity-60 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="pb-4 md:pb-0">
            <button 
              onClick={() => toggleSection('contact')}
              className="w-full flex justify-between items-center md:pointer-events-none mb-0 md:mb-6"
            >
              <h3 style={{ color: brandPurple }} className="font-bold text-lg tracking-tight">Contact</h3>
              <span style={{ color: brandPurple }} className="md:hidden">
                {openSection === 'contact' ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <div className={`${openSection === 'contact' ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
              <address style={{ color: brandPurple }} className="not-italic text-[14px] font-normal flex flex-col gap-4 leading-relaxed">
                <p className="opacity-90">Bull Close Road,<br/> Lenton Industrial Estate,<br/>Nottingham NG7 2UT, England.</p>
                <div className="flex flex-col gap-2">
                  <Link href="mailto:customer.service@tigertigerfoods.com" className="hover:opacity-60 transition-colors underline decoration-gray-200 underline-offset-4">
                    customer.service@tigertigerfoods.com
                  </Link>
                  <Link href="tel:+441159851301" className="hover:opacity-60 transition-colors">
                    +44 (0) 115 985 1301
                  </Link>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div 
        style={{ color: brandPurple }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] opacity-70"
      >
        <p>© 2026. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="hover:opacity-100 transition-colors">Privacy Policy</Link>
          <Link href="/modern-slavery" className="hover:opacity-100 transition-colors">Modern Slavery Statement</Link>
        </div>
        <p>
          Designed and Developed by <span className="font-semibold" style={{ color: brandPurple }}>TeqNoor LTD</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;