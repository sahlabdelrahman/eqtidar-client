import Main from "@/components/client/Blogs/Main";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { BlogsProps } from "@/components/client/Blogs/Main/main";

export const metadata = {
    title: {
        default: "مدونات",
        template: `%s | مدونات`,
    },
};

export default async function Blogs() {
    const blogs: BlogsProps = await getData({
        url: `${APIUrlsConstants.blog}?page=0&size=30`,
    });
    return (
        <>
            <Main data={blogs} />
        </>
    );
}
