import { useState, useEffect, useRef } from "react";
import APIConfig from "@/utils/API/index";

interface APIParams {
    method?: string;
    url: string;
    params?: any;
    headers?: Record<string, string>;
    data?: Record<string, any>;
}

interface ApiResponse {
    data: any;
}

interface ApiError {
    message: string;
}

export default function useAPI(APIParams: APIParams) {
    const [response, setResponse] = useState<ApiResponse | undefined>(
        undefined
    );
    const [error, setError] = useState<ApiError | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const controllerRef = useRef<AbortController>(new AbortController());

    const cancelRequest = () => {
        controllerRef.current.abort();
    };

    const apiRequest = async (params: APIParams) => {
        try {
            const result = await APIConfig.request({
                ...params,
            });

            setResponse(result.data);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        apiRequest(APIParams);

        return () => {
            cancelRequest();
        };
    }, []);

    return { response, error, loading, cancelRequest, apiRequest };
}
