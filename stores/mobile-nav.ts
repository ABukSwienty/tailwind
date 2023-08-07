import { create } from "zustand";

interface MobileNavStore {
  isOpen: boolean;
  actions: {
    toggle: () => void;
    setOpen: () => void;
    setClose: () => void;
  };
}

const useMobileNav = create<MobileNavStore>((set, get) => ({
  isOpen: false,
  actions: {
    toggle: () => {
      const { isOpen } = get();
      set({ isOpen: !isOpen });
    },
    setOpen: () => {
      set({ isOpen: true });
    },
    setClose: () => {
      set({ isOpen: false });
    },
  },
}));

export const useIsMobileNavOpen = () => useMobileNav((state) => state.isOpen);

export const useMobileNavActions = () => useMobileNav((state) => state.actions);
