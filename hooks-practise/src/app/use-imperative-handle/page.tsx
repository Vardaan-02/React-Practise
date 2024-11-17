"use client";

import { Button } from "@/components/ui/button";
import Counter from "./Counter";
import { useRef } from "react";

type CounterRef = {
  reset: () => void;
};

export default function UseImperativeHandle() {
  const ref1 = useRef<CounterRef>(null);
  const ref2 = useRef<CounterRef>(null);

  return (
    <div className="flex flex-col gap-12 px-24 py-12">
      <div className="flex flex-col gap-2">
        <Button className="w-24" onClick={ref1.current?.reset}>
          Reset
        </Button>
        <Counter ref={ref1} />
      </div>
      <div className="flex flex-col gap-2">
        <Button className="w-24" onClick={ref2.current?.reset}>
          Reset
        </Button>
        <Counter ref={ref2} />
      </div>
    </div>
  );
}
