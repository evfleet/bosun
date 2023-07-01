import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger: FunctionComponent<HamburgerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-controls="main-menu"
      aria-expanded={isOpen ? "true" : "false"}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      className="group md:hidden"
    >
      {isOpen ? (
        <Cross1Icon
          width={30}
          height={30}
          className="stroke-gray-11 hover:stroke-gray-12 group-focus:stroke-gray-12"
        />
      ) : (
        <HamburgerMenuIcon
          width={30}
          height={30}
          className="stroke-gray-11 hover:stroke-gray-12 group-focus:stroke-gray-12"
        />
      )}
    </button>
  );
};

export default Hamburger;
