import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const shouldRestore =
      pathname === "/visits" &&
      sessionStorage.getItem("visitsRestore") === "1";

    if (shouldRestore) {
      sessionStorage.removeItem("visitsRestore"); // on consomme le drapeau
      const y = sessionStorage.getItem("visitsScroll");
      window.scrollTo(0, y ? Number(y) : 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}