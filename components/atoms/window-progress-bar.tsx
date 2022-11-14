import { motion, useScroll, useSpring } from "framer-motion";
import { useContext, useSyncExternalStore } from "react";
import { GlobalContext } from "../../provider/global";

const bgColor = {
  brand: "bg-white",
  light: "bg-brand",
  accent: "bg-brand",
  dark: "bg-white",
};

const WindowProgressBar = () => {
  const { currentColor } = useContext(GlobalContext);

  const color = useSyncExternalStore(
    currentColor.subscribe,
    () => currentColor.get().color,
    () => currentColor.get().color
  );
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const bg = color ? bgColor[color] : bgColor.brand;

  return (
    <motion.div
      className={`h-1 w-full origin-left ${bg} transition-colors duration-300 ease-in-out`}
      style={{ scaleX }}
    />
  );
};

export default WindowProgressBar;
