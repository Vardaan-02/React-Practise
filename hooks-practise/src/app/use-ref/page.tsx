"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [state, setState] = useState<number>(0);
  const ref = useRef<number>(0);

  const increment = () => {
    setState((state) => state + 1);
    ref.current++;
    console.log(state, ref.current);
  };

  const decrement = () => {
    setState((state) => state - 1);
    ref.current--;
    console.log(state, ref.current);
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (context) {
      context.fillStyle = "blue";
      context.fillRect(10, 10, 100, 100);
    }
  }, []);

  return (
    <div className="flex gap-2 py-12 px-24">
      <Button onClick={decrement}>Decrement</Button>
      <Button>{state}</Button>
      <Button>{ref.current}</Button>
      <Button onClick={increment}>Increment</Button>

      <canvas ref={canvasRef} width={500} height={500}></canvas>
    </div>
  );
}
