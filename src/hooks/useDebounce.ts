import { useEffect, useRef } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [func, delay]);

  const action = (...args: Parameters<T>) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => func(...args), delay);
  };

  return action;
};

export default useDebounce;
