"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrdersList from "../components/Orderlist";

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);

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

  // state for password form
  const [passwordData, setPasswordData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [passwordLoading, setPasswordLoading] = useState(false);

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

  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
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
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldOffset = pathname !== "/";

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
                    type={
                      field === "email"
                        ? "email"
                        : field === "password"
                        ? "password"
                        : "text"
                    }
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

                {/* Business Type */}
                <select
                  name="type_business"
                  value={formData.type_business}
                  onChange={handleChange}
                  className="w-full bg-white p-[20px] border border-[#220016] rounded-[14px]"
                >
                  <option value="">Select Type</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Food Service">Food Service</option>
                  <option value="Cash and Carry">Cash and Carry</option>
                  <option value="Retail Shop">Retail Shop</option>
                  <option value="HORECA">HORECA</option>
                </select>

                {/* Interests */}
                <h6 className="text-2xl font-semibold text-[#220016]">
                  Primary Interest
                </h6>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Chinese",
                    "Thai",
                    "Vietnamese",
                    "Korean",
                    "Japanese",
                    "Indian",
                  ].map((cuisine) => (
                    <label key={cuisine} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="interest"
                        value={cuisine}
                        checked={formData.interest === cuisine}
                        onChange={handleChange}
                      />
                      {cuisine}
                    </label>
                  ))}
                </div>
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

        {activeTab === "password" && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Change Password</h2>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              {/* Old Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Old Password
                </label>
                <input
                  type="password"
                  name="old_password"
                  value={passwordData.old_password}
                  onChange={handlePasswordChange}
                  placeholder="Enter old password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="new_password"
                  value={passwordData.new_password}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  value={passwordData.confirm_password}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                disabled={passwordLoading}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                {passwordLoading ? "Updating..." : "Update Password"}
              </button>
            </form>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Orders</h2>

            <OrdersList />
          </div>
        )}
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
