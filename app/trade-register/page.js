"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function TradeRegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    contact_name: "", business_name: "", company_registration: "",
    company_vat: "", position_in_business: "", email: "",
    phone: "", password: "", address: "", address_2: "",
    city: "", state: "", zip_code: "", country: "",
    type_business: "", interest: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for verification message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    const requiredFields = ["contact_name", "business_name", "company_registration", "email", "password"];
    requiredFields.forEach(field => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("https://backend.tigertigerfoods.com/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Registration successful!");
        setIsSubmitted(true); // Form chhupa kar "Check Email" message dikhayenge
        
        // Optionally logic: Agar aap chahte hain user 5 second baad login page pe jaye
        setTimeout(() => router.push("/dashboard"), 6000);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Agar user register ho gaya hai toh ye UI dikhao
  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#FFFDF9] px-6">
        <div className="max-w-md w-full text-center p-10 bg-white border border-[#431A4F] rounded-3xl shadow-xl">
          <div className="text-6xl mb-6">📩</div>
          <h2 className="eczar text-3xl text-[#220016] mb-4">Verify Your Email</h2>
          <p className="text-gray-600 mb-6">
            We've sent a verification link to <strong>{formData.email}</strong>. 
            Please check your inbox (and spam folder) to activate your trade account.
          </p>
          <button 
            onClick={() => router.push("/login")}
            className="w-full bg-[#431A4F] text-white py-4 rounded-xl font-bold"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const inputClass = (name) => `w-full bg-white p-[20px] border ${errors[name] ? 'border-red-500' : 'border-[#220016]'} rounded-[14px] outline-none focus:border-2 focus:border-[#431A4F] transition-all`;

  return (
    <>
      <div className="h-[40vh] bg-[url('/bg.png')] bg-cover bg-center" />
      <section className="py-12 bg-[#FFFDF9]">
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Column: Billing */}
            <div className="space-y-4">
              <h2 className="eczar text-3xl text-[#220016]">Billing Information</h2>
              <input name="contact_name" value={formData.contact_name} onChange={handleChange} placeholder="Contact Name*" className={inputClass("contact_name")} />
              <input name="business_name" value={formData.business_name} onChange={handleChange} placeholder="Business Name*" className={inputClass("business_name")} />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email*" className={inputClass("email")} />
              <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password*" className={inputClass("password")} />
              {/* Baki fields yahan add karein... */}
            </div>

            {/* Right Column: Address */}
            <div className="space-y-4">
              <h2 className="eczar text-3xl text-[#220016]">Address Information</h2>
              <input name="address" value={formData.address} onChange={handleChange} placeholder="Address*" className={inputClass("address")} />
              <input name="city" value={formData.city} onChange={handleChange} placeholder="City*" className={inputClass("city")} />
              <select name="type_business" value={formData.type_business} onChange={handleChange} className={inputClass("type_business")}>
                <option value="">Select Type</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Retail Shop">Retail Shop</option>
              </select>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full mt-10 bg-[#FFEB57] border border-black text-black py-5 rounded-xl font-bold uppercase hover:bg-black hover:text-white transition-all disabled:opacity-50"
          >
            {loading ? "Processing..." : "Create Trade Account"}
          </button>
        </form>
        <ToastContainer />
      </section>
    </>
  );
}