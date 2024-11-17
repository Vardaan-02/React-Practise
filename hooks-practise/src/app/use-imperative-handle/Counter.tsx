"use client";

import { Button } from "@/components/ui/button";
import { useState, forwardRef, Ref, useImperativeHandle } from "react";

type CounterRef = {
  reset: () => void;
};

function Counter(_: unknown, ref: Ref<CounterRef>) {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter((state) => state + 1);
  };

  const decrement = () => {
    setCounter((state) => state - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div className="flex gap-4">
      <Button onClick={decrement}>Decrement</Button>
      <div className="p-2">{counter}</div>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default forwardRef(Counter);
