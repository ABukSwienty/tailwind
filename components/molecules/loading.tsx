import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import useScrollLock from "../../hooks/use-scroll-lock";
import AnimatedLogo from "../atoms/animated-logo";
import { Flex } from "../atoms/flex";
import Logo from "../atoms/logo";
import Spinner from "../atoms/spinner";

const wrapperVariants: Variants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const upVariants: Variants = {
  initial: {},
  animate: {},
  exit: {
    y: "-100%",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

const downVariants = {
  initial: {},
  animate: {},
  exit: {
    y: "100%",
    transition: {
      ease: "easeIn",
    },
  },
};

const Loading = () => {
  const [show, setShow] = useState(true);
  const { lock, unlock } = useScrollLock();

  const handleEnd = () => {
    console.log("end");
  };

  return (
    <AnimatePresence>
      <div className="fixed h-screen w-screen bg-white" />
      {show && (
        <motion.div
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
          <AnimatedLogo className="w-1/2" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
