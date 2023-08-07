import { useCallback } from "react";

export interface UseVanillaNavigateProps {
  id: string;
  options?: ScrollIntoViewOptions;
}

const useVanillaNavigate = ({ id, options }: UseVanillaNavigateProps) => {
  const navigate = useCallback(() => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView(options);
  }, [id, options]);

  return navigate;
};

export default useVanillaNavigate;
