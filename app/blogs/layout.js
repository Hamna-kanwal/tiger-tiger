import { buildMeta } from '@/lib/seo';

export const metadata = buildMeta({
  title: 'Blog',
  description: 'Articles on Pan Asian ingredients, sourcing and trends for food businesses in the UK.',
  path: '/blogs/',
  image: '/og-default.png',
})
export default function BlogsLayout({ children }) {
  return children;
}