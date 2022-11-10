import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import useScrollLock from "../../hooks/use-scroll-lock";
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
  const [isLoading, setIsLoading] = useState(true);
  const { lock, unlock } = useScrollLock();

  /* useEffect(() => {
    lock();
    const load = setTimeout(() => {
      setIsLoading(false);
      unlock();
    }, 1000);

    return () => clearTimeout(load);
  }, [lock, unlock]); */

  return (
    <AnimatePresence>
      {isLoading && (
        <div
          className="fixed h-screen w-screen bg-accent"
          style={{
            zIndex: 9998,
          }}
        ></div>
      )}
      {isLoading && (
        <motion.section
          variants={wrapperVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed flex h-screen w-screen items-center justify-center bg-accent"
          style={{
            zIndex: 9999,
          }}
        >
          <Logo className="w-1/2 text-brand" />
          {/* <motion.div variants={upVariants} className=" bg-accent"></motion.div>
          <motion.div
            variants={downVariants}
            className="h-full bg-accent"
          ></motion.div>
          <motion.div variants={upVariants} className=" bg-accent">
            <Flex align="center" justify="center" className="h-full w-full">
              {isLoading && <Spinner size="xl" />}
            </Flex>
          </motion.div>
          <motion.div
            variants={downVariants}
            className=" bg-accent"
          ></motion.div>
          <motion.div variants={upVariants} className=" bg-accent"></motion.div> */}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Loading;
