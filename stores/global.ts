import { create } from "zustand";
import { sectionColors } from "../components/atoms/section";
import { SectionColors } from "../types/section-colors";

interface GlobalStore {
  currentColor: SectionColors;
  actions: {
    setCurrentColor: (color: SectionColors) => void;
  };
}

const useGlobalStore = create<GlobalStore>((set) => ({
  currentColor: "brand",
  actions: {
    setCurrentColor: (color) => set({ currentColor: color }),
  },
}));

export const useGlobalActions = () => useGlobalStore((state) => state.actions);

export const useCurrentColor = () =>
  useGlobalStore((state) => state.currentColor);
