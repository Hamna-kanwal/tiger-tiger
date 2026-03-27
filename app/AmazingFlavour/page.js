"use client";

import Link from "next/link";

// Framer motionbeginner level par error de sakta hai jab tak config na ho,
// isliye hum ne use hata kar simple CSS hover transitions lagayi hain.

export default function AmazingFlavour() {
  // Beginner level ke liye data direct file mein define kiya hai.
  // Baad mein aap isay api ya props se la sakte hain.
  // Zaroori Note: images ko project ke 'public' folder mein hona chahiye.
  const pulpData = [
    { 
      name: "Mango", 
      slug: "mango", 
      SKU: "mg-01", 
      featured_image: "/pulpcan.jpg" // dummy image path
    },
    { 
      name: "Lychee", 
      slug: "lychee", 
      SKU: "ly-01", 
      featured_image: "/pulpcan2.jpg" // dummy image path
    },
    { 
      name: "Guava", 
      slug: "guava", 
      SKU: "gu-01", 
      featured_image: "/pulpcan3.jpg" // dummy image path
    },
    { 
      name: "Coconut", 
      slug: "coconut", 
      SKU: "cc-01", 
      featured_image: "/pulpco.jpg" // dummy image path
    },
  ];

  // Custom Cursor Beginner level par unnecessary complexity add karta hai, isliye hata diya hai.

  return (
       <section 
      className="relative py-16 md:py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/pulp-Bg2.png')" }} // APNI BG IMAGE KA PATH YAHAN LIKHEIN
    >
      {/* Background complex image ko brand color se replace kiya beginners ke liye */}
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        
        {/* Title & Description */}
        <div className=" text-center md:text-left">
          {/* Eczar font standard sans/serif font se fallback ho jayega agar imported na ho */}
          <h1 className="text-center md:text-left eczar text-2xl md:text-3xl text-white mb-2">
            4 Amazing Flavours
          </h1>
          <p className="text-center md:text-left text-sm text-white mb-10">
            Pulp+ now available in 4 amazing flavours: Mango, Lychee, Guava, and
            Coconut water. Made with 100% real fruit with pulp.
          </p>
        </div>

 
{/* Flavours Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
  {pulpData?.map((flavour, index) => (
    <div 
      key={index} 
      className="flex justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <Link href={`/products/${flavour.slug}/${flavour.SKU}`}>
        {/* Overflow-hidden lagana zaroori hai taake image ke corners cut jayein */}
        <div className="rounded-[5%] overflow-hidden flex items-center justify-center bg-transparent">
          <img
            src={flavour.featured_image}
            alt={flavour.name}
            // 5% rounding yahan apply ho rahi hai
            className="w-auto h-[250px] object-cover rounded-[5%]"
          />
        </div>
      </Link>
    </div>
  ))}
</div>

        {/* Bottom Features Grid */}
        {/* gap-6 ko badal kar gap-2 ya gap-4 kar diya hai space kam karne ke liye */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-white text-center mt-10 max-w-5xl mx-auto ">
  
  <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/20 pb-2 md:pb-0 px-2">
    <p className="font-bold text-[20px] md:text-[25px] leading-tight">
      100% Real Fruit
    </p>
  </div>

  <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/20 pb-2 md:pb-0 px-2">
    <p className="font-bold text-[20px] md:text-[25px] leading-tight">
      No Added Sugar
    </p>
  </div>

  <div className="flex flex-col items-center justify-center px-2">
    <p className="font-bold text-[20px] md:text-[25px] leading-tight">
      Never From Concentrate
    </p>
  </div>

</div>
      </div>
    </section>
  );
}