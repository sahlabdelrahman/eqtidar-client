import Main from "@/components/client/Dashboard/Clients";

export const metadata = {
    title: {
        default: "العملاء",
        template: `%s | العملاء`,
    },
};

export default function Goals() {
    return (
        <>
            <Main />
        </>
    );
}
