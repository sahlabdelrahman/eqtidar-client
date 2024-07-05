import Main from "@/components/client/Blogs/Main";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { BlogProps } from "@/components/client/Blogs/Main/main";

export const metadata = {
    title: {
        default: "مدونات",
        template: `%s | مدونات`,
    },
};

export default async function Blogs() {
    const blogs: BlogProps[] = await getData({
        url: `${APIUrlsConstants.blog}`,
    });
    return (
        <>
            <Main data={blogs} />
        </>
    );
}
