"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerTradeUser } from "../action"; 

export default function TradeRegisterPage() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleFormAction(formData) {
    setLoading(true);
    const result = await registerTradeUser(formData);
    setLoading(false);

    if (result.success) {
      // Switch the view to the success message
      setIsSubmitted(true);
      toast.success("Registration request sent successfully!");
    } else {
      toast.error(result.message || "Registration failed. Please try again.");
    }
  }

  const inputClass = "w-full bg-white p-[20px] border border-[#220016] rounded-[14px] outline-none focus:border-2 focus:border-[#431A4F] transition-all";

  return (
    <section className="bg-[#FFFDF9] min-h-screen pb-20">
      <div className="w-full mb-12 h-[40vh] bg-[url('/bg.png')] bg-cover bg-center" />
      
      <div className="max-w-6xl mx-auto px-6">
        {!isSubmitted ? (
          /* --- Registration Form --- */
          <form action={handleFormAction}>
            <div className="grid md:grid-cols-2 gap-10">
              
              {/* Section 1: Billing Information */}
              <div className="space-y-4">
                <h2 className="eczar text-3xl text-[#220016]">Billing Information</h2>
                <input name="contact_name" placeholder="Contact Name*" className={inputClass} required />
                <input name="business_name" placeholder="Business Name*" className={inputClass} required />
                <input name="company_registration" placeholder="Company Registration Number*" className={inputClass} required />
                <input name="company_vat" placeholder="Company VAT Number" className={inputClass} />
                <input name="position_in_business" placeholder="Position in Business*" className={inputClass} required />
                <input name="email" type="email" placeholder="Email*" className={inputClass} required />
                <input name="phone" placeholder="Phone*" className={inputClass} required />
                <input name="password" type="password" placeholder="Password*" className={inputClass} required />
              </div>

              {/* Section 2: Address Information */}
              <div className="space-y-4">
                <h2 className="eczar text-3xl text-[#220016]">Address Information</h2>
                <input name="address" placeholder="Address*" className={inputClass} required />
                <input name="address_2" placeholder="Address 2" className={inputClass} />
                <input name="city" placeholder="City*" className={inputClass} required />
                <input name="state" placeholder="State" className={inputClass} />
                <input name="country" placeholder="Country*" className={inputClass} required />
                <input name="zip_code" placeholder="Zip Code*" className={inputClass} required />
                
                <select name="type_business" className={inputClass} required>
                  <option value="">Select Business Type</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Retail Shop">Retail Shop</option>
                </select>

                <h3 className="eczar text-2xl pt-4">Primary Interest</h3>
                <div className="flex flex-wrap gap-4">
                  {['Chinese', 'Thai', 'Vietnamese', 'Korean', 'Japanese', 'Indian'].map(cuisine => (
                    <label key={cuisine} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="interest" value={cuisine} className="w-4 h-4 accent-[#431A4F]" /> 
                      <span className="text-gray-700">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button 
              disabled={loading} 
              className="w-full mt-10 bg-[#431A4F] text-white border-2 border-[#431A4F] py-5 rounded-xl font-bold uppercase transition-all duration-300 hover:bg-white hover:text-[#431A4F] disabled:opacity-50"
            >
              {loading ? "Submitting Request..." : "Register Account"}
            </button>
          </form>
        ) : (
          /* --- Success Message (Visible after submission) --- */
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-[20px] shadow-sm border border-gray-100 animate-fade-in">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="eczar text-4xl text-[#220016] mb-4">Registration Received!</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Thank you for registering. Our team is currently reviewing your information and will contact you shortly to complete the process.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-8 text-[#431A4F] font-semibold underline"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </section>
  );
}