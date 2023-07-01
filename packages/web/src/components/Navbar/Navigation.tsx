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
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={twMerge(
        /* Subtract from top to cover navbar border */
        "absolute left-0 right-0 top-[calc(3.5rem-1px)] z-50",
        "md:static md:left-auto md:right-auto md:top-auto md:block md:h-14",
        "px-2",
        "border-b border-gray-6 bg-gray-1",
        [!isOpen && "hidden"]
      )}
    >
      <ul
        id="main-menu"
        role="list"
        className="flex flex-col font-semibold text-gray-11  md:h-14 md:flex-row md:gap-4"
      >
        <li className="flex items-center hover:text-gray-12 focus:text-gray-12">
          <Link
            href="/#features"
            onClick={handleLinkClick}
            className="focus:text-gray-12"
          >
            Features
          </Link>
        </li>
        <li className="flex items-center hover:text-gray-12">
          <Link
            href="/pricing"
            onClick={handleLinkClick}
            className="focus:text-gray-12"
          >
            Pricing
          </Link>
        </li>
        <li className="flex items-center hover:text-gray-12">
          <Link
            href="/docs"
            onClick={handleLinkClick}
            className="focus:text-gray-12"
          >
            Documentation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
