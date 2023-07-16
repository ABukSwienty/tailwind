import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

import setClasses from "../../../util/set-classes";

export default function Leaflet({
  dismiss,
  children,
  hasPadding = true,
}: {
  dismiss: () => void;
  children: ReactNode;
  hasPadding?: boolean;
}) {
  const leafletRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const transitionProps = { type: "spring", stiffness: 500, damping: 30 };

  const classNames = setClasses([
    "group fixed inset-x-0 bottom-0 z-[9999] w-screen cursor-grab space-y-8 bg-accent active:cursor-grabbing sm:hidden",
    hasPadding && "px-6 pb-12",
  ]);

  useEffect(() => {
    controls.start({
      y: 20,
      transition: transitionProps,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDragEnd(_: any, info: any) {
    const offset = info.offset.y;
    const velocity = info.velocity.y;
    const height = leafletRef.current?.getBoundingClientRect().height || 0;
    if (offset > height / 2 || velocity > 800) {
      await controls.start({ y: "100%", transition: transitionProps });
      dismiss();
    } else {
      controls.start({ y: 0, transition: transitionProps });
    }
  }

  return (
    <>
      <motion.div
        ref={leafletRef}
        key="leaflet"
        className={classNames}
        initial={{ y: "100%" }}
        animate={controls}
        exit={{ y: "100%" }}
        transition={transitionProps}
        drag="y"
        dragDirectionLock
        onDragEnd={handleDragEnd}
        dragElastic={{ top: 0, bottom: 1 }}
        dragConstraints={{ top: 0, bottom: 0 }}
      >
        <div
          className={`rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center`}
        >
          <div className="-mr-1 h-1 w-6 rounded-full bg-gray-50 transition-all group-active:rotate-12" />
          <div className="h-1 w-6 rounded-full bg-gray-50 transition-all group-active:-rotate-12" />
        </div>
        {children}
      </motion.div>
      <motion.div
        key="leaflet-backdrop"
        className="fixed inset-0 z-[9998] bg-gray-900 bg-opacity-40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={dismiss}
      />
    </>
  );
}
