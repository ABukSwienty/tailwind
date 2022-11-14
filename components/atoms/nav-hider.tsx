import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState, useSyncExternalStore } from "react";
import useScrollLock from "../../hooks/use-scroll-lock";
import { GlobalContext } from "../../provider/global";
import AnimatedLogo from "./animated-logo";

const NavHider = () => {
  const { navHideStore } = useContext(GlobalContext);
  const [animateEnd, setAnimateEnd] = useState(true);

  const { lock, unlock } = useScrollLock();

  const show = useSyncExternalStore(
    navHideStore.subscribe,
    () => navHideStore.get().show,
    () => navHideStore.get().show
  );

  const handleEnd = () => {
    if (animateEnd) {
      lock();
      setAnimateEnd(false);
      const callback = navHideStore.get().callback;
      if (callback) callback();
      setTimeout(() => {
        navHideStore.set({ show: false });
      }, 1000);
    }
    if (!animateEnd) {
      setAnimateEnd(true);
      unlock();
    }
  };

  return (
    <AnimatePresence>
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
          className="fixed flex h-screen w-screen items-center justify-center bg-brand"
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
          {show && <AnimatedLogo className="w-full md:w-1/2" />}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavHider;
