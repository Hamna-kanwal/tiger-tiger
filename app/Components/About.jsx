import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link'; // <--- Yahan 'Link' capital hona chahiye

const AboutSection = () => {
  const brandPurple = "#431A4F";

  return (
    <section className="py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Visual Content: Video Section */}
        <div className="w-full">
          <video
            className="w-full h-auto max-h-[400px] object-contain rounded-xl shadow-2xl bg-black"
            autoPlay
            loop
            muted
            playsInline
          >
            <source 
              src="https://backend.tigertigerfoods.com/public/assets/Video/tiger_tiger_video.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 
            style={{ color: brandPurple }}
            className="text-[36px] md:text-[48px] font-bold leading-tight"
          >
            What We Do?
          </h2>

         <div className="space-y-1">
  <FeatureItem brandPurple={brandPurple} title="The Brand" text="Tiger Tiger is a premium Pan-Asian food, crafted by JK Foods UK." />
  <FeatureItem brandPurple={brandPurple} title="The Heritage" text="From the streets of Asia to your shelves, backed by decades of sourcing expertise." />
  <FeatureItem brandPurple={brandPurple} title="The Mission" text="Bringing bold, authentic Pan-Asian flavour to every food business — wholesale, retail and foodservice alike." />
  
  {/* Button Section */}
  <div className="pt-0">
    <p className="text-gray-800 font-medium mb-4">
      Trusted by retailers, wholesalers and kitchens across the UK
    </p>
    <Link 
      href="/categories" 
      className="inline-block px-5 py-2 rounded-lg font-bold text-white transition-all hover:opacity-90"
      style={{ backgroundColor: brandPurple }}
    >
      Explore the range
    </Link>
  </div>
</div>

         
        </div>

      </div>
    </section>
  );
};

const FeatureItem = ({ brandPurple, title, text }) => (
  <div className="flex gap-4">
    <div 
      className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center"
      style={{ borderColor: brandPurple }}
    >
      <Check size={14} style={{ color: brandPurple }} strokeWidth={3} />
    </div>
    <p className="text-gray-700 leading-relaxed">
      <span className="font-bold" style={{ color: brandPurple }}>{title}: </span>
      {text}
    </p>
  </div>
);

export default AboutSection;