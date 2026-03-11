"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll("nav a").forEach(link => {
      const href = link.getAttribute("href");

      if (typeof href === "string" && pathname.startsWith(href)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [pathname]);

  return null;
}
