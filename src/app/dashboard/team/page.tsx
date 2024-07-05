import Main from "@/components/client/Dashboard/OurTeam";

export const metadata = {
    title: {
        default: "الفريق",
        template: `%s | الفريق`,
    },
};

export default async function OurTeam() {
    return (
        <>
            <Main />
        </>
    );
}
