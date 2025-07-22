"use client"

import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize(); // Set initial state
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  if (isMobile) {
    return <MobileNav />;
  } else {
    return <DesktopNav />;
  }
}
