"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import { registerTradeUser } from "../action"; 

export default function TradeRegisterPage() {
  useCanonical("/trade-register");
  const router = useRouter();

  const [formData, setFormData] = useState({
    contact_name: "",
    business_name: "",
    company_registration: "",
    company_vat: "",
    position_in_business: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    address_2: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    type_business: "",
    interest: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 5 Second baad login page par bhejne ka logic
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    const requiredFields = [
      "contact_name", "business_name", "company_registration",
      "position_in_business", "email", "phone", "password",
      "address", "city", "country", "zip_code", "type_business"
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "Required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.warn("Please fill all required fields correctly.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://backend.tigertigerfoods.com/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        toast.success("Account created! Redirecting...");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (name) => `w-full bg-white p-[20px] border rounded-[12px] outline-none transition-all ${errors[name] ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:border-[#4e1a51]'}`;

  // Success Screen: Screencapture ke mutabiq
  if (isSubmitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center bg-[#FFFDF9] px-6">
        <div className="max-w-md w-full text-center p-10 bg-white border border-[#4e1a51] rounded-3xl shadow-xl">
          <div className="text-6xl mb-6">📩</div>
          <h2 className="eczar text-3xl text-[#220016] mb-4">Verify Your Email</h2>
          <p className="text-gray-600 mb-8">
            Check your inbox at <strong>{formData.email}</strong> to activate your trade account.
          </p>
          <p className="text-sm text-gray-400 mb-4 italic">Redirecting to login in 5 seconds...</p>
          <button onClick={() => router.push("/login")} className="w-full bg-[#4e1a51] text-white py-4 rounded-xl font-bold">
            Go to Login
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="h-[40vh] bg-[url('/bg.png')] bg-cover bg-center" />

      <section className="py-16 bg-[#FFFDF9]">
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            
            {/* Billing Information Section */}
            <div className="md:w-1/2 flex flex-col gap-5">
              <h2 className="eczar text-4xl text-[#220016] mb-2 font-bold">Billing Information</h2>
              <input type="text" name="contact_name" value={formData.contact_name} onChange={handleChange} placeholder="Contact Name*" className={inputClass("contact_name")} />
              <input type="text" name="business_name" value={formData.business_name} onChange={handleChange} placeholder="Business Name*" className={inputClass("business_name")} />
              <input type="text" name="company_registration" value={formData.company_registration} onChange={handleChange} placeholder="Company Registration Number*" className={inputClass("company_registration")} />
              <input type="text" name="company_vat" value={formData.company_vat} onChange={handleChange} placeholder="Company VAT Number" className={inputClass("company_vat")} />
              <input type="text" name="position_in_business" value={formData.position_in_business} onChange={handleChange} placeholder="Position in Business*" className={inputClass("position_in_business")} />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" className={inputClass("email")} />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone*" className={inputClass("phone")} />
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password*" className={inputClass("password")} />
            </div>

            {/* Address Information Section */}
            <div className="md:w-1/2 flex flex-col gap-5">
              <h2 className="eczar text-4xl text-[#220016] mb-2 font-bold">Address Information</h2>
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address*" className={inputClass("address")} />
              <input type="text" name="address_2" value={formData.address_2} onChange={handleChange} placeholder="Address 2" className={inputClass("address_2")} />
              <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className={inputClass("city")} />
              <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className={inputClass("state")} />
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country*" className={inputClass("country")} />
              <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} placeholder="Zip Code*" className={inputClass("zip_code")} />

              <select name="type_business" value={formData.type_business} onChange={handleChange} className={inputClass("type_business")}>
                <option value="">Select Type of Business</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Retail Shop">Retail Shop</option>
                <option value="Food Service">Food Service</option>
              </select>

              <h3 className="eczar text-2xl mt-4 text-[#220016] font-bold">Primary Interest</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Chinese", "Thai", "Vietnamese", "Korean", "Japanese", "Indian"].map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input type="radio" name="interest" value={item} checked={formData.interest === item} onChange={handleChange} className="accent-[#4e1a51] h-4 w-4" />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full mt-12 bg-[#FFEB57] border border-black text-black py-5 rounded-xl font-bold text-xl uppercase hover:bg-black hover:text-white transition-all disabled:opacity-50">
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <ToastContainer />
      </section>
    </>
  );
}