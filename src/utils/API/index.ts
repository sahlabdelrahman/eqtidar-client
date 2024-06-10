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

const onResponse = (response: any) => {
    return response;
};

const onResponseError = (error: any) => {
    toast.error(error?.response?.data?.message || error?.message, {
        rtl: false,
    });
};

APIConfig.interceptors.response.use(onResponse, onResponseError);

export default APIConfig;
