import Main from "@/components/client/Dashboard/Goals";

export const metadata = {
    title: {
        default: "الأهداف",
        template: `%s | الأهداف`,
    },
};

export default function Goals() {
    return (
        <>
            <Main />
        </>
    );
}
