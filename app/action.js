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

export async function getProductsByCategory(slug) {
  if (!slug) return { success: false, data: [] };

  try {
    const res = await fetch(
      `https://backend.tigertigerfoods.com/api/get-product-by-category?category=${slug}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Fetch failed with status ${res.status}:`, errorText);
      throw new Error(`API error: ${res.status}`);
    }
    
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
    const resList = await fetch(`https://backend.tigertigerfoods.com/api/get-products`, { next: { revalidate: 3600 } });
    const listData = await resList.json();

    const found = listData.data.find(p => String(p.SKU).trim() === String(sku).trim());
    if (!found) return null;

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
      { next: { revalidate: 3600 } }
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
      next: { revalidate: 60 }, 
    });

    if (!response.ok) {
      return {
        success: false,
        message: `API Error: ${response.status}`,
        data: [],
      };
    }

    const result = await response.json();

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

export async function getLatestSidebarBlogsAction(currentSlug) {
  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/get-blogs", {
      next: { revalidate: 60 },
    });
    const data = await res.json();

    if (data.success) {
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
export async function fetchProductsPage(page = 1, limit = 20) {
  const pageNumber = Number(page) || 1;
  const pageSize = Number(limit) || 20;

  try {
    const res = await fetch(
      `https://backend.tigertigerfoods.com/api/get-products?page=${pageNumber}&limit=${pageSize}`,
      { next: { revalidate: 3600 } }
    );

    let rawProducts = [];
    if (res.ok) {
      const data = await res.json();
      rawProducts = Array.isArray(data.data) ? data.data : [];
    } else {
      // Fallback
      const fallbackRes = await fetch("https://backend.tigertigerfoods.com/api/get-products", {
        next: { revalidate: 3600 },
      });
      const fallbackData = await fallbackRes.json();
      rawProducts = Array.isArray(fallbackData.data) ? fallbackData.data : [];
    }

    // UNIQUE FILTERING YAHAN APPLY KI HAI
    const uniqueProducts = Array.from(
      new Map(rawProducts.map(item => [String(item.SKU).trim(), item])).values()
    );

    return {
      products: uniqueProducts.slice(0, pageSize), // Slice after filtering
      total: uniqueProducts.length,
      pageSize,
    };
  } catch (error) {
    console.error("Paged fetch error:", error);
    return { products: [], total: 0, pageSize };
  }
}

// --- 14. FETCH ALL PRODUCTS (FIXED LOGIC WITH LOGS) ---
export async function fetchAllProducts() {
  try {
    const res = await fetch("https://backend.tigertigerfoods.com/api/get-products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const rawProducts = data?.data || [];

    // DATA CLEANING:
    // Yahan hum wo products filter kar rahe hain jinka slug ya sku missing hai
    // Aur hum 'categorySlug' ko ensure kar rahe hain ke wo undefined na ho
    const cleanProducts = rawProducts
      .filter(p => p.slug && p.SKU)
      .map(p => ({
        ...p,
        categorySlug: p.categorySlug || 'general' // Agar slug missing hai to 'general' default de dein
      }));

    const uniqueProducts = Array.from(
      new Map(cleanProducts.map(item => [String(item.SKU).trim(), item])).values()
    );

    return uniqueProducts; 
  } catch (error) {
    return [];
  }
}