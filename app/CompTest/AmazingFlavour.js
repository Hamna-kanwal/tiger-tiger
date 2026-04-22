import React from 'react';
import Image from 'next/image';

const WhoWeServe = () => {
  const cards = [
    {
      title: "Restaurants and takeaways",
      description: "Bulk ingredients for professional kitchens",
      iconPath: "/icons/bag.svg", 
    },
    {
      title: "Supermarkets & grocery",
      description: "Retail-ready packaging and supply",
      iconPath: "/icons/retail.svg",
    },
    {
      title: "Food distributors",
      description: "Volume pricing, reliable supply chain",
      iconPath: "/icons/export.svg",
    },
    {
      title: "Catering services",
      description: "Event and institutional catering supply",
      iconPath: "/icons/food-service.svg",
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 bg-white ">
      <section className="bg-[#F8F1E2] p-5 md:p-8 lg:p-12 rounded-[40px] max-w-7xl w-full border border-purple-900/10 shadow-sm relative overflow-hidden">
        
        {/* Background Cans */}
        <div className="absolute -left-30 -bottom-70 rotate-[-15deg] w-72 md:w-96 lg:w-[450px] z-0 origin-bottom-left opacity-50 lg:opacity-100">
          <Image src="/pulpCan.png" alt="Can" width={1000} height={1200} className="object-contain" priority />
        </div>
        <div className="absolute -right-30 -bottom-40 rotate-[20deg] w-72 md:w-96 lg:w-[400px] z-0 origin-bottom-right opacity-50 lg:opacity-100">
          <Image src="/pulpCan2.png" alt="Can" width={1000} height={1200} className="object-contain" priority />
        </div>

        <div className="relative z-10 flex flex-col gap-10">
          
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 md:px-8">
            
            {/* Left Side: Isko right shift kiya 'lg:pl-16' se */}
            <div className="space-y-6 lg:pl-4 mb-7">
              <h4 className="uppercase tracking-[2px] text-[#4E1A51] text-[14px] font-bold">Who we serve</h4>
              <h2 className="text-[32px] md:text-[45px] lg:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Supporting <br /> 
                Restaurants, <span className="text-[#4E1A51]"> Retailers & Food Businesses</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-md">
                Tiger Tiger is designed to support professional kitchens and food businesses.
              </p>
            </div>

            {/* Right Side: Cards */}
            <div className="w-full"> 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full pr-4">
                {cards.map((card, index) => (
                  <div 
                    key={index} 
                  className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-[0_10px_30px_rgba(78,26,81,0.15)] hover:shadow-[0_20px_40px_rgba(78,26,81,0.25)] transition-all flex flex-row items-start gap-4 min-h-[130px]">
                    <div className="flex-shrink-0 text-[#4E1A51] w-12 h-12 flex items-center justify-center rounded-lg bg-[#4E1A51]/5">
                      <Image src={card.iconPath} alt={card.title} width={35} height={35} className="object-contain" />
                    </div>
                    
                    <div className="pt-0.5 flex-1">
                      <h3 className="font-bold text-[#1A1A1A] mb-1 text-[16px] leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-[13px] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Line: Isko bhi right shift kiya 'lg:ml-24' se */}
          <div className="border-l-[3px] border-[#4E1A51] pl-4 py-4   max-w-2xl  lg:ml-24 relative z-10">
            <p className="text-gray-700 font-medium italic text-[17px]">
              Our products help businesses improve efficiency and deliver authentic dishes consistently.
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;