"use client";

import { Input } from "@/components/ui/input";
import { LabelInputContainer } from "@/components/ui/label";
import useDebounce from "@/hooks/useDebounce";
import { todo } from "@/lib/data";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

const list = todo.map((item) => item.title);

export default function UseEffect() {
  const [items, setItems] = useState<string[]>(list);
  const [search, setSearch] = useState<string>("");
  const debounceSearch = useDebounce(search);

  useEffect(() => {
    setItems(
      list.filter((item) => {
        return item.toLowerCase().includes(debounceSearch);
      })
    );
  }, [debounceSearch]);

  return (
    <>
      <div className="px-24 py-8 flex gap-8 justify-center items-center">
        <LabelInputContainer className="mb-4">
          <Label htmlFor="use-debounce">Email Address</Label>
          <Input
            id="use-debounce"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <ul>
            {items.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </LabelInputContainer>
      </div>
    </>
  );
}
