import { fetchAllProducts, getCategories } from "./action";

export default async function sitemap() {
  const baseUrl = "https://www.tigertigerfoods.com";

  const [products, categories] = await Promise.all([
    fetchAllProducts(),
    getCategories(),
  ]);

  // 2. Product URLs (Unique)
  const productEntries = products
    .filter((p) => p?.slug && p?.SKU)
    .map((p) => ({
      url: `${baseUrl}/products/${p.slug}/${p.SKU}/`,
      lastModified: new Date(),
      priority: 0.8,
    }));

  const uniqueProductUrls = Array.from(
    new Map(productEntries.map((item) => [item.url, item])).values()
  );

  // 3. Category URLs
  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}/`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  // 4. Static Pages (Build output ke mutabiq)
  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/blogs/`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/categories/`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/feature_product/`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/products/`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/recipes/`, lastModified: new Date(), priority: 0.7 },
  ];

  return [...staticPages, ...categoryEntries, ...uniqueProductUrls];
}