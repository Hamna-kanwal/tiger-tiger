import { buildMeta } from '@/lib/seo';
import CategorySection from '../Components/CategorySection';

export const metadata = buildMeta({
  title: 'Categories', // <-- Yeh line missing thi!
  description: 'Browse the Tiger Tiger category collection.', // Yahan apni description dein
  path: '/categories/', 
  image: '/og-default.png', 
});

export default function CategoriesPage() {
  return <CategorySection />;
}