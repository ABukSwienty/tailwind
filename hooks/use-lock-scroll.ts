import { useEffect } from "react";
import { isMobile } from "react-device-detect";

/**
 * @example
 * const [blockScroll, allowScroll] = useScrollLock();
 * @returns [blockScroll, allowScroll]
 */
export const useScrollLock = (): [() => void, () => void] => {
  const blockScroll = (): void => {
    if (typeof document === "undefined") return;
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    if (isMobile && html) {
      html.classList.add("overflow-hidden");
    }
    if (body) body.classList.add("overflow-hidden");
  };

  const allowScroll = (): void => {
    if (typeof document === "undefined") return;
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    if (isMobile && html) {
      html.classList.remove("overflow-hidden");
    }
    if (body) body.classList.remove("overflow-hidden");
  };

  return [blockScroll, allowScroll];
};

export const useScrollLockEffect = () => {
  const [blockScroll, allowScroll] = useScrollLock();

  useEffect(() => {
    blockScroll();
    return allowScroll;
  }, [blockScroll, allowScroll]);
};
