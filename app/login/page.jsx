"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; 
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { loginUser } from "../action"; // Server action import kiya

const TigerLoginBody = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Calling the Server Action
    const result = await loginUser(formData);

    if (result.success) {
      // LocalStorage update (Client side preference)
      if (result.userData) localStorage.setItem("user", JSON.stringify(result.userData));
      
      window.dispatchEvent(new Event("auth-changed"));
      toast.success(result.message || "Logged in successfully!", { autoClose: 1200 });

      setTimeout(() => router.push("/dashboard"), 900);
    } else {
      toast.error(result.message);
    }
    setLoading(false);
  };

  return (
    <main className="bg-[#FFFDF9] min-h-screen flex items-center justify-center p-6 md:mt-30">
      <ToastContainer position="top-right" />
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col order-2 md:order-1">
          <h1 className="text-[32px] text-[#4B2452] font-black mb-6 uppercase">Login</h1>
          <p className="text-[#333333] text-lg mb-8 leading-snug">
            Let’s get you up and running with your online Tiger Tiger account. <br />
            Login here.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full p-5 bg-[#E5E5E5] rounded-xl outline-none text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#4B2452]/20 transition"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password*"
                className="w-full p-5 bg-[#E5E5E5] rounded-xl outline-none text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-[#4B2452]/20 transition"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex justify-between items-center text-[15px] font-medium pt-2">
              <Link href="/reset-password" disable="true" className="text-[#333333] hover:underline">Forgot Password?</Link>
              <Link href="/trade-register" className="text-[#333333] underline decoration-1 underline-offset-4">Create New Account</Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-[#4B2452] text-white py-4 rounded-xl font-bold text-lg hover:opacity-95 transition shadow-md disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        <div className="relative w-full h-[400px] md:h-[600px] rounded-[30px] overflow-hidden shadow-2xl order-1 md:order-2">
          <Image src="/Login_img.webp" alt="Tiger Tiger Login" fill priority className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
        </div>

      </div>
    </main>
  );
};

export default TigerLoginBody;