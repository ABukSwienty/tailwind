import { Flex } from "../../atoms/flex";
import NavItem from "./item";
export interface NavProps {
  children: React.ReactNode;
}
const Component = ({ children }: NavProps) => {
  return (
    <nav className="flex h-full w-full items-center justify-between">
      <div>logo</div>
      <Flex as="ul" direction="row" align="center">
        {children}
      </Flex>
    </nav>
  );
};

const Nav = Object.assign(Component, {
  Item: NavItem,
});

export default Nav;