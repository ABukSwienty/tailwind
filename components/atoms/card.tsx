import { Variants, useInView, motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { FramerVariants } from "../../types/framer-variants";
import setClasses from "../../util/set-classes";
import setVariants from "../../util/set-variants";
import Title from "./title";

const DEFAULT_VARIANTS: Partial<FramerVariants> = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      ease: "anticipate",
    },
  },
  whileHover: {
    scale: 1.05,
  },
};

export interface CardProps {
  isAnimated?: boolean;
  title: string;
  content: string;
  className?: string;
  variants?: Partial<FramerVariants>;
}

const Card = ({
  isAnimated = true,
  title,
  content,
  className,
  variants: variantProps,
}: CardProps) => {
  const classNames = setClasses([
    "flex h-72 xs:w-64 flex-col justify-evenly whitespace-normal rounded-lg bg-brand p-4 shadow-md xs:h-72 lg:h-96 lg:w-80",
    className,
  ]);

  const variants = useMemo(
    () => setVariants([DEFAULT_VARIANTS, variantProps]),
    [variantProps]
  );

  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-15%",
    once: false,
  });

  const animatedProps = {
    variants,
    initial: "initial",
    animate: inView ? "animate" : "exit",
    whileHover: "whileHover",
  };

  return (
    <motion.aside
      ref={ref}
      {...(isAnimated ? animatedProps : {})}
      className={classNames}
    >
      <Title size="xl" className="md:font-2xl font-black">
        {title}
      </Title>
      <p>{content}</p>
    </motion.aside>
  );
};

export default Card;
