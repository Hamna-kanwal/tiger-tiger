import React from 'react';
import { Eye } from 'lucide-react'; // Eye icon ke liye

const TigerLoginBody = () => {
  return (
    <main className="bg-[#FFFDF9] min-h-screen flex items-center justify-center p-6 mt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Login Form */}
        <div className="flex flex-col">
          <h1 className="text-[32px] text-[#4B2452] font-black mb-6 uppercase" style={{ fontFamily: 'serif' }}>
            Login
          </h1>
          <p className="text-[#333333] text-lg mb-8 leading-snug">
            Let’s get you up and running with your online Tiger Tiger account. <br />
            Login here.
          </p>

          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-5 bg-[#E5E5E5] rounded-xl outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password*"
                className="w-full p-5 bg-[#E5E5E5] rounded-xl outline-none text-gray-700 placeholder-gray-500"
              />
              <button type="button" className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600">
                <Eye size={20} />
              </button>
            </div>

            <div className="flex justify-between items-center text-[15px] font-medium pt-2">
              <a href="#" className="text-[#333333] hover:underline">Forgot Password?</a>
              <a href="#" className="text-[#333333] underline decoration-1 underline-offset-4">Create New Account</a>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#4B2452] text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-md"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side: Image Section */}
       <div className="relative w-full h-[500px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl mt-20">
  {/* Image Section */}
  <img
    src="/Login_img.png" 
    alt="Person with Cramm'd product"
    className="w-full h-full object-cover object-center"
  />

  {/* Cart Float Button */}
  <button 
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-l-full shadow-xl border border-gray-100 hover:bg-gray-50 transition-all duration-300 group"
    aria-label="View Cart"
  >
    <div className="transform group-hover:scale-110 transition-transform">
      <span className="text-2xl">🛒</span>
    </div>
  </button>

  {/* Optional: Overlay gradient for better contrast */}
  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
</div>

      </div>
    </main>
  );
};

export default TigerLoginBody;