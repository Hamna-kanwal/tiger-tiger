"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrdersList from "../Components/Orderlist";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(true); // Verification state

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

  const [passwordData, setPasswordData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [passwordLoading, setPasswordLoading] = useState(false);

  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    // 1. Check if user is logged in
    if (!token) {
      router.replace("/login");
      return;
    }

    if (user) {
      try {
        const parsedUser = JSON.parse(user);

        // 2. ✅ Email Verification Check
        // Agar email_verified_at null hai ya empty hai, toh isVerified false kar dein
        if (!parsedUser.email_verified_at) {
          setIsVerified(false);
        }

        const safeUser = Object.fromEntries(
          Object.entries(parsedUser).map(([k, v]) => [k, v ?? ""])
        );

        setFormData((prev) => ({
          ...prev,
          ...safeUser,
          type_business: parsedUser.type ? parsedUser.type.trim() : "",
          interest: parsedUser.interest ?? "",
        }));
      } catch (e) {
        console.error("Invalid user data in localStorage");
      }
    }

    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://backend.tigertigerfoods.com/api/update-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success("Profile updated successfully!");
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://backend.tigertigerfoods.com/api/update-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(passwordData),
        }
      );

      const data = await res.json();
      if (data.success) {
        toast.success(data.message || "Password updated successfully!");
        setPasswordData({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
      } else {
        toast.error(data.message || "Failed to update password");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setPasswordLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out");
    router.replace("/login");
  };

  const shouldOffset = pathname !== "/";

  // ✅ 3. Agar verified nahi hai toh ye UI dikhao
  if (!isVerified) {
    return (
      <section 
        className="max-w-4xl mx-auto p-10 text-center"
        style={{ marginTop: `${headerHeight + 50}px` }}
      >
        <div className="bg-yellow-50 border-2 border-yellow-200 p-10 rounded-2xl shadow-sm">
          <h1 className="text-4xl font-bold text-yellow-700 mb-4">Verify Your Email</h1>
          <p className="text-lg text-gray-600 mb-8">
            Your account is registered, but you need to verify your email to access the dashboard.
            Please check your inbox (and spam folder) for the verification link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#431A4F] text-white px-8 py-3 rounded-lg font-semibold"
            >
              I have verified, Refresh Page
            </button>
            <button 
              onClick={handleLogout}
              className="border border-gray-400 px-8 py-3 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    );
  }

  // 4. Asli Dashboard UI (Sirf tab dikhega jab isVerified true hoga)
  return (
    <section
      className="max-w-6xl mx-auto p-6"
      style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
    >
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 border-b border-gray-300 mb-6">
        {["profile", "password", "orders"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg transition-all ${
              activeTab === tab
                ? "bg-black text-white font-semibold"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab === "profile" && "Profile"}
            {tab === "password" && "Change Password"}
            {tab === "orders" && "Orders"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {activeTab === "profile" && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Billing Info */}
              <div className="md:w-1/2 flex flex-col gap-6">
                <h6 className="text-2xl font-semibold text-[#220016]">
                  Billing Information
                </h6>
                {/* Inputs ... same as before */}
                {[
                  "contact_name",
                  "business_name",
                  "company_registration",
                  "company_vat",
                  "position_in_business",
                  "email",
                  "phone",
                ].map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field.replace("_", " ") + "*"}
                    className="w-full bg-white p-[20px] border border-[#220016] rounded-[14px]"
                  />
                ))}
              </div>

              {/* Address Info */}
              <div className="md:w-1/2 flex flex-col gap-6">
                <h6 className="text-2xl font-semibold text-[#220016]">
                  Address Information
                </h6>
                {[
                  "address",
                  "address_2",
                  "city",
                  "state",
                  "country",
                  "zip_code",
                ].map((field) => (
                  <input
                    key={field}
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field.replace("_", " ") + "*"}
                    className="w-full bg-white p-[20px] border border-[#220016] rounded-[14px]"
                  />
                ))}
                {/* Select and Radio buttons ... same as before */}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[16px] rounded-[14px]"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        )}

        {/* Other Tabs Content (Password, Orders) ... same as before */}
        {activeTab === "password" && (
           <form onSubmit={handlePasswordSubmit} className="space-y-4">
             {/* Password Inputs */}
             <button disabled={passwordLoading} className="w-full bg-black text-white py-3 rounded-lg">
                {passwordLoading ? "Updating..." : "Update Password"}
             </button>
           </form>
        )}

        {activeTab === "orders" && <OrdersList />}
      </div>

      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <ToastContainer position="top-right" />
    </section>
  );
}