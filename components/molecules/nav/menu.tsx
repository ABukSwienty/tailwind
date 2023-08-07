import { ChevronDownIcon } from "@heroicons/react/24/solid";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Transition, Variants, motion } from "framer-motion";
import { useCurrentColor } from "../../../stores/global";
import { navHoverColors, navMenuColors, navTextColors } from "./constants";
import AnimatedChevron from "../../atoms/animated-chevron";
import NavUnderline from "./underline";

export interface NavMenuProps {
  label: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
}

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const transition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const NavMenu = ({ label, children, isOpen, handleOpen }: NavMenuProps) => {
  const color = useCurrentColor();

  const text = color ? navTextColors[color] : navTextColors.brand;
  const menu = color ? navMenuColors[color] : navMenuColors.brand;
  const hover = color ? navHoverColors[color] : navHoverColors.brand;

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={handleOpen}>
      <DropdownMenu.Trigger asChild>
        <li
          className={`text-md group relative mx-4 cursor-pointer px-2 transition-colors duration-300 ease-in-out ${text}`}
        >
          <div className="flex flex-row items-center gap-4">{label}</div>
          <NavUnderline className={`${hover} ${isOpen ? "scale-x-100" : ""}`} />
        </li>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        onMouseLeave={() => {
          handleOpen(false);
        }}
        sideOffset={12}
        alignOffset={-200}
        align="end"
      >
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={transition}
          className={`h-fit rounded-md ${menu} p-2 shadow-md`}
        >
          {children}
        </motion.div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default NavMenu;
