"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

interface LazyGAProps {
  gaId: string;
}

export default function LazyGA({ gaId }: LazyGAProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const loginEvents = ["mouseover", "keydown", "touchstart", "scroll"];

    const initGA = () => {
      setShouldLoad(true);
      loginEvents.forEach((event) => window.removeEventListener(event, initGA));
    };

    loginEvents.forEach((event) =>
      window.addEventListener(event, initGA, { passive: true }),
    );

    return () => {
      loginEvents.forEach((event) => window.removeEventListener(event, initGA));
    };
  }, []);

  if (!shouldLoad) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
