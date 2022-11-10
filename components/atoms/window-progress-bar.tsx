import { motion, useScroll, useSpring } from "framer-motion";

const WindowProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className={`h-1 w-full origin-left bg-white`}
      style={{ scaleX }}
    />
  );
};

export default WindowProgressBar;
