import { motion } from "framer-motion";
import { useCurrentColor } from "../../../stores/global";
import { OmitFramerProps } from "../../../types/omit-framer-props";
import { navHoverColors, navTextColors } from "./constants";
import NavUnderline from "./underline";

export interface NavLinkProps
  extends Omit<
    React.ComponentPropsWithoutRef<"li">,
    "className" | OmitFramerProps
  > {
  children?: React.ReactNode;
}

const NavLink = ({ children, ...rest }: NavLinkProps) => {
  const color = useCurrentColor();

  const text = color ? navTextColors[color] : navTextColors.brand;
  const hover = color ? navHoverColors[color] : navHoverColors.brand;

  return (
    <motion.li
      whileTap={{
        scale: 0.9,
      }}
      {...rest}
      role="link"
      aria-roledescription="link"
      className={`text-md group relative mx-4 cursor-pointer px-2 transition-colors duration-300 ease-in-out ${text}`}
    >
      {children}
      <NavUnderline className={hover} />
    </motion.li>
  );
};

export default NavLink;
