import axios from "axios";
import toast from "react-toastify";

const baseURL =
    process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:8000/api";
const headers = { "Content-Type": "application/json" };

const APIConfig = axios.create({
    baseURL,
    headers,
});

const onResponse = (response: any) => {
    return response;
};

const onResponseError = (error: any) => {
    // toast.error();
    console.log("Error from axios response interceptor => ", error);
    console.log(
        "Error message from axios response interceptor => ",
        error?.message
    );
};

APIConfig.interceptors.response.use(onResponse, onResponseError);

export default APIConfig;
