import Main from "@/components/client/Blogs/Main";

export const metadata = {
    title: {
        default: "مدونات",
        template: `%s | مدونات`,
    },
};

export default function Blogs() {
    return (
        <>
            <Main />
        </>
    );
}
