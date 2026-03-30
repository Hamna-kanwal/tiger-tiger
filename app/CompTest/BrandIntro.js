import React from 'react';
import Image from 'next/image';

const BrandIntro = () => {
  const stats = [
    { number: "200+", label: "Products" },
    { number: "Competitive", label: "Prices" },
    { number: "1000+", label: "UK F&B Businesses Served" },
    { number: "Bulk", label: "Orders" },
  ];

  const brandPurple = "#4e1a51";
  const subHeadingColor = "#333333";

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* --- SECTION 1: LOGO & STATS --- */}
        <div className="mb-12">
          <Image 
            src="/logo.png" 
            alt="Tiger Tiger Logo" 
            width={240} 
            height={80} 
            priority 
            className="object-contain"
          />
        </div>

        <div className="max-w-3xl mb-16">
          <p 
            style={{ color: subHeadingColor }}
            className="text-[16px] md:text-[18px] leading-relaxed font-normal"
          >
            If big flavours are your vibe, Tiger Tiger Foods is your new best friend. 
            We&apos;ve packed your pantry with iconic Asian flavours that slap Japanese faves, 
            Thai spice bombs, Chinese classics, and Indian comfort hits. Only premium 
            ingredients because we don&apos;t mess with average. Think restaurant-level 
            goodness at home, minus the scary bills. We&apos;re here to bring bold, 
            boss-level flavour straight to your kitchen. Boring meals? Couldn&apos;t be us. 
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 w-full border-b border-gray-100 pb-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span 
                style={{ color: brandPurple }} 
                className="text-[36px] md:text-[48px] font-bold block eczar"
              >
                {stat.number}
              </span>
              <span 
                style={{ color: subHeadingColor }}
                className="text-[15px] md:text-[17px] font-medium leading-tight max-w-[160px] tracking-wide"
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* --- SECTION 2: CONTENT RICH AREA (SEO Focus) --- */}
        <div className="mt-20 flex flex-col items-center gap-8">
          <h2 
            style={{ color: brandPurple }}
            className="text-[40px] md:text-[64px] font-bold leading-tight tracking-tight eczar"
          >
            About us
          </h2>

          {/* 1000 Words Strategy: Dividing text into columns so it's readable */}
          <div 
            style={{ color: subHeadingColor }}
            className="text-left text-[16px] md:text-[18px] leading-relaxed font-normal max-w-5xl"
          >
           <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
</p>

<p>
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
</p>
          </div>

        
        </div>

      </div>
    </section>
  );
};

export default BrandIntro;