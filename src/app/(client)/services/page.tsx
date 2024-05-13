import Main from "@/components/client/Services/Main";

import servicesConfig from "@/components/client/Home/Services/config";

export const metadata = {
    title: {
        default: "خدماتنا",
        template: `%s | خدماتنا`,
    },
};

const { data } = servicesConfig;

export default function Services() {
    return (
        <>
            <Main data={data} />
        </>
    );
}
