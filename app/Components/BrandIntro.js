import React from 'react';
import Image from 'next/image';

const BrandIntro = () => {
  const stats = [
    { number: "200+", label: "Products" },
    { number: "Competitive", label: "Prices" },
    { number: "1000+", label: "UK F&B Businesses Served" },
    { number: "Bulk", label: "Orders" },
  ];

  // Brand Purple Constant
  const brandPurple = "#4e1a51";

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo Container */}
        <div className="mb-8">
          <Image 
            src="/logo.png" 
            alt="Tiger Tiger Logo" 
            width={240} 
            height={80} 
            priority 
            className="object-contain"
          />
        </div>

        {/* Brand Description - Now font-normal for a cleaner look */}
        <div className="max-w-3xl mb-16">
          <p 
            className="text-black text-[16px] md:text-[19px] leading-relaxed font-normal"
          >
            If big flavours are your vibe, Tiger Tiger Foods is your new best friend. 
            We&apos;ve packed your pantry with iconic Asian flavours that slap—Japanese faves, 
            Thai spice bombs, Chinese classics, and Indian comfort hits. Only premium 
            ingredients because we don&apos;t mess with average. Think restaurant-level 
            goodness at home, minus the scary bills. We&apos;re here to bring bold, 
            boss-level flavour straight to your kitchen. Boring meals? Couldn&apos;t be us. 
            Let&apos;s upgrade that taste game.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Numbers remain Bold to stand out */}
              <span 
                style={{ color: brandPurple }} 
                className="text-[32px] md:text-[42px] font-bold block eczar"
              >
                {stat.number}
              </span>
              {/* Labels - Switched to font-medium and removed uppercase for a softer look */}
              <span 
                className="text-black text-[15px] md:text-[17px] font-medium leading-tight max-w-[160px] tracking-wide"
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandIntro;