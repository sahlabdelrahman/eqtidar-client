import Image from "next/image";

import LogoWithSlogan from "@/components/Images/logoWithSlogan.png";

import styles from "./style.module.scss";

const LogoLoader = () => {
    return (
        <section className={styles.logoLoader}>
            <Image
                src={LogoWithSlogan}
                alt="Logo loader"
                className={styles.logoImage}
            />
        </section>
    );
};

export default LogoLoader;
