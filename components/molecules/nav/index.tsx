import { Bars3Icon } from "@heroicons/react/24/outline";
import { Flex } from "../../atoms/flex";
import Logo from "../../atoms/logo";
import NavItem from "./item";
import NavLink from "./link";
export interface NavProps {
  children: React.ReactNode;
}
const Component = ({ children }: NavProps) => {
  return (
    <nav className="flex h-full w-full items-center justify-between">
      <div>
        <Logo className="w-24 cursor-pointer text-white" />
      </div>
      <Flex as="ul" direction="row" align="center" className="hidden md:flex">
        {children}
      </Flex>
      <Bars3Icon className="block h-6 w-6 cursor-pointer text-white md:hidden" />
    </nav>
  );
};

const Nav = Object.assign(Component, {
  Link: NavLink,
  Item: NavItem,
});

export default Nav;
