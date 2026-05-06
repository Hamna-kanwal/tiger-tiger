"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Password toggle ke liye dono icons
import Image from 'next/image';

const TigerLoginBody = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="bg-[#FFFDF9] min-h-screen flex items-center justify-center p-6 md:mt-30">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Login Form */}
        <div className="flex flex-col order-2 md:order-1">
          <h1 className="text-[32px] text-[#4B2452] font-black mb-6 uppercase">
            Login
          </h1>
          <p className="text-[#333333] text-lg mb-8 leading-snug">
            Let’s get you up and running with your online Tiger Tiger account. <br />
            Login here.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-5 bg-[#E5E5E5] rounded-xl outline-none text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#4B2452]/20 transition"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password*"
                className="w-full p-5 bg-[#E5E5E5] rounded-xl outline-none text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#4B2452]/20 transition"
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#4B2452] transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex justify-between items-center text-[15px] font-medium pt-2">
              <a href="#" className="text-[#333333] hover:underline">Forgot Password?</a>
              <a href="#" className="text-[#333333] underline decoration-1 underline-offset-4">Create New Account</a>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#4B2452] text-white py-4 rounded-xl font-bold text-lg hover:opacity-95 transition shadow-md active:scale-[0.98]"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side: Image Section */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl order-1 md:order-2">
          <Image
            src="/Login_img.webp" 
            alt="Tiger Tiger Login"
            fill // Container ko pura bharne ke liye
            priority // Speed behtar karne ke liye
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

  
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </div>

      </div>
    </main>
  );
};

export default TigerLoginBody;