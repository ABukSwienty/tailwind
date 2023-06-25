import { motion } from "framer-motion";
import { useContext, useSyncExternalStore } from "react";
import { GlobalContext } from "../../../provider/global";
import { OmitFramerProps } from "../../../types/omit-framer-props";
import { useCurrentColor } from "../../../stores/global";

export interface NavLinkProps
  extends Omit<
    React.ComponentPropsWithoutRef<"li">,
    "className" | OmitFramerProps
  > {
  label: string;
}

const textColors = {
  brand: "text-white",
  light: "text-gray-700",
  accent: "text-brand",
  dark: "text-white",
};

const hoverColors = {
  brand: "bg-white",
  light: "bg-gray-700",
  accent: "bg-brand",
  dark: "bg-white",
};

const NavLink = ({ label, ...rest }: NavLinkProps) => {
  const color = useCurrentColor();

  const text = color ? textColors[color] : textColors.brand;
  const hover = color ? hoverColors[color] : hoverColors.brand;

  return (
    <motion.li
      whileTap={{
        scale: 0.9,
      }}
      {...rest}
      className={`text-md group relative mx-4 cursor-pointer px-2 transition-colors duration-300 ease-in-out ${text}`}
    >
      {label}
      <div
        className={`absolute left-0 h-0.5 w-full origin-left scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100 ${hover}`}
      />
    </motion.li>
  );
};

export default NavLink;
