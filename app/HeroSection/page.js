"use client";

export default function Herosection() {
  const features = [
    { title: "High Quality", value: "Premium" },
    { title: "Competitive Prices", value: "Best Value" },
    { title: "1000+ UK F&B Served", value: "Trusted" },
    { title: "Bulk Orders", value: "Wholesale" },
  ];

  return (
    <section className="relative bg-[#f8f9fa] py-16 px-4 overflow-hidden">
      {/* Logo based subtle background element */}
      <div className="absolute top-0 right-0 w-64 h-64  rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#556D08] p-10 flex flex-col items-center justify-center text-center 
                         rounded-xl shadow-lg
                         hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Value Text - Logo Yellow/Gold color */}
              <span className="text-white text-4xl font-black mb-1 uppercase tracking-[0.3em">
                {feature.value}
              </span>
              
        <div className="text-[22px] text-white mb-5 tracking-tight  font-sans">
  ★  ★  ★  ★
</div>
              
              {/* Sub-title - Search bar jaisa clean dark grey */}
              <h3 className="text-white text-[12px] font-bold uppercase tracking-[0.3em]">
                {feature.title}
              </h3>

          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}