import OurTeamComp from "@/components/client/OurTeam";

export const metadata = {
    title: {
        default: "فريقنا",
        template: `%s | فريقنا`,
    },
};

export default function OurTeam({
    params: { slug },
}: {
    params: { slug: string };
}) {
    return (
        <>
            <OurTeamComp />
        </>
    );
}
