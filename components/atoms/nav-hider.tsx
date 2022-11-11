import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState, useSyncExternalStore } from "react";
import useScrollLock from "../../hooks/use-scroll-lock";
import { GlobalContext } from "../../provider/global";

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
      }, 100);
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
          className="fixed h-screen w-screen bg-brand-500"
          style={{
            zIndex: 9999,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          onAnimationComplete={handleEnd}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavHider;
