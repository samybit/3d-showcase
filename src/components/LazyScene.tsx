"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function LazyScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // 500px gives the browser much more time to load the 
  // shaders before you see them, and keeps them alive slightly longer when scrolling past.
  const isInView = useInView(ref, { margin: "500px 0px" });

  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center">
      {/* By returning null instead of a spinner, we guarantee 
          the DOM node is completely purged, forcing the GPU to drop the memory. */}
      {isInView ? children : null}
    </div>
  );
}