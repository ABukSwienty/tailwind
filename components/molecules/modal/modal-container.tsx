import { useCallback, useEffect, useRef } from "react";

import { Variants, motion } from "framer-motion";
import { isDesktop, isMobile } from "react-device-detect";
import Portal from "../../../HOC/portal";
import framerVariantProps from "../../../constants/framer-variant-props";
import { useScrollLockEffect } from "../../../hooks/use-lock-scroll";
import setClasses from "../../../util/set-classes";
import Leaflet from "./leaflet";
import { useModalStore } from "./package";

const WRAPPER_VARIANTS: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

const MODAL_VARIANTS: Variants = {
  initial: {
    opacity: 0,
    y: 200,
    transition: {
      ease: "anticipate",
    },
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: {
      ease: "anticipate",
    },
  },
};

export default function Modal({
  children,
  hasPadding = true,
}: {
  children: React.ReactNode;
  hasPadding?: boolean;
}) {
  const { dismiss } = useModalStore();
  const outSideRef = useRef(null);

  const modalClassnames = setClasses([
    "relative z-[9999] mb-10 flex h-fit w-4/5 flex-col space-y-2 rounded-xl bg-accent shadow-md sm:mb-0 sm:space-y-8 lg:w-1/3",
    hasPadding && "px-6 py-8",
  ]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    },
    [dismiss]
  );

  useScrollLockEffect();

  useEffect(() => {
    /* const body = document.querySelector("body");

    if (body) {
      body.style.overflow = "hidden";
    } */

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      /* if (body) {
        body.style.overflow = "auto";
      } */
    };
  }, [onKeyDown]);

  return (
    <>
      <Portal>
        {isMobile && (
          <Leaflet hasPadding={hasPadding} dismiss={dismiss}>
            {children}
          </Leaflet>
        )}
        {isDesktop && (
          <>
            <div className="fixed z-[9998] flex h-screen w-screen items-center justify-center">
              <motion.div
                ref={outSideRef}
                variants={MODAL_VARIANTS}
                initial="initial"
                animate="animate"
                exit="exit"
                className={modalClassnames}
              >
                {children}
              </motion.div>

              <motion.div
                variants={WRAPPER_VARIANTS}
                {...framerVariantProps}
                className="absolute z-[9998] h-screen w-screen bg-gray-900 bg-opacity-40 backdrop-blur-sm"
                onClick={dismiss}
              />
            </div>
          </>
        )}
      </Portal>
    </>
  );
}
