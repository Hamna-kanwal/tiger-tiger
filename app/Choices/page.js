import React from 'react';

const ProductCTA = () => {

        return (
                <section className="w-full bg-white py-16 px-6 text-center font-sans">
                        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

                                {/* Main Heading - Using a serif-style font for 'More Choices' */}
                                <h2 className="text-[#30523E] text-[40px] md:text-[50px] font-bold leading-tight tracking-tight font-serif">


                                        More Choices. More Cravings.
                                </h2>

                                {/* Sub-heading */}
                                <p className="text-[#3A5233] text-[16px] md:text-[18px] font-medium tracking-wide">

                                        Over 200 Ways to Enjoy Real Asian Flavour
                                </p>

                                {/* Rounded CTA Button */}
                                <button className="mt-4 bg-[#EED697] hover:bg-[#e5cc88] text-[#4A5D23] text-[20px] md:text-[24px] font-bold py-4 px-10 md:px-14 rounded-[20px] transition-all duration-300 shadow-sm">

                                        Browse All Products
                                </button>

                        </div>
                </section>

        );

};

export default ProductCTA;
