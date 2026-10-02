import { buildMeta } from '@/lib/seo';
import FeatureProductBody from '../Components/FeatureProductBody';

export const metadata = buildMeta({
  title: 'Featured Products',
  description: 'Featured lines from Tiger Tiger including Pulp+, Coco Choo, Wow Chow and Taste Japan.',
  path: '/feature_product/',
  image: '/og-default.png',
});

export default function FeatureProductPage() {
  return <FeatureProductBody />;
}