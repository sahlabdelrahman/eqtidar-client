import APIConfig from "@/utils/API";
import { APIUrlsConstants } from "@/utils/API/constants";

const get = async () => {
    return await APIConfig.get(APIUrlsConstants.project);
};

const ProjectService = {
    get,
};

export default ProjectService;
