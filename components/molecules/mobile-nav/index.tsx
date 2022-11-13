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
import useNavTo from "../../../hooks/use-nav-to";

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

const navToggleColors = {
  brand: "text-white",
  light: "text-gray-700",
  accent: "text-brand",
  dark: "text-white",
};

const NavToggle = ({ onClick }: { onClick: () => void }) => {
  const { mobileNavStore, currentColor } = useContext(GlobalContext);
  const show = useSyncExternalStore(
    mobileNavStore.subscribe,
    () => mobileNavStore.get().show,
    () => mobileNavStore.get().show
  );

  const color = useSyncExternalStore(
    currentColor.subscribe,
    () => currentColor.get().color,
    () => currentColor.get().color
  );

  const navToggleColor = color ? navToggleColors[color] : navToggleColors.brand;

  const classNames = `z-50 h-6 w-6 cursor-pointer ${navToggleColor}`;

  return (
    <motion.button
      variants={iconVariants}
      animate={show ? "animate" : "initial"}
      onClick={onClick}
      whileTap={{
        scale: 0.9,
      }}
    >
      {!show && <Bars3Icon className={classNames} />}
      {show && <XMarkIcon className={classNames} />}
    </motion.button>
  );
};

const NavLogo = ({ onClick }: { onClick: () => void }) => {
  const { mobileNavStore, currentColor } = useContext(GlobalContext);
  const color = useSyncExternalStore(
    currentColor.subscribe,
    () => currentColor.get().color,
    () => currentColor.get().color
  );

  const navLogoColor = color ? navToggleColors[color] : navToggleColors.brand;

  /* const navIntro = useNavTo(introRef);

  const handleNavIntro = () => {
    navHideStore.set({ show: true, callback: navIntro });
  }; */

  return (
    <motion.div
      whileTap={{
        scale: 0.9,
      }}
      onClick={onClick}
    >
      <Logo className={`w-24 cursor-pointer ${navLogoColor}`} />
    </motion.div>
  );
};

const Component = ({ children }: { children: React.ReactNode }) => {
  const { mobileNavStore, introRef, navHideStore } = useContext(GlobalContext);

  const { lock, unlock } = useScrollLock();

  const navIntro = useNavTo(introRef);

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

  const handleLogoClick = useCallback(() => {
    navHideStore.set({ show: true, callback: navIntro });
  }, [navHideStore, navIntro]);

  return (
    <nav className="block h-full w-full md:hidden">
      <AnimatePresence>
        {show && (
          <motion.div
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 flex h-screen w-screen flex-col justify-between bg-accent-400 p-4 pb-32"
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
        <NavLogo onClick={handleLogoClick} />
        <NavToggle onClick={toggleNav} />
      </Flex>
    </nav>
  );
};

const MobileNav = Object.assign(Component, {
  Item,
});

export default MobileNav;
