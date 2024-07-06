import type { Metadata } from "next";

import Header from "@/components/client/global/Header";
import Footer from "@/components/client/global/Footer";
import Controls from "@/components/client/global/Controls";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { InfoProps } from "@/components/client/Home/Main/info";

export const metadata: Metadata = {
    title: {
        default: "اقتدار",
        template: `%s | اقتدار`,
    },
};

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const info: InfoProps = await getData({ url: APIUrlsConstants.info });
    return (
        <>
            <Header />
            {children}
            <Footer
                data={{
                    contact: info?.contact,
                    socialMedia: info?.socialMedia,
                    profileFile: info?.profileFile,
                    whoWeAre: info?.whoWeAre,
                }}
            />
            <Controls data={{ whatsapp: info?.contact?.whatsapp }} />
        </>
    );
}
