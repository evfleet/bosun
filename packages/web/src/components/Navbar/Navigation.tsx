import Link from "next/link";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Navigation: FunctionComponent<NavigationProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={twMerge(
        /* Subtract from top to cover navbar border */
        "absolute left-0 top-[calc(3.5rem-1px)] z-50",
        "w-screen px-2",
        "border-b border-gray-6 bg-gray-1",
        [!isOpen && "hidden"]
      )}
    >
      <ul id="main-menu" role="list" className="container mx-auto ">
        <li>
          <Link href="/#features">Features</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/docs">Documentation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
