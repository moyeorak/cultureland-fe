import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const value = { isDesktop, isMobile: !isDesktop };

  return value;
}
