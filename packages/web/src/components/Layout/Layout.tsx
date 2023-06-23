import { FunctionComponent, ReactNode } from "react";

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="border-b-2"></div>

      <main className="flex-1">{children}</main>

      <div className="bg-gray-700 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
