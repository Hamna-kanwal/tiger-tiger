import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  // Brand color configuration
  const brandPurple = "#431A4F";
  
  // Image assets
  const mainImage = "/image 4.png";
  const overlayImage = "/image 5.png";

  return (
    <section className="py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Content: Overlapping Image Grid */}
        <div className="relative h-[400px] md:h-[500px]">
          {/* Primary Background Image */}
          <div className="absolute top-0 right-0 w-[85%] h-[75%] overflow-hidden z-10">
            <img 
              src={mainImage} 
              alt="Asian Cuisine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary Foreground Overlay Image */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[55%] overflow-hidden z-20">
            <img 
              src={overlayImage} 
              alt="Tiger Tiger Products" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content: Brand Details */}
        <div className="space-y-8">
          <h2 
            style={{ color: brandPurple }}
            className="eczar text-[36px] md:text-[48px] font-bold leading-tight"
          >
            What We Do?
          </h2>

          <div className="space-y-6">
            {/* Feature Item: The Brand */}
            <div className="flex gap-4">
              <div 
                className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: brandPurple }}
              >
                <Check size={14} style={{ color: brandPurple }} strokeWidth={3} />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold" style={{ color: brandPurple }}>The Brand: </span>
                Tiger Tiger is a premium Asian food brand developed by JK Foods UK Ltd, 
                one of the UK’s leading importers and distributors of authentic Asian ingredients.
              </p>
            </div>

            {/* Feature Item: The Heritage */}
            <div className="flex gap-4">
              <div 
                className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: brandPurple }}
              >
                <Check size={14} style={{ color: brandPurple }} strokeWidth={3} />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold" style={{ color: brandPurple }}>The Heritage: </span>
                With decades of experience in sourcing and supplying high-quality panAsian food products, 
                we have built a strong reputation for delivering consistency and taste across the globe.
              </p>
            </div>

            {/* Feature Item: The Mission */}
            <div className="flex gap-4">
              <div 
                className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: brandPurple }}
              >
                <Check size={14} style={{ color: brandPurple }} strokeWidth={3} />
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold" style={{ color: brandPurple }}>The Mission: </span>
                Our mission is to make authentic Asian ingredients accessible to every kitchen, 
                from professional chefs to home cooks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;