import Image from "next/image";
import Logo from "../../public/logo/animated-logo-sharper.gif";
import setClasses from "../../util/set-classes";

import { useEffect } from "react";
import { useIsSplashShowing, useSplashActions } from "../../stores/splash";

// this is ca. what the animation takes
const ANIMATION_DURATION = 2000;

const AnimatedLogo = ({ className }: { className: string }) => {
  const classNames = setClasses(["relative", className]);

  const show = useIsSplashShowing();
  const actions = useSplashActions();

  useEffect(() => {
    const t = setTimeout(() => {
      actions.hide();
    }, ANIMATION_DURATION);

    return () => {
      clearTimeout(t);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <>
      {show && (
        <div className={classNames}>
          <Image priority src={Logo} alt="animated log" />
        </div>
      )}
    </>
  );
};

export default AnimatedLogo;
