import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <div className={styles.container}>
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
