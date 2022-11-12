import React, { createContext, useRef, useSyncExternalStore } from "react";
import { sectionColors } from "../components/atoms/section";
import useScrollObserver from "../hooks/use-scroll-observer";
import useSubscribableStore from "../hooks/use-subscribable-store";
import { SpringColors } from "../types/spring-colors";

export interface GlobalContextInterface {
  introRef: React.RefObject<HTMLElement>;
  understandRef: React.RefObject<HTMLElement>;
  accelerateRef: React.RefObject<HTMLElement>;
  communicateRef: React.RefObject<HTMLElement>;
  educateRef: React.RefObject<HTMLElement>;
  prepareRef: React.RefObject<HTMLElement>;
  casesRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
  navHideStore: ReturnType<
    typeof useSubscribableStore<{ show: boolean; callback: () => void }>
  >;
  mobileNavStore: ReturnType<typeof useSubscribableStore<{ show: boolean }>>;
  currentColor: ReturnType<
    typeof useSubscribableStore<{
      color: keyof typeof sectionColors;
    }>
  >;
}

export const GlobalContext = createContext<GlobalContextInterface>(undefined!);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const navHideStore = useSubscribableStore({
    show: false,
    callback: () => {},
  });

  const mobileNavStore = useSubscribableStore({
    show: false,
  });

  const currentColor = useSubscribableStore<{
    color: keyof typeof sectionColors;
  }>({
    color: "brand",
  });

  const understandRef = useRef<HTMLElement>(null);
  const accelerateRef = useRef<HTMLElement>(null);
  const communicateRef = useRef<HTMLElement>(null);
  const educateRef = useRef<HTMLElement>(null);
  const prepareRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const casesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  return (
    <GlobalContext.Provider
      value={{
        introRef,
        understandRef,
        accelerateRef,
        communicateRef,
        educateRef,
        prepareRef,
        casesRef,
        aboutRef,
        navHideStore,
        mobileNavStore,
        currentColor,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
