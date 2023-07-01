import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import classes from "./layout.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <div className={classes.container}>
          <Navbar />

          <main className="bg-gray-2">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
