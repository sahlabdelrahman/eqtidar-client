// TODO: Request send even that hasMore is false "Check network tag when scrolling"
import { useEffect, useState, useRef } from "react";

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

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { items: newItems, hasNextPage } = await fetchItems(page);
                if (!hasNextPage) {
                    setHasMore(false);
                }
                setItems((prevItems) => [...prevItems, ...newItems]);
                setPage((prevPage) => prevPage + 1);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        const handleScroll = () => {
            if (bottomBoundaryRef.current) {
                const { top } =
                    bottomBoundaryRef.current.getBoundingClientRect();
                if (top <= window.innerHeight && hasMore && !isLoading) {
                    fetchData();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [fetchItems, page, hasMore, isLoading]);

    return { items, isLoading, hasMore, bottomBoundaryRef };
};

export default useInfiniteScroll;
