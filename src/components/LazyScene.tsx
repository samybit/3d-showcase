// src/components/LazyScene.tsx
"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function LazyScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // margin: "200px" means it will start loading slightly before it enters the screen
  // so the user doesn't see the loading spinner if they scroll normally.
  const isInView = useInView(ref, { margin: "200px 0px" });

  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center">
      {isInView ? (
        children
      ) : (
        <div className="flex flex-col items-center gap-4 opacity-50">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <span className="text-sm tracking-widest uppercase">Suspending GPU Context</span>
        </div>
      )}
    </div>
  );
}