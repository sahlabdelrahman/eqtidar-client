import TeamMember from "@/components/client/TeamMember";

export const metadata = {
    title: {
        default: "فريقنا",
        template: `%s | فريقنا`,
    },
};

export default function Blog({
    params: { slug },
}: {
    params: { slug: string };
}) {
    return (
        <>
            <TeamMember />
        </>
    );
}
