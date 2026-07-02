import { Outfit, Eczar } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header"; 
import Footer from "./Components/Footer";
import FloatingCart from "./Components/FloatingCart";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const eczar = Eczar({
  subsets: ["latin"],
  variable: "--font-eczar",
  display: "swap",
});

// export const metadata = {
//   title: "Tiger Tiger Foods",
//   description: "Nature's best in every sip",
// };


export const metadata = {
  title: {
    template: '%s | Tiger Tiger Foods',
    default: 'Tiger Tiger Foods',
  },
  description: "Nature's best in every sip - Premium Asian food wholesale supplier in UK.",
  
  openGraph: {
    title: 'Tiger Tiger Foods',
    description: "Nature's best in every sip - Premium Asian food wholesale supplier in UK.",
    url: 'https://www.tigertigerfoods.com',
    siteName: 'Tiger Tiger Foods',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Tiger Tiger Foods',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiger Tiger Foods',
    description: "Nature's best in every sip - Premium Asian food wholesale supplier in UK.",
    images: ['/logo.webp'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${eczar.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/wry2bcj.css" />
      </head>
      {/* outfit.className use karne se font foran apply ho jayega */}
      <body className={`${outfit.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingCart />
      </body>
    </html>
  );
}