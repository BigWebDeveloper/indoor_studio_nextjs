"use client";

import { useEffect, useState } from "react";

export default function CustomTitleBar() {
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    const overlay = (navigator as any).windowControlsOverlay;

    if (overlay) {
      setOverlayVisible(overlay.visible);

      const handleGeometryChange = () => {
        setOverlayVisible(overlay.visible);
      };

      overlay.addEventListener("geometrychange", handleGeometryChange);
      return () =>
        overlay.removeEventListener("geometrychange", handleGeometryChange);
    }
  }, []);

  return (
    <div className="customTitleBar fixed top-0 left-0 right-0 flex items-center justify-between px-4 z-50 text-sm font-semibold backdrop-blur bg-white/80 dark:bg-zinc-900/80">
      {overlayVisible && (
        <div className="text-zinc-600 dark:text-zinc-300 text-xs"></div>
      )}
    </div>
  );
}
