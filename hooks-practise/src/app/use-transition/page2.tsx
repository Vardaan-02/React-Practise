import { memo } from "react";

function SlowList() {
  const items = Array.from({ length: 250 }, (_, i) => (
    <SlowItem key={i} item={i} />
  ));

  return <ul className="items">{items}</ul>;
}

function SlowItem({ item }: { item: number }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 5);

  return <li className="item">Post : {item}</li>;
}

export default memo(SlowList);
