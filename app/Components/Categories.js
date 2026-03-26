import CategoryMarquee from "./categoryMarquee";

const categories = [
  { name: 'NOODLES', slug: 'noodles', image: '/noodles.jpg' }, 
  { name: 'Nuts & Seeds', slug: 'nuts-seeds', image: '/nuts.jpg' },
  { name: 'Rice', slug: 'rice', image: '/rice.jpg' },
  { name: 'Sauces', slug: 'sauces', image: '/sauces.jpg' },
  { name: 'Snacks', slug: 'snacks', image: '/snacks.jpg' },
  { name: 'Spices & Seasonings', slug: 'spices', image: '/spices.jpg' },
];

export default function CategorySlider() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto overflow-hidden">
      {/* Header Section: Kept here as requested */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-4xl font-serif font-bold text-emerald-900 mb-2">
            Flavours for Every Craving
          </h2>
          <p className="text-gray-600 font-medium">
            Drinks? Noodles? Frozen? If It's Delicious, It's in Our Range.
          </p>
        </div>
        <button className="bg-[#E9D68F] hover:bg-[#dec66b] text-emerald-900 font-bold py-4 px-8 rounded-2xl transition-all text-xl">
          All Categories
        </button>
      </div>

      {/* The Category Marquee Component */}
      {/* We pass the 'categories' array into the marquee component */}
      <CategoryMarquee categories={categories} />
      
    </section>
  );
}