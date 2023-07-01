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
        className="flex flex-col md:h-14 md:flex-row md:gap-4"
      >
        <li className="flex items-center">
          <Link href="/#features" onClick={handleLinkClick}>
            Features
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/pricing" onClick={handleLinkClick}>
            Pricing
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/docs" onClick={handleLinkClick}>
            Documentation
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
