export interface NavItemProps {
  children: React.ReactNode;
}

const NavItem = ({ children }: NavItemProps) => (
  <li className="group relative mx-1 cursor-pointer px-2 text-sm text-neutral-700 transition-colors duration-300 ease-in-out hover:text-brand">
    {children}
    <div className="absolute left-0 h-0.5 w-full origin-left scale-x-0 bg-brand transition-all duration-300 ease-in-out group-hover:scale-x-100" />
  </li>
);

export default NavItem;
