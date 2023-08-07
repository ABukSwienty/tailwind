import { create } from "zustand";
import { SectionColors } from "../types/section-colors";

type ServiceLinks = {
  id: string;
  title: string;
  subTitle: string;
};
interface GlobalStore {
  currentColor: SectionColors;
  showSplash: boolean;
  splashSubscriptions: [];
  serviceLinks: ServiceLinks[];
  isServiceNavOpen: boolean;
  actions: {
    setCurrentColor: (color: SectionColors) => void;
    setShowSplash: (show: boolean) => void;
    setServiceLinks: (links: ServiceLinks[]) => void;
    setIsServiceNavOpen: (value: boolean) => void;
  };
}

const useGlobalStore = create<GlobalStore>((set) => ({
  currentColor: "brand",
  showSplash: true,
  isServiceNavOpen: false,
  splashSubscriptions: [],
  serviceLinks: [],
  actions: {
    setCurrentColor: (color) => set({ currentColor: color }),
    setShowSplash: (show) => set({ showSplash: show }),
    setServiceLinks: (links) => set({ serviceLinks: links }),
    setIsServiceNavOpen: (val) => set({ isServiceNavOpen: val }),
  },
}));

export const useServiceNavMenu = () =>
  useGlobalStore((state) => state.isServiceNavOpen);

export const useGlobalActions = () => useGlobalStore((state) => state.actions);

export const useCurrentColor = () =>
  useGlobalStore((state) => state.currentColor);

export const useServiceLinks = () =>
  useGlobalStore((state) => state.serviceLinks);

export const useSplashScreen = () =>
  useGlobalStore((state) => state.showSplash);
