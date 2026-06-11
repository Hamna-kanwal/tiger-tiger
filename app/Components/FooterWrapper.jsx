"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FooterClientWrapper({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const brandPurple = "#431A4F";

  return (
    <div className="border-b md:border-none border-gray-100 pb-4 md:pb-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center md:pointer-events-none mb-0 md:mb-6"
      >
        <h3 style={{ color: brandPurple }} className="font-bold text-lg tracking-tight">{title}</h3>
        <span style={{ color: brandPurple }} className="md:hidden">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      
      {/* Mobile mein toggle hoga, Desktop mein hamesha dikhega */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        {children}
      </div>
    </div>
  );
}