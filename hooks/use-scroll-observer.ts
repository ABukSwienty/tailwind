import { useCallback, useEffect, useState } from "react";

export interface useScrollObserverProps {
  navRef: React.RefObject<HTMLElement>;
  observables: React.RefObject<HTMLElement>[];
  observableAttribute: string;
}

/**
 *
 * @param navRef React ref object
 * @param observables React ref objects
 * @param observableAttribute attribute to be set in current section state
 * @returns currentSection - string
 * @returns hasIOSupport - if browser supports IntersectionObserver
 */
const useScrollObserver = <Sections extends string>({
  navRef,
  observables: observablesProps,
  observableAttribute,
}: useScrollObserverProps) => {
  const [observables] =
    useState<React.RefObject<HTMLElement>[]>(observablesProps);

  const [currentSection, setCurrentSection] = useState<Sections>();
  const [hasIOSupport, setHasIOSupport] = useState<boolean>(false);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const attribute = entry.target.getAttribute(observableAttribute);
          if (attribute) setCurrentSection(attribute as Sections);
        }
      });
    },
    [observableAttribute]
  );

  useEffect(() => {
    const nav = navRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport) {
      setHasIOSupport(false);
      return;
    }

    if (!nav) return;

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "0px 0px -100%",
    });

    observables.forEach((node) => {
      if (node.current) observer.observe(node.current);
    });

    return () => observer.disconnect();

    // ignoring observables because they will never change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navRef, handleObserver]);

  return {
    currentSection,
    hasIOSupport,
  };
};

export default useScrollObserver;
