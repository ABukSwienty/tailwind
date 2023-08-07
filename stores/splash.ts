import { create } from "zustand";
import { PubSub } from "../util/pub-sub";

type SplashEvents =
  | "willAnimateIn"
  | "willAnimateOut"
  | "didAnimateIn"
  | "didAnimateOut";

interface SplashStore {
  isInitialLoad: boolean;
  isShowing: boolean;
  pubSub: PubSub<SplashEvents>;
  actions: {
    subscribe: (
      event: SplashEvents,
      callback: () => void,
      once?: boolean
    ) => () => void;
    publish: (event: SplashEvents) => void;
    show: () => void;
    hide: () => void;
  };
}

const useSplash = create<SplashStore>((set, get) => ({
  isInitialLoad: true,
  isShowing: true,
  pubSub: new PubSub<SplashEvents>(),
  actions: {
    subscribe: (event, callback, once = false) => {
      return get().pubSub.subscribe(event, callback, once);
    },
    publish: (event) => get().pubSub.publish(event),
    show: () => {
      get().pubSub.publish("willAnimateIn");
      set({ isShowing: true });
    },
    hide: () => {
      get().pubSub.publish("willAnimateOut");
      if (get().isInitialLoad) {
        set({ isShowing: false, isInitialLoad: false });
      } else {
        set({ isShowing: false });
      }
    },
  },
}));

export const useIsSplashShowing = () => useSplash((state) => state.isShowing);
export const useIsSplashInitialLoad = () =>
  useSplash((state) => state.isInitialLoad);

export const useSplashActions = () => useSplash((state) => state.actions);
