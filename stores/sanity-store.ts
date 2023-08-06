import { create } from "zustand";
import { SanityTypes } from "../types/sanity-data";
import { useRef } from "react";

export type SanityStore = {
  howWeWork: SanityTypes.HowWeWorkPage | null;
  cases: SanityTypes.CasesPage | null;
  about: SanityTypes.AboutUsPage | null;
  actions: {
    setStore: (
      howWeWork: SanityTypes.HowWeWorkPage,
      cases: SanityTypes.CasesPage,
      about: SanityTypes.AboutUsPage
    ) => void;
  };
};

const useSanityStore = create<SanityStore>((set, get) => ({
  howWeWork: null,
  cases: null,
  about: null,
  actions: {
    setStore: (howWeWork, cases, about) => {
      set({ howWeWork, cases, about });
    },
  },
}));

export const useSetSanityStore = (
  howWeWork: SanityTypes.HowWeWorkPage,
  cases: SanityTypes.CasesPage,
  about: SanityTypes.AboutUsPage
) => {
  const { setStore } = useSanityStoreActions();
  const ref = useRef(false);

  if (!ref.current) {
    ref.current = true;
    setStore(howWeWork, cases, about);
  }
};

export const useSanityStoreActions = () =>
  useSanityStore((state) => state.actions);

export const useSanityStoreHowWeWork = () =>
  useSanityStore((state) => state.howWeWork);

export const useSanityStoreCases = () => useSanityStore((state) => state.cases);

export const useSanityStoreAbout = () => useSanityStore((state) => state.about);
