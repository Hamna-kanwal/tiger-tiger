import Link from "next/link";

export default function Product() {
  return (
    <section className="py-12 md:py-16 px-6 bg-white overflow-hidden">
      {/* max-w-7xl allows the heading to spread into a single line as shown in your image */}
      <div className="max-w-7xl mx-auto">
        
        {/* flex-row with items-center ensures the button is vertically aligned with the text */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* 1. Heading: Single line, dark green, serif font */}
            <h2 className="eczar font-bold text-[36px] md:text-[60px] text-[#30523E] tracking-tight leading-none">
              Fan-Favourite Flavours
            </h2>
            
            {/* 2. Sub-header: Small, sentence case, and dark purple/black as per image */}
            <p className="text-[14px] md:text-[16px] font-medium text-[#220016] mt-4">
              The Line-Up Everyone Loves
            </p>
          </div>

          {/* 3. Button: Large, rounded-2xl, and matches the Eczar font style */}
          <Link
            href="/"
            className="inline-block self-center md:self-auto text-black bg-[#F1D98F] px-10 py-5 rounded-[20px] text-[20px] md:text-[28px] eczar font-bold hover:bg-[#e6ce85] transition-all duration-300"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
}