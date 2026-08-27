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

export const metadata = {
  metadataBase: new URL('https://www.tigertigerfoods.com'),
  
  verification: {
    google: 'sKKl2tFhmm86qK8VvZZG5Mr5JWtX20tygvOo7cLuvWU',
  },

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
  // Sitewide Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.tigertigerfoods.com/#organization",
    "name": "Tiger Tiger Foods",
    "alternateName": "Tiger Tiger",
    "url": "https://www.tigertigerfoods.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tigertigerfoods.com/logo.webp",
      "width": 1200,
      "height": 630
    },
    "image": "https://www.tigertigerfoods.com/logo.webp",
    "description": "Tiger Tiger Foods is a premium pan-Asian food brand and wholesale supplier in the UK, supplying sauces, noodles, rice, frozen foods, drinks and spices to restaurants, retailers and food businesses.",
    "email": "customer.service@tigertigerfoods.com",
    "telephone": "+44 115 985 1301",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bull Close Road, Lenton Industrial Estate",
      "addressLocality": "Nottingham",
      "postalCode": "NG7 2UT",
      "addressCountry": "GB"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 115 985 1301",
      "email": "customer.service@tigertigerfoods.com",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "JK Foods UK",
      "url": "https://jkfoods.co.uk/",
      "founder": {
        "@type": "Person",
        "name": "Mark Johal"
      },
      "sameAs": [
        "https://www.linkedin.com/company/jkfoodsuk"
      ]
    }
  };

  // Sitewide WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.tigertigerfoods.com/#website",
    "url": "https://www.tigertigerfoods.com/",
    "name": "Tiger Tiger Foods",
    "inLanguage": "en-GB",
    "publisher": {
      "@id": "https://www.tigertigerfoods.com/#organization"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable} ${eczar.variable}`}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/wry2bcj.css" />
        
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="8feY//JL4PXBAzy7AIuVZQ" async></script>
        
        {/* Sitewide JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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