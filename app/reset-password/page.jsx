"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendOtpAction } from "../action"; 

const ForgotPasswordBody = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await sendOtpAction(email);

    if (result.success) {
      toast.success(result.message || "OTP sent successfully!", { autoClose: 1500 });
      setTimeout(() => {
        router.push(`/forgot-password/verify-otp?email=${encodeURIComponent(email)}`);
      }, 1200);
    } else {
      toast.error(result.message);
    }
    setLoading(false);
  };

  return (
    // 1. md:mt-30 hata diya aur items-start use kiya taake content top se shuru ho
    <main className="bg-[#FFFDF9] min-h-screen flex justify-center p-6 pt-10 md:pt-20 mt-20">
      <ToastContainer position="top-right" />
      
      {/* 2. items-center ki jagah items-start kiya taake top space khatam ho */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Form Section */}
        <div className="flex flex-col gap-6 order-2 md:order-1 mt-4 md:mt-10">
          <h1 className="text-[32px] text-[#4B2452] font-black mb-1 uppercase">
            Change Password
          </h1>
          <p className="text-[#333333] text-lg mb-8 leading-snug">
            Verify your email to receive OTP
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                className="w-full bg-[#DBDBDB] p-[24px] rounded-[14px] outline-none text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#4B2452]/20 transition"
                required
                autoComplete="email"
              />
            </div>

           <button
  type="submit"
  disabled={loading}
  className="w-full bg-[#431A4F] text-white py-[20px] rounded-[14px] font-bold text-lg border-2 border-[#431A4F] hover:bg-white hover:text-[#431A4F] transition-all duration-300 shadow-md active:scale-[0.98] disabled:opacity-60"
>
  {loading ? "Sending..." : "Verify Email"}
</button>
          </form>

          <div className="pt-2">
            <Link href="/login" className="text-sm font-bold underline text-gray-700 hover:text-black">
              Login
            </Link>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl order-first md:order-none mb-8 md:mb-0">
          <Image
            src="/fg_bg.png"
            alt="Forgot Password Illustration"
            fill 
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </div>

      </div>
    </main>
  );
};

export default ForgotPasswordBody;