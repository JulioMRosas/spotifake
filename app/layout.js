import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotifake",
  description: "Best music player ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
