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
                  
                    className="text-[16px] md:text-[18px] font-medium tracking-wide subHeading  "
                >
                    Over 200 Ways to Enjoy Real Asian Flavour.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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