"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Icon import kiya

export default function AppLandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative w-full h-full">
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative w-full bg-[#4e1a51] min-h-[600px] flex items-center overflow-hidden py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT CONTENT --- */}
          <div className="z-10 text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight eczar">
              Your Shortcut to Great Food Choices
            </h2>

            <div className="space-y-4 mb-10">
              <h3 className="text-xl md:text-2xl font-semibold opacity-90">
                Explore the full Tiger Tiger range in one place.
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg opacity-85">
                  <FaCheckCircle className="text-white/40" /> Simple to use,
                </li>
                <li className="flex items-center gap-3 text-lg opacity-85">
                  <FaCheckCircle className="text-white/40" /> Easy to navigate,
                </li>
                <li className="flex items-center gap-3 text-lg opacity-85">
                  <FaCheckCircle className="text-white/40" /> and always within reach.
                </li>
              </ul>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="transition-transform hover:scale-105">
                <Image 
                  src="/google-play-badge.png" 
                  alt="Get it on Google Play" 
                  width={160} 
                  height={50} 
                  className="object-contain"
                />
              </Link>
              <Link href="#" className="transition-transform hover:scale-105">
                <Image 
                  src="/app-store-badge.png" 
                  alt="Download on the App Store" 
                  width={160} 
                  height={50} 
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* --- RIGHT IMAGES (Phones) --- */}
          <div className="relative h-[500px] md:h-[700px] w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] h-full">
              <Image
                src="/mobile_image.webp"
                alt="Tiger Tiger App Interface"
                fill
                className="object-contain object-right-bottom"
                priority
              />
            </div>
          </div>
        </div>

        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#6a256e] rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
      </section>

      {/* ================= SECTION 2: INTRO & SEARCH ================= */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need, All in One App</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The Tiger Tiger app brings our entire product range together in a way that feels straightforward and easy to use.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative flex justify-center">
              <Image
                src="/mobile_phone.webp"
                alt="Easy Searching"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Designed to Make Things Easier</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#4e1a51] text-xl">Easy Browsing</h4>
                  <p className="text-gray-600">Move through categories without confusion. Everything is clearly organised.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#4e1a51] text-xl">Wide Product Range</h4>
                  <p className="text-gray-600">Access to a broad selection suited for both home cooking and business use.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#4e1a51] text-xl">Quick Access</h4>
                  <p className="text-gray-600">Your frequently viewed products are always within reach.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: SHOWCASE ================= */}
      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Explore More, <span className="text-[#4e1a51]">Search Less</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The app is built for people who want a smooth experience. Discover products naturally through well-structured categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
            <Image src="/iPhone 15 Pro Mockup1.webp" alt="M1" width={280} height={560} className="mx-auto drop-shadow-xl hover:scale-105 transition-transform" />
            <Image src="/iPhone 15 Pro Mockup2.webp" alt="M2" width={320} height={640} className="mx-auto scale-110 drop-shadow-2xl z-10 hover:scale-125 transition-transform" />
            <Image src="/iPhone 15 Pro Mockup3.webp" alt="M3" width={280} height={560} className="mx-auto drop-shadow-xl hover:scale-105 transition-transform" />
            <Image src="/iPhone 15 Pro Mockup4.webp" alt="M4" width={280} height={560} className="mx-auto drop-shadow-xl hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* ================= SECTION: WHY THE APP ================= */}
      <section className="w-full bg-[#F9FAFB] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Built Around <span className="text-[#4e1a51]">Everyday Use</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">No Distractions</h3>
              <p className="text-gray-600">Check products and manage tasks without unnecessary clutter.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Simple & Reliable</h3>
              <p className="text-gray-600">A consistent experience that works exactly the way you expect.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-gray-600">Get real-time updates on products and trends effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: TRUST ================= */}
      <section className="w-full bg-white py-24 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Image src="/image1.webp" alt="Reliable" width={500} height={500} className="object-contain drop-shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Simple, Practical, Reliable</h2>
            <p className="text-gray-600 text-lg">We’ve kept things clear and functional. Just a straightforward way to access Tiger Tiger.</p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: FINAL CTA ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-[#4e1a51] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Get Started Today</h2>
            <p className="text-purple-100 text-lg opacity-90">Download the Tiger Tiger app and make ordering easier than ever.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="bg-white text-[#4e1a51] px-10 py-4 rounded-2xl font-black text-lg hover:bg-[#C1D72E] transition-all">Download Now</Link>
              <Link href="#" className="border-2 border-white text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-[#4e1a51] transition-all">Get the App</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}