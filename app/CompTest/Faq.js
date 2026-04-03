"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false); // Baaki FAQs dikhane ke liye state

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: " Where can I find a reliable Asian food supplier in the UK?",
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

  // Sirf 3 dikhane hain ya saare, uska faisla yahan hoga
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="w-full bg-white py-12 px-4 md:py-20 flex flex-col items-center">
      {/* --- Heading --- */}
      <div className="text-center mb-10 md:mb-16">
        <h2 className="eczar text-3xl md:text-[45px] font-black text-[#431A4F] tracking-tighter uppercase leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      {/* --- FAQ List --- */}
      <div className="w-full max-w-3xl space-y-4">
        {displayedFaqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#333333]' : 'text-[#431A4F]'}`}>
                {faq.question}
              </span>
              
              <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#431A4F]' : 'text-[#431A4F]'}`}>
                {openIndex === index ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
              </div>
            </button>

            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-5 md:p-6 pt-0 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Read More Button --- */}
      {!showAll && (
        <div className="mt-10">
          <button 
            onClick={() => setShowAll(true)}
            className="px-12 py-4 border-2 border-[#431A4F] text-[#431A4F] rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#431A4F] hover:text-white transition-all duration-300 shadow-md"
          >
            Read More FAQs
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQSection;