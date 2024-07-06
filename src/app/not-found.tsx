import type { Metadata } from "next";

import Header from "@/components/client/global/Header";
import Image from "next/image";
import Footer from "@/components/client/global/Footer";

import LogoWithSlogan from "@/components/Images/logoWithSlogan.png";

import { getData } from "@/services/index.service";
import { APIUrlsConstants } from "@/utils/API/constants";

import { InfoProps } from "@/components/client/Home/Main/info";

import styles from "@/styles/not-found.module.scss";

export const metadata: Metadata = {
    title: {
        default: "الصفحة غير متوفرة",
        template: `%s | الصفحة غير متوفرة`,
    },
};

export default async function NotFound() {
    const info: InfoProps = await getData({ url: APIUrlsConstants.info });

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.container}>
                    <Image
                        src={LogoWithSlogan}
                        alt="Logo loader"
                        className={styles.logoImage}
                    />
                    <p className={styles.text}>عذرا، الصفحة غير متوفرة</p>
                </section>
            </main>
            <Footer
                data={{
                    contact: info.contact,
                    socialMedia: info.socialMedia,
                    profileFile: info.profileFile,
                    whoWeAre: info.whoWeAre,
                }}
            />
        </>
    );
}
