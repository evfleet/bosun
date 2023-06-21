import { FunctionComponent, ReactNode } from "react";

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="border-b-2 p-2">
        <Header />
      </div>

      <main className="flex-1 bg-blue-50 p-2">{children}</main>

      <div className="bg-gray-700 p-2 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
