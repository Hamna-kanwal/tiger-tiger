import React from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

// 1. STANDARD WAY: Images ko upar import karein (Best for performance)
import mainImg from '@/public/image 4.png'; 
import overlayImg from '@/public/image 5.png';

const AboutSection = () => {
  const brandPurple = "#431A4F";

  return (
    <section className="py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Content */}
        <div className="relative h-[400px] md:h-[500px]">
          
          {/* Primary Image: Using 'fill' and 'object-cover' */}
          <div className="absolute top-0 right-0 w-[85%] h-[75%] overflow-hidden z-10 rounded-xl">
            <Image
              src={mainImg} 
              alt="Asian Cuisine"
              fill  // Standard: Responsive banane ke liye fill use karein
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur" // Standard: Loading ke waqt blur effect deta hai
              className="object-cover"
            />
          </div>

          {/* Secondary Image */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[55%] overflow-hidden z-20 rounded-xl border-4 border-white shadow-2xl">
            <Image
              src={overlayImg} 
              alt="Tiger Tiger Products" 
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
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