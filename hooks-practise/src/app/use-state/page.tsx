"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const expensiveCalculation = () => {
  console.log("Running expensive computation...");
  return Array.from({ length: 10000 }, (_, index) => index + 1);
};

export default function UseState() {
  var countVariable = 0;

  const [countState, setCountState] = useState(0);

  const [data, setData] = useState(() => {
    return expensiveCalculation();
  });

  return (
    <div className="px-24 py-8">
      <div>
        <Button
          variant={"default"}
          onClick={() => setCountState((state) => state - 1)}
        >
          Decrement
        </Button>
        <Button variant={"ghost"}>{countState}</Button>
        <Button
          variant={"default"}
          onClick={() => setCountState((state) => state + 1)}
        >
          Increment
        </Button>
      </div>
      <br />
      <div>
        <Button
          variant={"default"}
          onClick={() => {
            countVariable--;
            console.log(countVariable);
          }}
        >
          Decrement
        </Button>
        <Button variant={"ghost"}>{countVariable}</Button>
        <Button
          variant={"default"}
          onClick={() => {
            countVariable++;
            console.log(countVariable);
          }}
        >
          Increment
        </Button>
      </div>
      <br />
      <div>{data.slice(0, 10).join(", ")}</div>
      <br />
    </div>
  );
}

// Expensive calculation can not return a promise if it is a promise then font use lazy initialization. Use useEffect is case of a Promise return type
