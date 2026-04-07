"use client";

export default function InnovationSection() {
  return (
    <section className="bg-white py-24 md:py-36 overflow-hidden relative border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. TOP: Main Heading (Still - No Motion) */}
        <div className="text-center mb-12">
          <span className="outfit text-[#8b2d8e] font-bold tracking-[0.5em] text-[10px] uppercase block mb-6">
            Future Focused
          </span>
          <h2 className="eczar text-[30px] md:text-[50px] font-black text-[#4e1a51] leading-none tracking-tighter md:whitespace-nowrap">
            INNOVATION IN ASIAN FOOD DEVELOPMENT
          </h2>
        </div>

        {/* 2. MIDDLE: Paragraph Content (Still) */}
        <div className="text-center space-y-4 mb-20 max-w-4xl mx-auto">
          <p className="outfit text-gray-500 text-xl md:text-2xl font-light leading-relaxed italic">
            "We continuously adapt to changing food trends and customer needs."
          </p>
          <p className="outfit text-[#4e1a51] text-lg md:text-xl leading-relaxed opacity-80 max-w-3xl mx-auto font-medium">
            By combining traditional recipes with modern innovation, we develop products that help businesses stay competitive in the growing Asian food market.
          </p>
        </div>

        {/* 3. BOTTOM: The Goal Box (Still) */}
        <div className="relative bg-[#4e1a51] rounded-[40px] p-10 md:p-20 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h3 className="eczar text-[24px] md:text-[32px] text-white font-bold italic leading-tight">
              "Our goal is to provide ready-to-use ingredients that <span className="text-[#eed697]">simplify cooking</span> without sacrificing taste."
             </h3>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#eed697]/30" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#eed697]/30" />
        </div>

      </div>

      {/* Background Dots Texture (Still) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-30 -z-10" />
    </section>
  );
}