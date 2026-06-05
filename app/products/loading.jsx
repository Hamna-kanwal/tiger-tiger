export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-24 bg-[#F9F9F7] font-outfit">
      <div className="text-center mb-10">
        <p className="text-xl md:text-2xl font-semibold text-[#431A4F]">Loading products...</p>
        <p className="text-gray-500 mt-2">This may take a moment while the catalog is prepared.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <div className="aspect-square rounded-3xl bg-gray-200 mb-4" />
            <div className="h-5 bg-gray-200 rounded-full mb-3" />
            <div className="h-4 w-3/4 bg-gray-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
