import Image from "next/image";
import Logo from "../../public/logo/animated-logo-sharper.gif";
import setClasses from "../../util/set-classes";

const AnimatedLogo = ({ className }: { className: string }) => {
  const classNames = setClasses(["relative", className]);
  return (
    <div className={classNames}>
      <Image priority src={Logo} alt="animated log" />
    </div>
  );
};

export default AnimatedLogo;
