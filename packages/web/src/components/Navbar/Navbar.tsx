"use client";

import { useState } from "react";

import Brand from "./Brand";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-14 border-b border-gray-6 bg-gray-1 px-2 py-4">
      <div className="container mx-auto flex h-full w-full items-center">
        <Brand />

        <nav className="flex h-full items-center" aria-label="Main">
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
