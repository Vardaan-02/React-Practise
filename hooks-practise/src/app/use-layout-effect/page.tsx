"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function LayoutEffectDemo() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState(false);
  const [state, setState] = useState(false);

  const now = performance.now();
  while (performance.now() - now < 500);

  //   useLayoutEffect(() => {
  //     if (state != color) setState((state) => !state);
  //   }, [state, color]);

  useEffect(() => {
    if (state != color) setState((state) => !state);
  }, [state, color]);

  return (
    <div className="p-4 flex flex-col gap-8">
      <Button onClick={() => setColor((color) => !color)} className="w-48">
        Toggle
      </Button>
      <div
        ref={boxRef}
        className={`w-96 h-24 rounded-lg flex justify-center items-center ${
          color ? "bg-green-300" : "bg-blue-300"
        }`}
      >
        Resize and toggle hook
      </div>
      <div>{state ? "green" : "blue"}</div>
    </div>
  );
}

// useEffect is async. Meanwhile useLayoutEffect is synchronous by nature.
