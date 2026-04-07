"use client";

export default function GlobalSourcing() {
  const points = [
    "High-quality raw ingredients",
    "Authentic flavour profiles",
    "Reliable supply chain",
    "Ethical & sustainable sourcing",
  ];

  return (
    <section className="bg-[#431A4F] py-20 md:py-32 overflow-hidden relative">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#eed697]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content (Still) */}
          <div>
            <h2 className="eczar text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Global Sourcing for <br />
              <span className="text-[#eed697]">Authentic Taste</span>
            </h2>
            <p className="outfit text-white/70 text-lg font-light mb-12 leading-relaxed max-w-lg">
              Tiger Tiger sources ingredients directly from Asia, working with trusted producers and partners across the region.
            </p>

            {/* Simple Clean List with Gold Checks */}
            <div className="space-y-6 mb-10">
              {points.map((text, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-8 h-8 rounded-full border border-[#eed697]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#eed697] transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-[#eed697] group-hover:text-[#4e1a51]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="outfit text-white text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Added Line (Still) */}
            <p className="outfit text-[#eed697] text-lg italic border-l-2 border-[#eed697]/30 pl-6 py-2 max-w-md">
              This allows us to deliver products that meet the expectations of both chefs and businesses.
            </p>
          </div>

          {/* RIGHT SIDE: Visual Composition (Still) */}
          <div className="relative">
            {/* 1. Main Decorative Image */}
            <div className="relative z-10 rounded-[20px] overflow-hidden border border-white/10 shadow-2xl h-[450px] md:h-[550px]">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070" 
                alt="Asian Sourcing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4e1a51]/60 to-transparent" />
            </div>

            {/* 2. Floating Trusted Info Card (Still) */}
            <div className="absolute -bottom-8 -right-4 md:right-10 z-20 bg-white p-8 rounded-[40px] shadow-2xl max-w-[280px]">
              <div className="flex flex-col gap-4">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <div className="w-full h-full bg-[#eed697]/50" />
                     </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#4e1a51] text-white flex items-center justify-center text-[10px] outfit font-bold">+50</div>
                </div>
                <p className="eczar text-[#4e1a51] font-bold text-lg leading-tight">
                  Working with trusted producers across Asia.
                </p>
                <div className="h-1 w-12 bg-[#eed697] rounded-full" />
              </div>
            </div>

            {/* 3. Static "Authentic" Badge (No Spin) */}
            <div className="absolute -top-10 -left-10 z-0 w-32 h-32 hidden md:block opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                <text className="text-[10px] uppercase tracking-[2px] font-bold">
                  <textPath xlinkHref="#circlePath">Authentic • Asian • Sourcing • Original •</textPath>
                </text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}