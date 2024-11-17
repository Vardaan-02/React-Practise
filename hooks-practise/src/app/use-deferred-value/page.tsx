"use client";

import { Input } from "@/components/ui/input";
import { useDeferredValue, useState } from "react";
import SlowList from "./List";

export default function UseDeferredValue() {
  const [query, setQuery] = useState<string>("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div className="flex flex-col gap-12 px-24 py-12">
      <Input value={query} onChange={(e) => setQuery(e.currentTarget.value)} />
      <SlowList item={deferredQuery} />
    </div>
  );
}

// Deferred Query is same as useDebounce
