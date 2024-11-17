"use client";

import { Button } from "@/components/ui/button";
import { memo, useCallback, useState } from "react";

export default function UseCallback() {
  const fxn1 = useCallback(() => {
    return Array(5)
      .fill(0)
      .map((_, index) => index + 1);
  }, []);

  const [count, setCount] = useState<number>(0);

  return (
    <div className="px-24 py-12">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setCount((state) => state - 1);
          }}
        >
          Decrement
        </Button>
        <Button>{count}</Button>
        <Button
          onClick={() => {
            setCount((state) => state + 1);
          }}
        >
          Increment
        </Button>
      </div>
      <Component fxn1={fxn1} />
    </div>
  );
}

const Component = memo(({ fxn1 }: { fxn1: () => Array<number> }) => {
  const arr = fxn1();

  console.log("Component Reload");

  return (
    <div className="flex flex-col w-24 gap-4 mt-12">
      {arr.map((item) => {
        return (
          <Button variant={"outline"} key={item}>
            {item}
          </Button>
        );
      })}
    </div>
  );
});

Component.displayName = "Component";


// UseCallback is often paired with memo to avoid re-renders;
// memo stops a component from re-rendering if the props are same;
// and useCallback makes sure that those props remain same;

// A major mistake can occur if there are dependencies in useCallback, as it may result in the wrong function being called when a new function should have been created;