import { motion } from "framer-motion";
import { useContext, useSyncExternalStore } from "react";
import useNavTo from "../../../hooks/use-nav-to";
import { GlobalContext } from "../../../provider/global";
import { Flex } from "../../atoms/flex";
import Logo from "../../atoms/logo";
import NavLink from "./link";
export interface NavProps {
  children: React.ReactNode;
}
const Component = ({ children }: NavProps) => {
  const { introRef, navHideStore, currentColor } = useContext(GlobalContext);

  const color = useSyncExternalStore(
    currentColor.subscribe,
    () => currentColor.get().color,
    () => currentColor.get().color
  );

  const navIntro = useNavTo(introRef);

  const handleNavIntro = () => {
    navHideStore.set({ show: true, callback: navIntro });
  };

  return (
    <nav className="hidden h-full w-full items-center justify-between md:flex">
      <motion.div
        onClick={handleNavIntro}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Logo className="w-24 cursor-pointer text-white" />
      </motion.div>
      <Flex as="ul" direction="row" align="center">
        {children}
      </Flex>
    </nav>
  );
};

const Nav = Object.assign(Component, {
  Link: NavLink,
});

export default Nav;
