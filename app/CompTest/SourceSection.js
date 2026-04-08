"use client";

export default function GlobalSourcing() {
  const brandGold = "#D2B57B";
  const points = [
    "High-quality raw ingredients",
    "Authentic flavour profiles",
    "Reliable supply chain",
    "Ethical & sustainable sourcing",
  ];

  return (
    <section className="bg-[#431A4F] py-20 md:py-32 overflow-hidden relative">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#D2B57B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <div>
            <h2 className="eczar text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Global Sourcing for <br />
              <span style={{ color: brandGold }}>Authentic Taste</span>
            </h2>
            <p className="outfit text-white/70 text-lg font-light mb-12 leading-relaxed max-w-lg">
              Tiger Tiger sources ingredients directly from Asia, working with trusted producers and partners across the region.
            </p>

            {/* Simple Clean List with Gold Checks */}
            <div className="space-y-6 mb-10">
              {points.map((text, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div 
                    style={{ borderColor: `${brandGold}4d` }} // 30% opacity brand gold
                    className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 group-hover:bg-[#D2B57B] transition-all duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-[#D2B57B] group-hover:text-[#431A4F]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="outfit text-white text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Updated Line to match your thickness preference */}
            <p 
              style={{ borderColor: brandGold }} 
              className="outfit text-white/90 text-lg italic border-l-[5px] pl-6 py-2 max-w-md"
            >
              This allows us to deliver products that meet the expectations of both chefs and businesses.
            </p>
          </div>

          {/* RIGHT SIDE: Visual Composition */}
          <div className="relative">
            {/* Main Decorative Image - Card/Badge removed as requested */}
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl h-[450px] md:h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070" 
                alt="Asian Sourcing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#431A4F]/60 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}