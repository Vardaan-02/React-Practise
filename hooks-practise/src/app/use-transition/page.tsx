"use client";

import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import Page2 from "./page2";
import { IconLoader } from "@tabler/icons-react";

export default function UseTransition() {
  const [tab, setTab] = useState<string>("1");
  const [isPending, startTransition] = useTransition();

  const fxn = (tab: string) => {
    startTransition(() => setTab(tab));
  };

  return (
    <div className="flex flex-col gap-12 px-24 py-12">
      <div className="flex gap-4">
        <Button
          onClick={() => fxn("1")}
          variant={`${tab === "1" ? "default" : "ghost"}`}
        >
          post
        </Button>
        <Button
          onClick={() => fxn("2")}
          variant={`${tab === "2" ? "default" : "ghost"}`}
        >
          name
        </Button>
        <Button
          onClick={() => fxn("3")}
          variant={`${tab === "3" ? "default" : "ghost"}`}
        >
          system
        </Button>
      </div>
      <div>
        {isPending && <IconLoader />}
        {tab === "1" && <Page2 />}
        {tab === "2" && <div>Vardaan</div>}
        {tab === "3" && <div>System</div>}
      </div>
    </div>
  );
}
