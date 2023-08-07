import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { FramerVariants } from "../../types/framer-variants";
import { SpringColors } from "../../types/spring-colors";
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
};

const cardColors: Pick<SpringColors, "brand" | "accent"> = {
  brand: "bg-brand text-white",
  accent: "bg-accent text-gray-700",
};

export interface CardProps {
  isAnimated?: boolean;
  title: string;
  content: string;
  className?: string;
  variants?: Partial<FramerVariants>;
  color?: keyof typeof cardColors;
}

const Card = ({
  isAnimated = true,
  title,
  content,
  className,
  variants: variantProps,
  color = "brand",
}: CardProps) => {
  const classNames = setClasses([
    "flex space-y-12 xs:space-y-12 py-4 overflow-scroll h-96 md:h-fit xs:py-12 xs:w-64 flex-col justify-evenly whitespace-normal rounded-lg p-4 shadow-md lg:w-80",
    cardColors[color],
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
    ref,
    variants,
    initial: "initial",
    animate: inView ? "animate" : "exit",
    whileHover: "whileHover",
  };

  return (
    <motion.article
      {...(isAnimated ? animatedProps : {})}
      className={classNames}
    >
      <Title size="xl" className="md:font-2xl font-black">
        {title}
      </Title>
      <p>{content}</p>
    </motion.article>
  );
};

export default Card;
