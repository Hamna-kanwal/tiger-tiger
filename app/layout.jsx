// app/layout.jsx
import { Outfit, Eczar } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

// 1. Fonts setup
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

const eczar = Eczar({
  subsets: ["latin"],
  variable: "--font-eczar",
  display: "swap",
});

// 2. SEO Metadata (Yahan se 'Metadata' type hata di hai)
export const metadata = {
  title: "Tiger Tiger Foods",
  description: "Nature's best in every sip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={eczar.variable}>
      <body className={`${outfit.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}