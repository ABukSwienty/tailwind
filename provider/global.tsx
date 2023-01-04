import React, { createContext, useRef } from "react";
import { sectionColors } from "../components/atoms/section";
import useSubscribableStore from "../hooks/use-subscribable-store";

export interface GlobalContextInterface {
  introRef: React.RefObject<HTMLElement>;
  serviceRef: React.RefObject<HTMLDivElement>;
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
  modalStore: ReturnType<typeof useSubscribableStore<{ show: boolean }>>;
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

  const modalStore = useSubscribableStore<{ show: boolean }>({
    show: false,
  });

  const introRef = useRef<HTMLElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  return (
    <GlobalContext.Provider
      value={{
        introRef,
        serviceRef,
        casesRef,
        aboutRef,
        navHideStore,
        mobileNavStore,
        currentColor,
        modalStore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
