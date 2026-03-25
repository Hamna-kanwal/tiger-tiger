import Link from "next/link";


export default function Product() {
  return (
    <section className="py-8 md:py-12 px-6 md:px-0 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="eczar font-semibold text-3xl md:text-[64px] leading-tight text-[#30523E]">
              Fan-Favourite Flavours
            </h2>
            <p className="text-sm md:text-base text-[#220016] text-[20px] font-medium mt-1 mb-12 md:mb-6">
              The Line Up Everyone Loves
            </p>
          </div>

          <Link
            href="/"
            className="self-center md:self-auto  text-[#30523E]  bg-[#F1D98F] px-[28px] py-[14px] rounded-[12px] text-sm md:text-[32px] eczar font-medium hover:bg-[#e6ce85] transition-colors"
          >
            View All
          </Link>
        </div>

        
      </div>
    </section>
  );
}