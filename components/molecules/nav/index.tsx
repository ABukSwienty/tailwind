import { motion } from "framer-motion";
import { useCurrentColor } from "../../../stores/global";
import { Flex } from "../../atoms/flex";
import Logo from "../../atoms/logo";
import NavLink from "./link";
import NavMenu from "./menu";

export interface NavProps {
  children: React.ReactNode;
  onClickLogo: () => void;
}

const textColors = {
  brand: "text-white",
  light: "text-gray-700",
  accent: "text-brand",
  dark: "text-white",
};

const Component = ({ children, onClickLogo }: NavProps) => {
  const color = useCurrentColor();

  const logoColor = color ? textColors[color] : textColors.brand;

  return (
    <nav className="hidden h-full w-full items-center justify-between md:flex">
      <motion.div
        onClick={onClickLogo}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Logo
          className={`w-24 cursor-pointer transition-colors duration-300 ease-in-out ${logoColor}`}
        />
      </motion.div>
      <Flex as="ul" direction="row" align="center">
        {children}
      </Flex>
    </nav>
  );
};

const Nav = Object.assign(Component, {
  Link: NavLink,
  Menu: NavMenu,
});

export default Nav;
