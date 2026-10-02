import { buildMeta } from '@/lib/seo';
import TigerAboutBody from '../Components/TigerAboutBody'; // Apne component ka path yahan theek kar lijiyega

export const metadata = buildMeta({
  title: 'About Us',
  description: 'Tiger Tiger supplies authentic Pan Asian ingredients to UK restaurants, retailers and wholesalers.',
  path: '/about/',
  image: '/og-default.png',
})

export default function AboutPage() {
  return <TigerAboutBody />;
}