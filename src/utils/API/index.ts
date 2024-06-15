import axios from "axios";
import { toast } from "react-toastify";

import { backendBaseURL } from "../config";

const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
};

const APIConfig = axios.create({
    baseURL: backendBaseURL,
    headers,
    timeout: 40000,
});

APIConfig.defaults.withCredentials = true;

const onResponse = (response: any) => {
    return response;
};

const onResponseError = async (error: any) => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
        // Make a request to the API route that clears cookies
        try {
            await axios.get("/api/clear-cookie");
            window.location.reload(); // Reload the page to apply changes
        } catch (clearError) {
            console.error("Failed to clear cookies", clearError);
        }
    }

    toast.error(error?.response?.data?.message || error?.message, {
        rtl: false,
    });
};

APIConfig.interceptors.response.use(onResponse, onResponseError);

export default APIConfig;
