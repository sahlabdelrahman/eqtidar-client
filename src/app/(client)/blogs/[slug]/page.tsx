import BlogComponent from "@/components/client/Blog";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { BlogProps } from "@/components/client/Blogs/Main/main";

export const metadata = {
    title: {
        default: "مدونة",
        template: `%s | مدونة`,
    },
};

export default async function Blog({
    params: { slug },
}: {
    params: { slug: string };
}) {
    const blog: BlogProps = await getData({
        url: `${APIUrlsConstants.blog}/${slug}`,
    });
    return (
        <>
            <BlogComponent data={blog} />
        </>
    );
}
