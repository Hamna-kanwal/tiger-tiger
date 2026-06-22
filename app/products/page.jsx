import { fetchAllProducts } from "../action";
import Image from 'next/image';
import Link from 'next/link';

// 'use client' HATANA ZAROORI HAI KYUNKI YEH ASYNC SERVER COMPONENT HAI
export default async function AllProductsPage({ searchParams }) {
  const allProducts = await fetchAllProducts();
  
  const itemsPerPage = 20;
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  
  const totalProducts = allProducts?.length || 0;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts?.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-20  font-outfit">
      <h1 className="text-4xl font-black text-center text-[#431A4F] mb-4 uppercase italic">
        Our Collection
      </h1>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {currentProducts?.map((product, index) => (
          <div key={product.id || index} className="group bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <Link href={`/products/${product.slug}/${product.SKU}`}>
              <div className="aspect-square relative mb-4">
             <Image
  src={product.images || "/placeholder.png"}
  alt={product.name}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  className="object-contain p-2 group-hover:scale-105 transition-transform"
  // unoptimized={true} <--- Isey HATA dein
  priority={index < 4}
/>
              </div>
              <h2 className="text-lg font-bold text-[#431A4F] uppercase line-clamp-2 leading-tight">
                {product.name}
              </h2>
              <p className="text-gray-400 mt-2 text-sm font-semibold">SKU: {product.SKU}</p>
            </Link>
          </div>
        ))}
      </div>

      
     {/* --- PAGINATION --- */}
{totalPages > 1 && (
  <div className="mt-12 w-full font-outfit">
    <div className="border-t border-gray-200 pt-6">
      
      {/* Navigation Buttons Container */}
      <div className="flex items-center justify-center gap-2 flex-wrap w-full select-none">
        
        {/* Navigation Buttons with Padding */}
        <Link href="/products?page=1" className={`px-2 py-2 flex items-center justify-center rounded-xl transition-all bg-[#431A4F] ${currentPage === 1 ? 'opacity-40 pointer-events-none' : 'hover:opacity-80'}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 17-5-5 5-5M11 17l-5-5 5-5"/></svg>
        </Link>
        
        <Link href={`/products?page=${Math.max(1, currentPage - 1)}`} className={`px-2 py-2 flex items-center justify-center rounded-xl transition-all bg-[#431A4F] ${currentPage === 1 ? 'opacity-40 pointer-events-none' : 'hover:opacity-80'}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </Link>

     {/* Dynamic Page Numbers - Updated with Padding and Pill Shape */}
{(() => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
     if (i === currentPage || i === 1 || i === totalPages || (i > currentPage - 2 && i < currentPage + 2)) {
        const isActive = currentPage === i;
        pages.push(
          <Link 
            key={i} 
            href={`/products?page=${i}`} 
            prefetch={false}
            className={`min-w-[40px] h-9 px-3 flex items-center justify-center rounded-xl text-base font-black transition-all ${
              isActive 
                ? "bg-[#431A4F] text-white shadow-md scale-105" 
                : "text-[#431A4F] hover:bg-gray-200"
            }`}
          >
            {i}
          </Link>
        );
     } else if (pages[pages.length - 1]?.props.children !== '...') {
        pages.push(<span key={`dots-${i}`} className="text-[#431A4F] px-2 flex items-center">...</span>);
     }
  }
  return pages;
})()}
        <Link href={`/products?page=${Math.min(totalPages, currentPage + 1)}`} className={`px-2 py-2 flex items-center justify-center rounded-xl transition-all bg-[#431A4F] ${currentPage === totalPages ? 'opacity-40 pointer-events-none' : 'hover:opacity-80'}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
        
        <Link href={`/products?page=${totalPages}`} className={`px-2 py-2 flex items-center justify-center rounded-xl transition-all bg-[#431A4F] ${currentPage === totalPages ? 'opacity-40 pointer-events-none' : 'hover:opacity-80'}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5M13 17l5-5-5-5"/></svg>
        </Link>

      </div>
    </div>
  </div>
)}
    </div>
  );
}