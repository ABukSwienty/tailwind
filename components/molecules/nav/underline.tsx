import setClasses from "../../../util/set-classes";

const NavUnderline = ({ className }: { className: string | undefined }) => {
  const classNames = setClasses([
    "absolute left-0 h-0.5 w-full origin-left scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100",
    className,
  ]);

  return <div className={classNames} />;
};

export default NavUnderline;
