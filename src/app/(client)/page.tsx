import Main from "@/components/client/Home/Main";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { InfoProps } from "@/components/client/Home/Main/info";

export default async function Home() {
    const info: InfoProps = await getData({ url: APIUrlsConstants.info });

    return (
        <>
            <Main info={info} />
        </>
    );
}
