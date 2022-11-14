import { useCallback, useEffect, useState } from "react";
import useSubscribableStore from "./use-subscribable-store";

export interface useScrollObserverProps {
  observables: React.RefObject<HTMLElement>[];
  observableAttribute: string;
}

/**
 *
 * @param observables React ref objects
 * @param observableAttribute attribute to be set in current section state
 * @returns currentSection - string
 * @returns hasIOSupport - if browser supports IntersectionObserver
 */
const useScrollObserver = <Sections extends string>({
  observables: observablesProps,
  observableAttribute,
}: useScrollObserverProps) => {
  const [observables] =
    useState<React.RefObject<HTMLElement>[]>(observablesProps);

  const store = useSubscribableStore<{ attribute: Sections | undefined }>({
    attribute: undefined,
  });

  const [hasIOSupport, setHasIOSupport] = useState<boolean>(true);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const attribute = entry.target.getAttribute(observableAttribute);
          if (attribute) store.set({ attribute: attribute as Sections });
        }
      });
    },
    [observableAttribute, store]
  );

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport) {
      setHasIOSupport(false);
      return;
    }

    if (!observables.length) return;

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "0px 0px -99% 20px",
    });

    observables.forEach((node) => {
      if (node.current) observer.observe(node.current);
    });

    return () => observer.disconnect();

    // ignoring observables because they will never change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleObserver]);

  return {
    store,
    hasIOSupport,
  };
};

export default useScrollObserver;
