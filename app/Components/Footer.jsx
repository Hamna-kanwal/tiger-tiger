import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../action'; 
import FooterWrapper from './FooterWrapper';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

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
        <p>Designed and Developed by <span className="font-semibold">TeqNoor LTD</span></p>
      </div>
    </footer>
  );
};

export default Footer;