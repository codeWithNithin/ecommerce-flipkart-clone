import { useEffect, useState } from "react";

const useDebounce = (cb, delay) => {
  const [debounceVal, setDebounceVal] = useState(cb);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(cb);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [cb, delay, debounceVal]);

  return debounceVal;
};

export default useDebounce;
