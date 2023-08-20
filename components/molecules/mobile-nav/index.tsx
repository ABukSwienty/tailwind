import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, Variants, motion } from "framer-motion";
import React from "react";
import useBoolean from "../../../hooks/use-boolean";
import { useScrollLock } from "../../../hooks/use-lock-scroll";
import { useCurrentColor } from "../../../stores/global";
import {
  useIsMobileNavOpen,
  useMobileNavActions,
} from "../../../stores/mobile-nav";
import setClasses from "../../../util/set-classes";
import Button from "../../atoms/button";
import { Flex } from "../../atoms/flex";
import Logo from "../../atoms/logo";

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
      staggerDirection: 1,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
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
  exit: {
    y: -30,
    opacity: 0,
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

export interface MobileNavItemProps
  extends Omit<
    React.HTMLAttributes<HTMLLIElement>,
    "onClick" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onDrag"
  > {
  onClick: () => void;
  children: React.ReactNode;
  size?: "sm" | "lg";
}

const itemSize = {
  sm: "text-lg sm:text-3xl",
  lg: "text-3xl sm:text-5xl",
};

const Item = ({
  children,
  onClick,
  size = "lg",
  className,
  ...rest
}: MobileNavItemProps) => {
  const classNames = setClasses([
    "my-6 cursor-pointer select-none font-black text-gray-700 transition-colors duration-300 ease-in-out hover:text-brand",
    className,
    itemSize[size],
  ]);

  return (
    <motion.li
      className={classNames}
      onClick={onClick}
      variants={childVariants}
      {...rest}
    >
      {children}
    </motion.li>
  );
};

export interface MobileNavMenuProps {
  children?: React.ReactNode;
  label: string;
}

const navMenuVariants: Variants = {
  initial: {
    height: 0,
  },
  animate: {
    height: "auto",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      staggerChildren: 0.1,
    },
  },
  exit: {
    height: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const MobileNavMenu = ({ children, label }: MobileNavMenuProps) => {
  const { value, setTrue, toggle } = useBoolean(false);
  const isOpen = useIsMobileNavOpen();
  return (
    <>
      <Item onClick={toggle} className="flex flex-row items-center">
        {label}
      </Item>
      <AnimatePresence>
        {value && isOpen && (
          <motion.ul
            className="w-full overflow-hidden"
            variants={navMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

const navToggleColors = {
  brand: "text-white",
  light: "text-gray-700",
  accent: "text-brand",
  dark: "text-white",
};

const NavToggle = ({ onClick }: { onClick: () => void }) => {
  const isOpen = useIsMobileNavOpen();

  const color = useCurrentColor();

  const navToggleColor = color ? navToggleColors[color] : navToggleColors.brand;

  const classNames = `z-50 h-6 w-6 cursor-pointer ${navToggleColor}`;

  return (
    <motion.button
      variants={iconVariants}
      animate={isOpen ? "animate" : "initial"}
      onClick={onClick}
      whileTap={{
        scale: 0.9,
      }}
    >
      {!isOpen && <Bars3Icon className={classNames} />}
      {isOpen && <XMarkIcon className={classNames} />}
    </motion.button>
  );
};

const NavLogo = ({ onClick }: { onClick: () => void }) => {
  const color = useCurrentColor();

  const navLogoColor = color ? navToggleColors[color] : navToggleColors.brand;

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

const Component = ({
  children,
  onClickLogo,
}: {
  children: React.ReactNode;
  onClickLogo: () => void;
}) => {
  const isOpen = useIsMobileNavOpen();
  const actions = useMobileNavActions();
  const [lock, unlock] = useScrollLock();

  return (
    <nav className="block h-full w-full md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={wrapperVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 flex h-screen w-screen flex-col justify-between overflow-scroll bg-accent-400 p-4 pb-32"
          >
            <Flex
              as="ul"
              className="h-full w-full grow text-center"
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
                onClick={() => {
                  unlock();
                  actions.setClose();
                }}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Flex justify="between" align="center" direction="row">
        <NavLogo onClick={onClickLogo} />
        <NavToggle
          onClick={() => {
            lock();
            actions.toggle();
          }}
        />
      </Flex>
    </nav>
  );
};

const MobileNav = Object.assign(Component, {
  Item,
  Menu: MobileNavMenu,
});

export default MobileNav;
