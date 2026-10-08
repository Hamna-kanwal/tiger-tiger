import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../action'; 
import FooterWrapper from './FooterWrapper';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const TikTokIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = async () => {
  // --- Data Fetching ---
  const allCategories = await getCategories();
  const allowedSlugs = ['canned', 'drinks', 'frozen', 'noodles', 'rice'];
  const data = Array.isArray(allCategories) ? allCategories : [];
  const categories = data.filter(c => c && c.slug && allowedSlugs.includes(c.slug.toLowerCase()));

  const brandPurple = "#431A4F";

  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-16">
        
        {/* Column 1: Brand & Identity */}
        <div className="flex-1 flex flex-col gap-6 md:max-w-[320px] -mt-4">
          <Link href="/" className="inline-block transition-opacity hover:opacity-80">
            <Image src="/logo.webp" alt="logo" width={150} height={60} priority className="w-[100px] h-auto" />
          </Link>
          <p style={{ color: brandPurple }} className="text-[16px] leading-relaxed font-normal opacity-90">
            Tiger Tiger brings premium Pan Asian ingredients Japanese, Thai, Chinese, Korean and more to businesses across the UK. Authentic flavours, competitive pricing, reliable supply.
          </p>
          <div className="flex justify-start gap-3 mb-3">
            <a href="https://www.instagram.com/tigertigerfoodsofficial/" className="border border-[#40023F] text-[#40023F] p-2 rounded-full inline-flex items-center justify-center text-base hover:bg-[#40023F] hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/tigertigerfoodsofficial/" className="border border-[#40023F] text-[#40023F] p-2 rounded-full inline-flex items-center justify-center text-base hover:bg-[#40023F] hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="https://www.tiktok.com/@tigertigerfoodsofficial1?_t=8rkFatEOb71&_r=1" className="border border-[#40023F] text-[#40023F] p-2 rounded-full inline-flex items-center justify-center text-base hover:bg-[#40023F] hover:text-white transition-colors"><TikTokIcon size={18} /></a>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Useful Links */}
          <div className="border-b md:border-none border-gray-100 pb-4 md:pb-0">
             <FooterWrapper title="Useful Links">
              <ul className="flex flex-col gap-3 mt-4 md:mt-0 text-[15px] font-normal">
                {[{name: 'Recipes', href: '/recipes'}, {name: 'Contact', href: '/contact'}, {name: 'About Us', href: '/about'}, {name: 'Blogs', href: '/blogs'}, {name: 'Trade Register', href: '/trade-register'}].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} style={{ color: brandPurple }} className="hover:opacity-60 transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
             </FooterWrapper>
          </div>

          {/* Categories Widget (Server Fetched) */}
          <div className="border-b md:border-none border-gray-100 pb-4 md:pb-0">
            <FooterWrapper title="Categories">
              <ul className="flex flex-col gap-3 mt-4 md:mt-0 text-[15px] font-normal">
                {categories.length > 0 ? (
                  categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link href={`/categories/${cat.slug}`} style={{ color: brandPurple }} className="hover:opacity-60 transition-colors">
                        {cat.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  allowedSlugs.map((slug) => (
                    <li key={slug}>
                      <Link href={`/categories/${slug}`} style={{ color: brandPurple }} className="hover:opacity-60 capitalize transition-colors">{slug}</Link>
                    </li>
                  ))
                )}
              </ul>
            </FooterWrapper>
          </div>

          {/* Contact Details */}
          <div className="pb-4 md:pb-0">
            <FooterWrapper title="Contact">
              <address style={{ color: brandPurple }} className="not-italic text-[14px] font-normal flex flex-col gap-4 mt-4 md:mt-0 leading-relaxed">
                <p className="opacity-90">Bull Close Road,<br/> Lenton Industrial Estate,<br/>Nottingham NG7 2UT, England.</p>
                <div className="flex flex-col gap-2">
                  <Link href="mailto:customer.service@tigertigerfoods.com" className="hover:opacity-60 transition-colors underline underline-offset-4">customer.service@tigertigerfoods.com</Link>
                  <Link href="tel:+441159851301" className="hover:opacity-60 transition-colors">+44 (0) 115 985 1301</Link>
                </div>
              </address>
            </FooterWrapper>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ color: brandPurple }} className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] opacity-70">
        <p>© 2026. All Rights Reserved.</p>
      <p>Designed and Developed by <a href="https://www.teqnoor.com/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:opacity-60 transition-opacity">TeqNoor LTD</a></p>
      </div>
    </footer>
  );
};

export default Footer;
