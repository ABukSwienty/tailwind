import { motion } from "framer-motion";
import { OmitFramerProps } from "../../../types/omit-framer-props";

export interface NavLinkProps
  extends Omit<
    React.ComponentPropsWithoutRef<"li">,
    "className" | OmitFramerProps
  > {
  label: string;
}

const NavLink = ({ label, ...rest }: NavLinkProps) => (
  <motion.li
    whileTap={{
      scale: 0.9,
    }}
    {...rest}
    className="group relative mx-1 cursor-pointer px-2 text-sm text-white"
  >
    {label}
    <div className="absolute left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition-all duration-300 ease-in-out group-hover:scale-x-100" />
  </motion.li>
);

export default NavLink;
