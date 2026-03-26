import React from 'react';
import Image from 'next/image';

const BrandIntro = () => {
  const stats = [
    { number: "200+", label: "Products" },
    { number: "Competitive", label: "Prices" },
    { number: "1000+", label: "UK F&B Businesses Served" },
    { number: "Bulk", label: "Orders" },
  ];

  return (
    // Reduced vertical padding from py-20 to py-12
    <section className="w-full bg-white py-12 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Smaller Logo Container */}
        <div className="mb-6">
          <Image 
            src="/logo.png" 
            alt="Tiger Tiger Logo" 
            width={200} // Reduced from 280
            height={60} 
            priority 
            className="object-contain"
          />
        </div>

        {/* Brand Description - More compact text and margin */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#4A5D23] text-[15px] md:text-[17px] leading-relaxed font-normal">
            If big flavours are your vibe, Tiger Tiger Foods is your new best friend. 
            We&apos;ve packed your pantry with iconic Asian flavours that slap—Japanese faves, 
            Thai spice bombs, Chinese classics, and Indian comfort hits. Only premium 
            ingredients because we don&apos;t mess with average. Think restaurant-level 
            goodness at home, minus the scary bills. We&apos;re here to bring bold, 
            boss-level flavour straight to your kitchen. Boring meals? Couldn&apos;t be us. 
            Let&apos;s upgrade that taste game.
          </p>
        </div>

        {/* Stats Grid - Smaller numbers and tighter gap */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 w-full">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[#4A5D23] text-[28px] md:text-[34px] font-bold block">
                {stat.number}
              </span>
              <span className="text-[#4A5D23] text-[16px] md:text-[18px] font-bold leading-tight max-w-[140px]">
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