import { useCallback } from "react";
import { useGlobalActions } from "../stores/global";
import { SectionColors } from "../types/section-colors";

export interface UseSetCurrentColorProps {
  color: SectionColors;
}

/**
 * Hook for setting the current color in the global zustand store. Provides a function that can be called to set the current color. Useful in combination with an observable component.
 *
 * @param color The color to set as the current color.
 * @returns A function that can be called to set the current color.
 */
const useSetCurrentColor = ({ color }: UseSetCurrentColorProps) => {
  const actions = useGlobalActions();

  const handleSetCurrentColor = useCallback(
    () => actions.setCurrentColor(color),
    [color, actions]
  );

  return handleSetCurrentColor;
};

export default useSetCurrentColor;
