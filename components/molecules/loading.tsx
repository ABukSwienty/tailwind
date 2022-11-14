import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import useLockScreen from "../../hooks/use-lock-screen";
import useScrollLock from "../../hooks/use-scroll-lock";
import AnimatedLogo from "../atoms/animated-logo";
import { Flex } from "../atoms/flex";
import Logo from "../atoms/logo";
import Spinner from "../atoms/spinner";

const Loading = () => {
  const [show, setShow] = useState(true);

  useLockScreen(show);

  const handleEnd = () => {
    setTimeout(() => {
      setShow(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key={1}
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            className="fixed flex h-screen w-screen items-center justify-center bg-brand-500"
            style={{
              zIndex: 9999,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            onAnimationComplete={handleEnd}
          >
            <AnimatedLogo className="w-full md:w-1/2" />
          </motion.div>
        )}
      </AnimatePresence>
      {show && <div className="fixed z-[9998] h-screen w-screen bg-white" />}
    </>
  );
};

export default Loading;
