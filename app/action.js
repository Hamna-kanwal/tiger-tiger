"use server";

import { cookies } from "next/headers";

// --- 1. SEARCH ACTION ---
export async function searchProducts(formData) {
  const searchTerm = formData.get("search");
  if (!searchTerm) return [];

  try {
    const res = await fetch(
      `https://backend.tigertigerfoods.com/api/get-products?search=${searchTerm}`
    );
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Search Error:", error);
    return [];
  }
}

// --- 2. LOGIN ACTION ---
export async function loginUser(email, password) {
  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok && data?.success) {
      const cookieStore = await cookies();
      cookieStore.set("token", data.token, {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 1 din
      });

      return { success: true, message: data.message, userData: data.data };
    }

    return { success: false, message: data?.message || "Invalid credentials." };
  } catch (error) {
    console.error("Login Server Error:", error);
    return { success: false, message: "Server connection failed." };
  }
}

// --- 3. FORGOT PASSWORD ACTION ---
export async function sendOtpAction(email) {
  if (!email) return { success: false, message: "Email is required." };

  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok && data?.success) {
      return { 
        success: true, 
        message: data.message || "OTP sent successfully!" 
      };
    }

    return { 
      success: false, 
      message: data?.message || "Email not found in our records." 
    };
  } catch (error) {
    console.error("Forgot PW Error:", error);
    return { success: false, message: "Network error. Please try again." };
  }
}

// --- 4. TRADE REGISTER ACTION ---
export async function registerTradeUser(formData) {
  const rawData = {
    contact_name: formData.get("contact_name"),
    business_name: formData.get("business_name"),
    company_registration: formData.get("company_registration"),
    company_vat: formData.get("company_vat"),
    position_in_business: formData.get("position_in_business"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    address: formData.get("address"),
    address_2: formData.get("address_2"),
    city: formData.get("city"),
    state: formData.get("state"),
    country: formData.get("country"),
    zip_code: formData.get("zip_code"),
    type_business: formData.get("type_business"),
    interest: formData.get("interest"),
  };

  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(rawData),
    });

    const data = await res.json();

    if (res.ok && data?.success) {
      return { success: true, message: data.message || "Registration Successful!" };
    }

    return { 
      success: false, 
      message: data?.message || "Registration failed." 
    };
  } catch (error) {
    console.error("Registration Error:", error);
    return { success: false, message: "Server connection failed." };
  }
}

// --- 5. GET FEATURED PRODUCTS ---
export async function getFeaturedProducts() {
  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/get-featured-products", {
      next: { revalidate: 3600 } 
    });
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Fetch Featured Error:", error);
    return [];
  }
}

// --- 6. GET CATEGORIES ---
export async function getCategories() {
  try {
    const res = await fetch(`https://backend.tigertigerfoods.com/api/get-categories`, {
      next: { revalidate: 3600 } 
    });
    const response = await res.json();
    return response.success ? response.data : [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// --- 7. NEW: GET PRODUCTS BY CATEGORY (For SSR) ---
export async function getProductsByCategory(slug) {
  if (!slug) return { success: false, data: [] };

  try {
    const res = await fetch(
      `https://backend.tigertigerfoods.com/api/get-product-by-category?category=${slug}`,
      {
        next: { revalidate: 3600 }, // 1 Ghante ka cache
      }
    );

    if (!res.ok) throw new Error("API response was not ok");
    
    const data = await res.json();
    return {
      success: data.success || false,
      data: data.data || []
    };
  } catch (error) {
    console.error(`Error fetching products for category ${slug}:`, error);
    return { success: false, data: [] };
  }
}

export async function getProductDetail(sku) {
  if (!sku) return null;
  try {
    // 1. Pehle list mangwayein taaki ID mil sake
    const resList = await fetch(`https://backend.tigertigerfoods.com/api/get-products`, { next: { revalidate: 3600 } });
    const listData = await resList.json();

    // SKU match karke product dhoondein
    const found = listData.data.find(p => String(p.SKU).trim() === String(sku).trim());
    if (!found) return null;

    // 2. Ab asli API call karein jo JSON data deti hai
    const resDetail = await fetch(`https://backend.tigertigerfoods.com/api/get-product-detail/${found.id}/${found.SKU}`, { next: { revalidate: 3600 } });
    const finalData = await resDetail.json();

    return finalData.success ? finalData.data : null;
  } catch (e) {
    console.error("Action Error:", e);
    return null;
  }
}


export async function getRelatedProducts(productId) {
  try {
    const res = await fetch(
      `https://backend.tigertigerfoods.com/api/get-related-product/${productId}`,
      { next: { revalidate: 3600 } } // 1 ghante tak data cache rahega
    );
    const response = await res.json();
    return response?.data || [];
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}

export async function getBlogsAction() {
  try {
    const response = await fetch("https://backend.tigertigerfoods.com/api/get-blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Cache management: 60 seconds tak data cache rahega (ISR)
      next: { revalidate: 60 }, 
    });

    // Agar response ok nahi hai (e.g. 404 or 500)
    if (!response.ok) {
      return {
        success: false,
        message: `API Error: ${response.status}`,
        data: [],
      };
    }

    const result = await response.json();

    // API ke 'success' field ko check karna
    if (result.success) {
      return {
        success: true,
        data: result.data || [],
        message: "Blogs fetched successfully",
      };
    } else {
      return {
        success: false,
        data: [],
        message: result.message || "Failed to fetch blogs",
      };
    }

  } catch (error) {
    console.error("Server Action Error:", error);
    return {
      success: false,
      message: "Server par koi masla aa gaya hai.",
      data: [],
    };
  }
}


// ✅ Single Blog fetch function
export async function getSingleBlogAction(slug) {
  try {
    const res = await fetch(`https://backend.tigertigerfoods.com/api/get-blog/${slug}`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data.success ? { success: true, data: data.data } : { success: false };
  } catch (error) {
    return { success: false };
  }
}

// ✅ Latest 5 Blogs for Sidebar (Logic Fixed)
export async function getLatestSidebarBlogsAction(currentSlug) {
  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/get-blogs", {
      next: { revalidate: 60 },
    });
    const data = await res.json();

    if (data.success) {
      // 1. Data ko copy karke reverse kiya taake latest blogs upar aaein
      // 2. Current parhay jane walay blog ko list se nikala
      // 3. .slice(0, 5) laga kar limit fix kar di
      const limitedBlogs = data.data
        .slice()
        .reverse() 
        .filter((b) => b.slug !== currentSlug)
        .slice(0, 5);

      return { success: true, data: limitedBlogs };
    }
    return { success: false, data: [] };
  } catch (error) {
    console.error("❌ Sidebar Action Error:", error);
    return { success: false, data: [] };
  }
}



export async function fetchAllProducts() {
  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/get-products");
    
    if (!res.ok) {
      throw new Error("Data fetch nahi ho saka");
    }

    const data = await res.json();
    return data.data; 
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}