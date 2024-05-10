import BlogComponent from "@/components/client/Blog";

export const metadata = {
    title: {
        default: "مدونة",
        template: `%s | مدونة`,
    },
};

export default function Blog({
    params: { slug },
}: {
    params: { slug: string };
}) {
    return (
        <>
            <BlogComponent />
        </>
    );
}
