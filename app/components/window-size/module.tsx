"use client";
import { useEffect, useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState<{} | { width: number; height: number }>({});

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <span className="absolute bottom-3 left-3 bg-neutral-900 text-white font-bold">
      {JSON.stringify(size)}
    </span>
  );
}
