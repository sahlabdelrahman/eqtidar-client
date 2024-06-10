import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const get = async () => {
    return await APIConfig.get(APIUrlsConstants.info);
};

const InfoService = {
    get,
};

export default InfoService;
