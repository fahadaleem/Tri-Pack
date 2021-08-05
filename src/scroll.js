import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollDown() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(700, 700);
  }, [pathname]);

  return null;
}