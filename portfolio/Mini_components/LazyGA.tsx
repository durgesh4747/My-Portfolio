"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

interface LazyGAProps {
  gaId: string;
}

export default function LazyGA({ gaId }:LazyGAProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldLoad(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;
  return <GoogleAnalytics gaId={gaId} />;
}