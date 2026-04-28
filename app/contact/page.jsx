"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('../Components/MapSection'), { 
  ssr: false, // Yeh line boht zaroori hai
  loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-3xl" />
});;

const ContactSection = () => {
  // Exact coordinates for Bull Close Road, Nottingham
  const officeLocation = [52.9372, -1.1764];

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- FORM & DETAILS SECTION --- */}
        <div className="text-center mb-16 mt-20">
          <p className="text-[#4e1a51] text-[18px] font-bold uppercase mb-2">Contact</p>
          <h1 className="text-[40px] md:text-[65px] font-bold text-[#4e1a51] leading-tight mb-6">
            Get in touch with us
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            Ready to bring authentic Asian flavours to your business? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start mb-24">
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-[60%] space-y-4">
            <input type="text" placeholder="Name*" className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none focus:ring-2 focus:ring-[#4e1a51] outline-none text-black" />
            <input type="email" placeholder="Email*" className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none focus:ring-2 focus:ring-[#4e1a51] outline-none text-black" />
            <input type="text" placeholder="Phone*" className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none focus:ring-2 focus:ring-[#4e1a51] outline-none text-black" />
            <textarea placeholder="Message*" rows={6} className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none focus:ring-2 focus:ring-[#4e1a51] outline-none resize-none text-black" />
            <button className="w-full md:w-auto px-16 py-4 bg-[#4e1a51] text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all">
              Send message
            </button>
          </div>

          {/* Right Side: Info Details (Updated Location) */}
          <div className="w-full md:w-[40%] space-y-10 pt-4 text-black">
            <div className="space-y-2">
              <h3 className="text-[32px] font-bold text-[#4e1a51]">Visit us</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Bull Close Road Lenton Industrial Estate, Nottingham <br />
                NG7 2UT, England.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[32px] font-bold text-[#4e1a51]">Call us</h3>
              <p className="text-gray-700 leading-relaxed font-medium">+44 (0) 115 985 1301</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-[32px] font-bold text-[#4e1a51]">Email us</h3>
              <p className="text-gray-700 leading-relaxed font-medium">customer.service@tigertigerfoods.com</p>
            </div>
          </div>
        </div>
        
        <div className="w-full space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-[40px] font-bold text-[#4e1a51]">Our Location</h2>
       
          </div>

          {/* Map Section Call with Nottingham Coordinates */}
          <div className="w-full h-[550px] relative">
             <MapSection position={officeLocation} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;