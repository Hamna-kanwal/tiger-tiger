import { fetchAllProducts, getCategories } from "./action"; 

export default async function sitemap() {
  const baseUrl = "https://www.tigertigerfoods.com";

  // 1. Data parallel fetch karein (Performance ke liye)
  const [products, categories] = await Promise.all([
    fetchAllProducts(),
    getCategories()
  ]);

  // 2. Products ke liye Senior wala "Unique Logic" use karein
  const productEntries = products
    .filter((p) => p?.slug && p?.SKU)
    .map((p) => ({
      url: `${baseUrl}/products/${p.slug}/${p.SKU}/`,
      lastModified: new Date(),
      priority: 0.8,
    }));

  // Duplicate hataane ke liye 'Map' ka istemal
  const uniqueProductUrls = Array.from(
    new Map(productEntries.map(item => [item.url, item])).values()
  );

  // 3. Categories aur Static pages
  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}/`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date(), priority: 0.4 },
  ];

  return [...staticPages, ...categoryEntries, ...uniqueProductUrls];
}     