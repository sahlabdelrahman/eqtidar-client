import { useEffect, useState, useRef, useCallback } from "react";

interface InfiniteScrollConfig<T> {
    initialItems: T[];
    fetchItems: (page: number) => Promise<{ items: T[]; hasNextPage: boolean }>;
    initialPage?: number;
}

interface InfiniteScrollState<T> {
    items: T[];
    isLoading: boolean;
    hasMore: boolean;
    bottomBoundaryRef: any;
}

const useInfiniteScroll = <T>({
    initialItems,
    fetchItems,
    initialPage = 1,
}: InfiniteScrollConfig<T>): InfiniteScrollState<T> => {
    const [items, setItems] = useState<T[]>(initialItems);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(initialPage);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const bottomBoundaryRef = useRef<HTMLDivElement>(null);

    // Fetch data function memoized with useCallback
    const fetchData = useCallback(async () => {
        if (isLoading || !hasMore) return; // Prevent fetching if already loading or no more items
        setIsLoading(true);
        try {
            const { items: newItems, hasNextPage } = await fetchItems(page);
            setItems((prevItems) => [...prevItems, ...newItems]);
            setPage((prevPage) => prevPage + 1);
            setHasMore(hasNextPage);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }, [fetchItems, page, hasMore, isLoading]);

    useEffect(() => {
        fetchData();
    }, [fetchData]); // Only call fetchData when dependencies change

    const handleScroll = useCallback(() => {
        if (bottomBoundaryRef.current) {
            const { top } = bottomBoundaryRef.current.getBoundingClientRect();
            if (top <= window.innerHeight && hasMore && !isLoading) {
                fetchData();
            }
        }
    }, [fetchData, hasMore, isLoading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    // Reset items when initialItems change
    useEffect(() => {
        setItems(initialItems);
    }, [initialItems]);

    return { items, isLoading, hasMore, bottomBoundaryRef };
};

export default useInfiniteScroll;
