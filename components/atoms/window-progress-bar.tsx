import { motion, useScroll, useSpring } from "framer-motion";
import { useCurrentColor } from "../../stores/global";

const bgColor = {
  brand: "bg-white",
  light: "bg-brand",
  accent: "bg-brand",
  dark: "bg-white",
};

const WindowProgressBar = () => {
  const color = useCurrentColor();

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
