"use client"; // <--- Yeh line add karna sabse zaroori hai

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-6">
      
        
        <h1 className="text-4xl md:text-6xl font-black text-[#431A4F] eczar">
          Coming Soon
        </h1>

        <button 
          className="mt-8 px-8 py-3 bg-[#431A4F] text-white rounded-full font-bold hover:bg-[#5b256a] transition-all"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}