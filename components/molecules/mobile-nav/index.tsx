import { AnimatePresence, motion, Variants } from "framer-motion";
import { Flex } from "../../atoms/flex";
import Logo from "../../atoms/logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, {
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import { GlobalContext } from "../../../provider/global";
import Button from "../../atoms/button";
import useScrollLock from "../../../hooks/use-scroll-lock";

const wrapperVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0%",
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
    },
  },
};

const childVariants: Variants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const iconVariants: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 90,
    transition: {
      ease: "anticipate",
    },
  },
};

const Item = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.li
    className="cursor-pointer select-none text-gray-700 transition-colors duration-300 ease-in-out hover:text-brand"
    onClick={onClick}
    variants={childVariants}
  >
    {children}
  </motion.li>
);

const Component = ({ children }: { children: React.ReactNode }) => {
  const { mobileNavStore } = useContext(GlobalContext);

  const { lock, unlock } = useScrollLock();

  const toggleNav = useCallback(() => {
    mobileNavStore.set((prev) => ({ ...prev, show: !prev.show }));
  }, [mobileNavStore]);

  const show = useSyncExternalStore(
    mobileNavStore.subscribe,
    () => mobileNavStore.get().show,
    () => mobileNavStore.get().show
  );

  useEffect(() => {
    if (show) lock();
    else unlock();
  }, [show, lock, unlock]);

  return (
    <nav className="block h-full w-full md:hidden">
      <AnimatePresence>
        {show && (
          <motion.div
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 flex h-screen w-screen flex-col justify-between bg-accent p-4 pb-32"
          >
            <Flex
              as="ul"
              className="h-full w-full grow space-y-12 text-center text-3xl font-black sm:text-5xl"
              direction="col"
              align="center"
              justify="center"
            >
              {children}
            </Flex>

            <motion.div variants={childVariants} className="mx-auto w-fit">
              <Button
                color="accent"
                className="font-medium"
                trailingIcon={XMarkIcon}
                onClick={toggleNav}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Flex justify="between" align="center" direction="row">
        <motion.div>
          <Logo className="w-24 cursor-pointer text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants}
          animate={show ? "animate" : "initial"}
          onClick={toggleNav}
          whileTap={{
            scale: 0.9,
          }}
        >
          {!show && (
            <Bars3Icon className="z-50 h-6 w-6 cursor-pointer text-white" />
          )}
          {show && (
            <XMarkIcon className="z-50 h-6 w-6 cursor-pointer text-white" />
          )}
        </motion.div>
      </Flex>
    </nav>
  );
};

const MobileNav = Object.assign(Component, {
  Item,
});

export default MobileNav;
