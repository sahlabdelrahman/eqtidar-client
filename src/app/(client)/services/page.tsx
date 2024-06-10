import Main from "@/components/client/Services/Main";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

export const metadata = {
    title: {
        default: "خدماتنا",
        template: `%s | خدماتنا`,
    },
};

export default async function Services() {
    const services = await getData({
        url: APIUrlsConstants.service,
    });

    return (
        <>
            <Main data={services} />
        </>
    );
}
