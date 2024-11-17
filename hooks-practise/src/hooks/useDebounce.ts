import { useEffect, useState } from "react";

const useDebounce = (
  value: string,
  delay: number = 500,
  enabled: boolean = true
) => {
  const [debounceValue, setDebounceValue] = useState<string>("");

  useEffect(() => {
    if (!enabled) return;
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(id);
  });

  return debounceValue;
};

export default useDebounce;
