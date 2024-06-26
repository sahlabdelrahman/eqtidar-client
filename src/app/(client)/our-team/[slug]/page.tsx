import TeamMemberComp from "@/components/client/OurTeam/TeamMember";

export const metadata = {
    title: {
        default: "فريقنا",
        template: `%s | فريقنا`,
    },
};

export default function TeamMember({
    params: { slug },
}: {
    params: { slug: string };
}) {
    return (
        <>
            <TeamMemberComp />
        </>
    );
}
