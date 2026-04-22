"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const brandPurple = "#431A4F";
  const brandGold = "#D2B57B";
  
  const [openIndex, setOpenIndex] = useState(0); 
  const [showAll, setShowAll] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where can I find a reliable Asian food supplier in the UK?",
      answer: "Finding a reliable Asian food supplier in the UK can be challenging, especially when consistency and authenticity matter. Tiger Tiger provides a trusted solution by offering a wide range of authentic Asian ingredients sourced from across Asia. We supply restaurants, retailers, and food businesses with high-quality products backed by decades of industry experience.",
    },
    {
      question: "Do you supply Asian ingredients in bulk for restaurants and wholesalers?",
      answer: "Yes, Tiger Tiger specialises in supplying Asian ingredients in bulk for restaurants, wholesalers, and foodservice businesses. Our product range is designed to meet high-volume demands while maintaining consistent quality, making it easier for businesses to manage supply without compromising on taste or standards.",
    },
    {
      question: "How do you ensure the authenticity of your Asian food products?",
      answer: "Maintaining authenticity is a common concern when sourcing Asian ingredients. Tiger Tiger addresses this by working directly with trusted suppliers across Asia and following traditional recipes and sourcing methods. This ensures that every product delivers the genuine flavour and quality expected in professional kitchens.",
    },
    {
      question: "What types of Asian cuisine ingredients do you offer?",
      answer: "Many businesses struggle to find a single supplier for multiple Asian cuisines. Tiger Tiger solves this by offering a diverse range of ingredients covering Japanese, Thai, Chinese, Korean, Vietnamese, and Indian cuisines. This allows restaurants and retailers to source everything they need from one trusted supplier.",
    },
    {
      question: "Are your Asian food products suitable for professional kitchens?",
      answer: "Yes, all Tiger Tiger products are developed with professional kitchens in mind. Whether you run a restaurant, catering service, or food business, our ingredients are selected for their quality, consistency, and ease of use, helping you deliver authentic dishes efficiently.",
    },
    {
      question: "How can I choose the right Asian ingredients supplier for my business?",
      answer: "Choosing the right supplier often depends on quality, pricing, and reliability. Tiger Tiger stands out by combining authentic sourcing, competitive wholesale pricing, and a strong distribution network. This ensures businesses receive high-quality products on time, making operations smoother and more reliable.",
    }
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="w-full bg-white py-16 px-6 md:py-24">
      {/* Width ko max-w-6xl tak restrict kiya hai taake ye thora compact lage */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* --- Left Side: Heading --- */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="eczar text-3xl md:text-[48px] font-bold text-[#431A4F] uppercase leading-[1.1] tracking-tight">
            Frequently Asked <br className="hidden md:block" /> Questions
          </h2>
          <p className="text-gray-500 max-w-xs leading-relaxed text-base md:text-[17px] outfit font-light">
            Find everything you need to know about our authentic Asian ingredients and wholesale services.
          </p>
        </div>

        {/* --- Right Side: FAQ List --- */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'shadow-md border-gray-200 bg-white' 
                    : 'border-gray-100 bg-[#FAFAFA]'
                }`}
              >
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors"
                >
                  <span className={`text-base md:text-lg font-bold leading-snug transition-colors duration-300 ${openIndex === index ? 'text-[#333333]' : 'text-[#431A4F]'}`}>
                    {faq.question}
                  </span>
                  
                  <div className="flex-shrink-0 ml-4" style={{ color: brandPurple }}>
                    {openIndex === index ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-6 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Read More Button --- */}
          {!showAll && (
            <div className="pt-6 flex justify-center md:justify-start">
              <button 
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                onClick={() => setShowAll(true)}
                style={{ 
                  borderColor: isBtnHovered ? brandGold : brandPurple,
                  color: isBtnHovered ? brandGold : brandPurple 
                }}
                className="px-8 py-3.5 border-2 bg-transparent rounded-full font-bold uppercase tracking-[0.1em] text-[11px] md:text-[12px] transition-all duration-300 active:scale-95 shadow-sm"
              >
                Read More FAQs
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;