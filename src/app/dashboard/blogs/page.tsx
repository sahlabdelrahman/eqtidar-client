import Main from "@/components/client/Dashboard/Blogs";

export const metadata = {
    title: {
        default: "المدونات",
        template: `%s | المدونات`,
    },
};

export default async function Goals() {
    return (
        <>
            <Main />
        </>
    );
}
