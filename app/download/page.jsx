"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-[#4e1a51] text-white flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Background Decorative Glow (Piche ka haseen glow effect) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6a256e] rounded-full blur-[150px] opacity-60 pointer-events-none z-0"></div>

      <div className="z-10 max-w-2xl w-full text-center space-y-8">
        
        {/* Back to Home Link */}
        <div className="text-left">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
            <IoMdArrowBack className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </div>

        {/* Header Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
            Get the Tiger Tiger App
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-md mx-auto">
            Scan the QR codes below with your phone camera or click the buttons to install directly on your device.
          </p>
        </div>

        {/* QR Codes Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto pt-4">
          
          {/* 1. Google Play Box */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center space-y-4 shadow-xl hover:border-white/20 transition-all">
            <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/tiger tiger foods.png" 
                alt="Google Play QR Code" 
                width={160} 
                height={160}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-white">Android Device</h3>
              <p className="text-xs text-white/60 mb-2">Scan to open in Google Play Store</p>
            </div>
            
          </div>

          {/* 2. App Store Box */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center space-y-4 shadow-xl hover:border-white/20 transition-all">
            <div className="bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/tiger tiger foods(1).png" 
                alt="App Store QR Code" 
                width={160} 
                height={160}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-white">iOS Device</h3>
              <p className="text-xs text-white/60 mb-2">Scan to open in Apple App Store</p>
            </div>
         
          </div>

        </div>
      </div>
    </main>
  );
}