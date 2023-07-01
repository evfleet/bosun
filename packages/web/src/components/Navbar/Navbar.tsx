"use client";

import { useEffect, useState } from "react";

import Brand from "./Brand";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-14 border-b border-gray-6 bg-gray-1 px-2 py-4">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Brand />

        <nav className="flex h-full items-center md:relative" aria-label="Main">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
