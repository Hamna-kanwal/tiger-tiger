import React from 'react';

const ProductCTA = () => {
    // Brand Colors
    const brandPurple = "#4e1a51";

    return (
        <section className="w-full bg-white py-16 px-6 text-center font-sans">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

                {/* Main Heading */}
                <h2 
                    style={{ color: brandPurple }}
                    className="text-[40px] md:text-[60px] font-bold leading-tight tracking-tight eczar"
                >
                    More Choices. More Cravings.
                </h2>

                {/* Sub-heading */}
                <p 
                    style={{ color: brandPurple }}
                    className="text-[18px] md:text-[22px] font-medium tracking-wide opacity-80"
                >
                    Over 200 Ways to Enjoy Real Asian Flavour
                </p>

                {/* CTA Button - Purple Background with White Text */}
                <button 
                    style={{ backgroundColor: brandPurple }}
                    className="mt-4 text-white hover:brightness-125 transition-all duration-300 shadow-lg px-12 py-5 md:px-16 rounded-[20px] text-[20px] md:text-[26px] font-bold eczar"
                >
                    Browse All Products
                </button>

            </div>
        </section>
    );
};

export default ProductCTA;