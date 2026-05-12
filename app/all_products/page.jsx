import React from 'react';

const ProductListing = () => {
  // Dummy products based on your image
  const products = [
    { id: 1, name: "MIXED SEED & PEANUT BAR (8X110g)", img: "/bar1.png" },
    { id: 2, name: "PUMPKIN SEED & PEANUT BAR", img: "/bar2.png" },
    { id: 3, name: "SESAME SEED & PEANUT BAR", img: "/bar3.png" },
    { id: 4, name: "CHICK PEAS SRIRACHA FLAVOUR", img: "/bar4.png" },
    { id: 5, name: "CHICK PEAS BBQ FLAVOUR", img: "/bar5.png" },
    { id: 6, name: "CHICK PEAS SWEET CHILLI FLAVOUR", img: "/bar6.png" },
    { id: 7, name: "FORTUNE COOKIES", img: "/cookie1.png" },
    { id: 8, name: "FORTUNE COOKIES", img: "/cookie2.png" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 md:px-8 lg:px-16 mt-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-[#4e1a51] mb-2">All Products</h1>
          <p className="text-gray-600 italic">Discover a wide range of products</p>
          <div className="w-20 h-1 bg-[#4e1a51] mt-4 rounded-full"></div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-center"
            >
              <div className="relative w-full aspect-square mb-6 overflow-hidden flex items-center justify-center bg-gray-50 rounded-xl">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-[#4e1a51] font-bold text-xs md:text-sm text-center uppercase tracking-wider h-10 flex items-center leading-tight">
                {product.name}
              </h3>
              
              <button className="mt-4 w-full bg-white border-2 border-[#4e1a51] text-[#4e1a51] py-2 rounded-full font-bold text-xs hover:bg-[#4e1a51] hover:text-white transition-colors duration-200">
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>

        {/* Results Counter */}
        <div className="mt-16 mb-6 text-center">
          <p className="text-[#4e1a51] font-semibold text-lg">
            Showing Results: <span className="font-bold">8 out of 367</span>
          </p>
        </div>

        {/* Pagination Section in Purple */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-8 pb-12">
          <button className="px-5 py-2 bg-[#4e1a51] text-white rounded-lg font-bold hover:bg-[#3a133d] transition-colors text-sm shadow-md">
            Start
          </button>
          <button className="px-5 py-2 bg-[#4e1a51] text-white rounded-lg font-bold hover:bg-[#3a133d] transition-colors text-sm shadow-md">
            Prev
          </button>

          <div className="flex gap-1 md:gap-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button 
                key={num}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all
                  ${num === 1 
                    ? 'bg-[#4e1a51] text-white shadow-inner' 
                    : 'text-[#4e1a51] hover:bg-[#4e1a51]/10'}`}
              >
                {num}
              </button>
            ))}
            <span className="text-[#4e1a51] py-2">..</span>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center text-[#4e1a51] font-bold hover:bg-[#4e1a51]/10">
              46
            </button>
          </div>

          <button className="px-5 py-2 bg-[#4e1a51] text-white rounded-lg font-bold hover:bg-[#3a133d] transition-colors text-sm shadow-md">
            Next
          </button>
          <button className="px-5 py-2 bg-[#4e1a51] text-white rounded-lg font-bold hover:bg-[#3a133d] transition-colors text-sm shadow-md">
            End
          </button>
        </div>

      </div>
    </main>
  );
};

export default ProductListing;