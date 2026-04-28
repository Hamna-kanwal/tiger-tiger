import React from 'react';

const ProductCTA = () => {
    // Brand Colors
    const brandPurple = "#4e1a51";

    return (
      <section className="w-full bg-white py-16 px-6 text-center font-sans">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

        {/* Main Heading */}
      

        {/* --- SEO UPDATED SUB-HEADING --- */}
        <div className="space-y-4">
            <h3 className="text-[32px] font-bold text-gray-800">
             Authentic Pan-Asian Food Products for Every Kitchen
            </h3>
            
            
          <p className="text-[#333333] md:text-[16px] text-sm md:text-base leading-relaxed mb-6">
              At Tiger Tiger, we offer a diverse range of products covering multiple Asian cuisines. Our carefully sourced ingredients allow chefs and businesses to create traditional dishes with confidence.
            </p>
        </div>

      

    </div>
</section>
    );
};

export default ProductCTA;