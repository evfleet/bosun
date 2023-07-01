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
    >
      {isOpen ? (
        <Cross1Icon height={30} width={30} />
      ) : (
        <HamburgerMenuIcon height={30} width={30} />
      )}
    </button>
  );
};

export default Hamburger;
