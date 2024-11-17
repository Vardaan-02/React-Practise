"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffect() {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get("https://catfact.ninja/fact");
      const result = response.data.fact;
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, [fetch]);

  return (
    <>
      <div className="px-24 py-8 flex gap-8 justify-center items-center">
        <Button
          variant={"default"}
          onClick={() => {
            setFetch((fetch) => !fetch);
          }}
        >
          Fetch Data
        </Button>
        {loading ? "Loading ..." : data}
      </div>
    </>
  );
}
