"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AppLandingPage() {
  const [mounted, setMounted] = useState(false);
  const [hoverApp, setHoverApp] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);

  // Variables jo aapke Link components use kar rahe hain
  const brandPurple = "#4e1a51"; 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative w-full h-full">
      <div className="w-full overflow-hidden">
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <Image
            src="/mobile image.png"
            alt="bg"
            fill
            className="object-cover"
          />

          {/* Content Box */}
          <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-lg mx-4">
            <h2 className="text-2xl font-semibold mb-3">
              Find what you need. <br /> Send one inquiry. Get quotes.
            </h2>


            <p className="text-gray-600 text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Source smarter. Pick products, add them to your inquiry list,
              and request quotes easily.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            </p>

  <div className="flex gap-4">
             <Link 
  href="#" 
  className="flex items-center gap-3 bg-white text-[#4e1a51] border border-gray-300 px-10 py-4 rounded-xl font-bold
             hover:bg-[#4e1a51] hover:text-[white]"
>
  Download Android
</Link>
            <Link 
  href="#" 
  className="flex items-center gap-3 bg-[#4e1a51] text-white border border-gray-300 px-10 py-4 rounded-xl font-bold 
             hover:bg-[white] hover:text-[#4e1a51] hover:border-[#4e1a51] "
>
  Download iOS
</Link>
          </div>
          </div>

          {/* Mobile Image */}
          <div className="absolute mt-20 right-50 -bottom-[140px] hidden z-40 md:block">
            <Image
              src="/mobile_image.png"
              alt="phone"
              width={800}
              height={800}
              className="object-contain"
            />
          </div>
        </section>
      </div>

      {/* ================= SECTION 2: SEARCH FEATURE ================= */}
      <section className="relative w-full bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-full p-0 relative flex justify-center md:justify-start">
            <div className="relative w-full h-full aspect-square">
              <Image
                src="/mobile_phone.png"
                alt="Searching products"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-full px-6 md:px-0">
            <div className="flex items-center gap-6">
              {[
                { id: 1, src: "/Soda_Can_Mockup1.png" },
                { id: 2, src: "/Soda_Can_Mockup2.png" },
                { id: 3, src: "/Soda_Can_Mockup_3.png" },
              ].map((product) => (
                <div
                  key={product.id}
                  className="w-full h-full bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-2"
                >
                  <Image
                    src={product.src}
                    width={250}
                    height={350}
                    alt="Product"
                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight mt-10">
              Search for your <br /> favourite product
            </h2>
            <p className="text-gray-600 text-lg md:text-2xl font-medium max-w-xl leading-relaxed">
              180+ products to search from, right under your finger tips
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: STEPS ================= */}
      <section className="w-full bg-[#E5E5E5] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#C1D72E] h-30 md:h-60 rounded-[1rem] items-center justify-center p-6 shadow-sm hover:scale-105 transition-transform duration-300">
              <p className="text-[#333333] text-xl md:text-2xl font-bold text-center leading-tight">Register Your Trade</p>
              <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  
              </p>
            </div>
            <div className="bg-[#8EE9E6] h-40 md:h-60 rounded-[1rem] items-center justify-center p-6 shadow-sm hover:scale-105 transition-transform duration-300">
              <p className="text-[#333333] text-xl md:text-2xl font-bold text-center leading-tight">Browse Through 180+ Products</p>
                 <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   
                    
              </p>
            </div>
            <div className="bg-[#FF5A5F] h-40 md:h-60 rounded-[1rem]  items-center justify-center p-6 shadow-sm hover:scale-105 transition-transform duration-300">
              <p className="text-[#333333] text-xl md:text-2xl font-bold text-center leading-tight">Add To Inquiry Cart</p>
              <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-[#FFD700] h-40 md:h-60 rounded-[1rem]  items-center justify-center p-6 shadow-sm hover:scale-105 transition-transform duration-300">
              <p className="text-[#333333] text-xl md:text-2xl font-bold text-center leading-tight">Get a Quote</p>
              <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: SHOWCASE ================= */}
      <section className="w-full bg-[#F5F5F5] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Seamless Ordering Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end">
            <div className="relative flex justify-center hover:scale-105 transition-transform duration-500">
              <Image src="/iPhone 15 Pro Mockup1.png" alt="Screen 1" width={300} height={600} className="object-contain drop-shadow-2xl" />
            </div>
            <div className="relative flex justify-center hover:scale-110 transition-transform duration-500 z-10">
              <Image src="/iPhone 15 Pro Mockup2.png" alt="Screen 2" width={600} height={1200} priority className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] w-full h-auto scale-110 md:scale-125" />
            </div>
            <div className="relative flex justify-center hover:scale-105 transition-transform duration-500">
              <Image src="/iPhone 15 Pro Mockup3.png" alt="Screen 3" width={400} height={700} className="object-contain drop-shadow-2xl" />
            </div>
            <div className="relative flex justify-center hover:scale-105 transition-transform duration-500">
              <Image src="/iPhone 15 Pro Mockup4.png" alt="Screen 4" width={300} height={600} className="object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: DOWNLOAD ================= */}
      <section className="bg-[#e5e7eb] min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute -left-10 lg:-left-20 top-1/2 -translate-y-1/2 z-10">
          <Image src="/image1.png" alt="App Preview" width={600} height={600} className="w-[450px] lg:w-[600px] h-auto drop-shadow-2xl object-contain" />
        </div>

        <div className="container mx-auto flex justify-end px-6 lg:px-20">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-10">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p className="mt-6 text-gray-600 text-xl max-w-xl">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link 
  href="#" 
  className="flex items-center gap-3 bg-white text-[#4e1a51] border border-gray-300 px-10 py-4 rounded-xl font-bold
             hover:bg-[#4e1a51] hover:text-[white]"
>
  Download Android
</Link>
            <Link 
  href="#" 
  className="flex items-center gap-3 bg-[#4e1a51] text-white border border-gray-300 px-10 py-4 rounded-xl font-bold 
             hover:bg-[white] hover:text-[#4e1a51] hover:border-[#4e1a51] "
>
  Download iOS
</Link>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}