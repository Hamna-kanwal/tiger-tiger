import { buildMeta } from '@/lib/seo';

export const metadata = buildMeta({
  title: 'Pan Asian Recipes',
  description: 'Japanese, Chinese, Korean, Thai and Vietnamese recipes made with Tiger Tiger ingredients.',
  path: '/recipes/',
  image: '/og-default.png',
})

export default function RecipesLayout({ children }) {
  return children;
}