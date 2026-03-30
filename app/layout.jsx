// app/layout.jsx
import { Outfit, Eczar } from "next/font/google";
import "./globals.css";
import Header from "./CompTest/Header"; 
import Footer from "./CompTest/Footer";

// 1. Google Fonts Configuration
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
  title: "Tiger Tiger Foods",
  description: "Nature's best in every sip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 2. Adobe Typekit Link (Yahan se 'fields' font aa raha hai) */}
        <link rel="stylesheet" href="https://use.typekit.net/wry2bcj.css" />
      </head>
      <body className={`${outfit.className} ${eczar.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}