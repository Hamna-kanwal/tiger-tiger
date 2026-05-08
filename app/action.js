// app/actions.js
"use server"; // 👈 Ye hai asli Server Scripting

export async function searchProducts(formData) {
  const searchTerm = formData.get("search"); // Form se data lena
  
  if (!searchTerm) return [];

  try {
    const res = await fetch(
      `https://backend.tigertigerfoods.com/api/get-products?search=${searchTerm}`
    );
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Server Error:", error);
    return [];
  }
}