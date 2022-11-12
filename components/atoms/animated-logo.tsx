import Image from "next/image";
import Logo from "../../public/logo/animated-logo.gif";
import setClasses from "../../util/set-classes";

const AnimatedLogo = ({ className }: { className: string }) => {
  const classNames = setClasses(["relative", className]);
  return (
    <div className={classNames}>
      <Image src={Logo} alt="animated log" />
    </div>
  );
};

export default AnimatedLogo;
