import { backendBaseURL } from "@/utils/config";

export const getData = async ({ url }: { url: string }) => {
    try {
        const res = await fetch(`${backendBaseURL}/${url}`);
        return await res.json().then((data) => data.data);
    } catch (error) {
        console.log("error ", error);
    }
};
