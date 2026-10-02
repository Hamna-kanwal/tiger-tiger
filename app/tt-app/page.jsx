import { buildMeta } from '@/lib/seo'
import AppLandingContent from './AppLandingContent'

export const metadata = buildMeta({
  title: 'Download Our App',
  description: 'Order Pan Asian ingredients from Tiger Tiger on mobile. Browse the range and place trade orders from the app.',
  path: '/tt-app/',
  image: '/og-default.png',
})

export default function Page() {
  return <AppLandingContent />;
}