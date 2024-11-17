import { memo } from "react";

function SlowList({ item }: { item: string }) {
  const items = Array.from({ length: 250 }, (_, i) => (
    <SlowItem key={i} item={item} />
  ));

  return <ul className="items">{items}</ul>;
}

function SlowItem({ item }: { item: string }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1);

  return <li className="item">{item}</li>;
}

export default memo(SlowList);
