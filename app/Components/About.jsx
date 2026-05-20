import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

// 1. STANDARD WAY: Images ko upar import karein (Best for performance)
import mainImg from '@/public/image 4.webp'; 
import overlayImg from '@/public/image 5.webp';

const AboutSection = () => {
  const brandPurple = "#431A4F";

  return (
    <section className="py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
 {/* Visual Content: Video Section */}
<div className="relative h-[400px] md:h-[500px] w-full">
  <video
    className="w-full h-full object-cover rounded-xl shadow-2xl"
    autoPlay
    loop
    muted
    playsInline
    // Agar video load hone mein time le toh yeh image dikhayega
    poster="/placeholder-image.jpg" 
  >
    {/* Ensure file name has no spaces and is in public folder */}
    <source src="/header_video_TT.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

        {/* Text Content */}
        <div className="space-y-8">
          <h2 
            style={{ color: brandPurple }}
            className="text-[36px] md:text-[48px] font-bold leading-tight"
          >
            What We Do?
          </h2>

          <div className="space-y-6">
            {/* Feature Item Component for cleaner code */}
            <FeatureItem brandPurple={brandPurple} title="The Brand" text="Tiger Tiger is a premium Asian food brand developed by JK Foods UK Ltd." />
            <FeatureItem brandPurple={brandPurple} title="The Heritage" text="With decades of experience in sourcing and supplying high-quality products." />
            <FeatureItem brandPurple={brandPurple} title="The Mission" text="Our mission is to make authentic Asian ingredients accessible to every kitchen." />
          </div>
        </div>

      </div>
    </section>
  );
};

// Reusable Sub-component for Standard DRY (Don't Repeat Yourself) code
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