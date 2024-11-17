"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReducer, useState } from "react";

interface Action {
  type: "incrementBy1" | "decrementBy1" | "increment" | "decrement";
  payload?: number;
}

function reducer(state: number, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case "incrementBy1":
      return state + 1;
    case "decrementBy1":
      return state - 1;
    case "increment":
      return state + (payload ?? 0);
    case "decrement":
      return state - (payload ?? 0);
    default:
      return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [value, setValue] = useState<string>("");

  const handleDispatch = (type: "increment" | "decrement") => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(parseInt(value, 10))) {
      dispatch({ type, payload: numericValue });
    }
  };

  return (
    <div className="flex flex-col gap-12 px-24 py-12">
      <div className="flex gap-4">
        <Button onClick={() => dispatch({ type: "decrementBy1" })}>
          Decrement By 1
        </Button>
        <div className="p-2">{state}</div>
        <Button onClick={() => dispatch({ type: "incrementBy1" })}>
          Increment By 1
        </Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={() => handleDispatch("decrement")}>Decrement</Button>
        <Input
          id="use-reducer"
          placeholder="Value"
          type="text"
          className="h-8 w-[100px]"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <Button onClick={() => handleDispatch("increment")}>Increment</Button>
      </div>
    </div>
  );
}
