export interface NavItem {
  children: React.ReactNode;
}

const NavItem = ({ children }: NavItem) => (
  <li className="group relative mx-1 px-2 text-sm">{children}</li>
);

export default NavItem;
