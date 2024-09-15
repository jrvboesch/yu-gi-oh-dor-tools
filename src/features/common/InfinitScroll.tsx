import React, {
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type Props<T> = {
  renderItems: (Item: T) => JSX.Element | null;
  fetchItems: (count: number) => T[];
  total: number;
};

export type InfinitScrollRef<T> = {
  onSearch: (value: string, items: T[]) => void;
};

const InfinitScroll = <T,>(
  { fetchItems, renderItems, total }: Props<T>,
  infinitScrollRef: Ref<InfinitScrollRef<T>>
) => {
  const dataRef = useRef<T[]>([]);
  const isSearchingRef = useRef<boolean>(false);
  const [dataList, setDataList] = useState<T[]>([]);

  const onSearch = (value: string, items: T[]): void => {
    if (value.length === 0) {
      setDataList(dataRef.current);
      isSearchingRef.current = false;
    } else {
      setDataList(items);
      isSearchingRef.current = true;
    }
  };

  useImperativeHandle(infinitScrollRef, () => ({
    onSearch,
  }));

  const handleScroll = useCallback(() => {
    if (
      dataRef.current.length > 0 &&
      (Math.ceil(window.innerHeight + document.documentElement.scrollTop) <
        document.documentElement.offsetHeight ||
        isSearchingRef.current ||
        dataRef.current.length >= total)
    ) {
      return;
    }

    const items = fetchItems(dataRef.current.length);
    const dataAdd = [...dataRef.current, ...items];
    dataRef.current = dataAdd;
    setDataList(dataAdd);
  }, [fetchItems, total]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const Items = dataList.map(renderItems);
  return <>{Items}</>;
};
export default forwardRef(InfinitScroll) as <T>(
  props: Props<T> & { ref?: Ref<InfinitScrollRef<T>> }
) => ReturnType<typeof InfinitScroll>;
