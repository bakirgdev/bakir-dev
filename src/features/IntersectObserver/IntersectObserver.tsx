"use client";

import { useEffect } from "react";
import { Observer } from "tailwindcss-intersect/observer";

// Rendered from app/template.tsx, which remounts on every navigation, so newly rendered elements get observed.
export function IntersectObserver() {
  useEffect(() => {
    Observer.restart();
  }, []);

  return null;
}
