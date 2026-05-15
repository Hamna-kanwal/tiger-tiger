import { fetchAllProducts } from "../action";
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="container mx-auto px-4 py-20 bg-[#F9F9F7] font-outfit">
      <h1 className="text-4xl font-black text-center text-[#431A4F] mb-4 uppercase italic">
        Our Collection
      </h1>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {currentProducts?.map((product, index) => (
          <div key={product.id || index} className="group bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <Link href={`/products/${product.slug}/${product.SKU}`}>
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.images || "/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform"
                  unoptimized
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
          {/* Results Info */}
          <p className="text-[#431A4F] text-sm md:text-base font-medium mb-4 text-center md:text-left">
            Showing {startIndex + 1} - {Math.min(endIndex, totalProducts)} of {totalProducts} products
          </p>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              {/* Left Side: First and Previous Buttons */}
              <div className="flex gap-2">
                <Link href="/products?page=1" className={`px-3 py-2 rounded-lg bg-[#431A4F] text-white text-sm font-bold transition-all ${currentPage === 1 ? 'opacity-40 pointer-events-none' : 'hover:bg-[#5a2565]'}`}>First</Link>
                <Link href={`/products?page=${Math.max(1, currentPage - 1)}`} className={`px-3 py-2 rounded-lg bg-[#431A4F] text-white text-sm font-bold transition-all ${currentPage === 1 ? 'opacity-40 pointer-events-none' : 'hover:bg-[#5a2565]'}`}>Previous</Link>
              </div>
              
              {/* Center: Page Numbers */}
              <div className="flex items-center gap-2">
                {(() => {
                  const pages = [];
                  
                  // Always show first 3 pages
                  for (let i = 1; i <= Math.min(3, totalPages); i++) {
                    pages.push(
                      <Link
                        key={i}
                        href={`/products?page=${i}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                          currentPage === i ? "bg-[#431A4F] text-white scale-110 shadow-md" : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {i}
                      </Link>
                    );
                  }
                  
                  // If current page is beyond 3 and not the last, show ... and current page
                  if (currentPage > 3 && currentPage < totalPages) {
                    if (currentPage > 4) {
                      pages.push(<span key="dots1" className="text-gray-400 px-2">...</span>);
                    }
                    pages.push(
                      <Link
                        key={currentPage}
                        href={`/products?page=${currentPage}`}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all bg-[#431A4F] text-white scale-110 shadow-md"
                      >
                        {currentPage}
                      </Link>
                    );
                  }
                  
                  // Show last page if it's not already shown
                  if (totalPages > 3 && totalPages !== currentPage) {
                    if (totalPages > currentPage + 1) {
                      pages.push(<span key="dots2" className="text-gray-400 px-2">...</span>);
                    }
                    pages.push(
                      <Link
                        key={totalPages}
                        href={`/products?page=${totalPages}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                          currentPage === totalPages ? "bg-[#431A4F] text-white scale-110 shadow-md" : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {totalPages}
                      </Link>
                    );
                  }
                  
                  return pages;
                })()}
              </div>
              
              {/* Right Side: Next and Last Buttons */}
              <div className="flex gap-2">
                <Link href={`/products?page=${Math.min(totalPages, currentPage + 1)}`} className={`px-3 py-2 rounded-lg bg-[#431A4F] text-white text-sm font-bold transition-all ${currentPage === totalPages ? 'opacity-40 pointer-events-none' : 'hover:bg-[#5a2565]'}`}>Next</Link>
                <Link href={`/products?page=${totalPages}`} className={`px-3 py-2 rounded-lg bg-[#431A4F] text-white text-sm font-bold transition-all ${currentPage === totalPages ? 'opacity-40 pointer-events-none' : 'hover:bg-[#5a2565]'}`}>Last</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}