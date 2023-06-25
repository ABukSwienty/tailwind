import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import useIsFirstRender from "../../hooks/use-first-render";

export interface ObservableSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {
  children?: React.ReactNode;
  onEnter?: () => void;
  onExit?: () => void;
}

/**
 * Observable section component that fires a callback when it enters or exits the viewport. Uses framer-motion's useInView hook.
 *
 * @param param.children React.ReactNode
 * @param param.onEnter () => void
 * @param param.onExit () => void
 * @param param.props React.ComponentPropsWithoutRef<"section">
 * @returns FC<ObservableSectionProps>
 */
const ObservableSection = ({
  children,
  onEnter,
  onExit,
  ...props
}: ObservableSectionProps) => {
  const firstRender = useIsFirstRender();
  const ref = useRef<HTMLElement>(null);

  const inView = useInView(ref, {
    margin: "0px 0px -99% 0px",
  });

  useEffect(() => {
    if (firstRender) return;
    if (inView) {
      onEnter?.();
    } else {
      onExit?.();
    }
  }, [inView, onEnter, onExit, firstRender]);

  return (
    <section ref={ref} {...props}>
      {children}
    </section>
  );
};

export default ObservableSection;
