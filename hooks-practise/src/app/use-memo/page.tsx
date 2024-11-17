"use client";

import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);

  const initialItems = () => {
    return Array(29999999)
      .fill(0)
      .map((_, i) => {
        return {
          id: i,
          isSelected: i === 29999998,
        };
      });
  };

  // const items = initialItems(); // Worst

  // const items = useMemo(() => {
  //   return initialItems(); // Better
  // },[]);

  const [items] = useState(initialItems);  // Best

  const selectedItem = useMemo(() => {
    console.log("Hello");
    return items.find((item) => item.isSelected);
  }, [items]);

  return (
    <>
      <div>
        <Button
          variant={"default"}
          onClick={() => setCount((state) => state - 1)}
        >
          Decrement
        </Button>
        <h1>{count}</h1>
        <Button
          variant={"default"}
          onClick={() => setCount((state) => state + 1)}
        >
          Increment
        </Button>
      </div>
      {selectedItem?.id}
    </>
  );
}


// useMemo is like storing value of the function. It does not calls the function again if no parameters in the function are changed;