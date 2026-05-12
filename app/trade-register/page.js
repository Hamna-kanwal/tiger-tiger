"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { registerTradeUser } from "../action"; 

export default function TradeRegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleFormAction(formData) {
    setLoading(true);
    const result = await registerTradeUser(formData);
    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      setTimeout(() => router.push("/login"), 2000);
    } else {
      toast.error(result.message);
    }
  }

  const inputClass = "w-full bg-white p-[20px] border border-[#220016] rounded-[14px] outline-none focus:border-2 focus:border-[#431A4F] transition-all";

  return (
    <section className="bg-[#FFFDF9]">
      <div className="w-full mb-12 h-[70vh] bg-[url('/bg.png')] bg-cover bg-center" />
      
      <form action={handleFormAction} className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Section 1: Billing */}
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

          {/* Section 2: Address */}
          <div className="space-y-4">
            <h2 className="eczar text-3xl text-[#220016]">Address Information</h2>
            <input name="address" placeholder="Address*" className={inputClass} required />
            <input name="address_2" placeholder="Address 2" className={inputClass} />
            <input name="city" placeholder="City*" className={inputClass} required />
            <input name="state" placeholder="State" className={inputClass} />
            <input name="country" placeholder="Country*" className={inputClass} required />
            <input name="zip_code" placeholder="Zip Code*" className={inputClass} required />
            
            <select name="type_business" className={inputClass} required>
              <option value="">Select Type</option>
              <option value="Wholesale">Wholesale</option>
              <option value="Retail Shop">Retail Shop</option>
            </select>

            <h3 className="eczar text-2xl pt-4">Primary Interest</h3>
            <div className="flex flex-wrap gap-4">
              {['Chinese', 'Thai', 'Vietnamese', 'Korean', 'Japanese', 'Indian'].map(c => (
                <label key={c} className="flex items-center gap-2">
                  <input type="radio" name="interest" value={c} className="w-4 h-4 accent-[#431A4F]" /> {c}
                </label>
              ))}
            </div>
          </div>
        </div>
<button 
  disabled={loading} 
  className="w-full mt-10 bg-[#431A4F] text-white border-2 border-[#431A4F] py-5 rounded-xl font-bold uppercase transition-all duration-300 hover:bg-white hover:text-[#431A4F] disabled:opacity-50"
>
  {loading ? "Signing Up..." : "Sign Up"}
</button>
      </form>
      <ToastContainer />
    </section>
  );
}