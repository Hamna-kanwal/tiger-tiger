// app/layout.jsx

import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../CompTest/Header";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

// 2. SEO Metadata 
export const metadata = {
  title: "Tiger Tiger Foods",
  description: "Nature's best in every sip",
};

export default function RootLayout({ children }) {
  return (
<html lang="en">
  <body className={`${outfit.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}