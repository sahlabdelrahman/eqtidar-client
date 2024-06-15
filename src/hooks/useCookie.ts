import { useCookies } from "next-client-cookies";

const useCookie = () => {
    const cookies = useCookies();

    const getCookie = (key: string) => cookies.get(key);

    const setCookie = (key: string, value: string, options: any) =>
        cookies.set(key, value, options);

    const removeCookie = (key: string) => cookies.remove(key);

    return { getCookie, setCookie, removeCookie };
};

export default useCookie;
