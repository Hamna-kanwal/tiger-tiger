import { buildMeta } from '@/lib/seo';
import ContactSection from '../Components/ContactSection'; // Agar path mukhtalif ho to theek kar lein

export const metadata = buildMeta({
  title: 'Contact Us',
  description: 'Get in touch with Tiger Tiger Foods in Nottingham for trade enquiries, bulk orders and wholesale pricing on Pan Asian ingredients.',
  path: '/contact/',
  image: '/og-default.png',
});

export default function Page() {
  return <ContactSection />;
}