import { useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../provider/global";
import { SpringColors } from "../../types/spring-colors";
import setClasses from "../../util/set-classes";

export interface SectionProps
  extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
  color?: keyof typeof sectionColors;
  innerRef?: React.RefObject<HTMLElement>;
}

export const sectionColors: Pick<
  SpringColors,
  "brand" | "accent" | "light" | "dark"
> = {
  brand: "bg-brand",
  accent: "bg-accent",
  light: "bg-gray-50",
  dark: "bg-gray-800",
};

const Section = ({
  children,
  color = "light",
  className,
  innerRef,
  ...rest
}: SectionProps) => {
  const { currentColor } = useContext(GlobalContext);
  const ref = useRef<HTMLElement>(null);

  const classNames = setClasses(["h-fit", className, sectionColors[color]]);

  const inView = useInView(innerRef ? innerRef : ref, {
    margin: "0px 0px -99% 0px",
  });

  useEffect(() => {
    if (inView) {
      currentColor.set({ color });
    }
  }, [inView, currentColor, color]);

  return (
    <section
      data-color={color}
      ref={innerRef ? innerRef : ref}
      className={classNames}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
