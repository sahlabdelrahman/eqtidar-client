import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

import { LoginProps } from "@/types/dashboard/auth/auth";

const login = async ({ email, password }: LoginProps) => {
    return await APIConfig.post(APIUrlsConstants.login, { email, password });
};

const logout = async () => {
    return await APIConfig.post(APIUrlsConstants.logout);
};
const AuthService = {
    login,
    logout,
};

export default AuthService;
