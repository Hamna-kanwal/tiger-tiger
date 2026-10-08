import TradeRegisterClient from "../Components/TradeRegisterClient";
import { buildMeta } from "@/lib/seo";

export const metadata = buildMeta({
  title: 'Trade Register',
  description: 'Register as a trade customer with Tiger Tiger for wholesale pricing on Pan Asian ingredients.',
  path: '/trade-register/',
  image: '/og-default.png',
})

export default function TradeRegisterPage() {
  return <TradeRegisterClient />;
}