import {
  Transition,
  Variants,
  motion,
  useAnimationControls,
} from "framer-motion";

import { useCallback, useEffect } from "react";
import { useScrollLock } from "../../hooks/use-lock-scroll";
import {
  useIsSplashInitialLoad,
  useIsSplashShowing,
  useSplashActions,
} from "../../stores/splash";
import AnimatedLogo from "../atoms/animated-logo";

const variants: Variants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};

const transition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const Loading = () => {
  const show = useIsSplashShowing();
  const initial = useIsSplashInitialLoad();
  const control = useAnimationControls();
  const actions = useSplashActions();

  const [lock, unlock] = useScrollLock();

  const handleAnimateIn = useCallback(async () => {
    control.set("initial");
    lock();
    await control.start("animate");
    actions.publish("didAnimateIn");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnimateOut = useCallback(async () => {
    await control.start("exit");
    unlock();
    actions.publish("didAnimateOut");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (show) {
      handleAnimateIn();
      /* lock(); */
    } else {
      handleAnimateOut();
      /* unlock(); */
    }
  }, [show, handleAnimateIn, handleAnimateOut, lock, unlock]);

  return (
    <>
      <motion.div
        key={1}
        animate={control}
        variants={variants}
        initial="initial"
        className="fixed z-[9999] flex h-screen w-screen items-center justify-center bg-brand-500"
        transition={transition}
      >
        <AnimatedLogo className="w-full md:w-1/2" />
      </motion.div>

      {show && initial && (
        <div className="fixed z-[9998] h-screen w-screen bg-white" />
      )}
    </>
  );
};

export default Loading;
