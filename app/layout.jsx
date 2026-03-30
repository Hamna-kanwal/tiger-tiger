// app/layout.jsx
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./CompTest/Header"; // Path ab bilkul sahi hai (./)

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tiger Tiger Foods",
  description: "Nature's best in every sip",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className yahan body par sahi apply ho rahi hai */}
      <body className={`${outfit.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}