"use client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TradeRegisterPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);  // ✅ Modal state
  const [modalMessage, setModalMessage] = useState({ title: "", message: "" });

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
    zip_code: "",
    country: "",
    type_business: "",
    interest: "",
  });

  // Load cart
  useEffect(() => {
    const loadCart = () => {
      try {
        const cartData = sessionStorage.getItem("inquiry_cart");
        if (cartData) {
          const parsedCart = JSON.parse(cartData);
          setCart(parsedCart);
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error("Error loading cart:", error);
        setCart([]);
      }
    };
    loadCart();
    
    const handleCartUpdate = () => {
      const updated = sessionStorage.getItem("inquiry_cart");
      if (updated) {
        setCart(JSON.parse(updated));
      } else {
        setCart([]);
      }
    };
    
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    const requiredFields = [
      "contact_name", "business_name", "company_registration",
      "position_in_business", "address", "country", "zip_code",
      "email", "phone", "password"
    ];

    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "Required";
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (formData.phone && formData.phone.length < 10) {
      newErrors.phone = "Min 10 digits";
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Min 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearCart = () => {
    sessionStorage.removeItem("inquiry_cart");
    setCart([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // ✅ Show Success Modal
  const showSuccessModal = () => {
    setModalMessage({
      title: "Thank You for Your Enquiry!",
      message: "Your registration and enquiry have been submitted successfully. Our team will contact you within 24 hours. A confirmation email has been sent to your email address."
    });
    setShowModal(true);
    
    // Auto redirect after 5 seconds
    setTimeout(() => {
      setShowModal(false);
      router.push("/");
    }, 5000);
  };

  // ✅ Show Error Modal
  const showErrorModal = (errorMessage) => {
    setModalMessage({
      title: "❌ Submission Failed",
      message: errorMessage || "Something went wrong. Please try again later."
    });
    setShowModal(true);
    
    // Auto close after 2 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  // ==================== MAIN HANDLE SUBMIT ====================
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      toast.warn("Please fill all required fields.");
      return;
    }
    
    setLoading(true); // ✅ Fixed crash: changing from loading(true) to setLoading(true)

    try {
      // Step 1: Register User (Always)
      const registerRes = await fetch("https://backend.tigertigerfoods.com/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const registerData = await registerRes.json();
      console.log("Register Response:", registerData);

      if (registerData.success === true) {
        const userId = registerData.user?.id;
        
        // ✅ Check if cart has products
        if (cart.length === 0) {
          // Only registration, no enquiry
          clearCart();
          setModalMessage({
            title: "Registration Successful! 🎉",
            message: "Your account has been created successfully. Our team will contact you within 24 hours."
          });
          setShowModal(true);
          
          setTimeout(() => {
            setShowModal(false);
            router.push("/");
          }, 3000);
          
        } else {
          // Registration + Enquiry (Cart has products)
          const enquiryData = {
            user_id: userId,
            name: formData.contact_name,
            email: formData.email,
            business_name: formData.business_name,
            company_name: formData.company_registration,
            vat_no: formData.company_vat || "",
            address: formData.address,
            country: formData.country,
            state: formData.state,
            city: formData.city,
            postal_code: formData.zip_code,
            phone: formData.phone,
            cart: cart,
          };

          console.log("Sending Enquiry with user_id:", enquiryData);

          const enquiryRes = await fetch("https://backend.tigertigerfoods.com/api/send-enquiry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(enquiryData),
          });

          const enquiryResponse = await enquiryRes.json();
          console.log("Enquiry Response:", enquiryResponse);

          if (enquiryResponse.success === true) {
            clearCart();
            showSuccessModal();
          } else {
            showErrorModal(enquiryResponse.message || "Enquiry submission failed. Please try again.");
          }
        }
        
      } else {
        showErrorModal(registerData.message || "Registration failed. Please try again.");
      }
      
    } catch (err) {
      console.error("Submit error:", err);
      showErrorModal("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const ErrorMsg = ({ name }) => (
    errors[name] ? <span className="text-red-500 text-xs ml-2">{errors[name]}</span> : null
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
  <div className="relative h-[600px] md:h-[400px] w-full overflow-hidden">
  {/* Optimization ke liye Next/Image use karein */}
  <Image 
    src="/bg.png" 
    alt="Background" 
    fill 
    priority={true} // Hero section hai isliye priority true rakhein
    className="object-cover" 
    sizes="100vw"
    quality={75} // Size kam karne ke liye
  />
  
  {/* Overlay aur Content */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>
  <div className="relative z-20 flex items-center justify-center h-full">
    <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
      Complete Your Registration
    </h1>
  </div>
</div>

      <section className="py-12 bg-[#F8FAFC]">
        <form onSubmit={handleSubmit}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* LEFT: Form Container (Bigger Size) */}
               <div className="w-full lg:w-3/4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-[#40023F] px-6 py-4">
                    <h2 className="text-2xl font-bold text-white">Registration Form</h2>
                    <p className="text-purple-200 text-sm">Fill in your details to proceed</p>
                  </div>
                  
                  <div className="p-6 max-h-[600px] overflow-y-auto custom-scroll">
                    {/* Billing Section */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#40023F] mb-4 pb-2 border-b-2 border-[#40023F] inline-block">
                        Billing Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                          <input type="text" name="contact_name" value={formData.contact_name} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.contact_name ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="contact_name" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                          <input type="text" name="business_name" value={formData.business_name} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.business_name ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="business_name" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company Registration *</label>
                          <input type="text" name="company_registration" value={formData.company_registration} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.company_registration ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="company_registration" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company VAT</label>
                          <input type="text" name="company_vat" value={formData.company_vat} onChange={handleChange} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Position in Business *</label>
                          <input type="text" name="position_in_business" value={formData.position_in_business} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.position_in_business ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="position_in_business" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="email" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="phone" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                          <input type="password" name="password" value={formData.password} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="password" />
                        </div>
                      </div>
                    </div>

                    {/* Address Section */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#40023F] mb-4 pb-2 border-b-2 border-[#40023F] inline-block">
                        Address Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                          <input type="text" name="address" value={formData.address} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.address ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="address" />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address 2</label>
                          <input type="text" name="address_2" value={formData.address_2} onChange={handleChange} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                          <input type="text" name="city" value={formData.city} onChange={handleChange} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                          <input type="text" name="state" value={formData.state} onChange={handleChange} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                          <input type="text" name="country" value={formData.country} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.country ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="country" />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
                          <input type="text" name="zip_code" value={formData.zip_code} onChange={handleChange} 
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition ${errors.zip_code ? 'border-red-500' : 'border-gray-300'}`} />
                          <ErrorMsg name="zip_code" />
                        </div>
                      </div>
                    </div>

                    {/* Business Type & Interest */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#40023F] mb-4 pb-2 border-b-2 border-[#40023F] inline-block">
                        Business Information
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Type of Business</label>
                          <select name="type_business" value={formData.type_business} onChange={handleChange} 
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#40023F] outline-none transition">
                            <option value="">Select Type of Business</option>
                            <option value="Wholesale">Wholesale</option>
                            <option value="Food Service">Food Service</option>
                            <option value="Cash and Carry">Cash and Carry</option>
                            <option value="Retail Shop">Retail Shop</option>
                            <option value="HORECA">HORECA</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Primary Interest</label>
                          <div className="flex flex-wrap gap-3">
                            {["Chinese", "Thai", "Vietnamese", "Korean", "Japanese", "Indian"].map((item) => (
                              <label key={item} className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="interest" value={item} checked={formData.interest === item} onChange={handleChange} 
                                  className="w-4 h-4 text-[#40023F]" />
                                <span className="text-gray-700">{item}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* RIGHT: Inquiry/Cart Summary Sidebar (Smaller Size) */}
              <div className="w-full lg:w-1/4 lg:sticky lg:top-8">
                <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                  <div className="bg-[#f8f1e2] px-6 py-4 flex justify-between items-center border-b border-yellow-200/40">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Your Wishlist</h2>
                    <span className="bg-[#40023F] text-white px-3 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
                      {totalItems} Items
                    </span>
                  </div>
                  
                  <div className="p-5 max-h-[460px] overflow-y-auto custom-scroll bg-white">
                    {cart.length === 0 ? (
                      <div className="text-center py-14 flex flex-col items-center justify-center">
                           <Image
                                       src="/cart.png"
                                       alt="Empty Cart"
                                       width={50}
                                       height={50}
                                       className="mb-6"
                                     />
                        <p className="text-gray-400 font-medium text-sm">No products in enquiry</p>
                        <button type="button" onClick={() => router.push("/")} className="mt-3 text-xs text-[#40023F] font-bold tracking-wide uppercase hover:underline">
                          Browse Products →
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        {cart.map((item, idx) => (
                          <div key={`${item.id}-${item.unit}-${idx}`} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                            <div className="w-16 h-16 rounded-xl border border-gray-100 p-1 flex-shrink-0 bg-white shadow-inner flex items-center justify-center">
                              <Image 
                                src={item.images || "/placeholder.png"} 
                                alt={item.name}
                                width={56}
                                height={56}
                                className="object-contain w-14 h-14 mix-blend-multiply"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-gray-900 text-[13px] leading-snug truncate tracking-tight">{item.name}</h3>
                              
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded uppercase">
                                  {item.unit}
                                </span>
                                {item.product_quantity && (
                                  <span className="text-[10px] text-gray-400 font-medium">
                                    {item.product_quantity}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <span className="font-extrabold text-[#40023F] text-xs block whitespace-nowrap bg-purple-50 px-2 py-1 rounded-md">
                                Qty: {item.quantity}
                              </span>
                            </div>
                          </div>
                        ))}
                        
                        <div className="mt-2 pt-4 border-t border-gray-100 space-y-2.5">
                          <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
                            <span>Total Products:</span>
                            <span className="text-gray-900 font-bold">{cart.length}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm font-bold border-t border-dashed border-gray-100 pt-2.5">
                            <span className="text-gray-800">Total Quantity:</span>
                            <span className="text-[#40023F] text-base font-black">{totalItems}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Action Block Container */}
       {/* Submit Action Block Container */}
<div className="mt-8">
  <button 
    type="submit" 
    disabled={loading}
    className={`w-full font-extrabold uppercase tracking-wider py-4 px-6 rounded-xl transition duration-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm 
    ${cart.length === 0 
      ? "bg-[#40023F] hover:bg-[#5a1b59] text-white shadow-[0_4px_20px_rgba(78,26,81,0.3)]" 
      : "bg-[#40023F] hover:bg-[#5a1b59] text-white shadow-[0_4px_20px_rgba(78,26,81,0.3)]"
    }`}
  >
    {loading ? (
      <span className="flex items-center justify-center gap-2">
        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      </span>
    ) : (
      cart.length === 0 ? "Register " : "Register & Submit Enquiry" 
    )}
  </button>
  <p className="text-center text-[11px] font-medium text-gray-400 mt-3.5 tracking-wide">
    By submitting, you agree to our terms and conditions
  </p>
</div>
          </div>
        </form>
        <ToastContainer position="top-right" autoClose={5000} />
      </section>

      {/* Success / Error Modal UI Wrapper */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 max-w-lg w-full mx-4 min-h-[280px] flex flex-col justify-between transform transition-all duration-300 scale-100 animate-modal-pop p-8">
            
            <div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {modalMessage.title.includes("Thank") || modalMessage.title.includes("Successful") ? (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1 mt-1">
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                    {modalMessage.title}
                  </h3>
                  
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {modalMessage.message}
                  </p>

                  {(modalMessage.title.includes("Thank") || modalMessage.title.includes("Successful")) && (
                    <p className="mt-2 text-sm font-medium text-emerald-600 bg-emerald-50/50 inline-block px-2.5 py-1 rounded-md">
                       Our team will contact you within 24 hours.
                    </p>
                  )}
                </div>
              </div>

              {(modalMessage.title.includes("Thank") || modalMessage.title.includes("Successful")) && (
                <div className="mt-8 bg-slate-50 p-3 rounded-lg border border-slate-100/50 flex items-center justify-between gap-4">
                  <p className="text-xs font-medium text-slate-400">
                    Redirecting to home page...
                  </p>
                  <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full animate-progress"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  if (modalMessage.title.includes("Thank") || modalMessage.title.includes("Successful")) {
                    router.push("/");
                  }
                }}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  modalMessage.title.includes("Thank") || modalMessage.title.includes("Successful")
                    ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                }`}
              >
                {modalMessage.title.includes("Thank") || modalMessage.title.includes("Successful") ? "Continue to Home" : "Close"}
              </button>
            </div>

          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
        
        @keyframes modal-pop {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-modal-pop {
          animation: modal-pop 0.2s ease-out;
        }
        
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
    </>
  );
}