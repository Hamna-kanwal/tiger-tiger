import { Outfit, Eczar } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header"; 
import Footer from "./Components/Footer";

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
      </body>
    </html>
  );
}