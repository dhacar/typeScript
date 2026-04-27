import { useState, useEffect } from "react";

export function useNumberStorage(
  key: string,
  initialValue: number
) {
  const [value, setValue] = useState<number>(() => {
    const stored = localStorage.getItem(key);
    return stored ? Number(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value.toString());
  }, [key, value]);

  return [value, setValue] as const;
}

